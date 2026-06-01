---
title: "Delegate LUNC"
description: "A practical delegator guide for staking LUNC through Staking Protocol using supported Terra Classic wallets."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/delegate-lunc.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Delegating LUNC is the main user action in Staking Protocol.

The goal is not only to earn rewards. The better goal is to place stake with validators that make Terra Classic more secure, more accountable, and more credible.

## Before you delegate

Prepare these basics first:

- Use a compatible Terra Classic wallet such as Keplr or Galaxy Station.
- Confirm the active network is Terra Classic mainnet `columbus-5`.
- Keep some liquid LUNC outside staking for transaction fees.
- Decide whether you want to split stake across multiple validators.
- Read the validator's commission, voting history, uptime signals, website, and public communication.
- Understand that unstaking has a waiting period.

Wallet-specific setup:

- [Keplr install](/learn/keplr/keplr-install/)
- [Keplr staking](/learn/keplr/keplr-staking/)
- [Galaxy Station install](/learn/galaxy-station/galaxy-station-install/)
- [Galaxy Station staking](/learn/galaxy-station/galaxy-station-staking/)

## Delegation flow

Most wallet interfaces follow the same pattern.

1. Open the wallet or staking interface.
2. Select Terra Classic.
3. Open the staking or validators view.
4. Search or browse validators.
5. Review commission, voting power, uptime, and validator information.
6. Enter the amount of LUNC to delegate.
7. Keep liquid LUNC for fees.
8. Review the transaction.
9. Sign and broadcast.
10. Confirm the transaction on an explorer.

After the transaction is included in a block, your delegation should appear under the selected validator.

## How much to delegate

Do not delegate your entire wallet balance. Keep enough LUNC liquid for:

- claiming rewards
- voting
- redelegating
- undelegating
- emergency transactions
- wallet or interface fee estimation variance

For larger positions, splitting stake across several responsible validators can reduce validator-specific risk and can support decentralization. Splitting stake does not remove market risk or protocol risk.

## Claim rewards

Rewards accumulate until claimed. Claiming rewards requires a transaction and therefore a fee.

Claim frequency is a practical tradeoff. Claiming too often can waste fees. Claiming too rarely can make portfolio tracking less clear. The best cadence depends on reward size, fee cost, and whether you plan to compound manually.

## Redelegate

Redelegation moves bonded LUNC from one validator to another without waiting through the full unbonding period.

Use redelegation if your current validator:

- is jailed
- repeatedly misses blocks
- stops voting
- raises commission beyond your expectations
- has poor communication
- contributes to excessive stake concentration
- no longer aligns with your governance preferences

Redelegation is not unlimited. The same validator pair can be subject to a cooldown. If a wallet blocks a redelegation, check whether a prior redelegation is still active.

## Undelegate

Undelegation starts the unbonding period. During that period:

- the LUNC is not liquid
- the LUNC does not earn staking rewards
- the position can still be exposed to some slash conditions tied to prior validator behavior
- the final liquid balance appears only after unbonding completes

Do not start unbonding if you need immediate liquidity.

## Transaction checklist

Before signing any staking transaction:

- Confirm the chain ID is `columbus-5`.
- Confirm the validator operator address starts with `terravaloper`.
- Confirm the wallet address starts with `terra`.
- Confirm the LUNC amount and fee.
- Confirm the action: delegate, redelegate, undelegate, claim, or vote.
- Confirm you are using the real wallet or interface URL.

## Delegator operating rhythm

Staking is not a one-time action. A responsible delegator should periodically review:

- validator jailed status
- commission changes
- missed-block or uptime indicators
- governance voting behavior
- communication quality
- concentration in top validators
- whether rewards are worth claiming or compounding

For a deeper decision model, read [Choose a validator](/staking-protocol/choose-a-validator/).
