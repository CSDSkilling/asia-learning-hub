# Quality Root-Cause Agent

**From a quality drop to an investigation plan:** Run a small AI demo that helps a Quality Engineer decide what to check next, not declare a cause or change factory settings.

## Business Scenario

| | The Contoso story |
|---|---|
| **Current situation** | You are a Quality Engineer at Contoso, a fictitious electronics manufacturer, reviewing Plant A Line 1 (Power Module). |
| **Problem** | Fewer products passed their first inspection in W42. Results recovered in W43, but nobody yet knows why they fell. |
| **Goal** | Compare shift records and past investigations to narrow the possible causes and choose the next checks. |
| **What you do** | Run the supplied Python demo. Three AI roles investigate the supplied records automatically. |
| **What you receive** | One terminal report: ranked hypotheses (possible explanations), evidence, missing information, and recommended checks. It is an investigation plan, not a confirmed root cause. |

**First-inspection pass rate**, also called first-pass yield (FPY), means the share passing without rework or retesting.

| Reporting week | W40 | W41 | W42 | W43 |
|---|---|---|---|---|
| First-inspection pass rate | 97.5% | 96.9% | **93.6%** | 97.7% |

You investigate **after W43**. Recovery is another clue, not proof that a particular fix worked.

## How the investigation works

The weekly totals show **what happened**. Shift records and past reports help investigate **why it might have happened**.

| Automatic role | What it contributes |
|---|---|
| **Data analyst** | Uses tools to calculate comparisons across soldering oven temperatures, material batches, and operator assignments. |
| **Past-case reviewer** | Compares two past investigations: one about oven heating, the other about a different mechanical problem. A past finding is not proof of today's cause. |
| **Report writer** | Combines the evidence, ranks possible explanations, and proposes checks for the Quality Engineer. |

**You run one command; the roles work in sequence; you review one report.** You do not manually prompt each agent or deploy three separate services.

Microsoft Foundry supplies the shared model deployment. Microsoft Agent Framework coordinates the roles; local tools calculate and read records. This demonstrates an approach, not a capability exclusive to Foundry.

## Start the walkthrough

You now know the problem and the intended result. Next, prepare the environment, run the investigation, and interpret the report.

> **Continue to [setup.md - Step-by-step setup](setup.md#step-by-step-setup).**
> Follow **steps 1-6 in order**. Each step explains why, what to do, and what to check. Finish there with a short report example, its meaning, and the next human decision; you do not need to return here.

**Before starting:** Have Python 3.11+, Azure CLI, and access to an existing Foundry project/model supporting tool calls. The walkthrough does not create cloud resources. **Model requests incur charges.**

## Supporting references

### Data and continuity

**All records are fictitious.** Reuse the existing Copilot scenario's weekly data to continue the same Contoso story, then add synthetic shift records and past reports for the deeper investigation.

| Supplied file | Role and provenance |
|---|---|
| [operations_data.csv](data/operations_data.csv) | Reused `Operations_Data`: weekly operating context |
| [quality_supplier_risk.csv](data/quality_supplier_risk.csv) | Reused `Quality_and_Supplier_Risk`: weekly quality and supplier context |
| [process_parameters.csv](data/process_parameters.csv) | Added synthetic shift records: temperature, material, operator, and inspections |
| [Oven heating investigation](knowledge/rca_2025_reflow_profile_drift.md) | Added synthetic precedent to compare |
| [Connector alignment investigation](knowledge/rca_2024_connector_misalignment.md) | Added synthetic case with a different mechanism |

No workbook export or data generation is needed. See [DATA_DICTIONARY.md](DATA_DICTIONARY.md) for provenance, field definitions, the [glossary](DATA_DICTIONARY.md#plain-language-glossary), and [validation results](DATA_DICTIONARY.md#validation-results).

- **Measure:** Use `First Pass Yield Actual`, not operations `Quality`. Shift inspection counts are synthetic samples, not production totals. W40-W43 mean weeks 40-43; the weekly source does not specify a year.
- **Supplier:** Nova supplies PCB in the original data, not the added soldering material, which has no named supplier.
- **Processing:** Local tool results are sent to the Foundry model; the demo is not local-only processing.
- **Boundaries:** Observations and historical similarity do not prove causation. Confidence labels are qualitative, not calibrated probabilities. The Quality Engineer makes the final judgment; production changes require approved engineering procedures.

### Related use cases and extensions

[Manufacturing Operations Performance & Risk](<../../Copilot/Manufacturing Operations Performance & Risk/README.md>) shares the Contoso setting and weekly data. This demo runs independently; it does not require that scenario's output or deployment.

[Optional extensions](source/advanced/README.md) lists Magentic, VisionAgent, and Foundry Evals ideas; these are not implemented in this demo.

## Appendix: Microsoft Learn alignment

**Course:** [AI-3026-A: Develop AI agents on Azure](https://learn.microsoft.com/en-us/training/courses/ai-3026).

| Learn module | Applied in this demo |
|---|---|
| [Develop an AI agent with Microsoft Agent Framework](https://learn.microsoft.com/en-us/training/modules/develop-ai-agent-with-semantic-kernel/) | Connect to Foundry and expose local analysis and document-reading functions as agent tools |
| [Orchestrate a multi-agent solution using the Microsoft Agent Framework](https://learn.microsoft.com/en-us/training/modules/orchestrate-semantic-kernel-multi-agent-solution/) | Apply [sequential orchestration](https://learn.microsoft.com/en-us/training/modules/orchestrate-semantic-kernel-multi-agent-solution/5-use-sequential-orchestration): analysis, precedent comparison, then reporting with shared evidence |

This is an industry extension of those objectives, not a replacement for the official labs. The agents run locally against an existing model deployment; no hosted agent definitions are created.
