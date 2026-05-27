# Docs repo bootstrap

Created: 2026-05-27

## Purpose

This repository was refactored from a copied Terra Classic Website project into a dedicated custom documentation site for `https://docs.terra-classic.money`.

The end state is a GitHub Pages-only docs product with a markdown content pipeline, static route output, docs navigation, imported source attribution, and a Terra Classic design-system inheritance layer.

## Preserved

- Terra Classic visual identity, Figtree typography, color tokens, spacing rhythm, sidebar interaction model, mobile drawer behavior, and restrained public-good tone.
- Root control documents needed for project continuity: `AGENTS.md`, `DESIGN.md`, `-- 1. OG BRIEF - 2026.05.14.md`, `- GITHUB FLOW.md`, and `designsystem.html`.
- Minimal brand assets required by the docs shell: sidebar logo, icon logo, LUNC favicon, and fonts.

## Deleted

- Marketing-site routes and page entrypoints: home, About, Markets, Roadmap, Ecosystem, Open Work, Decentralization, and Privacy.
- Homepage-only React sections, APR fetch logic, donation modal logic, website data files, avatar localization scripts, image build scripts, performance budgets, Lighthouse tooling, and visual audit screenshots.
- Old website process documentation from `docs`. It remains recoverable in the baseline Git commit but is intentionally not preserved as current docs-repo process history.
- The imported export folder `terra-classic-documentation` after its markdown files were moved into `content/docs`.

## Docs Architecture

- `content/docs/...` is the canonical markdown source.
- `scripts/build-docs-index.mjs` generates `src/docs/generated/docsManifest.ts` and `src/docs/generated/searchIndex.ts`.
- `scripts/validate-docs.mjs` validates frontmatter, imported attribution, duplicate slugs, heading anchors, internal links, and local images.
- `scripts/write-static-routes.mjs` copies the built SPA shell to every docs route in `dist` so GitHub Pages can serve direct links.
- `src/components/docs/...` owns the docs shell, navigation, page rendering, attribution panel, page status, table of contents, and previous/next links.
- `src/docs/markdown.tsx` renders markdown without external docs frameworks.

## Content Review Risks

All imported pages are marked `status: imported` and `reviewed: false`.

Known risks:

- Some imported content may be technically stale because it was copied from the previous Terra Classic documentation source.
- Source links were normalized from old `/docs/...` routes into the new custom docs route model.
- The first-phase markdown renderer covers headings, paragraphs, lists, blockquotes, code blocks, tables, inline code, strong text, and links. More complex markdown extensions should be added deliberately if the content requires them.
- The edit-on-GitHub link is a placeholder until the final GitHub repository URL is confirmed.

## Validation Model

Inner-loop docs content check:

```bash
npm run docs:check
```

TypeScript check:

```bash
npm run typecheck
```

Full final gate:

```bash
npm run check
```

The full gate includes docs metadata validation, internal link validation, TypeScript typecheck, production build, and static route generation for GitHub Pages.

## GitHub Pages Notes

The site uses Vite base path `/` because it targets the custom subdomain `docs.terra-classic.money`.

`public/CNAME` declares the custom domain. The GitHub Pages workflow builds from `main`, uploads `dist`, and deploys through GitHub Pages only.
