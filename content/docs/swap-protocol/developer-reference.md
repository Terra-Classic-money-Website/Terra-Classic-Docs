---
title: "Swap Protocol developer reference"
description: "Technical reference for building around the Swap Protocol and Market Module 2.0 design."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/developer-reference.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
This reference is for developers evaluating wallets, explorers, routing interfaces, or monitoring tools around the Swap Protocol design.

Swap Protocol is the product name. Market Module 2.0 is the underlying L1 implementation concept.

Read [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before treating this reference as production integration guidance. Product design and production availability are separate.

## Related modules

| Module | Role |
| --- | --- |
| `x/market` | Executes market-module swap logic and maintains market parameters/state. |
| `x/oracle` | Provides validator-reported prices used by Market Module 2.0. |
| `x/tax` | Supplies the tax-flow context used by the liquidity allocation design. |
| `x/gov` | Controls governance-level changes and emergency policy decisions. |
| `x/distribution` | Receives and distributes normal staking rewards; distinct from swap execution. |

See also:

- [Market module spec](/develop/module-specifications/spec-market/)
- [Oracle module spec](/develop/module-specifications/spec-oracle/)
- [Tax module spec](/develop/module-specifications/spec-tax/)

## Supported assets

Swap Protocol is scoped to LUNC and USTC.

Supported product routes:

- LUNC to USTC
- USTC to LUNC

Stable-to-stable swaps are disabled in the source design and should be treated as unsupported. Integrations should surface this clearly rather than hiding it behind a generic failure.

## Execution model

At execution time, the module should:

1. verify the requested route is supported
2. verify the module is enabled
3. verify oracle data is available and passes safety checks
4. calculate output using market-module logic and current prices
5. verify output pool capacity remains available
6. collect the 0.35% spread fee in the output asset
7. transfer input into the module and output from the pool
8. route spread-fee accounting to burn and Oracle Pool destinations

The exact message and keeper implementation should be confirmed against the deployed Terra Classic core version used by the application.

## Important states

Interfaces should model these states explicitly:

| State | User-facing meaning |
| --- | --- |
| Enabled | Swaps can be attempted if liquidity and oracle checks pass. |
| Disabled | The protocol route is currently unavailable. |
| Insufficient liquidity | The requested output side does not have enough pool capacity. |
| Allowance exhausted | Epoch capacity has been consumed. |
| Oracle quorum failure | Not enough voting power is reporting usable prices. |
| TWAP sanity failure | Current price differs too far from the oracle TWAP. |
| Unsupported route | The route is not available, such as stable-to-stable swaps. |

Avoid treating all of these as the same error. Users and operators need different recovery paths.

## Source-defined controls

The Market Module 2.0 source defines these controls:

| Control | Value or behavior |
| --- | --- |
| Price vote period | 5 blocks, approximately 30 seconds |
| Quorum threshold | 50% voting power |
| Quorum auto-disable window | 25 blocks below quorum |
| TWAP sanity check | Swap fails if peg price differs by more than 10% from 45-block oracle TWAP |
| Spread fee | 0.35% notional, collected in output asset |
| Fee routing | 50% burn, 50% Oracle Pool |
| Stable-to-stable route | Disabled |
| Epoch length | 30 days |

If future live chain parameters differ after governance changes, applications should prefer current chain state where available.

## Pool and epoch model

Applications should not assume infinite liquidity.

During each epoch:

- LUNC and USTC pools have separate balances
- swaps change those balances dynamically
- one side can be exhausted
- opposite-direction swaps can replenish the depleted side
- remaining balances are burned at epoch boundary

Any external analytics or monitoring tool should track LUNC and USTC independently. A single "pool health" number can hide one-sided exhaustion.

## Oracle integration

Applications that show future Swap Protocol status should read or infer:

- current exchange rates
- oracle vote participation
- whether required assets have valid prices
- module enabled state
- relevant market parameters
- pool balances or usable route capacity where exposed

The public endpoint strategy should follow the broader docs guidance in [Public Network Endpoints](/develop/endpoints/). Do not hardcode one endpoint as the only source of truth for critical routing.

## UX requirements for integrations

A serious Swap Protocol integration should show:

- input asset
- output asset
- estimated output
- spread fee
- warning when USTC is involved
- protocol availability
- insufficient-liquidity state
- transaction fee requirement
- final confirmation before signing

It should not show:

- "USTC = $1" assumptions
- repeg language
- hidden pool exhaustion failures
- generic errors when the module disabled itself for safety

## Source and verification

Last verified: 2026-06-01

Market Module 2.0 production availability should be verified through current Terra Classic releases, governance records, wallets, and explorers.

## Developer caution

Market Module 2.0 is critical L1 behavior. Any integration that touches swap routing should be defensive:

- query current state before quoting
- refresh quotes before signing
- handle failed broadcasts cleanly
- distinguish protocol failure from wallet failure
- never promise execution until the transaction is committed
- expose transaction hashes and explorer links after broadcast

For users, a failed swap should be understandable. For operators, it should be diagnosable.
