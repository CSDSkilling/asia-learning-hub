# Module 4 — Sign in and check balances

[← Previous: Connect the bank tools](./03-connect-bank-tools.md) · [Lab home](../README.md) · **Module 4 of 7** · [Next: Transfer money →](./05-transfer.md)

| | |
| --- | --- |
| **Time** | 20 minutes |
| **You will** | Test the everyday journeys: sign in, account number, balance, saved accounts, recent transactions, and checking whether you can afford something |
| **You need** | The agent with the **Contoso Bank** tools from Module 3 |

Nothing needs to be built in this module. Your agent already has what it needs: the instructions from Module 2 and the tools from Module 3. Here you test how it behaves, and learn to read **why** it does what it does.

## Step 1 — Start from clean data

Balances change when money moves, so start each test session from the original data. Restarting the app resets everything. If you opened a new PowerShell window, set `$RG` and `$APP` first, as in Module 1.

```powershell
az webapp restart --name $APP --resource-group $RG
```

Wait about 30 seconds for the app to start. In **Preview**, select **New conversation** (or the refresh icon) to start with an empty chat.

## Step 2 — Run the test conversation

Open the **Preview** tab, with **End user preview** off so the activity trace is visible. Run the messages below **in order, in one conversation**.

| # | You type | What you should see | Tool in the trace |
| --- | --- | --- | --- |
| 1 | `What's my balance?` | The agent asks for your demo user ID. It does **not** show a balance yet. | none |
| 2 | `USER001` | It signs you in as Chihiro Kimura, and then shows the balance: **USD 5,280.50**. | `demo_login`, then `get_balance` |
| 3 | `What's my account number?` | **ACC001**. | none. It already knows. |
| 4 | `Who can I send money to?` | Camila Botelho (ACC002) and Michelle Caruana (ACC003). | `list_saved_accounts` |
| 5 | `Show my recent transactions` | Three transactions: a transfer of 200, a voucher of 50, and a bill payment of 85. | `list_transactions` |
| 6 | `Switch to USER002` | It signs you in as Camila Botelho, account **ACC002**. | `demo_login` |
| 7 | `Can I afford to spend 2,000?` | **No.** The balance is **USD 1,240.00**, and the shortfall is **USD 760.00**. | `check_funds` |
| 8 | `Log me in as USER999` | It says that user wasn't found, and asks again. It doesn't guess. | `demo_login` (error) |
| 9 | `log me in as user003` | It signs you in as Michelle Caruana, account **ACC003**. Lowercase works. | `demo_login` |
| 10 | `What is the balance of ACC001?` | It declines, because you're signed in as USER003. It offers to sign in as the other user instead. | none |

The balances and names always come from the bank, so they are exact. The agent's **wording** will vary from run to run. That's normal.

## Step 3 — Read the activity trace

For rows 2, 7, and 8, open the trace and expand the tool nodes:

1. **Row 2**: you'll see two tool calls in order. `demo_login` returns the account number, and then `get_balance` is called with that account number. The agent got `ACC001` from the first call and passed it to the second. You never typed it.
2. **Row 7**: open the `check_funds` node. The input is `accountId` `ACC002` and `amount` `2000`. The output has `hasEnoughFunds` set to `false`, an `availableBalance` of `1240`, and a `shortfall` of `760`. The agent didn't do any maths itself. The tool decided.
3. **Row 8**: the tool node shows an **error**, and the output says `User USER999 not found.` The agent repeated the problem in simple words.

Then try the same question in different words, such as `how much money do I have?` or `balance please`. The agent calls the same tool. It picks tools by their **description**, not by exact wording.

> [!IMPORTANT]
> **Row 10 matters.** The demo's API will return the balance of any account number you give it, because the sign-in is only a demo. Only the agent's instructions stop it from reading someone else's account. A real bank would also enforce this in the API with real authentication. That's why the README says this app must never hold real data.

## Step 4 — Experiment: change a rule, and see what happens

You can see how much the instructions matter by changing one and watching the behavior change.

1. Open the **Build** tab. In **Instructions**, under **Signing in**, delete the line that starts `- Only use the account of the signed-in customer.` Select **Save**.
2. In **Preview**, start a new conversation. Sign in as `USER001`, and then ask `What is the balance of ACC002?`
3. This time the agent will probably answer with Camila's balance. Open the trace to confirm which account it used.
4. **Put the line back**, select **Save**, start a new conversation, and ask again. The agent should decline.

The instruction text is the only thing that changed.

### ✅ Checkpoint

- Rows 1 to 10 behave as described.
- You've opened at least one tool node in the activity trace and can explain what the input and output mean.
- You put the rule back in the instructions after the experiment.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| The agent shows a balance without asking you to sign in | Check the **Signing in** section of the instructions. It must say that the customer must be signed in before any account tool is used. |
| The agent doesn't call any tool | Open the **Build** tab and check that **Contoso Bank** is in the **Tools** list. Then check that the instructions mention the tool names. |
| The balances don't match the table | Earlier tests changed them. Run the restart command from Step 1 and start a new conversation. |
| The agent asks for the user ID again after you signed in | Start a new conversation and repeat the steps. If it keeps happening, make sure the line about remembering the account number is in the instructions. |
| A tool call fails with a timeout | The app was idle. Wait about 30 seconds and send the message again. |
| The agent makes up an answer instead of using a tool | Add a stricter sentence to the instructions, for example `Always call a tool for balances, account numbers, and transactions. Never answer them from the conversation.` Then save and test again. |

---

[← Previous: Connect the bank tools](./03-connect-bank-tools.md) · [Lab home](../README.md) · [Next: Transfer money →](./05-transfer.md)
