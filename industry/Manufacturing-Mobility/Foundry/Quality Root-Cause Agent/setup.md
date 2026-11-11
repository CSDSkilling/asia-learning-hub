# Quality Root-Cause Agent Walkthrough

## Step-by-step setup

**Your task:** Investigate Contoso's W42 drop in first-inspection pass rate, even though W43 recovered. Run the prepared demo, then use its report to decide what a Quality Engineer should check next.

> **Follow steps 1-6 in the same Windows PowerShell terminal.**
> Copy one command block at a time. Stop if a command fails; check [Troubleshooting](#troubleshooting) before continuing. Sign-in, project lookup, and editing settings need your input; the agent sequence runs automatically.

### Before you start

- Clone or download the **whole repository**, open its root folder (`asia-learning-hub`) in VS Code, and open a PowerShell terminal there.
- Have **Python 3.11+** and **Azure CLI** installed. If either is missing, install it before continuing.
- Have **one existing Foundry project and a deployed model** supporting Responses API and function/tool calling. Ask the owner to confirm [permissions](#permissions), available quota, and approval for model charges. If you have no project/deployment, obtain access before starting; this guide does not create one.
- Keep the supplied three CSVs and two past reports in place. No workbook export, data generation, or separate search service is needed.

**Model requests incur charges.** The records are fictitious, but local tool results are sent to Foundry, not processed entirely on your computer.

### 1. Sign in to Azure

**Why:** The program uses your Azure identity to access the model; it does not use an API key.

**Do:** Run this command and complete the sign-in prompt with the account authorized for the project:

```powershell
az login
```

After sign-in succeeds, check the selected account's subscription and tenant:

```powershell
az account show --query "{Subscription:name,Tenant:tenantId}" --output table
```

**Check:** You signed in with the intended account and the displayed tenant is the project's tenant. Ask the project owner if unsure, then continue to step 2. Never copy tokens or credentials into the repository.

### 2. Confirm the Foundry project and model deployment

**Why:** All three AI roles share one model. You need its connection details, not three separately deployed agents.

**Do (manual):** Ask the project owner or look in the Foundry portal for:

- **Project endpoint:** The complete project HTTPS endpoint, not a portal page URL.
- **Model deployment name:** The available deployment's name, not necessarily its catalog model name.

**Check:** Both values are ready for step 4, and the owner has confirmed access, Responses API/tool support, quota, and charges. For [cost planning](#estimated-time--cost), also identify the model/version, deployment type, and processing region. Do not create resources as part of this step.

### 3. Prepare the local analysis tools

**Why:** Python tools read the factory records and calculate comparisons. A local virtual environment keeps this demo's packages separate from other projects.

**Do:** From the **repository root**, enter the demo's `source` folder and check Python:

```powershell
Set-Location -LiteralPath '.\industry\Manufacturing-Mobility\Foundry\Quality Root-Cause Agent\source' -ErrorAction Stop
python --version
```

Confirm Python is **3.11 or later**, then create the virtual environment:

```powershell
python -m venv .venv
```

After that succeeds, install the pinned packages:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

Only after installation succeeds, check the dependencies:

```powershell
.\.venv\Scripts\python.exe -m pip check
```

**Check:** Installation succeeded and the last command reports **No broken requirements found.** Stay in `source` for steps 4-5. Commands use the virtual environment directly; no activation or execution-policy change is needed.

The pinned integration includes the **`azure-ai-inference==1.0.0b9` preview dependency**. If a package is unavailable, see [dependency guidance](#authentication-and-dependencies); do not substitute versions.

### 4. Connect the demo to the model

**Why:** The local settings file tells the program which project and model deployment to call.

**Do:** Create `.env` only if it is missing, then open it in Notepad. Existing settings are not overwritten.

```powershell
if (-not (Test-Path -LiteralPath .env)) {
    Copy-Item -LiteralPath .env.example -Destination .env -ErrorAction Stop
}
notepad.exe .env
```

In Notepad, use these two lines and replace **every `<...>` placeholder** with the values from step 2. Use the complete endpoint from the owner, not a guessed address.

```dotenv
FOUNDRY_PROJECT_ENDPOINT=https://<resource-name>.services.ai.azure.com/api/projects/<project-name>
FOUNDRY_MODEL=<model-deployment-name>
```

**Check:** Save and close Notepad. Both values are real, without `<...>` placeholders. Existing terminal environment variables override `.env`; ensure they do not conflict. Never add an API key or commit real settings; [source/.gitignore](source/.gitignore) excludes `.env`.

### 5. Run the investigation

**Why:** This is the actual quality investigation. The program calculates comparisons, reads the two past reports, and asks the model to assemble an evidence-backed report.

The following question is **already in the program**. Read it; do not paste it into PowerShell or a portal:

```text
Why did fewer products pass their first inspection in W42 on Contoso Plant A Line 1 (Power Module), and what should we verify before choosing corrective action?
```

**Do:** This command makes **billable model requests**. From the same terminal in `source`, run:

```powershell
.\.venv\Scripts\python.exe main.py
```

**Check:** After validating settings and local inputs, the program prints:

```text
Local inputs checked. Running DataAnalysisAgent -> KnowledgeAgent -> ReportAgent...
```

Wait for **one final report**. The three roles run in sequence automatically; there are no separate prompts to answer or agent screens to open. Once the report appears, continue to step 6 rather than rerunning the command.

### 6. Understand the report and finish

**Why:** A report is useful only if you can explain what it supports, what remains unknown, and which check should come next.

**Do (manual):** Read your report alongside the example below. This is a **short illustrative summary based on the verified run**, not a verbatim transcript or a guaranteed response. Wording, ranking, and qualitative confidence may vary.

First, check the weekly pass rates: **W40 97.5%, W41 96.9%, W42 93.6%, W43 97.7%**. The problem is the W42 decline; W43 recovery is evidence to interpret, not proof of a successful fix.

| Example finding | What it means | What to check next |
|---|---|---|
| Hotter shifts had lower pass rates; W43 recovered alongside lower recorded temperatures. | Oven heating conditions are a leading investigation direction, not a proven cause. | Verify sensors and the product's full temperature-time curve against approved requirements. |
| SP-002, the soldering material batch, remained in use during W43 recovery. | The batch alone does not explain the pattern; an interaction with heating conditions remains possible. | Review material test results and engineering-approved comparisons under matched conditions. |
| OP-04 did not work the high-defect W42 shifts. | Evidence for blaming the new operator is weak. This does not prove skill or rule out every operator effect. | Review training and assignments neutrally, comparing similar operating conditions. |
| The past oven case is relevant; the connector-fixture case concerns a different mechanism. | Past experience can guide checks, but cannot prove the current cause or justify copying an old remedy. | Obtain current defect and process evidence. |

Compare your report's citations with the supplied sources:

- [Weekly quality data](data/quality_supplier_risk.csv): `Week` and `First Pass Yield Actual`, not operations `Quality`.
- [Shift records](data/process_parameters.csv): `week`, `reflow_zone3_temp_c`, `solder_paste_lot`, `operator_id`, `units_tested`, and `units_failed`. These are synthetic inspection samples, not production totals.
- [Oven precedent](knowledge/rca_2025_reflow_profile_drift.md) and [fixture comparison](knowledge/rca_2024_connector_misalignment.md): cited sections must describe past evidence, not current findings.

**Check:** Look for **Summary**, **Ranked hypotheses**, **Evidence gaps**, **Next checks**, and **Decision boundary**, supported by file/field and report/section references. A nonempty response alone is not enough. Missing evidence or unsupported claims mean the report needs review, not that the investigation succeeded.

#### What you have achieved

- **Demonstrated:** Calculations and past records feed three distinct AI roles, producing an evidence-backed starting point for a quality investigation.
- **Expected benefit:** A Quality Engineer can review possible explanations and prioritize checks in one place. This demo does not measure productivity savings or guarantee better pass rates.
- **Not established:** A confirmed root cause. Comparisons are unbalanced observations, not controlled experiments; current defect types, sensor calibration, full heating curves, and controlled material trials are missing. Confidence labels are qualitative, not calibrated probabilities.

#### Finish here

The demo is complete when you can explain **the leading hypothesis, the evidence that limits it, and the next check**. No further run, prompt editing, or production action is required.

In a real plant, present those findings to the **Quality Engineer**, who decides the engineering-approved validation plan. The program has not adjusted an oven, rejected a batch, or assigned blame. **These are hypotheses; the Quality Engineer makes the final judgment.**

---

The sections below are supporting references, not additional walkthrough steps.

## Permissions

For Microsoft Entra project-SDK access, follow [SDK prerequisites](https://learn.microsoft.com/en-us/azure/foundry/how-to/develop/sdk-overview#prerequisites) and [Foundry RBAC](https://learn.microsoft.com/en-us/azure/foundry/concepts/rbac-foundry):

| Task | Role and scope |
|---|---|
| Run against an existing project/deployment | **Foundry User** on the **Foundry project**; some interfaces still show **Azure AI User** |
| Browse the parent resource, if needed | **Reader** on the **Foundry resource**; Reader alone does not grant model inference access |
| Review billed costs, if needed | **Cost Management Reader** at the required resource-group or subscription scope; the owner can review instead |

These are documented built-in roles, not proof of the smallest custom role or a live test with only those roles. This uses `FoundryChatClient`, not a remote agent endpoint; an agent-consumer role is not interchangeable with project SDK access.

Provisioning, deployment changes, and role assignments are administrator tasks outside the demo. Presenters do not need Owner or Contributor just to run it. Do not widen access to work around an error; check the account, tenant, project scope, and deployment.

## Verification status

Dependencies, 12 offline tests, and a Windows Unicode-output regression check passed on Python 3.14.4. One live run completed, and its report was checked against the calculated evidence. A subsequent source-column metadata improvement was verified locally only. Timed peer reproduction remains pending.

## Estimated time & cost

- **Runtime:** One successful run took about 90 seconds after setup. This excludes setup time; runtime varies by environment and model.
- **Charges:** Model requests incur charges. Confirm approval with the project owner before running.
- **Cost:** Depends on the deployed model and usage; actual demo charges were not measured.
- **Pricing:** Check current [Foundry Models pricing](https://azure.microsoft.com/en-us/pricing/details/ai-foundry-models/aoai/) or the model provider's pricing page.

## Troubleshooting

### Region

Use the existing project/deployment region. The script does not select or change it.

### Quota

For throttling or quota errors, confirm capacity and wait or ask the owner. Do not repeatedly rerun a billable workflow without checking the error.

### Model availability

Check `FOUNDRY_MODEL` against an available Responses API/tool-calling deployment. One configured deployment passed a live run; other model/region combinations still need verification.

### Authentication and dependencies

For access errors, check the account/tenant from step 1 and the owner's role assignment. Conflicting terminal environment variables take precedence over `.env`; update them if necessary.

For import errors, reinstall the pinned requirements **from `source`**, using the virtual environment:

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
```

After installation succeeds:

```powershell
.\.venv\Scripts\python.exe -m pip check
```

If a mirror lacks a pinned release, verify it exists on public PyPI and use an organization-approved index; do not silently change versions. For local validation errors, use the supplied files unchanged and consult [DATA_DICTIONARY.md](DATA_DICTIONARY.md).

### Windows console output

The CLI uses UTF-8 output. Open redirected output as UTF-8 if punctuation looks garbled. Output failure after model generation can still incur charges; check the cause before rerunning.

## Cleanup

SDK clients close automatically. No resources, remote agents, or knowledge uploads are created. Cloud-side response retention follows service configuration. Keep shared projects/deployments; remove only disposable resources you explicitly created.

## SDK references

- [Microsoft Agent Framework documentation](https://learn.microsoft.com/agent-framework/)
- [Pinned Foundry integration](https://pypi.org/project/agent-framework-foundry/1.16.1/)
- [Pinned orchestration package](https://pypi.org/project/agent-framework-orchestrations/1.4.2/)
