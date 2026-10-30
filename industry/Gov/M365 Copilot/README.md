# Public Sector Use Case: Citizen Enquiry Support

## Overview

Public sector organizations provide essential services that citizens depend on every day.

When an essential service is disrupted, frontline service teams can experience a sudden increase in citizen enquiries. Citizens want timely answers, while service information may be changing as operational teams investigate, respond, and restore the service.

This use case demonstrates how **Microsoft 365 Copilot** can support a **Frontline Service Officer** in finding, understanding, and communicating approved service information during a high-volume service disruption.

The demonstration uses a fictional **water supply disruption** as the example, but the scenario is designed to be globally reusable across different public sector organizations, regions, and essential services.

> **Small improvement. Large public impact.**  
> Saving a few minutes and improving consistency on an individual enquiry can create significant value when the same situation affects thousands of citizens.

---

## Persona: Frontline Service Officer

A **Frontline Service Officer** is often one of the first points of contact between a public sector organization and the citizens it serves.

Depending on the organization, frontline officers may respond to enquiries received through:

- Contact centers
- Email
- Online citizen services
- Service desks
- Chat or messaging channels
- In-person service locations

During a service disruption, officers need to respond quickly while ensuring that the information they provide is accurate, current, clear, and based on approved organizational guidance.

Their responsibility is not simply to answer quickly. It is to provide the **right information at the right time while recognizing when an issue needs further review or escalation**.

---

# The Scenario: Essential Service Disruption

Imagine a significant **water supply disruption affecting thousands of residents across several service areas**.

The incident develops throughout the day.

Initially, the organization knows that a disruption has occurred, but the cause and expected restoration time may not yet be confirmed.

As operational teams investigate the problem, new information becomes available:

- affected service areas become clearer
- estimated restoration times are published
- emergency support information becomes available
- priority citizen support may be activated
- restoration estimates may change
- previously published information may become outdated

At the same time, citizens begin contacting the organization.

They ask questions such as:

> "Why don't I have water?"

> "Is my area affected?"

> "When will my water supply return?"

> "Where can I get emergency drinking water?"

> "My elderly mother lives alone and has limited mobility. What support is available?"

> "You said the service would return earlier, but it still hasn't. When will it actually be restored?"

For the Frontline Service Officer, the challenge is no longer simply finding a document.

The officer needs to determine:

**What is currently known?**

**Which information is the latest approved information?**

**Which guidance applies to this citizen?**

**What information can safely be communicated?**

**What cannot yet be confirmed?**

**Does this enquiry require escalation or additional support?**

---

# Current Challenges

During a large service disruption, frontline teams may face several challenges.

### High enquiry volumes

A single disruption can generate many citizen enquiries within a short period.

Many enquiries may ask similar questions, but individual circumstances can differ.

### Information distributed across sources

Relevant information may exist across:

- incident notifications
- service updates
- FAQs
- operational communications
- frontline response guidance
- emergency assistance information
- priority citizen support guidance

The officer may need to consult several sources before responding.

### Information changes over time

An early service update might state that no restoration estimate is available.

A later update might provide an estimated restoration time.

Another update may revise that estimate.

The latest approved information therefore matters.

### Citizens use everyday language

Citizens generally describe their problem naturally rather than using government or operational terminology.

The officer must translate organizational guidance into language that is simple and useful.

### Not every question has an answer

Sometimes the approved information does not contain enough information to answer the citizen's question.

For example, an estimated restoration time should not become a guaranteed restoration time simply because a citizen asks for confirmation.

### Some cases need additional attention

An enquiry involving an elderly person, a person with limited mobility, or another priority circumstance may require the officer to follow an approved support or escalation process.

---

# The Microsoft 365 Copilot Opportunity

Microsoft 365 Copilot can help the Frontline Service Officer work with available information more efficiently.

In this scenario, Copilot can assist the officer to:

### Find

Locate relevant information from the material available to the officer.

### Understand

Summarize lengthy service information and identify the details relevant to a citizen enquiry.

### Synthesize

Bring together information from multiple approved sources.

### Compare

Identify important differences between earlier and later service updates.

### Draft

Create a clear first draft of a citizen-facing response.

### Simplify

Transform operational or policy language into simpler citizen-friendly language.

### Identify uncertainty

Distinguish between information that is confirmed and information that cannot yet be determined.

### Summarize

Create a concise summary of the citizen interaction and the next action.

Copilot supports the officer's work, while the officer remains responsible for reviewing the response and deciding what should be communicated.

---

# Scenario Storyline

The classroom demonstration follows the incident as it develops rather than presenting disconnected prompts.

## 1. Incident begins

A significant water supply disruption occurs.

Initial approved information confirms that some service areas are affected, but important details are still being investigated.

**Learning moment:** Copilot helps the officer quickly understand the available information.

---

## 2. A citizen asks a question

A citizen contacts the organization asking when their water supply will return.

The initial incident information does not yet contain a confirmed restoration estimate.

**Learning moment:** Copilot should work from the available information without inventing an answer.

---

## 3. Copilot finds relevant information

The officer uses Copilot to locate and summarize relevant approved guidance.

Instead of manually reviewing several documents, the officer uses Copilot to identify the information most relevant to the enquiry.

**Learning moment:** Grounding the response in organizational information.

---

## 4. The situation changes

Operational teams publish a new service update containing additional information, including estimated restoration times for some affected areas.

Later, another update changes one of those estimates.

**Learning moment:** Information during an incident is dynamic. The officer needs to recognize the latest available approved information rather than relying on an earlier update.

---

## 5. The citizen asks again

A frustrated citizen contacts the organization because an earlier restoration estimate has passed.

The officer needs to understand what has changed and explain the latest situation clearly.

**Learning moment:** Copilot can help compare information, summarize the change, and prepare a clear response.

---

## 6. A priority citizen needs assistance

Another enquiry concerns an elderly resident with limited mobility who is affected by the disruption.

The officer needs to determine whether approved priority-support guidance applies.

**Learning moment:** Copilot can help surface relevant guidance, but the officer remains responsible for following the organization's approved support and escalation process.

---

## 7. An ambiguous request tests the boundary

A citizen asks:

> "Can you guarantee that my water will definitely be back by 6 PM?"

The approved information states only an **estimated** restoration time.

**Learning moment:** Copilot should preserve uncertainty instead of turning an estimate into a promise.

---

## 8. The officer drafts the response

Using the latest approved information, the officer asks Copilot to prepare a citizen-friendly response.

A representative prompt is:

> **Based only on the approved service updates and citizen guidance provided, review this citizen enquiry and draft a clear response using simple language. Use the latest available service information. Explain what is known, identify anything that cannot currently be confirmed, and provide the appropriate next step. Do not make assumptions or promise an outcome that is not stated in the approved information.**

The officer reviews the generated response before using it.

---

## 9. The officer summarizes the interaction

Finally, Copilot helps convert the interaction into a concise summary containing:

- the citizen's enquiry
- relevant service information
- guidance provided
- unresolved issues
- escalation, if required
- suggested next action

**Learning moment:** Copilot can support both citizen-facing communication and the employee's information work around that interaction.

---

# Example Copilot Experience

The scenario intentionally progresses from straightforward tasks toward situations requiring more judgment.

| Situation | Copilot-supported task | Key concept |
|---|---|---|
| Initial disruption | Summarize incident information | Understand |
| Citizen enquiry | Locate relevant guidance | Find |
| Multiple information sources | Combine relevant facts | Synthesize |
| New incident update | Compare earlier and current information | Compare |
| Citizen response | Create a clear first draft | Draft |
| Complex terminology | Rewrite in simple language | Simplify |
| Uncertain restoration time | Preserve uncertainty | Responsible use |
| Priority citizen | Surface relevant support guidance | Human accountability |
| Completed interaction | Create concise case summary | Summarize |

The intention is not to demonstrate every Microsoft 365 Copilot capability.

The scenario demonstrates how several capabilities can come together naturally to help a real employee complete a meaningful task.

---

# Why This Is a High-Impact Use Case

The value of the scenario comes from **scale**.

Saving a small amount of time on one citizen enquiry may appear insignificant.

During a major public-service disruption, however, the same questions may be repeated across hundreds or thousands of citizen interactions.

The potential impact therefore extends beyond individual productivity.

### For citizens

- Faster access to useful information
- Clearer explanations
- More consistent responses
- Better guidance on next steps

### For frontline officers

- Less time searching through information
- Faster understanding of changing updates
- Reduced repetitive drafting
- Easier transformation of operational information into citizen-friendly language

### For the organization

- Greater consistency across frontline communications
- Better use of approved information
- More scalable response during high-volume incidents
- More employee capacity available for enquiries requiring human judgment

The goal is not to remove the Frontline Service Officer from the process.

The objective is to **reduce repetitive information work so the officer can focus more attention on citizens and cases where human judgment matters most**.

---

# Responsible AI and Human Accountability

Public sector scenarios require careful attention to accuracy, transparency, privacy, accessibility, and accountability.

Throughout this scenario, reinforce the following principles with learners.

### Use approved information

Copilot should support the officer using information available from trusted organizational sources.

### Do not invent missing facts

If a restoration time, citizen status, service outcome, or support option cannot be determined from the available information, this should be stated clearly.

### Preserve uncertainty

An **estimated** restoration time should remain an estimate.

Copilot should not convert uncertain operational information into a guarantee.

### Protect citizen information

Classroom demonstrations should use only fictional and synthetic citizen information.

### Recognize escalation

Copilot can help identify relevant guidance, but established organizational procedures should determine how priority, emergency, or exceptional cases are handled.

### Keep a human in control

The Frontline Service Officer remains responsible for reviewing generated content and deciding whether it is appropriate to communicate.

> **Copilot assists. The employee remains accountable.**

---

# Global Reusability

The use case is intentionally designed around a generic **essential service disruption**, rather than a country-specific government process.

The reference demonstration uses a fictional **water supply disruption**, because the scenario is easy to understand across regions and requires little specialized domain knowledge.

The same scenario pattern can be adapted to other services, including:

- electricity disruption
- public transport disruption
- road closures
- waste collection disruption
- severe weather-related service interruptions
- other high-volume public service incidents

Organizations, locations, citizens, policies, service areas, contact information, and operational data used in the demonstration should remain fictional.

This allows trainers to preserve the learning experience while adapting the story to their audience.

---

# Learning Outcomes

After experiencing this scenario, learners should be able to explain how Microsoft 365 Copilot can assist a frontline public sector employee to:

1. Understand information related to a developing service incident.
2. Find relevant information for a citizen enquiry.
3. Synthesize information from multiple approved sources.
4. Recognize when newer information supersedes earlier information.
5. Draft clear citizen-facing communications.
6. Transform complex information into simpler language.
7. Identify uncertainty and avoid unsupported conclusions.
8. Recognize situations requiring human review or escalation.
9. Summarize an interaction and its next actions.

Most importantly, learners should understand that effective use of Copilot is not just about generating content.

> **It is about helping people work more effectively with information while keeping human judgment and accountability at the center.**

---

# Trainer Reuse Across Microsoft End-User Skilling

This scenario is designed as a reusable industry demonstration that trainers can adapt to the objectives and available experiences in Microsoft AI and Microsoft 365 Copilot end-user courses.

Potential reuse includes:

- **MS-4005**
- **MS-4012**
- **MS-4018**
- **MS-4019**
- **AI-050**
- **AI-901**
- other Microsoft 365 Copilot and AI end-user skilling where the scenario aligns with the course objectives

Trainers do not need to demonstrate every part of the storyline.

Select the scenario moments that best reinforce the objectives being taught.

---

# Next: Trainer Guide

This README explains the **business scenario, persona, impact, and learning story**.

The accompanying **Trainer Guide** provides the practical classroom delivery experience, including:

- demo prerequisites
- synthetic demo environment preparation
- classroom storyline and trainer narrative
- step-by-step demonstration flow
- recommended Microsoft 365 Copilot prompts
- alternate prompts as fallback
- expected results
- learner discussion points
- responsible AI moments
- demo recovery and fallback guidance

Synthetic demo assets used by this scenario are generated separately using the accompanying **Cowork Instructions** so trainers can prepare a consistent fictional demonstration environment before the class.

---

> ### Key message for trainers
>
> **Do not present this as a demonstration of AI writing an answer.**
>
> Present it as a demonstration of how a Frontline Service Officer can use Microsoft 365 Copilot to work with changing approved information during a high-volume public service incident, while retaining human judgment and accountability.
>
> **Small improvement. Large public impact.**
>
**The README explains the scenario.**

**The Trainer Guide delivers the scenario.**

**The Cowork instructions build the scenario environment.**
