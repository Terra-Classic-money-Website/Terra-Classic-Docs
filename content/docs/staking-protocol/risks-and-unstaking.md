---
title: "Risks And Unstaking"
description: "The main Staking Protocol risks: unbonding, redelegation cooldowns, slashing, validator failures, governance exposure, wallet security, and market risk."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/risks-and-unstaking.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Staking Protocol is non-custodial, but it is not risk-free.

The biggest mistake is treating staking as a bank deposit. It is not. It is a protocol action with lockup, validator, governance, slashing, wallet, and market risks.

## Liquidity risk

Bonded LUNC is not liquid.

If you undelegate, the LUNC enters unbonding. During unbonding it cannot be transferred, sold, or redelegated as liquid LUNC. It also does not earn staking rewards.

Current unbonding time is queryable here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params
```

As checked on 2026-06-01, Terra Classic returned `1814400s`, or 21 days.

Do not stake LUNC you may need to move immediately.

## Redelegation risk

Redelegation is useful because it avoids the full unbonding wait when moving between validators.

But redelegation is not unlimited:

- a source-to-destination validator pair can have a cooldown
- active redelegations may block further moves
- some slash exposure can remain for validator infractions that occurred before redelegation began
- wallets may display redelegation errors if a previous redelegation is still active

For active management, track where and when you last redelegated.

## Slashing risk

Slashing penalizes validator failures by reducing stake and, in some cases, jailing the validator.

Current slashing params are queryable here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/slashing/v1beta1/params
```

As checked on 2026-06-01, the endpoint returned:

| Parameter | Value | Meaning |
| --- | --- | --- |
| `signed_blocks_window` | `100800` | Liveness is measured across this window. |
| `min_signed_per_window` | `0.85` | Minimum signing ratio required during the window. |
| `downtime_jail_duration` | `1800s` | Downtime jail period of 30 minutes. |
| `slash_fraction_double_sign` | `0.05` | 5% slash for double-signing. |
| `slash_fraction_downtime` | `0.0001` | 0.01% slash for downtime. |

These parameters are governance-controlled and should be queried before relying on them.

## Validator risk

Validator failures can include:

- downtime
- jailing
- double-signing
- poor key management
- failed upgrades
- weak monitoring
- high or unexpected commission changes
- governance absence
- poor communication during incidents

Delegators share some consequences of validator behavior. This is why validator selection matters.

## Governance risk

Staked LUNC has governance power.

If you do not vote, your validator's vote applies to your delegated stake by default. A validator can vote in ways you disagree with, abstain, or fail to vote. Delegators can override validator votes, but only by voting themselves before the proposal deadline.

Governance can also change protocol parameters, funding decisions, module behavior, tax rules, upgrade timing, and other chain-level settings.

For the full governance workflow, see [Governance](/governance/overview/), [Voting power and delegation](/governance/voting-power-and-delegation/), and [How to vote](/governance/how-to-vote/).

## Market risk

Staking rewards do not remove price risk.

LUNC price can fall while you are bonded or unbonding. The unbonding period can prevent immediate reaction to market events. APR should be evaluated alongside liquidity needs, volatility, and your own risk tolerance.

## Wallet and interface risk

Staking is only as safe as the wallet and interface used to sign transactions.

Basic practices:

- use official wallet download sources
- verify URLs before connecting
- never enter a seed phrase into a website
- prefer hardware wallet support for large balances where available
- inspect transaction action, amount, fee, and validator address before signing
- keep recovery phrases offline

No validator, website, or support account needs your seed phrase.

## Operational checklist

Before staking a meaningful amount:

- understand the unbonding period
- split stake if validator-specific risk matters to you
- review validator concentration
- review governance participation
- keep liquid LUNC for fees
- test with a small transaction first
- document which validators you used
- know how to redelegate and undelegate before you need to do it

## When to consider redelegating

Consider redelegating if a validator:

- is jailed
- misses blocks repeatedly
- stops voting
- stops communicating
- raises commission unexpectedly
- becomes too concentrated
- behaves against your governance preferences
- creates unresolved trust or conflict-of-interest concerns

Staking Protocol works best when delegators actively reward good validators and remove stake from poor operators.
