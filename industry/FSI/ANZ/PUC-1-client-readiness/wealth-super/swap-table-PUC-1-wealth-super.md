# PUC-1 · Wealth & Superannuation — swap table

Replace these placeholders in `../client-readiness-guide-PUC-1.md` to run the wealth and super
variant. Do the swap before the session, not live.

| Placeholder | Wealth & Super value |
|---|---|
| `[InstitutionName]` | Meridian Super — a fictional fund. Substitute the name of the organisation you are delivering to if appropriate. |
| `[ClientTerm]` | member (use *client* for a wealth or advice audience) |
| `[PrimaryPersona]` | Member Services Lead, or Wealth Advisor |
| `[SecondaryPersona]` | Retirement specialist |
| `[ProductArea]` | superannuation and retirement savings |
| `[ProductFeature]` | investment options, insurance in super, or contribution types |
| `[Market]` | Australia and New Zealand |
| `[SystemOfRecord]` | member administration system |
| `[AdjacentSystem]` | CRM and contact centre platform |
| `[CoreMetric]` | preparation time per conversation |
| `[SecondaryMetric]` | proportion of the book receiving proactive contact |

## Datasets

**`_assets/Member_Portfolio_Snapshot-PUC-1-wealth-super.csv`** — 360 fictional member records.

Columns: `MemberRef`, `Segment`, `State`, `InvestmentOption`, `BalanceAUD`,
`AnnualContributionAUD`, `InsuranceCover`, `EngagementLevel`, `SwitchedLast12m`, `AdviserLinked`,
`ContactsLast12m`.

What is deliberately in the data:

- **A large low-engagement group holding meaningful balances.** This is what Exercise 6 Prompt 2 is
  designed to find, and it is the servicing argument.
- **Most members are not adviser-linked.** Around seven in ten. Useful context for why the
  information-versus-advice boundary in Exercise 5 is a live operational question for a super fund,
  not a theoretical one.
- **Pension segment members carry no contributions.** Correct behaviour, but it will skew any naive
  average — a good prompt for discussing why segment-level analysis beats a portfolio average.
- **Balances vary widely within every segment.** Deliberate. Segment alone is a poor proxy for
  member need, and a room will often assume otherwise.

**`_assets/Sample_Member_Context-PUC-1-wealth-super.md`** — one fictional pre-retirement member with
a three-line file note, three uncoordinated service interactions, and a promise made and not kept.
Read that file's trainer notes before delivering; it is constructed to make Exercise 5 work.

## Terminology to have ready

Superannuation vocabulary is not in the base FSI terminology set, so prepare these:

- **Accumulation vs pension phase** — building a balance versus drawing an income from it.
- **Concessional and non-concessional contributions** — before-tax and after-tax contributions, each
  with their own caps and rules.
- **MySuper** — the default investment option a member is placed into without making a choice.
- **Insurance in super** — death, total and permanent disability, and income protection cover held
  through the fund, often on a default basis.
- **Preservation age** — the age from which superannuation can generally be accessed, subject to
  conditions of release.

Use these to show you understand the environment, not to perform expertise. If a participant uses a
term differently, ask how the fund defines it.

## Wealth and super-specific openers

- What would shift time from assembling context to serving members? *(Wealth Advisor)*
- Which member questions get inconsistent answers across channels? *(Member Services Lead)*
- How would you know today if something you promised a member was never followed up?

## A note on the Member Services persona

This persona is an extension for the super sector rather than a standard financial services
persona — see `_shared/personas-FSI-shared.md`. Validate the framing against the organisation's own
role definitions before you rely on it.
