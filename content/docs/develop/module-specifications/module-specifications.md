---
title: "Module Specifications"
description: "Explore Terra Classic Core modules, parameters, and Classic-specific behaviour."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/module-specifications.md"
sourceDate: "2026-05-27"
---
Terra Classic Core is the Golang implementation of the Terra Classic protocol, built on top of the [Cosmos SDK](https://cosmos.network/appchains) and [CometBFT](https://cometbft.com/). Use these module specifications to understand how Classic’s on-chain logic is organized and how each module contributes to validator operations, governance, and the wider economy.

## How to use these specs

Each document starts with the module’s role in the protocol and then dives into state, message handling, and block transitions. Parameter tables at the end highlight defaults and governance-controlled values. The specs are designed to supplement a direct read of the Terra Core source code and help contributors reason about Classic-specific behavior.

> **Note**
> References to seigniorage and historical market swaps reflect legacy Terra protocol behavior. On Terra Classic, seigniorage is fully burned. Native LUNC and USTC swaps are live through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0's no-mint pool design.

Many Terra Classic modules are inherited from the Cosmos SDK with Classic-specific parameters and custom hooks.

## Block lifecycle overview

### Begin block

- Distribution: pay rewards for the previous block.
- Slashing: check downtime and double-signing evidence.

### Process messages

- Route and execute tx messages in their respective modules.

### End block

- Crisis: assert registered invariants.
- Oracle: tally exchange-rate votes (`VotePeriod`) and penalise oracle downtime (`SlashWindow`).
- Governance: expire deposits/votes and execute passed proposals.
- Market: maintain Market Module 2.0 swap state and safety-gated LUNC/USTC liquidity.
- Treasury: adjust tax rate and reward weight at each epoch.
- Staking: recompute the top-130 active validator set.

## Conventions

### Currency denominations

- LUNC is Terra Classic’s staking and governance asset (`uluna` microunit).
- All denominations use microunits (`10^-6`) on-chain.

Price discovery relies on the [oracle module](./spec-oracle), while the [market module](./spec-market) powers Swap Protocol for native LUNC and USTC swaps using oracle-aware pricing and bounded liquidity.
