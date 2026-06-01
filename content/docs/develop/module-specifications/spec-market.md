---
title: "Market module (x/market)"
description: "Historical market-module behavior and the Market Module 2.0 no-mint source design."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/spec-market.md"
sourceDate: "2026-05-27"
---
> **Note**
>
> This page describes historical market-module behavior and the Market Module 2.0 source design used by [Swap Protocol](/swap-protocol/overview/). It should not be read as proof that a live mainnet Swap Protocol route is available. Read [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before making production or user-facing claims.

## Market Module 2.0 source design

- **No minting during swaps.** Market Module 2.0 is designed to use prefilled protocol liquidity pools instead of minting output supply.
- **Oracle-aware pricing.** USTC is priced by oracle-reported market data, not by a fixed 1 USD assumption.
- **Finite epoch liquidity.** LUNC and USTC are held in distinct swap pools. Output capacity is limited by available balances and epoch rules.
- **Remainder burns.** Remaining pool balances are burned at the next 30-day epoch boundary in the source design.
- **Safety-first failure.** Unsupported routes, depleted liquidity, oracle quorum failure, TWAP sanity failure, or module disablement should reject swaps rather than expand supply.

See the [Swap Protocol overview](/swap-protocol/overview/), [Governance and status](/swap-protocol/governance-and-status/), and [Swap developer reference](/swap-protocol/developer-reference/) for product-level and integration guidance.

## Historical behavior

After May 2022, Terra Classic retained the market module but disabled the old algorithmic swap path to avoid uncontrolled mint/burn of LUNC. During that period, handlers and market state remained useful for backwards compatibility, but users relied on DEX liquidity pools for actual swaps.

Market Module 2.0 is the proposed design for reopening the native route without returning to the historical mint/burn execution model.

## Parameters (`subspace`: `market`)

| Name | Description | Default |
| --- | --- | --- |
| `BasePool` | Virtual market depth used by market-module swap calculations. Market Module 2.0 constrains this through adaptive capacity and absolute clamps in the source design. | Verify against current implementation before relying on a fixed value. |
| `PoolRecoveryPeriod` | Blocks used for virtual pool recovery. Market Module 2.0 uses supply-scaled recovery behavior in the source design. | Verify against current implementation before relying on a fixed value. |
| `MinStabilitySpread` | Minimum spread imposed on swaps. | Verify against current implementation before relying on a fixed value. |

The legacy `TobinTax` parameter belonged to historical Terra stablecoin swap behavior. Swap Protocol is scoped to LUNC and USTC; stable-to-stable routing is disabled in the Market Module 2.0 source design.

## Queries and CLI

- **Parameters:** `terrad q market params`
- **Terra pool delta:** `terrad q market terra-pool-delta`

These calls are useful for backwards compatibility tooling and implementation review. Applications that expose any future Swap Protocol route should also track module enabled state, available route capacity, oracle status, and relevant execution errors where deployed node software exposes them.

## Operational notes

- Swap Protocol is not a return to unlimited algorithmic mint/burn swaps.
- If the relevant output pool is depleted, a swap should fail instead of minting output tokens.
- If oracle quorum or TWAP safety checks fail, the module can disable or reject swaps.
- If a user or integration attempts a stable-to-stable route, the source design expects that route to be rejected.
- Integrators should read the [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) page before routing user transactions through the module.

## Source and verification

Last verified: 2026-06-01

This page was source-reviewed during the docs content-remediation pass to remove live-product claims from Market Module 2.0 documentation. Use current Terra Classic core releases, governance records, wallet support, and explorers to verify future production availability.
