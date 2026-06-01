---
title: "Staking Protocol Governance"
description: "How staked LUNC becomes governance power, how validator votes work, and how delegators can vote directly on Terra Classic proposals."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/governance.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Staking Protocol and governance are linked.

When you delegate LUNC, you are not only staking for rewards. You are assigning governance power to a validator by default.

## Default validator voting

Validators vote with the voting power delegated to them.

If a delegator does nothing, the validator's vote is applied to that delegator's stake. This is convenient, but it creates risk when validators are passive, misaligned, or unaccountable.

Delegators can override the validator's vote by voting directly before the proposal deadline.

## Vote options

Terra Classic governance supports standard vote options:

| Vote | Meaning |
| --- | --- |
| `Yes` | Support the proposal. |
| `No` | Reject the proposal without triggering veto-specific handling. |
| `NoWithVeto` | Strong rejection; can affect deposits if veto threshold rules are met. |
| `Abstain` | Participate in quorum without choosing yes or no. |

Use `NoWithVeto` carefully. It is a governance safety tool, not a general dislike button.

## Proposal lifecycle

Governance parameters are queryable here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/voting
```

As checked on 2026-06-01, the governance endpoint returned:

| Parameter | Value |
| --- | --- |
| `min_deposit` | `5000000000000uluna` |
| `max_deposit_period` | `1209600s` |
| `voting_period` | `604800s` |
| `quorum` | `0.4` |
| `threshold` | `0.5` |
| `veto_threshold` | `0.334` |
| `expedited_voting_period` | `86400s` |
| `expedited_threshold` | `0.667` |

Governance can change these values. Query current params before writing guides, calculators, or governance tooling.

## Why delegator voting matters

Terra Classic has a long-running governance-quality problem: many users do not vote directly, and many validators have historically skipped proposals.

This creates three issues:

- decisions are made by a smaller group than the full stakeholder base
- silent validators can carry delegated voting power without accountability
- governance legitimacy weakens when turnout is low

Delegator voting is one of the simplest ways to improve governance quality. Even if you keep your stake delegated, direct voting lets you express your own preference on proposals that matter.

## How to vote

Most wallet governance flows follow this pattern:

1. Open the governance view in a supported wallet or dashboard.
2. Select Terra Classic.
3. Open the proposal.
4. Read the full proposal text and discussion links.
5. Check whether the proposal is executable, text-only, parameter-changing, upgrade-related, or funding-related.
6. Choose `Yes`, `No`, `NoWithVeto`, or `Abstain`.
7. Confirm the transaction and fee.
8. Verify the vote on an explorer or governance dashboard.

Wallet guides:

- [Keplr governance](/learn/keplr/keplr-governance/)
- [Galaxy Station governance](/learn/galaxy-station/galaxy-station-governance/)

## How to judge a proposal

A serious proposal should make the following clear:

- what problem it solves
- what exact on-chain or off-chain action happens
- who is responsible for execution
- what budget is requested, if any
- what success metric will be used
- what risks and alternatives were considered
- whether code, audits, or technical review exist
- what happens if the proposal passes but execution fails

Weak proposals ask governance for trust without giving governance enough information to make a decision.

## Delegator override

If you vote directly, your vote overrides the validator's vote for your delegated stake on that proposal.

This makes validator choice less absolute, but it does not remove the need to choose serious validators. Validators still influence consensus, day-to-day governance defaults, upgrades, and public credibility.

## Developer note

Governance interfaces should show:

- validator vote and delegator override state
- proposal status and deadlines
- quorum, threshold, and veto progress
- deposit status
- proposal type
- executable messages where available
- external discussion links
- warnings for expedited or high-impact proposals

Good governance tooling reduces voter confusion and makes validator accountability visible.
