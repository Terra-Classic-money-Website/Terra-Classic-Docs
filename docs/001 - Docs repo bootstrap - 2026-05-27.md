# Docs repo bootstrap

Created: 2026-05-27

## Purpose

This repository was refactored from a copied Terra Classic Website project into a dedicated custom documentation site for `https://docs.terra-classic.money`.

The end state is a GitHub Pages-only docs product with a markdown content pipeline, static route output, docs navigation, source-aware internal metadata, and a Terra Classic design-system inheritance layer.

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
- `src/components/docs/...` owns the docs shell, navigation, page rendering, page metadata, table of contents, and previous/next links.
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

## Navigation Correction - 2026-05-27

The docs sidebar was corrected against the public `terra-classic.io/docs` navigation model.

- The generated navigation now supports nested nav items, not just one child level.
- `Overview`, `Builder tooling`, `Wallets`, `Smart contracts`, and `Module specifications` use explicit display labels from the public docs navigation.
- Imported pages that are not present in the public navigation remain reachable and searchable, but are not surfaced as an extra sidebar group.
- Page headings now use the explicit docs navigation title when a page is part of the configured navigation, so pages such as `Reset and troubleshooting` and `Auth module (x/auth)` match the public docs naming.

## Sidebar Redesign - 2026-05-28

The docs sidebar was restyled to follow the simplified Figma direction while keeping the Terra Classic Docs implementation independent of an external docs framework.

- The desktop sidebar is no longer collapsible, and the collapse control plus persisted collapsed state were removed.
- The 1px sidebar separator was removed so the left navigation reads as a clean white navigation surface.
- Docs search now uses the compact pill search field with the `Search docs` placeholder.
- Navigation group labels use title-case section headers with colons, matching the supplied sidebar direction.
- Sidebar rows now use the existing Figma `Nav element` variants as the reusable component surface: default rows, docs arrow rows, opened docs arrow rows, and the back-link row.
- The docs arrow marks were exported from Figma into `public/assets/docs-nav-arrow-down.svg` and `public/assets/docs-nav-back.svg` and are used as CSS masks for branch and back-link icons.
- The sidebar footer includes the return link to `Terra-Classic.money` and short neutrality/disclaimer copy from the supplied direction.
- `src/designsystem.tsx` was updated so the local design-system sample reflects the changed docs sidebar pattern.

Figma MCP access was completed through the direct Figma MCP namespace for node `1944:1735`. The sidebar dimensions, spacing, row variants, footer copy, and arrow icon were checked against that Figma frame.

## Sidebar Motion - 2026-05-28

The docs sidebar interaction states now use explicit motion rather than instant color swaps.

- Sidebar link hover and focus states transition text color to blue over the docs sidebar motion token.
- Branch icons use the same color transition and rotate for opened/closed states.
- Nested navigation groups remain mounted and animate their grid height, opacity, and slight vertical offset when expanded or collapsed.
- Search focus and sidebar footer hover states use the same smooth transition model.
- The global reduced-motion media query disables animation loops and smooth scrolling, but no longer globally kills short color transitions because that made ordinary hover states feel broken in Safari.

## Responsive Docs Shell - 2026-05-28

The tablet and mobile docs shell was corrected against the Figma responsive header and hamburger states.

- Tablet uses a 96px fixed header with a 32px hamburger icon, 48px separator, Terra Classic lockup, and a `Back to Terra-Classic.money` link instead of the previous `Docs` badge.
- Tablet drawer remains 320px wide, slides from the left, hides the duplicate sidebar brand, and leaves the docs content visible behind the transparent outside-click area.
- Mobile keeps the brand on the left and moves the hamburger icon to the right.
- Mobile drawer uses the full viewport width below the fixed topbar and keeps the sidebar brand inside the opened menu.
- Hamburger dots follow the Figma component positions and state movement while reusing local CSS tokens instead of remote Figma image assets.
