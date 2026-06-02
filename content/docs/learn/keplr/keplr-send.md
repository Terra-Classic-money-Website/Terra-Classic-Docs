---
title: "Keplr Send"
description: "Send assets with Keplr on Terra Classic."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/keplr/keplr-send.md"
sourceDate: "2026-05-27"
---
Use this page as a practical checklist. Keplr interface labels can change, so always verify the network, recipient, amount, memo, and fees in the wallet before signing.

## Before sending

- Confirm the active network is Terra Classic mainnet or the intended testnet.
- Confirm the recipient address starts with `terra`.
- Check whether the recipient requires a memo, especially for exchanges.
- Keep enough LUNC for transaction fees.
- Send a small test transaction first when the recipient, wallet, or exchange flow is new.
- Check whether current tax behavior can affect the received amount.

## Basic flow

1. Open the Keplr extension and select the Terra Classic network.
2. Navigate to **Assets** and choose the token you want to send.
3. Click **Send**.
4. Paste the recipient `terra...` address.
5. Enter the amount and optional memo.
6. Review fees and confirm with **Approve**.
7. Confirm the transaction in your wallet history or an external explorer.

## If the transaction fails or looks wrong

- Check whether the transaction was rejected in Keplr or broadcast and failed on-chain.
- Confirm the chain ID, recipient, memo, amount, and fee.
- Check that the account still has enough LUNC for fees.
- Search the transaction hash in an explorer if a hash was produced.
- Do not repeat a large send until you understand the first failure.

> **Tips**
>
> - Keep a small `uluna` balance to cover future fees.
> - For rebel-2, request test tokens from the [faucet](https://t.me/tcrebelfaucet_bot).
> - If an exchange requires a memo, missing it can delay or break crediting.

## Source and verification

Last verified: 2026-06-02

Verify live transaction state through Keplr and external explorers.
