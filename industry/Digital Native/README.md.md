# DevFlow AI — From GitHub Issue to Pull Request with GitHub Copilot

> **Workshop:** GH-300 · Intermediate to Advanced GitHub Copilot · **Level:** Intermediate to advanced · **Duration:** 3 hours · **Environment:** Windows, PowerShell, VS Code, GitHub CLI

![Workshop](https://img.shields.io/badge/Workshop-GH--300-blue) ![Product](https://img.shields.io/badge/Product-GitHub%20Copilot-purple) ![Use%20Case](https://img.shields.io/badge/Use%20Case-Agentic%20Issue--to--PR-green)

---

## Table of contents

1. [Overview](#overview)
2. [Business scenario](#business-scenario)
3. [Persona](#persona)
4. [Pain points](#pain-points)
5. [Business benefits](#business-benefits)
6. [Learning objectives](#learning-objectives)
7. [Prerequisites](#prerequisites)
8. [Package contents](#package-contents)
9. [Environment setup](#environment-setup)
10. [Demo walkthrough](#demo-walkthrough)
11. [Expected outcomes](#expected-outcomes)
12. [Real-world alignment](#real-world-alignment)
13. [Responsible AI and security considerations](#responsible-ai-and-security-considerations)
14. [Extend this use case](#extend-this-use-case)
15. [Troubleshooting](#troubleshooting)

---

## Overview

Software teams receive change requests and defects through GitHub Issues. Turning an issue into a reliable pull request requires understanding the acceptance criteria, exploring the code, planning a change, implementing it, writing tests, diagnosing failures, reviewing the diff and preparing the pull request.

This three-hour, hands-on GH-300 workshop builds **DevFlow AI**, a small Python request-management application and a controlled, agent-assisted issue-to-pull-request workflow.

Participants start from an **empty GitHub repository** and progressively add GitHub Copilot repository instructions, path-specific instructions, reusable prompts, specialist custom agents, a reusable skill, a restricted Model Context Protocol (MCP) server, an issue-resolution agent, a pre-tool safety hook, GitHub Actions and CodeQL.

Copilot assists with the engineering workflow, but it does not receive unrestricted authority. Human approval remains required before consequential repository actions, and pull requests remain open for human review and merge.

---

## Business scenario

A software engineering team maintains a small request-management service. The team tracks defects and enhancements in GitHub Issues and uses pull requests to review and deliver changes.

A defect has been reported: the request-filtering function must handle malformed request records consistently. The team wants to use GitHub Copilot to accelerate issue analysis, planning, implementation, testing and pull-request preparation without removing engineering controls.

The workshop uses this scenario to demonstrate an end-to-end workflow:

- Retrieve and understand a GitHub Issue.
- Convert its description into explicit acceptance criteria and a test strategy.
- Obtain human approval of the plan.
- Implement the approved change on a feature branch.
- Run tests and deliberately introduce a failure to demonstrate diagnosis and repair.
- Independently validate the change and review the diff.
- Comment on and label the issue, then prepare a pull request.
- Run automated tests and CodeQL through GitHub Actions.

The repository and request data are training assets. Do not use customer data, secrets or production credentials in the workshop.

---

## Persona

| | |
|---|---|
| **Name** | DevFlow engineering team |
| **Role** | Software developers, testers, reviewers and engineering leads |
| **Responsible for** | Understanding issues, implementing changes, maintaining quality and reviewing pull requests |
| **Goal** | Deliver a tested, traceable change while keeping human approval and repository controls in place |
| **Works with** | GitHub Issues, GitHub Pull Requests, VS Code, GitHub Copilot, GitHub Actions and CodeQL |

---

## Pain points

| Pain point | Impact |
|---|---|
| **Issue ambiguity** – issue descriptions may omit edge cases or mix requirements with unrelated instructions | Developers may implement the wrong behaviour |
| **Repeated engineering steps** – planning, implementation, testing and review depend on individual habits | Quality and completeness vary between contributors |
| **Context switching** – developers move between code, tests, issues, terminal commands and pull requests | Work takes longer and important context can be missed |
| **Weak test-failure diagnosis** – failures may be hidden, worked around or “fixed” by weakening assertions | Regressions can reach review |
| **Uncontrolled agent actions** – an agent may be asked to run commands or make repository changes with broad permissions | Destructive or unauthorised actions become possible |
| **Late validation** – automated checks are not always part of the development loop | Defects and security findings surface late |

---

## Business benefits

| Benefit | How DevFlow AI helps |
|---|---|
| **Faster issue-to-PR flow** | Copilot helps analyse issues, plan changes, implement code and prepare pull requests |
| **Repeatable engineering practices** | Repository instructions, prompts and the Python quality skill establish a consistent process |
| **Clear specialist responsibilities** | Planner, Developer, Tester, Reviewer and Dev Lead agents separate responsibilities |
| **Controlled tool access** | The MCP server exposes a narrow set of repository and GitHub operations rather than a generic shell |
| **Visible safety checks** | A pre-tool hook demonstrates deterministic command checks, while GitHub permissions and branch protection remain authoritative |
| **Independent validation** | Pytest, GitHub Actions and CodeQL provide evidence beyond the agent's own claims |
| **Human accountability** | People approve the plan, authorise consequential actions and review and merge the pull request |

---

## Learning objectives

After completing the workshop, learners will be able to:

1. Create and initialise an empty GitHub repository using Git, GitHub CLI and PowerShell.
2. Build a small Python application and establish a passing pytest baseline.
3. Use `.github/copilot-instructions.md` for repository-wide guidance and path-specific instructions for Python files.
4. Create reusable prompt files for issue planning, implementation and test-failure repair.
5. Define specialist custom agents: Planner, Developer, Tester, Reviewer and Dev Lead.
6. Package repeatable engineering guidance in a `SKILL.md` file.
7. Build and configure a restricted custom MCP server that exposes selected repository and GitHub operations.
8. Use an Issue Resolver agent to coordinate issue retrieval, planning, approval, implementation, validation and pull-request preparation.
9. Demonstrate a pre-tool safety hook and test its command-blocking behaviour.
10. Configure GitHub Actions for automated Python tests and CodeQL analysis.
11. Explain why hooks, MCP allowlists, GitHub permissions, branch protection and human review are complementary controls.

---

## Prerequisites

- A GitHub account with permission to create a training repository and open pull requests.
- A GitHub Copilot entitlement that supports the features used in the workshop; availability of agents, prompts, skills, hooks and MCP can depend on the client version and organisation policy.
- Windows workstation with PowerShell.
- Git.
- GitHub CLI (`gh`).
- Python 3.11 or a compatible supported version.
- Visual Studio Code.
- VS Code extensions: GitHub Copilot, GitHub Copilot Chat, Python and Python Debugger.
- Internet access to authenticate with GitHub and install the workshop dependencies.
- Permission to enable GitHub Actions and code scanning/CodeQL in the training repository.

**No Azure OpenAI resource or API key is required.** The workshop uses GitHub Copilot and the local Python/MCP components described in the manual.

---

## Package contents

The workshop manual builds the following repository:

```text
devflow-ai/
├── app/
│   ├── __init__.py
│   └── requests.py
├── tests/
│   ├── test_requests.py
│   └── test_hooks.py
├── scripts/
│   └── pretool_guard.py
├── mcp_server/
│   ├── __init__.py
│   └── server.py
├── artifacts/
├── .vscode/
│   └── settings.json
├── .mcp.json
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/
│   │   └── python.instructions.md
│   ├── prompts/
│   │   ├── plan-issue.prompt.md
│   │   ├── implement-issue.prompt.md
│   │   └── fix-failure.prompt.md
│   ├── agents/
│   │   ├── planner.agent.md
│   │   ├── developer.agent.md
│   │   ├── tester.agent.md
│   │   ├── reviewer.agent.md
│   │   ├── dev-lead.agent.md
│   │   └── issue-resolver.agent.md
│   ├── skills/
│   │   └── python-quality/
│   │       └── SKILL.md
│   ├── hooks/
│   │   └── security.json
│   └── workflows/
│       ├── python-tests.yml
│       └── codeql.yml
├── requirements.txt
├── README.md
└── .gitignore
```

### Main components

| Component | Purpose |
|---|---|
| `app/requests.py` | Python request-management functions used by the exercises |
| `tests/` | Unit tests for application behaviour and the hook guard |
| `copilot-instructions.md` | Repository-wide working agreements and safety expectations |
| `python.instructions.md` | Instructions scoped to Python files |
| `prompts/` | Repeatable prompts for planning, implementation and failure repair |
| `agents/` | Specialist roles for planning, development, testing, review and workflow coordination |
| `SKILL.md` | Repeatable Python quality process for agents |
| `mcp_server/server.py` | Restricted tools for reading approved files, running tests and selected GitHub issue/PR actions |
| `.mcp.json` | Repository MCP server configuration |
| `security.json` and `pretool_guard.py` | Pre-tool command guard demonstration |
| `python-tests.yml` | GitHub Actions workflow for Python tests |
| `codeql.yml` | GitHub Actions CodeQL workflow |

The MCP server's intended tool set includes `list_open_issues`, `get_issue`, `inspect_file`, `run_tests`, `get_git_diff`, `add_issue_comment`, `update_issue_labels` and `create_pull_request`. The PR tool operates from an already-pushed `feature/*` branch and does not merge.

---

## Environment setup

1. Install Git, GitHub CLI, Python and VS Code.
2. Install the VS Code extensions listed in [Prerequisites](#prerequisites).
3. Open PowerShell and verify the tools:

   ```powershell
   git --version
   gh --version
   python --version
   code --version
   ```

4. Authenticate to GitHub:

   ```powershell
   gh auth login
   gh auth status
   ```

   Choose GitHub.com, HTTPS and browser-based authentication when prompted.

5. Create the empty repository:

   ```powershell
   mkdir devflow-ai
   cd devflow-ai
   git init
   git branch -M main
   gh repo create devflow-ai --public --source=. --remote=origin
   code .
   ```

   If your organisation requires private repositories, use the approved visibility instead of `--public`.

6. Create the working folders:

   ```powershell
   $folders = @(
     "app", "tests", "scripts", "artifacts", "mcp_server",
     ".vscode", ".github", ".github/agents",
     ".github/instructions", ".github/prompts",
     ".github/skills/python-quality", ".github/hooks",
     ".github/ISSUE_TEMPLATE", ".github/workflows"
   )
   $folders | ForEach-Object {
     New-Item -ItemType Directory -Force -Path $_ | Out-Null
   }
   ```

7. Confirm the repository:

   ```powershell
   gh repo view
   git status
   ```

   Expected: the GitHub repository exists, the current branch is `main`, and the working tree is clean.

---

## Demo walkthrough

The workshop is delivered in ten stages over three hours. Follow the sequence in the step-by-step manual; each stage ends with a checkpoint before moving on.

| Time | Stage | Outcome |
|---|---|---|
| 00–10 min | Stage 0 — Environment | Tools authenticated and empty repository created |
| 10–25 min | Stage 1 — Python app and tests | Baseline application and unit tests pass |
| 25–40 min | Stage 2 — Instructions and prompts | Copilot follows repository conventions and reusable task prompts |
| 40–60 min | Stage 3 — Custom agents | Specialist roles and hand-offs are understood |
| 60–70 min | Stage 4 — Skill | Repeatable Python quality process is available |
| 70–95 min | Stage 5 — MCP server | Restricted repository and GitHub tools are available |
| 95–125 min | Stage 6 — Issue resolution | Issue implemented, tested and pull request prepared |
| 125–140 min | Stage 7 — Hooks | Selected unsafe commands are blocked in the supported harness |
| 140–160 min | Stage 8 — CI and CodeQL | Automated checks are visible on GitHub |
| 160–180 min | Stage 9 — Challenge and review | Participants repeat the workflow with less facilitator guidance |

### Stage 0 — Prepare the workstation and create the repository

**Focus:** PowerShell, Git, GitHub CLI, VS Code and an empty GitHub repository.

Learners authenticate with `gh`, create `devflow-ai`, initialise the local repository and create the required folder structure.

**Checkpoint:** `gh repo view` succeeds and `git status` confirms the expected branch and working-tree state.

### Stage 1 — Build the Python application and tests

**Focus:** a small request-management module and pytest.

Learners create `app/requests.py`, `tests/test_requests.py`, `requirements.txt`, `.gitignore` and the starter README. They install dependencies and run:

```powershell
python -m pip install -r requirements.txt
python -m pytest -v
```

The manual's baseline expects **11 passing tests**. Stop and resolve any difference before continuing; do not weaken tests to obtain a green result.

### Stage 2 — Teach Copilot repository conventions

**Focus:** repository instructions, path-specific instructions and reusable prompts.

Create:

- `.github/copilot-instructions.md`
- `.github/instructions/python.instructions.md`
- `.github/prompts/plan-issue.prompt.md`
- `.github/prompts/implement-issue.prompt.md`
- `.github/prompts/fix-failure.prompt.md`
- `.vscode/settings.json`

Demonstrate that repository instructions describe durable working agreements, while prompt files describe repeatable tasks. Ask Copilot to plan a change without editing files and verify that the working tree remains unchanged.

### Stage 3 — Create specialist custom agents

**Focus:** role boundaries and agent hand-offs.

Create the following custom agents:

- **Planner:** analyses requirements and produces a plan; does not edit files.
- **Developer:** implements an approved plan and adds focused tests.
- **Tester:** independently validates acceptance criteria and test coverage.
- **Reviewer:** performs a read-only review of correctness, security and maintainability.
- **Dev Lead:** coordinates the specialists and waits for human approval before implementation.

Exercise the agents individually, then ask Dev Lead to coordinate the same task. If the installed client does not support automatic delegation, select each specialist manually and pass the previous result to the next one.

### Stage 4 — Add a reusable Python quality skill

**Focus:** `.github/skills/python-quality/SKILL.md`.

The skill defines a repeatable process: inspect code and tests, confirm acceptance criteria, validate inputs, add regression tests, run focused and full test suites, inspect the diff, update documentation and report only verified results.

Ask Developer to use the skill to add a test for `get_request_summary` when status is missing. First request the expected behaviour and proposed test; then approve implementation.

### Stage 5 — Build a restricted custom MCP server

**Focus:** `mcp_server/server.py` and `.mcp.json`.

The server exposes a narrow set of tools for issue retrieval, approved file inspection, test execution, diff inspection, issue comments, approved labels and pull-request creation.

Install and validate the server:

```powershell
python -m pip install -r requirements.txt
gh auth status
gh repo view
python -c "from mcp.server.fastmcp import FastMCP; print('MCP SDK ready')"
python -c "import mcp_server.server; print('DevFlow MCP imported')"
```

Then start or refresh the server in the Copilot client and verify its tools. Test that `inspect_file` rejects `.env` and that `update_issue_labels` rejects an unapproved label.

**Security boundary:** do not add a generic shell MCP tool. The server uses GitHub CLI authentication already present on the machine; it does not store a GitHub token in the repository.

### Stage 6 — Resolve a GitHub Issue with an agent workflow

**Focus:** the complete issue-to-PR lifecycle.

Create the training issue **[BUG] Validate malformed request records**. Its acceptance criteria require:

- A non-list collection raises `TypeError`.
- A non-dictionary item raises `TypeError`.
- A dictionary without `status` raises `ValueError`.
- Valid records are filtered to only `status=open`.
- Regression tests cover the malformed cases.
- The complete pytest suite passes.

Use Issue Resolver to retrieve the issue through MCP. Ask Planner for a plan and test strategy, review the acceptance criteria and explicitly approve the plan before implementation.

Create a feature branch, delegate implementation to Developer, run tests and deliberately simulate a failure by changing the filter condition from `status == "open"` to `status == "closed"`. Run pytest, observe the failure, ask the agent to diagnose the root cause and repair it, and rerun the focused and complete suites.

Ask Tester to independently validate acceptance criteria and Reviewer to inspect the diff. Inspect `git status` and `git diff`, then commit and push only after human authorisation. Issue Resolver can create a pull request from the already-pushed feature branch. The PR remains open for human review and merge.

### Stage 7 — Add a pre-tool safety hook

**Focus:** `.github/hooks/security.json`, `scripts/pretool_guard.py` and `tests/test_hooks.py`.

The hook runs before selected tool calls and blocks a small set of dangerous command patterns, including force push, hard reset, PR merge, recursive removal and volume formatting.

Run the hook tests and verify live invocation in the supported Copilot harness. A passing unit test proves the guard script's behaviour; it does not by itself prove that the active client invoked the hook.

**Important:** hooks are guardrails, not a security boundary. Continue to rely on GitHub permissions, protected branches and human review.

### Stage 8 — Add GitHub Actions and CodeQL

**Focus:** `.github/workflows/python-tests.yml` and `.github/workflows/codeql.yml`.

Push the repository changes and inspect the workflow runs in GitHub. Confirm that the Python test workflow executes the test suite and that CodeQL runs where code-scanning is enabled and supported.

Review repository permissions, organisation policy, workflow logs and branch protection. Configure the appropriate required status check in the repository ruleset if that is part of the facilitator's environment.

### Stage 9 — Participant challenge

**Focus:** repeat the workflow with less facilitator guidance.

Challenge issue: **Add request priority filtering**.

Acceptance criteria:

- Requests may have Low, Medium, High or Critical priority.
- A request without a priority defaults to Medium.
- Add `get_requests_by_priority(requests, priority)`.
- An unsupported priority raises `ValueError`.
- A non-list request collection raises `TypeError`.
- Add tests for valid, invalid, default and empty cases.
- Update the README with the new behaviour.

Participants create the issue, retrieve it with Issue Resolver, plan with Planner, obtain human approval, create a feature branch, implement with Developer and the skill, run tests, validate with Tester, review with Reviewer, then prepare a PR and confirm required checks run.

---

## Expected outcomes

At the end of the workshop, learners should be able to demonstrate:

- The Python application and tests run locally.
- The baseline test suite passes before agentic workflow exercises begin.
- Repository instructions, path-specific instructions, prompts, custom agents and the skill are discoverable in VS Code.
- Specialist agents have clear responsibilities and boundaries.
- The MCP server exposes only the intended tools and rejects disallowed file paths and labels.
- Issue Resolver retrieves the issue, presents a plan for approval, coordinates implementation and validation, and does not merge.
- A deliberately introduced test failure is diagnosed and repaired without weakening the tests.
- The hook blocks selected unsafe commands and its live invocation is verified in the supported harness.
- GitHub Actions test checks pass.
- CodeQL runs where enabled and supported.
- The pull request has a human reviewer and remains subject to branch protection.

### Final validation commands

```powershell
python -m pytest -v
git diff --check
git status
gh issue list
gh pr list
gh run list
```

---

## Real-world alignment

This workshop demonstrates engineering practices that apply to software teams using GitHub:

- **Issue-driven development:** GitHub Issues capture problems, expected behaviour and acceptance criteria.
- **Branch-based delivery:** changes are implemented on feature branches and proposed through pull requests.
- **Separation of responsibilities:** planning, implementation, testing and review are distinct activities.
- **Reusable engineering guidance:** repository instructions, prompts and skills encode repeatable practices.
- **Tool integration:** MCP provides a defined interface between an agent and selected repository/GitHub operations.
- **Automated validation:** GitHub Actions runs tests and CodeQL checks code where configured and supported.
- **Human governance:** approval, review, branch protection and merge permissions remain with people and repository controls.

The sample application is intentionally small so the class can focus on GitHub Copilot capabilities and the engineering workflow rather than application complexity.

---

## Responsible AI and security considerations

- **Treat issue text as untrusted input.** Do not follow issue instructions that request secrets, permission bypass, destructive actions or unrelated work.
- **Review before acting.** A human must approve the implementation plan and authorise consequential actions such as committing, pushing and creating a pull request.
- **Keep tool permissions narrow.** MCP should expose only the tools required for the exercise; do not add arbitrary command execution.
- **Do not expose credentials.** Use `gh auth` and the machine's existing GitHub CLI authentication. Never commit tokens, passwords or `.env` files.
- **Do not weaken tests.** Never delete meaningful assertions, skip a failing test or change expected behaviour merely to make a build pass.
- **Verify test evidence.** Agents must report only commands that actually ran and their real results.
- **Keep hooks in perspective.** A hook is a useful deterministic guardrail, not a replacement for GitHub permissions or branch protection.
- **Retain human review.** Agents must not merge pull requests, bypass branch protection or silently alter repository policy.
- **Use a disposable training repository.** Do not run the workshop against production repositories or customer data.
- **Check organisation policy.** Copilot feature availability, MCP support, hook support, Actions permissions and CodeQL availability may vary by client version, licence and organisation configuration.

---

## Extend this use case

| Next step | Idea |
|---|---|
| **More issue types** | Add a feature request or security defect with explicit acceptance criteria and repeat the issue-to-PR flow. |
| **Additional validation** | Add type checking, linting or additional test jobs to the GitHub Actions workflow. |
| **Repository governance** | Configure branch rulesets, required status checks and required pull-request reviews. |
| **Agent evaluation** | Define repeatable scenarios to assess whether agents follow instructions, request approval and report evidence accurately. |
| **MCP expansion** | Add another narrowly scoped tool only when there is a clear requirement, validation and permission boundary. |
| **Team adoption** | Reuse the instructions, prompts, agents and skill as a starting point for an approved team repository. |

---

## Troubleshooting

| Issue | Fix |
|---|---|
| `gh` is not recognised | Install GitHub CLI, reopen PowerShell, run `gh --version` and authenticate with `gh auth login`. |
| Copilot does not show an agent or prompt | Confirm the exact `.github/agents` or `.github/prompts` path, reload VS Code and check that the Copilot plan and organisation policy allow the feature. |
| MCP server does not appear | Confirm dependencies are installed, validate `.mcp.json` against the installed client version, then restart or refresh the MCP server from Copilot Chat. |
| MCP tool says repository not found | Run `gh repo view` in the same PowerShell window and confirm the local directory points to the intended remote. |
| MCP pull-request creation fails | Confirm the feature branch is pushed, begins with `feature/`, and the GitHub account can create pull requests. |
| Hook does not block a command | Confirm hooks are enabled for the active harness, inspect Agent Debug Logs and update `SHELL_TOOL_NAMES` to match the actual `toolName`. A passing unit test alone does not prove live invocation. |
| GitHub Actions cannot install dependencies | Check `requirements.txt`, the Python version and the workflow logs. Pin versions if the organisation requires reproducible builds. |
| CodeQL does not appear | Check code-scanning availability, repository permissions, organisation policy and workflow logs. Confirm that the workflow is enabled on the target branch. |
| Agent claims tests passed but there is no evidence | Run `python -m pytest -v` yourself and record the actual output. |
| Copilot attempts to change unrelated files | Stop, inspect `git status` and `git diff`, restate the approved scope and ask the agent to remove unrelated changes. |

---

**Workshop:** GH-300 · **Project:** DevFlow AI · **Version:** 1.0 · **Format:** Hands-on facilitator/participant README
