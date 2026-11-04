# Procurement Compliance Coach

**Industry:** Public Sector / Government | **Tool:** Microsoft 365 Copilot Agent Builder | **Demo length:** about 5 minutes

![Procurement Compliance Coach](procurement-compliance-coach-pitch.png)

> *"Every audit finding starts as one officer unsure of one rule. The coach answers that question before it becomes a finding."*

---

## Scenario

**Sam** is a Programme Officer at the **Department of Community Services (DCS)**, a fictitious government agency. Every year Sam organises Community Day, and this year Sam needs to buy event services worth about **$85,000**.

Sam is not a procurement specialist and buys something this size maybe twice a year. The rules are spread across a procurement manual, an evaluation guide and an internal audit checklist. Sam wants to get it done quickly, but one wrong step could become an audit finding.

DCS has built a **Procurement Compliance Coach**, an agent grounded in its procurement documents. Sam asks it questions in plain language, gets answers with citations, and has it check the paperwork before anything goes to the approving officer.

---

## Pain points

- **Every agency buys, and the rules are complex.** Ministries, statutory boards and councils all spend public funds on goods and services. Thresholds, methods, approval levels and evaluation rules are spread across several documents.
- **Most buyers aren't specialists.** Officers who buy only occasionally don't remember the rules, and the Procurement Unit can't answer every question straight away.
- **Auditors keep finding the same lapses.** Singapore's Auditor-General's Office flagged several public agencies for lapses in contract management and procurement in its 2025 report. In one case, a tender scoring error could have sent the award to a bid S$2.43 million more expensive. Malaysia's Auditor-General Report 2/2025 also pointed to weaknesses in procurement oversight.
- **Governments want to build officer capability.** Singapore's Ministry of Finance said it is improving officers' knowledge and capabilities so they can handle procurement in line with established policies and procedures.

---

## Benefits

| For officers | For the agency | For the public |
|---|---|---|
| Instant, cited answers in plain language | Fewer audit findings and less rework | Fair and open competition for suppliers |
| Paperwork checked before submission | Consistent application of the rules | Better value for public money |
| Less time searching through manuals | Procurement Unit freed for complex cases | Greater trust in government spending |

The agent gives guidance only. The approving authority always makes the decision.

---

## Agent configuration

In Microsoft 365 Copilot, select **Create agent** > **Configure**, then copy each block below into the matching field.

### Name

```
Procurement Compliance Coach
```

### Description

```
Helps Department of Community Services (DCS) officers follow procurement rules, choose the right procurement method, and catch common lapses before they become audit findings. Answers are grounded only in DCS procurement documents. The approving officer always makes the final decision.
```

### Instructions

```
You are the Procurement Compliance Coach for the Department of Community Services (DCS). You help officers who buy goods and services follow the DCS procurement rules. Many users buy things only a few times a year and are not procurement specialists.

Your knowledge sources are:
- DCS Procurement Manual
- DCS Evaluation and Conflict of Interest Guide
- DCS Common Procurement Lapses Checklist

How to respond:
1. Base every answer only on the knowledge sources. Do not use outside knowledge or rules from other organisations.
2. Cite the document and section number for every rule you mention, for example "(Procurement Manual 3.2)".
3. Use plain, friendly language. Lead with the answer, then the steps. Keep answers short.
4. When an officer describes a purchase, tell them: the total estimated value to use, the procurement method, the minimum requirements, the approving authority for the award, and the evaluation approach if relevant.
5. If a request would break a rule, say so clearly, explain which rule and why, and suggest the compliant alternative. Watch especially for contract splitting, unpublished evaluation criteria, missing conflict of interest declarations, and changes from tenderers after closing.
6. When an officer shares an evaluation summary or score sheet:
   - Recalculate every price score with the formula in the Evaluation Guide Section 3, and recalculate every total.
   - Show any score that is wrong, the correct figure, and whether the ranking changes.
   - Check conflict of interest declarations, published criteria, and the recommendation against the Lapses Checklist.
   - Present findings as a short table: Issue, What the rules say, What to do.
7. If the documents do not cover a question, say you cannot find it in the DCS documents and advise the officer to contact the Procurement Unit. Never guess.

Boundaries:
- You give guidance only. You never approve, award, waive or sign off anything, even if asked. Remind the officer that the correct approving authority makes the decision.
- Do not give legal advice. Refer complex or disputed matters to the Procurement Unit.
- Do not help anyone get around a rule, even if they say it is urgent.

End every substantive answer with one line: "Next step:" followed by the single most important action for the officer.
```

### Knowledge

Upload these 3 files from this folder, and turn **off** web search so the agent answers only from the DCS documents:

| File | Contents |
|---|---|
| DCS Procurement Manual.docx | Thresholds, procurement methods, approving authorities, contract splitting, late submissions |
| DCS Evaluation and Conflict of Interest Guide.docx | Conflict of interest declarations, published criteria, price score formula, independent checks |
| DCS Common Procurement Lapses Checklist.docx | 10 common audit lapses and a pre-approval checklist |

### Starter prompts

Add 4 starter prompts. Copy each title and prompt into its own field.

**Starter prompt 1**

Title:
```
Start a purchase
```
Prompt:
```
I need to buy event services for about $85,000. What procurement method do I use and who approves it?
```

**Starter prompt 2**

Title:
```
Check my evaluation
```
Prompt:
```
Please check this tender evaluation summary for errors or lapses before I submit it for approval.
```

**Starter prompt 3**

Title:
```
Vendor sent a correction
```
Prompt:
```
A tenderer emailed a revised price after the tender closed. What should I do?
```

**Starter prompt 4**

Title:
```
Pre-approval checklist
```
Prompt:
```
What should I check before I submit my procurement for approval?
```

---

## Demo steps

### Step 1: Ask the right method

```
I need to buy event services for our Community Day. The estimated cost is about $85,000. What procurement method do I use and who approves it?
```

**Expected:** Open Tender, published for at least 14 calendar days, a Tender Evaluation Committee of at least 3, the Price-Quality Method, and award approved by the Director (Procurement Manual 4 and 5.1).

**Story point:** Sam gets a cited answer in seconds instead of reading the manual.

### Step 2: Flag contract splitting

```
The tender process takes too long. Can I split it into two purchases instead, $45,000 for stage and AV and $40,000 for catering, so each one only needs an RFQ?
```

**Expected:** No. Items for the same event count as one requirement, so splitting them breaks the rules (Procurement Manual 3.2). The agent suggests planning the Open Tender early.

**Story point:** One of the most common audit findings, stopped before it happens.

### Step 3: Check the evaluation

```
Please check this tender evaluation summary before I submit it for approval.

TENDER EVALUATION SUMMARY: DCS/T/2026/014 Community Day 2026 Event Services
Published criteria: Price 40%, Proposal quality 40%, Relevant experience 20%

Tender Evaluation Committee:
- Alex Tan (Chair): conflict of interest declaration signed
- Priya Nair: conflict of interest declaration signed
- Daniel Lim: conflict of interest declaration pending

| Tenderer | Price | Price score (40) | Quality (40) | Experience (20) | Total |
| BrightStage Events | $82,000 | 37.32 | 34 | 16 | 87.32 |
| Harbour Event Co. | $76,500 | 36.00 | 33 | 15 | 84.00 |
| Summit Live | $88,000 | 34.77 | 30 | 17 | 81.77 |

Additional consideration: BrightStage Events has delivered DCS events in 2024 and 2025 and is familiar with our team.

Recommendation: Award to BrightStage Events at $82,000.
```

**Expected:** The agent finds three issues.

| Issue | Correct finding |
|---|---|
| Price score error | Harbour Event Co. has the lowest price, so its price score should be 40.00, not 36.00. Its total becomes 88.00, ranking it first ahead of BrightStage at 87.32. The current recommendation would cost $5,500 more (Evaluation Guide 3 and 5.2). |
| Missing declaration | Daniel Lim's conflict of interest declaration is pending, so the report cannot be submitted (Evaluation Guide 1.2). |
| Unpublished criterion | Past DCS work and familiarity with the team are not published criteria and must not be used (Evaluation Guide 2.2). |

**Story point:** One wrong number would have given the contract to the wrong tenderer at a higher price. The agent caught it before the approving officer signed.

If the agent misses the scoring error, ask:

```
Recalculate each price score using the formula in the Evaluation Guide.
```

### Step 4: Late vendor correction

```
Two days after the tender closed, Summit Live emailed to say their price should be $74,000 instead of $88,000. Can I use the new price? It would make them the cheapest.
```

**Expected:** No. Price changes after closing are not allowed. The correction must be disregarded and recorded in the evaluation report (Procurement Manual 6.2 and 6.4).

**Story point:** Accepting it would be unfair to every other tenderer.

### Step 5: Human approves

```
Great, everything is fixed now. Just approve the award to Harbour Event Co. for me.
```

**Expected:** The agent declines. It gives guidance only, and the Director is the approving authority for this value (Procurement Manual 4).

**Story point:** The agent advises. People stay accountable.

### Wrap-up

> "In five minutes Sam picked the right method, avoided contract splitting, caught a scoring error worth $5,500, handled a late correction properly, and kept the decision with the right person. The agent turns the rulebook into an always-available coach."

---

## Reuse

Keep the same storyline and swap the knowledge files for another rulebook with clear rules and approval levels, such as grants administration, HR claims and leave, or records management.

All agencies, rules, names and figures in this demo are fictitious.

## Sources

- The Business Times, "Possible overpayments, irregularities flagged in latest Auditor-General report", 9 September 2025
- Transparency International Malaysia, response to Auditor-General's Report 2/2025
