# Module 6 — Pay bills and buy vouchers

[← Previous: Transfer money](./05-transfer.md) · [Lab home](../README.md) · **Module 6 of 7** · [Next: Test, share, and clean up →](./07-test-and-clean-up.md)

| | |
| --- | --- |
| **Time** | 25 minutes |
| **You will** | Test two more money journeys, see how they follow the same pattern as a transfer, and check the rules that are specific to bills and vouchers |
| **You need** | The agent from Module 5 |

## The same pattern, with different details

Bill payments and voucher purchases use the same order as a transfer: **get details, check funds, summarize, confirm, act, report.** Only the first step and the final tool change:

| | Transfer | Pay a bill | Buy a voucher |
| --- | --- | --- | --- |
| **Get details from** | GET `/saved-accounts` | GET `/bills` | GET `/vouchers` |
| **What the customer chooses** | A saved account, and an amount | A bill | A voucher type, and an amount |
| **Where the amount comes from** | The customer | **The bank.** The bill's amount can't be changed. | **The bank.** Only the listed amounts can be bought. |
| **Funds check** | GET `/check-funds` | GET `/check-funds` with the bill's amount | GET `/check-funds` with the voucher's amount |
| **Final call** (needs `Confirmed` true) | POST `/transfer` | POST `/bills/pay` | POST `/voucher/purchase` |

All three journeys use the same `/check-funds` request. This is the reusable balance check: the "enough money?" rule lives in one place, in the bank.

You don't need to change anything in the agent. The instructions from Module 2 already cover both journeys.

## Step 1 — Start from clean data

Restart the app to reset balances and bills. If you opened a new PowerShell window, set `$RG` and `$APP` first, as in Module 1.

**Only restart your own app.** For the shared backend, have the instructor coordinate a fresh session; another learner may already have paid these bills.

```powershell
az webapp restart --name $APP --resource-group $RG
```

Wait about 30 seconds, and then start a **new conversation** in **Preview**.

## Step 2 — Pay a bill

Run these messages in order, in one conversation:

| # | You type | What you should see | Bank API call in the trace |
| --- | --- | --- | --- |
| 1 | `Hi, log me in as USER001` | Signed in as Chihiro Kimura. | GET `/login` |
| 2 | `What bills do I have?` | Two bills: **BILL-1001**, PowerCo Electric, **USD 85.00**, and **BILL-1002**, SpeedNet ISP, **USD 59.99**. | GET `/bills` |
| 3 | `Pay the electricity bill` | A **summary**: pay PowerCo Electric USD 85.00. It asks you to confirm. **Nothing is paid yet.** | GET `/check-funds` |
| 4 | `Actually, pay it for 50 instead` | The agent says the bill's amount is set by the bank and can't be changed. It still asks about paying USD 85.00. | none |
| 5 | `Yes` | The bill is paid. It shows a transaction ID and the new balance, **USD 5,195.50**. | POST `/bills/pay` |
| 6 | `What bills do I have now?` | Only **BILL-1002**. The paid bill is gone. | GET `/bills` |
| 7 | `Pay BILL-1001 again` | The agent says that bill isn't outstanding. **No money moves.** | none |

In row 5, inspect POST `/bills/pay`. Its Body should contain the `accountId` and `billId` `BILL-1001`, and `Confirmed` should be Boolean true. The documented bill request has no amount field; the bank uses the stored bill amount.

Extra read calls are fine. Neither the bill nor voucher purchase may produce a POST before confirmation or more than one POST for the same confirmation.

## Step 3 — Buy a voucher

Continue in the same conversation:

| # | You type | What you should see | Bank API call in the trace |
| --- | --- | --- | --- |
| 8 | `I want to buy a voucher` | Two voucher types: **Contoso Gift Card** and **FreshMart** (groceries). Both come in USD **25, 50, and 100**. | GET `/vouchers` |
| 9 | `Gift card for 30` | The agent says only 25, 50, and 100 are available. It asks you to choose one. | none |
| 10 | `25` | A **summary**: Contoso Gift Card, USD 25.00. It asks you to confirm. | GET `/check-funds` |
| 11 | `Yes` | You get a **voucher code** and an **expiry date**, and the new balance, **USD 5,170.50**. | POST `/voucher/purchase` |

Then try USER002 in a **new conversation**:

| # | You type | What you should see |
| --- | --- | --- |
| 12 | `log me in as USER002`, then `Pay my bills` | One bill: **BILL-2001**, AquaFlow Water, **USD 42.50**. |

## Step 4 — Compare the data with the bank

Check that the agent reported the true values.

- **Shared backend:** open [ACC001's balance](https://contoso-bank-mtt-fsi-67227.azurewebsites.net/api/balance?accountId=ACC001) in your browser. No terminal is needed.
- **Your own app:** in PowerShell, use the command below. Set `$AppHost` first if you opened a new window, as in [Module 1, Step 6](./01-deploy-backend.md#step-6--get-your-url-and-check-the-api).

```powershell
Invoke-RestMethod "https://$AppHost/api/balance?accountId=ACC001"
```

The `balance` should be `5170.5` if you ran Steps 2 and 3 from a clean start. It's the same data the agent saw, because the workflow calls this same API.

### ✅ Checkpoint

- You paid a bill and bought a voucher, and both needed a summary and a yes first.
- The agent couldn't change the bill amount, and couldn't buy a voucher amount that isn't listed.
- The paid bill disappeared from the list, and paying it again moved no money.
- The balance in PowerShell matches the balance the agent reported.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| The agent changes the bill amount, or accepts a voucher amount that isn't listed | Check the **Moving money** section of the instructions. It must say that the bill amount can't be changed, and that vouchers come only in the listed amounts. Save and test in a new conversation. |
| The agent pays the wrong bill when you say only `pay my bill` | If there are two bills, it should ask which one. If it guesses, add: `If there is more than one outstanding bill, ask which one the customer wants to pay.` |
| The agent skips the summary | Stop money-moving tests and follow [Module 5, Step 4](./05-transfer.md#step-4--if-the-agent-takes-a-shortcut-fix-the-instructions). |
| The workflow returns `REQUEST_BLOCKED` | Inspect Method, Path and Boolean Confirmed. Do not retry automatically. |
| A purchase/payment times out | The outcome may be unknown. Don't repeat it. Check balance, recent transactions and, for bills, outstanding bills. |
| The voucher code isn't shown | Check the last step of the **Moving money** section. It must tell the agent to give the voucher code and expiry date. |
| The bills or balances don't match | Earlier tests changed them. Restart the app as in Step 1. |

---

[← Previous: Transfer money](./05-transfer.md) · [Lab home](../README.md) · [Next: Test, share, and clean up →](./07-test-and-clean-up.md)
