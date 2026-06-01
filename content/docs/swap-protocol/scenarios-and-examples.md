---
title: "Scenarios and examples"
description: "Illustrative examples of how Swap Protocol behaves under balanced usage, one-sided flow, and oracle stress."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/scenarios-and-examples.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
This page translates the Market Module 2.0 source examples into product behavior.

These are illustrations, not forecasts. Actual outcomes depend on tax proceeds, swap demand, market prices, oracle performance, governance parameters, and user behavior.

## Balanced usage

If users swap in both directions at roughly balanced value, the pools can end the epoch with a composition close to their starting allocation.

Product impact:

- native swap utility exists during the epoch
- spread fees are generated when swaps happen
- fees route 50% to burn and 50% to the Oracle Pool
- remaining pool balances are burned at the next epoch
- burn composition can remain broadly similar to the allocation model

This is the cleanest case for the product narrative, but it should not be assumed.

## Heavy USTC to LUNC flow

If users mostly swap USTC to LUNC, the LUNC pool is paid out and the module receives USTC.

Product impact:

- LUNC output capacity can be exhausted
- USTC can accumulate in the pool
- epoch-end burns can lean more toward USTC
- LUNC burned at epoch end can be lower than under balanced usage

This does not create LUNC hyperinflation because the module does not mint new LUNC. It can, however, disappoint users who expected the mechanism to maximize LUNC burns in every scenario.

## Heavy LUNC to USTC flow

If users mostly swap LUNC to USTC, the USTC pool is paid out and the module receives LUNC.

Product impact:

- USTC output capacity can be exhausted
- LUNC can accumulate in the pool
- epoch-end burns can lean more toward LUNC
- USTC burned at epoch end can be lower than under balanced usage

The direction of user demand matters. Swap Protocol does not force a predetermined burn mix.

## Low usage

If swap usage is low, more of the original pool balances remain until the next epoch boundary.

Product impact:

- fewer spread fees are generated
- Oracle Pool funding from swap fees is lower
- more unused pool balance can remain for epoch-end burn
- product utility may be perceived as weaker if users expected high volume

Low usage is not a protocol failure, but it is a product and expectations risk.

## Oracle stress

The source design includes an oracle-stress scenario where market volatility and validator outages reduce usable price quorum.

Product impact:

- if price votes fall below the required voting-power threshold, the module disables itself
- swaps stop while the module is disabled
- no spread fees are collected while swaps are inactive
- pool balances remain subject to epoch rules

This behavior is intentional. If pricing is unsafe, Swap Protocol should stop.

## Pool exhaustion example

Assume USTC is priced at 200 LUNC per USTC and the LUNC pool has 400 million LUNC available for the period.

If users swap enough USTC to request the full 400 million LUNC, the LUNC side can be depleted. Further USTC to LUNC swaps should be refused until opposite-direction swaps replenish LUNC or a new epoch begins.

If later users swap LUNC to USTC, the LUNC they send into the module can increase LUNC availability again.

The important point: pool balances are dynamic during the epoch, but output cannot exceed available capacity.

## What examples should not imply

Do not use these scenarios to imply:

- guaranteed volume
- guaranteed arbitrage profit
- guaranteed LUNC burn increase
- guaranteed USTC burn increase
- guaranteed swap availability
- a target USTC price

The examples exist to show behavioral boundaries. The product remains market-dependent.
