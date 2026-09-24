# PUC-3 · Banking — swap table

Replace these placeholders in `../governed-insight-guide-PUC-3.md` to run the banking variant.
Swapping takes about five
minutes; do it before the session, not live.

| Placeholder | Banking value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional institution. Substitute the name of the organisation you are delivering to if appropriate. |
| `[Sector]` | retail banking |
| `[Market]` | Australia and New Zealand |
| `[PrimaryPersona]` | Risk Officer |
| `[SecondaryPersona]` | Compliance Officer |
| `[CoreMetric]` | 90-day arrears rate |
| `[SecondaryMetric]` | exposure concentration by region and product |
| `[SystemOfRecord]` | core banking platform |
| `[AdjacentSystem]` | loan origination and servicing platform |

## Dataset

`_assets/Retail_Portfolio_Performance-PUC-3-banking.csv` — 288 rows, 12 months x 6 regions x 4
products.

Columns: `Month`, `Region`, `Product`, `Segment`, `Accounts`, `Balance_AUD`,
`Arrears_30d_Accounts`, `Arrears_90d_Accounts`, `Avg_LVR_Pct`, `New_Originations`, `Provision_AUD`.

**What is deliberately in the data** (so you can steer the room):

- WA and QLD carry a rising arrears trend across the year; NSW and VIC are broadly stable.
- Credit Card and Personal Loan run materially higher arrears rates than Home Loan — a useful
  reminder that a portfolio-level number hides product-level risk.
- `Avg_LVR_Pct` is blank for unsecured products. This is intentional. When Analyst or Copilot
  handles the blanks well, say so; when it averages over them, that is your teaching moment about
  data quality rules before analytics.
- Provisioning is derived from arrears with noise, so it *mostly* tracks — Exercise 2 Prompt 2
  asks the room to find where it does not.

## Terminology to have ready

- **Loan-to-value ratio** — loan amount compared with the value of the securing asset. Inputs,
  valuation date and policy treatment must be clear.
- **Non-performing loan** — materially past-due, or unlikely to be repaid according to terms. Used
  in portfolio monitoring, collections, impairment and reporting.
- **Liquidity** — ability to meet payment and funding obligations when due.
- **Credit risk** — risk that a borrower or counterparty will not meet an obligation. Distinguish
  assistance and insight from final credit decision authority.
- **Model risk** — risk from incorrect, misused, poorly understood or insufficiently controlled
  models. Include evaluation, limitations, monitoring, change control and human oversight.

If a participant uses an acronym you do not know, ask how the institution defines it and where it
appears in the process.

## Banking-specific openers

- Which decisions need better evidence, faster analysis, or clearer lineage? *(Risk Officer)*
- Where is it hard to find policy, or to prove a control operated? *(Compliance Officer)*
