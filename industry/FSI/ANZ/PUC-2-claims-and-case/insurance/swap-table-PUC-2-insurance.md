# PUC-2 · Insurance — swap table

Replace these placeholders in `../claims-and-case-guide-PUC-2.md` to run the insurance variant.
Do the swap before the session, not live.

| Placeholder | Insurance value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional insurer. Substitute the name of the organisation you are delivering to if appropriate. |
| `[CaseType]` | claim |
| `[PrimaryPersona]` | Claims Adjuster |
| `[SecondaryPersona]` | Underwriter (for the portfolio exercises) |
| `[GoverningDocument]` | policy wording and policy schedule |
| `[SystemOfRecord]` | claims management system |
| `[AdjacentSystem]` | policy administration system |
| `[CustomerTerm]` | claimant |
| `[CoreMetric]` | days open / claim duration |
| `[SecondaryMetric]` | outstanding reserve |

## Datasets

**`_assets/Claims_Register-PUC-2-insurance.csv`** — 420 fictional claims.

Columns: `ClaimID`, `LodgedMonth`, `ClaimClass`, `Region`, `Channel`, `Status`, `DaysOpen`,
`IncurredAUD`, `PaidAUD`, `ReserveAUD`, `DocumentCount`, `MissingEvidence`, `FraudReviewFlag`.

What is deliberately in the data:

- **Missing evidence drives duration.** This is the relationship Exercise 5 Prompt 2 is designed to
  find, and it is the bridge from the single-file frustration in Exercises 1–2 to a portfolio-level
  argument. Let the room find it rather than announcing it.
- **Claim classes differ sharply in severity.** Commercial Property and Liability carry much larger
  incurred values than Travel or Contents, so a portfolio average is misleading — a good prompt for
  discussing why an aggregate number hides the risk.
- **About 7% of claims carry a review flag.** Enough to populate Exercise 6, not so many that the
  session becomes a fraud demo. The flag means *selected for review*, nothing more, and the guide is
  deliberate about that.
- **`Reopened` is a real status in the data.** Worth pointing out: reopened claims are a quality
  signal, not just a volume one.

**`_assets/Sample_Claim_File-PUC-2-insurance.md`** — one fictional storm-damage claim, 61 days open,
two reassignments. It contains a planted document inconsistency, an unanswered customer question
about a benefit the policy actually includes, and one genuine evidence gap blocking the file. The
trainer notes at the end of that file explain each; read them before you deliver.

## Terminology to have ready

- **Coverage** — risks, events, property, people, limits and conditions protected by a policy.
  Claims assistance must use authoritative policy documents and avoid unsupported conclusions.
- **Exclusion** — a circumstance or loss the policy does not cover. High-impact communications need
  evidence, review and clear explanation.
- **Claim severity** — the size or cost of a claim. Used in triage, reserving, forecasting and
  analytics; definitions and timing matter.
- **Claim frequency** — how often claims occur in a population or period. Comparisons need
  comparable exposure and time periods.
- **Reserve** — an estimate of the amount needed for future claim obligations. A specialist
  financial estimate, not a simple operational prediction.
- **Loss ratio** — claims-related cost compared with premium, under the insurer's own definition.

If a participant uses an acronym you do not know, ask how the organisation defines it and where it
appears in the process.

## Insurance-specific openers

- What must be assembled before a claim can move confidently? *(Claims Adjuster)*
- Which evidence is hardest to obtain or compare? *(Underwriter)*
- Where does a claim most often stall — and is it waiting on us, or on the customer?
