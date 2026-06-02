# Edit links repository fix

Created: 2026-05-29

## Purpose

Fix the public `Edit on GitHub` link target after the docs repository was created under `Terra-Classic-money-Website/Terra-Classic-Docs`.

## Implementation

- Replaced the old placeholder edit URL in `DocsPage` with the real public repository URL.
- Kept edit links based on `page.sourceFile`, so moved or generated docs pages continue to point at the canonical markdown source under `content/docs`.
- Updated the start page copy and source metadata so it no longer says edit links are placeholders.

## Validation

- Regenerate the docs manifest and search index.
- Run the full static gate with `npm run check`.
- Confirm a rendered edit link points to `https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/edit/main/content/docs/...`.
