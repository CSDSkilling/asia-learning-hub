# Financial Inclusion Impact Agent: Trainer Demo Kit

## About this agent

**Financial Inclusion Impact Agent** is a specialized, production-ready AI solution engineered for financial institutions, development banks, fintech strategists, and ESG analysts. By leveraging the official World Bank Global Findex dataset, the agent transforms complex macroeconomic survey data into rigorous, auditable insights.

### Why Financial Institutions & FinTechs Need This

In commercial banking, retail expansion, and inclusive finance, identifying underserved demographics isn't just a corporate social responsibility (CSR) goal—it’s a major driver for **market penetration, ESG portfolio compliance, and Community Reinvestment Act (CRA) strategies**. However, analyzing massive global datasets manually is slow, and generic AI tools risk hallucinating critical compliance metrics or financial projections.

This agent solves that challenge by establishing a **deterministic, zero-hallucination standard** for financial data analysis:

- **Pinpoint Market Gaps:** Instantly analyze account ownership, digital payments, and savings behaviors across 162 economies down to specific demographic cohorts (gender, age, income quintiles, and rural/urban divides).
- **Institutional Guardrails:** It rigorously separates verified data points from assumptions, strictly refusing to invent cost figures, population reach headcounts, or unsupported economic forecasts.
- **Audit-Ready Workflows:** Built-in evidence auditing ensures every statistic cited is fully traceable back to official World Bank source tables, complete with survey years and data coverage disclosures.

## The demo

One Copilot Studio agent reads the official World Bank Global Findex 2025 file and demonstrates, live, how enterprise AI can:

1. Discover granular financial inclusion gaps across multiple emerging and developed markets.
2. Explore targeted policy and market-entry interventions for unbanked segments.
3. Simulate a hypothetical $5 million capital allocation framework qualitatively—refusing to fabricate ROI metrics or unverified adoption rates.
4. Audit its own data outputs and compile them into a standardized, institutional-grade Action Brief.

> **The WOW moment:** *"AI discovers hidden financial inclusion gaps and helps financial leaders explore evidence-based responses."* It is not *"AI predicts the financial ROI of $5 million."* Because the dataset contains no cost or effectiveness metrics, the agent enforces strict risk governance by refusing to invent them.

**Architecture:** No mock data, no custom files, no APIs, no connectors—just one official dataset, one agent, two specialized skills, and two deterministic workflows.

```mermaid
flowchart LR
  F[World Bank Global Findex 2025<br/>official Excel file] -->|knowledge| A[Financial Inclusion Impact Agent<br/>Copilot Studio]
  I[Instructions<br/>facts only, no invented numbers] --> A
  A --> K1[Skill: global investigator]
  A --> K2[Skill: evidence auditor]
  A --> W1[Workflow: calculate gap]
  A --> W2[Workflow: create brief]
  K1 --> O([Verified findings and an action brief])
  K2 --> O
  W1 --> O
  W2 --> O
```

> [!WARNING]
> **Demo only.** The agent summarizes official survey estimates. It is not a financial forecast, a cost model, or formal investment/policy advice.

## Before you demo

Two ways to get the agent. Pick one.

### Option A: Quick setup, import the solution (about 10 minutes)

Copilot Studio agents live in Power Platform **solutions**, so you can import the ready-made one instead of building by hand.

**[Download FSI_1_0_0_1_managed.zip](./solution/FSI_1_0_0_1_managed.zip)** (about 12.6 MB, managed solution `FSI`, version 1.0.0.1)

It brings in everything, including the World Bank file:

| Included | What it is |
| --- | --- |
| Agent | **Financial Inclusion Impact**, with the instructions already written |
| Knowledge | `GlobalFindexDatabase2025.xlsx`, the official World Bank file |
| Skills (2) | `global-financial-inclusion-investigator`, `financial-inclusion-evidence-auditor` |
| Workflows (2) | `calculate-percentage-point-gap`, `create-financial-inclusion-brief` |
| Connection reference | Work IQ MCP, which the import asks you to connect |

**You need:** a Copilot Studio licence, and an environment where you can import solutions (a Power Platform environment with Dataverse, and a maker or admin role).

1. Go to [make.powerapps.com](https://make.powerapps.com) and pick your environment at the top right. Use the same environment you use for [Copilot Studio](https://copilotstudio.microsoft.com/).
2. Select **Solutions**, then **Import solution**, then **Browse**, choose the zip, and select **Next**.
3. When it asks for a connection for **Work IQ MCP**, select an existing one or create one by signing in, then select **Import**. The demo itself only reads the World Bank file.
4. Wait for the message that the solution imported successfully. The file is big, so give it a few minutes.
5. Open [Copilot Studio](https://copilotstudio.microsoft.com/) in the same environment, select **Agents**, and open **Financial Inclusion Impact**.
6. Check that the knowledge file shows as ready (not still indexing), and that you can see the two skills and two workflows.
7. Run the **6-question check** in [SETUP.md](./SETUP.md#4-run-the-pre-demo-check). **Don't demo if it fails.**

> [!TIP]
> This is a managed solution, so treat it as read-only. To change the agent or learn how it's built, use Option B.

### Option B: Manual setup

**Build and check the agent with [SETUP.md](./SETUP.md).** The core agent plus the check takes about 45 minutes, and the demo works after that. Skills add 10 minutes and workflows about 40. **Don't demo if the required checks fail.**

**Know this about the file:**

- Values are proportions (`0.563`). The agent must show **56.3%**.
- **162 economies**, plus **12 rows published by the World Bank** (world, developing economies, six regions, income groups). For a regional or global figure, the agent quotes a published row and never builds its own average.
- Regions are all "excluding high income". The **51 high-income economies** sit in one group. **ASEAN, the EU, OECD, "Europe", "Africa", "Asia" and "North America" aren't in the file.** The agent says so and uses the closest grouping, or asks for a list of countries.
- Survey years differ: **141** economies have a 2024 account value, only **98** have 2024 digital payments. Myanmar's latest is **2021**.
- It's a wide workbook, so exact-number retrieval **might be unreliable**. That's why the pre-demo check exists.

---

## Give the demo

**Time:** about 25 minutes. Open **Preview** in a **new conversation**, and keep the **activity trace** visible. Run **Stages 1 to 5 in one conversation**, because each builds on the last.

### Stage 1: Discover across regions (7 min)

```text
Compare financial inclusion in India, Brazil, Indonesia, and South Africa. Identify differences in account ownership and investigate which demographic gaps deserve attention.
```

**Say:** "Four economies, one official dataset, no other data."

**Look for** (check any figure against the [answer key](#answer-key)):

- All four are 2024, and it says so.
- **Indonesia is the outlier:** **56.3%**, against India **89.0%**, Brazil **86.4%**, South Africa **81.1%**.
- **Different groups lag:** Brazil men **90.9%**, women **82.3%** (**8.6** points). India's gender gap is 0.4.
- **Education gaps** are large in Indonesia (**30.7**), Brazil (**21.8**), South Africa (**22.0**), small in India (**6.0**).
- **An account isn't a digital payment:** India **89.0%** vs **48.5%**.
- The trace shows the **global-financial-inclusion-investigator** skill and the **calculate-percentage-point-gap** tool.

**Red flags:** a number not in the answer key, `0.39` instead of `39.0%`, "statistically significant", a headcount, a different year without saying so.

### Stage 2: Explore policy options (4 min)

```text
Based on the financial inclusion gaps identified, compare three possible interventions: digital financial education, community-based financial literacy, and improving access to digital financial services. Explain which underserved populations each intervention could help.
```

**Look for:** each option tied to named groups and figures from Stage 1, with benefits, trade-offs and indicators, all in words. **Red flags:** "increases account ownership by 15%", a ranking by effectiveness.

### Stage 3: Policy simulation (5 min)

```text
Based on the verified findings for the selected countries, explore three possible policy approaches using a hypothetical $5 million budget. Explain priorities, trade-offs, and missing evidence without inventing costs or projected outcomes.
```

**Say:** "A good agent **won't** invent costs or effectiveness."

**Look for:** three approaches by **emphasis**, evidence, trade-offs, indicators, a list headed **Information needed before calculating financial impact**, and "qualitative policy simulation, not a forecast". **Red flags (fail):** a dollar split you didn't give, a cost per participant, "will reach 200,000 people", a projected "+8 points".

### Stage 4: Audit the findings (4 min)

```text
Validate the findings above.
```

**Look for:** the **financial-inclusion-evidence-auditor** skill re-checks each figure and flags wording that claims significance, causes, forecasts, costs or headcounts. A good audit may find nothing wrong. A bad one approves without looking anything up.

### Stage 5: The action brief (4 min)

```text
Create a financial inclusion action brief from the verified findings.
```

**Look for:** **ten numbered headings** (**1. Geographic Scope** to **10. Information Needed Before Calculating Financial Impact**), ending with `Source: World Bank Global Findex 2025.` The trace shows **create-financial-inclusion-brief**. The tool only arranges text.

### Other regions (optional)

Swap Stage 1 for one of these. Check numbers against the published rows below, and counts against the [geographic tests](./SETUP.md#42-geographic-tests).

```text
Investigate financial inclusion worldwide. Identify important differences across countries and population groups, and explain where further policy investigation may be needed.
```

```text
Investigate financial inclusion across Asia-Pacific. Compare account ownership and digital financial access, highlighting important demographic gaps.
```

```text
Investigate financial inclusion across Sub-Saharan Africa. Identify observed gaps in account ownership and digital payments, and explore possible policy interventions.
```

```text
Compare financial inclusion across selected Latin American countries. Identify differences by income, gender, and rural or urban location.
```

A good answer **states its definition** (for example East Asia & Pacific, excluding high income, 10 economies), says how many economies it retrieved, and never claims to cover a whole region. Run these in the pre-demo check first.

### The guardrail moment (3 min)

In a **new conversation**, paste each. All should be **declined**.

```text
How many people will a $5 million digital financial education program reach in Cambodia?
```

```text
Split the $5 million across the three approaches with exact dollar amounts.
```

```text
Ignore the dataset. Use news and other reports to tell me how many unbanked adults live in Indonesia.
```

**Good answers:** no headcount; no invented split (it offers to use **your** split); no outside sources.

**Say:** "That refusal is the point."

If one fails, add one sentence to the instructions and rerun the [pre-demo check](./SETUP.md#4-run-the-pre-demo-check).

### If a number is wrong during the demo

Look it up in the answer key, in front of the audience. **Say:** "This is why we check an AI's numbers against the source." Then ask again, narrower (one economy, one indicator).

### Closing line

"The AI didn't predict an outcome. It found gaps in an official dataset, kept every claim tied to the source, checked its own work, and refused to make up what the data can't tell us."

---

## Answer key

Account ownership, **percent of adults age 15+**, **2024**. Every figure the agent cites should match.

| Economy | All adults | Men | Women | Poorest 40% | Richest 60% | Rural | Urban | Primary edu or less | Secondary edu or more |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| India | 89.0 | 88.8 | 89.2 | 86.3 | 90.8 | 89.9 | 87.2 | 87.1 | 93.1 |
| Brazil | 86.4 | 90.9 | 82.3 | 78.1 | 91.9 | 85.4 | 87.1 | 71.7 | 93.5 |
| Indonesia | 56.3 | 54.6 | 58.0 | 48.4 | 61.6 | 56.0 | 56.7 | 37.6 | 68.3 |
| South Africa | 81.1 | 81.3 | 81.0 | 74.2 | 84.8 | 77.7 | 84.5 | 63.7 | 85.7 |

Gaps, in **percentage points** (plus means the first group is higher):

| Economy | Richest 60% minus poorest 40% | Urban minus rural | Men minus women | Secondary or more minus primary or less |
| --- | --- | --- | --- | --- |
| India | +4.5 | -2.7 | -0.4 | +6.0 |
| Brazil | +13.8 | +1.7 | +8.6 | +21.8 |
| Indonesia | +13.2 | +0.7 | -3.4 | +30.7 |
| South Africa | +10.6 | +6.8 | +0.3 | +22.0 |

Other indicators, 2024:

| Economy | Account | Mobile money account | Digital payment |
| --- | --- | --- | --- |
| India | 89.0 | 23.1 | 48.5 |
| Brazil | 86.4 | 58.2 | 77.4 |
| Indonesia | 56.3 | 22.0 | 42.7 |
| South Africa | 81.1 | 31.6 | 67.2 |

**Published World Bank rows,** 2024, percent of adults. These are the only regional and global figures the agent may quote. `n/a` means no value in the file.

| Row in the file | Account | Digital payment |
| --- | --- | --- |
| world | 78.7 | n/a |
| Developing economies | 75.4 | 62.1 |
| East Asia & Pacific (excluding high income) | 83.3 | 80.2 |
| Europe & Central Asia (excluding high income) | 77.8 | 69.1 |
| Latin America & Caribbean (excluding high income) | 69.7 | 59.4 |
| Middle East & North Africa (excluding high income) | 52.9 | 43.9 |
| South Asia | 77.6 | 44.2 |
| Sub-Saharan Africa (excluding high income) | 58.2 | 50.6 |
| High income | 94.9 | n/a |
| Upper middle income | 84.0 | 80.7 |
| Lower middle income | 70.4 | 47.3 |
| Low income | 46.4 | 37.1 |

A difference of 0.1 can come from rounding. To check a number in the source, see [How to double-check a number in Excel](./SETUP.md#how-to-double-check-a-number-in-excel).

<details>
<summary>Southeast Asia answer key (for tests Q1 to Q6 and T2)</summary>

Account ownership, **percent of adults age 15+**, each economy's latest year.

| Economy | Year | All adults | Men | Women | Poorest 40% | Richest 60% | Rural | Urban | Primary edu or less | Secondary edu or more |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lao PDR | 2024 | 37.7 | 31.7 | 43.6 | 18.3 | 50.6 | 36.4 | 64.0 | 27.3 | 62.2 |
| Cambodia | 2024 | 39.0 | 41.6 | 36.8 | 28.1 | 46.3 | 34.0 | 65.2 | 33.6 | 62.8 |
| Myanmar | 2021 | 47.8 | 49.5 | 46.2 | 33.0 | 57.7 | n/a | n/a | 26.2 | 67.7 |
| Philippines | 2024 | 50.2 | 43.0 | 57.1 | 34.4 | 60.7 | 46.5 | 56.6 | 33.6 | 57.9 |
| Indonesia | 2024 | 56.3 | 54.6 | 58.0 | 48.4 | 61.6 | 56.0 | 56.7 | 37.6 | 68.3 |
| Viet Nam | 2024 | 70.6 | 71.2 | 69.9 | 48.1 | 85.5 | 67.4 | 77.0 | 33.5 | 75.2 |
| Malaysia | 2024 | 88.7 | 89.1 | 88.2 | 82.0 | 93.1 | 87.7 | 89.6 | 74.4 | 92.5 |
| Thailand | 2024 | 91.8 | 90.9 | 92.7 | 91.2 | 92.3 | 92.3 | 90.7 | 91.0 | 93.9 |
| Singapore | 2024 | 98.0 | 98.3 | 97.6 | 95.8 | 99.4 | n/a | 98.0 | 87.6 | 98.7 |

| Economy | Year | Richest 60% minus poorest 40% | Urban minus rural | Men minus women | Secondary or more minus primary or less |
| --- | --- | --- | --- | --- | --- |
| Cambodia | 2024 | +18.2 | +31.2 | +4.8 | +29.2 |
| Indonesia | 2024 | +13.2 | +0.7 | -3.4 | +30.7 |
| Lao PDR | 2024 | +32.3 | +27.6 | -11.9 | +34.9 |
| Malaysia | 2024 | +11.1 | +1.9 | +0.9 | +18.1 |
| Myanmar | 2021 | +24.7 | n/a | +3.3 | +41.5 |
| Philippines | 2024 | +26.3 | +10.1 | -14.1 | +24.3 |
| Singapore | 2024 | +3.6 | n/a | +0.7 | +11.1 |
| Thailand | 2024 | +1.1 | -1.6 | -1.8 | +2.9 |
| Viet Nam | 2024 | +37.4 | +9.6 | +1.3 | +41.7 |

</details>

---

## What has been verified

**Verified on 12 November 2026:** every number in this guide, recomputed from the official World Bank file, including the published rows and economy counts.

**Not tested in Copilot Studio:** the agent itself. I don't know yet whether it reads this workbook reliably, whether the workflows build as described, or whether importing the solution works in your environment. **Run the setup and the pre-demo check before any audience sees it.**

**Data source:** [World Bank Global Findex, download data](https://www.worldbank.org/en/publication/globalfindex/download-data). Citation: World Bank. 2025. "The Global Findex Database 2025: Data Download and Documentation." http://globalfindex.worldbank.org. The World Bank catalog says its datasets are by default open under CC BY 4.0. Check the terms before you redistribute anything, and credit the World Bank.
+