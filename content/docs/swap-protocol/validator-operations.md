---
title: "Validator operations"
description: "Operational responsibilities for validators and oracle feeder operators supporting Swap Protocol."
status: draft
reviewed: false
sourceTitle: "Terra Classic Market-Module 2.0"
sourceSite: "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "swap-protocol-section-2026-06-01"
sourcePath: "content/docs/swap-protocol/validator-operations.md"
sourceDate: "2025-06-25"
tocDepth: 3
---
Validators are part of the Swap Protocol product surface.

Market Module 2.0 depends on current oracle prices. If validators do not operate reliable oracle feeders, swaps can be disabled or unsafe.

## Validator role

Validators support Swap Protocol by:

- running consensus infrastructure reliably
- submitting oracle prices on schedule
- maintaining feeder accounts and fee balances
- supporting USTC price reporting
- using diverse and reliable price sources
- monitoring missed votes and quorum
- responding quickly to feeder failures

This is not only an infrastructure task. It affects whether users can swap safely.

## USTC price support

The source design requires USTC to be added to the oracle vote set and priced by real market data.

That means validator operators need oracle feeder support for USTC pricing. The old fixed 1 USD assumption is not compatible with Swap Protocol.

Operators should verify:

- the feeder binary supports USTC pricing
- the feeder config includes the required denom
- price providers are reachable
- fallback providers are configured where supported
- prevote and vote messages are being submitted successfully
- missed-vote counters remain healthy

## Provider diversity

The source material calls out feeder provider expansion as important for manipulation resistance and reliability.

A weak provider setup creates protocol risk:

- stale prices
- missing prices
- correlated outages
- inaccurate medians
- quorum loss

Validators should avoid relying on a single fragile source when better provider diversity is available.

## Quorum monitoring

Market Module 2.0 can disable itself if either asset has price votes from less than 50% of voting power for 25 blocks.

Validators should monitor:

- current oracle participation
- their own feeder status
- missed prevotes and votes
- exchange-rate query results
- chain alerts around module disablement

If quorum drops, the correct priority is restoring accurate oracle participation, not bypassing safety controls.

## Feeder account hygiene

Oracle feeders need enough LUNC to pay transaction fees.

Operators should maintain:

- funded feeder accounts
- secure key handling
- clear restart procedures
- logs that show provider failures and broadcast failures
- alerting for missed oracle periods

Poor feeder operations can lead to missed oracle votes and, over time, slashing risk under oracle module rules.

## Rollout discipline

Swap Protocol should be treated as a coordinated validator rollout.

Before a chain upgrade or parameter activation, operators should confirm:

- feeder versions are compatible
- USTC price support is active
- provider configs are tested
- failover behavior is understood
- monitoring is in place
- validators know how to diagnose disabled swap states

The source material is explicit that invalid or absent price input should trigger automatic shutdown mechanisms. That is the right failure mode, but it makes operational readiness critical.

## User-facing responsibility

Validators who publicly support Swap Protocol should communicate responsibly.

Good communication:

- explains that USTC is market-priced
- avoids repeg promises
- explains that oracle failure can disable swaps
- distinguishes module safety from wallet or UI issues
- reports incidents clearly when feeders fail

Bad communication overpromises volume, burns, repeg, or guaranteed availability.

## Related references

- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/)
- [Oracle module spec](/develop/module-specifications/spec-oracle/)
- [Validator accountability](/governance/validator-accountability/)
