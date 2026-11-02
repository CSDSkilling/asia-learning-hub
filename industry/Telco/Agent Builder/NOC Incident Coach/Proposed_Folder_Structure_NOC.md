# Proposed folder structure: Telco Agent Builder back-office demo

- **Demo:** From Alarm Storm to Verified Fix: NOC Incident Coach
- **Repository:** CSDSkilling/asia-learning-hub
- **Prepared by:** Jin Hwan Woo, for review and publishing by Ning Wei
- **Date:** 2 November 2026

## 1. Where the demo goes
Add a new `NOC Incident Coach` folder under `industry/Telco/Agent Builder/`, next to the front-office demo:

```text
industry/Telco/Agent Builder/NOC Incident Coach/
```

This follows the front-office demo, `industry/Telco/Agent Builder/Customer Care Knowledge Coaches/`: a short README, one page per agent, and the ZIP file in a `data-files` folder.

## 2. Folder tree
```text
industry/
├── README.md                                   <- add one row to the index table (section 4)
└── Telco/
    ├── Copilot/
    │   ├── Customer Retention Decision/        (existing)
    │   └── 5G Service Degradation/             (existing - related back-office Copilot demo)
    └── Agent Builder/
        ├── Customer Care Knowledge Coaches/    (existing - front-office companion, shares AW4)
        └── NOC Incident Coach/                 <- new
            ├── README.md
            ├── NOC-Incident-Coach.md
            └── data-files/
                └── Telco_NOC_Incident_Coach_Demo_Files.zip
```

## 3. What each file is for
| **File** | **Purpose** |
|----------|-------------|
| `README.md` | Demo overview: scenario, the agent and its four steps, pain points and benefits, demo files, demo options, setup (OneDrive or SharePoint), demo journey, Stage 1-5 prompts, an optional stage that closes the loop with the front-office demo, and the final demo outcome |
| `NOC-Incident-Coach.md` | The agent page: build steps, name, description, instructions, knowledge, settings, starter prompts and 11 demo steps with pass criteria |
| `data-files/Telco_NOC_Incident_Coach_Demo_Files.zip` | The three knowledge files and the full trainer guide |

The README is kept short, in the same format as the front-office demo. There is only one agent, but its configuration, including the full instructions (5,564 characters), is still on its own page so that the README stays easy to read.

### ZIP contents
| **File** | **Contents** |
|----------|--------------|
| `AW4_Network_Status_Snapshot.docx` | The status bulletin that customer care reads. It's the same file as in the front-office ZIP, unchanged, so this demo also works on its own. |
| `AW6_NOC_Incident_Runbook.docx` | Network reference, alarm grouping, severity, credit eligibility, runbooks, 10 actions with risks and approvers, change freeze, restoration, bulletin wording and escalation |
| `AW7_NOC_Event_Log.xlsx` | 28 events on one sheet: 15 alarms, KPI checks, diagnostics, a field update, changes and a review action |
| `AsterWave NOC Incident Coach - MTT Guide v1.0.docx` | Full trainer guide (build steps, all 11 tests, demo scripts, lab plan, troubleshooting, how to build your own kit) |

## 4. Row to add to `industry/README.md`
Add this row to the **Industry Index & Quick Navigation** table, after the existing Telco Agent Builder row:

```markdown
| **Telco** | Agent Builder | [From Alarm Storm to Verified Fix: NOC Incident Coach](Telco/Agent%20Builder/NOC%20Incident%20Coach) |
```

## 5. Links to check after publishing
The links in the package assume the folder names above. If you change a folder name, update these links.

| **Where** | **Link** | **Points to** |
|-----------|----------|---------------|
| `README.md`, Demo files | `https://github.com/CSDSkilling/asia-learning-hub/raw/refs/heads/main/industry/Telco/Agent%20Builder/NOC%20Incident%20Coach/data-files/Telco_NOC_Incident_Coach_Demo_Files.zip` | ZIP download (same pattern as the front-office demo) |
| `README.md`, Companion demo note and More resources | `../Customer%20Care%20Knowledge%20Coaches` | Front-office companion demo |
| `README.md`, More resources | `../../Copilot/5G%20Service%20Degradation` | Related back-office Copilot demo |
| `README.md` | `NOC-Incident-Coach.md` | Agent page |
| `README.md`, Choose your demo | `#optional---close-the-loop-with-the-front-office-demo` | The optional stage in the same README |
| Agent page | `README.md` and `README.md#set-up-the-demo` | Back to the overview and the setup section |

After publishing, please check that:
- [ ] The ZIP link downloads the file.
- [ ] The agent page opens from the README.
- [ ] The front-office and 5G Service Degradation links open those demos.
- [ ] The new row appears in the industry index and opens the folder.

## 6. How this demo fits with the other Telco demos
| **Demo** | **Relationship** |
|----------|------------------|
| Fix First, Then Retain: Customer Care Knowledge Coaches (Agent Builder, front office) | Same incident (INC-077) at the same moment, and the same AW4 file. Customer care tells customers about the incident; the NOC fixes it. Together they make a 30-minute end-to-end demo. |
| Regional 5G Service Degradation: From Alarm to Executive Action (Copilot, back office) | Same back-office theme with a different incident. The Copilot demo prepares an executive decision; this demo supports the NOC shift during the incident. |

All organisations, people, network elements, numbers and policies in this demo are fictional.
