# PUC-3 · Wealth & Superannuation — swap table

Replace these placeholders in `../governed-insight-guide-PUC-3.md` to run the wealth and super
variant. Do the swap before the session, not live.

| Placeholder | Wealth & Super value |
|---|---|
| `[InstitutionName]` | Meridian Super — a fictional fund. Substitute the name of the organisation you are delivering to if appropriate. |
| `[Sector]` | superannuation and retirement savings |
| `[Market]` | Australia and New Zealand |
| `[PrimaryPersona]` | Risk Officer, or Member Analytics lead |
| `[SecondaryPersona]` | Trustee office / compliance |
| `[CoreMetric]` | net flow |
| `[SecondaryMetric]` | member switching and contact coverage |
| `[SystemOfRecord]` | member administration system (often an outsourced administrator) |
| `[AdjacentSystem]` | CRM, contact centre, investment administration |

## Dataset

`_assets/Portfolio_Performance-PUC-3-wealth-super.csv` — 360 rows, 12 months x 6 regions x 5
segments.

Columns: `Month`, `Region`, `Segment`, `Members`, `FUMAUD`, `InflowsAUD`, `OutflowsAUD`,
`NetFlowAUD`, `SwitchedOut`, `ContactRatePct`.

**What is deliberately in the data:**

- **Pre-retirement switching out rises steadily through the year.** This is the finding Exercise 2
  is built around, and it is the most commercially meaningful pattern in any dataset in this
  library — members leaving at the point their balance is largest.
- **Pension segment outflows are structurally higher.** Correct behaviour, not a problem. If the
  room reads it as attrition, that is a good teaching moment about understanding the business before
  interpreting the number.
- **Net flow is pre-calculated as inflows minus outflows.** Deliberate, for the Exercise 3 formula
  validation prompt.
- **Contact rate does not track balance or segment value.** Deliberate. The members with the most at
  stake are not the most contacted — which connects this PUC directly to PUC-1.

## A structural note worth raising

Many super funds do not run their own member administration — it is outsourced to a third-party
administrator. That changes the Exercise 5 conversation materially: the system of record may sit
outside the organisation entirely, and data quality, lineage and access are contractual questions as
much as technical ones.

Ask early whether administration is in-house or outsourced. If outsourced, **CPS 230**'s material
service provider obligations become the live regulatory thread rather than a background one.

## Terminology to have ready

- **FUM / FUA** — funds under management or administration. Confirm which the organisation means.
- **Net flow** — inflows less outflows. Definitions vary on whether investment earnings, internal
  transfers and pension payments are included.
- **Accumulation vs pension phase** — building a balance versus drawing an income from it.
- **MySuper** — the default investment option for members who do not make a choice.
- **Preservation age** — the age from which superannuation can generally be accessed, subject to
  conditions of release.
- **Member switching** — moving between investment options within the fund, or leaving the fund
  entirely. These are very different events; check which the data captures.

## Wealth and super-specific openers

- Which decisions need better evidence, faster analysis or clearer lineage? *(Risk Officer)*
- How long after month end do you have a net flow number the trustee will rely on?
- If administration is outsourced, how do you assure the data you are reporting on?
