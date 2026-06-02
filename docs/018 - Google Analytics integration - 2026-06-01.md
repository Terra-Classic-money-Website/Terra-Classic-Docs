# Google Analytics integration

Created: 2026-06-01

## Context

The docs site needs to send page measurement data to Dawid's Google Analytics property:

```text
G-HMXKM5EL5K
```

This is a launch-operations change, not a content, design, or navigation change. It does not alter the docs editorial model, route structure, GitHub Pages deployment target, or markdown-based content pipeline.

## Implementation

The Google tag was added to `index.html`, the Vite HTML shell used for the production docs app.

This is the correct layer because:

- Vite emits `dist/index.html` from the root shell.
- `scripts/write-static-routes.mjs` copies that built shell to every generated docs route.
- The tag therefore appears on the root page, direct static docs routes, and the GitHub Pages `404.html` fallback shell.
- No React component needs to own the analytics bootstrap for this basic connection.

Google's gtag.js documentation says the Google tag snippet should be placed in the HTML head on every measured page. Google's GA4 pageview documentation also notes that the default `config` call sends page views, and that SPA route tracking can use browser history changes through Enhanced Measurement when the app uses the History API.

## SPA behavior

The docs app uses `window.history.pushState` for internal navigation. With GA4 Enhanced Measurement page-view settings enabled for the web stream, Google Analytics can measure route changes based on browser history events.

If future analytics reports show only the first page in a visit and not internal docs route changes, check the GA4 web stream setting:

```text
Enhanced Measurement -> Page views -> Page changes based on browser history events
```

Do not add a second manual page-view sender unless that GA setting is intentionally disabled, because duplicate page views would distort usage data.

## Validation plan

Because this changes production HTML emitted by the build, the relevant gate is:

```bash
npm run check
```

After build, verify:

- `dist/index.html` contains `G-HMXKM5EL5K`.
- at least one generated static route HTML file contains `G-HMXKM5EL5K`.
- `dist/404.html` contains `G-HMXKM5EL5K`.

External verification after deployment should be done in Google Tag Assistant or Google Analytics DebugView.
