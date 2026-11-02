# Module 3 — Build the Bank API workflow

[← Previous: Create the agent](./02-create-agent.md) · [Lab home](../README.md) · **Module 3 of 7** · [Next: Sign in and check balances →](./04-sign-in-and-balance.md)

| | |
| --- | --- |
| **Time** | 30 minutes, including tests |
| **You will** | Ask Copilot to generate one HTTP workflow, inspect it, and connect it to the agent |
| **You need** | The agent from Module 2 and a working bank API base URL |

The [natural-language builder](https://learn.microsoft.com/microsoft-copilot-studio/create-automation-natural-language) can generate workflows. This replaces manually building and wiring every branch. **Generated output is a draft, not a verified import package. Do not skip the checks or tests.**

## Before class — Instructor check

Confirm in the teaching environment that **Workflows** and the generic **HTTP** action are available and allowed by policy/licensing. In a workflow, use **Add a step** and search for `HTTP`; the action needs Method, URI, Headers and Body fields. Do not substitute **HTTP with Microsoft Entra ID**, which has a different authentication setup.

Microsoft Learn documents the builder and workflow-as-tool requirements, but not a complete HTTP banking example in this designer. The prompts and tests below have **not** been run in a Copilot Studio tenant. If HTTP isn't available, stop here and ask the administrator; missing results alone do not prove a policy block.

## Step 1 — Generate the workflow

1. Return to the Copilot Studio home page and start a **new builder chat**.
2. Paste the prompt below. It uses the instructor's deployed backend. **If you deployed your own app, replace the base URL in the prompt with your URL ending in `/api`.**
3. Submit it. If Copilot asks about authentication, specify **no authentication for this mock API**. Open the generated **Bank API** workflow card.

```text
Create only one workflow named Bank API for my existing Contoso Friendly Banker agent in the GitHub Copilot harness. Do not create another agent, topics, an MCP server or a custom connector.

Use the "When an agent calls the flow" trigger with exactly these four inputs:
- Method: Text, uppercase GET or POST.
- Path: Text, path after /api, including any query string.
- Body: Text containing JSON. For GET the caller supplies {}.
- Confirmed: Boolean (Yes/No), not Text.

The fixed API base URL is https://contoso-bank-mtt-fsi-67227.azurewebsites.net/api
Append Path to this URL; never accept an alternative host.

Validate BEFORE sending HTTP:
- A read is allowed only when Method is exactly GET and the part of Path before ? exactly matches one of: /login, /balance, /check-funds, /saved-accounts, /transactions, /bills, /vouchers.
- A write is allowed only when Method is exactly POST, Confirmed is Boolean true, and Path exactly matches /transfer, /bills/pay or /voucher/purchase.
- For any other combination, send no HTTP request. Respond with this JSON text:
{"success":false,"error":"REQUEST_BLOCKED","message":"No HTTP request was sent. Use a listed GET path, or a listed POST path with Confirmed true after the customer's yes."}

For allowed reads, use the generic HTTP action with method GET and no request body.
For allowed writes, use the generic HTTP action with method POST, Content-Type application/json, and parse Body as a JSON object for the request body.
On both HTTP actions set header x-status-in-body to true.
Disable automatic retries (retry policy None) on the HTTP actions. Do not add a loop or retry a POST.

Return the actual HTTP response body serialized as JSON text in a single Text output named Response, using "Respond to the agent".
Every response branch must have the same output name and type. Set Asynchronous response Off on every response action.
Do not turn timeouts or failed HTTP actions into successful banking responses. Let failures remain visible; a write's outcome may be unknown.
Use valid references to the trigger inputs and HTTP action outputs. Save the workflow and show me its canvas so I can inspect and test it.
```

If Copilot can't create the required HTTP actions or validation, **don't continue to money-moving tests**. Ask the instructor to correct the generated workflow in the designer.

## Step 2 — Inspect five things on the canvas

Select each relevant card to inspect its parameters. The exact action names and layout can vary.

| Check | What must be present |
| --- | --- |
| **Trigger inputs** | `Method`, `Path`, `Body` as Text; `Confirmed` as Boolean / Yes-No |
| **Read branch** | Method GET **and** an exact match against the seven read paths, ignoring only the query string |
| **Write branch** | Method POST **and** Confirmed true **and** one of the three exact write paths |
| **HTTP actions** | Your fixed base URL + Path; `x-status-in-body: true`; POST Body is JSON, not a quoted JSON string; retry policy None |
| **Responses** | Every branch returns only `Response` (Text); **Settings → Networking → Asynchronous response = Off** |

Why the path checks matter: the backend also has a **legacy GET `/api/transfer`** that moves money. Merely checking "Method is GET" is **not** a read-only guard. The workflow must block that path.

Why `Confirmed` isn't a guarantee: the workflow checks a value supplied by the agent, **not the customer's chat message**. An agent could set it incorrectly. The conversation-level tests in Module 5 are still required; this is not production authorization.

> [!NOTE]
> `x-status-in-body` lets ordinary bank validation errors reach the agent as JSON (`success: false`, `httpStatus: 404`, for example). It does not prevent network failures or make all requests succeed. Malformed JSON can also fail before the normal API response handling.

## Step 3 — Test before connecting the agent

1. Save the workflow and fix errors in the designer's **health center**.
2. Select the toolbar **Test** button for a **whole-workflow** test, not an isolated HTTP-node test. A node-only test bypasses the validation branches.
3. Run the inputs below, one row at a time. Use the Boolean toggle for `Confirmed`, not the text `"true"`.

The designer may save and publish on the first full test. Tests use the real API. These cases are designed **not to move money**.

| # | Method | Path | Body | Confirmed | Expected `Response` |
| --- | --- | --- | --- | --- | --- |
| 1 | GET | `/login?userId=USER001` | `{}` | false | `success: true`, `accountId: ACC001`, `httpStatus: 200` |
| 2 | GET | `/balance?accountId=ACC001` | `{}` | false | Record `balance` as your baseline |
| 3 | POST | `/transfer` | `{"fromAccountId":"ACC001","toAccountId":"ACC002","amount":5}` | false | `REQUEST_BLOCKED`; no HTTP action runs |
| 4 | GET | `/transfer?fromAccountId=ACC001&toAccountId=ACC002&amount=5` | `{}` | false | `REQUEST_BLOCKED`; no HTTP action runs |
| 5 | DELETE | `/transfer` | `{}` | true | `REQUEST_BLOCKED`; no HTTP action runs |
| 6 | POST | `/balance` | `{}` | true | `REQUEST_BLOCKED`; no HTTP action runs |
| 7 | GET | `/login?userId=USER999` | `{}` | false | Run succeeds; JSON has `success: false`, `httpStatus: 404` |
| 8 | GET | `/balance?accountId=ACC001` | `{}` | false | Same balance as row 2 on an app used only by you |

For rows 3–6, inspect the run history: the HTTP actions must be **skipped**. A bank error after an HTTP action runs is not a pass. If any blocked test sends HTTP, fix the workflow and repeat the tests before continuing.

On a shared app, another learner can change the balance between rows 2 and 8. Use the run history to verify that **your** blocked calls sent nothing.

Select **Publish** after any final corrections. For use as an agent tool, it must be published, synchronous, and respond within **100 seconds**. See [Microsoft Learn's requirements](https://learn.microsoft.com/microsoft-copilot-studio/workflows-experience/flow-agent).

## Step 4 — Connect it once

1. Open **Contoso Friendly Banker → Build → Tools**.
2. If **Bank API** is already listed, don't add a second copy. Otherwise select **Add a tool → Workflows → Bank API**.
3. In the tool's **Details** tab, use this description:

   ```text
   Reads mock Contoso Bank data and performs confirmed demo transactions. Inputs: Method (GET/POST), Path (after /api), Body (JSON text; {} for GET), Confirmed (Boolean). Returns Response as JSON text. A POST requires a customer's clear yes after a transaction summary. REQUEST_BLOCKED means no HTTP request was sent.
   ```

4. Save the agent. Leave other banking tools disconnected.

Workflows created through **Build → Tools → Add → Workflow** can appear in the tool list automatically after publishing. That's why you check before adding. See [Add a workflow as a tool](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/tools-add-workflow).

## Step 5 — Try the first conversation

In **Preview**, with **End user preview** off, enter `Hi, I'm USER001. What's my balance?`

Open the activity trace. Expect **Bank API** calls to `/login?userId=USER001` and `/balance?accountId=ACC001`, followed by the returned balance. Additional read calls are fine; invented data or a POST is not.

### ✅ Checkpoint

- The eight workflow tests pass and blocked requests never reach HTTP.
- One published **Bank API** tool is connected to the agent.
- Preview signs in and reads the balance through that tool.

## Troubleshooting

| Problem | What to check |
| --- | --- |
| No HTTP action or Workflows option | Environment feature availability, permissions, licensing and data policy; ask the instructor rather than guessing a different connector. |
| Workflow missing from the tool list | Correct environment, published workflow, agent-call trigger, Respond action, synchronous response. |
| Agent asks you to provide Method / Path / Body | Check the tool inputs and the replacement instructions from Module 2. Those values should be supplied by the agent, not the customer. |
| A user-not-found test fails instead of returning JSON | Check the URL and the `x-status-in-body` header on the executed HTTP action. |
| Response contains quoted JSON or an object instead of Text | Serialize the HTTP response body once, into `Response`. Ask the builder to correct its output mapping; don't guess internal action names. |
| Wrong path or method reaches HTTP | The generated guard is incomplete. Fix it and rerun rows 3–6. |
| Timeout after a POST | Do not retry. Check balance and recent transactions to investigate; the request may already have completed. |

---

[← Previous: Create the agent](./02-create-agent.md) · [Lab home](../README.md) · [Next: Sign in and check balances →](./04-sign-in-and-balance.md)
