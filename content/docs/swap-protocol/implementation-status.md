---
title: "Swap Protocol implementation status"
description: "A checklist for distinguishing the Market Module 2.0 source design from deployed Swap Protocol availability."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/swap-protocol/implementation-status.md"
sourceDate: "2025-06-25"
tocDepth: 2
---
Swap Protocol implementation status should be judged by evidence, not by product naming.

## Status checklist

Before Swap Protocol is described as live, the docs should confirm:

| Item | Required evidence |
| --- | --- |
| Core implementation | Terra Classic core release or code implementing the Market Module 2.0 behavior. |
| Mainnet activation | Governance, release, or upgrade evidence showing the behavior is active on mainnet. |
| Route support | Confirmation that LUNC to USTC and USTC to LUNC routes are supported as documented. |
| User access | Wallet, app, CLI, or integration path that ordinary users or builders can use. |
| Safety behavior | Documented disabled states, oracle checks, pool-capacity behavior, and unsupported-route handling. |
| External verification | Explorer, release, governance, or ecosystem source where readers can confirm status. |

If any required evidence is missing, use source-design or proposed-product language.

## Documentation state

The current documentation explains the Market Module 2.0 design. Production user availability should not be claimed without the evidence listed above.

## Source and verification

Last verified: 2026-06-01

Primary source:

- [Terra Classic Market-Module 2.0](https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38)

Verify production status through current Terra Classic releases, governance records, wallet interfaces, and explorers.
