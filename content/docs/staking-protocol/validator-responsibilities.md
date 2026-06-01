---
title: "Validator Responsibilities"
description: "What responsible Terra Classic validators should provide to delegators, developers, governance participants, and the wider network."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/validator-responsibilities.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Validators are not only reward recipients. They are infrastructure operators, security participants, governance actors, and public trust signals for Terra Classic.

Staking Protocol works only if validators take that role seriously.

## Minimum responsibility

A responsible validator should:

- maintain reliable block-signing infrastructure
- monitor uptime and jailed status
- keep validator keys secure
- prepare for software upgrades
- vote on governance proposals
- explain votes on important proposals
- communicate incidents
- keep commission behavior transparent
- avoid misleading delegators
- maintain a useful validator profile

This is the baseline, not an exceptional contribution.

## Infrastructure

Validators should operate with production discipline:

- hardened servers
- monitoring and alerting
- secure key management
- backup and recovery procedures
- sentry or network-protection architecture where appropriate
- tested upgrade procedures
- clear operational ownership
- incident response channels

Validators that treat node operation as passive income create risk for their delegators and for the network.

## Governance participation

Validators should vote consistently.

They should also explain important votes, especially when proposals affect:

- L1 upgrades
- tax and fee parameters
- community pool spending
- validator economics
- oracle behavior
- market or swap modules
- security-critical changes
- ecosystem funding

Non-voting is still a governance action. A validator that repeatedly skips proposals is effectively asking delegators to provide voting power without representation.

## Commission discipline

Commission should be understandable and sustainable.

A validator should disclose:

- current commission
- maximum commission
- maximum daily change rate
- why the rate is appropriate
- whether delegators should expect changes

Bait-rate behavior damages trust. Sustainable commission is acceptable when paired with reliable operation and real contribution.

## Delegator communication

Validators should provide delegators with:

- official website or profile link
- contact channel
- incident updates
- upgrade readiness notices
- governance vote rationale
- known risks
- service changes

Silence is costly. Delegators cannot evaluate risk if validators do not communicate.

## Security and conflicts

Validators should disclose material conflicts where relevant.

Examples include:

- operating major infrastructure on multiple competing chains
- running services that may benefit from specific governance outcomes
- receiving funding from projects affected by proposals
- operating validator and application businesses with overlapping incentives

Conflicts are not automatically disqualifying. Hidden conflicts are the problem.

## Support for developers

Validators can strengthen Terra Classic by supporting builders.

Useful validator contributions include:

- public RPC, LCD, gRPC, or archival infrastructure
- reliable endpoint status pages
- testnet support
- upgrade coordination
- technical documentation
- open-source tooling
- analytics and observability
- developer support during incidents

If public endpoints are provided, validators should document limits and reliability expectations.

## Becoming or running a validator

For node and validator operation, use the full-node guides:

- [Full node overview](/full-node/overview/)
- [Set up production](/full-node/run-a-full-terra-node/set-up-production/)
- [Validate on columbus-5](/full-node/run-a-full-terra-node/validator-columbus-5/)
- [Sync](/full-node/run-a-full-terra-node/sync/)
- [Reset and troubleshooting](/full-node/run-a-full-terra-node/troubleshoot/)

Staking Protocol docs explain the product and participation layer. The full-node section explains the operational path.

## Validator accountability

Delegators should expect validators to earn trust continuously.

Good validators make Terra Classic easier to trust. Poor validators make the chain look fragile even when the protocol keeps running. Delegation is the mechanism that lets the community reward the first group and remove power from the second.
