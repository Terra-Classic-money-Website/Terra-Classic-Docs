---
title: "Fees, buybacks, and liquidity"
description: "How the Forex Protocol source describes mint and redemption fees, secondary collateral, LUNC buybacks, vaulting, and DEX liquidity."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/fees-buybacks-and-liquidity.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Forex Protocol's source design uses fees for more than revenue.

Mint and redemption fees become secondary collateral. That secondary collateral is proposed to fund automatic LUNC buybacks.

## Mint fee

The source defines a 1.5% mint fee.

The fee is paid in the same stablecoin used for minting:

| Mint collateral | Fee asset |
| --- | --- |
| EURC | EURC |
| USDC | USDC |

The source explicitly avoids requiring users to buy USTC or a separate token to pay the fee.

## Redemption fee

The source also defines a 1.5% redemption fee.

The fee is paid in the same stablecoin withdrawn:

| Redemption collateral | Fee asset |
| --- | --- |
| EURC | EURC |
| USDC | USDC |

This is intended to avoid token-hopping and make the user path simpler.

## Secondary collateral reserve

All mint and redemption fees are proposed to accumulate in the Forex Secondary Reserve.

The source describes this reserve as secondary collateral. It is not the same as the primary collateral backing EUTC redemption.

The proposed reserve purpose is:

- collect fees in EURC or USDC
- use those fees for LUNC buybacks
- store purchased LUNC in a permanent vault
- strengthen long-term LUNC scarcity according to the source design

## LUNC buyback route

The source says secondary collateral is periodically swapped for LUNC through the best available DEX route at the time of buyback.

Named DEX environments:

| DEX environment | Source-described fee context |
| --- | --- |
| GDEX | 0.3% swap fee, split as 0.2% to LPs and 0.1% to DEX shares. |
| Terraswap | 0.3% total swap fee, 100% to LPs. |
| Terraport | 0.3% swap fee. |

The source also says the chain earns the 0.5% tax on every native swap.

These should be treated as source-defined design assumptions. A production implementation must verify actual route availability, fee behavior, tax treatment, and contract compatibility before launch.

## Permanent LUNC vault

The source proposal sends purchased LUNC to a permanent protocol vault.

The source describes vault-held LUNC as:

- non-circulating
- not spendable
- growing over time
- part of the long-term scarcity and collateral story

This is one of the most sensitive design choices. Several comments in the source thread argue that buyback LUNC should go to the burn wallet instead of a permanent vault. The proposer argues that the vault is collateral-related and should not be burned.

The docs should not hide that disagreement. See [Risks and open questions](/forex-protocol/risks-and-open-questions/).

## Proposed liquidity pools

The source says the community pool may seed initial liquidity for:

- EUTC/LUNC
- EUTC/USTC
- EUTC/USDC

These pools matter because the product depends on DEX liquidity for market access, arbitrage, and peg support.

The source does not prove that liquidity is already funded. It says liquidity investment would require a later proposal after development.

## Why liquidity is central

Collateral alone does not make a useful stable asset.

Users need practical markets:

- to enter EUTC
- to exit EUTC
- to arbitrage EUTC when it trades away from target value
- to route between EUTC and Terra Classic ecosystem assets
- to create enough on-chain volume for the product to matter

The source discussion includes a direct concern: why would users choose this stablecoin instead of established stablecoins such as USDT?

That is a valid product question, not a hostile question. Forex Protocol needs liquidity, integrations, and a reason to use EUTC.

## Revenue and activity assumptions

The source describes chain and ecosystem revenue sources as:

- on-chain tax
- LP fees on DEX trades
- protocol fees on minting and redemption
- buybacks using protocol fees

Those revenue paths only matter if users mint, redeem, trade, and provide liquidity.

The docs should not imply that fees, buybacks, or volume are guaranteed.

## What this means for launch planning

A credible Forex Protocol implementation plan should include:

- exact fee accounting
- reserve accounting
- buyback trigger rules
- DEX route selection rules
- failed-route handling
- slippage limits
- vault address and permissions
- liquidity funding assumptions
- monitoring for pool depth and peg deviation
- reporting for fees collected, buybacks executed, and vault balances

Without that, the product is too opaque for a stable-asset system.

## Honest product claim

The defensible claim is:

> Forex Protocol proposes a fee-funded secondary reserve that can buy back LUNC and support protocol-owned vault logic if the CSM is implemented and used.

The indefensible claim is:

> Forex Protocol guarantees LUNC appreciation, deep liquidity, stable demand, or profitable arbitrage.
