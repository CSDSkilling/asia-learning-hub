# PUC-1 · Banking — regulatory beat

Delivered across Exercises 5 and 7. The boundary here is credit authority and responsible lending
rather than personal financial advice — just as firm, and more likely to be crossed casually.

---

## The framing (Exercise 5)

### Australia

"What that prompt just produced reads like a credit view. It isn't one, and neither is anything a
relationship manager says in a client meeting unless they hold the authority to say it.

Two frameworks sit over this. The **Banking Code of Practice** — approved by ASIC and, as the ABA
puts it, legally enforceable — sets standards for dealings with individual and small business
customers and their guarantors, including lending, financial difficulty, and how things are
communicated when they go wrong. And responsible lending obligations mean a credit decision rests on
assessed serviceability, not on a well-organised file.

A client who hears 'that should be fine' has heard a commitment. That's the risk this exercise is
about, and AI makes it easier to produce confident-sounding language faster."

### New Zealand

"For New Zealand, the **Privacy Act 2020** governs customer personal information, with
**Information Privacy Principle 12** applying to disclosure outside New Zealand. **RBNZ cyber
resilience guidance** puts governance at board and senior-management level. Where the conversation
moves from banking services into regulated financial advice, the **Financial Markets Conduct Act**
advice regime applies and a Financial Advice Provider licence is required."

---

## Answering the common questions

### "Can Copilot see our core banking system?"

**Answer first.** Not by default, and it doesn't bypass anything. Copilot operates on the user's
behalf and surfaces only organizational data the individual has at least view permissions to. If a
relationship manager can't open a record today, Copilot won't surface its contents to them.

Supported paths to bring external systems into scope, each a deliberate choice: **Microsoft Graph
connectors** index external content under the same identity and permission model; **agents** built
in Copilot Studio or Foundry call line-of-business systems under a defined identity and scope, with
admins controlling which agents are permitted; and governed analytics estates like **Fabric**.

Prompts, responses and data accessed through Microsoft Graph are not used to train the foundation
models, and interactions are captured in the audit log.

Then scope it: what's the task, what information does it need, read or write, whose identity acts,
what authorises it, which record is authoritative, and what gets logged? A connector makes access
technically possible; it does not make a business action authorised.

### "Could it draft a credit paper?"

**Answer first.** It can assemble and structure one — the client position, facility history, prior
conversations, and what is missing. That is real time saved, and it is what Exercise 8's agent does.

It cannot hold credit authority. The assessment, the appetite and the decision belong to people and
delegations the bank has defined, and the paper is evidence for that decision rather than the
decision itself. Build that distinction into the agent's instructions and demonstrate it by asking
the agent to approve something and showing the room it declines.

### "What about what we say to the customer?"

**Answer first.** An AI-drafted communication is the bank's communication. Anything conveying or
implying an approval, an appetite, a rate or a timeframe needs human review before it goes. A status
update carrying no new commitment is a materially lower-risk category — drawing that distinction
explicitly is what tells a team where review effort should actually go.

The Code's standards on communication and on customers experiencing financial difficulty are worth
naming here, particularly for any hardship-adjacent conversation.

### "If the briefing was AI-drafted, is it still our record?"

**Answer first — yes.** A human-reviewed, AI-drafted file note is the bank's record, with the same
retention, accuracy and discoverability obligations as any other. Purview retention policies apply
to Copilot interactions and those interactions are discoverable.

---

## Where to point people

### Conduct and lending standards

- [Banking Code of Practice](https://www.ausbanking.org.au/banking-code/) — Australian Banking
  Association. The 2025 Code was approved by ASIC and took effect 28 February 2025.
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
- [Financial Advice Provider (FAP) — Financial Markets Authority](https://www.fma.govt.nz/business/services/financial-advice-provider/)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)

---

Check these before a delivery where you expect scrutiny — the Banking Code in particular has been
revised several times. If you don't know, say so and come back with the documented answer.
