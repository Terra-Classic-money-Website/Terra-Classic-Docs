---
title: "Current vs proposed behavior"
description: "How builders should distinguish live Terra Classic behavior from proposed product designs and historical Terra mechanics."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/develop/current-vs-proposed-behavior.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Builders should separate current Terra Classic behavior from proposed designs and historical Terra mechanics.

This is especially important for swaps, USTC, tax behavior, burns, and stable-asset products.

## Current behavior

Current behavior is what an application can rely on after checking the live chain, supported wallets, current endpoints, and deployed software.

Examples include:

- LUNC transfers
- USTC transfers as a legacy asset
- staking and delegation
- governance voting
- CosmWasm contract execution
- node, RPC, LCD, and gRPC access

Applications should still handle chain changes defensively.

## Proposed behavior

Proposed behavior is described in governance, product, or design material, but should not be assumed live.

Examples include:

- Forex Protocol / Collateralized Stablecoin Module
- Market Module 2.0 / Swap Protocol unless production deployment is documented
- future multi-currency stable-asset rails

Proposed behavior can be important for planning, but production code should not rely on it until implementation and activation are verified.

## Historical behavior

Historical Terra behavior is useful context, but dangerous if treated as current behavior.

Examples include:

- old algorithmic mint/burn assumptions
- old stablecoin peg assumptions
- pre-collapse market-module behavior
- historical Treasury policy mechanics that no longer affect practical transaction behavior

## Builder rule

Before integrating any behavior, ask:

| Question | Why it matters |
| --- | --- |
| Is this live today? | Prevents building against product names instead of deployed features. |
| Is it proposed but not implemented? | Prevents exposing unavailable flows to users. |
| Is it historical? | Prevents old Terra assumptions from entering Terra Classic products. |
| Is the source current? | Prevents stale docs from becoming application logic. |
| Is live data needed? | Use explorers, endpoints, or ecosystem tools instead of static docs. |

## Source and verification

Last verified: 2026-06-01

Verify production behavior through current chain state, releases, endpoints, and supported tooling.
