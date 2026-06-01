---
title: "Governance and status"
description: "The governance-approved status of Forex Protocol, what Proposal 12209 accepted, and what still needs to be built."
status: reviewed
reviewed: true
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/governance-and-status.md"
sourceDate: "2025-12-07"
tocDepth: 2
---
Forex Protocol is a governance-accepted L1 product concept, not a deployed product.

This distinction should stay visible across the docs, website, and any future wallet or developer material.

## Governance decision

The Terra Classic governance item shown for this work is Proposal 12209:

```text
Lunc Forex Genesis + EUTC Repeg
```

The proposal status shown in the supplied governance screenshot is passed.

The proposal memo says:

```text
Begin development of Collateralized Stablecoin Module, test and oracle integration. Development is done for free. New prop will be put up for liquidity investment.
```

The source discussion linked from the proposal is the LUNC Forex Genesis and EUTC Repeg thread. That thread describes the Collateralized Stablecoin Module design, EUTC as the first proposed stable asset, collateral options, fee mechanics, buyback logic, vault logic, DEX liquidity needs, and safety controls.

## What was accepted

Based on the source material and the governance screenshot, the accepted direction is:

- begin development of the Collateralized Stablecoin Module
- start with EUTC as the first stable asset
- use collateralized stablecoin design rather than algorithmic expansion
- include test and oracle integration work
- treat liquidity investment as a later governance or funding step
- document the CSM as the proposed technical foundation for Forex Protocol

This acceptance does not mean a production implementation already exists.

## Current implementation status

Forex Protocol is not in production.

As of this docs section:

- no live CSM production deployment is documented in this repository
- no public user minting flow is documented
- no public redemption flow is documented
- no final wallet interface is documented
- no final production oracle integration is documented
- no audit result is documented
- no mainnet launch instructions are documented

The product is also represented on the main Terra Classic website as open work for implementation. That means the docs should help qualified builders understand the product direction and the source-defined requirements, without pretending the work is already complete.

## Why the status wording matters

Stablecoin documentation is trust-sensitive.

If documentation makes Forex Protocol sound live before it is implemented, users can misunderstand risk, validators can miscommunicate governance status, and builders can inherit a vague or overpromised brief.

The correct language is:

| Say this | Do not say this |
| --- | --- |
| Proposed Forex Protocol design | Live Forex Protocol product |
| Governance-accepted implementation direction | Completed implementation |
| EUTC is the first proposed stable asset | EUTC is available to mint today |
| CSM is the proposed technology | CSM is already deployed |
| Liquidity may need a later proposal | Liquidity is already secured |
| Safety controls need implementation and testing | Safety controls already protect users |

## Source proposal scope

The source proposal says it is exclusively for construction of the CSM system.

The source lists the construction scope as:

- multi-asset collateral
- stablecoin issuance
- automated swaps
- LUNC buyback vault logic

The source also says that liquidity investment would require a new proposal after development.

That means this docs section should support two jobs:

1. Explain the accepted product concept clearly enough for the community.
2. Define the implementation surface clearly enough for builders to quote and execute.

## Roles and responsibilities

The source proposal presents the concept as community-driven and names contributors in the discussion. It also references help from Terra Classic technical contributors for deployment after approval.

The docs should not convert that into a claim that a production team has already accepted responsibility for final delivery.

A production implementation still needs explicit ownership across:

- architecture
- smart contracts or module code
- oracle integration
- vault accounting
- collateral custody structure
- DEX routing
- testnet deployment
- security review
- mainnet deployment support
- public documentation
- post-launch monitoring

## Open work framing

The open-work framing on the main website is product-correct.

Forex Protocol needs a team capable of turning the accepted concept into a deployable, testable, reviewable system. A serious implementation proposal should define:

- discovery scope
- exact MVP boundaries
- technical architecture
- collateral handling model
- oracle and feeder requirements
- governance-controlled parameters
- testnet and simulation plan
- security review plan
- deployment plan
- documentation deliverables
- post-launch monitoring and incident response

See [Forex Protocol developer reference](/forex-protocol/developer-reference/) for the builder-facing implementation surface.

## Governance should still protect users

Passing a text proposal is not the same as de-risking a stablecoin system.

Before any production launch, governance and validators should expect evidence of:

- testnet behavior
- oracle safety
- redemption cap behavior
- vault accounting correctness
- collateral accounting correctness
- DEX routing behavior
- emergency pause behavior
- audit or independent review
- user-facing risk documentation

This is not bureaucracy. It is the minimum trust standard for a stable-asset product after Terra Classic's history.

## Source and verification

Last verified: 2026-06-01

Primary source:

- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)

This page was reviewed during the docs content-remediation pass for product-status discipline. It intentionally preserves the distinction between governance acceptance and production deployment.
