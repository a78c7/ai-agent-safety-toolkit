# Full Workflow Demo Report

## Demo Files Created

Directory:

```text
examples/full-workflow-demo/
```

Files:

- `README.md`
- `run-demo.sh`
- `fake-bounty-issue.html`
- `fake-bounty-issue.md`
- `fake-repo/README.md`
- `fake-repo/package.json`
- `fake-repo/package-lock.json`
- `fake-repo/src/index.js`
- `fake-repo/tests/index.test.js`
- `ai-generated-safe-diff.patch`
- `ai-generated-unsafe-diff.patch`
- `expected/bountylens-report.md`
- `expected/testability-doctor-report.md`
- `expected/agentgate-safe-report.md`
- `expected/agentgate-unsafe-report.md`
- `expected/full-workflow-report.md`

## External Tools Detected

The demo detected and smoke-ran local sibling tool CLIs:

- BountyLens: `/Users/dsmba/Documents/codex-product-factory/bountylens/cli/bountylens.py`
- Testability Doctor: `/Users/dsmba/Documents/codex-product-factory/testability-doctor/testability_doctor.py`
- AgentGate: `/Users/dsmba/Documents/codex-product-factory/agentgate/agentgate.py`

## Fallback Expected Reports Used

No fallback was required due to missing tools.

The script intentionally keeps the static `expected/*.md` teaching reports stable. Local CLI smoke-run outputs are written to a temporary directory and removed after the run, so the demo reports remain predictable.

## Run Result

Command:

```bash
bash examples/full-workflow-demo/run-demo.sh
```

Result:

```text
AI Agent Safety Toolkit: full workflow demo
Using fake local issue, fake repo, and fake AI-generated diffs.
No network, no dependency install, no PR creation, no credential reads.

Step 1: Running BountyLens on local fake HTML issue
Step 2: Running Testability Doctor on fake repo
Step 3: Running AgentGate on safe diff
Step 4: Running AgentGate on unsafe diff

Demo complete.
Full report: examples/full-workflow-demo/expected/full-workflow-report.md
```

Required file checks passed:

- `launch` is not involved in this demo.
- `examples/full-workflow-demo/expected/full-workflow-report.md` exists.
- `diagrams/ai-agent-safety-workflow.svg` exists.

## No Network / No Credentials Confirmation

- No real GitHub issue was used.
- No real bounty was used.
- No real user data was used.
- No GitHub page was fetched.
- No dependency installation was performed.
- No PR was created.
- No cookies, tokens, keychains, password managers, or credential stores were read.
- No KYC, payment, payout, tax, or withdrawal workflow was handled.
- No release or issue was created.

## How This Helps Users Understand the Toolkit

The demo shows the complete staged workflow with local fake data:

1. BountyLens checks whether a fake bounty issue is a reasonable candidate.
2. Testability Doctor checks whether the fake repo is practical for an AI agent.
3. AgentGate passes a safe docs-only diff.
4. AgentGate blocks an unsafe token/secret diff.
5. The final report recommends opening a draft PR only after human review.

This makes the relationship between BountyLens, Testability Doctor, and AgentGate concrete without relying on live GitHub data.

## Next Steps

- Review the demo README rendering on GitHub.
- Optionally add a screenshot or terminal recording.
- Optionally add a second demo for non-bounty repository issues.
- Keep the demo offline and fixture-based.
