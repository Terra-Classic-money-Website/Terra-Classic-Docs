---
title: "Source and review model"
description: "How Terra Classic Docs should handle draft status, reviewed status, source visibility, corrections, and external live-data resources."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs content audit"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "docs-content-remediation-2026-06-01"
sourcePath: "content/docs/appendices/source-and-review-model.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Terra Classic Docs uses source-aware markdown pages.

Because Terra Classic has a complex history, source discipline is part of the product. A page should not only be readable. It should make clear whether a claim is live, proposed, historical, or still under review.

## Page status

The current docs system supports two page statuses:

| Status | Meaning |
| --- | --- |
| Draft | The page exists and may be useful, but should not be treated as fully reviewed. |
| Reviewed | The page has been reviewed for the current docs scope and should have clearer source/status discipline. |

Reviewed does not mean the underlying protocol can never change. It means the page was checked for the claims it makes at the time it was reviewed.

## Product status

Editorial page status is different from product status.

A page can be well reviewed while describing a proposed product. A live feature can also have a draft page.

Use explicit wording for:

- live
- proposed
- governance-accepted
- in development
- disabled
- deprecated
- historical

## Source blocks

Trust-sensitive pages should include a visible source section.

Useful source references include:

- governance proposals or discussions
- code repositories or releases
- source documents supplied to the docs project
- related docs pages
- external explorers, wallets, or data tools where live values should be checked

The docs should not copy live-data products. If a reader needs current values, the docs should explain what to check and link to the relevant external resource.

## Corrections

If a docs page conflicts with live chain behavior, accepted governance implementation, or current source material, the docs should be corrected.

Good corrections should include:

- the affected page
- the claim that appears wrong
- the source that proves the issue
- suggested replacement wording, if available

## Priority

Review priority should be highest for pages that affect:

- user funds
- stablecoin or USTC claims
- swap availability
- governance status
- proposed versus live product boundaries
- validator or wallet actions
- institutional due diligence

Low-risk narrative pages can remain draft longer than pages that influence user actions or public trust.
