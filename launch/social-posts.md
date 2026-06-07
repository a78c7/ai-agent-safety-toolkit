# Social Posts

These are manual publishing drafts. They are not posted automatically.

## X/Twitter Thread

1. I built AI Agent Safety Toolkit: a small safety-first workflow for AI coding agents.

2. The problem is not just code generation speed. The hard questions are: should this issue be attempted, can this repo be tested, and is the generated diff safe enough for a PR?

3. The workflow has three tools: BountyLens before work starts, Testability Doctor before an AI agent edits, and AgentGate before PR.

4. BountyLens helps evaluate GitHub bounty issue risk: closed issue, fake bounty signals, competing PRs, forbidden domains, and unclear scope.

5. Testability Doctor checks whether a repo looks practical for Codex, Claude Code, Cursor, or another agent to modify and test.

6. AgentGate checks AI-generated diffs before PR. It is meant to catch obvious risky changes such as secrets, forbidden paths, and sensitive auth/payment/crypto areas.

7. What it does not do: no automatic bounty claiming, no payment/KYC/withdrawal handling, no cookies/tokens/keychain access, no spam PRs, no replacement for human review.

8. Repo: https://github.com/a78c7/ai-agent-safety-toolkit

## Single Short X Post

AI Agent Safety Toolkit is a safety-first workflow for AI coding agents:

BountyLens -> Testability Doctor -> AgentGate

Issue risk, repo testability, and pre-PR diff checks before draft PR and human review.

No cookies/tokens, no payment/KYC, no auto-claim, no spam PRs.

https://github.com/a78c7/ai-agent-safety-toolkit

## LinkedIn Post

AI coding agents are useful, but the workflow around them needs explicit safety checkpoints.

I built AI Agent Safety Toolkit as a docs-first umbrella for three tools:

- BountyLens: evaluate GitHub bounty issue risk before work starts
- Testability Doctor: check whether a repository is practical for an AI agent to modify and test
- AgentGate: inspect AI-generated diffs before opening a pull request

The workflow is:

GitHub issue -> BountyLens -> Testability Doctor -> Codex / Claude Code / Cursor -> tests -> AgentGate -> draft PR -> human review

The toolkit does not claim bounties, handle payment or KYC, read cookies or tokens, or replace review. It is designed to reduce obvious workflow mistakes before maintainers see the PR.

Project: https://github.com/a78c7/ai-agent-safety-toolkit

## Reddit r/opensource Post

Title: I built a safety-first toolkit for AI coding agent workflows

I made AI Agent Safety Toolkit, an umbrella repo for three small tools:

- BountyLens: evaluates GitHub bounty issue risk before work starts
- Testability Doctor: checks whether a repository looks practical for an AI agent to modify and test
- AgentGate: checks AI-generated diffs before a pull request

The intended flow is:

GitHub issue -> BountyLens -> Testability Doctor -> AI coding agent -> tests -> AgentGate -> draft PR -> human review

This is not an automatic earning tool and not a replacement for code review. It does not claim bounties, handle payment/KYC/withdrawal, read cookies/tokens/keychains, or encourage spam PRs.

Repo: https://github.com/a78c7/ai-agent-safety-toolkit

## Hacker News

Title:

Show HN: AI Agent Safety Toolkit for safer AI-assisted PR workflows

First comment:

I built this as a small umbrella repo for three tools around AI coding agent workflows.

The idea is to add checks at three moments:

- before work starts: BountyLens for bounty issue risk
- before an agent edits: Testability Doctor for repo testability
- before PR: AgentGate for generated diff safety

It is intentionally conservative. It does not claim bounties, handle payment/KYC, read cookies/tokens/keychains, or replace human review. The goal is to make AI-assisted open-source work easier to scope, test, and review.

Repo: https://github.com/a78c7/ai-agent-safety-toolkit
