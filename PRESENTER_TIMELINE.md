# VS Code Agents — 40-minute presenter timeline

## Session outcome

By the end of the session, the team should understand how agentic coding works in VS Code, how instructions, prompt files, skills, custom agents, and hooks fit together, and how those layers can deliver one reviewed feature in a real project.

## How to use this guide

> **SAY ALOUD** — Text in blockquotes is your spoken script. It is written so that you can follow it closely when you need support, but it should still sound natural when spoken.

**PRESENTER CUE / DEMO ACTION** — Everything outside blockquotes tells you what to point at, open, type, or verify. Source links are reference material and are not part of the spoken script.

**Target duration:** 38–40 minutes at a calm speaking pace.

**Compressed route:** To finish in roughly 35 minutes, shorten slide 5 to its final paragraph, create only the Planner and Orchestrator live, show the prepared Implementer and Reviewer files, and use the prepared Hook if generation takes more than 45 seconds.

## Two important presenter notes

1. The blog is already scaffolded. On slide 7, describe “Scaffold” as the prepared baseline that protects workshop time. Do not build the site from scratch live.
2. Slide 7 does not show Prompt files as a separate step. Create the prompt after Instructions and before Skill, and explain that the slide simplifies the flow.
3. Clickable article pages are part of the prepared baseline. Show them briefly, then treat them as existing behavior that the live feature must not regress.

## At-a-glance timeline

| Time | Screen | Activity |
| --- | --- | --- |
| 00:00–00:45 | Slide 1 | Opening and purpose |
| 00:45–02:00 | Slide 2 | What the team will see |
| 02:00–04:30 | Slide 3 | Explain the agentic workflow |
| 04:30–08:30 | Slide 4 | Explain the customization layers |
| 08:30–10:30 | Slide 5 | Agent behavior patterns |
| 10:30–13:15 | Slide 6 | Planner, Implementer, Reviewer, Orchestrator |
| 13:15–14:30 | Slide 7 | Preview the workshop flow |
| 14:30–16:30 | VS Code + browser | Show the prepared baseline |
| 16:30–18:30 | VS Code Chat | Create Instructions |
| 18:30–20:00 | VS Code Chat | Create a Prompt file |
| 20:00–22:30 | VS Code Chat | Create a Skill |
| 22:30–27:30 | VS Code Chat | Create four Custom agents |
| 27:30–29:30 | VS Code Chat | Create a Hook |
| 29:30–34:00 | VS Code Chat | Run the orchestrated feature task |
| 34:00–36:00 | Diff, tests, browser | Verify the result |
| 36:00–37:45 | Slide 8 | Guardrails and security |
| 37:45–39:15 | Slide 9 | Takeaways |
| 39:15–40:00 | Slide 9 | Team question and close |

---

## Slide-by-slide talk track

### 00:00–00:45 — Slide 1: VS Code Agents

**Presenter cue:** Start with the change in the way AI is used, then state the purpose of the session.

#### SAY

> “AI-assisted development is no longer only about generating a function or explaining an error. The more interesting shift is toward agentic coding: giving AI an engineering outcome and allowing it to work through the project, use tools, run checks, and return evidence that we can review.”

> “Today I want to show what that looks like inside VS Code and, more importantly, how we can make it structured enough to use as a team workflow.”

#### TRANSITION

> “This will be a short presentation followed by a practical workshop in a real, dependency-free project.”

### 00:45–02:00 — Slide 2: Practical Team Workshop

**Point to:** Code, Chat, Terminal, and Document/Review around the agent.

#### SAY

> “An agent is useful because it can work across the same surfaces that we use as developers. It can inspect the repository, read documentation, edit several related files, run terminal commands, and then use the result of those commands as new context.”

> “That last part matters. The workflow is not only prompt in and code out. It is a loop: understand the goal, take an action, observe the result, correct the approach, and continue until there is evidence that the task is complete.”

> “The developer still owns the important decisions. We define the outcome, choose the boundaries, approve sensitive actions, and review the final result. The agent performs work inside those boundaries.”

> “The session therefore has three parts: first a shared mental model, then a live workflow in VS Code, and finally the guardrails that make the workflow repeatable and safe enough for a team.”

#### TRANSITION

> “Before we customize the workflow, let us define more precisely what the agent is actually doing.”

### 02:00–04:30 — Slide 3: What is a VS Code Agent?

**Point to:** Goal → Execution → Outcome.

#### SAY

> “In agentic coding, we do not begin with a request for one isolated piece of code. We begin with a higher-level engineering outcome. For example: add category filtering and estimated reading time to this blog, preserve accessibility, add tests, and do not introduce dependencies.”

> “The agent then gathers the context needed for that outcome. It can inspect the project structure, read the task and existing conventions, find the relevant functions, understand how the UI is rendered, and look at the current tests before changing anything.”

> “From there it breaks the work into steps. It might first isolate the filtering logic, then update the interface, then add tests, run them, and react if something fails. The result of one action becomes evidence for the next action. That repeated cycle of reasoning, tool use, observation, and correction is the agent loop.”

> “The useful difference is not simply that more code can be generated. The agent coordinates the work around the code: discovery, planning, edits, commands, verification, and sometimes review across multiple files.”

> “But the agent does not own the engineering decision. We still provide the goal, constraints, permissions, and definition of done. If the request is vague, the agent can execute efficiently in the wrong direction. If the completion criteria are vague, it can stop with something that looks plausible but has not actually been verified.”

> “A simple mental model is: we own the goal, the agent performs a bounded execution loop, and the result comes back to us as evidence for a final human decision.”

**Sources:** [How AI works in VS Code](https://code.visualstudio.com/docs/agents/concepts/overview), [Build with agents](https://code.visualstudio.com/docs/agents/overview), and [Agent concepts](https://code.visualstudio.com/docs/agents/concepts/agents).

#### OPTIONAL AUDIENCE QUESTION

> “When an AI-generated change fails in practice, which part was usually missing: enough project context, clear constraints, or a testable definition of done?”

#### TRANSITION

> “We could repeat all of that context in every prompt, but VS Code gives us several customization layers so that we can store the workflow with the project.”

### 04:30–08:30 — Slide 4: Core Customizations

**Presenter cue:** Point to one card at a time. Use the blog example to distinguish the layers; do not read the visible slide copy word for word.

#### SAY — INSTRUCTIONS

> “Instructions answer the question: how should work be done in this repository? They contain standards that should apply automatically, such as staying dependency-free, keeping pure logic separate from DOM code, preserving accessibility, making minimal changes, and running the correct test command.”

> “They are not the current feature request. They are the reusable rules that should remain true across many different requests.”

#### SAY — PROMPT FILES

> “Prompt files answer a different question: which complete request do we want to invoke again? A prompt file is manually selected as a slash command. It can contain expected inputs, a sequence of steps, required tools, and a definition of done.”

> “For example, we could create a reusable prompt for preparing a feature with tests and browser verification. Unlike instructions, it does not activate automatically just because the file exists.”

#### SAY — SKILLS

> “Skills package a repeatable capability. They can include instructions, a workflow, scripts, examples, checklists, and reference material. The description tells the agent when the skill is relevant, so it can load that capability when the current task matches.”

> “In our demo, the skill will describe how to implement and verify a blog feature while keeping the logic testable and the interface accessible.”

#### SAY — CUSTOM AGENTS

> “Custom agents answer: who is performing the work, and with which tools? A planner can receive read and search tools but no editing capability. An implementer can edit and execute. A reviewer can inspect the result independently without silently changing it.”

> “This lets us encode both a role and a permission boundary instead of re-explaining the role in every conversation.”

#### SAY — HOOKS

> “Hooks answer: what must happen deterministically at a specific lifecycle event? Instructions ask the model to follow a rule. A hook runs our own command regardless of whether the model remembered. That makes hooks useful for tests, formatting, logging, or blocking risky operations.”

#### MEMORY LINE

> **“Instructions define how we work. Prompt files save a request. Skills package a capability. Custom agents define who acts and with which tools. Hooks enforce what happens automatically.”**

#### SCOPE NOTE — SAY BRIEFLY

> “MCP servers extend what an agent can reach by connecting external systems. They are worth knowing about, but they are outside the scope of today’s workshop and outside the options currently available in our company.”

**Sources:** [Customize AI in VS Code](https://code.visualstudio.com/docs/agent-customization/overview), [Customization concepts](https://code.visualstudio.com/docs/agents/concepts/customization), [Custom instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions), [Prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files), [Agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills), [Custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents), and [Hooks](https://code.visualstudio.com/docs/agent-customization/hooks).

#### TRANSITION

> “These layers define the workflow, but the agent can still behave differently depending on the task and the evidence it receives.”

### 08:30–10:30 — Slide 5: Common Agent Behaviors

**Important clarification:** These are useful behavior patterns, not official VS Code product modes.

#### SAY

> “Sequential behavior follows a known procedure in a known order. A verification skill that always runs tests, then linting, then a build is a simple example. This behavior is predictable and works well for routine tasks.”

> “Reactive behavior changes direction when new evidence appears. If a test fails, a file has an unexpected structure, or a requested API does not exist, the agent adapts instead of blindly continuing with the original assumption.”

> “Deliberative behavior plans before editing. It is valuable when a change spans multiple files, contains trade-offs, or has a larger blast radius. The agent first identifies the affected areas and an implementation sequence, and only then begins the change.”

> “Real engineering workflows usually combine all three. We deliberate before a complex change, react to evidence while implementing, and finish with a sequential verification routine. The labels are useful because they help us decide how much structure a task needs.”

#### COMPRESSED ROUTE

If you are behind schedule, say only the final paragraph above.

#### TRANSITION

> “For larger tasks, we can make that structure more visible by separating planning, implementation, and review into focused roles.”

### 10:30–13:15 — Slide 6: Working with Multiple Agents

**Point to:** Planner → Builder → Reviewer, with the Orchestrator coordinating the flow.

#### SAY

> “The Planner begins by understanding the request and the existing project. It identifies affected files, risks, dependencies, test cases, and an implementation order. It deliberately stays read-only because its responsibility is to reduce ambiguity, not to start changing code before the direction is clear.”

> “The Implementer receives the approved direction and the tools required to change files and run commands. Its job is not only to produce code, but also to verify the change and report what it actually tested.”

> “The Reviewer is read-only again. It compares the implementation with the task, examines the diff, checks for regressions or unnecessary scope, and reports concrete findings. Keeping that role separate helps prevent the same context that produced a mistake from immediately declaring the result correct.”

> “The Orchestrator coordinates these roles. It sends the task to the Planner, passes the plan to the Implementer, asks the Reviewer for an independent check, and can request one bounded follow-up if the review finds a real issue.”

> “The point is not to maximize the number of agents. Each additional role adds time and coordination. The benefit appears when the separation gives us clearer outputs or safer permissions. In this example, only the Implementer needs editing and execution tools; the Planner and Reviewer can remain read-only, while the Orchestrator delegates rather than editing directly.”

**Sources:** [Custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents), [Subagents](https://code.visualstudio.com/docs/agents/subagents), and [Planning](https://code.visualstudio.com/docs/agents/planning).

#### TRANSITION

> “Now we will create that exact structure around a small blog feature and see how the layers combine.”

### 13:15–14:30 — Slide 7: Workshop Demo Flow

#### SAY

> “The mini blog is already prepared and running. That is intentional: the workshop is about the agent workflow, not about spending ten minutes scaffolding HTML and CSS.”

> “We will first prove that the baseline and its tests work. Then we will add project instructions, a reusable prompt, a skill, four focused agents, and a hook. Finally, we will give the Orchestrator one short feature request.”

> “The important thing to watch is how the final prompt becomes shorter while the workflow becomes more explicit. Context that would normally live in one very long prompt moves into versioned files that the team can inspect and review.”

> “The slide simplifies one detail: we will create the reusable Prompt file between Instructions and Skill.”

#### TRANSITION

> “Let us switch to VS Code and start with the existing evidence.”

---

## Live workshop talk track

### 14:30–16:30 — Show the prepared baseline

#### DEMO ACTION — SHOW

1. The repository tree and the absence of a `.github` customization folder.
2. Run `npm start` from the project root, unless the site is already open.
3. In a second terminal, run `npm test` and show the five passing baseline tests.
4. Search for a note, open its card, and use **Back to all notes**.
5. Open `WORKSHOP_TASK.md`.

#### SAY

> “The application already works, its notes open as real article pages, and the five baseline tests give us a known starting point. What is intentionally missing is the reusable agent setup. We are going to create those files one layer at a time so that we can see what each layer contributes.”

> “The task is category filtering plus estimated reading time. It is small enough for a live demo, but it still touches visible UI behavior, pure logic that we can test, accessibility requirements, and a clear no-dependency constraint.”

> “These existing tests matter because we now have evidence from before the change. Later, when the suite grows to eight tests, we can distinguish new behavior from accidental regression.”

> “The article page is not part of the feature we are about to build. It is protected baseline behavior. The new filtering feature is complete only if users can still open the correct note and return to the index.”

### 16:30–18:30 — Create Instructions

#### DEMO ACTION

Open `WORKSHOP_LAB.md`, copy the Instructions brief, and run `/create-instruction`.

#### SAY WHILE IT WORKS

> “The important part here is that I am not describing the category-filter feature. I am capturing repository standards that should apply to many future tasks: no dependencies, clear file responsibilities, accessible controls, minimal scope, and the correct verification command.”

> “The instructions also distinguish list rendering in `app.js` from article rendering in `post-detail.js`. That gives the agent a boundary and reduces the chance that a post-list feature unnecessarily rewrites the article page.”

> “That means the next request does not need to repeat these constraints. They become versioned team context rather than personal prompt-writing knowledge.”

**After creation:** Open the generated file and point to its location, automatic activation, constraints, and verification command.

#### TRANSITION

> “Instructions remove repeated standards from our prompts. Next we will remove a repeated request.”

### 18:30–20:00 — Create a Prompt file

#### DEMO ACTION

Copy the Prompt brief and run `/create-prompt`.

#### SAY

> “A Prompt file is explicit and manually invoked. It does not activate simply because it exists. We use it when we want to save a recurring request as a slash command.”

> “Notice that it can define the expected input, the steps, the available tools, and how the result should be verified. This is useful when the same kind of request appears repeatedly but does not require a full skill package.”

> “Our saved request also protects existing search and article navigation. That turns regression checking into part of the recurring workflow rather than something we hope to remember at the end.”

**After creation:** Open the prompt and point to its input, steps, tools, and verification.

#### TRANSITION

> “The Prompt file saves one reusable request. A Skill packages a broader capability and the resources that support it.”

### 20:00–22:30 — Create a Skill

#### DEMO ACTION

Copy the Skill brief and run `/create-skill`.

#### SAY WHILE IT WORKS

> “The description is especially important because it helps the agent recognize when this capability is relevant. The body then explains the workflow: inspect the relevant list or article files, keep pure logic testable, preserve search and article navigation, preserve accessibility, limit scope, and run verification.”

> “A Skill can also carry resources that would be awkward to repeat in a prompt. Here we include an acceptance checklist and a small verification script. Both are inspectable and versioned with the repository.”

**After creation:** Open `SKILL.md`, the acceptance checklist, and the verification script.

#### SAY AFTER OPENING THE FILES

> “This is the difference between a helpful paragraph and a reusable team capability. The workflow, supporting knowledge, and executable verification path live together.”

#### TRANSITION

> “We now have standards, a reusable request, and a repeatable capability. Next we define who performs each stage.”

### 22:30–27:30 — Create the Custom agents

Use the four briefs in `WORKSHOP_LAB.md`. Move quickly: show the full creation of the Planner, then focus mainly on the `tools` field for the remaining roles.

#### BLOG PLANNER — SAY

> “The Planner receives read and search tools only. Its output should identify affected files, risks, tests, and an implementation order. The absence of edit tools is intentional: planning should finish before implementation begins.”

#### BLOG IMPLEMENTER — SAY

> “The Implementer receives read, search, edit, and execute because its responsibility requires both code changes and verification. It must also preserve the existing article flow. More responsibility requires more authority, but only for this role.”

#### BLOG REVIEWER — SAY

> “The Reviewer is read-only again. It checks the task, the diff, the tests, accessibility, unnecessary scope, and regressions in search or article navigation. Independent review is more credible when the role cannot quietly repair its own findings.”

#### FEATURE ORCHESTRATOR — SAY

> “The Orchestrator coordinates the other roles. It can delegate, but it should not edit files directly. Its job is to preserve the sequence: plan, implement, review, and request one bounded correction if needed.”

**After each agent:** Open its frontmatter and point directly to the tool list. Say the role and permission boundary in one sentence, then continue.

#### COMPRESSED ROUTE

If you are behind schedule, create Planner and Orchestrator live. Open prepared Implementer and Reviewer files and compare their tool lists.

#### TRANSITION

> “The visible difference between these agents is not only their name or personality. It is the responsibility they own and the tools they are allowed to use.”

### 27:30–29:30 — Create the Hook

#### DEMO ACTION

Copy the Hook brief and run `/create-hook`.

#### SAY

> “Instructions tell the model what should happen. A Hook runs our own code at a defined lifecycle event. In this example, an edit should trigger the test suite and return a concise pass or fail signal.”

> “That gives us deterministic behavior, but not automatic safety. The Hook script still runs with our development environment’s permissions, so we need to review the command and understand its cost before enabling it.”

**After creation:** Open the JSON configuration and helper script. Point to the event and exact command.

#### TRANSITION

> “We have now moved most of the setup out of the final prompt and into versioned, reviewable project files.”

### 29:30–34:00 — Run the orchestrated feature task

#### DEMO ACTION

Select **Feature Orchestrator**.

#### TYPE IN CHAT

> `Implement the feature in WORKSHOP_TASK.md. Use the planner, implementer, and reviewer. Keep the change dependency-free, preserve existing article navigation, and finish with tests plus browser evidence.`

#### NARRATE ONLY THESE FOUR SIGNALS

1. Which role is active.
2. Which files it reads or edits.
3. When verification runs.
4. Whether Reviewer findings cause one bounded follow-up.

#### OPTIONAL LINES WHILE WAITING

> “Notice that the final request is short because the repository now contains the standards, capability, roles, and verification behavior.”

> “The Planner is reducing ambiguity before any edit begins.”

> “The Implementer has more authority because this stage requires it.”

> “The Reviewer is checking evidence rather than trusting the Implementer’s summary.”

> “The Orchestrator is coordinating the work; it is not becoming a second Implementer.”

**Hard cutoff:** If the live task is not ready at 34:00, stop waiting, open the prepared solution, and continue with verification. Waiting silently is not part of the workshop learning objective.

**If nested agents are unavailable:** Run Blog Planner, Blog Implementer, and Blog Reviewer as three explicit sessions and explain that the responsibilities remain the same even when the handoffs are manual.

### 34:00–36:00 — Verify the result

#### DEMO ACTION — SHOW

1. The Git diff.
2. Run `npm test` and show eight passing tests.
3. Show category filtering combined with search.
4. Show reading-time labels with one-, two-, and three-minute examples.
5. Open a filtered note and use **Back to all notes** to prove the baseline still works.

#### SAY

> “Complete does not mean that the agent printed the word ‘done’. Complete means that the acceptance criteria are supported by visible evidence.”

> “Here we have three forms of evidence: automated evidence from the tests, implementation evidence from the diff, and product evidence from the browser.”

> “The browser check includes both the new behavior and the old article flow. That is important because feature completion includes preserving existing promises, not only adding a new control.”

> “I still review the change before committing it. The agent accelerated the workflow, but it did not replace the final engineering decision.”

#### TRANSITION BACK TO SLIDES

> “The workflow is useful, but it remains useful only while the boundaries and review points stay explicit.”

---

## Closing slides

### 36:00–37:45 — Slide 8: Best Practices and Guardrails

#### SAY

> “The first guardrail is task quality. Give the agent a concrete outcome, the relevant context, explicit constraints, and a definition of done that can be verified.”

> “The second is least privilege. A role should receive only the tools required by its responsibility. Planning and review usually need less authority than implementation.”

> “The third is deterministic verification. Skills can describe a reusable verification workflow, while Hooks can run specific commands at lifecycle events. We still review every script that will execute.”

> “The fourth is the human control point. Keep approval and review before commits, pull requests, merges, deployments, or any action that affects an external system.”

> “Finally, treat repository content as potentially untrusted context. Review instructions, scripts, generated commands, and unexpected scope changes instead of assuming that automation makes them safe.”

#### MAIN LINE

> **“Agents can speed up delivery, but quality still comes from clear tasks, narrow permissions, deterministic checks, and human review.”**

**Sources:** [Approvals and permissions](https://code.visualstudio.com/docs/agents/approvals), [Security](https://code.visualstudio.com/docs/agents/security), and [Hooks](https://code.visualstudio.com/docs/agent-customization/hooks).

### 37:45–39:15 — Slide 9: Key Takeaways

#### SAY

> “The first takeaway is to start with one real recurring workflow. Do not design a large multi-agent system before proving that one task benefits from it.”

> “Store repeated team standards as Instructions. Save recurring requests as Prompt files. Package richer repeatable capabilities as Skills. Add Custom agents when separate roles or permission boundaries create real value. Use Hooks for deterministic lifecycle actions.”

> “When the workflow becomes more complex, separate planning, implementation, and review—but remember that every additional agent adds coordination cost.”

> “And always define completion through evidence: acceptance criteria, tests, diff review, and visible product behavior.”

#### MAIN LINE

> **“A good agent setup does not maximize autonomy. It makes useful work repeatable, inspectable, and easier to review.”**

**Source:** [Agent best practices](https://code.visualstudio.com/docs/agents/best-practices).

### 39:15–40:00 — Close with the team

#### ASK THE TEAM

> “Which recurring task in our team would be the best small pilot for this approach?”

Take one or two short answers if time allows.

#### FINAL LINE

> **“The goal is not to remove the developer from the loop. The goal is to give the developer more leverage while keeping the workflow visible and controlled.”**

---

## Presenter fallback card

- If a `/create-*` command is slow: open the prepared file, explain its structure, and continue.
- If custom agents are unavailable: use the Prompt and Skill with the built-in agent.
- If nested agents are unavailable: run Planner → Implementer → Reviewer manually.
- If Hooks are disabled: run `npm test` manually and explain the lifecycle event.
- If implementation runs long: stop at 34:00, show the completed solution, and verify its eight tests.
- If the agent expands scope: stop it, compare the diff with `WORKSHOP_TASK.md`, remove unrelated edits, and verify again.
- If the port is occupied: use the URL already printed by the running server.

## One-sentence memory cues

- Agent: goal → bounded tool loop → reviewed evidence.
- Instructions: how the repository expects work to be done.
- Prompt file: a reusable request invoked manually.
- Skill: a capability that loads when the task matches.
- Custom agent: a focused role with an explicit tool boundary.
- Hook: deterministic code at a lifecycle event.
- Orchestrator: coordinates focused roles instead of implementing directly.
- Done: acceptance criteria supported by tests, diff review, and browser evidence.

---

## Appendix — official VS Code documentation source map

The presenter wording is adapted and simplified for speaking. It is not intended as verbatim quotation from the documentation.

| Timeline topic | Official VS Code source | What it supports |
| --- | --- | --- |
| Slides 2–3: agentic coding workflow | [How AI works in VS Code](https://code.visualstudio.com/docs/agents/concepts/overview), [Build with agents](https://code.visualstudio.com/docs/agents/overview), [Agent concepts](https://code.visualstudio.com/docs/agents/concepts/agents) | Agents can receive a high-level goal, plan steps, gather project context, use tools, edit files, run commands, and iterate on results. |
| Slide 4: customization layers and `/create-*` commands | [Customize AI in VS Code](https://code.visualstudio.com/docs/agent-customization/overview), [Customization concepts](https://code.visualstudio.com/docs/agents/concepts/customization) | The distinction and layering between Instructions, Prompt files, Skills, Custom agents, MCP servers, and Hooks. |
| Instructions | [Custom instructions](https://code.visualstudio.com/docs/agent-customization/custom-instructions) | Reusable coding guidelines and project conventions applied to requests. |
| Prompt files | [Prompt files](https://code.visualstudio.com/docs/agent-customization/prompt-files) | Reusable prompts that are invoked explicitly as slash commands. |
| Agent skills | [Agent skills](https://code.visualstudio.com/docs/agent-customization/agent-skills) | Task-specific capabilities packaged with instructions and supporting resources. |
| Slides 6–7: roles, planning, and delegation | [Custom agents](https://code.visualstudio.com/docs/agent-customization/custom-agents), [Subagents](https://code.visualstudio.com/docs/agents/subagents), [Planning](https://code.visualstudio.com/docs/agents/planning) | Specialized personas, tool boundaries, planning, handoffs, and delegated work. |
| Hooks and automated validation | [Hooks](https://code.visualstudio.com/docs/agent-customization/hooks) | Deterministic commands at agent lifecycle events. Hooks are currently documented as a preview feature. |
| Slide 8: safety and control | [Approvals and permissions](https://code.visualstudio.com/docs/agents/approvals), [Security](https://code.visualstudio.com/docs/agents/security) | Tool approvals, permission boundaries, sandboxing, and human oversight. |
| Slide 9: practical adoption | [Best practices](https://code.visualstudio.com/docs/agents/best-practices) | Clear tasks, relevant context, verification, review, and gradual adoption. |

**Accuracy note:** The sequential, reactive, and deliberative categories on slide 5 are general agent-behavior patterns used as an explanatory framework. They are not official VS Code agent types or product modes.
