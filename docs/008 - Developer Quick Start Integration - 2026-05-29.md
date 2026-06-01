# Developer Quick Start Integration

Created: 2026-05-29

## Scope

Added the owner-provided developer quick start guide as the first page in the `Develop` navigation group.

## Split Decision

The guide should remain one page for now.

Reasoning:

- It is a top-level orientation page, not a deep reference section.
- The docs already have dedicated pages for localnet, transaction behavior, builder tooling, CosmES, smart contracts, module specs, and endpoints.
- Splitting the guide immediately would duplicate existing pages and create more navigation surface before the quick-start flow has real usage feedback.
- The long table of contents is acceptable for a first-pass developer hub because the docs shell already provides an on-page table of contents on desktop.

Future split candidates:

- TypeScript/CosmES examples, if the SDK content grows beyond quick-start snippets.
- Python/backend automation, if the repo adds a dedicated backend integration track.
- Smart contract deployment, if localnet and contract workflows need a more complete hands-on tutorial.

## Implementation

- Moved the draft from `docs/terra-classic-developer-quick-start-guide.md` into canonical docs content at `content/docs/develop/quick-start-guide.md`.
- Added required frontmatter and source metadata.
- Removed unsupported horizontal-rule separators so the current markdown renderer does not display them as plain text.
- Flattened one nested ordered-list section so the current markdown renderer preserves the intended transaction-flow structure.
- Added internal links into existing deeper docs instead of turning the quick-start page into a disconnected standalone reference.
- Registered the page first in the `Develop` section, above `Run Terra Classic localnet`.
- Removed the original unnumbered draft from `docs` to avoid two sources of truth and keep `docs` reserved for numbered process documentation.

## Validation Plan

Run the docs content gate first:

```bash
npm run docs:check
```

Then run the full handoff gate:

```bash
npm run check
```

## Validation Results

- `npm run docs:check` passed and generated the docs manifest/search index for 77 pages.
- `npm run check` passed the full handoff gate:
  - docs index generation
  - docs metadata and internal link validation
  - TypeScript build
  - Vite production build
  - static route generation
- Vite emitted the existing chunk-size warning for the main JavaScript bundle, but the build completed successfully.
- Rendered QA on `/develop/quick-start-guide/` confirmed:
  - page title renders as `Quick start guide`
  - sidebar active item is `Quick start guide`
  - next-page navigation points to `Run Terra Classic localnet`
  - related-docs links are present
  - desktop table of contents is visible
  - mobile table of contents is hidden
  - no document-level horizontal overflow at `390 x 844` or `1440 x 1000`

## TOC Depth Correction - 2026-05-29

After visual review, the quick-start page's right-side `On this page` navigation was too long because it included every `h3` subsection from the guide.

Correction:

- Added `tocDepth: 2` frontmatter to the quick-start page.
- Extended the generated docs manifest with an optional per-page `tocDepth` field.
- Updated the docs shell table of contents to use the page-specific depth when present and keep the existing depth-3 behavior elsewhere.

This keeps the quick-start right rail limited to the main page headlines while preserving detailed section navigation on shorter pages.

Validation:

- `npm run docs:check` passed for 77 pages.
- `npm run check` passed the full static handoff gate.
- Rendered QA confirmed `/develop/quick-start-guide/` now has only depth-2 TOC links and no `.docs-toc-link--depth-3` entries.
