---
title: "Risk and due diligence"
description: "Institutional diligence checklist for Terra Classic decentralization, governance, security, liquidity, assets, and integration risk."
status: draft
reviewed: false
sourceTitle: "Terra Classic Four Years After: State of the Chain Report (2022-2026)"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/risk-and-due-diligence.md"
sourceDate: "2026-06-01"
tocDepth: 3
---
Institutional evaluation of Terra Classic should be honest.

The chain has meaningful strengths: it is still live, decentralized, community-governed, exchange-visible, technically maintained, and connected to a persistent global community. It also has serious institutional gaps around governance quality, security assurance, liquidity depth, operating ownership, and legal representation.

This page is a diligence checklist, not a rejection letter.

## Core diligence position

Terra Classic should be evaluated as:

> A live decentralized Layer 1 with durable community survival and proposed L1 product paths, but not a company-backed institutional platform with centralized contracts, guaranteed support, or mature institutional assurance.

That positioning is credible. Pretending otherwise is not.

## Decentralization risk

Terra Classic has no central legal body.

Implications:

- no official sales team
- no central account manager
- no entity that can sign on behalf of the chain
- no single authority that can guarantee governance outcomes
- no foundation balance sheet standing behind institutional integrations
- no unified support desk

This is normal for decentralized chains, but institutions must design around it.

Read [Requirements and contact](/institutions/requirements-and-contact/) before approaching the ecosystem.

## Governance risk

Terra Classic governance is live and powerful, but governance quality is uneven.

Risks include:

- validator-weighted decision making
- delegator passivity
- low-signal proposal volume
- proposal churn
- weak post-approval accountability
- missed validator votes
- funding requests without execution discipline
- text proposals that create expectations without implementation

Institutions should not treat a forum comment or informal validator conversation as governance approval.

For network-level changes, require:

- public proposal discussion
- clear implementation owner
- budget and milestone discipline
- measurable deliverables
- security and rollback plan
- final on-chain governance outcome where required

## Security assurance risk

Terra Classic is operationally live, but institutional-grade assurance requires more than uptime.

Institutions should ask:

- Has the relevant code path been audited after 2022?
- Is there a public bug bounty?
- Who maintains the module?
- What testnet coverage exists?
- What happens during failed upgrade or chain halt?
- Who monitors incidents?
- Where are known risks documented?
- Which dependencies are critical?
- Which validators or infrastructure providers are operationally important?

If an institution is integrating Swap Protocol, Forex Protocol, custody, payments, or new asset support, it should expect additional review.

## Liquidity risk

Terra Classic has market visibility, but institutional liquidity should be tested, not assumed.

Institutions should evaluate:

- centralized exchange liquidity
- on-chain DEX liquidity
- slippage at intended transaction size
- withdrawal and deposit availability
- market-maker participation
- volatility during stress
- stable-asset liquidity if Forex Protocol launches
- route capacity if Swap Protocol launches

Small proof-of-concept payments and institutional treasury flows have very different liquidity needs.

## Asset risk

LUNC, USTC, EUTC, and planned multi-currency assets have different risk profiles.

| Asset type | Main risk |
| --- | --- |
| LUNC | Volatile native crypto asset. |
| USTC | Legacy asset with depeg history and no guaranteed stable redemption. |
| EUTC | Proposed stable asset, not live today. |
| Future currency assets | Roadmap direction, not institution-ready assets today. |

Institutions should not treat roadmap assets as live collateralized stablecoins.

Read [Native assets](/institutions/native-assets/) and [Collateralized stable assets](/institutions/collateralized-stable-assets/).

## Legal and compliance risk

Terra Classic documentation does not provide legal advice.

Institutions should independently review:

- digital asset classification
- stablecoin regulation
- payment services regulation
- securities or commodities treatment
- custody obligations
- sanctions screening
- AML and transaction monitoring
- tax and accounting treatment
- user disclosures
- jurisdiction-specific restrictions

The fact that Terra Classic is decentralized does not remove obligations from companies that build products on top of it.

## Infrastructure risk

Institutions should avoid depending entirely on one endpoint, explorer, wallet, validator, or community maintainer.

Review:

- RPC and LCD redundancy
- indexer reliability
- full-node option
- validator concentration
- oracle participation
- relayer dependencies
- wallet support
- explorer availability
- upgrade monitoring
- incident communication path

For serious products, run or contract infrastructure instead of relying only on public endpoints.

## Due diligence checklist

Before serious institutional use, answer:

| Question | Required answer |
| --- | --- |
| What exactly are we using Terra Classic for? | Payment, custody, settlement, staking, data, liquidity, governance, or research. |
| Which assets are involved? | LUNC, USTC, proposed EUTC, or future assets. |
| Are those assets live? | Confirm mainnet status and wallet support. |
| Are we relying on stable value? | If yes, identify collateral, redemption, liquidity, and legal structure. |
| Do we need governance? | If yes, prepare public forum discussion and proposal materials. |
| Who can sign contracts? | Only specific legal entities, not Terra Classic as a network. |
| What infrastructure do we control? | Nodes, endpoints, indexers, monitoring, custody, backups. |
| What are our failure states? | Failed transaction, route disabled, oracle failure, liquidity exhaustion, wallet failure. |
| What disclosures are required? | Asset volatility, stablecoin limits, custody model, fees, and no official endorsement. |
| What support path exists? | Internal support first, then infrastructure providers, developers, validators, and public forum. |

If these answers are weak, the integration is not ready.

## What good institutional engagement looks like

Good engagement is:

- public where network-level legitimacy is needed
- specific about what is being built
- honest about what support is requested
- clear about who funds what
- explicit about legal responsibility
- measurable in milestones
- realistic about liquidity and security
- prepared for governance rejection or revision

Weak engagement is:

- vague partnership language
- private promises from people who cannot represent the chain
- claims of official approval without governance
- stablecoin marketing without collateral and redemption clarity
- payment promises without liquidity and compliance design
- use of Terra Classic's brand without public process

## Institutional conclusion

Terra Classic can be a serious institutional discussion only if its decentralization is explained honestly.

The opportunity is not "trust us." The opportunity is transparent public infrastructure, public governance, inspectable transactions, and protocol-level products that can become useful if implemented with professional discipline.
