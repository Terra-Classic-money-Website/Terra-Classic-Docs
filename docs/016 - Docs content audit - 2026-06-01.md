# Docs content audit

Created: 2026-06-01

## Scope

This audit reviews the documentation content in `content/docs`, the docs information architecture, and the supporting source context from the project brief, design contract, generated docs shell, validation setup, and the `- KNOWLEDGE` corpus.

It is a content and product-trust audit, not a visual design audit.

## Repository context

Terra Classic Docs is the custom GitHub Pages documentation product for `docs.terra-classic.money`. The project is in a content-expansion and launch-hardening phase: the docs system exists, the navigation is generated from markdown, and several new product sections have been added, but the content corpus still has draft status across the board.

Key constraints:

- GitHub Pages only.
- Base path `/`.
- Markdown-driven docs from `content/docs`.
- No external docs framework.
- Product claims must not drift into marketing overstatement.
- Terra Classic history requires unusually careful status, risk, and source discipline.

## Validation performed

`npm run docs:check` passed for 119 pages.

This validates manifest generation and docs structure. It does not validate factual accuracy, current chain status, governance truth, or content completeness.

## Content inventory

- Total docs pages: 119.
- Total content words: approximately 58,351.
- Median page length: approximately 450 words.
- All pages are marked `status: draft`.
- All pages are marked `reviewed: false`.

Section distribution:

| Section | Pages | Approx. words |
| --- | ---: | ---: |
| develop | 46 | 19,306 |
| learn | 19 | 5,095 |
| full-node | 10 | 3,480 |
| institutions | 9 | 7,266 |
| swap-protocol | 9 | 5,656 |
| forex-protocol | 8 | 6,994 |
| governance | 8 | 3,934 |
| staking-protocol | 8 | 5,313 |
| appendices | 1 | 1,038 |
| start | 1 | 269 |

## Executive judgment

The docs are directionally good but not launch-grade complete.

They are stronger than typical community-chain docs in narrative honesty, product framing, and risk awareness. The new Forex, Swap, Staking, Governance, Institutions, and Strengths sections show a serious attempt to explain Terra Classic as an L1 rather than as price speculation.

The docs are not yet strong enough to serve as the authoritative documentation layer for an L1 with Terra Classic's history. The current corpus mixes strong new explanatory pages with thin imported module pages, old reference material, draft product concepts, and incomplete developer and validator guidance.

The biggest risk is not that the docs are weak. The biggest risk is that they look more complete and final than they are.

## What is good

- The product framing is materially better than crypto-native hype. It explains Terra Classic through chain mechanics, governance, staking, proposed stable assets, and institutional trust requirements.
- The Forex Protocol section handles status responsibly. It explicitly says the product is governance-accepted but not deployed.
- The Institutions section has the right tone: due diligence, chain state, risks, and source discipline rather than promotional language.
- The Staking and Governance sections are user-readable and explain incentives, validator accountability, and operational trade-offs.
- The Strengths page is one of the strongest narrative assets in the docs. It turns Terra Classic's survival story into a credible strategic asset without pretending the collapse did not happen.
- Source metadata exists in frontmatter, which is a useful base for future review workflows.

## What is incomplete

The docs are not complete for an L1 of this size and history.

Missing or underdeveloped areas:

- A public status matrix distinguishing live, proposed, governance-accepted, disabled, deprecated, and historical features.
- Current network parameters with last-verified date, source queries, and links to chain endpoints.
- Release and upgrade history from the May 2022 collapse through current versions.
- Governance-to-code traceability: which proposals changed chain behavior, which were signalling only, and which were implemented.
- Validator operations beyond basic node setup: monitoring, oracle feeders, snapshots, sentry architecture, incident handling, jail recovery, slashing prevention, and key management.
- Security and assurance: audits, bug bounty status, threat model, incident response, disclosure path, postmortem archive, and known-risk register.
- IBC and interoperability docs: active channels, relayers, bridge assumptions, packet risks, and operational owners.
- Liquidity and market-structure docs: DEXs, pools, depth, tax implications, CEX versus on-chain liquidity, and risk framing.
- USTC and LUNC lifecycle docs: supply, burns, tax routing, oracle pool, community pool, disabled mint/burn history, and current economic mechanics.
- Contribution and correction workflow for public docs.
- End-to-end developer tutorials: wallet integration, CosmES, contract deploy, contract interaction, localnet, testnet, indexing, APIs, and production integration checklists.

## High-risk content issues

### 1. Swap Protocol status language is inconsistent with source discipline

Forex Protocol correctly says it is not a deployed product.

Swap Protocol and `spec-market.md` use live-product language such as "native swaps live" and "Terra Classic swaps are live again through Swap Protocol." External source material for Proposal 12188 presents Market Module 2.0 as a no-mint proposal that required signalling, testing, review, and implementation. Unless a production deployment exists and is documented, the docs should not present Swap Protocol as live.

This is the most important content issue because it affects user trust, validator expectations, and product credibility.

Recommended fix:

- Add a Swap Protocol "Governance and status" page.
- Reword all Swap and Market Module 2.0 pages to distinguish proposed design, governance status, testnet status, and production status.
- Only use live language when a deployed module, wallet route, chain version, and verification query are documented.

### 2. Every page is still draft and unreviewed

All 119 pages have `status: draft` and `reviewed: false`.

This is acceptable during buildout, but not acceptable for a public authority surface. It tells readers and future maintainers that no page is verified.

Recommended fix:

- Create review tiers: draft, source-checked, technically reviewed, published.
- Add reviewer, last verified date, and source evidence where trust-sensitive claims are made.
- Prioritize status-sensitive and user-action pages before narrative pages.

### 3. Imported module specs create a false sense of completeness

The `develop/module-specifications` section has many very short pages that mostly point to upstream Cosmos SDK docs or contain placeholder-level Terra Classic adaptation.

Examples include `spec-transfer.md`, `spec-upgrade.md`, `spec-vesting.md`, `spec-evidence.md`, `spec-ibc.md`, `spec-slashing.md`, `spec-governance.md`, `spec-ica.md`, `spec-crisis.md`, `spec-ibc-fee.md`, and `spec-mint.md`.

These pages are useful as scaffolding, but they are not yet real Terra Classic technical documentation.

Recommended fix:

- Mark placeholder specs clearly.
- Replace generic upstream summaries with Terra Classic-specific behavior, live params, CLI queries, endpoint examples, and known differences.
- Consolidate thin pages where standalone pages do not yet add value.

### 4. Treasury spec has excessive repeated warnings

`content/docs/develop/module-specifications/spec-treasury.md` repeats essentially the same seigniorage/stability-tax warning many times.

The warning is important, but the repetition damages readability and makes the page feel mechanically patched.

Recommended fix:

- Keep one prominent historical-status warning at the top.
- Add concise inline notes only where a specific old behavior could mislead the reader.
- Consider splitting historical mechanics from current Terra Classic behavior.

### 5. Source visibility is weaker than the risk profile requires

Many pages have source metadata in frontmatter but no visible body citations or last-verified evidence.

For normal docs this is tolerable. For Terra Classic it is not enough, because the chain's history makes trust and source traceability part of the product.

Recommended fix:

- Add visible "Source and verification" blocks to trust-sensitive pages.
- Use dated source claims.
- Link to proposals, code, releases, validators, endpoints, and governance records where possible.

## Repetition and naming issues

- "Developer reference" appears in both Forex and Swap sections. This is not wrong, but search results and sidebars would be clearer with product-qualified titles.
- "Oracles and safety controls" appears in both Forex and Swap sections. Again acceptable, but stronger if qualified by product.
- Forex and Swap repeat some product mechanics across several pages. Some repetition is useful for risk communication, but the canonical mechanics should live in one reference page per product.
- Staking and governance share validator-accountability language. This is directionally fine, but the pages should cross-link rather than duplicate the same thesis.
- Wallet action pages for Keplr and Galaxy are too thin to function as support docs.

## Recommended improvement sequence

### Phase 1: Correct product status and trust language

- Fix Swap Protocol and Market Module 2.0 status language.
- Add a status taxonomy page.
- Add visible status badges or frontmatter semantics for live, proposed, disabled, deprecated, and historical content.

### Phase 2: Establish review and source discipline

- Move critical pages from `reviewed: false` only after source checks.
- Add last-verified dates.
- Add source blocks for trust-sensitive claims.
- Create a public correction workflow.

### Phase 3: Build the L1 trust layer

- Add network parameters.
- Add release and upgrade history.
- Add governance-to-code traceability.
- Add security, incident response, and known-risk pages.
- Add IBC and endpoint registry pages.

### Phase 4: Deepen operators and builders

- Expand validator operations.
- Expand oracle operations.
- Expand module specs with Terra Classic-specific behavior.
- Add end-to-end developer tutorials.
- Add integration checklists for wallets, explorers, exchanges, and dapps.

### Phase 5: Prune, consolidate, and publish deliberately

- Consolidate placeholder pages.
- Remove or clearly label obsolete imported behavior.
- Promote reviewed pages to published status only when they are source-backed and current.
- Avoid presenting page count as completeness.

## Bottom line

The docs have a strong strategic spine, but they are not yet an authoritative L1 documentation system.

They should be treated as a high-quality draft corpus with several strong sections and several trust-sensitive gaps. The next work should focus less on adding more pages and more on status correctness, source verification, operational depth, and pruning the imported scaffolding that currently overstates completeness.

## Direct answers to the requested questions

### 1. Are the docs actually good?

Yes, but with an important qualification: they are good as a strategic draft, not yet good as a public authority layer.

The best pages show the right product instinct. They explain Terra Classic through mechanics, incentives, governance, staking, stable-asset design, and institutional trust rather than through price narratives. That matters because Terra Classic cannot credibly win by sounding like another speculative chain. It needs documentation that is factual, restrained, source-backed, and explicit about what is live versus proposed.

The best current qualities are:

- The tone is generally serious and risk-aware.
- The docs make a serious attempt to separate product mechanics from market speculation.
- Forex Protocol is framed with unusually good status discipline for a proposed stablecoin product.
- The Institutions section understands that institutional users need risk, governance, operations, and assurance context before they need slogans.
- The Staking and Governance sections move the reader from "how to click" toward "how incentives and responsibility work."
- The Strengths page is strategically valuable because it converts Terra Classic's survival into a credible chain-level asset without denying the damage of the 2022 collapse.

The weak side is that the corpus is uneven. Some areas feel like serious product documentation. Others feel like imported scaffolding, placeholder module pages, or old technical reference material waiting to be adapted.

The docs are not bad. They are unfinished.

The product risk is that unfinished docs can still look official. For Terra Classic, official-looking but under-verified content is dangerous because users, validators, developers, exchanges, and institutions will read it through the lens of historical trust damage.

### 2. Are the docs complete for an L1 blockchain of this size and history?

No.

The docs are not complete for a serious L1, and especially not for Terra Classic.

For a normal early-stage L1, "complete enough" might mean:

- basic network overview
- wallet guides
- staking guide
- developer quick start
- validator setup
- governance overview
- module reference
- links to explorers and endpoints

Terra Classic needs more than that because its documentation has to solve several trust problems at once:

- Explain what survived after the 2022 collapse.
- Explain what changed after the old Terra model failed.
- Explain what is live now.
- Explain what is proposed but not deployed.
- Explain which old mechanisms are disabled, deprecated, or historical.
- Explain which governance proposals were binding implementation work and which were signalling direction.
- Explain validator, oracle, burn, tax, liquidity, and stable-asset risk clearly.
- Give builders enough detail to integrate without relying on community memory.
- Give institutions enough evidence to decide whether Terra Classic is investable, integrable, monitorable, or too risky.

The current docs do not yet meet that bar.

They are complete enough to show the intended documentation direction. They are not complete enough to serve as the canonical source of truth for the chain.

### 3. Are we missing something?

Yes. The missing material is not cosmetic. It is core trust and operating infrastructure.

The most important missing category is a status layer. The docs need a precise, visible taxonomy for:

- live
- proposed
- governance-accepted
- in development
- testnet
- disabled
- deprecated
- historical
- removed
- unknown or unverified

Without that taxonomy, readers cannot safely interpret pages about Forex Protocol, Swap Protocol, Market Module 2.0, Treasury behavior, USTC mechanics, tax routing, or other historically sensitive modules.

The second missing category is evidence. Terra Classic docs should not only say what is true. They should show how the reader can verify it.

Missing evidence surfaces include:

- current chain queries
- proposal links
- code links
- release links
- validator-facing verification commands
- endpoint examples
- block heights where relevant
- last verified dates
- reviewer or source owner metadata

The third missing category is operator-grade documentation. The docs are still too light for people who actually keep an L1 running or integrate with it professionally.

Missing operator material includes:

- validator production setup
- sentry architecture
- key management
- hardware sizing
- monitoring
- alerting
- snapshots and state sync
- jail recovery
- double-sign prevention
- oracle feeder operations
- chain upgrade runbooks
- incident response
- endpoint management
- relayer operations

The fourth missing category is Terra Classic's own history as an operational system. The docs need a clean timeline and historical truth layer that explains post-collapse changes in a structured way.

Missing historical material includes:

- post-May-2022 chain timeline
- major governance proposals
- major chain upgrades
- burn tax evolution
- mint/burn disablement
- old market module behavior versus current/proposed behavior
- USTC status after the crash
- Oracle Pool and Community Pool changes
- validator set and governance participation evolution
- important incidents or stalled initiatives

The fifth missing category is developer depth. The current developer section has useful material, but not enough end-to-end paths.

Missing builder material includes:

- localnet setup
- testnet setup
- contract deploy
- contract query and execute examples
- wallet connection examples
- CosmES examples beyond basic snippets
- Terra.js or modern client recommendations if still relevant
- indexer/API guidance
- explorer integration
- error handling and transaction behavior
- production integration checklist
- module-specific integration notes for current Terra Classic behavior

The sixth missing category is public correction and governance of the docs themselves. If the docs become authoritative, they need a way to be corrected.

Missing docs governance material includes:

- how to report incorrect docs
- how source verification works
- how pages move from draft to published
- how disputed claims are handled
- who maintains critical sections
- what "reviewed" means
- how often live parameters are checked

### 4. Do we see errors or repetitions?

Yes.

The highest-risk likely error is Swap Protocol status language.

Forex Protocol says it is governance-accepted but not deployed. That is the right pattern. Swap Protocol does not follow that same discipline. Swap Protocol pages and `spec-market.md` use live-product phrasing, including language that Terra Classic swaps are live again through Swap Protocol and that native swaps are live.

That may be wrong or at minimum insufficiently verified.

If Swap Protocol / Market Module 2.0 is not deployed in production with documented chain version, wallet route, verification query, and user transaction path, then live language must be removed. It should be changed to proposed, governance-approved, in-development, testnet, or pending implementation depending on the evidence.

This matters because Terra Classic cannot afford stablecoin/swap documentation that overstates reality.

Other likely errors or content-quality problems:

- All pages are marked draft and unreviewed.
- Some pages describe historical mechanics without enough current-status separation.
- Imported module specs can imply Terra Classic-specific completeness when they mostly summarize upstream behavior.
- Some source metadata points to imported repositories or internal source records, but the visible page body does not provide enough verification.
- Thin module pages may be technically valid as placeholders but are weak as public docs.
- Wallet pages are too short to be relied on for user support.
- Some pages use product names before the product's status is clear.
- Some pages do not make enough distinction between protocol mechanics, governance intent, and production availability.

Repetition found:

- `spec-treasury.md` repeats the same note about seigniorage, stability fees, and zero effective rates many times.
- Forex and Swap pages repeat core product mechanics in multiple places. Some repetition is useful for risk communication, but canonical mechanics should be centralized.
- The same style of validator-accountability thesis appears across Governance and Staking pages.
- "Developer reference" appears as a duplicate title in multiple product sections.
- "Oracles and safety controls" appears as a duplicate title in multiple product sections.
- Repeated endpoint and code snippets appear across developer pages.
- Several imported module pages repeat "see upstream docs" style content without adding Terra Classic-specific substance.

The repetition is not catastrophic, but it reduces confidence. In trust-sensitive documentation, repetition should be intentional and controlled. If it feels mechanically duplicated, the reader starts to question whether anyone has reviewed the whole system.

### 5. How could we improve the docs?

The correct improvement strategy is not "write more pages first."

The correct strategy is:

1. Fix truth and status.
2. Add source verification.
3. Deepen critical operator and developer paths.
4. Consolidate weak pages.
5. Publish only reviewed content.

More pages without stronger status discipline would make the docs worse because it would increase the surface area of unverified claims.

## Detailed quality assessment by audience

### New users and holders

Current quality: medium.

The docs are useful for orientation. Users can understand the chain, staking, governance, and some proposed product directions.

Main weaknesses:

- Wallet guides are thin.
- Risk explanations are spread across pages.
- There is no clear "what is safe to do today" versus "what is proposed" layer.
- There is no simple current-state page for LUNC, USTC, staking, tax, burns, and swaps.

What users need:

- A plain-language "Current Terra Classic status" page.
- Wallet setup with screenshots or precise step-by-step flows.
- Transaction fee and tax explanation.
- Staking risk explanation.
- USTC status explanation.
- Clear warnings about proposed products.

### Validators

Current quality: low to medium.

The docs have full-node material and validator-facing concepts, but not enough production-grade operational guidance.

Main weaknesses:

- Limited monitoring guidance.
- Limited oracle feeder guidance.
- Limited upgrade coordination guidance.
- Limited key management and slashing prevention guidance.
- Limited incident response guidance.
- Limited validator accountability metrics.

What validators need:

- Production validator runbook.
- Oracle feeder runbook.
- Monitoring and alerting baseline.
- Upgrade checklist.
- Sentry and architecture guidance.
- Jail recovery checklist.
- Governance participation expectations.
- Validator public transparency checklist.

### Developers

Current quality: medium.

The developer quick start and CosmES material are useful, and the module spec structure is a good start. But the developer docs are not yet deep enough for serious application teams.

Main weaknesses:

- Module specs are uneven.
- End-to-end tutorials are limited.
- Testnet/localnet flows need more depth.
- API/indexer guidance is thin.
- Terra Classic-specific differences are not always clear.
- Proposed modules are mixed near current technical references.

What developers need:

- Clear "build your first Terra Classic app" path.
- Wallet integration guide.
- Contract deploy and interaction tutorial.
- Current module behavior reference.
- Current endpoint and chain registry page.
- Transaction behavior and error handling guide.
- Production integration checklist.

### Institutions, exchanges, custodians, and partners

Current quality: medium to strong in narrative, low to medium in evidence.

The Institutions section has the right strategic shape. It understands that professional counterparties need risk framing, operational transparency, and due diligence. But it does not yet provide enough hard evidence.

Main weaknesses:

- Needs current metrics and verification links.
- Needs stronger status taxonomy.
- Needs security/incident material.
- Needs chain upgrade and governance traceability.
- Needs liquidity/market-structure facts.

What institutions need:

- Due diligence index.
- Chain state report with current metrics.
- Governance-to-code tracker.
- Security and incident response page.
- Validator decentralization and participation report.
- Liquidity and market-structure overview.
- Known risks and mitigations.
- Stable-asset risk section that is very explicit about USTC and proposed Forex assets.

### Community and governance participants

Current quality: medium.

The Governance section is directionally good, especially where it discusses validator accountability and governance quality. But it needs more procedural and historical detail.

Main weaknesses:

- No complete proposal lifecycle explanation.
- No governance-to-code tracking.
- No participation quality dashboard.
- No decision record format.
- No clear difference between signaling proposals and implementation proposals.

What governance users need:

- Proposal lifecycle guide.
- Proposal quality checklist.
- Funding proposal checklist.
- Technical implementation proposal template.
- Governance-to-code tracker.
- Validator voting transparency references.
- Historical proposal index.

## Detailed assessment by section

### Start

Current role:

The start page gives a compact entry point into the docs.

Assessment:

Useful, but too light for the trust burden of the project. It should immediately orient readers around current status, proposed products, and how to verify claims.

Recommended changes:

- Add a short "What is live today" path.
- Add a short "What is proposed" path.
- Link to the future status matrix.
- Avoid any language that makes proposed products sound available.

### Learn

Current role:

The Learn section explains Terra Classic, protocol context, wallets, staking, governance, strengths, and basic user concepts.

Assessment:

This is one of the better strategic sections, but uneven. The Strengths page is much more mature than several beginner pages.

Recommended changes:

- Add a current-state page for LUNC and USTC.
- Add a post-collapse history page.
- Add a "What Terra Classic is not" page to reduce repeg and hype confusion.
- Expand wallet pages into real support-quality flows.
- Add a clear burns/tax/supply explainer.

### Staking Protocol

Current role:

Explains staking, delegation, validators, rewards, risks, and responsibilities.

Assessment:

Good user-facing structure. It explains staking as a security and governance mechanism rather than only as yield.

Recommended changes:

- Add current staking parameters with live query commands.
- Add validator commission and redelegation details.
- Add slashing/jailing details.
- Add validator due diligence checklist.
- Add more explicit separation between user staking and validator operations.

### Governance

Current role:

Explains governance process, proposals, validator accountability, and participation.

Assessment:

Directionally strong, especially in the way it treats governance quality as an execution risk. Needs more procedural and evidentiary depth.

Recommended changes:

- Add governance proposal lifecycle.
- Add proposal templates.
- Add signaling versus implementation distinction.
- Add governance-to-code tracker.
- Add historical proposal index.
- Add validator participation and non-participation references.

### Forex Protocol

Current role:

Explains proposed Collateralized Stablecoin Module / Forex Protocol, EUTC, collateral, fees, buybacks, liquidity, risks, and governance status.

Assessment:

One of the strongest sections because it has the right status discipline. It says the product is governance-accepted but not deployed, which is exactly the kind of honesty Terra Classic needs.

Recommended changes:

- Keep the proposed/not-live framing visible on every page.
- Add implementation status checklist.
- Add parameter table for proposed values versus final values.
- Add risk register.
- Add testnet/audit/launch readiness checklist when development begins.
- Add stronger distinction between EUTC as proposed first asset and any future stable assets.

### Swap Protocol

Current role:

Explains Market Module 2.0 / Swap Protocol for native LUNC and USTC swaps.

Assessment:

Conceptually strong but status-risky.

The product framing is good: no-mint swaps, finite pools, live oracle pricing, hard safety controls, and no repeg promise. That is the right strategic framing.

The problem is status language. It reads as live or available in places where it should likely read as proposed, governance-approved, or pending implementation unless deployment evidence exists.

Recommended changes:

- Add a governance and status page like Forex has.
- Replace live language with verified status language.
- Add production-readiness checklist.
- Add route availability verification.
- Add current module status query.
- Add warning that old market module behavior is historical unless re-enabled through implemented code.

### Develop

Current role:

Developer quick starts, contract guides, CosmES, module specs, endpoints, testnet, and tooling.

Assessment:

The broad structure is useful. The quality is uneven.

Some pages are useful and practical. Many module spec pages are short placeholders or imported summaries. This creates the impression of a complete technical reference while leaving serious integration questions unanswered.

Recommended changes:

- Split current Terra Classic behavior from upstream Cosmos/Terra reference.
- Add live parameters and query examples to module specs.
- Add end-to-end tutorials.
- Add production integration checklist.
- Add deprecation/historical banners.
- Consolidate thin placeholder specs until they are worth standalone pages.

### Full Node

Current role:

Node setup and validator/testnet guides.

Assessment:

Useful baseline, not enough for production operators.

Recommended changes:

- Add role-specific runbooks: full node, validator, sentry, oracle feeder, relayer.
- Add monitoring and alerting.
- Add upgrade runbooks.
- Add snapshot and state sync guidance.
- Add backup, key management, and disaster recovery.
- Add troubleshooting decision trees.

### Institutions

Current role:

Explains Terra Classic for institutional due diligence and partner evaluation.

Assessment:

Strategically strong. This section is important because it forces the docs to speak in the language of risk, governance, operations, and trust.

Recommended changes:

- Add evidence tables.
- Add current metrics.
- Add source links and last verified dates.
- Add security/incident sections.
- Add validator concentration and governance participation details.
- Add liquidity and market structure overview.

### Appendices

Current role:

Glossary.

Assessment:

Useful but should become a stronger cross-reference layer.

Recommended changes:

- Add Terra Classic-specific definitions.
- Separate historical terms from current terms.
- Add stablecoin, oracle, tax, burn, staking, and governance terminology.
- Link definitions back to canonical pages.

## Critical status taxonomy recommendation

The docs need a standard status vocabulary. Suggested taxonomy:

| Status | Meaning | Example use |
| --- | --- | --- |
| Live | Available on Terra Classic mainnet today and verifiable through chain state or user flow. | Staking, governance voting, existing transfers. |
| Governance-accepted | Passed by governance as a direction or mandate, but not necessarily deployed. | Forex Protocol based on current docs. |
| In development | Implementation work is active but not production live. | Future module or tool work. |
| Testnet | Available on Rebel-2 or another documented testnet, not mainnet. | Feature testing or validator rehearsal. |
| Proposed | Described in proposal, discussion, or design material but not accepted or deployed. | Early design concepts. |
| Disabled | Code or module path exists but is not available to users. | Historical market behavior after crash if still disabled. |
| Deprecated | Old behavior should not be used for new integration. | Legacy docs or APIs. |
| Historical | Relevant for understanding the past, not current behavior. | Old algorithmic mint/burn mechanics. |
| Unknown | Not yet verified. | Any claim missing source evidence. |

Every page that touches products, modules, governance, stable assets, swaps, taxes, burns, or user funds should carry one of these statuses.

## Recommended metadata model

Current frontmatter has a good base but should be strengthened.

Suggested fields:

```yaml
status: draft | source-checked | technically-reviewed | published
productStatus: live | governance-accepted | in-development | testnet | proposed | disabled | deprecated | historical | unknown
reviewed: true | false
lastVerified: "YYYY-MM-DD"
verifiedAgainst:
  - type: governance
    url: "..."
  - type: code
    url: "..."
  - type: chain-query
    command: "..."
owner: "docs"
riskLevel: low | medium | high
```

The important distinction is between editorial review and product status.

A page can be well written and still describe a proposed product. A page can also describe a live feature but remain editorially unreviewed.

## Recommended source block pattern

For trust-sensitive pages, add a visible block near the end:

```md
## Source and verification

Last verified: YYYY-MM-DD

This page was checked against:

- Governance proposal: [title](url)
- Code/release: [title](url)
- Chain query: `command`
- Related docs: [title](url)

If this page conflicts with live chain behavior, treat live chain behavior and accepted governance implementation records as authoritative and report the issue through the docs correction process.
```

This would materially increase trust.

## Proposed remediation roadmap

### Phase 0: Stop trust leakage

Goal:

Prevent public docs from overstating live functionality.

Actions:

- Audit every use of "live", "available", "enabled", "supports", and "can" in product/module pages.
- Correct Swap Protocol and Market Module 2.0 status wording.
- Add a temporary global draft/status warning if the site is public before review is complete.
- Create a list of status-sensitive pages.

Exit criteria:

- No proposed product is described as live without proof.
- All trust-sensitive pages have explicit status language.

### Phase 1: Establish source discipline

Goal:

Make claims verifiable.

Actions:

- Add last-verified metadata.
- Add visible source blocks to critical pages.
- Identify pages requiring technical review.
- Create a docs correction workflow.
- Define what `reviewed: true` means.

Exit criteria:

- Critical pages have source evidence.
- Review status becomes meaningful.

### Phase 2: Build current-state authority

Goal:

Make the docs useful for people who need the actual current chain state.

Actions:

- Add current chain parameters page.
- Add LUNC/USTC status page.
- Add burns/tax/supply page.
- Add upgrade history.
- Add governance-to-code tracker.
- Add endpoint and chain registry page.

Exit criteria:

- A reader can understand what Terra Classic is today without relying on Discord, X, or community memory.

### Phase 3: Build operator-grade documentation

Goal:

Support validators, relayers, developers, and integrators.

Actions:

- Expand validator production runbooks.
- Add oracle feeder operations.
- Add monitoring and alerting.
- Add chain upgrade runbooks.
- Add developer integration tutorials.
- Add module-specific behavior with live queries.

Exit criteria:

- A serious operator can use the docs as a working reference, not only as orientation.

### Phase 4: Institutional-grade documentation

Goal:

Make Terra Classic legible to exchanges, custodians, funds, researchers, and partners.

Actions:

- Add due diligence index.
- Add risk register.
- Add security and incident response pages.
- Add decentralization and governance participation reporting.
- Add liquidity and market-structure overview.
- Add known limitations and open work.

Exit criteria:

- An institutional reviewer can evaluate Terra Classic without relying on scattered community sources.

### Phase 5: Consolidate and publish

Goal:

Reduce noise and publish only what earns trust.

Actions:

- Consolidate placeholder pages.
- Rewrite imported module specs.
- Remove duplicate content where cross-links are better.
- Promote pages from draft to published in batches.
- Keep a public changelog of documentation updates.

Exit criteria:

- Page count reflects useful authority, not scaffolding.

## Recommended priority list

### P0 - Must fix before treating docs as public authority

- Swap Protocol / Market Module 2.0 status language.
- All live/proposed/disabled/historical claims.
- Draft/unreviewed status model.
- Treasury repeated warnings.
- Thin module pages that imply completeness.

### P1 - Needed for credible public launch

- Status matrix.
- Current chain state page.
- LUNC/USTC status page.
- Burn/tax/supply explainer.
- Governance-to-code tracker.
- Release and upgrade history.
- Source and verification blocks.

### P2 - Needed for serious operators and builders

- Validator production runbook.
- Oracle feeder runbook.
- Monitoring and incident response.
- Developer end-to-end tutorials.
- Endpoint registry.
- IBC/relayer docs.
- Module-specific live query examples.

### P3 - Needed for institutional credibility

- Security and assurance section.
- Risk register.
- Liquidity and market-structure overview.
- Validator decentralization report.
- Governance participation report.
- Due diligence index.

## Suggested new pages

### Learn

- `learn/current-status.md`
- `learn/lunc-and-ustc.md`
- `learn/burns-tax-and-supply.md`
- `learn/history-after-the-collapse.md`
- `learn/what-terra-classic-is-not.md`

### Governance

- `governance/proposal-lifecycle.md`
- `governance/signaling-vs-implementation.md`
- `governance/governance-to-code.md`
- `governance/proposal-quality-checklist.md`
- `governance/historical-proposals.md`

### Staking and validators

- `staking-protocol/validator-due-diligence.md`
- `full-node/validator-production-runbook.md`
- `full-node/oracle-feeder-operations.md`
- `full-node/monitoring-and-alerting.md`
- `full-node/upgrade-runbook.md`
- `full-node/jail-recovery.md`

### Developers

- `develop/localnet.md`
- `develop/testnet-deployment.md`
- `develop/deploy-a-contract.md`
- `develop/wallet-integration.md`
- `develop/api-and-indexing.md`
- `develop/transaction-errors.md`
- `develop/production-integration-checklist.md`

### Protocol and modules

- `learn/protocol-status-matrix.md`
- `develop/network-parameters.md`
- `develop/module-status.md`
- `develop/endpoint-registry.md`
- `develop/ibc-and-relayers.md`

### Swap Protocol

- `swap-protocol/governance-and-status.md`
- `swap-protocol/implementation-status.md`
- `swap-protocol/production-readiness.md`

### Forex Protocol

- `forex-protocol/implementation-status.md`
- `forex-protocol/parameter-reference.md`
- `forex-protocol/launch-readiness.md`

### Institutions

- `institutions/due-diligence-index.md`
- `institutions/risk-register.md`
- `institutions/security-and-assurance.md`
- `institutions/liquidity-and-market-structure.md`
- `institutions/governance-and-validator-quality.md`

## Content rules recommended for future writing

1. Never describe a feature as live unless it is verifiably live.
2. Separate governance approval from production deployment.
3. Separate historical Terra behavior from current Terra Classic behavior.
4. Separate protocol mechanics from investment outcomes.
5. Avoid repeg-adjacent implication unless the mechanism actually creates a redemption right.
6. Every stablecoin, swap, burn, tax, or yield claim should have source evidence.
7. Every user-action page should state the risk before the action.
8. Every developer integration page should include verification commands or endpoint examples.
9. Every validator page should include operational failure modes.
10. Every institution-facing page should include current-state evidence, not only narrative.

## Product positioning guidance

The docs should present Terra Classic in the greatest possible light, but that does not mean making the chain sound safer, more finished, or more liquid than it is.

For Terra Classic, the strongest positioning is:

- survived catastrophic failure
- still operating as an independent L1
- governance and validator set remain active
- community has persistent economic and cultural commitment
- chain has real historical brand recognition
- Cosmos-based architecture creates rebuild paths
- low-cost execution can support experimentation
- burn, staking, governance, and proposed stable-asset products create a recovery narrative
- serious documentation can become a trust-rebuilding asset

The weakest positioning would be:

- implying USTC repeg certainty
- implying proposed modules are live
- implying liquidity depth that does not exist
- implying institutional readiness without evidence
- hiding governance or validator weaknesses
- using price appreciation as a product argument

The docs should choose credible optimism over promotional optimism.

Credible optimism says:

Terra Classic has survived, learned, constrained old failure modes, and can rebuild useful L1 products if governance, engineering, validators, and documentation become more disciplined.

Promotional optimism says:

Everything is back, the products are live, the repeg is coming, and users should trust the chain because the community believes.

The first position can compound trust. The second position destroys it.

## Final CPO judgment

The docs are a strong start, but not yet a finished product.

They have a clear strategic spine and several strong sections. The direction is right. The tone is mostly right. The ambition is right.

The execution gap is source-backed authority.

Before writing significantly more narrative content, the project should fix product status, review state, live-chain evidence, and trust-sensitive module descriptions. After that, expanding developer, validator, institutional, and current-state documentation will create much more leverage.

The goal should not be "more docs."

The goal should be:

Terra Classic Docs becomes the most reliable public truth layer for Terra Classic: clear enough for users, deep enough for builders, operational enough for validators, and evidence-backed enough for serious counterparties.
