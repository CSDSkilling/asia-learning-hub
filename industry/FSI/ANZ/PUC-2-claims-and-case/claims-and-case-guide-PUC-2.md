# PUC-2 — Claims & Case: from alert to evidence

**Applied exercise — case assembly, triage and customer communication with Microsoft 365 Copilot
and agents**

Parent use case guide. Re-skin for a sub-vertical using the `swap-table-PUC-2-<vertical>.md` in
`insurance/`, `banking/` or `wealth-super/`.

---

## Session objective

Show how a document-heavy, judgment-heavy case process gets faster **without** moving the decision
away from the person accountable for it.

Claims, fraud investigation, loan application assessment and complaint handling are the same shape:
a case arrives, evidence is scattered and incomplete, a human has to assess it, and someone is
waiting anxiously for an answer. The friction is consistent — document volume, missing information,
handoffs, and a customer with no visibility.

This is the PUC where the **decision-authority boundary** does the most work. Demonstrate it early
and explicitly; a room of assessors will disengage from any demo that appears to automate their
judgment.

**Duration:** 60 minutes (L1 core, Exercises 1–5) · 90 minutes (with Exercises 6–8)

---

## Target audience

| Tier | Who | Run exercises | Notes |
|---|---|---|---|
| T1 | Frontline case handlers and assessors | 1–4 | The core audience. Keep it practical. |
| T2 | Team leaders and operations managers | 1–3, 5 | Add the portfolio view in Exercise 5. |
| T3 | Specialist investigators | 1, 2, 5, 6 | Emphasise evidence handling and audit trail. |
| T4 | Process and automation owners | 5–8 | Agent design and governance. |
| T5 | Risk, compliance and conduct teams | 2, 6, 7 | Lead with the boundary and the audit trail. |

---

## Prerequisites

- Microsoft 365 Copilot (Chat), with the **Researcher** and **Analyst** agents enabled
- **Create agent** in Microsoft 365 Copilot / Copilot Studio
- Microsoft Purview access, or screenshots, for Exercise 7

**Sample data** — from this PUC's sub-vertical `_assets/` folder:

- `Claims_Register-PUC-2-insurance.csv` — 420 fictional cases with status, ageing, financials and
  evidence gaps
- `Sample_Claim_File-PUC-2-insurance.md` — one fictional case file with notes, documents and an
  obvious gap
- Policy or product wording *(substitute your own, or narrate)*

> All sample data is fictional and for training use only. Trainers may substitute equivalent data
> from the organisation they are delivering to in order to increase relevance — but that data must
> never be committed back to this repository.

---

## Scenario overview

A case has arrived at **[InstitutionName]**. The file runs to a dozen documents of varying quality,
the customer has already called twice for an update, and the assessor has forty other files open.

You will: assemble the file, find what's missing, understand where this case sits against the wider
portfolio, communicate with the customer, handle a risk signal responsibly, and then package the
repetitive parts as an agent that knows what it is not allowed to decide.

---

## Exercise 1 — Assemble the case file

**Steps**

1. Open Microsoft 365 Copilot Chat.
2. Attach the sample case file (`Sample_Claim_File-PUC-2-insurance.md` for insurance) and any
   supporting documents you are using.
3. Enter the prompt.

**Prompt**

```
Summarise this case file for an assessor picking it up cold. Cover: what happened, what the
customer is asking for, what has already been done, and the current status. Keep it under 200
words and flag anything that looks inconsistent between documents.
```

**Expected outcome** — a handover summary that would genuinely save an assessor ten minutes, with
the inconsistency in the sample file surfaced.

> **Trainer tip:** ask the room how long this takes them today. You will usually hear 15–30 minutes
> per file. That number is your measure for the rest of the session — write it on the whiteboard.

**Measure:** time to first informed action on a new or reassigned case.
**Decision boundary:** summarisation only. No assessment of the merits has occurred.

---

## Exercise 2 — Find what's missing

**Steps**

1. Continue in the same chat.
2. Enter the prompts in sequence.

**Prompt 1**

```
Based on this file, what evidence is missing or unclear that would be needed before this case
can progress? List each gap, why it matters, and who would need to provide it.
```

**Prompt 2**

```
Draft a short, plain-English request to the customer for the outstanding items. Explain why each
item is needed. Do not commit to any outcome or timeframe.
```

**Expected outcome** — a gap list and a request that asks for everything at once.

> **Trainer tip:** the highest-value point in this exercise is *rework avoided*. Repeated partial
> requests are a major driver of case duration and customer frustration. One complete request beats
> three partial ones, and the room will recognise this immediately.

Note the explicit instruction not to commit to an outcome or timeframe. Point at it. That single
line in the prompt is the difference between a helpful draft and a conduct problem.

**Measure:** rework — number of return trips to the customer for information.
**Decision boundary:** the request is a draft for human review before it is sent.

---

## Exercise 3 — Draft the customer update

**Steps**

1. Enter the prompt.

**Prompt**

```
Draft an update to the customer explaining where their case is up to and what happens next.
Plain English, no jargon, acknowledge that they have been waiting. Base it only on what is in
the file — if something is not yet decided, say that it is still being assessed rather than
implying an outcome.
```

**Then run the counter-example.** Ask Copilot to rewrite it "more reassuringly" and read both
versions aloud. The second will usually drift toward implying a positive outcome.

**Expected outcome** — the room sees exactly how tone instructions can quietly create an
expectation the organisation has not agreed to. This is the most important thirty seconds of the
session for a conduct or compliance audience.

**Measure:** customer effort and complaint volume driven by unclear status.
**Decision boundary:** communications that convey or imply a decision require human review before
sending. Always.

---

## Exercise 4 — Retrieve the governing terms

**Steps**

1. Attach the policy or product wording you are using.
2. Enter the prompt.

**Prompt**

```
Using only the attached document, what sections are relevant to this case? Quote the relevant
wording and cite the section. If the document does not clearly address a point, say so rather
than inferring.
```

**Expected outcome** — cited, quoted extracts rather than a paraphrase, and an explicit "not
addressed" where the document is silent.

> **Trainer tip:** the "say so rather than inferring" instruction is the one to highlight. In a
> regulated process, an AI that admits a gap is far more useful than one that fills it.

**Measure:** quality — consistency of how terms are applied between assessors.
**Decision boundary:** interpretation of terms against a specific set of facts is a human decision.
Retrieval supports it; it does not make it.

---

## Exercise 5 — See the portfolio

**Steps**

1. Open the **Analyst** agent and attach the case register
   (`Claims_Register-PUC-2-insurance.csv` for insurance).
2. Enter the prompts.

**Prompt 1**

```
Summarise the current caseload: volume by status, average days open by class, and the total
outstanding reserve. Identify which class is ageing fastest.
```

**Prompt 2**

```
Which missing-evidence category is most common, and which classes does it most affect? Quantify
the impact on days open.
```

**Prompt 3**

```
Based on this, what are the three highest-value process improvements? For each, state the
evidence from the data and what you cannot determine from this data alone.
```

**Expected outcome** — Analyst connects a single-case frustration to a portfolio-level pattern. The
dataset carries a genuine relationship between missing evidence and case duration, so this lands.

**Measure:** throughput and backlog ageing.
**Decision boundary:** analysis informs process design. Resourcing and prioritisation remain
management decisions.

---

## Exercise 6 — Handle a risk signal responsibly

**Steps**

1. Filter the register to cases flagged for review.
2. Enter the prompt.

**Prompt**

```
For the flagged cases, summarise what the data shows about each — class, value, ageing, channel
and evidence status. Present this as an investigator's starting point. Do not characterise any
case or customer as fraudulent, and do not rank them by likelihood of fraud.
```

**Expected outcome** — organised evidence with no conclusion attached.

This exercise exists to be *constrained*. The instruction not to characterise or rank is the
demonstration. Say plainly: assembling evidence is assistance; concluding that a person has acted
dishonestly is an accountable human decision with serious consequences for a real customer, and it
requires an auditable trail of who decided what and why.

**Measure:** investigator time spent assembling rather than assessing.
**Decision boundary:** the hardest boundary in this guide. Recommendations must stay separable from
decisions, and actions and overrides must be logged.

---

## Exercise 7 — Classification and audit trail (Purview)

**Steps**

1. Show sensitivity labelling applied to case documentation.
2. Walk the six checks against this scenario: identity, authorization, data classification,
   source-of-truth ownership, audit logging, failure handling.
3. Show where prompts and responses are captured for audit and eDiscovery.

**Expected outcome** — the room understands that AI interactions in a case process are themselves
records, and behave like records.

**Measure:** control evidence.
**Decision boundary:** a connector or API does not authorize a business action.

---

## Exercise 8 — Package it as an agent

**Steps**

1. Open Microsoft 365 Copilot Chat and select **Create an agent** → **Create from description**.
2. Enter the instructions below.

**Agent instructions**

```
You are a Case Support Agent helping assessors at [InstitutionName] work through case files.

When responding:
- Summarise the file, the customer's request, and actions already taken
- Identify missing or inconsistent evidence and say why each item matters
- Quote and cite the governing terms rather than paraphrasing them
- State clearly when the documents do not address a point

You must never:
- Decide, recommend or imply an outcome, liability, or entitlement
- Characterise a customer or case as dishonest
- Commit to a timeframe, a payment, or a decision on the organisation's behalf

Your role is to assemble evidence for an accountable human assessor.
```

3. Add knowledge sources: product or policy wording, process documentation, published service
   standards.
4. Test, refine, publish.

**Test prompt**

```
Give me a handover summary of this case, the outstanding evidence, and the relevant terms.
```

**Expected outcome** — the `must never` block is the deliverable. Everything above it is
convenience; that block is what makes the agent deployable in a regulated process.

**Measure:** turnaround time per case, and consistency between assessors.
**Decision boundary:** encoded in the instructions, and demonstrated by testing it — ask the agent
to decide the case and show the room that it declines.

---

## L2 variant — Transformational

Same assets, different facilitation. Use with audiences already comfortable with the fundamentals.

Do **not** give the prompts. Give the case file and the register, then run:

1. **Map the process.** Trigger to completion. Where are the queues, loops and escalations?
2. **Find the friction.** Which step consumes time without adding judgment? Be specific.
3. **Draw the line.** Before choosing any tool, mark which steps involve a decision a human must
   own. This step comes *first* here — that ordering is the lesson.
4. **Choose the capability.** Summarisation, retrieval, analysis, or an agent — and say why the
   others don't fit.
5. **Measure.** Baseline and target for the step you chose.

Run Exercises 2, 6 and 8 as reveals afterwards. Groups almost always put the boundary last; the
value of the session is discovering why it belongs first.

---

## Wrap-up

Participants should be able to:

- Assemble and summarise a complex case file for a colleague picking it up cold
- Identify evidence gaps in one pass instead of several
- Draft customer communications that inform without implying an outcome
- Retrieve and cite governing terms rather than paraphrasing them
- Connect single-case friction to portfolio-level patterns
- Build an agent whose constraints are as carefully designed as its capabilities

**The sentence to land:** the goal is not a faster decision — it is a better-prepared decision,
made by the person accountable for it.

---

## Sub-vertical variants

| Folder | Case type | Persona lens |
|---|---|---|
| `insurance/` | Claims assessment and claims fraud triage | Claims Adjuster, Underwriter |
| `banking/` | Loan application assessment, disputes, financial crime case review | Loan Officer, Compliance Officer |
| `wealth-super/` | Member complaints, insurance-in-super claims, hardship | Member Services Lead |

The banking and wealth-super variants are planned — see the build sequence in the FSI README.
