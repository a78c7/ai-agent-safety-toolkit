# AgentGate Unsafe Diff Demo Report

## Result

- result: blocked
- reason: forbidden secret/token content

## Notes

- The patch creates `.env`.
- The patch contains token and secret-like strings.
- The patch touches auth/token handling.
- This diff should not enter a PR.
