# Quality Root-Cause Agent Data Dictionary

Three CSV files and two past investigation reports are available. All records are fictitious training data, not evidence from a real manufacturer.

The weekly CSVs reuse the [Copilot use case's documented schema](<../../Copilot/Manufacturing Operations Performance & Risk/DATA_DICTIONARY.md>). The shift CSV and both investigation reports are new synthetic extensions. The workbook is an authoring reference, not a runtime input.

## Plain-language glossary

Use the plain-language labels in explanations and investigation reports. Technical terms and CSV field names remain unchanged so the data and code can be matched directly.

| Plain-language label | Technical term / field | Meaning in this demo |
|---|---|---|
| First-inspection pass rate | First-pass yield (FPY); `First Pass Yield Actual`, `fpy` | Share of inspected products that pass the first time, before rework or retesting |
| Soldering oven temperature | Reflow Zone 3 temperature; `reflow_zone3_temp_c` | Temperature in one section of the oven used to join electronic parts with soldering material |
| Soldering material batch | Solder-paste lot; `solder_paste_lot` | A production batch of metal-based paste used to make soldered connections, not an adhesive |
| Oven heating conditions | Reflow profile | Temperature and time conditions during soldering, not just a single temperature reading |
| Incoming material quality check | Incoming inspection; `incoming_inspection_result` | Quality check on a material batch before production use |
| Near the acceptance limit | `marginal` | A synthetic inspection result close to the acceptance limit that requires further checking; not proof that the material caused the decline |
| Past investigation report | Root-cause analysis (RCA) report | A previous incident's evidence, findings, actions, and lessons |
| Reporting week / work period | `week`, `shift` | W40 means week 40; Day and Night are the two work periods within each date |

## operations_data.csv

Source: the existing Copilot workbook's `Operations_Data` sheet. Its 18-column schema, column order, units, and original numeric values are preserved. One row represents one reporting week, plant, line, and product family.

Exported rows: **16**, from 17 source rows after removing one verified duplicate W43 Sensor Pack record.

The CSV exports normalize `Plant-A` to `Plant A` and `Drivetrain` to `Drive Train` wherever they occur. Numeric values and their stored decimal text are unchanged; no columns generated during the Copilot demo are included.

| Column | Type | Unit / format | Meaning | Key / relationship |
|---|---|---|---|---|
| Week | Text | W40-W43 | Reporting week label; the original sample does not specify a year | Weekly join key |
| Plant | Text | Plant A / Plant B | Manufacturing site | Weekly join key |
| Line | Text | Line 1 / Line 2 | Production line within the plant | Weekly join key |
| Product Family | Text | Product name | Product built by the line | Weekly join key |
| Opening WIP Units | Integer | Units | Work-in-progress units at the start of the week | Operating context |
| Completed Units | Integer | Units | Good units finished during the week | Throughput, not the shift inspection sample size |
| Scrap Units | Integer | Units | Units discarded rather than recovered through rework | Not the same measure as first-inspection failures |
| Downtime Minutes | Number | Minutes | Reported time the line was stopped | Weekly operating context |
| On-Time Delivery % | Number | Ratio, 0-1 | Share of orders shipped on the promised date | 0.97 means 97% |
| Runtime Minutes | Number | Minutes | Reported time the line actually ran | Source operating-time measure |
| Planned Minutes | Number | Minutes | Reported time the line was scheduled to run | Not expanded into the synthetic Day/Night schedule |
| Availability | Number | Ratio, 0-1 | Reported share of planned time actually running | Source value retained without recalculation |
| Performance | Number | Ratio, 0-1 | Reported operating speed relative to ideal speed | Source value retained without recalculation |
| Quality | Number | Ratio, 0-1 | Reported share of produced units that were good | Not the first-inspection pass-rate reference |
| OEE | Number | Ratio, 0-1 | Overall equipment effectiveness, combining availability, performance, and quality | Composite source score, not recomputed here |
| Cycle Time Sec | Number | Seconds per unit | Average time to produce one unit | Weekly operating context |
| Changeover Minutes | Number | Minutes | Time spent switching products or setups | Weekly operating context |
| Estimated Gross Margin USD | Number | USD | Estimated gross-margin contribution, not a loss amount | Financial context |

Weekly measures are copied as supplied, not reconciled or recomputed from one another. Long decimals and scientific notation reflect the spreadsheet's stored numeric text. Format ratios as percentages for display without rewriting the source CSV values.

## quality_supplier_risk.csv

Source: the existing Copilot workbook's `Quality_and_Supplier_Risk` sheet. Its 17-column schema and numeric values are preserved, with the same label normalization described above. One row represents one reporting week, plant, line, and product family.

Exported rows: **16**, matching the 16 source rows. No records were removed from this sheet.

`First Pass Yield Actual` is the weekly first-inspection pass-rate reference. For Plant A Line 1 (Power Module), the original values are W40: 0.975, W41: 0.969, W42: 0.936, and W43: 0.977. The line's supplier entry is Supplier Nova / PCB (printed circuit board); it does not identify a soldering material supplier or a current incoming material quality-check result.

| Column | Type | Unit / format | Meaning | Key / relationship |
|---|---|---|---|---|
| Week | Text | W40-W43 | Reporting week label | Weekly join key |
| Plant | Text | Plant A / Plant B | Manufacturing site | Weekly join key |
| Line | Text | Line 1 / Line 2 | Production line within the plant | Weekly join key |
| Product Family | Text | Product name | Product built by the line | Weekly join key |
| Supplier | Text | Fictitious supplier identifier | Key supplier associated with the line in the original sample | Does not identify the added soldering material supplier |
| Material Group | Text | Material category | Material provided by that supplier | Nova is associated with PCB, not solder paste |
| First Pass Yield Target | Number | Ratio, 0-1 | Target share passing the first inspection; 0.98 in this sample | Reference target |
| First Pass Yield Actual | Number | Ratio, 0-1 | Actual share passing the first inspection without rework | Weekly reference for the synthetic shift aggregate |
| Scrap Rate | Number | Ratio, 0-1 | Reported discarded units as a share of production | Not `1 - FPY`; failed units may be reworked |
| Defect PPM | Integer | Parts per million | Reported defective parts per million units produced | Separate source measure, not derived from the shift sample |
| Customer Complaints | Integer | Count | Complaints received during the week | Quality-impact context |
| Late PO Lines | Integer | Count | Supplier purchase-order line items delivered late | Delivery-risk context |
| Expedite Cost USD | Number | USD | Additional cost to rush material deliveries | Supplier-risk cost |
| Production Impact Hours | Number | Hours | Reported production time lost to supplier issues | Supplier-risk impact |
| Containment Status | Text | Open / Closed | Status of isolating suspect or defective material | Source status, not inferred from inspection labels |
| CAPA Status | Text | Open / In Progress / Closed | Corrective and Preventive Action tracking status | Source action status |
| Risk Rating | Text | Low / Medium / High / Critical | Reported overall quality and supplier-risk rating | Retained, not recalculated by this dataset |

## process_parameters.csv

New synthetic shift-level records for **Plant A Line 1 (Power Module)**. Coverage is W40-W43, seven days per week, with Day and Night shifts: **56 records and 13 columns**. One row represents one date and shift on the target line.

The soldering material batch is an added process-material setting with no named supplier. `incoming_inspection_result` is added synthetic batch evidence, not a field copied from the original weekly data.

| Column | Type | Unit / format | Meaning | Key / relationship |
|---|---|---|---|---|
| week | Text | W40-W43 | Week label matching the weekly data | Joins to `Week` |
| date | Date | YYYY-MM-DD | Synthetic shift-start date using the 2026 ISO calendar | Part of the shift identifier |
| shift | Text | Day / Night | Work period assigned to its start date | Part of the shift identifier; not a duration |
| plant | Text | Plant A | Plant identifier | Joins to `Plant` |
| line | Text | Line 1 | Line identifier | Joins to `Line` |
| product_family | Text | Power Module | Product family | Joins to `Product Family` |
| reflow_zone3_temp_c | Number | Degrees Celsius | Synthetic shift-average oven-sensor temperature in Zone 3 | Not a component's complete temperature and time curve |
| solder_paste_lot | Text | Synthetic batch identifier | Soldering material batch used during the shift | Groups shifts for material-batch comparisons |
| operator_id | Text | Synthetic operator identifier | Operator associated with the shift | Groups shifts for operator comparisons |
| units_tested | Integer | Units | Number of products receiving their first inspection during the shift | Positive denominator for the pass rate |
| units_failed | Integer | Units | Units failing the first inspection | Between zero and `units_tested` |
| fpy | Number | Ratio, 0-1 | First-inspection pass rate: `1 - units_failed / units_tested` | Recomputed from inspection counts |
| incoming_inspection_result | Text | accepted / marginal | Synthetic incoming material quality-check result for the soldering material batch | Repeated batch-level evidence, not a new inspection on each shift |

Join the weekly data on week, plant, line, and product family. Calculate the weekly first-inspection pass rate as `1 - sum(units_failed) / sum(units_tested)`, not the simple mean of shift pass rates. Each week's result must be within 0.005 (0.5 percentage points) of the original weekly pass rate.

`fpy` is rounded to ten decimal places; the stored value differs from its count-based calculation by at most 0.00000000005. Aggregate the integer counts rather than averaging rounded rates.

### Synthetic settings and interpretation

- **Calendar:** W40 is 2026-09-28 to 2026-10-04; W41 is 2026-10-05 to 2026-10-11; W42 is 2026-10-12 to 2026-10-18; W43 is 2026-10-19 to 2026-10-25. This year and date mapping are added demo conventions, not dates recovered from the original workbook.
- **Temperature:** The fictional reference is 245 +/- 5 degrees Celsius, giving a 240-250 range. These are teaching values, not recommended manufacturing settings. W41 shows a late upward trend, 12 W42 shifts exceed 250, and all W43 shifts return within the range.
- **Material:** SP-001 is used in W40-W41 with an `accepted` inspection label. SP-002 starts on the first W42 shift with a `marginal` label and remains in use throughout W43. Neither batch is assigned to Nova or another supplier.
- **Inspection labels:** `accepted` means the fictional incoming check was satisfactory; `marginal` means near the acceptance limit and requiring further checking. No actual test measurement, acceptance threshold, or material-release decision is recorded.
- **Operators:** OP-01 to OP-03 are present before W42. OP-04 first appears on 2026-10-14 and remains present during W43 recovery. All identifiers are fictitious.
- **Counts:** Each week has a synthetic inspection sample of 1,000 units, distributed across shifts of 65, 70, or 75 units. This is not a production census and is not assumed to equal `Completed Units`. First-inspection failures are not equivalent to scrapped units.

### Validation results

The local data checks produced the following results. This validates the dataset, not an agent or an Azure run. Displayed rates and differences are rounded; the original weekly CSV values remain unchanged.

| Week | Tested | Failed | Calculated FPY | Original weekly FPY | Difference, percentage points |
|---|---|---|---|---|---|
| W40 | 1000 | 25 | 97.5000% | 97.5000% | 0.0000 |
| W41 | 1000 | 31 | 96.9000% | 96.9000% | 0.0000 |
| W42 | 1000 | 64 | 93.6000% | 93.6000% | 0.0000 |
| W43 | 1000 | 23 | 97.7000% | 97.7000% | 0.0000 |

- All 56 rows have valid count-derived rates, unique shift keys, matching week/date labels, and weekly joins. Every date has one Day and one Night row.
- Temperature and FPY have Pearson correlations of **-0.9076 overall** and **-0.9385 within W42**. These associations were intentionally designed; they are not evidence of real-world causality or calibrated confidence.
- W42 shifts above the fictional temperature limit have **92.7907% FPY**, versus **98.5714%** for the two within-range shifts.
- For the operator check only, a high-defect shift means FPY below 95%; this is not a risk rule from the original workbook. W42 has ten such shifts, none assigned to OP-04. OP-04's two W42 shifts have 140 inspections, two failures, and **98.5714% FPY**.
- SP-002 remains in use during W43 recovery. A before/after batch comparison alone cannot isolate a material effect because the process conditions also changed.

### Evidence boundaries

The synthetic data supports comparing hypotheses, not confirming a root cause. Operator assignments and temperatures are not balanced experimental groups. OP-04's lack of overlap with poor results does not prove operator capability or establish that operator changes have no effect.

Current defect types, sensor-calibration records, a full heating curve, and controlled material trials are absent. A historical report cannot supply those missing facts for W42. The Quality Engineer must decide which additional measurements and controlled checks are needed.

## Knowledge documents

Two synthetic past investigation reports are available for local reading. Cite the document filename and relevant section when using a precedent; a past root-cause finding does not prove the cause of the current incident.

| Document | Document type | Scope / version | Evidence role | Provenance |
|---|---|---|---|---|
| [rca_2025_reflow_profile_drift.md](knowledge/rca_2025_reflow_profile_drift.md) | Past investigation report | Fictional 2025 incident, Plant A Line 1 / Power Module | Similar oven/material mechanism to assess, not proof of the current cause | Newly created Contoso training material |
| [rca_2024_connector_misalignment.md](knowledge/rca_2024_connector_misalignment.md) | Past investigation report | Fictional 2024 incident, Plant B Line 2 / Sensor Pack | Different line and mechanical mechanism; not support for a current oven cause | Newly created Contoso training material |

Both reports use the same sections: Summary, Symptom, Investigation, Root cause, Corrective action, and Lessons. Each is a short, one-page-style record using the glossary labels. The six required sections and lengths of 265 and 235 words were checked locally.
