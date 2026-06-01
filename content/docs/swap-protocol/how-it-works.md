---
title: "How it works"
description: "How Swap Protocol uses Market Module 2.0 pools, oracle prices, epochs, fees, and safety controls."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/how-it-works.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
Swap Protocol is designed around Market Module 2.0.

This page explains source-defined mechanics. Read [Governance and status](/swap-protocol/governance-and-status/) before treating these mechanics as live mainnet behavior.

The key design change is simple: swaps do not mint new LUNC or USTC. They move existing tokens between user balances and protocol swap pools.

## The old failure mode

The historical market module used virtual liquidity and mint/burn logic. When a user swapped between Terra stablecoins and LUNC, the module could mint output tokens according to a pricing curve and oracle assumptions.

That model became dangerous because:

- swap capacity could be too large
- pool recovery could refill capacity too quickly
- UST was treated as if it still had a hard 1 USD peg
- minting could run faster than market demand could absorb

Market Module 2.0 is designed to keep the useful part of the market route while removing minting from swap execution.

## The no-mint pool model

Swap Protocol is designed to use distinct protocol pools for LUNC and USTC.

At the start of a 30-day epoch, token balances allocated to the market-module liquidity pool are moved into the swap pools. Those balances become the available liquidity for that epoch.

During the epoch:

- a LUNC to USTC swap sends LUNC into the module and takes USTC out of the USTC pool
- a USTC to LUNC swap sends USTC into the module and takes LUNC out of the LUNC pool
- the output amount is priced through the module's market logic and oracle prices
- no new output tokens are minted

At the start of the next epoch, remaining balances in the swap pools are burned.

## Epoch lifecycle

Swap Protocol operates around 30-day epochs.

| Phase | What happens |
| --- | --- |
| Pool accumulation | Eligible tax proceeds allocated to Market Module 2.0 accumulate for the next epoch. |
| Epoch start | LUNC and USTC balances are moved into distinct swap pools. |
| Active swaps | Users could swap while the module is enabled, oracle checks pass, and pool capacity remains. |
| Capacity changes | Swap direction changes pool balances. One-sided flow can exhaust one side. |
| Epoch boundary | Remaining balances in the pools are burned, and the next epoch starts with newly allocated liquidity. |

The source design explicitly excludes voluntary burns from the 30-day pool calculation. Voluntary burns are coins intentionally sent to the burn module by users, exchanges, or other entities. They should not be treated as liquidity funding because doing so could reduce voluntary burn support.

## Pricing

USTC is not treated as a fixed 1 USD asset.

Swap Protocol uses oracle-reported market pricing. Validators report prices through the oracle module, and the module uses voting-power-weighted median pricing for the relevant period.

This matters because the protocol is not pretending USTC is already repegged. USTC is priced as a market asset.

## Capacity

Liquidity is finite.

If enough users swap in one direction, the output pool for that direction can be depleted. When available allowance or pool capacity is exhausted, the swap is refused instead of minting new tokens to complete the trade.

That refusal is a safety property, not a product bug.

## Adaptive throttling

The source design uses adaptive parameters to control how much capacity can be exposed during an epoch.

The important concepts are:

- **base_pool** controls the virtual market depth used by the swap calculation
- **Pool Recovery Period** controls how quickly virtual capacity recovers
- **supply scaling** adjusts recovery behavior as LUNC supply changes
- **absolute clamps** cap the allowed virtual pool size

The product implication is that Swap Protocol is intentionally bounded. It is designed to reopen native swaps only if implementation and activation occur without allowing the module to become an unlimited output source.

## Fees

When the module is implemented, enabled, and allowance remains, the design applies a 0.35% spread fee.

The fee is collected in the output asset:

- USTC to LUNC swaps collect the fee in LUNC
- LUNC to USTC swaps collect the fee in USTC

The fee is routed 50% to burn and 50% to the Oracle Pool.

The chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for Swap Protocol execution.

## Safety controls

Swap Protocol can refuse swaps when safety conditions fail.

Core controls include:

- oracle quorum requirements
- TWAP sanity checks
- finite pool capacity
- disabled stable-to-stable routing
- governance-level module closure

See [Swap Protocol oracles and safety](/swap-protocol/oracles-and-safety-controls/) for the operational detail.

## Source and verification

Last verified: 2026-06-01

This page describes the Market Module 2.0 source design. It should be paired with [Implementation status](/swap-protocol/implementation-status/) before any production claim is made.
