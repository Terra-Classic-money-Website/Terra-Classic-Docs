---
title: "Staking Protocol Developer Reference"
description: "Modules, messages, queries, endpoints, CLI examples, and integration notes for building Terra Classic staking and governance tooling."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs Staking Protocol section"
sourceSite: "https://docs.terra-classic.money"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "staking-protocol-section-2026-06-01"
sourcePath: "content/docs/staking-protocol/developer-reference.md"
sourceDate: "2026-06-01"
tocDepth: 2
---
Use this page when building wallets, dashboards, staking calculators, validator analytics, governance tools, portfolio trackers, or backend automation around Staking Protocol.

## Core modules

Staking Protocol spans several modules.

| Module | Role | Module spec |
| --- | --- | --- |
| `x/staking` | Validators, delegations, redelegations, unbonding, staking params. | [Staking module](/develop/module-specifications/spec-staking/) |
| `x/distribution` | Reward accounting, delegator reward withdrawals, validator commission. | [Distribution module](/develop/module-specifications/spec-distribution/) |
| `x/slashing` | Downtime and double-signing penalties, jailed state, signing info. | [Slashing module](/develop/module-specifications/spec-slashing/) |
| `x/gov` | Proposal lifecycle, votes, deposits, governance params. | [Governance module](/develop/module-specifications/spec-governance/) |

Terra Classic inherits Cosmos SDK module behavior with Terra Classic-specific params and customizations. Always verify live chain behavior against current node endpoints and the running Terra Classic version.

## Common messages

| Action | Message |
| --- | --- |
| Delegate LUNC | `MsgDelegate` |
| Redelegate LUNC | `MsgBeginRedelegate` |
| Undelegate LUNC | `MsgUndelegate` |
| Claim delegator rewards | `MsgWithdrawDelegatorReward` |
| Claim validator commission | `MsgWithdrawValidatorCommission` |
| Set reward withdrawal address | `MsgSetWithdrawAddress` |
| Vote on proposal | `MsgVote` |
| Submit proposal | `MsgSubmitProposal` |
| Deposit on proposal | `MsgDeposit` |

Wallets should make the action label obvious before signing. Users should not need to inspect raw protobuf messages to understand whether they are delegating, redelegating, undelegating, claiming, voting, or changing a withdrawal address.

## Useful LCD queries

Mainnet LCD example:

```text
https://terra-classic-lcd.publicnode.com
```

Staking:

```text
/cosmos/staking/v1beta1/params
/cosmos/staking/v1beta1/pool
/cosmos/staking/v1beta1/validators
/cosmos/staking/v1beta1/validators/{validator_address}
/cosmos/staking/v1beta1/delegations/{delegator_address}
/cosmos/staking/v1beta1/validators/{validator_address}/delegations/{delegator_address}
/cosmos/staking/v1beta1/delegators/{delegator_address}/redelegations
/cosmos/staking/v1beta1/delegators/{delegator_address}/unbonding_delegations
```

Distribution:

```text
/cosmos/distribution/v1beta1/params
/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards
/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}
/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address
/cosmos/distribution/v1beta1/validators/{validator_address}/commission
/cosmos/distribution/v1beta1/community_pool
```

Slashing:

```text
/cosmos/slashing/v1beta1/params
/cosmos/slashing/v1beta1/signing_infos
/cosmos/slashing/v1beta1/signing_infos/{cons_address}
```

Governance:

```text
/cosmos/gov/v1/proposals
/cosmos/gov/v1/proposals/{proposal_id}
/cosmos/gov/v1/proposals/{proposal_id}/votes
/cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}
/cosmos/gov/v1/params/voting
```

For production systems, do not rely on a single public endpoint. Use endpoint failover, timeouts, retries, health checks, and clear error states.

## CLI examples

The examples below are shapes, not copy-paste production commands. Replace addresses, amounts, gas, chain ID, key names, and endpoints with current values.

Delegate:

```bash
terrad tx staking delegate terravaloper1... 1000000uluna \
  --from my-wallet \
  --chain-id columbus-5 \
  --gas auto \
  --gas-adjustment 1.4 \
  --fees 10000uluna
```

Redelegate:

```bash
terrad tx staking redelegate terravaloper1source... terravaloper1dest... 1000000uluna \
  --from my-wallet \
  --chain-id columbus-5 \
  --gas auto \
  --gas-adjustment 1.4 \
  --fees 10000uluna
```

Undelegate:

```bash
terrad tx staking unbond terravaloper1... 1000000uluna \
  --from my-wallet \
  --chain-id columbus-5 \
  --gas auto \
  --gas-adjustment 1.4 \
  --fees 10000uluna
```

Query staking params:

```bash
terrad query staking params --node https://terra-classic-rpc.publicnode.com:443
```

Query delegator rewards:

```bash
terrad query distribution rewards terra1... --node https://terra-classic-rpc.publicnode.com:443
```

## Integration requirements

Staking interfaces should show:

- liquid balance
- delegated balance by validator
- pending rewards
- validator commission
- validator voting power
- jailed status
- unbonding entries and completion times
- redelegation entries and completion times
- governance vote override state
- transaction fee estimate
- tax or fee behavior where relevant
- clear warning before undelegation

## APR calculator requirements

A credible APR calculator should disclose:

- data source
- time window
- reward source assumptions
- bonded-token denominator
- validator commission treatment
- community-tax treatment
- compounding assumption
- whether fiat conversion is used
- refresh time

Avoid displaying APR with false precision. If the calculation is an estimate, label it as an estimate.

## Error states to handle

Staking tooling should handle:

- insufficient liquid LUNC for fees
- validator not found
- validator jailed
- invalid `terravaloper` address
- redelegation cooldown
- max unbonding or redelegation entries reached
- endpoint timeout
- stale endpoint data
- wallet rejection
- chain ID mismatch
- tax or fee estimation failure
- transaction included but UI cache not refreshed

User-facing errors should explain the next action in plain language.

## Terra Classic-specific notes

- Chain ID: `columbus-5`
- Account prefix: `terra`
- Validator operator prefix: `terravaloper`
- Staking denomination: `uluna`
- Display unit: `LUNC`
- 1 LUNC: `1000000uluna`
- Market swap mint/burn paths are disabled on Classic; do not assume historical Terra swap behavior is active.
- Burn tax, distribution, governance, and staking parameters should be queried live.
- Terra Classic has a custom validator voting-power cap documented in the staking module spec.

## Source references

Use current Terra Classic endpoints for live params and upstream Cosmos SDK docs for module behavior:

- [Cosmos SDK staking module](https://docs.cosmos.network/sdk/latest/modules/staking/README)
- [Cosmos SDK distribution module](https://docs.cosmos.network/sdk/v0.50/build/modules/distribution/README)
- [Cosmos SDK slashing module](https://docs.cosmos.network/sdk/latest/modules/slashing/README)
- [Cosmos SDK governance module](https://docs.cosmos.network/sdk/latest/modules/gov/README)
