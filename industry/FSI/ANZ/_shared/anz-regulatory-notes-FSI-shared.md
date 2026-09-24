# ANZ regulatory notes for FSI demos

Orientation for trainers. These are recognition cues so that a demo is framed in the audience's own
regulatory context. They are **not legal advice**, not a statement of any organisation's
obligations, and not a compliance claim about any product. Regulatory requirements vary by
jurisdiction, by institution and by use case. If a term influences a control or a decision, ask the
organisation to explain how it is defined and applied in their environment, and refer them to the
source standard and their own risk and compliance teams.

---

## Australia — banks and insurers

**APRA CPS 230 — Operational Risk Management.** Covers operational risk, critical operations,
disruption tolerances and material service providers.
https://www.apra.gov.au/standards/cps-230

**APRA CPS 234 — Information Security.** Covers information asset classification, control
effectiveness, incident response, third-party security, and notification of material information
security incidents.
https://www.apra.gov.au/standards/cps-234

*Demo beat:* when a Fabric or agent scenario touches a process the institution would call a
critical operation, pause and ask who the control owner is and what evidence proves the control
operated.

---

## New Zealand — banks and insurers

**RBNZ cyber resilience guidance.** Board and senior-management governance, capability building,
information sharing, third-party management.
https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities

**Privacy Act 2020, Information Privacy Principle 12.** Disclosure of personal information outside
New Zealand.
https://www.privacy.org.nz/privacy-principles/12/

*Demo beat:* IPP 12 gives a genuinely region-specific discussion point. A trans-Tasman bank or a
New Zealand super provider grounding an agent on member data raises a real data residency question
that a generic demo will not surface.

---

## Adjacent APAC (recognition only — do not present as ANZ requirements)

**Singapore — MAS Project MindForge.** AI oversight, AI inventories, materiality assessment,
lifecycle controls, organisational capabilities, with an associated toolkit supporting practical
implementation of AI risk-management frameworks. As of 20 March 2026 MAS stated it was reviewing
responses to its earlier consultation on proposed AI Risk Management Guidelines.

**Hong Kong — HKMA OR-2.** Critical operations, disruption tolerances, dependency mapping,
severe-but-plausible scenario testing, incident response and recovery. Applies to authorised
institutions — do not present it as an insurance-wide or APAC-wide requirement.

---

## The six checks

Run these against any scenario before demoing it:

1. Identity — whose identity performs the action
2. Authorization — what it may access, and how least privilege is enforced
3. Data classification
4. Source-of-truth ownership
5. Audit logging
6. Failure handling

**Connector guardrail:** a connector or API does not itself authorize a business action. Controls,
approvals, exceptions and support still have to be defined.
