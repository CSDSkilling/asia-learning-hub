# Retail Use Cases

Two use cases for a fictional multi-store retailer, Juniper Lane Retail. Both are modelled on the existing use cases in the `industry/` folder and follow the guidance in [Copilot and agent builder use cases.txt](../../Copilot%20and%20agent%20builder%20use%20cases.txt).

All data is synthetic. It is for demonstration only and contains no real customers, employees or suppliers.

---

## Use Cases

| # | Use case | Type | Who it helps | Start here |
|---|----------|------|--------------|------------|
| 1 | Weekly Store Performance & Promotion Review | Microsoft 365 Copilot (Excel, Word, PowerPoint, Outlook) | Retail operations managers, category leads | [README](./Copilot/Weekly%20Store%20Performance%20%26%20Promotion%20Review/README.md) |
| 2 | Store Replenishment & Markdown Advisor | Agent Builder agent with knowledge sources | Store operations leads, merchandising teams | [README](./Agent%20Builder/Store%20Replenishment%20%26%20Markdown%20Advisor/README.md) |

### 1. Weekly Store Performance & Promotion Review

Finds the stores and categories that are off target, checks whether promotions explain the gap, adds the store manager feedback, and drafts the leadership pack and follow-up email. The manager reviews everything before it is sent.

### 2. Store Replenishment & Markdown Advisor

Reads the inventory snapshot, supplier lead times, promotions and markdown policy. It returns a prioritised 7-day action list: transfers within the same region first, then delivery gaps, then markdowns within policy. It states when data is stale and never recommends a cross-region transfer.

---

## Folder Layout

```text
industry/Retail/
├── README.md                                    (retail index)
├── README-Ajay.md                               (this file)
├── Copilot/
│   ├── Weekly Store Performance & Promotion Review/
│   │   ├── README.md
│   │   └── sample-files/
│   │       ├── store_weekly_sales.csv
│   │       ├── promo_calendar.csv
│   │       └── store_feedback.csv
│   └── Australia/
│       └── Retail Performance Analysis/
└── Agent Builder/
    ├── Store Replenishment & Markdown Advisor/
    │   ├── README.md
    │   └── setup.md
    └── data files/
        └── Store Replenishment Demo Pack/
            ├── inventory_snapshot.xlsx
            ├── products.xlsx
            ├── stores.xlsx
            ├── supplier_lead_times.xlsx
            ├── promotions.xlsx
            └── markdown_policy.txt
```

---

## Suggested Order

1. Read the Copilot README and run Stage 1 (about 15 minutes). This shows the value quickly.
2. Read the Agent Builder README and follow [setup.md](./Agent%20Builder/Store%20Replenishment%20%26%20Markdown%20Advisor/setup.md) (about 20 minutes).
3. Run the Agent Builder demo prompt and check the expected results table.

---

## Using Your Own Data

Both use cases are built around simple, clean file shapes. To adapt them:

- Keep the column names, or update the prompts to match your names.
- Replace the store, product and supplier names with your own in a test copy.
- Do not put real customer, employee or confidential supplier data into a shared demo.

---

## Guardrails

- Copilot and agent outputs are drafts and recommendations. People make the final decisions on stock, pricing, markdowns and communication.
- Check every number against the source file before it goes into a deck, email or policy change.
- Keep demos inside your tenant and share them with the intended audience only.
