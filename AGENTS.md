You are joining the "Terra Classic Docs" project.

Project goal:
Design and maintain the custom documentation site for Terra Classic at `https://docs.terra-classic.money`.

This repository was created by copying the Terra Classic Website project, but it must remain a dedicated docs repository. Do not rebuild it into a second copy of the marketing/information website.

Before doing any work, read these files and inspect these project sources in the project root first, in this exact order:

1. `-- 1. OG BRIEF - 2026.05.14.md`
3. `DESIGN.md` - if it exists, especially before any design, front-end, page, docs shell, docs navigation, component, content hierarchy, responsive, or motion work.
4. `designsystem.html` - before any visual/front-end work, and whenever a task touches typography, colors, padding, component states, spacing, motion, interaction behavior, or breakpoints.
5. The current docs shell and docs rendering implementation before designing or implementing pages, so new work extends the existing docs system instead of drifting into isolated one-off layouts.
6. The supplied wireframe, brief, or page-specific material for the requested task, when provided.
7. Then inspect `content/docs` and the imported source attribution relevant to the task.
8. Then check the `- KNOWLEDGE` folder if it exists, and read the project-owner-provided materials relevant to the task before starting work.
9. Then inspect the current validation setup before implementation:
   - test-related scripts in `package.json`
   - test runner config files
   - test folders and existing test files
   - any validation, diagnostics, fixture, audit, or backtest docs in `docs`
   - any runbook instructions in `- START.md` related to tests, checks, and validation

What those sources mean:
- `-- 1. OG BRIEF - 2026.05.14.md`: original product brief and target concept
- `DESIGN.md`: written design execution contract for page composition, hierarchy, density, responsive expectations, reusable pattern discipline, and rendered QA requirements
- `designsystem.html`: live visual and implementation source of truth for tokens, component states, motion, breakpoint behavior, and reusable UI pattern examples
- docs shell and docs rendering implementation: current canonical implementation example for design rhythm, density, responsive behavior, interaction quality, and how the design system is applied in production code
- supplied wireframes or page-specific materials: task-specific content structure and intent that must be translated through the existing design system and docs language
- `- KNOWLEDGE` folder: project-specific knowledge source provided by the project owner, which may contain documentation, articles, datasets, notes, specs, or other reference materials needed for correct execution
- validation setup: the current test/check architecture, execution cost, and project-specific validation workflow that must be understood before making changes

Important project constraints:
- "Terra Classic Docs" will be hosted on GitHub Pages and GitHub Pages only. Do not add any other hosting/runtime infrastructure.
- Use base path `/` because production runs on the custom subdomain `docs.terra-classic.money`.
- Do not use Docusaurus, VitePress, Astro Starlight, Mintlify, Nextra, or any external docs framework.
- Docs pages must be generated from markdown in `content/docs`; do not turn every docs page into a hand-written React component.
- Do not change the core concept from the original brief by accident.
- Do not treat validation as an afterthought. Understand how tests and checks are structured before implementation so you can run the right checks efficiently and avoid unnecessary full-suite cost during small scoped changes.

## Design & Front-end
- `DESIGN.md` is the written design execution contract. Use it together with `designsystem.html`; do not treat it as a replacement for the live design system.
- `designsystem.html` is the project source of truth for design and front-end implementation: typography, colors, component states, spacing, motion, and interaction behavior should be represented there first or kept in sync with it.
- When building new docs pages, sections, or components, always check `designsystem.html` and reuse or extend the existing design-system patterns instead of inventing isolated one-off UI behavior.
- Before designing or implementing docs pages, read `DESIGN.md`, inspect `designsystem.html`, inspect the docs shell implementation, and translate the supplied material through those constraints.
- If a new reusable page, section, component, motion, or responsive pattern is introduced, represent it in `designsystem.html` in the same task so future agents can reuse it.
- Do not duplicate token tables from `designsystem.html` into `DESIGN.md`. Tokens, exact values, and component examples belong in `designsystem.html` and the shared CSS/token files; `DESIGN.md` governs judgment, composition, hierarchy, workflow, and quality gates.
- Any new or changed interactive element must include appropriate smooth motion and animation, matching the quality level established in `designsystem.html`: hover states, opening/closing states, expanded/collapsed states, icon swaps, color transitions, and component state changes should feel deliberate rather than instant or abrupt.
- Motion must preserve layout stability. Buttons, links, and controls should not unintentionally jump, shift, or resize on hover unless that movement is explicitly part of the approved design-system behavior.

Expected behavior before implementation:
- Inspect the current repository state.
- Then briefly summarize:
  - what "Terra Classic Docs" is
  - what phase the project is in now
  - what constraints or gates apply to the requested work
  - how the current tests/checks are structured
  - what level of validation the task will likely require
- Only after that should you start implementation or propose changes.

## Project management
- All documentation created during the development process must be stored in the `docs` folder, following the current project convention.
- `docs` is the mandatory location for development-process documentation created during execution.
- This rule applies to implementation documentation, task documentation, phase documentation, architecture notes, validation notes, diagnostics notes, decision records, and progress-related technical records created while doing the work.
- This rule does not automatically require existing canonical project-entry documents to be moved into `docs`.
- Files such as the original brief, early audit, briefing prompt, or other explicitly designated control documents may intentionally remain in the project root if that is the project convention.
- Do not relocate or rewrite canonical control documents just to satisfy the `docs` rule unless explicitly instructed.
- Documentation is mandatory, not optional. Each phase, stage, task, and meaningful implementation step must leave behind written documentation in `docs`.
- Do not treat documentation as a final cleanup item. Create and update it as the work progresses so the repo always contains the current technical record.
- If a task changes architecture, assumptions, scope, methodology, support boundaries, validation approach, diagnostics, or operator workflow, that change must be documented in `docs` as part of the task.
- A task or phase should not be considered properly finished if its required documentation in `docs` is missing or outdated.
- Use repo markdown files as the technical source of truth.
- Every markdown file created inside the `docs` folder must use a filename that includes:
  - a leading sequential number
  - the document title
  - the creation date
- The purpose of this rule is to make docs files sort in creation order and remain easy to scan by humans.
- Use this filename pattern for all new `docs` markdown files:
  - `N - Document Title - YYYY-MM-DD.md`
- Example:
  - `001 - Project audit - 2026-03-29.md`
  - `002 - Architecture decisions - 2026-03-30.md`
  - `003 - Validation notes - 2026-04-02.md`
- Numbering must be monotonic and creation-order based: each new file gets the next available number so files appear in the order they were created.
- The date in the filename is the file creation date, not the last edit date.
- Do not rename older files just to match this rule unless explicitly instructed. Apply it to all newly created markdown documentation in `docs`, and to renamed files only when a task explicitly includes documentation normalization.

## Knowledge
- If a `- KNOWLEDGE` folder exists in the project root, treat it as a project-specific knowledge source provided by the project owner. Keep in mind that it will most likely include websites or pdf files exported to .md files and exports may not be ideal. Still it may be very valuabe source of info / knowledge
- The `- KNOWLEDGE` folder may contain documentation, articles, reference materials, datasets, notes, specifications, or other context needed for the work.
- Always check the `- KNOWLEDGE` folder before starting work if it exists, especially before making architectural, implementation, product, or research decisions.
- Use the `- KNOWLEDGE` folder as an additional project-context source alongside repo docs, and relevant code.
- Do not ignore or overwrite the contents of `- KNOWLEDGE`; treat them as intentionally provided input from the project owner.
- If information in `- KNOWLEDGE` conflicts with code, repo docs, or other sources, call out the conflict explicitly before proceeding.

## Git & Github
- Every project must use Git from the very beginning, regardless of size, scope, or expected lifespan.
- This applies to experiments, prototypes, internal tools, local desktop apps, web apps, websites, automations, and production products.
- Do not postpone Git setup. Initialize version control at project start so the project always has a recoverable history, traceable decisions, and safe collaboration workflow.
- Because the project owner is not a developer, the agent must take responsibility for ensuring Git is set up, used correctly, and kept operational from the start of the project.
- Do not assume Git is already configured correctly. Check the repo state early and flag missing initialization, missing remotes, broken ignore rules, unsafe workflow, or missing branch discipline.
- Every project must use two baseline branches from the beginning:
  - `dev` — the default working branch for all local development, experiments, edits, fixes, and ongoing implementation work.
  - `main` — the stable production / publishing branch.
- The agent must work on `dev` by default.
- The agent must not commit directly to `main` unless the project owner explicitly asks for a production / live / publish-ready update.
- The agent must not merge `dev` into `main` unless the project owner explicitly asks to push, publish, deploy, release, or update the live version.
- `main` must be connected to the GitHub remote when the project is intended to be hosted, published, deployed, backed up, or collaborated on through GitHub.
- For projects published with GitHub Pages, `main` is the canonical live branch unless the project owner explicitly specifies another deployment branch or folder.
- `dev` may remain local-only unless the project owner explicitly asks to push it to GitHub.
- If `dev` is intended to remain local-only, the agent must not publish or push the `dev` branch to GitHub.
- Before any live push, release, publish, deployment, or merge into `main`, the agent must clearly state what changes are included and confirm that the project owner asked for the live update.
- After publishing or merging to `main`, the agent must return the working context to `dev` unless there is a clear reason not to.
- Follow the project’s `- GITHUB FLOW.md` workflow as the default collaboration model for all projects.
- For local internal Mac desktop apps, this may be applied as a local Git + GitHub Desktop workflow without requiring a GitHub remote unless I explicitly ask for one.
- The canonical GitHub Flow reference for the project is the `- GITHUB FLOW.md` file in the root folder.
- That file is based on GitHub Docs and must be treated as the project-specific operating rule for branch and merge workflow.
- Read `- GITHUB FLOW.md` before making workflow assumptions, and follow it unless I explicitly instruct otherwise.
- If actual repo behavior conflicts with `- GITHUB FLOW.md`, call out the conflict explicitly before proceeding.
- If the required `dev` / `main` branch model conflicts with `- GITHUB FLOW.md`, call out the conflict explicitly and treat this AGENTS.md rule as the higher-priority owner instruction unless I explicitly say otherwise.
- For local internal Mac desktop apps and small local static web based projects, mostly in the form of `index.html`, use GitHub Desktop as the primary Git/GitHub interface whenever practical.
- For web projects that are intended to be published online, use GitHub.com as the primary Git/GitHub platform and workflow surface.
- When choosing workflow steps, explanations, or instructions, optimize for the tool that matches the project type:
  - GitHub Desktop for local internal Mac desktop apps and small local static web based projects, mostly in the form of `index.html`, that will never be published online.
  - GitHub.com for web projects and internet-facing products.
- Favor safe, operator-friendly Git workflows that minimize terminal dependency for the project owner.
- When terminal Git usage is required, keep it minimal, explicit, copy-pasteable, and documented in the appropriate repo documentation.
- If a project lacks Git initialization, remote setup, ignore rules, branch strategy, or baseline workflow hygiene, fix or document that as an early project task rather than leaving it implicit.
- Always keep track of the project’s commit history and proactively suggest when a new commit should be made, including a clear recommendation for what should be included in that commit.

## Workflow & Quality Gates
- Before any change: inspect project configs/scripts, read existing AGENTS.md + relevant code.
- Always run relevant checks (lint, format, type-check, build, tests) *before* handing off. Never claim they passed unless executed. For docs-only changes, skip unless requested.
- Think first-principles: research official docs/best practices, compare to codebase, then implement or ask about trade-offs.
- Leave every repo better than you found it. Fix smells opportunistically (without scope creep).
- Be rigorous and pragmatic.
- Prefer clear technical reasoning over optimistic assumptions.
- Protect architectural coherence.
- If current code conflicts with the brief, call it out explicitly.
- If a task risks concept drift, state that clearly before proceeding.
- Design for low-operator-overhead workflows because the user is not a developer.
- When possible, leave behind tools, reports, and diagnostics that make future debugging easier.

## Validation Strategy & Test Efficiency
- Maintain a high test standard on every project. Do not reduce quality by casually deleting tests or skipping meaningful validation.
- Design test workflows in tiers so the fastest relevant checks run first and the full repo gate runs at the correct time. 
- Store all tests in "tests" folder
- Separate validation into:
  - inner-loop checks for the specific area being changed
  - domain-level checks for the feature or mode being modified
  - full-project gates before handoff, merge, release, or any repo-wide safety claim
- Do not default to running the entire test suite after every micro-change if the change is clearly scoped to one domain, mode, or subsystem.
- Always run the smallest set of tests that can credibly detect regressions in the code just changed, then expand outward only as risk justifies.
- If a change is isolated to one mode or subsystem, prefer targeted tests for that mode first. 
- If shared contracts, shared infrastructure, shared schemas, core runtime behavior, build configuration, or cross-mode logic changed, escalate to broader validation immediately because the blast radius is larger.
- Before handoff, always run the relevant final gates for the actual scope of the completed task. If the task is complete and could affect the wider project, run the full project gate.
- Never claim repo-wide safety from mode-local tests alone.
- Prefer keeping expensive high-value tests, but move them into the correct validation tier instead of forcing them into every small iteration loop.
- Treat slow tests as a test-architecture problem first, not as proof that the tests are unnecessary.
- When a suite becomes slow, improve the validation model by:
  - separating fast tests from integration and hardening tests
  - grouping tests by domain or mode
  - enabling targeted execution paths
  - reserving the most expensive full-suite checks for completion gates
- For every project, make test commands operator-friendly:
  - provide clear scripts for targeted checks
  - provide clear scripts for domain checks
  - provide one canonical full validation command
- Document the validation workflow in repo docs and in the operator runbook when the project requires terminal usage.
- The target outcome is: strong confidence, fast inner-loop iteration, and no habit of paying full-suite cost for every tiny fix.

## Launching the project
- If the project being built requires terminal commands to install, boot, run, rebuild, seed, migrate, test, or operate the app locally, those commands must be continuously documented and updated in `- START.md`. This file should be in root folder.
- `- START.md` is the canonical operator runbook for startup and local operation commands.
- Keep `- START.md` current as the project evolves. Do not wait until the end of the task or phase to update it.
- Whenever startup, setup, runtime, migration, worker, database, build, or debugging commands change, update `- START.md` as part of the same task.
- If a user must run commands before the app can be used, the task should not be considered properly finished unless the required commands are documented in `- START.md`.
- Prefer a low-friction `- START.md` structure that clearly separates: prerequisites, first-time setup, normal start, stop/restart, reset/rebuild, tests/checks, and troubleshooting commands.

## When making decisions, align them with:
- the original brief (if exist) first for product concept
- the actual repo state for implementation reality
- the need to minimize manual effort and maximize built-in diagnosability for a non-developer owner
