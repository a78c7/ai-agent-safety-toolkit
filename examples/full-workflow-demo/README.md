# Full Workflow Demo

This demo shows the full AI Agent Safety Toolkit workflow with fake local data.

It demonstrates:

- BountyLens evaluating a fake bounty issue
- Testability Doctor evaluating a fake repository fixture
- AgentGate checking safe and unsafe AI-generated diffs
- a final workflow report that ties the steps together

## How to Run

From the umbrella repository root:

```bash
bash examples/full-workflow-demo/run-demo.sh
```

The script uses local sibling tool checkouts when available:

- `/Users/dsmba/Documents/codex-product-factory/bountylens/cli/bountylens.py`
- `/Users/dsmba/Documents/codex-product-factory/testability-doctor/testability_doctor.py`
- `/Users/dsmba/Documents/codex-product-factory/agentgate/agentgate.py`

If a tool is not available, the script falls back to the static reports in `expected/`.

## What Files Are Fake?

- `fake-bounty-issue.html`
- `fake-bounty-issue.md`
- `fake-repo/`
- `ai-generated-safe-diff.patch`
- `ai-generated-unsafe-diff.patch`

The bounty issue, repository, and diffs are fixtures. They are not real GitHub data.

## Safety Boundaries

- No real bounty
- No real user data
- No network
- No dependency installation
- No PR creation
- No credential, cookie, token, keychain, or password manager access

## How the Tools Connect

```text
Fake bounty issue
-> BountyLens
-> fake repository
-> Testability Doctor
-> fake AI-generated diffs
-> AgentGate
-> full workflow report
```

The final report is written to:

```text
examples/full-workflow-demo/expected/full-workflow-report.md
```
