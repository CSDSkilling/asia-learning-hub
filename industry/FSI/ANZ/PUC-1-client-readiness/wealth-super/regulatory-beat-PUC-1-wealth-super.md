# PUC-1 · Wealth & Superannuation — regulatory beat

Delivered across Exercises 5 and 7. This is the highest-stakes regulatory framing in the library,
because the boundary being crossed is not a data question — it is a licensing question.

---

## The framing (Exercise 5)

### Australia

"What just happened in that first prompt matters. There is a real distinction between giving someone
general information about how superannuation works, and giving them a recommendation about what
*they* should do with *their* money. The second is personal advice, and it brings licensing,
competence, suitability and disclosure obligations with it — that's ASIC's territory under the
Corporations Act.

Meanwhile the trustee sits under APRA, with obligations to act in members' best financial interests,
and since **CPS 230** those obligations extend to operational risk, critical operations and material
service providers. Member servicing is, for most funds, a critical operation.

The model has no idea which side of that line it is standing on. It will produce a confident,
well-written personal recommendation if you ask it to — we just watched it do exactly that. You are
the control. That is not a limitation of the technology; it is the design."

### New Zealand

"In New Zealand the line is drawn in a comparable place. Under the **Financial Markets Conduct Act**
regime, anyone giving regulated financial advice to retail clients must hold or operate under a
Financial Advice Provider licence, and must meet the **Code of Professional Conduct for Financial
Advice Services** — which includes standards on treating clients fairly, acting with integrity, and
giving advice that is suitable, with reasonable grounds, having regard to the client's circumstances.

Read that last standard against what we generated a moment ago. It had no information about this
person's objectives, risk tolerance, household position or timing — so it could not possibly have
had reasonable grounds. That is the clearest way to explain the boundary to a room."

---

## Answering the common questions

### "So can we use this at all in member servicing?"

**Answer first — yes, and extensively.** Everything in Exercises 1 through 4 and 6 is squarely
inside general information and preparation: assembling context, surfacing unresolved items,
anticipating questions, explaining products in the words of approved material, and identifying who
would benefit from proactive contact.

That is the large majority of the time a servicing team spends. The constrained part is narrow and
specific: forming a recommendation for an individual. Framing it that way matters, because a room
that hears "regulated" often assumes "prohibited" and disengages.

### "Where exactly is the line?"

**Answer first, honestly: the line is defined by regulation and by your own licensing position, not
by a prompt.** What we can say clearly is the direction of travel — the more an output is tailored
to one person's circumstances and the more it points toward a course of action, the closer it moves
to personal advice.

Practical guidance that holds up: Exercise 5's second prompt structure — the factual position, the
general options that exist, and the questions to ask the person — stays on the general side while
being genuinely useful. Where your organisation actually draws the line, and what your people are
authorised to say, is a question for your advice-quality and compliance teams. Ask them before
deploying anything, not after.

### "Could we build an agent that gives members advice?"

**Answer first.** Technically, an agent can be built that produces advice-shaped output. Whether it
may be deployed that way is a licensing and governance question with real consequences, and it is
not one a trainer settles in a classroom.

What is clearly available today is the Exercise 8 pattern: an agent that prepares the *adviser*
rather than advising the *client*, with an explicit `must never` block, tested live so the room sees
it decline. Organisations wanting to go further should be talking to their licensee, their
compliance function, and their Microsoft account team — in that order.

### "Member files contain a lot of personal information. How is that handled?"

**Answer first.** Copilot operates on the user's behalf and honours existing permissions — it
surfaces only organizational data the individual has at least view permissions to. Prompts,
responses and data accessed through Microsoft Graph are not used to train the foundation models, and
interactions are captured in the audit log and are discoverable through eDiscovery.

For New Zealand members there is an additional question: the **Privacy Act 2020** and **Information
Privacy Principle 12** govern disclosure of personal information outside New Zealand. Both Australia
and New Zealand are Local Region Geographies for Microsoft 365, and the Data Location Card in the
admin center shows an organisation its own actual data location — a better answer than a general one.

### "If the briefing was AI-drafted, is it still our record?"

**Answer first — yes.** A human-reviewed, AI-drafted file note or briefing is the organisation's
record, with the same retention, accuracy and discoverability obligations as any other. Purview
retention policies apply to Copilot interactions, and those interactions are discoverable.

Worth raising proactively with an advice-quality audience, because it is usually the question they
were about to ask.

---

## Where to point people

### Australia — advice and trustee obligations

- [ASIC](https://asic.gov.au/) — the conduct regulator for financial advice and disclosure.
  Direct licensees to their own AFS licence conditions and ASIC guidance on the general-versus-
  personal advice distinction.
- [APRA CPS 230: Operational Risk Management](https://www.apra.gov.au/standards/cps-230) — applies
  to superannuation trustees as well as banks and insurers.
- [APRA CPS 234: Information Security](https://www.apra.gov.au/standards/cps-234)
- [Australian Prudential Regulation Authority (APRA) — Microsoft compliance](https://learn.microsoft.com/en-us/compliance/regulatory/offering-apra-australia)

### New Zealand — the financial advice regime

- [Financial Advice Provider (FAP) — Financial Markets Authority](https://www.fma.govt.nz/business/services/financial-advice-provider/)
  — licensing, standard conditions and ongoing obligations.
- [The Financial Advice Code](https://financialadvicecode.govt.nz/financial-advice-code/) — the Code
  of Professional Conduct for Financial Advice Services, including the suitability standard.
- [Regulation of financial advice — MBIE](https://www.mbie.govt.nz/business-and-employment/business/financial-markets-conduct-regulation/financial-markets-conduct-act/regulation-of-financial-advice)
- [NZ Privacy Commissioner: Principle 12, Disclosure Outside New Zealand](https://www.privacy.org.nz/privacy-principles/12/)

### Microsoft data, privacy and governance

- [Data, Privacy, and Security for Microsoft Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/microsoft-365-copilot-privacy)
- [Microsoft 365 data residency — overview and definitions](https://learn.microsoft.com/en-us/microsoft-365/enterprise/m365-dr-overview)
- [Microsoft Purview protections for generative AI apps](https://learn.microsoft.com/en-us/purview/ai-microsoft-purview)
- [Microsoft Service Trust Portal](https://servicetrust.microsoft.com/)

---

**A caution specific to this PUC.** Do not attempt to adjudicate where the advice line sits for a
particular organisation. Explain the distinction, demonstrate it with Exercise 5, point at the
regulator and the Code, and hand the specifics to their compliance function. A trainer who guesses
here creates a real problem for a real licensee.
