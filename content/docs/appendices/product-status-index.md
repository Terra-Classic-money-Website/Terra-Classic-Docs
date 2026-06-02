---
title: "Product status index"
description: "A compact index of live, proposed, governance-accepted, disabled, and historical Terra Classic product and protocol surfaces."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs source review"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "content/docs/appendices/product-status-index.md"
sourceDate: "2026-06-02"
tocDepth: 2
---
This index prevents status confusion.

Terra Classic has live L1 behavior, historical behavior, proposed products, governance-accepted product directions, and disabled legacy mechanisms. Mixing those categories damages trust and can expose users to bad decisions.

## Status index

| Product or capability | Current status | What that means | Verify through |
| --- | --- | --- | --- |
| LUNC transfers | Live | Native LUNC can be transferred on Terra Classic mainnet. | Wallet, explorer, PublicNode, transaction hash |
| USTC transfers | Live as legacy asset transfer | USTC can move on-chain, but it is not a guaranteed stable redemption product. | Wallet, explorer, market venues |
| Staking | Live | LUNC can be delegated to validators, with unbonding and validator-risk constraints. | Wallet, staking tools, staking params |
| Governance | Live | Eligible LUNC voting power can vote on proposals through supported interfaces. | Governance interfaces, PublicNode governance API |
| CosmWasm | Live | Smart contracts can exist and execute where current chain behavior and tooling support them. | Contract explorer, LCD/RPC, wallet signing |
| IBC | Live where routes are operational | IBC channels exist, but route health depends on channel state, relayers, liquidity, and destination-chain support. | PublicNode IBC endpoints, Map of Zones, packet tooling |
| Burn tax | Live but parameter-dependent | Tax behavior exists, but current rate and exemptions must be checked before precise accounting. | Treasury/tax endpoints, fees guide |
| Tax2Gas and tax behavior | Live as chain behavior where implemented | Apps should not hardcode tax assumptions; simulate and query current parameters. | Transaction behavior guide, LCD endpoints |
| Old market module behavior | Historical or disabled | Pre-2022 algorithmic market swap assumptions should not be treated as active product behavior. | Current vs proposed behavior, module specs |
| Swap Protocol or Market Module 2.0 | Proposed design unless production evidence is added | Docs explain the no-mint design, but ordinary-user availability must be verified separately. | Swap Protocol status page, releases, governance records |
| Forex Protocol or CSM | Governance-accepted product concept, not live | Proposal direction exists, but production implementation, collateral, audits, and UI are not live. | Forex status pages, governance records |
| EUTC | Proposed first Forex stable asset | EUTC is not currently a live mintable or redeemable Terra Classic stable asset. | Forex Protocol docs and governance records |
| Multi-currency suite | Proposed institutional direction | A product narrative and architecture direction, not proof of live multi-currency issuance. | Institutions docs, Forex status, governance records |

## Product wording rule

Use precise status language:

- say **live** only when ordinary users or builders can verify the behavior on current mainnet
- say **proposed** for source-defined products that are not deployed
- say **governance-accepted** when governance accepted direction or scope but production is not complete
- say **disabled** for old behavior that should not be used
- say **historical** for context that explains Terra Classic's past but not current product behavior

## Cross-check pages

- [What Terra Classic supports today](/learn/what-terra-classic-supports-today/)
- [Current network status and parameters](/learn/current-network-status-and-parameters/)
- [Swap Protocol governance and status](/swap-protocol/governance-and-status/)
- [Forex Protocol governance and status](/forex-protocol/governance-and-status/)
- [IBC and interchain connectivity](/learn/ibc-and-interchain/)

