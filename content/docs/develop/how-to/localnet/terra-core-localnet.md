---
title: "Run Terra Classic localnet"
description: "Spin up a multi-validator Terra Classic Core network locally with `make localnet-start`."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/how-to/localnet/terra-core-localnet.md"
sourceDate: "2026-05-27"
---
Use localnet when you want a private Terra Classic network that you can reset, test against, and break safely.

Localnet is the right environment for contract development, integration testing, transaction simulation, demos, and reproducible QA. It is not a replacement for testnet or mainnet validation.

## Prerequisites

Install:

- git
- make
- Docker
- Docker Compose

Use a machine with 16-32 GB RAM when possible. Local multi-validator networks can be heavy on smaller machines.

## Clone Terra Classic Core

```bash
git clone https://github.com/classic-terra/core.git terra-core
cd terra-core
```

## Start localnet

```bash
make localnet-start
```

This starts a multi-validator local Terra Classic network with RPC, LCD, and gRPC endpoints. Keep the process running while you develop.

## Typical local endpoints

```text
RPC:  http://localhost:26657
LCD:  http://localhost:1317
gRPC: http://localhost:9090
```

If these ports are already in use, stop the conflicting process or change the Terra Core localnet configuration.

## Chain ID

Common local chain IDs are:

```text
localterra
```

or:

```text
localnet
```

Check your terminal output and use the exact chain ID shown by your local setup. SDK and wallet configuration must match the running local chain.

## Using localnet with CosmES

Example Keplr setup against localnet:

```ts
import { KeplrController, WalletType } from "@goblinhunt/cosmes/wallet";

const controller = new KeplrController("<YOUR_WC_PROJECT_ID>");
const wallets = await controller.connect(WalletType.EXTENSION, [
  {
    chainId: "localterra",
    rpc: "http://localhost:26657",
    gasPrice: { denom: "uluna", amount: "28.325" },
  },
]);

const connected = wallets.get("localterra");
console.log("address", connected?.address);
```

> **Warning**
>
> Add the local chain information to Keplr before connecting. If Keplr has a different chain ID, RPC URL, or denomination configured, wallet connection and signing can fail.

## Using localnet for contracts

For contract workflows, use the same `Msg*` transactions as on mainnet or testnet. Only the chain ID, endpoints, and local keys change.

Typical flow:

1. Start localnet.
2. Confirm the local chain ID.
3. Build and optimize the contract.
4. Store code with `terrad tx wasm store`.
5. Instantiate the contract.
6. Execute and query the contract.
7. Reset localnet when you need a clean state.

For contract setup and deployment steps, continue with [Smart contracts](/develop/smart-contracts/overview/).

## Tips

- Keep localnet running in a separate terminal while developing.
- Use localnet for repeatable tests before using testnet or mainnet.
- Do not assume local gas, tax, liquidity, or oracle behavior exactly matches public networks.
- If a wallet cannot connect, verify chain ID, RPC URL, address prefix, and gas denom.
- If transaction behavior matters, test the same flow on `rebel-2` or with tiny mainnet amounts before production release.

## Related docs

- [Quick start guide](/develop/quick-start-guide/)
- [Tx best practices](/develop/classic-transaction-behavior/)
- [CosmES SDK](/develop/cosmes/cosmes/)
- [Smart contracts](/develop/smart-contracts/overview/)
