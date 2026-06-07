# Example Bounty Workflow

## Scenario

You find a GitHub issue that appears to offer a bounty.

## Flow

```text
Bounty issue
-> BountyLens
-> Testability Doctor
-> Codex
-> project tests
-> AgentGate
-> Draft PR
-> Human review
```

## Notes

- BountyLens helps decide whether the issue looks worth continuing.
- Testability Doctor checks whether the target repo has a practical test path.
- Codex should receive a narrow task and known tests.
- AgentGate checks the generated diff before PR.
- Any platform reward remains manual.
