# PUC-1 · Insurance — regulatory beat

Delivered across Exercises 5 and 7. The boundary here is coverage advice.

---

## The framing (Exercise 5)

### Australia

"What that prompt produced reads like a coverage opinion. Telling a client their cover is adequate —
or that a loss would be covered — is a statement the organisation will be held to, and it is made on
information this file does not contain.

The **General Insurance Code of Practice** sets standards for dealings with customers including
disclosure and claims handling, and specific obligations toward customers experiencing vulnerability
or financial hardship. Where the organisation holds an advice licence, the distinction between
general information and personal advice applies on top — that is ASIC's territory.

The model has no idea which side of that line it is on. You do."

### New Zealand

"For New Zealand, the **Fair Insurance Code** published by the Insurance Council of New Zealand sets
comparable expectations, and the **Privacy Act 2020** governs client personal information —
including **Information Privacy Principle 12** for disclosure outside New Zealand. Where the
conversation becomes regulated financial advice, the **Financial Markets Conduct Act** regime and a
Financial Advice Provider licence apply."

---

## Answering the common questions

### "So can we use this in renewal preparation at all?"

**Answer first — yes, and this is where the value is.** Assembling the client's programme, what has
changed since last renewal, claims history, flagged gaps, and the questions worth asking is all
preparation. It is also most of the work.

The constrained part is narrow: stating or implying that cover is adequate, that a loss would be
covered, or that a client should change their programme. Framing it that way keeps a room engaged
rather than assuming the answer is no.

### "What about the coverage gaps the data flags — can we act on those?"

**Answer first — yes, and arguably you must.** Identifying that a gap exists and raising it with the
client is servicing, and a flagged gap that was never discussed is a worse position than one never
identified, because the organisation knew.

What changes is *how* it is raised. "Our records flag a possible gap here — can we talk through your
current exposure?" is a conversation. "You're underinsured, you should increase your sum insured to
X" is a recommendation. Same finding, materially different act.

### "Client files contain sensitive information. How is that handled?"

**Answer first.** Copilot operates on the user's behalf and honours existing permissions — it
surfaces only organizational data the individual has at least view permissions to. Prompts,
responses and data accessed through Microsoft Graph are not used to train the foundation models, and
interactions are captured in the audit log and are discoverable.

Permissions are not the same as appropriateness. Sensitive categories warrant classification,
labelling and a deliberate decision about which processes may use them — which is what Exercise 7
demonstrates with Purview.

### "If the briefing was AI-drafted, is it still our record?"

**Answer first — yes.** A human-reviewed, AI-drafted file note or renewal briefing is the
organisation's record, with the same retention, accuracy and discoverability obligations as any
other. Worth raising proactively with a compliance audience.

---

## Where to point people

### Conduct standards

- [General Insurance Code of Practice](https://insurancecouncil.com.au/code-of-practice/) —
  Insurance Council of Australia.
- [General Insurance Code of Practice — AFCA](https://www.afca.org.au/about-afca/codes-of-practice/general-insurance-code-of-practice)
  — scope, covered products, and how the Code is monitored.
- [General Insurance Code Governance Committee](https://insurancecode.org.au/) — independent
  monitoring and current Code text.
- [ASIC](https://asic.gov.au/) — conduct regulator for advice and disclosure.

### Prudential

- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230)
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [Australian Prudential Regulation Authority (APRA) — Microsoft compliance](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)

### New Zealand

- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)
- [RBNZ: Cyber Resilience for Regulated Entities](https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities)
- [Financial Advice Provider (FAP) — Financial Markets Authority](https://www.fma.govt.nz/business/services/financial-advice-provider/)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)

---

Check these before a delivery where you expect scrutiny. If you don't know, say so and come back
with the documented answer.
