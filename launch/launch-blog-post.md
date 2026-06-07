# I built a small safety toolkit for AI coding agents

AI coding agents can generate changes quickly. That is useful, but speed is not the hard part.

The hard part is deciding what should happen before an agent starts, before tests are trusted, and before a pull request reaches a maintainer.

For most agent-assisted work, I kept seeing three practical questions:

- should this issue be attempted?
- can this repo be tested?
- is this diff safe enough for a PR?

AI Agent Safety Toolkit is a small collection of tools around those questions. It is not a single mega-tool. It is a staged workflow.

## The problem

An AI coding agent can be fast and still be pointed at the wrong work.

For example:

- a bounty issue may already be closed
- another PR may already solve the problem
- the repo may have no lockfile or no clear test command
- validation may require a real device, cloud account, or private key
- the generated diff may touch auth, payment, secrets, workflows, or unrelated files

None of those problems are solved by asking the agent to "try harder." They need checks around the workflow.

## The three-tool workflow

The toolkit has three separate tools because each stage has a different input and a different risk.

### BountyLens

BountyLens runs before work starts.

Use it when you find a GitHub bounty issue and want to understand whether it looks real, risky, already solved, or out of scope.

It is for issue triage, not claiming rewards.

Repository: https://github.com/a78c7/bountylens

### Testability Doctor

Testability Doctor runs before an AI agent edits.

Use it when you want to know whether a repository is practical for Codex, Claude Code, Cursor, or another AI coding agent to modify and test.

It looks for static signals such as stack, package manager, lockfile, test commands, unsupported environments, and external setup requirements.

Repository: https://github.com/a78c7/testability-doctor

### AgentGate

AgentGate runs before PR.

Use it after an AI agent has generated changes and before those changes are sent toward a pull request.

It is a safety gate for the diff. It helps catch forbidden paths, secrets, risky auth/payment/crypto changes, and missing test evidence.

Repository: https://github.com/a78c7/agentgate

## Example workflow

A practical workflow looks like this:

1. Find or receive a GitHub issue.
2. If it is a bounty issue, run BountyLens.
3. If the issue still looks worth attempting, run Testability Doctor on the target repo.
4. If the repo looks testable, let Codex, Claude Code, Cursor, or another agent work on a narrow task.
5. Run the project tests.
6. Run AgentGate on the generated diff.
7. Open a draft PR, not a final PR.
8. Keep human review in the loop.

The workflow is intentionally conservative. It does not assume the agent is wrong. It also does not assume the agent is safe.

## What the toolkit does not do

This toolkit does not:

- automatically claim bounties
- handle KYC, payment, payout, tax, or withdrawal steps
- read cookies, tokens, keychains, or password managers
- upload secrets
- create spam PRs
- replace human review
- guarantee bounty earnings
- guarantee perfect safety

The tools are meant to reduce obvious mistakes, not certify outcomes.

## Why separate tools?

Keeping the tools separate makes the workflow easier to adopt.

If you only review AI-generated diffs, use AgentGate.

If you only need to know whether a repository is testable by an agent, use Testability Doctor.

If you only evaluate bounty issues, use BountyLens.

If you want the full flow, use all three:

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

## Links

- AI Agent Safety Toolkit: https://github.com/a78c7/ai-agent-safety-toolkit
- BountyLens: https://github.com/a78c7/bountylens
- Testability Doctor: https://github.com/a78c7/testability-doctor
- AgentGate: https://github.com/a78c7/agentgate

The goal is simple: make AI-assisted coding work easier to choose, easier to test, and easier to review before it becomes a PR.
