# Industry Demos — Financial Services (FSI), Australia & New Zealand

Reusable demo and use-case assets for trainers delivering Copilot, agent, Microsoft Foundry and
Microsoft Fabric skilling into banks, insurers and superannuation/wealth providers across
Australia and New Zealand.

Intended for Microsoft Technical Trainers, partner trainers, and anyone preparing technical
enablement for a financial services audience in this region.

---

## Why this library exists

Technical content lands better when it is framed in the language of the audience's own work.
Financial services learners operate within distinctive technology, operational, security, risk and
regulatory constraints, and technical depth is most effective when it is connected to that context.

This library is an **industry overlay**. It does not replace or duplicate existing courseware —
it supplies the domain narratives, prompts and datasets that let an existing delivery land in a
bank, an insurer or a super fund.

**We do not build new courses here.**

---

## Structure: three parent use cases, three sub-verticals, two depth tiers

The structure is deliberately **not** a 3 x 3 x 3 matrix of demo guides. The exercises change very
little between banking and insurance — a claims adjuster assembling evidence and a loan officer
assembling an application pack are the same motion over different documents. What changes is the
persona, the dataset and the regulatory context.

### The three parent use cases (PUCs)

| PUC | Name | Office | Primary pillar |
|---|---|---|---|
| PUC-1 | Client Readiness — the credible conversation | Front | Copilot & Agents |
| PUC-2 | Claims & Case — from alert to evidence | Back | Copilot & Agents / Foundry |
| PUC-3 | Governed Insight at Scale — portfolio & risk | Back | Microsoft Fabric |

Each PUC owns **one** demo guide. That guide is the deliverable.

### The three sub-verticals

`banking/` · `insurance/` · `wealth-super/`

A sub-vertical folder is **light**. It holds only:

1. `swap-table-PUC-n-<vertical>.md` — placeholder to sub-vertical value, so the shared guide
   re-skins in minutes
2. `_assets/` — the synthetic documents and datasets for that vertical
3. `regulatory-beat-PUC-n-<vertical>.md` — a short framing of the obligations that make the
   scenario feel local

### File naming

Every file carries its PUC number, and where relevant its sub-vertical, **at the end of the
filename**. This matters more than it looks: without it there are three files called `readme.md`
and nine called `swap-table.md`, which is unworkable once they are open in tabs, attached to a chat
or downloaded into one folder.

| Pattern | Example |
|---|---|
| `<name>-guide-PUC-n.md` | `governed-insight-guide-PUC-3.md` |
| `swap-table-PUC-n-<vertical>.md` | `swap-table-PUC-3-banking.md` |
| `regulatory-beat-PUC-n-<vertical>.md` | `regulatory-beat-PUC-3-banking.md` |
| `<Dataset>-PUC-n-<vertical>.csv` | `Retail_Portfolio_Performance-PUC-3-banking.csv` |
| `<name>-FSI-shared.md` | `personas-FSI-shared.md` |

Shared files use `-FSI-shared` rather than a PUC number, because they apply across all three.

### The two depth tiers

Every PUC can be facilitated at either level using the **same** assets:

- **L1 — Applied.** Here is the workflow, here are the prompts. Suits foundational cohorts and
  first exposure to a capability.
- **L2 — Transformational.** The same scenario, but participants identify the friction themselves
  and choose the capability. Suits audiences who are already comfortable with the fundamentals and
  are ready to move from operating features to framing problems.

L2 is a facilitation mode, not a folder. Each guide carries an `## L2 variant` section.

---

## Folder map

```
industry/FSI/
  README.md                                    <- you are here
  _shared/
    personas-FSI-shared.md
    anz-regulatory-notes-FSI-shared.md
    trainer-guardrails-FSI-shared.md
  PUC-1-client-readiness/
    client-readiness-guide-PUC-1.md
    wealth-super/
      swap-table-PUC-1-wealth-super.md
      regulatory-beat-PUC-1-wealth-super.md
      _assets/
    banking/  insurance/
  PUC-2-claims-and-case/
    claims-and-case-guide-PUC-2.md
    insurance/
      swap-table-PUC-2-insurance.md
      regulatory-beat-PUC-2-insurance.md
      _assets/
    banking/  wealth-super/
  PUC-3-governed-insight/
    governed-insight-guide-PUC-3.md
    banking/
      swap-table-PUC-3-banking.md
      regulatory-beat-PUC-3-banking.md
      _assets/
    insurance/  wealth-super/
```

---

## Build sequence

Build the diagonal, not the matrix. Three builds cover all three PUCs and all three sub-verticals:

| Wave | Build | PUC | Sub-vertical | Pillar | Status |
|---|---|---|---|---|---|
| 1 | A | PUC-3 Governed Insight | Banking | Fabric | draft |
| 1 | B | PUC-2 Claims & Case | Insurance | Copilot & Agents | draft |
| 1 | C | PUC-1 Client Readiness | Wealth & Super | Copilot & Agents | draft |
| 2 | — | Remaining six sub-vertical variants | — | — | draft |

All nine cells now have a swap table, a regulatory beat and a dataset.

### Coverage matrix

| | Banking | Insurance | Wealth & Super |
|---|---|---|---|
| **PUC-1** Client Readiness | full | swap + beat + data | **anchor** |
| **PUC-2** Claims & Case | swap + beat + data | **anchor** | swap + beat + data |
| **PUC-3** Governed Insight | **anchor** | swap + beat + data | swap + beat + data |

**anchor** = the variant the guide was written against, with a worked sample case or context pack.
**full** = complete including a sample context pack.

### Known gaps

Three sub-vertical folders have a swap table, a regulatory beat and a dataset, but no worked sample
case or context pack. The guides still run — use the anchor variant's pack as a structural model, or
narrate from a real file with identifying details removed. Each swap table says which.

| Missing | Suggested scenario |
|---|---|
| `PUC-1/insurance/_assets/Sample_Client_Context-PUC-1-insurance.md` | A renewal with a coverage gap flagged and never discussed |
| `PUC-2/banking/_assets/Sample_Case_File-PUC-2-banking.md` | A hardship request or loan application missing a serviceability document |
| `PUC-2/wealth-super/_assets/Sample_Case_File-PUC-2-wealth-super.md` | A TPD claim with outstanding medical evidence and an unanswered member question |

---

## Contribution rules

Every PUC guide must carry, for each exercise:

1. **A measure.** Turnaround time, rework, customer effort, quality, or control evidence.
   A demo without a measure is a feature tour.
2. **A decision-authority boundary.** What the person still owns. Regulated, judgment-based,
   high-impact and customer-affecting decisions stay with a human.

Keep assets in `_assets/`, never loose alongside the guide.

**All sample data in this library is fictional and for training use only.** Never commit data
belonging to any organisation into this repository, and never include material that identifies a
specific institution, engagement or individual.

**Talking about compliance accurately.** Regulatory questions come up constantly in this industry,
and they deserve a real answer. Microsoft publishes extensive compliance evidence — independent
audit reports, certifications, and guidance written specifically for financial services regulators
in this region — and these guides link to it directly so you can share it in the room.

What the evidence can't do is determine whether a particular organisation, in its particular
configuration, meets its particular obligations. Regulators supervise the institution, not its
technology supplier. So the accurate framing is always "here's the published evidence, here's where
the boundary sits, and here's what your control owner will need to assess" — rather than describing
any product as "compliant" on its own.

That's a point about precision, not caution. `_shared/trainer-guardrails-FSI-shared.md` sets out how
to answer these questions well, and each PUC's `regulatory-beat-PUC-n-<vertical>.md` carries worked
answers and source links for the questions that come up most often.
