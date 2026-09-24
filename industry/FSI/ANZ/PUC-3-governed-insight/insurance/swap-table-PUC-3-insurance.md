# PUC-3 · Insurance — swap table

Replace these placeholders in `../governed-insight-guide-PUC-3.md` to run the insurance variant.
Do the swap before the session, not live.

| Placeholder | Insurance value |
|---|---|
| `[InstitutionName]` | Northwind Mutual — a fictional insurer. Substitute the name of the organisation you are delivering to if appropriate. |
| `[Sector]` | general insurance |
| `[Market]` | Australia and New Zealand |
| `[PrimaryPersona]` | Underwriter, or Portfolio Manager |
| `[SecondaryPersona]` | Actuarial and risk |
| `[CoreMetric]` | loss ratio |
| `[SecondaryMetric]` | claim frequency and average severity by class |
| `[SystemOfRecord]` | policy administration and claims management systems |
| `[AdjacentSystem]` | underwriting workbench / rating platform |

## Dataset

`_assets/Portfolio_Performance-PUC-3-insurance.csv` — 360 rows, 12 months x 6 regions x 5 classes.

Columns: `Month`, `Region`, `ClassOfBusiness`, `PoliciesInForce`, `GrossWrittenPremiumAUD`,
`ClaimsIncurredAUD`, `ClaimCount`, `AvgClaimSeverityAUD`, `LossRatioPct`, `RenewalRatePct`.

**What is deliberately in the data:**

- **Home and Commercial Property in QLD and NZ deteriorate through the year.** A weather-exposure
  pattern. This is what Exercise 2 is designed to surface.
- **Loss ratio is calculated in the file.** Deliberate — Exercise 3's validation prompt asks Copilot
  to explain how a metric is derived and check it is applied consistently. Having the formula
  already present makes that exercise concrete rather than hypothetical.
- **Travel has high frequency and very low severity; Commercial Property is the inverse.** A
  portfolio-level average of either measure is close to meaningless. Good material for the
  data-quality-rules discussion in Exercise 5.
- **Renewal rate varies but does not correlate with loss ratio.** Deliberate. If the room asserts a
  relationship, ask them to show it — a useful lesson in not reading causation into a dashboard.

## Terminology to have ready

- **Loss ratio** — claims-related cost compared with premium, under the insurer's own definition.
  Requires consistent definitions, accounting treatment and lineage. This is the definitional
  argument at the heart of Exercise 4.
- **Claim frequency** — how often claims occur in a population or period. Comparisons need
  comparable exposure and time periods.
- **Claim severity** — the size or cost of a claim. Definitions and timing matter.
- **Reserve** — an estimate of the amount needed for future claim obligations. A specialist
  financial estimate, not a simple operational prediction.
- **Reinsurance** — insurance purchased by an insurer to manage loss exposure. Data, contracts,
  recoveries and reporting span complex organisations.

## Insurance-specific framing for Exercise 4

The pivot question in the parent guide — *who owns the definition of this metric, and where is it
documented?* — is unusually sharp in insurance. Loss ratio can be calculated gross or net of
reinsurance, on written or earned premium, and with or without claims handling expense. Different
teams in the same insurer routinely mean different things by it.

Ask the room which definition the number on screen uses. The pause you get is the point of the
exercise.

## Insurance-specific openers

- Which evidence is hardest to obtain or compare? *(Underwriter)*
- Where do your portfolio numbers and your actuarial numbers disagree, and why?
- How long after month end do you have a view you trust?
