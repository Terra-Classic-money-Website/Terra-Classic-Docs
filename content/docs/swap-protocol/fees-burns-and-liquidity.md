---
title: "Fees, burns, and liquidity"
description: "How Swap Protocol funds liquidity, charges spread fees, burns remaining balances, and routes oracle funding."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/fees-burns-and-liquidity.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
Swap Protocol is designed around finite liquidity and explicit burn accounting.

This page explains the Market Module 2.0 source design, not a live-data page or proof of production availability.

The core rule is that swaps use existing pool balances. They do not mint new LUNC or USTC to satisfy demand.

## Liquidity source

The Market Module 2.0 source design redirects part of eligible burn-tax proceeds into a temporary market-module liquidity pool.

At the first block of every 30-day epoch:

- LUNC assigned to market-module liquidity moves into a LUNC swap pool
- USTC assigned to market-module liquidity moves into a USTC swap pool
- each token is handled separately
- those balances become available for swaps during the epoch

The source describes the allocation as 60% of burn-tax proceeds, equivalent to 75% of the previous burn allocation under the stated tax-split model. The practical product point is that the swap pool is funded from prior-period tax proceeds, not from newly minted supply.

## Voluntary burns

Voluntary burns should be excluded from the pool calculation.

Voluntary burns are coins intentionally sent to the burn module by users, exchanges, or community entities. The source calls this out because treating voluntary burns as pool funding could reduce support from entities that burn voluntarily.

For documentation purposes, this distinction matters:

- tax-derived module liquidity can be used for Swap Protocol pools
- voluntary burns should remain burns unless governance explicitly changes the design

## Spread fee

When Swap Protocol is implemented, enabled, and capacity remains, the design charges a 0.35% spread fee.

| Condition | Fee behavior |
| --- | --- |
| Module disabled | No swap, no spread fee. |
| Module enabled and allowance remains | 0.35% of notional is collected. |
| Allowance exhausted | Swap is refused, no spread fee. |

The fee is collected in the output asset:

- USTC to LUNC: fee collected in LUNC
- LUNC to USTC: fee collected in USTC

## Fee routing

Spread fees are routed:

| Destination | Share |
| --- | --- |
| Burn | 50% |
| Oracle Pool | 50% |

This makes the swap route both a burn contributor and an oracle-funding contributor when users actually swap.

## No double taxation

The source design states that the chain-wide burn tax does not apply to these in-module swaps. The 0.35% spread fee replaces the burn tax for Swap Protocol execution.

This is important for user expectations. A user should evaluate the route by the quoted output, spread fee, and market price, not by assuming the normal transfer tax is added on top of the protocol fee.

## End-of-epoch burns

At the start of the next 30-day epoch, remaining swap-pool balances are burned.

This is the main deflation control in the design. Liquidity that was set aside for swaps but not paid out remains on-chain only until the next epoch boundary.

## Directional effects

The final burn mix depends on user behavior.

If swaps are balanced in both directions, pool balances can end the epoch close to the expected allocation. If flow is strongly one-sided, one output pool can be depleted while the other token accumulates.

That means one-sided usage can shift which token is burned more at the epoch boundary.

Examples:

- heavy USTC to LUNC flow can reduce remaining LUNC while increasing USTC held by the pool
- heavy LUNC to USTC flow can reduce remaining USTC while increasing LUNC held by the pool
- low swap usage can leave more of both pools to burn at epoch end

This is why Swap Protocol should not be described as a guaranteed fixed burn outcome for either asset. It is a bounded swap route with burn mechanics, and the exact burn composition depends on actual usage.

## Liquidity exhaustion

If a pool side is exhausted, the protocol should refuse swaps in that direction.

This protects Terra Classic from the old failure mode where the module could satisfy demand by minting output supply. In Market Module 2.0, finite liquidity is part of the safety model.

## What users should remember

Swap Protocol can generate:

- utility through native LUNC and USTC swaps
- burns through spread-fee routing
- additional epoch burns from remaining pools
- Oracle Pool funding through spread fees

It cannot guarantee:

- a fixed monthly burn amount
- balanced LUNC and USTC burn outcomes
- unlimited swap capacity
- profit from arbitrage
- continuous availability during oracle or liquidity stress

## Source and verification

Last verified: 2026-06-01

This page describes proposed fee, burn, and liquidity mechanics from the Market Module 2.0 source design. Use external explorers, governance records, releases, and wallets to verify any future production status or live values.
