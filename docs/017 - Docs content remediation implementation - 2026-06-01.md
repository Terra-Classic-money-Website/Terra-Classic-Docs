# Docs content remediation implementation

Created: 2026-06-01

## Scope

This implementation applies the accepted recommendations from `016 - Docs content audit - 2026-06-01.md`.

The work intentionally avoids turning Terra Classic Docs into a live analytics, explorer, validator dashboard, liquidity dashboard, or market-data product. The docs now explain product status, historical context, source discipline, and verification paths, while pointing readers to external ecosystem tools for live values.

## Implemented fixes

### Swap Protocol status language

Swap Protocol and Market Module 2.0 pages were corrected to stop implying production availability.

Changes include:

- Added `swap-protocol/governance-and-status.md`.
- Added `swap-protocol/implementation-status.md`.
- Reworded Swap Protocol overview, how-it-works, user flow, developer reference, validator operations, risks, scenarios, fees, and institutional native-swap pages.
- Reworded `develop/module-specifications/spec-market.md` so it describes historical behavior and the Market Module 2.0 source design rather than claiming native swaps are live.
- Added source/verification sections to trust-sensitive Swap pages.

### Draft/review state

The full corpus was not bulk-marked as reviewed. That would create false confidence.

Instead:

- New status/source pages are marked reviewed.
- Critical pages that were directly reviewed and corrected in this task are marked reviewed.
- A new `appendices/source-and-review-model.md` page explains what draft and reviewed mean.
- Remaining pages can move to reviewed later when specifically source-checked.

### Source visibility

Added or strengthened visible source/verification sections for status-sensitive pages, especially:

- Swap Protocol overview
- Swap Protocol governance and status
- Swap Protocol implementation status
- Swap Protocol developer reference
- Market module spec
- Forex Protocol overview
- Forex Protocol governance and status
- Forex Protocol implementation status
- Forex Protocol launch readiness
- institutional source and verification guide

### Treasury repetition

`develop/module-specifications/spec-treasury.md` was cleaned:

- Repeated seigniorage/stability-tax warning blocks were removed.
- The top historical warning was preserved.
- The page was renamed to `Treasury module (x/treasury)`.
- A source/verification note was added.

### Repetition and naming

Product-qualified names were added where duplicate labels created ambiguity:

- `Swap Protocol developer reference`
- `Forex Protocol developer reference`
- `Swap Protocol oracles and safety`
- `Forex Protocol oracles and safety`

Navigation labels were updated to match.

### Practical wallet guidance

Thin wallet action pages were expanded without turning them into full support manuals:

- Keplr send
- Keplr staking
- Keplr governance
- Galaxy Station send
- Galaxy Station staking
- Galaxy Station governance

The expanded pages include pre-checks, risk notes, memo warnings, external verification guidance, and source/verification sections.

## Added pages

### Learn

- `learn/what-terra-classic-supports-today.md`
- `learn/lunc-and-ustc.md`
- `learn/burns-tax-and-supply.md`
- `learn/history-after-the-collapse.md`
- `learn/what-terra-classic-is-not.md`

### Swap Protocol

- `swap-protocol/governance-and-status.md`
- `swap-protocol/implementation-status.md`

### Forex Protocol

- `forex-protocol/implementation-status.md`
- `forex-protocol/launch-readiness.md`

### Develop

- `develop/current-vs-proposed-behavior.md`

### Institutions

- `institutions/source-and-verification-guide.md`

### Appendices

- `appendices/source-and-review-model.md`

## Navigation changes

The docs navigation now includes the new pages in the relevant sections:

- Learn Terra Classic
- Swap Protocol
- Forex Protocol
- Develop
- For Institutions
- Appendices

## Deferred by design

These items were intentionally not implemented because they conflict with the revised scope or were explicitly deprioritized:

- Live analytics pages.
- Validator, liquidity, governance, or market-data dashboards.
- Broad imported module-spec rewrites.
- Bulk marking every page as reviewed.
- Replacing external ecosystem data tools with static docs content.

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

The Vite build still reports the existing large bundle warning for the main JavaScript chunk. This is a performance optimization warning, not a failure from this content remediation task.
