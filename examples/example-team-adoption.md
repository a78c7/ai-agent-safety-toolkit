# Example Team Adoption

## Week 1: Warn Only

Ask contributors to run Testability Doctor before agent work and AgentGate before PR. Do not block yet. Collect friction and false positives.

## Week 2: Block Forbidden Paths

Start blocking clearly unsafe changes such as secrets, credential files, auth/payment paths, and generated build outputs.

## Week 3: Require Tests and Risk Section

Require PRs with AI-assisted code changes to include:

- tests run
- known risk flags
- AgentGate result
- human review notes

Keep reward, payment, and account workflows manual.
