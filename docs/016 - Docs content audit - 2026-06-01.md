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

Important scope correction:

The docs should not become a live analytics, explorer, validator dashboard, chain-monitoring, liquidity-screening, or market-data website. Terra Classic already has other ecosystem sites for live data. The docs should explain concepts, status, product boundaries, historical context, and verification paths. Where live data matters, the docs should point readers to the correct external source or query method rather than trying to reproduce analytics inside the documentation site.

Missing or underdeveloped documentation areas, within that narrower scope:

- A lightweight product/status language for distinguishing live, proposed, governance-accepted, disabled, deprecated, and historical features.
- Clear source visibility for trust-sensitive claims, especially around Swap Protocol, Forex Protocol, old market-module behavior, USTC, burns, tax handling, and Treasury behavior.
- A concise post-crash history narrative that explains what changed after May 2022 without trying to become a full data archive.
- A governance/status explanation for proposed products, especially Swap Protocol / Market Module 2.0.
- A reader-facing explanation of LUNC, USTC, burns, tax, Oracle Pool, Community Pool, and old mint/burn behavior at the conceptual level.
- A correction and review workflow for public docs.
- Stronger wallet/user support pages where a reader needs practical guidance.
- More visible "source and verification" blocks for pages that can affect user trust, funds, integrations, or public claims.

## Content issues and scope decisions

Based on product-owner feedback, the current work should focus on the issues that directly affect documentation trust and clarity now:

- Swap Protocol status language is inconsistent with source discipline.
- Every page is still draft and unreviewed.
- Source visibility is weaker than the risk profile requires.
- Treasury spec has excessive repeated warnings.
- Repetition and naming issues should be cleaned.

The imported module specs are not a current cleanup priority because they originate from respected Terra Classic L1 developer work. They should be preserved unless a specific factual conflict or reader-confusion issue is found.

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

### 3. Imported module specs should be preserved and reviewed later, not treated as a current blocker

The `develop/module-specifications` section includes material created by a respected Terra Classic L1 developer. That provenance matters. This audit should not frame those pages as a current problem to fix aggressively.

The better position is:

- keep the module specs intact as respected technical source material
- do not prioritize rewriting them in the current phase
- only revisit them later if specific pages create reader confusion, contain outdated status language, or need clearer source/context notes
- avoid turning this into a broad technical rewrite before the more urgent trust and status issues are fixed

Current recommendation:

- Defer module-spec restructuring.
- Do not treat module specs as a launch blocker.
- Preserve the L1-developer source unless a specific factual conflict is found.
- If needed later, add light contextual notes rather than rewriting the section wholesale.

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
- Add lightweight status wording for live, proposed, governance-accepted, disabled, deprecated, and historical content.
- Keep this as documentation clarity, not a live status dashboard.

### Phase 2: Establish review and source discipline

- Move critical pages from `reviewed: false` only after source checks.
- Add last-verified dates.
- Add source blocks for trust-sensitive claims.
- Create a public correction workflow.

### Phase 3: Clean high-friction content quality issues

- Reduce repeated Treasury warnings.
- Clean repeated product wording across Forex and Swap.
- Qualify duplicate generic titles such as "Developer reference" and "Oracles and safety controls."
- Improve wallet pages where they are too thin for user support.

### Phase 4: Add only documentation-native historical and conceptual context

- Add a concise post-crash history page.
- Add conceptual LUNC/USTC and burn/tax explanation.
- Add governance/status pages for proposed products.
- Link out to external live-data resources instead of duplicating them.

### Phase 5: Publish deliberately

- Promote reviewed pages to published status only when they are source-backed and current.
- Keep module-spec restructuring out of scope unless a concrete factual or reader-confusion issue is identified.

## Bottom line

The docs have a strong strategic spine, but they are not yet a fully reviewed and source-disciplined L1 documentation system.

They should be treated as a high-quality draft corpus with several strong sections and several trust-sensitive gaps. The next work should focus less on adding more pages and more on status correctness, source verification, Treasury cleanup, repetition/naming cleanup, and clearer conceptual context. Imported module specs should be preserved unless a specific factual issue is found.

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

The weak side is that the corpus is uneven. Some areas feel like serious product documentation. Others feel like older reference material or imported technical material that may need contextual notes later, but should not be treated as the current priority.

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

Terra Classic needs more than that because its documentation has to solve several trust problems at once, while staying clearly within the role of documentation:

- Explain what survived after the 2022 collapse.
- Explain what changed after the old Terra model failed.
- Explain what is live now.
- Explain what is proposed but not deployed.
- Explain which old mechanisms are disabled, deprecated, or historical.
- Explain which governance proposals are implementation work and which are signalling direction, at a conceptual/status level.
- Explain validator, oracle, burn, tax, and stable-asset risk clearly enough for readers to understand the system.
- Give builders enough detail to integrate without relying on community memory.
- Link to external analytics, explorers, dashboards, and ecosystem tools for live values rather than duplicating that surface inside the docs.

The current docs do not yet meet that bar.

They are complete enough to show the intended documentation direction. They are not complete enough to serve as the canonical source of truth for the chain.

### 3. Are we missing something?

Yes. The missing material is not cosmetic. It is core trust and editorial infrastructure.

Important scope boundary:

The docs should not become a blockchain analytics or live-data product. They should not try to compete with explorers, staking dashboards, validator dashboards, burn trackers, liquidity dashboards, or other Terra Classic ecosystem data sites. The docs should explain what matters, define status correctly, and point readers to external data sources when live data is needed.

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

- proposal links
- code links
- release links
- last verified dates
- reviewer or source owner metadata
- external data/resource links where live values are better handled outside the docs

The third missing category is Terra Classic's own history as a protocol and ecosystem. The docs need a clean narrative layer that explains post-collapse changes in a structured way, without becoming a full historical database.

Missing historical material includes:

- post-May-2022 chain timeline
- major governance proposals
- major chain upgrades
- burn tax evolution
- mint/burn disablement
- old market module behavior versus current/proposed behavior
- USTC status after the crash
- Oracle Pool and Community Pool changes
- important incidents or stalled initiatives

The fourth missing category is practical reader guidance. The current docs have useful material, but some user-action pages are too thin.

Missing practical material includes:

- wallet connection examples
- wallet send/stake flows with clearer caveats
- "what is live versus proposed" explanation at decision points
- conceptual LUNC/USTC, burn, tax, and old market-module explainers
- links to the right external tools when users need live chain data

The fifth missing category is public correction and governance of the docs themselves. If the docs become authoritative, they need a way to be corrected.

Missing docs governance material includes:

- how to report incorrect docs
- how source verification works
- how pages move from draft to published
- how disputed claims are handled
- who maintains critical sections
- what "reviewed" means
- when external data sources should be used instead of embedding data in docs

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
- Some source metadata points to imported repositories or internal source records, but the visible page body does not provide enough verification.
- Wallet pages are too short to be relied on for user support.
- Some pages use product names before the product's status is clear.
- Some pages do not make enough distinction between protocol mechanics, governance intent, and production availability.

Module-spec note:

The imported module specs should not be treated as a current problem area in the same way as Swap status, draft state, source visibility, Treasury repetition, or naming issues. They come from respected Terra Classic L1 developer work and should be preserved. If they are reviewed later, the review should be specific and factual, not a broad rewrite driven by style preference.

Repetition found:

- `spec-treasury.md` repeats the same note about seigniorage, stability fees, and zero effective rates many times.
- Forex and Swap pages repeat core product mechanics in multiple places. Some repetition is useful for risk communication, but canonical mechanics should be centralized.
- The same style of validator-accountability thesis appears across Governance and Staking pages.
- "Developer reference" appears as a duplicate title in multiple product sections.
- "Oracles and safety controls" appears as a duplicate title in multiple product sections.
- Repeated endpoint and code snippets appear across developer pages.

The repetition is not catastrophic, but it reduces confidence. In trust-sensitive documentation, repetition should be intentional and controlled. If it feels mechanically duplicated, the reader starts to question whether anyone has reviewed the whole system.

### 5. How could we improve the docs?

The correct improvement strategy is not "write more pages first."

The correct strategy is:

1. Fix truth and status.
2. Add source verification.
3. Clean accepted content-quality issues.
4. Improve practical user guidance where pages are thin.
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
- There is no simple conceptual page explaining LUNC, USTC, burns, tax, staking, and proposed swaps without relying on external community context.

What users need:

- A plain-language "What Terra Classic supports today" page, focused on concepts and status rather than live data.
- Wallet setup with screenshots or precise step-by-step flows.
- Transaction fee and tax explanation.
- Staking risk explanation.
- USTC status explanation.
- Clear warnings about proposed products.
- Links to external explorers, dashboards, and ecosystem resources when users need live figures.

### Validators

Current quality: medium for docs-site scope.

The docs have full-node material and validator-facing concepts. A full validator operations manual would be useful someday, but it should not become the immediate direction of this docs audit. This site should avoid trying to become a live validator dashboard or infrastructure monitoring product.

Main weaknesses:

- Validator-facing pages should clearly distinguish general educational guidance from production operator responsibility.
- Any validator status, performance, uptime, voting, or concentration data should be linked out to existing ecosystem tools rather than reproduced here.
- Governance accountability language should avoid repetition between staking and governance pages.

What validators need:

- Clear expectations around validator responsibility and governance participation.
- Links to appropriate external operational resources where live data or tooling is required.
- A concise explanation of how validator behavior affects users, staking, governance, and chain credibility.

### Developers

Current quality: medium.

The developer quick start and CosmES material are useful, and the module spec structure is a good start. The imported module specs should be preserved because they originate from respected Terra Classic L1 development work.

Main weaknesses:

- End-to-end tutorials are limited.
- Terra Classic-specific differences are not always clear.
- Proposed modules are mixed near current technical references.

What developers need:

- Clear "build your first Terra Classic app" path.
- Wallet integration guide.
- Contract deploy and interaction tutorial.
- Transaction behavior and error handling guide.
- Clear labels when a page is reference material, proposed product material, or current user-facing functionality.
- External links for live endpoints, explorers, and chain-data tools where those resources already exist.

### Institutions, exchanges, custodians, and partners

Current quality: medium to strong in narrative, low to medium in evidence.

The Institutions section has the right strategic shape. It understands that professional counterparties need risk framing, operational transparency, and due diligence. The next improvement should be source discipline and claim clarity, not turning the docs into an institutional analytics terminal.

Main weaknesses:

- Needs stronger status language for live versus proposed products.
- Needs better source visibility for trust-sensitive claims.
- Needs clearer references to external ecosystem resources for live metrics, liquidity, validator, governance, and explorer data.
- Needs stablecoin and swap risk language to stay precise and non-promotional.

What institutions need:

- Due diligence index.
- Source-backed product/status explanations.
- Explicit links to external live-data resources rather than embedded live-data coverage.
- Known risks and mitigations.
- Stable-asset risk section that is very explicit about USTC and proposed Forex assets.

### Community and governance participants

Current quality: medium.

The Governance section is directionally good, especially where it discusses validator accountability and governance quality. But it needs more procedural and historical detail.

Main weaknesses:

- No complete proposal lifecycle explanation.
- No decision record format.
- No clear difference between signaling proposals and implementation proposals.

What governance users need:

- Proposal lifecycle guide.
- Proposal quality checklist.
- Funding proposal checklist.
- Technical implementation proposal template.
- Clear distinction between governance approval, implementation, testing, and production availability.
- Links to external governance and validator voting resources where live data is required.
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
- Link to external live-data resources where appropriate.
- Avoid any language that makes proposed products sound available.

### Learn

Current role:

The Learn section explains Terra Classic, protocol context, wallets, staking, governance, strengths, and basic user concepts.

Assessment:

This is one of the better strategic sections, but uneven. The Strengths page is much more mature than several beginner pages.

Recommended changes:

- Add a conceptual status page for LUNC and USTC.
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

- Add validator commission and redelegation details.
- Add slashing/jailing details.
- Add validator due diligence checklist.
- Add more explicit separation between user staking and validator operations.
- Link out to external staking dashboards or explorers for live validator and staking data.

### Governance

Current role:

Explains governance process, proposals, validator accountability, and participation.

Assessment:

Directionally strong, especially in the way it treats governance quality as an execution risk. Needs more procedural and evidentiary depth.

Recommended changes:

- Add governance proposal lifecycle.
- Add proposal templates.
- Add signaling versus implementation distinction.
- Add historical proposal index.
- Link out to external governance tools for live vote and participation data.

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
- Add audit/launch readiness checklist when development begins.
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
- Add warning that old market module behavior is historical unless re-enabled through implemented code.
- Link to external resources if readers need live route, market, or chain-state data.

### Develop

Current role:

Developer quick starts, contract guides, CosmES, module specs, endpoints, testnet, and tooling.

Assessment:

The broad structure is useful.

The module specs should be treated as respected technical source material, not as a current cleanup target. The higher-priority developer-doc issue is clarity around current versus proposed product behavior.

Recommended changes:

- Add end-to-end tutorials where they directly help users/builders.
- Add deprecation/historical banners.
- Preserve module specs unless a specific factual conflict is found.
- Link to external endpoints/tools where live chain data is required.

### Full Node

Current role:

Node setup and validator/testnet guides.

Assessment:

Useful baseline. It should remain docs, not become an operations dashboard.

Recommended changes:

- Clarify which pages are educational setup guides versus production responsibility.
- Link to external resources for live infrastructure status or validator data.
- Add concise troubleshooting notes where users commonly fail, without expanding the docs into a full DevOps manual right now.

### Institutions

Current role:

Explains Terra Classic for institutional due diligence and partner evaluation.

Assessment:

Strategically strong. This section is important because it forces the docs to speak in the language of risk, governance, operations, and trust.

Recommended changes:

- Add evidence tables.
- Add source links and last verified dates.
- Link to external resources for current metrics, validator data, governance data, and market/liquidity data.
- Keep risk framing conceptual and source-backed.

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
  - type: external-resource
    url: "..."
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
- External live-data or explorer resource, where relevant: [title](url)
- Related docs: [title](url)

If this page conflicts with live chain behavior, treat live chain behavior and accepted governance implementation records as authoritative and report the issue through the docs correction process. The docs should point to live-data tools where needed rather than trying to replace them.
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

### Phase 2: Build documentation-native context

Goal:

Make the docs useful for people who need to understand Terra Classic's current product and protocol context, without turning the site into a live data product.

Actions:

- Add conceptual LUNC/USTC status page.
- Add burns/tax/supply page.
- Add concise post-crash history page.
- Add proposal lifecycle and signaling-versus-implementation explanation.
- Add links to external explorers, governance tools, dashboards, and data resources where live values are needed.

Exit criteria:

- A reader can understand the chain's major concepts, history, and product boundaries without relying on Discord, X, or community memory.

### Phase 3: Clean accepted content-quality issues

Goal:

Fix the issues that are agreed to matter now.

Actions:

- Reduce repeated Treasury warnings.
- Clean duplicate naming across product sections.
- Reduce repeated product mechanics where cross-linking is cleaner.
- Improve thin wallet/user-action pages.
- Preserve imported module specs unless a specific factual issue is identified.

Exit criteria:

- The docs feel reviewed, deliberate, and coherent rather than mechanically assembled.

### Phase 4: Strengthen institutional readability without becoming analytics

Goal:

Make Terra Classic legible to exchanges, custodians, funds, researchers, and partners.

Actions:

- Add due diligence index.
- Add source-backed risk explanations.
- Add explicit status language for proposed stablecoin and swap products.
- Link to external data resources for live metrics, liquidity, validator, explorer, and governance data.
- Add known limitations and open work.

Exit criteria:

- An institutional reviewer can understand Terra Classic's documentation narrative and know where to verify live facts.

### Phase 5: Publish deliberately

Goal:

Publish only what earns trust.

Actions:

- Promote pages from draft to published in batches.
- Keep a public changelog of documentation updates.
- Defer broad module-spec restructuring.

Exit criteria:

- Published pages have correct status language, visible sources where needed, and no avoidable repetition.

## Recommended priority list

### P0 - Must fix before treating docs as public authority

- Swap Protocol / Market Module 2.0 status language.
- All live/proposed/disabled/historical claims.
- Draft/unreviewed status model.
- Treasury repeated warnings.

### P1 - Needed for credible public launch

- Lightweight status language for live/proposed/disabled/historical content.
- Conceptual LUNC/USTC status page.
- Burn/tax/supply explainer.
- Proposal lifecycle and signaling-versus-implementation explanation.
- Post-crash history overview.
- Source and verification blocks.

### P2 - Useful improvements after P0/P1

- Improved wallet/user-action pages.
- Product-qualified page titles.
- Reduced repeated product mechanics.
- External resource links for explorers, dashboards, governance tools, and live data.
- Developer end-to-end tutorials where they fit the docs scope.

### P3 - Deferred or only if concrete need appears

- Broad imported module-spec restructuring.
- Full validator operations manual.
- Live metrics or analytics pages.
- Liquidity, validator, or governance dashboards.

## Suggested new pages

### Learn

- `learn/what-terra-classic-supports-today.md`
- `learn/lunc-and-ustc.md`
- `learn/burns-tax-and-supply.md`
- `learn/history-after-the-collapse.md`
- `learn/what-terra-classic-is-not.md`

### Governance

- `governance/proposal-lifecycle.md`
- `governance/signaling-vs-implementation.md`
- `governance/proposal-quality-checklist.md`
- `governance/historical-proposals.md`

### Staking and validators

- `staking-protocol/validator-due-diligence.md`

### Developers

- `develop/deploy-a-contract.md`
- `develop/wallet-integration.md`
- `develop/transaction-errors.md`

### Protocol and modules

- `learn/product-and-protocol-status.md`
- `develop/current-vs-proposed-behavior.md`

### Swap Protocol

- `swap-protocol/governance-and-status.md`
- `swap-protocol/implementation-status.md`

### Forex Protocol

- `forex-protocol/implementation-status.md`
- `forex-protocol/launch-readiness.md`

### Institutions

- `institutions/due-diligence-index.md`
- `institutions/risk-register.md`
- `institutions/source-and-verification-guide.md`

## Content rules recommended for future writing

1. Never describe a feature as live unless it is verifiably live.
2. Separate governance approval from production deployment.
3. Separate historical Terra behavior from current Terra Classic behavior.
4. Separate protocol mechanics from investment outcomes.
5. Avoid repeg-adjacent implication unless the mechanism actually creates a redemption right.
6. Every stablecoin, swap, burn, tax, or yield claim should have source evidence.
7. Every user-action page should state the risk before the action.
8. Link out to external live-data products instead of recreating analytics inside docs.
9. Preserve respected L1 developer source material unless a specific factual issue is found.
10. Every institution-facing page should make evidence paths visible, not just provide narrative.

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
