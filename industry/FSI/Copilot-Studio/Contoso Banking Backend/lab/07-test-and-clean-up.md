# Module 7 — Test, share, and clean up

[← Previous: Bills and vouchers](./06-bills-and-vouchers.md) · [Lab home](../README.md) · **Module 7 of 7**

| | |
| --- | --- |
| **Time** | 20 minutes |
| **You will** | Run an end-to-end test, check your Copilot Credit usage, optionally publish and share the agent, and delete your Azure resources |
| **You need** | The agent from Module 6 |

## Step 1 — Reset the demo data

Restart the app so the test starts from the original balances. PowerShell forgets your variables when you close the window, so set them again first if needed:

```powershell
$RG = "rg-contoso-bank-<your-initials>"
$APP = "<the app name you wrote down in Module 1>"
az webapp restart --name $APP --resource-group $RG
```

Wait about 30 seconds. Then, in **Preview**, start a **new conversation** with **End user preview** off.

## Step 2 — Run the end-to-end test

Run the whole script in **one** conversation. It covers every journey, and the numbers add up: 5,280.50 − 100.00 − 85.00 − 25.00 = 5,070.50.

| # | You type | What you should see | Tool in the trace |
| --- | --- | --- | --- |
| 1 | `Hi, what's my account number?` | The agent asks for your demo user ID. | none |
| 2 | `USER001` | Signed in as Chihiro Kimura. Your account number is **ACC001**. | `demo_login` |
| 3 | `How much money do I have?` | **USD 5,280.50**. | `get_balance` |
| 4 | `Send money to a friend` | It lists your saved accounts, and asks who and how much. | `list_saved_accounts` |
| 5 | `ACC002, 100` | A summary: USD 100.00 to Camila Botelho. It asks you to confirm. | `check_funds` |
| 6 | `Yes` | Done. A transaction ID, and the new balance **USD 5,180.50**. | `transfer_money` |
| 7 | `Pay my electricity bill` | A summary: PowerCo Electric, USD 85.00. It asks you to confirm. | `list_bills`, `check_funds` |
| 8 | `Yes` | Paid. The new balance is **USD 5,095.50**. | `pay_bill` |
| 9 | `Buy a gift card for 25` | A summary: Contoso Gift Card, USD 25.00. It asks you to confirm. | `list_vouchers`, `check_funds` |
| 10 | `Yes` | A voucher code and expiry date. The new balance is **USD 5,070.50**. | `purchase_voucher` |
| 11 | `Send 999,999 to ACC003` | The agent says your balance isn't enough, and shows the shortfall. **Nothing is sent.** | `check_funds` |
| 12 | `What's my balance?` | **USD 5,070.50**. | `get_balance` |

If a row doesn't behave as described, go back to the module for that journey and use its **Troubleshooting** table. The exact wording of the replies varies, but the numbers and the order of the tool calls shouldn't.

### ✅ Checkpoint

- All 12 rows behave as expected, and the final balance is **USD 5,070.50**.
- Every money move (rows 6, 8, and 10) came after a summary and a clear yes.
- The three money tools were each called exactly once.

## Step 3 — Check your credit usage

This harness is billed in Copilot Credits, including while you test ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview)). Look at what your lab used:

1. In **Preview**, look at the credit estimate in the chat. It shows the estimated credits for the current test session. Select it to read what it means.
2. Open the **Monitor** tab. It shows the total credits your agent has used, and when a breakdown is available, which activities used them.

Think about which parts of your test cost the most. Long instructions, more tool calls, and longer conversations all add up. A tool call like `check_funds` costs credits too, so the funds check is a deliberate trade-off between safety and cost.

## Step 4 — Optional: publish and share

Your agent works in **Preview**. To let other people try it, you can publish and share it. This depends on your organization's settings and licenses, so ask your instructor first.

1. **Publish to a demo website.** Select the chevron next to **Publish**, select **Demo website**, and then select **Save and publish**. Copy the URL that appears. Trial licenses can create and test agents, but can't publish them ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/create-automation-natural-language#publish-your-solution)).
2. **Share with people in your organization.** Select the **Share** icon next to **Publish**, enter the names, email addresses, or groups, and then select **Share**. People you share with can see and test the agent, but not edit it. Sharing has prerequisites, such as how users sign in and which licenses they have ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent)).

> [!CAUTION]
> The bank's data is mock data and the sign-in is not real authentication. Don't share the agent or the website URL outside your class.

## Clean up

Delete everything you created in Azure so that billing stops. If you opened a new PowerShell window, set `$RG` again first, as in Step 1:

```powershell
az group delete --name $RG --yes --no-wait
```

Confirm the deletion finished after a few minutes:

```powershell
az group exists --name $RG
```

The command returns `false` when the resource group is gone. In Copilot Studio, delete the agent too if you don't need it: open the **Agents** page and use the agent's menu to delete it. Deleting the agent stops any further Copilot Credit use by it.

## Stretch challenges

Try these if you finish early:

1. **Change a rule.** Add this line under **Rules**: `If the amount is more than USD 1,000, ask the customer to confirm twice.` Test a transfer of 1,500 as USER003. Then check the trace to see how the conversation changed.
2. **Offer a next step.** After a successful transaction, make the agent offer to show recent transactions, and use `list_transactions` when the customer says yes.
3. **Compare models.** On the **Build** tab, change the **Model**, save, and run the end-to-end test again. Compare the wording, the tool calls, and the credit estimate.
4. **Protect the endpoint.** Add an API key to the MCP endpoint, as in the optional section of [Module 3](./03-connect-bank-tools.md#optional--protect-the-mcp-endpoint-with-an-api-key), and confirm that the agent still works.
5. **Evaluate the agent.** Turn your end-to-end script into a repeatable test with the **Evaluate** tab ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro)).
6. **Add a tool (for instructors and developers).** In `app/mcp/mcpServer.js`, add an eleventh tool, for example one that returns a short summary of an account. Redeploy with [Module 1, Step 5.4](./01-deploy-backend.md#step-5--create-the-web-app-and-deploy-the-code), and then edit the server in the **Tools** dialog to refresh the tool list. Write a clear description, and mention the tool in the instructions.

## What you built

- A Node.js banking app on Azure App Service (P0v3, Australia East), with a website, a REST API, and an MCP endpoint.
- An agent powered by the GitHub Copilot harness in Copilot Studio, made of:
  - **Instructions** that define its role, its signing-in rule, a safe order for money moves, and its limits.
  - **One MCP server** with ten tools, one of which (`check_funds`) is a reusable balance check.
- A safe pattern for any agent that can change data: *get details → check → summarize → confirm → act → report*, with the confirmation enforced in **both** the instructions and the tool.

---

[← Previous: Bills and vouchers](./06-bills-and-vouchers.md) · [Lab home](../README.md)
