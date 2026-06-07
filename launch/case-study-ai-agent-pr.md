# Case Study: An AI-Agent PR With Safety Gates

This is a fictional case study, but the workflow is realistic.

## Scenario

A developer wants to use Codex on a GitHub issue. The project is open source, and the developer wants to avoid wasting time or sending a noisy PR.

## Step 1: Check the first issue with BountyLens

The developer starts with a bounty issue.

BountyLens reports that the issue looks risky because it has a direct competing PR already open. The issue may still be valid, but the developer decides not to spend agent time on it.

Result: the developer chooses another issue.

## Step 2: Check the repo with Testability Doctor

The second issue points to a Node repository.

Testability Doctor returns `good_for_agent` because the repository has:

- `pnpm-lock.yaml`
- a clear test script
- a recognized Node stack
- no obvious external environment requirement

Result: the developer gives Codex a narrow task and includes the discovered test command.

## Step 3: Let the AI agent work

Codex makes the first set of changes.

The developer reviews the diff and runs project tests.

## Step 4: Run AgentGate

AgentGate blocks the first diff because it touched `.github/workflows`.

The workflow change may or may not be legitimate, but it is outside the intended issue scope. The developer asks the agent to retry with a smaller diff.

Result: the risky workflow edit is removed.

## Step 5: Retry with a smaller diff

Codex produces a focused code change.

AgentGate passes with warnings. The warnings are documented in the PR notes.

## Step 6: Open a draft PR

The developer opens a draft PR, includes:

- the issue link
- tests run
- Testability Doctor result
- AgentGate result
- known warnings

## Step 7: Maintainer review

The maintainer reviews the code, tests, and scope. The tools helped reduce obvious mistakes, but the maintainer still decides whether the PR should merge.

## What this case shows

- Human review stays in the loop.
- The tools reduce obvious mistakes.
- The tools do not guarantee merge.
- The tools do not guarantee bounty earnings.
- The tools do not claim bounty rewards or handle payment/KYC.
