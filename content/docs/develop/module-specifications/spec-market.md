---
title: "Spec Market"
description: "Market Module 2.0 swap mechanics, no-mint liquidity, and historical constant-product spread context."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/spec-market.md"
sourceDate: "2026-05-27"
---
> **Note**
>
> Terra Classic swaps are live again through [Swap Protocol](/swap-protocol/overview/), the user-facing product powered by Market Module 2.0. Market Module 2.0 reopens native LUNC and USTC swaps with a no-mint pool design, live oracle pricing, finite epoch liquidity, and hard safety controls.

## Current behavior

- **Native swaps live.** The market module supports LUNC and USTC swaps through Swap Protocol when the module is enabled, oracle checks pass, and pool capacity remains.
- **No minting during swaps.** Market Module 2.0 uses prefilled protocol liquidity pools instead of minting output supply.
- **Live oracle pricing.** USTC is priced by oracle-reported market data, not by a fixed 1 USD assumption.
- **Finite epoch liquidity.** LUNC and USTC are held in distinct swap pools. Output capacity is limited by available balances and epoch rules.
- **Remainder burns.** Remaining pool balances are burned at the next 30-day epoch boundary.
- **Safety-first failure.** Unsupported routes, depleted liquidity, oracle quorum failure, TWAP sanity failure, or module disablement should reject swaps rather than expand supply.

See the [Swap Protocol overview](/swap-protocol/overview/) and [Developer reference](/swap-protocol/developer-reference/) for product-level and integration guidance.

## Historical behavior

After May 2022, Terra Classic retained the market module but disabled the old algorithmic swap path to avoid uncontrolled mint/burn of LUNC. During that period, handlers and market state remained useful for backwards compatibility, but users relied on DEX liquidity pools for actual swaps.

Market Module 2.0 changes that status. It reopens the native route without returning to the historical mint/burn execution model.

## Parameters (`subspace`: `market`)

| Name | Description | Default |
| --- | --- | --- |
| `BasePool` | Virtual market depth used by market-module swap calculations. Market Module 2.0 constrains this through adaptive capacity and absolute clamps. | Query live chain state before relying on a fixed value. |
| `PoolRecoveryPeriod` | Blocks used for virtual pool recovery. Market Module 2.0 uses supply-scaled recovery behavior in the source design. | Query live chain state before relying on a fixed value. |
| `MinStabilitySpread` | Minimum spread imposed on swaps. | Query live chain state before relying on a fixed value. |

The legacy `TobinTax` parameter belonged to historical Terra stablecoin swap behavior. Swap Protocol is scoped to LUNC and USTC; stable-to-stable routing is disabled in the Market Module 2.0 source design.

## Queries and CLI

- **Parameters:** `terrad q market params`
- **Terra pool delta:** `terrad q market terra-pool-delta`

These calls are useful for analytics, monitoring, and backwards compatibility tooling. Applications that expose Swap Protocol should also track module enabled state, available route capacity, oracle status, and relevant execution errors where the deployed node software exposes them.

## Operational notes

- Swap Protocol is not a return to unlimited algorithmic mint/burn swaps.
- If the relevant output pool is depleted, a swap should fail instead of minting output tokens.
- If oracle quorum or TWAP safety checks fail, the module can disable or reject swaps.
- If a user or integration attempts a stable-to-stable route, the source design expects that route to be rejected.
- Integrators should read the [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) page before routing user transactions through the module.
