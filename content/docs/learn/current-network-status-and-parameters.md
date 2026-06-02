---
title: "Current network status and parameters"
description: "A docs-native Terra Classic status page generated from PublicNode endpoints, with current chain version, protocol parameters, IBC counts, and verification guidance."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic PublicNode LCD endpoints"
sourceSite: "https://terra-classic.publicnode.com"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "content/docs/learn/current-network-status-and-parameters.md"
sourceDate: "2026-06-02"
tocDepth: 2
---
This page gives Terra Classic Docs one small first-party status surface.

It is not an analytics dashboard, validator dashboard, market-data page, explorer, or ranking system. Its job is narrower: show current chain software and protocol parameters fetched from Terra Classic PublicNode endpoints, then explain how readers should verify the values before making operational decisions.

## What is shown

The live panel below covers:

- chain ID and node-reported software versions
- Cosmos SDK and CometBFT versions
- latest block height and time
- current burn tax, legacy treasury tax-rate lever, gas, consensus block limits, dyncomm, staking, slashing, governance, distribution, mint, treasury, oracle, market, and IBC parameters
- selected module and dependency versions, including IBC-Go, IBC hooks, Wasmd, and WasmVM where exposed through `node_info`
- source endpoint and snapshot timestamp
- whether the browser was able to refresh the snapshot live

The panel is intentionally limited. It does not show prices, validator rankings, staking APR, token volume, transaction history, exchange liquidity, or governance recommendation scores.

## How updates work

The site generates a JSON snapshot from Terra Classic PublicNode during the docs build. The GitHub Pages workflow also has a daily scheduled run so the page can refresh without turning the docs into a custom backend.

When the page loads in the browser, it also attempts a direct refresh from PublicNode. If that refresh succeeds, the panel shows live values. If it fails, the page keeps the generated snapshot and marks the state accordingly.

## Verification rules

Treat the values as current at the time shown, not permanent truth.

Before running validators, changing production integrations, or publishing high-impact claims:

- verify chain ID and software version from `node_info`
- verify governance, staking, tax, slashing, and oracle parameters from current LCD endpoints
- compare against Terra Classic Core releases when software versions matter
- check more than one endpoint provider for production operations
- treat stale snapshots as a prompt to verify directly

## PublicNode endpoints used

The snapshot uses `https://terra-classic-lcd.publicnode.com` and selected LCD paths, including:

- `/cosmos/base/tendermint/v1beta1/node_info`
- `/cosmos/base/tendermint/v1beta1/blocks/latest`
- `/cosmos/consensus/v1/params`
- `/cosmos/staking/v1beta1/params`
- `/cosmos/slashing/v1beta1/params`
- `/cosmos/gov/v1/params/voting`
- `/cosmos/distribution/v1beta1/params`
- `/cosmos/mint/v1beta1/params`
- `/terra/tax/v1beta1/burn_tax_rate`
- `/terra/treasury/v1beta1/tax_rate`
- `/terra/treasury/v1beta1/params`
- `/terra/tax/v1beta1/params`
- `/terra/dyncomm/v1beta1/params`
- `/terra/oracle/v1beta1/params`
- `/terra/market/v1beta1/params`
- `/ibc/core/channel/v1/channels?pagination.limit=1000`
- `/ibc/core/connection/v1/connections?pagination.limit=1000`
- `/ibc/core/client/v1/client_states?pagination.limit=1000`

The IBC count endpoints use an explicit pagination limit so the panel does not mistake the default first response page for the full channel, connection, or client-state set.

The current PublicNode LCD response does not expose `/cosmwasm/wasm/v1/params` successfully. The panel therefore shows CosmWasm-related software versions from `node_info` build dependencies instead of pretending that live CosmWasm params were fetched.

## Current parameter panel

The panel below is rendered from the generated snapshot and then refreshed in the browser when PublicNode is reachable.
