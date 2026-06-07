# LinkedIn Launch Post

AI coding agents are becoming part of everyday development, but the workflow still needs clear safety gates.

AI Agent Safety Toolkit is a collection of three safety-first tools:

- BountyLens for evaluating GitHub bounty issue risk before work starts
- Testability Doctor for checking whether a repository is practical for an AI agent to modify and test
- AgentGate for reviewing AI-generated diffs before opening a pull request

The goal is not to replace human review. The goal is to make agent-assisted work easier to scope, test, and review before it reaches maintainers.

Workflow:

GitHub issue -> BountyLens -> Testability Doctor -> Codex / Claude Code / Cursor -> tests -> AgentGate -> draft PR -> human review

Project: https://github.com/a78c7/ai-agent-safety-toolkit
