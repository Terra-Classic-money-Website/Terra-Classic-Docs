---
title: "Vote Options"
description: "What Yes, No, NoWithVeto, and Abstain mean in Terra Classic governance, and how users should think about each option."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Governance section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "governance-section-2026-06-01"
sourcePath: "content/docs/governance/vote-options.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Terra Classic governance supports four standard vote options.

The vote you choose should match your actual decision, not just your emotion toward the proposer.

## Vote meanings

| Vote | Meaning |
| --- | --- |
| `Yes` | You support the proposal passing. |
| `No` | You reject the proposal without using veto-specific rejection. |
| `NoWithVeto` | You strongly reject the proposal and want veto rules to apply if the threshold is reached. |
| `Abstain` | You participate in quorum without supporting or opposing the proposal. |

## Yes

Use `Yes` when the proposal is clear enough, useful enough, and safe enough to pass.

A good `Yes` vote should usually mean:

- the problem is real
- the proposed action is specific
- the requested budget is justified, if any
- the execution path is credible
- risks are disclosed
- follow-up can be verified

Do not vote `Yes` only because the idea sounds positive. Governance should approve executable plans, not just good intentions.

## No

Use `No` when you reject the proposal but do not think veto handling is appropriate.

Common reasons to vote `No` include:

- weak scope
- poor timing
- missing budget detail
- unclear ownership
- insufficient evidence
- better alternatives available
- proposal is directionally useful but not ready

`No` is a normal governance answer. It should not be treated as hostility.

## NoWithVeto

Use `NoWithVeto` carefully.

It is a governance safety tool, not a general dislike button.

`NoWithVeto` may be appropriate when a proposal is:

- spam
- malicious
- deceptive
- abusive toward minority interests
- unsafe for users
- attempting to misuse the community pool
- pushing high-risk protocol changes without serious review
- materially misrepresenting its status, scope, or authority

If the veto threshold is reached and chain rules apply, deposits can be burned. That makes `NoWithVeto` a stronger signal than `No`.

## Abstain

Use `Abstain` when you want your voting power to count toward quorum but you do not want to support or reject the proposal.

`Abstain` can be reasonable when:

- you have a conflict of interest
- the proposal is outside your competence
- the information is incomplete but you do not want to block quorum
- you want to signal process participation without a directional vote

Do not use `Abstain` as a permanent substitute for doing the work. A governance participant that always abstains is not giving delegators much representation.

## Did not vote

Not voting is different from `Abstain`.

If you do not vote directly, your validator's vote applies to your delegated stake by default. If your validator also does not vote, your stake does not participate in that proposal.

Repeated non-voting by validators or delegators weakens governance because decisions are made by a thinner active set.

## Practical rule

Use this simple decision rule:

| If you believe... | Vote |
| --- | --- |
| The proposal is useful, scoped, and credible. | `Yes` |
| The proposal should not pass, but is not abusive or dangerous. | `No` |
| The proposal is spam, malicious, deceptive, or materially unsafe. | `NoWithVeto` |
| You need to participate but cannot take a side responsibly. | `Abstain` |
