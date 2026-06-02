---
title: "Galaxy Station Testnet"
description: "Use Galaxy Station on the rebel-2 testnet, request faucet funds, and keep testnet activity separate from mainnet funds."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "learn/galaxy-station/galaxy-station-testnet.md"
sourceDate: "2026-05-27"
---
## Endpoints

- LCD: [https://lcd.luncblaze.com](https://lcd.luncblaze.com)
- RPC: [https://rpc.luncblaze.com](https://rpc.luncblaze.com)

Testnet funds have no mainnet value. Use testnet for learning, development, wallet checks, and transaction rehearsal.

## Safety rules

- Keep testnet accounts separate from mainnet accounts when practical.
- Do not send mainnet LUNC or USTC to a testnet-only flow.
- Confirm the chain ID is `rebel-2` before using faucet funds.
- Expect testnet resets, outages, stale endpoints, or changed faucet behavior.

## Get test funds

1. Connect Galaxy Station to the Terra Classic testnet (`rebel-2`).
2. Request tokens from the [rebel-2 faucet bot](https://t.me/tcrebelfaucet_bot). Enter your testnet `terra...` address.

## Send a test transaction

1. In Galaxy Station, open **Assets** and select a token.
2. Click **Send**, enter the recipient testnet `terra...` address, and confirm the amount.
3. Review fees and approve the transaction.

## Source and verification

Last verified: 2026-06-02

Verify current testnet faucet and endpoint availability before relying on them for development.
