---
title: "Fees"
description: "Understand gas, burn tax, Swap Protocol spread fees, and historical Terra swap fees on Terra Classic."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "learn/fees.md"
sourceDate: "2026-05-27"
---
All Terra Classic transactions consume gas. Transfers can also be affected by burn tax. Native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/) use a Market Module 2.0 spread fee instead of the normal chain-wide burn tax for that in-module route.

| Transaction type | [Gas](#gas) | [Tobin](#tobin-tax) | [Spread](#spread-fee) | Burn tax |
| --- | --- | --- | --- | --- |
| ~~Stablecoin ↔ stablecoin market swap~~ *disabled* | ✓ | ✓ |  |  |
| LUNC ↔ USTC Swap Protocol route | ✓ |  | ✓ |  |
| Wallet-to-wallet transfer | ✓ |  |  | ✓ |

DApps such as DEXes can charge additional protocol fees on top of network fees.

## Gas

[Gas](/appendices/glossary/#fees) covers validator compute and storage. Validators configure minimum gas prices; transactions must include fees meeting or exceeding that implied price.

Key behaviour on Terra Classic:

- Validators reject transactions with implied gas prices below their configured minimum.
- Most wallets estimate gas above the minimum to avoid underestimation.
- Unused gas is **not** refunded.
- Transactions are processed FIFO within the mempool, not by highest fee.

Current suggested prices are available via [`https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices`](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices).

Gas fees flow into the distribution module and are paid out to validators and delegators as staking rewards, and fill the Community Pool.

## Burn tax (`x/tax` module)

Terra Classic uses the `x/tax` module to levy burn taxes on transfers.

- Parameters: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params)
- Current burn rate: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate)

Reverse-charge (Tax2Gas) rules can deduct tax from the transfer amount or fees depending on the transaction path. Always confirm current governance decisions before relying on a specific behaviour.

### Tax exemption registry

Some addresses are exempt from burn tax. Query the registry via:

- Zones list: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones)
- Zone addresses: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/{zonename}/addresses`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/%7Bzonename%7D/addresses)
- Taxable check: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/{from}/{to}`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/%7Bfrom%7D/%7Bto%7D)

## Tobin tax

The Tobin tax historically applied to swaps between Terra stablecoins. Market Module 2.0 disables stable-to-stable routing, so Tobin tax should be treated as historical reference for current Swap Protocol usage.

Discussed rationale: [“On swap fees: the greedy and the wise”](https://medium.com/terra-money/on-swap-fees-the-greedy-and-the-wise-b967f0c8914e).

When active, Tobin tax revenue flowed into the oracle reward pool and was redistributed to validators who reported accurate exchange rates. See the [oracle module spec](/develop/module-specifications/spec-oracle/) for reward mechanics.

## Spread fee

The proposed [Swap Protocol](/swap-protocol/overview/) design includes spread fees for native LUNC and USTC swaps. The Market Module 2.0 source design sets the Swap Protocol spread fee at 0.35% of notional, collected in the output asset, but production availability must be verified separately.

Swap Protocol routes spread fees 50% to burn and 50% to the Oracle Pool. See [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/) for the full product-level explanation.

Historical spread logic remains useful context for the [market module](/develop/module-specifications/spec-market/), but applications should not assume pre-2022 mint/burn swap behavior.
