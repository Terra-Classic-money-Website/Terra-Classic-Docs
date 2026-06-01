---
title: "Swap Protocol governance and status"
description: "The source-defined status of Swap Protocol and Market Module 2.0, and why design approval is not the same as live mainnet availability."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/swap-protocol/governance-and-status.md"
sourceDate: "2025-06-25"
tocDepth: 2
---
Swap Protocol is the docs product name for the Market Module 2.0 no-mint swap design.

This page exists because Swap Protocol status must be handled with the same discipline as Forex Protocol status.

## Current documentation status

The docs should treat Swap Protocol as a source-defined Market Module 2.0 design unless production deployment is separately documented.

That means the docs may explain:

- the no-mint swap model
- proposed LUNC and USTC routing
- finite protocol liquidity
- oracle-aware pricing
- spread fees
- burn and Oracle Pool routing
- safety controls
- validator responsibilities

The docs should not imply ordinary users can use a live native Swap Protocol route unless the docs also identify the deployed chain version, supported route, wallet or interface path, and verification source.

## What the source design describes

The Market Module 2.0 source material describes a redesigned native swap route intended to avoid the old Terra failure mode.

Core design points:

- swaps use prefilled pools instead of minting output supply
- USTC is market-priced through oracle input rather than treated as fixed at 1 USD
- liquidity is finite
- spread fees are routed to burn and Oracle Pool destinations
- safety controls can stop swaps when oracle or capacity conditions are unsafe
- stable-to-stable routing is disabled in the design

Those are design mechanics, not proof of live user availability.

## What must be proven before live language is used

Before any page says Swap Protocol is live, the docs should be able to point to:

| Requirement | Why it matters |
| --- | --- |
| Implemented Terra Classic core version | Shows the design exists in deployable chain software. |
| Mainnet activation path | Shows the feature is not only source material. |
| Supported user route | Shows ordinary users know where and how the route is exposed. |
| Verification source | Lets readers confirm status outside the docs. |
| Risk and failure-state documentation | Prevents users from treating the route as guaranteed execution. |

If those items are missing, use proposed, source design, governance direction, or pending implementation language.

## Correct wording

| Use | Avoid unless proven |
| --- | --- |
| Market Module 2.0 source design | Live Market Module 2.0 route |
| proposed native LUNC/USTC swap route | native swaps are live |
| no-mint swap design | users can swap now |
| intended safety controls | deployed safety controls |
| possible wallet or application integration | existing wallet support |

## Relationship to old market behavior

The historical market module is not the same as the Market Module 2.0 design.

The old algorithmic mint/burn path should be treated as historical unless current Terra Classic core behavior proves otherwise. The point of Market Module 2.0 is to avoid returning to unlimited output minting.

## Source and verification

Last verified: 2026-06-01

Market Module 2.0 design status and production availability should be treated separately.

Primary source:

- [Terra Classic Market-Module 2.0](https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38)

Verify production status through external governance records, Terra Classic core releases, wallet interfaces, and explorers.
