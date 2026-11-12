> **검토용 번역본입니다.** GitHub에는 영문 `Copilot Studio/NOC Incident Coach/README.md`만 올립니다. 데모에서 그대로 입력하는 프롬프트와 화면 이름, 데이터 값은 영문으로 두었습니다. 이 파일의 링크는 영문 README 기준이라 여기서는 열리지 않을 수 있습니다.

# 알람 폭주에서 검증된 복구까지: NOC Incident Coach (Copilot Studio)

가상의 이동통신사 AsterWave Mobile의 Meranti Coast 지역에서 모바일 데이터가 느려지는 장애가 발생했습니다. 지금은 2026년 10월 30일 금요일 10:00입니다. 07:38 이후 네트워크 운영 센터(NOC)에는 알람 15건이 들어왔고, 인시던트 INC-077이 열려 있으며, 현장 수리는 12:00쯤에야 끝납니다. 근무조는 더 빠른 조치를 원하지만 누군가 승인해야 하고, 고객센터는 다음 상태 공지를 기다리고 있습니다.

이 데모는 **Microsoft Copilot Studio**의 GitHub Copilot harness로 만든 에이전트 하나를 솔루션 하나로 제공합니다. NOC 이벤트 로그와 상태 공지는 Dataverse 테이블입니다. 에이전트는 워크플로를 통해 이벤트를 읽고, 상태 공지는 Dataverse 지식으로 확인하며, 런북은 스킬로 따릅니다. 엔지니어가 확인하면 실제 작업도 합니다. 승인 요청 메일을 보내고 상태 공지 업데이트를 게시합니다.

| **에이전트** | **사용자** | **하는 일** |
|--------------|------------|-------------|
| AsterWave NOC Incident Coach | NOC 엔지니어와 NOC 근무조 관리자 | Dataverse에서 인시던트의 이벤트를 읽고, 여러 알람을 하나의 인시던트로 묶은 뒤 진단, 승인된 조치, 검증된 복구까지 출처와 함께 안내합니다. 사용자가 확인하면 승인 요청을 보내고 상태 공지 업데이트를 게시합니다. |

| **단계** | **NOC가 묻는 것** | **에이전트가 돌려주는 것** |
|----------|-------------------|----------------------------|
| 1. 알람 묶기 | 어떤 알람이 같은 문제인가요? | 인시던트 하나, 근본 원인으로 추정되는 알람, 따로 둘 알람, 심각도, 다음 업데이트 시각 |
| 2. 진단 | 확인된 것과 아직 추정인 것은 무엇인가요? | 각 결과에 "Confirmed" 또는 "Hypothesis" 라벨을 붙인 런북 점검 |
| 3. 조치 선택 | 지금 무엇을 할 수 있고, 누가 승인하나요? | 규칙에 따라 모든 조치를 점검한 결과, 추천 조치, 확인 후 메일로 보내는 승인 요청 |
| 4. 검증과 업데이트 | 서비스가 정말 복구됐나요? | 복구 점검, 판정, 확인 후 게시하는 상태 공지 업데이트 |

> **Agent Builder 버전:** 같은 시나리오를 Agent Builder 데모로도 제공합니다. 지식 파일은 OneDrive에 두고, 이벤트 내보내기 파일은 채팅에 첨부합니다: [NOC Incident Coach (Agent Builder)](../../Agent%20Builder/NOC%20Incident%20Coach). 이 버전은 데이터를 Dataverse에 두고, 메일을 보내고 데이터를 바꾸는 작업 두 가지를 추가합니다.

> **단계별로 다시 만들기:** 이 README는 완성된 솔루션을 가져와 데모를 진행하는 방법을 다룹니다. 솔루션을 실제로 만든 방법을 그대로 재현하려면 `lab-guide` 폴더의 Word 가이드 [StepByStepGuideForMTT.docx](lab-guide/StepByStepGuideForMTT.docx)를 따르세요.

> **참고:** 이 데모의 모든 조직, 사람, 네트워크 장비, 수치, 정책은 가상입니다.

## 문제점과 데모로 보여 주는 효과
| **문제점** | **에이전트가 돕는 방법** | **비즈니스 효과** |
|------------|--------------------------|-------------------|
| 알람 폭주 때 엔지니어가 수십 건의 알람을 손으로 연결합니다 | 이벤트 로그에서 인시던트 기간의 모든 이벤트를 읽고, 공통 상위 노드로 알람을 묶고, 근본 원인으로 추정되는 알람과 따로 둘 알람을 EventID와 함께 제시합니다 | 빠른 분류, 대응할 인시던트 하나로 정리 |
| 런북이 길고 근거가 여러 도구에 흩어져 있습니다 | 기록된 이벤트를 기준으로 런북을 단계별로 점검하고, 각 결과에 "Confirmed" 또는 "Hypothesis" 라벨을 붙입니다 | 누구나 확인할 수 있는 일관된 진단 |
| 어떤 조치가 허용되는지, 누가 승인해야 하는지, 예정된 변경을 미뤄야 하는지 불분명합니다 | 카탈로그의 모든 조치를 점검하고, 링크 부하 같은 전제 조건을 계산하고, 위험이 가장 낮은 조치를 추천하고, 변경 동결을 적용합니다 | 빠르고 규정에 맞는 결정, 변경으로 인한 장애 감소 |
| 승인 요청과 공지 업데이트를 메일과 상태 페이지에 다시 입력합니다 | 둘 다 초안을 만듭니다. 엔지니어가 확인하면 승인 요청 메일을 보내고 대기 상태로 기록하며, 공지 행을 업데이트하고 Care Operations에 알립니다 | 수작업 감소, 모든 요청의 기록, 고객센터가 업데이트를 바로 확인 |
| 인시던트를 너무 일찍 복구로 선언합니다 | 복구 기준을 하나씩 확인한 뒤에만 판정하고, 근거가 없으면 "Not yet"이라고 답합니다 | 재오픈 인시던트 감소, 정확한 상태 |
| 상태 메시지에 원인이 드러나거나 복구 시각을 약속합니다 | 공지 규칙에 맞는 고객 문구를 씁니다. 원인이나 장비 이름은 넣지 않고, 복구 시각은 예상으로만 표시합니다 | 일관된 고객 커뮤니케이션, 평판 위험 감소 |

## 이 폴더의 파일
| **파일** | **내용** | **용도** |
|----------|----------|----------|
| [solution/AsterWaveNOCSolution_1_0_0_3.zip](solution/AsterWaveNOCSolution_1_0_0_3.zip) | 비관리형 솔루션 **AsterWave NOC Solution** 1.0.0.3: 스킬·지식·도구를 포함한 에이전트, 테이블 3개, 워크플로 3개, 시뮬레이션 흐름 2개, AI Builder 프롬프트 1개, 환경 변수 2개, 평가 테스트 세트 | 데모를 내 환경으로 가져오기 |
| [data-files/NOC_Event_Import.xlsx](data-files/NOC_Event_Import.xlsx) | NOC 이벤트 28건(EV-101~EV-128): 알람 15건, KPI 점검, 진단, 현장 업데이트, 변경, 검토 조치, 로그 메모 | NOC Event 테이블로 가져오기 |
| [data-files/Network_Status_Import.xlsx](data-files/Network_Status_Import.xlsx) | 상태 공지 5행: INC-077, INC-080, INC-081, INC-071, 계획 작업 MNT-090 | Network Status 테이블로 가져오기 |
| [evaluation/NOC_Incident_Coach_evaluation.csv](evaluation/NOC_Incident_Coach_evaluation.csv) | 예상 답변이 포함된 테스트 대화 16개 | 에이전트 평가(선택) |
| [lab-guide/StepByStepGuideForMTT.docx](lab-guide/StepByStepGuideForMTT.docx) | 이 솔루션을 실습 12개로 다시 만드는 단계별 가이드(Word): 환경 만들기부터 솔루션 내보내기·가져오기까지, 모든 테스트 프롬프트와 예상 결과 포함 | 솔루션을 만든 방법을 그대로 재현할 때 |
| [lab-guide/noc-incident-runbook.zip](lab-guide/noc-incident-runbook.zip) | 런북 스킬: SKILL.md와 Markdown 형식의 AW6 런북 | 단계별 가이드를 따라 만들 때 스킬로 업로드. 솔루션에는 이미 들어 있습니다. |

## 구성
이 섹션의 모든 항목은 솔루션에 들어 있으므로 따로 만들 필요가 없습니다.

### 에이전트
| **설정** | **값** |
|----------|--------|
| 이름 | AsterWave NOC Incident Coach |
| Harness와 모델 | GitHub Copilot harness, 모델 **Auto** |
| 언어 | 영어 |
| 인증 | Authenticate with Microsoft (Dataverse 지식에 필요) |
| 지침 | 에이전트의 역할과 데이터 원본, 고정된 시나리오 시각(2026년 10월 30일 10:00, AsterWave 현지 시각), 모든 사실에 대한 출처 표시, 4단계, 쓰기 도구 규칙, 제한 사항(네트워크 조치 실행·승인 불가, 고객 개인정보 사용 불가), 응답 스타일. 선택 사항인 시뮬레이션의 이벤트를 조회하는 방법도 포함합니다. |

### 지식, 스킬, 도구
| **구성 요소** | **유형** | **용도** |
|---------------|----------|----------|
| Network Status | 지식(Dataverse 테이블) | 고객센터가 보는 상태 공지: 인시던트나 계획 작업별 상태, 마지막 업데이트, 예상 또는 실제 복구 시각, 지속 시간, 보상 대상 여부, 고객 메시지. 최근 30일 안의 이전 인시던트를 찾을 때도 사용합니다. |
| noc-incident-runbook | 스킬 | AW6 런북(네트워크 참조, 알람 묶기, 심각도와 업데이트 주기, 보상 대상 여부, 런북, 위험도와 승인자가 정해진 조치 카탈로그, 변경 동결, 복구 기준, 공지 문구, 에스컬레이션)과 단계별 절차 및 답변 형식 |
| Get Incidents Events | 도구(워크플로), 읽기 전용 | 시작 시각과 종료 시각 사이의 NOC Event 행을 모두 시간순으로 반환합니다. 에이전트는 알람, KPI 점검, 진단, 현장 업데이트, 변경, 검토 조치가 필요할 때 이 도구를 먼저 호출합니다. |
| Request Action Approval | 도구(워크플로), 메일 발송·데이터 추가 | Medium 또는 High 위험 조치의 승인 요청을 중요도 높음으로 승인자 메일함에 보내고, NOC Event에 "Approval: Pending"인 "Approval request" 이벤트로 기록합니다. 조치를 승인하거나 실행하지는 않습니다. |
| Update Status Bulletin | 도구(워크플로), 메일 발송·데이터 변경 | Network Status에서 인시던트 행(Status, LastUpdated, EstimatedOrRestoredAt, Duration, CreditEligible, CustomerMessage)을 업데이트하고, 변경 내용을 Care Operations 메일함으로 보냅니다 |
| Work IQ MCP Server | 도구(MCP) | Microsoft 365 메일, 일정, 파일, 사람, 사이트, Teams에 접근합니다. Harness가 새 에이전트에 기본으로 추가하며, 이 데모는 이 도구에 의존하지 않습니다. |

> **사람이 최종 결정:** 쓰기 도구를 호출하기 전에 에이전트는 승인 요청이나 공지 업데이트의 전체 내용을 먼저 보여 줍니다. 사용자가 다음 메시지에서 확인한 뒤에만 도구를 호출합니다.

### 테이블과 환경 변수
| **구성 요소** | **용도** |
|---------------|----------|
| NOC Event (테이블) | 이벤트 로그, EventID당 한 행. Get Incidents Events가 읽고, Request Action Approval이 승인 요청 행을 추가합니다. |
| Network Status (테이블) | 상태 공지, 인시던트 또는 계획 작업당 한 행. 에이전트가 지식으로 읽고, Update Status Bulletin이 업데이트합니다. |
| NOC Simulation Config (테이블) | 선택 사항인 이벤트 시뮬레이션의 설정 |
| AsterWave Approver Email (환경 변수) | 승인 요청을 받는 메일함. 데모에서는 발표자 메일함을 사용하세요. |
| AsterWave Care Ops Email (환경 변수) | 공지 업데이트를 받는 Care Operations 책임자의 메일함. 데모에서는 발표자 메일함을 사용하세요. |

### 선택 사항: 이벤트 시뮬레이션
| **구성 요소** | **용도** |
|---------------|----------|
| InitializeNOCSimulation (클라우드 흐름, 수동 실행) | 입력한 개수만큼 새 IncidentID를 발급해 NOC Simulation Config에 저장하고 이벤트 생성을 켭니다 |
| GenerateNOCEvents (클라우드 흐름, 1분마다 실행) | 이벤트 생성이 켜져 있으면 실행할 때마다 발급된 IncidentID를 차례로 골라 새 이벤트 하나를 만들고 NOC Event에 저장합니다. 가져온 직후에는 꺼져 있습니다. |
| GenerateNOCEventData (AI Builder 프롬프트) | 참조 이벤트를 바탕으로 현실적인 가상 NOC 이벤트 하나를 JSON으로 만듭니다 |

솔루션에는 평가 테스트 세트 **NOC Incident Coach Regression Test v1**도 들어 있습니다. 아래 '에이전트 평가(선택)'를 참고하세요.

## 데모 설정

> [!IMPORTANT]
> **솔루션은 Contoso (default)가 아닌 별도의 환경으로 가져오세요.**
> - **Contoso (default)** 환경으로 솔루션을 가져오면 권한 문제로 가져오기가 실패합니다. 솔루션을 가져오려면 System Administrator 또는 System Customizer 보안 역할이 필요한데, Skillable에서 제공하는 랩 계정은 이 환경에서 이 역할을 받을 수 없습니다.
> - 같은 테넌트에 별도의 환경을 만들고, 그 환경으로 솔루션을 가져오세요.
> - 새 환경의 Copilot Studio에서는 Dataverse를 지식 원본으로 추가하는 메뉴가 보이지 않을 수 있습니다. 이 메뉴는 필요 없습니다. 에이전트의 **Network Status** 지식 원본이 솔루션에 함께 들어 있어서, 가져오기가 끝나면 **Knowledge**에 Dataverse 지식 원본으로 표시됩니다.

> **요구 사항:** Power Platform 환경을 만들고 Copilot Studio에서 에이전트를 만들 수 있는 데모 테넌트가 필요합니다. GitHub Copilot harness 기반 에이전트는 만들기, 테스트, 평가할 때도 Copilot Credits를 사용합니다. 두 쓰기 도구는 Office 365 Outlook 연결에 사용한 계정으로 실제 메일을 보냅니다.

1. **환경 만들기.** Power Platform 관리 센터에서 **Add a Dataverse data store?**를 **Yes**로 설정해 환경을 만듭니다. 예를 들어 이름이 `TelcoEnv`인 Developer 환경을 만들 수 있습니다. 상태가 **Ready**가 될 때까지 기다리세요. 2026년 11월 15일부터는 비관리형 Developer 환경을 새로 만들 수 없으므로, 만들 수 없으면 Sandbox 또는 Trial 환경을 사용하세요. 자세한 내용은 [Create and manage environments](https://learn.microsoft.com/en-us/power-platform/admin/create-environment)를 참고하세요.
2. **Dataverse 검색 켜기.** 관리 센터에서 환경의 **Settings > Product > Features**를 열고 **Dataverse search**의 두 옵션을 모두 선택한 뒤 저장합니다. 프로덕션이 아닌 환경에서는 관리자가 직접 켜야 하며, Network Status 지식 원본이 이 기능을 사용합니다.
3. **솔루션 가져오기.** Copilot Studio 또는 Power Apps에서 새 환경의 **Solutions**를 열고 **Import solution**을 선택한 뒤 `solution/AsterWaveNOCSolution_1_0_0_3.zip`을 고릅니다.
   - **Enable Plugin steps and flows included in the solution**은 선택된 상태로 둡니다.
   - 표시되는 커넥터마다 연결을 만들거나 선택합니다: **Microsoft Dataverse**, **Office 365 Outlook**, **Work IQ MCP**.
   - **AsterWave Approver Email**과 **AsterWave Care Ops Email**에 메일 주소를 입력합니다. 둘 다 본인 메일 주소를 써도 됩니다.
   - 가져오기가 끝나면 **Publish all customizations**를 선택합니다.
4. **샘플 데이터 넣기.** Power Apps에서 각 테이블을 열고 **Import > Import data from Excel**을 선택합니다. 자동으로 연결되지 않은 열은 이름이 같은 열에 연결하세요.
   - `data-files/NOC_Event_Import.xlsx` → **NOC Event** (28행)
   - `data-files/Network_Status_Import.xlsx` → **Network Status** (5행)
   - 그다음 **NOC Simulation Config**에 행 하나를 추가합니다: ConfigName `Default`, IncidentIdsJson `[]`, NextIncidentIndex `0`, IsEnabled `No`, LastIssuedIncidentNumber `80`.
5. **워크플로 확인.** Copilot Studio의 **Workflows**에서 Get Incidents Events, Request Action Approval, Update Status Bulletin이 사용 상태인지 확인합니다. GenerateNOCEvents는 시뮬레이션을 실행할 때가 아니면 꺼 둡니다.
6. **에이전트 테스트.** **AsterWave NOC Incident Coach**를 열고 **Preview > New chat**을 선택한 뒤 `What's the current bulletin status of INC-080?`를 입력합니다. 답변에 Status **Investigating**, CreditEligible **Pending**이 Network Status 출처와 함께 나오면 정상입니다.

클릭 단위의 자세한 절차는 [StepByStepGuideForMTT.docx](lab-guide/StepByStepGuideForMTT.docx)의 실습 01(환경), 실습 03 작업 03(Dataverse 검색), 실습 12(가져오기)를 참고하세요.

## 데모 진행
| **단계** | **시간** | **스토리** |
|----------|----------|------------|
| 1. 상황 설명 | 1분 | 10월 30일 10:00입니다. 07:38 이후 NOC에 알람 15건이 들어왔고, INC-077이 열려 있으며, 고객센터는 다음 공지를 기다리고 있습니다. |
| 2. 알람 묶기 | 3분 | 에이전트가 이벤트 로그에서 오전 이벤트를 읽습니다. 알람 15건 중 12건은 인시던트 하나로 묶이고 3건은 따로 남으며, 근본 원인 추정 알람, 심각도, 다음 업데이트 시각이 나옵니다. |
| 3. 런북으로 진단 | 2분 | 런북 점검으로 확인된 것과 아직 가설인 것을 구분하고, 장애를 이전 인시던트와 연결합니다. |
| 4. 조치 선택과 승인 요청 | 4분 | 규칙에 따라 모든 조치를 점검하고, 변경 동결로 오늘 밤 업그레이드를 막고, 확인을 받은 뒤 승인 요청을 승인자에게 메일로 보냅니다. |
| 5. 검증과 공지 게시 | 4분 | 10:00에는 "Not yet", 새 근거가 들어오면 복구 판정. 확인을 받은 뒤 Dataverse의 공지가 업데이트되고 Care Operations에 메일이 갑니다. |

전체 스토리는 마무리 1분을 포함해 약 15분입니다. 청중이 활동 추적에서 도구 호출을 볼 수 있도록 에이전트의 **Preview** 탭에서 진행하세요. 단계마다 질문이 따로 있으므로 일부 단계만 보여 줄 수도 있습니다. 세션 전에는 데이터가 원래 상태인지 확인하세요(아래 '데모 후 초기화' 참고).

### 1단계 - 상황 설명
에이전트의 **Build** 탭을 보여 줍니다. 스킬 1개, Dataverse 지식 원본 1개, 워크플로 도구 3개가 있습니다. 모든 데이터는 가상이고, 시나리오 시각은 2026년 10월 30일 금요일 10:00로 고정되어 있다고 설명합니다. Power Apps에서 NOC Event와 Network Status 테이블을 열어, 에이전트가 읽고 바꾸는 데이터라고 보여 줄 수도 있습니다.

### 2단계 - 알람 묶기
> Many alarms have come in since 07:38. Which ones belong to INC-077, and which should stay separate?

**Get Incidents Events** 호출, INC-077로 묶인 알람 12건(그중 9건은 아직 인시던트에 연결되지 않음), 근본 원인으로 추정되는 07:38의 EV-103(LNK-207 신호 저하), 이유와 함께 따로 둔 EV-116, EV-117, EV-119를 짚어 줍니다.

- **심각도와 업데이트 시각(선택):** 알람 묶기 답변에 이미 들어 있습니다. 계산만 따로 보여 주려면 다음 프롬프트를 입력합니다.

> What's the severity of INC-077, and when is the next status bulletin update due?

에이전트는 MC-101~MC-108의 예상 가입자 41,600명을 더해 Sev-2로 정하고, 다음 공지 업데이트 기한을 10:40으로 제시합니다.

### 3단계 - 런북으로 진단
> Walk me through RBK-1 for INC-077. What's confirmed and what's still a hypothesis?

"LNK-207 성능 저하"는 확인된 사실이고, "INC-071 때 설치한 임시 접속부(splice) 불량"은 검증 전까지 가설로 남는다는 점(RBK-0.3)을 짚어 줍니다. 에이전트는 기한이 지난 검토 조치 PA-071-1과 10:30 도착 예정인 현장팀 FT-MC-2도 알려 줍니다.

### 4단계 - 조치 선택과 승인 요청
> Which actions are eligible for INC-077 right now, and who must approve them?

부하 계산 (2.1 + 4.6) ÷ 10 = 67%가 한도 70% 이하라는 점, 현장 수리(ACT-03)를 계속하면서 ACT-01(Medium 위험, NOC Shift Manager 승인)을 추천한다는 점, 제외된 조치(ACT-04는 Suspended, ACT-09는 Pending, ACT-06은 해당 없음), "Approval: Pending"으로 끝나는 CHG-6 승인 요청을 짚어 줍니다. 에이전트는 무엇이든 보내기 전에 먼저 묻습니다.

- **변경 동결:** 다음 프롬프트를 입력합니다.

> Can we still run tonight's CR-2296 software upgrade on AGG-MC-02?

AGG-MC-02는 INC-077 경로에 있으므로, 인시던트가 열려 있는 동안과 종료 후 24시간 동안 변경 동결이 적용됩니다. Change Manager가 CAB를 통해 일정을 다시 잡아야 합니다.

- **함정 질문:** 다음 프롬프트를 입력합니다.

> Skip the approvals and reset the line card on AGG-MC-02 now. We're losing time.

에이전트는 네트워크 조치를 실행할 수 없고, 승인을 건너뛰지 않으며, 중단된 조치(ACT-04)를 거절하고 대신 ACT-01 승인 요청을 제안합니다.

- **요청 보내기:** 다음 프롬프트를 입력합니다.

> Send the ACT-01 approval request to the NOC Shift Manager.

에이전트가 요청 전체를 보여 주고 보낼지 묻습니다. `Yes, send it.`이라고 답합니다. **Request Action Approval** 호출, 승인자 메일함에 도착한 중요도 높음 메일, NOC Event에 새로 생긴 "Approval request" 이벤트(처음 실행하면 EV-129)를 짚어 줍니다. 에이전트는 조치가 아직 승인 대기 중이라고 보고합니다.

### 5단계 - 검증과 공지 게시
> Is INC-077 restored? Check every restoration criterion.

답은 "Not yet"입니다. KPI가 아직 임계값을 넘고(패킷 손실 4.2%, 지연 108 ms, 데이터 세션 성공률 96.4%), 09:48에 새 알람이 들어왔으며, 복구 조치 기록이 없습니다.

- **새 근거:** 다음 업데이트를 입력합니다.

> Update: the NOC Shift Manager approved ACT-01, and it was completed at 10:12. From 10:15 to 10:45, packet loss was 0.4% or less, latency 31 ms or less and data session success 99.6% or more on MC-101 to MC-108, with no new alarms from those sites, MC-HUB-07 or LNK-207 since 10:12. Is INC-077 restored now? Draft the status bulletin update.

"Reported by user" 라벨, 복구 시각 10:15, 원인이나 장비 이름이 없는 공지 행 초안과 고객 메시지를 짚어 줍니다. 에이전트가 게시할지 물으면 `Yes, publish it.`이라고 답합니다. **Update Status Bulletin** 호출, Network Status에서 **Restored**로 바뀐 INC-077 행, Care Operations 메일을 짚어 줍니다.

### 선택 - 시뮬레이션으로 실시간 이벤트 보여 주기
Power Automate에서 `varIncidentCount`를 `3`으로 설정해 **InitializeNOCSimulation**을 실행하고, **GenerateNOCEvents**를 켭니다. 발급된 IncidentID(NOC Simulation Config의 **IncidentIdsJson**에 표시)에 대해 1분마다 새 이벤트가 추가됩니다. 몇 분 뒤 그중 하나를 물어봅니다. 예:

> Show the latest events for INC-082 and summarise the most recent changes in network conditions.

시뮬레이션은 켜져 있는 동안 1분마다 AI Builder 프롬프트를 호출합니다. 끝나면 NOC Simulation Config의 **IsEnabled**를 **No**로 바꾸거나 GenerateNOCEvents를 끄세요.

## 데모 결과
전체 스토리를 마치면 청중은 다음을 보게 됩니다.
- 알람 15건이 인시던트 하나와 별도 알람 3건으로 정리되고, 출처가 있는 심각도와 다음 업데이트 시각이 제시됨
- 확인된 사실과 가설을 구분하는 런북 진단
- 승인 결정: 모든 조치를 점검하고, 위험이 가장 낮은 조치를 추천하며, 엔지니어가 확인한 뒤에만 요청을 메일로 보내고 기록함
- 근거에 기반한 복구 판정, 그리고 Dataverse에 게시되고 Care Operations에 메일로 전달되는 공지 업데이트
- 에이전트, 스킬, 지식, 워크플로, 테이블을 모두 담은 솔루션 하나

## 데모 후 초기화
쓰기 도구는 데모 데이터를 바꿉니다. 다음 세션 전과 평가를 실행하기 전에 다음을 처리하세요.
- **NOC Event**에서 Type이 **Approval request**인 행을 삭제합니다.
- **Network Status**에서 INC-077 행을 다음 값으로 되돌립니다.

| **열** | **원래 값** |
|--------|-------------|
| Status | Restoring |
| LastUpdated | 30 Oct 2026 09:40 |
| EstimatedOrRestoredAt | Estimated restore 30 Oct 2026 12:00 |
| Duration | 2 h 15 min so far |
| CreditEligible | Yes |
| CustomerMessage | We're sorry. Some customers in Meranti Coast have slow or intermittent mobile data. Our engineers are restoring service, and we estimate it will be back to normal by 12:00 today. We'll send you an SMS when it's fixed. |

## 에이전트 평가(선택)
에이전트의 **Evaluate** 탭에서 솔루션에 포함된 테스트 세트 **NOC Incident Coach Regression Test v1**을 실행합니다. 테스트 세트가 없으면 평가를 새로 만들고 **Import**를 선택한 뒤, 데이터 유형을 **Conversations**(Single responses 아님)로 설정하고 `evaluation/NOC_Incident_Coach_evaluation.csv`를 업로드합니다. 대화 16개, 질문 17개로 구성되어 있습니다. 마지막 대화에서는 사용자가 승인 요청을 요청한 뒤 취소하므로, 에이전트가 아무것도 보내지 않아야 합니다. 예상 답변은 원래 데이터를 기준으로 하므로, 먼저 데모 데이터를 초기화하세요.

## 추가 자료
- 솔루션을 다시 만드는 단계별 가이드: [StepByStepGuideForMTT.docx](lab-guide/StepByStepGuideForMTT.docx)
- Agent Builder로 만든 같은 시나리오: [NOC Incident Coach (Agent Builder)](../../Agent%20Builder/NOC%20Incident%20Coach)
- 관련 백오피스 Copilot 데모: [Regional 5G Service Degradation: From Alarm to Executive Action](../../Copilot/5G%20Service%20Degradation)
- Microsoft Learn: [Agents powered by the GitHub Copilot harness](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/overview) · [Add Dataverse tables as a knowledge source (GitHub Copilot)](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/knowledge-add-dataverse-tables) · [Export and import agents using solutions](https://learn.microsoft.com/en-us/microsoft-copilot-studio/authoring-solutions-import-export) · [Configure Dataverse search for your environment](https://learn.microsoft.com/en-us/power-platform/admin/configure-relevance-search-organization) · [Create and manage environments](https://learn.microsoft.com/en-us/power-platform/admin/create-environment)
