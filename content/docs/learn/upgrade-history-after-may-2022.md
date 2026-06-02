---
title: "Upgrade history after May 2022"
description: "A source-aware Terra Classic upgrade history that separates verified software upgrades from related funding, signaling, and release records."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic governance API and Terra Classic Core releases"
sourceSite: "https://terra-classic-lcd.publicnode.com"
sourceRepo: "https://github.com/classic-terra/core/releases"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "content/docs/learn/upgrade-history-after-may-2022.md"
sourceDate: "2026-06-02"
tocDepth: 2
---
This page tracks Terra Classic upgrade history after the May 2022 Terra collapse and continuation of the original chain as Terra Classic.

It is upgrade history, not full chain history. For broader context, read [History after the collapse](/learn/history-after-the-collapse/).

## Source discipline

Upgrade history is not perfectly clean because older community records, governance interfaces, proposal formats, and release records do not all expose the same data in one place.

This page uses confidence levels:

| Confidence | Meaning |
| --- | --- |
| On-chain verified | A passed governance proposal is available through the current PublicNode governance API. |
| Release verified | A Terra Classic Core release exists in the public GitHub releases record. |
| External governance view | A governance dashboard such as Validator.info exposes the proposal in a user-readable interface. |
| Needs reconciliation | The event is relevant, but proposal linkage, upgrade height, or production activation still needs additional historical source work. |

Do not treat this page as a final release engineering register. Treat it as the current source-aware docs baseline.

## Verified upgrade-related governance records

These passed proposals were extracted from the current Terra Classic PublicNode governance API and cross-checked against the Validator.info upgrade search view where available.

| Proposal | Voting end | Record type | Version or scope | Status | Confidence |
| --- | --- | --- | --- | --- | --- |
| `12221` | 2026-05-05 | Software upgrade | v4.0.1 | Passed | On-chain verified |
| `12220` | 2026-04-28 | Community pool spend | Cosmos SDK v0.53 with IBC v2 support, Phase 2 | Passed | On-chain verified |
| `12218` | 2026-04-15 | Software upgrade | v4.0.0, Cosmos SDK v0.53.x | Passed | On-chain verified |
| `12213` | 2026-01-29 | Community pool spend | Cosmos SDK v0.53 with IBC v2 support, Phase 1 | Passed | On-chain verified |
| `12208` | 2025-12-15 | Software upgrade | v3.6.1 | Passed | On-chain verified |
| `12196` | 2025-10-11 | Software upgrade | v3.6.0 | Passed | On-chain verified |
| `12194` | 2025-09-29 | Signaling or direction | Direct upgrade path to Cosmos SDK v0.53.x with IBC v2 | Passed | On-chain verified, message payload absent in current API |
| `12189` | 2025-08-03 | Software upgrade | v3.5.0 | Passed | On-chain verified |
| `12170` | 2025-04-03 | Software upgrade | v3.4.3 | Passed | On-chain verified |
| `12164` | 2025-03-16 | Community pool spend | Additional v3.4.0 upgrade work | Passed | On-chain verified |
| `12157` | 2025-02-21 | Software upgrade | v3.4.0 | Passed | On-chain verified |
| `12148` | 2024-12-10 | Software upgrade | v3.3.0 | Passed | On-chain verified |
| `12139` | 2024-10-03 | Software upgrade | v3.1.6 | Passed | On-chain verified |
| `12131` | 2024-09-16 | Software upgrade | v3.1.5 | Passed | On-chain verified |
| `12118` | 2024-07-27 | Software upgrade | v3.1.3 | Passed | On-chain verified |

## Release records that help fill the older timeline

Terra Classic Core GitHub releases provide a useful software-release baseline, especially for the period where the current governance API does not expose a complete upgrade-proposal sequence.

| Release | Published | Notes | Confidence |
| --- | --- | --- | --- |
| v4.0.1 | 2026-04-27 | Current node-reported version in PublicNode `node_info` | Release verified and node verified |
| v4.0.0 | 2026-03-29 | Cosmos SDK v0.53 generation release path | Release verified |
| v3.6.1 | 2025-12-07 | Later v3.6 line | Release verified |
| v3.6.0 | 2025-10-03 | v3.6 line | Release verified |
| v3.5.0 | 2025-07-24 | v3.5 line | Release verified |
| v3.4.3 | 2025-03-27 | v3.4 patch line | Release verified |
| v3.4.0 | 2025-02-10 | v3.4 line | Release verified |
| v3.3.0 | 2024-12-03 | v3.3 line | Release verified |
| v3.1.6 | 2024-09-26 | v3.1 patch line | Release verified |
| v3.1.5 | 2024-09-05 | v3.1 patch line | Release verified |
| v3.1.3 | 2024-07-20 | v3.1 patch line | Release verified |
| v2.6.0-rc.1 | 2024-05-13 | Release candidate before the on-chain records above become cleaner | Release verified, upgrade linkage needs reconciliation |
| v2.4.2 | 2024-03-07 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v2.3.3 | 2024-01-18 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v2.3.0 | 2023-11-09 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v2.2.1 | 2023-09-05 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v2.1.1 | 2023-06-10 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v2.0.1 | 2023-05-09 | Earlier v2 line | Release verified, upgrade linkage needs reconciliation |
| v1.1.0 | 2023-02-27 | Earlier v1 line | Release verified, upgrade linkage needs reconciliation |
| v1.0.5 | 2023-01-18 | Earlier v1 line | Release verified, upgrade linkage needs reconciliation |

## Known gap

The May 2022 to mid-2024 upgrade record still needs historical reconciliation. The correct next step is to map older software releases to the exact passed governance proposals, upgrade heights, release notes, and validator execution records.

Until that work is complete, do not use the older release list as proof that every release was activated on mainnet through a matching governance upgrade.

## Verification links

- [PublicNode governance API](https://terra-classic-lcd.publicnode.com/cosmos/gov/v1/proposals?proposal_status=PROPOSAL_STATUS_PASSED)
- [Validator.info upgrade search](https://validator.info/terra-classic/governance/passed?searchString=upgrade)
- [Terra Classic Core releases](https://github.com/classic-terra/core/releases)
- [Current network status and parameters](/learn/current-network-status-and-parameters/)

