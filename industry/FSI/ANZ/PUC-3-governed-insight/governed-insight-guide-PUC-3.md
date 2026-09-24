# PUC-3 — Governed Insight at Scale

**Applied exercise — portfolio and risk reporting with Microsoft Fabric, Power BI and Copilot**

Parent use case guide. Re-skin for a sub-vertical using the `swap-table-PUC-3-<vertical>.md` in
`banking/`, `insurance/` or `wealth-super/`.

---

## Session objective

Show how a financial institution moves from scattered reporting to **governed insight** — timely
data, forecasting, exposure views and dashboards — and how Copilot accelerates each step without
displacing the human who owns the decision.

The narrative spine: *operational data may need quality rules, definitions, lineage, access
policies and ownership before it can be used in analytics or grounding.* Every exercise below is a
step along that path.

**Duration:** 60 minutes (L1 core, Exercises 1–5) · 90 minutes (with Exercises 6–8)

---

## Target audience

This guide is written to be delivered at five audience tiers. Pick one; do not attempt all five in
one session. Larger institutions typically have all five populations present, with very different
starting points:

| Tier | Who | Run exercises | Typical cohort size |
|---|---|---|---|
| T1 | Report consumers and builders without a Premium or Fabric licence | 1, 2, 3 | 100+ |
| T2 | Advanced Power BI users on Premium | 1–4 | 30–40 |
| T3 | Fabric users in a business domain (e.g. retail banking analytics) | 3–6 | 15–20 |
| T4 | AI engineers and principal architects | 5–8 | 15–20 |
| T5 | Platform administrators and architects running the Fabric estate | 6, 7 + governance discussion | 10–20 |

Course alignment: T1/T2 pair naturally with DP-605, T3 with DP-600, and T5 with SC-401 for data
loss prevention and Microsoft Purview. Confirm against the agreed skilling plan before delivery.

---

## Prerequisites

Before starting, ensure you have access to:

- Microsoft 365 Copilot (Chat), with the **Researcher** and **Analyst** agents enabled
- Power BI (Copilot for Power BI where licensing permits)
- Microsoft Fabric workspace (Exercises 5–7 only)
- **Create agent** in Microsoft 365 Copilot / Copilot Studio
- Microsoft Purview access, or screenshots, for the governance beat in Exercise 7

**Sample data** — from this PUC's sub-vertical `_assets/` folder:

- `Retail_Portfolio_Performance-PUC-3-<vertical>.csv` — 12 months x 6 regions x 4 products
- `Data_Governance_Policy.pdf` *(substitute your own, or narrate)*
- `Risk_Reporting_Standards.pdf` *(substitute your own, or narrate)*

> All sample data is fictional and for training use only. Trainers may substitute equivalent data
> from the organisation they are delivering to in order to increase relevance — but that data must
> never be committed back to this repository.

---

## Scenario overview

**[InstitutionName]** — a fictional institution — is consolidating portfolio reporting. Today,
regional teams each maintain their own spreadsheets and workspaces; the risk committee receives
numbers that do not reconcile, several weeks late. The institution wants a single governed view of
portfolio performance, arrears and exposure — and wants to know where AI genuinely helps.

You will: gather external context, analyse the portfolio, build a governed report, extend it with
Fabric, apply classification before grounding, and finally package the recurring work as an agent.

---

## Exercise 1 — Establish the external context (Researcher)

**Steps**

1. Open Microsoft 365 Copilot Chat.
2. Expand the **Agents** menu and select **Researcher**.
3. Enter the prompt.

**Prompt**

```
Research the current conditions affecting [Sector] portfolio performance in [Market] over the
last 12 months. Cover interest rate movements, arrears and hardship trends, and any supervisory
focus areas. Give me 3 themes with brief commentary and citations.
```

**Expected outcome** — Researcher returns three macro themes with sources, giving the room shared
context before anyone looks at a number.

**Measure:** analyst time spent assembling market context for a committee pack.
**Decision boundary:** context only. Researcher does not set risk appetite.

---

## Exercise 2 — Interrogate the portfolio (Analyst)

**Steps**

1. Return to the **Agents** menu and select **Analyst**.
2. Attach the portfolio dataset (`Retail_Portfolio_Performance-PUC-3-banking.csv` for banking).
3. Enter the prompts in sequence.

**Prompt 1**

```
Using the attached portfolio file, summarise 90-day arrears as a percentage of accounts by
region and product for the most recent three months. Identify which region and product
combination is deteriorating fastest.
```

**Prompt 2**

```
Compare provision levels against 90-day arrears across regions. Flag any region where
provisioning does not appear to track the arrears trend.
```

**Prompt 3**

```
Produce a one-paragraph takeaway for a risk committee, stating the trend, the single largest
concentration, and what you cannot determine from this data alone.
```

**Expected outcome** — Analyst surfaces the regional deterioration built into the dataset and, on
Prompt 3, explicitly names its own limits.

> **Trainer tip:** Prompt 3 is the most important prompt in this guide. An FSI audience trusts a
> tool that states what it cannot determine far more than one that answers everything. Do not skip
> it to save time.

**Measure:** time from data availability to a committee-ready narrative.
**Decision boundary:** provisioning adequacy is a specialist financial estimate, not an
operational prediction. Analyst informs; it does not conclude.

---

## Exercise 3 — Validate and model in Excel (Copilot in Excel)

**Steps**

1. Open the portfolio dataset in Excel and format as a table (Ctrl+T).
2. Open the Copilot pane.

**Prompts**

```
Calculate 90-day arrears rate by region and identify the three months with the largest
month-on-month movement.
```

```
Explain how the arrears rate is calculated in this dataset and verify the logic is applied
consistently across rows.
```

```
If new originations in WA were reduced by 15% across the second half, what happens to the
regional balance and arrears rate?
```

**Expected outcome** — Copilot aggregates, explains its own formula logic, and runs the what-if.

**Measure:** rework caused by inconsistent metric definitions between teams.
**Decision boundary:** the validation prompt is the demo moment — Copilot is being used to *audit*
a calculation, not to author an unreviewed one.

---

## Exercise 4 — Build the governed report (Power BI)

**Steps**

1. Load the dataset into Power BI.
2. Use Copilot for Power BI to generate an initial report page.
3. Refine with the prompts below.

**Prompts**

```
Create a report page showing portfolio balance and 90-day arrears rate by region over time,
with product as a filter.
```

```
Add a narrative visual summarising the key movement in the current month.
```

**Then stop and ask the room:** who owns the definition of "90-day arrears" here, and where is it
documented? This is the pivot into Exercise 5 — the point at which a *data source* has to become a
*data product*.

**Measure:** number of conflicting versions of the same metric across the organisation.
**Decision boundary:** a report is an engagement surface. The system of record is unchanged.

---

## Exercise 5 — From data source to data product (Fabric)

**Steps**

1. Bring the dataset into a Fabric workspace (OneLake shortcut or direct load).
2. Walk the room through: quality rules, agreed definitions, lineage, access policy, ownership.
3. Where available, demonstrate a **Fabric data agent** over the semantic model.

**Prompt (Fabric data agent)**

```
Which product and region combination contributed most to the increase in 90-day arrears this
quarter, and what is the trend over the last six months?
```

**Expected outcome** — the same question as Exercise 2, now answered against a governed model with
lineage rather than an attached file. Make that contrast explicit; it is the whole point of the
exercise.

**Measure:** control evidence — can you show where a number came from?
**Decision boundary:** preserve authoritative data and transaction controls while improving how
people find, interpret, communicate or act.

---

## Exercise 6 — Classification before grounding (Purview)

**Steps**

1. Show classification and sensitivity labelling applied to the portfolio data.
2. Walk the six checks aloud against this scenario: identity, authorization, data classification,
   source-of-truth ownership, audit logging, failure handling.
3. Raise the residency question explicitly — see `regulatory-beat-PUC-3-<vertical>.md` for the
   sub-vertical framing.

**Expected outcome** — the room understands that grounding an agent is a data-governance decision
before it is a technical one.

**Measure:** control evidence and audit readiness.
**Decision boundary:** a connector or API does not itself authorize a business action.

---

## Exercise 7 — Package the recurring work (custom agent)

**Steps**

1. Open Microsoft 365 Copilot Chat and select **Create an agent** → **Create from description**.
2. Enter the instructions below.

**Agent instructions**

```
You are a Portfolio Insight Agent supporting risk and finance teams at [InstitutionName].

When responding:
- Summarise portfolio performance, arrears trends and exposure concentrations
- Highlight movements that warrant committee attention
- Always state the reporting period and the source of each figure
- If a figure is not present in your knowledge sources, say so and name who owns it
- Never state or imply an approval, a provisioning decision, or a credit outcome

Your role is to prepare evidence for human review, not to decide.
```

3. Add knowledge sources: the reporting standards document, the governance policy, and the
   published report.
4. Test, refine, publish.

**Test prompt**

```
Prepare this month's portfolio briefing: key movements, the largest concentration, and any
figures you could not source.
```

**Expected outcome** — a leadership-ready briefing that names its own gaps. The final instruction
line is what makes this an FSI agent rather than a generic one.

**Measure:** turnaround time for a recurring monthly pack.
**Decision boundary:** encoded directly in the agent's instructions — demonstrate this deliberately.

---

## Exercise 8 — Evaluation and monitoring (T4/T5 only, Foundry)

Discuss, or demonstrate where the environment allows: agent identity, access control, evaluation,
monitoring and AI guardrails. Anchor on the questions an FSI audience will actually ask — who owns
this agent, how was risk assessed before deployment, how is behaviour monitored, and what are the
override, escalation and shutdown paths?

---

## L2 variant — Transformational

Same assets, different facilitation. Use this mode with audiences who are already comfortable with
the fundamentals and are ready to move from operating features to framing problems.

Do **not** give the learners the prompts. Give them the dataset and the business problem, then run:

1. **Find the friction.** Where in this reporting cycle does time actually go? Which step is
   repetitive, low-value or slow?
2. **Frame before you choose.** State the problem in one sentence with no product name in it.
3. **Choose the capability.** Analyst, Copilot in Excel, Fabric data agent, or a custom agent —
   and justify why the others are wrong for this problem.
4. **Prioritise.** Rank the opportunities the group found by impact and effort.
5. **Measure.** For the top-ranked one, state the baseline and the target.

Run Exercises 2, 5 and 7 as reveals *after* the group has committed to an approach. The comparison
between what they chose and what the guide does is the learning.

**Outcome:** participants can identify and frame genuine business problems, not just operate
features.

---

## Wrap-up

Participants should be able to:

- Use Researcher and Analyst to move from market context to portfolio insight
- Validate and audit calculations with Copilot in Excel rather than trusting them blind
- Explain the difference between a data source and a governed data product, and why FSI cares
- Apply classification and the six checks before grounding an agent
- Build an agent whose instructions encode a decision-authority boundary

**The sentence to land:** these capabilities can support an institution's security, compliance and
governance controls — but technology alone does not establish regulatory compliance.

---

## Sub-vertical variants

| Folder | Persona lens | Dataset framing |
|---|---|---|
| `banking/` | Risk Officer, Compliance Officer | Retail lending portfolio, arrears and exposure |
| `insurance/` | Underwriter, Portfolio Manager | Loss ratio, claim frequency and severity by class |
| `wealth-super/` | Member Services Lead, Wealth Advisor | Member flows, switching, balance and contribution trends |

The insurance and wealth-super variants are planned — see the build sequence in the FSI README.
