---
title: "Risks and open questions"
description: "The unresolved risks, product questions, governance issues, and implementation gaps in the proposed Forex Protocol design."
status: draft
reviewed: false
sourceTitle: "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff"
sourceSite: "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "forex-protocol-section-2026-06-01"
sourcePath: "content/docs/forex-protocol/risks-and-open-questions.md"
sourceDate: "2025-12-07"
tocDepth: 3
---
Forex Protocol should be documented with visible risk controls.

The source design is ambitious and strategically important, but stable-asset systems fail when docs hide unresolved questions.

## Not live risk

The first risk is basic: Forex Protocol is not live.

If users believe EUTC minting or redemption is already available, they can be misled by fake interfaces, fake airdrops, fake contracts, or social posts that imply launch status.

Until a production deployment is verified, the correct user instruction is:

```text
Do not attempt to mint or redeem Forex Protocol assets through unofficial links.
```

## Implementation risk

The proposal is not a production specification.

It describes the product direction, but a build team still needs to define exact architecture, contract or module boundaries, custody assumptions, oracle feeds, DEX routing, vault accounting, permissions, deployment process, and monitoring.

Implementation risk is high because Forex Protocol touches:

- stable-asset issuance
- collateral custody
- redemption accounting
- DEX routing
- oracle pricing
- emergency controls
- governance trust
- user-facing financial expectations

This cannot be treated like a simple UI feature.

## Vault versus burn controversy

The most visible controversy in the source discussion is what should happen to LUNC bought with protocol fees.

The source proposal sends purchased LUNC to a permanent protocol vault. Several community comments argue that repurchased LUNC should be sent to the burn wallet instead.

The difference matters:

| Option | Product implication |
| --- | --- |
| Vault | LUNC remains non-circulating if the vault is truly permanent and controlled, and may be treated as reserve or secondary collateral. |
| Burn | LUNC is permanently removed from supply and cannot later be moved or used as collateral. |

The source proposer argues that burning collateral would weaken the collateralized model. Critics argue that vaulting creates trust concerns and is less final than burning.

This issue is not resolved by documentation. A production implementation must make the final governance-approved choice explicit.

## Demand risk

The source discussion includes a direct question:

```text
Why would anyone use this stablecoin instead of USDT?
```

That is one of the strongest product questions.

Forex Protocol needs a reason for users, LPs, arbitrageurs, builders, and wallets to care. Possible demand drivers are not enough unless they become real integrations, liquidity, and user flows.

Demand risk includes:

- EUTC may not attract users
- DEX liquidity may be shallow
- arbitrage may be insufficient
- fees may be too high for some use cases
- established stablecoins may remain easier to use
- wallets may not support the flow
- users may not trust a new Terra Classic stable asset

## Liquidity risk

The source says initial pools may include EUTC/LUNC, EUTC/USTC, and EUTC/USDC.

The source also says liquidity investment would require a later proposal.

That means Forex Protocol can pass conceptually but still fail commercially if liquidity is not deep enough.

Liquidity risk affects:

- mint demand
- redemption confidence
- DEX price stability
- arbitrage efficiency
- slippage
- user trust
- protocol fee generation

## Oracle risk

Forex Protocol depends on fiat price inputs.

If oracle prices are stale, manipulated, unavailable, or too slow, the system can mint or redeem at unsafe values.

The source mentions 30-second live fiat prices, but the implementation must still define:

- data providers
- validator participation requirements
- fallback behavior
- stale-price handling
- cross-rate calculation
- manipulation resistance
- monitoring and alerting

## Collateral accounting risk

The source says users redeem into the same collateral they deposited.

That creates an accounting problem that must be solved precisely.

Open questions include:

- how user collateral type is tracked
- whether EUTC is fungible across collateral types
- what happens if one collateral pool is depleted
- whether redemptions are pro rata or collateral-specific
- how fees affect collateral ratio
- how secondary collateral is separated from primary collateral
- how vault balances are reported

These cannot be hand-waved in a production system.

## Redemption cap tradeoff

The 10% daily redemption cap is a safety control, but it also limits user exit capacity.

Benefits:

- reduces run risk
- reduces instant arbitrage loops
- reduces vault liquidity shock
- reduces oracle-timing exploit risk

Tradeoffs:

- users may dislike waiting
- large holders may discount EUTC because redemption is capped
- stress periods can create queues or secondary-market discounts
- interfaces must explain cap status clearly

The cap may be necessary, but it is not free.

## Legal and regulatory risk

The source describes the system as fully collateralized and regulatory neutral. That wording should be treated carefully.

Collateralized stable assets can still raise legal, licensing, custody, sanctions, disclosure, and jurisdictional questions.

The docs should not claim legal compliance unless a qualified legal review exists.

## Multisig and governance trust risk

The source proposes a multisig kill switch and governance-based resume logic.

That creates operational questions:

- who are the signers
- how are signers selected
- how are signer changes approved
- what actions can the multisig take
- what actions require governance
- how are emergency actions disclosed
- how are conflicts of interest handled

If these questions are not answered, "multisig-controlled" can create as much anxiety as it removes.

## Stablecoin reputation risk

Terra Classic has a unique reputational burden because of the 2022 UST collapse.

Any new stable-asset product will be judged through that history. The docs therefore need sober language:

- collateral-backed, not algorithmic
- proposed, not live
- EUTC, not USTC
- safety controls, not guarantees
- implementation required, not already solved

## Open questions for implementation

Before mainnet launch, the implementation plan should answer:

| Question | Why it matters |
| --- | --- |
| Is CSM a CosmWasm contract system, core module, or hybrid? | Determines audit surface, upgrade process, and governance control. |
| How are EURC and USDC bridged or represented on Terra Classic? | Determines collateral quality and operational risk. |
| How is same-collateral redemption tracked? | Determines solvency and user fairness. |
| What exact collateral ratio applies? | Source references 100.5% and 101.5% contexts. |
| Who controls the vault? | Determines trust and emergency risk. |
| What is the final vault-vs-burn policy? | Determines community acceptance and reserve behavior. |
| What oracle feeds are used? | Determines pricing integrity. |
| How are DEX routes selected? | Determines buyback safety and slippage. |
| What happens if a collateral asset depegs? | Determines crisis behavior. |
| What public monitoring exists? | Determines whether users can verify the system. |

## Bottom line

Forex Protocol is worth documenting because it is one of the clearest attempts to reconnect Terra Classic with stable-asset utility.

It is also exactly the kind of product that must be documented with restraint. The credibility comes from being precise about what is accepted, what is proposed, what is missing, and what must be proven before launch.
