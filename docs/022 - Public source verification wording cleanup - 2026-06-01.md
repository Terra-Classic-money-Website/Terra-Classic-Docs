# Public source verification wording cleanup

Created: 2026-06-01

## Scope

Cleaned public `Source and verification` sections so they no longer expose internal audit, remediation, rewrite, or review-process language.

## Reason

Several public pages used wording such as "created from the docs content audit", "rewritten after review", or "during the docs content-remediation pass". That language is useful for internal process notes, but not for investors, community members, builders, or institutional readers.

## Changes

- Replaced internal process explanations with neutral public verification guidance.
- Kept useful reader-facing information:
  - last verified date
  - primary source links where relevant
  - where to verify live chain, governance, wallet, market, validator, and explorer data
- Updated source metadata on newly created context pages so generated docs no longer reference internal audit/remediation labels.
- Regenerated docs manifest and search index.

## Validation

Commands run:

```bash
npm run docs:check
npm run check
```

Results:

- Docs manifest generated for 131 pages.
- Docs validation passed for 131 pages.
- TypeScript build passed.
- Vite production build passed.
- Static route generation passed.
- Static SEO validation passed for 131 sitemap URLs and 131 route canonicals.

The existing Vite bundle-size warning remains informational and unrelated to this copy cleanup.
