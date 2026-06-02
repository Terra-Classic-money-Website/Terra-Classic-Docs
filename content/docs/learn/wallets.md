---
title: "Wallets"
description: "Choose and use Terra Classic wallets safely, including seed phrase protection, exchange memo checks, test transactions, staking, governance, and verification."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/wallets.md"
sourceDate: "2026-05-27"
---
Wallet choice is a funds-safety decision, not only a convenience decision.

Use wallets that support Terra Classic clearly, show `columbus-5` network context, and let you verify addresses, fees, memos, staking actions, and governance transactions before signing.

## Recommended wallet discipline

- Use separate wallets for daily use, staking, validator operations, and high-value long-term storage.
- Keep seed phrases offline. Do not store them in screenshots, cloud notes, chat apps, browser password managers, or email.
- Never type a seed phrase into a website. A wallet may ask you to sign or approve a transaction; a website should not ask for your recovery phrase.
- Use hardware-wallet flows for meaningful funds when the wallet and device support the intended Terra Classic action.
- Keep enough LUNC liquid for future fees, votes, redelegations, and unstaking actions.
- Send a small test transaction before sending meaningful value to a new address, exchange, bridge, or wallet path.
- Verify transaction hashes in a wallet history view or explorer after sending.
- Treat links from social media, ads, and DMs as unsafe until independently verified.

## Exchange memo warning

Many exchanges use one deposit address for many users and require a memo to credit your account.

Before sending to an exchange:

1. Copy the address and memo from the exchange deposit screen.
2. Confirm the asset and network are Terra Classic.
3. Confirm the address starts with `terra`.
4. Send a small test deposit first.
5. Save the transaction hash, memo, and exchange deposit screenshot.

If a required memo is missing or wrong, the chain transaction may still succeed while the exchange fails to credit your account automatically.

## Wallet options

- [Keplr](https://www.keplr.app) — Browser extension and mobile wallet with Ledger support, staking, governance, and IBC transfers.
- [Galaxy Station (Hexxagon)](https://station.hexxagon.io) — Successor to Station featuring streamlined signing, WalletConnect, and validator tooling.
- [Orbitar Wallet](https://orbitar.app) — Community wallet with Terra Classic focus, dApp catalogue, and staking flows.
- [Cosmostation](https://www.cosmostation.io) — Mobile-first wallet with Ledger integration and governance reminders.
- [LUNC Dash](https://luncdash.com) — Lightweight mobile wallet tailored for Terra Classic community members.

## What to verify before signing

Before approving any wallet prompt, check:

- network: `columbus-5` for Terra Classic mainnet
- address prefix: `terra`
- asset denom and amount
- memo, especially for exchange deposits
- fee amount and fee denom
- transaction type, such as send, delegate, undelegate, redelegate, vote, or contract execute
- connected website domain

If the wallet prompt does not match the action you intended, reject it.

## Source and verification

Last verified: 2026-06-02

Wallet interfaces change. Verify wallet support, hardware-wallet support, and transaction details inside the current wallet UI before signing.
