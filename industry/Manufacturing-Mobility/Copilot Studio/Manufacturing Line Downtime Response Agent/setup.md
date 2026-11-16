# Setup Guide – Manufacturing Line Downtime Response Agent

The agent is provided as a Power Platform solution export, so there is no need to rebuild it. Import the solution, then complete the steps below.

## What's included

| Item | Location |
|---|---|
| Solution package (publisher **MFG**) | `data-files/LineDowntimeResponseAgent.zip` *(update to the exported file name)* |
| Production Downtime Demo Pack (4 CSV files) | `data-files/Production Downtime Demo Pack/` |
| Supplier Risk Demo Pack (4 CSV files) | `data-files/Supplier Risk Demo Pack/` |
| Downtime Response SOP | `data-files/downtime_response_sop.md` |
| Work-order tracker | `data-files/Corrective_Work_Orders.xlsx` (table *WorkOrders*) |

## Prerequisites

- A Power Platform environment with Copilot Studio
- OneDrive for Business
- Connections for Excel Online (Business), Office 365 Outlook and OneDrive/SharePoint knowledge (allowed by the environment's data policy)

## 1. Import the solution

In Power Apps (or Copilot Studio) › **Solutions** › **Import solution**, select the solution package and create or select the connections when prompted.

## 2. Upload the demo files to OneDrive

Create a folder named **LineDowntimeDemo** in your OneDrive and upload the 8 CSV files and `Corrective_Work_Orders.xlsx`. Keep the original file names.

## 3. Re-point the knowledge sources

The imported OneDrive knowledge items still point to the author's OneDrive. Remove them and add the 8 CSV files from your **LineDowntimeDemo** folder (the picker allows 5 items at a time, so add them in two rounds). Give each file a one-line description so the orchestrator picks the right source. Confirm the SOP document is present; if not, upload `downtime_response_sop.md` directly.

> If a CSV file does not reach **Ready**, save it as `.xlsx` in the same folder and add that file instead.

## 4. Update the tools

| Tool | Update after import |
|---|---|
| Create corrective work order | Select your connection and point **File** to `/LineDowntimeDemo/Corrective_Work_Orders.xlsx`, table **WorkOrders** |
| Send downtime alert | Select your connection and set **To** to your own email address for the demo |

## 5. Test and publish

Run the demo prompts in the test pane (see [README.md](README.md)) – the first run asks you to sign in to the knowledge and tool connections. Then **Publish** and add the **Teams and Microsoft 365 Copilot** channel.
