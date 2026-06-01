---
title: "Swap Protocol"
description: "The native L1 swap layer for exchanging LUNC and USTC through Market Module 2.0 without minting new supply."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/overview.md"
sourceDate: "2025-06-25"
tocDepth: 2
---
Swap Protocol is Terra Classic's native L1 swap product for exchanging LUNC and USTC.

It is powered by Market Module 2.0, a no-mint version of the historical market module design. The product name is **Swap Protocol**. The underlying technology is **Market Module 2.0**.

Swap Protocol exists to restore native swap utility without returning to the uncontrolled mint/burn behavior that helped damage Terra Classic in 2022.

Use this section if you are:

- a user who wants to understand LUNC and USTC swaps before signing a transaction
- a LUNC or USTC holder evaluating the protocol's burn, liquidity, and risk mechanics
- a validator responsible for oracle price feeds and chain safety
- a developer integrating swap status, routing, pricing, or module data
- a community member trying to separate real product mechanics from repeg speculation

## Product position

Swap Protocol is not a new token, not a DEX pool, not a centralized exchange bridge, and not a USTC repeg mechanism.

It is a native protocol route for LUNC and USTC swaps. Instead of minting tokens during swaps, Market Module 2.0 uses prefilled protocol liquidity pools. The pools are funded from tax proceeds allocated for the module, and remaining pool balances are burned at the start of the next 30-day epoch.

The product promise should stay narrow:

> Swap LUNC and USTC through Terra Classic's native L1 market route using protocol liquidity, oracle-aware pricing, spread fees, and hard safety controls.

## Why it exists

The original Terra market module depended on minting and burning between LUNC and Terra stablecoins. That design assumed stable assets could be valued against hard peg targets. During the 2022 collapse, unlimited swap capacity and fixed peg assumptions helped accelerate hyperinflation.

Market Module 2.0 changes the design constraints:

- swaps use prefilled pools instead of minting new supply
- USTC is valued by live oracle prices, not by a fixed 1 USD assumption
- swap capacity is bounded by the available pool and epoch rules
- safety guards can stop swaps when oracle conditions are not reliable
- remaining pool balances are burned at each epoch boundary

That makes Swap Protocol a utility and infrastructure product, not a promise that USTC will return to a particular price.

## What Swap Protocol does

| Capability | What it means |
| --- | --- |
| LUNC to USTC swaps | Users can exchange LUNC for USTC through protocol liquidity when the route has capacity. |
| USTC to LUNC swaps | Users can exchange USTC for LUNC through protocol liquidity when the route has capacity. |
| Oracle-aware pricing | Swap pricing uses validator-reported market prices instead of a fixed USTC peg assumption. |
| No-mint execution | Tokens are taken from and added to prefilled pools instead of minted during execution. |
| Spread fee | Enabled swaps collect a 0.35% spread fee in the output asset. |
| Burn and oracle funding | Spread fees route 50% to burn and 50% to the Oracle Pool. |
| Epoch burns | Remaining swap-pool balances are burned at the next 30-day epoch boundary. |

## What it does not do

Swap Protocol does not guarantee:

- USTC repeg
- LUNC price appreciation
- unlimited liquidity
- continuous swap availability
- execution during oracle outages
- a fixed exchange rate between LUNC and USTC
- a stablecoin redemption right

If liquidity is exhausted, oracle quorum fails, sanity checks fail, or governance disables the module, swaps can be refused.

## How this section is organized

- [How it works](/swap-protocol/how-it-works/) explains the no-mint pool design, oracle pricing, epochs, and module lifecycle.
- [Swap LUNC and USTC](/swap-protocol/swap-lunc-and-ustc/) gives a practical decision framework for using the protocol.
- [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/) explains spread fees, pool funding, burn routing, and finite capacity.
- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) covers price feeds, quorum, TWAP checks, disabled routes, and emergency controls.
- [Scenarios and examples](/swap-protocol/scenarios-and-examples/) translates source examples into user-readable behavior.
- [Risks and limitations](/swap-protocol/risks-and-limitations/) lists the risks that should stay visible in any serious product explanation.
- [Validator operations](/swap-protocol/validator-operations/) explains oracle-feeder responsibilities and operational expectations.
- [Developer reference](/swap-protocol/developer-reference/) gives a technical reference for builders.

## Product discipline

Swap Protocol should be presented as serious chain infrastructure.

The strongest version of the product story is not hype. It is the fact that Terra Classic can expose native LUNC and USTC swaps while avoiding the two design failures that matter most: uncontrolled minting and stale fixed-peg pricing.

## Not financial advice

Swap Protocol documentation explains protocol mechanics. It does not tell you whether to buy, sell, hold, swap, stake, or trade LUNC or USTC. LUNC and USTC remain volatile crypto assets, and USTC is treated by this protocol as a market-priced speculative asset rather than a guaranteed stable asset.
