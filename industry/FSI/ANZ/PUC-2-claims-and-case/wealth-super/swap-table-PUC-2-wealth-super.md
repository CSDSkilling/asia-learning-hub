# PUC-2 · Wealth & Superannuation — swap table

Replace these placeholders in `../claims-and-case-guide-PUC-2.md` to run the wealth and super
variant. Do the swap before the session, not live.

| Placeholder | Wealth & Super value |
|---|---|
| `[InstitutionName]` | Meridian Super — a fictional fund. Substitute the name of the organisation you are delivering to if appropriate. |
| `[CaseType]` | case (complaint, insurance claim, hardship release, rollover dispute, beneficiary query) |
| `[PrimaryPersona]` | Member Services Lead, or claims assessor |
| `[SecondaryPersona]` | Trustee office / compliance |
| `[GoverningDocument]` | trust deed, insurance policy terms, product disclosure statement |
| `[SystemOfRecord]` | member administration system (often an outsourced administrator) |
| `[AdjacentSystem]` | insurer's claims system, CRM, complaints register |
| `[CustomerTerm]` | member (or claimant / beneficiary) |
| `[CoreMetric]` | days open / time to decision |
| `[SecondaryMetric]` | rework — repeat requests for information |

## Dataset

`_assets/Case_Register-PUC-2-wealth-super.csv` — 420 fictional cases.

Columns: `CaseID`, `LodgedMonth`, `CaseType`, `Region`, `Channel`, `Status`, `DaysOpen`,
`AmountAUD`, `DocumentCount`, `MissingEvidence`, `ReviewFlag`.

**What is deliberately in the data:**

- **Insurance claims run substantially longer than other case types.** TPD and death claims in
  particular. This is real-world true and it is the pattern Exercise 5 should surface.
- **Missing evidence compounds the delay.** Medical evidence is the most common gap and it sits
  mostly on the insurance claims — the cases where the member or their family is in the worst
  position to chase it.
- **Proof of relationship is a distinct gap category.** It appears on death benefit and beneficiary
  cases. Worth pausing on: behind that field is a bereaved family being asked for paperwork.
- **`Reopened` is a real status.** Reopened cases are a quality signal.

**Sample case file** — `_assets/Sample_Case_File-PUC-2-wealth-super.md`. Not yet built; use the
insurance claim file as a structural model. A TPD claim with outstanding medical evidence and an
unanswered member question is the highest-value scenario.

## Terminology to have ready

- **TPD** — total and permanent disablement cover, commonly held by default through the fund.
  Assessment is usually made by the insurer against policy definitions, not by the fund.
- **Death benefit** — paid to dependants or the estate. Determining who receives it can involve a
  trustee decision and a right of objection, which is why these cases run long.
- **Binding vs non-binding nomination** — whether the trustee must follow the member's nomination.
  A central fact in beneficiary cases.
- **Hardship release / compassionate grounds** — early access to superannuation, subject to
  conditions and evidence.
- **Conditions of release** — the circumstances in which superannuation can be paid.

## Two notes specific to this variant

**The three-party problem.** In most super insurance claims the fund, the administrator and the
insurer are separate organisations, and the member sits at the end of the chain. When Exercise 1
asks for "what has already been done", the honest answer often spans systems the fund does not own.
That is not a reason to skip the exercise — it is the strongest argument for it. Ask the room how
long it takes today to establish where a claim actually is.

**Vulnerability is the default here, not the exception.** A TPD claimant is unwell. A death benefit
claimant is bereaved. A hardship applicant is in financial distress. Exercise 3's tone work is not
an abstract conduct point in this variant — run it deliberately and slowly.

## Wealth and super-specific openers

- How long does it take to establish where a claim actually is, across the fund, the administrator
  and the insurer?
- What must be assembled before a claim can move confidently?
- How would you know today if something you promised a member was never followed up?
