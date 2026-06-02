# Docs Navigation Architecture Implementation

Created: 2026-06-02

## Scope implemented

Implemented the navigation restructure from `026 - Docs Navigation Architecture Proposal - 2026-06-02.md`.

This was a navigation-only implementation. No docs markdown pages were deleted, moved, or rewritten.

## Navigation changes

Top-level sidebar groups are now:

- `Learn Terra Classic`
- `L1 Protocols`
- `Governance`
- `For Institutions`
- `Build & Operate`
- `Appendices`

Removed as top-level groups:

- `Welcome`
- `Staking Protocol`
- `Swap Protocol`
- `Forex Protocol`
- `Develop`
- `Run a Full Node`

Those pages and sections still exist inside the new grouping model.

## Learn Terra Classic

Changed `Learn Terra Classic` from a broad mixed section into grouped orientation:

- `Start here`
- `Basics`
- `Status and history`
- `Assets and economics`
- `Interchain`
- `Wallets`

Moved `Product status index` from `Appendices` into `Learn Terra Classic > Status and history`.

## L1 Protocols

Combined existing protocol/product sections into one `L1 Protocols` top-level group:

- `Staking Protocol`
- `Swap Protocol`
- `Forex Protocol`

Status-sensitive product wording was preserved. `Swap Protocol` still uses `Understand Swap Protocol`, not `Use Swap Protocol`, because production availability must remain externally verified before ordinary-user availability is implied.

## Build & Operate

Combined `Develop` and `Run a Full Node` into `Build & Operate`.

New subgroups:

- `Start building`
- `Local development`
- `Builder tooling`
- `Smart contracts`
- `Protocol reference`
- `Run infrastructure`

`Public Network Endpoints` now sits under `Run infrastructure`.

`Cosmes Contracts`, which was previously generated into the fallback `Reference` group, now appears under `Builder tooling > CosmES SDK` as `Contracts`.

## Files changed

- `scripts/build-docs-index.mjs`
- `scripts/docs-utils.mjs`
- `src/designsystem.tsx`
- generated docs data under `src/docs/generated`
- `src/docs/generated/terraClassicNetworkStatus.json` refreshed by validation

## Design-system update

Updated the local design-system sidebar sample so it reflects the new top-level navigation labels and a representative grouped branch.

No new visual pattern was introduced. Existing sidebar rows, label nodes, branch icons, and motion behavior were reused.

## Validation

Passed:

```bash
npm run docs:check
```

Result:

- refreshed Terra Classic PublicNode network snapshot
- generated docs manifest for 135 pages
- docs validation passed for 135 pages

Passed:

```bash
npm run check
```

Result:

- refreshed network snapshot
- generated docs manifest for 135 pages
- docs validation passed for 135 pages
- TypeScript build passed
- Vite production build passed
- static route generation wrote 135 route files plus `404.html`, `robots.txt`, and `sitemap.xml`
- static SEO validation passed for 135 sitemap URLs and 135 route canonicals

Vite emitted the existing large chunk warning. The build still completed successfully.

## Rendered QA

Rendered sidebar checks were completed locally at:

- desktop `1440 x 1000`
- mobile drawer `390 x 844`
- mobile deep active route `390 x 844` on `/develop/module-specifications/spec-market/`

Confirmed:

- six intended top-level groups render
- `Welcome` is removed as a top-level section
- `Staking Protocol`, `Swap Protocol`, and `Forex Protocol` are grouped under `L1 Protocols`
- `Develop` and `Run a Full Node` are grouped under `Build & Operate`
- `Product status index` appears in the status path
- `Cosmes Contracts` appears under `CosmES SDK`
- deep module-spec routes auto-expand the correct branch
- active page state works for `Market module (x/market)`
- no horizontal overflow at desktop or mobile widths

## Notes

The current nav shell expands the active deep branch fully. For module specifications, that means many module rows become visible when a module page is active. This is acceptable for now because it preserves wayfinding inside a large reference section.

If sidebar density still feels heavy after live review, the next change should be interaction-level hardening, not another content shuffle:

- active-section auto-scroll
- optional mobile group collapse
- tighter mobile sidebar spacing
- optional search-first behavior for very deep reference sections
