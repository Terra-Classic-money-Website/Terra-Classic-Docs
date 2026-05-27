---
title: "Cosmes Query Data"
description: "import { getNativeBalances } from \"@goblinhunt/cosmes/client\";"
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/cosmes/cosmes-query-data.md"
sourceDate: "2026-05-27"
---
> **Tip**
>
> CosmES client helpers take the RPC endpoint string directly—no manual `RpcClient` instance is required.

## Native balances

```ts
import { getNativeBalances } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";
const balances = await getNativeBalances(RPC, { address: "terra1..." });
console.log(balances);
```

## Account info

```ts
import { getAccount } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";
const account = await getAccount(RPC, { address: "terra1..." });
console.log(account);
```

## Contract query

```ts
import { queryContract } from "@goblinhunt/cosmes/client";

const RPC = "https://terra-classic-rpc.publicnode.com";
const contract = "terra1...";
const response = await queryContract(RPC, {
  address: contract,
  query: { config: {} },
});
console.log(response);
```

> **Notes**
>
> - Batch queries when building dApp front-ends to reduce RPC overhead.
> - Use private infrastructure or a dedicated provider for production workloads.
