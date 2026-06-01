---
title: "Collateral and stable assets"
description: "How EUTC, EURC, USDC, premiums, collateral ratios, secondary collateral, and vault accounting are described in the Forex Protocol source."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/collateral-and-stable-assets.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Forex Protocol starts with EUTC in the source design.

EUTC is described as a Euro-pegged Terra Classic stablecoin backed by approved collateral.

## Supported stable asset

The source explicitly names:

| Stable asset | Description |
| --- | --- |
| EUTC | Euro-pegged Terra Classic stablecoin. |

The source also mentions on-chain fiat price support for multiple currencies, including USD, EUR, GBP, JPY, CAD, SGD, AUD, and CNY. That should be treated as a future multi-currency direction, not as proof that those assets are implemented.

For the initial docs section, EUTC should remain the only concrete stable asset described as source-defined.

## Collateral options

The source defines two initial collateral options for EUTC:

| Collateral | Source-defined treatment |
| --- | --- |
| EURC | 1:1 collateral for EUTC. |
| USDC | 1:1 collateral with a 0.5% premium. |

The USDC premium exists because EUTC is Euro-pegged while USDC is USD-denominated. The source says the premium helps protect against EUR/USD fluctuation and DEX spread.

## EURC path

EURC is the direct collateral path.

The source minting model is:

- deposit EURC
- mint EUTC at 1:1
- pay a 1.5% protocol fee in EURC
- move the EURC fee into secondary collateral

Because EURC and EUTC are both Euro-denominated in the proposed model, no 0.5% currency premium is described for EURC.

## USDC path

USDC is the indirect collateral path.

The source minting model is:

- deposit USDC
- apply a 0.5% premium
- mint EUTC using the source formula:

```text
EUTC minted = USDC deposited x 0.995
```

- pay a 1.5% protocol fee in USDC
- move the USDC fee into secondary collateral

The design needs live fiat pricing to avoid treating USD and EUR as interchangeable.

## Collateralization level

The source says the system uses 100.5% collateralization and also describes vault infrastructure maintaining over-collateralization ratios of 101.5%.

Those two numbers appear in different parts of the source:

| Source number | Context in source material |
| --- | --- |
| 100.5% | Presented as safe and stable after adding the 0.5% premium and redemption limits. |
| 101.5% | Presented in the vault infrastructure section as the over-collateralization ratio. |

These docs should not pretend the implementation has resolved that difference. A production implementer must clarify the exact collateral ratio rules and how they interact with mint fees, redemption fees, premiums, and vault accounting.

## Primary and secondary collateral

The source uses two collateral concepts.

Primary collateral backs issued stable assets.

Secondary collateral comes from mint and redemption fees. The source proposes using that secondary collateral for automatic LUNC buybacks, with purchased LUNC stored in a permanent protocol vault.

| Collateral type | Source-defined purpose |
| --- | --- |
| Primary collateral | Back EUTC issuance and redemption. |
| Secondary collateral | Fee-funded reserve used for LUNC buyback and vault logic. |

This separation must be explicit in implementation. If primary backing and secondary reserve logic are mixed, users and auditors will not be able to reason clearly about solvency.

## Same-collateral redemption

The source says a user receives the same collateral they deposited when redeeming EUTC.

That means the implementation must be able to track the collateral type behind each redemption claim or define an equivalent accounting model.

This is one of the most important implementation questions because a multi-collateral system can become complex quickly.

The docs cannot invent the final accounting mechanism. The source only defines the intended user outcome.

## Vault requirements

The source describes a smart vault system that will:

- lock collateral such as USDC, EURC, and LUNC
- maintain over-collateralization ratios
- track minted outstanding supply
- automatically rebalance mint caps based on collateral depth and volatility

The source also suggests portfolio rebalancing when there is a 5% differential between the value of USDC and EURC.

Those are implementation requirements, not live product facts.

## Fiat price inputs

Forex Protocol depends on fiat price inputs because its collateral and target asset can use different fiat units.

The source says on-chain oracle prices should refresh every 30 seconds and support live fiat prices such as USD and EUR.

For production, the important unresolved questions are:

- which oracle sources are accepted
- how validators or contracts receive fiat prices
- what happens during stale or missing prices
- how EUR/USD changes affect minting and redemption
- whether mint caps change automatically or by governance

See [Oracles and safety controls](/forex-protocol/oracles-and-safety-controls/) for the safety layer.

## What users should remember

The product claim is not "EUTC exists because governance passed a proposal."

The defensible claim is:

> EUTC is the first proposed Forex Protocol stable asset, designed to be backed by EURC or USDC collateral through the Collateralized Stablecoin Module.

Until production implementation exists, collateral behavior remains a proposed design that must be built and validated.
