# Module 3 — Connect the bank tools

[← Previous: Create the agent](./02-create-agent.md) · [Lab home](../README.md) · **Module 3 of 7** · [Next: Sign in and check balances →](./04-sign-in-and-balance.md)

| | |
| --- | --- |
| **Time** | 20 minutes |
| **You will** | Add the bank's MCP server to your agent as a tool, check the tools it offers, and watch the agent use one in the activity trace |
| **You need** | The **MCP URL** from [Module 1, Step 6](./01-deploy-backend.md#step-6--get-your-urls-and-check-the-api-and-the-mcp-endpoint), and the agent from Module 2 |

## What is an MCP server?

The **Model Context Protocol (MCP)** is a standard way for an agent to discover and use tools. An **MCP server** publishes a list of tools. Each tool has a name, a description, and the inputs it needs. When you add the server to your agent, the agent can use every tool on that list ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-mcp-server)).

The Contoso Bank app from Module 1 already contains an MCP server at `/mcp`. It exposes the same banking functions as the REST API, as these ten tools:

| Tool | What it does | Changes a balance? |
| --- | --- | --- |
| `demo_login` | Signs in with a demo user ID, and returns the name and account number | No |
| `get_balance` | Returns the current balance | No |
| `check_funds` | Checks whether the account has enough money for an amount | No |
| `list_saved_accounts` | Lists the accounts the customer can send money to | No |
| `list_transactions` | Lists recent transactions | No |
| `list_bills` | Lists outstanding bills | No |
| `list_vouchers` | Lists the vouchers that can be bought | No |
| `transfer_money` | Sends money to a saved account | **Yes** |
| `pay_bill` | Pays one outstanding bill | **Yes** |
| `purchase_voucher` | Buys a voucher | **Yes** |

The three tools that change a balance each need `confirmed=true`. If the agent calls one without it, the tool does nothing and answers `CONFIRMATION_REQUIRED`. That's a safety net, in addition to the confirmation step in your instructions.

> [!NOTE]
> `check_funds` is the reusable balance check. Transfers, bill payments, and voucher purchases all call it first, so the "enough money?" rule lives in one place.

## Step 1 — Add the MCP server

1. Open your agent, and select the **Build** tab.
2. In the components panel on the right, select **Tools**.
3. In the **Add a tool** dialog, select **Add** next to the search bar, and then select **Model Context Protocol (MCP)**.
4. On the **Add MCP server** page, enter:

   | Field | Value |
   | --- | --- |
   | **Name** | `Contoso Bank` |
   | **Description** | `Contoso Bank demo banking tools. Sign in with a demo user ID, check balances and funds, list saved accounts, bills, and vouchers, and transfer money, pay bills, or buy vouchers after the customer confirms. Mock data only.` |
   | **Server URL** | Your MCP URL from Module 1, for example `https://contoso-bank-nw-12345.azurewebsites.net/mcp` |
   | **Authentication** | **None** |

   The **Name** and **Description** are what the agent sees when it decides whether to use this server, so keep them as written. The URL must be the HTTPS address and must end in `/mcp`.

5. Select **Add**. Copilot Studio contacts the server, does the protocol handshake, and lists the tools it found.

   If a dialog asks you to create a connection, accept the defaults and continue.

6. Check the list. You should see **ten tools**, with the names from the table above and a clear description for each.
7. Select **Save**.

The server now appears in the **Tools** list on the **Build** tab.

## Step 2 — Test a tool in Preview

1. Select the **Preview** tab.
2. Make sure the **End user preview** toggle is **off**. The **activity trace** then appears next to the chat.
3. Type: `Hi, please log me in as USER001.`

   The agent should call the sign-in tool and then greet you by name.

4. In the activity trace, find the node for the tool that ran. Select it to expand it, and look at:

   - **Input**: the tool was called as `demo_login` with `userId` set to `USER001`.
   - **Output**: the bank's answer, with `accountId` `ACC001` and the owner `Chihiro Kimura`.
   - **Duration**: how long the call took.

5. Compare the trace with the agent's reply. Every name or number in the reply should come from that output.

Select any tool node in the trace to jump to that tool in the **Build** tab.

> [!TIP]
> **Make reading the activity trace a habit.** When the agent does something surprising, the trace shows what it called, what it sent, and what came back. In the rest of the lab, most "why did it do that?" questions are answered there.

## Optional — Protect the MCP endpoint with an API key

The lab uses **Authentication: None** because the app only has mock data. For a real endpoint you'd require a key. The app supports this with one setting. Skip this unless your instructor asks for it.

1. In PowerShell, create a random key and save it as an app setting. Set `$RG` and `$APP` first if you opened a new window, as in Module 1.

   ```powershell
   $KEY = -join ((48..57) + (97..122) | Get-Random -Count 32 | ForEach-Object { [char]$_ })
   az webapp config appsettings set --name $APP --resource-group $RG --settings MCP_API_KEY=$KEY -o none
   $KEY
   ```

   The last line shows your key. Copy it. The app restarts, which also resets the demo data.

2. In Copilot Studio, open the **Contoso Bank** server in the **Tools** dialog and edit it. Set **Authentication** to **API key**, choose to send it in a **header** named `x-api-key`, and paste the key.
3. Test again in **Preview**.

> [!CAUTION]
> Never commit a key to the repository, or paste it into the agent's instructions. Keep it in the app setting and in the connection settings only.

### ✅ Checkpoint

- The **Tools** list on the **Build** tab shows **Contoso Bank**, with ten tools.
- In **Preview**, `log me in as USER001` greets you as Chihiro Kimura, and the activity trace shows a tool call to `demo_login`.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| **Contoso Bank** is grayed out, or says **Blocked by policy** | Your organization's data policy blocks custom MCP servers. Ask your administrator to allow it in the lab environment. |
| Adding the server fails, or no tools are listed | Check the URL: it must start with `https://`, end with `/mcp`, and be copied from Module 1, Step 6. Open `https://<your-host>/health` in a browser to confirm the app is running. |
| Only some of the tools are listed | The server's list changed after you added it. Edit the server in the **Tools** dialog to refresh it. |
| The trace shows an authentication error, or `Unauthorized` | The `MCP_API_KEY` app setting is set, but the connection has no key or a different key. Fix the key in the connection, or remove the app setting and set **Authentication** to **None**. |
| The agent answers without calling a tool | Check the agent's instructions from Module 2, and make sure **Contoso Bank** is still in the **Tools** list. |
| The first request is slow, or times out | The app was idle and is starting up. Wait about 30 seconds, and try again. |
| The agent says a tool name doesn't exist | The tool names in the instructions must match the server's tools exactly. Compare the list in Step 1 with the **Tools** section of your instructions. |

---

[← Previous: Create the agent](./02-create-agent.md) · [Lab home](../README.md) · [Next: Sign in and check balances →](./04-sign-in-and-balance.md)
