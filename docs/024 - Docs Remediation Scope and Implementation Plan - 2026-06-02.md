# Docs Remediation Scope and Implementation Plan

Created: 2026-06-02

## Purpose

This document turns the content audit and Dawid's feedback into a reviewable implementation scope.

It is intentionally an implementation plan, not another full audit. It defines what should be changed, which sources should be used, what pages should be created or edited, and what validation should run.

## Product direction

The next docs phase should move Terra Classic Docs from "strong strategic draft" toward "proof-driven L1 documentation."

The work should prioritize:

- user-action clarity
- current chain status and verification
- upgrade history
- live versus proposed product status
- IBC explanation and verification
- stale imported-doc cleanup

Do not add more broad narrative pages before fixing the proof and usability layer.

## Source analysis from feedback

## 1. Wallet guides are too thin

Agreement: this should be in scope.

Wallet pages affect user funds, so they need practical safety guidance, not only short step lists.

Primary affected areas:

- `content/docs/learn/wallets.md`
- `content/docs/learn/keplr/*`
- `content/docs/learn/galaxy-station/*`

## 2. Current network status and parameters

Feasible and should be in scope.

References checked:

- `https://statsbin.com/chain-parameters`
- `https://terra-classic.publicnode.com`
- `https://terra-classic-lcd.publicnode.com/cosmos/base/tendermint/v1beta1/node_info`
- PublicNode LCD parameter endpoints

Important finding:

- StatsBin is useful only as a product reference for the kind of simple chain-parameter page Terra Classic Docs can provide.
- StatsBin should not be cited as a data source and should not supply values for Terra Classic Docs.
- PublicNode should be the source of truth for the docs page because it exposes Terra Classic RPC/LCD/GRPC/FCD endpoints directly.
- Direct PublicNode `node_info` confirmed `columbus-5`, node-reported chain version `4.0.1`, Cosmos SDK `v0.53.6`, CometBFT `0.38.19`, Go `go1.24.13`, and git commit `9a5ee563874ce3906c3ca7069f0160de51f89c40`.

Decision:

Create one dedicated docs page that displays current Terra Classic network status and chain parameters from Terra Classic PublicNode endpoints. This should be a small first-party docs utility page, not an analytics product.

The page can be updated live in the browser, daily through a generated static data file, or both. The recommended model is:

- generate a static JSON snapshot from PublicNode during the docs build or a scheduled GitHub Actions run
- show the snapshot with a clear `lastUpdated` timestamp
- optionally attempt a client-side refresh from PublicNode on page load if CORS and endpoint reliability allow it
- show a stale/error state if PublicNode cannot be reached or the snapshot is older than the accepted threshold
- keep the page limited to chain status and protocol parameters, not charts, rankings, validator analytics, or market analytics

## 3. Upgrade history after May 2022

Feasible, but only if implemented with source tiers.

Sources checked:

- `https://validator.info/terra-classic/governance/passed?searchString=upgrade`
- PublicNode governance API
- proposal metadata links returned by the on-chain governance API
- GitHub proposal documents where linked

Recent upgrade extraction is feasible from PublicNode LCD. A test extraction found these passed upgrade-related proposals:

- `12118` - Upgrade v3.1.3
- `12131` - Upgrade to v3.1.5
- `12139` - Upgrade to v3.1.6
- `12148` - Upgrade to v3.3.0
- `12157` - Upgrade to v3.4.0
- `12164` - v3.4.0 additional development compensation
- `12170` - Upgrade v3.4.3
- `12189` - Upgrade v3.5.0
- `12194` - Cosmos SDK v0.53 / IBC v2 direction
- `12196` - Upgrade to v3.6.0
- `12208` - Upgrade to v3.6.1
- `12213` - Cosmos SDK v0.53 / IBC v2 Phase 1 spend
- `12218` - Software Upgrade to v4.0.0
- `12220` - Cosmos SDK v0.53 / IBC v2 Phase 2 spend
- `12221` - Software Upgrade to v4.0.1

Caveat:

The current PublicNode `cosmos/gov/v1` API appears to expose the newer governance-history range more cleanly than the full post-May-2022 history. Earlier post-collapse upgrade history may require Validator.info, proposal pages, Classic Agora, GitHub release notes, and older community records.

Decision:

Build the upgrade history page, but structure it as source-verified history with confidence levels:

- verified from on-chain governance API
- verified from Validator.info
- verified from GitHub release/proposal docs
- historical/community-sourced and needs secondary confirmation

Do not invent missing entries.

## 4. Product status index

Agreement: this should be in scope.

This page should reduce confusion across live, proposed, governance-accepted, disabled, and historical functionality.

It should not be a live dashboard.

## 5. IBC page

Feasible and should be in scope.

Sources checked:

- `https://mapofzones.com/home/columbus-5/overview?columnKey=ibcVolume&period=24h`
- `https://docs.mapofzones.com/`
- `https://docs.mapofzones.com/graphql.html`

Finding:

Map of Zones is a JavaScript app, but its documentation confirms it visualizes Cosmos-SDK IBC networks by connecting to public RPCs and parsing IBC token-transfer transactions. The docs also document a GraphQL-backed architecture.

Decision:

Create a Terra Classic IBC page that explains IBC conceptually, links to Map of Zones for live network/channel/volume views, and documents how users/builders should verify IBC route health. The docs should not copy live Map of Zones values as static truth unless the value is clearly last-verified and dated.

## 6. Known errors, stale content, and repetitions

Agreement: all items in section `4. Errors, stale content, and repetitions` from the audit should be implemented.

This is cleanup work, not optional polish.

## Implementation scope

## Work package 1: Wallet guide hardening

Create or improve wallet documentation so ordinary users can safely complete basic actions.

Pages to edit:

- `content/docs/learn/wallets.md`
- `content/docs/learn/keplr/keplr.md`
- `content/docs/learn/keplr/keplr-install.md`
- `content/docs/learn/keplr/keplr-wallet.md`
- `content/docs/learn/keplr/keplr-send.md`
- `content/docs/learn/keplr/keplr-staking.md`
- `content/docs/learn/keplr/keplr-governance.md`
- `content/docs/learn/keplr/keplr-testnet.md`
- `content/docs/learn/galaxy-station/galaxy-station.md`
- `content/docs/learn/galaxy-station/galaxy-station-install.md`
- `content/docs/learn/galaxy-station/galaxy-station-wallet.md`
- `content/docs/learn/galaxy-station/galaxy-station-send.md`
- `content/docs/learn/galaxy-station/galaxy-station-staking.md`
- `content/docs/learn/galaxy-station/galaxy-station-governance.md`
- `content/docs/learn/galaxy-station/galaxy-station-testnet.md`

Content scope:

- wallet selection
- seed phrase safety
- hardware wallet / Ledger notes where source-verified
- exchange memo warnings
- small test transaction guidance
- balance verification
- failed transaction checks
- staking, redelegation, and undelegation risk
- governance voting cautions
- phishing and fake-link warnings
- source and verification blocks

## Work package 2: Current network status and chain parameters page

Create:

- `content/docs/learn/current-network-status-and-parameters.md`

Navigation:

- Add under `Learn Terra Classic > Context and status`.

Content scope:

- chain ID
- current node-reported chain version
- Cosmos SDK version
- CometBFT version
- Go version
- Git commit
- tax and treasury parameters
- dyncomm parameters
- gas and transaction limits
- staking and slashing parameters
- governance parameters
- oracle and market parameters
- distribution and mint parameters
- IBC and CosmWasm parameters
- module versions
- how to verify via PublicNode LCD
- how to handle source discrepancies

Data and implementation scope:

- Use Terra Classic PublicNode endpoints as the data source.
- Do not cite StatsBin and do not consume StatsBin data.
- Treat StatsBin only as a reference example for the type of simple chain-parameter presentation that is useful.
- Add a small docs-native status component or markdown-supported data block if the current renderer allows it cleanly.
- Prefer a generated JSON snapshot for reliability on GitHub Pages.
- Optionally add client-side PublicNode refresh if CORS, endpoint stability, and failure states are verified.
- Show `lastUpdated`, source endpoint, and stale/error states.
- Mark values as current at the time of fetch, not permanently true.

Endpoint scope to verify:

- `cosmos/base/tendermint/v1beta1/node_info`
- governance params
- staking params
- slashing params
- distribution params
- mint params
- oracle params
- treasury/tax params where available
- wasm params
- IBC/client/connection/channel status where available and useful

## Work package 3: Upgrade history after May 2022

Create:

- `content/docs/learn/upgrade-history-after-may-2022.md`

Navigation:

- Add under `Learn Terra Classic > Context and status`, near `history-after-the-collapse.md`.

Content scope:

- explain that this is upgrade history, not full Terra Classic history
- list software upgrades after Terra Classic continuation
- include proposal ID, title, voting end date, upgrade version, proposal type, source, and status
- separate software upgrades from funding/signaling proposals related to upgrades
- include a "source confidence" column
- link to Validator.info, PublicNode governance API, GitHub proposal docs, and other source records

Implementation rule:

- Build the table from verifiable sources.
- Do not include entries that cannot be sourced.
- If the May 2022 to mid-2024 range cannot be fully verified through one source, explicitly mark that range as requiring additional historical source reconciliation.

## Work package 4: Product status index

Create:

- `content/docs/appendices/product-status-index.md`

Navigation:

- Add under `Appendices`.
- Cross-link from `start.md`, `learn/what-terra-classic-supports-today.md`, Swap Protocol, Forex Protocol, Institutions, and Developer Quick Start.

Content scope:

- live core functionality
- live but risky / legacy assets
- proposed products
- governance-accepted but not live products
- disabled or historical behavior
- user verification paths

Minimum rows:

- LUNC transfers
- USTC transfers
- staking
- governance
- CosmWasm
- IBC
- burn tax
- Tax2Gas / tax behavior
- old market module behavior
- Swap Protocol / Market Module 2.0
- Forex Protocol / CSM
- EUTC
- multi-currency suite

## Work package 5: IBC documentation page

Create:

- `content/docs/learn/ibc-and-interchain.md`

Navigation:

- Add under `Learn Terra Classic`.
- Cross-link from `learn/strengths.md`, `develop/quick-start-guide.md`, `develop/module-specifications/spec-ibc.md`, `institutions/integration-architecture.md`, and `institutions/risk-and-due-diligence.md`.

Content scope:

- what IBC is
- what Terra Classic's chain ID is
- what IBC enables
- what IBC does not guarantee
- relayer dependency
- channel health
- route liquidity
- timeouts and failed transfers
- how builders should verify routes
- how users should verify destination chain/channel before sending
- Map of Zones as live external verification source

## Work package 6: Known error and stale-content cleanup

Apply all agreed cleanup items from the audit.

Scope:

- fix old `/docs/...` internal links
- fix wrong imported route paths
- fix full-node page titles
- remove smart-contract TODO
- remove or heavily gate Terra.py `MsgSwap`
- update stale Terra Core version language
- fix glossary wording around Columbus-5 and historical market swaps
- rename Swap Protocol "Use" language if production availability is not verified
- tighten repeated Forex/Swap/Staking/Governance wording where it creates confusion

Files likely affected:

- `content/docs/develop/classic-transaction-behavior.md`
- `content/docs/develop/smart-contracts/interact-with-smart-contract.md`
- `content/docs/develop/smart-contracts/set-up-local-environment.md`
- `content/docs/develop/terra-py/terra-py.md`
- `content/docs/full-node/run-a-full-terra-node/*`
- `content/docs/appendices/glossary.md`
- `content/docs/swap-protocol/*`
- generated docs nav source, if new pages or nav labels change

## Work package 7: Validation hardening

Update validation if practical in the same implementation pass.

Target:

- fail or warn on `/docs/...` internal links
- fail or warn on `TODO`, `TBD`, `placeholder`
- detect links to missing docs routes
- optionally flag old version strings in full-node docs for manual review

Files likely affected:

- `scripts/validate-docs.mjs`
- possibly `- START.md` if validation commands or workflow change

## Out of scope for this phase

Do not implement these in the same pass unless Dawid explicitly expands scope:

- full rewrite of every module specification
- complete full-node/operator rewrite beyond stale fixes and status corrections
- full security/audits/bug-bounty section
- Terra Classic Cookbook
- SDK support matrix
- governance-to-execution register beyond upgrade-history needs
- visual redesign
- broad analytics dashboard implementation
- charts, rankings, validator analytics, market analytics, or historical data exploration
- consuming StatsBin as a source
- embedding Validator.info or Map of Zones data directly into the docs UI

Reason:

The current phase should first fix the highest-confidence, user-facing, source-backed gaps from Dawid's feedback. Broader developer/operator/security work should be the next phase.

## Proposed implementation order

1. Add new pages and nav entries:
   - current network status and parameters
   - upgrade history after May 2022
   - product status index
   - IBC and interchain

2. Harden wallet pages:
   - start with overview pages
   - then Keplr
   - then Galaxy Station

3. Clean agreed errors:
   - links
   - titles
   - TODO
   - Terra.py swap example
   - stale version language
   - glossary status wording
   - Swap "use" language

4. Add validation hardening.

5. Run checks and document implementation.

## Required validation

After implementation, run:

```bash
npm run docs:check
npm run check
```

If validation logic changes, also test that the new checks catch at least one known bad pattern before cleanup or through a temporary fixture.

## Required process documentation

Create a new implementation note in `docs` after the changes are made.

Expected filename:

```text
025 - Docs Remediation Implementation - 2026-06-02.md
```

It should summarize:

- pages created
- pages edited
- sources used
- validation run
- any source conflicts
- any deferred issues

## Review decision needed from Dawid

Before implementation, Dawid should confirm whether this scope is correct:

- include all seven work packages, or
- split into two phases:
  - Phase A: current status, upgrade history, product status, IBC, cleanup
  - Phase B: wallet hardening and validation hardening

Recommendation:

Do all seven work packages in one implementation phase if time allows. They reinforce each other and reduce the risk of creating new status pages while leaving user-action and stale-import problems unresolved.
