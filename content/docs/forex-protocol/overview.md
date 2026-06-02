---
title: "Forex Protocol"
description: "The proposed Terra Classic L1 product for collateral-backed, fiat-pegged stable assets, built around the Collateralized Stablecoin Module."
status: reviewed
reviewed: true
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/overview.md"
sourceDate: "2025-12-07"
tocDepth: 2
---
Forex Protocol is a proposed Terra Classic L1 stable-asset system.

The technical mechanism described in the source material is the Collateralized Stablecoin Module, or CSM.

The product goal is to let Terra Classic support fiat-pegged stable assets backed by external collateral, starting with EUTC as a Euro-pegged Terra Classic stablecoin.

## Current status

Forex Protocol is not live.

It is not deployed on Terra Classic mainnet, not available in wallets, and not ready for users to mint or redeem stable assets. The product concept has been accepted by Terra Classic governance as Proposal 12209, but implementation work is still needed.

The current public product framing is:

- Forex Protocol is a governance-accepted L1 product concept.
- The first proposed stable asset is EUTC.
- The underlying technology is the Collateralized Stablecoin Module.
- The production implementation still needs a software team or company to build, test, document, review, and deploy it.
- A separate liquidity proposal or liquidity process may still be required after implementation work is defined.

Do not treat this section as a live user guide. Treat it as product, governance, and implementation documentation for a proposed L1 product.

For site-wide status context, see [Product status index](/appendices/product-status-index/).

## Product position

Forex Protocol is designed to replace the failed algorithmic stablecoin model with a collateral-backed architecture.

The source proposal describes it as a multi-currency, fully collateralized stablecoin system built directly on Terra Classic. Instead of relying on an algorithmic mint-and-burn relationship between LUNC and a stablecoin, the proposed CSM uses external collateral such as EURC or USDC to back issued stable assets.

The simplest product statement is:

> Forex Protocol aims to bring collateral-backed, fiat-pegged stable assets to Terra Classic, starting with EUTC, using collateral vaults, oracle pricing, mint and redemption controls, DEX liquidity, and protocol-owned LUNC buyback logic.

## Why it matters

Terra Classic's original identity was strongly connected to decentralized money and stablecoin utility. After the 2022 collapse, that stablecoin mechanism could not simply be restarted without repeating unacceptable risk.

Forex Protocol matters because it tries to preserve the useful product ambition - on-chain fiat-pegged assets - while changing the risk model:

- stable assets are backed by collateral rather than algorithmic expansion
- LUNC is not minted to defend a peg
- mint and redeem fees are paid in the same stablecoin used by the user
- fees become secondary collateral in the proposed design
- secondary collateral is proposed to buy back LUNC
- redemption limits and safety controls are intended to reduce run risk
- DEX liquidity is part of the peg-maintenance and market-access design

This makes Forex Protocol strategically different from both the old Terra market module and a simple wrapped-stablecoin listing.

## Who this section is for

Use this section if you are:

- a community member trying to understand what Proposal 12209 accepted
- an investor evaluating what Forex Protocol is and is not
- a validator reviewing the operational and oracle implications
- a developer or software company assessing the implementation work
- a wallet, dashboard, or explorer team planning future product support
- a governance participant reviewing open risks before funding or deployment decisions

## What Forex Protocol proposes

At a high level, the source design proposes:

| Product area | Source-defined idea |
| --- | --- |
| Stable asset | EUTC, a Euro-pegged Terra Classic stablecoin. |
| Collateral | EURC at 1:1, or USDC with a 0.5% premium. |
| Mint fee | 1.5%, paid in the same stablecoin used to mint. |
| Redemption fee | 1.5%, paid in the same stablecoin withdrawn. |
| Redemption control | No more than 10% of total EUTC supply redeemable per day. |
| Secondary reserve | Mint and redemption fees accumulate as secondary collateral. |
| LUNC buyback | Secondary collateral is proposed to buy LUNC through DEX routes. |
| LUNC vault | Purchased LUNC is proposed to be stored in a permanent protocol vault. |
| Liquidity | EUTC/LUNC, EUTC/USTC, and EUTC/USDC pools are proposed as initial liquidity targets. |
| Safety controls | Fiat oracles, vault accounting, redemption caps, rebalancing, and a multisig kill switch. |

## What it does not do today

Forex Protocol does not currently provide:

- live EUTC minting
- live EUTC redemption
- live Forex Protocol pools
- a deployed CSM contract or module
- production oracle integration
- a final collateral custody design
- a completed audit
- a wallet interface
- a guaranteed LUNC burn outcome
- a guaranteed stablecoin peg
- investment advice

Those gaps are not minor details. They are the actual implementation work.

## How this section is organized

- [Governance and status](/forex-protocol/governance-and-status/) explains Proposal 12209, the current not-live state, and the open implementation path.
- [Implementation status](/forex-protocol/implementation-status/) lists the evidence needed before production availability can be claimed.
- [Launch readiness](/forex-protocol/launch-readiness/) defines the minimum documentation, implementation, collateral, oracle, and risk evidence needed before live language is used.
- [How it is proposed to work](/forex-protocol/how-it-is-proposed-to-work/) translates the source design into the proposed mint, redeem, reserve, buyback, and liquidity flow.
- [Collateral and stable assets](/forex-protocol/collateral-and-stable-assets/) explains EUTC, EURC, USDC, premiums, collateral ratios, and vault accounting.
- [Fees, buybacks, and liquidity](/forex-protocol/fees-buybacks-and-liquidity/) covers 1.5% fees, secondary collateral, DEX routing, LUNC buybacks, and proposed pools.
- [Forex Protocol oracles and safety](/forex-protocol/oracles-and-safety-controls/) covers fiat price inputs, redemption caps, kill switch logic, and rebalancing controls.
- [Risks and open questions](/forex-protocol/risks-and-open-questions/) keeps unresolved issues visible, including vault-vs-burn controversy, demand risk, collateral structure, and implementation risk.
- [Forex Protocol developer reference](/forex-protocol/developer-reference/) gives builders and validators a technical reference for the implementation work.

## Product discipline

The strongest Forex Protocol story is not that it is already solved. It is that Terra Classic has a governance-accepted path to explore collateral-backed stable assets without returning to the old algorithmic failure mode.

That is a serious claim. It is also a limited claim.

## Not financial advice

Forex Protocol documentation explains a proposed product design and governance-approved work direction. It does not tell you whether to buy, sell, hold, stake, mint, redeem, or trade LUNC, USTC, EUTC, EURC, USDC, or any other asset.

## Source and verification

Last verified: 2026-06-01

Primary source:

- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)

Forex Protocol is described here as a proposed, governance-accepted product concept. Verify production availability through governance records, release notes, wallet support, and live chain tools before relying on it.
