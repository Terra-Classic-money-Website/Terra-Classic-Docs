# Contributing To Terra Classic Docs

Terra Classic Docs is an independent, community-maintained documentation site for Terra Classic. Contributions are welcome when they make the docs more accurate, clearer, safer, or better sourced.

## Contribution Principles

- Keep documentation neutral. Do not use docs pages to promote validators, projects, tokens, exchanges, or private interests.
- Be source-aware. Important claims should point to public sources, chain behavior, governance records, repository history, or clearly stated implementation status.
- Separate live, proposed, historical, experimental, deprecated, and unverified information.
- Do not include financial advice, investment recommendations, or guarantees.
- Prefer precise corrections over broad rewrites unless the existing page structure is clearly wrong.

## How To Propose Changes

Use issues for:

- factual errors;
- outdated commands, links, endpoints, or parameters;
- unclear explanations;
- missing topics;
- broken pages or broken assets.

Use pull requests for:

- typo and link fixes;
- source updates;
- documentation improvements;
- new docs pages;
- navigation changes;
- corrections to generated or imported source material.

Public changes should go through pull requests targeting `main`. The `main` branch is the GitHub Pages publishing branch for `docs.terra-classic.money`, so maintainers treat every merge as a live-site change.

## Pull Request Requirements

Every pull request should include:

- a clear summary of what changed;
- the reason the change is needed;
- links to sources when the change makes factual claims;
- the validation the contributor ran, if any;
- screenshots when the change affects layout, navigation, or rendered content.

GitHub required checks are the authority for technical merge readiness. Contributor checkboxes are useful context, but a pull request is not ready to merge until the required GitHub checks pass.

Failed checks do not mean a contributor acted badly. They mean the change still needs correction before it can safely publish.

## Maintainer Review

Maintainers review pull requests for:

- factual accuracy;
- source quality;
- neutrality;
- user safety;
- docs architecture fit;
- markdown and navigation consistency;
- build and validation status.

Maintainers may edit, port, rewrite, or supersede a pull request when that is the safest way to preserve documentation quality, source integrity, or site architecture.

## Risk Classes

Use this practical risk model:

- Low risk: typo fixes, one broken link, minor copy clarification, no shared layout or generated data changes.
- Medium risk: content or source changes affecting one page or a small docs cluster.
- High risk: shared components, navigation, CSS, markdown rendering, generated indexes, workflows, deployment, scripts, security, broad content migrations, or anything affecting many pages.

High-risk changes need stronger validation and may be integrated through a maintainer branch before publication.

## Local Validation

If you can run local checks, use:

```bash
npm ci
npm run check
```

`npm run check` builds the production site and runs the docs validation gate used by GitHub Actions.

If you cannot run local checks, still open the issue or pull request. GitHub Actions will run the required validation and show what needs attention.
