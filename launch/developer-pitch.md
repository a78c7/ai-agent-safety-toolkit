# Developer Pitch

Before asking Codex, Claude Code, Cursor, or another AI coding agent to fix an issue, run through the toolkit.

## Why

It is easy to waste time on issues that are already closed, already solved, unfunded, unclear, or impossible to validate locally.

The toolkit helps you check:

- whether a bounty issue looks risky
- whether the repository is testable by an agent
- whether the generated diff is safe enough to put in a draft PR

## Suggested Flow

```text
GitHub issue
-> BountyLens when bounty-related
-> Testability Doctor
-> AI coding agent
-> project tests
-> AgentGate
-> draft PR
-> human review
```

## Working Style

Open draft PRs, not spam PRs.

Keep changes narrow.

Include tests run and known warnings.

Do not automate bounty claims, KYC, payments, or withdrawals.
