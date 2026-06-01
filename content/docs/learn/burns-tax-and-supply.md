---
title: "Burns, tax, and supply"
description: "A conceptual guide to Terra Classic burn, tax, and supply language without turning docs into a live data dashboard."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/learn/burns-tax-and-supply.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Burn, tax, and supply language is central to Terra Classic, but it is easy to overstate.

This page explains the concepts. It does not provide live supply, burn totals, tax totals, or price data. Use ecosystem trackers, explorers, and market tools for live values.

## Supply

Supply describes how many units of an asset exist under the chain's accounting rules.

For Terra Classic, supply discussion should be careful because old Terra mint/burn mechanics, post-collapse changes, voluntary burns, tax burns, and proposed products can be confused with each other.

The docs should not imply that every product idea directly or immediately reduces supply.

## Burns

A burn removes tokens from spendable circulation under the chain's accounting model.

Burns can come from different sources:

- voluntary burns by users, exchanges, or community entities
- tax-related burns where current chain rules apply
- protocol-designed burns in proposed products
- historical burns connected to old Terra mechanics

Those categories should not be mixed.

## Burn tax

Terra Classic has used tax mechanics as part of its post-collapse economic policy.

For user documentation, the important points are:

- some transaction types may be affected by tax rules
- tax behavior can change through governance
- users should review wallet transaction details before signing
- developers should not hardcode assumptions about tax behavior

For live parameters, use current chain queries or trusted ecosystem resources. The docs should explain the concept, not act as a live parameter dashboard.

## Oracle Pool and Community Pool

Terra Classic docs sometimes mention the Oracle Pool and Community Pool.

At a high level:

- Oracle Pool language relates to oracle incentives and oracle-related funding mechanics.
- Community Pool language relates to governance-controlled community funding.

Exact balances, routing, and parameter behavior should be verified through live chain tools or current governance records before being used in public claims.

## Proposed product burns

Some proposed products, including the Market Module 2.0 / Swap Protocol design, include burn mechanics.

That does not mean the product is live or that a specific burn outcome is guaranteed.

When reading proposed product pages, separate:

- the proposed mechanism
- the governance status
- implementation status
- production availability
- actual live burn data

## Source and verification

Last verified: 2026-06-01

For live values, use Terra Classic explorers, burn trackers, governance records, wallets, or direct chain queries.
