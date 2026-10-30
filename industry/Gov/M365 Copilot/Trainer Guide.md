# Trainer Guide: Citizen Enquiry Support with Microsoft 365 Copilot

## Purpose of This Guide

This guide helps trainers prepare and deliver the **Public Sector: Citizen Enquiry Support** use case using Microsoft 365 Copilot across Microsoft 365 applications.

The scenario places learners in the role of a **Frontline Service Officer** during a high\-volume disruption to an essential public service.

The reference implementation uses a fictional **water supply disruption affecting thousands of residents**.

The classroom story develops over time:

**Incident begins → Citizen asks a question → Copilot finds approved information → Operational data is analyzed → Service information changes → Citizen asks again → Priority citizen appears → An ambiguous request tests boundaries → A response is drafted → The officer summarizes the interaction → The service team is briefed**

The goal is not to demonstrate isolated Copilot features or provide an application tour.

The goal is to show how Microsoft 365 Copilot can support a realistic workflow across the Microsoft 365 applications employees already use.

**Small improvement. Large public impact.**

---

# 1\. Scenario at a Glance

| Item | Description |
| --- | --- |
| Industry | Public Sector |
| Persona | Frontline Service Officer |
| Use case | Citizen Enquiry Support |
| Scenario | Citizen Services: Essential Service Disruption |
| Reference implementation | Water supply disruption |
| Core demo duration | 15–20 minutes |
| Extended demo duration | 25–35 minutes |
| Demo data | Fully synthetic |
| Core experiences | Microsoft 365 Copilot Chat, Outlook, Excel, Word |
| Optional experiences | Teams and PowerPoint |

## Business challenge

A significant water supply disruption affects several service areas and thousands of residents.

Citizen enquiries begin increasing rapidly.

Frontline Service Officers need to understand:

- which areas are affected
- what the latest service status is
- estimated restoration times
- how many citizens may be affected
- available citizen assistance
- priority\-support procedures
- what cannot yet be confirmed
- when an enquiry needs escalation

Information changes as the incident progresses.

The Frontline Service Officer uses Microsoft 365 Copilot across Microsoft 365 applications to find, understand, analyze, compare, communicate, and summarize approved information.

---

# 2\. Cross\-Microsoft 365 Demo Design

Each Microsoft 365 experience must support a genuine part of the officer’s work.

Do not include an application only to increase the number of Microsoft 365 applications shown.

| Scenario moment | Microsoft 365 experience | Purpose |
| --- | --- | --- |
| Incident begins | Microsoft 365 Copilot Chat | Understand the initial incident |
| Citizen asks | Outlook | Summarize the citizen’s email and identify what must be answered |
| Officer investigates | Microsoft 365 Copilot Chat | Find and synthesize approved information |
| Officer assesses impact | Excel | Analyze service areas, affected citizens, enquiry volumes, and priority cases |
| Situation changes | Microsoft 365 Copilot Chat | Compare earlier and newer information |
| Citizen asks again | Outlook | Draft a response using current approved information |
| Priority citizen appears | Outlook and Microsoft 365 Copilot Chat | Identify applicable support and escalation guidance |
| Response is refined | Word | Create clear and accessible citizen communication |
| Interaction closes | Word or Microsoft 365 Copilot Chat | Create a structured case summary |
| Service team coordinates | Teams | Summarize discussions, decisions, and actions |
| Frontline team needs an update | PowerPoint | Produce a concise operational briefing |

---

# 3\. Core and Extended Demo Paths

## Core path: 15–20 minutes

Use this path for most classes:

1. Microsoft 365 Copilot Chat: Understand the incident
2. Outlook: Analyze the first citizen enquiry
3. Microsoft 365 Copilot Chat: Find the approved answer
4. Excel: Assess the scale and affected service areas
5. Microsoft 365 Copilot Chat: Compare changing updates
6. Outlook: Draft a citizen response
7. Microsoft 365 Copilot Chat: Handle a priority or ambiguous case
8. Word: Refine the final communication
9. Word or Microsoft 365 Copilot Chat: Summarize the interaction

## Extended path: 25–35 minutes

Add these experiences when they support the course objectives:

1. Teams: Summarize an incident coordination discussion
2. PowerPoint: Create an operational briefing for the frontline team

## Short path: 8–10 minutes

Use four moments:

1. Understand the incident in Microsoft 365 Copilot Chat
2. Analyze citizen impact in Excel
3. Draft the response in Outlook
4. Refine and verify the response in Word

---

# 4\. Application and Feature Availability

Microsoft 365 Copilot experiences may vary depending on:

- Copilot license
- tenant configuration
- Microsoft 365 application version
- feature availability
- organizational policies
- connected content
- demo tenant readiness

Before delivery, confirm which Copilot experiences are available in the demonstration tenant.

If an application experience is unavailable, use an appropriate fallback.

- If Copilot in Outlook is unavailable, copy the synthetic citizen enquiry into Microsoft 365 Copilot Chat.
- If Copilot in Excel is unavailable, reference the workbook from Microsoft 365 Copilot Chat or use a prepared workbook summary.
- If Copilot in Word is unavailable, complete the drafting and simplification task in Microsoft 365 Copilot Chat.
- If Copilot in Teams is unavailable, use a prepared synthetic meeting recap or conversation summary.
- If Copilot in PowerPoint is unavailable, use the prepared operational briefing generated before class.
- If time is limited, omit the Teams and PowerPoint extensions.

---

# 5\. Required Synthetic Assets

The accompanying Cowork instructions will create the coordinated synthetic demo environment.

## Core knowledge assets

### Essential\_Service\_Disruption\_Notice.pdf

The initial approved public notice should contain:

- incident start date and time
- affected service areas
- known impact
- current investigation status
- information not yet known
- approved public contact guidance

At this point, the notice must not contain a restoration estimate.

### Service\_Restoration\_Updates.docx

A time\-sequenced record of approved operational updates.

The updates should show:

- initial investigation
- an estimated restoration time becoming available
- emergency water support becoming available
- a restoration estimate changing
- partial service restoration
- the latest service status

Every update must include a clear date and time.

### Citizen\_Service\_FAQ.docx

Approved answers for common citizen questions, including:

- affected service areas
- estimated restoration
- emergency drinking water
- actions after supply returns
- reporting a disruption in an unlisted area
- obtaining official updates

### Priority\_Citizen\_Support\_Guide.pdf

Approved procedures for citizens who may require additional assistance.

### Frontline\_Officer\_Response\_Guide.docx

Instructions for Frontline Service Officers, including:

- appropriate tone
- use of approved information
- plain\-language guidance
- handling uncertainty
- prohibited promises
- escalation criteria
- human review requirements

## Structured data asset

### Service\_Disruption\_Operations.xlsx

Recommended columns:

| Column | Purpose |
| --- | --- |
| Service area | Identifies the affected area |
| Estimated residents affected | Shows the scale of disruption |
| Incident status | Investigation, disrupted, restoring, or restored |
| Initial estimated restoration | Shows the earlier estimate |
| Revised estimated restoration | Shows the latest estimate |
| Enquiries received | Shows enquiry volume |
| Priority cases | Shows cases requiring additional attention |
| Emergency water location | Shows approved assistance information |
| Last updated | Supports recency checks |
| Escalation status | Shows operational follow\-up |

The workbook should contain enough rows to support meaningful analysis without becoming difficult to demonstrate.

A recommended range is:

- 6–10 service areas
- 50–100 individual synthetic enquiry records, if a separate enquiry table is included

## Communication assets

### Synthetic Outlook emails

Prepare fictional citizen emails covering:

1. Initial restoration enquiry
2. Emergency drinking\-water enquiry
3. Follow\-up after an earlier estimated time has passed
4. Priority citizen support enquiry
5. Unlisted\-service\-area enquiry
6. Request for a guaranteed restoration time

### Synthetic Teams incident coordination content

The conversation or meeting transcript should include:

- operational updates
- discussion of affected areas
- emergency assistance actions
- restoration delays
- decisions
- assigned actions
- unresolved questions
- information approved for citizen communication

### Frontline\_Operations\_Briefing.pptx

This can be:

- an empty presentation template used during the PowerPoint demonstration, or
- a partially completed presentation that Copilot updates using the latest information

## Trainer validation asset

### Expected\_Results\_and\_Validation\_Guide.docx

For every demo prompt, identify:

- expected source
- supported facts
- unsupported conclusions to avoid
- expected level of uncertainty
- expected escalation
- teaching point
- representative fallback output

---

# 6\. Pre\-Demo Validation Checklist

Before the session, verify:

- [ ] All scenario assets were generated successfully.
- [ ] Every organization, citizen, location, address, service area, and contact detail is fictional.
- [ ] The initial incident notice contains no restoration estimate.
- [ ] A later update introduces an estimated restoration time.
- [ ] A subsequent update changes at least one restoration estimate.
- [ ] Every operational update contains a clear date and time.
- [ ] The workbook uses the same service areas and restoration times as the approved updates.
- [ ] Emergency water information is consistent across the FAQ, workbook, and service updates.
- [ ] Priority citizen guidance exists.
- [ ] At least one citizen enquiry cannot be fully answered from the available information.
- [ ] Synthetic Outlook emails are available.
- [ ] Synthetic Teams content is available if Teams will be demonstrated.
- [ ] Copilot can access the files required for each demonstration.
- [ ] The core prompts have been tested before class.
- [ ] Representative expected responses are available as a fallback.
- [ ] No real citizen, government, customer, or operational information is present.

---

# 7\. Classroom Introduction

## Suggested trainer narrative

“Imagine you are a Frontline Service Officer. A major water supply disruption has affected several service areas and thousands of residents.

Citizens are contacting the organization through email and other service channels. At the same time, operational information is changing as teams investigate the problem and work to restore service.

Your challenge is not simply to respond quickly. You must ensure the information is current, supported by approved organizational information, and easy for a citizen to understand.

During this demonstration, we will follow the officer’s work across Microsoft 365. We will use Microsoft 365 Copilot to understand the incident, analyze operational data, respond to citizen emails, prepare communication, and summarize the interaction.”

## Ask learners

**What would be difficult about managing hundreds or thousands of citizen enquiries during an incident like this?**

Likely responses include:

- high enquiry volume
- rapidly changing information
- finding the correct source
- inconsistent responses
- pressure to provide certainty
- frustrated citizens
- special support requirements
- manual reporting and documentation

Use the learners’ responses to transition into the demonstration.

---

# 8\. Demo 1: Understand the Incident

## Microsoft 365 experience

**Microsoft 365 Copilot Chat**

## Asset

Essential\_Service\_Disruption\_Notice.pdf

## Scenario moment

The incident has just begun.

The Frontline Service Officer needs to understand the situation before responding to citizens.

## Trainer action

Open Microsoft 365 Copilot Chat and reference the approved incident notice.

## Prompt

**Summarize the current service disruption for me as a Frontline Service Officer. Identify the affected service areas, what is currently known, what is still unknown, and the most important information I should understand before responding to citizens. Base your response only on the approved incident notice.**

## Expected result

Copilot should identify:

- affected service areas
- known incident information
- current investigation status
- information that remains unknown
- important citizen communication considerations

Copilot should not invent a restoration estimate.

## Trainer callout

“Copilot is not simply shortening a document. It is interpreting the information for the employee’s role and task.”

## Alternate prompt

**Create a five\-point frontline briefing from the approved incident notice. Separate confirmed information from information that is still being investigated.**

## Fallback

Open the incident notice and manually show:

- what is confirmed
- what remains unknown
- the absence of a restoration estimate

---

# 9\. Demo 2: Analyze the First Citizen Email

## Microsoft 365 experience

**Outlook with Copilot**

## Asset

Synthetic citizen email:

**Subject:** No water in my neighbourhood

“I have had no water since this morning. I live in Service Area B. When will the supply return? I need to know before I leave for work.”

## Scenario moment

A citizen asks when the water supply will return.

At this stage, no approved restoration estimate exists.

## Trainer action

Open the email in Outlook and use Copilot to understand the citizen’s request.

## Prompt

**Summarize this citizen’s enquiry. Identify the questions I need to answer and any information I must verify before responding.**

## Expected result

Copilot should identify:

- the citizen’s service area
- the loss of water supply
- the request for a restoration time
- the need to verify the latest approved incident information

## Follow\-up prompt

**Based only on the current approved service information, what can I tell this citizen? Clearly separate what is known from what cannot yet be confirmed.**

## Expected result

Copilot should explain that the disruption is known while stating that a restoration time cannot yet be confirmed.

## Trainer callout

“A useful response is not always a definitive response. At this moment, the approved information does not support a restoration time.”

## Fallback

Copy the synthetic email into Microsoft 365 Copilot Chat and reuse the prompts.

---

# 10\. Demo 3: Find and Synthesize Approved Information

## Microsoft 365 experience

**Microsoft 365 Copilot Chat**

## Assets

- Essential\_Service\_Disruption\_Notice.pdf
- Citizen\_Service\_FAQ.docx
- Frontline\_Officer\_Response\_Guide.docx

## Scenario moment

The officer needs to prepare an accurate initial response.

Relevant information exists across multiple approved sources.

## Prompt

**Review the citizen’s enquiry against the approved incident notice, Citizen Service FAQ, and Frontline Officer Response Guide. Identify what I can answer now, what remains unknown, and the next step I should provide. Do not make assumptions.**

## Expected result

Copilot should synthesize:

- confirmed incident information
- approved citizen guidance
- appropriate response tone
- current uncertainty
- the citizen’s next step or official update channel

## Trainer callout

“The value here is synthesis. The officer is not relying on one document or asking Copilot to use general knowledge.”

## Alternate prompt

**Create a response plan with three sections: Confirmed information, Information not yet available, and Citizen next step.**

---

# 11\. Demo 4: Analyze the Operational Impact

## Microsoft 365 experience

**Excel with Copilot**

## Asset

Service\_Disruption\_Operations.xlsx

## Scenario moment

The frontline team needs to understand the scale of the disruption.

The workbook contains service\-area status, estimated population, enquiry volumes, priority cases, and restoration information.

## Trainer action

Open the workbook and confirm that the data is formatted as an Excel table.

## Prompt 1: Understand the data

**Summarize the operational impact of the disruption. Identify the service areas with the largest affected population, highest enquiry volume, and most priority cases.**

## Expected result

Copilot should identify the highest\-impact service areas using evidence from the workbook.

## Prompt 2: Find patterns

**Compare enquiry volume with the estimated residents affected. Which service areas appear to have unusually high enquiry volume relative to their affected population?**

## Expected result

Copilot should identify relevant patterns without claiming unsupported causes.

## Prompt 3: Focus frontline attention

**Based on the available data, identify the three service areas that may require the most frontline communication attention. Explain the data supporting each selection.**

## Expected result

Copilot should use evidence such as:

- affected population
- enquiry volume
- priority cases
- restoration delay
- escalation status

## Optional visualization prompt

**Create a chart comparing enquiries received across the affected service areas.**

## Trainer callout

“We are using Excel to understand the scale of the public impact. We are not using it simply because Excel is available.”

## Responsible\-use callout

“The workbook can show where enquiry volume is high. It cannot automatically explain why unless the data supports that conclusion.”

## Fallback

Use a pre\-created chart and summary table in the workbook.

If Copilot in Excel is unavailable, reference the workbook from Microsoft 365 Copilot Chat or use the prepared workbook summary.

---

# 12\. Demo 5: New Information Arrives

## Microsoft 365 experience

**Microsoft 365 Copilot Chat**

## Asset

Service\_Restoration\_Updates.docx

## Scenario moment

Operational teams publish a new update.

An estimated restoration time is now available for some service areas.

## Prompt

**Review the latest approved service update. What new information is now available to Frontline Service Officers? Highlight anything that was not included in the initial incident notice.**

## Expected result

Copilot should identify:

- newly available restoration estimates
- additional affected\-area information
- newly activated citizen assistance
- information still under investigation

## Follow\-up prompt

**Create a concise frontline briefing with three sections: Previous information, New information, and What officers can now tell citizens.**

## Trainer callout

“Information during an incident has a lifecycle. Copilot can help the employee recognize what changed, but the employee should still verify the source and timestamp.”

---

# 13\. Demo 6: Respond to a Multi\-Source Citizen Enquiry

## Microsoft 365 experience

**Outlook with Copilot**

## Asset

Synthetic citizen email:

**Subject:** Water restoration and emergency drinking water

“I live in Service Area B. We have had no water since this morning. When is the supply expected to return, and where can my family collect emergency drinking water?”

## Scenario moment

Answering the enquiry requires:

- restoration information
- affected\-area information
- emergency drinking\-water guidance

## Trainer action

Open the citizen email in Outlook.

## Prompt

**Review this citizen enquiry against the latest approved service update and citizen guidance. Draft a response that includes the current estimated restoration information, available emergency drinking\-water support, and the citizen’s next step. Clearly label any time as an estimate.**

## Expected result

The response should:

- use the latest restoration estimate
- include the correct emergency water location or guidance
- preserve uncertainty
- use respectful, citizen\-friendly language
- avoid unsupported commitments

## Trainer callout

“This response depends on information from more than one source. Copilot is helping assemble the relevant facts around the citizen’s specific need.”

## Alternate prompt

**Before drafting, list the facts from the approved sources that are relevant to this citizen. Then create the response.**

## Fallback

Use Microsoft 365 Copilot Chat with the synthetic email and approved source files.

---

# 14\. Demo 7: Recognize a Changed Restoration Estimate

## Microsoft 365 experience

**Microsoft 365 Copilot Chat**

## Asset

Service\_Restoration\_Updates.docx

## Scenario moment

An earlier update estimated restoration at 14:00.

A newer approved update revises the estimate to 18:00.

## Prompt

**Compare the service updates relevant to Service Area B. Identify what changed, which information is the most current, and what a Frontline Service Officer should communicate now. Include the date and time of the current update.**

## Expected result

Copilot should:

- recognize the earlier estimate
- recognize the revised estimate
- identify the latest approved update
- explain what changed
- preserve the revised time as an estimate

## Trainer callout

“The challenge is not retrieving a restoration time. The challenge is recognizing that a previously correct answer has been superseded.”

## Evidence\-check prompt

**Identify the approved update supporting each important statement in your answer.**

## Fallback

Use the timestamps and headings in the update document to compare the two updates manually.

---

# 15\. Demo 8: Respond to the Citizen’s Follow\-Up

## Microsoft 365 experience

**Outlook with Copilot**

## Asset

Synthetic follow\-up email:

**Subject:** Water still not restored

“I was told that water would return by 2 PM. It is now 2:30 PM and there is still no supply. When will it actually return?”

## Scenario moment

The citizen is frustrated and is referring to information that is no longer current.

## Prompt

**Draft a respectful response to this citizen using the latest approved service update. Acknowledge that the earlier estimated time has passed, explain the revised estimate clearly, and avoid presenting it as guaranteed. Include the appropriate next step.**

## Expected result

The response should:

- acknowledge the citizen’s frustration
- explain that the earlier estimate changed
- provide the revised estimated restoration time
- avoid guaranteeing the revised time
- provide an official next step or update channel

## Trainer callout

“Copilot helps with both factual grounding and tone. The two should not be separated.”

## Alternate prompt

**Create a response in no more than 120 words. Preserve the distinction between an estimate and a guarantee.**

---

# 16\. Demo 9: Handle a Priority Citizen Enquiry

## Microsoft 365 experience

**Outlook and Microsoft 365 Copilot Chat**

## Assets

- synthetic priority citizen email
- Priority\_Citizen\_Support\_Guide.pdf
- Frontline\_Officer\_Response\_Guide.docx

## Citizen email

**Subject:** Support needed for elderly resident

“My 78\-year\-old mother lives alone in Service Area C. She has limited mobility and has no water. She cannot easily travel to the emergency water location. What help is available?”

## Prompt in Outlook

**Summarize this enquiry and identify why it may require priority attention. Do not recommend support until the approved guidance has been reviewed.**

## Follow\-up prompt in Microsoft 365 Copilot Chat

**Review this enquiry against the approved Priority Citizen Support Guide. Identify what assistance may apply, what the Frontline Service Officer should do next, and what requires escalation or human review. Do not invent services that are absent from the approved guidance.**

## Expected result

Copilot should:

- recognize the priority circumstance
- surface the relevant approved support
- identify escalation or human review
- avoid inventing unavailable services

## Trainer callout

“This is where productivity becomes secondary to judgment. Copilot can surface the guidance, but the approved organizational procedure determines the action.”

## Fallback

Open the priority\-support guide and manually identify the applicable support and escalation route.

---

# 17\. Demo 10: Test the Boundary

## Microsoft 365 experience

**Microsoft 365 Copilot Chat**

## Scenario moment

The latest update says that restoration is **estimated** for 18:00.

The citizen asks:

“Please confirm that my water will definitely be back by 6 PM.”

## Prompt

**Based only on the latest approved service information, can I confirm this to the citizen? Explain why or why not, and suggest accurate wording I can use.**

## Expected result

Copilot should recognize:

**An estimated restoration time is not a guaranteed restoration time.**

Copilot should suggest wording that preserves the level of certainty in the source.

## Trainer callout

“One word matters here: estimated.”

Explain that changing **estimated** to **definitely** creates an unsupported promise.

## Optional challenge prompt

**The citizen wants a definite answer. Draft a reassuring response that guarantees restoration by 6 PM.**

Use the output to reinforce:

- source validation
- accurate representation of uncertainty
- employee responsibility
- review before communication

Regardless of the output, the officer must not make a guarantee unsupported by the approved information.

---

# 18\. Demo 11: Refine the Citizen Communication

## Microsoft 365 experience

**Word with Copilot**

## Assets

- draft citizen response
- Frontline\_Officer\_Response\_Guide.docx
- approved service updates

## Scenario moment

The officer has a factually grounded draft but needs to make it clear and accessible.

## Prompt

**Rewrite this citizen response using simple everyday English. Use short sentences, retain all important service information, preserve any uncertainty, and make the citizen’s next step easy to understand. Do not add facts that are absent from the approved information.**

## Expected result

The revised response should contain:

- shorter sentences
- simple terminology
- clear next steps
- respectful tone
- unchanged factual meaning
- preserved uncertainty

## Follow\-up prompt

**Review this response against the Frontline Officer Response Guide. Identify any wording that sounds too technical, too confident, unclear, or unsupported.**

## Trainer callout

“Simplification must not change the meaning.”

## Optional accessibility prompt

**Improve the readability of this response for a broad public audience. Use descriptive headings and concise bullet points where helpful.**

## Fallback

Use a prepared before\-and\-after response in the Word document.

---

# 19\. Demo 12: Summarize the Interaction

## Microsoft 365 experience

**Word or Microsoft 365 Copilot Chat**

## Scenario moment

The citizen interaction is complete.

The officer needs an internal case summary.

## Prompt

**Create a concise case summary of this interaction. Include the citizen’s main enquiry, relevant service area, approved information used, guidance provided, anything that remains unresolved, whether escalation is required, and the recommended next action. Do not add information that was not present in the interaction or approved guidance.**

## Expected result

Copilot should produce a structured operational summary.

## Suggested structure

- Citizen enquiry
- Service area
- Current service information
- Guidance provided
- Unresolved issue
- Escalation status
- Next action

## Trainer callout

Explain the two sides of the workflow.

### Citizen\-facing work

Clear and appropriate public communication.

### Employee\-facing work

Finding, understanding, comparing, documenting, and summarizing information.

---

# 20\. Optional Teams Extension: Coordinate the Response

## Microsoft 365 experience

**Teams with Copilot**

## Asset

Synthetic incident coordination conversation or meeting transcript.

## Scenario moment

Operations, communications, field services, and frontline support teams have discussed the incident.

The Frontline Service Officer needs the important outcomes.

## Prompt

**Summarize the incident coordination discussion. Identify the latest service status, decisions made, actions assigned, unresolved questions, and anything Frontline Service Officers need to know when responding to citizens.**

## Expected result

Copilot should distinguish:

- status information
- decisions
- actions
- owners
- unresolved issues
- citizen communication implications

## Follow\-up prompt

**Which points from this discussion have been formally approved for citizen communication, and which remain internal or unconfirmed?**

## Trainer callout

“A meeting or chat may contain discussion, proposals, and assumptions. Not every statement is approved public guidance.”

## Important caution

Only treat information as approved for citizen communication if the synthetic scenario explicitly establishes that approval.

## Fallback

Use a prepared Teams recap or exported synthetic transcript.

---

# 21\. Optional PowerPoint Extension: Brief the Frontline Team

## Microsoft 365 experience

**PowerPoint with Copilot**

## Assets

- latest approved service update
- Service\_Disruption\_Operations.xlsx
- approved citizen guidance
- optional presentation template

## Scenario moment

The service manager needs a short briefing for the next frontline shift.

## Prompt

**Create a concise frontline operations briefing about the current water supply disruption using the approved service update, operational workbook, and citizen guidance. Include the current situation, most affected service areas, latest restoration information, common citizen questions, priority\-support guidance, and the three most important actions for Frontline Service Officers.**

## Recommended output

A short presentation of approximately five slides:

1. Current incident status
2. Public impact
3. Latest service updates
4. Citizen communication guidance
5. Priority actions and escalation

## Trainer callout

“PowerPoint is being used to turn the operational picture into a shift briefing. It is not being added simply to demonstrate slide creation.”

## Verification prompt

**Review this presentation and identify any claim that is not supported by the approved source material or that fails to distinguish an estimate from a confirmed fact.**

## Fallback

Use the prepared Frontline\_Operations\_Briefing.pptx.

---

# 22\. Prompt Library by Microsoft 365 Experience

## Microsoft 365 Copilot Chat

### Understand

**Summarize the incident for a Frontline Service Officer. Separate confirmed information from unknown or unconfirmed information.**

### Find

**What does the approved guidance say about emergency drinking water for affected residents?**

### Compare

**Compare the available service updates. What changed, and which information is the most current?**

### Evidence check

**For each important statement, identify the approved source that supports it.**

### Missing information

**What does this citizen want to know that cannot currently be answered from the approved information?**

### Boundary check

**Which statements in this proposed response exceed what the approved sources confirm?**

---

## Outlook

### Summarize enquiry

**Summarize this citizen’s enquiry and identify the questions that need to be answered.**

### Draft reply

**Draft a respectful reply using only the latest approved service information. Clearly distinguish confirmed information from estimates.**

### Short reply

**Create a response in no more than 120 words. Include the current status, applicable estimate, and next step.**

### Adjust tone

**Make this response empathetic and clear without introducing unsupported promises.**

---

## Excel

### Analyze scale

**Which service areas have the highest affected population, enquiry volume, and number of priority cases?**

### Identify patterns

**Compare enquiry volume across service areas and identify meaningful patterns supported by the data.**

### Prioritize attention

**Which three service areas may need the most frontline communication attention? Explain the data supporting your answer.**

### Visualize

**Create a chart comparing enquiry volume across affected service areas.**

---

## Word

### Simplify

**Rewrite this response using simple everyday English while preserving all facts and uncertainty.**

### Review

**Review this response for clarity, tone, unsupported claims, and alignment with the Frontline Officer Response Guide.**

### Structure

**Organize this service communication using a clear heading, current situation, what the citizen should know, and next steps.**

### Summarize case

**Create a concise case summary without adding information absent from the interaction.**

---

## Teams

### Summarize

**Summarize the latest incident discussion, decisions, actions, owners, and unresolved issues.**

### Determine frontline relevance

**What does a Frontline Service Officer need to know from this conversation before responding to citizens?**

### Separate approved and unconfirmed information

**Separate approved citizen communication from internal discussion and unconfirmed information.**

---

## PowerPoint

### Create briefing

**Create a five\-slide frontline operations briefing using the approved incident information and operational data.**

### Improve presentation

**Make the presentation concise and suitable for a five\-minute shift briefing.**

### Validate claims

**Identify unsupported claims or outdated information in this presentation.**

---

# 23\. Optional Challenge Enquiries

## Unlisted service area

“My neighbourhood is not on the affected\-area list, but I also have no water. Is my area part of the same incident?”

**Learning point:** Do not declare an area affected without supporting information.

---

## Demand for certainty

“I need to leave for work. Promise me the service will be back by the published time.”

**Learning point:** Maintain the distinction between estimate and guarantee.

---

## Unsupported root cause

“Was the disruption caused by poor maintenance?”

**Learning point:** Do not invent a root cause when one has not been confirmed.

---

## Urgent health concern

“I need water for an urgent medical situation. What should I do?”

**Learning point:** Follow the approved emergency and escalation process. Do not improvise medical or emergency advice.

---

## Conflicting information

“The website says 6 PM, but my neighbour says the contact center told them 8 PM.”

**Learning point:** Use the latest approved organizational information and acknowledge the conflict without validating unofficial claims.

---

# 24\. Responsible AI Discussion

After the demonstration, ask:

**Which tasks did Copilot assist with, and which decisions remained with the employee?**

## Copilot assisted with

- locating information
- summarizing documents
- analyzing structured data
- comparing updates
- synthesizing sources
- drafting responses
- simplifying language
- identifying missing information
- summarizing discussions
- producing briefings

## The Frontline Service Officer remained responsible for

- reviewing generated content
- verifying current approved information
- deciding whether the response was appropriate
- protecting citizen information
- following organizational procedures
- handling exceptional circumstances
- escalating priority cases
- determining what should be communicated

Reinforce:

**Copilot assists. The employee remains accountable.**

---

# 25\. Common Demo Failure Modes

## Copilot uses an older update

Use:

**Compare the timestamps of the available updates and use the most recent update applicable to the citizen’s service area.**

**Teaching point:** Recency must be actively validated.

---

## Copilot sounds too confident

Use:

**Identify every statement that represents an estimate, assumption, or unconfirmed detail. Rewrite the response so that its level of certainty matches the source.**

---

## Copilot produces a long response

Use:

**Rewrite this for a citizen in no more than 120 words. Preserve all essential facts, uncertainty, and next steps.**

---

## Excel analysis claims causation

Use:

**Separate patterns directly supported by the data from possible explanations that would require further evidence.**

---

## PowerPoint contains unsupported claims

Use:

**Review every numerical and operational claim in the presentation against the approved source files. List any claim that cannot be verified.**

---

## Teams includes internal discussion as approved guidance

Use:

**Separate formal decisions and approved updates from proposals, questions, and unconfirmed discussion.**

---

## Copilot cannot locate expected information

Do not improvise missing facts.

Open the approved source and show the relevant information manually.

Explain that Copilot output should be verified when accuracy matters.

---

## A live Copilot experience is unavailable

Use prepared fallback assets:

- screenshots
- representative expected responses
- pre\-created Excel chart
- prepared Word response
- PowerPoint briefing
- Teams recap

Continue using the same structure:

**Scenario moment → Approved source → Copilot task → Expected output → Human review**

---

# 26\. Suggested Timing

## Core 20\-minute demonstration

| Section | Experience | Time |
| --- | --- | --- |
| Introduce scenario | Verbal or presentation | 2 minutes |
| Understand incident | Copilot Chat | 2 minutes |
| First citizen enquiry | Outlook | 2 minutes |
| Find approved information | Copilot Chat | 2 minutes |
| Analyze scale | Excel | 3 minutes |
| Compare changed update | Copilot Chat | 2 minutes |
| Draft follow\-up response | Outlook | 2 minutes |
| Priority or boundary scenario | Copilot Chat | 2 minutes |
| Refine response | Word | 2 minutes |
| Close | Verbal | 1 minute |

## Extended 30\-minute demonstration

Add:

| Section | Experience | Additional time |
| --- | --- | --- |
| Incident coordination recap | Teams | 4 minutes |
| Frontline operations briefing | PowerPoint | 5 minutes |
| Learner discussion | Classroom | 3 minutes |

---

# 27\. Course Adaptation Suggestions

Trainers should select the scenario moments that support the course objectives and the available Copilot experiences.

## Drafting\-focused delivery

Use:

- Outlook citizen email
- Word response refinement
- Microsoft 365 Copilot Chat grounding

## Analysis\-focused delivery

Use:

- Excel operational workbook
- service update comparison
- evidence validation

## Presentation\-focused delivery

Use:

- Teams incident summary
- PowerPoint frontline briefing
- Word communication review

## Prompting\-focused delivery

Use:

- prompt progression
- source grounding
- missing\-information detection
- uncertainty and boundary tests
- prompt refinement

## Broad Microsoft 365 Copilot delivery

Use the connected workflow across:

- Microsoft 365 Copilot Chat
- Outlook
- Excel
- Word
- Teams
- PowerPoint

The scenario can be adapted for Microsoft end\-user courses such as:

- MS\-4005
- MS\-4012
- MS\-4018
- MS\-4019
- AI\-050
- AI\-901
- other Microsoft 365 Copilot and AI end\-user skilling where the scenario aligns with the learning objectives

Exact application exercises should be aligned with the current course content and capabilities available in the demonstration tenant.

---

# 28\. Trainer Closing Narrative

“The value we saw was not simply Copilot writing a citizen response.

The Frontline Service Officer used Microsoft 365 Copilot across their everyday work.

They understood the incident in Copilot Chat, interpreted the citizen’s request in Outlook, assessed the scale in Excel, reviewed changing information, refined citizen communication in Word, and could extend the same workflow into Teams coordination and a PowerPoint shift briefing.

The applications changed, but the business situation remained connected.

Now imagine this workflow being repeated across hundreds or thousands of citizen enquiries during a major public\-service disruption.

That is where small improvements in everyday work can create large public impact.”

---

# 29\. Key Takeaway

Learners should leave the demonstration understanding:

**Microsoft 365 Copilot can help public sector employees work across applications to understand changing information, analyze operational impact, communicate clearly, and coordinate effectively. Grounding, verification, appropriate escalation, and human accountability remain essential.**

## Small improvement. Large public impact.

---

# 30\. Next: Cowork Instructions

The accompanying Cowork\-Instructions.md will create the coordinated fictional demo environment required by this guide.

Cowork will be used before class to synthesize assets such as:

- incident notice in PDF format
- restoration updates in Word
- citizen FAQ and officer guidance
- priority\-citizen support guidance
- operational data in Excel
- synthetic citizen emails for Outlook
- synthetic incident coordination content for Teams
- PowerPoint briefing or presentation template
- expected results and validation guidance

Cowork is not part of the classroom demonstration.

Its role is to prepare a consistent synthetic environment in which every document, email, workbook, update, prompt, and expected result belongs to the same fictional incident.

**The README explains the scenario.**

**The Trainer Guide delivers the scenario.**

**The Cowork instructions build the scenario environment.**

