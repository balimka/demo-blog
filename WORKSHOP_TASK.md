# Live workshop task

## Feature request

Add category filters and an estimated reading-time label to the post list.

## Acceptance criteria

1. A visitor can select **All** or one category and see only matching posts.
2. Search and category filters work together.
3. Every card displays an estimated reading time based on the post body at 200 words per minute, rounded up with a minimum of one minute.
4. The result summary remains accurate.
5. The controls are keyboard accessible and do not rely on color alone.
6. Pure filtering and reading-time behavior has unit coverage.
7. No dependency is added and `node --test tests/posts.test.mjs` passes.

## Suggested live workflow

First complete `WORKSHOP_LAB.md` to create the customization stack. Then select **Feature Orchestrator** and send:

`Implement the feature in WORKSHOP_TASK.md. Use the planner, implementer, and reviewer. Keep the change dependency-free and finish with tests plus browser evidence.`

If nested agents are unavailable, run **Blog Planner**, **Blog Implementer**, and **Blog Reviewer** as three explicit sessions.
