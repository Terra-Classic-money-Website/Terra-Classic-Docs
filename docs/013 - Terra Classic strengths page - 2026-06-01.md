# Terra Classic strengths page

Created: 2026-06-01

## Purpose

Add a dedicated `Learn Terra Classic` docs page that expands the main website's Terra Classic strengths section into a more detailed, evidence-aware documentation page.

The page covers:

- decentralization
- 6s block time
- deflationary ecosystem
- uptime and reliability
- low cost of development
- community
- interconnectivity
- revival narrative

## Product framing decision

The page intentionally avoids unqualified marketing claims.

The knowledge corpus and State of the Chain material support a strong positive case for Terra Classic, but they also repeatedly flag governance, liquidity, validator concentration, documentation, and execution risks. The page therefore frames strengths as real capabilities that compound only when matched with professional execution.

This is the right trust posture for the docs site because Terra Classic Docs should make Terra Classic look serious without hiding risk.

## Information architecture decision

The page belongs in `Learn Terra Classic` immediately after `About Terra Classic`.

Reason:

- `About Terra Classic` explains the base protocol relationship between LUNC, validators, staking, fees, governance, and historical stablecoin mechanics.
- `Terra Classic Strengths` translates the main website's strengths section into a deeper product and ecosystem explanation.
- Wallets, fees, staking, governance, Swap Protocol, and Forex Protocol pages can then be read as deeper follow-up sections.

## Source basis

The page synthesizes:

- the main website screenshot supplied by Dawid
- the `- KNOWLEDGE` corpus previously read in full during this chat
- the State of the Chain report material
- the Terra Classic timeline material
- the problems and opportunities material
- Swap Protocol and Forex Protocol source material
- current docs pages in `content/docs`

## Implementation notes

Files changed:

- `content/docs/learn/strengths.md`
- `scripts/build-docs-index.mjs`

Generated files expected after `npm run docs:index`:

- `src/docs/generated/docsManifest.ts`
- `src/docs/generated/docsNav.ts`
- `src/docs/generated/searchIndex.ts`

## Validation plan

Run:

```bash
npm run docs:check
npm run check
```

`npm run check` is required because the navigation generator changes and the generated static routes should be verified before handoff.
