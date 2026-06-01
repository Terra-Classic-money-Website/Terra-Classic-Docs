---
title: "Multi-currency suite"
description: "How institutions should understand Terra Classic's proposed 20+ native asset suite and the path from concept to institutional-grade settlement."
status: draft
reviewed: false
sourceTitle: "Terra Classic native assets and Forex Protocol source material"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/multi-currency-suite.md"
sourceDate: "2026-06-01"
tocDepth: 3
---
Terra Classic's multi-currency suite is the institutional idea behind native Terra Classic-denominated fiat assets.

The main website presents this as a 20+ asset direction. The docs must describe it precisely:

> Terra Classic has a native multi-denom design heritage and a proposed path to progressively collateralize fiat-pegged assets on-chain, but it does not currently offer a live institutional-grade 20+ currency redemption suite.

That distinction matters. Institutions will test every claim against custody, reserves, liquidity, audits, governance, legal responsibility, and operational support.

## What the suite is meant to become

The institutional value proposition is a native multi-currency settlement surface on a decentralized public blockchain.

If built correctly, the suite could support:

- fiat-denominated settlement assets
- regional payment products
- merchant checkout in local units
- treasury accounting in multiple currencies
- cross-border routing between digital settlement assets
- liquidity and FX-style market making
- wallet and exchange support for native Terra Classic assets

The proposed first step is [Forex Protocol](/forex-protocol/overview/), beginning with EUTC.

## Current status

The correct current-state summary is:

| Item | Status |
| --- | --- |
| LUNC | Live native asset. |
| USTC | Live legacy asset, market-priced and speculative. |
| EUTC | Proposed first Forex Protocol stable asset. Not live. |
| 20+ local-currency assets | Roadmap direction. Not live as redeemable collateralized stable assets. |
| Forex Protocol / CSM | Governance-accepted concept. Requires implementation, audit, liquidity, and activation. |
| Institutional redemption | Not available today through Terra Classic as a legal issuer. |

Institutions should not treat planned assets as live balances, redeemable claims, or issued securities without a completed legal and technical structure.

## Why institutions may care

The multi-currency suite is relevant because payments and treasury operations are rarely single-currency problems.

Potential institutional uses include:

| Institution type | Possible use |
| --- | --- |
| Payment providers | Local-currency checkout and settlement flows. |
| Fintech companies | Multi-currency wallet balances and remittance-style user flows. |
| Corporate treasuries | On-chain settlement experiments with currency-specific accounting. |
| Market makers | Liquidity provision between LUNC, USTC, EUTC, and future assets. |
| Exchanges | Native asset listing, routing, and withdrawal/deposit support if assets become live. |
| Stablecoin issuers | Collateral, reserve, or liquidity participation in future Forex Protocol assets. |
| Public-sector or institutional partners | Research into decentralized settlement rails where governance, transparency, and public auditability matter. |

The opportunity is real, but it is conditional.

## What must be true for institutional use

A serious institution should require more than a symbol list.

At minimum, each supported currency asset needs:

- clear issuer or protocol model
- collateral source and custody model
- reserve accounting
- mint and redeem rules
- redemption limits
- oracle design
- liquidity depth
- emergency controls
- audit history
- wallet support
- explorer and indexer support
- governance approval where protocol behavior changes
- legal and regulatory review in the institution's jurisdiction

For Forex Protocol specifically, see [Collateralized stable assets](/institutions/collateralized-stable-assets/).

## Suggested rollout logic

The staged asset direction shown on the main website should be treated as an implementation roadmap, not a promise that every asset is ready at once.

| Phase | Institutional meaning |
| --- | --- |
| Phase 1 | Prove the model with EUTC first. Validate collateral, mint, redeem, reserve accounting, oracle logic, liquidity, and user interfaces. |
| Phase 2 | Add a small number of additional currencies only after the first asset has enough operational evidence. |
| Phase 3 | Expand coverage where there is real user demand, reliable oracle data, and liquidity support. |
| Phase 4 | Treat USTC-related design with extra caution because USTC carries legacy collapse, market, and regulatory baggage. |

This is the disciplined path. Launching 20+ weak assets would be worse than launching one credible asset.

## How this connects to payment gateways

The multi-currency suite becomes most valuable when paired with payment flows.

A payment gateway could:

1. quote a local-currency amount
2. accept a supported Terra Classic asset
3. route through native swaps or external liquidity where available
4. settle to the merchant's preferred asset
5. reconcile invoices, refunds, and transaction hashes

Today, that is an architecture path, not a complete production promise. See [Payment gateway](/institutions/payment-gateway/) for the operational model.

## The institutional claim to make

The defensible claim is:

> Terra Classic can be evaluated as a decentralized base layer for a future collateralized multi-currency asset suite, with Forex Protocol as the proposed first product path.

The claim to avoid is:

> Terra Classic already offers 20+ institutional-ready redeemable fiat stablecoins.

That second claim is not true today and would weaken trust.

## Related pages

- [Native assets](/institutions/native-assets/)
- [Collateralized stable assets](/institutions/collateralized-stable-assets/)
- [Payment gateway](/institutions/payment-gateway/)
- [Requirements and contact](/institutions/requirements-and-contact/)
- [Risk and due diligence](/institutions/risk-and-due-diligence/)
