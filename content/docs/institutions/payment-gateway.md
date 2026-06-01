---
title: "Payment gateway"
description: "How institutions can evaluate a Terra Classic payment gateway using native transfers, future swap routing, and collateralized stable assets."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs institutional payment gateway section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/payment-gateway.md"
sourceDate: "2026-06-01"
tocDepth: 3
---
A Terra Classic payment gateway is an application layer built by an institution, fintech, payment provider, merchant, wallet, or developer.

Terra Classic does not provide a centralized payment processor. The chain can provide settlement rails. The gateway provider is responsible for product design, compliance, custody, merchant onboarding, support, reconciliation, and user disclosures.

## The basic model

A payment gateway can use Terra Classic to:

- create payment requests
- accept wallet payments
- verify on-chain settlement
- reconcile invoices against transactions
- route assets through available swap or liquidity rails
- support merchant settlement policies
- expose receipts, hashes, and explorer links
- handle refunds, underpayments, overpayments, and failed payments

The gateway itself may be custodial, non-custodial, hybrid, or merchant-directed. That is a product and legal decision made by the gateway operator.

## What can be built today

Institutions can build a basic Terra Classic payment flow around live chain functionality:

| Capability | Current reality |
| --- | --- |
| LUNC transfers | Live on Terra Classic. |
| USTC transfers | Live, but USTC is market-priced and not a guaranteed stablecoin. |
| Wallet signing | Possible through supported wallets and integrations. |
| On-chain confirmation | Possible through nodes, indexers, explorers, and transaction queries. |
| Merchant reconciliation | Application-level responsibility. |
| Stable fiat settlement | Not natively solved by Terra Classic today. |

This can support experiments, crypto-native checkout, internal settlement, or niche merchant flows. It should not be marketed as a complete regulated fiat payment network without the required legal, custody, liquidity, and stable-asset infrastructure.

## What improves with Swap Protocol

If [Swap Protocol](/swap-protocol/overview/) is implemented and activated, a payment gateway could use it as a native L1 route between LUNC and USTC.

Possible uses:

- quote a LUNC amount for a USTC-denominated invoice
- accept one asset and settle another
- route small user payments through protocol liquidity
- display native spread fees and estimated output
- fail gracefully when oracle or liquidity checks stop the route

The gateway must still account for:

- finite liquidity
- oracle availability
- disabled routes
- spread fees
- transaction fees
- user slippage expectations
- USTC market volatility

Swap Protocol is not a stablecoin redemption mechanism and not a guarantee of payment final value.

## What improves with Forex Protocol

If [Forex Protocol](/forex-protocol/overview/) is implemented, audited, collateralized, and supported by wallets and liquidity providers, a payment gateway could use assets such as EUTC for local-currency settlement.

Possible uses:

- Euro-denominated invoices using EUTC
- merchant settlement into EUTC or another supported asset
- regional payment products using future collateralized assets
- stable-asset checkout for users who do not want LUNC price exposure
- multi-currency treasury reporting

This depends on Forex Protocol becoming live and institutionally credible. A payment gateway should not assume EUTC or future Terra Classic currency assets exist until they are deployed, collateralized, liquid, indexed, and usable in wallets.

## Gateway architecture

A serious payment gateway should separate the payment workflow from the blockchain workflow.

| Layer | Responsibilities |
| --- | --- |
| Checkout | Create invoice, asset options, amount, expiry, and user payment instructions. |
| Quote engine | Convert fiat, LUNC, USTC, EUTC, or other assets using trusted price sources and route availability. |
| Wallet layer | Support wallet connection, address generation, signing, and user transaction flow. |
| Chain watcher | Monitor mempool, committed transactions, confirmations, failures, and reorg assumptions. |
| Settlement policy | Decide whether the merchant holds, swaps, routes, or withdraws assets. |
| Reconciliation | Match invoices to hashes, amounts, sender data where available, timestamps, and settlement status. |
| Risk engine | Enforce limits, blocked jurisdictions, asset availability, volatility controls, and fraud controls. |
| Operator dashboard | Show payments, exceptions, refunds, balances, exports, and diagnostics. |

Terra Classic provides chain settlement. The gateway provider provides the product.

## Required user states

Do not collapse all failures into "payment failed."

Expose clear states:

| State | Meaning |
| --- | --- |
| Awaiting payment | Invoice exists but no matching transaction has settled. |
| Seen on-chain | A transaction has been detected but final confirmation policy is not complete. |
| Confirmed | Payment meets the gateway's confirmation rule. |
| Underpaid | Received amount is below the required amount after fees and tolerance. |
| Overpaid | Received amount exceeds the invoice amount. |
| Expired | Invoice deadline passed before valid payment. |
| Refund required | Operator or merchant action is needed. |
| Swap unavailable | Native routing is unavailable because of liquidity, oracle, or protocol state. |
| Asset unavailable | Requested stable asset or currency route is not live or supported. |

These states are basic trust infrastructure for merchants and institutions.

## Institutional requirements

Before launching a production gateway, the operator should define:

- supported countries and blocked countries
- supported assets
- custody model
- merchant settlement policy
- compliance and monitoring obligations
- transaction confirmation policy
- refund policy
- fee model
- liquidity routing policy
- price-source policy
- incident response process
- support responsibility
- data export format for accounting and audits

Terra Classic governance will not do this work for the gateway operator.

## Recommended first product

The strongest first version is not a universal payment network.

A credible first version would be:

> A transparent Terra Classic crypto checkout and settlement gateway for selected assets, with clear risk disclosures, transaction verification, reconciliation exports, and optional future routing through Swap Protocol and Forex Protocol when those products become live.

That is narrow enough to ship and serious enough to extend.

## Related pages

- [Multi-currency suite](/institutions/multi-currency-suite/)
- [Native swap rails](/institutions/native-swap-rails/)
- [Collateralized stable assets](/institutions/collateralized-stable-assets/)
- [Integration architecture](/institutions/integration-architecture/)
- [Risk and due diligence](/institutions/risk-and-due-diligence/)
