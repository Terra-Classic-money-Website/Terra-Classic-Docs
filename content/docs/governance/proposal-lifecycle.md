---
title: "Proposal Lifecycle"
description: "How Terra Classic proposals move through deposit, voting, tallying, and execution, and which governance parameters users should understand."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Governance section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "governance-section-2026-06-01"
sourcePath: "content/docs/governance/proposal-lifecycle.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
A proposal is not just a forum post. It is an on-chain governance item with a lifecycle.

Most Terra Classic governance items move through deposit, voting, tallying, and then either execution or follow-up.

## Deposit period

A proposal must reach the required deposit before it enters voting.

The deposit exists to reduce spam and require some commitment from the proposer or supporters. Other users can usually contribute to the deposit while the proposal is in deposit period.

If the proposal does not reach the minimum deposit before the maximum deposit period ends, it does not enter voting.

## Voting period

After the required deposit is reached, the proposal enters voting period.

During voting period, staked LUNC can be used to vote. Validators vote by default with delegated voting power, unless delegators vote directly and override the validator vote for their own stake.

The proposal result depends on quorum, threshold, veto threshold, and the final tally.

## Quorum, threshold, and veto

Three terms matter most:

| Term | Meaning |
| --- | --- |
| Quorum | The minimum share of voting power that must participate for the vote to be valid. |
| Threshold | The support level needed for a proposal to pass if quorum is reached and veto does not block it. |
| Veto threshold | The `NoWithVeto` level that can reject a proposal and burn deposits where chain rules apply. |

`Yes`, `No`, `NoWithVeto`, and `Abstain` all count toward quorum. `Abstain` counts as participation, but it is not support for `Yes` or `No`.

## Current parameter check

Governance parameters can change. Query current values before writing guides, calculators, dashboards, or governance tooling.

Terra Classic governance params are queryable here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/voting
https://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/deposit
https://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/tallying
```

As checked on 2026-06-01, the LCD endpoint returned:

| Parameter | Value |
| --- | --- |
| `min_deposit` | `5000000000000uluna` |
| `max_deposit_period` | `1209600s` |
| `voting_period` | `604800s` |
| `quorum` | `0.400000000000000000` |
| `threshold` | `0.500000000000000000` |
| `veto_threshold` | `0.334000000000000000` |
| `expedited_voting_period` | `86400s` |
| `expedited_threshold` | `0.667000000000000000` |
| `burn_vote_veto` | `true` |

The same endpoint also returned an `expedited_min_deposit` denom of `stake`. Treat endpoint output as chain state to inspect, not as a user-facing assumption. Interfaces should display the exact current values they query.

## Passed does not always mean delivered

Some proposals execute on-chain when they pass.

Other proposals are text, signaling, funding, coordination, or roadmap proposals. These can pass without automatically delivering the work described in the proposal.

For that reason, users should separate:

- vote result
- on-chain execution
- off-chain follow-through
- public proof that delivery happened

A serious governance culture tracks all four.

## Execution gap

The execution gap is the distance between "the proposal passed" and "the promised result exists."

This gap is especially important for:

- software upgrade proposals
- community pool spending
- product implementation proposals
- stablecoin or market module proposals
- infrastructure and documentation proposals
- proposals that rely on a named team or multisig

If a proposal depends on human execution, voters should ask who owns delivery, what proof will be published, and what happens if delivery fails.
