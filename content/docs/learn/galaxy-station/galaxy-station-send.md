---
title: "Galaxy Station Send"
description: "Transfer assets using Galaxy Station or WalletConnect."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/galaxy-station/galaxy-station-send.md"
sourceDate: "2026-05-27"
---
Use this page as a practical checklist. Galaxy Station interface labels can change, so always verify the network, recipient, amount, memo, and fees before signing.

## Before sending

- Confirm Terra Classic is the active network.
- Confirm the recipient address starts with `terra`.
- Check whether the recipient requires a memo, especially for exchanges.
- Keep enough LUNC for transaction fees.
- Send a small test transaction first when the recipient, wallet, or exchange flow is new.
- Check whether current tax behavior can affect the received amount.

## Basic flow

1. Open the Galaxy Station extension or connect through WalletConnect.
2. Ensure Terra Classic is the active network.
3. Choose a token from **Assets**.
4. Click **Send**.
5. Paste the recipient `terra...` address.
6. Enter the amount and optional memo.
7. Review fees and confirm.
8. Confirm the transaction in your wallet history or an external explorer.

## If the transaction fails or looks wrong

- Check whether the transaction was rejected in Galaxy Station or broadcast and failed on-chain.
- Confirm the chain ID, recipient, memo, amount, and fee.
- Check that the account still has enough LUNC for fees.
- Search the transaction hash in an explorer if a hash was produced.
- Do not repeat a large send until you understand the first failure.

> **Tips**
>
> - Keep a small LUNC balance to cover future fees.
> - For rebel-2 testnet, request funds from the [faucet](https://t.me/tcrebelfaucet_bot).
> - If an exchange requires a memo, missing it can delay or break crediting.

## Source and verification

Last verified: 2026-06-02

Verify live transaction state through Galaxy Station and external explorers.
