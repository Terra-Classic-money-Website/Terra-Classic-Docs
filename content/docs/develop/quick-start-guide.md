---
title: "Quick start guide"
description: "A practical first pass for building on Terra Classic: networks, endpoints, transactions, SDKs, localnet, smart contracts, and production checks."
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
This guide gives developers a fast, practical overview of how to build on Terra Classic without reading the full documentation first.

Use it to understand the network, choose a development path, connect to endpoints, build transactions, test locally, deploy smart contracts, and avoid the most common Terra Classic-specific mistakes.

> **Important**
>
> Terra Classic is a community-maintained blockchain. Public infrastructure, tools, SDKs, wallets, and documentation can change over time. Always verify current chain parameters, endpoint health, tax behavior, and wallet support before deploying production applications.

## What you can build on Terra Classic

Terra Classic is a Cosmos SDK / CometBFT blockchain with CosmWasm smart contract support, IBC connectivity, staking, governance, oracle infrastructure, and Terra Classic-specific modules such as burn tax, tax exemptions, and dynamic validator commission.

Developers can build:

- dApps using CosmWasm smart contracts
- wallets and portfolio tools
- dashboards and analytics products
- DEX frontends and routing tools
- staking and governance interfaces
- payment and transfer flows
- bots, scripts, and backend services
- CW20 token tools
- IBC-aware applications
- integrations with Terra Classic wallets and infrastructure

Terra Classic is not an EVM chain. If you are coming from Ethereum, the closest mental model is:

| Ethereum-style concept | Terra Classic equivalent |
| --- | --- |
| Solidity smart contract | CosmWasm smart contract written mostly in Rust |
| ERC20 token | CW20 token |
| MetaMask | Keplr, Galaxy Station, Orbitar, Cosmostation, LUNC Dash |
| Web3.js / ethers.js | CosmES, Terra Classic SDK, LCD/RPC/gRPC APIs |
| Ganache / local chain | Terra Classic localnet |
| Contract deployment | Store WASM code, then instantiate contract |
| Contract call | `MsgExecuteContract` |
| Native token transfer | `MsgSend` |
| Cross-chain transfer | IBC transfer |

## The three main developer paths

Most Terra Classic builders fall into one of three paths.

### 1. Frontend dApp developer

Choose this path if you want users to connect a wallet, read balances, sign transactions, interact with contracts, or use Terra Classic dApps in a browser.

Recommended stack:

- TypeScript
- CosmES SDK
- Keplr and/or Galaxy Station
- RPC endpoint
- LCD endpoint for tax and chain queries
- FCD endpoint for gas prices

Use this path for wallets, dashboards, staking pages, DEX interfaces, governance interfaces, and consumer-facing dApps.

### 2. Smart contract developer

Choose this path if you want to write on-chain logic.

Recommended stack:

- Rust
- CosmWasm
- Terra Classic localnet
- `terrad`
- Docker
- CosmWasm optimizer
- CW20 / CW721 standards where needed

Use this path for DeFi protocols, vaults, token contracts, routing contracts, escrow systems, gaming logic, governance tooling, and on-chain automation primitives.

### 3. Backend / automation developer

Choose this path if you want to build bots, indexers, backend services, scripts, monitoring tools, integrations, or transaction automation.

Recommended stack:

- Python with `terra-classic-sdk`
- or TypeScript with CosmES
- private or dedicated RPC/LCD infrastructure
- secure secret management
- transaction simulation
- retries and monitoring

Use this path for analytics, alerts, scheduled jobs, treasury automation, validator tooling, integrations, and backend services.

## Network basics

Terra Classic mainnet is:

```text
Chain ID: columbus-5
Address prefix: terra
Native staking / governance asset: LUNC
On-chain micro-denom: uluna
```

Amounts are usually represented in micro-denominations on-chain.

```text
1 LUNC = 1,000,000 uluna
```

For example:

```text
1000000uluna = 1 LUNC
```

The main Terra Classic testnet used in the docs is:

```text
Chain ID: rebel-2
```

Local development usually runs on:

```text
localterra
```

or another local chain ID shown by your localnet output.

## Public endpoints

Public endpoints are useful for development, testing, and light workloads. Do not depend on public endpoints for production systems that need uptime, rate-limit control, or predictable latency.

### Mainnet: columbus-5

```text
LCD:
https://terra-classic-lcd.publicnode.com
https://api-lunc-lcd.binodes.com
https://lcd.terra-classic.hexxagon.io

RPC:
https://terra-classic-rpc.publicnode.com
https://api-lunc-rpc.binodes.com
https://rpc.terra-classic.hexxagon.io

FCD:
https://terra-classic-fcd.publicnode.com

Gas prices:
https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices

gRPC:
grpc+https://terra-classic-grpc.publicnode.com
grpc+https://grpc.terra-classic.hexxagon.io
```

### Testnet: rebel-2

```text
LCD:
https://lcd.luncblaze.com
https://lcd.terra-classic.hexxagon.dev

RPC:
https://rpc.luncblaze.com
https://rpc.terra-classic.hexxagon.dev

FCD:
https://fcd.luncblaze.com

gRPC:
grpc+https://grpc.terra-classic.hexxagon.dev
```

For the maintained endpoint list, see [Public Network Endpoints](/develop/endpoints/). For production, run your own node or use a dedicated infrastructure provider.

## Terra Classic-specific behavior developers must understand

Terra Classic follows standard Cosmos transaction patterns, but it has several chain-specific behaviors that can break integrations if ignored.

### 1. Burn tax can affect transfers

Terra Classic uses the `x/tax` module to apply burn tax to many taxable transfers.

This means:

- the receiver may receive less than the sender entered
- tax behavior can depend on transaction type
- some routes can use Tax2Gas / reverse-charge handling
- governance can change tax parameters
- apps should not hardcode tax assumptions forever

For basic transfers, the chain handles deduction. For good UX, your app should query current parameters and show the user an estimated received amount before confirmation.

Useful endpoints:

```text
Tax params:
https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params

Current burn tax rate:
https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate
```

### 2. Some addresses can be tax-exempt

Terra Classic has a tax exemption registry. Some addresses or zones can be exempt from burn tax.

This matters for:

- exchanges
- custody flows
- treasury wallets
- smart contract workflows
- service wallets
- internal app transfers

Useful endpoints:

```text
Zones:
https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones

Zone addresses:
https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/{zonename}/addresses

Taxable check:
https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/{from}/{to}
```

If your UX shows exact fees or exact received amounts, check taxability before the final confirmation screen.

### 3. Legacy mint/burn market swaps are disabled

Do not build new app flows that depend on pre-2022 algorithmic mint/burn market swaps.

Avoid assuming that these old flows are active:

- stablecoin to stablecoin market swaps
- algorithmic mint/burn swap behavior
- pre-2022 Terra Classic market-module assumptions

Native LUNC and USTC swaps are available through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0. That route uses no-mint protocol liquidity, oracle-aware pricing, finite epoch capacity, and safety controls.

For DEX swaps, build against DEX contracts and always include slippage protection such as `max_spread` or `minimum_receive`. For native LUNC and USTC swaps, read the [Swap Protocol developer reference](/swap-protocol/developer-reference/) before integrating.

### 4. Contract calls with attached funds behave differently from simple transfers

Sending funds to a contract is not always the same as a wallet-to-wallet bank transfer.

If your app sends funds into a CosmWasm contract, treat that flow separately in your fee and tax UX. Simulate transactions and verify actual chain behavior before showing users final cost or received-amount estimates.

### 5. Public infrastructure is for development, not production

Public RPC/LCD/FCD endpoints are helpful, but production systems should not depend on a single public endpoint.

Backend services should:

- use retries with exponential backoff
- support multiple endpoints
- monitor endpoint failures
- log transaction hashes, raw logs, gas used, and error codes
- alert on repeated failed broadcasts
- run dedicated infrastructure when reliability matters

## Recommended quick transaction flow

A safe Terra Classic transaction flow looks like this:

1. Choose the correct network: `columbus-5` for mainnet, `rebel-2` for testnet, or `localterra`/the local chain ID shown by localnet.
2. Fetch gas prices.
3. Fetch current tax parameters if your UX depends on fees or received amounts.
4. Check tax exemption status if the sender or recipient may be exempt.
5. Build the unsigned transaction.
6. Simulate the transaction.
7. Apply a gas adjustment margin.
8. Show the user an estimated cost and expected result.
9. Ask the wallet to sign.
10. Broadcast.
11. Poll or subscribe for confirmation.
12. Store the transaction hash and raw logs for debugging.

## Build with TypeScript and CosmES

CosmES is the recommended modern TypeScript SDK path for many Terra Classic frontend and integration projects.

Install it:

```bash
yarn add @goblinhunt/cosmes
```

Recommended TypeScript config:

```json
{
  "compilerOptions": {
    "moduleResolution": "bundler"
  }
}
```

If you use Vite and need WalletConnect compatibility, add:

```ts
// vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  define: { global: "window" },
});
```

### Connect Keplr

```ts
import { KeplrController, WalletType } from "@goblinhunt/cosmes/wallet";

const CHAIN_ID = "columbus-5";
const RPC = "https://terra-classic-rpc.publicnode.com";

async function connectKeplr(): Promise<void> {
  const controller = new KeplrController("<YOUR_WC_PROJECT_ID>");

  const wallets = await controller.connect(WalletType.EXTENSION, [
    {
      chainId: CHAIN_ID,
      rpc: RPC,
      gasPrice: { denom: "uluna", amount: "28.325" },
    },
  ]);

  const connected = wallets.get(CHAIN_ID);
  console.log("Connected address:", connected?.address);
}
```

### Query native balances

```ts
import { getNativeBalances } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";

async function readBalances(): Promise<void> {
  const balances = await getNativeBalances(RPC, {
    address: "terra1...",
  });

  console.log(balances);
}
```

### Send LUNC

```ts
import { MsgSend } from "@goblinhunt/cosmes/client";
import { KeplrController, WalletType } from "@goblinhunt/cosmes/wallet";

const CHAIN_ID = "columbus-5";
const RPC = "https://terra-classic-rpc.publicnode.com";

async function sendLunc(): Promise<void> {
  const controller = new KeplrController("<YOUR_WC_PROJECT_ID>");

  const wallets = await controller.connect(WalletType.EXTENSION, [
    {
      chainId: CHAIN_ID,
      rpc: RPC,
      gasPrice: { denom: "uluna", amount: "28.325" },
    },
  ]);

  const connected = wallets.get(CHAIN_ID);

  if (!connected) {
    throw new Error("Failed to connect wallet");
  }

  const msg = new MsgSend({
    fromAddress: connected.address,
    toAddress: "terra1...",
    amount: [{ denom: "uluna", amount: "1000000" }],
  });

  const unsigned = {
    msgs: [msg],
    memo: "hello from Terra Classic",
  };

  const fee = await connected.estimateFee(unsigned, 1.2);
  const txHash = await connected.broadcastTx(unsigned, fee);

  console.log("txhash:", txHash);
}
```

## Use a mnemonic wallet for scripts and backends

For scripts, automated jobs, tests, or backend services, use a programmatic wallet.

Never commit mnemonics. Never log mnemonics. Use environment variables or a secure secret manager.

```ts
import { MnemonicWallet } from "@goblinhunt/cosmes/wallet";
import { MsgSend } from "@goblinhunt/cosmes/client";

const wallet = new MnemonicWallet({
  mnemonic: process.env.MNEMONIC ?? "",
  bech32Prefix: "terra",
  chainId: "columbus-5",
  rpc: "https://terra-classic-rpc.publicnode.com",
  gasPrice: { denom: "uluna", amount: "28.325" },
  coinType: 330,
  index: 0,
});

async function sendFromBackend(): Promise<void> {
  const msg = new MsgSend({
    fromAddress: wallet.address,
    toAddress: "terra1...",
    amount: [{ denom: "uluna", amount: "1000000" }],
  });

  const unsigned = {
    msgs: [msg],
    memo: "backend send",
  };

  const fee = await wallet.estimateFee(unsigned, 1.2);
  const txHash = await wallet.broadcastTx(unsigned, fee);

  console.log("txhash:", txHash);
}
```

## Build with Python

For Python scripts and backends, use the Terra Classic SDK package.

Set up a virtual environment:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install --upgrade terra-classic-sdk
```

Connect to mainnet:

```python
from terra_classic_sdk.client.lcd import LCDClient
from terra_classic_sdk.key.mnemonic import MnemonicKey

LCD_URL = "https://terra-classic-lcd.publicnode.com"
CHAIN_ID = "columbus-5"
MNEMONIC = "<STORE THIS SECURELY>"

terra = LCDClient(url=LCD_URL, chain_id=CHAIN_ID)
wallet = terra.wallet(MnemonicKey(mnemonic=MNEMONIC))

print(wallet.key.acc_address)
```

Fetch gas prices:

```python
from typing import Dict
import requests

GAS_PRICE_ENDPOINT = "https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices"

def fetch_gas_prices(endpoint: str = GAS_PRICE_ENDPOINT) -> Dict[str, str]:
    response = requests.get(endpoint, timeout=10)
    response.raise_for_status()
    return response.json()

gas_prices = fetch_gas_prices()
print(gas_prices["uluna"])
```

Send LUNC:

```python
from typing import Dict
from terra_classic_sdk.client.lcd import LCDClient
from terra_classic_sdk.client.lcd.api.tx import CreateTxOptions
from terra_classic_sdk.core import Coins, Coin
from terra_classic_sdk.core.bank import MsgSend
from terra_classic_sdk.key.mnemonic import MnemonicKey

lcd = LCDClient(
    url="https://terra-classic-lcd.publicnode.com",
    chain_id="columbus-5",
)

wallet = lcd.wallet(MnemonicKey(mnemonic="<SECURE MNEMONIC>"))
gas_prices: Dict[str, str] = fetch_gas_prices()

msg = MsgSend(
    from_address=wallet.key.acc_address,
    to_address="terra1...",
    amount=Coins([Coin("uluna", 1_000_000)]),
)

tx = wallet.create_and_sign_tx(
    options=CreateTxOptions(
        msgs=[msg],
        gas="auto",
        gas_prices=Coins(gas_prices),
        fee_denoms="uluna",
        gas_adjustment=1.4,
    )
)

result = lcd.tx.broadcast(tx)
print(result.txhash)
```

Python is especially useful for:

- analytics
- bots
- scheduled jobs
- monitoring tools
- indexer support
- treasury operations
- backend integrations

## Run a local Terra Classic network

Use localnet when you want a private chain that you can reset, test against, and break safely.

Prerequisites:

- git
- make
- Docker
- Docker Compose
- 16-32 GB RAM recommended

Clone Terra Classic Core:

```bash
git clone https://github.com/classic-terra/core.git terra-core
cd terra-core
```

Start localnet:

```bash
make localnet-start
```

Typical local endpoints:

```text
RPC:  http://localhost:26657
LCD:  http://localhost:1317
gRPC: http://localhost:9090
```

Typical local chain ID:

```text
localterra
```

or:

```text
localnet
```

Check your terminal output and use the exact chain ID shown by your local setup.

Use localnet for:

- contract development
- integration testing
- frontend testing
- transaction simulation
- module experiments
- demos
- reproducible QA

For the dedicated walkthrough, see [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/).

## Build CosmWasm smart contracts

Terra Classic supports CosmWasm smart contracts.

A CosmWasm contract usually has three core entry points:

```text
instantiate()
execute()
query()
```

Optionally, upgradeable contracts can also implement:

```text
migrate()
```

### Install Rust and tooling

Install Rust, then add the WASM target:

```bash
rustup default 1.82.0
rustup target add wasm32-unknown-unknown
```

Install `cargo-generate`:

```bash
cargo install cargo-generate --features vendored-openssl
```

Install `wasm-opt`:

```bash
cargo install wasm-opt
```

### Start from a CosmWasm template

```bash
cargo generate --git https://github.com/CosmWasm/cw-template.git --branch 1.5 --name my-first-contract
cd my-first-contract
```

The basic contract structure includes:

```text
src/contract.rs
src/msg.rs
src/state.rs
```

Common message types:

```text
InstantiateMsg
ExecuteMsg
QueryMsg
```

Common contract state helpers:

```text
Item
Map
```

### Build the contract

```bash
cargo wasm
```

Optimize it:

```bash
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/workspace-optimizer:0.14.0
```

For ARM machines:

```bash
docker run --rm -v "$(pwd)":/code \
  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \
  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \
  cosmwasm/workspace-optimizer-arm64:0.14.0
```

This creates an optimized `.wasm` artifact that can be uploaded to the chain.

## Upload, instantiate, execute, and query a contract

Once localnet is running and your optimized `.wasm` file is ready, use `terrad`.

### 1. Add or recover a local key

```bash
terrad keys add test1 --recover
```

### 2. Store contract code

```bash
terrad tx wasm store artifacts/my_first_contract.wasm \
  --from test1 \
  --chain-id=localterra \
  --gas=auto \
  --gas-prices=28.325uluna \
  --broadcast-mode=sync
```

The result includes a `code_id`.

### 3. Instantiate the contract

```bash
terrad tx wasm instantiate 1 '{"count":0}' \
  --from test1 \
  --chain-id=localterra \
  --fees=28.325uluna \
  --gas=auto \
  --broadcast-mode=sync
```

The result includes a `contract_address`.

### 4. Execute the contract

```bash
terrad tx wasm execute terra1... '{"increment":{}}' \
  --from test1 \
  --chain-id=localterra \
  --gas=auto \
  --fees=28.325uluna \
  --broadcast-mode=sync
```

### 5. Query the contract

```bash
terrad query wasm contract-store terra1... '{"get_count":{}}'
```

## Interact with CW20 tokens

CW20 is the CosmWasm fungible token standard, broadly similar to ERC20.

### Query CW20 balance with CosmES

```ts
import { getCw20Balance } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";
const token = "<tokenContractAddress>";
const wallet = "<walletAddress>";

const balance = await getCw20Balance(RPC, {
  address: wallet,
  token,
});

console.log(balance.toString());
```

### Transfer CW20 tokens

```ts
import { MsgExecuteContract } from "@goblinhunt/cosmes/client";

const execMsg = {
  transfer: {
    recipient: "terra1...",
    amount: "1000000",
  },
};

const msg = new MsgExecuteContract({
  sender: connected.address,
  contract: "<tokenContractAddress>",
  msg: execMsg,
  funds: [],
});

const unsigned = {
  msgs: [msg],
  memo: "cw20 transfer",
};

const fee = await connected.estimateFee(unsigned, 1.2);
const txHash = await connected.broadcastTx(unsigned, fee);
```

Use `transfer` when moving CW20 balance to a wallet.

Use `send` when sending CW20 tokens to another contract and triggering a message on that receiving contract.

## Build DEX and swap integrations carefully

Terra Classic supports native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/). For general token swaps, CW20 routes, pair contracts, and router behavior, use DEX smart contracts.

A typical DEX swap is a `MsgExecuteContract` against a pair or router contract.

Example shape:

```ts
import { MsgExecuteContract } from "@goblinhunt/cosmes/client";

const msg = new MsgExecuteContract({
  sender: connected.address,
  contract: "terra1...pair",
  msg: {
    swap: {
      offer_asset: {
        info: { native_token: { denom: "uluna" } },
        amount: "1000000",
      },
      belief_price: "0.000123",
      max_spread: "0.005",
      to: connected.address,
    },
  },
  funds: [{ denom: "uluna", amount: "1000000" }],
});
```

Always:

- use the DEX's published schemas
- verify contract addresses
- query factory contracts for pair addresses
- set `max_spread` or `minimum_receive`
- simulate before broadcasting
- show clear slippage and received-amount estimates
- never assume liquidity depth

## Use IBC only with known channels and relayer assumptions

Terra Classic supports IBC routing. IBC can be used for cross-chain transfers and integrations with other Cosmos ecosystems.

A typical IBC transfer uses `MsgIbcTransfer`.

```ts
import { MsgIbcTransfer } from "@goblinhunt/cosmes/client";

const msg = new MsgIbcTransfer({
  sourcePort: "transfer",
  sourceChannel: "channel-XXXX",
  token: { denom: "uluna", amount: "1000000" },
  sender: connected.address,
  receiver: "cosmos1...dest",
  timeoutHeight: { revisionNumber: "0", revisionHeight: "0" },
  timeoutTimestamp: "0",
});
```

Before shipping IBC flows:

- verify the channel
- verify the destination chain
- verify relayer activity
- show timeout and recovery information
- test on testnet or with small amounts first
- do not assume every historical channel is active

## Terra Classic module map for developers

You do not need to understand every module before building. But you should know where to look.

| Module | Why it matters |
| --- | --- |
| `x/auth` | Accounts, signatures, ante-handler, fees, memo limits, burn-tax integration |
| `x/bank` | Native token balances and transfers |
| `x/wasm` | CosmWasm smart contract upload, instantiate, execute, query, migrate |
| `x/tax` | Burn tax, gas price floor, tax splits |
| `x/taxexemption` | Tax-exempt zones and addresses |
| `x/staking` | Validators, delegations, validator set |
| `x/distribution` | Rewards, commissions, community pool flows |
| `x/gov` | Proposals, voting, parameter changes |
| `x/oracle` | Exchange-rate voting and oracle slashing |
| `x/market` | Legacy market logic; swaps disabled on current Terra Classic |
| `x/ibc` / `x/transfer` | Cross-chain packet routing and token transfer |
| `ibc-hooks` | Contract callbacks on IBC packets |
| `x/authz` | Delegated message execution |
| `x/feegrant` | Fee allowances |
| `x/dyncomm` | Dynamic validator commission logic |
| `x/upgrade` | Coordinated chain upgrades |

Most application builders will mainly interact with:

```text
x/bank
x/wasm
x/tax
x/taxexemption
x/gov
x/staking
x/ibc
```

## Production checklist

Before deploying a Terra Classic app to production, confirm the following.

### Network and infrastructure

- You use the correct chain ID.
- You have backup RPC/LCD endpoints.
- You do not depend on one public endpoint.
- You monitor endpoint health.
- You log tx hashes, raw logs, gas used, and errors.
- You have retry and timeout handling.

### Transactions

- You fetch live gas prices.
- You simulate before broadcast.
- You apply a gas adjustment margin.
- You handle wallet rejection separately from broadcast failure.
- You handle out-of-gas and insufficient-fee errors.
- You do not hardcode long-term tax behavior.

### Burn tax and fees

- You query current tax parameters when UX accuracy matters.
- You check tax exemption status when needed.
- You show estimated received amounts clearly.
- You understand that governance can change parameters.

### Smart contracts

- You test locally.
- You test on testnet if possible.
- You optimize WASM before upload.
- You generate and publish schemas.
- You verify contract addresses.
- You document admin / migration permissions.
- You audit or peer-review contract logic before mainnet.

### Wallet UX

- You support at least one widely used wallet.
- You show the network clearly.
- You display amounts in LUNC but sign microunits.
- You warn users before mainnet transactions.
- You avoid confusing legacy stablecoin behavior with current active behavior.

### Security

- You never expose mnemonics.
- You use environment variables or secret managers.
- You use hardware wallets for treasury or validator funds.
- You limit backend hot-wallet balances.
- You monitor suspicious failures and unexpected parameter changes.
- You treat third-party contracts, endpoints, and dApps as external dependencies.

## Common mistakes

### Treating Terra Classic like old Terra Classic documentation

Some old materials describe legacy behavior that is not active today. Always verify current Terra Classic behavior before building.

Most importantly: legacy mint/burn market swaps are disabled. Swap Protocol is the current native LUNC and USTC route and has different no-mint liquidity, oracle, and safety assumptions.

### Hardcoding gas prices

Gas prices can change. Fetch live gas prices or maintain a controlled production configuration that you update deliberately.

### Ignoring burn tax

If your app shows transfer previews, balances after transfer, accounting data, or received amounts, you must understand burn tax behavior.

### Assuming every transfer behaves the same

Wallet-to-wallet transfers, contract executions with funds, CW20 transfers, DEX swaps, IBC transfers, and tax-exempt routes can behave differently.

### Trusting public infrastructure for production

Public endpoints are useful for development. Production apps need redundancy, monitoring, and preferably dedicated infrastructure.

### Broadcasting without simulation

Simulation catches many gas, fee, message, and contract errors before the user signs or before the backend submits a transaction.

### Forgetting that Terra Classic is governance-controlled

Many important parameters can change through governance. Build apps that can adapt to current chain state instead of assuming fixed behavior.

## Recommended build path for a first Terra Classic dApp

If you are new to Terra Classic, follow this order:

1. Install a supported wallet such as Keplr or Galaxy Station.
2. Connect to `columbus-5` with CosmES and read a wallet balance.
3. Send a small test transaction.
4. Query tax parameters and gas prices.
5. Run localnet.
6. Create a simple CosmWasm contract from the template.
7. Build and optimize the contract.
8. Store and instantiate it on localnet.
9. Query and execute it from the CLI.
10. Connect a TypeScript frontend to the contract.
11. Add transaction simulation and error handling.
12. Test with testnet or small mainnet amounts.
13. Replace public endpoints with production-grade infrastructure.
14. Publish your contract addresses, schemas, assumptions, and risks.

## Minimal mental model

Terra Classic development becomes much easier once you remember this:

- Use `columbus-5` for mainnet.
- Use `uluna` for on-chain LUNC amounts.
- Use CosmES for TypeScript apps.
- Use `terra-classic-sdk` for Python scripts.
- Use Rust and CosmWasm for smart contracts.
- Use localnet before mainnet.
- Use Swap Protocol for native LUNC/USTC market-module swaps; use DEX contracts for general token swap integrations.
- Simulate transactions before broadcasting.
- Check gas, tax, and tax exemptions when UX accuracy matters.
- Do not rely on public endpoints for serious production workloads.
- Expect governance-controlled parameters to change over time.

Terra Classic already has the core pieces a developer needs: a running Cosmos-based chain, smart contracts, wallets, public endpoints, IBC, staking, governance, and community-maintained tooling. The opportunity is to turn those pieces into clear, useful products that people can actually use.

## Related docs

- [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/)
- [Tx best practices](/develop/classic-transaction-behavior/)
- [Builder tooling](/learn/builder-tooling/)
- [CosmES SDK](/develop/cosmes/cosmes/)
- [Smart contracts](/develop/smart-contracts/overview/)
- [Module specifications](/develop/module-specifications/module-specifications/)
- [Public Network Endpoints](/develop/endpoints/)
