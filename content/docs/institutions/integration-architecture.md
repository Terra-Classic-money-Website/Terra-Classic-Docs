---
title: "Integration architecture"
description: "Technical integration model for institutions building wallets, payment gateways, analytics, custody, infrastructure, or product support on Terra Classic."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs integration architecture"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/integration-architecture.md"
sourceDate: "2026-06-01"
tocDepth: 3
---
Institutions should treat Terra Classic integration as a production system, not as a wallet button.

The right architecture depends on whether the institution is building payments, custody, analytics, asset support, exchange infrastructure, treasury tooling, or developer services.

## Integration paths

| Path | Typical institution | Governance needed? |
| --- | --- | --- |
| Read-only data integration | Analytics providers, risk teams, research desks. | Usually no. |
| Wallet support | Wallets, custodians, fintech apps. | Usually no, unless protocol changes are requested. |
| Payment gateway | PSPs, merchants, fintechs, crypto-native businesses. | Usually no for private gateway logic; yes for protocol-level changes. |
| Exchange or custody support | Exchanges, custodians, prime brokers. | Usually no for listing/support decisions. |
| Full-node or endpoint operation | Infrastructure providers, validators, data platforms. | No, unless seeking community funding or official signaling. |
| Swap Protocol integration | Wallets, gateways, market tools. | Depends on whether the protocol is live and what changes are needed. |
| Forex Protocol or asset issuance | Stablecoin issuers, fintechs, liquidity providers. | Likely yes for protocol activation, parameters, or asset rollout. |

Do not overuse governance. Private products should not ask governance for permission when they can simply build.

## Recommended production stack

A serious integration should include:

- at least one self-operated node or paid infrastructure provider
- fallback public endpoints
- chain status monitoring
- transaction broadcaster
- indexer or data pipeline
- wallet or custody integration
- transaction reconciliation
- alerting and incident workflow
- exportable diagnostics for support
- compliance and risk controls where relevant

Public endpoints are useful, but institutions should avoid making one community endpoint a single point of failure.

See [Public Network Endpoints](/develop/endpoints/), [Current network status and parameters](/learn/current-network-status-and-parameters/), [IBC and interchain connectivity](/learn/ibc-and-interchain/), and [Run a Full Node](/full-node/overview/) for baseline infrastructure references.

## Payment integration layers

For payment gateway builders, split the system into these layers:

| Layer | Responsibility |
| --- | --- |
| Product API | Invoice creation, merchant config, refund workflow, and dashboard access. |
| Pricing | Asset quotes, expiry windows, conversion rates, fees, and spread assumptions. |
| Wallet | User payment flow, address handling, signing, and transaction broadcast. |
| Chain monitor | Transaction detection, confirmation, errors, and final settlement state. |
| Routing | Optional swap or liquidity routing when available. |
| Reconciliation | Match invoices, hashes, amounts, timestamps, and settlement assets. |
| Risk | Limits, velocity, suspicious behavior, jurisdiction blocks, and asset disable switches. |
| Reporting | Merchant exports, audit logs, accounting files, and diagnostics. |

The blockchain is one layer. The institution still owns the product.

## Custody and wallet architecture

Institutions should choose an explicit custody model:

| Model | Description |
| --- | --- |
| Non-custodial | User signs with their own wallet. Operator never controls user funds. |
| Custodial | Operator controls user balances and must handle custody, compliance, and internal accounting. |
| Merchant-directed | User pays directly to merchant-controlled addresses. |
| Hybrid | Operator coordinates flow but settlement goes to controlled merchant or treasury addresses. |

Each model changes legal obligations, support burden, security requirements, and user risk.

## Chain data requirements

At minimum, institutional systems usually need:

- latest block height
- node sync status
- account balances
- transaction broadcast status
- transaction inclusion and result
- fee estimation
- staking and delegation state if staking is supported
- governance proposals and votes if governance is shown
- oracle and market state if Swap Protocol is integrated
- collateral and vault state if Forex Protocol becomes live

Use live chain queries where possible rather than static assumptions.

## Observability requirements

Institutions should monitor:

- node sync height and peer health
- endpoint error rates
- transaction broadcast failures
- average confirmation time
- fee changes
- indexer lag
- wallet provider failures
- explorer mismatch
- chain upgrade announcements
- governance proposals affecting integrated modules
- oracle participation for swap or stable-asset products

Operational visibility is part of institutional trust.

## Diagnostics institutions should expose

Because Terra Classic is decentralized, debugging often crosses organizations. A good integration should produce a short diagnostics bundle that can be shared with developers, infrastructure providers, or community support.

Include:

- timestamp
- app version
- network
- node endpoint
- latest observed block height
- transaction hash
- account address where safe to share
- error code
- raw broadcast response
- indexed transaction result
- relevant module state
- browser or device details for wallet issues

This reduces support chaos and makes community help more effective.

## Security expectations

Institutions should not rely on community enthusiasm as a security model.

Required controls may include:

- key management policy
- hardware signing or custody provider
- role-based access
- withdrawal limits
- transaction simulation
- address allowlists
- audit logs
- dependency scanning
- incident response plan
- third-party security review for user-facing products

For protocol-level products, security review should happen before mainnet activation, not after users discover edge cases.

## Related pages

- [Payment gateway](/institutions/payment-gateway/)
- [Requirements and contact](/institutions/requirements-and-contact/)
- [Native swap rails](/institutions/native-swap-rails/)
- [Collateralized stable assets](/institutions/collateralized-stable-assets/)
- [Risk and due diligence](/institutions/risk-and-due-diligence/)
