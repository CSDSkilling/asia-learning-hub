# PUC-2 · Banking — regulatory beat

Delivered at Exercise 7, with a specific note for Exercise 6.

---

## The framing (Exercise 7)

### Australia

"Everything we've just done sits inside a conduct framework as well as a technology one. The
**Banking Code of Practice** — approved by ASIC and, as the ABA puts it, legally enforceable — sets
standards for dealings with individual and small business customers and their guarantors, including
lending, financial difficulty, and what happens when things go wrong. The unanswered customer
question we found earlier is exactly the kind of thing the Code is concerned with.

**APRA CPS 230** brings operational risk, critical operations and material service provider
obligations into scope, and **CPS 234** covers information security including classification of
information assets and notification of material incidents. Case processing is, for most banks, a
critical operation.

The question isn't whether AI can do this. It's whether the assisted process still meets the
standards you already committed to, and whether you can evidence that it does."

### New Zealand

"For New Zealand entities, the **Privacy Act 2020** governs customer personal information —
including **Information Privacy Principle 12** for disclosure outside New Zealand. Case files carry
dense personal and financial information, so classification before grounding is not a formality.
**RBNZ cyber resilience guidance** puts governance at board and senior-management level."

---

## Answering the common questions

### "Could this AI decide a loan application?"

**Answer first — no, by design.** Not because the technology can't produce a confident answer, but
because a credit decision rests on assessed serviceability and sits with people holding defined
delegations. Responsible lending obligations attach to that decision.

What it genuinely does: assemble the file, surface inconsistencies, identify the missing income or
identity document blocking progress, retrieve and cite the governing policy, and draft
communications for review. Each saves real time; none is the decision.

If someone says "but it could" — agree, and redirect: what would you need in place before you'd be
comfortable? You'll hear audit trail, explainability, override, named owner. That is the productive
conversation.

### "What about financial crime — can it flag suspicious activity?"

**Answer first, carefully.** Organising evidence for an investigator is assistance and is valuable;
investigators spend much of their time gathering rather than assessing. Determining that a matter is
suspicious is a different act with legal consequences, including around disclosure, made by specific
people under a defined process.

That is why Exercise 6's prompt forbids characterising or ranking. Keep recommendations separable
from decisions, log actions and overrides, and be able to show how a case was selected for review.
Anything beyond that is a governance conversation with the bank's financial crime and legal teams —
not a prompt-engineering one.

### "What about hardship cases?"

**Answer first, and raise it before they do.** These customers are experiencing difficulty by
definition, and the Code carries specific obligations about support and communication. Tone in a
generated communication matters more here than anywhere else in this library.

Practically: any hardship communication needs human review, and the review is about tone and
appropriateness as much as accuracy. It is worth running Exercise 3's "more reassuringly"
counter-example specifically on a hardship scenario — the drift is more consequential.

### "If it drafts a customer letter and gets it wrong, who's responsible?"

**Answer first.** The bank is. An AI-drafted communication is the bank's communication. Anything
conveying or implying a decision, an entitlement, an approval or a timeframe needs human review
before it goes. Status updates carrying no new commitment are a lower-risk category — drawing that
line is what tells a team where review effort should go.

---

## Where to point people

### Conduct standards

- [Banking Code of Practice](https://www.ausbanking.org.au/banking-code/) — Australian Banking
  Association. The 2025 Code was approved by ASIC and took effect 28 February 2025, with
  strengthened provisions for small business customers, guarantors and customers experiencing
  vulnerability.
- [Banking Code Compliance Committee](https://bankingcode.org.au/) — independent monitoring, current
  and previous Code versions.
- [ASIC](https://asic.gov.au/) — conduct regulator; responsible lending and disclosure.

### Prudential

- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230)
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [Australian Prudential Regulation Authority (APRA) — Microsoft compliance](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)

### New Zealand

- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)
- [RBNZ: Cyber Resilience for Regulated Entities](https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)

---

Check these before a delivery where you expect scrutiny — the Banking Code has been revised several
times. If you don't know, say so and come back with the documented answer.
