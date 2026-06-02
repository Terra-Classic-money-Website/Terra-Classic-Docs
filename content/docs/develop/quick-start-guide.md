---
title: "Quick start guide"
description: "Choose the right Terra Classic developer path, connect safely, and know which deeper guide to use next."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs owner-provided draft"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "owner-draft-2026-05-29"
sourcePath: "content/docs/develop/quick-start-guide.md"
sourceDate: "2026-05-29"
tocDepth: 2
---
This guide is the first pass for developers who want to build on Terra Classic without reading every reference page first.

Use it to understand the chain, choose your path, make your first safe integration decision, and move into the dedicated guides when you need exact commands or deeper examples.

> **Important**
>
> Terra Classic is a community-maintained blockchain. Public infrastructure, SDK support, wallet behavior, tax parameters, and governance-controlled settings can change. Verify live chain state before deploying production applications.

## What Terra Classic is for developers

Terra Classic is a Cosmos SDK / CometBFT blockchain with CosmWasm smart contracts, IBC connectivity, staking, governance, oracle infrastructure, and Terra Classic-specific tax behavior.

The practical developer constants are:

| Concept | Terra Classic value |
| --- | --- |
| Mainnet chain ID | `columbus-5` |
| Mainnet address prefix | `terra` |
| Native staking and governance asset | LUNC |
| On-chain LUNC denomination | `uluna` |
| Unit conversion | `1 LUNC = 1,000,000 uluna` |
| Common testnet | `rebel-2` |
| Common local chain ID | `localterra` or `localnet` |

Check [Current network status and parameters](/learn/current-network-status-and-parameters/) before production work that depends on current software versions, tax behavior, governance parameters, staking settings, or IBC state.

If you are coming from Ethereum, use this mental model:

| Ethereum-style concept | Terra Classic equivalent |
| --- | --- |
| Solidity smart contract | CosmWasm contract, usually written in Rust |
| ERC20 token | CW20 token |
| MetaMask | Keplr, Galaxy Station, Orbitar, Cosmostation, LUNC Dash |
| Web3.js / ethers.js | CosmES, Terra Classic SDK, LCD/RPC/gRPC APIs |
| Ganache / local chain | Terra Classic localnet |
| Contract deployment | Store WASM code, then instantiate contract |
| Contract call | `MsgExecuteContract` |
| Native token transfer | `MsgSend` |
| Cross-chain transfer | IBC transfer |

## Choose your developer path

Most builders should start with one of these paths.

| Path | Use it when you want to build | Start here |
| --- | --- | --- |
| Frontend dApp | Wallet connection, balances, signing, staking, governance, DEX, or contract UX | [CosmES SDK](/develop/cosmes/cosmes/) |
| Smart contract | On-chain logic, vaults, token contracts, DeFi primitives, escrow, games, or governance tools | [Smart contracts](/develop/smart-contracts/overview/) |
| Backend or automation | Bots, scripts, indexers, monitoring, treasury jobs, analytics, or integrations | [Terra Py](/develop/terra-py/terra-py/) |
| Infrastructure | Nodes, endpoints, validator tooling, local testing, or production-grade RPC/LCD access | [Run a full Terra node](/full-node/overview/) |

For cross-chain work, read [IBC and interchain connectivity](/learn/ibc-and-interchain/) before exposing routes to users.

If you are not sure which path fits, start with a frontend read-only integration. Reading a balance through an RPC endpoint teaches you the network model without risking funds.

## Before you send a transaction

Terra Classic follows standard Cosmos transaction patterns, but several chain-specific details can break naive integrations.

### Burn tax can affect transfers

Terra Classic uses the `x/tax` module. Some transfers can be taxed, and the receiver may receive less than the entered send amount.

Do not hardcode tax assumptions. Query current parameters or simulate when your app shows fees, accounting values, or expected received amounts.

Read the detailed guide: [Tx best practices](/develop/classic-transaction-behavior/).

### Tax exemptions exist

Some addresses or zones can be exempt from burn tax. This matters for exchanges, custody flows, treasury wallets, smart contract workflows, and service wallets.

If the final received amount matters, check taxability before the user confirms.

### Public endpoints are not production infrastructure

Public RPC, LCD, FCD, and gRPC endpoints are useful for development and light workloads. Production apps need redundancy, monitoring, and preferably dedicated infrastructure.

Use the maintained endpoint list: [Public Network Endpoints](/develop/endpoints/).

### Legacy market-swap assumptions are dangerous

Do not build against pre-2022 algorithmic mint/burn behavior or old Terra market-swap assumptions.

Native LUNC and USTC swaps are documented under [Swap Protocol](/swap-protocol/overview/). General token swaps should use active DEX contracts and explicit slippage controls.

### Simulation is part of the product

Before broadcasting, simulate transactions when the app needs reliable gas estimates, fee previews, or clearer failure handling.

At minimum, production flows should log:

- transaction hash
- raw log
- gas used
- endpoint used
- chain ID
- wallet or backend account
- failure code and message

## First 30-minute path

This is the shortest useful path for a developer new to Terra Classic.

1. Pick `columbus-5` for mainnet, `rebel-2` for testnet, or a local chain ID from localnet output.
2. Use a public endpoint only for development.
3. Connect with CosmES or Terra Py.
4. Read a wallet balance.
5. Convert display units correctly: `1000000uluna` is `1 LUNC`.
6. Fetch current gas prices before sending.
7. Read the transaction behavior guide before showing final fee or received-amount estimates.
8. Send only a small test transaction first.
9. Run localnet before contract development or repeatable integration testing.
10. Move deeper into the exact guide for your path.

## Minimal TypeScript starter

Install CosmES:

```bash
yarn add @goblinhunt/cosmes
```

For TypeScript projects, use modern module resolution:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

Read a native balance:

```ts
import { getNativeBalances } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";
const address = "terra1...";

async function main(): Promise<void> {
  const balances = await getNativeBalances(RPC, { address });
  console.log(balances);
}

main().catch(console.error);
```

Connect Keplr:

```ts
import { KeplrController, WalletType } from "@goblinhunt/cosmes/wallet";

const CHAIN_ID = "columbus-5";
const RPC = "https://terra-classic-rpc.publicnode.com";

async function connect(): Promise<void> {
  const controller = new KeplrController("<YOUR_WC_PROJECT_ID>");
  const wallets = await controller.connect(WalletType.EXTENSION, [
    {
      chainId: CHAIN_ID,
      rpc: RPC,
      gasPrice: { denom: "uluna", amount: "28.325" },
    },
  ]);

  const connected = wallets.get(CHAIN_ID);
  console.log("address", connected?.address);
}

connect().catch(console.error);
```

For signing, broadcasting, mnemonic wallets, and wallet-specific setup, continue with [CosmES SDK](/develop/cosmes/cosmes/).

## Local development

Use localnet when you need a private chain you can reset, test against, and break safely.

Localnet is useful for:

- contract development
- integration testing
- frontend transaction testing
- module experiments
- reproducible QA
- demos

Do not keep localnet setup details in your head from this page. Use the dedicated guide: [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/).

## Smart contracts

Terra Classic supports CosmWasm smart contracts.

A typical contract workflow is:

1. Install Rust and CosmWasm tooling.
2. Start from a CosmWasm template.
3. Build and optimize the WASM artifact.
4. Store code on localnet or testnet.
5. Instantiate a contract.
6. Execute and query it.
7. Publish schemas, addresses, admin permissions, and risk assumptions.

Use the dedicated smart contract section for exact commands: [Smart contracts](/develop/smart-contracts/overview/).

## Python and backend automation

Use Python when you are building scripts, scheduled jobs, analytics, monitoring, treasury automation, or backend services.

Start with [Terra Py](/develop/terra-py/terra-py/).

Backend services should also read [Tx best practices](/develop/classic-transaction-behavior/) before broadcasting transactions automatically.

## Native swaps, DEX routes, CW20, and IBC

These are not first-step integrations. They need more careful assumptions.

| Integration type | Read first |
| --- | --- |
| Native LUNC and USTC swaps | [Swap Protocol developer reference](/swap-protocol/developer-reference/) |
| General DEX routes | DEX contract documentation and [Tx best practices](/develop/classic-transaction-behavior/) |
| CW20 tokens | [Manage CW20 tokens](/develop/smart-contracts/manage-cw20-tokens/) |
| IBC transfers | [IBC module specification](/develop/module-specifications/spec-ibc/) and current channel data |
| Tax-sensitive flows | [Tx best practices](/develop/classic-transaction-behavior/) and [Fees](/learn/fees/) |

For IBC, verify the channel, destination chain, relayer activity, timeout behavior, and recovery path. A historical channel existing does not prove that the route is healthy today.

## Before mainnet

Before shipping a Terra Classic app to production, confirm:

- the app uses the correct chain ID
- display amounts and micro-denom amounts are separated
- gas prices are refreshed or deliberately configured
- transaction simulation is used where accuracy matters
- tax behavior is understood for the transaction type
- tax exemption status is checked where needed
- public endpoints are not a single point of failure
- tx hash, raw logs, gas used, and errors are persisted
- wallet rejection and broadcast failure are handled separately
- smart contracts have been tested locally and reviewed
- contract addresses, schemas, admin permissions, and risk assumptions are documented
- users can see when they are using mainnet

## Common mistakes

### Treating Terra Classic as old Terra documentation

Some old Terra materials describe behavior that is not active on Terra Classic today. Verify current chain behavior before building.

### Treating public endpoints as reliable production infrastructure

Public endpoints are best-effort access surfaces. Production systems need redundancy and monitoring.

### Hardcoding fees and tax behavior

Gas prices, tax parameters, and governance-controlled settings can change. Build apps that can adapt to current chain state.

### Skipping simulation

Simulation catches many gas, fee, message, and contract errors before a user signs or before a backend submits a transaction.

### Building swap flows from memory

Native Swap Protocol, DEX contracts, CW20 transfers, and IBC transfers have different assumptions. Use the relevant docs and verify live state.

## Where to go next

| Need | Guide |
| --- | --- |
| Maintained endpoint list | [Public Network Endpoints](/develop/endpoints/) |
| Safe transaction behavior | [Tx best practices](/develop/classic-transaction-behavior/) |
| TypeScript SDK path | [CosmES SDK](/develop/cosmes/cosmes/) |
| Python SDK path | [Terra Py](/develop/terra-py/terra-py/) |
| Local private chain | [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/) |
| Contract development | [Smart contracts](/develop/smart-contracts/overview/) |
| CW20 token workflows | [Manage CW20 tokens](/develop/smart-contracts/manage-cw20-tokens/) |
| Native LUNC and USTC swaps | [Swap Protocol](/swap-protocol/overview/) |
| Module-level behavior | [Module specifications](/develop/module-specifications/module-specifications/) |
| Builder overview | [Builder tooling](/learn/builder-tooling/) |

Terra Classic already has the core pieces a developer needs: a running Cosmos-based chain, smart contracts, wallets, public endpoints, IBC, staking, governance, and community-maintained tooling. The goal is to turn those pieces into clear products that users can actually understand and use.
