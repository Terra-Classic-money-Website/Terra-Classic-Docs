---
title: "LUNC and USTC"
description: "How to understand Terra Classic's native asset LUNC and legacy asset USTC without confusing them with proposed products or old peg assumptions."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic Docs"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "source-review-2026-06-01"
sourcePath: "content/docs/learn/lunc-and-ustc.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Terra Classic has two historically important assets: LUNC and USTC.

They should be explained by current behavior, not by old Terra assumptions or market narratives.

## LUNC

LUNC is Terra Classic's native staking, governance, and gas asset.

It is used for:

- paying transaction fees
- staking and delegation
- validator consensus power
- governance voting power when staked
- transfers between wallets
- smart contract and application interactions

LUNC is not a stable asset. It is a volatile crypto asset.

## USTC

USTC is a live Terra Classic legacy asset. It can exist on-chain and be transferred, but it should not be described as a guaranteed 1 USD stablecoin.

After the 2022 collapse, USTC became a market-priced legacy asset. Any documentation that mentions USTC should avoid implying:

- guaranteed 1 USD value
- guaranteed redemption
- risk-free settlement
- automatic repeg
- stablecoin quality for institutions

USTC may appear in proposed product designs such as Swap Protocol or future collateralized stable-asset discussions, but those proposals do not turn USTC back into a guaranteed stablecoin by themselves.

## Relationship to proposed products

LUNC and USTC are live assets. Proposed product routes using them are separate.

For example:

- A wallet transfer of LUNC or USTC is different from a proposed native swap route.
- USTC as a transferable legacy asset is different from a new collateralized stable asset.
- A product design using USTC does not guarantee product deployment.

The docs should keep those distinctions visible.

## Reader rule

When evaluating any Terra Classic page, ask:

| Question | Why it matters |
| --- | --- |
| Is this about an asset that exists on-chain? | Asset existence is not the same as product availability. |
| Is this about a live user action? | A proposed product may not be usable. |
| Is this about historical Terra behavior? | Old Terra mechanics may no longer apply. |
| Is this about a future product design? | Design language should not be treated as a production promise. |

## Source and verification

Last verified: 2026-06-01

Use explorers, wallets, and current ecosystem tools for live balances, transfers, prices, and liquidity.
