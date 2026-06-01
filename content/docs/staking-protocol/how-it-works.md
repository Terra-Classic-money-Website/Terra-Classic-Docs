---
title: "How Staking Protocol Works"
description: "A practical explanation of delegation, validator power, bonding states, redelegation, unbonding, and current Terra Classic staking parameters."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/how-it-works.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Staking Protocol is built on the standard proof-of-stake model used by Cosmos SDK chains, with Terra Classic-specific parameters and governance-controlled settings.

The simple version:

1. You hold liquid LUNC in a compatible wallet.
2. You delegate some LUNC to one or more validators.
3. Validators use delegated stake to participate in consensus.
4. Rewards accumulate through the distribution module.
5. You can claim rewards, redelegate, vote, or undelegate.

## Validators and delegators

Validators run infrastructure. They operate nodes, sign blocks, keep keys secure, participate in upgrades, vote in governance, and maintain reliable public communication.

Delegators hold LUNC and choose validators. They do not need to run nodes. By delegating, they assign staking power to validators and share in rewards and risks.

This creates a principal-agent relationship. Delegators provide capital. Validators operate the security layer. Delegators should therefore treat validator choice as an active risk decision, not a random list selection.

## Bonded, unbonding, and unbonded LUNC

LUNC used by Staking Protocol can be in three practical states.

| State | What it means | Rewards | Liquidity |
| --- | --- | --- | --- |
| Unbonded | Liquid LUNC in your wallet. | No staking rewards. | Spendable and transferable. |
| Bonded | Delegated to a validator. | Eligible for staking rewards. | Not directly spendable. |
| Unbonding | Leaving staking and returning to liquid balance. | No staking rewards during the wait. | Locked until the unbonding period completes. |

On Terra Classic, the staking bond denomination is `uluna`.

```text
1 LUNC = 1,000,000 uluna
```

## Validator power

A validator's voting power comes from its bonded stake: self-delegation plus delegations from users.

In consensus, voting power decides how much weight a validator has when blocks are proposed and committed. In governance, validator voting power is also used unless delegators cast their own vote.

Terra Classic has also implemented a custom validator voting-power cap documented in the [staking module spec](/develop/module-specifications/spec-staking/). The purpose is to reduce the risk that one validator accumulates too much influence.

## Delegation shares

When you delegate, the staking module tracks your position as delegation shares against a validator, not as a separate pile of untouched tokens.

This matters because rewards and slashes change the validator's token pool over time. Your claim is proportional to your shares in that validator's pool. In normal wallet interfaces this is abstracted away, but developers and analytics tools should understand that the chain state uses shares.

## Redelegation

Redelegation moves bonded LUNC from one validator to another without first waiting through the full unbonding period.

Use redelegation when:

- a validator is jailed or unreliable
- a validator stops voting or communicating
- commission changes make the validator unattractive
- stake is too concentrated in a small set of validators
- your governance preferences no longer align

Redelegation still has limits. A redelegation creates a cooldown for the same source and destination validator pair. During the redelegation window, the stake can still be slashable for infractions that occurred before the redelegation began.

## Unbonding

Undelegation starts the unbonding process. During unbonding, the LUNC is no longer earning rewards and is not liquid until the period completes.

Terra Classic's current staking params can be queried through LCD:

```text
https://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params
```

As checked on 2026-06-01, this endpoint returned:

| Parameter | Value | Meaning |
| --- | --- | --- |
| `unbonding_time` | `1814400s` | 21 days. |
| `max_validators` | `110` | Maximum active bonded validators. |
| `max_entries` | `7` | Maximum simultaneous unbonding or redelegation entries per pair context. |
| `bond_denom` | `uluna` | LUNC micro-denomination used for staking. |
| `min_commission_rate` | `0.025` | Minimum validator commission rate of 2.5%. |

Always query current parameters before building tooling, writing operational instructions, or making a large staking decision. Governance can change parameters over time.

## Reward accounting

Rewards are handled by the distribution module. They accumulate until withdrawn. Wallets may show pending rewards, but those rewards are not spendable until a withdraw transaction is submitted.

Some staking actions can trigger reward withdrawal or accounting changes depending on wallet behavior and module rules. Keep enough liquid LUNC for fees before claiming, delegating, redelegating, or undelegating.

## Slashing link

Staked and unbonding LUNC can be reduced if the validator is slashed for certain failures. See [Risks and unstaking](/staking-protocol/risks-and-unstaking/) before delegating a large position.
