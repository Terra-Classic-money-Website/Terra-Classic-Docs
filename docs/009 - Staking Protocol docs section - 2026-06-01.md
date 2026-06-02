# Staking Protocol Docs Section

Created: 2026-06-01

## Scope

This task adds a dedicated `Staking Protocol` section to the Terra Classic Docs navigation between `Learn Terra Classic` and `Develop`.

The section introduces Staking Protocol as the user-friendly product name for Terra Classic native staking. It is written for basic users, delegators, investors, governance participants, validators, and developers.

## Content Structure

The section contains nine pages:

- `content/docs/staking-protocol/overview.md`
- `content/docs/staking-protocol/how-it-works.md`
- `content/docs/staking-protocol/delegate-lunc.md`
- `content/docs/staking-protocol/rewards-and-apr.md`
- `content/docs/staking-protocol/choose-a-validator.md`
- `content/docs/staking-protocol/risks-and-unstaking.md`
- `content/docs/staking-protocol/governance.md`
- `content/docs/staking-protocol/validator-responsibilities.md`
- `content/docs/staking-protocol/developer-reference.md`

The old `content/docs/learn/staking-and-governance.md` page was removed from the active content set because the new section replaces its role and avoids duplicate staking navigation.

## Product Decisions

- Staking Protocol is positioned as a native L1 participation product, not a new token, custody product, liquid staking product, or fixed-yield product.
- APR is deliberately described as dynamic and methodology-dependent. The docs avoid treating the website APR display as a promise.
- Validator choice is framed as a security, governance, and decentralization decision, not only a rewards decision.
- Current protocol parameters are included only with clear query endpoints and a checked date, because governance can change params.

## Implementation Notes

- Navigation is wired in `scripts/build-docs-index.mjs`.
- `scripts/docs-utils.mjs` now recognizes `staking-protocol` as a first-class group label.
- Start and protocol pages were updated to route users into the new section.
- Wallet-specific staking pages remain under `Learn Terra Classic` and now link to the full Staking Protocol section.
- The distribution module spec table was corrected to match live params checked during this task: `CommunityTax` `0.5`, `BaseProposerReward` `0`, and `BonusProposerReward` `0`.

## Validation Plan

Because this task changes docs content and docs navigation generation, the relevant final gate is:

```bash
npm run docs:check
```

If generated manifest changes touch TypeScript output unexpectedly, escalate to:

```bash
npm run build
```
