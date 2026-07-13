# Agent Lab Blog

A small, realistic vanilla JavaScript project for demonstrating VS Code agents, instructions, prompt files, skills, custom agents, subagents, and hooks.

There is nothing to install: no framework, bundler, package download, or runtime dependency. The tiny local server and tests use only Node.js built-ins.

## Project structure

```text
demo-blog/
|-- src/
|   |-- index.html       # semantic page structure
|   |-- styles.css       # responsive visual system
|   |-- posts.js         # data and pure domain logic
|   `-- app.js           # DOM rendering and events
|-- tests/
|   `-- posts.test.mjs   # unit tests for pure behavior
|-- WORKSHOP_LAB.md      # exact live /create-* sequence
|-- WORKSHOP_TASK.md     # live feature brief
|-- server.mjs           # dependency-free local server
`-- package.json         # project metadata and ES module mode
```

## Run it — no installation

```powershell
npm start
```

Open <http://localhost:4173>. Stop the server with `Ctrl+C`.

If port `4173` is already in use, the server automatically tries the next available port and prints the correct URL in the terminal.

If your terminal is already inside `src`, use:

```powershell
node ../server.mjs
```

You can also start it directly from the project root with `node server.mjs`.

## Verify it

```powershell
npm test
```

The direct Node.js command is `node --test tests/posts.test.mjs`.

## Workshop flow

1. Open this folder as the VS Code workspace.
2. Run the clean baseline and show that search works.
3. Open `WORKSHOP_LAB.md` and `WORKSHOP_TASK.md`.
4. Create instructions, a prompt, a skill, four agents, and a hook with the `/create-*` commands.
5. Inspect every generated file and explain its activation model and boundary.
6. Select **Feature Orchestrator** and implement `WORKSHOP_TASK.md` through planner → implementer → reviewer.
7. Review the diff, tests, hook feedback, and browser behavior.

The starter intentionally has no `.github` customization files. The completed reference is in `workshop-assets/demo-blog-solution`.
