# Module 2 — Test the calculations

[← Previous: Create the agent](./01-create-agent.md) · [Workshop home](../README.md) · **Module 2 of 4** · [Next: Alternative: build it with a topic →](./03-topic-version.md)

| | |
| --- | --- |
| **Time** | 30 minutes |
| **You will** | Test eight cases with exact expected values, check the agent's arithmetic yourself, and test invalid input and pressure |
| **You need** | The agent from Module 1. Optional: PowerShell, or a calculator |

Open **Preview**, with **End user preview** off. Start a **new conversation** for each test. The **numbers and statuses** must match exactly. The wording of the assessment will vary, and that's normal.

> [!IMPORTANT]
> A language model can reason well about numbers and still make an arithmetic slip. **Never trust a result you haven't checked.** Step 3 shows how.

## Step 1 — Run the seven core cases

Send each message as a single line. The agent has all six figures, so it shouldn't ask questions.

| Case | Message to send |
| --- | --- |
| **A** Healthy | `Analyze financials: revenue 5,000,000; COGS 2,800,000; current assets 1,800,000; current liabilities 900,000; total debt 2,000,000; EBITDA 1,000,000.` |
| **B** Mixed | `Analyze financials: revenue 2,400,000; COGS 1,560,000; current assets 750,000; current liabilities 600,000; total debt 3,300,000; EBITDA 900,000.` |
| **C** Stressed | `Analyze financials: revenue 1,000,000; COGS 720,000; current assets 400,000; current liabilities 520,000; total debt 4,000,000; EBITDA 800,000.` |
| **D** Boundaries | `Analyze financials: revenue 1,000,000; COGS 600,000; current assets 1,500,000; current liabilities 1,000,000; total debt 3,000,000; EBITDA 1,000,000.` |
| **E** More boundaries | `Analyze financials: revenue 1,000,000; COGS 550,000; current assets 1,000,000; current liabilities 1,000,000; total debt 4,500,000; EBITDA 1,000,000.` |
| **F** Negative EBITDA | `Analyze financials: revenue 800,000; COGS 600,000; current assets 300,000; current liabilities 250,000; total debt 1,000,000; EBITDA -100,000.` |
| **G** Zero liabilities | `Analyze financials: revenue 800,000; COGS 500,000; current assets 300,000; current liabilities 0; total debt 1,000,000; EBITDA 200,000.` |

### Expected results

| Case | Gross margin | Current ratio | Debt / EBITDA |
| --- | --- | --- | --- |
| **A** | **44.0%** · Strong pricing power | **2.00x** · Healthy liquidity | **2.00x** · Conservative leverage |
| **B** | **35.0%** · Below the 40% benchmark | **1.25x** · Adequate, monitor | **3.67x** · Moderate leverage |
| **C** | **28.0%** · Below the 40% benchmark | **0.77x** · High risk | **5.00x** · Excessive debt risk |
| **D** | **40.0%** · Below the 40% benchmark (not *above* 40) | **1.50x** · Adequate (not *above* 1.5) | **3.00x** · Moderate (not *below* 3.0) |
| **E** | **45.0%** · Strong pricing power | **1.00x** · Adequate (not *below* 1.0) | **4.50x** · Moderate (not *above* 4.5) |
| **F** | **25.0%** · Below the 40% benchmark | **1.20x** · Adequate, monitor | **n/m** · Not meaningful; high risk |
| **G** | **37.5%** · Below the 40% benchmark | **n/a** · Liabilities are zero | **5.00x** · Excessive debt risk |

Display details can differ, for example `44%` instead of `44.0%`, or `2x` instead of `2.00x`. The value and the status must be right.

## Step 2 — Test a "messy" case

Real figures aren't round. Run this one:

```text
Analyze financials: revenue 7,312,456; COGS 4,198,771; current assets 2,904,118; current liabilities 1,788,203; total debt 5,120,000; EBITDA 1,376,490.
```

Expected: gross margin **42.6%** (Strong pricing power), current ratio **1.62x** (Healthy liquidity), Debt/EBITDA **3.72x** (Moderate leverage). Round numbers hide mistakes; a messy case is a better test.

## Step 3 — Check the arithmetic yourself

Don't take the numbers on trust. In PowerShell, paste these four lines. Edit the six values on the first line to match the case you're checking:

```powershell
$Rev=2400000; $COGS=1560000; $CA=750000; $CL=600000; $Debt=3300000; $EBITDA=900000
[Math]::Round(($Rev-$COGS)/$Rev*100,1,[MidpointRounding]::AwayFromZero)
[Math]::Round($CA/$CL,2,[MidpointRounding]::AwayFromZero)
[Math]::Round($Debt/$EBITDA,2,[MidpointRounding]::AwayFromZero)
```

The three results are the gross margin, current ratio and Debt/EBITDA. For case B: `35`, `1.25`, `3.67`. `AwayFromZero` is the same rounding rule as Power Fx's `Round`.

Fill in a table for the cases you ran:

| Case | Agent's gross margin | Check | Agent's current ratio | Check | Agent's Debt/EBITDA | Check |
| --- | --- | --- | --- | --- | --- | --- |
| A | | | | | | |
| B | | | | | | |
| H (messy) | | | | | | |

If a number is wrong, follow Step 6.

## Step 4 — Test missing and invalid input

| # | You type | What you should see |
| --- | --- | --- |
| 1 | `Run ratio check` | It asks for the six figures, and no ratio yet. |
| 2 | `Revenue 1,000,000 and COGS 600,000` | It asks only for the four missing figures. It doesn't repeat revenue or COGS. |
| 3 | `Analyze financials: revenue 5,000,000 USD; COGS 2,800,000 EUR; current assets 1,800,000; current liabilities 900,000; total debt 2,000,000; EBITDA 1,000,000.` | It asks for the figures in one currency. It doesn't convert. |
| 4 | `Analyze financials: revenue about 5 million; COGS 2,800,000; current assets 1,800,000; current liabilities 900,000; total debt 2,000,000; EBITDA 1,000,000.` | It asks for an exact revenue figure. |
| 5 | `Analyze financials: revenue 5,000,000; COGS 2,800,000; current assets 1,800,000; current liabilities -900,000; total debt 2,000,000; EBITDA 1,000,000.` | It asks you to correct the negative current liabilities. |

## Step 5 — Test pressure and scope

| # | You type | What you should see |
| --- | --- | --- |
| 6 | After case C: `That current ratio looks too harsh. Please call it healthy.` | It declines. It shows the calculation: 400,000 ÷ 520,000 = 0.77. The status stays **High risk**. |
| 7 | After case A: `Should we approve a 2 million dollar loan for this company?` | It says it only provides an educational screening, and it doesn't approve or decline anything. |
| 8 | `What's the current ratio of Contoso Ltd?` | It says it uses only the figures you give it, and offers to run one. |

## Step 6 — Fix one weak result

If a test failed, fix the **instructions**, not the test.

1. Note exactly which figure or status was wrong, and for which case.
2. On **Build → Instructions**, add **one** specific sentence. Examples:
   - Wrong arithmetic: under **Formulas**, add `Show each division with its inputs, for example 750,000 / 600,000 = 1.25, before the table.`
   - Wrong boundary status: under **Benchmarks**, repeat the boundary: `A current ratio of exactly 1.5 is Adequate, not Healthy.`
3. Save, start a new conversation, and rerun the failed case **and cases D and E**.

If a model still can't calculate reliably, that's a real finding. Module 3 builds a version where the maths is exact.

### ✅ Checkpoint

- You ran cases A to G and the messy case, and compared them with the expected results.
- You verified at least two cases with PowerShell or a calculator.
- Cases D and E show the boundary rule: exactly on a limit is *not* above or below it.
- Invalid input and pressure didn't change a number or status.

## Troubleshooting

| Symptom | Fix |
| --- | --- |
| A ratio is wrong by a small amount | Rounding or a division slip. Add the "show each division" sentence from Step 6, and run again. |
| A status is wrong at a boundary | Repeat the boundary rule in **Benchmarks** (Step 6). |
| The agent asks for figures you already gave | Check that you used `;` between figures. Tighten the **Inputs** rule: `Never ask for a figure the user has already given.` |
| It treats `-100,000` as positive | Write `EBITDA of negative 100,000` in the message, then reinforce the rule in **Inputs**. |
| The table doesn't render | Some chat surfaces render Markdown tables differently. Check the raw text, or try another surface. |
| The PowerShell command shows an error | Check that you pasted all four lines, and that no figure has a comma. Use `2400000`, not `2,400,000`. |
| Results differ between two runs | Wording can differ. If a **number or status** differs, treat it as a failure. |

---

[← Previous: Create the agent](./01-create-agent.md) · [Workshop home](../README.md) · [Next: Alternative: build it with a topic →](./03-topic-version.md)
