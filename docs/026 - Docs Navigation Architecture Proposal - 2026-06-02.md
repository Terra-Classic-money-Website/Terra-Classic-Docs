# Docs Navigation Architecture Proposal

Created: 2026-06-02

## Purpose

This document proposes a navigation restructure for Terra Classic Docs.

The goal is to improve scanability, reduce sidebar depth pressure, and align the documentation with how real readers think about Terra Classic:

- new users need orientation, status, wallets, assets, and safety
- delegators need staking, validators, and governance
- product readers need L1 product/protocol explanations with clear live/proposed status
- builders need SDKs, smart contracts, modules, endpoints, and current behavior
- operators need full-node and validator runbooks
- institutions need a dedicated diligence path

This proposal does not remove any page or content. It only recommends changing how existing pages are grouped in the sidebar.

## Current State

The current generated navigation has these visible groups:

| Current group | Page count | Product/navigation issue |
| --- | ---: | --- |
| Welcome | 1 | Single-item group consumes vertical space. |
| Learn Terra Classic | 26 | Mixes basics, status, wallets, fees, IBC, history, and economics. Useful content, weak grouping. |
| Staking Protocol | 8 | Correct content, but too prominent as its own top-level section beside two proposed products. |
| Swap Protocol | 11 | Correct status discipline, but top-level section increases sidebar length. |
| Forex Protocol | 10 | Correct risk/status discipline, but top-level section increases sidebar length. |
| Governance | 8 | Deserves a top-level section because governance is a core user action and a credibility issue. |
| For Institutions | 10 | Deserves a top-level section because institutional readers need a separate trust and diligence path. |
| Develop | 46 | Large, useful, but overloaded. Includes app builders, module references, localnet, and tooling. |
| Run a Full Node | 11 | Belongs near developer/operator material, not as a separate distant section. |
| Appendices | 3 | Mostly correct, but `Product status index` is more useful in the status/navigation layer than as an appendix. |
| Reference | 1 | `Cosmes Contracts` is effectively stranded because it is not intentionally placed in the main navigation. |

The screenshots show the practical problem: on mobile, the sidebar becomes a long scroll of high-level headings before the reader gets a coherent mental model.

## Product Diagnosis

The current navigation grew organically as pages were added. That was appropriate during content expansion, but it now creates three problems.

First, it overexposes the three protocol/product sections equally at top level. Staking Protocol is live native functionality. Swap Protocol is a proposed/design-status product unless production deployment is verified. Forex Protocol is a governance-accepted concept, not a live protocol. They belong together, but their status differences must remain visible inside the section.

Second, `Learn Terra Classic` is doing too many jobs. It contains basic identity, current status, history, wallets, economics, fees, IBC, and strengths. That makes the section feel like a dumping ground even though the pages themselves are valuable.

Third, `Develop` and `Run a Full Node` are separated even though both are operationally technical. Developers, validators, infrastructure providers, and advanced integrators often need both areas. Splitting them increases navigation distance and makes the docs feel less like an integrated technical system.

## Recommended Top-Level Navigation

Use this top-level structure:

```text
Learn Terra Classic
L1 Protocols
Governance
For Institutions
Build & Operate
Appendices
```

This removes the standalone `Welcome`, `Staking Protocol`, `Swap Protocol`, `Forex Protocol`, `Develop`, and `Run a Full Node` top-level headings without removing any pages.

## Naming Decisions

### Use `L1 Protocols`, not `L1 Products`

Recommendation: `L1 Protocols`.

Reasoning:

- `L1 Products` is user-friendly, but it can over-market proposed features and make Forex Protocol sound more mature than it is.
- `L1 Protocols` fits Staking, Swap, and Forex without implying every item is already live for ordinary users.
- The child pages can keep product names such as `Staking Protocol`, `Swap Protocol`, and `Forex Protocol`.
- Status-sensitive pages remain inside each protocol so the docs keep source discipline.

Rejected alternatives:

| Name | Problem |
| --- | --- |
| L1 Products | Strong for product narrative, but too promotional for proposed/non-live features. |
| Native Products | Clearer than generic products, but still implies product availability. |
| Protocols | Too generic. Could include governance, IBC, modules, or staking. |
| L1 Protocols & Products | Accurate but clunky in a narrow sidebar. |
| Terra Classic Protocols | Redundant with the brand and still broad. |

### Use `Build & Operate`, not `For Developers`

Recommendation: `Build & Operate`.

Reasoning:

- `For Developers` excludes validators, full-node operators, endpoint operators, infrastructure maintainers, and technical institutional teams.
- `Develop` is too narrow and slightly generic.
- `Build & Operate` captures the actual job-to-be-done: build apps, integrate the chain, run infrastructure, and verify protocol behavior.
- It also sets up future operator hardening cleanly: sentry architecture, oracle feeder setup, monitoring, upgrades, key management, and incident response.

Rejected alternatives:

| Name | Problem |
| --- | --- |
| For Developers | Too narrow for node operators and validators. |
| Developers & Validators | Misses non-validator full-node operators and infrastructure teams. |
| Technical Docs | Generic and less action-oriented. |
| Build on Terra Classic | Good for app builders, weak for operators. |
| Develop & Operate | Accurate, but less natural than `Build & Operate`. |

## Proposed Navigation Tree

## 1. Learn Terra Classic

Purpose: orientation, status, assets, wallet use, and conceptual understanding.

```text
Learn Terra Classic:
  Start here
  Basics
    About Terra Classic
    Terra Classic strengths
    What Terra Classic is not
  Status and history
    What is supported today
    Current network status
    Product status index
    Upgrade history
    History after the collapse
  Assets and economics
    LUNC and USTC
    Burns, tax, and supply
    Fees
  Interchain
    IBC and interchain
  Wallets
    Keplr
      Keplr install
      Keplr wallet
      Keplr send
      Keplr staking
      Keplr governance
      Keplr testnet
    Galaxy Station
      Galaxy Station install
      Galaxy Station wallet
      Galaxy Station send
      Galaxy Station staking
      Galaxy Station governance
      Galaxy Station testnet
```

Changes:

- Move `start` from `Welcome` into `Learn Terra Classic` as `Start here`.
- Move `Product status index` from `Appendices` into `Learn Terra Classic > Status and history`.
- Keep wallet pages in Learn because ordinary users look for wallets before they understand protocol sections.
- Keep `IBC and interchain` in Learn, but place it under a named group so it does not float between strengths and wallets.

Why this is better:

- New readers can understand Terra Classic before encountering product/protocol depth.
- Status-sensitive pages become easier to find.
- Wallets remain user-facing rather than buried inside technical docs.
- The section becomes structured instead of broad.

## 2. L1 Protocols

Purpose: native Terra Classic protocol/product surfaces.

```text
L1 Protocols:
  Staking Protocol
    Use Staking Protocol
      How it works
      Delegate LUNC
      Rewards and APR
      Risks and unstaking
    Validators
      Choose a validator
      Validator responsibilities
    Technical reference
      Developer reference
  Swap Protocol
    Status
      Governance and status
      Implementation status
    Understand Swap Protocol
      How it works
      Swap LUNC and USTC
    Economics and safety
      Fees, burns, and liquidity
      Swap oracles and safety
      Scenarios and examples
      Risks and limitations
    Technical reference
      Validator operations
      Swap developer reference
  Forex Protocol
    Status and model
      Governance and status
      Implementation status
      Launch readiness
      How it is proposed to work
    Collateral and safety
      Collateral and stable assets
      Fees, buybacks, and liquidity
      Forex oracles and safety
      Risks and open questions
    Technical reference
      Forex developer reference
```

Changes:

- Combine current `Staking Protocol`, `Swap Protocol`, and `Forex Protocol` sections into one top-level `L1 Protocols` section.
- Keep each protocol overview as the clickable parent.
- Keep internal subgrouping almost unchanged.
- Keep `Understand Swap Protocol`; do not use `Use Swap Protocol` until production availability is externally verified.

Why this is better:

- Reduces three top-level headings into one.
- Presents Terra Classic as having a coherent L1 product/protocol layer.
- Preserves status discipline for proposed products.
- Lets readers compare live, proposed, and governance-accepted protocol surfaces without confusing them.

Important warning:

Do not make `L1 Protocols` read like a launch claim. The section should not imply that Swap Protocol and Forex Protocol are live. The child labels and status pages must keep the distinction visible.

## 3. Governance

Purpose: governance participation, validator accountability, and decision quality.

```text
Governance:
  Governance
  Understand governance
    Voting power and delegation
    Proposal lifecycle
    Vote options
  Use governance
    How to vote
    How to evaluate proposals
  Accountability and risk
    Validator accountability
    Risks and safeguards
```

Recommendation: keep as top-level.

Reasoning:

- Governance is not just a feature. It is Terra Classic's operating system.
- The knowledge corpus repeatedly identifies governance quality as a strategic constraint.
- Users, delegators, investors, validators, and institutions all need direct access to this section.
- Folding Governance into Learn would hide one of the chain's most important decision surfaces.

Minor wording option:

- Keep `Governance`, not `Community Governance`.
- `Community Governance` sounds nicer, but it softens the validator/delegator power reality and can become less precise.

## 4. For Institutions

Purpose: due diligence, integration, product rails, assets, and risk framing for serious external readers.

```text
For Institutions:
  For Institutions
  Institutional use cases
    Multi-currency suite
    Payment gateway
    Requirements and contact
  Product rails
    Native assets
    Native swap rails
    Collateralized stable assets
  Integration and risk
    Integration architecture
    Risk and due diligence
    Source and verification
```

Recommendation: keep as top-level.

Reasoning:

- Institutional readers do not want to infer their path from general Learn or developer docs.
- This section is a trust surface for external observers, partners, exchanges, fintechs, infrastructure teams, and analysts.
- It must remain clearly separated from public product hype.

Minor wording option:

- Keep `For Institutions`.
- Do not rename to `Institutions` unless the whole sidebar becomes more compact. `For Institutions` is clearer as a user path.

## 5. Build & Operate

Purpose: app development, integrations, protocol reference, local development, endpoints, full-node operation, and validator operations.

```text
Build & Operate:
  Start building
    Quick start guide
    Current vs proposed
    Tx best practices
  Local development
    Run Terra Classic localnet
  Builder tooling
    CosmES SDK
      Get started
      Query data
      Programmatic wallet
      Transactions
      Contracts
    Terra.py on Terra Classic
  Smart contracts
    Build a Terra Classic dApp
    Set up local environment
    Write smart contract
    Interact with contracts
    Manage CW20 tokens
  Protocol reference
    Module specifications
      Auth module (x/auth)
      Authz module (x/authz)
      Bank module (x/bank)
      Capability module (x/capability)
      Consensus params module (x/consensus)
      Crisis module (x/crisis)
      Distribution module (x/distribution)
      DynComm module (x/dyncomm)
      Evidence module (x/evidence)
      Feegrant module (x/feegrant)
      Governance module (x/gov)
      IBC core module (x/ibc)
      IBC fee module (x/ibc-fee)
      IBC hooks module (ibc-hooks)
      Interchain accounts module (x/ica)
      Market module (x/market)
      Mint module (x/mint)
      Oracle module (x/oracle)
      Params module (x/params)
      Slashing module (x/slashing)
      Staking module (x/staking)
      Tax module (x/tax)
      Tax exemption module (x/taxexemption)
      Treasury module (x/treasury)
      IBC transfer module (x/transfer)
      Upgrade module (x/upgrade)
      Vesting module (x/vesting)
      Wasm module (x/wasm)
  Run infrastructure
    Full node overview
      System configuration
      Build Terra Classic Core
      Configure general settings
      Set up a production environment
      Join a network
      Sync
      Validate on columbus-5
      Validate on rebel-2
      Reset and troubleshooting
    Public Network Endpoints
```

Changes:

- Combine current `Develop` and `Run a Full Node` sections.
- Move `Public Network Endpoints` into `Run infrastructure`.
- Place `Cosmes Contracts` under `CosmES SDK` as `Contracts` so it is no longer stranded in `Reference`.
- Keep module specifications under technical docs, but make `Protocol reference` the obvious parent.

Why this is better:

- It matches the real technical lifecycle: learn current behavior, build locally, use SDKs, deploy contracts, inspect modules, run infrastructure.
- It removes the artificial split between developers and node operators.
- It creates a future home for serious operator hardening without inventing another top-level section.

Important warning:

`Build & Operate` will be the largest section. That is acceptable if its first visible layer is grouped tightly. The implementation should avoid exposing all module specs by default unless the active page is inside that branch.

## 6. Appendices

Purpose: supporting reference material that does not belong in the main user journey.

```text
Appendices:
  Glossary
  Source and review model
```

Changes:

- Move `Product status index` to `Learn Terra Classic > Status and history`.

Why this is better:

- `Product status index` is not a low-priority appendix. It is one of the most important trust and orientation pages.
- Keeping it in Appendices hides a high-value status tool.

## Recommended Implementation Order

## Phase 1: Navigation-only restructure

Change only navigation grouping and labels.

Files likely affected:

- `scripts/build-docs-index.mjs`
- `scripts/docs-utils.mjs`, only if group labels or fallback labels need updates
- generated files under `src/docs/generated` after running `npm run docs:index`
- `src/designsystem.tsx`, if the design-system sample should reflect the new sidebar labels
- `docs`, for implementation notes

Do not move markdown files in this phase.

Reason:

Changing only nav data preserves URLs, edit links, source metadata, and existing content. It gives the owner a cleaner sidebar without adding content migration risk.

## Phase 2: Optional sidebar behavior hardening

Only after Phase 1 is visually reviewed, consider shell behavior changes:

- optional top-level group collapse on mobile
- optional saved expanded state
- optional active-section auto-scroll
- optional tighter nav group spacing on mobile

Do not start here.

Reason:

The current shell already supports nested label nodes and animated expansion. The first problem is information architecture, not component capability.

## Phase 3: Content follow-up

After the new navigation is accepted, future content work should address:

- a stronger `Build & Operate` operator pathway
- a protocol architecture map above module specs
- a security and incident-response section
- wallet support depth
- public corrections/contribution workflow

These are content/product gaps, not prerequisites for the navigation restructure.

## Implementation Rules

- Do not delete pages.
- Do not change URLs unless explicitly requested.
- Do not move files unless there is a content-source reason, not just a nav reason.
- Keep `Swap Protocol` and `Forex Protocol` status labels visible.
- Keep `Governance` top-level.
- Keep `For Institutions` top-level.
- Make `Product status index` easier to find.
- Place every currently generated `Reference` page intentionally in the nav.
- Update the design-system sample if the visible sidebar headings change.

## Validation Required If Implemented

Because implementation would change generated navigation and TypeScript output, run:

```bash
npm run docs:index
npm run docs:check
npm run check
```

Rendered QA should inspect:

- desktop sidebar at 1440px and 1500px+
- tablet drawer at 768-1299px
- mobile drawer at 390px width
- active-page expansion for a deep module spec
- active-page expansion for a deep wallet page
- active-page expansion for a full-node page
- active-page expansion for a Swap Protocol or Forex Protocol page

## Final Recommendation

Implement the navigation restructure in this order:

1. Fold `Welcome` into `Learn Terra Classic`.
2. Rework `Learn Terra Classic` into `Basics`, `Status and history`, `Assets and economics`, `Interchain`, and `Wallets`.
3. Combine Staking, Swap, and Forex into `L1 Protocols`.
4. Keep `Governance` top-level.
5. Keep `For Institutions` top-level.
6. Combine `Develop` and `Run a Full Node` into `Build & Operate`.
7. Move `Product status index` out of `Appendices` and place it under status.
8. Place `Cosmes Contracts` under `CosmES SDK`.

This gives the docs a cleaner product architecture without weakening the honesty of the content.

The sidebar should make Terra Classic look organized, not artificially simple. The right structure is not fewer ideas. It is fewer top-level buckets, clearer user intent, and better status discipline.
