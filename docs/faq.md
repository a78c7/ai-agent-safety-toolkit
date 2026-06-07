# FAQ

## Does this guarantee safe AI PRs?

No. It provides safety gates and risk signals. Human review is still required.

## Does this guarantee bounty earnings?

No. It does not claim rewards, guarantee acceptance, or handle payout.

## Does it read tokens?

No. The toolkit is designed to avoid token, cookie, keychain, password manager, and credential access.

## Does it use external APIs?

The umbrella repo is documentation only. Individual tools document their own behavior and limits.

## Does it replace code review?

No. It is meant to improve pre-review quality, not replace human review.

## Can I use it with Codex?

Yes. Run the relevant gate before and after Codex work.

## Can I use it with Claude Code?

Yes. Use the same staged workflow.

## Can I use it with Cursor?

Yes. Use Testability Doctor before editing and AgentGate before PR.

## Why are the tools separate?

They protect different stages and operate on different inputs.

## Can I use only AgentGate?

Yes. It is useful when you already have a diff and want a pre-PR safety check.

## Can I use only Testability Doctor?

Yes. It is useful for deciding whether a repo is practical for agent work.

## Does BountyLens claim rewards?

No. Reward, platform, KYC, payment, and withdrawal steps remain manual.

## Does it work on private repos?

The workflow can apply to private repos, but you should follow each tool's local setup and security guidance.

## How do I report issues?

Open an issue in the relevant tool repository or in this umbrella repo for toolkit-level documentation problems.

## What is planned next?

See `ROADMAP.md`.

## Does it encourage spam PRs?

No. The workflow prefers scoped work, draft PRs, and human review.

## Does it enable GitHub Sponsors?

No.
