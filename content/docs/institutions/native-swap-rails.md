---
title: "Native swap rails"
description: "How institutions should evaluate Swap Protocol and Market Module 2.0 as a native Terra Classic routing layer."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/native-swap-rails.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
Native swap rails describe the institutional use of [Swap Protocol](/swap-protocol/overview/).

Swap Protocol is the product name. Market Module 2.0 is the underlying no-mint market-module design.

It is proposed as a native L1 route for LUNC and USTC swaps using prefilled protocol liquidity, oracle-aware pricing, spread fees, burns, and safety controls.

## Institutional value

If implemented and activated, Swap Protocol could matter to:

| Institution type | Possible use |
| --- | --- |
| Wallets | Native LUNC and USTC swap interface with protocol-level states. |
| Payment gateways | Route between invoice asset and settlement asset where liquidity allows. |
| Exchanges | Monitor native swap prices, capacity, and market signals. |
| Market makers | Arbitrage or liquidity strategy around protocol swap routes and external markets. |
| Analytics providers | Track route availability, spread fees, burns, oracle participation, and pool exhaustion. |
| Treasury operators | Rebalance small positions through native rails when capacity and risk limits permit. |

This is infrastructure, not a magic liquidity source.

## What makes it different

Market Module 2.0 is designed to avoid the most dangerous part of the old Terra market module: uncontrolled minting.

The proposed design uses:

- no new LUNC or USTC minting during swaps
- prefilled protocol liquidity pools
- live oracle-aware pricing
- finite route capacity
- 0.35% spread fee
- 50% spread-fee burn
- 50% spread-fee routing to the Oracle Pool
- epoch-based burn logic for remaining pool balances
- oracle quorum and sanity checks

For institutions, the key word is bounded.

## What institutions should not assume

Swap Protocol does not provide:

- USTC repeg
- guaranteed swap availability
- unlimited liquidity
- fixed USTC value
- stablecoin redemption
- institutional market depth by itself
- guaranteed execution during oracle failure
- legal settlement finality beyond blockchain settlement

Any integration should expose failure states clearly.

## Payment gateway use

A payment gateway could use Swap Protocol as a routing option after it is live.

Example:

1. Merchant creates a USTC-denominated invoice.
2. User wants to pay with LUNC.
3. Gateway quotes an estimated LUNC-to-USTC route through Swap Protocol.
4. Gateway checks route status, oracle state, pool capacity, and fees.
5. User signs the transaction.
6. Gateway confirms settlement and reconciles the invoice.

This workflow is useful only if the route has sufficient liquidity and safe oracle state at the time of payment.

## Treasury use

A treasury desk could use Swap Protocol for controlled LUNC/USTC rebalancing when:

- route liquidity is sufficient
- the desired size is within risk limits
- external market prices are checked
- oracle state is healthy
- execution failure is acceptable
- final balances can be reconciled

Large institutions should assume external liquidity venues and OTC relationships may still be required.

## Required integration states

Institutional software should model:

| State | Why it matters |
| --- | --- |
| Route enabled | The module route can be attempted. |
| Route disabled | Governance, safety logic, or implementation state prevents use. |
| Insufficient liquidity | The output side cannot satisfy the requested amount. |
| Oracle quorum failure | Validator price participation is below required threshold. |
| TWAP sanity failure | Price input is outside the allowed safety range. |
| Fee estimate changed | Quote should be refreshed before signing. |
| Transaction failed | The gateway must explain whether the failure was wallet, chain, liquidity, or oracle related. |

Bad error handling will make the product look unreliable even when the protocol is behaving correctly.

## Read the product docs

Before integrating, read:

- [Swap Protocol](/swap-protocol/overview/)
- [How it works](/swap-protocol/how-it-works/)
- [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/)
- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/)
- [Developer reference](/swap-protocol/developer-reference/)

## Institutional conclusion

Swap Protocol should be positioned as a native routing layer with hard constraints.

That is a better institutional story than pretending it solves liquidity, repeg, or payment stability by itself.
