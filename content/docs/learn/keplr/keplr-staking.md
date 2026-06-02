---
title: "Keplr Staking"
description: "Delegate, redelegate, and undelegate LUNC with Keplr."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/keplr/keplr-staking.md"
sourceDate: "2026-05-27"
---
Staking with Keplr is only possible through third-party websites or the [Keplr Dashboard](https://wallet.keplr.app/chains/terra-classic).

For the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).

## Before staking

- Choose the validator deliberately; APR alone is not enough.
- Review commission, voting behavior, uptime signals, public communication, and concentration risk.
- Keep enough liquid LUNC for future transaction fees.
- Understand that undelegating starts the chain unbonding period.
- Never give a validator or website your seed phrase.
- Understand that validator downtime, double-signing, commission changes, and governance behavior affect delegator risk.
- Consider splitting stake if you want to reduce single-validator exposure.

## Practical flow

1. Open the Keplr Dashboard or a trusted Terra Classic staking interface that supports Keplr.
2. Connect Keplr and confirm the Terra Classic network.
3. Browse validators.
4. Choose a validator and review commission and identity details.
5. Enter the amount to delegate.
6. Review the transaction in Keplr.
7. Sign only if the validator and amount are correct.

## Redelegating and undelegating

Redelegating moves stake from one validator to another without waiting for the full unbonding period, but redelegation cooldown rules apply between the same validator pair.

Undelegating starts the unbonding period. During that time the funds are not liquid, and they do not earn staking rewards.

> **Tips**
>
> - Keep enough LUNC for future fees.
> - Redelegations avoid the 21-day unbonding period, but each validator pair has a 21-day cooldown between redelegations.
> - Undelegation requires a 21-day waiting period before funds become liquid.

## Source and verification

Last verified: 2026-06-02

Verify live validator and delegation data through wallet interfaces and external staking tools.
