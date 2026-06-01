---
title: "Forex Protocol developer reference"
description: "Builder-facing reference for the proposed Forex Protocol and Collateralized Stablecoin Module implementation."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/developer-reference.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
This reference is for software teams, protocol engineers, validators, wallet teams, and reviewers assessing Forex Protocol implementation work.

Forex Protocol is the product name. Collateralized Stablecoin Module is the proposed technology.

## Implementation status

Forex Protocol is not deployed.

There is no production CSM implementation documented in this repository. Any team quoting or building this work should treat the source proposal as a product and mechanism brief, not as a complete technical specification.

## Source-defined scope

The source proposal says the CSM construction scope includes:

- multi-asset collateral
- stablecoin issuance
- automated swaps
- LUNC buyback vault logic

The governance memo also references:

- test integration
- oracle integration
- later liquidity investment proposal

## Core product entities

| Entity | Source-defined role |
| --- | --- |
| Forex Protocol | User-facing product name. |
| Collateralized Stablecoin Module | Technical system for collateral-backed stable assets. |
| EUTC | First proposed Euro-pegged Terra Classic stable asset. |
| EURC | Proposed direct 1:1 EUTC collateral. |
| USDC | Proposed EUTC collateral with 0.5% premium. |
| Forex Secondary Reserve | Fee reserve used as secondary collateral and buyback source. |
| LUNC Vault | Proposed destination for LUNC bought with secondary collateral. |
| Fiat price oracle | Price input layer for USD, EUR, and other fiat rates. |

## Required flows

A complete implementation must define at least these flows.

### Mint with EURC

1. User deposits EURC.
2. System validates the collateral input.
3. System mints EUTC at 1:1.
4. System takes a 1.5% EURC fee.
5. System accounts for the EURC fee as secondary collateral.
6. System updates outstanding EUTC supply.

### Mint with USDC

1. User deposits USDC.
2. System applies the 0.5% premium.
3. System mints EUTC using the source formula:

```text
EUTC minted = USDC deposited x 0.995
```

4. System takes a 1.5% USDC fee.
5. System accounts for the USDC fee as secondary collateral.
6. System updates outstanding EUTC supply.

### Redeem EUTC

1. User submits EUTC for redemption.
2. System checks daily redemption capacity.
3. System burns redeemed EUTC.
4. System returns the same collateral type the user deposited, according to the final accounting model.
5. System takes a 1.5% redemption fee in the withdrawn stablecoin.
6. System accounts for the fee as secondary collateral.

### Buy back LUNC

1. System accumulates secondary collateral.
2. System selects a DEX route for LUNC buyback.
3. System applies slippage and safety limits.
4. System swaps secondary collateral for LUNC.
5. System sends purchased LUNC to the final destination defined by governance, proposed as a permanent protocol vault in the source.
6. System reports buyback and vault state.

## Required accounting

The implementation needs explicit accounting for:

- EUTC total supply
- EUTC minted per collateral type
- EURC primary collateral
- USDC primary collateral
- mint fees
- redemption fees
- secondary reserve balances
- buyback execution
- LUNC vault balances
- daily redemption cap usage
- collateral ratio
- mint caps
- rebalancing state

Do not collapse these into one generic balance. Stable-asset users and reviewers need to verify each layer independently.

## Required safety controls

The source defines or implies these controls:

| Control | Source-defined behavior |
| --- | --- |
| Daily redemption cap | Maximum 10% of total EUTC supply redeemable per day. |
| Same-stablecoin fees | Mint and redemption fees paid in the same stablecoin used or withdrawn. |
| Fiat price oracles | Live fiat prices, with 30-second refresh described in source. |
| Vault accounting | Lock collateral, maintain ratios, track minted outstanding supply. |
| Mint-cap rebalancing | Adjust mint caps based on collateral depth and volatility. |
| Portfolio rebalancing | Suggested when USDC and EURC value differential reaches 5%. |
| Kill switch | Multisig-controlled pause concept with governance-based resume. |

These controls need exact implementation definitions before deployment.

## Related Terra Classic modules

The final CSM design may touch or depend on:

| Module or layer | Possible role |
| --- | --- |
| `x/oracle` | Fiat and asset pricing if implemented through chain oracle infrastructure. |
| `x/gov` | Governance approvals, parameter changes, emergency resume logic. |
| `x/tax` | Tax treatment for native swaps and related transfers if applicable. |
| `x/wasm` | Possible smart contract implementation surface if CSM is built with CosmWasm. |
| DEX contracts | EUTC pools, LUNC buybacks, liquidity routing. |

The source does not finalize whether CSM should be a core module, a smart contract system, or a hybrid. That is an implementation decision that must be justified.

## Interface states

Wallets and dashboards should be prepared to show these states if Forex Protocol is implemented:

| State | Meaning |
| --- | --- |
| Not launched | No production system exists. |
| Mint paused | Minting is unavailable. |
| Mint available | Minting can be attempted. |
| Redemption available | Redemption can be attempted within daily limits. |
| Redemption cap reached | Daily redemption capacity is exhausted. |
| Redemption paused | Emergency controls paused redemptions. |
| Oracle degraded | Price inputs are unavailable, stale, or unsafe. |
| Buyback pending | Secondary reserve exists but buyback has not executed. |
| Buyback failed | DEX route, slippage, or execution failed. |
| Vault reporting unavailable | LUNC vault state cannot be verified. |

## Builder quote expectations

A credible team proposal should include:

- discovery phase
- architecture decision: core module, CosmWasm, or hybrid
- collateral asset representation plan
- oracle integration plan
- vault and reserve accounting design
- mint and redemption flow design
- redemption cap design
- DEX routing and buyback design
- emergency pause design
- testnet plan
- simulation plan
- security review or audit plan
- documentation plan
- deployment support plan
- monitoring and incident response plan

## Test requirements

Minimum test areas should include:

- EURC minting
- USDC minting with 0.5% premium
- mint fee accounting
- redemption fee accounting
- same-collateral redemption behavior
- daily redemption cap
- EUTC burn on redemption
- secondary reserve accumulation
- buyback route execution
- buyback route failure
- slippage limits
- vault balance immutability or permission constraints
- fiat oracle stale data
- fiat oracle rapid movement
- collateral ratio boundary conditions
- emergency pause and resume
- governance or multisig permission checks

## Public diagnostics

Forex Protocol should ship with public diagnostics, not just contracts.

Useful diagnostics include:

- total EUTC supply
- EUTC minted by collateral type
- primary collateral balances
- collateral ratio
- daily redemption cap remaining
- fees collected
- secondary reserve balances
- buybacks executed
- LUNC vault balance
- oracle status
- paused state
- latest parameter changes
- latest governance-controlled action

This matters because the project owner and many users are not developers. The system should make verification simple.

## Implementation warning

Do not implement Forex Protocol as a black-box stablecoin contract.

The product will only be credible if users, validators, builders, and governance participants can understand and verify:

- what backs EUTC
- where collateral is held
- who can move or pause what
- how fees are handled
- how LUNC buybacks work
- what happens in stress
- whether the system is live, paused, or not launched

That verification layer is part of the product.
