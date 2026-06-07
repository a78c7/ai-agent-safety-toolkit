# Reddit Post Draft

Title: I made a small safety-first toolkit for AI coding agent workflows

I built AI Agent Safety Toolkit as an umbrella for three small tools:

- BountyLens: evaluates GitHub bounty issue risk before work starts
- Testability Doctor: checks whether a repository looks practical for an AI agent to modify and test
- AgentGate: checks AI-generated diffs before opening a PR

The intended flow is:

GitHub issue -> BountyLens -> Testability Doctor -> AI coding agent -> tests -> AgentGate -> draft PR -> human review

It does not claim bounties, handle payments, guarantee safety, or replace review. The goal is to make agent-assisted open-source work more explicit and less chaotic.

Repo: https://github.com/a78c7/ai-agent-safety-toolkit
