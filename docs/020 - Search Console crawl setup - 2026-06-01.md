# Search Console crawl setup

Created: 2026-06-01

## Context

Dawid created a Google Search Console property for:

```text
https://docs.terra-classic.money
```

Search Console showed the property as verified immediately, likely because the root Terra Classic domain is already verified. Verification only proves ownership/control. It does not create a crawl contract, sitemap, or indexing guidance for the docs subdomain.

The Search Console settings screen also reported:

```text
Brak pliku robots.txt
```

## Decision

Add explicit static SEO outputs to the GitHub Pages build:

- `robots.txt`
- `sitemap.xml`
- route-specific static canonical URLs
- route-specific static title/description/Open Graph/Twitter metadata
- build-time validation for sitemap and canonical drift

This is needed because the docs site is a Vite SPA with generated static route entry files. Before this change, each static route copied the same HTML shell, so direct route HTML inherited the root canonical URL. That is suboptimal for Search Console because every generated docs page should expose its own canonical URL, except the duplicate `/start/` route.

## Canonical model

The docs start page is available at both:

```text
https://docs.terra-classic.money/
https://docs.terra-classic.money/start/
```

The canonical URL is:

```text
https://docs.terra-classic.money/
```

The sitemap therefore includes `/` and excludes `/start/`. All other docs routes use their own route path as canonical.

## Implementation

`scripts/write-static-routes.mjs` now:

- writes route-specific static HTML metadata for every generated docs route
- rewrites `dist/index.html` with the start page metadata
- writes `dist/404.html` with the start page metadata
- writes `dist/robots.txt`
- writes `dist/sitemap.xml`

`scripts/validate-static-seo.mjs` was added to fail the build if:

- `robots.txt` is missing
- the sitemap directive is missing from `robots.txt`
- `sitemap.xml` is missing
- sitemap URL count does not match generated docs pages
- `/start/` appears in the sitemap
- root or route canonical URLs drift from the expected model

`npm run build` now runs the SEO validator after static route generation.

`src/App.tsx` also updates canonical, description, Open Graph, and Twitter metadata during client-side navigation so the rendered head remains consistent after SPA route changes.

## Search Console operator steps

After deployment:

1. Open `https://docs.terra-classic.money/robots.txt`.
2. Open `https://docs.terra-classic.money/sitemap.xml`.
3. In Google Search Console, go to **Indexing -> Sitemaps**.
4. Submit:

```text
sitemap.xml
```

5. Use URL Inspection for the root URL and one deep docs URL, then request indexing if needed.

Google may still take time to crawl and report indexed pages. That delay is normal and is not evidence that the sitemap or robots file is broken.
