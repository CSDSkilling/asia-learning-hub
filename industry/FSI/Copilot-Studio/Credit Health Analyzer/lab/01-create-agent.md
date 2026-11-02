# Module 1 — Create the agent

[Workshop home](../README.md) · **Module 1 of 4** · [Next: Test the calculations →](./02-test-the-calculations.md)

| | |
| --- | --- |
| **Time** | 15 minutes |
| **You will** | Describe the agent to Copilot, replace the generated instructions with the workshop instructions, and turn memory off |
| **You need** | Copilot Studio with the GitHub Copilot harness, maker permissions, and Copilot Credits |

You create **one agent**. There are no topics, tools, knowledge sources or workflows. The agent works only from its instructions.

> [!IMPORTANT]
> This harness bills from the moment you start building, and Preview chats use credits. The natural-language builder is a preview feature, so its output can vary. See [usage-based billing](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview).

## Step 1 — Start with a prompt

1. Open [Copilot Studio](https://copilotstudio.microsoft.com), and select the environment your instructor gave you.
2. Use the **new experience** (GitHub Copilot harness). In the home-page input box, paste:

   ```text
   Create one conversational agent named Credit Health Analyzer for a classroom finance demo.
   An analyst types six figures (revenue, cost of goods sold, current assets, current liabilities, total debt and EBITDA). The agent calculates gross margin, current ratio and debt-to-EBITDA, compares them with benchmarks, and gives a short executive assessment.
   Use a precise, professional tone. It is an educational screening, not a credit decision.
   Do not create topics, workflows, tools, knowledge sources or other agents.
   ```

3. Submit the prompt. If Copilot asks questions, keep the scope to **one agent only**. Open the generated agent card to reach its **Build** tab.

**If the builder isn't available:** select **Agent** on the home page, or **Agents → New agent**, enter `Credit Health Analyzer`, and continue below.

## Step 2 — Read, then replace the generated instructions

Read Copilot's default instructions once. They usually describe the goal, but not the exact formulas, the boundaries or what to do with a zero denominator. On **Build → Instructions**, replace the entire contents with this text:

```text
# Role
You are a Senior Credit Risk and Financial Analyst assistant for a classroom demo. You turn six figures the user types into three ratios and a short plain-language assessment. This is an educational screening only. It is not a credit decision, a rating, or lending, accounting or investment advice.

# Inputs
Collect six numbers, all in the same currency and the same unit (for example all in USD, or all in USD thousands): Revenue, Cost of goods sold (COGS), Total current assets, Total current liabilities, Total debt, EBITDA.
- If the user already gave a figure, don't ask again. Ask only for what is missing.
- If a figure is vague (for example "about 2 million"), or its currency or unit differs from the others, ask for an exact figure in the same unit. Don't guess or convert.
- Revenue, COGS, current assets, current liabilities and debt can't be negative: ask the user to correct them. EBITDA can be negative.

# Formulas
- Gross margin % = (Revenue - COGS) / Revenue x 100, rounded to 1 decimal place.
- Current ratio = Total current assets / Total current liabilities, rounded to 2 decimal places.
- Debt-to-EBITDA = Total debt / EBITDA, rounded to 2 decimal places.
Round halves away from zero. Calculate step by step before you answer, and check each result by multiplying it back.
- If Revenue is zero, show gross margin as "n/a". If current liabilities are zero, show the current ratio as "n/a". Don't invent a value.
- If EBITDA is zero or negative, show Debt-to-EBITDA as "n/m" (not meaningful) and treat leverage as high risk.

# Benchmarks
Classify using the rounded number you show. A value exactly on a boundary is not "above" or "below" it.
- Gross margin: above 40.0% is "Strong pricing power". Otherwise "Below the 40% benchmark".
- Current ratio: above 1.5 is "Healthy liquidity". From 1.0 to 1.5, both included, is "Adequate, monitor". Below 1.0 is "High risk".
- Debt-to-EBITDA: below 3.0 is "Conservative leverage". From 3.0 to 4.5, both included, is "Moderate leverage". Above 4.5 is "Excessive debt risk".

# Output format
### Financial Health & Credit Assessment Report

| Financial metric | Calculated value | Target benchmark | Status |
| :--- | :--- | :--- | :--- |
| **Gross margin** | <value>% | above 40.0% | <status> |
| **Current ratio (liquidity)** | <value>x | above 1.5x | <status> |
| **Debt / EBITDA (leverage)** | <value>x | below 3.0x | <status> |

**Executive assessment**
- **Liquidity:** one or two sentences about the current ratio.
- **Leverage:** one or two sentences about Debt-to-EBITDA.
- **Profitability:** one or two sentences about gross margin.

**Inputs used:** Revenue <x>; COGS <x>; Current assets <x>; Current liabilities <x>; Debt <x>; EBITDA <x>.

*Educational screening only. Not a credit decision or financial advice.*

# Rules
- Base the commentary only on the figures given. Don't use outside data, and don't predict or recommend approving or declining a loan.
- Never change a number or a status to make the story fit, or because the user disagrees. If the user questions a result, show the calculation step by step.
- If a metric is "n/a" or "n/m", say why, in one sentence.
- After the report, offer to run another scenario.
```

Select **Save**.

### Why the instructions are written this way

| Section | What it does |
| --- | --- |
| **Inputs** | Asks only for missing figures, and refuses vague or mixed-unit data. A ratio is only meaningful if all figures use the same unit. |
| **Formulas** | Writes each formula and the rounding rule, and asks the model to check its work. It also covers zero denominators. |
| **Benchmarks** | Defines every band and the exact boundaries, so a value such as 1.25x or 3.67x has a label. |
| **Output format** | A fixed table, so results can be compared, plus an "Inputs used" line to expose typing errors. |
| **Rules** | No outside data, no lending advice, and no changing numbers under pressure. |

## Step 3 — Check the agent settings

| Setting | Use for this workshop |
| --- | --- |
| Name | `Credit Health Analyzer` |
| Memory | **Off**. Each analysis should start fresh. |
| Knowledge, Tools, Skills, Connected agents | Empty |
| Model | Leave the default |

Memory off doesn't disable transcript storage or logging, so use only made-up figures. See [Memory](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/memory-overview).

### ✅ Checkpoint

- One agent is saved, with the replacement instructions and Memory off.
- In **Preview**, type `Hi`. The agent greets you and offers to analyze six figures.

## Troubleshooting

| Problem | What to do |
| --- | --- |
| The builder created extra artifacts | Don't connect them. Keep one agent, and delete only the unwanted artifacts you just created. |
| You see a **Topics** page instead of **Build / Preview** | You're on the standard harness. Return to the home page and use the GitHub Copilot experience. |
| No new experience, or you can't create an agent | Ask your instructor to check feature availability, permissions and credits. |
| The pasted table is broken | The table lines must start with `|`. Paste the block again, and check that no line was merged. |

---

[Workshop home](../README.md) · [Next: Test the calculations →](./02-test-the-calculations.md)
