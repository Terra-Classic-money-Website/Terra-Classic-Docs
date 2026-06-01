---
title: "Swap Protocol oracles and safety"
description: "The oracle, quorum, TWAP, route, liquidity, and governance controls that protect Swap Protocol."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/oracles-and-safety-controls.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
Swap Protocol depends on the oracle module.

The protocol cannot safely price USTC if validators are not reporting current market prices with enough voting power. Market Module 2.0 therefore treats oracle failure as a reason to stop swaps.

## Why oracle pricing matters

The historical market module assumed Terra stablecoins could be valued against their pegs. That assumption is not acceptable for USTC after the 2022 collapse.

Market Module 2.0 removes the fixed 1 USD assumption and is designed to use oracle-reported market pricing instead.

That means the design expects:

- USTC is treated as a market-priced asset
- validators must provide usable price data
- the module can stop swaps when price data is unsafe
- stale or missing oracle data should not allow token output to be drained

## Price vote period

The source design uses the existing oracle cadence:

| Control | Source rule |
| --- | --- |
| Price vote period | 5 blocks, approximately 30 seconds |
| USTC price | voting-power-weighted median for the current period |
| Quorum threshold | 50% voting power |

See the [Oracle module spec](/develop/module-specifications/spec-oracle/) for the broader oracle voting process.

## Quorum auto-disable

If either asset lacks price votes from at least 50% of voting power for 25 blocks, the market module disables itself until quorum is restored.

In product terms: if the chain cannot see enough reliable price votes, Swap Protocol should stop accepting swaps.

This is a necessary tradeoff. Swap availability is less important than preventing unsafe execution against missing or weak price data.

## TWAP sanity clamp

Each swap can fail if the current peg price differs by more than 10% from a 45-block oracle TWAP.

The TWAP is fed by the same oracle system. Its role is to detect price conditions that are too inconsistent for safe execution.

This control helps protect the module from short-lived price anomalies, stale feeds, and attempted manipulation.

## Disabled stable-to-stable route

The stable-to-stable route is hard-disabled in the source design.

The relevant failure state is `ErrStableSwapDisabled`.

Swap Protocol should therefore be understood as a LUNC and USTC product, not a generic stablecoin router.

## Finite pool capacity

Liquidity limits are also safety controls.

When the output pool does not have enough capacity, the module should refuse the swap. It should not mint new output tokens to fill the order.

This is one of the most important differences between Market Module 2.0 and the historical mint/burn model.

## Governance closure

The source design includes a governance-level brake: a two-thirds super-majority can close the market module.

Separately, in a severe chain-level emergency, validator coordination can halt the chain for remediation. That is not normal product operation, but it is part of the broader safety reality for a delegated proof-of-stake chain.

## User impact

Safety controls can create frustrating user outcomes:

- swaps may be unavailable
- quoted paths may fail before execution
- one direction may be exhausted before another
- integrations may need to show protocol-disabled states

That is still better than the old alternative: satisfying unsafe demand by expanding supply.

## Source and verification

Last verified: 2026-06-01

This page describes safety controls from the Market Module 2.0 source design. It should be paired with [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before any production claim is made.

## Integration impact

Applications that expose Swap Protocol should handle disabled states clearly.

At minimum, interfaces should distinguish:

- module disabled
- insufficient pool liquidity
- unsupported route
- oracle quorum failure
- TWAP sanity failure
- transaction fee or account-balance failure

Do not collapse all failures into a generic "swap failed" message. Users need to know whether the issue is temporary market safety, insufficient liquidity, wallet balance, or an unsupported route.
