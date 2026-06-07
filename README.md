# AI Agent Safety Toolkit

Safety-first tools for AI coding agent workflows — from issue triage to repo testability to PR safety checks.

一组安全优先的 AI coding agent 工具链：从 issue 候选筛选，到 repo 可测试性判断，再到 PR 前 diff 安全门。

## What is this?

AI Agent Safety Toolkit is a collection of safety-first tools for evaluating bounty issues, repository testability, and AI-generated code changes before pull requests.

This repository is the umbrella entry point. It does not merge code from the tools, move existing projects, or replace their own documentation. It explains how the three tools fit together.

## Why this exists

AI coding agents are most useful when the work is scoped, testable, and reviewed before it reaches a pull request. The risky parts often happen before coding starts: choosing a questionable bounty issue, editing a repo with no reliable test path, or sending unreviewed agent diffs toward a PR.

This toolkit puts explicit checks at each stage.

## The three tools

### BountyLens

Link: https://github.com/a78c7/bountylens

Use it when:

- You found a GitHub bounty issue
- You want to know if it looks real
- You want to detect fake bounty, closed issue, competing PR, forbidden domains

Does not:

- claim bounty
- handle payment/KYC
- guarantee earnings

### Testability Doctor

Link: https://github.com/a78c7/testability-doctor

Use it when:

- You want to know if a repo can be safely modified and tested by an AI agent
- You want to detect missing lockfile, missing tests, unsupported stack, external environment requirements

Does not:

- install dependencies
- run Docker by default
- modify the repo

### AgentGate

Link: https://github.com/a78c7/agentgate

Use it when:

- AI agent has generated code changes
- You want to check the diff before opening a PR
- You want to block forbidden paths, secrets, auth/payment/crypto changes, missing tests

Does not:

- replace human review
- read secrets
- upload code
- auto-create PRs

## Workflow

```text
GitHub issue
-> BountyLens
-> Testability Doctor
-> Codex / Claude Code / Cursor
-> Tests
-> AgentGate
-> Draft PR
-> Human review
```

See [docs/workflow.md](docs/workflow.md) for the full workflow.

## Launch story

- [Launch blog post](launch/launch-blog-post.md)
- [Social posts](launch/social-posts.md)
- [AI-agent PR case study](launch/case-study-ai-agent-pr.md)

## Quickstart

For a bounty issue:

```text
1. Run BountyLens on the candidate issue.
2. Run Testability Doctor on the target repository.
3. Let Codex, Claude Code, or Cursor work only if the repo is practical to test.
4. Run project tests.
5. Run AgentGate before opening a draft PR.
6. Keep final review with a human maintainer.
```

For a normal repository issue:

```text
1. Run Testability Doctor.
2. Let the AI coding agent make a scoped change.
3. Run tests.
4. Run AgentGate.
5. Open a draft PR for human review.
```

## Which tool should I use?

| Situation | Tool |
|---|---|
| You are evaluating a GitHub bounty issue | BountyLens |
| You need to know whether a repo is practical for an AI agent to edit and test | Testability Doctor |
| You already have AI-generated code changes and want a safety gate before PR | AgentGate |
| You want the full safety-first flow | Use all three in sequence |

## Safety principles

- Static checks before side effects
- No cookie, keychain, password manager, token, or credential access
- No automatic bounty claiming
- No KYC, payment, tax, or withdrawal handling
- No secret upload
- No spam PR workflow
- Draft PRs before final PRs
- Human review remains required

## What this toolkit does not do

- It does not guarantee bounty earnings.
- It does not guarantee safe AI-generated code.
- It does not replace code review.
- It does not enable GitHub Sponsors.
- It does not handle payout, KYC, payment, withdrawal, or tax forms.
- It does not combine the three tools into one codebase.
- It does not encourage mass PR automation.

## Roadmap

See [ROADMAP.md](ROADMAP.md).

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions should preserve the safety-first model and avoid telemetry, credential access, auto-claim logic, or payment flows.

## License

MIT License. See [LICENSE](LICENSE).
