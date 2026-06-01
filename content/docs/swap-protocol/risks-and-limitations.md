---
title: "Risks and limitations"
description: "The main risks, limitations, and expectation controls for Swap Protocol and Market Module 2.0."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/risks-and-limitations.md"
sourceDate: "2025-06-25"
tocDepth: 2
---
Swap Protocol should be explained with discipline because Terra Classic has already paid the cost of weak market-module assumptions.

The product is useful because it restores native LUNC and USTC swap utility without minting new supply. That does not make it risk-free.

## Not a repeg

Swap Protocol is not a USTC repeg proposal.

USTC is treated as a speculative market-priced asset. The module uses oracle-reported market pricing instead of assuming USTC is worth 1 USD.

Any content that implies Swap Protocol will restore a fixed USTC peg is wrong.

## Not unlimited liquidity

Swap Protocol uses finite pools.

If the requested output asset is exhausted, the swap should fail. This is a core safety property. It prevents the module from satisfying demand by minting new supply.

## One-sided flow risk

If most users swap in one direction, the burn outcome can become one-sided too.

For example:

- heavy USTC to LUNC flow can reduce LUNC remaining for epoch-end burn and increase USTC held by the pool
- heavy LUNC to USTC flow can reduce USTC remaining for epoch-end burn and increase LUNC held by the pool

This may disappoint users who expect every scenario to maximize burns of their preferred asset.

## Volume expectation risk

Swap Protocol only generates spread-fee burns and Oracle Pool funding when swaps happen.

If usage is low, fee generation will be low. Native availability is valuable, but it should not be marketed as if high volume is guaranteed.

The source material explicitly warns that community disappointment from unmet expectations is one of the main risks.

## Oracle dependency

Swap Protocol relies on validator oracle feeds.

If enough voting power fails to report valid prices, or if prices fail safety checks, the module can disable swaps. This protects the chain, but it means the product can be unavailable during stress.

Validators and feeder operators are therefore part of the product surface, not just back-end infrastructure.

## Implementation risk

Market Module 2.0 changes critical L1 behavior.

The source material identifies technical mistakes as a risk and recommends thorough review, stress testing, and audit consideration. The docs should not hide this. A no-mint design is safer than the historical mint/burn model, but implementation quality still matters.

## Parameter risk

Swap behavior depends on parameters and mechanisms such as liquidity allocation, base pool, recovery period, oracle thresholds, and spread fee rules.

If parameters are too loose, the product can expose more risk. If they are too tight, the product can feel unavailable or too small to matter.

The correct framing is not "set and forget." It is "bounded product design with governance-visible tradeoffs."

## Governance risk

Governance can change protocol behavior.

That is a strength when the chain needs to adapt, but it also means product expectations must track governance decisions. Users and integrators should not assume every parameter will stay fixed forever.

## User risk

Users still face normal market and wallet risks:

- price volatility
- slippage between quote and execution
- transaction failure
- wallet signing mistakes
- insufficient fee balance
- phishing or malicious interfaces
- misunderstanding USTC's market status

Swap Protocol is native infrastructure. It does not remove the need for transaction discipline.

## The honest product claim

The defensible claim is:

> Swap Protocol restores native LUNC and USTC swap utility through a bounded, oracle-aware, no-mint market module.

The indefensible claim is:

> Swap Protocol guarantees repeg, profit, unlimited swaps, or a specific burn outcome.

Keep that distinction clear.
