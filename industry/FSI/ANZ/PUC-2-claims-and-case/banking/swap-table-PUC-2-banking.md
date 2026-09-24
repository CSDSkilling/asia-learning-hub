# PUC-2 · Banking — swap table

Replace these placeholders in `../claims-and-case-guide-PUC-2.md` to run the banking variant.
Do the swap before the session, not live.

| Placeholder | Banking value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional bank. Substitute the name of the organisation you are delivering to if appropriate. |
| `[CaseType]` | case (loan application, dispute, hardship request, complaint, or financial crime review) |
| `[PrimaryPersona]` | Loan Officer, or case handler |
| `[SecondaryPersona]` | Compliance Officer |
| `[GoverningDocument]` | credit policy, product terms and conditions, hardship policy |
| `[SystemOfRecord]` | core banking platform; loan origination and servicing |
| `[AdjacentSystem]` | financial crime case management, complaints system |
| `[CustomerTerm]` | customer |
| `[CoreMetric]` | days open / time to decision |
| `[SecondaryMetric]` | rework — repeat requests for information |

## Dataset

`_assets/Case_Register-PUC-2-banking.csv` — 420 fictional cases.

Columns: `CaseID`, `LodgedMonth`, `CaseType`, `Region`, `Channel`, `Status`, `DaysOpen`,
`ExposureAUD`, `DocumentCount`, `MissingEvidence`, `ReviewFlag`.

**What is deliberately in the data:**

- **Missing evidence drives duration.** Cases with an outstanding evidence item run materially
  longer. This is the relationship Exercise 5 Prompt 2 is built to find, and the bridge from
  single-case friction to a portfolio argument.
- **Income evidence is the most common gap.** Concentrated in loan applications and hardship
  requests — the two case types where a delay hurts the customer most.
- **`Reopened` is a real status.** Reopened cases are a quality signal, not just volume.
- **About 8% carry a review flag.** Enough for Exercise 6, not so many the session becomes a
  financial crime demo. The flag means *selected for review*, nothing more.

**Sample case file** — `_assets/Sample_Case_File-PUC-2-banking.md`. Not yet built; use the insurance
claim file as a structural model, or narrate from a real case with identifying details removed. A
hardship request or a loan application with a missing serviceability document works best.

## Terminology to have ready

- **Credit risk** — risk that a borrower will not meet an obligation. Distinguish assistance and
  insight from final credit decision authority.
- **Serviceability** — whether a borrower can meet repayments. The assessment at the centre of a
  lending decision, and the thing a missing income document blocks.
- **Non-performing loan** — materially past-due, or unlikely to be repaid according to terms.
- **AML / sanctions screening** — anti-money-laundering monitoring and list checking. AI may support
  investigation, but decisions, evidence, auditability and false positives require governance.
- **Financial hardship** — where a customer cannot meet obligations. Carries specific Code
  obligations around support and communication.

## A banking-specific note on Exercise 6

In the insurance variant, Exercise 6 is about not characterising a claim as fraudulent. In banking
the equivalent is **financial crime review**, and the constraint is firmer still: a suspicious matter
determination carries legal obligations, including around disclosure, and is made by specific people
under a defined process.

Keep the exercise to organising evidence. Do not let the room drift toward scoring or ranking
customers by suspicion, and say clearly why.

Hardship cases deserve their own note: these customers are, by definition, experiencing difficulty.
Tone in any generated communication matters more here than anywhere else in the library.

## Banking-specific openers

- Which step delays a clear decision or customer update? *(Loan Officer)*
- Where is it hard to find policy, or to prove a control operated? *(Compliance Officer)*
- How often do you go back to a customer twice for the same thing?
