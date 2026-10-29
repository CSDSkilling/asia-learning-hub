# Contoso IT Service Desk – Monthly Service Review Demo

This demo uses **Copilot Chat, Copilot in Excel, Word, PowerPoint, Teams and Outlook**.

**Scenario:** You're **Anita Rao, Service Delivery Manager at Contoso**, an IT services company that runs a 24x7 IT Service Desk for its client **Fabrikam Retail** (~8,000 users across a head office, 2 distribution centres and 60 stores). It's Monday, 2 November 2026. The contract requires a **Monthly Service Review (MSR)** on Thursday, and the report must reach the client 24 hours before. October included a major store network outage, and Fabrikam's CIO has just emailed her concerns. You need to analyse the month's tickets, explain what happened, propose improvements and follow up on agreed actions.

## Demo Setup

**Demo Pack:** `IT Service Desk MSR Demo Pack.zip`

| File | Purpose |
|---|---|
| `Fabrikam_Tickets_Oct2026.xlsx` | 1,505 October tickets (table **Tickets**) – priority, category, assignment group, channel, shift, SLA met, first contact resolution, reopened, CSAT |
| `Fabrikam_Contoso_SLA_Schedule.docx` | Contract Schedule 3 – SLA targets per priority, KPIs, service credits, MSR obligations |
| `MSR_September_2026_Actions.xlsx` | Worksheets **Action Log** (September actions) and **September KPIs** (baseline) |
| `Major_Incident_Report_INC-P1-1042.docx` | 14 Oct store WAN outage – timeline, root cause, corrective actions |
| `Email_from_Fabrikam_CIO.eml` / `.txt` | CIO's pre-meeting email *"Concerns ahead of the October service review"* |
| `MSR_Meeting_Roleplay_Script.docx` | Script for the recorded Teams review meeting |
| `Trainer_Guide_Expected_Results.md` | Answer key – expected numbers, insights, actions and timings |

**Setup steps**
1. Unzip the demo pack and upload all files to a OneDrive folder (e.g. `Contoso MSR Demo`).
2. Import the `.eml` into Outlook, or send the `.txt` content to your own mailbox, so Copilot can find the CIO email.
3. Schedule a Teams meeting **"Fabrikam October MSR"** with recording and transcription enabled.
4. Allow 10–15 minutes for files to be indexed before referencing them with `/`.

**Requirements:** Microsoft 365 Copilot licence, files stored in OneDrive/SharePoint.

> **Note:** All files contain synthetic sample data created solely for training and demonstration purposes. Contoso and Fabrikam are fictitious companies; the data does not represent any real customers, employees or organisations.

**Demo Objective:** Show how Microsoft 365 Copilot helps an IT services delivery team move from a raw ticketing-tool export to a client-ready service review – analysis, report, deck, meeting actions and follow-up – in under an hour instead of several days, while keeping every number grounded in the source data.

**Real-world alignment:** Contract SLAs with service credits, Monthly Service Reviews, ITIL-style KPIs (SLA compliance, first contact resolution, CSAT, reopen rate, backlog), major incident management, change control (CAB) and shift-left to self-service are standard practice in IT outsourcing and managed services worldwide.

---

## Copilot Chat

### Pre-meeting briefing
```text
Summarise /Fabrikam_Contoso_SLA_Schedule, /MSR_September_2026_Actions and /Major_Incident_Report_INC-P1-1042. Give me:
1. The SLA and KPI targets in a table
2. The service credit rules
3. September actions that are still open or overdue
4. Key facts about the October major incident, including root cause
```

### Understand the client's concerns
```text
Summarise the email from Laura Chen about the October service review. What are her specific concerns and what does she expect to see on Thursday?
```

### Connect the dots
```text
Is there any link between the open September actions and the October major incident?
```

> 💡 Copilot should find that the outage root cause (firmware not going through CAB) is the overdue September action **A-0904**, and that the CIO is chasing the overdue password self-service guide **A-0901**.

---

## Copilot in Excel

Open `Fabrikam_Tickets_Oct2026.xlsx` and launch Copilot.

### Workbook Orientation
- [Worksheet: Tickets] Summarise this workbook in 30 seconds.
- [Worksheet: Tickets] Explain this data as if I am a Service Delivery Manager preparing a client review.

### Volume Analysis
- [Worksheet: Tickets] Show ticket volume by Category and Subcategory, sorted highest to lowest, and add a chart.
- [Worksheet: Tickets] What percentage of tickets are Password Reset or Account Unlock?
- [Worksheet: Tickets] Show ticket volume by Channel.

### SLA Performance
- [Worksheet: Tickets] Calculate Resolution SLA compliance % by Priority for Closed tickets. Compare each against the 95% target.
- [Worksheet: Tickets] Which Assignment Groups had the most Resolution SLA breaches? Show breaches by week of October.

### Customer Experience
- [Worksheet: Tickets] What is the average CSAT by Shift? Show it as a chart.
- [Worksheet: Tickets] Calculate the Reopened rate % by Subcategory for Closed tickets and highlight any above 10%.
- [Worksheet: Tickets] What is the First Contact Resolution rate? Compare it with the 65% target.

### Insights & Recommendations
- [Worksheet: Tickets] Based on this October ticket data, what are the top 5 insights a Service Delivery Manager should present to the client? For each, suggest a practical improvement action.

### Executive Dashboard Challenge
```text
Create an executive Service Desk dashboard for October 2026. Include:
- Total tickets and month-end backlog
- Response and Resolution SLA compliance by priority vs 95% target
- First Contact Resolution, CSAT and Reopen rate vs targets
- Top 5 ticket subcategories
- Resolution SLA breaches by week
- CSAT by shift
Use red, amber and green indicators against the targets.
```

### Copilot Premium / Analyst
```text
Using Python, analyse the October tickets to identify recurring demand that could be shifted to self-service, estimate the monthly ticket reduction if 60% of password resets and account unlocks moved to self-service, and forecast next month's volume by channel.
```

> ✅ Always verify one figure manually (e.g. filter Priority = P2) – Copilot accelerates the analysis, the Service Delivery Manager owns the numbers.

---

## Copilot in Word

### 📄 Demo Prompt: Create the Monthly Service Review report
Open a blank document → **Draft with Copilot**:
```text
Create a Monthly Service Review report from Contoso to Fabrikam Retail for October 2026, using /Fabrikam_Tickets_Oct2026, /Fabrikam_Contoso_SLA_Schedule, /MSR_September_2026_Actions and /Major_Incident_Report_INC-P1-1042.

Include:
1. Executive summary
2. SLA and KPI performance vs contract targets (table)
3. Ticket volume and channel trends
4. Major incident summary – INC-P1-1042
5. Customer satisfaction
6. Status of September actions
7. Service credits
8. Service improvement plan for November

Guidelines:
- Base all observations only on the referenced files.
- Be transparent about SLA misses.
- Use a professional tone suitable for a client CIO.
```

### Refine
- Rewrite the executive summary in 5 bullet points and directly acknowledge the CIO's concerns about the 14 October outage.
- Add a table to the service improvement plan with Action, Owner, Due date and Expected benefit.

Save the document as **`MSR_Report_Oct2026.docx`**.

---

## Copilot in PowerPoint

### 📊 Demo Prompt: Build the executive review deck
```text
Create a presentation from /MSR_Report_Oct2026 for a 30-minute client service review with the Fabrikam CIO. Keep it to about 10 slides.
```
- Add a slide titled "Shift-left: self-service password reset" that explains the opportunity and expected impact.
- Add speaker notes to every slide.

---

## Copilot in Teams

Run the **"Fabrikam October MSR"** meeting with recording and transcription on, and role-play `MSR_Meeting_Roleplay_Script.docx` (≈8 minutes). Then ask Copilot in the meeting recap:
- Summarise the key decisions from this meeting.
- List all action items with owner and due date in a table.

---

## Copilot in Outlook

The report is written and the meeting is done – but the client relationship depends on what happens next. The CIO asked for three things: **an explanation of the outage, an honest view of SLAs, and concrete improvements.**

### 📧 Demo Prompt: Close the loop with the CIO
Reply to Laura Chen's email and use **Draft with Copilot**:
```text
Thank Laura for the review and summarise the outcomes. Confirm the service credits for P1 and P2 will be reflected on the October invoice, and list the agreed actions with owners and due dates. Mention that the MSR report is attached.

Requirements:
- Keep the email under 200 words.
- Use a professional, accountable tone.
- Answer each of her three original requests.
```
Attach `MSR_Report_Oct2026.docx`, review, and send.

---

## Expected Insights

| # | Insight | Evidence |
|---|---|---|
| 1 | P2 resolution SLA missed | 85.2% vs 95% target – driven by Network Operations during the outage week (12–18 Oct) |
| 2 | Major outage breached P1 SLA | INC-P1-1042 restored in 5 h 20 min vs 4 h → P1 80% → service credits for P1 and P2 (4%) |
| 3 | Shift-left opportunity | Password Reset + Account Unlock = 398 tickets (26.4%) |
| 4 | Weekend experience gap | CSAT 3.69 at weekends vs 4.44 weekday days |
| 5 | Knowledge gap | Software Install reopen rate 15.0% vs 3.5% overall |
| 6 | FCR below target | 58.1% vs 65% target |
| 7 | Channel shift | Portal +19.1% vs September, Phone −12.2% |

Healthy areas: overall response SLA 97.6%, resolution SLA 97.0%, reopen rate 3.5%, backlog 49. See `Trainer_Guide_Expected_Results.md` in the demo pack for the full answer key.

---

## Responsible AI

- Verify key figures against the source data before sharing with a client.
- Keep analysis at team, shift, category or assignment-group level – do not use Copilot to rank individual agents.
- Contractual commitments (service credits, dates) must be confirmed by the accountable manager.

---

## Extend this Use Case

- **Agent Builder:** a *Service Desk Insights* agent grounded on the SLA schedule, ticket exports and incident reports that answers questions such as *"What was P2 compliance last month and why?"*
- **Learner challenge:** use Copilot to build a Service Improvement Plan for weekend CSAT with measurable targets.

