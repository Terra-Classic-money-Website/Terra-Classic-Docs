---
title: "Keplr Testnet"
description: "Use Keplr on the rebel-2 testnet, request faucet funds, and keep testnet activity separate from mainnet funds."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/keplr/keplr-testnet.md"
sourceDate: "2026-05-27"
---
The testnet support is integrated into Keplr. You can utilize the [faucet by LuncGoblins](https://faucet.luncgoblins.com) or the [Telegram bot](https://t.me/tcrebelfaucet_bot) to get some testnet LUNC.

Testnet funds have no mainnet value. Use testnet for learning, development, wallet checks, and transaction rehearsal.

## Testnet endpoints

- LCD: [https://lcd.luncblaze.com](https://lcd.luncblaze.com)
- RPC: [https://rpc.luncblaze.com](https://rpc.luncblaze.com)

## Safety rules

- Keep testnet accounts separate from mainnet accounts when practical.
- Do not send mainnet LUNC or USTC to a testnet-only flow.
- Confirm the chain ID is `rebel-2` before using faucet funds.
- Expect testnet resets, outages, stale endpoints, or changed faucet behavior.

## Send a test transaction

1. Open Keplr → **Assets** and select a token.
2. Click **Send** and enter a testnet `terra...` address.
3. Enter the amount, review fees, and approve.

## Source and verification

Last verified: 2026-06-02

Verify current testnet faucet and endpoint availability before relying on them for development.
