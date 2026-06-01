# Responsive docs navigation fixes

Created: 2026-05-28

## Purpose

Tighten the tablet and mobile docs navigation against the Terra Classic website source behavior and Dawid's four hamburger-state screenshots.

## Implementation

- Kept the tablet docs content centered in the available viewport while the tablet drawer is open.
- Forced the top-bar `Back to Terra-Classic.money` label to stay on one line.
- Rebuilt the hamburger icon as a deterministic nine-dot state matrix:
  - closed default: center row grey, outer dots light grey
  - closed hover: center row black, outer dots light grey
  - opened default: corner dots grey, center grey, middle-side dots light grey
  - opened hover: corner dots and center black, middle-side dots light grey
- Preserved the existing motion tokens so the dot transitions remain aligned with the Terra Classic design language.
- Removed the duplicate sidebar logo from the mobile drawer; the top bar remains the only logo in mobile navigation.
- Locked both `html` and `body` while the drawer is open, and kept the drawer itself overflow-hidden so `.docs-sidebar-scroll` is the only mobile menu scroll surface.
- Split branch navigation rows on tablet/mobile so the label remains a normal page link and the arrow is a separate expand/collapse button. Desktop keeps the combined label/arrow behavior.

## Validation

- `npm run check` passed the full static gate:
  - docs index generation
  - docs metadata and internal link validation
  - TypeScript build
  - production Vite build
  - static route generation
- Local preview was inspected at tablet `1203 x 1080` and mobile `390 x 844`.
- Rendered QA confirmed:
  - tablet article center delta is `0px`
  - tablet article width is `820px`
  - top-bar back label renders as `nowrap`
  - mobile menu button is on the right edge
  - mobile drawer uses the full viewport width
  - all four hamburger states match the requested dot positions and colors
  - mobile drawer has no duplicate logo and no document-level second scrollbar
  - tablet/mobile branch label clicks navigate, while branch arrow clicks expand without navigating
