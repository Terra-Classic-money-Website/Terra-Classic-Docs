# Metadata Asset Setup

Created: 2026-05-29

## Scope

Updated the static HTML document metadata for the Terra Classic Docs site.

## Changes

- Replaced the previous SVG favicon reference with `/assets/terra-classic-money-favicon.png`.
- Set the canonical production URL to `https://docs.terra-classic.money/`.
- Updated the default document title and description to the launch-ready Terra Classic Docs positioning.
- Added Open Graph image metadata using `/assets/docs-terra-classic-money-ogimage.png`.
- Added matching Twitter large-card metadata.

## Validation Plan

Run the full local handoff gate:

```bash
npm run check
```

This is appropriate because the change affects production HTML emitted by the Vite build and the GitHub Pages static output.
