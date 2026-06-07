# v0.2 Ideas

These are candidate ideas, not commitments. No dates are promised.

## AgentGate v0.2

- Add clearer example reports for pass, warning, and blocked diffs.
- Add SARIF output exploration for code scanning workflows.
- Add a public sample diff pack with safe and unsafe examples.
- Improve README guidance for maintainers reviewing AI-assisted PRs.
- Add more documented config examples for forbidden paths and sensitive areas.
- Consider a stricter mode for auth/payment/crypto/KYC/database migration paths.

## BountyLens v0.2

- Add an issue export format that can be passed into the umbrella workflow.
- Add more fake fixture examples for funded, suspicious, closed, and competing-PR issues.
- Improve documentation for interpreting bounty signals versus guarantees.
- Add clearer language around what BountyLens does not do: no claiming, no earnings guarantee, no payment/KYC handling.
- Consider a small offline demo mode that never fetches a live GitHub page.
- Add a comparison page for manual bounty triage versus BountyLens-assisted triage.

## Testability Doctor v0.2

- Add a GitHub Action example for static testability preflight.
- Add real public repository case studies.
- Improve docs for `manual_setup_needed` versus `avoid`.
- Add more examples for monorepos and docs-only repositories.
- Consider optional SARIF or machine-readable summary output for CI consumers.
- Add guidance for teams adopting Codex, Claude Code, or Cursor across multiple repositories.

## Toolkit v0.2

- Add a shared terminology page for issue risk, repo testability, diff safety, and human review.
- Add a second end-to-end demo for a non-bounty issue.
- Add screenshots or terminal recordings for the full workflow demo.
- Add a hosted docs exploration if README navigation becomes too dense.
- Add a shared config-schema proposal across tools, without merging codebases.
- Add a maintainer adoption guide for staged rollout: docs-only, warn-only, then stricter checks.

## Selection Criteria

Prioritize ideas that:

- make the workflow easier to understand
- reduce obvious safety mistakes
- improve examples or reports
- preserve local-first, safety-first boundaries
- avoid credentials, cookies, KYC, payment, payout, or auto-claim workflows

Defer ideas that:

- require account access
- depend on private user data
- encourage spam PRs
- claim to guarantee safety or earnings
- merge the separate tools into one large codebase too early
