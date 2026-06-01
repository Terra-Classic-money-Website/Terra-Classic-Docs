# Forex Protocol docs section

Created: 2026-06-01

## Scope

Added a new `Forex Protocol` documentation section for the Terra Classic Docs site.

The section documents Forex Protocol as the user-facing product name and the Collateralized Stablecoin Module as the underlying proposed technology.

## Source boundary

Primary source:

- `- KNOWLEDGE/Forex Protocol/Forex Protocol - Agora.pdf`

Additional task context:

- Supplied governance screenshot showing Proposal 12209 passed.
- Supplied main-site screenshots showing Forex Protocol as a coming-soon product and open implementation work package.

The docs intentionally avoid presenting Forex Protocol as a live product. The section states that Forex Protocol is governance accepted but not deployed, not available in wallets, and still needs production implementation.

## Pages added

- `content/docs/forex-protocol/overview.md`
- `content/docs/forex-protocol/governance-and-status.md`
- `content/docs/forex-protocol/how-it-is-proposed-to-work.md`
- `content/docs/forex-protocol/collateral-and-stable-assets.md`
- `content/docs/forex-protocol/fees-buybacks-and-liquidity.md`
- `content/docs/forex-protocol/oracles-and-safety-controls.md`
- `content/docs/forex-protocol/risks-and-open-questions.md`
- `content/docs/forex-protocol/developer-reference.md`

## Product framing decisions

- `Forex Protocol` is treated as the product name.
- `Collateralized Stablecoin Module` is treated as the technical mechanism.
- `EUTC` is treated as the first proposed stable asset, not a live mintable asset.
- The source-defined values are preserved where available: EURC 1:1 collateral, USDC with 0.5% premium, 1.5% mint and redemption fees, 10% daily redemption cap, secondary reserve, proposed LUNC buybacks, and permanent vault logic.
- Unresolved source issues are kept visible, especially vault-versus-burn controversy, demand risk, liquidity risk, oracle risk, collateral accounting risk, legal risk, and implementation risk.

## Validation plan

The relevant validation tier is docs content plus build gate because this task adds pages and navigation.

Expected checks:

- `npm run docs:check`
- `npm run check`
