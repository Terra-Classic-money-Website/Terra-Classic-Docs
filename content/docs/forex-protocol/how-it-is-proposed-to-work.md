---
title: "How it is proposed to work"
description: "A plain-English walkthrough of the proposed Forex Protocol minting, redemption, reserve, buyback, vault, and liquidity flow."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/how-it-is-proposed-to-work.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Forex Protocol is proposed as a collateral-backed stable-asset system.

The first proposed stable asset is EUTC. The underlying technology is the Collateralized Stablecoin Module.

## Core flow

The proposed flow is:

1. A user deposits approved collateral.
2. The protocol mints EUTC against that collateral.
3. The protocol takes a 1.5% mint fee in the same stablecoin used by the user.
4. The fee becomes secondary collateral.
5. EUTC can trade through proposed DEX liquidity pools.
6. A user can redeem EUTC back to collateral.
7. The protocol burns redeemed EUTC.
8. The protocol takes a 1.5% redemption fee in the same stablecoin withdrawn.
9. Secondary collateral is proposed to buy back LUNC.
10. Purchased LUNC is proposed to be stored in a permanent protocol vault.

This is a proposal-level product design. It is not a live workflow yet.

## Minting with EURC

The source defines EURC as the cleanest EUTC collateral path.

Proposed EURC minting:

1. User deposits EURC.
2. The contract mints EUTC at 1:1.
3. A 1.5% protocol fee is taken in EURC.
4. The EURC fee becomes secondary collateral.

The source emphasizes that users do not need to buy USTC or another fee token to mint. Fees are paid in the same stablecoin path the user is already using.

## Minting with USDC

The source also supports USDC collateral with a premium.

Proposed USDC minting:

1. User deposits USDC.
2. The contract applies a 0.5% mint premium.
3. The user receives EUTC using this source formula:

```text
EUTC minted = USDC deposited x 0.995
```

4. A 1.5% protocol fee is taken in USDC.
5. The USDC fee becomes secondary collateral.

The source says the 0.5% USDC premium exists to protect against EUR/USD fluctuation and DEX spread.

## Redemption

The proposed redemption flow is:

1. User sends EUTC back to the contract.
2. EUTC is burned.
3. User receives the same collateral type they deposited, such as EURC or USDC.
4. A 1.5% redemption fee is taken in that same stablecoin.

The source describes this as keeping the system clean and avoiding token-hopping.

## Daily redemption limit

The source design includes a daily redemption limit:

```text
No more than 10% of total EUTC supply can be redeemed per day.
```

The source says this is intended to reduce:

- instant mint and redeem arbitrage loops
- large-scale redemption runs
- liquidity crunches in the USDC vault
- oracle-timing exploits

The practical product meaning is that EUTC is not proposed as an unlimited same-block exit instrument. Redemption is intentionally rate-limited.

## Secondary reserve

Mint and redemption fees are proposed to accumulate in the Forex Secondary Reserve.

The source describes these fees as secondary collateral. That secondary reserve is then proposed to be used for automatic LUNC buybacks.

This creates two separate collateral concepts:

| Collateral layer | Source-defined role |
| --- | --- |
| Primary collateral | Backs issued stable assets such as EUTC. |
| Secondary collateral | Comes from fees and supports buyback or reserve logic. |

## LUNC buybacks

The source proposal says secondary collateral is periodically swapped for LUNC through whichever supported DEX route gives the best price at the time of buyback.

Named DEX environments in the source:

- GDEX
- Terraswap
- Terraport

The docs should treat this as proposed routing logic, not a live router guarantee.

## LUNC vault

The proposed design sends purchased LUNC to a permanent protocol vault.

The source describes the vault as:

- non-circulating
- unable to be spent
- growing over time
- intended to strengthen long-term LUNC scarcity
- also discussed as secondary collateral or reserve logic in the source thread

This point is controversial. Some community comments in the source argued that repurchased LUNC should be burned instead of vaulted. The source proposer defended the vault as collateral-related and community-owned.

See [Risks and open questions](/forex-protocol/risks-and-open-questions/) for the unresolved vault-vs-burn issue.

## Liquidity pools

The source says the community pool may seed initial liquidity for:

- EUTC/LUNC
- EUTC/USTC
- EUTC/USDC

These pools are important because the source relies on DEX liquidity and arbitrage to help keep EUTC markets usable.

The source also says liquidity investment would come through a later proposal. That means liquidity is not solved merely because the CSM concept passed governance.

## What makes this different from the old model

Forex Protocol is proposed as a replacement for the failed algorithmic market module.

The main differences are:

| Old algorithmic model | Proposed Forex Protocol model |
| --- | --- |
| Peg defense depended on mint and burn dynamics. | Stable assets are backed by external collateral. |
| LUNC supply could expand under stress. | LUNC is not minted to support EUTC issuance. |
| Stablecoin assumptions failed during the collapse. | Fiat oracles and collateral vaults are part of the proposed design. |
| Systemic run dynamics caused catastrophic damage. | Redemption caps and safety controls are proposed to reduce run risk. |

The design still needs implementation and testing. A better concept is not the same as a safe deployed system.

## Product state summary

Forex Protocol is best understood as:

- accepted by governance as a direction
- designed around the CSM
- starting with EUTC
- collateral-backed rather than algorithmic
- dependent on external collateral, oracles, vaults, DEX liquidity, and safety controls
- still awaiting production implementation
