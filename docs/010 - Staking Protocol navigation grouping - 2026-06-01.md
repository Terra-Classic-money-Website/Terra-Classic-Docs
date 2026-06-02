# Staking Protocol Navigation Grouping

Created: 2026-06-01

## Scope

This task grouped the existing Staking Protocol docs pages in the sidebar without changing the Markdown content, URLs, or page bodies.

## Navigation Structure

The Staking Protocol sidebar group is now:

- `Staking Protocol`
- `Use Staking Protocol`
  - `How it works`
  - `Delegate LUNC`
  - `Rewards and APR`
  - `Risks and unstaking`
- `Validators and governance`
  - `Choose a validator`
  - `Governance`
  - `Validator responsibilities`
- `Technical reference`
  - `Developer reference`

## Implementation Notes

- `scripts/build-docs-index.mjs` now supports label-only navigation nodes through generated nav blueprint data.
- `src/docs/generated/docsNav.ts` is generated alongside the manifest and search index.
- `src/docs/routing.ts` builds the nav tree from the generated blueprint instead of deriving it only from page parent references.
- `src/components/docs/DocsShell.tsx` renders label-only nav nodes as expandable buttons using existing sidebar motion and row behavior.
- `src/styles/docs.css` adds only the minimal reset required for label buttons to reuse existing nav row styling.

## Validation Plan

Because this changes navigation generation, generated TypeScript, and docs shell behavior, run:

```bash
npm run build
```
