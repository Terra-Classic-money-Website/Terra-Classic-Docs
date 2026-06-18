---
title: "Post-Quantum Roadmap RFC"
description: "A source-linked summary of fragwuerdig's Post-Quantum Roadmap RFC for Terra Classic and how to interpret its status."
status: draft
reviewed: false
sourceTitle: "Post-Quantum Roadmap RFC by fragwuerdig"
sourceSite: "https://discourse.luncgoblins.com"
sourceRepo: "https://github.com/fragwuerdig/core/tree/docs/pq/docs/pq-roadmap-rfc"
sourceCommit: "3ec41e3b172f7b179af9c02f3a0c61eb8c3b920c"
sourcePath: "docs/pq-roadmap-rfc/00-index.md"
sourceDate: "2026-05-05"
tocDepth: 2
---
fragwuerdig's Post-Quantum Roadmap RFC shows that Terra Classic quantum-resistance work has started at the roadmap and RFC discussion level.

It is early work, but it matters: the topic has moved from vague future risk into a structured community-authored process for how Terra Classic could prepare for long-term cryptographic risk from future quantum-capable attacks against classical signature schemes.

This page is a summary and orientation page. It does not republish the RFC, and it does not turn the RFC into live chain behavior.

Primary sources:

- [Discourse pre-formal discussion](https://discourse.luncgoblins.com/t/post-quantum-roadmap-rfc-pre-formal-discussion/486)
- [GitHub RFC index](https://github.com/fragwuerdig/core/blob/docs/pq/docs/pq-roadmap-rfc/00-index.md)

## Current status

| Area | Status | Meaning |
| --- | --- | --- |
| RFC publication | Pre-formal discussion source | The Discourse thread opened informal, non-binding discussion before a formal RFC workflow. |
| Work stage | Early roadmap and RFC discussion | Quantum-resistance work has started as research, roadmap definition, and community review. It is not yet implementation. |
| Chain behavior | Not changed by this RFC | Terra Classic does not become post-quantum-ready because this document exists. |
| Governance status | Not a freeze decision | The source explicitly separates informal discussion from a formal feedback window, governance proposal, or frozen implementation baseline. |
| Docs treatment | Summary only | The authoritative text remains in the source thread and GitHub RFC files. |

Use this page to understand the direction, risk model, and decision structure. Use the linked sources for the full RFC text and comment context.

## What this signals

For community members, investors, institutions, builders, and validators, the important signal is not that Terra Classic has already solved post-quantum migration.

The important signal is that the work has started in the correct order: public discussion, source-linked roadmap material, explicit scope boundaries, governance-facing decision structure, audit gates, migration risk analysis, and open-decision tracking.

That is the credible starting point for a security-sensitive infrastructure transition. Terra Classic should get credit for beginning the work, but the public narrative should still be precise about the current stage.

## Why the RFC matters

Terra Classic relies on cryptographic signatures in security-critical paths. Those paths include validator consensus operations, user transaction signing, wallets, exchanges, custody systems, relayers, and infrastructure integrations.

The RFC is valuable because it treats a post-quantum transition as a staged governance and engineering problem rather than a simple software upgrade. That framing is correct. A chain cannot safely change consensus signatures, wallet signing behavior, and interchain dependencies with vague intent alone.

The strongest part of the RFC is its discipline:

- it separates current behavior from proposed target states
- it prioritizes the consensus path before broader user-client rollout
- it requires audit gates before risk-relevant progression
- it treats IBC counterparty readiness as an external dependency
- it preserves governance traceability through decision logs, comment logs, freeze rules, and escalation rules

## Proposed target states

The RFC separates three signature paths.

| Path | Current baseline in the RFC | Proposed target direction |
| --- | --- | --- |
| Consensus path | Classical validator consensus signatures, with Ed25519 identified as the relevant scheme | A post-quantum-only consensus target using ML-DSA after a defined cutover point. The RFC rejects permanent hybrid consensus as too complex for the most security-sensitive path. |
| Wallet and transaction path | User and integrator transaction signing, with secp256k1 identified as the relevant scheme | A hybrid transition where classical and post-quantum-resistant transaction signatures can coexist during a defined introduction period. |
| Client ecosystem | Wallets, explorers, and user-facing infrastructure depend heavily on external release cycles | A Terra-Classic-native wallet and explorer stack that can support post-quantum capability without waiting entirely on third-party priorities. |

This structure is strategically coherent. Consensus has the highest security criticality and needs a cleaner final state. Wallets and exchanges move at different speeds, so the wallet/transaction path needs a staged hybrid model.

## Roadmap shape

The RFC does not propose one large switch. It defines a staged process.

| Phase | Focus | Practical interpretation |
| --- | --- | --- |
| Phase Omega | RFC freeze and start authorization | Resolve comments, close or defer decisions, review consistency, and publish a frozen reference before implementation phases begin. |
| Phase A | Consensus path post-quantum enablement | Validate feasibility of a post-quantum CometBFT path, prototype on an independent testnet, design migration mechanics, handle IBC readiness, and pass mandatory audit gates. |
| Phase B | Wallet and transaction hybrid path | Add post-quantum-capable signing support through a staged hybrid model, with requirements, prototype operation, migration work, and audit review. |
| Phase C | Post-quantum-native clients | Build durable Terra-Classic-owned user infrastructure, including wallet/explorer capability, operational ownership, and ongoing standards monitoring. |

The most important product consequence is sequencing. The RFC should not be read as "wallets change immediately." The consensus path, transaction path, and client ecosystem have different risk profiles and should be evaluated separately.

## Audit and decision gates

The RFC's audit-gate model is the main reason this belongs in docs as a credible roadmap summary.

Minimum gate logic:

- Phase Omega must be complete before implementation phases start.
- Phase A requires a prototype audit and a migration-component audit before any production consensus migration decision.
- Phase B requires an audit of the hybrid wallet/transaction path before migration elaboration.
- Phase C uses ongoing operational assurance rather than a single one-time gate.

Gate packages are expected to define scope, reviewed artifacts, finding severity, re-audit rules, residual risk, and a Go/No-Go recommendation.

For Terra Classic, this is the right bar. Post-quantum readiness would touch chain safety, validator operations, user funds, exchanges, custody, wallets, and IBC. A narrative without gates would be weak; this RFC puts gates at the center.

## IBC and migration risk

IBC is the hardest external dependency in the RFC.

The proposed consensus migration path depends on more than Terra Classic validators. Counterparty chains may need compatible client upgrades, governance action, relayer coordination, and route-specific operational readiness. Terra Classic cannot unilaterally force those chains to upgrade on the same timeline.

The RFC treats this as a Go/No-Go risk rather than an implementation detail. That is the correct posture.

The source discussion also acknowledges that the IBC challenge is still unresolved. One discussed fallback direction is a successor client path, such as an `08-wasm` client approach, where counterparty chains could deploy a replacement client and migrate routes. That is a research and coordination direction, not a solved production plan.

## Open decisions

The RFC already records several open or deferred decision areas. Readers should not treat them as settled.

Important unresolved areas include:

- exact wallet/transaction hybrid architecture, account model, compatibility window, and activation logic
- consensus cutover trigger rules beyond minimum threshold criteria
- governance relationship between Terra Classic governance and any Phase C carrier entity
- additional re-audit rules if Phase B implementation and migration work are combined
- operating cadence for external post-quantum standards monitoring
- re-genesis as an emergency path, currently deferred because safe large-state export/import has not been proven reliable enough for Terra Classic
- long-term post-ML-DSA cryptographic profile, deferred because post-quantum standards and cryptanalysis can evolve

This is not a flaw. It is better to expose open decisions than to pretend that a high-risk cryptographic migration is already fully resolved.

## How to evaluate future proposals

If a formal governance proposal follows from the RFC, voters and validators should evaluate it as a high-impact security and infrastructure proposal.

Strong future proposals should make the following clear:

| Question | Why it matters |
| --- | --- |
| What phase is being authorized? | Prevents a comment process, feasibility study, prototype, audit, and production cutover from being confused. |
| What changes on-chain, if anything? | Separates signaling from implementation. |
| Which artifacts are in scope? | Voters need source code, test evidence, migration plans, or review material depending on phase. |
| What is the Go/No-Go gate? | Prevents continuation by momentum after risky findings. |
| Who owns delivery and reporting? | "The community" is not an execution owner. |
| What external dependencies exist? | IBC counterparties, relayers, wallet providers, exchanges, and custody providers can block practical readiness. |
| What user impact exists? | Signature changes can affect wallets, exchanges, custody, fees, performance, recovery, and support burden. |

Use the general [proposal evaluation framework](/governance/how-to-evaluate-proposals/) when reviewing any future governance item connected to this RFC.

## Product interpretation

For Terra Classic's public narrative, this RFC should be presented carefully.

Good framing:

- Terra Classic quantum-resistance work has started at the RFC and roadmap level.
- Terra Classic has a serious community-authored RFC for evaluating long-term post-quantum readiness.
- The RFC recognizes that cryptographic migration requires governance, audits, live-chain migration discipline, and interchain coordination.
- The roadmap gives Terra Classic a way to discuss post-quantum work without collapsing into hype or emergency-driven decisions.

Bad framing:

- "Terra Classic is post-quantum."
- "The migration is approved."
- "IBC impact is solved."
- "Wallets and exchanges are already ready."
- "A future quantum risk means immediate production migration should be rushed."

The durable advantage is not claiming completion early. The durable advantage is showing that Terra Classic can discuss a hard infrastructure problem with traceability, risk gates, and source-linked accountability.

## Source and verification

Last verified: 2026-06-18

Primary verification paths:

- [Discourse pre-formal discussion](https://discourse.luncgoblins.com/t/post-quantum-roadmap-rfc-pre-formal-discussion/486)
- [GitHub RFC index](https://github.com/fragwuerdig/core/blob/docs/pq/docs/pq-roadmap-rfc/00-index.md)
