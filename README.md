# Terra Classic Docs

Custom documentation site for `https://docs.terra-classic.money`.

This is a dedicated docs repository, not a copy of the main Terra Classic Website. It preserves the Terra Classic design language while replacing the marketing-site routes with a markdown-driven documentation system.

## Local Development

```bash
npm install
npm run dev
```

## Content

Markdown source lives in `content/docs`.

Each page requires frontmatter with title, description, status, source attribution, source commit, and import date. Imported pages remain marked as `imported` until reviewed.

## Validation

```bash
npm run docs:check
npm run typecheck
npm run build
```

The full handoff gate is:

```bash
npm run check
```

## GitHub Pages

The site is static-only and deploys through GitHub Pages from `main`.

The custom domain uses base path `/` and is declared in `public/CNAME` as:

```text
docs.terra-classic.money
```
