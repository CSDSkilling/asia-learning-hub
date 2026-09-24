# PUC-3 · Banking — regulatory beat

A short framing delivered at Exercise 6, plus substantive answers to the questions this scenario
reliably provokes. Do not turn the framing into a compliance lecture — but do answer the questions
properly when they come.

---

## The framing (Exercise 6)

### Australia

"Before we ground an agent on this data, most of you will need to place it against **CPS 234** —
information asset classification, control effectiveness, incident response, third-party security,
and notification of material information security incidents. And if the reporting cycle we have
just automated supports something your institution classifies as a critical operation, **CPS 230**
brings disruption tolerances and material service provider obligations into scope too. Microsoft
publishes the platform-side control evidence you'll need for that assessment, and I'll point you at
it. What I can't do from the front of the room is tell you whether *your* configuration and *your*
use of it meets *your* obligation — that sits with your control owner. So the useful questions are:
who owns this dataset, what's the approval path, and what evidence would demonstrate the control
operated?"

### New Zealand

"For the New Zealand entities in the room there's a sharper question. **Privacy Act 2020,
Information Privacy Principle 12** governs disclosure of personal information outside New Zealand.
If your semantic model holds member or customer data, where that data is stored and processed
matters. Microsoft operates data centre regions in both Australia and New Zealand, and data
residency and processing locations for each service are published — so this is a question with a
documented answer, not an open one. **RBNZ cyber resilience guidance** also puts this at board and
senior-management level, so it's worth knowing who in your organisation owns the answer."

---

## Answering the common questions

These come up in almost every FSI delivery. Answer them directly. Deflecting to "it depends" costs
you credibility — it *does* depend, but on things you can name.

### "Can Copilot access our core banking system?"

**Answer first.** Microsoft 365 Copilot doesn't reach into a core banking platform by default, and
it doesn't bypass anything. It operates on the user's behalf and honours the access permissions
that user already has — Copilot only surfaces organizational data to which individual users have at
least view permissions. If someone can't open a record today, Copilot won't surface its contents to
them. That's the foundation: **existing enterprise data governance still applies.**

There are then supported paths to bring external systems into scope, and they're a deliberate
choice rather than something that happens automatically:

- **Microsoft Graph connectors** index external content into Microsoft Graph, where it inherits the
  same identity and permission model as the rest of your tenant. Data from Graph connectors is
  returned only if the user has permission to access it.
- **Agents** — built in Copilot Studio or Microsoft Foundry — can call line-of-business systems
  through connectors or APIs, running under a defined identity with defined scope. Admins control
  which agents are allowed, and can review the permissions and data access an agent requires.
- **Fabric** brings the data into a governed analytics estate, which is the path this exercise
  demonstrates.

On the data itself: prompts, responses and data accessed through Microsoft Graph are not used to
train the foundation models, and that data is processed and stored in alignment with the existing
contractual commitments covering your other Microsoft 365 content. Point people at the
documentation below rather than asking them to take your word for it.

**Then scope it.** Once the mechanism is clear, the design questions are the useful ones: what is
the task, what information does it need, is it read or write, whose identity acts, what authorises
that, what latency is acceptable, which record is authoritative, and what gets logged?

One caveat worth stating plainly: a connector or API makes access *technically possible*; it does
not make a business action *authorised*. Approvals, exceptions and support still have to be
designed. That's a design point, not an evasion.

### "Is this compliant with APRA?"

**Answer first.** Compliance here is shared. Microsoft holds independent certifications and audit
reports covering its cloud services, and publishes regulatory compliance documentation — including
material responding directly to APRA's information paper on cloud and to CPS 234 — through the
Service Trust Portal and the Microsoft compliance offerings index. That's real, auditable evidence
and it's yours to use.

What it doesn't do is settle the question on its own. APRA regulates *your* institution, not your
supplier: the obligation to classify your information assets, test your controls and demonstrate
they operate stays with you. So the accurate answer is "Microsoft provides the platform evidence
and here's where to get it — your control owner assesses your use of it against your obligation."

Never say a Microsoft service "is compliant". Do say where the evidence lives, and offer to connect
them with the people who can walk through it in detail.

### "Where is our data stored, and does it leave the country?"

**Answer first.** This has a documented answer. Both **Australia** (Sydney, Melbourne) and **New
Zealand** (Auckland) are Local Region Geographies for Microsoft 365, and Microsoft 365 Copilot is a
covered workload under the data residency commitments in the Microsoft Product Terms. For most
workloads, customer data at rest is stored in the tenant's committed geography.

The honest nuance: Copilot calls to the language models are routed to the closest data centres in
the region, and can call into other regions when capacity is constrained. That is precisely why
this is an IPP 12 conversation for New Zealand entities rather than a closed one.

Best answer in the room: don't generalise — show them the **Data Location Card** in the Microsoft
365 admin center (Settings > Org settings > Organization profile > Data location). That gives them
*their* actual data location rather than a general statement about the service.

### "Our data is already in Fabric, so we're governed."

**Answer first.** Being in Fabric gives you real capability — lineage, workspace-level access
control, sensitivity labels that travel with the data, and Purview integration. That's a genuine
head start and worth acknowledging rather than dismissing.

But a data *source* isn't yet a data *product*. Quality rules, agreed definitions, documented
lineage, access policies and a named owner still have to exist, and the platform won't decide them
for you. That's what Exercise 5 is demonstrating, and it's usually the most valuable twenty minutes
of the session.

---

## Where to point people


### Compliance evidence

- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/) — audit reports,
  certifications and regulatory compliance guidance. It carries a **Financial Services** section
  with regulatory compliance guidance organised by country, and an **AI Resources** section covering
  Copilot and Azure OpenAI. Start here for anything an auditor will ask for.
- [Audit reports](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuideV3) — SOC, ISO 27001,
  FedRAMP, PCI DSS and regional reports. Some documents require sign-in.
- [Microsoft compliance offerings](https://learn.microsoft.com/en-us/compliance/regulatory/offering-home)
  — the per-standard and per-region index. Includes APRA (Australia), IRAP (Australia) and the
  NZ CC Framework (New Zealand).
- [Australian Prudential Regulation Authority (APRA)](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)
  — the page to send an Australian bank, insurer or superannuation trustee to. Covers Microsoft's
  response to the APRA information paper on cloud, its response on CPS 234, and the compliance
  checklist for financial institutions in Australia.

### Data, privacy and residency

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
  — the single best link for the questions above. Substantiates the permission model, the
  no-training commitment, data residency, and how agents and connectors extend Copilot.
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
  — geographies, data centre locations, durable commitments, and the Data Location Card.

### Governance and controls

- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
  — classification, DLP, insider risk, auditing, eDiscovery and retention as they apply to Copilot
  and agents. Directly supports Exercise 6.
- [Microsoft Purview documentation](https://learn.microsoft.com/en-us/purview/) — the broader
  product documentation.

### The source standards

- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230)
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [RBNZ: Cyber Resilience for Regulated Entities](https://www.rbnz.govt.nz/regulation-and-supervision/cross-sector-oversight/improving-cyber-resilience-for-regular-entities)
- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)



