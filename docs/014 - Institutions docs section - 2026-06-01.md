# Institutions docs section

Created: 2026-06-01

## Purpose

This task adds a new `For Institutions` documentation section after `Governance`.

The section supports three public website CTA targets:

- `Utilise multi-currency suite (20+ assets)` -> `/institutions/multi-currency-suite/`
- `Build payment gateway` -> `/institutions/payment-gateway/`
- `Requirements and contact` -> `/institutions/requirements-and-contact/`

## Product decisions

The section is written as institutional diligence documentation, not a promotional microsite.

The content separates:

- live Terra Classic assets and protocols
- proposed products such as Swap Protocol and Forex Protocol
- roadmap assets that are not live institutional stablecoins
- decentralized governance contact paths
- legal and operational boundaries

The most important positioning rule is that Terra Classic has no central legal entity that can represent the network or sign on its behalf. Validators, developers, and community members can support, explain, coordinate, and contract in their own capacity, but they cannot bind Terra Classic as a whole.

## Files added

- `content/docs/institutions/overview.md`
- `content/docs/institutions/multi-currency-suite.md`
- `content/docs/institutions/payment-gateway.md`
- `content/docs/institutions/requirements-and-contact.md`
- `content/docs/institutions/native-assets.md`
- `content/docs/institutions/native-swap-rails.md`
- `content/docs/institutions/collateralized-stable-assets.md`
- `content/docs/institutions/integration-architecture.md`
- `content/docs/institutions/risk-and-due-diligence.md`

## Validation plan

Because this changes markdown content and navigation, run:

```bash
npm run docs:check
npm run build
```

If the generated docs manifest or nav changes, keep those generated files in the working tree.
