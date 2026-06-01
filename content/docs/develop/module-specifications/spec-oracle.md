---
title: "Spec Oracle"
description: "Exchange-rate voting, reward weighting, oracle slashing, and Swap Protocol price-feed responsibilities."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/spec-oracle.md"
sourceDate: "2026-05-27"
---
Terra Classic validators feed external exchange rates for downstream protocol logic, including [Swap Protocol](/swap-protocol/overview/). Market Module 2.0 uses oracle-reported market pricing so native LUNC and USTC swaps do not rely on a fixed USTC peg assumption.

This module enforces the familiar prevote/vote handshake with slashing to keep price data honest. For Swap Protocol, oracle reliability is also a product safety requirement: missing, stale, or low-quorum price data can disable swaps.

## Classic behaviour

- **Vote cadence.** `VotePeriod` is 30 seconds (5 blocks). Validators must broadcast aggregate prevotes in period _t_ and reveal votes in period _t+1_. Same-period vote+prevote combinations are rejected (`ErrRevealPeriodMissMatch`).
- **Aggregate flow.** Classic primarily uses `MsgAggregateExchangeRatePrevote` and `MsgAggregateExchangeRateVote`, bundling all whitelist denoms in a single message hashed as `sha256("salt:rates:validator")`.
- **Whitelist management.** Parameter `Whitelist` tracks allowed oracle denoms. Swap Protocol requires USTC market-price support rather than a fixed 1 USD assumption. Governance and chain upgrades can change the exact live whitelist, so operators should query current params before relying on a hardcoded list.
- **Reference Terra logic.** Weighted medians are computed relative to the high-turnout denom (`ReferenceTerra`) and converted into cross rates for the rest. Results land in the keeper via `k.SetLunaExchangeRate()`.
- **Reward funding.** Oracle reward pools receive their budget from `x/tax` splits. At each tally the module pays winners proportionally and decays the pool over `RewardDistributionWindow`.
- **Miss counters & slashing.** Validators must keep a valid vote rate above `MinValidPerWindow` (5%) over the week-long `SlashWindow`. Offenders lose `SlashFraction` (0.01%) of stake and are jailed until unjailed manually.

## Swap Protocol dependency

Market Module 2.0 depends on oracle pricing for safe LUNC and USTC swaps.

The Swap Protocol source design defines these safety expectations:

| Control | Behavior |
| --- | --- |
| Price vote period | 5 blocks, approximately 30 seconds. |
| Price calculation | Voting-power-weighted median for the current period. |
| Quorum auto-disable | If either required asset has price votes from less than 50% voting power for 25 blocks, the market module disables until quorum is restored. |
| TWAP sanity clamp | Each swap can fail if the current price differs by more than 10% from a 45-block oracle TWAP. |
| USTC treatment | USTC is valued at market price, not as a guaranteed 1 USD asset. |

See [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) and [Validator operations](/swap-protocol/validator-operations/) for the Swap Protocol-specific operating model.

## Messages

- **`MsgAggregateExchangeRatePrevote`** – commits the hash of all exchange rates for the next period (`hash = sha256("salt:rate1,rate2,...:validator")`). Multiple prevotes per period overwrite previous hashes.
- **`MsgAggregateExchangeRateVote`** – reveals the salt and comma-separated rate list. Each entry is formatted as `<amount><denom>` (e.g., `0.00012ukrw`).
- **`MsgDelegateFeedConsent`** – assigns a feeder account to a validator. CLI workflows (and the Classic E2E tests) confirm delegation before proceeding.

## State

| Store key | Description |
| --- | --- |
| `Prevotes` (`map[valoper][denom]AggregatePrevote`) | Current-period hashes waiting for reveal. |
| `Votes` (`map[valoper][denom]AggregateVote`) | Revealed votes kept until tally completes. |
| `LunaExchangeRate` (`map[denom]sdk.Dec`) | Latest accepted exchange rate per denom. |
| `FeederDelegations` (`map[valoper]acc`) | Delegated feeder accounts. |
| `MissCounters` (`map[valoper]int64`) | Missed-vote counters over the active slash window. |

## End-block workflow

1. Check if the block height is a multiple of `VotePeriod`.
2. Build ballots per denom from revealed votes, discarding abstentions or jailed validators.
3. Drop ballots lacking quorum (`VoteThreshold`, 50% voting power) or missing from `Whitelist`.
4. Select `ReferenceTerra`, compute cross rates, and derive weighted medians.
5. Update on-chain exchange rates, reward ballot winners, and increment miss counters.
6. When a `SlashWindow` ends, slash and jail validators whose valid-vote ratio fell below `MinValidPerWindow`.
7. Clear prevotes and votes for the next cycle while keeping the latest hash commitments.

## Parameters (`subspace`: `oracle`)

| Name | Description | Classic default |
| --- | --- | --- |
| `VotePeriod` | Blocks per voting cycle. | `5` |
| `VoteThreshold` | Minimum voting power required for a ballot. | `0.500000000000000000` |
| `RewardBand` | Allowed deviation around the weighted median. | `0.020000000000000000` |
| `RewardDistributionWindow` | Blocks used to pro-rate the reward pool. | `10512000` (`BlocksPerYear`) |
| `Whitelist` | Allowed oracle denoms and related metadata. Swap Protocol requires current USTC market-price support. | Query live chain state; governance may update. |
| `SlashFraction` | Stake slashed on oracle failure. | `0.000100000000000000` |
| `SlashWindow` | Block span for counting misses. | `604800` (`BlocksPerWeek`) |
| `MinValidPerWindow` | Required successful vote ratio. | `0.050000000000000000` |

Governance proposals targeting the `oracle` subspace can adjust any of these values.

## CLI shortcuts

- **Submit aggregate vote:** `terrad tx oracle aggregate-vote <rates> <validator> --from <feeder>`
- **Delegate feeder:** `terrad tx oracle delegate-feed-consent <validator> <feeder>`
- **Inspect params:** `terrad q oracle params`
- **Check current prices:** `terrad q oracle exchange-rates`

Ensure feeders fund their accounts with enough ULUNA for fees. Classic tooling typically relies on endpoints such as `https://terra-classic-lcd.publicnode.com` or `https://api-lunc-lcd.binodes.com` when scripting.

For Swap Protocol, feeder operators should also verify that USTC pricing is supported by their feeder binary and configured providers. If validators cannot maintain sufficient oracle participation, Swap Protocol should fail closed rather than execute swaps against unsafe price data.
