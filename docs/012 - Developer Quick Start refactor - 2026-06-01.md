# Developer Quick Start refactor

Created: 2026-06-01

## Scope

This task refactors the developer Quick Start page from a long mini-manual into a shorter onboarding map for Terra Classic developers.

## Product decision

The Quick Start page should not duplicate detailed localnet, SDK, smart contract, CW20, DEX, IBC, and production implementation guides. Its job is to orient developers, explain the first safe path, and route users to the correct deeper page.

The canonical model is:

- Quick Start: orientation, first successful path, core risks, and routing.
- Dedicated pages: exact commands, code examples, edge cases, and production details.

## Changes made

- Rewrote `content/docs/develop/quick-start-guide.md` around a golden-path and decision-router structure.
- Removed duplicated localnet walkthrough content from Quick Start and linked to the dedicated localnet page.
- Reduced inline implementation breadth by keeping one minimal CosmES starter and routing Python, smart contracts, CW20, DEX, IBC, and production topics to their dedicated docs.
- Rewrote `content/docs/develop/how-to/localnet/terra-core-localnet.md` so code fences are no longer nested inside numbered lists, avoiding the current markdown renderer's inline-code rendering issue.

## Validation expectation

Because this is a markdown content and internal-link change, the minimum validation gate is:

```bash
npm run docs:check
```

If rendered QA is requested afterward, run the local dev server and inspect the Quick Start and localnet pages at desktop, tablet, and mobile widths.
