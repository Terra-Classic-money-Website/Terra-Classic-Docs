# Docs Remediation Implementation

Created: 2026-06-02

## Scope implemented

This implementation executed the work from `024 - Docs Remediation Scope and Implementation Plan - 2026-06-02.md`.

## Pages created

- `content/docs/learn/current-network-status-and-parameters.md`
- `content/docs/learn/upgrade-history-after-may-2022.md`
- `content/docs/learn/ibc-and-interchain.md`
- `content/docs/appendices/product-status-index.md`

## Network status implementation

Added a first-party docs utility page for Terra Classic chain parameters.

Implementation:

- added `scripts/write-network-status-snapshot.mjs`
- generated `src/docs/generated/terraClassicNetworkStatus.json`
- added `src/components/docs/NetworkStatusPanel.tsx`
- rendered the panel only on `learn/current-network-status-and-parameters`
- added daily GitHub Actions schedule for static snapshot refresh
- kept the page limited to network status and protocol parameters, not analytics

Source model:

- Terra Classic PublicNode LCD is the data source
- StatsBin is not cited and not consumed
- the page shows snapshot time, source endpoint, stale state, and live-refresh state
- audit follow-up expanded the panel to include consensus block limits, latest block height/time, treasury split values, oracle and market params, and selected module versions
- CosmWasm params are not exposed successfully by the current PublicNode LCD response, so the page shows Wasmd and WasmVM versions from `node_info` build dependencies and labels the params endpoint limitation explicitly
- data-integrity follow-up corrected tax-rate sourcing: the active burn tax is fetched from `/terra/tax/v1beta1/burn_tax_rate`, cross-checked against `/terra/tax/v1beta1/params`, and the zero value from `/terra/treasury/v1beta1/tax_rate` is now labeled as the legacy treasury tax-rate lever rather than as the current burn tax
- the snapshot writer now includes an integrity check for chain ID, core version, latest block height, burn-tax endpoint agreement, LUNC gas price, and IBC count shape; integrity failures fail the command instead of silently keeping an old snapshot
- data-integrity follow-up also corrected IBC count sourcing: channel, connection, and client-state endpoints now request `pagination.limit=1000` so the docs panel does not count only the default first response page

## Pages edited

Wallet/user pages:

- `content/docs/learn/wallets.md`
- all Keplr pages under `content/docs/learn/keplr`
- all Galaxy Station pages under `content/docs/learn/galaxy-station`

Status and cross-linking:

- `content/docs/start.md`
- `content/docs/learn/what-terra-classic-supports-today.md`
- `content/docs/develop/quick-start-guide.md`
- `content/docs/institutions/overview.md`
- `content/docs/institutions/integration-architecture.md`
- `content/docs/institutions/risk-and-due-diligence.md`
- `content/docs/swap-protocol/overview.md`
- `content/docs/forex-protocol/overview.md`

Cleanup:

- fixed old `/docs/...` body links
- removed the smart-contract TODO
- removed active-looking Terra.py legacy market-swap code
- updated stale full-node page titles and version examples
- tightened Swap Protocol live/proposed language
- corrected glossary wording for `columbus-5` and historical market swaps

## Validation changes

Updated `scripts/validate-docs.mjs` to fail on:

- old `/docs/...` internal body links
- `TODO`, `TBD`, or `placeholder` language in docs bodies
- stale full-node version examples such as `v3.6.0` and `go1.22.12`

The validator was tested with a temporary bad fixture and correctly failed on the old route and TODO patterns. The fixture was removed before final validation.

## Runbook updates

Updated `- START.md` to document:

- `npm run network:snapshot`
- `npm run network:validate`
- `docs:check` refreshing the PublicNode snapshot before docs validation
- daily GitHub Actions refresh for the static network-status snapshot

## Validation run

Passed:

```bash
npm run docs:check
```

Result:

- generated docs manifest for 135 pages
- docs validation passed for 135 pages

Passed:

```bash
npm run check
```

Result:

- refreshed PublicNode snapshot
- generated docs manifest for 135 pages
- docs validation passed for 135 pages
- TypeScript build passed
- Vite production build passed
- wrote 135 static route files, `404.html`, `robots.txt`, and sitemap
- static SEO validation passed for 135 sitemap URLs and 135 route canonicals

Rendered QA:

- production preview route checked at `/learn/current-network-status-and-parameters/`
- desktop check confirmed panel render, four key stats, `columbus-5`, and `4.0.1`
- mobile-width Playwright check at 390px confirmed no horizontal overflow, four key stats, and six parameter sections
- audit follow-up rendered QA confirmed eight parameter sections on desktop and 390px mobile, including block limits, oracle and market, module versions, and CosmWasm-related version rows

## Audit follow-up

After the first implementation pass, the scope was audited against every work package in `024`.

The audit found one incomplete area: the current network status panel did not expose enough of the requested gas/transaction limits, oracle and market parameters, treasury status, CosmWasm status, and module-version surface.

That gap was completed by adding:

- `cosmos/base/tendermint/v1beta1/blocks/latest`
- `cosmos/consensus/v1/params`
- latest block height and time
- block max gas and block max bytes
- treasury burn tax split and oracle split
- oracle vote period, vote threshold, reward band, and whitelist count
- market base pool, pool recovery period, and min stability spread
- selected module/dependency versions for Cosmos SDK, CometBFT dependency, IBC-Go, IBC hooks, Wasmd, and WasmVM

No other work-package gaps were found after this audit pass.

A second checklist pass found one missing IBC cross-link. `develop/module-specifications/spec-ibc.md` now links to the practical IBC page and current network status page, and `learn/strengths.md` now links to the new IBC page from the interconnectivity section.

## Source conflicts and caveats

Upgrade history after May 2022 is stronger from mid-2024 onward than it is for the earliest post-collapse period.

The current PublicNode governance API exposes the recent passed upgrade-related proposal range cleanly, including proposals `12118` through `12221`. Older release records exist in Terra Classic Core GitHub releases, but the exact mapping from each early release to on-chain proposal, upgrade height, and validator execution still needs historical reconciliation.

## Deferred issues

- full security, audit, and bug-bounty documentation
- complete full-node/operator rewrite beyond stale fixes
- Terra Classic Cookbook
- SDK support matrix
- full governance-to-execution register
- deeper module-spec rewrite
