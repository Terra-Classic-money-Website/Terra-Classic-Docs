---
title: "Choose A Validator"
description: "A practical validator-selection framework for Terra Classic delegators who want rewards, accountability, and better network decentralization."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/choose-a-validator.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Validator choice is the most important decision a delegator makes in Staking Protocol.

You are not only choosing an APR. You are choosing who receives your voting power, whose infrastructure risk you accept, and who represents your stake by default in governance.

For the governance-specific side of this decision, also read [Voting power and delegation](/governance/voting-power-and-delegation/) and [Validator accountability](/governance/validator-accountability/).

## The short version

A strong validator should be:

- reliably signing blocks
- not jailed
- transparent about identity and operations
- active in governance
- reasonable and clear about commission
- responsive during upgrades and incidents
- contributing to Terra Classic's long-term health
- not making the validator set more concentrated than necessary

## Commission

Commission is the percentage of delegator rewards kept by the validator.

Terra Classic currently enforces a minimum commission rate through staking params. Query current params here:

```text
https://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params
```

As checked on 2026-06-01, `min_commission_rate` returned `0.025`, or 2.5%.

Very low commission is not automatically better. Validators need sustainable economics to maintain infrastructure, security practices, upgrade readiness, monitoring, and communication. Very high commission is not automatically bad either, but the validator should justify it through real contribution and reliability.

## Uptime and jailed status

A validator that misses too many blocks can be jailed and can create downtime slashing risk.

Before delegating, check:

- whether the validator is bonded and active
- whether it is jailed
- recent missed block behavior
- whether it has a pattern of upgrade failures
- whether it communicates incidents clearly

Validators should not be rewarded for being technically absent.

## Governance behavior

Delegating gives a validator default governance influence unless you vote yourself.

Review whether the validator:

- votes regularly
- explains votes on major proposals
- avoids silent non-participation
- uses `NoWithVeto` responsibly
- engages with technical and economic tradeoffs
- follows through on commitments made in proposals

Terra Classic has historically suffered from weak governance participation and validator non-participation. Delegators can improve this by moving stake away from validators that collect rewards while ignoring governance.

## Voting power concentration

Do not blindly delegate to the largest validators.

Concentrated voting power weakens decentralization. It can make halt, censorship, governance capture, or coordination failures easier. Terra Classic's own state-of-chain research has repeatedly identified validator concentration and low Nakamoto coefficient as strategic risks.

A practical rule:

- Avoid adding stake to validators already holding very large voting power unless there is a strong reason.
- Consider credible mid-size and smaller validators with strong reliability and governance records.
- Split large delegations across multiple responsible validators.

## Self-delegation

Self-delegation shows that a validator has some of its own capital at stake.

Do not treat self-delegation as a perfect trust signal. A validator can have low self-delegation and still operate well, or high self-delegation and still behave poorly. But self-delegation is one input into incentive alignment.

## Public identity and communication

A validator should make it easy to understand:

- who operates it or what organization is responsible
- where to find official communication
- how to contact the operator
- what infrastructure or community contribution it provides
- how it handles incidents
- why delegators should trust it with voting power

Anonymous or low-information validators are not automatically malicious, but they require a higher risk discount.

## Contribution

A validator can contribute by:

- running reliable validator infrastructure
- providing public endpoints
- building tools and dashboards
- participating in governance research
- helping during upgrades
- maintaining documentation
- supporting developers
- funding public goods
- communicating risks clearly

Contribution should be concrete. Marketing claims without visible delivery are weak evidence.

## Red flags

Be careful with validators that:

- are jailed or repeatedly unreliable
- skip most governance votes
- have no useful website or communication channel
- change commission unexpectedly
- promise guaranteed returns
- push delegators into unsafe wallet behavior
- concentrate too much voting power
- operate with obvious conflicts of interest and no disclosure
- make large public claims without measurable delivery

## Validator selection scorecard

| Criterion | Good signal | Weak signal |
| --- | --- | --- |
| Uptime | Active, reliable, monitored. | Jailed, repeated misses, silent incidents. |
| Governance | Regular voting with explanations. | Frequent non-voting or no rationale. |
| Commission | Sustainable and transparent. | Bait-rate behavior or unexplained changes. |
| Concentration | Helps distribute stake. | Adds power to already dominant validators. |
| Communication | Clear public channels. | No website, no contact, no incident updates. |
| Contribution | Visible work for Terra Classic. | Slogans without delivery. |
| Security | Sensible key and infra posture. | No evidence of operational maturity. |

## Delegator responsibility

Delegators are not passive passengers. If a validator becomes unreliable, stops voting, or behaves against your interests, use [redelegation](/staking-protocol/delegate-lunc/) to move your stake.

For a broader governance framework, see [Risks and safeguards](/governance/risks-and-safeguards/).
