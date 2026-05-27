# Terra Classic Docs local runbook

## Prerequisites

- Node.js 22 or newer.
- npm.

## First-time setup

```bash
npm install
```

## Normal start

```bash
npm run dev
```

Vite prints the local URL, normally:

```text
http://127.0.0.1:5173/
```

Open the local design-system tool at:

```text
http://127.0.0.1:5173/designsystem.html
```

## Content workflow

Docs markdown source lives in:

```text
content/docs
```

After adding, moving, or editing docs markdown, regenerate the manifest and search index:

```bash
npm run docs:index
```

Validate metadata, internal links, heading anchors, and local images:

```bash
npm run docs:validate
```

Run both docs content checks:

```bash
npm run docs:check
```

## Build and checks

Type-check the React/TypeScript app:

```bash
npm run typecheck
```

Build the production GitHub Pages output:

```bash
npm run build
```

Run the full local handoff gate:

```bash
npm run check
```

The full gate includes docs index generation, docs metadata validation, internal link validation, TypeScript typecheck, production build, and static route file generation.

## Preview production build

```bash
npm run build
npm run preview
```

## GitHub Pages deployment

Deployment is static-only through GitHub Pages. The workflow is:

```text
.github/workflows/deploy.yml
```

It runs from `main` and executes:

```bash
npm ci
npm run check
```

The docs custom domain is:

```text
docs.terra-classic.money
```

The Vite base path is fixed to `/` because the site is intended to run on the custom subdomain, not under a repository subpath.

## Troubleshooting

- If a docs page is missing, run `npm run docs:index`, then `npm run docs:validate`.
- If a link fails validation, check whether the markdown still points to the old `/docs/...` route or a source page that was not imported.
- If GitHub Pages deploy fails, open the failed Actions run and send Codex the failed step log.
- If the layout looks broken on mobile, run `npm run preview` and inspect the route at desktop, tablet, and mobile widths before changing content.
