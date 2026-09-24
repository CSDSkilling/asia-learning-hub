# PUC-2 · Insurance — regulatory beat

A short framing delivered at Exercise 7, plus substantive answers to the questions a claims audience
reliably asks. Answer them properly — deflecting costs you the room.

---

## The framing (Exercise 7)

### Australia

"Everything we've just done sits inside a conduct framework, not only a technology one. General
insurers who subscribe to the **General Insurance Code of Practice** commit to standards covering
claims handling — timeframes for responding to claims and requests for information, standards for
claims investigations, and specific obligations toward customers experiencing vulnerability or
financial hardship. Those aren't abstractions: the unanswered question about temporary
accommodation in our sample file is exactly the kind of thing the Code is concerned with.

Separately, **APRA CPS 230** brings operational risk, critical operations and material service
provider obligations into scope, and **CPS 234** covers information security — including
classification of information assets and notification of material incidents. Claims processing is,
for most insurers, a critical operation.

So the question isn't 'can AI do this'. It's: does the assisted process still meet the standards we
already committed to, and can we evidence that it does?"

### New Zealand

"For the New Zealand entities, the **Fair Insurance Code** published by the Insurance Council of
New Zealand sets comparable expectations around claims handling and communication, and the
**Privacy Act 2020** governs how claimant personal information is collected, used and disclosed —
including **Information Privacy Principle 12** where information is disclosed outside New Zealand.
Claim files are dense with personal information, sometimes health information, so classification
before grounding is not a formality here."

---

## Answering the common questions

### "Could this AI decide a claim?"

**Answer first — and the answer is no, by design.** Not because the technology is incapable of
producing a confident-sounding answer, but because an outcome that affects a customer's financial
position is a decision someone must own, be able to explain, and be accountable for. That's why
Exercise 8's agent carries an explicit `must never` block, and why we test that it declines.

What the technology genuinely does: assemble the file, surface inconsistencies, identify evidence
gaps, retrieve and cite the governing terms, and draft communications for review. Every one of those
saves real time. None of them is the decision.

If someone pushes — "but it could, if we let it" — agree, and redirect to the right question: what
would you need in place before you'd be comfortable? You'll usually hear audit trail, explainability,
override, and a named owner. That's the productive conversation.

### "What about the customer communications — who's responsible if it gets it wrong?"

**Answer first.** The organisation is. An AI-drafted communication is the organisation's
communication. That's precisely why Exercise 3 runs the "more reassuringly" counter-example — to
show how easily a tone instruction can create an expectation nobody approved.

Practically: communications that convey or imply a decision, an entitlement, or a timeframe need
human review before they go. Status updates that contain no new commitment are a much lower-risk
category, and that distinction is worth drawing explicitly with an operations audience, because it
determines where review effort should actually go.

### "Is it appropriate to use AI in fraud detection?"

**Answer first.** Assembling and organising evidence is assistance, and it's genuinely valuable —
investigators spend a large share of their time gathering rather than assessing. Characterising a
person as dishonest is a different act entirely, with serious consequences for a real customer and
for the insurer.

That's why Exercise 6's prompt explicitly forbids characterising or ranking. The Code's claims
investigation standards exist for this reason. Keep recommendations separable from decisions, log
actions and overrides, and be able to show how a case was selected for review.

Where a room wants to go further than that, it's a governance conversation with their risk and
conduct teams — not a prompt-engineering one.

### "Claim files contain health information. Is that OK to put through Copilot?"

**Answer first.** Copilot operates on the user's behalf and honours the permissions that user
already has — it surfaces only organizational data the individual has at least view permissions to.
Prompts, responses and data accessed through Microsoft Graph aren't used to train the foundation
models, and interactions are captured in the audit log and are discoverable.

But permissions are not the same as appropriateness. Sensitive categories of personal information
warrant classification, labelling and a deliberate decision about which processes may use them —
which is what Exercise 7 demonstrates with Purview. The right answer in the room is "here's how the
platform handles it, and here's the classification decision your privacy team needs to make."

---

## Where to point people

### Conduct and claims standards

- [General Insurance Code of Practice](https://insurancecouncil.com.au/code-of-practice/) —
  Insurance Council of Australia. Covers claims handling, timeframes, investigation standards,
  vulnerability and financial hardship.
- [General Insurance Code of Practice — AFCA](https://www.afca.org.au/about-afca/codes-of-practice/general-insurance-code-of-practice)
  — what the Code covers, which products are in and out of scope, and how it is monitored.
- [General Insurance Code Governance Committee](https://insurancecode.org.au/) — independent Code
  monitoring, and the current Code text.

### Prudential and information security

- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230)
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [Australian Prudential Regulation Authority (APRA) — Microsoft compliance](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)

### New Zealand

- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)
- [RBNZ: Cyber Resilience for Regulated Entities](https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
  — classification, DLP, auditing, eDiscovery and retention. Supports Exercise 7 directly.
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/) — audit reports,
  certifications, and a Financial Services section organised by country.

---

Check these before a delivery where you expect scrutiny — the Code in particular has been through
several updates and a further redraft has been consulted on. If you don't know, say so and come back
with the documented answer.
