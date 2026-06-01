---
title: "Swap LUNC and USTC"
description: "How to think through the proposed LUNC and USTC Swap Protocol route before relying on it."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/swap-lunc-and-ustc.md"
sourceDate: "2025-06-25"
tocDepth: 2
---
Swap Protocol is designed to support native swaps between LUNC and USTC.

This page explains what to check before relying on the protocol design. It does not document a live wallet interface because production support and interface labels can change. Always review the transaction details shown by your wallet before signing any transaction.

Read [Governance and status](/swap-protocol/governance-and-status/) first. If a production route is not documented and verified, treat this as design guidance, not a live user guide.

## Supported route

The Swap Protocol design is scoped to:

- LUNC to USTC
- USTC to LUNC

Stable-to-stable routing is disabled in the Market Module 2.0 design. The protocol should not be treated as a general stablecoin swap router.

## Before you swap

Check four things before signing:

| Check | Why it matters |
| --- | --- |
| Pair | Confirm you are swapping LUNC and USTC in the intended direction. |
| Estimate | Review the expected output amount and the spread fee impact. |
| Availability | Swaps can be unavailable if the module is disabled, liquidity is exhausted, or oracle checks fail. |
| Asset risk | LUNC and USTC are volatile. USTC is market-priced, not treated as a guaranteed 1 USD asset. |

## Basic flow

If a supported production interface exists, the practical flow would be:

1. Connect or open a wallet that supports Terra Classic transactions.
2. Choose LUNC or USTC as the input asset.
3. Choose the other asset as the output asset.
4. Enter the amount you want to swap.
5. Review the estimated output, spread fee, and transaction details.
6. Sign and broadcast the transaction if the terms are acceptable.
7. Confirm the final on-chain result in your wallet or explorer.

The exact interface can differ by wallet or application. The intended protocol mechanics are the same: the module receives the input asset and releases the output asset from its available pool.

## Why a swap can fail

A refused swap is possible and should be expected under some conditions.

Common reasons include:

- the Market Module is disabled
- the relevant output pool has insufficient capacity
- the epoch allowance is exhausted
- oracle vote quorum is below the required threshold
- the current price fails the TWAP sanity check
- the attempted route is not supported
- the transaction fee or account balance is insufficient

When these conditions happen, the protocol should reject the swap instead of minting tokens to complete it.

## Pricing behavior

Swap Protocol uses oracle-aware pricing. USTC is valued at market price, not at a hard 1 USD peg.

Because oracle prices update on-chain by voting period, the quoted route can differ from centralized exchange prices or DEX pool prices during volatile markets. This can create arbitrage opportunities, but arbitrage is not guaranteed and should not be treated as risk-free.

## Fees

Under the source design, enabled swaps collect a 0.35% spread fee in the output asset.

That means:

- if you swap USTC to LUNC, the fee is collected in LUNC
- if you swap LUNC to USTC, the fee is collected in USTC

The chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for this route.

## Good user practice

Treat every swap as a market transaction.

Before signing:

- compare the quoted output with other available routes
- check whether the price has moved significantly
- understand that pool capacity is finite
- avoid assuming a swap will remain available after you wait
- keep enough LUNC for transaction fees
- never sign a transaction you do not understand

Swap Protocol is designed to restore native swap utility, but it does not remove market risk.

## Source and verification

Last verified: 2026-06-01

Verify Swap Protocol wallet availability through current wallets, releases, governance records, and explorers.
