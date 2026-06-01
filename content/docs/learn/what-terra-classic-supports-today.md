---
title: "What Terra Classic supports today"
description: "A plain-language status guide for live, proposed, disabled, and historical Terra Classic functionality."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/learn/what-terra-classic-supports-today.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Terra Classic documentation should separate what users can do today from what the community has proposed, discussed, or preserved for historical context.

This page is a documentation-status guide. It is not a live chain dashboard, explorer, staking dashboard, or market-data page. Use Terra Classic ecosystem tools and explorers for live balances, prices, validator data, governance voting, liquidity, and transaction history.

## Status language

Use these terms when reading this docs site:

| Status | Meaning |
| --- | --- |
| Live | Available on Terra Classic mainnet today through existing chain behavior or supported tooling. |
| Proposed | Described in product, governance, or design material, but not documented as a live mainnet product. |
| Governance-accepted | Accepted by governance as direction or scope, but still requiring implementation, testing, funding, deployment, or support before users can rely on it. |
| In development | Being designed, built, tested, or prepared, but not live for ordinary mainnet users. |
| Disabled | Existing or historical behavior that is not available as an active user route. |
| Historical | Useful for understanding Terra Classic history, but not current product behavior. |

If a page does not make status clear, treat the feature as unverified until you confirm it through current chain behavior, governance records, releases, or ecosystem tooling.

## Live core functionality

Terra Classic supports core L1 behavior:

- LUNC transfers
- USTC transfers as a legacy market-priced asset
- transaction fees paid in LUNC
- staking and delegation
- validator consensus
- governance voting
- CosmWasm smart contracts
- IBC functionality where channels and relayers are operational
- node operation and RPC/LCD/gRPC access

Live does not mean risk-free. Wallet security, validator behavior, market volatility, chain parameters, external liquidity, and governance decisions can affect user outcomes.

## Proposed or not fully implemented products

Some docs sections explain product directions that should not be treated as live user products unless a page explicitly says they are live and shows the source basis.

Important examples:

- [Forex Protocol](/forex-protocol/overview/) is documented as a proposed collateralized stable-asset system. Its own status page says it is not in production.
- [Swap Protocol](/swap-protocol/overview/) explains the Market Module 2.0 no-mint swap design. Read [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before treating it as an available route.

Product direction is valuable, but it is not the same thing as production availability.

## Historical or disabled behavior

The old Terra market module and algorithmic mint/burn model are historically important, but they should not be treated as a current product promise.

When the docs discuss pre-2022 Terra mechanics, read them as history unless the page clearly states that a redesigned and deployed Terra Classic mechanism exists today.

## Where to verify live data

Use external ecosystem tools for live data:

- explorers for transactions, addresses, blocks, and governance records
- staking dashboards for validator and delegation data
- market venues for prices and liquidity
- wallet interfaces for supported actions
- public endpoints for developer queries

The docs should help you understand what those tools mean. They should not replace them.

## Source and verification

Last verified: 2026-06-01

Verify live product availability through current chain behavior, governance records, releases, wallets, and ecosystem tools.
