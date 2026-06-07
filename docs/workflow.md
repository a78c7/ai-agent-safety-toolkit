# Workflow

AI Agent Safety Toolkit separates the workflow into explicit checkpoints.

## Full Flow

1. Find or receive a GitHub issue.
2. Run BountyLens.
3. If candidate looks real, run Testability Doctor.
4. If repo is suitable, let Codex / Claude Code / Cursor work.
5. Run project tests.
6. Run AgentGate.
7. Open draft PR.
8. Human review.
9. Platform reward, if any, remains manual.

## Principles

- BountyLens runs before work starts.
- Testability Doctor runs before an AI agent edits.
- AgentGate runs before PR.
- Draft PRs are preferred.
- Human review is required.

## Boundaries

This workflow does not guarantee earnings, automatically claim bounty rewards, handle KYC/payment/withdrawal, or encourage spam PRs.
