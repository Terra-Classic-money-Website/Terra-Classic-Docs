# Docs nav content cleanup

Created: 2026-05-29

## Purpose

Adjust the public docs navigation to remove low-value early pages and separate reference material from the learning flow.

## Implementation

- Removed the `Start here` docs page from `content/docs`.
- Removed the `Brand assets` docs page from `content/docs`.
- Renamed `Terra Classic protocol` to `About Terra Classic` in the nav and page frontmatter.
- Moved `Glossary` from `Learn Terra Classic` into a new `Appendices` nav section after `Run a Full Node`.
- Moved the glossary source from `content/docs/learn/glossary.md` to `content/docs/appendices/glossary.md` so the route and breadcrumbs match the new section.
- Updated internal links that pointed to removed or moved routes.

## Validation

- Regenerate the docs manifest and search index.
- Run the full static gate with `npm run check`.
- Confirm removed pages no longer appear in the generated manifest or search index.
