# Post-Quantum Roadmap RFC Docs Integration

Created: 2026-06-18

## Purpose

Integrate fragwuerdig's Post-Quantum Roadmap RFC into the Terra Classic Docs without republishing the full RFC.

The content decision is to add one source-linked orientation page that explains the RFC's status, roadmap structure, risks, and verification sources. The page must keep strict separation between current Terra Classic behavior and proposed future roadmap work.

## Sources reviewed

Local source folder:

- `- KNOWLEDGE/2026-06-18 - Post Quantum Roadmap RFC by fragwuerdig`

Source files reviewed:

- `00-index.md`
- `00-scope-note.md`
- `01-executive-summary.md`
- `02-cryptographic-signatures-explained.md`
- `03-current-state-and-terminology.md`
- `04-target-states-and-options.md`
- `05-roadmap-phases.md`
- `06-audit-gates.md`
- `07-live-chain-migration-paths.md`
- `08-governance-communication-rfc-process.md`
- `09-open-decisions-decision-log.md`
- `10-comment-log.md`
- `_manifest.md`
- `discourse_post_quantum_roadmap_rfc_pre_formal_discussion_486.md`
- `discourse_post_quantum_roadmap_rfc_pre_formal_discussion_486.json`
- `pq-roadmap-rfc.pdf`

External source links checked:

- `https://discourse.luncgoblins.com/t/post-quantum-roadmap-rfc-pre-formal-discussion/486`
- `https://github.com/fragwuerdig/core/blob/docs/pq/docs/pq-roadmap-rfc/00-index.md`

## Content concept

The docs should not host the full RFC because that would create a duplicated source of truth and increase the chance of stale or contradictory material.

The implemented concept is a single page:

- path: `content/docs/develop/post-quantum-roadmap-rfc.md`
- nav group: `Build & Operate`
- nav placement: near `Current vs proposed`
- role: status brief, roadmap summary, and source pointer

This location is intentional. The RFC is a technical protocol and infrastructure roadmap with governance implications. It should be findable by builders, validators, and infrastructure operators, while linking governance readers to the proposal-evaluation framework.

## Editorial guardrails

The page must not claim:

- Terra Classic is already post-quantum-ready
- the migration has been approved
- IBC impact is solved
- wallets, exchanges, or custody providers are ready
- the RFC is a live implementation plan or delivery commitment

The page may claim:

- Terra Classic quantum-resistance work has started at the RFC and roadmap level
- there is a community-authored RFC by fragwuerdig
- the RFC creates a structured roadmap and decision framework
- the RFC separates consensus, wallet/transaction, and client-ecosystem paths
- the RFC requires governance traceability and audit gates
- the RFC treats IBC counterparty readiness as a major Go/No-Go risk

## Follow-up positioning adjustment

On 2026-06-18, the public page was adjusted to make the intended audience signal clearer: community members, investors, institutions, builders, and validators should understand that quantum-resistance work has started, but only at the early RFC and roadmap-discussion level.

The local knowledge-capture path was also removed from the public-facing source list. It remains documented here as part of the internal implementation record, but it should not appear on the docs page.

## Implementation changes

Changed files:

- `content/docs/develop/post-quantum-roadmap-rfc.md`
- `scripts/build-docs-index.mjs`

Expected generated files after running docs indexing:

- `src/docs/generated/docsManifest.ts`
- `src/docs/generated/searchIndex.ts`
- `src/docs/generated/docsNav.ts`

## Validation plan

Run the relevant docs/content gate first:

```bash
npm run docs:check
```

Because the task changes docs navigation and generated artifacts, run the full build gate before handoff:

```bash
npm run check
```

## Validation results

Completed on 2026-06-18:

```bash
npm run docs:check
```

Result:

- network snapshot regenerated successfully
- docs index regenerated for 136 pages
- docs validation passed for 136 pages

```bash
npm run check
```

Result:

- network snapshot regenerated successfully
- docs index regenerated for 136 pages
- docs validation passed for 136 pages
- TypeScript build passed
- Vite production build passed
- static route generation passed for 136 routes
- static SEO validation passed for 136 sitemap URLs and 136 route canonicals

Vite reported the existing large bundle warning for the main JavaScript chunk. This was not introduced by the RFC content page and does not block this docs-content change.
