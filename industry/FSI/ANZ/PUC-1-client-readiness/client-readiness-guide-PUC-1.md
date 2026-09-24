# PUC-1 — Client Readiness: the credible conversation

**Applied exercise — preparation, knowledge access and follow-through with Microsoft 365 Copilot
and agents**

Parent use case guide. Re-skin for a sub-vertical using the `swap-table-PUC-1-<vertical>.md` in
`wealth-super/`, `banking/` or `insurance/`.

---

## Session objective

Show how the time spent *preparing* for a client or member conversation collapses — and how the
conversation itself gets better as a result.

The pattern is the same across wealth, banking and insurance distribution: someone is about to
speak with a customer about their money, and the context they need is scattered across email,
CRM records, documents, product material and colleagues. Preparation is manual, personalisation is
shallow, and documentation happens afterwards if at all.

This is the most widely reusable PUC in the library and the best first delivery for a new audience.
It is also the one where the **suitability and advice boundary** matters most: the moment a
generated output starts to look like a personal recommendation, a different regulatory regime
applies.

**Duration:** 60 minutes (L1 core, Exercises 1–5) · 90 minutes (with Exercises 6–8)

---

## Target audience

| Tier | Who | Run exercises | Notes |
|---|---|---|---|
| T1 | Frontline advisers, relationship managers, member services | 1–5 | The core audience. |
| T2 | Team leaders | 1–3, 6 | Add consistency and quality framing. |
| T3 | Product and technical specialists | 4, 6, 7 | Focus on grounding and approved content. |
| T4 | Process and automation owners | 6–8 | Agent design and governance. |
| T5 | Risk, compliance and advice-quality teams | 4, 5, 7 | Lead with the boundary. |

---

## Prerequisites

- Microsoft 365 Copilot (Chat), with the **Researcher** and **Analyst** agents enabled
- **Create agent** in Microsoft 365 Copilot / Copilot Studio
- Microsoft Purview access, or screenshots, for Exercise 7

**Sample data** — from this PUC's sub-vertical `_assets/` folder:

- `Member_Portfolio_Snapshot-PUC-1-wealth-super.csv` — 360 fictional member records
- `Sample_Member_Context-PUC-1-wealth-super.md` — one fictional client context pack
- Approved product or fact-sheet content *(substitute your own, or narrate)*

> All sample data is fictional and for training use only. Trainers may substitute equivalent data
> from the organisation they are delivering to in order to increase relevance — but that data must
> never be committed back to this repository.

---

## Scenario overview

You have a conversation with **[ClientTerm]** in forty minutes. You last spoke eleven months ago.
Since then there have been three service interactions, a change in their circumstances, and a market
period worth acknowledging. Your notes from last time are three lines long.

You will: build context, produce a structured briefing, ground yourself in approved product
material, understand where this person sits in the wider book, document the conversation, and
package the repeatable parts as an agent that knows where advice begins.

---

## Exercise 1 — Build the external context (Researcher)

**Steps**

1. Open Microsoft 365 Copilot Chat.
2. Expand **Agents** and select **Researcher**.
3. Enter the prompt.

**Prompt**

```
Summarise the conditions over the last 12 months that [ClientTerm]s in [Market] are most likely
to raise in a conversation about their [ProductArea]. Give me 3 themes, what people are actually
worried about in each, and cite your sources.
```

**Expected outcome** — three themes with sources, framed as *what the person will ask about* rather
than market commentary.

> **Trainer tip:** the phrasing "what people are actually worried about" is doing the work here.
> Generic market summaries are useless for preparation; anticipated questions are not.

**Measure:** preparation time, and adviser confidence going into the conversation.
**Decision boundary:** general context. Nothing here is specific to this person's circumstances.

---

## Exercise 2 — Assemble the personal context

**Steps**

1. Attach `Sample_Member_Context-PUC-1-wealth-super.md`.
2. Enter the prompts in sequence.

**Prompt 1**

```
Summarise what I need to know before this conversation: who they are, their current position,
what has changed since we last spoke, and what they have previously told us matters to them.
Flag anything unresolved from prior interactions.
```

**Prompt 2**

```
What questions are they most likely to ask me, based on this file? For each, note what
information I would need to hand to answer it well.
```

**Expected outcome** — a briefing that surfaces the unresolved item planted in the sample file. The
second prompt is the one advisers tend to find genuinely novel.

**Measure:** preparation time — typically 20–40 minutes per conversation today. Ask the room.
**Decision boundary:** preparation only. No recommendation has been formed.

---

## Exercise 3 — Produce the briefing

**Steps**

1. Enter the prompt.

**Prompt**

```
Turn this into a one-page briefing I can read in three minutes before the meeting: their
position, what changed, their stated priorities, open items, and the three questions they are
most likely to ask. Bullet points, no preamble.
```

**Then stop and ask the room** what is missing from the output. The answer you are steering toward:
it contains no recommendation, and it should not.

**Expected outcome** — a usable briefing, and a room that has noticed the absence of advice without
being told.

**Measure:** quality and consistency of preparation across a team.
**Decision boundary:** a briefing organises what is known. It does not propose a course of action.

---

## Exercise 4 — Ground yourself in approved material

**Steps**

1. Attach the approved product or fact-sheet content you are using.
2. Enter the prompt.

**Prompt**

```
Using only the attached approved material, how would I explain [ProductFeature] in plain language
to someone with no financial background? Quote the relevant wording and cite where it comes from.
If the material does not cover something, say so rather than filling the gap.
```

**Expected outcome** — a plain-language explanation anchored to approved content, with explicit gaps.

> **Trainer tip:** this is the exercise that wins over a compliance audience. Inconsistent
> explanation of products across a distribution network is a genuine conduct risk, and grounding on
> approved material addresses it directly. Say that out loud.

**Measure:** consistency of product explanation across advisers and channels.
**Decision boundary:** explaining a product generally is different from recommending it to a person.
Exercise 5 draws that line explicitly.

---

## Exercise 5 — The line between information and advice

This is the most important exercise in the guide. Do not skip it, and do not rush it.

**Steps**

1. Enter the first prompt and read the output aloud.

**Prompt 1**

```
Based on this person's file, what should they do with their [ProductArea]?
```

2. Stop. Ask the room what just happened.

**Prompt 2**

```
Rewrite that as: (a) the factual position, (b) the general options that exist, and (c) the
questions I should ask them in the meeting to understand their circumstances. Do not recommend
a course of action for this person.
```

**Expected outcome** — the contrast is the lesson. Prompt 1 produces something that reads like a
personal recommendation. Prompt 2 produces something genuinely useful that stays on the right side
of the line.

Make the point explicitly: a general explanation of options is a different thing from a
recommendation tailored to someone's circumstances, and in both Australia and New Zealand the
second carries licensing, competence, suitability and disclosure obligations. The model does not
know which side of that line it is on. **You do.**

**Measure:** advice-quality and file-note completeness.
**Decision boundary:** the whole exercise is the boundary. Treat it as the centrepiece.

---

## Exercise 6 — See the book (Analyst)

**Steps**

1. Open the **Analyst** agent and attach the portfolio snapshot.
2. Enter the prompts.

**Prompt 1**

```
Summarise this book: distribution by segment, average balance, and contribution patterns.
Which segment is least engaged?
```

**Prompt 2**

```
Which groups have had no contact in the last 12 months despite holding significant balances?
Describe the group characteristics.
```

**Prompt 3**

```
What does this suggest about where proactive contact would add most value — and what can you
not determine from this data alone?
```

**Expected outcome** — a servicing-priority view, with Prompt 3 forcing an explicit statement of
limits.

> **Trainer tip:** watch for the room jumping from "this segment is disengaged" to "so we should
> sell them something." Name that jump when it happens. Identifying who would benefit from contact
> is a service decision; what is discussed in that contact is governed by the Exercise 5 boundary.

**Measure:** coverage — proportion of the book receiving proactive contact.
**Decision boundary:** prioritising contact is a service decision, not a recommendation.

---

## Exercise 7 — Records, sources and classification

**Steps**

1. Show which sources the adviser may and may not draw on, and why.
2. Walk the six checks: identity, authorization, data classification, source-of-truth ownership,
   audit logging, failure handling.
3. Show where prompts and responses are captured for audit and eDiscovery.

**Then raise the record-keeping point.** If a briefing or file note was AI-drafted and
human-reviewed, that is the organisation's record. It needs the same retention, accuracy and
discoverability as any other.

**Measure:** control evidence and file-note quality.
**Decision boundary:** a connector or API does not authorize a business action.

---

## Exercise 8 — Package it as an agent

**Steps**

1. Open Microsoft 365 Copilot Chat and select **Create an agent** → **Create from description**.
2. Enter the instructions below.

**Agent instructions**

```
You are a Client Readiness Agent helping [PrimaryPersona]s at [InstitutionName] prepare for
conversations with [ClientTerm]s.

When responding:
- Summarise the person's current position and what has changed since the last contact
- Surface unresolved items and prior stated priorities
- Anticipate the questions they are likely to ask
- Explain products only in the words of approved material, and cite the source
- State clearly when information is missing or out of date

You must never:
- Recommend a product, strategy or course of action for a specific person
- Express an opinion on whether something is suitable for their circumstances
- Present general information in a way that implies a personal recommendation

Your role is to prepare the adviser, not to advise the client.
```

3. Add knowledge sources: approved product material, service standards, process documentation.
4. Test it — then deliberately try to make it give advice, and show the room it declines.

**Expected outcome** — the `must never` block, demonstrated live. That demonstration is what makes
this deployable.

**Measure:** preparation time and consistency across a team.
**Decision boundary:** encoded in the instructions and proven by testing.

---

## L2 variant — Transformational

Same assets, different facilitation. For audiences already past the fundamentals.

Give them the context pack and the book data, no prompts, then run:

1. **Map the conversation lifecycle.** Prepare → engage → capture → follow up → monitor. Where does
   time actually go?
2. **Draw the line first.** Mark every step where a regulated decision or a personal recommendation
   could occur. Before choosing any tool.
3. **Find the friction.** Which remaining steps are repetitive context-assembly?
4. **Choose the capability.** Retrieval, summarisation, analysis or an agent — and justify.
5. **Measure.** Baseline and target for the step chosen.

Run Exercises 3, 5 and 8 as reveals afterwards. Groups that skipped step 2 will discover in
Exercise 5 why it comes first — which is the point.

---

## Wrap-up

Participants should be able to:

- Assemble scattered context into a briefing in minutes rather than half an hour
- Anticipate what a client or member will actually ask
- Explain products in the words of approved material, with citations
- Recognise precisely where general information becomes personal advice
- Prioritise proactive contact across a book of clients or members
- Build an agent that prepares the adviser without advising the client

**The sentence to land:** the goal is not to automate the conversation — it is to walk into it
prepared, so the time is spent on the person rather than on the paperwork.

---

## Sub-vertical variants

| Folder | Persona lens | Context pack |
|---|---|---|
| `wealth-super/` | Wealth Advisor, Member Services Lead | Member position, contributions, insurance cover, engagement history |
| `banking/` | Relationship Manager, Branch Manager | Client holdings, facilities, service history, business context |
| `insurance/` | Broker-facing and distribution roles | Policy portfolio, renewal history, coverage changes |

The banking and insurance variants are planned — see the build sequence in the FSI README.
