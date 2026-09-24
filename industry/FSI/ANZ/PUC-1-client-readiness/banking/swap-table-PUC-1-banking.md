# PUC-1 · Banking — swap table

Replace these placeholders in `../client-readiness-guide-PUC-1.md` to run the banking variant.
Do the swap before the session, not live.

| Placeholder | Banking value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional bank. Substitute the name of the organisation you are delivering to if appropriate. |
| `[ClientTerm]` | client (or customer) |
| `[PrimaryPersona]` | Relationship Manager |
| `[SecondaryPersona]` | Branch Manager |
| `[ProductArea]` | lending and transaction banking |
| `[ProductFeature]` | a facility structure, a rate change, or a transaction product |
| `[Market]` | Australia and New Zealand |
| `[SystemOfRecord]` | core banking platform |
| `[AdjacentSystem]` | CRM, loan origination and servicing |
| `[CoreMetric]` | preparation time per client conversation |
| `[SecondaryMetric]` | proportion of the book contacted in the last 12 months |

## Datasets

`_assets/Client_Portfolio_Snapshot-PUC-1-banking.csv` — 340 fictional client records.

Columns: `ClientRef`, `Segment`, `State`, `TenureYears`, `TotalBalanceAUD`, `LendingBalanceAUD`,
`ProductCount`, `MonthsSinceContact`, `RelationshipManagerAssigned`, `EngagementLevel`,
`OpenServiceItems`.

**What is deliberately in the data:**

- **Small Business clients go longest without contact.** Despite holding meaningful lending. This is
  the finding Exercise 6 Prompt 2 is built to surface, and it is the servicing argument.
- **Commercial clients are contacted frequently and almost always have an RM assigned.** The
  contrast is the point — coverage follows the org chart, not the need.
- **`OpenServiceItems` is populated across the book.** Worth connecting back to Exercise 2: an open
  item on a file is an unresolved promise to a customer.
- **Balance varies widely within every segment.** Segment alone is a poor proxy for client need.

**Sample client context pack** — `_assets/Sample_Client_Context-PUC-1-banking.md`. Read its trainer
notes before delivering; it is constructed to make Exercise 5 work.

## Terminology to have ready

- **Loan-to-value ratio** — loan amount compared with the value of the securing asset. Inputs,
  valuation date and policy treatment must be clear.
- **Credit risk** — risk that a borrower or counterparty will not meet an obligation. Distinguish
  assistance and insight from final credit decision authority.
- **Covenant** — a condition attached to a facility. Where covenants exist, so do monitoring and
  reporting obligations.
- **Straight-through processing** — a transaction completed with minimal manual intervention. Useful
  only when exceptions, controls, reconciliation and recovery are designed.

## A banking-specific note on Exercise 5

In wealth and super, the boundary in Exercise 5 is the line between general information and personal
financial advice. In banking it is usually a **credit decision** instead — and it is just as firm.

A briefing may assemble a client's position, their facilities and their history. It must not signal
an appetite, an approval, a rate, or an outcome. Lending decisions carry responsible lending
obligations and internal credit authority, and a client who hears "that should be fine" from a
relationship manager has heard a commitment.

Run Exercise 5 with the prompt *"based on this file, should we extend their facility?"* and dismantle
the answer the same way.

## Banking-specific openers

- What preparation is manual before a client conversation? *(Relationship Manager)*
- Where does the team lose the most time serving or following up? *(Branch Manager)*
- How would you know today if something you promised a client was never followed up?
