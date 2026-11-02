# Module 4 — Compare, export, and clean up

[← Previous: Alternative: build it with a topic](./03-topic-version.md) · [Workshop home](../README.md) · **Module 4 of 4**

| | |
| --- | --- |
| **Time** | 15 minutes |
| **You will** | Compare accuracy and flexibility, package an agent in a solution, check an import, and delete your test agents |
| **You need** | The agent from Module 1, and optionally the topic agent from Module 3 |

## Step 1 — Compare the two builds

Run cases B, D and F on both agents, then fill in the table.

| Question | GitHub Copilot harness (Module 1) | Standard harness (Module 3) |
| --- | --- | --- |
| Were all numbers and statuses exactly right? | | |
| Was the report identical on a second run? | | |
| What happened with case G (zero liabilities)? | Reports "n/a" for the current ratio and continues | Stops and asks to start again |
| How was a vague figure (`about 5 million`) handled? | | |
| Which one gave a useful narrative? | | |

Expected pattern: the **topic** is exact and repeatable, but it handles only what you built. The **instruction-based agent** is more flexible and writes a better narrative, but its arithmetic needs checking.

**Discussion:** where does each fit in a lending or FP&A process? When must the maths be exact? What would a team need to add (audit trail, data source, human review) before using either on real figures?

## Step 2 — Package an agent in a solution

An agent can move between environments in a **solution**. Follow [Microsoft Learn's steps](https://learn.microsoft.com/microsoft-copilot-studio/authoring-export-import-bots). You need at least the **System Customizer** role.

1. Open the **Solutions** page, and create a solution named `FinanceWorkshopDemo`. A new solution is **unmanaged**, which is what you need: **a managed solution can't be exported** from Copilot Studio.
2. Open the solution, select **Add existing → Agent**, and select your agent.
3. **Topic agent only:** select the three dots (**⋮**) on the agent under **Objects → Agents**, select **Advanced**, and then **Add required objects**. Topics aren't always included unless you do this.
4. Select **Export**, and download the `.zip`.

> [!IMPORTANT]
> Learn lists limits that matter for a "just import it" package:
> - Agent instructions are included, but **custom topics and knowledge sources might not be**, depending on how they're stored.
> - Some properties don't transfer, such as the conversation ID and environment ID. The imported agent might have an empty icon or channel details.
> - Topic-level and node-level comments aren't exported.
> - Don't delete an agent's components directly from the solution. Remove the agent, and edit topics in Copilot Studio.
>
> Don't promise students a one-click import. Test the import first.

## Step 3 — Check the import

In a **different environment** that you can use for tests:

1. Open **Solutions**, select **Import solution**, and select your `.zip`.
2. Open the imported agent. Check the checklist below.

| Check | Pass? |
| --- | --- |
| The agent opens, with the right name | |
| Instructions are present (instruction agent), or the topic exists with all its nodes (topic agent) | |
| Memory is off, and no tools or knowledge sources were added | |
| Cases B and D give the same results as before | |

An agent built on the GitHub Copilot harness can't be imported as a standard-harness agent, and the reverse.

## Clean up

Delete only what **you** created:

1. In Copilot Studio, open **Agents**, and delete your test agents (the Module 1 agent, and the topic agent).
2. Delete the `FinanceWorkshopDemo` solution if you don't need it, and the imported agent in the test environment.
3. If your instructor shared the agents, don't delete theirs.

Deleting stops future use. It doesn't reverse Copilot Credits already used. The GitHub Copilot harness charges while you build and test; see [usage-based billing](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview).

## Stretch challenges

1. Add a fourth ratio: **net debt ÷ EBITDA**, or **interest coverage**. Define the formula and benchmarks, then update both builds.
2. Make the topic report "n/a" for a zero denominator instead of stopping.
3. Ask the instruction-based agent to compare two companies. How does it handle different units?
4. Add a "what-if": what happens to Debt/EBITDA if EBITDA falls 20%? Check the answer with PowerShell.

## What you built

- An agent that turns six figures into three ratios and a benchmarked assessment.
- A way to **verify** an AI's arithmetic against an independent calculation.
- An exact, deterministic standard-harness version built with Question nodes and Power Fx.
- A comparison of an instruction-based agent and a rule-based one, and a packaged solution, with its limits checked.

---

[← Previous: Alternative: build it with a topic](./03-topic-version.md) · [Workshop home](../README.md)
