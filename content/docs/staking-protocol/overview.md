---
title: "Staking Protocol"
description: "The user-facing staking layer for Terra Classic: delegate LUNC, secure the network, earn protocol rewards, and participate in governance."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/overview.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
The Staking Protocol is Terra Classic's proof-of-stake participation layer.

It lets LUNC holders delegate tokens to validators, help secure the chain, earn protocol rewards, and route voting power into governance without giving validators custody of their wallet.

Use this section if you are:

- a LUNC holder deciding whether to stake
- a delegator choosing validators
- a community member trying to understand governance power
- an investor evaluating network participation
- a validator explaining what responsible operation requires
- a developer building staking, portfolio, governance, or validator tooling

## Product position

Staking Protocol is the official product name used in these docs for Terra Classic staking.

It is not a new token, not a custody product, not liquid staking, not a yield vault, and not a guarantee of profit. It is the user-facing name for the native proof-of-stake system already built into Terra Classic through Cosmos SDK staking, distribution, slashing, and governance modules.

The product promise should stay simple:

> Delegate LUNC to help secure Terra Classic, earn transparent protocol rewards, and participate in governance while keeping control of your wallet.

## What staking does

When you delegate LUNC, your stake is bonded to a validator. The validator uses total delegated stake to compete for consensus power. If the validator is active, it can propose and sign blocks. Rewards earned by that validator are shared with delegators after commission.

Your delegated LUNC remains associated with your wallet address. A validator cannot spend it, transfer it, or move it to another wallet. The validator can still affect your outcome because poor validator behavior can reduce rewards, cause missed governance participation, or create slashing risk.

## Why it matters for Terra Classic

Staking Protocol is one of Terra Classic's strongest existing L1 products because it is live, understandable, non-custodial, and directly connected to network security.

For Terra Classic, staking also matters strategically:

- Higher bonded stake reduces the liquid supply available for immediate selling.
- More distributed stake improves the validator power structure.
- Better validator selection raises pressure for uptime, governance participation, and professional operation.
- More active delegator voting makes governance less dependent on a small validator minority.
- Clear staking docs turn a confusing wallet action into a credible participation pathway.

This is why the docs should not describe staking only as a passive APR feature. On Terra Classic, staking is also a network-security, governance, and trust-surface product.

## Core actions

| Action | What it means | Main tradeoff |
| --- | --- | --- |
| Delegate | Bond liquid LUNC to a validator. | Earn rewards and voting power exposure, but accept validator risk. |
| Claim rewards | Withdraw accumulated rewards to your wallet. | Requires a transaction fee. |
| Redelegate | Move bonded stake from one validator to another. | Avoids the full unbonding wait, but has cooldown limits. |
| Undelegate | Start returning bonded LUNC to liquid balance. | Takes the chain's unbonding period and earns no rewards during that time. |
| Vote | Cast your own governance vote. | Overrides your validator's vote for that proposal. |

## How this section is organized

- [How it works](/staking-protocol/how-it-works/) explains the staking lifecycle and current queryable parameters.
- [Delegate LUNC](/staking-protocol/delegate-lunc/) gives a practical staking flow for supported wallets.
- [Rewards and APR](/staking-protocol/rewards-and-apr/) explains where rewards come from and why APR changes.
- [Choose a validator](/staking-protocol/choose-a-validator/) gives a decision framework for delegators.
- [Risks and unstaking](/staking-protocol/risks-and-unstaking/) covers slashing, lockups, redelegation limits, and operational risk.
- [Governance](/governance/overview/) explains how staked LUNC becomes governance power and how proposals are reviewed and voted on.
- [Validator responsibilities](/staking-protocol/validator-responsibilities/) explains what responsible validators should provide.
- [Developer reference](/staking-protocol/developer-reference/) gives module, message, query, and endpoint references.

## What to avoid

Do not evaluate Staking Protocol only by the displayed APR. APR is useful, but it is not the whole product.

A serious staking decision should also look at validator uptime, voting behavior, commission, concentration, public communication, infrastructure quality, self-delegation, community contribution, and whether the validator's incentives are aligned with Terra Classic's long-term health.

## Not financial advice

Staking can produce protocol rewards, but LUNC price volatility, validator behavior, governance decisions, wallet security, slashing, and liquidity timing can materially affect outcomes. These docs explain protocol mechanics. They do not tell you whether to buy, sell, hold, or stake LUNC.
