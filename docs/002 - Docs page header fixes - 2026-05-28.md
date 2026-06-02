# Docs page header fixes

Created: 2026-05-28

## Purpose

Fix two docs-page presentation issues found during visual review:

- The first markdown block rendered too close to the divider below the page title and page summary.
- Imported docs page summaries repeated the first body paragraph instead of using the source docs page summaries.

## Implementation

- Restored imported docs `description` frontmatter from the source repository page metadata in `terra-classic-io/website/src/data/docs.ts` at commit `e305fbe051de9c218021cc3ff98e2e01db04f6dd`.
- Left markdown body content intact so the first paragraph still appears as the body introduction.
- Added a reusable gap between `.docs-page-header` and the following `.docs-markdown` surface.
- Reset the first markdown child top margin so pages beginning with either a paragraph or heading use the same post-divider rhythm.
- Added the page-header rhythm example to the local design-system source so future visual work can inspect the intended pattern.

## Validation plan

- Regenerate the docs manifest and search index with `npm run docs:index`.
- Run the full static gate with `npm run check`.
- Validate rendered desktop and mobile pages for `/learn/overview/`, including the corrected summary and divider spacing.

## Validation results

- `npm run docs:index` passed and generated the manifest for 78 pages.
- `npm run docs:check` passed metadata, link, heading, and image validation for 78 pages.
- `npm run check` passed the full static handoff gate: docs index, docs validation, TypeScript build, Vite production build, and static route generation.
- Vite emitted the existing chunk-size warning for the main JavaScript bundle, but the build completed successfully.
- Browser QA on `/learn/overview/` confirmed:
  - desktop/wide summary: `High-level walkthrough of the Terra Classic protocol, token utility, and where to dive deeper.`
  - first body paragraph remains the delegated proof-of-stake introduction
  - post-divider gap is 32px on desktop and 24px on mobile
  - no relevant console errors or framework overlay
- Browser spot checks on `/learn/protocol/` and `/learn/staking-and-governance/` confirmed the header summaries no longer duplicate the first body paragraph and the post-divider gap is 32px on wide desktop.
