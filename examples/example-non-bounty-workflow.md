# Example Non-Bounty Workflow

## Scenario

You want to fix a normal repository issue with an AI coding agent.

## Flow

```text
Repository issue
-> Testability Doctor
-> AI agent
-> project tests
-> AgentGate
-> Draft PR
-> Human review
```

## Notes

Skip BountyLens when the issue is not a bounty. Keep Testability Doctor and AgentGate as the pre-edit and pre-PR gates.
