---
title: "Forex Protocol oracles and safety"
description: "The proposed fiat oracle, redemption cap, vault, rebalancing, and emergency-control requirements for Forex Protocol."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/oracles-and-safety-controls.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Forex Protocol depends on safety controls because it deals with stable-asset issuance, collateral, redemption, and DEX liquidity.

The source design includes several controls, but none of them are live until implemented and tested.

## Fiat price oracles

The source says Forex Protocol needs on-chain fiat price oracles.

Named fiat prices include:

- USD
- EUR
- GBP
- JPY
- CAD
- SGD
- AUD
- CNY

The source also says prices should refresh every 30 seconds.

For the initial EUTC path, the most important pricing relationship is EUR/USD because EURC and USDC are both listed as possible collateral for a Euro-pegged asset.

## Why fiat pricing matters

EUTC is proposed as a Euro-pegged asset.

If a user mints EUTC using USDC, the protocol must account for the USD/EUR relationship. The source handles this with a 0.5% premium and live pricing assumptions.

Without reliable fiat pricing:

- mint ratios can be wrong
- redemption accounting can be wrong
- USDC collateral can become underpriced or overpriced against EUTC
- arbitrage can exploit stale values
- vault rebalancing can fail

Oracle quality is therefore a core product requirement, not a back-end detail.

## Daily redemption cap

The source includes this redemption limit:

```text
No matter how much EUTC is circulating, only 10% of total supply can be redeemed per day.
```

The source says the cap is intended to prevent:

- instant mint and redeem arbitrage loops
- large-scale redemption runs
- liquidity crunches in the USDC vault
- oracle-timing exploits

This is a strong safety control, but it also changes user expectations. Users should understand that redemption is proposed to be rate-limited.

## Vault infrastructure

The source describes a smart vault system that will:

- lock collateral such as USDC, EURC, and LUNC
- maintain over-collateralization ratios
- track minted outstanding supply
- automatically rebalance mint caps based on collateral depth and volatility

This requires precise implementation. A vault is not safe because it is called a vault. It is safe only if ownership, permissions, accounting, and emergency behavior are correct.

## Rebalancing

The source suggests portfolio rebalancing when there is a 5% differential between the value of USDC and EURC.

This is a design signal, not a complete algorithm.

A production implementation must define:

- what price sources measure the differential
- who or what can trigger rebalancing
- whether rebalancing is automatic, governance-controlled, or multisig-controlled
- what assets can be sold or moved
- what slippage limits apply
- how rebalancing events are reported

## Kill switch

The source includes a kill switch concept.

The source describes the kill switch as:

- multisig-controlled
- requiring multiple signers, with 5-of-9 given as a common example
- able to pause new redemptions temporarily
- not blocking user balances
- not stopping mints unless needed
- automatically resuming after a governance vote

This is not a final implementation spec. It is an emergency-control concept that must be turned into exact permissions and procedures before deployment.

## Governance and multisig boundary

Stablecoin controls must avoid two bad extremes:

- no emergency control when the system is under attack
- opaque human control over user assets

The source tries to solve this with multisig and governance resumption. The final design still needs to define the boundary between:

- automated contract logic
- multisig emergency action
- governance approval
- user redemption rights
- collateral movement
- public reporting

Without that boundary, the system will be hard to trust.

## Mint and redemption safety

The source claims the proposed design reduces collateral risk because the 10% daily redemption cap prevents large immediate exits and oracle-timing exploits.

That may be directionally reasonable, but it must be tested.

Production validation should include:

- mint then redeem loops
- large user redemption attempts
- rapid EUR/USD movement
- DEX spread changes
- missing or stale oracle prices
- sudden liquidity withdrawal
- one collateral asset becoming unavailable
- emergency pause and resume

## User-facing safety states

Any future interface should distinguish at least these states:

| State | User-facing meaning |
| --- | --- |
| Not launched | Forex Protocol is not available yet. |
| Mint available | New EUTC minting can be attempted. |
| Mint paused | New minting is temporarily unavailable. |
| Redemption available | EUTC redemption can be attempted within limits. |
| Redemption cap reached | The daily redemption limit has been used. |
| Redemption paused | Emergency controls paused new redemptions. |
| Oracle degraded | Pricing inputs are missing, stale, or unsafe. |
| Liquidity limited | DEX depth may not support the desired route. |

Generic "transaction failed" errors are not enough for this product class.

## Validator and operator implications

The source mentions on-chain fiat prices. If those prices depend on validator oracle participation or chain-level oracle infrastructure, validators become part of the product surface.

Before launch, operators need clear instructions for:

- supported price feeds
- feeder configuration
- monitoring
- missed-vote behavior
- failover providers
- incident reporting

See the [Oracle module spec](/develop/module-specifications/spec-oracle/) for the current Terra Classic oracle context.

## Safety summary

Forex Protocol should not launch as "trust us, it is collateralized."

It needs visible controls:

- collateral accounting
- fiat price feeds
- redemption limits
- vault permissions
- rebalancing rules
- emergency pause logic
- testnet evidence
- public monitoring

Those controls are the difference between a serious stable-asset product and another fragile narrative.
