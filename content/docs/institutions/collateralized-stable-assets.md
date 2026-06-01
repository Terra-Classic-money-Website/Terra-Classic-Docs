---
title: "Collateralized stable assets"
description: "How institutions should evaluate Forex Protocol, EUTC, collateral, reserves, liquidity, and stable-asset rollout requirements."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/collateralized-stable-assets.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Collateralized stable assets are the proposed institutional path for bringing fiat-pegged settlement assets back to Terra Classic without returning to the failed algorithmic model.

The relevant product is [Forex Protocol](/forex-protocol/overview/). The underlying proposed technology is the Collateralized Stablecoin Module, or CSM.

## The product thesis

Forex Protocol aims to support stable assets backed by external collateral.

The first proposed asset is EUTC, a Euro-pegged Terra Classic asset backed by collateral such as EURC or USDC according to the source design.

The institutional thesis is:

> Terra Classic can support decentralized stable-asset utility only if new assets are backed by credible collateral, transparent accounting, safe mint and redemption rules, reliable oracles, sufficient liquidity, audits, and governance-controlled rollout.

That is the opposite of "turn the old algorithmic stablecoin back on."

## Current status

Forex Protocol is not live.

| Area | Status |
| --- | --- |
| Governance concept | Accepted as Proposal 12209. |
| EUTC | Proposed first stable asset. |
| CSM implementation | Not live on mainnet. |
| Minting | Not available. |
| Redemption | Not available. |
| Production liquidity | Not established. |
| Audit | Required before serious institutional use. |
| Wallet support | Required before user-facing use. |

Institutions should treat this as a proposed product path, not as current settlement infrastructure.

## Why institutions may care

Collateralized stable assets could matter to:

| Institution type | Possible role |
| --- | --- |
| Stablecoin issuers | Collateral participation, asset support, liquidity, or integrations. |
| Payment providers | Local-currency settlement assets for checkout and merchant settlement. |
| Fintech companies | Multi-currency wallet and remittance-style products. |
| Market makers | Liquidity between EUTC, LUNC, USTC, USDC, EURC, and external venues. |
| Custodians | Support for institutional wallets, reserve assets, and reporting. |
| Exchanges | Listing, deposit, withdrawal, and market support if assets become live. |
| Corporate treasuries | On-chain currency-denominated balances, subject to risk and compliance review. |

The opportunity is not just a token. It is the operating system around issuance, reserves, liquidity, compliance, and reporting.

## Minimum institutional requirements

Before any institution treats a Terra Classic stable asset as production-ready, it should require:

- live audited implementation
- clear collateral assets
- clear collateral custody and control model
- public reserve accounting
- mint and redeem rules
- redemption limits and queue behavior
- oracle source policy
- emergency pause policy
- liquidity venues and depth
- wallet and explorer support
- accounting and reconciliation tooling
- governance authority boundaries
- legal analysis in relevant jurisdictions

If an asset lacks these, it may still be a useful experiment, but it is not institution-ready.

## Collateral and redemption questions

The Forex Protocol source describes EURC and USDC collateral paths for EUTC, plus mint and redemption fees.

Institutions should ask:

- who or what controls the collateral
- how collateral is verified
- whether collateral is segregated by asset
- whether redemptions return same-kind collateral
- how EUR/USD pricing affects USDC-backed EUTC
- how mint and redemption fees are accounted for
- how redemption caps behave during stress
- how emergency controls are governed
- whether reserve reports can be independently verified

These questions are not paperwork. They are the product.

## Governance and legal boundary

Terra Classic governance can approve or reject protocol changes. It does not automatically create a legal issuer, regulated payment institution, fiduciary, trustee, or redemption counterparty.

If an institutional stable-asset product needs a legal issuer, custodian, reserve administrator, market maker, auditor, or payment institution, those roles must be defined separately.

Validators and community members cannot silently become those legal roles by voting on a proposal.

## What good implementation would look like

A serious Forex Protocol rollout should be staged:

1. publish implementation specification
2. define collateral custody and accounting
3. define oracle sources and failure behavior
4. build testnet implementation
5. run public tests
6. complete security review or audit
7. publish liquidity plan
8. publish wallet and explorer requirements
9. submit activation proposal
10. monitor live performance with public dashboards

Skipping these steps would make institutional adoption unlikely.

## Relation to the multi-currency suite

The proposed 20+ asset suite should not launch as a symbol list.

Each asset should earn its way into production with:

- real use case
- collateral support
- liquidity plan
- oracle support
- compliance review
- operating support
- governance approval if required

EUTC should be the proof point before broad expansion.

## Related pages

- [Forex Protocol](/forex-protocol/overview/)
- [Collateral and stable assets](/forex-protocol/collateral-and-stable-assets/)
- [Multi-currency suite](/institutions/multi-currency-suite/)
- [Native assets](/institutions/native-assets/)
- [Requirements and contact](/institutions/requirements-and-contact/)
