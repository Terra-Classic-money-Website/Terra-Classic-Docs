---
title: "How To Vote"
description: "A practical voting workflow for Terra Classic users who want to review proposals, cast votes, and verify the result."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Governance section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "governance-section-2026-06-01"
sourcePath: "content/docs/governance/how-to-vote.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Voting is a wallet transaction.

You need a wallet that supports Terra Classic governance, available LUNC for transaction fees, and staked LUNC for voting power.

## Before you vote

Before voting, check:

- proposal title
- full proposal text
- proposal type
- voting deadline
- current tally
- discussion links
- requested budget, if any
- proposer identity or responsible team
- whether the proposal executes on-chain or needs off-chain follow-up
- whether your validator has already voted

Do not vote from screenshots alone. Open the proposal and read the source material.

## Voting workflow

Most wallet governance flows follow this pattern:

1. Open the governance view in a supported wallet or dashboard.
2. Select Terra Classic.
3. Open the proposal.
4. Read the full proposal text and discussion links.
5. Check whether the proposal is executable, text-only, parameter-changing, upgrade-related, or funding-related.
6. Choose `Yes`, `No`, `NoWithVeto`, or `Abstain`.
7. Confirm the transaction and fee.
8. Verify your vote on an explorer or governance dashboard.

## Wallet guides

Use wallet-specific pages for interface details:

- [Galaxy Station governance](/learn/galaxy-station/galaxy-station-governance/)
- [Keplr governance](/learn/keplr/keplr-governance/)

Wallet interfaces can change. If a screenshot or menu label is outdated, rely on the concept: open Governance, select the proposal, choose a vote option, confirm the transaction, then verify the vote.

## Vote before the deadline

You can only vote while the proposal is in voting period.

If you wait until the final moments, you risk missing the deadline because of wallet issues, network delay, user error, or insufficient transaction fees.

## Check your validator's vote

If you delegate LUNC, your validator may already have voted.

You can still vote directly before the deadline. Your direct vote overrides the validator's vote for your delegated stake on that proposal.

If your validator repeatedly votes against your preferences or does not vote, consider whether that validator still deserves your delegation.

## Verify after voting

After confirming the transaction, verify that the vote appears correctly.

Check:

- proposal ID
- wallet address
- selected vote option
- transaction success
- vote timestamp or block height

If the transaction failed, your vote was not counted.

## Safety reminders

Never enter your seed phrase into a governance website.

Be careful with links shared in social media, Telegram, Discord, or comments. Use known wallet apps and official project links where possible.

Governance pages should not ask you for private keys. A legitimate vote requires a signed wallet transaction, not seed phrase disclosure.
