# Financial Inclusion Impact Agent: setup guide

[← Back to the demo kit](./README.md)

Everything to get the agent ready before a demo.

| # | Step | Time |
| --- | --- | --- |
| 1 | [Set up the agent](#1-set-up-the-agent): download the file, create the agent, paste the instructions, upload the file | 15 min |
| 2 | [Run the pre-demo check](#2-run-the-pre-demo-check): 6 questions with known answers. **Don't demo if it fails** | 10 min |
| 3 | [Share the agent](#3-share-the-agent-optional) (optional): export and import it | 20 min |

**You need:** [Copilot Studio](https://copilotstudio.microsoft.com) with the **GitHub Copilot harness** (the "new experience"), permission to create agents and upload files, and **Copilot Credits** (this harness bills by usage from the moment you build or test, and questions on a large file can use many). Uploaded files need **Dataverse search**; ask your administrator if you can't add the file. Excel is optional, only to double-check a number in the file.

---

## 1. Set up the agent

**Time:** 15 minutes. **You get:** one agent with one knowledge file. Nothing else.

### 1.1 Download the official file

1. Open [World Bank Global Findex, download data](https://www.worldbank.org/en/publication/globalfindex/download-data).
2. Under **Country-level data**, download **Excel (.xlsx)**. This is the only file you need.
3. **Don't edit it.** Opening it is fine, but don't save it. Don't add it to Git.

> [!NOTE]
> The answer key matches the current World Bank file. If the World Bank updates it, some numbers can change. To double-check a number, see [How to double-check a number in Excel](#how-to-double-check-a-number-in-excel).

### 1.2 Create the agent

1. Open [Copilot Studio](https://copilotstudio.microsoft.com), and select your environment.
2. On the home page, select the **Agent** tile. If you don't see it, select **Agents**, and then **New agent**. Make sure you're in the **new experience** (GitHub Copilot harness), and that you see **Build** and **Preview** tabs, not **Topics**.
3. Name it **Financial Inclusion Impact Agent**.
4. In **Instructions**, paste everything in the box below, and select **Save**:

```text
# Role
You are Financial Inclusion Impact Agent, an evidence-based analyst for policymakers. You find financial inclusion gaps and explore policies that could improve them. This is a demo, not policy advice.

# Data
- Use only the knowledge source "World Bank Global Findex 2025" for statistics. Never use outside numbers, memory or the web. Never invent, estimate or fill in a value.
- Each row is one economy, one survey year and one demographic group. Columns are indicator codes explained on the Series Table sheet. Examples: account.t.d = Account (%, age 15+); mobileaccount.t.d = Mobile money account; g20.any = Made or received a digital payment; internet = Used the internet.
- Values are proportions from 0 to 1. Always show them as percentages with one decimal (0.563 = 56.3%). Show gaps in percentage points.
- Groups: gender (men, women), income (poorest 40%, richest 60%), age (15-24, 25+), residence (rural, urban), labor force, education. Say which group is higher. Never assume which group is disadvantaged.
- "Southeast Asia" means these economies in the file: Cambodia, Indonesia, Lao PDR, Malaysia, Myanmar, Philippines, Singapore, Thailand, Viet Nam. Others, such as Brunei Darussalam and Timor-Leste, are not in the file. Say so.
- Use each economy's latest year that has a value, and state the year. Say when years differ.
- A blank or NA value means not available. Say so, and don't estimate. You may offer an earlier year if you label it.
- If you can't find a figure reliably, say so. Don't guess.

# Answers
- Show each figure as: economy, year, indicator, group, value. End with "Source: World Bank Global Findex 2025".
- The file has no margins of error. Say "large" or "small", never "significant". Don't claim causes, and don't turn percentages into numbers of people.
- For a simple lookup, answer briefly. For an analysis, policy or budget request, use: 1. Executive summary, 2. Evidence from World Bank data, 3. Financial inclusion gaps, 4. Policy options, 5. Comparison of possible approaches, 6. Limitations, 7. Recommended next steps.

# Policy and budget scenarios
- The file has no program costs, participant numbers or effectiveness. Never invent them, and never present an outcome as a forecast.
- Compare interventions in words: the gaps and groups each could address, benefits, trade-offs, implementation considerations, and success indicators that the next Findex survey could measure.
- For a hypothetical budget, describe priorities by relative emphasis (main focus, supporting focus). Give no dollar or percentage splits unless the user gives them, and then treat them as the user's assumption. Never calculate costs, reach or improvements.
- End with "Information needed before calculating financial impact:" and list what is missing, such as cost per participant, delivery channels, size of target groups, baseline rates, expected uptake or effect, and time horizon.
- Say that it is a qualitative policy simulation, not a forecast.
```

### 1.3 Add the file and turn memory off

1. On the **Build** tab, select **Knowledge** in the components panel.
2. Drag **`GlobalFindexDatabase2025.xlsx`** into the upload area.
3. Name it exactly **World Bank Global Findex 2025**. If there's a description box, paste:

   ```text
   Official World Bank Global Findex Database 2025 country-level workbook, unmodified. One row per economy, survey year and demographic group. Columns are indicator codes such as account.t.d (account ownership). Values are proportions from 0 to 1. The Series Table sheet defines each code. Use this source for every financial inclusion statistic.
   ```

4. Select **Add** (or **Save**). Don't add any other source.
5. Wait for the file to finish processing before you test.
6. Make sure **Memory** is **off**. Leave everything else at its default.

**Done when:** the agent has the instructions, **one** ready knowledge source, and Memory off, and `Hi` in **Preview** gets a short greeting.

| Problem | What to do |
| --- | --- |
| You can't upload the file, or file knowledge is blocked | Ask your administrator to allow file knowledge and turn on **Dataverse search**. Don't swap in a different data source without checking |
| The upload fails or never finishes | Check that the file isn't open in Excel, and try again with the original `.xlsx` |
| You see a **Topics** page | You're on the standard harness. Go back to the home page and use the new experience |
| The agent greets you with a long report | Add to **Answers**: `For a greeting, reply in one sentence.` |

---

## 2. Run the pre-demo check

**Time:** 10 minutes. **Why:** the file is wide and coded, and an agent can read it well or quietly get numbers wrong. A polished briefing built on wrong numbers is worse than none. **If any check fails, don't demo numbers.**

### 2.1 Know the right answers

The right answers are under each question in 2.2. If the World Bank has updated the file, double-check them in Excel first ([how](#how-to-double-check-a-number-in-excel)).

### 2.2 Ask the agent

Open **Preview** with **End user preview off**, so you can see the activity trace. Start a **new conversation** for each question. Use the copy button on each box, and paste the question into the chat.

**Q1**

```text
What was account ownership among all adults in Indonesia in 2024?
```

Right answer: **56.3%**.

**Q2**

```text
What was account ownership for the poorest 40% and the richest 60% of households in Lao PDR in 2024?
```

Right answer: **18.3%** and **50.6%**.

**Q3**

```text
Compare account ownership of men and women in the Philippines in 2024. Which group is lower?
```

Right answer: women **57.1%**, men **43.0%**. **Men** are lower.

**Q4**

```text
What is the latest account ownership figure for Myanmar, and which year is it from?
```

Right answer: **47.8%**, from **2021**.

**Q5**

```text
What share of adults made or received a digital payment in Singapore in 2024?
```

Right answer: **no 2024 value.** It may offer **94.8%** only if it says **2021**.

**Q6**

```text
What was account ownership in Brunei Darussalam and Timor-Leste in 2024?
```

Right answer: **neither is in the file.** No numbers.

An answer **passes** only if all of these are true:

- **The number is right**, within 0.1 points, shown as a **percentage** (`56.3%`, not `0.563`).
- **The year, group and direction are right** (Q3: men are lower).
- **It says "not available" or "not in the file"** for Q5 and Q6, instead of giving a number.
- **The activity trace shows the knowledge source was consulted.** A correct number with no lookup is a **fail**: it may come from the model's memory, and you can't rely on that.

| Result | What to do |
| --- | --- |
| **All 6 pass** | Go to the demo. Re-run the six about 30 minutes before it, because results can vary between runs |
| **1 or 2 fail with the same cause** | Add one sentence from the table below, and run all 6 again |
| **Several fail, or "I can't find it"** | **Stop.** The file isn't being read reliably. See "If it keeps failing" |

**Quick fixes** (add one sentence to the instructions, then rerun all 6):

| Problem | Add to the instructions |
| --- | --- |
| Shows `0.563` | `Multiply every value by 100 and write it as a percentage with one decimal place and a % sign.` |
| Wrong year | `State the survey year in every figure. Never use a year the file doesn't have for that economy.` |
| Gives a number for Singapore 2024 or Brunei | `If the file has no value, say "not in the file" or "not available". Never estimate.` |
| No knowledge lookup in the trace | `Always look up every figure in the knowledge source before you answer.` |

**If it keeps failing.** These options are in order of how little they change the plan. I haven't tested them in Copilot Studio.

1. **Ask narrower questions.** One economy, one indicator, one group at a time. Skip rankings and all-year tables. Only demo what passes.
2. **Use the official CSV instead of the workbook.** Remove the `.xlsx` source, and add the `.csv` with the same name. It's still one official, unmodified file. In the CSV, codes use underscores (`account_t_d`), missing values say `NA`, and the Series Table isn't included, so change the code examples in the instructions to match.
3. **Use a smaller official extract.** The World Bank's Data360 and DataBank sites (linked from the download page) are built for downloading selected data. It's still official data, but a **custom selection**, which breaks the "no custom Excel files" rule. **Get sign-off first.**
4. **Demo only the qualitative parts.** Policy options and trade-offs don't need exact numbers, but you lose the "discover hidden gaps" moment.

**Don't** attach the file to the chat (the 16 MiB limit is smaller than the 17.1 MiB workbook), and **don't type numbers into the instructions**. That is manual data creation.

### How to double-check a number in Excel

Use this only if your file might be newer than the answer key, or if you want to see a number in the source.

1. Open the downloaded `.xlsx` in Excel, and go to the **Data** sheet. **Don't save the file.**
2. Select the header row, and turn on **Data → Filter**.
3. Filter these columns: `countrynewwb` (the economy, for example Indonesia), `year` (for example 2024), `group` and `group2` (for example `all` and `all`).
4. Read the indicator column, for example `account.t.d`. The value is a **proportion**: `0.563` means **56.3%**.

The values for `group` and `group2` are: `gender` (`men`, `women`), `income` (`poorest 40%`, `richest 60%`), `urbanicity` (`rural`, `urban`), `age_cat` (`ages 15-24`, `age 25+`), `laborforce` (`in laborforce`, `out of laborforce`) and `education` (`prim edu or less`, `secondary edu or more`). The **Series Table** sheet explains each indicator code.

---

## 3. Share the agent (optional)

**Time:** about 20 minutes. Use this if another trainer should get the same agent. Skip it if you're the only one presenting.

> [!IMPORTANT]
> **Not confirmed for this kind of agent.** Learn's export and import pages are written for the **standard harness** (and there's one for the Customer Conversation harness). I found **no page for the GitHub Copilot harness**. Step 1 below is a quick feasibility check. If it fails, stop and ask your administrator, rather than working around it.

What Learn says ([Export and import agents using solutions](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export)): the agent's **instructions are included**, but **knowledge sources might not be** (uploaded files live in Dataverse, so expect to add the file again); some properties don't transfer (for example the icon and channel details); and after the import you must **set up user authentication again** and **publish** the agent before sharing it.

1. **Check it can go into a solution.** Open **Solutions** (the three dots **…** on the side bar). Select **New solution**, name it `FinancialInclusionImpactAgent`, and choose a publisher. Open it, and select **Add existing → Agent → Agent**. Pick the agent, and select **Add**. If the agent isn't in the list, **stop here**.
2. **Add required objects.** In **Objects**, select the agent's **⋮**, then **Advanced → Add required objects**.
3. **Export.** Select the solution, then **Export solution**, **Publish all changes**, and **Next**. Choose **Unmanaged** for a test copy, or **Managed** for distribution. Select **Export**, and download the `.zip`.
4. **Import into a different environment.** In the target, open **Solutions**, select **Import solution**, and choose the `.zip`. If it fails, select **Download log file**. The usual cause is a missing required component.
5. **Make it work.** Open the imported agent, set up authentication, and **publish** it. Compare it with step 1: instructions present, Memory off, and **Knowledge** has **World Bank Global Findex 2025**. If the knowledge is missing, add the unmodified `.xlsx` again, with the same name.
6. **Re-run the pre-demo check** in the new environment. A re-added file is indexed again, so results can differ.

> [!WARNING]
> **A managed solution can lock the agent.** If the knowledge file doesn't come across and the imported agent can't be edited, nobody can add it back. **Export an unmanaged copy first**, to see what travels. If you must distribute, give an unmanaged solution, or make the components customizable ([Learn](https://learn.microsoft.com/microsoft-copilot-studio/authoring-solutions-import-export#customize-components-for-managed-solutions)). I haven't tested which applies.

**What to give another trainer:** the solution `.zip` (say whether it's managed or unmanaged); a link to the [World Bank download page](https://www.worldbank.org/en/publication/globalfindex/download-data) (**never bundle the data file**); and this note:

```text
1. Import the solution (Solutions > Import solution), set up authentication, and publish.
2. Download the official Excel file from the World Bank page. Don't open and save it.
3. If the agent has no knowledge source, add the file and name it "World Bank Global Findex 2025".
4. Run the 6-question pre-demo check. Don't demo until all 6 pass.
```

**Clean up:** delete only what you created (the test agents and solution, and the imported agent in the test environment). Deleting stops future use, but doesn't reverse credits already used.

[← Back to the demo kit](./README.md)
