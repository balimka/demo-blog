# Live customization lab

The starter intentionally contains no `.github` agent customizations. Create the workflow live, one layer at a time, and inspect every generated file before continuing.

Run all terminal commands from the `demo-blog` project root. `npm start` and `npm test` use only the scripts already defined in `package.json`; they do not install dependencies.

## Starting state

1. Open `demo-blog` as the VS Code workspace root.
2. Run `npm start` and open the URL printed in the terminal.
3. In a second terminal, run `npm test` and confirm the five baseline tests pass.
4. Search for a note, open its card, return with **Back to all notes**, and then open `WORKSHOP_TASK.md`.

The clickable article page is part of the prepared baseline. The live task must preserve it; it is not a feature to build during the workshop.

## 1. Create repository instructions

Run `/create-instruction`, then provide this brief:

> Create repository-wide instructions for this dependency-free vanilla JavaScript blog. Preserve the purple, magenta, blue, and white design; use semantic accessible HTML; keep pure data logic in `src/posts.js`; keep list rendering in `src/app.js` and article rendering in `src/post-detail.js`; use Node built-ins only; add `node:test` coverage for behavior; run `node --test tests/posts.test.mjs`; and avoid unrelated rewrites.

Inspect the generated instruction file. Explain that instructions answer **how we write code** and activate automatically.

## 2. Create a reusable prompt

Run `/create-prompt`, then provide this brief:

> Create a prompt file named `build-blog-feature` for implementing a small user-facing blog feature. It should accept a feature description, read the project instructions and `WORKSHOP_TASK.md`, restate acceptance criteria, identify the smallest file set, preserve existing search and article navigation, add tests for pure behavior, implement the feature, run `node --test tests/posts.test.mjs`, and summarize evidence and remaining risk.

Inspect the generated `.prompt.md` file. Explain that a prompt answers **which saved request do we invoke manually**.

## 3. Create a repeatable skill

Run `/create-skill`, then provide this brief:

> Create a project skill named `blog-feature`. It should activate for filtering, sorting, reading metadata, article navigation, and other blog interactions. The workflow must read project instructions, turn the request into observable acceptance criteria, inspect the relevant files in `src/`, keep pure logic testable, preserve search and article-navigation behavior, preserve accessibility and visual design, run verification, and report one remaining manual check. Include an acceptance checklist and a dependency-free Node verification script as skill resources.

Inspect `SKILL.md`, its reference, and its script. Explain that a skill answers **which multi-step capability should load when the task matches**.

## 4. Create focused custom agents

Run `/create-agent` for each role below. Inspect the frontmatter, especially tools, after every creation.

### Blog Planner

> Create a user-invocable read-only Blog Planner. Give it only read and search tools. It should return the user outcome, acceptance criteria, existing patterns, a minimal file-by-file plan, verification, risks, and questions. It must never edit files.

### Blog Implementer

> Create a user-invocable Blog Implementer with read, search, edit, and execute tools. It should implement an approved plan, keep the project dependency-free, follow repository instructions and the blog-feature skill, preserve existing search and article navigation, add tests for pure behavior, run verification, and report changed files and evidence.

### Blog Reviewer

> Create a user-invocable read-only Blog Reviewer with read and search tools. It should review correctness, accessibility, scope, dependency-free architecture, visual consistency, test coverage, and regressions in existing search or article navigation; prioritize findings; and finish with approve or request changes plus the exact verification command.

### Feature Orchestrator

> Create a user-invocable Feature Orchestrator with agent, read, and search tools. Allow it to delegate only to Blog Planner, Blog Implementer, and Blog Reviewer. It must delegate one planning pass, one implementation pass, and one independent review pass; request a focused implementation follow-up only for concrete findings; never edit files directly; and finish with acceptance criteria and evidence.

Explain that custom agents answer **who acts, with which tools and responsibilities**. The orchestrator is another custom agent whose main tool is delegation.

## 5. Create deterministic verification

Run `/create-hook`, then provide this brief:

> Create a project hook that runs after recognized file-edit tools. It must execute the dependency-free Node test suite and return a concise pass or fail message to the agent. Do not block unrelated read-only tools. Keep the hook script reviewable and use only Node built-ins.

Inspect the hook configuration and helper script. Explain that a hook answers **what must run at a lifecycle event regardless of model choice**.

## 6. Use the workflow

Select **Feature Orchestrator** and send:

> Implement the feature in `WORKSHOP_TASK.md`. Use the planner, implementer, and reviewer. Keep the change dependency-free, preserve existing article navigation, and finish with tests plus browser evidence.

Watch four signals rather than every token:

1. Which role is active
2. Which files it reads or edits
3. When verification runs
4. Whether review findings cause a bounded follow-up

## Definition of done

- Category and search filters work together.
- Every card displays estimated reading time.
- Every card still opens the correct article, and **Back to all notes** returns to the index.
- Controls are keyboard accessible and not color-only.
- Eight unit tests pass.
- The diff contains no unrelated rewrite or new dependency.
- Browser behavior matches `WORKSHOP_TASK.md` without regressing the prepared baseline.

## Presenter fallback

The completed files and finished feature are in `workshop-assets/demo-blog-solution`. If one creation step takes too long, open the matching file there, explain its structure, and continue from the next layer.
