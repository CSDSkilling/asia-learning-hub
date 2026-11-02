'use strict';

// Minimal MCP (Model Context Protocol) server over Streamable HTTP, stateless.
// It exposes the existing banking API as agent tools and reuses the same handlers as the REST API.
// Copilot Studio agents (GitHub Copilot harness) connect to POST /mcp.

const crypto = require('crypto');
const bankingApi = require('../api/bankingApi');

const SERVER_INFO = { name: 'contoso-bank', title: 'Contoso Bank (classroom demo)', version: '1.0.0' };
const SUPPORTED_PROTOCOL_VERSIONS = ['2025-11-25', '2025-06-18', '2025-03-26', '2024-11-05'];
const SERVER_INSTRUCTIONS = 'Contoso Bank classroom demo with mock data. Money-moving tools need confirmed=true, which must only be set after the customer explicitly confirms a summary.';

// Runs an existing Express-style handler without HTTP and returns { status, body }.
function callApi(handler, { method = 'GET', query = {}, body = {} } = {}) {
  return new Promise((resolve) => {
    const res = {
      statusCode: 200,
      status(code) { this.statusCode = code; return this; },
      json(payload) { resolve({ status: this.statusCode, body: payload }); },
    };
    handler({ method, query, body }, res);
  });
}

function fail(status, error, message) {
  return { status, body: { success: false, error, message } };
}

const isConfirmed = (value) => value === true || (typeof value === 'string' && value.trim().toLowerCase() === 'true');

function requireConfirmation(args, action) {
  if (isConfirmed(args.confirmed)) return null;
  return fail(400, 'CONFIRMATION_REQUIRED',
    `Nothing was done. Show the customer a summary of the ${action}, ask for an explicit yes, and only then call this tool again with confirmed=true.`);
}

const ACCOUNT_ID = { type: 'string', description: 'The signed-in customer\'s account number, for example ACC001. Use the accountId returned by demo_login.' };
const CONFIRMED = { type: 'boolean', description: 'Set to true only after the customer explicitly said yes to a summary of this exact action. Otherwise do not call this tool.' };

const TOOLS = [
  {
    name: 'demo_login',
    description: 'Signs a customer in to the Contoso Bank demo with a demo user ID (USER001, USER002 or USER003). Returns the customer\'s name, account number (accountId) and currency. This is not real authentication. Call this first, and again whenever the customer wants to switch user.',
    inputSchema: {
      type: 'object',
      properties: { userId: { type: 'string', description: 'Demo user ID: USER001, USER002 or USER003. Not case-sensitive.' } },
      required: ['userId'],
    },
    annotations: { readOnlyHint: true },
    run: (args) => callApi(bankingApi.demoLogin, { query: { userId: args.userId } }),
  },
  {
    name: 'get_balance',
    description: 'Returns the current balance of the customer\'s account, with the account holder\'s name and currency. Use when the customer asks how much money they have.',
    inputSchema: { type: 'object', properties: { accountId: ACCOUNT_ID }, required: ['accountId'] },
    annotations: { readOnlyHint: true },
    run: (args) => callApi(bankingApi.getBalance, { query: { accountId: args.accountId } }),
  },
  {
    name: 'check_funds',
    description: 'Checks whether the account has enough money for an amount. Returns hasEnoughFunds, availableBalance, currency and any shortfall. Always call this before a transfer, a bill payment or a voucher purchase, and stop if hasEnoughFunds is false. It never changes the balance.',
    inputSchema: {
      type: 'object',
      properties: {
        accountId: ACCOUNT_ID,
        amount: { type: 'number', description: 'The amount the customer wants to spend, for example 50 or 85.5.' },
      },
      required: ['accountId', 'amount'],
    },
    annotations: { readOnlyHint: true },
    run: async (args) => {
      const needed = Number(args.amount);
      if (!args.accountId || args.amount === undefined || args.amount === null || args.amount === '' || Number.isNaN(needed) || needed < 0) {
        return fail(400, 'BAD_REQUEST', 'accountId and a non-negative amount are required.');
      }
      const result = await callApi(bankingApi.getBalance, { query: { accountId: args.accountId } });
      if (result.status !== 200) return result;
      const available = result.body.balance;
      const hasEnoughFunds = available >= needed;
      return {
        status: 200,
        body: {
          success: true,
          accountId: result.body.accountId,
          requiredAmount: needed,
          availableBalance: available,
          currency: result.body.currency,
          hasEnoughFunds,
          shortfall: hasEnoughFunds ? 0 : +(needed - available).toFixed(2),
        },
      };
    },
  },
  {
    name: 'list_saved_accounts',
    description: 'Lists the customer\'s saved accounts: the accounts they can send money to. A transfer is allowed only to an account in this list.',
    inputSchema: { type: 'object', properties: { accountId: ACCOUNT_ID }, required: ['accountId'] },
    annotations: { readOnlyHint: true },
    run: (args) => callApi(bankingApi.getSavedAccounts, { query: { accountId: args.accountId } }),
  },
  {
    name: 'list_transactions',
    description: 'Lists the most recent transactions on the account, newest first.',
    inputSchema: {
      type: 'object',
      properties: {
        accountId: ACCOUNT_ID,
        limit: { type: 'number', description: 'How many transactions to return. Defaults to 10.' },
      },
      required: ['accountId'],
    },
    annotations: { readOnlyHint: true },
    run: (args) => callApi(bankingApi.getTransactions, { query: { accountId: args.accountId, limit: String(args.limit || 10) } }),
  },
  {
    name: 'transfer_money',
    description: 'Moves money from the customer\'s account to one of their saved accounts. This changes balances. Before calling: use list_saved_accounts, use check_funds, show a summary, and get an explicit yes. Returns the transaction ID and the new balance.',
    inputSchema: {
      type: 'object',
      properties: {
        fromAccountId: { type: 'string', description: 'The signed-in customer\'s account number.' },
        toAccountId: { type: 'string', description: 'The recipient account number. Must come from list_saved_accounts.' },
        amount: { type: 'number', description: 'The amount to send, greater than 0.' },
        note: { type: 'string', description: 'Optional short note for the transfer.' },
        confirmed: CONFIRMED,
      },
      required: ['fromAccountId', 'toAccountId', 'amount', 'confirmed'],
    },
    annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: false },
    run: (args) => requireConfirmation(args, 'transfer')
      || callApi(bankingApi.transfer, { method: 'POST', body: { fromAccountId: args.fromAccountId, toAccountId: args.toAccountId, amount: args.amount, note: args.note } }),
  },
  {
    name: 'list_bills',
    description: 'Lists the customer\'s outstanding bills with the biller name, due date and amount. The amount is set by the bank and can\'t be changed.',
    inputSchema: { type: 'object', properties: { accountId: ACCOUNT_ID }, required: ['accountId'] },
    annotations: { readOnlyHint: true },
    run: (args) => callApi(bankingApi.getOutstandingBills, { query: { accountId: args.accountId } }),
  },
  {
    name: 'pay_bill',
    description: 'Pays one outstanding bill in full from the customer\'s account. This changes the balance. Before calling: use list_bills, use check_funds with the bill\'s amount, show a summary, and get an explicit yes. Returns the transaction ID and the new balance.',
    inputSchema: {
      type: 'object',
      properties: {
        accountId: ACCOUNT_ID,
        billId: { type: 'string', description: 'The bill ID from list_bills, for example BILL-1001.' },
        confirmed: CONFIRMED,
      },
      required: ['accountId', 'billId', 'confirmed'],
    },
    annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: false },
    run: (args) => requireConfirmation(args, 'bill payment')
      || callApi(bankingApi.payBill, { method: 'POST', body: { accountId: args.accountId, billId: args.billId } }),
  },
  {
    name: 'list_vouchers',
    description: 'Lists the vouchers the customer can buy: the voucher types and the amounts available for each. Only these types and amounts can be bought.',
    inputSchema: { type: 'object', properties: {} },
    annotations: { readOnlyHint: true },
    run: () => callApi(bankingApi.listVouchers),
  },
  {
    name: 'purchase_voucher',
    description: 'Buys a voucher from the customer\'s account. This changes the balance. Before calling: use list_vouchers, use check_funds, show a summary, and get an explicit yes. Returns the voucher code, expiry date and the new balance.',
    inputSchema: {
      type: 'object',
      properties: {
        accountId: ACCOUNT_ID,
        voucherType: { type: 'string', description: 'The voucher type from list_vouchers, for example GIFT_CARD or GROCERY.' },
        amount: { type: 'number', description: 'One of the amounts listed for that voucher type.' },
        confirmed: CONFIRMED,
      },
      required: ['accountId', 'voucherType', 'amount', 'confirmed'],
    },
    annotations: { readOnlyHint: false, destructiveHint: true, idempotentHint: false },
    run: (args) => requireConfirmation(args, 'voucher purchase')
      || callApi(bankingApi.purchaseVoucher, { method: 'POST', body: { accountId: args.accountId, voucherType: args.voucherType, amount: args.amount } }),
  },
];

const TOOLS_BY_NAME = new Map(TOOLS.map((tool) => [tool.name, tool]));

function rpcResult(id, result) {
  return { jsonrpc: '2.0', id, result };
}

function rpcError(id, code, message) {
  return { jsonrpc: '2.0', id: id === undefined ? null : id, error: { code, message } };
}

async function callTool(params) {
  const tool = TOOLS_BY_NAME.get(params && params.name);
  if (!tool) return null;
  let outcome;
  try {
    outcome = await tool.run((params && params.arguments) || {});
  } catch (err) {
    console.error(`MCP tool ${tool.name} failed`, err);
    outcome = fail(500, 'INTERNAL_SERVER_ERROR', 'Something went wrong.');
  }
  return {
    content: [{ type: 'text', text: JSON.stringify(outcome.body) }],
    isError: outcome.status < 200 || outcome.status >= 300,
  };
}

// Returns a JSON-RPC response, or null for notifications and responses (which need no reply).
async function handleMessage(message) {
  if (!message || typeof message !== 'object' || message.jsonrpc !== '2.0') {
    return rpcError(message && message.id, -32600, 'Invalid Request');
  }
  const { id, method, params } = message;
  if (typeof method !== 'string') return null;
  const isNotification = id === undefined || id === null;

  switch (method) {
    case 'initialize': {
      const requested = params && params.protocolVersion;
      return rpcResult(id, {
        protocolVersion: SUPPORTED_PROTOCOL_VERSIONS.includes(requested) ? requested : SUPPORTED_PROTOCOL_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: SERVER_INSTRUCTIONS,
      });
    }
    case 'ping':
      return rpcResult(id, {});
    case 'tools/list':
      return rpcResult(id, {
        tools: TOOLS.map(({ name, description, inputSchema, annotations }) => ({ name, description, inputSchema, annotations })),
      });
    case 'tools/call': {
      const result = await callTool(params);
      return result ? rpcResult(id, result) : rpcError(id, -32602, `Unknown tool: ${params && params.name}`);
    }
    default:
      return isNotification ? null : rpcError(id, -32601, `Method not found: ${method}`);
  }
}

function keyMatches(provided, expected) {
  const a = Buffer.from(String(provided));
  const b = Buffer.from(String(expected));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

async function handleMcpRequest(req, res) {
  // Optional protection: set the MCP_API_KEY app setting to require an x-api-key header.
  if (process.env.MCP_API_KEY && !keyMatches(req.get('x-api-key') || '', process.env.MCP_API_KEY)) {
    return res.status(401).json(rpcError(null, -32001, 'Unauthorized: missing or invalid x-api-key header.'));
  }
  const body = req.body;
  if (!body || typeof body !== 'object' || (Array.isArray(body) && body.length === 0)) {
    return res.status(400).json(rpcError(null, -32600, 'Invalid Request: send a JSON-RPC 2.0 message with Content-Type application/json.'));
  }
  const isBatch = Array.isArray(body);
  const responses = [];
  for (const message of isBatch ? body : [body]) {
    const response = await handleMessage(message);
    if (response) responses.push(response);
  }
  if (responses.length === 0) return res.status(202).end();
  return res.json(isBatch ? responses : responses[0]);
}

function rejectOtherMethods(req, res) {
  res.set('Allow', 'POST');
  res.status(405).json(rpcError(null, -32000, 'Method not allowed. This server uses POST only.'));
}

module.exports = { handleMcpRequest, rejectOtherMethods, TOOLS };
