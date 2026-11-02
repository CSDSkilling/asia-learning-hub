# Module 7 — Test, share, and clean up

[← Previous: Bills and vouchers](./06-bills-and-vouchers.md) · [Lab home](../README.md) · **Module 7 of 7**

| | |
| --- | --- |
| **Time** | 20 minutes |
| **You will** | Run an end-to-end test, check your Copilot Credit usage, optionally publish and share the agent, and delete your Azure resources |
| **You need** | The agent from Module 6 |

## Step 1 — Reset the demo data

Restart the app so the test starts from the original balances. PowerShell forgets your variables when you close the window, so set them again first if needed:

**Run the reset only for your own deployment.** For the instructor's shared backend, coordinate a fresh session and test one learner at a time. If data isn't fresh, compare each result against the starting balance returned by the bank; a bill may already be paid.

```powershell
$RG = "rg-contoso-bank-<your-initials>"
$APP = "<the app name you wrote down in Module 1>"
az webapp restart --name $APP --resource-group $RG
```

Wait about 30 seconds. Then, in **Preview**, start a **new conversation** with **End user preview** off.

## Step 2 — Run the end-to-end test

Run the whole script in **one** conversation. It covers every journey, and the numbers add up: 5,280.50 − 100.00 − 85.00 − 25.00 = 5,070.50.

| # | You type | What you should see | Bank API call in the trace |
| --- | --- | --- | --- |
| 1 | `Hi, what's my account number?` | The agent asks for your demo user ID. | none |
| 2 | `USER001` | Signed in as Chihiro Kimura. Your account number is **ACC001**. | GET `/login` |
| 3 | `How much money do I have?` | **USD 5,280.50**. | GET `/balance` |
| 4 | `Send money to a friend` | It lists your saved accounts, and asks who and how much. | GET `/saved-accounts` |
| 5 | `ACC002, 100` | A summary: USD 100.00 to Camila Botelho. It asks you to confirm. | GET `/check-funds` |
| 6 | `Yes` | Done. A transaction ID, and the new balance **USD 5,180.50**. | POST `/transfer` |
| 7 | `Pay my electricity bill` | A summary: PowerCo Electric, USD 85.00. It asks you to confirm. | GET `/bills`, GET `/check-funds` |
| 8 | `Yes` | Paid. The new balance is **USD 5,095.50**. | POST `/bills/pay` |
| 9 | `Buy a gift card for 25` | A summary: Contoso Gift Card, USD 25.00. It asks you to confirm. | GET `/vouchers`, GET `/check-funds` |
| 10 | `Yes` | A voucher code and expiry date. The new balance is **USD 5,070.50**. | POST `/voucher/purchase` |
| 11 | `Send 999,999 to ACC003` | The agent says your balance isn't enough, and shows the shortfall. **Nothing is sent.** | GET `/check-funds` |
| 12 | `What's my balance?` | **USD 5,070.50**. | GET `/balance` |

If a row doesn't behave as described, use that journey's troubleshooting table. Wording and extra read calls may vary. Each money move must follow its funds check, summary and clear yes, and use only one POST. Don't repeat a POST after a timeout.

### ✅ Checkpoint

- All 12 rows behave as expected, and the final balance is **USD 5,070.50**.
- Every money move (rows 6, 8, and 10) came after a summary and a clear yes.
- Each of the three POST requests was sent exactly once.

## Step 3 — Check your credit usage

This harness is billed in Copilot Credits, including while you test ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview)). Workflows also use capacity for each action they run. Look at what your lab used:

1. In **Preview**, look at the credit estimate in the chat. It shows the estimated credits for the current test session. Select it to read what it means.
2. Open the **Monitor** tab. It shows the total credits your agent has used, and when a breakdown is available, which activities used them.

Think about which parts of your test cost the most. Long instructions, more workflow runs, and longer conversations all add up. A `/check-funds` call costs a workflow run, so the funds check is a deliberate trade-off between safety and cost.

## Step 4 — Optional: publish and share

Your agent works in **Preview**. To let other people try it, you can publish and share it. This depends on your organization's settings and licenses, so ask your instructor first.

1. **Publish to a demo website.** Select the chevron next to **Publish**, select **Demo website**, and then select **Save and publish**. Copy the URL that appears. Trial licenses can create and test agents, but can't publish them ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/create-automation-natural-language#publish-your-solution)).
2. **Share within your organization (optional).** This isn't needed for Preview. Follow [Microsoft Learn's prerequisites](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/authoring-share-agent): Microsoft authentication, the appropriate user licenses, and publication to Teams + Microsoft 365 with Microsoft Copilot availability enabled. Then use **Share** to grant viewing/testing access. This is separate from sharing a demo-website link.

> [!CAUTION]
> The bank's data is mock data and the sign-in is not real authentication. Don't share the agent or the website URL outside your class.

## Clean up

**Shared-backend students: skip Azure deletion.** Delete only your own Copilot Studio agent/workflow if no longer needed. Never delete or restart the instructor's resources.

**If you deployed your own app:** verify the subscription and the contents of your lab resource group first. Set `$RG` to the exact group created in Module 1, including `-ase` if you used the fallback:

```powershell
az account show --query name -o tsv
az resource list --resource-group $RG -o table
```

Only when the group contains **your disposable lab resources**, delete it:

```powershell
az group delete --name $RG --yes --no-wait
```

Confirm the deletion finished after a few minutes:

```powershell
az group exists --name $RG
```

The command returns `false` when the group is gone. If you created an earlier group before the fallback, inspect and clean up that group separately too.

In Copilot Studio, remove **Bank API** from your agent's Tools, delete your agent from **Agents**, then delete your workflow from **Workflows** if nothing else uses it. Do not delete the instructor's or another learner's artifacts. This prevents future use; it does not reverse credits already consumed.

## Stretch challenges

Try these if you finish early:

1. **Change the reply style.** Make balance answers one sentence, while keeping the fresh balance call. Compare the reply and trace.
2. **Offer a next step.** After a successful transaction, make the agent offer to show recent transactions, and call `/transactions` when the customer says yes.
3. **Compare models.** On the **Build** tab, change the **Model**, save, and run the end-to-end test again. Compare the wording, the calls, and the credit estimate.
4. **Evaluate the agent.** Turn your end-to-end script into a repeatable test with the **Evaluate** tab ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/analytics-agent-evaluation-intro)).
5. **Add an API (instructors only).** Add an endpoint in `app/api/bankingApi.js` and route it in `app/server.js`. Redeploy using [Module 1](./01-deploy-backend.md#step-5--create-the-web-app-and-deploy-the-code). Update the workflow's method/path allowlist **and** the agent instructions, then rerun the blocking tests before use.

## What you built

- A connection to a Node.js banking app on Azure App Service, either your own P0v3 deployment in Australia East or the instructor's shared backend.
- An agent powered by the GitHub Copilot harness in Copilot Studio, made of:
  - **Instructions** that define its role, its signing-in rule, a safe order for money moves, and its limits.
  - **One workflow tool, Bank API**, that makes every HTTP call to the bank, and that is the only way the agent can reach it.
- A demo transaction pattern: *get details → check → summarize → confirm → act → report*. The workflow validates inputs, but the conversation tests must verify actual confirmation. This is not a production banking authorization design.

---

[← Previous: Bills and vouchers](./06-bills-and-vouchers.md) · [Lab home](../README.md)
