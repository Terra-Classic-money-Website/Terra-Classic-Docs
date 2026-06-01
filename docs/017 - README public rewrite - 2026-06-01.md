# README public rewrite

Created: 2026-06-01

## Scope

Rewrote the root `README.md` as a public-facing repository introduction for Terra Classic Docs.

## Decision

The previous README explained local development, validation commands, content frontmatter, and GitHub Pages deployment details. That content is useful internally, but it is not the right first impression for a public documentation repository.

The new README focuses on:

- what Terra Classic Docs is
- who it serves
- what content areas it covers
- neutrality and source-awareness principles
- what the site is not
- how the community can contribute

## Validation

This was a root markdown-only change. Runtime checks were not required because no application code, generated docs content, navigation, build configuration, or deployment workflow changed.

Lightweight validation performed:

- reviewed the README markdown structure and content
- ran `git diff --check`
