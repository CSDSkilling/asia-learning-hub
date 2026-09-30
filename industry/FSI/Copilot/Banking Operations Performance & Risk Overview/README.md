# Bank Banking Operations Demo

**Scenario:**
You're a banking operations analyst at Bank reviewing deposit and loan book movements, balances, fee and spread income, customer segments, and portfolio risk signals across zones.

## Demo Setup

**Workbook:** [Bank Portfolio Insights Demo](https://github.com/CSDSkilling/asia-learning-hub/blob/897c068de60f6282b2eae9fd842b4806071efb9a/industry/FSI/Copilot/Banking%20Operations%20Performance%20%26%20Risk%20Overview/Bank_Portfolio_Insights_Demo.xlsx)

> **Note:** This workbook contains **synthetic sample data** created solely for training and demonstration purposes. It does not represent any real customers, accounts, transactions, or financial institutions.
>

> **Demo Objective:** Use this workbook to demonstrate how Microsoft Copilot can analyze banking operations, portfolio performance, risk indicators, customer trends, and business outcomes through natural language prompts, helping business

## Copilot in Excel

### Workbook Orientation

[Worksheet: any]

```text
Summarize this workbook in 30 seconds.
```

[Worksheet: any]

```text
Explain this workbook as if I am a retail banking operations head.
```

[Worksheet: any]

```text
What are the most important columns in this workbook?
```

### Data Cleanup

[Worksheet: Branch Flows]

```text
Normalize similar product line or customer segment names.
```

[Worksheet: Branch Flows]

```text
Identify duplicate records in this table.
```

[Worksheet: Branch Flows]

```text
Find unusual or outlier values in Net Flows, Closing Balance, or Spread / Fee.
```

### Calculated Columns

[Worksheet: Branch Flows]

```text
Create a new column called Flow Impact Category based on Net Flows. Use High Inflow, Moderate Inflow, Outflow, and Stable.
```

[Worksheet: Risk Metrics]

```text
Create a formula to identify portfolios with Gross NPA above the risk watch threshold and a coverage ratio below 0.70.
```

[Worksheet: Branch Flows]

```text
Explain this inherited formula in the Estimated Annual Income column.
```

### Trend Analysis

[Worksheet: Branch Flows]

```text
Analyze balance and net flow trends by month.
```

[Worksheet: Summary]

```text
Identify product lines with the highest estimated annual income.
```

[Worksheet: Summary]

```text
Create a pivot table by Region (Zone) and Product Line showing Net Flows, Closing Balance, and Estimated Annual Income.
```

[Worksheet: Summary]

```text
Create a chart showing Estimated Annual Income by Product Line.
```

### Risk Analysis

[Worksheet: Risk Metrics]

```text
Highlight all portfolios approaching risk review status.
```

[Worksheet: Risk Metrics]

```text
Apply conditional formatting for portfolios where credit cost exceeds the active spread.
```

[Worksheet: Risk Metrics]

```text
Identify portfolios that need leadership attention and explain why.
```

## Executive Dashboard Challenge

[Worksheet: Summary]

```text
Create an Executive Banking Operations Dashboard from this workbook.

Include:
- Total Closing Balances
- Total Net Flows
- Estimated Annual Income
- Top Income Product Line
- Product Line trend
- Zonal balance view
- NPA / risk watchlist
- Executive summary with recommended actions

Use an executive-friendly layout with red, amber, and green indicators.
```

---

## Copilot Premium / Analyst

```text
Using Python, forecast next quarter net flows and identify clusters of recurring portfolio or customer-segment risks. Create a clear summary, show the forecast trend, and explain which areas need leadership attention.
```

## Copilot in Word

```text
Write a 150-word executive risk summary based on this workbook for Bank leadership.
```

## Key Takeaway

Copilot in Excel helps banking teams move from raw branch, deposit and lending data to executive-ready insights, dashboards, risk summaries, and advanced forecasts in one connected workflow.

## Appendix: Intentional Data Issues

The **Branch Flows** worksheet contains several intentional data-quality issues for the cleanup demonstrations:

| Issue | Cell or range | What to look for | Expected correction |
|---|---|---|---|
| Product Line | B7 | Retail Deposit | Retail Deposits |
| Product Line | B8 | Retail Lending with a trailing space | Retail Lending |
| Product Line | B9 | Cards and Payments | Cards & Payments |
| Product Line | B15 | Wealth and Third Party Distribution | Wealth & Third-Party Distribution |
| Customer Segment | E16 | Priority Banking | Priority |
| Customer Segment | E17 | Self Employed MSME | Self-Employed / MSME |
| Duplicate record | A25:O25 | Exact duplicate of A4:O4 (Jan Home Loan), with hardcoded values instead of formulas | Remove or flag the duplicate |
| Duplicate record | A26:O26 | Exact duplicate of A10:O10 (Feb Mutual Fund SIP), with hardcoded values instead of formulas | Remove or flag the duplicate |
| Net Flows outlier | I27 | Rs 48,500 Cr on a Rs 2,600 Cr book | Rs 485 Cr |
| Spread outlier | K27 | 170 bps | 17 bps |

### Why this matters in the demo

Because of the misspelled product lines, the SUMIF block on the **Summary** sheet does not tie back to the grand totals, and the outlier row pushes the average flow rate and the "top income product line" to the wrong answer. Run the dashboard prompt **before** cleanup and again **after** — the before/after difference is the strongest moment in the session.

