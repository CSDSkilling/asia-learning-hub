# Trainer guardrails — FSI

Four rules that separate an industry demo from a feature tour.

---

## 1. Be precise about compliance — don't dodge it

Do not state that a Microsoft service or solution "is compliant". That claim isn't yours to make,
and a risk-aware audience will know it.

But precision is not the same as deflection. **Answer what you can answer.** Microsoft holds
independent certifications and audit reports for its cloud services and publishes regulatory
compliance documentation, including region and industry-specific guidance, through the
[Service Trust Portal](https://servicetrust.microsoft.com/) and the
[Microsoft compliance offerings](https://learn.microsoft.com/en-us/compliance/regulatory/offering-home)
index. Say so, and say where to find it.

Then be equally clear about the boundary: regulators supervise the institution, not its supplier.
Microsoft capabilities *support* an organisation's security, compliance and governance controls;
the obligation to configure them, test them and evidence that they operate stays with the
organisation. Technology alone does not establish regulatory compliance.

The shape of a good answer: "here is the evidence Microsoft publishes, here is where the boundary
sits, and here are the questions your control owner will need to answer." Only after that should
you ask them to identify the applicable obligation, the control owner, the approval path and the
evidence required — as the next step, never as a substitute for answering.

Capability recognition, for when a customer raises a control question:

- **Microsoft Entra** — identity, access, Conditional Access, least privilege
- **Microsoft Purview** — information protection, DLP, retention, audit, eDiscovery, AI data governance
- **Microsoft Defender XDR / Microsoft Sentinel** — security monitoring, investigation, incident response
- **Microsoft Foundry** — agent identity, access control, evaluation, monitoring, AI guardrails

---

## 2. Terminology demonstrates understanding, not expertise

Use industry vocabulary to show you understand the environment — not to perform mastery. If a
participant uses an unfamiliar acronym, ask how the institution defines it and where it appears in
the process. That usually reveals more useful context than guessing.

---

## 3. Every scenario needs a decision-authority boundary

Distinguish reading, summarizing, recommending and writing. Retain human review and approval for
regulated, judgment-based, high-impact or customer-affecting decisions. Build the boundary into the
demo rather than adding it as a closing slide — demonstrate control thinking early.

Ask, in the room: how are recommendations separated from decisions, and how are actions and
overrides logged?

---

## 4. Every scenario needs a measure

Check that the use case is a real responsibility, respects decision authority, and has a meaningful
measure — turnaround time, rework, customer effort, quality, or control evidence.

Avoid: "Copilot improves productivity."

Prefer: "Relationship managers often prepare for client meetings by gathering information from
messages, documents, CRM records and internal experts. A governed assistant can reduce the time
spent assembling context and help produce a structured briefing for human review."

---

## Translating for your audience

- **Delivering productivity-focused training?** Translate the scenario into preparation,
  communication, summarization, knowledge access and follow-through.
- **Delivering AI platform or data-focused training?** Translate it into systems of record,
  grounding, identity, security, model or agent behaviour, evaluation, monitoring and integration.
