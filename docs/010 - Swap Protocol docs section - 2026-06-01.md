# Swap Protocol docs section

Created: 2026-06-01

## Scope

Added a dedicated `Swap Protocol` docs section after `Staking Protocol`.

The section presents Swap Protocol as the user-facing L1 product name and Market Module 2.0 as the underlying technology.

## Source of truth

Primary source:

- `- KNOWLEDGE/Swap Protocol/1 - Terra Classic Market-Module 2.0.md`

The early discussion PDF in the same folder was treated as historical context only. The markdown source is the canonical source because it contains the no-mint version.

## Content structure

The section contains nine pages:

- `content/docs/swap-protocol/overview.md`
- `content/docs/swap-protocol/how-it-works.md`
- `content/docs/swap-protocol/swap-lunc-and-ustc.md`
- `content/docs/swap-protocol/fees-burns-and-liquidity.md`
- `content/docs/swap-protocol/oracles-and-safety-controls.md`
- `content/docs/swap-protocol/scenarios-and-examples.md`
- `content/docs/swap-protocol/risks-and-limitations.md`
- `content/docs/swap-protocol/validator-operations.md`
- `content/docs/swap-protocol/developer-reference.md`

The section separates audiences deliberately:

- basic users: overview, how it works, swap flow
- investors and community members: fees, burns, liquidity, scenarios, risks
- validators: oracle and validator operations
- developers: developer reference and module links

## Positioning decisions

The docs avoid describing Swap Protocol as:

- a USTC repeg mechanism
- a price guarantee
- a DEX replacement
- a stablecoin redemption mechanism
- a return to unlimited algorithmic mint/burn swaps

The docs describe it as:

- native LUNC and USTC swaps
- no-mint Market Module 2.0 execution
- finite epoch liquidity
- oracle-aware pricing
- spread-fee routing to burn and Oracle Pool
- hard safety controls for unsafe oracle or liquidity conditions

## Related updates

Updated navigation in `scripts/build-docs-index.mjs` so `Swap Protocol` appears after `Staking Protocol`.

Updated `scripts/docs-utils.mjs` so the `swap-protocol` slug resolves to the correct group label.

Updated `.gitignore` to stop ignoring the `docs` folder. This is required because project development records are mandatory repo documentation, and new records should not be silently hidden from Git.

Updated stale references that said market swaps were disabled:

- `content/docs/develop/module-specifications/spec-market.md`
- `content/docs/develop/module-specifications/spec-oracle.md`
- `content/docs/learn/protocol.md`
- `content/docs/start.md`
- `content/docs/learn/fees.md`
- `content/docs/develop/module-specifications/module-specifications.md`
- `content/docs/develop/quick-start-guide.md`
- `content/docs/develop/cosmes/cosmes-transactions.md`

## Validation expectation

Because this task changes generated navigation and markdown content, the required validation is:

- `npm run docs:check`
- `npm run check`
