# Favicon Fallback And Page Title Cleanup

Created: 2026-05-29

## Scope

Cleaned up favicon handling and runtime page titles after launch verification showed the browser could still display the previous icon.

## Changes

- Removed the unused old `public/assets/lunc-logo.svg` favicon asset.
- Added root-level `/favicon.ico` and `/favicon.png` outputs based on `public/assets/terra-classic-money-favicon.png`.
- Updated the HTML icon links to prefer root favicon paths, including Apple touch icon fallback.
- Changed runtime docs page titles from `X - Terra Classic Docs` to `X - Independent Documentation for Terra Classic, LUNC & USTC`.

## Validation Plan

Run:

```bash
npm run check
```

After deployment, verify the live HTML references `/favicon.ico` and `/favicon.png`, the old `/assets/lunc-logo.svg` path returns `404`, and a docs route title uses the new suffix.
