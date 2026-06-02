# Docs Content Audit

Created: 2026-06-02

## Scope

This audit reviews the current Terra Classic Docs content corpus in `content/docs`.

It is not a visual audit of the website shell. It is a product, content, completeness, factual-risk, and documentation-architecture audit.

The review considered:

- the original project brief
- `DESIGN.md`
- `designsystem.html` and the custom docs shell context
- current docs navigation and markdown rendering behavior
- all markdown pages in `content/docs`
- prior internal docs process notes, especially the earlier content audit and remediation pass
- the `- KNOWLEDGE` corpus already analyzed for Terra Classic history, state-of-chain, governance, product opportunities, Classic Chaos research, Swap Protocol, and Forex Protocol
- current validation scripts
- spot-checks against current public sources where freshness matters, especially Terra Classic Core releases and Market Module 2.0 source material

## Current project state

Terra Classic Docs is a custom GitHub Pages documentation product for `docs.terra-classic.money`.

The project is in a content-hardening phase. The docs shell, navigation generation, markdown rendering, source metadata, and validation pipeline exist. The next bottleneck is not the React/docs system. The bottleneck is content trust: factual freshness, source visibility, review discipline, operator completeness, and clear separation between live chain behavior and proposed product direction.

Current constraints that apply:

- GitHub Pages only.
- Base path `/`.
- Docs pages must be markdown-driven from `content/docs`.
- No Docusaurus, VitePress, Astro Starlight, Mintlify, Nextra, or external docs framework.
- Terra Classic must be presented strongly but honestly.
- Proposed products must not be written as live products.
- Docs must not become a second marketing website.
- For Terra Classic, source discipline is not decoration. It is part of the trust product.

## Validation checked

Command run:

```bash
npm run docs:check
```

Result:

- Docs manifest generated for 131 pages.
- Docs validation passed for 131 pages.

Important limitation:

`docs:check` validates metadata, generated manifest, internal links as currently implemented, duplicate anchors, and local image references. It does not validate factual accuracy, current software version, product status, governance truth, source credibility, or content completeness.

## Inventory

Current corpus:

| Metric | Result |
| --- | ---: |
| Total docs pages | 131 |
| Approx. total words | 58,708 |
| Median page length | 367 words |
| Shortest page | 17 words |
| Longest page | 2,290 words |
| Pages marked `status: reviewed` | 25 |
| Pages marked `status: draft` | 106 |
| Pages marked `reviewed: true` | 25 |
| Pages marked `reviewed: false` | 106 |

Section distribution:

| Section | Pages | Approx. words |
| --- | ---: | ---: |
| develop | 47 | 17,439 |
| learn | 24 | 7,275 |
| swap-protocol | 11 | 6,496 |
| forex-protocol | 10 | 7,178 |
| full-node | 10 | 2,843 |
| institutions | 10 | 7,185 |
| governance | 8 | 3,793 |
| staking-protocol | 8 | 4,927 |
| appendices | 2 | 1,325 |
| start | 1 | 247 |

Source provenance:

- 73 pages are imported from the Terra Classic Docs repository source dated 2026-05-27.
- 34 pages are source-dated 2026-06-01.
- 12 pages are tied to Market Module 2.0 source material dated 2025-06-25.
- 11 pages are tied to the Forex Protocol / CSM source dated 2025-12-07.
- 1 page is source-dated 2026-05-29.

## Executive verdict

The docs are good as a serious strategic draft.

They are not yet good enough as a complete, public, authority-grade documentation layer for Terra Classic.

That distinction matters.

The strongest parts of the corpus show unusually good judgment for a crypto docs project:

- it avoids pure price-pump framing
- it separates proposed products from live behavior better than most community-chain materials
- it treats Forex Protocol and Swap Protocol with meaningful status discipline
- it explains governance, staking, institutional risk, and user responsibility in plain language
- it acknowledges Terra Classic's post-2022 reality instead of pretending history did not happen

The weak parts are still serious:

- most pages remain draft/unreviewed
- imported developer and node pages are uneven and partly stale
- several full-node and developer pages contain old `/docs/...` links and wrong paths
- node/operator docs hard-code v3.6.0-era examples while public Terra Classic Core releases now show v4.0.0 as latest and v4.0.1 as a pre-release
- many module-spec pages are stubs, not real technical references
- wallet guides are too thin for ordinary users
- source evidence is not visible enough on trust-sensitive pages
- the docs still lack a canonical current-status, upgrade-history, security-assurance, and protocol-architecture layer

The CPO-level diagnosis:

> Terra Classic Docs currently has a strong narrative spine and a fragile operational spine.

That is exactly backwards for an L1 docs product. Narrative should support proof. It should not outrun proof.

## Direct answers

## 1. Are the docs actually good?

Yes, but not in the way a public docs site ultimately needs to be good.

They are good as a content strategy foundation. They are not yet good as a launch-grade L1 operating manual.

The best qualities:

- The tone is serious, adult, and product-aware.
- The docs do not hide Terra Classic's collapse history.
- USTC is consistently treated as a legacy market-priced asset rather than a guaranteed stablecoin.
- Forex Protocol is correctly framed as governance-accepted but not live.
- Swap Protocol is now largely framed as a Market Module 2.0 no-mint design, not a proven live user route.
- The Institutions section is unusually mature. It understands decentralized governance, legal representation limits, risk, liquidity, custody, and source verification.
- The Staking and Governance sections correctly treat users as decision-makers, not passive reward-chasers.
- The Strengths page is a strong strategic asset because it presents Terra Classic in the best possible light without denying the hard parts.

The weakness:

The docs are uneven. Some sections feel like deliberate product documentation. Others still feel imported, thin, old, or mechanically patched.

The public risk is that the site can look more complete than it is. For Terra Classic, that is dangerous because the chain's history makes trust, source evidence, and current-status clarity more important than normal.

## 2. Are the docs complete for an L1 blockchain of this size and history?

No.

They are not complete for a serious Layer 1.

They are especially not complete for Terra Classic, because Terra Classic does not only need normal docs. It needs recovery-era trust infrastructure.

A normal L1 docs site needs:

- overview
- wallet guides
- staking guide
- governance guide
- developer quick start
- smart contract tutorials
- node and validator guides
- module references
- endpoint references
- upgrade and release notes
- security and disclosure information

Terra Classic needs all of that plus:

- clear post-collapse historical context
- live versus proposed product boundaries
- old Terra behavior versus current Terra Classic behavior
- USTC status discipline
- burn/tax/supply clarity
- governance-to-execution traceability
- current release and upgrade verification
- security assurance after 2022
- institutional diligence guidance
- public correction and source verification workflows
- explicit warning against unofficial authority surfaces

The current docs cover some of these well, but not all of them, and not with enough depth.

My completeness rating:

| Area | Rating | Notes |
| --- | --- | --- |
| Strategic framing | Strong | The docs know what Terra Classic should be trying to communicate. |
| Product status discipline | Good but incomplete | Forex and Swap are much improved; many pages still lack visible source blocks. |
| User onboarding | Partial | Concepts are decent; wallet/action guides are too thin. |
| Staking | Good draft | Strong product framing, but needs source review and current parameter verification. |
| Governance | Good draft | Strong explanation, but lacks exact current params, templates, and execution tracking. |
| Swap Protocol | Strong draft | Good no-mint/status discipline; still needs implementation-status proof if anything changes. |
| Forex Protocol | Strong draft | Good risk posture; needs more implementation/ownership evidence before public reliance. |
| Institutions | Strong draft | Good realism; needs more concrete assurance/evidence packs. |
| Developer docs | Uneven | Quick start is good; imported guides and SDK examples need review. |
| Node/operator docs | Weak | Too shallow, stale, and path-broken for serious operators. |
| Module specs | Weak to mixed | Some useful pages, many stubs. |
| Security docs | Incomplete | Security risk is discussed, but no dedicated security assurance/disclosure layer exists. |
| History | Too thin | Current page is responsible but far too short for Terra Classic's history. |
| Source/review system | Good concept, incomplete execution | The model exists; most pages are not reviewed. |

## 3. Are we missing something?

Yes. The missing layer is not just "more pages." It is a stronger trust architecture.

### Missing: Current network status and release page

The docs need a canonical page explaining:

- current mainnet chain ID
- current production Terra Classic Core version
- latest release versus latest pre-release
- current Cosmos SDK / CometBFT / CosmWasm line
- where to verify release status
- how validators should decide which version to run
- how users should understand chain halts and upgrade proposals

This is urgent because current full-node docs still reference `v3.6.0`, while the public `classic-terra/core` releases page currently shows `v4.0.0` as latest and `v4.0.1` as a pre-release.

Sources spot-checked:

- [classic-terra/core releases](https://github.com/classic-terra/core/releases)
- [classic-terra/core README](https://github.com/classic-terra/core)

### Missing: Upgrade history after May 2022

The current `history-after-the-collapse.md` page is responsible but too thin.

Terra Classic needs a structured, source-aware post-collapse timeline:

- May 2022 collapse
- chain halt / restart context
- Terra 2.0 split
- Terra Classic continuation
- staking re-enable
- burn tax era
- IBC restoration
- major core upgrades
- governance milestones
- Tax2Gas
- Market Module 2.0 / Swap Protocol proposal
- Forex Protocol proposal
- Cosmos SDK 0.53 / v4-era upgrades, once verified

This should not become a gossip archive. It should be the canonical "how Terra Classic got here" page.

### Missing: Product status index

The docs have individual status pages, but no single product-status index.

A reader should be able to see one table:

| Product / feature | Status | Can users use it today? | Source | Last verified |
| --- | --- | --- | --- | --- |
| LUNC transfers | Live | Yes | Chain/explorer | date |
| USTC transfers | Live legacy asset | Yes | Chain/explorer | date |
| Staking | Live | Yes | Chain/explorer/wallet | date |
| Governance | Live | Yes | governance portal | date |
| CosmWasm | Live | Yes | core/docs | date |
| IBC | Live where channels/relayers operate | Depends | channel tools | date |
| Swap Protocol | Proposed/design unless activated | Not assumed | proposal/release | date |
| Forex Protocol | Governance-accepted concept | No | proposal | date |

This would reduce confusion across the whole site.

### Missing: Governance-to-execution register

The knowledge corpus repeatedly identifies a Terra Classic problem: governance can pass things without reliable execution ownership.

The docs need a non-live-data, source-aware register explaining:

- proposal
- type
- passed/rejected
- what it actually authorized
- whether it required code
- whether it required funding
- whether it shipped
- where implementation evidence lives

This is not a dashboard. It is a trust surface.

### Missing: Security assurance and incident response

The docs mention audits, bounties, incidents, and security in scattered places, especially Institutions.

That is not enough.

Terra Classic needs a dedicated security section:

- post-2022 audit status
- known audit gaps
- responsible disclosure path
- bug bounty status, if any
- incident reporting expectations
- validator security basics
- wallet/phishing safety
- smart contract deployment risk
- production endpoint risk
- how institutions should verify security claims

The State of the Chain material was clear: security assurance is a credibility gap. The docs should turn that into a transparent, defensible page.

### Missing: Protocol architecture map

There is no clean "how Terra Classic is put together" page for builders and sophisticated non-developers.

Needed:

- chain ID, accounts, denominations
- modules map
- staking/distribution/slashing/gov/oracle/tax/wasm/bank/ibc relationship
- what is Terra Classic-specific versus upstream Cosmos SDK
- what is historical versus current
- what app builders need to query before assuming behavior

This should sit above the module specs.

### Missing: Current chain parameters page

The docs need a current-parameter explanation with verification paths:

- staking parameters
- unbonding time
- active validator count / max validators
- governance deposit/quorum/threshold/veto parameters
- slashing parameters
- tax parameters
- gas price guidance
- oracle vote period / slash window where relevant

This page should not hard-code values forever. It should explain values last verified and exactly how to verify them.

### Missing: Serious validator/operator documentation

The full-node section is not good enough for an L1.

Missing or underdeveloped:

- current version verification
- upgrade preparation and rollback thinking
- sentry architecture
- validator key management
- remote signer / HSM discussion
- oracle feeder production setup
- snapshot provider selection
- monitoring and alerting
- log interpretation
- peer management
- public endpoint hardening
- incident communication
- jailing recovery
- validator shutdown/unbonding
- mainnet versus testnet differences

The current section is too shallow and stale for real operators.

### Missing: Wallet safety and support depth

The wallet pages are not support-grade.

Missing:

- seed phrase and hardware wallet guidance
- Ledger flow, if supported
- memo warnings for exchange deposits
- how to verify network/chain ID
- how to recover from pending/failed transactions
- what to do when wallet balances differ from explorer balances
- staking/redelegation/undelegation support edge cases
- phishing and fake wallet warnings
- how to choose between Keplr, Galaxy Station, Cosmostation, Orbitar, LUNC Dash

This is a priority because user-action docs affect funds.

### Missing: IBC and interchain guidance

IBC is referenced as a strength, but there is no serious user/builder/operator page explaining:

- what IBC does for Terra Classic
- which parts are live versus route-dependent
- channel health and relayer dependence
- how users should verify routes
- how builders should handle timeouts
- recovery expectations
- institutional relevance

For a Cosmos-family L1, that gap is material.

### Missing: Public correction workflow

The source/review model page explains correction principles, but the docs need a public-facing correction page or contribution workflow:

- how to report an error
- what evidence to include
- how source disputes are resolved
- how reviewed status changes
- how proposed product claims are updated

The original brief calls for this kind of public contribution model. It should be visible.

## 4. Errors, stale content, and repetitions

## High-priority errors and freshness risks

### Full-node docs hard-code stale software versions

Examples:

- `content/docs/full-node/run-a-full-terra-node/build-terra-core.md` uses `v3.6.0` as the example latest stable release.
- `content/docs/full-node/run-a-full-terra-node/validator-columbus-5.md` lists Terra Core `v3.6.0`.
- `content/docs/full-node/run-a-full-terra-node/validator-rebel-2.md` lists `v3.6.0-rc.0`.
- `content/docs/full-node/run-a-full-terra-node/system-config.md` hard-codes Go `1.22.12`.

Spot-checking public releases on 2026-06-02 shows Terra Classic Core `v4.0.0` as latest and `v4.0.1` as a pre-release on GitHub. The docs should not present v3.6.0-era examples as current without a status note.

Recommended fix:

- Add a current network/version page.
- Replace hard-coded "latest" wording with "verify latest release here."
- If mainnet intentionally runs a different version than latest GitHub release, state that explicitly and source it.

### Broken or old `/docs/...` internal links

The corpus still contains old route prefixes and wrong imported paths.

Examples:

- `content/docs/develop/classic-transaction-behavior.md` links to `/docs/develop/endpoints`, `/docs/learn/fees`, and `/docs/develop/module-specifications/auth`.
- `content/docs/develop/smart-contracts/interact-with-smart-contract.md` links to `/docs/develop/smart-contracts/docs/develop/terra-core-localnet`.
- `content/docs/develop/smart-contracts/set-up-local-environment.md` links to `docs/develop/terra-core-localnet`.
- `content/docs/full-node/run-a-full-terra-node/join-a-network.md` links to `/docs/full-node/overview/build-terra-core`, `/docs/full-node/overview/validator-columbus-5`, and `/docs/full-node/overview/validator-resources`.

This is a clear import-cleanup problem.

Recommended fix:

- Update content links to current root routes.
- Add stricter validation that flags `/docs/...` links and unresolved route variants.
- Fix module-spec slugs such as `auth` versus `spec-auth`.

### Wrong page titles in full-node docs

Examples:

- `content/docs/full-node/run-a-full-terra-node/set-up-production.md` has title `Example additions to /etc/security/limits.conf`.
- `content/docs/full-node/run-a-full-terra-node/system-config.md` has title `1. Download the archive`.

These are obviously imported heading fragments, not page titles.

Recommended fix:

- Rename to `Set up production node` and `System configuration` or similar.

### Smart-contract setup contains an explicit TODO

`content/docs/develop/smart-contracts/set-up-local-environment.md` contains:

```text
TODO
This section needs updating to include the information about the keys of the local network validator keys / seeds!
```

This should not be public in a launch-grade docs site.

Recommended fix:

- Complete the missing localnet key/seed information or remove the page from reviewed/public priority until it is ready.

### Terra.py native swap example conflicts with status discipline

`content/docs/develop/terra-py/terra-py.md` includes a `MsgSwap` example under "Swap assets."

Across the rest of the docs, the current principle is that old market-swap assumptions are dangerous and Swap Protocol / Market Module 2.0 must not be treated as live unless production deployment is verified.

That makes this example risky. It could lead builders to copy a native swap transaction path that is disabled, historical, or not supported as described.

Recommended fix:

- Remove or heavily gate the `MsgSwap` example.
- Replace it with a warning and link to Swap Protocol implementation status.
- If a currently working DEX route is needed, document contract-specific DEX examples separately with slippage and source evidence.

### Glossary contains confusing historical/current wording

Examples:

- `Columbus-5` is defined as "Current Terra Classic mainnet version." It should be described as the Terra Classic mainnet chain ID / network line, not a software version.
- `Market swap` describes Terra Station action behavior in a way that can confuse readers unless it is explicitly historical/disabled.
- `CHAI`, `bLUNA`, `Anchor`-era terms need clearer historical context.

Recommended fix:

- Split glossary terms into current, historical, proposed, and external.
- Add status tags or one-line status notes for trust-sensitive terms.

### Some product-use page labels can imply availability

Swap Protocol has a "Use Swap Protocol" navigation group and a `swap-lunc-and-ustc.md` page.

The page itself uses proposed/status language, but the nav label can still create a subtle availability implication.

Recommended fix:

- If Swap Protocol is not production-live, rename the nav group to `Understand Swap Protocol` or `User flow design`.
- Only use `Use Swap Protocol` when the route is live, wallet-supported, and externally verifiable.

## Repetition

Some repetition is intentional and useful because Terra Classic needs risk discipline. Not all repeated language should be removed.

Useful repetition:

- USTC is not a guaranteed stablecoin.
- Proposed products are not automatically live.
- Stable-asset claims require source verification.
- Wallet actions and staking are not financial advice.

Repetition that should be tightened:

- Keplr and Galaxy Station staking pages duplicate the same generic staking checklist. That can be consolidated into a shared staking guide with wallet-specific notes.
- Forex Protocol repeats collateral/reserve/buyback mechanics across multiple pages. Keep a canonical mechanics page and make other pages shorter.
- Swap Protocol repeats no-mint/oracle/finite-liquidity mechanics across overview, how-it-works, risks, fees, and scenarios. Some is fine, but the canonical reference should be obvious.
- Staking and governance both repeat validator accountability framing. Cross-link more, duplicate less.
- "Source and verification" appears on 29 pages, which is good, but the content inside those blocks should become more standardized.

## 5. How to improve the docs

## Improvement strategy

Do not add more shiny product pages before fixing the operational basics.

The docs already have enough narrative ambition. The next gains come from proof, freshness, and usability.

The order should be:

1. Fix broken/stale/high-risk content.
2. Establish a current-status and source-verification layer.
3. Harden user, developer, and operator docs.
4. Promote pages from draft to reviewed only after real source checks.
5. Then expand product/institutional content.

## Phase 1: Immediate cleanup

Priority: high.

Fix:

- `/docs/...` links and wrong route paths.
- full-node page titles.
- smart-contract setup TODO.
- stale `v3.6.0` "latest" language.
- Terra.py `MsgSwap` example.
- glossary current/historical wording.
- any nav labels that imply proposed products are live.

Add validation:

- fail on `/docs/...` internal links
- fail on `TODO`, `TBD`, `placeholder`
- fail on old route patterns that do not map to current docs slugs
- optionally flag hard-coded version strings in full-node docs for manual review

## Phase 2: Current status and proof layer

Priority: high.

Add pages:

- `learn/current-network-status.md`
- `learn/upgrade-history-after-2022.md`
- `appendices/product-status-index.md`
- `appendices/how-to-verify-docs-claims.md`
- `governance/governance-to-execution-register.md`

These should not become live dashboards. They should explain what is current, what is proposed, what is historical, and where to verify.

## Phase 3: Operator and developer hardening

Priority: high.

Rewrite the full-node section into real operator docs:

- build/install current `terrad`
- join mainnet
- sync and snapshots
- systemd service
- sentry setup
- validator setup
- oracle feeder setup
- monitoring
- upgrade playbook
- rollback/incident thinking
- jailing recovery
- endpoint exposure and rate limiting
- key management

Rewrite developer docs around current reality:

- current Terra Classic Core version line
- current SDK support matrix
- CosmES examples
- Terra Classic SDK / Terra.py examples
- CosmWasm toolchain
- localnet that actually works
- transaction simulation
- tax/fee behavior
- IBC route handling
- smart contract deployment
- dApp production checklist

Do not keep old imported docs just because they exist. Preserve respected L1 material where useful, but source status must outrank nostalgia.

## Phase 4: User support hardening

Priority: medium-high.

Improve:

- wallet selection
- Keplr install/setup/send/stake/governance
- Galaxy Station install/setup/send/stake/governance
- hardware wallet and seed phrase safety
- exchange memo/deposit/withdrawal warnings
- failed transaction troubleshooting
- balance mismatch troubleshooting
- undelegation/redelegation timing
- phishing and fake link warnings

This matters because wallet and staking pages affect user funds.

## Phase 5: Governance and accountability depth

Priority: medium-high.

Governance pages are good conceptually, but Terra Classic needs sharper tooling:

- exact current governance parameters with verification path
- proposal templates
- proposal scoring checklist
- software-upgrade proposal checklist
- community pool spend checklist
- product proposal checklist
- validator voting accountability guide
- `NoWithVeto` misuse explanation
- low-turnout and validator-passivity explanation
- post-pass execution accountability

The knowledge corpus is clear: governance quality is one of Terra Classic's largest strategic risks. The docs should not treat governance as only "how to vote."

## Phase 6: Security assurance section

Priority: medium-high.

Add a dedicated security area:

- security overview
- audits and review status
- bug bounty / responsible disclosure status
- validator security baseline
- wallet phishing and custody safety
- smart contract security basics
- incident response and reporting
- institutional security checklist

If audit/bounty information is missing, say it is missing. That is better than pretending.

## Phase 7: Historical and strategic context

Priority: medium.

Expand history responsibly:

- concise timeline
- collapse consequences
- Terra 2.0 split
- Terra Classic continuation
- governance and staking restoration
- burn/tax era
- major upgrades
- product revival attempts
- current product path

This should be written like a disciplined public record, not a campaign manifesto.

## Phase 8: Source review and publish readiness

Priority: ongoing.

Do not bulk-mark pages as reviewed.

Create review lanes:

- `draft`
- `source-checked`
- `technical-reviewed`
- `operator-reviewed`
- `published`

For each reviewed page, add or support:

- last verified date
- reviewer or review type
- primary source
- current status
- external verification path

The current binary `draft` / `reviewed` model is a useful start, but too blunt for an L1 docs product.

## Section-by-section verdict

## Start page

Good:

- Clear purpose.
- Good section list.
- Correctly separates docs from main website.

Weak:

- Still draft.
- Does not strongly explain independent/unofficial/source-aware status.
- Does not give new readers the most important status warning: some product sections describe proposed products.

Recommendation:

- Promote it only after adding a stronger "what is live vs proposed" first-read warning.

## Learn

Good:

- `strengths.md` is strategically strong.
- `what-terra-classic-supports-today.md`, `lunc-and-ustc.md`, `burns-tax-and-supply.md`, and `what-terra-classic-is-not.md` are exactly the right kind of trust-first pages.

Weak:

- Wallet pages are thin.
- `history-after-the-collapse.md` is too short for Terra Classic's history.
- `builder-tooling.md` is a 70-word stub.
- `wallets.md` is a 90-word list, not a wallet guide.
- `strengths.md` is long and strong but still draft, with no visible source block.

Recommendation:

- Make Learn the highest-quality public onboarding section.
- Expand wallet safety and history.
- Add visible source support to strengths.

## Staking Protocol

Good:

- Strong product framing.
- Good explanation of validator accountability and delegator responsibility.
- Avoids APR-only thinking.

Weak:

- Every page is still draft.
- No visible source blocks.
- Needs current parameter verification.
- Needs stronger wallet-specific and CLI/API references.

Recommendation:

- Source-check and promote this section after parameter verification.
- Add "how to verify validator behavior" links and explorer/dashboards guidance.

## Governance

Good:

- The conceptual framing is strong.
- It clearly explains token-weighted governance and validator/delegator dynamics.
- It warns against weak proposals.

Weak:

- Every page is draft.
- Lacks exact current governance parameters with verification path.
- Lacks proposal templates.
- Lacks governance-to-execution accountability.
- Does not yet fully reflect the chain's known governance dysfunctions from the knowledge corpus.

Recommendation:

- Add current params, templates, scoring rubrics, and execution register.

## Swap Protocol

Good:

- Status discipline is much better after remediation.
- It correctly frames Market Module 2.0 as no-mint.
- It avoids USTC repeg promises.
- It explains burns, oracle dependency, finite liquidity, and failure states.

Weak:

- Several inner pages are still draft.
- Some navigation wording can imply availability.
- Source blocks are present on many pages but not all.
- The docs need a single product-status index so readers do not infer live status from page volume.

Recommendation:

- Keep the section, but adjust any "use" language until production activation is verified.

## Forex Protocol

Good:

- Strong separation between governance acceptance and production deployment.
- Strong risk framing.
- Good institutional relevance.
- Good articulation of CSM/EUTC/collateral/buyback/vault concepts.

Weak:

- Most inner pages remain draft.
- The design is inherently trust-sensitive, so source visibility needs to be stronger everywhere.
- More clarity is needed around ownership, implementation model, audits, collateral custody, legal role, and launch evidence.

Recommendation:

- Keep as product-direction docs, but do not let it read as launch-ready.
- Add implementation ownership and launch evidence requirements if this moves forward.

## Institutions

Good:

- This is one of the better sections.
- Tone is serious, not hype.
- It correctly explains that Terra Classic is not a company, issuer, foundation, vendor, or counterparty.
- Risk and due diligence framing is strong.

Weak:

- Most pages are draft.
- It leans heavily on future/proposed product paths.
- Needs a stronger evidence-pack structure for institutional readers.
- Needs security assurance and current network status linked directly.

Recommendation:

- Preserve the tone, but add proof layers before pushing institutional ambition harder.

## Develop

Good:

- Developer Quick Start is useful and product-aware.
- `classic-transaction-behavior.md` is valuable.
- CosmES and Terra.py coverage is directionally useful.

Weak:

- The section is uneven.
- Smart contract pages are imported and partly stale.
- One page contains a TODO.
- Terra.py includes a risky native swap example.
- Several module specs are thin stubs.
- Old `/docs/...` links remain.
- SDK support needs verification.

Recommendation:

- Treat Develop as a rebuild candidate.
- Keep good pages, but do not pretend the imported material is current until technically reviewed.

## Full Node

Good:

- Covers the right rough topics.

Weak:

- Not launch-grade.
- Stale version examples.
- Wrong page titles.
- Broken old links.
- Too shallow for validator operation.
- Needs current release, upgrade, oracle feeder, monitoring, security, and incident-response depth.

Recommendation:

- Rewrite this section before presenting the docs as operator-ready.

## Appendices

Good:

- Source and review model is important and should stay.
- Glossary is useful as a base.

Weak:

- Glossary mixes current and historical terms without enough status labeling.
- Source/review model exists, but the corpus has not fully implemented it.

Recommendation:

- Expand appendices into proof/support infrastructure: glossary, product status index, source model, correction workflow, current parameter verification.

## Priority backlog

### P0 - Fix before serious public reliance

- Fix stale Terra Core version language.
- Fix old `/docs/...` links and wrong paths.
- Fix full-node titles.
- Remove smart-contract TODO.
- Remove or gate Terra.py `MsgSwap`.
- Fix glossary wording around Columbus-5 and historical market swaps.
- Rename Swap nav/use language if production status is not live.

### P1 - Needed for authority-grade docs

- Add current network status page.
- Add product status index.
- Add upgrade history after 2022.
- Add chain parameter verification page.
- Add security assurance / disclosure section.
- Rebuild full-node/operator docs.
- Harden wallet/user docs.
- Add governance-to-execution register.

### P2 - Needed for developer and institutional credibility

- Rebuild smart contract docs.
- Expand module specs or clearly mark upstream-stub pages.
- Add IBC/interchain guidance.
- Add SDK support matrix.
- Add integration diagnostics and failure-state examples.
- Add institutional evidence-pack guidance.

### P3 - Strategic polish

- Add stronger source blocks to narrative pages.
- Reduce duplication across Forex/Swap/Staking/Governance.
- Add concise FAQ and decision trees.
- Add better cross-linking from user pages to status/proof pages.

## Bottom line

The docs are materially better than generic community crypto docs. They have the right strategic instinct: honest, source-aware, status-aware, and product-oriented.

But they are not complete.

The current corpus is a strong draft with several excellent sections and several serious gaps. The biggest threat is not lack of content volume. The biggest threat is false confidence: pages that look complete while still being draft, stale, thin, or not source-verified.

The next phase should be disciplined:

1. Fix factual and route errors.
2. Add current-status and proof infrastructure.
3. Rebuild node/operator and developer docs.
4. Harden wallet/user support.
5. Source-review pages before marking them reviewed.

If Terra Classic Docs wants to be the credible public documentation layer for a historically damaged but still alive L1, the product principle should be:

> Proof first. Narrative second. Hype never.

## External benchmark comparison: Solana and Hyperliquid

Added: 2026-06-02

## Benchmark scope

This addendum compares Terra Classic Docs against:

- [Solana Docs](https://solana.com/docs)
- [Solana Cookbook](https://solana.com/developers/cookbook)
- [Solana Guides](https://solana.com/developers/guides)
- [Anza validator/operator docs](https://docs.anza.xyz/operations/requirements)
- [Hyperliquid Docs](https://hyperliquid.gitbook.io/hyperliquid-docs)
- [Hyperliquid Risks](https://hyperliquid.gitbook.io/hyperliquid-docs/risks)
- [Hyperliquid Bug bounty program](https://hyperliquid.gitbook.io/hyperliquid-docs/bug-bounty-program)
- [Hyperliquid Audits](https://hyperliquid.gitbook.io/hyperliquid-docs/audits)
- [Hyperliquid API docs](https://hyperliquid.gitbook.io/hyperliquid-docs/for-developers/api)
- [Hyperliquid Historical data](https://hyperliquid.gitbook.io/hyperliquid-docs/historical-data)

This comparison is not about copying their brand, tooling, or docs framework. Terra Classic Docs must remain a custom GitHub Pages docs site. The useful benchmark question is:

> What documentation behaviors make Solana and Hyperliquid easier to trust, learn from, build on, operate, or integrate with, and which of those behaviors should Terra Classic import?

## High-level comparison

| Dimension | Solana | Hyperliquid | Terra Classic Docs today | What Terra Classic should import |
| --- | --- | --- | --- | --- |
| Developer onboarding | Very strong. Quick install, browser quickstart, first program path, templates, cookbook, SDK tables. | Narrower but direct. API and builder paths are easy to find. | Good strategic quick start, but fragmented and uneven after that. | Build a deliberate "first 30 minutes", cookbook, SDK matrix, and starter templates path. |
| Core concepts | Strong. Pages use key facts, limits, diagrams, and links into deeper pages. | Strong where product-specific: HyperCore, HyperEVM, trading mechanics. | Good narrative concepts, weaker protocol architecture and parameter references. | Add Terra Classic core concepts pages with key facts, limits, current params, and verification paths. |
| Operator docs | Solana/Anza is much stronger: requirements, hardware, networking, setup, key safety, validator/RPC distinction. | Node docs are brief, but validator and node categories exist. | Weak and stale. Full-node docs are the largest gap. | Rebuild full-node/validator docs around operator reality, not imported fragments. |
| Risk docs | Present but not the main Solana docs strength. | Very strong: clear risk page, bug bounty, audits, historical data caveats. | Risk is discussed in many places but not consolidated enough. | Add dedicated Security, Risks, Audits, Bug Bounty / Responsible Disclosure, and Incident Response sections. |
| API/reference | Strong through API, Cookbook, SDKs, code examples, limits tables. | Strong for API domain: notation, asset IDs, nonces, errors, signing, rate limits, latency. | Endpoints and examples exist, but not enough precise API/reference depth. | Add exact API behavior pages: errors, signing, fees/tax, rate limits, tx lifecycle, SDK support. |
| Product/domain depth | Solana goes deep on blockchain primitives and developer use cases. | Hyperliquid goes deep on trading, liquidations, margin, order types, oracle/risk, historical data. | Terra Classic has product sections, but core chain/operator depth lags. | Go deep where Terra Classic is distinct: tax, staking, governance, oracle, IBC, USTC status, Swap/Forex status. |
| Support routing | Solana clearly points to Stack Exchange and support routes. | Hyperliquid has support and explicit bug bounty contact. | Contribution intent exists, but correction/support paths are not public enough. | Add public correction, support, bug report, and source dispute workflows. |
| Last-updated / freshness | Solana exposes edit page and current docs affordances; Anza docs make version/current-release checking part of operations. | GitBook exposes last updated dates; bug bounty page is recently updated. | Frontmatter has source dates, but readers often do not see freshness clearly. | Show last verified/source blocks consistently on high-risk pages and create freshness checks. |
| Machine-readable docs | Solana exposes AI/search affordances and `llms.txt` / agent-facing resources. | GitBook search is strong. | Search exists locally, but no AI/LLM export layer. | Add `llms.txt`, curated markdown exports, or "copy page markdown" affordance if practical. |

## What Solana Docs do very well

## 1. They make the first developer action obvious

Solana's docs homepage immediately gives a developer a short route:

- Quickstart
- Setup local environment
- developer templates
- try a browser-based example
- start learning core concepts

The browser quickstart is especially strong. It lets a new developer create a test wallet, get devnet SOL, and interact with a real development environment before installing anything locally.

Terra Classic should not copy Solana Playground unless a Terra Classic equivalent exists. But the underlying pattern is excellent:

> Reduce first-contact friction until the reader can complete one safe action quickly.

Importable Terra Classic pattern:

- "First 30 minutes on Terra Classic" page.
- Three fast paths:
  - read a balance
  - send a tiny testnet transaction
  - run localnet and query chain status
- Clear "do not use mainnet funds here" warnings.
- One exact toolchain per path, not five competing options.

Current Terra Classic gap:

`develop/quick-start-guide.md` is a good start, but the follow-through pages are uneven. Once a user clicks into smart contracts, Terra.py, localnet, or node operation, the quality drops.

## 2. They split concepts from recipes

Solana separates:

- docs/core concepts
- cookbook examples
- guides/tutorials
- SDKs
- tools
- validator/operator docs

That split is strong because each reader knows what kind of page they are on.

Terra Classic currently mixes:

- conceptual explanation
- imported reference
- product marketing context
- how-to steps
- warning language
- proposed product status

Importable Terra Classic pattern:

- `Learn`: what it is and how to think.
- `Use`: user actions and wallet flows.
- `Build`: developer quickstarts, SDKs, recipes.
- `Reference`: modules, params, API, denominations, endpoints.
- `Operate`: full nodes, validators, oracle feeders, upgrades.
- `Govern`: proposals, voting, execution tracking.
- `Security`: audits, disclosure, incident handling.

The current IA is close, but not clean enough. The docs do not need a visual redesign first. They need stronger content-type discipline.

## 3. They use "key facts" and "limits" tables

Solana core concept pages use compact "Key facts" and "Limits" sections. For example, the Accounts page summarizes account structure, address, ownership, and rent, then lists limits with sources. The Fees page does the same for base fees, priority fees, and compute limits.

This pattern would work extremely well for Terra Classic.

Importable Terra Classic pattern:

Every core concept page should include:

| Block | Purpose |
| --- | --- |
| Key facts | The five to eight things the reader must know. |
| Current values | Parameters or values last verified, where safe to state. |
| Limits | Hard constraints, caps, cooldowns, windows, denominations, chain IDs. |
| Verify | Exact command, endpoint, explorer, or source to confirm current state. |
| Common mistakes | What users/builders/operators usually get wrong. |

Best Terra Classic candidates:

- Accounts and denominations
- Transactions
- Fees, gas, and tax
- Staking
- Governance
- Oracle
- IBC
- CosmWasm
- Community Pool
- Burn tax
- Full-node operation
- USTC status

## 4. They make SDK status explicit

Solana distinguishes official SDKs from community SDKs and warns that community SDKs may not be up to date or include all official features.

Terra Classic needs this badly.

Current issue:

Terra Classic docs mention CosmES, Terra Classic SDK / Terra.py, public endpoints, and old Terra SDK concepts, but there is no single support matrix.

Importable Terra Classic pattern:

Add a `develop/sdk-support-matrix.md` page:

| SDK / tool | Language | Maintainer | Status | Best for | Risks | Source |
| --- | --- | --- | --- | --- | --- | --- |
| CosmES | TypeScript | maintainer | current / verify | frontend dApps | package freshness | npm/GitHub |
| Terra Classic SDK | Python | maintainer | current / verify | scripts, bots | independent maintainer | PyPI/GitHub |
| Old Terra SDKs | mixed | legacy | historical / caution | reference only | may target Terra 2.0 | source |
| `terrad` CLI | Go binary | classic-terra/core | core tool | node/tx ops | version-sensitive | releases |

This will reduce a lot of builder confusion.

## 5. They provide a cookbook

Solana Cookbook is a high-leverage pattern because it converts docs into repeatable tasks:

- create keypair
- restore keypair
- validate public key
- send tokens
- calculate transaction cost
- add memo
- add priority fees
- optimize compute
- connect wallet
- use local validator

Terra Classic should import this format.

Recommended Terra Classic Cookbook:

- Read a LUNC balance
- Convert `uluna` to LUNC safely
- Send LUNC
- Send USTC with legacy-stable warning
- Add memo for exchange deposit
- Estimate gas
- Query tax parameters
- Simulate a transaction
- Check tax exemption
- Query staking validators
- Delegate LUNC
- Redelegate LUNC
- Undelegate LUNC
- Vote on proposal
- Query governance proposal
- Query burn/tax parameters
- Query oracle rates
- Query IBC channels
- Execute CosmWasm contract
- Store/instantiate CosmWasm contract on localnet
- Handle failed transaction logs

This would be much more useful than more narrative pages.

## 6. They create depth for advanced builders

Solana Guides include beginner, intermediate, advanced, and resource categories. They cover practical use cases like exchange integration, confirmation/expiration, retrying transactions, address lookup tables, compute optimization, MEV protection, institutional DvP, permissioned tokens, and game examples.

Terra Classic should not copy those topics blindly. But it should copy the content strategy:

> Organize advanced docs by real builder jobs, not by internal module names only.

Terra Classic advanced guides should include:

- Add Terra Classic to an exchange
- Build a staking dashboard
- Build a governance proposal tracker
- Build a wallet send flow with tax/memo warnings
- Build a tax-aware treasury transfer flow
- Build a validator monitoring dashboard
- Build an IBC route health checker
- Build a burn/tax analytics page
- Build a safe USTC information panel
- Build a Swap Protocol status-aware UI
- Build a Forex Protocol readiness checker, if implementation starts

## 7. They route support clearly

Solana points users to Solana Stack Exchange from docs. That is important because docs alone cannot absorb every support question.

Terra Classic needs a documented support/correction route:

- docs correction issue
- broken link report
- stale data report
- developer question route
- wallet safety issue route
- validator/operator support route
- security disclosure route

Because Terra Classic lacks one central company, this routing is more important, not less.

## What Hyperliquid Docs do very well

## 1. They document product reality with high domain specificity

Hyperliquid docs are not generic blockchain docs. They are built around what Hyperliquid actually is:

- HyperCore
- HyperEVM
- trading
- order books
- validators
- referrals
- historical data
- APIs
- risks
- audits
- bug bounty

The importable lesson:

> The best docs go deepest where the product is most differentiated.

For Terra Classic, the differentiators are not generic "L1 with wallets." They are:

- post-collapse survival
- LUNC / USTC history
- burn tax and Tax2Gas behavior
- staking and validator governance
- proposal-heavy decentralized coordination
- oracle module history and future product relevance
- IBC/Cosmos compatibility
- Swap Protocol / Market Module 2.0 as proposed native route
- Forex Protocol / CSM as proposed collateralized stable-asset path
- public source-verification as a trust product

Terra Classic Docs should go deeper on those, not spend equal effort on every generic Cosmos concept.

## 2. They put risk in the main navigation

Hyperliquid has a top-level Risks page. It does not bury risk in disclaimers. It names smart contract risk, L1 risk, market liquidity risk, oracle manipulation risk, and mitigation.

Terra Classic needs the same courage.

Terra Classic risk docs should include:

- L1 operational risk
- governance risk
- validator concentration and low participation risk
- liquidity risk
- USTC misconception risk
- proposed product risk
- oracle risk
- IBC/relayer risk
- endpoint/infrastructure risk
- wallet/phishing risk
- security assurance gap
- legal/representation risk
- market-manipulation and fake-volume risk

This should be a top-level or appendices-linked section, not scattered only across pages.

## 3. They make bug bounty rules concrete

Hyperliquid's bug bounty page is operationally useful because it defines:

- what is in scope
- how to submit
- prohibited activity
- eligibility
- ineligibility
- general conditions
- severity examples
- reward ranges
- contact email

Terra Classic may not have a funded bounty yet. That is fine. But the docs still need a security disclosure page.

Importable Terra Classic pattern:

Add `security/responsible-disclosure.md`:

- In scope:
  - docs security issues
  - phishing / fake links in docs
  - Terra Classic core issues, with routing to correct maintainers
  - wallet/integration issues, with routing to maintainers
  - proposed product implementation issues, once code exists
- Out of scope:
  - price predictions
  - social disputes
  - unsupported third-party apps
  - attacks against unrelated services
- Submission:
  - where to report
  - what evidence to include
  - reproduction steps
  - affected version/route
  - whether public disclosure is allowed

If no bounty exists, say:

> Terra Classic Docs does not currently document a funded network-wide bug bounty. This page exists to route responsible reports and avoid unsafe public disclosure.

That is stronger than silence.

## 4. They publish audit artifacts

Hyperliquid's Audits page links audit PDFs directly.

Terra Classic should import the pattern, not the claim.

Recommended Terra Classic page:

`security/audits-and-assurance.md`

It should include:

- confirmed post-2022 core audits, if any
- pre-2022 audit history, clearly labeled historical
- smart contract / dApp audits, if relevant and sourced
- proposed product audit requirements
- audit gaps
- "not found in current evidence set" where appropriate
- source links

This would directly address a major trust gap from the State of the Chain report.

## 5. They document historical data with caveats

Hyperliquid's Historical Data page is valuable because it explains what data exists, how to fetch it, which formats are available, and where guarantees do not exist.

Terra Classic should not become a data warehouse. But it should document where to verify historical and live data.

Importable Terra Classic pattern:

Add `appendices/data-and-verification-sources.md`:

- explorers
- governance records
- core releases
- endpoint status
- burn trackers
- staking dashboards
- validator dashboards
- IBC/channel tools
- market/liquidity venues
- archived reports
- source reliability notes

For each source:

| Source | Use for | Not good for | Maintenance / caveat |
| --- | --- | --- | --- |

This would help future agents and public readers stop relying on random social screenshots.

## 6. They make API edge cases first-class

Hyperliquid API docs expose the right low-level categories:

- notation
- asset IDs
- tick and lot size
- nonces and API wallets
- info endpoint
- exchange endpoint
- websocket
- error responses
- signing
- rate limits
- latency

Terra Classic Docs should do the same for Cosmos/Terra Classic integration:

- denominations and unit conversion
- chain IDs
- endpoint types: RPC, LCD, FCD, gRPC
- signing modes
- account sequence and account number
- memos
- gas prices
- tax behavior
- simulation
- broadcast modes
- error logs
- rate limits
- endpoint fallback
- transaction finality/confirmation
- IBC timeout behavior
- wallet rejection versus chain rejection

Current docs gesture at this, but not as a complete API/integration reference.

## 7. They use "last updated" aggressively

GitBook exposes last-updated dates on Hyperliquid pages. This is especially useful for risk, bug bounty, and API pages.

Terra Classic already has frontmatter source dates, but public readers need clearer freshness on high-risk pages.

Importable Terra Classic pattern:

- visible "Last verified" on every reviewed page
- "Needs review" badge for draft user-action pages
- "Version-sensitive" badge for node/operator pages
- "Product status-sensitive" badge for Swap/Forex pages
- review date shown near source block

This is critical for a chain whose technical version and governance status change over time.

## What Terra Classic should not import

## Do not copy Solana's confidence level blindly

Solana can speak like a mature, high-adoption developer platform. Terra Classic cannot simply mimic that tone without proof. Terra Classic's strongest tone is:

> serious, resilient, source-aware, rebuilding, and operationally honest.

Copying Solana's mass-adoption confidence too directly would create credibility risk.

## Do not copy Hyperliquid's centralized responsibility model

Hyperliquid can publish bug bounty rules, audits, and core contributor information with a clearer foundation/labs responsibility model. Terra Classic has no equivalent central operator.

Terra Classic should instead document:

- who can verify what
- who cannot represent the chain
- where governance is required
- where maintainers or validators are only speaking for themselves
- where no accountable owner exists yet

That is less clean, but more truthful.

## Do not overbuild AI/docs features before fixing source truth

Solana has "Ask AI", copy markdown, and AI-agent resources. Those are useful, but Terra Classic should not prioritize AI presentation before fixing stale content and source gaps.

Correct sequence:

1. Fix stale and risky docs.
2. Add source/proof infrastructure.
3. Then add `llms.txt`, copy-markdown, or AI-ready exports.

## What to import into Terra Classic Docs

## Import 1: A real developer journey

Add a developer journey that mirrors Solana's clarity:

1. Quick install / prerequisites
2. First read-only query
3. First testnet transaction
4. First localnet run
5. First smart contract
6. First production-readiness checklist

Each page should have:

- time estimate
- prerequisites
- exact commands
- expected output
- failure states
- next step

## Import 2: A Terra Classic Cookbook

Create `develop/cookbook/`.

Initial recipe set:

- read balance
- send LUNC
- send USTC with warning
- add memo
- simulate transaction
- estimate gas and tax
- query tax parameters
- query staking validators
- delegate
- redelegate
- undelegate
- vote
- query governance proposal
- query oracle rates
- query IBC channels
- execute CosmWasm contract
- troubleshoot failed broadcast

This is the highest-leverage developer content addition.

## Import 3: Key facts / limits / verify pattern

Apply this to every core concept page.

Example for Terra Classic fees:

- Key facts:
  - gas is required
  - tax may apply
  - tax exemptions exist
  - memos matter for exchanges
  - public gas endpoints can change
- Limits:
  - current tax rate, last verified
  - gas price source
  - denomination
- Verify:
  - command or endpoint
  - explorer/source link
- Common mistakes:
  - assuming receiver gets exact amount
  - ignoring memo
  - using stale gas prices

## Import 4: SDK and tool support matrix

Create a single page that tells builders which tools are:

- recommended
- usable but community-maintained
- legacy
- risky
- unverified

This will prevent old Terra/Terra 2.0 docs from contaminating Terra Classic builder assumptions.

## Import 5: Security and risk as first-class docs

Add top-level or clearly navigable security/risk docs:

- `security/overview.md`
- `security/risks.md`
- `security/audits-and-assurance.md`
- `security/responsible-disclosure.md`
- `security/wallet-and-phishing-safety.md`
- `security/validator-security-baseline.md`
- `security/incident-response.md`

This is not optional for Terra Classic. It is part of recovering trust.

## Import 6: Operator-grade node documentation

Use Anza's validator docs as the quality benchmark.

Terra Classic operator docs should include:

- hardware requirements
- network requirements
- disk/storage planning
- OS support
- cloud caveats
- Docker caveats
- firewall rules
- public RPC warning
- validator versus RPC node
- key creation and storage
- authorized withdrawer / equivalent key-risk concept for Terra Classic
- oracle feeder setup
- system tuning
- service setup
- logs
- monitoring
- upgrade playbook
- incident response

The current full-node section is far below this bar.

## Import 7: Historical data and source guide

Add a source guide inspired by Hyperliquid's historical data page, but tailored to Terra Classic:

- what data exists
- where to fetch it
- what it proves
- what it does not prove
- caveats
- cost/rate-limit warnings
- maintenance status

This should become the standard citation base for future content work.

## Import 8: Improvement proposal and product-status discipline

Hyperliquid has a HIP section. Terra Classic has governance proposals and product proposals, but the docs do not yet have an equivalent clean proposal library.

Terra Classic should add:

- proposal types
- proposal templates
- proposal quality rubric
- product proposal status pages
- governance-to-execution register
- source links to accepted/rejected proposals
- shipped/not shipped markers

This is especially important because Terra Classic's biggest strategic weakness is not idea generation. It is execution accountability.

## Import 9: Advanced integration guides

Solana's Guides include practical resource pages like exchange integration, confirmation and expiration, retrying transactions, compute optimization, MEV protection, institutional DvP, and permissioned tokens.

Terra Classic should create equivalent high-value guides:

- Add Terra Classic to an exchange
- Build deposit/withdrawal flows with memo handling
- Build a tax-aware payment flow
- Build a staking integration
- Build a governance integration
- Build an oracle-aware dashboard
- Build an IBC route checker
- Build a validator monitoring stack
- Build a burn/tax reporting export
- Build an institutional due-diligence packet

## Import 10: Human support routing

Both benchmark docs make it easier to find support or report issues.

Terra Classic should add:

- "Report docs issue"
- "Report stale chain data"
- "Report security issue"
- "Ask developer question"
- "Ask governance/process question"
- "Report wallet phishing/fake link"

Because Terra Classic is decentralized, each route must say who can answer and who cannot officially represent the chain.

## Benchmark-derived priority changes

The earlier backlog remains valid. This benchmark comparison sharpens the order.

### Benchmark P0

- Fix stale version/operator docs.
- Fix broken imported links.
- Remove TODOs/placeholders.
- Add current network/version status page.
- Add security disclosure page, even if bounty is not funded.

### Benchmark P1

- Build Terra Classic Cookbook.
- Add SDK/tool support matrix.
- Add current chain parameter verification page.
- Add product status index.
- Rebuild full-node/validator docs to operator-grade quality.

### Benchmark P2

- Add risks section.
- Add audits/security-assurance page.
- Add historical data/source guide.
- Add governance-to-execution register.
- Add proposal templates and proposal quality rubrics.

### Benchmark P3

- Add `llms.txt` or markdown export for AI-assisted docs use.
- Add copy-markdown affordance if technically practical.
- Add structured "last verified" display in the docs UI.
- Add advanced integration guides.

## Product conclusion from benchmarks

Solana proves that great L1 docs reduce developer friction through paths, examples, SDK clarity, and operator documentation.

Hyperliquid proves that strong financial-infrastructure docs do not hide risk. They expose risks, audits, bug bounty, API behavior, and historical data caveats directly in the docs.

Terra Classic needs both lessons, but with its own trust posture:

- from Solana: developer journey, cookbook, core facts, limits, SDK matrix, operator depth
- from Hyperliquid: risk-first honesty, security disclosure, audit artifacts, API precision, data caveats

The strategic standard should be:

> Terra Classic Docs should become a proof-driven recovery-era L1 documentation system: as easy to start with as Solana, as explicit about risk and operational boundaries as Hyperliquid, and more source-aware than both because Terra Classic's history demands it.
