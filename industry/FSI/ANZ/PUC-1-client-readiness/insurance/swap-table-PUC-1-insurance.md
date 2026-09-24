# PUC-1 · Insurance — swap table

Replace these placeholders in `../client-readiness-guide-PUC-1.md` to run the insurance variant.
Do the swap before the session, not live.

| Placeholder | Insurance value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional insurer. Substitute the name of the organisation you are delivering to if appropriate. |
| `[ClientTerm]` | client (or policyholder) |
| `[PrimaryPersona]` | Account manager / distribution role |
| `[SecondaryPersona]` | Underwriter (for the portfolio exercises) |
| `[ProductArea]` | insurance programme and coverage |
| `[ProductFeature]` | a coverage limit, an exclusion, or an endorsement |
| `[Market]` | Australia and New Zealand |
| `[SystemOfRecord]` | policy administration system |
| `[AdjacentSystem]` | CRM, claims management, underwriting workbench |
| `[CoreMetric]` | preparation time per renewal conversation |
| `[SecondaryMetric]` | renewal retention rate |

## Datasets

`_assets/Client_Portfolio_Snapshot-PUC-1-insurance.csv` — 340 fictional client records.

Columns: `ClientRef`, `Segment`, `State`, `TenureYears`, `AnnualPremiumAUD`, `RenewalMonth`,
`ClaimsLast3Years`, `MonthsSinceContact`, `BrokerLinked`, `EngagementLevel`, `CoverageGapFlagged`.

**What is deliberately in the data:**

- **`CoverageGapFlagged` is set on roughly one in six clients.** Flagged at some point, with no
  indication of follow-up. This is the finding Exercise 6 should surface, and it is the strongest
  servicing argument in this variant — an identified gap nobody closed is worse than one never
  identified, because the organisation knew.
- **SME clients are the least contacted relative to premium.** Personal lines are low-touch by
  design; Corporate is well covered. SME falls between two service models.
- **`RenewalMonth` clusters unevenly across the year.** Useful for a conversation about whether
  preparation capacity matches the renewal calendar.
- **Claims history does not predict contact frequency.** Clients who have actually claimed are not
  contacted more, which is usually the opposite of what a room expects.

**Sample client context pack** — `_assets/Sample_Client_Context-PUC-1-insurance.md`. Not yet built;
use the banking or wealth-super pack as a structural model, or narrate from a real renewal file with
identifying details removed.

## Terminology to have ready

- **Coverage** — the risks, events, property, people, limits and conditions a policy protects.
  Conversations must use authoritative policy documents and avoid unsupported conclusions.
- **Exclusion** — a circumstance or loss the policy does not cover. High-impact communications need
  evidence, review and clear explanation.
- **Endorsement** — a change to policy terms or information. Validate authority, effective dates,
  downstream updates and confirmation.
- **Underinsurance** — where the sum insured would not meet the actual loss. The substance behind a
  flagged coverage gap, and the reason this variant matters.
- **Premium** — the amount charged for cover. Pricing depends on product rules, exposure data,
  assumptions and approved models.

## An insurance-specific note on Exercise 5

The boundary here is **coverage advice**. A briefing may set out what a client holds, what has
changed, what has been flagged, and what questions to ask. It must not state or imply that a
particular loss would be covered, that a limit is adequate, or that a client should change their
programme.

Run Exercise 5 with the prompt *"based on this file, is this client adequately covered?"* and
dismantle the answer. What is absent: current values at risk, the client's own view of their
exposure, the full policy wording, and any professional assessment. Where the organisation holds an
advice licence, the general-versus-personal advice distinction applies on top.

## Insurance-specific openers

- What preparation is manual before a renewal conversation?
- How do you know today whether a flagged coverage gap was ever discussed with the client?
- Which clients have you not spoken to since their last claim?
