# Institutions landing page link

Created: 2026-06-01

## Purpose

The docs landing page listed the main documentation sections but did not include the newly added `For Institutions` section.

## Change

Added `For Institutions` to `content/docs/start.md` after `Governance`, matching the sidebar order.

The entry links to:

```text
/institutions/overview/
```

## Validation plan

Run:

```bash
npm run docs:check
npm run build
```
