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
matters. Microsoft operates data centres in both Australia and New Zealand, and data residency and
processing locations for each service are published — so this is a question with a documented
answer, not an open one. **RBNZ cyber resilience guidance** also puts this at board and
senior-management level, so it's worth knowing who in your organisation owns the answer."

---

## Answering the common questions

These come up in almost every FSI delivery. Answer them directly. Deflecting to "it depends" costs
you credibility — it *does* depend, but on things you can name.

### "Can Copilot access our core banking system?"

**Answer first.** Microsoft 365 Copilot doesn't reach into a core banking platform by default, and
it doesn't bypass anything. It operates on the user's behalf and honours the access permissions
that user already has — if someone can't open a document or a record today, Copilot won't surface
its contents to them. That's the foundation: **existing enterprise data governance still applies.**

There are then supported paths to bring external systems into scope, and they're a deliberate
choice rather than something that happens automatically:

- **Copilot connectors** index external content into Microsoft Graph, where it inherits the same
  identity and permission model as the rest of your tenant.
- **Agents** — built in Copilot Studio or Microsoft Foundry — can call line-of-business systems
  through connectors or APIs, running under a defined identity with defined scope.
- **Fabric** brings the data into a governed analytics estate, which is the path this exercise
  demonstrates.

On the data itself: your prompts, responses and the data Copilot accesses stay within your tenant's
service boundary, and are not used to train the underlying foundation models. Point people at the
Microsoft 365 Copilot data protection documentation and the Service Trust Portal rather than
asking them to take your word for it — and check the current position yourself before delivery,
because the detail moves.

**Then scope it.** Once the mechanism is clear, the design questions are the useful ones: what is
the task, what information does it need, is it read or write, whose identity acts, what authorises
that, what latency is acceptable, which record is authoritative, and what gets logged?

One caveat worth stating plainly: a connector or API makes access *technically possible*; it does
not make a business action *authorised*. Approvals, exceptions and support still have to be
designed. That's a design point, not an evasion.

### "Is this compliant with APRA?"

**Answer first.** Compliance here is shared. Microsoft holds independent certifications and audit
reports covering the cloud platform, and publishes regulatory compliance documentation — including
guidance specific to Australian financial services and APRA's expectations of regulated entities —
through the Service Trust Portal and the Microsoft compliance offerings library. That's real,
auditable evidence and it's yours to use.

What it doesn't do is settle the question on its own. APRA regulates *your* institution, not your
supplier: the obligation to classify your information assets, test your controls and demonstrate
they operate stays with you. So the accurate answer is "Microsoft provides the platform evidence
and here's where to get it — your control owner assesses your use of it against your obligation."

Never say a Microsoft service "is compliant". Do say where the evidence lives, and offer to connect
them with the people who can walk through it in detail.

### "Where is our data stored, and does it leave the country?"

**Answer first.** Data residency is documented per service, and Microsoft operates data centre
regions in both Australia and New Zealand. For most Microsoft 365 workloads, customer data at rest
is stored in the tenant's chosen geography. Some processing — including certain AI capabilities —
may occur outside that geography depending on the service and configuration, which is exactly why
this is an IPP 12 conversation for New Zealand entities.

Don't improvise the specifics. Direct people to the current Microsoft data residency and privacy
documentation for the services in question, and confirm the position yourself before a delivery
where you expect this question.

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

Have these open in a tab rather than promising to follow up.

**Compliance evidence**

- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/) — audit reports,
  certifications and regulatory compliance guidance. It carries a **Financial Services** section
  with regulatory compliance guidance organised by country, and an **AI Resources** section
  covering Copilot and Azure OpenAI. Start here for anything an auditor will ask for.
- [Audit reports](https://servicetrust.microsoft.com/ViewPage/MSComplianceGuideV3) — SOC, ISO 27001,
  FedRAMP, PCI DSS and regional reports. Sign-in required for some documents.
- [Microsoft compliance offerings](https://learn.microsoft.com/en-us/compliance/regulatory/offering-home)
  — the per-standard and per-region index. Includes APRA (Australia), IRAP (Australia) and the
  NZ CC Framework (New Zealand).
- [Australian Prudential Regulation Authority (APRA)](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)
  — the page to send an Australian bank, insurer or superannuation trustee to. It covers Microsoft's
  responses to the APRA information paper on cloud and to CPS 234, and the compliance checklist for
  financial institutions in Australia.

**Data, privacy and residency**

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
  — the single best link for the questions above. Confirms that Copilot only surfaces organizational
  data to which individual users have at least view permissions, and that prompts, responses and
  data accessed through Microsoft Graph aren't used to train the foundation models.
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
  — for the residency question. Note that both **Australia** (Sydney, Melbourne) and **New Zealand**
  (Auckland) are Local Region Geographies, and that Copilot is covered by data residency commitments
  in the Microsoft Product Terms. The Data Location Card in the Microsoft 365 admin center shows an
  organisation their own actual data location — a far better answer than a general one.

**Governance and controls**

- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
  — classification, DLP, insider risk, auditing, eDiscovery and retention as they apply to Copilot
  and agents. Directly supports Exercise 6.
- [Microsoft Purview documentation](https://learn.microsoft.com/en-us/purview/) — the broader
  product documentation.

**Contractual questions**

Anything about contract terms, specific commitments or an organisation's own risk assessment goes
to their Microsoft account team. That is not a deflection — it is the right owner.

---

If you don't know, say you don't know and commit to coming back with the documented answer. That
lands far better in a risk-aware room than a confident guess. Check these links before a delivery
where you expect scrutiny; the underlying detail changes.
