---
title: "Forex Protocol launch readiness"
description: "The documentation, implementation, risk, and verification evidence needed before Forex Protocol can be presented as live."
status: reviewed
reviewed: true
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/forex-protocol/launch-readiness.md"
sourceDate: "2025-12-07"
tocDepth: 2
---
Stable-asset products need a higher launch bar than ordinary documentation pages.

Forex Protocol should not be presented as live until implementation, collateral, oracle, redemption, and risk evidence exist.

## Minimum readiness areas

| Area | Required before live language |
| --- | --- |
| Product scope | MVP assets, collateral, fees, caps, and launch boundaries are final. |
| Implementation | CSM implementation is complete enough for review. |
| Oracle safety | Price sources, failover, stale-price behavior, and emergency states are documented. |
| Collateral accounting | Collateral assets, accounting rules, and reserve logic are documented. |
| Mint and redemption UX | User flows, fees, limits, failure states, and settlement expectations are documented. |
| Governance controls | Parameters, pause controls, and upgrade paths are clear. |
| Security review | Audit, review, or explicit governance risk acceptance is documented. |
| Public docs | User docs, developer docs, risk docs, and source blocks are ready. |

## Documentation rule

Before launch, docs may explain:

- proposed design
- governance acceptance
- intended mechanics
- risks and open questions
- implementation requirements

After launch, docs must explain:

- exact live behavior
- user flows
- integration paths
- parameters
- failure states
- source and verification paths

## Source and verification

Last verified: 2026-06-01

Primary source:

- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)
