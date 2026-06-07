# Tool Comparison

| Stage | Tool | Input | Output | Blocks |
|---|---|---|---|---|
| Before work starts | BountyLens | GitHub bounty issue or issue URL | Risk-oriented issue report | fake bounty signals, closed issues, competing PRs, forbidden domains |
| Before an AI agent edits | Testability Doctor | Repository path | Testability recommendation and risk flags | missing lockfile, missing tests, unsupported stack, external environment requirements |
| Before PR | AgentGate | Git diff or working tree changes | Safety gate result | forbidden paths, secrets, auth/payment/crypto changes, missing tests |

## Why Separate Tools?

The stages have different inputs and different risks. Keeping tools separate makes each gate easier to reason about, test, and adopt gradually.
