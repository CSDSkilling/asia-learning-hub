# PUC-3 · Insurance — regulatory beat

Delivered at Exercise 6. Answer questions properly — deflecting costs you the room.

---

## The framing

### Australia

"Before we ground an agent on this data, place it against **CPS 234** — information asset
classification, control effectiveness, incident response, third-party security, and notification of
material information security incidents. And if the reporting we have just automated supports
something the insurer classifies as a critical operation, **CPS 230** brings disruption tolerances
and material service provider obligations into scope. Microsoft publishes the platform-side control
evidence for that assessment and I'll point you at it. What I can't tell you is whether your
configuration and your use of it meets your obligation — that sits with your control owner."

### New Zealand

"For the New Zealand entities, the **Privacy Act 2020** governs how policyholder personal
information is handled, and **Information Privacy Principle 12** applies to disclosure outside New
Zealand. Portfolio data is usually aggregated, which lowers the temperature — but the moment a
semantic model joins back to policy or claim-level records it is personal information again. That
join is the moment to stop and ask the question. **RBNZ cyber resilience guidance** puts this at
board and senior-management level."

---

## Answering the common questions

### "Our loss ratio doesn't match what actuarial publishes. Is the tool wrong?"

**Answer first — almost certainly not.** This is a definitional problem, not a technology one. Loss
ratio can be gross or net of reinsurance, on written or earned premium, with or without claims
handling expense, and with different treatment of large losses and catastrophes. Two correct numbers
can differ substantially.

This is the single most valuable conversation this PUC can start. A governed semantic model forces
the organisation to agree one definition, document it, and show lineage — which is exactly the
data-source-to-data-product move in Exercise 5. Say so explicitly; it reframes the complaint as the
business case.

### "Can an agent set reserves or price risk?"

**Answer first — no, and this is a firmer boundary than in most scenarios.** Reserving and pricing
are specialist financial estimates governed by actuarial standards, professional judgment and
internal model governance. Model risk — the risk arising from incorrect, misused, poorly understood
or insufficiently controlled models — is a recognised discipline in its own right, with
requirements for evaluation, limitations, monitoring, change control and human oversight.

What is genuinely available: faster access to governed data, consistent definitions, earlier
visibility of emerging trends, and analytical support to the people who do hold that
responsibility. That is a substantial win. Do not oversell past it.

### "Is this compliant with APRA?"

**Answer first.** Compliance is shared. Microsoft holds independent certifications and audit reports
covering its cloud services and publishes regulatory compliance documentation — including material
responding to APRA's information paper on cloud and to CPS 234 — through the Service Trust Portal
and the compliance offerings index. That is real, auditable evidence.

It does not settle the question. APRA regulates the insurer, not its supplier. The obligation to
classify information assets, test controls and evidence that they operate stays with the
institution. Never say a Microsoft service "is compliant"; do say where the evidence lives.

### "Where is our data stored?"

**Answer first.** Both **Australia** (Sydney, Melbourne) and **New Zealand** (Auckland) are Local
Region Geographies for Microsoft 365, and Microsoft 365 Copilot is a covered workload under the data
residency commitments in the Microsoft Product Terms. Model calls route to the closest regional data
centres and can reach other regions under capacity constraints — which is why this stays an IPP 12
conversation for New Zealand entities.

Best answer in the room: show them the **Data Location Card** in the Microsoft 365 admin center
(Settings > Org settings > Organization profile > Data location). Their actual location beats a
general statement.

---

## Where to point people

### Prudential and conduct

- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230)
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [Australian Prudential Regulation Authority (APRA) — Microsoft compliance](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)
- [General Insurance Code of Practice](https://insurancecouncil.com.au/code-of-practice/) — relevant
  where portfolio decisions affect claims handling or customers experiencing vulnerability.

### New Zealand

- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)
- [RBNZ: Cyber Resilience for Regulated Entities](https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)

---

Check these before a delivery where you expect scrutiny — the underlying detail changes. If you
don't know, say so and come back with the documented answer.
