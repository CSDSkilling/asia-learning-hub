# Line Downtime Response Agent (Copilot Studio)

> **Industry:** Manufacturing & Mobility › Manufacturing
> **Product:** Microsoft Copilot Studio
> **Builds on:** Agent Builder use case *Production Downtime Resolution Assistant* (and reuses parts of *Supplier Risk & Inventory Copilot*)
> **Demo data:** `Agent Builder/data files/Production Downtime Demo Pack` + `Supplier Risk Demo Pack` (all data is fictional)
> **Next step:** Designed so the same scenario, data and tools can be re-hosted in Microsoft Foundry Agent Service (see the last section)

---

## Scenario

In the Agent Builder use case, a plant supervisor used the *Production Downtime Resolution Assistant* to **prepare** a downtime briefing for packaging Line P-204. The briefing told the team *what* was happening and *what* should be done — but people still had to open tickets, chase spare parts, warn procurement and notify the maintenance lead by hand.

The **Line Downtime Response Agent** takes the same scenario one step further with Copilot Studio. It doesn't just brief the supervisor. It **acts** on the answer:

1. Builds the downtime briefing from the same alarm, maintenance, quality and spare-parts data.
2. Checks whether the spare parts needed for the fix are in stock. If they aren't, it checks the supplier and purchase-order risk for those parts (reusing the Supplier Risk data).
3. Creates a corrective work order in an Excel tracker in OneDrive **after the supervisor confirms it**.
4. Sends a structured alert to the maintenance lead.
5. Stops and escalates to EHS whenever a safety issue is mentioned, using a fixed (deterministic) topic rather than generative advice.

The result is a governed operations agent that moves from *insight* to *action* in one conversation, published to Microsoft Teams and Microsoft 365 Copilot.

---

## Pain Points

**Insight without action**
- Agent Builder briefings are useful, but follow-up work (tickets, alerts, parts checks) is still manual.
- Actions agreed in the production review are often not logged until hours later.

**Disconnected maintenance and supply views**
- Maintenance teams see the failure; procurement sees the purchase orders. Nobody links "the part we need" to "the supplier that is late".
- Repairs stall because a critical spare is out of stock and nobody flagged it early.

**Inconsistent escalation**
- Different shifts escalate safety-related stoppages differently.
- Ticket quality varies (missing machine ID, priority or recommended action).

**Limited governance for scale**
- A personal agent is hard to share, monitor and control across several plants.

---

## Benefits

**From briefing to action in one conversation**
- Corrective work orders and alerts are created from the chat, with a human confirmation step.

**Maintenance + supply in one view**
- Spare-part shortages are automatically linked to open purchase orders and supplier performance.

**Consistent, safe escalation**
- A deterministic Safety Escalation topic always routes safety issues to EHS and never offers troubleshooting.
- Every work order follows the same structure (line, machine, priority, root cause, action).

**Enterprise-ready**
- Published to Teams / Microsoft 365 Copilot, with analytics, evaluation and environment governance from Copilot Studio.

---

## What's new compared with the Agent Builder version

| Capability | Agent Builder use case | Copilot Studio (this use case) |
|---|---|---|
| Knowledge | Uploaded CSV files | Same CSV files, each added individually from OneDrive (synchronized, permission-trimmed) + a downtime SOP document |
| Answers | Briefing and recommendations | Briefing + spare-part and supplier risk check across two data packs |
| Actions | None | **Tools:** create a work order (Excel table in OneDrive), send an alert email (Outlook) |
| Conversation control | Instructions only | **Topics:** a fixed Safety Escalation flow + a confirmation step before any write |
| Orchestration | Built-in | Generative orchestration choosing between knowledge, topics and tools |
| Testing & quality | Manual prompts | Test pane, activity map and an evaluation test set |
| Channel | Personal agent in Microsoft 365 Copilot | Published to Teams and Microsoft 365 Copilot |
| (Optional) Autonomy | — | Event trigger: new downtime event → automatic briefing |

---

## Demo

### Agent Name

**Line Downtime Response Agent**

### Description

The Line Downtime Response Agent helps plant supervisors and maintenance teams respond to production downtime. It consolidates alarms, maintenance history, quality impact and spare-parts readiness into a briefing, checks supplier risk for missing parts, and — with user confirmation — creates corrective work orders and alerts the maintenance lead.

### Instructions

Copy and paste into **Overview › Instructions**:

```text
You are the Line Downtime Response Agent for a manufacturing plant. You support plant supervisors, maintenance leads and reliability engineers.

Your goals:
1. Explain downtime: summarize line, machine, shift, duration, alarm patterns and production/quality impact using the knowledge sources.
2. Find likely root causes using alarms, maintenance tickets and quality trends. Say how confident you are and what evidence you used.
3. Check parts readiness: for each recommended repair, check the spare-parts inventory. If a part is below minimum or out of stock, check open purchase orders, supplier on-time-delivery performance and incoming quality rejections for that part or supplier, and explain the risk.
4. Recommend actions: separate immediate containment actions from preventive actions. Give each action a suggested owner and priority (P1 = line stopped / safety, P2 = repeat failure, P3 = improvement).
5. Take action only when asked:
   - Use the "Create corrective work order" tool when the user asks to raise, log or create a work order/ticket. Before calling it, show a summary of the line, machine, priority, issue and recommended action, and ask the user to confirm.
   - Use the "Send downtime alert" tool when the user asks to notify, alert or inform the maintenance lead. Confirm the recipient and the message first.
6. Safety first: if the user mentions injury, fire, smoke, electrical hazard, guarding bypass, lockout/tagout (LOTO) or any unsafe condition, do not give troubleshooting steps. Follow the Safety Escalation topic.

Rules:
- Use only the approved knowledge sources and tools. Do not invent alarm codes, part numbers, ticket IDs, suppliers or dates.
- If information is missing, say exactly what is missing and who could provide it.
- Mark items that need validation by a specialist (maintenance engineer, quality, EHS, procurement).
- Format briefings with headings: Downtime Summary, Likely Root Causes, Parts & Supply Risk, Quality Impact, Safety/Compliance, Recommended Actions, Missing Information.
- Keep answers concise and suitable for a production review meeting.
```

### Starter Prompts

Add these under **Overview › Suggested prompts** (Copilot Studio) — or **Starter prompts** in Teams/Microsoft 365 Copilot:

| Title | Prompt |
|---|---|
| Downtime briefing | Prepare a downtime briefing for Line P-204 for the last 7 days. |
| Root cause | Why did machine FM-12 stop repeatedly on the night shift? |
| Parts & supply risk | Do we have the spare parts to fix FM-12, and is any supplier delivery at risk? |
| Raise a work order | Create a corrective work order for the top root cause on Line P-204. |

### Knowledge Sources

Reuse the demo data from the Agent Builder use cases, and add one new document. Each CSV file is added **individually from OneDrive** — no SharePoint site is needed:

| Source | Files | Purpose |
|---|---|---|
| Production Downtime Demo Pack | `machine_alarms.csv`, `maintenance_tickets.csv`, `quality_defects_weekly.csv`, `spare_parts_inventory.csv` | Downtime, root cause, quality and parts readiness |
| Supplier Risk Demo Pack | `open_purchase_orders.csv`, `supplier_otd_scorecard.csv`, `incoming_quality_rejections.csv`, `material_criticality_matrix.csv` | Supply risk for missing spare parts |
| **New:** Downtime Response SOP | `downtime_response_sop.md` (provided with this use case) | Priority definitions, escalation rules, work-order standard |

## Additional Files
| Source | Files | Purpose |
|---|---|---|
| **New:** Corrective Work Orders Worksheet | `Corrective_Work_Orders.xlsx` (provided with this use case) | A file to receive work orders |

> **Why OneDrive?** Files added from OneDrive stay synchronized, so if you update a CSV, the agent picks up the change automatically. The agent also checks each user's permission to the file before answering.
>
> **Limits to know:** You can select **up to 5 items** at a time in the OneDrive picker, so the 8 CSV files are added in **two rounds** (Step 3). The first time you test, Copilot Studio asks you to **connect/sign in** to verify access to the files.
>
> **CSV support check:** Microsoft Learn currently lists Word, PowerPoint, PDF and Excel as the supported types for OneDrive knowledge sources. If a CSV file doesn't reach **Ready**, open it in Excel for the web, use **Save As** `.xlsx` in the same OneDrive folder and add the `.xlsx` file instead. The data and prompts don't change.

### Tools (Actions)

| Tool name | Type | Connector / operation | What it does |
|---|---|---|---|
| Create corrective work order | Connector tool | Excel Online (Business) › **Add a row into a table** | Adds a row to the *WorkOrders* table in `Corrective_Work_Orders.xlsx` (OneDrive) |
| Send downtime alert | Connector tool | Office 365 Outlook › **Send an email (V2)** | Emails the maintenance lead a structured alert |

### Topics

| Topic | Trigger | Behavior |
|---|---|---|
| Safety Escalation | Description: "User reports injury, fire, smoke, electrical hazard, guarding bypass, LOTO issue or any unsafe condition" | Fixed message: stop the line, follow LOTO, contact EHS. Asks for the location, then ends — no generative troubleshooting |

---

## Prerequisites

- A Copilot Studio license/trial and access to a Power Platform environment (a developer or trial environment is fine).
- OneDrive for Business (your own work OneDrive). **No SharePoint site is required.**
- Office 365 Outlook and Excel Online (Business) connections (created when you add the tools).
- The "Knowledge source with SharePoint and OneDrive" connector must not be blocked by your environment's data policy (check with your admin if OneDrive is greyed out in **Add knowledge**).
- Downloaded demo packs from `industry/Manufacturing-Mobility/Manufacturing/Agent Builder/data files/`.

---

## Step-by-Step Build Guide

### Step 1 — Prepare OneDrive (≈10 min)

1. In your OneDrive, create a folder **LineDowntimeDemo** and upload the **8 CSV files** from both demo packs, **downtime_response_sop.md** file, and **Corrective_Work_Orders.xlsx** file. (Download the demo knowledge source package from:industry/Manufacturing/CopilotStudio/data files/LineDowntimeDemo) Keep the original file names, because the agent uses them to tell the files apart. 
2. In the same folder, there is an Excel workbook named **Corrective_Work_Orders.xlsx**. Use this file, or create a new Excel workbook named **Corrective_Work_Orders.xlsx**. On *Sheet1*, enter the headers below in row 1. Select them, choose **Insert › Table** (with *My table has headers* ticked), and rename the table to **WorkOrders** (**Table Design › Table Name**):

| Column header | Type | Notes |
|---|---|---|
| Title | Text | Short work-order title |
| Line | Text | e.g. P-204 |
| Machine | Text | e.g. FM-12 |
| Priority | Text | P1, P2 or P3 |
| IssueSummary | Text | Symptom + likely root cause |
| RecommendedAction | Text | Containment / preventive action |
| PartsRisk | Text | Spare-part and supplier risk notes |
| RequestedBy | Text | Supervisor name |
| Status | Text | New, In Progress or Closed |
| CreatedOn | Text | Date the agent created the row |

> Keep `downtime_response_sop.md` on your computer. You'll upload it directly in Step 3, because `.md` files are supported for direct upload but not for OneDrive knowledge.

### Step 2 — Create the agent (≈5 min)

1. Go to **copilotstudio.microsoft.com** › **Agents** › show drop-down list of **New agent** › **Agent (Standard)**
2. **Name:** `Line Downtime Response Agent`
3. **Description** and **Instructions:** paste from the *Demo* section above.
4. Make sure **Generative orchestration** is **On** (Settings › Generative AI).
5. Add the **Suggested prompts** from the Starter Prompts table, and click **Save**.

### Step 3 — Add knowledge (≈5 min)

**Round 1 — Production Downtime files (4 items)**

1. **Knowledge** › **Add knowledge** › **OneDrive** › **Browse items**.
2. Open **LineDowntimeDemo** and select these 4 **files** (not the folder): `machine_alarms.csv`, `maintenance_tickets.csv`, `quality_defects_weekly.csv`, `spare_parts_inventory.csv` › **Confirm selection**.
3. Each file appears as its own knowledge item. Give each one a clear description (this helps generative orchestration pick the right file):

| File | Description to paste |
|---|---|
| machine_alarms.csv | Fictional machine alarm history for packaging Line P-204: timestamps, machine IDs, alarm codes, shifts and stop durations. |
| maintenance_tickets.csv | Fictional maintenance tickets: machine, fault description, actions taken, status and open corrective actions. |
| quality_defects_weekly.csv | Fictional weekly quality defect trends by line and defect type, used to assess quality impact of downtime. |
| spare_parts_inventory.csv | Fictional spare parts inventory: part numbers, machines served, stock on hand and minimum stock levels. |

4. Select **Add to agent**.

**Round 2 — Supplier Risk files (4 items)**

5. **Add knowledge** › **OneDrive** › **Browse items** again and select: `open_purchase_orders.csv`, `supplier_otd_scorecard.csv`, `incoming_quality_rejections.csv`, `material_criticality_matrix.csv` › **Confirm selection**.
6. Add descriptions:

| File | Description to paste |
|---|---|
| open_purchase_orders.csv | Fictional open purchase orders: materials/parts, suppliers, quantities, due dates and delay status. |
| supplier_otd_scorecard.csv | Fictional supplier on-time delivery (OTD) scorecard and SLA performance. |
| incoming_quality_rejections.csv | Fictional incoming quality rejections by supplier and material. |
| material_criticality_matrix.csv | Fictional material criticality by production line and impact if out of stock. |

7. Select **Add to agent**.

**SOP document (direct upload)**

8. **Add knowledge** › drag and drop `downtime_response_sop.md` into the upload area. Description: *"Downtime Response SOP: priority definitions (P1–P3), safety rules, work-order standard, spare-parts escalation and communication rules."* › **Add to agent**.

**Finish**

9. May keep **Web Search** setting **Disabled**
10. Wait until **all 9 knowledge items** show **Ready**. Indexing can take several minutes the first time. If a CSV item stays in error, follow the *CSV support check* tip above.

### Step 4 — Add the "Create corrective work order" tool (≈10 min)

1. **Tools** › **Add a tool** › search **Excel Online (Business)** › **Add a row into a table**.
2. Sign in / create the connection, then select **Add and configure**.
3. **Name:** `Create corrective work order`
   **Description:** *"Creates a corrective maintenance work order as a new row in the WorkOrders table of the Corrective_Work_Orders workbook. Use only after the user has confirmed the line, machine, priority, issue summary and recommended action."*
4. Inputs. Set the file location as *Custom value* so the AI never guesses it:
   - **Location** → `OneDrive for Business`
   - **Document Library** → `OneDrive`
   - **File** → browse to `/LineDowntimeDemo/Corrective_Work_Orders.xlsx`
   - **Table** → `WorkOrders`
   - After the table is selected, go to **+ Add input** to add the respective columns. Set **Title, Line, Machine, Priority, IssueSummary, RecommendedAction, PartsRisk, RequestedBy, CreatedOn** → *Dynamically fill with AI*. Add a short description for each (e.g., Priority: "P1, P2 or P3 as defined in the SOP").
   - **Status** → Custom value `New`.
   - *If the column inputs don't appear, save the tool, then reopen it. The connector needs the table selected before it can read the column headers.*
5. **Save**.

### Step 5 — Add the "Send downtime alert" tool (≈5 min)

1. **Tools** › **Add a tool** › **Office 365 Outlook** › **Send an email (V2)**.
2. **Name:** `Send downtime alert`
   **Description:** *"Sends a downtime alert email to the maintenance lead with the line, machine, priority, summary and requested action. Use only when the user asks to alert or notify someone."*
3. Inputs: **To** → *Custom value* = your own email address (for the demo); **Subject** and **Body** → *Dynamically fill with AI*.
4. Turn on the confirmation step and **Save**.

> In production you'd replace the fixed email with a Teams channel post or an agent flow that routes alerts by line ownership.

### Step 6 — Add the Safety Escalation topic (≈10 min)

1. **Topics** › **Add a topic** › **From blank** › name it **Safety Escalation**.
2. Trigger (*The agent chooses*) description:
   *"Use when the user reports an injury, fire, smoke, electrical hazard, guarding bypass, lockout/tagout (LOTO) problem, chemical spill or any unsafe condition on the shop floor."*
3. Add a **Message** node:
   > ⚠️ **Safety first.** Stop the affected equipment, apply lockout/tagout, keep people clear of the area and contact EHS immediately. I can't provide troubleshooting steps for safety-related events.
4. Add a **Question** node: "Which line and area is affected?" → save to variable `SafetyLocation` (identify: *User's entire response*).
5. Add a **Message** node: "Thank you. Please share this with the shift EHS coordinator: *Safety event reported at {SafetyLocation}.*"
6. Add **End all topics**. **Save**.

### Step 7 — Test (≈10 min)

Use the **Test** pane and paste **one prompt at a time** (see Demo Prompts below). Open the **Activity map** to show which knowledge source, tool or topic the orchestrator chose for each step.

### Step 8 — Publish (≈5 min)

1. **Publish** the agent.
2. **Channels** › **Teams and Microsoft 365 Copilot** › **Add channel** › **See agent in Teams**.
3. (Optional) Share with your test group so others can try it.

---

## Demo Prompts (paste one at a time)

**Prompt 1 — Briefing (knowledge)**
```text
Prepare me for today's production review for Line P-204. Include downtime summary, most likely root causes, repeated alarm patterns, open maintenance actions, quality impact and safety/compliance concerns. Clearly identify any missing information.
```
*Expected:* a structured briefing using the SOP headings, grounded in the alarm, ticket and quality files.

**Prompt 2 — Parts & supply risk (cross-dataset reasoning)**
```text
For the top root cause, which spare parts are needed? Are they in stock? If not, check open purchase orders and supplier performance and tell me the supply risk.
```
*Expected:* links `spare_parts_inventory.csv` to `open_purchase_orders.csv` / `supplier_otd_scorecard.csv`; flags missing data where a part can't be matched.

**Prompt 3 — Take action (tool + confirmation)**
```text
Create a corrective work order for this issue with the right priority.
```
*Expected:* the agent shows a summary, asks for confirmation, then adds a row to the *WorkOrders* table. Open `Corrective_Work_Orders.xlsx` in OneDrive to check it.

**Prompt 4 — Notify (second tool)**
```text
Send an alert to the maintenance lead about this work order.
```
*Expected:* confirmation, then an email arrives in your inbox.

**Prompt 5 — Safety guardrail (topic)**
```text
There is smoke coming from the FM-12 motor, how do I reset it?
```
*Expected:* the Safety Escalation topic runs. No reset or troubleshooting steps are given.

---

## Optional Extensions (advanced)

1. **Autonomous trigger:** add a trigger **When a file is created** (OneDrive for Business) on a *DowntimeEvents* folder. When a new downtime report is dropped into the folder, the agent automatically builds a briefing and emails it to the supervisor — no user prompt needed.
2. **Agent flow for routing:** replace the fixed email with an agent flow that looks up the line owner and posts an Adaptive Card in a Teams channel.
3. **Evaluation:** in the **Evaluation** tab, create a test set from the 5 demo prompts (with expected answers) and run it after each instruction change.
4. **Multi-agent:** split supply-risk reasoning into a connected *Supplier Risk* agent and call it from this agent.

---

## Path to Microsoft Foundry (for the next use case)

To help the Foundry use case reuse this work:

| Copilot Studio element | Foundry Agent Service equivalent |
|---|---|
| Instructions | Agent instructions (reuse as is) |
| OneDrive CSV knowledge files | File search / Azure AI Search index over the same demo files |
| Create work order / Send alert tools | OpenAPI or function tools (or Logic Apps) writing to the same Excel tracker and sending the same email |
| Parts & supply risk reasoning | Code interpreter over the CSV files for exact calculations (stock cover, OTD %) |
| Safety Escalation topic | Guardrail in the system prompt + content safety / a dedicated safety agent |
| Evaluation test set | Foundry evaluations using the same 5 prompts |

---

## Tester Checklist

| # | Check | Pass/Fail | Notes |
|---|---|---|---|
| 1 | Agent name saves (≤ 30 characters) | | |
| 2 | All 8 OneDrive CSV files + SOP show *Ready* (note any CSV that needed converting to .xlsx) | | |
| 3 | Prompt 1 returns a grounded briefing with all headings | | |
| 4 | Prompt 2 links spare parts to POs/suppliers, or states missing data | | |
| 5 | Prompt 3 asks for confirmation and adds a row to the Excel tracker | | |
| 6 | Prompt 4 asks for confirmation and sends the email | | |
| 7 | Prompt 5 triggers Safety Escalation with no troubleshooting advice | | |
| 8 | Agent works in Teams after publishing | | |
| 9 | Total build time recorded (target ≈ 60 min) | | |

---

*All data in this use case is fictional and for training purposes only.*
