# Module 4 — Sign in and check balances

[← Previous: Build the Bank API workflow](./03-build-bank-workflow.md) · [Lab home](../README.md) · **Module 4 of 7** · [Next: Transfer money →](./05-transfer.md)

| | |
| --- | --- |
| **Time** | 20 minutes |
| **You will** | Test the everyday journeys: sign in, account number, balance, saved accounts, recent transactions, and checking whether you can afford something |
| **You need** | The agent with the **Bank API** workflow tool from Module 3 |

Nothing needs to be built in this module. Your agent already has what it needs: the instructions from Module 2 and the workflow from Module 3. Here you test how it behaves, and learn to read **why** it does what it does.

## Step 1 — Start from clean data

Balances change when money moves, so start each test session from the original data. Restarting the app resets everything. If you opened a new PowerShell window, set `$RG` and `$APP` first, as in Module 1.

**Only restart an app you deployed yourself.** If using the shared backend, ask the instructor to coordinate a reset or compare against the bank's current responses instead of the starting balances below.

```powershell
az webapp restart --name $APP --resource-group $RG
```

Wait about 30 seconds for the app to start. In **Preview**, select **New conversation** (or the refresh icon) to start with an empty chat.

## Step 2 — Run the test conversation

Open the **Preview** tab, with **End user preview** off so the activity trace is visible. Run the messages below **in order, in one conversation**.

| # | You type | What you should see | Bank API call in the trace (Path) |
| --- | --- | --- | --- |
| 1 | `What's my balance?` | The agent asks for your demo user ID. It does **not** show a balance yet. | none |
| 2 | `USER001` | It signs you in as Chihiro Kimura, and then shows the balance: **USD 5,280.50**. | `/login?userId=USER001`, then `/balance?accountId=ACC001` |
| 3 | `What's my account number?` | **ACC001**. | none. It already knows. |
| 4 | `Who can I send money to?` | Camila Botelho (ACC002) and Michelle Caruana (ACC003). | `/saved-accounts?accountId=ACC001` |
| 5 | `Show my recent transactions` | Three transactions: a transfer of 200, a voucher of 50, and a bill payment of 85. | `/transactions?accountId=ACC001...` |
| 6 | `Switch to USER002` | It signs you in as Camila Botelho, account **ACC002**. | `/login?userId=USER002` |
| 7 | `Can I afford to spend 2,000?` | **No.** The balance is **USD 1,240.00**, and the shortfall is **USD 760.00**. | `/check-funds?accountId=ACC002&amount=2000` |
| 8 | `Log me in as USER999` | It says that user wasn't found, and asks again. It doesn't guess. | `/login?userId=USER999` (`success` false) |
| 9 | `log me in as user003` | It signs you in as Michelle Caruana, account **ACC003**. Lowercase works. | `/login?userId=user003` |
| 10 | `What is the balance of ACC001?` | It declines, because you're signed in as USER003. It offers to sign in as the other user instead. | none |

The balances and names always come from the bank, so they are exact. The agent's **wording** will vary from run to run. That's normal.

The trace column shows the essential calls, not an exact script. Additional read calls, uppercase normalization of IDs, or a fresh account lookup are acceptable. A POST during this read-only exercise is not.

## Step 3 — Read the activity trace

For rows 2, 7, and 8, open the trace and expand the **Bank API** nodes:

1. **Row 2**: you'll see two calls in order. The first has Method `GET` and Path `/login?userId=USER001`, and returns the account number. The second uses Path `/balance?accountId=ACC001`. The agent got `ACC001` from the first answer and used it in the second. You never typed it.
2. **Row 7**: open the `/check-funds` call. The `Response` has `hasEnoughFunds` set to `false`, an `availableBalance` of `1240`, and a `shortfall` of `760`. The agent didn't do any maths itself. The bank decided.
3. **Row 8**: the workflow run **succeeds**, and the `Response` says `"success":false`, `"httpStatus":404` and `User USER999 not found.` That's the `x-status-in-body` header from Module 3 at work. The agent repeated the problem in simple words.

Then try the same question in different words, such as `how much money do I have?` or `balance please`. The agent sends the same request. It works from your instructions, not from exact wording.

> [!IMPORTANT]
> **Row 10 matters.** The demo's API will return the balance of any account number you give it, because the sign-in is only a demo. Only the agent's instructions stop it from reading someone else's account. A real bank would also enforce this in the API with real authentication. That's why the README says this app must never hold real data.

## Step 4 — Optional: simplify the reply

Practice changing the agent without removing an account-access rule:

1. On **Build → Instructions**, add under **Purpose and style**: `For balance questions, reply in one sentence with the account number and currency amount.`
2. Save, start a new Preview conversation, sign in as USER001, and ask for the balance.
3. Check that the reply is shorter **and** the trace still contains the balance request. Style changes must not replace the bank call.

### ✅ Checkpoint

- Rows 1 to 10 behave as described.
- You've opened at least one **Bank API** node in the activity trace and can explain what the Method, Path and `Response` mean.
- The signed-in-account rule remains in place.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| The agent shows a balance without asking you to sign in | Check the **Signing in** instructions. Account calls need a successful login in the current conversation. |
| The agent doesn't call the workflow | Open the **Build** tab and check that **Bank API** is in the **Tools** list. Then check that the instructions mention the tool name. |
| The balances don't match the table | Earlier tests changed them. Run the restart command from Step 1 and start a new conversation. |
| The agent asks for the user ID again after you signed in | Expected after a failed switch/login. Otherwise check the instruction about retaining a successful identity within the conversation. |
| A read-only workflow call times out | Check the app health and workflow run history, then retry the read once healthy. Don't use this advice for POST requests. |
| The agent invents data | Restore Module 2's instructions. Balance and activity require fresh calls; an account number may reuse the successful login result. |

---

[← Previous: Build the Bank API workflow](./03-build-bank-workflow.md) · [Lab home](../README.md) · [Next: Transfer money →](./05-transfer.md)
