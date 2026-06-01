---
title: "Rewards And APR"
description: "How Staking Protocol rewards are generated, distributed, claimed, and interpreted without treating APR as a fixed promise."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/rewards-and-apr.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Staking Protocol rewards are protocol-level rewards paid through Terra Classic's distribution module.

APR is useful as a summary metric, but it should never be treated as a fixed rate, a promise, or the full reason to stake.

## Where rewards come from

On Terra Classic, staking rewards are primarily connected to network fee and distribution flows rather than new inflation.

Current mint parameters can be queried here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/mint/v1beta1/params
```

As checked on 2026-06-01, Terra Classic mint parameters returned zero inflation settings:

| Parameter | Value |
| --- | --- |
| `inflation_rate_change` | `0` |
| `inflation_max` | `0` |
| `inflation_min` | `0` |

Distribution parameters can be queried here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/distribution/v1beta1/params
```

As checked on 2026-06-01, the distribution endpoint returned:

| Parameter | Value | Meaning |
| --- | --- | --- |
| `community_tax` | `0.5` | 50% of collected distributable rewards directed to the community pool. |
| `base_proposer_reward` | `0` | No fixed proposer reward share. |
| `bonus_proposer_reward` | `0` | No bonus proposer reward share. |
| `withdraw_addr_enabled` | `true` | Reward withdrawal addresses are enabled. |

These parameters can change through governance. Interfaces should query live values instead of freezing them.

## How rewards are split

At a high level:

1. Fees and eligible reward flows enter collection and distribution logic.
2. The distribution module accounts for rewards by validator.
3. Validator commission is taken from the rewards earned on behalf of delegators.
4. Remaining rewards accrue to delegators based on their delegation shares.
5. Rewards stay pending until withdrawn.

If a validator has 5% commission, that means the validator keeps 5% of the rewards earned by delegators on that validator before the remaining rewards are allocated to delegators.

Commission affects APR, but it is not the only factor. A low-commission validator can still be a poor choice if it is unreliable, silent, over-concentrated, or absent from governance.

## Why APR changes

APR can change because:

- network transaction activity changes
- fee and tax parameters change
- community-tax or distribution parameters change
- total bonded LUNC changes
- validator commission changes
- wallet or dashboard calculation methods differ
- rewards are measured over different time windows
- price assumptions change when dashboards convert to fiat

APR shown on a website or wallet is therefore a current estimate, not a guarantee.

## Real yield versus token price

Staking rewards are denominated in tokens. Your economic result also depends on LUNC price movement, liquidity, taxes, fees, and timing.

An APR can be positive while the market value of the staked position falls. An APR can also look modest while staking still improves network security, governance alignment, and long-term participation quality.

Do not reduce Staking Protocol to a single APR number.

## Claiming rewards

Rewards are not automatically spendable. A wallet must submit a withdrawal transaction.

Common reward messages include:

- `MsgWithdrawDelegatorReward`
- `MsgWithdrawValidatorCommission`
- `MsgSetWithdrawAddress`

Claiming rewards costs a transaction fee. Keep liquid LUNC available.

## Compounding

Manual compounding means claiming rewards and delegating them again.

This can increase the staked balance over time, but it is only rational when the expected added rewards are worth more than the fees and operational friction. Small positions may not benefit from frequent compounding.

## APR interpretation checklist

When comparing validators, evaluate:

- commission rate
- whether commission recently changed
- uptime and jailed status
- governance participation
- voting power concentration
- self-delegation
- public identity and communication
- contribution to Terra Classic infrastructure or tooling
- whether the validator has credible long-term incentives

The better validator is not always the validator with the highest displayed APR.

## Developer note

Staking dashboards should disclose their APR methodology. A credible calculator should state which endpoint, time window, fee assumptions, bonded-token value, commission treatment, and compounding assumption it uses.

For integration details, see [Developer reference](/staking-protocol/developer-reference/).
