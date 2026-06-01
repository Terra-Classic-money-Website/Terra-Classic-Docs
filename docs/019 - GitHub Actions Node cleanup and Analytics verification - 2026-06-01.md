# GitHub Actions Node cleanup and Analytics verification

Created: 2026-06-01

## Context

After the Google Analytics deployment, GitHub Actions completed successfully but warned that several actions were still running on the deprecated Node 20 action runtime.

The Google Analytics account screenshots also showed:

- Stream URL: `https://docs.terra-classic.money`
- Measurement ID: `G-HMXKM5EL5K`
- Enhanced Measurement enabled
- Manual install test showing a green check
- Stream details still showing "No data received"

## Workflow update

The GitHub Pages workflow action majors were updated:

| Action | Previous | Updated |
| --- | --- | --- |
| `actions/checkout` | `v4` | `v6` |
| `actions/setup-node` | `v4` | `v6` |
| `actions/upload-pages-artifact` | `v3` | `v5` |
| `actions/deploy-pages` | `v4` | `v5` |

The current action metadata was checked before the update. `checkout@v6`, `setup-node@v6`, and `deploy-pages@v5` use the `node24` runtime. `upload-pages-artifact@v5` is the current Pages artifact wrapper.

## Analytics verification

The live site was checked after deployment:

- `https://docs.terra-classic.money/` contains the Google tag for `G-HMXKM5EL5K`.
- The Google tag JavaScript endpoint returns `200`.
- A headless Chromium load of the live site generated a GA4 `page_view` collect request to `region1.google-analytics.com` with `tid=G-HMXKM5EL5K`.

This confirms the website side is sending data. The "No data received" notice in Google Analytics is therefore expected account-side freshness/processing behavior after a new install, not evidence of a missing website tag.

## Remaining operator check

After the workflow update is pushed to `main`, verify that the GitHub Pages workflow completes without the Node 20 deprecation annotation.

In Google Analytics, wait for the real-time/debug views to refresh. If data still does not appear after fresh visits and a reasonable processing window, re-check browser privacy blockers, consent settings, and whether GA4 Enhanced Measurement history-event page views are enabled for SPA navigation.
