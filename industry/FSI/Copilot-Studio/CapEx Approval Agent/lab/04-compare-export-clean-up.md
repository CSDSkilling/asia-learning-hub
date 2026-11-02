# Module 4 — Compare, export, and clean up

[← Previous: Alternative: build it with a topic](./03-topic-version.md) · [Workshop home](../README.md) · **Module 4 of 4**

| | |
| --- | --- |
| **Time** | 15 minutes |
| **You will** | Compare the two builds, package an agent in a solution, check an import, and delete your test agents |
| **You need** | The agent from Module 1, and optionally the topic agent from Module 3 |

## Step 1 — Compare the two builds

Run the same five requests on both agents: USD 4,999.99, 5,000, 20,000, 20,000.01 and one `around 5k` request. Fill in the table.

| Question | GitHub Copilot harness (Module 1) | Standard harness (Module 3) |
| --- | --- | --- |
| Did every tier match? | | |
| Was the wording identical on a second run? | | |
| How did it handle `around 5k`? | | |
| How did it handle `EUR 10,000`, or a split order? | | |
| How much of the logic did you write as text vs. nodes and formulas? | | |

Expected pattern: the **topic** is exact and repeatable, but it only handles what you built. The **instruction-based agent** handles unexpected input more flexibly, but its tier needs to be tested at the boundaries, and the wording varies.

**Discussion:** when would a finance team prefer the exact topic? When would it prefer flexibility? What would you need to add to either one before it could be used with real requests (identity, an audit trail, a real approval workflow)?

## Step 2 — Package an agent in a solution

An agent can move between environments in a **solution**. Follow [Microsoft Learn's steps](https://learn.microsoft.com/microsoft-copilot-studio/authoring-export-import-bots). You need at least the **System Customizer** role.

1. Open the **Solutions** page, and create a solution named `FinanceWorkshopDemo`. A new solution is **unmanaged**, which is what you need: **a managed solution can't be exported** from Copilot Studio.
2. Open the solution, select **Add existing → Agent**, and select your agent.
3. **Topic agent only:** select the three dots (**⋮**) on the agent under **Objects → Agents**, select **Advanced**, and then **Add required objects**. Topics aren't always included unless you do this.
4. Select **Export**, and download the `.zip`.

> [!IMPORTANT]
> Learn lists limits that matter for a demo "just import it" package:
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
| Instructions are present (instruction agent), or the topic exists (topic agent) | |
| Memory is off, and no tools or knowledge sources were added | |
| The tests from Module 2, or Module 3 Step 7, give the same tiers | |

An agent built on the GitHub Copilot harness can't be imported as a standard-harness agent, and the reverse.

## Clean up

Delete only what **you** created:

1. In Copilot Studio, open **Agents**, and delete your test agents (the Module 1 agent, and the topic agent).
2. Delete the `FinanceWorkshopDemo` solution if you don't need it, and the imported agent in the test environment.
3. If your instructor shared the agents, don't delete theirs.

Deleting stops future use. It doesn't reverse Copilot Credits already used. The GitHub Copilot harness charges while you build and test; see [usage-based billing](https://learn.microsoft.com/microsoft-copilot-studio/agents-experience/billing-credit-overview).

## Stretch challenges

1. Add a fourth rule: any request over USD 100,000 also needs a Board notification. Update the instructions and the topic formula, and rerun the boundary tests.
2. Add a department-specific note to the summary (for example, IT requests mention the security review).
3. Add a polite **second chance** when the cost is invalid: re-ask in the topic with a **Go to step** node, instead of ending.
4. Ask the instruction-based agent to explain *why* a request is Tier 2. Is its reasoning always consistent with the policy?

## What you built

- An agent that collects a purchase request, applies a three-tier spending policy, and refuses to bypass it.
- A deterministic standard-harness version, built with Question nodes and a Power Fx formula.
- A comparison of an instruction-based agent and a rule-based one, and a packaged solution, with its limits checked.

---

[← Previous: Alternative: build it with a topic](./03-topic-version.md) · [Workshop home](../README.md)
