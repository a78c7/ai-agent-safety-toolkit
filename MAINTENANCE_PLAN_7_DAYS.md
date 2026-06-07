# 7-Day Maintenance Plan

This is a lightweight post-launch maintenance plan for the AI Agent Safety Toolkit projects.

Boundaries:

- No release creation is required by this plan.
- No issue creation is required by this plan.
- No KYC, payment, payout, tax, or withdrawal handling.
- No GitHub Sponsors setup.
- Keep human review in the loop.

## Day 1: Manual README / Links / Releases Check

- Review the GitHub-rendered README for the umbrella repo.
- Review AgentGate, BountyLens, and Testability Doctor README pages.
- Check that cross-links between the four repositories still work.
- Check that release pages for AgentGate, BountyLens, and Testability Doctor are visible.
- Confirm the umbrella repo intentionally has no release unless that decision changes later.
- Confirm LICENSE author text renders correctly.

## Day 2: Publish One Introduction

- Pick one channel manually: X, LinkedIn, Reddit, Hacker News, or a personal blog.
- Use the launch story pack as source material.
- Keep the message practical and conservative.
- State clearly that the toolkit does not claim bounties, handle payment/KYC, read cookies/tokens, or replace human review.
- Do not mass-post or spam unrelated repositories.

## Day 3: Review GitHub Traffic / Stars / Issues

- Check repository stars, forks, clones, and traffic manually from GitHub Insights.
- Review any new issues or discussions.
- Note which page people seem to visit first.
- Look for repeated confusion around the three-tool workflow.
- Do not overreact to one-off feedback.

## Day 4: Pick One Small Documentation Improvement

- Choose one narrow docs improvement based on feedback or self-review.
- Prefer examples, wording clarity, or a diagram caption over new features.
- Keep the change small enough to review in one pass.
- Update only docs unless a real bug is found and separately planned.

## Day 5: Find One Real Example Diff for AgentGate

- Find or create a non-sensitive example diff that demonstrates AgentGate behavior.
- Avoid private code, credentials, customer data, or real secrets.
- Prefer a public sample or synthetic-but-realistic diff.
- Document why AgentGate passes, warns, or blocks it.
- Keep the example separate from core logic changes.

## Day 6: Add One Real Repo Case Study for Testability Doctor

- Choose a public repository that is safe to reference.
- Run Testability Doctor manually.
- Document stack, lockfile, test command, and recommendation.
- Do not install dependencies unless separately planned.
- Keep the case study honest if the result is `manual_setup_needed` or `avoid`.

## Day 7: Summarize Feedback and Decide v0.2 Priority

- Summarize feedback from traffic, issues, comments, and self-review.
- Choose one v0.2 priority per project at most.
- Prefer small improvements that make the workflow easier to understand.
- Defer large integrations until the basic docs and examples are clear.
- Decide whether the next work should be docs-only, examples, CLI output polish, or integration work.

## End-of-Week Notes Template

```text
What users understood:

What confused users:

Most useful repo/page:

Most requested improvement:

Risks or safety concerns:

Recommended v0.2 priority:
```
