# FAQ for Launch

## Is this for Codex only?

No. The workflow can be used with Codex, Claude Code, Cursor, or other AI coding agents.

## Does it work with Claude Code?

Yes. Use the same staged workflow: issue check, repo testability check, agent work, tests, diff safety check, draft PR, human review.

## Does it work with Cursor?

Yes. Testability Doctor can run before editing, and AgentGate can run before PR.

## Does it guarantee safe PRs?

No. It reduces obvious risks and still requires human review.

## Does it guarantee bounty earnings?

No. It does not guarantee acceptance, merge, reward, or payout.

## Does it read my GitHub token?

No. The toolkit is designed to avoid token, cookie, keychain, password manager, and credential access.

## Does it upload code?

The toolkit does not upload code as part of its safety model. Normal git pushes and PRs remain manual workflow steps controlled by the developer.

## Does it create PRs automatically?

No. Draft PR creation remains a manual developer action.

## Does it claim bounties?

No. It does not claim rewards or handle platform reward workflows.

## Why three repos?

Each tool protects a different stage and reads a different input: issue, repository, or diff.

## Can I use only AgentGate?

Yes. Use AgentGate when you already have an AI-generated diff and want a pre-PR safety gate.

## What is planned next?

The roadmap includes shared config schema ideas, SARIF output for AgentGate, a Testability Doctor GitHub Action, BountyLens issue export format, and shared examples.

## Does it handle KYC/payment/withdrawal?

No. Those steps remain manual and outside the toolkit.

## Does it replace review?

No. Maintainer review remains required.
