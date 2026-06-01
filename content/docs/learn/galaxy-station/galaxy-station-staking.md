---
title: "Galaxy Station Staking"
description: "Delegate, redelegate, and undelegate LUNC in Galaxy Station."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "learn/galaxy-station/galaxy-station-staking.md"
sourceDate: "2026-05-27"
---
For the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).

## Before staking

- Choose the validator deliberately; APR alone is not enough.
- Review commission, voting behavior, uptime signals, public communication, and concentration risk.
- Keep enough liquid LUNC for future transaction fees.
- Understand that undelegating starts the chain unbonding period.
- Never give a validator or website your seed phrase.

## Basic flow

1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.
2. Ensure Terra Classic is selected as the active network.
3. Open the staking view and browse validators.
4. Choose a validator and click **Delegate**.
5. Enter the stake amount and confirm.
6. Confirm the delegation in Galaxy Station or an external staking view.

> **Tips**
>
> - Keep some LUNC for transaction fees.
> - Redelegations avoid the 21-day unbonding period but introduce a 21-day cooldown between the same validator pair.
> - Undelegating starts a 21-day unbonding period before funds become liquid.

## Source and verification

Last verified: 2026-06-01

This page was expanded during the docs content-remediation pass. Use Galaxy Station and external staking tools for live validator and delegation data.
