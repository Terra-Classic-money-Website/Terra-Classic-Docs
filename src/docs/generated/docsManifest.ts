import type { DocsPage } from "../types";

export const docsPages = [
  {
    "slug": "start",
    "path": "/start/",
    "sourceFile": "content/docs/start.md",
    "group": "Welcome",
    "navTitle": "Terra Classic Documentation",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 0,
    "title": "Terra Classic Documentation",
    "description": "Start here for the independent Terra Classic documentation site, including user guides, developer references, and node operation material.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "bootstrap-2026-05-27",
    "sourcePath": "content/docs/start.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "What this docs site is",
        "id": "what-this-docs-site-is"
      },
      {
        "depth": 2,
        "title": "Main sections",
        "id": "main-sections"
      },
      {
        "depth": 2,
        "title": "Contribution model",
        "id": "contribution-model"
      }
    ],
    "body": "## What this docs site is\n\nTerra Classic Docs is a custom, GitHub Pages-only documentation site for Terra Classic users, node operators, validators, and builders.\n\nIt is separate from the main Terra Classic Website. The docs site is built around source-aware markdown content, clear navigation, and a contribution model that can evolve through GitHub issues and pull requests.\n\n## Main sections\n\n- [Learn](/learn/protocol/) covers user-facing Terra Classic concepts, wallets, and fees.\n- [Staking Protocol](/staking-protocol/overview/) covers LUNC delegation, rewards, validator selection, unstaking risks, validator responsibilities, and developer integration.\n- [Swap Protocol](/swap-protocol/overview/) covers the proposed no-mint Market Module 2.0 route for native LUNC and USTC swaps, including liquidity design, oracle pricing, fees, burns, validator operations, and implementation-status requirements.\n- [Forex Protocol](/forex-protocol/overview/) covers the proposed Terra Classic L1 stable-asset system, including EUTC, collateral design, minting and redemption model, fees, liquidity, oracle controls, risks, and implementation requirements.\n- [Governance](/governance/overview/) covers proposal voting, voting power, vote options, proposal review, validator accountability, and governance risks.\n- [For Institutions](/institutions/overview/) covers institutional use cases, multi-currency assets, payment gateway architecture, decentralized contact requirements, integration paths, and due diligence.\n- [Develop](/develop/smart-contracts/overview/) covers smart contracts, CosmES, Terra.py, transaction behavior, endpoints, localnet, and module specifications.\n- [Full Node](/full-node/overview/) covers node operation, production setup, sync, troubleshooting, and validator-network guides.\n- [Appendices](/appendices/glossary/) covers reference material such as glossary terms.\n\n## Contribution model\n\nThe long-term target is a community-maintained docs surface where corrections and improvements are proposed through GitHub. The edit link on each page opens its source markdown file in the public docs repository.\n",
    "previousSlug": null,
    "nextSlug": "learn/protocol"
  },
  {
    "slug": "learn/protocol",
    "path": "/learn/protocol/",
    "sourceFile": "content/docs/learn/protocol.md",
    "group": "Learn Terra Classic",
    "navTitle": "About Terra Classic",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 1,
    "title": "About Terra Classic",
    "description": "How Terra Classic stablecoins, LUNC, staking, and governance interconnect.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/protocol.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Terra and LUNC",
        "id": "terra-and-lunc"
      },
      {
        "depth": 2,
        "title": "Stablecoin mechanics (historical)",
        "id": "stablecoin-mechanics-historical"
      },
      {
        "depth": 2,
        "title": "Validators and consensus",
        "id": "validators-and-consensus"
      },
      {
        "depth": 2,
        "title": "Staking lifecycle",
        "id": "staking-lifecycle"
      },
      {
        "depth": 3,
        "title": "Slashing",
        "id": "slashing"
      },
      {
        "depth": 2,
        "title": "Governance",
        "id": "governance"
      },
      {
        "depth": 2,
        "title": "Fees and rewards",
        "id": "fees-and-rewards"
      }
    ],
    "body": "Terra Classic combines proof-of-stake security and on-chain governance. This overview explains how LUNC, validators, and delegators all interact.\n\n> **Important**\n>\n> Since May 2022, Terra Classic has no pegged stablecoins. TerraUSD (UST) has depegged and is currently considered a speculative asset.\n>\n> References to **stablecoins** in this document refer to the historical algorithmic operation of Terra.\n\n## Terra and LUNC\n\n- **LUNC** is the staking and governance asset. Validators and delegators stake LUNC to secure the chain, earn rewards, and participate in governance.\n- **TerraUSD et al.** historically tracked fiat currencies (for example, TerraUSD `uusd`, TerraKRW `ukrw`, TerraSDR `usdr`). Users historically minted Terra by burning LUNC. On Classic, the old mint/burn swap path was disabled after 2022; native LUNC and USTC swaps are now handled through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0's no-mint pool design.\n\n## Stablecoin mechanics (historical)\n\nTerra was designed around two supply pools—Terra and LUNC. The market module encouraged arbitrage to expand or contract stablecoin supply and keep prices near their pegs.\n\n- **Expansion**: When Terra traded above the peg, burning LUNC to mint Terra increased supply and reduced the premium.\n- **Contraction**: When Terra traded below the peg, burning Terra to mint LUNC reduced Terra supply.\n\n> **Important**\n> Following the 2022 hyperinflation event, Classic governance disabled market swap mint/burn paths. LUNC remains the staking asset. Native LUNC and USTC swaps now use [Swap Protocol](/swap-protocol/overview/), which avoids minting new supply and prices USTC through oracle-reported market data.\n\n## Validators and consensus\n\nValidators run full nodes, propose blocks, and vote during Tendermint consensus.\n\n1. A proposer is selected (weighted by stake) and broadcasts a block.\n2. Validators vote in two rounds. If ≥2/3 of voting power signs both rounds, the block is committed.\n3. Fees from the block enter the distribution module and are later shared with delegators.\n\nLearn more in the validator guides under `Run a full node` and the [Staking Protocol overview](/staking-protocol/overview/).\n\n## Staking lifecycle\n\n- **Delegating**: Delegators bond LUNC to a validator to earn rewards. Staked LUNC contributes to validator voting power but always belongs to the delegator.\n- **Bonded / unbonded / unbonding**: LUNC exists in three phases. Unbonding takes 21 days and does not accrue rewards.\n- **Redelegation**: Move bonded stake between validators without waiting the unbonding period (subject to a 21-day cooldown per source/target pair).\n\n### Slashing\n\nMisbehaving validators are penalised by the slashing module:\n\n- **Double-signing**: Signing conflicting blocks at the same height.\n- **Downtime**: Failing to participate in consensus.\n- **Oracle faults**: Missing required oracle votes (`x/oracle`).\n\nEvery slash reduces both validator self-bond and delegator stake, and the validator is jailed until conditions are resolved. Review the [slashing spec](/develop/module-specifications/spec-slashing/) for parameters.\n\n## Governance\n\nTerra Classic governance lets stakers steer protocol policy.\n\n1. **Deposit period**: Community members deposit LUNC on a proposal until the minimum threshold is reached or the maximum deposit period expires.\n2. **Voting period**: Validators vote `Yes`, `No`, `NoWithVeto`, or `Abstain`. Delegators can override their validator's vote.\n3. **Execution**: Passed proposals trigger automatic handlers or human follow-up depending on the proposal type. Deposits, quorum, threshold, veto, and voting-period parameters are governance-controlled and should be queried before relying on a fixed value.\n\nCommon proposal types include parameter changes, community pool spends, software upgrades, and text proposals. See the [Governance guide](/governance/overview/) and the [governance module spec](/develop/module-specifications/spec-governance/) for details.\n\n## Fees and rewards\n\n- **Gas** pays validator compute and storage costs (`x/auth`).\n- **Burn tax** is charged via the `x/tax` module on many transfers; rates are queryable through LCD or RPC endpoints.\n- **Swap Protocol spread fees** apply to native LUNC and USTC swaps through Market Module 2.0. The protocol charges a 0.35% spread fee when swaps are enabled and capacity remains; the fee routes 50% to burn and 50% to the Oracle Pool.\n\nRewards flow into the distribution module and are split between validators and delegators based on stake and commission. Consult the [Staking Protocol rewards guide](/staking-protocol/rewards-and-apr/), the [Swap Protocol fees guide](/swap-protocol/fees-burns-and-liquidity/), and the [fees guide](/learn/fees/) for related mechanics.\n",
    "previousSlug": "start",
    "nextSlug": "learn/what-terra-classic-supports-today"
  },
  {
    "slug": "learn/what-terra-classic-supports-today",
    "path": "/learn/what-terra-classic-supports-today/",
    "sourceFile": "content/docs/learn/what-terra-classic-supports-today.md",
    "group": "Learn Terra Classic",
    "navTitle": "What is supported today",
    "navDepth": 1,
    "navParent": "learn/context-and-status",
    "navHasChildren": false,
    "navOrder": 3,
    "title": "What is supported today",
    "description": "A plain-language status guide for live, proposed, disabled, and historical Terra Classic functionality.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/learn/what-terra-classic-supports-today.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Status language",
        "id": "status-language"
      },
      {
        "depth": 2,
        "title": "Live core functionality",
        "id": "live-core-functionality"
      },
      {
        "depth": 2,
        "title": "Proposed or not fully implemented products",
        "id": "proposed-or-not-fully-implemented-products"
      },
      {
        "depth": 2,
        "title": "Historical or disabled behavior",
        "id": "historical-or-disabled-behavior"
      },
      {
        "depth": 2,
        "title": "Where to verify live data",
        "id": "where-to-verify-live-data"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Terra Classic documentation should separate what users can do today from what the community has proposed, discussed, or preserved for historical context.\n\nThis page is a documentation-status guide. It is not a live chain dashboard, explorer, staking dashboard, or market-data page. Use Terra Classic ecosystem tools and explorers for live balances, prices, validator data, governance voting, liquidity, and transaction history.\n\n## Status language\n\nUse these terms when reading this docs site:\n\n| Status | Meaning |\n| --- | --- |\n| Live | Available on Terra Classic mainnet today through existing chain behavior or supported tooling. |\n| Proposed | Described in product, governance, or design material, but not documented as a live mainnet product. |\n| Governance-accepted | Accepted by governance as direction or scope, but still requiring implementation, testing, funding, deployment, or support before users can rely on it. |\n| In development | Being designed, built, tested, or prepared, but not live for ordinary mainnet users. |\n| Disabled | Existing or historical behavior that is not available as an active user route. |\n| Historical | Useful for understanding Terra Classic history, but not current product behavior. |\n\nIf a page does not make status clear, treat the feature as unverified until you confirm it through current chain behavior, governance records, releases, or ecosystem tooling.\n\n## Live core functionality\n\nTerra Classic supports core L1 behavior:\n\n- LUNC transfers\n- USTC transfers as a legacy market-priced asset\n- transaction fees paid in LUNC\n- staking and delegation\n- validator consensus\n- governance voting\n- CosmWasm smart contracts\n- IBC functionality where channels and relayers are operational\n- node operation and RPC/LCD/gRPC access\n\nLive does not mean risk-free. Wallet security, validator behavior, market volatility, chain parameters, external liquidity, and governance decisions can affect user outcomes.\n\n## Proposed or not fully implemented products\n\nSome docs sections explain product directions that should not be treated as live user products unless a page explicitly says they are live and shows the source basis.\n\nImportant examples:\n\n- [Forex Protocol](/forex-protocol/overview/) is documented as a proposed collateralized stable-asset system. Its own status page says it is not in production.\n- [Swap Protocol](/swap-protocol/overview/) explains the Market Module 2.0 no-mint swap design. Read [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before treating it as an available route.\n\nProduct direction is valuable, but it is not the same thing as production availability.\n\n## Historical or disabled behavior\n\nThe old Terra market module and algorithmic mint/burn model are historically important, but they should not be treated as a current product promise.\n\nWhen the docs discuss pre-2022 Terra mechanics, read them as history unless the page clearly states that a redesigned and deployed Terra Classic mechanism exists today.\n\n## Where to verify live data\n\nUse external ecosystem tools for live data:\n\n- explorers for transactions, addresses, blocks, and governance records\n- staking dashboards for validator and delegation data\n- market venues for prices and liquidity\n- wallet interfaces for supported actions\n- public endpoints for developer queries\n\nThe docs should help you understand what those tools mean. They should not replace them.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live product availability through current chain behavior, governance records, releases, wallets, and ecosystem tools.\n",
    "previousSlug": "learn/protocol",
    "nextSlug": "learn/lunc-and-ustc"
  },
  {
    "slug": "learn/lunc-and-ustc",
    "path": "/learn/lunc-and-ustc/",
    "sourceFile": "content/docs/learn/lunc-and-ustc.md",
    "group": "Learn Terra Classic",
    "navTitle": "LUNC and USTC",
    "navDepth": 1,
    "navParent": "learn/context-and-status",
    "navHasChildren": false,
    "navOrder": 4,
    "title": "LUNC and USTC",
    "description": "How to understand Terra Classic's native asset LUNC and legacy asset USTC without confusing them with proposed products or old peg assumptions.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/learn/lunc-and-ustc.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "LUNC",
        "id": "lunc"
      },
      {
        "depth": 2,
        "title": "USTC",
        "id": "ustc"
      },
      {
        "depth": 2,
        "title": "Relationship to proposed products",
        "id": "relationship-to-proposed-products"
      },
      {
        "depth": 2,
        "title": "Reader rule",
        "id": "reader-rule"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Terra Classic has two historically important assets: LUNC and USTC.\n\nThey should be explained by current behavior, not by old Terra assumptions or market narratives.\n\n## LUNC\n\nLUNC is Terra Classic's native staking, governance, and gas asset.\n\nIt is used for:\n\n- paying transaction fees\n- staking and delegation\n- validator consensus power\n- governance voting power when staked\n- transfers between wallets\n- smart contract and application interactions\n\nLUNC is not a stable asset. It is a volatile crypto asset.\n\n## USTC\n\nUSTC is a live Terra Classic legacy asset. It can exist on-chain and be transferred, but it should not be described as a guaranteed 1 USD stablecoin.\n\nAfter the 2022 collapse, USTC became a market-priced legacy asset. Any documentation that mentions USTC should avoid implying:\n\n- guaranteed 1 USD value\n- guaranteed redemption\n- risk-free settlement\n- automatic repeg\n- stablecoin quality for institutions\n\nUSTC may appear in proposed product designs such as Swap Protocol or future collateralized stable-asset discussions, but those proposals do not turn USTC back into a guaranteed stablecoin by themselves.\n\n## Relationship to proposed products\n\nLUNC and USTC are live assets. Proposed product routes using them are separate.\n\nFor example:\n\n- A wallet transfer of LUNC or USTC is different from a proposed native swap route.\n- USTC as a transferable legacy asset is different from a new collateralized stable asset.\n- A product design using USTC does not guarantee product deployment.\n\nThe docs should keep those distinctions visible.\n\n## Reader rule\n\nWhen evaluating any Terra Classic page, ask:\n\n| Question | Why it matters |\n| --- | --- |\n| Is this about an asset that exists on-chain? | Asset existence is not the same as product availability. |\n| Is this about a live user action? | A proposed product may not be usable. |\n| Is this about historical Terra behavior? | Old Terra mechanics may no longer apply. |\n| Is this about a future product design? | Design language should not be treated as a production promise. |\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nUse explorers, wallets, and current ecosystem tools for live balances, transfers, prices, and liquidity.\n",
    "previousSlug": "learn/what-terra-classic-supports-today",
    "nextSlug": "learn/burns-tax-and-supply"
  },
  {
    "slug": "learn/burns-tax-and-supply",
    "path": "/learn/burns-tax-and-supply/",
    "sourceFile": "content/docs/learn/burns-tax-and-supply.md",
    "group": "Learn Terra Classic",
    "navTitle": "Burns, tax, and supply",
    "navDepth": 1,
    "navParent": "learn/context-and-status",
    "navHasChildren": false,
    "navOrder": 5,
    "title": "Burns, tax, and supply",
    "description": "A conceptual guide to Terra Classic burn, tax, and supply language without turning docs into a live data dashboard.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/learn/burns-tax-and-supply.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Supply",
        "id": "supply"
      },
      {
        "depth": 2,
        "title": "Burns",
        "id": "burns"
      },
      {
        "depth": 2,
        "title": "Burn tax",
        "id": "burn-tax"
      },
      {
        "depth": 2,
        "title": "Oracle Pool and Community Pool",
        "id": "oracle-pool-and-community-pool"
      },
      {
        "depth": 2,
        "title": "Proposed product burns",
        "id": "proposed-product-burns"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Burn, tax, and supply language is central to Terra Classic, but it is easy to overstate.\n\nThis page explains the concepts. It does not provide live supply, burn totals, tax totals, or price data. Use ecosystem trackers, explorers, and market tools for live values.\n\n## Supply\n\nSupply describes how many units of an asset exist under the chain's accounting rules.\n\nFor Terra Classic, supply discussion should be careful because old Terra mint/burn mechanics, post-collapse changes, voluntary burns, tax burns, and proposed products can be confused with each other.\n\nThe docs should not imply that every product idea directly or immediately reduces supply.\n\n## Burns\n\nA burn removes tokens from spendable circulation under the chain's accounting model.\n\nBurns can come from different sources:\n\n- voluntary burns by users, exchanges, or community entities\n- tax-related burns where current chain rules apply\n- protocol-designed burns in proposed products\n- historical burns connected to old Terra mechanics\n\nThose categories should not be mixed.\n\n## Burn tax\n\nTerra Classic has used tax mechanics as part of its post-collapse economic policy.\n\nFor user documentation, the important points are:\n\n- some transaction types may be affected by tax rules\n- tax behavior can change through governance\n- users should review wallet transaction details before signing\n- developers should not hardcode assumptions about tax behavior\n\nFor live parameters, use current chain queries or trusted ecosystem resources. The docs should explain the concept, not act as a live parameter dashboard.\n\n## Oracle Pool and Community Pool\n\nTerra Classic docs sometimes mention the Oracle Pool and Community Pool.\n\nAt a high level:\n\n- Oracle Pool language relates to oracle incentives and oracle-related funding mechanics.\n- Community Pool language relates to governance-controlled community funding.\n\nExact balances, routing, and parameter behavior should be verified through live chain tools or current governance records before being used in public claims.\n\n## Proposed product burns\n\nSome proposed products, including the Market Module 2.0 / Swap Protocol design, include burn mechanics.\n\nThat does not mean the product is live or that a specific burn outcome is guaranteed.\n\nWhen reading proposed product pages, separate:\n\n- the proposed mechanism\n- the governance status\n- implementation status\n- production availability\n- actual live burn data\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nFor live values, use Terra Classic explorers, burn trackers, governance records, wallets, or direct chain queries.\n",
    "previousSlug": "learn/lunc-and-ustc",
    "nextSlug": "learn/history-after-the-collapse"
  },
  {
    "slug": "learn/history-after-the-collapse",
    "path": "/learn/history-after-the-collapse/",
    "sourceFile": "content/docs/learn/history-after-the-collapse.md",
    "group": "Learn Terra Classic",
    "navTitle": "History after the collapse",
    "navDepth": 1,
    "navParent": "learn/context-and-status",
    "navHasChildren": false,
    "navOrder": 6,
    "title": "History after the collapse",
    "description": "A concise post-May-2022 Terra Classic history guide focused on docs context, product status, and reader trust.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/learn/history-after-the-collapse.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Before the collapse",
        "id": "before-the-collapse"
      },
      {
        "depth": 2,
        "title": "After May 2022",
        "id": "after-may-2022"
      },
      {
        "depth": 2,
        "title": "Why history matters for docs",
        "id": "why-history-matters-for-docs"
      },
      {
        "depth": 2,
        "title": "Current documentation principle",
        "id": "current-documentation-principle"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Terra Classic cannot be documented responsibly without acknowledging what changed after May 2022.\n\nThis page is a concise context guide, not a full historical archive.\n\n## Before the collapse\n\nThe original Terra system used algorithmic mint/burn mechanics between LUNA and Terra stable assets. That model depended on market confidence, oracle pricing, and arbitrage behavior.\n\nWhen confidence broke in May 2022, the old design helped accelerate the crisis.\n\n## After May 2022\n\nTerra Classic became the continuation of the original chain.\n\nThe post-collapse chain kept operating, but the product reality changed:\n\n- LUNC became the Terra Classic native staking, governance, and gas asset.\n- USTC became a legacy market-priced asset, not a guaranteed 1 USD stablecoin.\n- Old stablecoin assumptions could no longer be treated as safe.\n- Governance and validators became central to any credible recovery path.\n- The community began exploring burns, tax policy, staking, governance reform, and new product concepts.\n\n## Why history matters for docs\n\nHistorical context is not included to weaken Terra Classic's story.\n\nIt is included because credible documentation must explain:\n\n- why old mint/burn assumptions are not acceptable as current product promises\n- why USTC should not be described as a guaranteed stablecoin\n- why proposed products need explicit status language\n- why stable-asset products need stronger source discipline than ordinary pages\n- why institutions and builders need evidence, not only narrative\n\nTerra Classic's best story is not that the collapse did not happen. The stronger story is that the chain survived, constrained old failure modes, and can rebuild only through clearer governance, better engineering, and more disciplined public communication.\n\n## Current documentation principle\n\nWhen the docs describe historical mechanics, they should say they are historical.\n\nWhen the docs describe proposed products, they should say they are proposed or governance-accepted but not live.\n\nWhen the docs describe live behavior, they should show a source path or point to a live verification resource.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify specific historical events through governance records, release notes, and ecosystem sources.\n",
    "previousSlug": "learn/burns-tax-and-supply",
    "nextSlug": "learn/what-terra-classic-is-not"
  },
  {
    "slug": "learn/what-terra-classic-is-not",
    "path": "/learn/what-terra-classic-is-not/",
    "sourceFile": "content/docs/learn/what-terra-classic-is-not.md",
    "group": "Learn Terra Classic",
    "navTitle": "What Terra Classic is not",
    "navDepth": 1,
    "navParent": "learn/context-and-status",
    "navHasChildren": false,
    "navOrder": 7,
    "title": "What Terra Classic is not",
    "description": "A clear explanation of common Terra Classic misconceptions, including Terra 2.0, old Terra mechanics, USTC, centralization, and stablecoin assumptions.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/learn/what-terra-classic-is-not.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Not Terra 2.0",
        "id": "not-terra-20"
      },
      {
        "depth": 2,
        "title": "Not the old algorithmic stablecoin system",
        "id": "not-the-old-algorithmic-stablecoin-system"
      },
      {
        "depth": 2,
        "title": "Not a guaranteed USTC repeg",
        "id": "not-a-guaranteed-ustc-repeg"
      },
      {
        "depth": 2,
        "title": "Not a centrally operated product",
        "id": "not-a-centrally-operated-product"
      },
      {
        "depth": 2,
        "title": "Not a finished institutional stablecoin stack",
        "id": "not-a-finished-institutional-stablecoin-stack"
      },
      {
        "depth": 2,
        "title": "Not investment advice",
        "id": "not-investment-advice"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Terra Classic is easiest to understand when several common misconceptions are removed first.\n\nThis page defines what Terra Classic should not be confused with. It is not a warning against the chain. It is a clarity layer for readers who are trying to separate current Terra Classic from old Terra assumptions, market speculation, and future product ambition.\n\n## Not Terra 2.0\n\nTerra Classic is not Terra 2.0.\n\nTerra Classic is the continuation of the original Terra chain. Its mainnet chain ID is `columbus-5`, and its native staking and governance asset is LUNC.\n\nTerra 2.0 is a separate chain with a separate asset, ecosystem, governance path, and product history.\n\nThat distinction matters because old Terra history, Terra Classic recovery work, and Terra 2.0 development are often mixed together in public discussion.\n\n## Not the old algorithmic stablecoin system\n\nTerra Classic is not a restart of the old algorithmic stablecoin model.\n\nThe pre-2022 Terra model depended on algorithmic mint/burn relationships and peg assumptions that failed under stress. Terra Classic still carries the historical chain state and assets, but current product work should not be understood as a simple return to that old model.\n\nWhen Terra Classic proposes new stable-asset or swap designs, the important question is whether the design avoids the old failure modes:\n\n- uncontrolled minting\n- hard peg assumptions without redemption backing\n- unlimited swap capacity\n- weak oracle safety\n- unclear governance responsibility\n\nThat is why proposed products such as Forex Protocol and Market Module 2.0 are documented around collateral, finite liquidity, oracle controls, and implementation status.\n\n## Not a guaranteed USTC repeg\n\nTerra Classic does not guarantee that USTC will return to 1 USD.\n\nUSTC is a legacy market-priced Terra Classic asset. It may be transferred, traded, discussed in governance, or referenced in proposed product designs, but those facts do not create a guaranteed peg, redemption right, or stable settlement promise.\n\nA credible Terra Classic stable-asset strategy has to be explicit about collateral, redemption, liquidity, oracle design, risk controls, and governance execution. It cannot rely on repeating the old UST promise.\n\n## Not a centrally operated product\n\nTerra Classic is not a centrally operated fintech app.\n\nIt is a public blockchain governed through validators, delegators, proposals, software releases, community coordination, and infrastructure providers. No single website, wallet, validator, developer group, or community channel should be treated as the sole operator of the chain.\n\nThis decentralized structure is a strength, but it also creates execution complexity. Product delivery depends on governance alignment, software implementation, validator readiness, public tooling, and clear communication.\n\n## Not a finished institutional stablecoin stack\n\nTerra Classic has institutional product potential, especially around native assets, staking, governance, payment rails, and proposed collateralized stable assets.\n\nBut potential is not the same as finished institutional readiness.\n\nAn institution evaluating Terra Classic should distinguish:\n\n- live chain capabilities\n- historical assets\n- proposed products\n- governance-accepted concepts\n- implemented production systems\n- external liquidity and market access\n- legal, custody, collateral, and compliance assumptions\n\nThat distinction strengthens Terra Classic's credibility. It prevents serious opportunities from being weakened by overclaiming.\n\n## Not investment advice\n\nTerra Classic is not an investment recommendation.\n\nLUNC, USTC, and other Terra Classic-related assets can be volatile and risky. Documentation can explain protocol mechanics, product status, and historical context. It cannot tell anyone whether to buy, sell, hold, stake, swap, trade, arbitrage, or integrate an asset.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live chain behavior and asset status through current ecosystem tools.\n",
    "previousSlug": "learn/history-after-the-collapse",
    "nextSlug": "learn/strengths"
  },
  {
    "slug": "learn/strengths",
    "path": "/learn/strengths/",
    "sourceFile": "content/docs/learn/strengths.md",
    "group": "Learn Terra Classic",
    "navTitle": "Terra Classic Strengths",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 8,
    "title": "Terra Classic Strengths",
    "description": "A detailed, evidence-aware explanation of Terra Classic's core strengths: decentralization, fast block times, deflationary mechanics, reliability, low-cost development, community, interconnectivity, and revival narrative.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic knowledge corpus and State of the Chain report",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "terra-classic-strengths-2026-06-01",
    "sourcePath": "content/docs/learn/strengths.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Strengths at a glance",
        "id": "strengths-at-a-glance"
      },
      {
        "depth": 2,
        "title": "Decentralization",
        "id": "decentralization"
      },
      {
        "depth": 2,
        "title": "6s block time",
        "id": "6s-block-time"
      },
      {
        "depth": 2,
        "title": "Deflationary ecosystem",
        "id": "deflationary-ecosystem"
      },
      {
        "depth": 2,
        "title": "Superior uptime and reliability",
        "id": "superior-uptime-and-reliability"
      },
      {
        "depth": 2,
        "title": "Low cost of development",
        "id": "low-cost-of-development"
      },
      {
        "depth": 2,
        "title": "Unmatched community",
        "id": "unmatched-community"
      },
      {
        "depth": 2,
        "title": "Interconnectivity",
        "id": "interconnectivity"
      },
      {
        "depth": 2,
        "title": "Revival narrative",
        "id": "revival-narrative"
      },
      {
        "depth": 2,
        "title": "What makes the strengths credible",
        "id": "what-makes-the-strengths-credible"
      },
      {
        "depth": 2,
        "title": "How these strengths connect to the roadmap",
        "id": "how-these-strengths-connect-to-the-roadmap"
      },
      {
        "depth": 2,
        "title": "Responsible reading",
        "id": "responsible-reading"
      }
    ],
    "body": "Terra Classic's strongest case is not that it is flawless. It is that it remains a live, community-governed Layer 1 after one of the largest failures in crypto history, while still carrying useful infrastructure, market attention, low-cost execution, Cosmos compatibility, and a clear path back toward real products.\n\nThe right way to understand Terra Classic is:\n\n- It is operationally alive.\n- It is community-governed rather than company-operated.\n- It has fast, low-cost base-layer execution.\n- It has active supply-reduction mechanics.\n- It has a rare post-collapse revival narrative.\n- It still needs stronger governance discipline, deeper on-chain liquidity, better documentation, more developer throughput, and more product execution.\n\nThat combination matters. Most failed chains do not keep block production, validators, wallets, exchanges, community media, governance, developers, and product proposals moving for years after a collapse.\n\n## Strengths at a glance\n\n| Strength | What it means | Why it matters |\n| --- | --- | --- |\n| Decentralization | Terra Classic is maintained through validators, delegators, governance, and independent contributors rather than a single company. | The chain can survive the loss of its original founding operator and continue evolving through public coordination. |\n| 6s block time | Blocks finalize in roughly six seconds under normal conditions. | Wallet actions, swaps, governance interactions, and application flows can feel responsive. |\n| Deflationary ecosystem | LUNC and USTC have burn mechanisms at protocol and ecosystem level. | Supply can decline over time when usage, tax routing, exchange burns, protocol fees, and voluntary burns generate enough flow. |\n| Superior uptime and reliability | The chain has continued producing blocks, coordinating upgrades, and maintaining a functioning validator set. | Users and builders need a base layer that keeps running even while strategy and governance are debated. |\n| Low cost of development | Terra Classic inherits Cosmos SDK, CosmWasm, low fees, and familiar tooling patterns. | Builders can test, deploy, and operate applications with low transaction overhead. |\n| Unmatched community | The ecosystem includes long-term holders, validators, builders, media, researchers, and independent contributors. | Community persistence is the reason the chain still has attention, governance, and public-good work. |\n| Interconnectivity | Terra Classic is Cosmos-based and has IBC connectivity. | Assets, users, and liquidity can connect to a wider multi-chain environment when routes and relayers are maintained. |\n| Revival narrative | Terra Classic is a live attempt to rebuild decentralized money infrastructure after the 2022 collapse. | The story is rare, emotionally powerful, and product-relevant if it is connected to real execution. |\n\n## Decentralization\n\nTerra Classic is no longer primarily a company-led chain. After the 2022 collapse and the launch of Terra 2.0, the original chain continued as Terra Classic through validators, delegators, governance, independent developers, infrastructure operators, and community contributors.\n\nThat is a real strength. A chain abandoned by its original operator normally dies. Terra Classic did not.\n\nThe practical decentralization case is:\n\n- Blocks are produced by a validator set rather than a single server or company.\n- LUNC holders can delegate stake and influence validator voting power.\n- Governance can approve upgrades, parameter changes, funding, and signaling proposals.\n- Core infrastructure has been maintained by community-led teams and contributors.\n- Wallets, explorers, dashboards, documentation, media, and project surfaces can be built independently.\n\nThis gives Terra Classic resilience against single-company failure. It also makes the ecosystem harder to censor or shut down through one corporate control point.\n\nBut decentralization is not automatically good execution. The project source material repeatedly flags governance participation problems, validator concentration, low deliberation quality, and weak accountability. So the honest statement is:\n\n> Terra Classic's decentralization is strongest as survival infrastructure. It becomes a strategic advantage only when paired with transparent governance, active validator participation, professional execution, and public accountability.\n\nSee also [Governance](/governance/overview/) and [Staking Protocol](/staking-protocol/overview/).\n\n## 6s block time\n\nTerra Classic is built on Cosmos SDK and Tendermint/CometBFT-style proof-of-stake consensus. Under normal conditions, the chain targets fast block production, commonly understood around the six-second range.\n\nFor users, this matters because common actions can settle quickly:\n\n- wallet transfers\n- staking and redelegation transactions\n- governance votes\n- smart-contract interactions\n- DEX transactions\n- future native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/)\n\nFast block time is not just a technical vanity metric. It affects product feel.\n\nA chain can have interesting tokenomics and still feel unusable if users wait too long for actions to confirm. Terra Classic's speed gives builders a workable base for responsive wallets, dashboards, trading flows, staking tools, and consumer-style applications.\n\nThe caveat is that block time alone does not create adoption. It is enabling infrastructure. The chain still needs applications, liquidity, reliable endpoints, documentation, and user trust for speed to turn into real usage.\n\n## Deflationary ecosystem\n\nTerra Classic's supply story is one of its most visible strengths, but it must be explained carefully.\n\nAfter the May 2022 collapse, LUNC supply expanded massively. Since then, the ecosystem has used burns to reduce supply pressure. Burn mechanisms include:\n\n- protocol-level burn tax on eligible transfers\n- voluntary burns from users and projects\n- exchange-supported burns\n- application-level burns from ecosystem activity\n- proposed or active product fees that route part of value to burns\n- [Swap Protocol](/swap-protocol/fees-burns-and-liquidity/) spread fees that route 50% to burn when swaps are enabled\n\nThe strategic value is not that burns alone can fix everything. The knowledge corpus is clear on this point: small burns can be psychologically important but economically limited against trillions of supply. Meaningful long-term impact requires both supply reduction and demand.\n\nThe stronger framing is:\n\n> Terra Classic has deflationary rails already built into its ecosystem. Those rails become powerful only when paired with real usage, liquidity, applications, and sustainable fee flow.\n\nThis matters for product strategy because burns can connect network activity to long-term scarcity. A DEX, swap route, stable-asset product, lending product, or payment product can be more useful if a portion of its activity also supports LUNC or USTC supply reduction.\n\nThe risk is over-focusing on burns while ignoring utility. A burn-only strategy can become a distraction if it reduces liquidity, increases friction, or substitutes for actual product development.\n\n## Superior uptime and reliability\n\nTerra Classic has continued to operate for years after the collapse. The State of the Chain material classifies the chain as operationally stable but strategically fragile. That distinction is important.\n\nOperationally stable means:\n\n- the chain is producing blocks\n- validators continue to secure the network\n- governance can coordinate software upgrades\n- wallets and explorers can interact with the chain\n- users can transfer, stake, vote, and use available applications\n- core software continues to receive releases and compatibility work\n\nStrategically fragile means the chain still faces serious risks:\n\n- concentrated validator power\n- low staking ratio relative to ideal security posture\n- limited on-chain DeFi depth\n- thin DEX liquidity\n- heavy dependence on off-chain exchange liquidity\n- low fee revenue compared with larger Layer 1s\n- reputational and regulatory overhang from the 2022 collapse\n- limited core developer bandwidth\n\nThis makes reliability a strength, not a victory lap. Terra Classic has proven it can keep running under adverse historical conditions. The next step is proving it can convert that base reliability into compounding product usage.\n\nFor node and validator context, see [Full Node](/full-node/overview/) and [Validator responsibilities](/staking-protocol/validator-responsibilities/).\n\n## Low cost of development\n\nTerra Classic remains attractive for builders because experimentation can be relatively low-cost.\n\nThe developer advantages include:\n\n- Cosmos SDK architecture\n- CosmWasm smart-contract support\n- low transaction fees\n- familiar wallet and validator patterns\n- IBC compatibility\n- existing LCD, RPC, and API surfaces\n- open-source code and public governance context\n- native staking, governance, tax, oracle, wasm, market, and distribution modules\n\nLow-cost development matters because early ecosystems need fast iteration. Builders should be able to test ideas, deploy contracts, integrate wallets, query chain data, and run small experiments without requiring expensive infrastructure or high transaction spend.\n\nThis is especially relevant for:\n\n- wallets\n- dashboards\n- staking tools\n- governance tools\n- DEX and liquidity interfaces\n- analytics products\n- documentation tools\n- stable-asset experiments\n- compliance or identity tooling\n- small consumer applications\n\nThe weakness is not the base chain cost. The weakness is discoverability and execution support. Terra Classic still needs stronger docs, maintained SDK examples, better app templates, current integration guides, and clearer product roadmaps to convert low cost into more builders.\n\nStart with [Builder Tooling](/learn/builder-tooling/) and [Developer Quick Start](/develop/quick-start-guide/).\n\n## Unmatched community\n\nTerra Classic's community is one of its clearest advantages.\n\nThe chain still has:\n\n- long-term LUNC and USTC holders\n- validators and delegators\n- independent media and research projects\n- public governance contributors\n- developers maintaining core and application code\n- ecosystem projects building DEXes, wallets, dashboards, games, NFTs, and DeFi products\n- external exchange visibility\n- community-led documentation, reports, and websites\n\nThis is not normal for a post-collapse chain. The reason Terra Classic still has a future path is that people kept showing up after the original product failed.\n\nThe community also creates a distribution advantage. A product shipped on Terra Classic can reach a pre-existing audience that already understands LUNC, USTC, staking, burns, governance, and the revival story.\n\nBut community alone is not product-market fit. The project source material also documents drama, validator inactivity, fragmented decision-making, weak roadmap ownership, and repeated debates that did not ship enough product. The durable strength is not \"the community is loud.\" It is:\n\n> Terra Classic has a persistent community that can become a real growth engine if energy is routed into shipped products, reliable documentation, transparent governance, and measurable outcomes.\n\n## Interconnectivity\n\nTerra Classic is part of the Cosmos technical family. That gives it a natural path into a broader multi-chain environment through IBC and Cosmos-compatible tooling.\n\nInterconnectivity matters because isolated chains struggle to grow. Builders and users increasingly expect assets, liquidity, wallets, and applications to move across ecosystems.\n\nTerra Classic's interconnectivity strengths include:\n\n- Cosmos SDK foundations\n- IBC channel support\n- compatibility work through ongoing core upgrades\n- potential access to broader Cosmos liquidity routes\n- wallet compatibility through Cosmos-style account and signing patterns\n- future-ready positioning for cross-chain products\n\nThe strategic opportunity is clear: Terra Classic can become more useful if it is treated as a connected execution environment rather than an isolated revival token.\n\nExamples of product directions that benefit from interconnectivity:\n\n- LUNC and USTC liquidity routes across Cosmos\n- IBC-connected DEX liquidity\n- cross-chain dashboards\n- cross-chain staking and governance tooling\n- stable-asset liquidity routes\n- integrations with wallets that already support Cosmos chains\n\nThe caveat is operational. IBC is only valuable when relayers, endpoints, liquidity, and user interfaces are maintained. A channel that exists but has little volume is not a growth strategy by itself.\n\nSee [Endpoints](/develop/endpoints/) and [IBC module spec](/develop/module-specifications/spec-ibc/).\n\n## Revival narrative\n\nTerra Classic has one of the most unusual stories in crypto.\n\nBefore May 2022, Terra was a top-tier ecosystem built around decentralized money, stablecoins, DeFi, payments, and applications such as Anchor, Mirror, and CHAI. The collapse destroyed confidence, created massive LUNC supply expansion, and left the original chain with reputational, legal, economic, and technical damage.\n\nTerra Classic's revival narrative comes from what happened next:\n\n- the original chain continued\n- staking and governance returned\n- validators kept producing blocks\n- community contributors maintained infrastructure\n- burn mechanisms were introduced\n- wallets and independent tools emerged\n- L2 and app-layer projects appeared\n- core upgrades continued\n- documentation and public information surfaces began to improve\n- new L1 product concepts such as [Swap Protocol](/swap-protocol/overview/) and [Forex Protocol](/forex-protocol/overview/) emerged\n\nThat story is valuable because it is not generic marketing. It is a real recovery attempt.\n\nBut the narrative only stays credible if it is tied to execution. Terra Classic cannot rely forever on \"we survived.\" Survival is the foundation. The stronger future story is:\n\n> Terra Classic is trying to turn post-collapse persistence into a functioning, source-aware, community-governed Layer 1 with real products, real liquidity, and transparent public infrastructure.\n\nThat is why docs, governance clarity, developer onboarding, and product pages matter. They are not cosmetic. They are part of rebuilding institutional trust.\n\n## What makes the strengths credible\n\nTerra Classic's strengths are strongest when stated with discipline:\n\n- Decentralization is credible because the chain survived without the original company, but it still needs better governance participation.\n- Fast block time is credible because the chain can feel responsive, but speed needs useful applications.\n- Deflation is credible because burn rails exist, but burns require demand to become economically meaningful.\n- Reliability is credible because the chain keeps operating, but reliability must be matched by stronger security and release assurance.\n- Low-cost development is credible because the technical base is builder-friendly, but docs and tooling need continued improvement.\n- Community is credible because people keep building and governing, but energy must convert into shipped work.\n- Interconnectivity is credible because Cosmos and IBC paths exist, but volume and relayer assurance need growth.\n- Revival narrative is credible because the chain is still alive, but recovery requires product execution rather than nostalgia.\n\nThis is the product truth: Terra Classic has real strengths, but they compound only when the ecosystem stops treating them as slogans and starts treating them as operating advantages.\n\n## How these strengths connect to the roadmap\n\nThe strongest Terra Classic roadmap is not \"burn more and hope.\" It is a product roadmap that uses the chain's existing strengths:\n\n- Use fast, low-cost execution for better wallets, staking, swaps, dashboards, and governance tooling.\n- Use deflationary mechanics as a product-aligned fee and scarcity layer, not as a substitute for demand.\n- Use community distribution to attract developers, reviewers, researchers, and operators.\n- Use IBC and Cosmos compatibility to reconnect Terra Classic to multi-chain liquidity.\n- Use Swap Protocol to restore native LUNC and USTC swap utility without returning to uncontrolled minting.\n- Use Forex Protocol research to explore collateral-backed stable assets rather than repeating the old algorithmic failure.\n- Use docs, source attribution, public governance records, and diagnostics to rebuild trust.\n\nIf those pieces are executed, Terra Classic's strengths become a coherent product position:\n\n> A resilient, community-governed Cosmos Layer 1 for low-cost execution, transparent governance, native staking, deflationary token mechanics, and future stable-asset utility.\n\n## Responsible reading\n\nThis page is not financial advice and does not claim that LUNC or USTC will increase in value.\n\nTerra Classic remains high-risk. Users and builders should understand validator concentration, liquidity limits, governance risks, regulatory overhang, smart-contract risks, oracle dependencies, bridge and IBC risks, and the difference between live products and proposed products.\n\nThe strengths are real. The hard part is execution.\n",
    "previousSlug": "learn/what-terra-classic-is-not",
    "nextSlug": "learn/wallets"
  },
  {
    "slug": "learn/wallets",
    "path": "/learn/wallets/",
    "sourceFile": "content/docs/learn/wallets.md",
    "group": "Learn Terra Classic",
    "navTitle": "Wallets",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": true,
    "navOrder": 9,
    "title": "Wallets",
    "description": "Pick a trusted wallet to manage LUNC, delegate, and interact with dApps without highlighting legacy Station interfaces.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/wallets.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "List of Wallets",
        "id": "list-of-wallets"
      }
    ],
    "body": "Use wallets that support Ledger or Trezor flows for production funds. Keep seed phrases offline and dedicate browser profiles to validator accounts.\n\n## List of Wallets\n\n- [Keplr](https://www.keplr.app) — Browser extension and mobile wallet with Ledger support, staking, governance, and IBC transfers.\n- [Galaxy Station (Hexxagon)](https://station.hexxagon.io) — Successor to Station featuring streamlined signing, WalletConnect, and validator tooling.\n- [Orbitar Wallet](https://orbitar.app) — Community wallet with Terra Classic focus, dApp catalogue, and staking flows.\n- [Cosmostation](https://www.cosmostation.io) — Mobile-first wallet with Ledger integration and governance reminders.\n- [LUNC Dash](https://luncdash.com) — Lightweight mobile wallet tailored for Terra Classic community members.\n",
    "previousSlug": "learn/strengths",
    "nextSlug": "learn/keplr/keplr"
  },
  {
    "slug": "learn/keplr/keplr",
    "path": "/learn/keplr/keplr/",
    "sourceFile": "content/docs/learn/keplr/keplr.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr",
    "navDepth": 1,
    "navParent": "learn/wallets",
    "navHasChildren": true,
    "navOrder": 10,
    "title": "Keplr",
    "description": "Install Keplr and access the core guides for Terra Classic users.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "Keplr is one of the recommended wallets for Terra Classic. Use this section to install the extension, create or import wallets, and perform common account actions.\n",
    "previousSlug": "learn/wallets",
    "nextSlug": "learn/keplr/keplr-install"
  },
  {
    "slug": "learn/keplr/keplr-install",
    "path": "/learn/keplr/keplr-install/",
    "sourceFile": "content/docs/learn/keplr/keplr-install.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr install",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 11,
    "title": "Keplr install",
    "description": "Install Keplr in Chrome, Brave, or Firefox.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-install.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Chrome or Brave",
        "id": "chrome-or-brave"
      },
      {
        "depth": 2,
        "title": "Firefox",
        "id": "firefox"
      },
      {
        "depth": 2,
        "title": "Create or import a wallet",
        "id": "create-or-import-a-wallet"
      }
    ],
    "body": "## Chrome or Brave\n\n1. Open the Chrome Web Store.\n   - [Keplr on Chrome Web Store](https://chromewebstore.google.com/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap)\n2. Click **Add to Chrome** and confirm.\n3. Pin the extension and click the Keplr icon to open it.\n\n## Firefox\n\n1. Open the Firefox Add-ons store.\n   - [Keplr on Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/keplr/)\n2. Click **Add to Firefox** and grant permissions.\n3. Open the extension from the toolbar.\n\n## Create or import a wallet\n\n- Select **Create new account** for a fresh wallet and follow the prompts.\n- Select **Import existing account** to bring in a Station wallet using your 24-word seed phrase.\n",
    "previousSlug": "learn/keplr/keplr",
    "nextSlug": "learn/keplr/keplr-wallet"
  },
  {
    "slug": "learn/keplr/keplr-wallet",
    "path": "/learn/keplr/keplr-wallet/",
    "sourceFile": "content/docs/learn/keplr/keplr-wallet.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr wallet",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 12,
    "title": "Keplr wallet",
    "description": "Set up a new Keplr account or import Station mnemonics.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-wallet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Create a new wallet",
        "id": "create-a-new-wallet"
      },
      {
        "depth": 2,
        "title": "Import an existing Station wallet",
        "id": "import-an-existing-station-wallet"
      }
    ],
    "body": "## Create a new wallet\n\n1. Open the Keplr extension.\n2. Select **Create new account**.\n3. Choose a recovery phrase length and record your mnemonic securely.\n4. Set an account name and password.\n5. Confirm the seed phrase to finish setup.\n\n## Import an existing Station wallet\n\n1. Open Keplr and select **Import existing account**.\n2. Choose **Seed/Mnemonic** and enter your 24-word Station phrase.\n3. Set the account name and password.\n4. Confirm that your Terra Classic address starts with `terra` before proceeding.\n\n> **Tip**\n> Keplr supports multiple accounts. Use the account switcher in the extension header to move between wallets.\n",
    "previousSlug": "learn/keplr/keplr-install",
    "nextSlug": "learn/keplr/keplr-send"
  },
  {
    "slug": "learn/keplr/keplr-send",
    "path": "/learn/keplr/keplr-send/",
    "sourceFile": "content/docs/learn/keplr/keplr-send.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr send",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 13,
    "title": "Keplr send",
    "description": "Send assets with Keplr on Terra Classic.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-send.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before sending",
        "id": "before-sending"
      },
      {
        "depth": 2,
        "title": "Basic flow",
        "id": "basic-flow"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Use this page as a practical checklist. Keplr interface labels can change, so always verify the network, recipient, amount, memo, and fees in the wallet before signing.\n\n## Before sending\n\n- Confirm the active network is Terra Classic mainnet or the intended testnet.\n- Confirm the recipient address starts with `terra`.\n- Check whether the recipient requires a memo, especially for exchanges.\n- Keep enough LUNC for transaction fees.\n- Send a small test transaction first when the recipient, wallet, or exchange flow is new.\n\n## Basic flow\n\n1. Open the Keplr extension and select the Terra Classic network.\n2. Navigate to **Assets** and choose the token you want to send.\n3. Click **Send**.\n4. Paste the recipient `terra...` address.\n5. Enter the amount and optional memo.\n6. Review fees and confirm with **Approve**.\n7. Confirm the transaction in your wallet history or an external explorer.\n\n> **Tips**\n>\n> - Keep a small `uluna` balance to cover future fees.\n> - For rebel-2, request test tokens from the [faucet](https://t.me/tcrebelfaucet_bot).\n> - If an exchange requires a memo, missing it can delay or break crediting.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live transaction state through Keplr and external explorers.\n",
    "previousSlug": "learn/keplr/keplr-wallet",
    "nextSlug": "learn/keplr/keplr-staking"
  },
  {
    "slug": "learn/keplr/keplr-staking",
    "path": "/learn/keplr/keplr-staking/",
    "sourceFile": "content/docs/learn/keplr/keplr-staking.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr staking",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 14,
    "title": "Keplr staking",
    "description": "Delegate, redelegate, and undelegate LUNC with Keplr.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-staking.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before staking",
        "id": "before-staking"
      },
      {
        "depth": 2,
        "title": "Practical flow",
        "id": "practical-flow"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Staking with Keplr is only possible through third-party websites or the [Keplr Dashboard](https://wallet.keplr.app/chains/terra-classic).\n\nFor the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).\n\n## Before staking\n\n- Choose the validator deliberately; APR alone is not enough.\n- Review commission, voting behavior, uptime signals, public communication, and concentration risk.\n- Keep enough liquid LUNC for future transaction fees.\n- Understand that undelegating starts the chain unbonding period.\n- Never give a validator or website your seed phrase.\n\n## Practical flow\n\n1. Open the Keplr Dashboard or a trusted Terra Classic staking interface that supports Keplr.\n2. Connect Keplr and confirm the Terra Classic network.\n3. Browse validators.\n4. Choose a validator and review commission and identity details.\n5. Enter the amount to delegate.\n6. Review the transaction in Keplr.\n7. Sign only if the validator and amount are correct.\n\n> **Tips**\n>\n> - Keep enough LUNC for future fees.\n> - Redelegations avoid the 21-day unbonding period, but each validator pair has a 21-day cooldown between redelegations.\n> - Undelegation requires a 21-day waiting period before funds become liquid.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live validator and delegation data through wallet interfaces and external staking tools.\n",
    "previousSlug": "learn/keplr/keplr-send",
    "nextSlug": "learn/keplr/keplr-governance"
  },
  {
    "slug": "learn/keplr/keplr-governance",
    "path": "/learn/keplr/keplr-governance/",
    "sourceFile": "content/docs/learn/keplr/keplr-governance.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr governance",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 15,
    "title": "Keplr governance",
    "description": "How Keplr users should approach Terra Classic governance voting when using supported governance interfaces.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/learn/keplr/keplr-governance.md",
    "sourceDate": "2026-06-01",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before voting",
        "id": "before-voting"
      },
      {
        "depth": 2,
        "title": "Practical flow",
        "id": "practical-flow"
      },
      {
        "depth": 2,
        "title": "Safety",
        "id": "safety"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Keplr can hold Terra Classic accounts, but governance availability depends on the interface you use with the wallet.\n\nIf the active Keplr interface you are using does not expose Terra Classic governance directly, use a supported Terra Classic governance interface that connects to Keplr.\n\nBefore voting, read the general [How to vote](/governance/how-to-vote/) guide and the [Vote options](/governance/vote-options/) guide.\n\n## Before voting\n\n- Read the full proposal, not only the title.\n- Check whether the proposal is signaling intent, requesting funds, or changing implementation.\n- Review linked discussion and source material.\n- Understand that your direct vote overrides your validator's vote for that proposal.\n- Keep enough LUNC for transaction fees.\n\n## Practical flow\n\n1. Open a supported Terra Classic governance interface.\n2. Connect Keplr.\n3. Confirm that Terra Classic is selected.\n4. Open the proposal.\n5. Review the proposal text, deadline, current tally, and discussion links.\n6. Choose `Yes`, `No`, `NoWithVeto`, or `Abstain`.\n7. Confirm the transaction in Keplr.\n8. Verify that your vote was recorded.\n\n## Safety\n\nNever enter your Keplr seed phrase into a governance website.\n\nKeplr should ask you to approve a transaction. It should not ask you to reveal your recovery phrase.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live proposal status and final vote results through governance interfaces and explorers.\n",
    "previousSlug": "learn/keplr/keplr-staking",
    "nextSlug": "learn/keplr/keplr-testnet"
  },
  {
    "slug": "learn/keplr/keplr-testnet",
    "path": "/learn/keplr/keplr-testnet/",
    "sourceFile": "content/docs/learn/keplr/keplr-testnet.md",
    "group": "Learn Terra Classic",
    "navTitle": "Keplr testnet",
    "navDepth": 2,
    "navParent": "learn/keplr/keplr",
    "navHasChildren": false,
    "navOrder": 16,
    "title": "Keplr testnet",
    "description": "Use Keplr on the rebel-2 testnet and request faucet funds.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-testnet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Testnet Endpoints",
        "id": "testnet-endpoints"
      },
      {
        "depth": 2,
        "title": "Send a test transaction",
        "id": "send-a-test-transaction"
      }
    ],
    "body": "The testnet support is integrated into Keplr. You can utilize the [faucet by LuncGoblins](https://faucet.luncgoblins.com) or the [Telegram bot](https://t.me/tcrebelfaucet_bot) to get some testnet LUNC.\n\n## Testnet Endpoints\n\n- LCD: [https://lcd.luncblaze.com](https://lcd.luncblaze.com)\n- RPC: [https://rpc.luncblaze.com](https://rpc.luncblaze.com)\n\n## Send a test transaction\n\n1. Open Keplr → **Assets** and select a token.\n2. Click **Send** and enter a testnet `terra...` address.\n3. Enter the amount, review fees, and approve.\n",
    "previousSlug": "learn/keplr/keplr-governance",
    "nextSlug": "learn/galaxy-station/galaxy-station"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station",
    "path": "/learn/galaxy-station/galaxy-station/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station",
    "navDepth": 1,
    "navParent": "learn/wallets",
    "navHasChildren": true,
    "navOrder": 17,
    "title": "Galaxy Station",
    "description": "Install Galaxy Station (Hexxagon) and manage Terra Classic accounts.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "Galaxy Station by Hexxagon offers a WalletConnect-capable browser extension for Terra Classic. Use this section to install the wallet, manage accounts, and perform common actions across mainnet (`columbus-5`) and the `rebel-2` testnet.\n",
    "previousSlug": "learn/keplr/keplr-testnet",
    "nextSlug": "learn/galaxy-station/galaxy-station-install"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-install",
    "path": "/learn/galaxy-station/galaxy-station-install/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-install.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station install",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 18,
    "title": "Galaxy Station install",
    "description": "Install the extension on Chrome, Brave, or Firefox.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-install.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Chrome or Brave",
        "id": "chrome-or-brave"
      },
      {
        "depth": 2,
        "title": "Firefox",
        "id": "firefox"
      },
      {
        "depth": 2,
        "title": "Create or import a wallet",
        "id": "create-or-import-a-wallet"
      }
    ],
    "body": "## Chrome or Brave\n\n1. Open the Chrome Web Store.\n   - [Galaxy Station in the Chrome Web Store](https://chromewebstore.google.com/detail/galaxy-station-wallet/akckefnapafjbpphkefbpkpcamkoaoai)\n2. Click **Add to Chrome** and confirm.\n3. Pin the extension and open it from the toolbar.\n\n## Firefox\n\nGalaxy Station is not available for Firefox.\n\n## Create or import a wallet\n\n- Select **Create** to generate a new wallet and follow the prompts.\n- Select **Import** to bring in an existing Station wallet using your 24-word seed phrase.\n\n> **WalletConnect**\n> Galaxy Station offers a mobile version that supports WalletConnect. When a dApp presents WalletConnect options, select Galaxy Station to pair the mobile app.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station",
    "nextSlug": "learn/galaxy-station/galaxy-station-wallet"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-wallet",
    "path": "/learn/galaxy-station/galaxy-station-wallet/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-wallet.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station wallet",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 19,
    "title": "Galaxy Station wallet",
    "description": "Set up new accounts or import Station mnemonics.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-wallet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Create a new wallet (extension)",
        "id": "create-a-new-wallet-extension"
      },
      {
        "depth": 2,
        "title": "Import an existing Station wallet",
        "id": "import-an-existing-station-wallet"
      },
      {
        "depth": 2,
        "title": "Connect via WalletConnect",
        "id": "connect-via-walletconnect"
      }
    ],
    "body": "## Create a new wallet (extension)\n\n1. Open the Galaxy Station extension.\n2. Click **Create**.\n3. Securely record your seed phrase.\n4. Set a wallet name and password.\n5. Complete the confirmation prompts.\n\n## Import an existing Station wallet\n\n1. Open Galaxy Station and choose **Import**.\n2. Enter your 24-word Station seed phrase.\n3. Set the wallet name and password.\n4. Confirm the Terra Classic address begins with `terra`.\n\n## Connect via WalletConnect\n\n1. In the dApp, choose **WalletConnect**.\n2. Select Galaxy Station (Hexxagon) when prompted.\n3. Approve the connection in the mobile app.\n\n> **Tip**\n> Galaxy Station supports multiple accounts; use the account selector to switch between them.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-install",
    "nextSlug": "learn/galaxy-station/galaxy-station-send"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-send",
    "path": "/learn/galaxy-station/galaxy-station-send/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-send.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station send",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 20,
    "title": "Galaxy Station send",
    "description": "Transfer assets using Galaxy Station or WalletConnect.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-send.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before sending",
        "id": "before-sending"
      },
      {
        "depth": 2,
        "title": "Basic flow",
        "id": "basic-flow"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Use this page as a practical checklist. Galaxy Station interface labels can change, so always verify the network, recipient, amount, memo, and fees before signing.\n\n## Before sending\n\n- Confirm Terra Classic is the active network.\n- Confirm the recipient address starts with `terra`.\n- Check whether the recipient requires a memo, especially for exchanges.\n- Keep enough LUNC for transaction fees.\n- Send a small test transaction first when the recipient, wallet, or exchange flow is new.\n\n## Basic flow\n\n1. Open the Galaxy Station extension or connect through WalletConnect.\n2. Ensure Terra Classic is the active network.\n3. Choose a token from **Assets**.\n4. Click **Send**.\n5. Paste the recipient `terra...` address.\n6. Enter the amount and optional memo.\n7. Review fees and confirm.\n8. Confirm the transaction in your wallet history or an external explorer.\n\n> **Tips**\n>\n> - Keep a small LUNC balance to cover future fees.\n> - For rebel-2 testnet, request funds from the [faucet](https://t.me/tcrebelfaucet_bot).\n> - If an exchange requires a memo, missing it can delay or break crediting.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live transaction state through Galaxy Station and external explorers.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-wallet",
    "nextSlug": "learn/galaxy-station/galaxy-station-staking"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-staking",
    "path": "/learn/galaxy-station/galaxy-station-staking/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-staking.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station staking",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 21,
    "title": "Galaxy Station staking",
    "description": "Delegate, redelegate, and undelegate LUNC in Galaxy Station.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-staking.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before staking",
        "id": "before-staking"
      },
      {
        "depth": 2,
        "title": "Basic flow",
        "id": "basic-flow"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "For the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).\n\n## Before staking\n\n- Choose the validator deliberately; APR alone is not enough.\n- Review commission, voting behavior, uptime signals, public communication, and concentration risk.\n- Keep enough liquid LUNC for future transaction fees.\n- Understand that undelegating starts the chain unbonding period.\n- Never give a validator or website your seed phrase.\n\n## Basic flow\n\n1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.\n2. Ensure Terra Classic is selected as the active network.\n3. Open the staking view and browse validators.\n4. Choose a validator and click **Delegate**.\n5. Enter the stake amount and confirm.\n6. Confirm the delegation in Galaxy Station or an external staking view.\n\n> **Tips**\n>\n> - Keep some LUNC for transaction fees.\n> - Redelegations avoid the 21-day unbonding period but introduce a 21-day cooldown between the same validator pair.\n> - Undelegating starts a 21-day unbonding period before funds become liquid.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live validator and delegation data through Galaxy Station and external staking tools.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-send",
    "nextSlug": "learn/galaxy-station/galaxy-station-governance"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-governance",
    "path": "/learn/galaxy-station/galaxy-station-governance/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-governance.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station governance",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 22,
    "title": "Galaxy Station governance",
    "description": "Deposit and vote on proposals via Galaxy Station.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/learn/galaxy-station/galaxy-station-governance.md",
    "sourceDate": "2026-06-01",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Vote on proposals",
        "id": "vote-on-proposals"
      },
      {
        "depth": 2,
        "title": "Deposit to a proposal",
        "id": "deposit-to-a-proposal"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "## Vote on proposals\n\nRead the general [How to vote](/governance/how-to-vote/) guide and [Vote options](/governance/vote-options/) guide before voting on high-impact proposals.\n\nBefore voting:\n\n- read the full proposal and discussion links\n- distinguish signaling proposals from implementation or funding proposals\n- understand that your direct vote overrides your validator's vote for that proposal\n- keep enough LUNC for transaction fees\n\n1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.\n2. Ensure Terra Classic is selected.\n3. Open **Governance / Proposals**.\n4. Choose a proposal to review.\n5. Click **Vote**, select an option, and confirm.\n\n## Deposit to a proposal\n\n1. While a proposal is in deposit period, open it in Governance.\n2. Click **Deposit**, enter the `LUNC` amount, and confirm.\n\n> **Notes**\n>\n> - A minimum deposit is required for proposals to enter the voting stage.\n> - Your staked voting power applies to both deposits and votes.\n> - Never enter your seed phrase into a governance website.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify live proposal status and final vote results through governance interfaces and explorers.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-staking",
    "nextSlug": "learn/galaxy-station/galaxy-station-testnet"
  },
  {
    "slug": "learn/galaxy-station/galaxy-station-testnet",
    "path": "/learn/galaxy-station/galaxy-station-testnet/",
    "sourceFile": "content/docs/learn/galaxy-station/galaxy-station-testnet.md",
    "group": "Learn Terra Classic",
    "navTitle": "Galaxy Station testnet",
    "navDepth": 2,
    "navParent": "learn/galaxy-station/galaxy-station",
    "navHasChildren": false,
    "navOrder": 23,
    "title": "Galaxy Station testnet",
    "description": "LCD: https://lcd.luncblaze.com",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-testnet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Endpoints",
        "id": "endpoints"
      },
      {
        "depth": 2,
        "title": "Get test funds",
        "id": "get-test-funds"
      },
      {
        "depth": 2,
        "title": "Send a test transaction",
        "id": "send-a-test-transaction"
      }
    ],
    "body": "## Endpoints\n\n- LCD: [https://lcd.luncblaze.com](https://lcd.luncblaze.com)\n- RPC: [https://rpc.luncblaze.com](https://rpc.luncblaze.com)\n\n## Get test funds\n\n1. Connect Galaxy Station to the Terra Classic testnet (`rebel-2`).\n2. Request tokens from the [rebel-2 faucet bot](https://t.me/tcrebelfaucet_bot). Enter your testnet `terra...` address.\n\n## Send a test transaction\n\n1. In Galaxy Station, open **Assets** and select a token.\n2. Click **Send**, enter the recipient testnet `terra...` address, and confirm the amount.\n3. Review fees and approve the transaction.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-governance",
    "nextSlug": "learn/fees"
  },
  {
    "slug": "learn/fees",
    "path": "/learn/fees/",
    "sourceFile": "content/docs/learn/fees.md",
    "group": "Learn Terra Classic",
    "navTitle": "Fees",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 24,
    "title": "Fees",
    "description": "Understand gas, burn tax, Swap Protocol spread fees, and historical Terra swap fees on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/fees.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Gas",
        "id": "gas"
      },
      {
        "depth": 2,
        "title": "Burn tax (`x/tax` module)",
        "id": "burn-tax-xtax-module"
      },
      {
        "depth": 3,
        "title": "Tax exemption registry",
        "id": "tax-exemption-registry"
      },
      {
        "depth": 2,
        "title": "Tobin tax",
        "id": "tobin-tax"
      },
      {
        "depth": 2,
        "title": "Spread fee",
        "id": "spread-fee"
      }
    ],
    "body": "All Terra Classic transactions consume gas. Transfers can also be affected by burn tax. Native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/) use a Market Module 2.0 spread fee instead of the normal chain-wide burn tax for that in-module route.\n\n| Transaction type | [Gas](#gas) | [Tobin](#tobin-tax) | [Spread](#spread-fee) | Burn tax |\n| --- | --- | --- | --- | --- |\n| ~~Stablecoin ↔ stablecoin market swap~~ *disabled* | ✓ | ✓ |  |  |\n| LUNC ↔ USTC Swap Protocol route | ✓ |  | ✓ |  |\n| Wallet-to-wallet transfer | ✓ |  |  | ✓ |\n\nDApps such as DEXes can charge additional protocol fees on top of network fees.\n\n## Gas\n\n[Gas](/appendices/glossary/#fees) covers validator compute and storage. Validators configure minimum gas prices; transactions must include fees meeting or exceeding that implied price.\n\nKey behaviour on Terra Classic:\n\n- Validators reject transactions with implied gas prices below their configured minimum.\n- Most wallets estimate gas above the minimum to avoid underestimation.\n- Unused gas is **not** refunded.\n- Transactions are processed FIFO within the mempool, not by highest fee.\n\nCurrent suggested prices are available via [`https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices`](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices).\n\nGas fees flow into the distribution module and are paid out to validators and delegators as staking rewards, and fill the Community Pool.\n\n## Burn tax (`x/tax` module)\n\nTerra Classic uses the `x/tax` module to levy burn taxes on transfers.\n\n- Parameters: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params)\n- Current burn rate: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate)\n\nReverse-charge (Tax2Gas) rules can deduct tax from the transfer amount or fees depending on the transaction path. Always confirm current governance decisions before relying on a specific behaviour.\n\n### Tax exemption registry\n\nSome addresses are exempt from burn tax. Query the registry via:\n\n- Zones list: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones)\n- Zone addresses: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/{zonename}/addresses`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/%7Bzonename%7D/addresses)\n- Taxable check: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/{from}/{to}`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/%7Bfrom%7D/%7Bto%7D)\n\n## Tobin tax\n\nThe Tobin tax historically applied to swaps between Terra stablecoins. Market Module 2.0 disables stable-to-stable routing, so Tobin tax should be treated as historical reference for current Swap Protocol usage.\n\nDiscussed rationale: [“On swap fees: the greedy and the wise”](https://medium.com/terra-money/on-swap-fees-the-greedy-and-the-wise-b967f0c8914e).\n\nWhen active, Tobin tax revenue flowed into the oracle reward pool and was redistributed to validators who reported accurate exchange rates. See the [oracle module spec](/develop/module-specifications/spec-oracle/) for reward mechanics.\n\n## Spread fee\n\nSpread fees apply to native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/). The Market Module 2.0 source design sets the Swap Protocol spread fee at 0.35% of notional, collected in the output asset.\n\nSwap Protocol routes spread fees 50% to burn and 50% to the Oracle Pool. See [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/) for the full product-level explanation.\n\nHistorical spread logic remains useful context for the [market module](/develop/module-specifications/spec-market/), but applications should not assume pre-2022 mint/burn swap behavior.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-testnet",
    "nextSlug": "staking-protocol/overview"
  },
  {
    "slug": "staking-protocol/overview",
    "path": "/staking-protocol/overview/",
    "sourceFile": "content/docs/staking-protocol/overview.md",
    "group": "Staking Protocol",
    "navTitle": "Staking Protocol",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 25,
    "title": "Staking Protocol",
    "description": "The user-facing staking layer for Terra Classic: delegate LUNC, secure the network, earn protocol rewards, and participate in governance.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/overview.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Product position",
        "id": "product-position"
      },
      {
        "depth": 2,
        "title": "What staking does",
        "id": "what-staking-does"
      },
      {
        "depth": 2,
        "title": "Why it matters for Terra Classic",
        "id": "why-it-matters-for-terra-classic"
      },
      {
        "depth": 2,
        "title": "Core actions",
        "id": "core-actions"
      },
      {
        "depth": 2,
        "title": "How this section is organized",
        "id": "how-this-section-is-organized"
      },
      {
        "depth": 2,
        "title": "What to avoid",
        "id": "what-to-avoid"
      },
      {
        "depth": 2,
        "title": "Not financial advice",
        "id": "not-financial-advice"
      }
    ],
    "body": "The Staking Protocol is Terra Classic's proof-of-stake participation layer.\n\nIt lets LUNC holders delegate tokens to validators, help secure the chain, earn protocol rewards, and route voting power into governance without giving validators custody of their wallet.\n\nUse this section if you are:\n\n- a LUNC holder deciding whether to stake\n- a delegator choosing validators\n- a community member trying to understand governance power\n- an investor evaluating network participation\n- a validator explaining what responsible operation requires\n- a developer building staking, portfolio, governance, or validator tooling\n\n## Product position\n\nStaking Protocol is the official product name used in these docs for Terra Classic staking.\n\nIt is not a new token, not a custody product, not liquid staking, not a yield vault, and not a guarantee of profit. It is the user-facing name for the native proof-of-stake system already built into Terra Classic through Cosmos SDK staking, distribution, slashing, and governance modules.\n\nThe product promise should stay simple:\n\n> Delegate LUNC to help secure Terra Classic, earn transparent protocol rewards, and participate in governance while keeping control of your wallet.\n\n## What staking does\n\nWhen you delegate LUNC, your stake is bonded to a validator. The validator uses total delegated stake to compete for consensus power. If the validator is active, it can propose and sign blocks. Rewards earned by that validator are shared with delegators after commission.\n\nYour delegated LUNC remains associated with your wallet address. A validator cannot spend it, transfer it, or move it to another wallet. The validator can still affect your outcome because poor validator behavior can reduce rewards, cause missed governance participation, or create slashing risk.\n\n## Why it matters for Terra Classic\n\nStaking Protocol is one of Terra Classic's strongest existing L1 products because it is live, understandable, non-custodial, and directly connected to network security.\n\nFor Terra Classic, staking also matters strategically:\n\n- Higher bonded stake reduces the liquid supply available for immediate selling.\n- More distributed stake improves the validator power structure.\n- Better validator selection raises pressure for uptime, governance participation, and professional operation.\n- More active delegator voting makes governance less dependent on a small validator minority.\n- Clear staking docs turn a confusing wallet action into a credible participation pathway.\n\nThis is why the docs should not describe staking only as a passive APR feature. On Terra Classic, staking is also a network-security, governance, and trust-surface product.\n\n## Core actions\n\n| Action | What it means | Main tradeoff |\n| --- | --- | --- |\n| Delegate | Bond liquid LUNC to a validator. | Earn rewards and voting power exposure, but accept validator risk. |\n| Claim rewards | Withdraw accumulated rewards to your wallet. | Requires a transaction fee. |\n| Redelegate | Move bonded stake from one validator to another. | Avoids the full unbonding wait, but has cooldown limits. |\n| Undelegate | Start returning bonded LUNC to liquid balance. | Takes the chain's unbonding period and earns no rewards during that time. |\n| Vote | Cast your own governance vote. | Overrides your validator's vote for that proposal. |\n\n## How this section is organized\n\n- [How it works](/staking-protocol/how-it-works/) explains the staking lifecycle and current queryable parameters.\n- [Delegate LUNC](/staking-protocol/delegate-lunc/) gives a practical staking flow for supported wallets.\n- [Rewards and APR](/staking-protocol/rewards-and-apr/) explains where rewards come from and why APR changes.\n- [Choose a validator](/staking-protocol/choose-a-validator/) gives a decision framework for delegators.\n- [Risks and unstaking](/staking-protocol/risks-and-unstaking/) covers slashing, lockups, redelegation limits, and operational risk.\n- [Governance](/governance/overview/) explains how staked LUNC becomes governance power and how proposals are reviewed and voted on.\n- [Validator responsibilities](/staking-protocol/validator-responsibilities/) explains what responsible validators should provide.\n- [Developer reference](/staking-protocol/developer-reference/) gives module, message, query, and endpoint references.\n\n## What to avoid\n\nDo not evaluate Staking Protocol only by the displayed APR. APR is useful, but it is not the whole product.\n\nA serious staking decision should also look at validator uptime, voting behavior, commission, concentration, public communication, infrastructure quality, self-delegation, community contribution, and whether the validator's incentives are aligned with Terra Classic's long-term health.\n\n## Not financial advice\n\nStaking can produce protocol rewards, but LUNC price volatility, validator behavior, governance decisions, wallet security, slashing, and liquidity timing can materially affect outcomes. These docs explain protocol mechanics. They do not tell you whether to buy, sell, hold, or stake LUNC.\n",
    "previousSlug": "learn/fees",
    "nextSlug": "staking-protocol/how-it-works"
  },
  {
    "slug": "staking-protocol/how-it-works",
    "path": "/staking-protocol/how-it-works/",
    "sourceFile": "content/docs/staking-protocol/how-it-works.md",
    "group": "Staking Protocol",
    "navTitle": "How it works",
    "navDepth": 1,
    "navParent": "staking-protocol/use-staking-protocol",
    "navHasChildren": false,
    "navOrder": 27,
    "title": "How it works",
    "description": "A practical explanation of delegation, validator power, bonding states, redelegation, unbonding, and current Terra Classic staking parameters.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/how-it-works.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Validators and delegators",
        "id": "validators-and-delegators"
      },
      {
        "depth": 2,
        "title": "Bonded, unbonding, and unbonded LUNC",
        "id": "bonded-unbonding-and-unbonded-lunc"
      },
      {
        "depth": 2,
        "title": "Validator power",
        "id": "validator-power"
      },
      {
        "depth": 2,
        "title": "Delegation shares",
        "id": "delegation-shares"
      },
      {
        "depth": 2,
        "title": "Redelegation",
        "id": "redelegation"
      },
      {
        "depth": 2,
        "title": "Unbonding",
        "id": "unbonding"
      },
      {
        "depth": 2,
        "title": "Reward accounting",
        "id": "reward-accounting"
      },
      {
        "depth": 2,
        "title": "Slashing link",
        "id": "slashing-link"
      }
    ],
    "body": "Staking Protocol is built on the standard proof-of-stake model used by Cosmos SDK chains, with Terra Classic-specific parameters and governance-controlled settings.\n\nThe simple version:\n\n1. You hold liquid LUNC in a compatible wallet.\n2. You delegate some LUNC to one or more validators.\n3. Validators use delegated stake to participate in consensus.\n4. Rewards accumulate through the distribution module.\n5. You can claim rewards, redelegate, vote, or undelegate.\n\n## Validators and delegators\n\nValidators run infrastructure. They operate nodes, sign blocks, keep keys secure, participate in upgrades, vote in governance, and maintain reliable public communication.\n\nDelegators hold LUNC and choose validators. They do not need to run nodes. By delegating, they assign staking power to validators and share in rewards and risks.\n\nThis creates a principal-agent relationship. Delegators provide capital. Validators operate the security layer. Delegators should therefore treat validator choice as an active risk decision, not a random list selection.\n\n## Bonded, unbonding, and unbonded LUNC\n\nLUNC used by Staking Protocol can be in three practical states.\n\n| State | What it means | Rewards | Liquidity |\n| --- | --- | --- | --- |\n| Unbonded | Liquid LUNC in your wallet. | No staking rewards. | Spendable and transferable. |\n| Bonded | Delegated to a validator. | Eligible for staking rewards. | Not directly spendable. |\n| Unbonding | Leaving staking and returning to liquid balance. | No staking rewards during the wait. | Locked until the unbonding period completes. |\n\nOn Terra Classic, the staking bond denomination is `uluna`.\n\n```text\n1 LUNC = 1,000,000 uluna\n```\n\n## Validator power\n\nA validator's voting power comes from its bonded stake: self-delegation plus delegations from users.\n\nIn consensus, voting power decides how much weight a validator has when blocks are proposed and committed. In governance, validator voting power is also used unless delegators cast their own vote.\n\nTerra Classic has also implemented a custom validator voting-power cap documented in the [staking module spec](/develop/module-specifications/spec-staking/). The purpose is to reduce the risk that one validator accumulates too much influence.\n\nFor a user-facing governance explanation, see [Voting power and delegation](/governance/voting-power-and-delegation/).\n\n## Delegation shares\n\nWhen you delegate, the staking module tracks your position as delegation shares against a validator, not as a separate pile of untouched tokens.\n\nThis matters because rewards and slashes change the validator's token pool over time. Your claim is proportional to your shares in that validator's pool. In normal wallet interfaces this is abstracted away, but developers and analytics tools should understand that the chain state uses shares.\n\n## Redelegation\n\nRedelegation moves bonded LUNC from one validator to another without first waiting through the full unbonding period.\n\nUse redelegation when:\n\n- a validator is jailed or unreliable\n- a validator stops voting or communicating\n- commission changes make the validator unattractive\n- stake is too concentrated in a small set of validators\n- your governance preferences no longer align\n\nRedelegation still has limits. A redelegation creates a cooldown for the same source and destination validator pair. During the redelegation window, the stake can still be slashable for infractions that occurred before the redelegation began.\n\n## Unbonding\n\nUndelegation starts the unbonding process. During unbonding, the LUNC is no longer earning rewards and is not liquid until the period completes.\n\nTerra Classic's current staking params can be queried through LCD:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, this endpoint returned:\n\n| Parameter | Value | Meaning |\n| --- | --- | --- |\n| `unbonding_time` | `1814400s` | 21 days. |\n| `max_validators` | `110` | Maximum active bonded validators. |\n| `max_entries` | `7` | Maximum simultaneous unbonding or redelegation entries per pair context. |\n| `bond_denom` | `uluna` | LUNC micro-denomination used for staking. |\n| `min_commission_rate` | `0.025` | Minimum validator commission rate of 2.5%. |\n\nAlways query current parameters before building tooling, writing operational instructions, or making a large staking decision. Governance can change parameters over time.\n\n## Reward accounting\n\nRewards are handled by the distribution module. They accumulate until withdrawn. Wallets may show pending rewards, but those rewards are not spendable until a withdraw transaction is submitted.\n\nSome staking actions can trigger reward withdrawal or accounting changes depending on wallet behavior and module rules. Keep enough liquid LUNC for fees before claiming, delegating, redelegating, or undelegating.\n\n## Slashing link\n\nStaked and unbonding LUNC can be reduced if the validator is slashed for certain failures. See [Risks and unstaking](/staking-protocol/risks-and-unstaking/) before delegating a large position.\n",
    "previousSlug": "staking-protocol/overview",
    "nextSlug": "staking-protocol/delegate-lunc"
  },
  {
    "slug": "staking-protocol/delegate-lunc",
    "path": "/staking-protocol/delegate-lunc/",
    "sourceFile": "content/docs/staking-protocol/delegate-lunc.md",
    "group": "Staking Protocol",
    "navTitle": "Delegate LUNC",
    "navDepth": 1,
    "navParent": "staking-protocol/use-staking-protocol",
    "navHasChildren": false,
    "navOrder": 28,
    "title": "Delegate LUNC",
    "description": "A practical delegator guide for staking LUNC through Staking Protocol using supported Terra Classic wallets.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/delegate-lunc.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Before you delegate",
        "id": "before-you-delegate"
      },
      {
        "depth": 2,
        "title": "Delegation flow",
        "id": "delegation-flow"
      },
      {
        "depth": 2,
        "title": "How much to delegate",
        "id": "how-much-to-delegate"
      },
      {
        "depth": 2,
        "title": "Claim rewards",
        "id": "claim-rewards"
      },
      {
        "depth": 2,
        "title": "Redelegate",
        "id": "redelegate"
      },
      {
        "depth": 2,
        "title": "Undelegate",
        "id": "undelegate"
      },
      {
        "depth": 2,
        "title": "Transaction checklist",
        "id": "transaction-checklist"
      },
      {
        "depth": 2,
        "title": "Delegator operating rhythm",
        "id": "delegator-operating-rhythm"
      }
    ],
    "body": "Delegating LUNC is the main user action in Staking Protocol.\n\nThe goal is not only to earn rewards. The better goal is to place stake with validators that make Terra Classic more secure, more accountable, and more credible.\n\n## Before you delegate\n\nPrepare these basics first:\n\n- Use a compatible Terra Classic wallet such as Keplr or Galaxy Station.\n- Confirm the active network is Terra Classic mainnet `columbus-5`.\n- Keep some liquid LUNC outside staking for transaction fees.\n- Decide whether you want to split stake across multiple validators.\n- Read the validator's commission, voting history, uptime signals, website, and public communication.\n- Understand that unstaking has a waiting period.\n\nWallet-specific setup:\n\n- [Keplr install](/learn/keplr/keplr-install/)\n- [Keplr staking](/learn/keplr/keplr-staking/)\n- [Galaxy Station install](/learn/galaxy-station/galaxy-station-install/)\n- [Galaxy Station staking](/learn/galaxy-station/galaxy-station-staking/)\n\n## Delegation flow\n\nMost wallet interfaces follow the same pattern.\n\n1. Open the wallet or staking interface.\n2. Select Terra Classic.\n3. Open the staking or validators view.\n4. Search or browse validators.\n5. Review commission, voting power, uptime, and validator information.\n6. Enter the amount of LUNC to delegate.\n7. Keep liquid LUNC for fees.\n8. Review the transaction.\n9. Sign and broadcast.\n10. Confirm the transaction on an explorer.\n\nAfter the transaction is included in a block, your delegation should appear under the selected validator.\n\n## How much to delegate\n\nDo not delegate your entire wallet balance. Keep enough LUNC liquid for:\n\n- claiming rewards\n- voting\n- redelegating\n- undelegating\n- emergency transactions\n- wallet or interface fee estimation variance\n\nFor larger positions, splitting stake across several responsible validators can reduce validator-specific risk and can support decentralization. Splitting stake does not remove market risk or protocol risk.\n\n## Claim rewards\n\nRewards accumulate until claimed. Claiming rewards requires a transaction and therefore a fee.\n\nClaim frequency is a practical tradeoff. Claiming too often can waste fees. Claiming too rarely can make portfolio tracking less clear. The best cadence depends on reward size, fee cost, and whether you plan to compound manually.\n\n## Redelegate\n\nRedelegation moves bonded LUNC from one validator to another without waiting through the full unbonding period.\n\nUse redelegation if your current validator:\n\n- is jailed\n- repeatedly misses blocks\n- stops voting\n- raises commission beyond your expectations\n- has poor communication\n- contributes to excessive stake concentration\n- no longer aligns with your governance preferences\n\nRedelegation is not unlimited. The same validator pair can be subject to a cooldown. If a wallet blocks a redelegation, check whether a prior redelegation is still active.\n\n## Undelegate\n\nUndelegation starts the unbonding period. During that period:\n\n- the LUNC is not liquid\n- the LUNC does not earn staking rewards\n- the position can still be exposed to some slash conditions tied to prior validator behavior\n- the final liquid balance appears only after unbonding completes\n\nDo not start unbonding if you need immediate liquidity.\n\n## Transaction checklist\n\nBefore signing any staking transaction:\n\n- Confirm the chain ID is `columbus-5`.\n- Confirm the validator operator address starts with `terravaloper`.\n- Confirm the wallet address starts with `terra`.\n- Confirm the LUNC amount and fee.\n- Confirm the action: delegate, redelegate, undelegate, claim, or vote.\n- Confirm you are using the real wallet or interface URL.\n\n## Delegator operating rhythm\n\nStaking is not a one-time action. A responsible delegator should periodically review:\n\n- validator jailed status\n- commission changes\n- missed-block or uptime indicators\n- governance voting behavior\n- communication quality\n- concentration in top validators\n- whether rewards are worth claiming or compounding\n\nFor a deeper decision model, read [Choose a validator](/staking-protocol/choose-a-validator/).\n",
    "previousSlug": "staking-protocol/how-it-works",
    "nextSlug": "staking-protocol/rewards-and-apr"
  },
  {
    "slug": "staking-protocol/rewards-and-apr",
    "path": "/staking-protocol/rewards-and-apr/",
    "sourceFile": "content/docs/staking-protocol/rewards-and-apr.md",
    "group": "Staking Protocol",
    "navTitle": "Rewards and APR",
    "navDepth": 1,
    "navParent": "staking-protocol/use-staking-protocol",
    "navHasChildren": false,
    "navOrder": 29,
    "title": "Rewards and APR",
    "description": "How Staking Protocol rewards are generated, distributed, claimed, and interpreted without treating APR as a fixed promise.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/rewards-and-apr.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Where rewards come from",
        "id": "where-rewards-come-from"
      },
      {
        "depth": 2,
        "title": "How rewards are split",
        "id": "how-rewards-are-split"
      },
      {
        "depth": 2,
        "title": "Why APR changes",
        "id": "why-apr-changes"
      },
      {
        "depth": 2,
        "title": "Real yield versus token price",
        "id": "real-yield-versus-token-price"
      },
      {
        "depth": 2,
        "title": "Claiming rewards",
        "id": "claiming-rewards"
      },
      {
        "depth": 2,
        "title": "Compounding",
        "id": "compounding"
      },
      {
        "depth": 2,
        "title": "APR interpretation checklist",
        "id": "apr-interpretation-checklist"
      },
      {
        "depth": 2,
        "title": "Developer note",
        "id": "developer-note"
      }
    ],
    "body": "Staking Protocol rewards are protocol-level rewards paid through Terra Classic's distribution module.\n\nAPR is useful as a summary metric, but it should never be treated as a fixed rate, a promise, or the full reason to stake.\n\n## Where rewards come from\n\nOn Terra Classic, staking rewards are primarily connected to network fee and distribution flows rather than new inflation.\n\nCurrent mint parameters can be queried here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/mint/v1beta1/params\n```\n\nAs checked on 2026-06-01, Terra Classic mint parameters returned zero inflation settings:\n\n| Parameter | Value |\n| --- | --- |\n| `inflation_rate_change` | `0` |\n| `inflation_max` | `0` |\n| `inflation_min` | `0` |\n\nDistribution parameters can be queried here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/distribution/v1beta1/params\n```\n\nAs checked on 2026-06-01, the distribution endpoint returned:\n\n| Parameter | Value | Meaning |\n| --- | --- | --- |\n| `community_tax` | `0.5` | 50% of collected distributable rewards directed to the community pool. |\n| `base_proposer_reward` | `0` | No fixed proposer reward share. |\n| `bonus_proposer_reward` | `0` | No bonus proposer reward share. |\n| `withdraw_addr_enabled` | `true` | Reward withdrawal addresses are enabled. |\n\nThese parameters can change through governance. Interfaces should query live values instead of freezing them.\n\n## How rewards are split\n\nAt a high level:\n\n1. Fees and eligible reward flows enter collection and distribution logic.\n2. The distribution module accounts for rewards by validator.\n3. Validator commission is taken from the rewards earned on behalf of delegators.\n4. Remaining rewards accrue to delegators based on their delegation shares.\n5. Rewards stay pending until withdrawn.\n\nIf a validator has 5% commission, that means the validator keeps 5% of the rewards earned by delegators on that validator before the remaining rewards are allocated to delegators.\n\nCommission affects APR, but it is not the only factor. A low-commission validator can still be a poor choice if it is unreliable, silent, over-concentrated, or absent from governance.\n\n## Why APR changes\n\nAPR can change because:\n\n- network transaction activity changes\n- fee and tax parameters change\n- community-tax or distribution parameters change\n- total bonded LUNC changes\n- validator commission changes\n- wallet or dashboard calculation methods differ\n- rewards are measured over different time windows\n- price assumptions change when dashboards convert to fiat\n\nAPR shown on a website or wallet is therefore a current estimate, not a guarantee.\n\n## Real yield versus token price\n\nStaking rewards are denominated in tokens. Your economic result also depends on LUNC price movement, liquidity, taxes, fees, and timing.\n\nAn APR can be positive while the market value of the staked position falls. An APR can also look modest while staking still improves network security, governance alignment, and long-term participation quality.\n\nDo not reduce Staking Protocol to a single APR number.\n\n## Claiming rewards\n\nRewards are not automatically spendable. A wallet must submit a withdrawal transaction.\n\nCommon reward messages include:\n\n- `MsgWithdrawDelegatorReward`\n- `MsgWithdrawValidatorCommission`\n- `MsgSetWithdrawAddress`\n\nClaiming rewards costs a transaction fee. Keep liquid LUNC available.\n\n## Compounding\n\nManual compounding means claiming rewards and delegating them again.\n\nThis can increase the staked balance over time, but it is only rational when the expected added rewards are worth more than the fees and operational friction. Small positions may not benefit from frequent compounding.\n\n## APR interpretation checklist\n\nWhen comparing validators, evaluate:\n\n- commission rate\n- whether commission recently changed\n- uptime and jailed status\n- governance participation\n- voting power concentration\n- self-delegation\n- public identity and communication\n- contribution to Terra Classic infrastructure or tooling\n- whether the validator has credible long-term incentives\n\nThe better validator is not always the validator with the highest displayed APR.\n\n## Developer note\n\nStaking dashboards should disclose their APR methodology. A credible calculator should state which endpoint, time window, fee assumptions, bonded-token value, commission treatment, and compounding assumption it uses.\n\nFor integration details, see [Developer reference](/staking-protocol/developer-reference/).\n",
    "previousSlug": "staking-protocol/delegate-lunc",
    "nextSlug": "staking-protocol/risks-and-unstaking"
  },
  {
    "slug": "staking-protocol/risks-and-unstaking",
    "path": "/staking-protocol/risks-and-unstaking/",
    "sourceFile": "content/docs/staking-protocol/risks-and-unstaking.md",
    "group": "Staking Protocol",
    "navTitle": "Risks and unstaking",
    "navDepth": 1,
    "navParent": "staking-protocol/use-staking-protocol",
    "navHasChildren": false,
    "navOrder": 30,
    "title": "Risks and unstaking",
    "description": "The main Staking Protocol risks: unbonding, redelegation cooldowns, slashing, validator failures, governance exposure, wallet security, and market risk.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/risks-and-unstaking.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Liquidity risk",
        "id": "liquidity-risk"
      },
      {
        "depth": 2,
        "title": "Redelegation risk",
        "id": "redelegation-risk"
      },
      {
        "depth": 2,
        "title": "Slashing risk",
        "id": "slashing-risk"
      },
      {
        "depth": 2,
        "title": "Validator risk",
        "id": "validator-risk"
      },
      {
        "depth": 2,
        "title": "Governance risk",
        "id": "governance-risk"
      },
      {
        "depth": 2,
        "title": "Market risk",
        "id": "market-risk"
      },
      {
        "depth": 2,
        "title": "Wallet and interface risk",
        "id": "wallet-and-interface-risk"
      },
      {
        "depth": 2,
        "title": "Operational checklist",
        "id": "operational-checklist"
      },
      {
        "depth": 2,
        "title": "When to consider redelegating",
        "id": "when-to-consider-redelegating"
      }
    ],
    "body": "Staking Protocol is non-custodial, but it is not risk-free.\n\nThe biggest mistake is treating staking as a bank deposit. It is not. It is a protocol action with lockup, validator, governance, slashing, wallet, and market risks.\n\n## Liquidity risk\n\nBonded LUNC is not liquid.\n\nIf you undelegate, the LUNC enters unbonding. During unbonding it cannot be transferred, sold, or redelegated as liquid LUNC. It also does not earn staking rewards.\n\nCurrent unbonding time is queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, Terra Classic returned `1814400s`, or 21 days.\n\nDo not stake LUNC you may need to move immediately.\n\n## Redelegation risk\n\nRedelegation is useful because it avoids the full unbonding wait when moving between validators.\n\nBut redelegation is not unlimited:\n\n- a source-to-destination validator pair can have a cooldown\n- active redelegations may block further moves\n- some slash exposure can remain for validator infractions that occurred before redelegation began\n- wallets may display redelegation errors if a previous redelegation is still active\n\nFor active management, track where and when you last redelegated.\n\n## Slashing risk\n\nSlashing penalizes validator failures by reducing stake and, in some cases, jailing the validator.\n\nCurrent slashing params are queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/slashing/v1beta1/params\n```\n\nAs checked on 2026-06-01, the endpoint returned:\n\n| Parameter | Value | Meaning |\n| --- | --- | --- |\n| `signed_blocks_window` | `100800` | Liveness is measured across this window. |\n| `min_signed_per_window` | `0.85` | Minimum signing ratio required during the window. |\n| `downtime_jail_duration` | `1800s` | Downtime jail period of 30 minutes. |\n| `slash_fraction_double_sign` | `0.05` | 5% slash for double-signing. |\n| `slash_fraction_downtime` | `0.0001` | 0.01% slash for downtime. |\n\nThese parameters are governance-controlled and should be queried before relying on them.\n\n## Validator risk\n\nValidator failures can include:\n\n- downtime\n- jailing\n- double-signing\n- poor key management\n- failed upgrades\n- weak monitoring\n- high or unexpected commission changes\n- governance absence\n- poor communication during incidents\n\nDelegators share some consequences of validator behavior. This is why validator selection matters.\n\n## Governance risk\n\nStaked LUNC has governance power.\n\nIf you do not vote, your validator's vote applies to your delegated stake by default. A validator can vote in ways you disagree with, abstain, or fail to vote. Delegators can override validator votes, but only by voting themselves before the proposal deadline.\n\nGovernance can also change protocol parameters, funding decisions, module behavior, tax rules, upgrade timing, and other chain-level settings.\n\nFor the full governance workflow, see [Governance](/governance/overview/), [Voting power and delegation](/governance/voting-power-and-delegation/), and [How to vote](/governance/how-to-vote/).\n\n## Market risk\n\nStaking rewards do not remove price risk.\n\nLUNC price can fall while you are bonded or unbonding. The unbonding period can prevent immediate reaction to market events. APR should be evaluated alongside liquidity needs, volatility, and your own risk tolerance.\n\n## Wallet and interface risk\n\nStaking is only as safe as the wallet and interface used to sign transactions.\n\nBasic practices:\n\n- use official wallet download sources\n- verify URLs before connecting\n- never enter a seed phrase into a website\n- prefer hardware wallet support for large balances where available\n- inspect transaction action, amount, fee, and validator address before signing\n- keep recovery phrases offline\n\nNo validator, website, or support account needs your seed phrase.\n\n## Operational checklist\n\nBefore staking a meaningful amount:\n\n- understand the unbonding period\n- split stake if validator-specific risk matters to you\n- review validator concentration\n- review governance participation\n- keep liquid LUNC for fees\n- test with a small transaction first\n- document which validators you used\n- know how to redelegate and undelegate before you need to do it\n\n## When to consider redelegating\n\nConsider redelegating if a validator:\n\n- is jailed\n- misses blocks repeatedly\n- stops voting\n- stops communicating\n- raises commission unexpectedly\n- becomes too concentrated\n- behaves against your governance preferences\n- creates unresolved trust or conflict-of-interest concerns\n\nStaking Protocol works best when delegators actively reward good validators and remove stake from poor operators.\n",
    "previousSlug": "staking-protocol/rewards-and-apr",
    "nextSlug": "staking-protocol/choose-a-validator"
  },
  {
    "slug": "staking-protocol/choose-a-validator",
    "path": "/staking-protocol/choose-a-validator/",
    "sourceFile": "content/docs/staking-protocol/choose-a-validator.md",
    "group": "Staking Protocol",
    "navTitle": "Choose a validator",
    "navDepth": 1,
    "navParent": "staking-protocol/validators",
    "navHasChildren": false,
    "navOrder": 32,
    "title": "Choose a validator",
    "description": "A practical validator-selection framework for Terra Classic delegators who want rewards, accountability, and better network decentralization.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/choose-a-validator.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "The short version",
        "id": "the-short-version"
      },
      {
        "depth": 2,
        "title": "Commission",
        "id": "commission"
      },
      {
        "depth": 2,
        "title": "Uptime and jailed status",
        "id": "uptime-and-jailed-status"
      },
      {
        "depth": 2,
        "title": "Governance behavior",
        "id": "governance-behavior"
      },
      {
        "depth": 2,
        "title": "Voting power concentration",
        "id": "voting-power-concentration"
      },
      {
        "depth": 2,
        "title": "Self-delegation",
        "id": "self-delegation"
      },
      {
        "depth": 2,
        "title": "Public identity and communication",
        "id": "public-identity-and-communication"
      },
      {
        "depth": 2,
        "title": "Contribution",
        "id": "contribution"
      },
      {
        "depth": 2,
        "title": "Red flags",
        "id": "red-flags"
      },
      {
        "depth": 2,
        "title": "Validator selection scorecard",
        "id": "validator-selection-scorecard"
      },
      {
        "depth": 2,
        "title": "Delegator responsibility",
        "id": "delegator-responsibility"
      }
    ],
    "body": "Validator choice is the most important decision a delegator makes in Staking Protocol.\n\nYou are not only choosing an APR. You are choosing who receives your voting power, whose infrastructure risk you accept, and who represents your stake by default in governance.\n\nFor the governance-specific side of this decision, also read [Voting power and delegation](/governance/voting-power-and-delegation/) and [Validator accountability](/governance/validator-accountability/).\n\n## The short version\n\nA strong validator should be:\n\n- reliably signing blocks\n- not jailed\n- transparent about identity and operations\n- active in governance\n- reasonable and clear about commission\n- responsive during upgrades and incidents\n- contributing to Terra Classic's long-term health\n- not making the validator set more concentrated than necessary\n\n## Commission\n\nCommission is the percentage of delegator rewards kept by the validator.\n\nTerra Classic currently enforces a minimum commission rate through staking params. Query current params here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, `min_commission_rate` returned `0.025`, or 2.5%.\n\nVery low commission is not automatically better. Validators need sustainable economics to maintain infrastructure, security practices, upgrade readiness, monitoring, and communication. Very high commission is not automatically bad either, but the validator should justify it through real contribution and reliability.\n\n## Uptime and jailed status\n\nA validator that misses too many blocks can be jailed and can create downtime slashing risk.\n\nBefore delegating, check:\n\n- whether the validator is bonded and active\n- whether it is jailed\n- recent missed block behavior\n- whether it has a pattern of upgrade failures\n- whether it communicates incidents clearly\n\nValidators should not be rewarded for being technically absent.\n\n## Governance behavior\n\nDelegating gives a validator default governance influence unless you vote yourself.\n\nReview whether the validator:\n\n- votes regularly\n- explains votes on major proposals\n- avoids silent non-participation\n- uses `NoWithVeto` responsibly\n- engages with technical and economic tradeoffs\n- follows through on commitments made in proposals\n\nTerra Classic has historically suffered from weak governance participation and validator non-participation. Delegators can improve this by moving stake away from validators that collect rewards while ignoring governance.\n\n## Voting power concentration\n\nDo not blindly delegate to the largest validators.\n\nConcentrated voting power weakens decentralization. It can make halt, censorship, governance capture, or coordination failures easier. Terra Classic's own state-of-chain research has repeatedly identified validator concentration and low Nakamoto coefficient as strategic risks.\n\nA practical rule:\n\n- Avoid adding stake to validators already holding very large voting power unless there is a strong reason.\n- Consider credible mid-size and smaller validators with strong reliability and governance records.\n- Split large delegations across multiple responsible validators.\n\n## Self-delegation\n\nSelf-delegation shows that a validator has some of its own capital at stake.\n\nDo not treat self-delegation as a perfect trust signal. A validator can have low self-delegation and still operate well, or high self-delegation and still behave poorly. But self-delegation is one input into incentive alignment.\n\n## Public identity and communication\n\nA validator should make it easy to understand:\n\n- who operates it or what organization is responsible\n- where to find official communication\n- how to contact the operator\n- what infrastructure or community contribution it provides\n- how it handles incidents\n- why delegators should trust it with voting power\n\nAnonymous or low-information validators are not automatically malicious, but they require a higher risk discount.\n\n## Contribution\n\nA validator can contribute by:\n\n- running reliable validator infrastructure\n- providing public endpoints\n- building tools and dashboards\n- participating in governance research\n- helping during upgrades\n- maintaining documentation\n- supporting developers\n- funding public goods\n- communicating risks clearly\n\nContribution should be concrete. Marketing claims without visible delivery are weak evidence.\n\n## Red flags\n\nBe careful with validators that:\n\n- are jailed or repeatedly unreliable\n- skip most governance votes\n- have no useful website or communication channel\n- change commission unexpectedly\n- promise guaranteed returns\n- push delegators into unsafe wallet behavior\n- concentrate too much voting power\n- operate with obvious conflicts of interest and no disclosure\n- make large public claims without measurable delivery\n\n## Validator selection scorecard\n\n| Criterion | Good signal | Weak signal |\n| --- | --- | --- |\n| Uptime | Active, reliable, monitored. | Jailed, repeated misses, silent incidents. |\n| Governance | Regular voting with explanations. | Frequent non-voting or no rationale. |\n| Commission | Sustainable and transparent. | Bait-rate behavior or unexplained changes. |\n| Concentration | Helps distribute stake. | Adds power to already dominant validators. |\n| Communication | Clear public channels. | No website, no contact, no incident updates. |\n| Contribution | Visible work for Terra Classic. | Slogans without delivery. |\n| Security | Sensible key and infra posture. | No evidence of operational maturity. |\n\n## Delegator responsibility\n\nDelegators are not passive passengers. If a validator becomes unreliable, stops voting, or behaves against your interests, use [redelegation](/staking-protocol/delegate-lunc/) to move your stake.\n\nFor a broader governance framework, see [Risks and safeguards](/governance/risks-and-safeguards/).\n",
    "previousSlug": "staking-protocol/risks-and-unstaking",
    "nextSlug": "staking-protocol/validator-responsibilities"
  },
  {
    "slug": "staking-protocol/validator-responsibilities",
    "path": "/staking-protocol/validator-responsibilities/",
    "sourceFile": "content/docs/staking-protocol/validator-responsibilities.md",
    "group": "Staking Protocol",
    "navTitle": "Validator responsibilities",
    "navDepth": 1,
    "navParent": "staking-protocol/validators",
    "navHasChildren": false,
    "navOrder": 33,
    "title": "Validator responsibilities",
    "description": "What responsible Terra Classic validators should provide to delegators, developers, governance participants, and the wider network.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/validator-responsibilities.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Minimum responsibility",
        "id": "minimum-responsibility"
      },
      {
        "depth": 2,
        "title": "Infrastructure",
        "id": "infrastructure"
      },
      {
        "depth": 2,
        "title": "Governance participation",
        "id": "governance-participation"
      },
      {
        "depth": 2,
        "title": "Commission discipline",
        "id": "commission-discipline"
      },
      {
        "depth": 2,
        "title": "Delegator communication",
        "id": "delegator-communication"
      },
      {
        "depth": 2,
        "title": "Security and conflicts",
        "id": "security-and-conflicts"
      },
      {
        "depth": 2,
        "title": "Support for developers",
        "id": "support-for-developers"
      },
      {
        "depth": 2,
        "title": "Becoming or running a validator",
        "id": "becoming-or-running-a-validator"
      },
      {
        "depth": 2,
        "title": "Validator accountability",
        "id": "validator-accountability"
      }
    ],
    "body": "Validators are not only reward recipients. They are infrastructure operators, security participants, governance actors, and public trust signals for Terra Classic.\n\nStaking Protocol works only if validators take that role seriously.\n\n## Minimum responsibility\n\nA responsible validator should:\n\n- maintain reliable block-signing infrastructure\n- monitor uptime and jailed status\n- keep validator keys secure\n- prepare for software upgrades\n- vote on governance proposals\n- explain votes on important proposals\n- communicate incidents\n- keep commission behavior transparent\n- avoid misleading delegators\n- maintain a useful validator profile\n\nThis is the baseline, not an exceptional contribution.\n\n## Infrastructure\n\nValidators should operate with production discipline:\n\n- hardened servers\n- monitoring and alerting\n- secure key management\n- backup and recovery procedures\n- sentry or network-protection architecture where appropriate\n- tested upgrade procedures\n- clear operational ownership\n- incident response channels\n\nValidators that treat node operation as passive income create risk for their delegators and for the network.\n\n## Governance participation\n\nValidators should vote consistently.\n\nThey should also explain important votes, especially when proposals affect:\n\n- L1 upgrades\n- tax and fee parameters\n- community pool spending\n- validator economics\n- oracle behavior\n- market or swap modules\n- security-critical changes\n- ecosystem funding\n\nNon-voting is still a governance action. A validator that repeatedly skips proposals is effectively asking delegators to provide voting power without representation.\n\n## Commission discipline\n\nCommission should be understandable and sustainable.\n\nA validator should disclose:\n\n- current commission\n- maximum commission\n- maximum daily change rate\n- why the rate is appropriate\n- whether delegators should expect changes\n\nBait-rate behavior damages trust. Sustainable commission is acceptable when paired with reliable operation and real contribution.\n\n## Delegator communication\n\nValidators should provide delegators with:\n\n- official website or profile link\n- contact channel\n- incident updates\n- upgrade readiness notices\n- governance vote rationale\n- known risks\n- service changes\n\nSilence is costly. Delegators cannot evaluate risk if validators do not communicate.\n\n## Security and conflicts\n\nValidators should disclose material conflicts where relevant.\n\nExamples include:\n\n- operating major infrastructure on multiple competing chains\n- running services that may benefit from specific governance outcomes\n- receiving funding from projects affected by proposals\n- operating validator and application businesses with overlapping incentives\n\nConflicts are not automatically disqualifying. Hidden conflicts are the problem.\n\n## Support for developers\n\nValidators can strengthen Terra Classic by supporting builders.\n\nUseful validator contributions include:\n\n- public RPC, LCD, gRPC, or archival infrastructure\n- reliable endpoint status pages\n- testnet support\n- upgrade coordination\n- technical documentation\n- open-source tooling\n- analytics and observability\n- developer support during incidents\n\nIf public endpoints are provided, validators should document limits and reliability expectations.\n\n## Becoming or running a validator\n\nFor node and validator operation, use the full-node guides:\n\n- [Full node overview](/full-node/overview/)\n- [Set up production](/full-node/run-a-full-terra-node/set-up-production/)\n- [Validate on columbus-5](/full-node/run-a-full-terra-node/validator-columbus-5/)\n- [Sync](/full-node/run-a-full-terra-node/sync/)\n- [Reset and troubleshooting](/full-node/run-a-full-terra-node/troubleshoot/)\n\nStaking Protocol docs explain the product and participation layer. The full-node section explains the operational path.\n\n## Validator accountability\n\nDelegators should expect validators to earn trust continuously.\n\nGood validators make Terra Classic easier to trust. Poor validators make the chain look fragile even when the protocol keeps running. Delegation is the mechanism that lets the community reward the first group and remove power from the second.\n",
    "previousSlug": "staking-protocol/choose-a-validator",
    "nextSlug": "staking-protocol/developer-reference"
  },
  {
    "slug": "staking-protocol/developer-reference",
    "path": "/staking-protocol/developer-reference/",
    "sourceFile": "content/docs/staking-protocol/developer-reference.md",
    "group": "Staking Protocol",
    "navTitle": "Developer reference",
    "navDepth": 1,
    "navParent": "staking-protocol/technical-reference",
    "navHasChildren": false,
    "navOrder": 35,
    "title": "Developer reference",
    "description": "Modules, messages, queries, endpoints, CLI examples, and integration notes for building Terra Classic staking and governance tooling.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/developer-reference.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Core modules",
        "id": "core-modules"
      },
      {
        "depth": 2,
        "title": "Common messages",
        "id": "common-messages"
      },
      {
        "depth": 2,
        "title": "Useful LCD queries",
        "id": "useful-lcd-queries"
      },
      {
        "depth": 2,
        "title": "CLI examples",
        "id": "cli-examples"
      },
      {
        "depth": 2,
        "title": "Integration requirements",
        "id": "integration-requirements"
      },
      {
        "depth": 2,
        "title": "APR calculator requirements",
        "id": "apr-calculator-requirements"
      },
      {
        "depth": 2,
        "title": "Error states to handle",
        "id": "error-states-to-handle"
      },
      {
        "depth": 2,
        "title": "Terra Classic-specific notes",
        "id": "terra-classic-specific-notes"
      },
      {
        "depth": 2,
        "title": "Source references",
        "id": "source-references"
      }
    ],
    "body": "Use this page when building wallets, dashboards, staking calculators, validator analytics, governance tools, portfolio trackers, or backend automation around Staking Protocol.\n\n## Core modules\n\nStaking Protocol spans several modules.\n\n| Module | Role | Module spec |\n| --- | --- | --- |\n| `x/staking` | Validators, delegations, redelegations, unbonding, staking params. | [Staking module](/develop/module-specifications/spec-staking/) |\n| `x/distribution` | Reward accounting, delegator reward withdrawals, validator commission. | [Distribution module](/develop/module-specifications/spec-distribution/) |\n| `x/slashing` | Downtime and double-signing penalties, jailed state, signing info. | [Slashing module](/develop/module-specifications/spec-slashing/) |\n| `x/gov` | Proposal lifecycle, votes, deposits, governance params. | [Governance module](/develop/module-specifications/spec-governance/) |\n\nTerra Classic inherits Cosmos SDK module behavior with Terra Classic-specific params and customizations. Always verify live chain behavior against current node endpoints and the running Terra Classic version.\n\n## Common messages\n\n| Action | Message |\n| --- | --- |\n| Delegate LUNC | `MsgDelegate` |\n| Redelegate LUNC | `MsgBeginRedelegate` |\n| Undelegate LUNC | `MsgUndelegate` |\n| Claim delegator rewards | `MsgWithdrawDelegatorReward` |\n| Claim validator commission | `MsgWithdrawValidatorCommission` |\n| Set reward withdrawal address | `MsgSetWithdrawAddress` |\n| Vote on proposal | `MsgVote` |\n| Submit proposal | `MsgSubmitProposal` |\n| Deposit on proposal | `MsgDeposit` |\n\nWallets should make the action label obvious before signing. Users should not need to inspect raw protobuf messages to understand whether they are delegating, redelegating, undelegating, claiming, voting, or changing a withdrawal address.\n\n## Useful LCD queries\n\nMainnet LCD example:\n\n```text\nhttps://terra-classic-lcd.publicnode.com\n```\n\nStaking:\n\n```text\n/cosmos/staking/v1beta1/params\n/cosmos/staking/v1beta1/pool\n/cosmos/staking/v1beta1/validators\n/cosmos/staking/v1beta1/validators/{validator_address}\n/cosmos/staking/v1beta1/delegations/{delegator_address}\n/cosmos/staking/v1beta1/validators/{validator_address}/delegations/{delegator_address}\n/cosmos/staking/v1beta1/delegators/{delegator_address}/redelegations\n/cosmos/staking/v1beta1/delegators/{delegator_address}/unbonding_delegations\n```\n\nDistribution:\n\n```text\n/cosmos/distribution/v1beta1/params\n/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards\n/cosmos/distribution/v1beta1/delegators/{delegator_address}/rewards/{validator_address}\n/cosmos/distribution/v1beta1/delegators/{delegator_address}/withdraw_address\n/cosmos/distribution/v1beta1/validators/{validator_address}/commission\n/cosmos/distribution/v1beta1/community_pool\n```\n\nSlashing:\n\n```text\n/cosmos/slashing/v1beta1/params\n/cosmos/slashing/v1beta1/signing_infos\n/cosmos/slashing/v1beta1/signing_infos/{cons_address}\n```\n\nGovernance:\n\n```text\n/cosmos/gov/v1/proposals\n/cosmos/gov/v1/proposals/{proposal_id}\n/cosmos/gov/v1/proposals/{proposal_id}/votes\n/cosmos/gov/v1/proposals/{proposal_id}/votes/{voter}\n/cosmos/gov/v1/params/voting\n```\n\nFor production systems, do not rely on a single public endpoint. Use endpoint failover, timeouts, retries, health checks, and clear error states.\n\n## CLI examples\n\nThe examples below are shapes, not copy-paste production commands. Replace addresses, amounts, gas, chain ID, key names, and endpoints with current values.\n\nDelegate:\n\n```bash\nterrad tx staking delegate terravaloper1... 1000000uluna \\\n  --from my-wallet \\\n  --chain-id columbus-5 \\\n  --gas auto \\\n  --gas-adjustment 1.4 \\\n  --fees 10000uluna\n```\n\nRedelegate:\n\n```bash\nterrad tx staking redelegate terravaloper1source... terravaloper1dest... 1000000uluna \\\n  --from my-wallet \\\n  --chain-id columbus-5 \\\n  --gas auto \\\n  --gas-adjustment 1.4 \\\n  --fees 10000uluna\n```\n\nUndelegate:\n\n```bash\nterrad tx staking unbond terravaloper1... 1000000uluna \\\n  --from my-wallet \\\n  --chain-id columbus-5 \\\n  --gas auto \\\n  --gas-adjustment 1.4 \\\n  --fees 10000uluna\n```\n\nQuery staking params:\n\n```bash\nterrad query staking params --node https://terra-classic-rpc.publicnode.com:443\n```\n\nQuery delegator rewards:\n\n```bash\nterrad query distribution rewards terra1... --node https://terra-classic-rpc.publicnode.com:443\n```\n\n## Integration requirements\n\nStaking interfaces should show:\n\n- liquid balance\n- delegated balance by validator\n- pending rewards\n- validator commission\n- validator voting power\n- jailed status\n- unbonding entries and completion times\n- redelegation entries and completion times\n- governance vote override state\n- transaction fee estimate\n- tax or fee behavior where relevant\n- clear warning before undelegation\n\n## APR calculator requirements\n\nA credible APR calculator should disclose:\n\n- data source\n- time window\n- reward source assumptions\n- bonded-token denominator\n- validator commission treatment\n- community-tax treatment\n- compounding assumption\n- whether fiat conversion is used\n- refresh time\n\nAvoid displaying APR with false precision. If the calculation is an estimate, label it as an estimate.\n\n## Error states to handle\n\nStaking tooling should handle:\n\n- insufficient liquid LUNC for fees\n- validator not found\n- validator jailed\n- invalid `terravaloper` address\n- redelegation cooldown\n- max unbonding or redelegation entries reached\n- endpoint timeout\n- stale endpoint data\n- wallet rejection\n- chain ID mismatch\n- tax or fee estimation failure\n- transaction included but UI cache not refreshed\n\nUser-facing errors should explain the next action in plain language.\n\n## Terra Classic-specific notes\n\n- Chain ID: `columbus-5`\n- Account prefix: `terra`\n- Validator operator prefix: `terravaloper`\n- Staking denomination: `uluna`\n- Display unit: `LUNC`\n- 1 LUNC: `1000000uluna`\n- Market swap mint/burn paths are disabled on Classic; do not assume historical Terra swap behavior is active.\n- Burn tax, distribution, governance, and staking parameters should be queried live.\n- Terra Classic has a custom validator voting-power cap documented in the staking module spec.\n\n## Source references\n\nUse current Terra Classic endpoints for live params and upstream Cosmos SDK docs for module behavior:\n\n- [Cosmos SDK staking module](https://docs.cosmos.network/sdk/latest/modules/staking/README)\n- [Cosmos SDK distribution module](https://docs.cosmos.network/sdk/v0.50/build/modules/distribution/README)\n- [Cosmos SDK slashing module](https://docs.cosmos.network/sdk/latest/modules/slashing/README)\n- [Cosmos SDK governance module](https://docs.cosmos.network/sdk/latest/modules/gov/README)\n",
    "previousSlug": "staking-protocol/validator-responsibilities",
    "nextSlug": "swap-protocol/overview"
  },
  {
    "slug": "swap-protocol/overview",
    "path": "/swap-protocol/overview/",
    "sourceFile": "content/docs/swap-protocol/overview.md",
    "group": "Swap Protocol",
    "navTitle": "Swap Protocol",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 36,
    "title": "Swap Protocol",
    "description": "The native L1 swap layer for exchanging LUNC and USTC through Market Module 2.0 without minting new supply.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/overview.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Product position",
        "id": "product-position"
      },
      {
        "depth": 2,
        "title": "Why it exists",
        "id": "why-it-exists"
      },
      {
        "depth": 2,
        "title": "What Swap Protocol does",
        "id": "what-swap-protocol-does"
      },
      {
        "depth": 2,
        "title": "What it does not do",
        "id": "what-it-does-not-do"
      },
      {
        "depth": 2,
        "title": "How this section is organized",
        "id": "how-this-section-is-organized"
      },
      {
        "depth": 2,
        "title": "Product discipline",
        "id": "product-discipline"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      },
      {
        "depth": 2,
        "title": "Not financial advice",
        "id": "not-financial-advice"
      }
    ],
    "body": "Swap Protocol is the product name used in these docs for the Market Module 2.0 no-mint LUNC and USTC swap design.\n\nIt is powered by Market Module 2.0, a no-mint version of the historical market module design. The product name is **Swap Protocol**. The underlying technology is **Market Module 2.0**.\n\nSwap Protocol exists to describe how Terra Classic could restore native swap utility without returning to the uncontrolled mint/burn behavior that helped damage Terra Classic in 2022.\n\nRead [Governance and status](/swap-protocol/governance-and-status/) before treating Swap Protocol as a live mainnet route. The design is useful, but design documentation is not the same as production availability.\n\nUse this section if you are:\n\n- a user who wants to understand the proposed LUNC and USTC swap route before relying on it\n- a LUNC or USTC holder evaluating the protocol's burn, liquidity, and risk mechanics\n- a validator responsible for oracle price feeds and chain safety\n- a developer integrating swap status, routing, pricing, or module data\n- a community member trying to separate real product mechanics from repeg speculation\n\n## Product position\n\nSwap Protocol is not a new token, not a DEX pool, not a centralized exchange bridge, and not a USTC repeg mechanism.\n\nIt is designed as a native protocol route for LUNC and USTC swaps. Instead of minting tokens during swaps, Market Module 2.0 uses prefilled protocol liquidity pools. The pools are funded from tax proceeds allocated for the module, and remaining pool balances are burned at the start of the next 30-day epoch.\n\nThe product promise should stay narrow:\n\n> Enable bounded LUNC and USTC swaps through Terra Classic's native L1 market route using protocol liquidity, oracle-aware pricing, spread fees, and hard safety controls.\n\n## Why it exists\n\nThe original Terra market module depended on minting and burning between LUNC and Terra stablecoins. That design assumed stable assets could be valued against hard peg targets. During the 2022 collapse, unlimited swap capacity and fixed peg assumptions helped accelerate hyperinflation.\n\nMarket Module 2.0 changes the design constraints:\n\n- swaps are designed to use prefilled pools instead of minting new supply\n- USTC is valued by live oracle prices, not by a fixed 1 USD assumption\n- swap capacity is bounded by the available pool and epoch rules\n- safety guards can stop swaps when oracle conditions are not reliable\n- remaining pool balances are burned at each epoch boundary\n\nThat makes Swap Protocol a utility and infrastructure product, not a promise that USTC will return to a particular price.\n\n## What Swap Protocol does\n\n| Capability | What it means |\n| --- | --- |\n| LUNC to USTC swaps | The design supports exchanging LUNC for USTC through protocol liquidity when the route has capacity. |\n| USTC to LUNC swaps | The design supports exchanging USTC for LUNC through protocol liquidity when the route has capacity. |\n| Oracle-aware pricing | Swap pricing uses validator-reported market prices instead of a fixed USTC peg assumption. |\n| No-mint execution | Tokens are taken from and added to prefilled pools instead of minted during execution. |\n| Spread fee | Enabled swaps collect a 0.35% spread fee in the output asset. |\n| Burn and oracle funding | Spread fees route 50% to burn and 50% to the Oracle Pool. |\n| Epoch burns | Remaining swap-pool balances are burned at the next 30-day epoch boundary. |\n\n## What it does not do\n\nSwap Protocol does not guarantee:\n\n- USTC repeg\n- LUNC price appreciation\n- unlimited liquidity\n- continuous swap availability\n- execution during oracle outages\n- a fixed exchange rate between LUNC and USTC\n- a stablecoin redemption right\n\nIf liquidity is exhausted, oracle quorum fails, sanity checks fail, or governance disables the module, swaps can be refused.\n\n## How this section is organized\n\n- [How it works](/swap-protocol/how-it-works/) explains the no-mint pool design, oracle pricing, epochs, and module lifecycle.\n- [Governance and status](/swap-protocol/governance-and-status/) explains why design status and production availability must stay separate.\n- [Implementation status](/swap-protocol/implementation-status/) lists what must be proven before live language is used.\n- [Swap LUNC and USTC](/swap-protocol/swap-lunc-and-ustc/) gives a practical decision framework for using the protocol.\n- [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/) explains spread fees, pool funding, burn routing, and finite capacity.\n- [Swap Protocol oracles and safety](/swap-protocol/oracles-and-safety-controls/) covers price feeds, quorum, TWAP checks, disabled routes, and emergency controls.\n- [Scenarios and examples](/swap-protocol/scenarios-and-examples/) translates source examples into user-readable behavior.\n- [Risks and limitations](/swap-protocol/risks-and-limitations/) lists the risks that should stay visible in any serious product explanation.\n- [Validator operations](/swap-protocol/validator-operations/) explains oracle-feeder responsibilities and operational expectations.\n- [Swap Protocol developer reference](/swap-protocol/developer-reference/) gives a technical reference for builders.\n\n## Product discipline\n\nSwap Protocol should be presented as serious chain infrastructure.\n\nThe strongest version of the product story is not hype. It is the fact that Terra Classic can expose native LUNC and USTC swaps while avoiding the two design failures that matter most: uncontrolled minting and stale fixed-peg pricing.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 production availability should be verified through current Terra Classic releases, governance records, wallet interfaces, and explorers.\n\n## Not financial advice\n\nSwap Protocol documentation explains protocol mechanics. It does not tell you whether to buy, sell, hold, swap, stake, or trade LUNC or USTC. LUNC and USTC remain volatile crypto assets, and USTC is treated by this protocol as a market-priced speculative asset rather than a guaranteed stable asset.\n",
    "previousSlug": "staking-protocol/developer-reference",
    "nextSlug": "swap-protocol/governance-and-status"
  },
  {
    "slug": "swap-protocol/governance-and-status",
    "path": "/swap-protocol/governance-and-status/",
    "sourceFile": "content/docs/swap-protocol/governance-and-status.md",
    "group": "Swap Protocol",
    "navTitle": "Governance and status",
    "navDepth": 1,
    "navParent": "swap-protocol/status",
    "navHasChildren": false,
    "navOrder": 38,
    "title": "Governance and status",
    "description": "The source-defined status of Swap Protocol and Market Module 2.0, and why design approval is not the same as live mainnet availability.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/governance-and-status.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Current documentation status",
        "id": "current-documentation-status"
      },
      {
        "depth": 2,
        "title": "What the source design describes",
        "id": "what-the-source-design-describes"
      },
      {
        "depth": 2,
        "title": "What must be proven before live language is used",
        "id": "what-must-be-proven-before-live-language-is-used"
      },
      {
        "depth": 2,
        "title": "Correct wording",
        "id": "correct-wording"
      },
      {
        "depth": 2,
        "title": "Relationship to old market behavior",
        "id": "relationship-to-old-market-behavior"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Swap Protocol is the docs product name for the Market Module 2.0 no-mint swap design.\n\nThis page exists because Swap Protocol status must be handled with the same discipline as Forex Protocol status.\n\n## Current documentation status\n\nThe docs should treat Swap Protocol as a source-defined Market Module 2.0 design unless production deployment is separately documented.\n\nThat means the docs may explain:\n\n- the no-mint swap model\n- proposed LUNC and USTC routing\n- finite protocol liquidity\n- oracle-aware pricing\n- spread fees\n- burn and Oracle Pool routing\n- safety controls\n- validator responsibilities\n\nThe docs should not imply ordinary users can use a live native Swap Protocol route unless the docs also identify the deployed chain version, supported route, wallet or interface path, and verification source.\n\n## What the source design describes\n\nThe Market Module 2.0 source material describes a redesigned native swap route intended to avoid the old Terra failure mode.\n\nCore design points:\n\n- swaps use prefilled pools instead of minting output supply\n- USTC is market-priced through oracle input rather than treated as fixed at 1 USD\n- liquidity is finite\n- spread fees are routed to burn and Oracle Pool destinations\n- safety controls can stop swaps when oracle or capacity conditions are unsafe\n- stable-to-stable routing is disabled in the design\n\nThose are design mechanics, not proof of live user availability.\n\n## What must be proven before live language is used\n\nBefore any page says Swap Protocol is live, the docs should be able to point to:\n\n| Requirement | Why it matters |\n| --- | --- |\n| Implemented Terra Classic core version | Shows the design exists in deployable chain software. |\n| Mainnet activation path | Shows the feature is not only source material. |\n| Supported user route | Shows ordinary users know where and how the route is exposed. |\n| Verification source | Lets readers confirm status outside the docs. |\n| Risk and failure-state documentation | Prevents users from treating the route as guaranteed execution. |\n\nIf those items are missing, use proposed, source design, governance direction, or pending implementation language.\n\n## Correct wording\n\n| Use | Avoid unless proven |\n| --- | --- |\n| Market Module 2.0 source design | Live Market Module 2.0 route |\n| proposed native LUNC/USTC swap route | native swaps are live |\n| no-mint swap design | users can swap now |\n| intended safety controls | deployed safety controls |\n| possible wallet or application integration | existing wallet support |\n\n## Relationship to old market behavior\n\nThe historical market module is not the same as the Market Module 2.0 design.\n\nThe old algorithmic mint/burn path should be treated as historical unless current Terra Classic core behavior proves otherwise. The point of Market Module 2.0 is to avoid returning to unlimited output minting.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 design status and production availability should be treated separately.\n\nPrimary source:\n\n- [Terra Classic Market-Module 2.0](https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38)\n\nVerify production status through external governance records, Terra Classic core releases, wallet interfaces, and explorers.\n",
    "previousSlug": "swap-protocol/overview",
    "nextSlug": "swap-protocol/implementation-status"
  },
  {
    "slug": "swap-protocol/implementation-status",
    "path": "/swap-protocol/implementation-status/",
    "sourceFile": "content/docs/swap-protocol/implementation-status.md",
    "group": "Swap Protocol",
    "navTitle": "Implementation status",
    "navDepth": 1,
    "navParent": "swap-protocol/status",
    "navHasChildren": false,
    "navOrder": 39,
    "title": "Implementation status",
    "description": "A checklist for distinguishing the Market Module 2.0 source design from deployed Swap Protocol availability.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/implementation-status.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Status checklist",
        "id": "status-checklist"
      },
      {
        "depth": 2,
        "title": "Documentation state",
        "id": "documentation-state"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Swap Protocol implementation status should be judged by evidence, not by product naming.\n\n## Status checklist\n\nBefore Swap Protocol is described as live, the docs should confirm:\n\n| Item | Required evidence |\n| --- | --- |\n| Core implementation | Terra Classic core release or code implementing the Market Module 2.0 behavior. |\n| Mainnet activation | Governance, release, or upgrade evidence showing the behavior is active on mainnet. |\n| Route support | Confirmation that LUNC to USTC and USTC to LUNC routes are supported as documented. |\n| User access | Wallet, app, CLI, or integration path that ordinary users or builders can use. |\n| Safety behavior | Documented disabled states, oracle checks, pool-capacity behavior, and unsupported-route handling. |\n| External verification | Explorer, release, governance, or ecosystem source where readers can confirm status. |\n\nIf any required evidence is missing, use source-design or proposed-product language.\n\n## Documentation state\n\nThe current documentation explains the Market Module 2.0 design. Production user availability should not be claimed without the evidence listed above.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nPrimary source:\n\n- [Terra Classic Market-Module 2.0](https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38)\n\nVerify production status through current Terra Classic releases, governance records, wallet interfaces, and explorers.\n",
    "previousSlug": "swap-protocol/governance-and-status",
    "nextSlug": "swap-protocol/how-it-works"
  },
  {
    "slug": "swap-protocol/how-it-works",
    "path": "/swap-protocol/how-it-works/",
    "sourceFile": "content/docs/swap-protocol/how-it-works.md",
    "group": "Swap Protocol",
    "navTitle": "How it works",
    "navDepth": 1,
    "navParent": "swap-protocol/use-swap-protocol",
    "navHasChildren": false,
    "navOrder": 41,
    "title": "How it works",
    "description": "How Swap Protocol uses Market Module 2.0 pools, oracle prices, epochs, fees, and safety controls.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/how-it-works.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "The old failure mode",
        "id": "the-old-failure-mode"
      },
      {
        "depth": 2,
        "title": "The no-mint pool model",
        "id": "the-no-mint-pool-model"
      },
      {
        "depth": 2,
        "title": "Epoch lifecycle",
        "id": "epoch-lifecycle"
      },
      {
        "depth": 2,
        "title": "Pricing",
        "id": "pricing"
      },
      {
        "depth": 2,
        "title": "Capacity",
        "id": "capacity"
      },
      {
        "depth": 2,
        "title": "Adaptive throttling",
        "id": "adaptive-throttling"
      },
      {
        "depth": 2,
        "title": "Fees",
        "id": "fees"
      },
      {
        "depth": 2,
        "title": "Safety controls",
        "id": "safety-controls"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Swap Protocol is designed around Market Module 2.0.\n\nThis page explains source-defined mechanics. Read [Governance and status](/swap-protocol/governance-and-status/) before treating these mechanics as live mainnet behavior.\n\nThe key design change is simple: swaps do not mint new LUNC or USTC. They move existing tokens between user balances and protocol swap pools.\n\n## The old failure mode\n\nThe historical market module used virtual liquidity and mint/burn logic. When a user swapped between Terra stablecoins and LUNC, the module could mint output tokens according to a pricing curve and oracle assumptions.\n\nThat model became dangerous because:\n\n- swap capacity could be too large\n- pool recovery could refill capacity too quickly\n- UST was treated as if it still had a hard 1 USD peg\n- minting could run faster than market demand could absorb\n\nMarket Module 2.0 is designed to keep the useful part of the market route while removing minting from swap execution.\n\n## The no-mint pool model\n\nSwap Protocol is designed to use distinct protocol pools for LUNC and USTC.\n\nAt the start of a 30-day epoch, token balances allocated to the market-module liquidity pool are moved into the swap pools. Those balances become the available liquidity for that epoch.\n\nDuring the epoch:\n\n- a LUNC to USTC swap sends LUNC into the module and takes USTC out of the USTC pool\n- a USTC to LUNC swap sends USTC into the module and takes LUNC out of the LUNC pool\n- the output amount is priced through the module's market logic and oracle prices\n- no new output tokens are minted\n\nAt the start of the next epoch, remaining balances in the swap pools are burned.\n\n## Epoch lifecycle\n\nSwap Protocol operates around 30-day epochs.\n\n| Phase | What happens |\n| --- | --- |\n| Pool accumulation | Eligible tax proceeds allocated to Market Module 2.0 accumulate for the next epoch. |\n| Epoch start | LUNC and USTC balances are moved into distinct swap pools. |\n| Active swaps | Users could swap while the module is enabled, oracle checks pass, and pool capacity remains. |\n| Capacity changes | Swap direction changes pool balances. One-sided flow can exhaust one side. |\n| Epoch boundary | Remaining balances in the pools are burned, and the next epoch starts with newly allocated liquidity. |\n\nThe source design explicitly excludes voluntary burns from the 30-day pool calculation. Voluntary burns are coins intentionally sent to the burn module by users, exchanges, or other entities. They should not be treated as liquidity funding because doing so could reduce voluntary burn support.\n\n## Pricing\n\nUSTC is not treated as a fixed 1 USD asset.\n\nSwap Protocol uses oracle-reported market pricing. Validators report prices through the oracle module, and the module uses voting-power-weighted median pricing for the relevant period.\n\nThis matters because the protocol is not pretending USTC is already repegged. USTC is priced as a market asset.\n\n## Capacity\n\nLiquidity is finite.\n\nIf enough users swap in one direction, the output pool for that direction can be depleted. When available allowance or pool capacity is exhausted, the swap is refused instead of minting new tokens to complete the trade.\n\nThat refusal is a safety property, not a product bug.\n\n## Adaptive throttling\n\nThe source design uses adaptive parameters to control how much capacity can be exposed during an epoch.\n\nThe important concepts are:\n\n- **base_pool** controls the virtual market depth used by the swap calculation\n- **Pool Recovery Period** controls how quickly virtual capacity recovers\n- **supply scaling** adjusts recovery behavior as LUNC supply changes\n- **absolute clamps** cap the allowed virtual pool size\n\nThe product implication is that Swap Protocol is intentionally bounded. It is designed to reopen native swaps only if implementation and activation occur without allowing the module to become an unlimited output source.\n\n## Fees\n\nWhen the module is implemented, enabled, and allowance remains, the design applies a 0.35% spread fee.\n\nThe fee is collected in the output asset:\n\n- USTC to LUNC swaps collect the fee in LUNC\n- LUNC to USTC swaps collect the fee in USTC\n\nThe fee is routed 50% to burn and 50% to the Oracle Pool.\n\nThe chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for Swap Protocol execution.\n\n## Safety controls\n\nSwap Protocol can refuse swaps when safety conditions fail.\n\nCore controls include:\n\n- oracle quorum requirements\n- TWAP sanity checks\n- finite pool capacity\n- disabled stable-to-stable routing\n- governance-level module closure\n\nSee [Swap Protocol oracles and safety](/swap-protocol/oracles-and-safety-controls/) for the operational detail.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 production claims should be checked against [Implementation status](/swap-protocol/implementation-status/) and current external verification sources.\n",
    "previousSlug": "swap-protocol/implementation-status",
    "nextSlug": "swap-protocol/swap-lunc-and-ustc"
  },
  {
    "slug": "swap-protocol/swap-lunc-and-ustc",
    "path": "/swap-protocol/swap-lunc-and-ustc/",
    "sourceFile": "content/docs/swap-protocol/swap-lunc-and-ustc.md",
    "group": "Swap Protocol",
    "navTitle": "Swap LUNC and USTC",
    "navDepth": 1,
    "navParent": "swap-protocol/use-swap-protocol",
    "navHasChildren": false,
    "navOrder": 42,
    "title": "Swap LUNC and USTC",
    "description": "How to think through the proposed LUNC and USTC Swap Protocol route before relying on it.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/swap-lunc-and-ustc.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Supported route",
        "id": "supported-route"
      },
      {
        "depth": 2,
        "title": "Before you swap",
        "id": "before-you-swap"
      },
      {
        "depth": 2,
        "title": "Basic flow",
        "id": "basic-flow"
      },
      {
        "depth": 2,
        "title": "Why a swap can fail",
        "id": "why-a-swap-can-fail"
      },
      {
        "depth": 2,
        "title": "Pricing behavior",
        "id": "pricing-behavior"
      },
      {
        "depth": 2,
        "title": "Fees",
        "id": "fees"
      },
      {
        "depth": 2,
        "title": "Good user practice",
        "id": "good-user-practice"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Swap Protocol is designed to support native swaps between LUNC and USTC.\n\nThis page explains what to check before relying on the protocol design. It does not document a live wallet interface because production support and interface labels can change. Always review the transaction details shown by your wallet before signing any transaction.\n\nRead [Governance and status](/swap-protocol/governance-and-status/) first. If a production route is not documented and verified, treat this as design guidance, not a live user guide.\n\n## Supported route\n\nThe Swap Protocol design is scoped to:\n\n- LUNC to USTC\n- USTC to LUNC\n\nStable-to-stable routing is disabled in the Market Module 2.0 design. The protocol should not be treated as a general stablecoin swap router.\n\n## Before you swap\n\nCheck four things before signing:\n\n| Check | Why it matters |\n| --- | --- |\n| Pair | Confirm you are swapping LUNC and USTC in the intended direction. |\n| Estimate | Review the expected output amount and the spread fee impact. |\n| Availability | Swaps can be unavailable if the module is disabled, liquidity is exhausted, or oracle checks fail. |\n| Asset risk | LUNC and USTC are volatile. USTC is market-priced, not treated as a guaranteed 1 USD asset. |\n\n## Basic flow\n\nIf a supported production interface exists, the practical flow would be:\n\n1. Connect or open a wallet that supports Terra Classic transactions.\n2. Choose LUNC or USTC as the input asset.\n3. Choose the other asset as the output asset.\n4. Enter the amount you want to swap.\n5. Review the estimated output, spread fee, and transaction details.\n6. Sign and broadcast the transaction if the terms are acceptable.\n7. Confirm the final on-chain result in your wallet or explorer.\n\nThe exact interface can differ by wallet or application. The intended protocol mechanics are the same: the module receives the input asset and releases the output asset from its available pool.\n\n## Why a swap can fail\n\nA refused swap is possible and should be expected under some conditions.\n\nCommon reasons include:\n\n- the Market Module is disabled\n- the relevant output pool has insufficient capacity\n- the epoch allowance is exhausted\n- oracle vote quorum is below the required threshold\n- the current price fails the TWAP sanity check\n- the attempted route is not supported\n- the transaction fee or account balance is insufficient\n\nWhen these conditions happen, the protocol should reject the swap instead of minting tokens to complete it.\n\n## Pricing behavior\n\nSwap Protocol uses oracle-aware pricing. USTC is valued at market price, not at a hard 1 USD peg.\n\nBecause oracle prices update on-chain by voting period, the quoted route can differ from centralized exchange prices or DEX pool prices during volatile markets. This can create arbitrage opportunities, but arbitrage is not guaranteed and should not be treated as risk-free.\n\n## Fees\n\nUnder the source design, enabled swaps collect a 0.35% spread fee in the output asset.\n\nThat means:\n\n- if you swap USTC to LUNC, the fee is collected in LUNC\n- if you swap LUNC to USTC, the fee is collected in USTC\n\nThe chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for this route.\n\n## Good user practice\n\nTreat every swap as a market transaction.\n\nBefore signing:\n\n- compare the quoted output with other available routes\n- check whether the price has moved significantly\n- understand that pool capacity is finite\n- avoid assuming a swap will remain available after you wait\n- keep enough LUNC for transaction fees\n- never sign a transaction you do not understand\n\nSwap Protocol is designed to restore native swap utility, but it does not remove market risk.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify Swap Protocol wallet availability through current wallets, releases, governance records, and explorers.\n",
    "previousSlug": "swap-protocol/how-it-works",
    "nextSlug": "swap-protocol/fees-burns-and-liquidity"
  },
  {
    "slug": "swap-protocol/fees-burns-and-liquidity",
    "path": "/swap-protocol/fees-burns-and-liquidity/",
    "sourceFile": "content/docs/swap-protocol/fees-burns-and-liquidity.md",
    "group": "Swap Protocol",
    "navTitle": "Fees, burns, and liquidity",
    "navDepth": 1,
    "navParent": "swap-protocol/economics-and-safety",
    "navHasChildren": false,
    "navOrder": 44,
    "title": "Fees, burns, and liquidity",
    "description": "How Swap Protocol funds liquidity, charges spread fees, burns remaining balances, and routes oracle funding.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/fees-burns-and-liquidity.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Liquidity source",
        "id": "liquidity-source"
      },
      {
        "depth": 2,
        "title": "Voluntary burns",
        "id": "voluntary-burns"
      },
      {
        "depth": 2,
        "title": "Spread fee",
        "id": "spread-fee"
      },
      {
        "depth": 2,
        "title": "Fee routing",
        "id": "fee-routing"
      },
      {
        "depth": 2,
        "title": "No double taxation",
        "id": "no-double-taxation"
      },
      {
        "depth": 2,
        "title": "End-of-epoch burns",
        "id": "end-of-epoch-burns"
      },
      {
        "depth": 2,
        "title": "Directional effects",
        "id": "directional-effects"
      },
      {
        "depth": 2,
        "title": "Liquidity exhaustion",
        "id": "liquidity-exhaustion"
      },
      {
        "depth": 2,
        "title": "What users should remember",
        "id": "what-users-should-remember"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Swap Protocol is designed around finite liquidity and explicit burn accounting.\n\nThis page explains the Market Module 2.0 source design, not a live-data page or proof of production availability.\n\nThe core rule is that swaps use existing pool balances. They do not mint new LUNC or USTC to satisfy demand.\n\n## Liquidity source\n\nThe Market Module 2.0 source design redirects part of eligible burn-tax proceeds into a temporary market-module liquidity pool.\n\nAt the first block of every 30-day epoch:\n\n- LUNC assigned to market-module liquidity moves into a LUNC swap pool\n- USTC assigned to market-module liquidity moves into a USTC swap pool\n- each token is handled separately\n- those balances become available for swaps during the epoch\n\nThe source describes the allocation as 60% of burn-tax proceeds, equivalent to 75% of the previous burn allocation under the stated tax-split model. The practical product point is that the swap pool is funded from prior-period tax proceeds, not from newly minted supply.\n\n## Voluntary burns\n\nVoluntary burns should be excluded from the pool calculation.\n\nVoluntary burns are coins intentionally sent to the burn module by users, exchanges, or community entities. The source calls this out because treating voluntary burns as pool funding could reduce support from entities that burn voluntarily.\n\nFor documentation purposes, this distinction matters:\n\n- tax-derived module liquidity can be used for Swap Protocol pools\n- voluntary burns should remain burns unless governance explicitly changes the design\n\n## Spread fee\n\nWhen Swap Protocol is implemented, enabled, and capacity remains, the design charges a 0.35% spread fee.\n\n| Condition | Fee behavior |\n| --- | --- |\n| Module disabled | No swap, no spread fee. |\n| Module enabled and allowance remains | 0.35% of notional is collected. |\n| Allowance exhausted | Swap is refused, no spread fee. |\n\nThe fee is collected in the output asset:\n\n- USTC to LUNC: fee collected in LUNC\n- LUNC to USTC: fee collected in USTC\n\n## Fee routing\n\nSpread fees are routed:\n\n| Destination | Share |\n| --- | --- |\n| Burn | 50% |\n| Oracle Pool | 50% |\n\nThis makes the swap route both a burn contributor and an oracle-funding contributor when users actually swap.\n\n## No double taxation\n\nThe source design states that the chain-wide burn tax does not apply to these in-module swaps. The 0.35% spread fee replaces the burn tax for Swap Protocol execution.\n\nThis is important for user expectations. A user should evaluate the route by the quoted output, spread fee, and market price, not by assuming the normal transfer tax is added on top of the protocol fee.\n\n## End-of-epoch burns\n\nAt the start of the next 30-day epoch, remaining swap-pool balances are burned.\n\nThis is the main deflation control in the design. Liquidity that was set aside for swaps but not paid out remains on-chain only until the next epoch boundary.\n\n## Directional effects\n\nThe final burn mix depends on user behavior.\n\nIf swaps are balanced in both directions, pool balances can end the epoch close to the expected allocation. If flow is strongly one-sided, one output pool can be depleted while the other token accumulates.\n\nThat means one-sided usage can shift which token is burned more at the epoch boundary.\n\nExamples:\n\n- heavy USTC to LUNC flow can reduce remaining LUNC while increasing USTC held by the pool\n- heavy LUNC to USTC flow can reduce remaining USTC while increasing LUNC held by the pool\n- low swap usage can leave more of both pools to burn at epoch end\n\nThis is why Swap Protocol should not be described as a guaranteed fixed burn outcome for either asset. It is a bounded swap route with burn mechanics, and the exact burn composition depends on actual usage.\n\n## Liquidity exhaustion\n\nIf a pool side is exhausted, the protocol should refuse swaps in that direction.\n\nThis protects Terra Classic from the old failure mode where the module could satisfy demand by minting output supply. In Market Module 2.0, finite liquidity is part of the safety model.\n\n## What users should remember\n\nSwap Protocol can generate:\n\n- utility through native LUNC and USTC swaps\n- burns through spread-fee routing\n- additional epoch burns from remaining pools\n- Oracle Pool funding through spread fees\n\nIt cannot guarantee:\n\n- a fixed monthly burn amount\n- balanced LUNC and USTC burn outcomes\n- unlimited swap capacity\n- profit from arbitrage\n- continuous availability during oracle or liquidity stress\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify Market Module 2.0 production status and live values through external explorers, governance records, releases, and wallets.\n",
    "previousSlug": "swap-protocol/swap-lunc-and-ustc",
    "nextSlug": "swap-protocol/oracles-and-safety-controls"
  },
  {
    "slug": "swap-protocol/oracles-and-safety-controls",
    "path": "/swap-protocol/oracles-and-safety-controls/",
    "sourceFile": "content/docs/swap-protocol/oracles-and-safety-controls.md",
    "group": "Swap Protocol",
    "navTitle": "Swap oracles and safety",
    "navDepth": 1,
    "navParent": "swap-protocol/economics-and-safety",
    "navHasChildren": false,
    "navOrder": 45,
    "title": "Swap oracles and safety",
    "description": "The oracle, quorum, TWAP, route, liquidity, and governance controls that protect Swap Protocol.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/oracles-and-safety-controls.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Why oracle pricing matters",
        "id": "why-oracle-pricing-matters"
      },
      {
        "depth": 2,
        "title": "Price vote period",
        "id": "price-vote-period"
      },
      {
        "depth": 2,
        "title": "Quorum auto-disable",
        "id": "quorum-auto-disable"
      },
      {
        "depth": 2,
        "title": "TWAP sanity clamp",
        "id": "twap-sanity-clamp"
      },
      {
        "depth": 2,
        "title": "Disabled stable-to-stable route",
        "id": "disabled-stable-to-stable-route"
      },
      {
        "depth": 2,
        "title": "Finite pool capacity",
        "id": "finite-pool-capacity"
      },
      {
        "depth": 2,
        "title": "Governance closure",
        "id": "governance-closure"
      },
      {
        "depth": 2,
        "title": "User impact",
        "id": "user-impact"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      },
      {
        "depth": 2,
        "title": "Integration impact",
        "id": "integration-impact"
      }
    ],
    "body": "Swap Protocol depends on the oracle module.\n\nThe protocol cannot safely price USTC if validators are not reporting current market prices with enough voting power. Market Module 2.0 therefore treats oracle failure as a reason to stop swaps.\n\n## Why oracle pricing matters\n\nThe historical market module assumed Terra stablecoins could be valued against their pegs. That assumption is not acceptable for USTC after the 2022 collapse.\n\nMarket Module 2.0 removes the fixed 1 USD assumption and is designed to use oracle-reported market pricing instead.\n\nThat means the design expects:\n\n- USTC is treated as a market-priced asset\n- validators must provide usable price data\n- the module can stop swaps when price data is unsafe\n- stale or missing oracle data should not allow token output to be drained\n\n## Price vote period\n\nThe source design uses the existing oracle cadence:\n\n| Control | Source rule |\n| --- | --- |\n| Price vote period | 5 blocks, approximately 30 seconds |\n| USTC price | voting-power-weighted median for the current period |\n| Quorum threshold | 50% voting power |\n\nSee the [Oracle module spec](/develop/module-specifications/spec-oracle/) for the broader oracle voting process.\n\n## Quorum auto-disable\n\nIf either asset lacks price votes from at least 50% of voting power for 25 blocks, the market module disables itself until quorum is restored.\n\nIn product terms: if the chain cannot see enough reliable price votes, Swap Protocol should stop accepting swaps.\n\nThis is a necessary tradeoff. Swap availability is less important than preventing unsafe execution against missing or weak price data.\n\n## TWAP sanity clamp\n\nEach swap can fail if the current peg price differs by more than 10% from a 45-block oracle TWAP.\n\nThe TWAP is fed by the same oracle system. Its role is to detect price conditions that are too inconsistent for safe execution.\n\nThis control helps protect the module from short-lived price anomalies, stale feeds, and attempted manipulation.\n\n## Disabled stable-to-stable route\n\nThe stable-to-stable route is hard-disabled in the source design.\n\nThe relevant failure state is `ErrStableSwapDisabled`.\n\nSwap Protocol should therefore be understood as a LUNC and USTC product, not a generic stablecoin router.\n\n## Finite pool capacity\n\nLiquidity limits are also safety controls.\n\nWhen the output pool does not have enough capacity, the module should refuse the swap. It should not mint new output tokens to fill the order.\n\nThis is one of the most important differences between Market Module 2.0 and the historical mint/burn model.\n\n## Governance closure\n\nThe source design includes a governance-level brake: a two-thirds super-majority can close the market module.\n\nSeparately, in a severe chain-level emergency, validator coordination can halt the chain for remediation. That is not normal product operation, but it is part of the broader safety reality for a delegated proof-of-stake chain.\n\n## User impact\n\nSafety controls can create frustrating user outcomes:\n\n- swaps may be unavailable\n- quoted paths may fail before execution\n- one direction may be exhausted before another\n- integrations may need to show protocol-disabled states\n\nThat is still better than the old alternative: satisfying unsafe demand by expanding supply.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 safety-control claims should be checked against [Swap Protocol governance and status](/swap-protocol/governance-and-status/) and current external verification sources.\n\n## Integration impact\n\nApplications that expose Swap Protocol should handle disabled states clearly.\n\nAt minimum, interfaces should distinguish:\n\n- module disabled\n- insufficient pool liquidity\n- unsupported route\n- oracle quorum failure\n- TWAP sanity failure\n- transaction fee or account-balance failure\n\nDo not collapse all failures into a generic \"swap failed\" message. Users need to know whether the issue is temporary market safety, insufficient liquidity, wallet balance, or an unsupported route.\n",
    "previousSlug": "swap-protocol/fees-burns-and-liquidity",
    "nextSlug": "swap-protocol/scenarios-and-examples"
  },
  {
    "slug": "swap-protocol/scenarios-and-examples",
    "path": "/swap-protocol/scenarios-and-examples/",
    "sourceFile": "content/docs/swap-protocol/scenarios-and-examples.md",
    "group": "Swap Protocol",
    "navTitle": "Scenarios and examples",
    "navDepth": 1,
    "navParent": "swap-protocol/economics-and-safety",
    "navHasChildren": false,
    "navOrder": 46,
    "title": "Scenarios and examples",
    "description": "Illustrative examples of how Swap Protocol behaves under balanced usage, one-sided flow, and oracle stress.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/scenarios-and-examples.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Balanced usage",
        "id": "balanced-usage"
      },
      {
        "depth": 2,
        "title": "Heavy USTC to LUNC flow",
        "id": "heavy-ustc-to-lunc-flow"
      },
      {
        "depth": 2,
        "title": "Heavy LUNC to USTC flow",
        "id": "heavy-lunc-to-ustc-flow"
      },
      {
        "depth": 2,
        "title": "Low usage",
        "id": "low-usage"
      },
      {
        "depth": 2,
        "title": "Oracle stress",
        "id": "oracle-stress"
      },
      {
        "depth": 2,
        "title": "Pool exhaustion example",
        "id": "pool-exhaustion-example"
      },
      {
        "depth": 2,
        "title": "What examples should not imply",
        "id": "what-examples-should-not-imply"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "This page translates the Market Module 2.0 source examples into possible product behavior.\n\nThese are illustrations, not forecasts. Actual outcomes depend on tax proceeds, swap demand, market prices, oracle performance, governance parameters, and user behavior.\n\n## Balanced usage\n\nIf users swap in both directions at roughly balanced value, the pools can end the epoch with a composition close to their starting allocation.\n\nProduct impact:\n\n- native swap utility could exist during the epoch\n- spread fees are generated when swaps happen\n- fees route 50% to burn and 50% to the Oracle Pool\n- remaining pool balances are burned at the next epoch\n- burn composition can remain broadly similar to the allocation model\n\nThis is the cleanest case for the product narrative, but it should not be assumed.\n\n## Heavy USTC to LUNC flow\n\nIf users mostly swap USTC to LUNC, the LUNC pool is paid out and the module receives USTC.\n\nProduct impact:\n\n- LUNC output capacity can be exhausted\n- USTC can accumulate in the pool\n- epoch-end burns can lean more toward USTC\n- LUNC burned at epoch end can be lower than under balanced usage\n\nThis does not create LUNC hyperinflation because the module does not mint new LUNC. It can, however, disappoint users who expected the mechanism to maximize LUNC burns in every scenario.\n\n## Heavy LUNC to USTC flow\n\nIf users mostly swap LUNC to USTC, the USTC pool is paid out and the module receives LUNC.\n\nProduct impact:\n\n- USTC output capacity can be exhausted\n- LUNC can accumulate in the pool\n- epoch-end burns can lean more toward LUNC\n- USTC burned at epoch end can be lower than under balanced usage\n\nThe direction of user demand matters. Swap Protocol does not force a predetermined burn mix.\n\n## Low usage\n\nIf swap usage is low, more of the original pool balances remain until the next epoch boundary.\n\nProduct impact:\n\n- fewer spread fees are generated\n- Oracle Pool funding from swap fees is lower\n- more unused pool balance can remain for epoch-end burn\n- product utility may be perceived as weaker if users expected high volume\n\nLow usage is not a protocol failure, but it is a product and expectations risk.\n\n## Oracle stress\n\nThe source design includes an oracle-stress scenario where market volatility and validator outages reduce usable price quorum.\n\nProduct impact:\n\n- if price votes fall below the required voting-power threshold, the module disables itself\n- swaps stop while the module is disabled\n- no spread fees are collected while swaps are inactive\n- pool balances remain subject to epoch rules\n\nThis behavior is intentional. If pricing is unsafe, Swap Protocol should stop.\n\n## Pool exhaustion example\n\nAssume USTC is priced at 200 LUNC per USTC and the LUNC pool has 400 million LUNC available for the period.\n\nIf users swap enough USTC to request the full 400 million LUNC, the LUNC side can be depleted. Further USTC to LUNC swaps should be refused until opposite-direction swaps replenish LUNC or a new epoch begins.\n\nIf later users swap LUNC to USTC, the LUNC they send into the module can increase LUNC availability again.\n\nThe important point: pool balances are dynamic during the epoch, but output cannot exceed available capacity.\n\n## What examples should not imply\n\nDo not use these scenarios to imply:\n\n- guaranteed volume\n- guaranteed arbitrage profit\n- guaranteed LUNC burn increase\n- guaranteed USTC burn increase\n- guaranteed swap availability\n- a target USTC price\n\nThe examples exist to show behavioral boundaries. The product remains market-dependent and implementation-dependent.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nExamples are illustrative and source-derived. They are not live forecasts, live pool data, or production availability proof.\n",
    "previousSlug": "swap-protocol/oracles-and-safety-controls",
    "nextSlug": "swap-protocol/risks-and-limitations"
  },
  {
    "slug": "swap-protocol/risks-and-limitations",
    "path": "/swap-protocol/risks-and-limitations/",
    "sourceFile": "content/docs/swap-protocol/risks-and-limitations.md",
    "group": "Swap Protocol",
    "navTitle": "Risks and limitations",
    "navDepth": 1,
    "navParent": "swap-protocol/economics-and-safety",
    "navHasChildren": false,
    "navOrder": 47,
    "title": "Risks and limitations",
    "description": "The main risks, limitations, and expectation controls for Swap Protocol and Market Module 2.0.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/risks-and-limitations.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Not a repeg",
        "id": "not-a-repeg"
      },
      {
        "depth": 2,
        "title": "Not unlimited liquidity",
        "id": "not-unlimited-liquidity"
      },
      {
        "depth": 2,
        "title": "One-sided flow risk",
        "id": "one-sided-flow-risk"
      },
      {
        "depth": 2,
        "title": "Volume expectation risk",
        "id": "volume-expectation-risk"
      },
      {
        "depth": 2,
        "title": "Oracle dependency",
        "id": "oracle-dependency"
      },
      {
        "depth": 2,
        "title": "Implementation risk",
        "id": "implementation-risk"
      },
      {
        "depth": 2,
        "title": "Parameter risk",
        "id": "parameter-risk"
      },
      {
        "depth": 2,
        "title": "Governance risk",
        "id": "governance-risk"
      },
      {
        "depth": 2,
        "title": "User risk",
        "id": "user-risk"
      },
      {
        "depth": 2,
        "title": "The honest product claim",
        "id": "the-honest-product-claim"
      }
    ],
    "body": "This page describes risks in the Market Module 2.0 / Swap Protocol design.\n\nRead [Governance and status](/swap-protocol/governance-and-status/) before treating any route as live.\n\nSwap Protocol should be explained with discipline because Terra Classic has already paid the cost of weak market-module assumptions.\n\nThe product is useful because it restores native LUNC and USTC swap utility without minting new supply. That does not make it risk-free.\n\n## Not a repeg\n\nSwap Protocol is not a USTC repeg proposal.\n\nUSTC is treated as a speculative market-priced asset. The module uses oracle-reported market pricing instead of assuming USTC is worth 1 USD.\n\nAny content that implies Swap Protocol will restore a fixed USTC peg is wrong.\n\n## Not unlimited liquidity\n\nSwap Protocol uses finite pools.\n\nIf the requested output asset is exhausted, the swap should fail. This is a core safety property. It prevents the module from satisfying demand by minting new supply.\n\n## One-sided flow risk\n\nIf most users swap in one direction, the burn outcome can become one-sided too.\n\nFor example:\n\n- heavy USTC to LUNC flow can reduce LUNC remaining for epoch-end burn and increase USTC held by the pool\n- heavy LUNC to USTC flow can reduce USTC remaining for epoch-end burn and increase LUNC held by the pool\n\nThis may disappoint users who expect every scenario to maximize burns of their preferred asset.\n\n## Volume expectation risk\n\nSwap Protocol only generates spread-fee burns and Oracle Pool funding when swaps happen.\n\nIf usage is low, fee generation will be low. Native availability is valuable, but it should not be marketed as if high volume is guaranteed.\n\nThe source material explicitly warns that community disappointment from unmet expectations is one of the main risks.\n\n## Oracle dependency\n\nSwap Protocol relies on validator oracle feeds.\n\nIf enough voting power fails to report valid prices, or if prices fail safety checks, the module can disable swaps. This protects the chain, but it means the product can be unavailable during stress.\n\nValidators and feeder operators are therefore part of the product surface, not just back-end infrastructure.\n\n## Implementation risk\n\nMarket Module 2.0 changes critical L1 behavior.\n\nThe source material identifies technical mistakes as a risk and recommends thorough review, stress testing, and audit consideration. The docs should not hide this. A no-mint design is safer than the historical mint/burn model, but implementation quality still matters.\n\n## Parameter risk\n\nSwap behavior depends on parameters and mechanisms such as liquidity allocation, base pool, recovery period, oracle thresholds, and spread fee rules.\n\nIf parameters are too loose, the product can expose more risk. If they are too tight, the product can feel unavailable or too small to matter.\n\nThe correct framing is not \"set and forget.\" It is \"bounded product design with governance-visible tradeoffs.\"\n\n## Governance risk\n\nGovernance can change protocol behavior.\n\nThat is a strength when the chain needs to adapt, but it also means product expectations must track governance decisions. Users and integrators should not assume every parameter will stay fixed forever.\n\n## User risk\n\nUsers still face normal market and wallet risks:\n\n- price volatility\n- slippage between quote and execution\n- transaction failure\n- wallet signing mistakes\n- insufficient fee balance\n- phishing or malicious interfaces\n- misunderstanding USTC's market status\n\nSwap Protocol is native infrastructure. It does not remove the need for transaction discipline.\n\n## The honest product claim\n\nThe defensible claim is:\n\n> Swap Protocol restores native LUNC and USTC swap utility through a bounded, oracle-aware, no-mint market module.\n\nThe indefensible claim is:\n\n> Swap Protocol guarantees repeg, profit, unlimited swaps, or a specific burn outcome.\n\nKeep that distinction clear.\n",
    "previousSlug": "swap-protocol/scenarios-and-examples",
    "nextSlug": "swap-protocol/validator-operations"
  },
  {
    "slug": "swap-protocol/validator-operations",
    "path": "/swap-protocol/validator-operations/",
    "sourceFile": "content/docs/swap-protocol/validator-operations.md",
    "group": "Swap Protocol",
    "navTitle": "Validator operations",
    "navDepth": 1,
    "navParent": "swap-protocol/technical-reference",
    "navHasChildren": false,
    "navOrder": 49,
    "title": "Validator operations",
    "description": "Operational responsibilities for validators and oracle feeder operators supporting Swap Protocol.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/validator-operations.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Validator role",
        "id": "validator-role"
      },
      {
        "depth": 2,
        "title": "USTC price support",
        "id": "ustc-price-support"
      },
      {
        "depth": 2,
        "title": "Provider diversity",
        "id": "provider-diversity"
      },
      {
        "depth": 2,
        "title": "Quorum monitoring",
        "id": "quorum-monitoring"
      },
      {
        "depth": 2,
        "title": "Feeder account hygiene",
        "id": "feeder-account-hygiene"
      },
      {
        "depth": 2,
        "title": "Rollout discipline",
        "id": "rollout-discipline"
      },
      {
        "depth": 2,
        "title": "User-facing responsibility",
        "id": "user-facing-responsibility"
      },
      {
        "depth": 2,
        "title": "Related references",
        "id": "related-references"
      }
    ],
    "body": "Validators are part of the Swap Protocol product surface if the Market Module 2.0 design is implemented and activated.\n\nMarket Module 2.0 depends on current oracle prices. If validators do not operate reliable oracle feeders, swaps can be disabled or unsafe.\n\nThis page describes expected responsibilities from the source design. It is not proof that the product is live.\n\n## Validator role\n\nValidators support Swap Protocol by:\n\n- running consensus infrastructure reliably\n- submitting oracle prices on schedule\n- maintaining feeder accounts and fee balances\n- supporting USTC price reporting\n- using diverse and reliable price sources\n- monitoring missed votes and quorum\n- responding quickly to feeder failures\n\nThis is not only an infrastructure task. It affects whether users can swap safely.\n\n## USTC price support\n\nThe source design requires USTC to be added to the oracle vote set and priced by real market data.\n\nThat means validator operators need oracle feeder support for USTC pricing. The old fixed 1 USD assumption is not compatible with Swap Protocol.\n\nOperators should verify:\n\n- the feeder binary supports USTC pricing\n- the feeder config includes the required denom\n- price providers are reachable\n- fallback providers are configured where supported\n- prevote and vote messages are being submitted successfully\n- missed-vote counters remain healthy\n\n## Provider diversity\n\nThe source material calls out feeder provider expansion as important for manipulation resistance and reliability.\n\nA weak provider setup creates protocol risk:\n\n- stale prices\n- missing prices\n- correlated outages\n- inaccurate medians\n- quorum loss\n\nValidators should avoid relying on a single fragile source when better provider diversity is available.\n\n## Quorum monitoring\n\nMarket Module 2.0 can disable itself if either asset has price votes from less than 50% of voting power for 25 blocks.\n\nValidators should monitor:\n\n- current oracle participation\n- their own feeder status\n- missed prevotes and votes\n- exchange-rate query results\n- chain alerts around module disablement\n\nIf quorum drops, the correct priority is restoring accurate oracle participation, not bypassing safety controls.\n\n## Feeder account hygiene\n\nOracle feeders need enough LUNC to pay transaction fees.\n\nOperators should maintain:\n\n- funded feeder accounts\n- secure key handling\n- clear restart procedures\n- logs that show provider failures and broadcast failures\n- alerting for missed oracle periods\n\nPoor feeder operations can lead to missed oracle votes and, over time, slashing risk under oracle module rules.\n\n## Rollout discipline\n\nSwap Protocol should be treated as a coordinated validator rollout.\n\nBefore a chain upgrade or parameter activation, operators should confirm:\n\n- feeder versions are compatible\n- USTC price support is active\n- provider configs are tested\n- failover behavior is understood\n- monitoring is in place\n- validators know how to diagnose disabled swap states\n\nThe source material is explicit that invalid or absent price input should trigger automatic shutdown mechanisms. That is the right failure mode, but it makes operational readiness critical.\n\n## User-facing responsibility\n\nValidators who publicly support Swap Protocol should communicate responsibly.\n\nGood communication:\n\n- explains that USTC is market-priced\n- avoids repeg promises\n- explains that oracle failure can disable swaps\n- distinguishes module safety from wallet or UI issues\n- reports incidents clearly when feeders fail\n\nBad communication overpromises volume, burns, repeg, or guaranteed availability.\n\n## Related references\n\n- [Swap Protocol governance and status](/swap-protocol/governance-and-status/)\n- [Swap Protocol oracles and safety](/swap-protocol/oracles-and-safety-controls/)\n- [Oracle module spec](/develop/module-specifications/spec-oracle/)\n- [Validator accountability](/governance/validator-accountability/)\n",
    "previousSlug": "swap-protocol/risks-and-limitations",
    "nextSlug": "swap-protocol/developer-reference"
  },
  {
    "slug": "swap-protocol/developer-reference",
    "path": "/swap-protocol/developer-reference/",
    "sourceFile": "content/docs/swap-protocol/developer-reference.md",
    "group": "Swap Protocol",
    "navTitle": "Swap developer reference",
    "navDepth": 1,
    "navParent": "swap-protocol/technical-reference",
    "navHasChildren": false,
    "navOrder": 50,
    "title": "Swap developer reference",
    "description": "Technical reference for building around the Swap Protocol and Market Module 2.0 design.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "swap-protocol-section-2026-06-01",
    "sourcePath": "content/docs/swap-protocol/developer-reference.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Related modules",
        "id": "related-modules"
      },
      {
        "depth": 2,
        "title": "Supported assets",
        "id": "supported-assets"
      },
      {
        "depth": 2,
        "title": "Execution model",
        "id": "execution-model"
      },
      {
        "depth": 2,
        "title": "Important states",
        "id": "important-states"
      },
      {
        "depth": 2,
        "title": "Source-defined controls",
        "id": "source-defined-controls"
      },
      {
        "depth": 2,
        "title": "Pool and epoch model",
        "id": "pool-and-epoch-model"
      },
      {
        "depth": 2,
        "title": "Oracle integration",
        "id": "oracle-integration"
      },
      {
        "depth": 2,
        "title": "UX requirements for integrations",
        "id": "ux-requirements-for-integrations"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      },
      {
        "depth": 2,
        "title": "Developer caution",
        "id": "developer-caution"
      }
    ],
    "body": "This reference is for developers evaluating wallets, explorers, routing interfaces, or monitoring tools around the Swap Protocol design.\n\nSwap Protocol is the product name. Market Module 2.0 is the underlying L1 implementation concept.\n\nRead [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before treating this reference as production integration guidance. Product design and production availability are separate.\n\n## Related modules\n\n| Module | Role |\n| --- | --- |\n| `x/market` | Executes market-module swap logic and maintains market parameters/state. |\n| `x/oracle` | Provides validator-reported prices used by Market Module 2.0. |\n| `x/tax` | Supplies the tax-flow context used by the liquidity allocation design. |\n| `x/gov` | Controls governance-level changes and emergency policy decisions. |\n| `x/distribution` | Receives and distributes normal staking rewards; distinct from swap execution. |\n\nSee also:\n\n- [Market module spec](/develop/module-specifications/spec-market/)\n- [Oracle module spec](/develop/module-specifications/spec-oracle/)\n- [Tax module spec](/develop/module-specifications/spec-tax/)\n\n## Supported assets\n\nSwap Protocol is scoped to LUNC and USTC.\n\nSupported product routes:\n\n- LUNC to USTC\n- USTC to LUNC\n\nStable-to-stable swaps are disabled in the source design and should be treated as unsupported. Integrations should surface this clearly rather than hiding it behind a generic failure.\n\n## Execution model\n\nAt execution time, the module should:\n\n1. verify the requested route is supported\n2. verify the module is enabled\n3. verify oracle data is available and passes safety checks\n4. calculate output using market-module logic and current prices\n5. verify output pool capacity remains available\n6. collect the 0.35% spread fee in the output asset\n7. transfer input into the module and output from the pool\n8. route spread-fee accounting to burn and Oracle Pool destinations\n\nThe exact message and keeper implementation should be confirmed against the deployed Terra Classic core version used by the application.\n\n## Important states\n\nInterfaces should model these states explicitly:\n\n| State | User-facing meaning |\n| --- | --- |\n| Enabled | Swaps can be attempted if liquidity and oracle checks pass. |\n| Disabled | The protocol route is currently unavailable. |\n| Insufficient liquidity | The requested output side does not have enough pool capacity. |\n| Allowance exhausted | Epoch capacity has been consumed. |\n| Oracle quorum failure | Not enough voting power is reporting usable prices. |\n| TWAP sanity failure | Current price differs too far from the oracle TWAP. |\n| Unsupported route | The route is not available, such as stable-to-stable swaps. |\n\nAvoid treating all of these as the same error. Users and operators need different recovery paths.\n\n## Source-defined controls\n\nThe Market Module 2.0 source defines these controls:\n\n| Control | Value or behavior |\n| --- | --- |\n| Price vote period | 5 blocks, approximately 30 seconds |\n| Quorum threshold | 50% voting power |\n| Quorum auto-disable window | 25 blocks below quorum |\n| TWAP sanity check | Swap fails if peg price differs by more than 10% from 45-block oracle TWAP |\n| Spread fee | 0.35% notional, collected in output asset |\n| Fee routing | 50% burn, 50% Oracle Pool |\n| Stable-to-stable route | Disabled |\n| Epoch length | 30 days |\n\nIf future live chain parameters differ after governance changes, applications should prefer current chain state where available.\n\n## Pool and epoch model\n\nApplications should not assume infinite liquidity.\n\nDuring each epoch:\n\n- LUNC and USTC pools have separate balances\n- swaps change those balances dynamically\n- one side can be exhausted\n- opposite-direction swaps can replenish the depleted side\n- remaining balances are burned at epoch boundary\n\nAny external analytics or monitoring tool should track LUNC and USTC independently. A single \"pool health\" number can hide one-sided exhaustion.\n\n## Oracle integration\n\nApplications that show future Swap Protocol status should read or infer:\n\n- current exchange rates\n- oracle vote participation\n- whether required assets have valid prices\n- module enabled state\n- relevant market parameters\n- pool balances or usable route capacity where exposed\n\nThe public endpoint strategy should follow the broader docs guidance in [Public Network Endpoints](/develop/endpoints/). Do not hardcode one endpoint as the only source of truth for critical routing.\n\n## UX requirements for integrations\n\nA serious Swap Protocol integration should show:\n\n- input asset\n- output asset\n- estimated output\n- spread fee\n- warning when USTC is involved\n- protocol availability\n- insufficient-liquidity state\n- transaction fee requirement\n- final confirmation before signing\n\nIt should not show:\n\n- \"USTC = $1\" assumptions\n- repeg language\n- hidden pool exhaustion failures\n- generic errors when the module disabled itself for safety\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 production availability should be verified through current Terra Classic releases, governance records, wallets, and explorers.\n\n## Developer caution\n\nMarket Module 2.0 is critical L1 behavior. Any integration that touches swap routing should be defensive:\n\n- query current state before quoting\n- refresh quotes before signing\n- handle failed broadcasts cleanly\n- distinguish protocol failure from wallet failure\n- never promise execution until the transaction is committed\n- expose transaction hashes and explorer links after broadcast\n\nFor users, a failed swap should be understandable. For operators, it should be diagnosable.\n",
    "previousSlug": "swap-protocol/validator-operations",
    "nextSlug": "forex-protocol/overview"
  },
  {
    "slug": "forex-protocol/overview",
    "path": "/forex-protocol/overview/",
    "sourceFile": "content/docs/forex-protocol/overview.md",
    "group": "Forex Protocol",
    "navTitle": "Forex Protocol",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 51,
    "title": "Forex Protocol",
    "description": "The proposed Terra Classic L1 product for collateral-backed, fiat-pegged stable assets, built around the Collateralized Stablecoin Module.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/overview.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Current status",
        "id": "current-status"
      },
      {
        "depth": 2,
        "title": "Product position",
        "id": "product-position"
      },
      {
        "depth": 2,
        "title": "Why it matters",
        "id": "why-it-matters"
      },
      {
        "depth": 2,
        "title": "Who this section is for",
        "id": "who-this-section-is-for"
      },
      {
        "depth": 2,
        "title": "What Forex Protocol proposes",
        "id": "what-forex-protocol-proposes"
      },
      {
        "depth": 2,
        "title": "What it does not do today",
        "id": "what-it-does-not-do-today"
      },
      {
        "depth": 2,
        "title": "How this section is organized",
        "id": "how-this-section-is-organized"
      },
      {
        "depth": 2,
        "title": "Product discipline",
        "id": "product-discipline"
      },
      {
        "depth": 2,
        "title": "Not financial advice",
        "id": "not-financial-advice"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Forex Protocol is a proposed Terra Classic L1 stable-asset system.\n\nThe technical mechanism described in the source material is the Collateralized Stablecoin Module, or CSM.\n\nThe product goal is to let Terra Classic support fiat-pegged stable assets backed by external collateral, starting with EUTC as a Euro-pegged Terra Classic stablecoin.\n\n## Current status\n\nForex Protocol is not live.\n\nIt is not deployed on Terra Classic mainnet, not available in wallets, and not ready for users to mint or redeem stable assets. The product concept has been accepted by Terra Classic governance as Proposal 12209, but implementation work is still needed.\n\nThe current public product framing is:\n\n- Forex Protocol is a governance-accepted L1 product concept.\n- The first proposed stable asset is EUTC.\n- The underlying technology is the Collateralized Stablecoin Module.\n- The production implementation still needs a software team or company to build, test, document, review, and deploy it.\n- A separate liquidity proposal or liquidity process may still be required after implementation work is defined.\n\nDo not treat this section as a live user guide. Treat it as product, governance, and implementation documentation for a proposed L1 product.\n\n## Product position\n\nForex Protocol is designed to replace the failed algorithmic stablecoin model with a collateral-backed architecture.\n\nThe source proposal describes it as a multi-currency, fully collateralized stablecoin system built directly on Terra Classic. Instead of relying on an algorithmic mint-and-burn relationship between LUNC and a stablecoin, the proposed CSM uses external collateral such as EURC or USDC to back issued stable assets.\n\nThe simplest product statement is:\n\n> Forex Protocol aims to bring collateral-backed, fiat-pegged stable assets to Terra Classic, starting with EUTC, using collateral vaults, oracle pricing, mint and redemption controls, DEX liquidity, and protocol-owned LUNC buyback logic.\n\n## Why it matters\n\nTerra Classic's original identity was strongly connected to decentralized money and stablecoin utility. After the 2022 collapse, that stablecoin mechanism could not simply be restarted without repeating unacceptable risk.\n\nForex Protocol matters because it tries to preserve the useful product ambition - on-chain fiat-pegged assets - while changing the risk model:\n\n- stable assets are backed by collateral rather than algorithmic expansion\n- LUNC is not minted to defend a peg\n- mint and redeem fees are paid in the same stablecoin used by the user\n- fees become secondary collateral in the proposed design\n- secondary collateral is proposed to buy back LUNC\n- redemption limits and safety controls are intended to reduce run risk\n- DEX liquidity is part of the peg-maintenance and market-access design\n\nThis makes Forex Protocol strategically different from both the old Terra market module and a simple wrapped-stablecoin listing.\n\n## Who this section is for\n\nUse this section if you are:\n\n- a community member trying to understand what Proposal 12209 accepted\n- an investor evaluating what Forex Protocol is and is not\n- a validator reviewing the operational and oracle implications\n- a developer or software company assessing the implementation work\n- a wallet, dashboard, or explorer team planning future product support\n- a governance participant reviewing open risks before funding or deployment decisions\n\n## What Forex Protocol proposes\n\nAt a high level, the source design proposes:\n\n| Product area | Source-defined idea |\n| --- | --- |\n| Stable asset | EUTC, a Euro-pegged Terra Classic stablecoin. |\n| Collateral | EURC at 1:1, or USDC with a 0.5% premium. |\n| Mint fee | 1.5%, paid in the same stablecoin used to mint. |\n| Redemption fee | 1.5%, paid in the same stablecoin withdrawn. |\n| Redemption control | No more than 10% of total EUTC supply redeemable per day. |\n| Secondary reserve | Mint and redemption fees accumulate as secondary collateral. |\n| LUNC buyback | Secondary collateral is proposed to buy LUNC through DEX routes. |\n| LUNC vault | Purchased LUNC is proposed to be stored in a permanent protocol vault. |\n| Liquidity | EUTC/LUNC, EUTC/USTC, and EUTC/USDC pools are proposed as initial liquidity targets. |\n| Safety controls | Fiat oracles, vault accounting, redemption caps, rebalancing, and a multisig kill switch. |\n\n## What it does not do today\n\nForex Protocol does not currently provide:\n\n- live EUTC minting\n- live EUTC redemption\n- live Forex Protocol pools\n- a deployed CSM contract or module\n- production oracle integration\n- a final collateral custody design\n- a completed audit\n- a wallet interface\n- a guaranteed LUNC burn outcome\n- a guaranteed stablecoin peg\n- investment advice\n\nThose gaps are not minor details. They are the actual implementation work.\n\n## How this section is organized\n\n- [Governance and status](/forex-protocol/governance-and-status/) explains Proposal 12209, the current not-live state, and the open implementation path.\n- [Implementation status](/forex-protocol/implementation-status/) lists the evidence needed before production availability can be claimed.\n- [Launch readiness](/forex-protocol/launch-readiness/) defines the minimum documentation, implementation, collateral, oracle, and risk evidence needed before live language is used.\n- [How it is proposed to work](/forex-protocol/how-it-is-proposed-to-work/) translates the source design into the proposed mint, redeem, reserve, buyback, and liquidity flow.\n- [Collateral and stable assets](/forex-protocol/collateral-and-stable-assets/) explains EUTC, EURC, USDC, premiums, collateral ratios, and vault accounting.\n- [Fees, buybacks, and liquidity](/forex-protocol/fees-buybacks-and-liquidity/) covers 1.5% fees, secondary collateral, DEX routing, LUNC buybacks, and proposed pools.\n- [Forex Protocol oracles and safety](/forex-protocol/oracles-and-safety-controls/) covers fiat price inputs, redemption caps, kill switch logic, and rebalancing controls.\n- [Risks and open questions](/forex-protocol/risks-and-open-questions/) keeps unresolved issues visible, including vault-vs-burn controversy, demand risk, collateral structure, and implementation risk.\n- [Forex Protocol developer reference](/forex-protocol/developer-reference/) gives builders and validators a technical reference for the implementation work.\n\n## Product discipline\n\nThe strongest Forex Protocol story is not that it is already solved. It is that Terra Classic has a governance-accepted path to explore collateral-backed stable assets without returning to the old algorithmic failure mode.\n\nThat is a serious claim. It is also a limited claim.\n\n## Not financial advice\n\nForex Protocol documentation explains a proposed product design and governance-approved work direction. It does not tell you whether to buy, sell, hold, stake, mint, redeem, or trade LUNC, USTC, EUTC, EURC, USDC, or any other asset.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nPrimary source:\n\n- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)\n\nForex Protocol is described here as a proposed, governance-accepted product concept. Verify production availability through governance records, release notes, wallet support, and live chain tools before relying on it.\n",
    "previousSlug": "swap-protocol/developer-reference",
    "nextSlug": "forex-protocol/governance-and-status"
  },
  {
    "slug": "forex-protocol/governance-and-status",
    "path": "/forex-protocol/governance-and-status/",
    "sourceFile": "content/docs/forex-protocol/governance-and-status.md",
    "group": "Forex Protocol",
    "navTitle": "Governance and status",
    "navDepth": 1,
    "navParent": "forex-protocol/status-and-model",
    "navHasChildren": false,
    "navOrder": 53,
    "title": "Governance and status",
    "description": "The governance-approved status of Forex Protocol, what Proposal 12209 accepted, and what still needs to be built.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/governance-and-status.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Governance decision",
        "id": "governance-decision"
      },
      {
        "depth": 2,
        "title": "What was accepted",
        "id": "what-was-accepted"
      },
      {
        "depth": 2,
        "title": "Current implementation status",
        "id": "current-implementation-status"
      },
      {
        "depth": 2,
        "title": "Why the status wording matters",
        "id": "why-the-status-wording-matters"
      },
      {
        "depth": 2,
        "title": "Source proposal scope",
        "id": "source-proposal-scope"
      },
      {
        "depth": 2,
        "title": "Roles and responsibilities",
        "id": "roles-and-responsibilities"
      },
      {
        "depth": 2,
        "title": "Open work framing",
        "id": "open-work-framing"
      },
      {
        "depth": 2,
        "title": "Governance should still protect users",
        "id": "governance-should-still-protect-users"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Forex Protocol is a governance-accepted L1 product concept, not a deployed product.\n\nThis distinction should stay visible across the docs, website, and any future wallet or developer material.\n\n## Governance decision\n\nThe Terra Classic governance item shown for this work is Proposal 12209:\n\n```text\nLunc Forex Genesis + EUTC Repeg\n```\n\nThe proposal status shown in the supplied governance screenshot is passed.\n\nThe proposal memo says:\n\n```text\nBegin development of Collateralized Stablecoin Module, test and oracle integration. Development is done for free. New prop will be put up for liquidity investment.\n```\n\nThe source discussion linked from the proposal is the LUNC Forex Genesis and EUTC Repeg thread. That thread describes the Collateralized Stablecoin Module design, EUTC as the first proposed stable asset, collateral options, fee mechanics, buyback logic, vault logic, DEX liquidity needs, and safety controls.\n\n## What was accepted\n\nBased on the source material and the governance screenshot, the accepted direction is:\n\n- begin development of the Collateralized Stablecoin Module\n- start with EUTC as the first stable asset\n- use collateralized stablecoin design rather than algorithmic expansion\n- include test and oracle integration work\n- treat liquidity investment as a later governance or funding step\n- document the CSM as the proposed technical foundation for Forex Protocol\n\nThis acceptance does not mean a production implementation already exists.\n\n## Current implementation status\n\nForex Protocol is not in production.\n\nAs of this docs section:\n\n- no live CSM production deployment is documented in this repository\n- no public user minting flow is documented\n- no public redemption flow is documented\n- no final wallet interface is documented\n- no final production oracle integration is documented\n- no audit result is documented\n- no mainnet launch instructions are documented\n\nThe product is also represented on the main Terra Classic website as open work for implementation. That means the docs should help qualified builders understand the product direction and the source-defined requirements, without pretending the work is already complete.\n\n## Why the status wording matters\n\nStablecoin documentation is trust-sensitive.\n\nIf documentation makes Forex Protocol sound live before it is implemented, users can misunderstand risk, validators can miscommunicate governance status, and builders can inherit a vague or overpromised brief.\n\nThe correct language is:\n\n| Say this | Do not say this |\n| --- | --- |\n| Proposed Forex Protocol design | Live Forex Protocol product |\n| Governance-accepted implementation direction | Completed implementation |\n| EUTC is the first proposed stable asset | EUTC is available to mint today |\n| CSM is the proposed technology | CSM is already deployed |\n| Liquidity may need a later proposal | Liquidity is already secured |\n| Safety controls need implementation and testing | Safety controls already protect users |\n\n## Source proposal scope\n\nThe source proposal says it is exclusively for construction of the CSM system.\n\nThe source lists the construction scope as:\n\n- multi-asset collateral\n- stablecoin issuance\n- automated swaps\n- LUNC buyback vault logic\n\nThe source also says that liquidity investment would require a new proposal after development.\n\nThat means this docs section should support two jobs:\n\n1. Explain the accepted product concept clearly enough for the community.\n2. Define the implementation surface clearly enough for builders to quote and execute.\n\n## Roles and responsibilities\n\nThe source proposal presents the concept as community-driven and names contributors in the discussion. It also references help from Terra Classic technical contributors for deployment after approval.\n\nThe docs should not convert that into a claim that a production team has already accepted responsibility for final delivery.\n\nA production implementation still needs explicit ownership across:\n\n- architecture\n- smart contracts or module code\n- oracle integration\n- vault accounting\n- collateral custody structure\n- DEX routing\n- testnet deployment\n- security review\n- mainnet deployment support\n- public documentation\n- post-launch monitoring\n\n## Open work framing\n\nThe open-work framing on the main website is product-correct.\n\nForex Protocol needs a team capable of turning the accepted concept into a deployable, testable, reviewable system. A serious implementation proposal should define:\n\n- discovery scope\n- exact MVP boundaries\n- technical architecture\n- collateral handling model\n- oracle and feeder requirements\n- governance-controlled parameters\n- testnet and simulation plan\n- security review plan\n- deployment plan\n- documentation deliverables\n- post-launch monitoring and incident response\n\nSee [Forex Protocol developer reference](/forex-protocol/developer-reference/) for the builder-facing implementation surface.\n\n## Governance should still protect users\n\nPassing a text proposal is not the same as de-risking a stablecoin system.\n\nBefore any production launch, governance and validators should expect evidence of:\n\n- testnet behavior\n- oracle safety\n- redemption cap behavior\n- vault accounting correctness\n- collateral accounting correctness\n- DEX routing behavior\n- emergency pause behavior\n- audit or independent review\n- user-facing risk documentation\n\nThis is not bureaucracy. It is the minimum trust standard for a stable-asset product after Terra Classic's history.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nPrimary source:\n\n- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)\n\nGovernance acceptance and production deployment are separate. Verify current production status through governance records, release notes, wallet support, and live chain tools before relying on this product.\n",
    "previousSlug": "forex-protocol/overview",
    "nextSlug": "forex-protocol/implementation-status"
  },
  {
    "slug": "forex-protocol/implementation-status",
    "path": "/forex-protocol/implementation-status/",
    "sourceFile": "content/docs/forex-protocol/implementation-status.md",
    "group": "Forex Protocol",
    "navTitle": "Implementation status",
    "navDepth": 1,
    "navParent": "forex-protocol/status-and-model",
    "navHasChildren": false,
    "navOrder": 54,
    "title": "Implementation status",
    "description": "A checklist for distinguishing the accepted Forex Protocol concept from production CSM availability.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/implementation-status.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Status checklist",
        "id": "status-checklist"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Forex Protocol is documented as a governance-accepted product concept, not as a deployed production product.\n\n## Status checklist\n\nBefore any Forex Protocol page describes production availability, the docs should confirm:\n\n| Item | Required evidence |\n| --- | --- |\n| Implemented CSM | Code, contracts, or module implementation exists and is reviewable. |\n| Test coverage | Testnet behavior, simulations, or integration tests are documented. |\n| Oracle integration | Price feeds and fallback behavior are implemented and tested. |\n| Collateral model | Supported collateral, custody assumptions, and accounting rules are final. |\n| Minting flow | User or operator minting path is documented. |\n| Redemption flow | Redemption path, fees, caps, and failure states are documented. |\n| Security review | Audit, independent review, or explicit risk acceptance exists. |\n| Mainnet launch | Governance or deployment evidence confirms production availability. |\n\nUntil those items exist, use proposed or governance-accepted language.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nPrimary source:\n\n- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)\n\nSee also [Governance and status](/forex-protocol/governance-and-status/).\n",
    "previousSlug": "forex-protocol/governance-and-status",
    "nextSlug": "forex-protocol/launch-readiness"
  },
  {
    "slug": "forex-protocol/launch-readiness",
    "path": "/forex-protocol/launch-readiness/",
    "sourceFile": "content/docs/forex-protocol/launch-readiness.md",
    "group": "Forex Protocol",
    "navTitle": "Launch readiness",
    "navDepth": 1,
    "navParent": "forex-protocol/status-and-model",
    "navHasChildren": false,
    "navOrder": 55,
    "title": "Launch readiness",
    "description": "The documentation, implementation, risk, and verification evidence needed before Forex Protocol can be presented as live.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/launch-readiness.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Minimum readiness areas",
        "id": "minimum-readiness-areas"
      },
      {
        "depth": 2,
        "title": "Documentation rule",
        "id": "documentation-rule"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Stable-asset products need a higher launch bar than ordinary documentation pages.\n\nForex Protocol should not be presented as live until implementation, collateral, oracle, redemption, and risk evidence exist.\n\n## Minimum readiness areas\n\n| Area | Required before live language |\n| --- | --- |\n| Product scope | MVP assets, collateral, fees, caps, and launch boundaries are final. |\n| Implementation | CSM implementation is complete enough for review. |\n| Oracle safety | Price sources, failover, stale-price behavior, and emergency states are documented. |\n| Collateral accounting | Collateral assets, accounting rules, and reserve logic are documented. |\n| Mint and redemption UX | User flows, fees, limits, failure states, and settlement expectations are documented. |\n| Governance controls | Parameters, pause controls, and upgrade paths are clear. |\n| Security review | Audit, review, or explicit governance risk acceptance is documented. |\n| Public docs | User docs, developer docs, risk docs, and source blocks are ready. |\n\n## Documentation rule\n\nBefore launch, docs may explain:\n\n- proposed design\n- governance acceptance\n- intended mechanics\n- risks and open questions\n- implementation requirements\n\nAfter launch, docs must explain:\n\n- exact live behavior\n- user flows\n- integration paths\n- parameters\n- failure states\n- source and verification paths\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nPrimary source:\n\n- [LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff](https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290)\n",
    "previousSlug": "forex-protocol/implementation-status",
    "nextSlug": "forex-protocol/how-it-is-proposed-to-work"
  },
  {
    "slug": "forex-protocol/how-it-is-proposed-to-work",
    "path": "/forex-protocol/how-it-is-proposed-to-work/",
    "sourceFile": "content/docs/forex-protocol/how-it-is-proposed-to-work.md",
    "group": "Forex Protocol",
    "navTitle": "How it is proposed to work",
    "navDepth": 1,
    "navParent": "forex-protocol/status-and-model",
    "navHasChildren": false,
    "navOrder": 56,
    "title": "How it is proposed to work",
    "description": "A plain-English walkthrough of the proposed Forex Protocol minting, redemption, reserve, buyback, vault, and liquidity flow.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/how-it-is-proposed-to-work.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Core flow",
        "id": "core-flow"
      },
      {
        "depth": 2,
        "title": "Minting with EURC",
        "id": "minting-with-eurc"
      },
      {
        "depth": 2,
        "title": "Minting with USDC",
        "id": "minting-with-usdc"
      },
      {
        "depth": 2,
        "title": "Redemption",
        "id": "redemption"
      },
      {
        "depth": 2,
        "title": "Daily redemption limit",
        "id": "daily-redemption-limit"
      },
      {
        "depth": 2,
        "title": "Secondary reserve",
        "id": "secondary-reserve"
      },
      {
        "depth": 2,
        "title": "LUNC buybacks",
        "id": "lunc-buybacks"
      },
      {
        "depth": 2,
        "title": "LUNC vault",
        "id": "lunc-vault"
      },
      {
        "depth": 2,
        "title": "Liquidity pools",
        "id": "liquidity-pools"
      },
      {
        "depth": 2,
        "title": "What makes this different from the old model",
        "id": "what-makes-this-different-from-the-old-model"
      },
      {
        "depth": 2,
        "title": "Product state summary",
        "id": "product-state-summary"
      }
    ],
    "body": "Forex Protocol is proposed as a collateral-backed stable-asset system.\n\nThe first proposed stable asset is EUTC. The underlying technology is the Collateralized Stablecoin Module.\n\n## Core flow\n\nThe proposed flow is:\n\n1. A user deposits approved collateral.\n2. The protocol mints EUTC against that collateral.\n3. The protocol takes a 1.5% mint fee in the same stablecoin used by the user.\n4. The fee becomes secondary collateral.\n5. EUTC can trade through proposed DEX liquidity pools.\n6. A user can redeem EUTC back to collateral.\n7. The protocol burns redeemed EUTC.\n8. The protocol takes a 1.5% redemption fee in the same stablecoin withdrawn.\n9. Secondary collateral is proposed to buy back LUNC.\n10. Purchased LUNC is proposed to be stored in a permanent protocol vault.\n\nThis is a proposal-level product design. It is not a live workflow yet.\n\n## Minting with EURC\n\nThe source defines EURC as the cleanest EUTC collateral path.\n\nProposed EURC minting:\n\n1. User deposits EURC.\n2. The contract mints EUTC at 1:1.\n3. A 1.5% protocol fee is taken in EURC.\n4. The EURC fee becomes secondary collateral.\n\nThe source emphasizes that users do not need to buy USTC or another fee token to mint. Fees are paid in the same stablecoin path the user is already using.\n\n## Minting with USDC\n\nThe source also supports USDC collateral with a premium.\n\nProposed USDC minting:\n\n1. User deposits USDC.\n2. The contract applies a 0.5% mint premium.\n3. The user receives EUTC using this source formula:\n\n```text\nEUTC minted = USDC deposited x 0.995\n```\n\n4. A 1.5% protocol fee is taken in USDC.\n5. The USDC fee becomes secondary collateral.\n\nThe source says the 0.5% USDC premium exists to protect against EUR/USD fluctuation and DEX spread.\n\n## Redemption\n\nThe proposed redemption flow is:\n\n1. User sends EUTC back to the contract.\n2. EUTC is burned.\n3. User receives the same collateral type they deposited, such as EURC or USDC.\n4. A 1.5% redemption fee is taken in that same stablecoin.\n\nThe source describes this as keeping the system clean and avoiding token-hopping.\n\n## Daily redemption limit\n\nThe source design includes a daily redemption limit:\n\n```text\nNo more than 10% of total EUTC supply can be redeemed per day.\n```\n\nThe source says this is intended to reduce:\n\n- instant mint and redeem arbitrage loops\n- large-scale redemption runs\n- liquidity crunches in the USDC vault\n- oracle-timing exploits\n\nThe practical product meaning is that EUTC is not proposed as an unlimited same-block exit instrument. Redemption is intentionally rate-limited.\n\n## Secondary reserve\n\nMint and redemption fees are proposed to accumulate in the Forex Secondary Reserve.\n\nThe source describes these fees as secondary collateral. That secondary reserve is then proposed to be used for automatic LUNC buybacks.\n\nThis creates two separate collateral concepts:\n\n| Collateral layer | Source-defined role |\n| --- | --- |\n| Primary collateral | Backs issued stable assets such as EUTC. |\n| Secondary collateral | Comes from fees and supports buyback or reserve logic. |\n\n## LUNC buybacks\n\nThe source proposal says secondary collateral is periodically swapped for LUNC through whichever supported DEX route gives the best price at the time of buyback.\n\nNamed DEX environments in the source:\n\n- GDEX\n- Terraswap\n- Terraport\n\nThe docs should treat this as proposed routing logic, not a live router guarantee.\n\n## LUNC vault\n\nThe proposed design sends purchased LUNC to a permanent protocol vault.\n\nThe source describes the vault as:\n\n- non-circulating\n- unable to be spent\n- growing over time\n- intended to strengthen long-term LUNC scarcity\n- also discussed as secondary collateral or reserve logic in the source thread\n\nThis point is controversial. Some community comments in the source argued that repurchased LUNC should be burned instead of vaulted. The source proposer defended the vault as collateral-related and community-owned.\n\nSee [Risks and open questions](/forex-protocol/risks-and-open-questions/) for the unresolved vault-vs-burn issue.\n\n## Liquidity pools\n\nThe source says the community pool may seed initial liquidity for:\n\n- EUTC/LUNC\n- EUTC/USTC\n- EUTC/USDC\n\nThese pools are important because the source relies on DEX liquidity and arbitrage to help keep EUTC markets usable.\n\nThe source also says liquidity investment would come through a later proposal. That means liquidity is not solved merely because the CSM concept passed governance.\n\n## What makes this different from the old model\n\nForex Protocol is proposed as a replacement for the failed algorithmic market module.\n\nThe main differences are:\n\n| Old algorithmic model | Proposed Forex Protocol model |\n| --- | --- |\n| Peg defense depended on mint and burn dynamics. | Stable assets are backed by external collateral. |\n| LUNC supply could expand under stress. | LUNC is not minted to support EUTC issuance. |\n| Stablecoin assumptions failed during the collapse. | Fiat oracles and collateral vaults are part of the proposed design. |\n| Systemic run dynamics caused catastrophic damage. | Redemption caps and safety controls are proposed to reduce run risk. |\n\nThe design still needs implementation and testing. A better concept is not the same as a safe deployed system.\n\n## Product state summary\n\nForex Protocol is best understood as:\n\n- accepted by governance as a direction\n- designed around the CSM\n- starting with EUTC\n- collateral-backed rather than algorithmic\n- dependent on external collateral, oracles, vaults, DEX liquidity, and safety controls\n- still awaiting production implementation\n",
    "previousSlug": "forex-protocol/launch-readiness",
    "nextSlug": "forex-protocol/collateral-and-stable-assets"
  },
  {
    "slug": "forex-protocol/collateral-and-stable-assets",
    "path": "/forex-protocol/collateral-and-stable-assets/",
    "sourceFile": "content/docs/forex-protocol/collateral-and-stable-assets.md",
    "group": "Forex Protocol",
    "navTitle": "Collateral and stable assets",
    "navDepth": 1,
    "navParent": "forex-protocol/collateral-and-safety",
    "navHasChildren": false,
    "navOrder": 58,
    "title": "Collateral and stable assets",
    "description": "How EUTC, EURC, USDC, premiums, collateral ratios, secondary collateral, and vault accounting are described in the Forex Protocol source.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/collateral-and-stable-assets.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Supported stable asset",
        "id": "supported-stable-asset"
      },
      {
        "depth": 2,
        "title": "Collateral options",
        "id": "collateral-options"
      },
      {
        "depth": 2,
        "title": "EURC path",
        "id": "eurc-path"
      },
      {
        "depth": 2,
        "title": "USDC path",
        "id": "usdc-path"
      },
      {
        "depth": 2,
        "title": "Collateralization level",
        "id": "collateralization-level"
      },
      {
        "depth": 2,
        "title": "Primary and secondary collateral",
        "id": "primary-and-secondary-collateral"
      },
      {
        "depth": 2,
        "title": "Same-collateral redemption",
        "id": "same-collateral-redemption"
      },
      {
        "depth": 2,
        "title": "Vault requirements",
        "id": "vault-requirements"
      },
      {
        "depth": 2,
        "title": "Fiat price inputs",
        "id": "fiat-price-inputs"
      },
      {
        "depth": 2,
        "title": "What users should remember",
        "id": "what-users-should-remember"
      }
    ],
    "body": "Forex Protocol starts with EUTC in the source design.\n\nEUTC is described as a Euro-pegged Terra Classic stablecoin backed by approved collateral.\n\n## Supported stable asset\n\nThe source explicitly names:\n\n| Stable asset | Description |\n| --- | --- |\n| EUTC | Euro-pegged Terra Classic stablecoin. |\n\nThe source also mentions on-chain fiat price support for multiple currencies, including USD, EUR, GBP, JPY, CAD, SGD, AUD, and CNY. That should be treated as a future multi-currency direction, not as proof that those assets are implemented.\n\nFor the initial docs section, EUTC should remain the only concrete stable asset described as source-defined.\n\n## Collateral options\n\nThe source defines two initial collateral options for EUTC:\n\n| Collateral | Source-defined treatment |\n| --- | --- |\n| EURC | 1:1 collateral for EUTC. |\n| USDC | 1:1 collateral with a 0.5% premium. |\n\nThe USDC premium exists because EUTC is Euro-pegged while USDC is USD-denominated. The source says the premium helps protect against EUR/USD fluctuation and DEX spread.\n\n## EURC path\n\nEURC is the direct collateral path.\n\nThe source minting model is:\n\n- deposit EURC\n- mint EUTC at 1:1\n- pay a 1.5% protocol fee in EURC\n- move the EURC fee into secondary collateral\n\nBecause EURC and EUTC are both Euro-denominated in the proposed model, no 0.5% currency premium is described for EURC.\n\n## USDC path\n\nUSDC is the indirect collateral path.\n\nThe source minting model is:\n\n- deposit USDC\n- apply a 0.5% premium\n- mint EUTC using the source formula:\n\n```text\nEUTC minted = USDC deposited x 0.995\n```\n\n- pay a 1.5% protocol fee in USDC\n- move the USDC fee into secondary collateral\n\nThe design needs live fiat pricing to avoid treating USD and EUR as interchangeable.\n\n## Collateralization level\n\nThe source says the system uses 100.5% collateralization and also describes vault infrastructure maintaining over-collateralization ratios of 101.5%.\n\nThose two numbers appear in different parts of the source:\n\n| Source number | Context in source material |\n| --- | --- |\n| 100.5% | Presented as safe and stable after adding the 0.5% premium and redemption limits. |\n| 101.5% | Presented in the vault infrastructure section as the over-collateralization ratio. |\n\nThese docs should not pretend the implementation has resolved that difference. A production implementer must clarify the exact collateral ratio rules and how they interact with mint fees, redemption fees, premiums, and vault accounting.\n\n## Primary and secondary collateral\n\nThe source uses two collateral concepts.\n\nPrimary collateral backs issued stable assets.\n\nSecondary collateral comes from mint and redemption fees. The source proposes using that secondary collateral for automatic LUNC buybacks, with purchased LUNC stored in a permanent protocol vault.\n\n| Collateral type | Source-defined purpose |\n| --- | --- |\n| Primary collateral | Back EUTC issuance and redemption. |\n| Secondary collateral | Fee-funded reserve used for LUNC buyback and vault logic. |\n\nThis separation must be explicit in implementation. If primary backing and secondary reserve logic are mixed, users and auditors will not be able to reason clearly about solvency.\n\n## Same-collateral redemption\n\nThe source says a user receives the same collateral they deposited when redeeming EUTC.\n\nThat means the implementation must be able to track the collateral type behind each redemption claim or define an equivalent accounting model.\n\nThis is one of the most important implementation questions because a multi-collateral system can become complex quickly.\n\nThe docs cannot invent the final accounting mechanism. The source only defines the intended user outcome.\n\n## Vault requirements\n\nThe source describes a smart vault system that will:\n\n- lock collateral such as USDC, EURC, and LUNC\n- maintain over-collateralization ratios\n- track minted outstanding supply\n- automatically rebalance mint caps based on collateral depth and volatility\n\nThe source also suggests portfolio rebalancing when there is a 5% differential between the value of USDC and EURC.\n\nThose are implementation requirements, not live product facts.\n\n## Fiat price inputs\n\nForex Protocol depends on fiat price inputs because its collateral and target asset can use different fiat units.\n\nThe source says on-chain oracle prices should refresh every 30 seconds and support live fiat prices such as USD and EUR.\n\nFor production, the important unresolved questions are:\n\n- which oracle sources are accepted\n- how validators or contracts receive fiat prices\n- what happens during stale or missing prices\n- how EUR/USD changes affect minting and redemption\n- whether mint caps change automatically or by governance\n\nSee [Forex Protocol oracles and safety](/forex-protocol/oracles-and-safety-controls/) for the safety layer.\n\n## What users should remember\n\nThe product claim is not \"EUTC exists because governance passed a proposal.\"\n\nThe defensible claim is:\n\n> EUTC is the first proposed Forex Protocol stable asset, designed to be backed by EURC or USDC collateral through the Collateralized Stablecoin Module.\n\nUntil production implementation exists, collateral behavior remains a proposed design that must be built and validated.\n",
    "previousSlug": "forex-protocol/how-it-is-proposed-to-work",
    "nextSlug": "forex-protocol/fees-buybacks-and-liquidity"
  },
  {
    "slug": "forex-protocol/fees-buybacks-and-liquidity",
    "path": "/forex-protocol/fees-buybacks-and-liquidity/",
    "sourceFile": "content/docs/forex-protocol/fees-buybacks-and-liquidity.md",
    "group": "Forex Protocol",
    "navTitle": "Fees, buybacks, and liquidity",
    "navDepth": 1,
    "navParent": "forex-protocol/collateral-and-safety",
    "navHasChildren": false,
    "navOrder": 59,
    "title": "Fees, buybacks, and liquidity",
    "description": "How the Forex Protocol source describes mint and redemption fees, secondary collateral, LUNC buybacks, vaulting, and DEX liquidity.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/fees-buybacks-and-liquidity.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Mint fee",
        "id": "mint-fee"
      },
      {
        "depth": 2,
        "title": "Redemption fee",
        "id": "redemption-fee"
      },
      {
        "depth": 2,
        "title": "Secondary collateral reserve",
        "id": "secondary-collateral-reserve"
      },
      {
        "depth": 2,
        "title": "LUNC buyback route",
        "id": "lunc-buyback-route"
      },
      {
        "depth": 2,
        "title": "Permanent LUNC vault",
        "id": "permanent-lunc-vault"
      },
      {
        "depth": 2,
        "title": "Proposed liquidity pools",
        "id": "proposed-liquidity-pools"
      },
      {
        "depth": 2,
        "title": "Why liquidity is central",
        "id": "why-liquidity-is-central"
      },
      {
        "depth": 2,
        "title": "Revenue and activity assumptions",
        "id": "revenue-and-activity-assumptions"
      },
      {
        "depth": 2,
        "title": "What this means for launch planning",
        "id": "what-this-means-for-launch-planning"
      },
      {
        "depth": 2,
        "title": "Honest product claim",
        "id": "honest-product-claim"
      }
    ],
    "body": "Forex Protocol's source design uses fees for more than revenue.\n\nMint and redemption fees become secondary collateral. That secondary collateral is proposed to fund automatic LUNC buybacks.\n\n## Mint fee\n\nThe source defines a 1.5% mint fee.\n\nThe fee is paid in the same stablecoin used for minting:\n\n| Mint collateral | Fee asset |\n| --- | --- |\n| EURC | EURC |\n| USDC | USDC |\n\nThe source explicitly avoids requiring users to buy USTC or a separate token to pay the fee.\n\n## Redemption fee\n\nThe source also defines a 1.5% redemption fee.\n\nThe fee is paid in the same stablecoin withdrawn:\n\n| Redemption collateral | Fee asset |\n| --- | --- |\n| EURC | EURC |\n| USDC | USDC |\n\nThis is intended to avoid token-hopping and make the user path simpler.\n\n## Secondary collateral reserve\n\nAll mint and redemption fees are proposed to accumulate in the Forex Secondary Reserve.\n\nThe source describes this reserve as secondary collateral. It is not the same as the primary collateral backing EUTC redemption.\n\nThe proposed reserve purpose is:\n\n- collect fees in EURC or USDC\n- use those fees for LUNC buybacks\n- store purchased LUNC in a permanent vault\n- strengthen long-term LUNC scarcity according to the source design\n\n## LUNC buyback route\n\nThe source says secondary collateral is periodically swapped for LUNC through the best available DEX route at the time of buyback.\n\nNamed DEX environments:\n\n| DEX environment | Source-described fee context |\n| --- | --- |\n| GDEX | 0.3% swap fee, split as 0.2% to LPs and 0.1% to DEX shares. |\n| Terraswap | 0.3% total swap fee, 100% to LPs. |\n| Terraport | 0.3% swap fee. |\n\nThe source also says the chain earns the 0.5% tax on every native swap.\n\nThese should be treated as source-defined design assumptions. A production implementation must verify actual route availability, fee behavior, tax treatment, and contract compatibility before launch.\n\n## Permanent LUNC vault\n\nThe source proposal sends purchased LUNC to a permanent protocol vault.\n\nThe source describes vault-held LUNC as:\n\n- non-circulating\n- not spendable\n- growing over time\n- part of the long-term scarcity and collateral story\n\nThis is one of the most sensitive design choices. Several comments in the source thread argue that buyback LUNC should go to the burn wallet instead of a permanent vault. The proposer argues that the vault is collateral-related and should not be burned.\n\nThe docs should not hide that disagreement. See [Risks and open questions](/forex-protocol/risks-and-open-questions/).\n\n## Proposed liquidity pools\n\nThe source says the community pool may seed initial liquidity for:\n\n- EUTC/LUNC\n- EUTC/USTC\n- EUTC/USDC\n\nThese pools matter because the product depends on DEX liquidity for market access, arbitrage, and peg support.\n\nThe source does not prove that liquidity is already funded. It says liquidity investment would require a later proposal after development.\n\n## Why liquidity is central\n\nCollateral alone does not make a useful stable asset.\n\nUsers need practical markets:\n\n- to enter EUTC\n- to exit EUTC\n- to arbitrage EUTC when it trades away from target value\n- to route between EUTC and Terra Classic ecosystem assets\n- to create enough on-chain volume for the product to matter\n\nThe source discussion includes a direct concern: why would users choose this stablecoin instead of established stablecoins such as USDT?\n\nThat is a valid product question, not a hostile question. Forex Protocol needs liquidity, integrations, and a reason to use EUTC.\n\n## Revenue and activity assumptions\n\nThe source describes chain and ecosystem revenue sources as:\n\n- on-chain tax\n- LP fees on DEX trades\n- protocol fees on minting and redemption\n- buybacks using protocol fees\n\nThose revenue paths only matter if users mint, redeem, trade, and provide liquidity.\n\nThe docs should not imply that fees, buybacks, or volume are guaranteed.\n\n## What this means for launch planning\n\nA credible Forex Protocol implementation plan should include:\n\n- exact fee accounting\n- reserve accounting\n- buyback trigger rules\n- DEX route selection rules\n- failed-route handling\n- slippage limits\n- vault address and permissions\n- liquidity funding assumptions\n- monitoring for pool depth and peg deviation\n- reporting for fees collected, buybacks executed, and vault balances\n\nWithout that, the product is too opaque for a stable-asset system.\n\n## Honest product claim\n\nThe defensible claim is:\n\n> Forex Protocol proposes a fee-funded secondary reserve that can buy back LUNC and support protocol-owned vault logic if the CSM is implemented and used.\n\nThe indefensible claim is:\n\n> Forex Protocol guarantees LUNC appreciation, deep liquidity, stable demand, or profitable arbitrage.\n",
    "previousSlug": "forex-protocol/collateral-and-stable-assets",
    "nextSlug": "forex-protocol/oracles-and-safety-controls"
  },
  {
    "slug": "forex-protocol/oracles-and-safety-controls",
    "path": "/forex-protocol/oracles-and-safety-controls/",
    "sourceFile": "content/docs/forex-protocol/oracles-and-safety-controls.md",
    "group": "Forex Protocol",
    "navTitle": "Forex oracles and safety",
    "navDepth": 1,
    "navParent": "forex-protocol/collateral-and-safety",
    "navHasChildren": false,
    "navOrder": 60,
    "title": "Forex oracles and safety",
    "description": "The proposed fiat oracle, redemption cap, vault, rebalancing, and emergency-control requirements for Forex Protocol.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/oracles-and-safety-controls.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Fiat price oracles",
        "id": "fiat-price-oracles"
      },
      {
        "depth": 2,
        "title": "Why fiat pricing matters",
        "id": "why-fiat-pricing-matters"
      },
      {
        "depth": 2,
        "title": "Daily redemption cap",
        "id": "daily-redemption-cap"
      },
      {
        "depth": 2,
        "title": "Vault infrastructure",
        "id": "vault-infrastructure"
      },
      {
        "depth": 2,
        "title": "Rebalancing",
        "id": "rebalancing"
      },
      {
        "depth": 2,
        "title": "Kill switch",
        "id": "kill-switch"
      },
      {
        "depth": 2,
        "title": "Governance and multisig boundary",
        "id": "governance-and-multisig-boundary"
      },
      {
        "depth": 2,
        "title": "Mint and redemption safety",
        "id": "mint-and-redemption-safety"
      },
      {
        "depth": 2,
        "title": "User-facing safety states",
        "id": "user-facing-safety-states"
      },
      {
        "depth": 2,
        "title": "Validator and operator implications",
        "id": "validator-and-operator-implications"
      },
      {
        "depth": 2,
        "title": "Safety summary",
        "id": "safety-summary"
      }
    ],
    "body": "Forex Protocol depends on safety controls because it deals with stable-asset issuance, collateral, redemption, and DEX liquidity.\n\nThe source design includes several controls, but none of them are live until implemented and tested.\n\n## Fiat price oracles\n\nThe source says Forex Protocol needs on-chain fiat price oracles.\n\nNamed fiat prices include:\n\n- USD\n- EUR\n- GBP\n- JPY\n- CAD\n- SGD\n- AUD\n- CNY\n\nThe source also says prices should refresh every 30 seconds.\n\nFor the initial EUTC path, the most important pricing relationship is EUR/USD because EURC and USDC are both listed as possible collateral for a Euro-pegged asset.\n\n## Why fiat pricing matters\n\nEUTC is proposed as a Euro-pegged asset.\n\nIf a user mints EUTC using USDC, the protocol must account for the USD/EUR relationship. The source handles this with a 0.5% premium and live pricing assumptions.\n\nWithout reliable fiat pricing:\n\n- mint ratios can be wrong\n- redemption accounting can be wrong\n- USDC collateral can become underpriced or overpriced against EUTC\n- arbitrage can exploit stale values\n- vault rebalancing can fail\n\nOracle quality is therefore a core product requirement, not a back-end detail.\n\n## Daily redemption cap\n\nThe source includes this redemption limit:\n\n```text\nNo matter how much EUTC is circulating, only 10% of total supply can be redeemed per day.\n```\n\nThe source says the cap is intended to prevent:\n\n- instant mint and redeem arbitrage loops\n- large-scale redemption runs\n- liquidity crunches in the USDC vault\n- oracle-timing exploits\n\nThis is a strong safety control, but it also changes user expectations. Users should understand that redemption is proposed to be rate-limited.\n\n## Vault infrastructure\n\nThe source describes a smart vault system that will:\n\n- lock collateral such as USDC, EURC, and LUNC\n- maintain over-collateralization ratios\n- track minted outstanding supply\n- automatically rebalance mint caps based on collateral depth and volatility\n\nThis requires precise implementation. A vault is not safe because it is called a vault. It is safe only if ownership, permissions, accounting, and emergency behavior are correct.\n\n## Rebalancing\n\nThe source suggests portfolio rebalancing when there is a 5% differential between the value of USDC and EURC.\n\nThis is a design signal, not a complete algorithm.\n\nA production implementation must define:\n\n- what price sources measure the differential\n- who or what can trigger rebalancing\n- whether rebalancing is automatic, governance-controlled, or multisig-controlled\n- what assets can be sold or moved\n- what slippage limits apply\n- how rebalancing events are reported\n\n## Kill switch\n\nThe source includes a kill switch concept.\n\nThe source describes the kill switch as:\n\n- multisig-controlled\n- requiring multiple signers, with 5-of-9 given as a common example\n- able to pause new redemptions temporarily\n- not blocking user balances\n- not stopping mints unless needed\n- automatically resuming after a governance vote\n\nThis is not a final implementation spec. It is an emergency-control concept that must be turned into exact permissions and procedures before deployment.\n\n## Governance and multisig boundary\n\nStablecoin controls must avoid two bad extremes:\n\n- no emergency control when the system is under attack\n- opaque human control over user assets\n\nThe source tries to solve this with multisig and governance resumption. The final design still needs to define the boundary between:\n\n- automated contract logic\n- multisig emergency action\n- governance approval\n- user redemption rights\n- collateral movement\n- public reporting\n\nWithout that boundary, the system will be hard to trust.\n\n## Mint and redemption safety\n\nThe source claims the proposed design reduces collateral risk because the 10% daily redemption cap prevents large immediate exits and oracle-timing exploits.\n\nThat may be directionally reasonable, but it must be tested.\n\nProduction validation should include:\n\n- mint then redeem loops\n- large user redemption attempts\n- rapid EUR/USD movement\n- DEX spread changes\n- missing or stale oracle prices\n- sudden liquidity withdrawal\n- one collateral asset becoming unavailable\n- emergency pause and resume\n\n## User-facing safety states\n\nAny future interface should distinguish at least these states:\n\n| State | User-facing meaning |\n| --- | --- |\n| Not launched | Forex Protocol is not available yet. |\n| Mint available | New EUTC minting can be attempted. |\n| Mint paused | New minting is temporarily unavailable. |\n| Redemption available | EUTC redemption can be attempted within limits. |\n| Redemption cap reached | The daily redemption limit has been used. |\n| Redemption paused | Emergency controls paused new redemptions. |\n| Oracle degraded | Pricing inputs are missing, stale, or unsafe. |\n| Liquidity limited | DEX depth may not support the desired route. |\n\nGeneric \"transaction failed\" errors are not enough for this product class.\n\n## Validator and operator implications\n\nThe source mentions on-chain fiat prices. If those prices depend on validator oracle participation or chain-level oracle infrastructure, validators become part of the product surface.\n\nBefore launch, operators need clear instructions for:\n\n- supported price feeds\n- feeder configuration\n- monitoring\n- missed-vote behavior\n- failover providers\n- incident reporting\n\nSee the [Oracle module spec](/develop/module-specifications/spec-oracle/) for the current Terra Classic oracle context.\n\n## Safety summary\n\nForex Protocol should not launch as \"trust us, it is collateralized.\"\n\nIt needs visible controls:\n\n- collateral accounting\n- fiat price feeds\n- redemption limits\n- vault permissions\n- rebalancing rules\n- emergency pause logic\n- testnet evidence\n- public monitoring\n\nThose controls are the difference between a serious stable-asset product and another fragile narrative.\n",
    "previousSlug": "forex-protocol/fees-buybacks-and-liquidity",
    "nextSlug": "forex-protocol/risks-and-open-questions"
  },
  {
    "slug": "forex-protocol/risks-and-open-questions",
    "path": "/forex-protocol/risks-and-open-questions/",
    "sourceFile": "content/docs/forex-protocol/risks-and-open-questions.md",
    "group": "Forex Protocol",
    "navTitle": "Risks and open questions",
    "navDepth": 1,
    "navParent": "forex-protocol/collateral-and-safety",
    "navHasChildren": false,
    "navOrder": 61,
    "title": "Risks and open questions",
    "description": "The unresolved risks, product questions, governance issues, and implementation gaps in the proposed Forex Protocol design.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/risks-and-open-questions.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Not live risk",
        "id": "not-live-risk"
      },
      {
        "depth": 2,
        "title": "Implementation risk",
        "id": "implementation-risk"
      },
      {
        "depth": 2,
        "title": "Vault versus burn controversy",
        "id": "vault-versus-burn-controversy"
      },
      {
        "depth": 2,
        "title": "Demand risk",
        "id": "demand-risk"
      },
      {
        "depth": 2,
        "title": "Liquidity risk",
        "id": "liquidity-risk"
      },
      {
        "depth": 2,
        "title": "Oracle risk",
        "id": "oracle-risk"
      },
      {
        "depth": 2,
        "title": "Collateral accounting risk",
        "id": "collateral-accounting-risk"
      },
      {
        "depth": 2,
        "title": "Redemption cap tradeoff",
        "id": "redemption-cap-tradeoff"
      },
      {
        "depth": 2,
        "title": "Legal and regulatory risk",
        "id": "legal-and-regulatory-risk"
      },
      {
        "depth": 2,
        "title": "Multisig and governance trust risk",
        "id": "multisig-and-governance-trust-risk"
      },
      {
        "depth": 2,
        "title": "Stablecoin reputation risk",
        "id": "stablecoin-reputation-risk"
      },
      {
        "depth": 2,
        "title": "Open questions for implementation",
        "id": "open-questions-for-implementation"
      },
      {
        "depth": 2,
        "title": "Bottom line",
        "id": "bottom-line"
      }
    ],
    "body": "Forex Protocol should be documented with visible risk controls.\n\nThe source design is ambitious and strategically important, but stable-asset systems fail when docs hide unresolved questions.\n\n## Not live risk\n\nThe first risk is basic: Forex Protocol is not live.\n\nIf users believe EUTC minting or redemption is already available, they can be misled by fake interfaces, fake airdrops, fake contracts, or social posts that imply launch status.\n\nUntil a production deployment is verified, the correct user instruction is:\n\n```text\nDo not attempt to mint or redeem Forex Protocol assets through unofficial links.\n```\n\n## Implementation risk\n\nThe proposal is not a production specification.\n\nIt describes the product direction, but a build team still needs to define exact architecture, contract or module boundaries, custody assumptions, oracle feeds, DEX routing, vault accounting, permissions, deployment process, and monitoring.\n\nImplementation risk is high because Forex Protocol touches:\n\n- stable-asset issuance\n- collateral custody\n- redemption accounting\n- DEX routing\n- oracle pricing\n- emergency controls\n- governance trust\n- user-facing financial expectations\n\nThis cannot be treated like a simple UI feature.\n\n## Vault versus burn controversy\n\nThe most visible controversy in the source discussion is what should happen to LUNC bought with protocol fees.\n\nThe source proposal sends purchased LUNC to a permanent protocol vault. Several community comments argue that repurchased LUNC should be sent to the burn wallet instead.\n\nThe difference matters:\n\n| Option | Product implication |\n| --- | --- |\n| Vault | LUNC remains non-circulating if the vault is truly permanent and controlled, and may be treated as reserve or secondary collateral. |\n| Burn | LUNC is permanently removed from supply and cannot later be moved or used as collateral. |\n\nThe source proposer argues that burning collateral would weaken the collateralized model. Critics argue that vaulting creates trust concerns and is less final than burning.\n\nThis issue is not resolved by documentation. A production implementation must make the final governance-approved choice explicit.\n\n## Demand risk\n\nThe source discussion includes a direct question:\n\n```text\nWhy would anyone use this stablecoin instead of USDT?\n```\n\nThat is one of the strongest product questions.\n\nForex Protocol needs a reason for users, LPs, arbitrageurs, builders, and wallets to care. Possible demand drivers are not enough unless they become real integrations, liquidity, and user flows.\n\nDemand risk includes:\n\n- EUTC may not attract users\n- DEX liquidity may be shallow\n- arbitrage may be insufficient\n- fees may be too high for some use cases\n- established stablecoins may remain easier to use\n- wallets may not support the flow\n- users may not trust a new Terra Classic stable asset\n\n## Liquidity risk\n\nThe source says initial pools may include EUTC/LUNC, EUTC/USTC, and EUTC/USDC.\n\nThe source also says liquidity investment would require a later proposal.\n\nThat means Forex Protocol can pass conceptually but still fail commercially if liquidity is not deep enough.\n\nLiquidity risk affects:\n\n- mint demand\n- redemption confidence\n- DEX price stability\n- arbitrage efficiency\n- slippage\n- user trust\n- protocol fee generation\n\n## Oracle risk\n\nForex Protocol depends on fiat price inputs.\n\nIf oracle prices are stale, manipulated, unavailable, or too slow, the system can mint or redeem at unsafe values.\n\nThe source mentions 30-second live fiat prices, but the implementation must still define:\n\n- data providers\n- validator participation requirements\n- fallback behavior\n- stale-price handling\n- cross-rate calculation\n- manipulation resistance\n- monitoring and alerting\n\n## Collateral accounting risk\n\nThe source says users redeem into the same collateral they deposited.\n\nThat creates an accounting problem that must be solved precisely.\n\nOpen questions include:\n\n- how user collateral type is tracked\n- whether EUTC is fungible across collateral types\n- what happens if one collateral pool is depleted\n- whether redemptions are pro rata or collateral-specific\n- how fees affect collateral ratio\n- how secondary collateral is separated from primary collateral\n- how vault balances are reported\n\nThese cannot be hand-waved in a production system.\n\n## Redemption cap tradeoff\n\nThe 10% daily redemption cap is a safety control, but it also limits user exit capacity.\n\nBenefits:\n\n- reduces run risk\n- reduces instant arbitrage loops\n- reduces vault liquidity shock\n- reduces oracle-timing exploit risk\n\nTradeoffs:\n\n- users may dislike waiting\n- large holders may discount EUTC because redemption is capped\n- stress periods can create queues or secondary-market discounts\n- interfaces must explain cap status clearly\n\nThe cap may be necessary, but it is not free.\n\n## Legal and regulatory risk\n\nThe source describes the system as fully collateralized and regulatory neutral. That wording should be treated carefully.\n\nCollateralized stable assets can still raise legal, licensing, custody, sanctions, disclosure, and jurisdictional questions.\n\nThe docs should not claim legal compliance unless a qualified legal review exists.\n\n## Multisig and governance trust risk\n\nThe source proposes a multisig kill switch and governance-based resume logic.\n\nThat creates operational questions:\n\n- who are the signers\n- how are signers selected\n- how are signer changes approved\n- what actions can the multisig take\n- what actions require governance\n- how are emergency actions disclosed\n- how are conflicts of interest handled\n\nIf these questions are not answered, \"multisig-controlled\" can create as much anxiety as it removes.\n\n## Stablecoin reputation risk\n\nTerra Classic has a unique reputational burden because of the 2022 UST collapse.\n\nAny new stable-asset product will be judged through that history. The docs therefore need sober language:\n\n- collateral-backed, not algorithmic\n- proposed, not live\n- EUTC, not USTC\n- safety controls, not guarantees\n- implementation required, not already solved\n\n## Open questions for implementation\n\nBefore mainnet launch, the implementation plan should answer:\n\n| Question | Why it matters |\n| --- | --- |\n| Is CSM a CosmWasm contract system, core module, or hybrid? | Determines audit surface, upgrade process, and governance control. |\n| How are EURC and USDC bridged or represented on Terra Classic? | Determines collateral quality and operational risk. |\n| How is same-collateral redemption tracked? | Determines solvency and user fairness. |\n| What exact collateral ratio applies? | Source references 100.5% and 101.5% contexts. |\n| Who controls the vault? | Determines trust and emergency risk. |\n| What is the final vault-vs-burn policy? | Determines community acceptance and reserve behavior. |\n| What oracle feeds are used? | Determines pricing integrity. |\n| How are DEX routes selected? | Determines buyback safety and slippage. |\n| What happens if a collateral asset depegs? | Determines crisis behavior. |\n| What public monitoring exists? | Determines whether users can verify the system. |\n\n## Bottom line\n\nForex Protocol is worth documenting because it is one of the clearest attempts to reconnect Terra Classic with stable-asset utility.\n\nIt is also exactly the kind of product that must be documented with restraint. The credibility comes from being precise about what is accepted, what is proposed, what is missing, and what must be proven before launch.\n",
    "previousSlug": "forex-protocol/oracles-and-safety-controls",
    "nextSlug": "forex-protocol/developer-reference"
  },
  {
    "slug": "forex-protocol/developer-reference",
    "path": "/forex-protocol/developer-reference/",
    "sourceFile": "content/docs/forex-protocol/developer-reference.md",
    "group": "Forex Protocol",
    "navTitle": "Forex developer reference",
    "navDepth": 1,
    "navParent": "forex-protocol/technical-reference",
    "navHasChildren": false,
    "navOrder": 63,
    "title": "Forex developer reference",
    "description": "Builder-facing reference for the proposed Forex Protocol and Collateralized Stablecoin Module implementation.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "forex-protocol-section-2026-06-01",
    "sourcePath": "content/docs/forex-protocol/developer-reference.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Implementation status",
        "id": "implementation-status"
      },
      {
        "depth": 2,
        "title": "Source-defined scope",
        "id": "source-defined-scope"
      },
      {
        "depth": 2,
        "title": "Core product entities",
        "id": "core-product-entities"
      },
      {
        "depth": 2,
        "title": "Required flows",
        "id": "required-flows"
      },
      {
        "depth": 3,
        "title": "Mint with EURC",
        "id": "mint-with-eurc"
      },
      {
        "depth": 3,
        "title": "Mint with USDC",
        "id": "mint-with-usdc"
      },
      {
        "depth": 3,
        "title": "Redeem EUTC",
        "id": "redeem-eutc"
      },
      {
        "depth": 3,
        "title": "Buy back LUNC",
        "id": "buy-back-lunc"
      },
      {
        "depth": 2,
        "title": "Required accounting",
        "id": "required-accounting"
      },
      {
        "depth": 2,
        "title": "Required safety controls",
        "id": "required-safety-controls"
      },
      {
        "depth": 2,
        "title": "Related Terra Classic modules",
        "id": "related-terra-classic-modules"
      },
      {
        "depth": 2,
        "title": "Interface states",
        "id": "interface-states"
      },
      {
        "depth": 2,
        "title": "Builder quote expectations",
        "id": "builder-quote-expectations"
      },
      {
        "depth": 2,
        "title": "Test requirements",
        "id": "test-requirements"
      },
      {
        "depth": 2,
        "title": "Public diagnostics",
        "id": "public-diagnostics"
      },
      {
        "depth": 2,
        "title": "Implementation warning",
        "id": "implementation-warning"
      }
    ],
    "body": "This reference is for software teams, protocol engineers, validators, wallet teams, and reviewers assessing Forex Protocol implementation work.\n\nForex Protocol is the product name. Collateralized Stablecoin Module is the proposed technology.\n\n## Implementation status\n\nForex Protocol is not deployed.\n\nThere is no production CSM implementation documented in this repository. Any team quoting or building this work should treat the source proposal as a product and mechanism brief, not as a complete technical specification.\n\n## Source-defined scope\n\nThe source proposal says the CSM construction scope includes:\n\n- multi-asset collateral\n- stablecoin issuance\n- automated swaps\n- LUNC buyback vault logic\n\nThe governance memo also references:\n\n- test integration\n- oracle integration\n- later liquidity investment proposal\n\n## Core product entities\n\n| Entity | Source-defined role |\n| --- | --- |\n| Forex Protocol | User-facing product name. |\n| Collateralized Stablecoin Module | Technical system for collateral-backed stable assets. |\n| EUTC | First proposed Euro-pegged Terra Classic stable asset. |\n| EURC | Proposed direct 1:1 EUTC collateral. |\n| USDC | Proposed EUTC collateral with 0.5% premium. |\n| Forex Secondary Reserve | Fee reserve used as secondary collateral and buyback source. |\n| LUNC Vault | Proposed destination for LUNC bought with secondary collateral. |\n| Fiat price oracle | Price input layer for USD, EUR, and other fiat rates. |\n\n## Required flows\n\nA complete implementation must define at least these flows.\n\n### Mint with EURC\n\n1. User deposits EURC.\n2. System validates the collateral input.\n3. System mints EUTC at 1:1.\n4. System takes a 1.5% EURC fee.\n5. System accounts for the EURC fee as secondary collateral.\n6. System updates outstanding EUTC supply.\n\n### Mint with USDC\n\n1. User deposits USDC.\n2. System applies the 0.5% premium.\n3. System mints EUTC using the source formula:\n\n```text\nEUTC minted = USDC deposited x 0.995\n```\n\n4. System takes a 1.5% USDC fee.\n5. System accounts for the USDC fee as secondary collateral.\n6. System updates outstanding EUTC supply.\n\n### Redeem EUTC\n\n1. User submits EUTC for redemption.\n2. System checks daily redemption capacity.\n3. System burns redeemed EUTC.\n4. System returns the same collateral type the user deposited, according to the final accounting model.\n5. System takes a 1.5% redemption fee in the withdrawn stablecoin.\n6. System accounts for the fee as secondary collateral.\n\n### Buy back LUNC\n\n1. System accumulates secondary collateral.\n2. System selects a DEX route for LUNC buyback.\n3. System applies slippage and safety limits.\n4. System swaps secondary collateral for LUNC.\n5. System sends purchased LUNC to the final destination defined by governance, proposed as a permanent protocol vault in the source.\n6. System reports buyback and vault state.\n\n## Required accounting\n\nThe implementation needs explicit accounting for:\n\n- EUTC total supply\n- EUTC minted per collateral type\n- EURC primary collateral\n- USDC primary collateral\n- mint fees\n- redemption fees\n- secondary reserve balances\n- buyback execution\n- LUNC vault balances\n- daily redemption cap usage\n- collateral ratio\n- mint caps\n- rebalancing state\n\nDo not collapse these into one generic balance. Stable-asset users and reviewers need to verify each layer independently.\n\n## Required safety controls\n\nThe source defines or implies these controls:\n\n| Control | Source-defined behavior |\n| --- | --- |\n| Daily redemption cap | Maximum 10% of total EUTC supply redeemable per day. |\n| Same-stablecoin fees | Mint and redemption fees paid in the same stablecoin used or withdrawn. |\n| Fiat price oracles | Live fiat prices, with 30-second refresh described in source. |\n| Vault accounting | Lock collateral, maintain ratios, track minted outstanding supply. |\n| Mint-cap rebalancing | Adjust mint caps based on collateral depth and volatility. |\n| Portfolio rebalancing | Suggested when USDC and EURC value differential reaches 5%. |\n| Kill switch | Multisig-controlled pause concept with governance-based resume. |\n\nThese controls need exact implementation definitions before deployment.\n\n## Related Terra Classic modules\n\nThe final CSM design may touch or depend on:\n\n| Module or layer | Possible role |\n| --- | --- |\n| `x/oracle` | Fiat and asset pricing if implemented through chain oracle infrastructure. |\n| `x/gov` | Governance approvals, parameter changes, emergency resume logic. |\n| `x/tax` | Tax treatment for native swaps and related transfers if applicable. |\n| `x/wasm` | Possible smart contract implementation surface if CSM is built with CosmWasm. |\n| DEX contracts | EUTC pools, LUNC buybacks, liquidity routing. |\n\nThe source does not finalize whether CSM should be a core module, a smart contract system, or a hybrid. That is an implementation decision that must be justified.\n\n## Interface states\n\nWallets and dashboards should be prepared to show these states if Forex Protocol is implemented:\n\n| State | Meaning |\n| --- | --- |\n| Not launched | No production system exists. |\n| Mint paused | Minting is unavailable. |\n| Mint available | Minting can be attempted. |\n| Redemption available | Redemption can be attempted within daily limits. |\n| Redemption cap reached | Daily redemption capacity is exhausted. |\n| Redemption paused | Emergency controls paused redemptions. |\n| Oracle degraded | Price inputs are unavailable, stale, or unsafe. |\n| Buyback pending | Secondary reserve exists but buyback has not executed. |\n| Buyback failed | DEX route, slippage, or execution failed. |\n| Vault reporting unavailable | LUNC vault state cannot be verified. |\n\n## Builder quote expectations\n\nA credible team proposal should include:\n\n- discovery phase\n- architecture decision: core module, CosmWasm, or hybrid\n- collateral asset representation plan\n- oracle integration plan\n- vault and reserve accounting design\n- mint and redemption flow design\n- redemption cap design\n- DEX routing and buyback design\n- emergency pause design\n- testnet plan\n- simulation plan\n- security review or audit plan\n- documentation plan\n- deployment support plan\n- monitoring and incident response plan\n\n## Test requirements\n\nMinimum test areas should include:\n\n- EURC minting\n- USDC minting with 0.5% premium\n- mint fee accounting\n- redemption fee accounting\n- same-collateral redemption behavior\n- daily redemption cap\n- EUTC burn on redemption\n- secondary reserve accumulation\n- buyback route execution\n- buyback route failure\n- slippage limits\n- vault balance immutability or permission constraints\n- fiat oracle stale data\n- fiat oracle rapid movement\n- collateral ratio boundary conditions\n- emergency pause and resume\n- governance or multisig permission checks\n\n## Public diagnostics\n\nForex Protocol should ship with public diagnostics, not just contracts.\n\nUseful diagnostics include:\n\n- total EUTC supply\n- EUTC minted by collateral type\n- primary collateral balances\n- collateral ratio\n- daily redemption cap remaining\n- fees collected\n- secondary reserve balances\n- buybacks executed\n- LUNC vault balance\n- oracle status\n- paused state\n- latest parameter changes\n- latest governance-controlled action\n\nThis matters because the project owner and many users are not developers. The system should make verification simple.\n\n## Implementation warning\n\nDo not implement Forex Protocol as a black-box stablecoin contract.\n\nThe product will only be credible if users, validators, builders, and governance participants can understand and verify:\n\n- what backs EUTC\n- where collateral is held\n- who can move or pause what\n- how fees are handled\n- how LUNC buybacks work\n- what happens in stress\n- whether the system is live, paused, or not launched\n\nThat verification layer is part of the product.\n",
    "previousSlug": "forex-protocol/risks-and-open-questions",
    "nextSlug": "governance/overview"
  },
  {
    "slug": "governance/overview",
    "path": "/governance/overview/",
    "sourceFile": "content/docs/governance/overview.md",
    "group": "Governance",
    "navTitle": "Governance",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 64,
    "title": "Governance",
    "description": "A user-first guide to Terra Classic governance: what it controls, why it matters, and how LUNC holders can participate responsibly.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/overview.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Who this section is for",
        "id": "who-this-section-is-for"
      },
      {
        "depth": 2,
        "title": "What governance can affect",
        "id": "what-governance-can-affect"
      },
      {
        "depth": 2,
        "title": "The core idea",
        "id": "the-core-idea"
      },
      {
        "depth": 2,
        "title": "Why governance quality matters",
        "id": "why-governance-quality-matters"
      },
      {
        "depth": 2,
        "title": "How this section is organized",
        "id": "how-this-section-is-organized"
      },
      {
        "depth": 2,
        "title": "Not financial advice",
        "id": "not-financial-advice"
      }
    ],
    "body": "Governance is the decision layer of Terra Classic.\n\nIt is how staked LUNC is used to approve, reject, fund, signal, or execute changes that affect the chain. Governance can influence protocol parameters, software upgrades, tax and fee rules, community pool spending, product directions, and public coordination.\n\nGovernance is not a company board, a customer support desk, or a guarantee that every passed idea will be delivered well. It is a token-weighted control process. That makes participation powerful, but it also makes voter quality, validator accountability, and proposal discipline extremely important.\n\n## Who this section is for\n\nUse this section if you are:\n\n- a LUNC holder trying to understand what governance can change\n- a delegator who wants to know how validator votes affect your stake\n- a community member deciding how to vote on proposals\n- an investor evaluating whether Terra Classic governance is serious\n- a user trying to avoid unsafe, vague, or overpromised proposals\n\nDevelopers should also read the [governance module specification](/develop/module-specifications/spec-governance/) when they need protocol-level details.\n\n## What governance can affect\n\nGovernance can affect several parts of Terra Classic:\n\n| Area | Examples |\n| --- | --- |\n| Protocol upgrades | Software upgrade proposals, module changes, chain halt coordination. |\n| Parameters | Deposit, voting, tax, fee, staking, slashing, and module settings where governance-controlled. |\n| Community funding | Community pool spend proposals and public-good funding. |\n| Product direction | Signaling proposals for L1 products such as Swap Protocol or Forex Protocol. |\n| Public coordination | Roadmaps, policies, working groups, and other off-chain commitments. |\n\nNot every proposal executes automatically. Some proposals change chain state directly. Others are text or signaling proposals that require humans, teams, or validators to follow through after the vote.\n\n## The core idea\n\nTerra Classic governance has three connected layers:\n\n1. Staked LUNC creates voting power.\n2. Validators vote by default with delegated voting power.\n3. Delegators can override their validator's vote by voting directly before the deadline.\n\nThis means staking and governance are connected, but they are not the same thing. Staking explains how voting power is created. Governance explains how that power is used.\n\n## Why governance quality matters\n\nWeak governance can damage a chain even when the chain keeps producing blocks.\n\nPoor governance can lead to:\n\n- low-turnout decisions\n- validator non-participation\n- vague funding requests\n- untested protocol changes\n- rushed software upgrades\n- repeated proposal churn\n- weak accountability after a proposal passes\n\nStrong governance does the opposite. It makes decisions easier to inspect, improves user trust, gives serious builders clearer requirements, and makes it harder for weak proposals to pass on hype alone.\n\n## How this section is organized\n\n- [Voting power and delegation](/governance/voting-power-and-delegation/) explains how staked LUNC becomes governance power.\n- [Proposal lifecycle](/governance/proposal-lifecycle/) explains deposit, voting, quorum, thresholds, veto, and execution.\n- [Vote options](/governance/vote-options/) explains `Yes`, `No`, `NoWithVeto`, and `Abstain`.\n- [How to vote](/governance/how-to-vote/) gives a practical user workflow.\n- [How to evaluate proposals](/governance/how-to-evaluate-proposals/) gives a decision framework for non-technical voters.\n- [Validator accountability](/governance/validator-accountability/) explains what delegators should expect from validators.\n- [Risks and safeguards](/governance/risks-and-safeguards/) explains common governance failure modes and how users can reduce risk.\n\n## Not financial advice\n\nGovernance can affect protocol behavior and market expectations, but these docs do not tell you whether to buy, sell, hold, stake, vote, or fund any asset, validator, proposal, or project.\n",
    "previousSlug": "forex-protocol/developer-reference",
    "nextSlug": "governance/voting-power-and-delegation"
  },
  {
    "slug": "governance/voting-power-and-delegation",
    "path": "/governance/voting-power-and-delegation/",
    "sourceFile": "content/docs/governance/voting-power-and-delegation.md",
    "group": "Governance",
    "navTitle": "Voting power and delegation",
    "navDepth": 1,
    "navParent": "governance/understand-governance",
    "navHasChildren": false,
    "navOrder": 66,
    "title": "Voting power and delegation",
    "description": "How staked LUNC becomes governance power, how validator votes work, and how delegators can override validator votes.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/voting-power-and-delegation.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Default validator voting",
        "id": "default-validator-voting"
      },
      {
        "depth": 2,
        "title": "Delegator override",
        "id": "delegator-override"
      },
      {
        "depth": 2,
        "title": "Why delegator voting matters",
        "id": "why-delegator-voting-matters"
      },
      {
        "depth": 2,
        "title": "Delegation is still accountability",
        "id": "delegation-is-still-accountability"
      },
      {
        "depth": 2,
        "title": "How this relates to Staking Protocol",
        "id": "how-this-relates-to-staking-protocol"
      }
    ],
    "body": "Governance power comes from staked LUNC.\n\nWhen you delegate LUNC, you are not only staking for protocol rewards. You are also assigning default governance power to your validator.\n\n## Default validator voting\n\nValidators vote with the voting power delegated to them.\n\nIf a delegator does nothing, the validator's vote is applied to that delegator's stake. This is convenient, but it creates risk when validators are passive, misaligned, unaccountable, or silent on important decisions.\n\nDelegators can override the validator's vote by voting directly before the proposal deadline.\n\n## Delegator override\n\nIf you vote directly, your vote overrides your validator's vote for your delegated stake on that proposal.\n\nThis matters because you can keep your stake delegated while still making your own decision on proposals that affect:\n\n- software upgrades\n- community pool spending\n- tax and fee rules\n- staking and slashing parameters\n- oracle behavior\n- product proposals\n- governance process changes\n\nDelegator override makes validator choice less absolute, but it does not remove the need to choose serious validators. Validators still influence consensus, day-to-day governance defaults, upgrade readiness, public credibility, and operational safety.\n\n## Why delegator voting matters\n\nTerra Classic has a long-running governance-quality problem: many users do not vote directly, and many validators have historically skipped proposals.\n\nThis creates three issues:\n\n- decisions are made by a smaller group than the full stakeholder base\n- silent validators can carry delegated voting power without accountability\n- governance legitimacy weakens when turnout is low\n\nDirect voting is one of the simplest ways delegators can improve governance quality. Even if you do not vote on every proposal, you should vote directly on proposals that materially affect your risk, your stake, or the chain's direction.\n\n## Delegation is still accountability\n\nVoting directly is not the only governance action.\n\nDelegators can also:\n\n- move stake away from validators that rarely vote\n- avoid validators that do not explain important votes\n- split stake across credible validators to reduce concentration\n- support validators with strong uptime, communication, and public contribution\n- review voting records before delegating more LUNC\n\nDelegation is not only an APR decision. It is also a governance decision.\n\n## How this relates to Staking Protocol\n\nThe [Staking Protocol](/staking-protocol/overview/) section explains delegation, rewards, validator selection, unstaking, and staking risks.\n\nThis Governance section explains what happens after staked LUNC becomes voting power.\n\nIf you are choosing where to stake, read:\n\n- [Choose a validator](/staking-protocol/choose-a-validator/)\n- [Validator accountability](/governance/validator-accountability/)\n- [Risks and safeguards](/governance/risks-and-safeguards/)\n",
    "previousSlug": "governance/overview",
    "nextSlug": "governance/proposal-lifecycle"
  },
  {
    "slug": "governance/proposal-lifecycle",
    "path": "/governance/proposal-lifecycle/",
    "sourceFile": "content/docs/governance/proposal-lifecycle.md",
    "group": "Governance",
    "navTitle": "Proposal lifecycle",
    "navDepth": 1,
    "navParent": "governance/understand-governance",
    "navHasChildren": false,
    "navOrder": 67,
    "title": "Proposal lifecycle",
    "description": "How Terra Classic proposals move through deposit, voting, tallying, and execution, and which governance parameters users should understand.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/proposal-lifecycle.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Deposit period",
        "id": "deposit-period"
      },
      {
        "depth": 2,
        "title": "Voting period",
        "id": "voting-period"
      },
      {
        "depth": 2,
        "title": "Quorum, threshold, and veto",
        "id": "quorum-threshold-and-veto"
      },
      {
        "depth": 2,
        "title": "Current parameter check",
        "id": "current-parameter-check"
      },
      {
        "depth": 2,
        "title": "Passed does not always mean delivered",
        "id": "passed-does-not-always-mean-delivered"
      },
      {
        "depth": 2,
        "title": "Execution gap",
        "id": "execution-gap"
      }
    ],
    "body": "A proposal is not just a forum post. It is an on-chain governance item with a lifecycle.\n\nMost Terra Classic governance items move through deposit, voting, tallying, and then either execution or follow-up.\n\n## Deposit period\n\nA proposal must reach the required deposit before it enters voting.\n\nThe deposit exists to reduce spam and require some commitment from the proposer or supporters. Other users can usually contribute to the deposit while the proposal is in deposit period.\n\nIf the proposal does not reach the minimum deposit before the maximum deposit period ends, it does not enter voting.\n\n## Voting period\n\nAfter the required deposit is reached, the proposal enters voting period.\n\nDuring voting period, staked LUNC can be used to vote. Validators vote by default with delegated voting power, unless delegators vote directly and override the validator vote for their own stake.\n\nThe proposal result depends on quorum, threshold, veto threshold, and the final tally.\n\n## Quorum, threshold, and veto\n\nThree terms matter most:\n\n| Term | Meaning |\n| --- | --- |\n| Quorum | The minimum share of voting power that must participate for the vote to be valid. |\n| Threshold | The support level needed for a proposal to pass if quorum is reached and veto does not block it. |\n| Veto threshold | The `NoWithVeto` level that can reject a proposal and burn deposits where chain rules apply. |\n\n`Yes`, `No`, `NoWithVeto`, and `Abstain` all count toward quorum. `Abstain` counts as participation, but it is not support for `Yes` or `No`.\n\n## Current parameter check\n\nGovernance parameters can change. Query current values before writing guides, calculators, dashboards, or governance tooling.\n\nTerra Classic governance params are queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/voting\nhttps://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/deposit\nhttps://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/tallying\n```\n\nAs checked on 2026-06-01, the LCD endpoint returned:\n\n| Parameter | Value |\n| --- | --- |\n| `min_deposit` | `5000000000000uluna` |\n| `max_deposit_period` | `1209600s` |\n| `voting_period` | `604800s` |\n| `quorum` | `0.400000000000000000` |\n| `threshold` | `0.500000000000000000` |\n| `veto_threshold` | `0.334000000000000000` |\n| `expedited_voting_period` | `86400s` |\n| `expedited_threshold` | `0.667000000000000000` |\n| `burn_vote_veto` | `true` |\n\nThe same endpoint also returned an `expedited_min_deposit` denom of `stake`. Treat endpoint output as chain state to inspect, not as a user-facing assumption. Interfaces should display the exact current values they query.\n\n## Passed does not always mean delivered\n\nSome proposals execute on-chain when they pass.\n\nOther proposals are text, signaling, funding, coordination, or roadmap proposals. These can pass without automatically delivering the work described in the proposal.\n\nFor that reason, users should separate:\n\n- vote result\n- on-chain execution\n- off-chain follow-through\n- public proof that delivery happened\n\nA serious governance culture tracks all four.\n\n## Execution gap\n\nThe execution gap is the distance between \"the proposal passed\" and \"the promised result exists.\"\n\nThis gap is especially important for:\n\n- software upgrade proposals\n- community pool spending\n- product implementation proposals\n- stablecoin or market module proposals\n- infrastructure and documentation proposals\n- proposals that rely on a named team or multisig\n\nIf a proposal depends on human execution, voters should ask who owns delivery, what proof will be published, and what happens if delivery fails.\n",
    "previousSlug": "governance/voting-power-and-delegation",
    "nextSlug": "governance/vote-options"
  },
  {
    "slug": "governance/vote-options",
    "path": "/governance/vote-options/",
    "sourceFile": "content/docs/governance/vote-options.md",
    "group": "Governance",
    "navTitle": "Vote options",
    "navDepth": 1,
    "navParent": "governance/understand-governance",
    "navHasChildren": false,
    "navOrder": 68,
    "title": "Vote options",
    "description": "What Yes, No, NoWithVeto, and Abstain mean in Terra Classic governance, and how users should think about each option.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/vote-options.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Vote meanings",
        "id": "vote-meanings"
      },
      {
        "depth": 2,
        "title": "Yes",
        "id": "yes"
      },
      {
        "depth": 2,
        "title": "No",
        "id": "no"
      },
      {
        "depth": 2,
        "title": "NoWithVeto",
        "id": "nowithveto"
      },
      {
        "depth": 2,
        "title": "Abstain",
        "id": "abstain"
      },
      {
        "depth": 2,
        "title": "Did not vote",
        "id": "did-not-vote"
      },
      {
        "depth": 2,
        "title": "Practical rule",
        "id": "practical-rule"
      }
    ],
    "body": "Terra Classic governance supports four standard vote options.\n\nThe vote you choose should match your actual decision, not just your emotion toward the proposer.\n\n## Vote meanings\n\n| Vote | Meaning |\n| --- | --- |\n| `Yes` | You support the proposal passing. |\n| `No` | You reject the proposal without using veto-specific rejection. |\n| `NoWithVeto` | You strongly reject the proposal and want veto rules to apply if the threshold is reached. |\n| `Abstain` | You participate in quorum without supporting or opposing the proposal. |\n\n## Yes\n\nUse `Yes` when the proposal is clear enough, useful enough, and safe enough to pass.\n\nA good `Yes` vote should usually mean:\n\n- the problem is real\n- the proposed action is specific\n- the requested budget is justified, if any\n- the execution path is credible\n- risks are disclosed\n- follow-up can be verified\n\nDo not vote `Yes` only because the idea sounds positive. Governance should approve executable plans, not just good intentions.\n\n## No\n\nUse `No` when you reject the proposal but do not think veto handling is appropriate.\n\nCommon reasons to vote `No` include:\n\n- weak scope\n- poor timing\n- missing budget detail\n- unclear ownership\n- insufficient evidence\n- better alternatives available\n- proposal is directionally useful but not ready\n\n`No` is a normal governance answer. It should not be treated as hostility.\n\n## NoWithVeto\n\nUse `NoWithVeto` carefully.\n\nIt is a governance safety tool, not a general dislike button.\n\n`NoWithVeto` may be appropriate when a proposal is:\n\n- spam\n- malicious\n- deceptive\n- abusive toward minority interests\n- unsafe for users\n- attempting to misuse the community pool\n- pushing high-risk protocol changes without serious review\n- materially misrepresenting its status, scope, or authority\n\nIf the veto threshold is reached and chain rules apply, deposits can be burned. That makes `NoWithVeto` a stronger signal than `No`.\n\n## Abstain\n\nUse `Abstain` when you want your voting power to count toward quorum but you do not want to support or reject the proposal.\n\n`Abstain` can be reasonable when:\n\n- you have a conflict of interest\n- the proposal is outside your competence\n- the information is incomplete but you do not want to block quorum\n- you want to signal process participation without a directional vote\n\nDo not use `Abstain` as a permanent substitute for doing the work. A governance participant that always abstains is not giving delegators much representation.\n\n## Did not vote\n\nNot voting is different from `Abstain`.\n\nIf you do not vote directly, your validator's vote applies to your delegated stake by default. If your validator also does not vote, your stake does not participate in that proposal.\n\nRepeated non-voting by validators or delegators weakens governance because decisions are made by a thinner active set.\n\n## Practical rule\n\nUse this simple decision rule:\n\n| If you believe... | Vote |\n| --- | --- |\n| The proposal is useful, scoped, and credible. | `Yes` |\n| The proposal should not pass, but is not abusive or dangerous. | `No` |\n| The proposal is spam, malicious, deceptive, or materially unsafe. | `NoWithVeto` |\n| You need to participate but cannot take a side responsibly. | `Abstain` |\n",
    "previousSlug": "governance/proposal-lifecycle",
    "nextSlug": "governance/how-to-vote"
  },
  {
    "slug": "governance/how-to-vote",
    "path": "/governance/how-to-vote/",
    "sourceFile": "content/docs/governance/how-to-vote.md",
    "group": "Governance",
    "navTitle": "How to vote",
    "navDepth": 1,
    "navParent": "governance/use-governance",
    "navHasChildren": false,
    "navOrder": 70,
    "title": "How to vote",
    "description": "A practical voting workflow for Terra Classic users who want to review proposals, cast votes, and verify the result.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/how-to-vote.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Before you vote",
        "id": "before-you-vote"
      },
      {
        "depth": 2,
        "title": "Voting workflow",
        "id": "voting-workflow"
      },
      {
        "depth": 2,
        "title": "Wallet guides",
        "id": "wallet-guides"
      },
      {
        "depth": 2,
        "title": "Vote before the deadline",
        "id": "vote-before-the-deadline"
      },
      {
        "depth": 2,
        "title": "Check your validator's vote",
        "id": "check-your-validators-vote"
      },
      {
        "depth": 2,
        "title": "Verify after voting",
        "id": "verify-after-voting"
      },
      {
        "depth": 2,
        "title": "Safety reminders",
        "id": "safety-reminders"
      }
    ],
    "body": "Voting is a wallet transaction.\n\nYou need a wallet that supports Terra Classic governance, available LUNC for transaction fees, and staked LUNC for voting power.\n\n## Before you vote\n\nBefore voting, check:\n\n- proposal title\n- full proposal text\n- proposal type\n- voting deadline\n- current tally\n- discussion links\n- requested budget, if any\n- proposer identity or responsible team\n- whether the proposal executes on-chain or needs off-chain follow-up\n- whether your validator has already voted\n\nDo not vote from screenshots alone. Open the proposal and read the source material.\n\n## Voting workflow\n\nMost wallet governance flows follow this pattern:\n\n1. Open the governance view in a supported wallet or dashboard.\n2. Select Terra Classic.\n3. Open the proposal.\n4. Read the full proposal text and discussion links.\n5. Check whether the proposal is executable, text-only, parameter-changing, upgrade-related, or funding-related.\n6. Choose `Yes`, `No`, `NoWithVeto`, or `Abstain`.\n7. Confirm the transaction and fee.\n8. Verify your vote on an explorer or governance dashboard.\n\n## Wallet guides\n\nUse wallet-specific pages for interface details:\n\n- [Galaxy Station governance](/learn/galaxy-station/galaxy-station-governance/)\n- [Keplr governance](/learn/keplr/keplr-governance/)\n\nWallet interfaces can change. If a screenshot or menu label is outdated, rely on the concept: open Governance, select the proposal, choose a vote option, confirm the transaction, then verify the vote.\n\n## Vote before the deadline\n\nYou can only vote while the proposal is in voting period.\n\nIf you wait until the final moments, you risk missing the deadline because of wallet issues, network delay, user error, or insufficient transaction fees.\n\n## Check your validator's vote\n\nIf you delegate LUNC, your validator may already have voted.\n\nYou can still vote directly before the deadline. Your direct vote overrides the validator's vote for your delegated stake on that proposal.\n\nIf your validator repeatedly votes against your preferences or does not vote, consider whether that validator still deserves your delegation.\n\n## Verify after voting\n\nAfter confirming the transaction, verify that the vote appears correctly.\n\nCheck:\n\n- proposal ID\n- wallet address\n- selected vote option\n- transaction success\n- vote timestamp or block height\n\nIf the transaction failed, your vote was not counted.\n\n## Safety reminders\n\nNever enter your seed phrase into a governance website.\n\nBe careful with links shared in social media, Telegram, Discord, or comments. Use known wallet apps and official project links where possible.\n\nGovernance pages should not ask you for private keys. A legitimate vote requires a signed wallet transaction, not seed phrase disclosure.\n",
    "previousSlug": "governance/vote-options",
    "nextSlug": "governance/how-to-evaluate-proposals"
  },
  {
    "slug": "governance/how-to-evaluate-proposals",
    "path": "/governance/how-to-evaluate-proposals/",
    "sourceFile": "content/docs/governance/how-to-evaluate-proposals.md",
    "group": "Governance",
    "navTitle": "How to evaluate proposals",
    "navDepth": 1,
    "navParent": "governance/use-governance",
    "navHasChildren": false,
    "navOrder": 71,
    "title": "How to evaluate proposals",
    "description": "A practical proposal-review framework for Terra Classic users, delegators, and investors.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/how-to-evaluate-proposals.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "First question",
        "id": "first-question"
      },
      {
        "depth": 2,
        "title": "Proposal quality checklist",
        "id": "proposal-quality-checklist"
      },
      {
        "depth": 2,
        "title": "Identify proposal type",
        "id": "identify-proposal-type"
      },
      {
        "depth": 2,
        "title": "Check the execution path",
        "id": "check-the-execution-path"
      },
      {
        "depth": 2,
        "title": "Check source quality",
        "id": "check-source-quality"
      },
      {
        "depth": 2,
        "title": "Red flags",
        "id": "red-flags"
      },
      {
        "depth": 2,
        "title": "Product proposals need extra discipline",
        "id": "product-proposals-need-extra-discipline"
      },
      {
        "depth": 2,
        "title": "Investor-grade standard",
        "id": "investor-grade-standard"
      }
    ],
    "body": "A proposal should earn trust before it earns votes.\n\nThe goal is not to make every voter a developer, lawyer, or economist. The goal is to give users a simple framework for spotting serious proposals and rejecting weak ones.\n\n## First question\n\nAsk one question before anything else:\n\n> If this proposal passes, what exactly changes?\n\nIf the answer is unclear, the proposal is not ready.\n\n## Proposal quality checklist\n\nA serious proposal should make the following clear:\n\n| Question | Why it matters |\n| --- | --- |\n| What problem does it solve? | Governance should not approve vague activity. |\n| What exact action happens? | Voters need to know whether this is code, funding, signaling, or coordination. |\n| Who is responsible? | \"The community\" is not an execution owner. |\n| What budget is requested? | Funding requires scope, amount, custody, and deliverables. |\n| What evidence supports the claim? | Good proposals show sources, data, code, or comparable examples. |\n| What are the risks? | Serious teams disclose tradeoffs before opponents do it for them. |\n| What is the timeline? | Open-ended promises are hard to evaluate. |\n| How is success measured? | Voters need proof after the vote. |\n| What happens if execution fails? | Governance needs an accountability path. |\n\nWeak proposals ask governance for trust without giving governance enough information to make a decision.\n\n## Identify proposal type\n\nNot all proposals carry the same risk.\n\n| Proposal type | Main review focus |\n| --- | --- |\n| Text or signaling | Is the direction clear, useful, and honestly framed? |\n| Community pool spend | Is the budget justified and milestone-based? |\n| Software upgrade | Are code, testing, release notes, and upgrade coordination credible? |\n| Parameter change | What second-order effects does the change create? |\n| Product proposal | Is it live, proposed, funded, audited, or only accepted as a direction? |\n| Stablecoin or market mechanism | Are collateral, oracle, liquidity, legal, and user-safety risks addressed? |\n\n## Check the execution path\n\nA proposal can pass and still fail operationally.\n\nBefore voting `Yes`, check whether the execution path includes:\n\n- named owner\n- delivery milestones\n- public repository or artifact\n- acceptance criteria\n- update cadence\n- testing or review plan\n- budget release logic\n- final delivery proof\n\nIf a proposal asks for money but does not define acceptance criteria, voters should be skeptical.\n\n## Check source quality\n\nPrefer proposals that link to:\n\n- code repositories\n- design documents\n- technical specifications\n- governance discussions\n- dashboards or queryable data\n- audit reports or review notes\n- previous delivery history\n- clear wallet or multisig addresses where relevant\n\nScreenshots and social posts can support a proposal, but they should not be the only evidence for a major decision.\n\n## Red flags\n\nBe careful with proposals that:\n\n- promise price outcomes\n- use urgency to avoid review\n- hide who controls funds\n- confuse passed governance with completed implementation\n- claim official status without proof\n- omit risks\n- request funding without milestones\n- rely on vague \"community will decide later\" language\n- attack critics instead of answering technical or economic questions\n- turn a high-risk product into a branding exercise\n\n## Product proposals need extra discipline\n\nTerra Classic has several L1 product directions, including [Swap Protocol](/swap-protocol/overview/) and [Forex Protocol](/forex-protocol/overview/).\n\nFor product proposals, voters should separate:\n\n- governance acceptance\n- implementation funding\n- code completion\n- testing\n- audits\n- liquidity\n- wallet support\n- mainnet availability\n\nThose are different stages. A proposal passing does not automatically make a product live.\n\n## Investor-grade standard\n\nFor major proposals, use this standard:\n\n> Claim, artifact, verifier, timestamp.\n\nA proposal should say what is being claimed, show the artifact that proves it, make it possible for others to verify, and include a timestamp or checked date.\n\nIf a proposal cannot be verified, treat it as commentary until evidence exists.\n",
    "previousSlug": "governance/how-to-vote",
    "nextSlug": "governance/validator-accountability"
  },
  {
    "slug": "governance/validator-accountability",
    "path": "/governance/validator-accountability/",
    "sourceFile": "content/docs/governance/validator-accountability.md",
    "group": "Governance",
    "navTitle": "Validator accountability",
    "navDepth": 1,
    "navParent": "governance/accountability-and-risk",
    "navHasChildren": false,
    "navOrder": 73,
    "title": "Validator accountability",
    "description": "How Terra Classic delegators can judge validator governance behavior, communication, conflicts, and accountability.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/validator-accountability.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Minimum governance expectations",
        "id": "minimum-governance-expectations"
      },
      {
        "depth": 2,
        "title": "Non-voting is still a signal",
        "id": "non-voting-is-still-a-signal"
      },
      {
        "depth": 2,
        "title": "Vote explanations",
        "id": "vote-explanations"
      },
      {
        "depth": 2,
        "title": "Conflicts of interest",
        "id": "conflicts-of-interest"
      },
      {
        "depth": 2,
        "title": "Communication standards",
        "id": "communication-standards"
      },
      {
        "depth": 2,
        "title": "Accountability tools for delegators",
        "id": "accountability-tools-for-delegators"
      },
      {
        "depth": 2,
        "title": "Validator accountability scorecard",
        "id": "validator-accountability-scorecard"
      },
      {
        "depth": 2,
        "title": "Link back to staking",
        "id": "link-back-to-staking"
      }
    ],
    "body": "Validators are not only block-signing operators.\n\nThey are also default governance representatives for delegators who do not vote directly. That makes validator accountability a governance issue, not only a staking issue.\n\n## Minimum governance expectations\n\nA responsible validator should:\n\n- vote on governance proposals consistently\n- explain important votes\n- prepare for software upgrades\n- communicate incidents\n- disclose material conflicts\n- keep commission behavior transparent\n- maintain useful public contact information\n- avoid misleading delegators\n- support chain safety over short-term attention\n\nThis is the baseline. It is not an exceptional contribution.\n\n## Non-voting is still a signal\n\nIf a validator repeatedly does not vote, that is not neutral.\n\nIt means the validator is carrying delegated voting power without using it. This weakens representation and pushes decisions toward a smaller active set.\n\nDelegators should treat repeated non-voting as a serious accountability problem.\n\n## Vote explanations\n\nValidators should explain important votes, especially when proposals affect:\n\n- L1 upgrades\n- tax and fee parameters\n- community pool spending\n- validator economics\n- oracle behavior\n- market or swap modules\n- stablecoin-related proposals\n- security-critical changes\n- ecosystem funding\n\nA short explanation is often enough. The point is to make the decision inspectable.\n\n## Conflicts of interest\n\nConflicts are not automatically disqualifying. Hidden conflicts are the problem.\n\nA validator should disclose material conflicts where relevant, such as:\n\n- operating services that benefit from a proposal\n- running applications affected by a proposal\n- receiving funding from a project involved in a vote\n- maintaining infrastructure that governance may fund\n- promoting another chain or product that competes with Terra Classic priorities\n\nDelegators do not need perfect purity. They need clarity.\n\n## Communication standards\n\nA validator should make it easy to find:\n\n- official website or profile\n- contact channel\n- governance vote rationale\n- incident updates\n- upgrade readiness notices\n- commission information\n- public contributions\n\nSilence is costly. Delegators cannot evaluate risk if validators do not communicate.\n\n## Accountability tools for delegators\n\nDelegators can respond to weak validator behavior by:\n\n- voting directly\n- asking validators to explain votes\n- tracking voting records\n- redelegating away from passive validators\n- splitting stake across multiple credible validators\n- avoiding validators that increase concentration risk\n- supporting validators that publish useful public information\n\nRedelegation is not drama. It is how delegated proof-of-stake creates accountability.\n\n## Validator accountability scorecard\n\n| Criterion | Strong signal | Weak signal |\n| --- | --- | --- |\n| Voting | Regular participation. | Frequent non-voting. |\n| Rationale | Explains major votes. | Silent on important proposals. |\n| Conflicts | Discloses relevant conflicts. | Hidden or ignored conflicts. |\n| Communication | Clear public channels. | No useful contact or updates. |\n| Delivery | Shows concrete contribution. | Slogans without proof. |\n| Safety | Supports review and evidence. | Pushes rushed high-risk changes. |\n| Delegator respect | Makes risk understandable. | Treats delegation as passive income. |\n\n## Link back to staking\n\nValidator selection is still covered in [Choose a validator](/staking-protocol/choose-a-validator/).\n\nThis page focuses on the governance behavior delegators should expect after choosing a validator.\n",
    "previousSlug": "governance/how-to-evaluate-proposals",
    "nextSlug": "governance/risks-and-safeguards"
  },
  {
    "slug": "governance/risks-and-safeguards",
    "path": "/governance/risks-and-safeguards/",
    "sourceFile": "content/docs/governance/risks-and-safeguards.md",
    "group": "Governance",
    "navTitle": "Risks and safeguards",
    "navDepth": 1,
    "navParent": "governance/accountability-and-risk",
    "navHasChildren": false,
    "navOrder": 74,
    "title": "Risks and safeguards",
    "description": "The main governance risks on Terra Classic and practical safeguards for voters, delegators, and community members.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Governance section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "governance-section-2026-06-01",
    "sourcePath": "content/docs/governance/risks-and-safeguards.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Low turnout risk",
        "id": "low-turnout-risk"
      },
      {
        "depth": 2,
        "title": "Validator concentration risk",
        "id": "validator-concentration-risk"
      },
      {
        "depth": 2,
        "title": "Text proposal theater",
        "id": "text-proposal-theater"
      },
      {
        "depth": 2,
        "title": "Community pool misuse risk",
        "id": "community-pool-misuse-risk"
      },
      {
        "depth": 2,
        "title": "Rushed upgrade risk",
        "id": "rushed-upgrade-risk"
      },
      {
        "depth": 2,
        "title": "Parameter risk",
        "id": "parameter-risk"
      },
      {
        "depth": 2,
        "title": "Stablecoin and market mechanism risk",
        "id": "stablecoin-and-market-mechanism-risk"
      },
      {
        "depth": 2,
        "title": "Information integrity risk",
        "id": "information-integrity-risk"
      },
      {
        "depth": 2,
        "title": "The practical standard",
        "id": "the-practical-standard"
      }
    ],
    "body": "Governance is powerful because it can change the chain.\n\nThat same power creates risk. A good governance system needs user participation, validator accountability, serious proposal standards, and public proof after decisions pass.\n\n## Low turnout risk\n\nLow turnout means fewer active participants shape the result.\n\nThis can make governance legally valid but socially weak. It also makes it easier for a small active group to define direction while most delegators remain passive.\n\nSafeguards:\n\n- vote directly on important proposals\n- delegate to validators that vote consistently\n- review turnout before treating a result as broad consensus\n- encourage proposal summaries that normal users can understand\n\n## Validator concentration risk\n\nIf too much voting power sits with a small number of validators, governance becomes easier to coordinate, capture, or block.\n\nSafeguards:\n\n- avoid blindly delegating to the largest validators\n- split large delegations across credible validators\n- review validator voting behavior before delegating\n- support reliable mid-size validators where appropriate\n\n## Text proposal theater\n\nText and signaling proposals can be useful, but they can also create the illusion of progress.\n\nA text proposal can pass without code, funding, ownership, testing, or delivery. That does not make it worthless, but it does mean voters must be clear about what passed.\n\nSafeguards:\n\n- separate direction from implementation\n- ask for owners, milestones, and proof artifacts\n- track follow-up after the vote\n- avoid treating passed text as completed work\n\n## Community pool misuse risk\n\nCommunity pool spending can fund public goods. It can also become a credibility sink if proposals lack scope, milestones, custody clarity, or acceptance criteria.\n\nSafeguards:\n\n- require budgets to match deliverables\n- prefer milestone-based funding\n- verify receiving addresses and multisigs\n- require public updates\n- ask what happens if delivery fails\n\n## Rushed upgrade risk\n\nSoftware upgrades can improve the chain, but rushed upgrades can create halt, version mismatch, validator coordination, and exchange maintenance risk.\n\nSafeguards:\n\n- look for release notes\n- look for testnet or dry-run evidence\n- check whether validators and exchanges have upgrade instructions\n- ask whether rollback or incident plans exist\n- avoid approving high-impact upgrades only because they sound urgent\n\n## Parameter risk\n\nGovernance can change parameters that affect fees, taxes, staking, slashing, deposits, voting periods, and modules.\n\nSmall parameter changes can have large second-order effects.\n\nSafeguards:\n\n- ask for before-and-after values\n- ask who is affected\n- ask whether the change is reversible\n- ask what data supports the change\n- avoid parameter changes without scenario analysis\n\n## Stablecoin and market mechanism risk\n\nStablecoin, oracle, swap, market module, and collateral proposals carry higher risk than ordinary text proposals.\n\nThey can affect user funds, liquidity, exchange perception, regulatory posture, and chain credibility.\n\nSafeguards:\n\n- require clear status labels: proposed, accepted, funded, built, audited, live\n- separate governance acceptance from production launch\n- require oracle and liquidity assumptions to be explicit\n- ask for security review before mainnet risk\n- avoid claims that imply guaranteed peg, profit, or price outcome\n\n## Information integrity risk\n\nUsers often encounter Terra Classic information through social media, chat groups, dashboards, wallets, validators, and third-party sites.\n\nConflicting or unofficial information can confuse users and create phishing or misdirection risk.\n\nSafeguards:\n\n- verify links before connecting wallets\n- prefer source-linked docs and governance pages\n- treat screenshots as secondary evidence\n- check proposal IDs directly\n- never enter seed phrases into governance sites\n\n## The practical standard\n\nFor important governance decisions, use this rule:\n\n> No narratives without evidence. No funding without proof loops. No authority without a clear mandate.\n\nThat standard protects users and makes Terra Classic easier to trust.\n",
    "previousSlug": "governance/validator-accountability",
    "nextSlug": "institutions/overview"
  },
  {
    "slug": "institutions/overview",
    "path": "/institutions/overview/",
    "sourceFile": "content/docs/institutions/overview.md",
    "group": "For Institutions",
    "navTitle": "For Institutions",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 75,
    "title": "For Institutions",
    "description": "How institutions can evaluate Terra Classic, its decentralized operating model, and its native product rails.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs institutional section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/overview.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "The core institutional idea",
        "id": "the-core-institutional-idea"
      },
      {
        "depth": 2,
        "title": "Current product rails",
        "id": "current-product-rails"
      },
      {
        "depth": 2,
        "title": "Main use cases",
        "id": "main-use-cases"
      },
      {
        "depth": 3,
        "title": "Multi-currency settlement",
        "id": "multi-currency-settlement"
      },
      {
        "depth": 3,
        "title": "Payment gateway integration",
        "id": "payment-gateway-integration"
      },
      {
        "depth": 3,
        "title": "Native swap routing",
        "id": "native-swap-routing"
      },
      {
        "depth": 3,
        "title": "Collateralized stable assets",
        "id": "collateralized-stable-assets"
      },
      {
        "depth": 3,
        "title": "Infrastructure and data",
        "id": "infrastructure-and-data"
      },
      {
        "depth": 2,
        "title": "The contact reality",
        "id": "the-contact-reality"
      },
      {
        "depth": 2,
        "title": "How to use this section",
        "id": "how-to-use-this-section"
      },
      {
        "depth": 2,
        "title": "Not financial, legal, or commercial advice",
        "id": "not-financial-legal-or-commercial-advice"
      }
    ],
    "body": "This section is for institutions evaluating Terra Classic as a decentralized Layer 1 blockchain.\n\nIt is written for banks, fintech companies, payment providers, exchanges, custodians, market makers, asset managers, corporate treasuries, family offices, registered advisers, infrastructure providers, and other professional organizations that need more than a retail explanation.\n\nTerra Classic is not a company, issuer, foundation, vendor, or contracting counterparty. It is a public blockchain governed by staked LUNC through on-chain governance and maintained by independent validators, developers, contributors, and community participants.\n\nThat operating model is powerful, but it changes how institutions should approach integration.\n\n## The core institutional idea\n\nInstitutions can use Terra Classic in three different ways:\n\n| Use path | What it means |\n| --- | --- |\n| Build on existing rails | Use Terra Classic transactions, wallets, public endpoints, smart contracts, staking, governance data, and existing assets where appropriate. |\n| Integrate proposed L1 products | Prepare for products such as Swap Protocol and Forex Protocol if they are implemented, activated, audited, and supported by wallets and infrastructure. |\n| Propose new network work | Bring a serious proposal to public discussion and governance when the institution needs protocol changes, new asset support, funding, or ecosystem-wide coordination. |\n\nThese are different paths. An integration that only reads chain data does not need the same process as a new collateralized asset rollout.\n\n## Current product rails\n\nThe institutional story should be grounded in what exists and what is proposed.\n\n| Rail | Institutional relevance | Status discipline |\n| --- | --- | --- |\n| LUNC | Native staking, governance, gas, and speculative network asset. | Live asset. Volatile crypto asset. |\n| USTC | Legacy Terra Classic stable asset, now market-priced and speculative. | Live asset. Not a guaranteed stablecoin. |\n| Staking Protocol | Delegation, validator selection, governance power, and network security. | Live protocol. |\n| Governance | Public mechanism for proposals, parameters, upgrades, funding, and signaling. | Live protocol. |\n| Swap Protocol | Proposed native L1 swap route for LUNC and USTC through Market Module 2.0. | Proposed product. Not live unless activated by implementation and governance. |\n| Forex Protocol | Proposed collateralized stable-asset system, starting with EUTC. | Governance-accepted concept. Not live. |\n| Multi-currency assets | Proposed staged suite of Terra Classic-denominated fiat-pegged assets. | Roadmap direction. Not a live 20+ redeemable stablecoin suite. |\n\nThe strongest institutional framing is not that every product is already ready. The strongest framing is that Terra Classic has a serious path toward decentralized payment, swap, and collateralized stable-asset infrastructure if implementation, liquidity, governance, and risk controls are handled professionally.\n\n## Main use cases\n\n### Multi-currency settlement\n\nInstitutions can evaluate Terra Classic's multi-currency design direction through [Multi-currency suite](/institutions/multi-currency-suite/) and [Native assets](/institutions/native-assets/).\n\nThe defensible position is:\n\n> Terra Classic has a native multi-asset design heritage and a proposed collateralized path for new fiat-pegged assets, but institutional-grade use depends on implementation, collateral, oracles, audits, liquidity, wallet support, and governance approval.\n\n### Payment gateway integration\n\nPayment providers, merchants, fintechs, and crypto-native businesses can evaluate Terra Classic as a low-fee settlement network through [Payment gateway](/institutions/payment-gateway/).\n\nThe practical architecture can begin with basic LUNC or USTC transfers, but a serious fiat-denominated payment gateway depends on stable settlement assets, liquidity, reconciliation tooling, custody design, and clear user disclosures.\n\n### Native swap routing\n\nWallets, exchanges, market makers, and payment applications can evaluate [Native swap rails](/institutions/native-swap-rails/) as a future routing layer if Swap Protocol is implemented.\n\nSwap Protocol should be treated as bounded infrastructure: no minting, finite liquidity, oracle-aware pricing, spread fees, and safety controls.\n\n### Collateralized stable assets\n\nInstitutions interested in issuing, supporting, collateralizing, or integrating future Terra Classic stable assets should read [Collateralized stable assets](/institutions/collateralized-stable-assets/).\n\nThis path is most relevant to regulated fintechs, stablecoin issuers, payment companies, liquidity providers, and organizations that can support collateral, compliance, reserves, or market access.\n\n### Infrastructure and data\n\nInstitutions can also contribute by operating reliable infrastructure: full nodes, endpoints, indexers, explorers, analytics, monitoring, incident reporting, and governance tooling.\n\nSee [Integration architecture](/institutions/integration-architecture/) for the practical integration model.\n\n## The contact reality\n\nTerra Classic has no central entity that can sign contracts, promise outcomes, or represent the network.\n\nThat does not mean institutions cannot engage. It means engagement must be routed correctly:\n\n- public discussion through the [Terra Classic forum](https://agora.terra-classic.io/)\n- code and implementation work through relevant repositories and maintainers\n- validator and community coordination for feedback, review, and support\n- on-chain governance when protocol changes, funding, parameters, or official network decisions are required\n- direct contracts only with specific legal entities or contributors, not with \"Terra Classic\" as a whole\n\nRead [Requirements and contact](/institutions/requirements-and-contact/) before treating any community member, validator, developer, or website as an official representative.\n\n## How to use this section\n\n- [Multi-currency suite](/institutions/multi-currency-suite/) explains the institutional value of the 20+ asset direction.\n- [Payment gateway](/institutions/payment-gateway/) explains how a Terra Classic payment product could be structured.\n- [Requirements and contact](/institutions/requirements-and-contact/) explains the decentralized engagement model.\n- [Native assets](/institutions/native-assets/) explains LUNC, USTC, EUTC, and the planned Terra Classic-denominated assets.\n- [Native swap rails](/institutions/native-swap-rails/) explains Swap Protocol and Market Module 2.0 from an institutional perspective.\n- [Collateralized stable assets](/institutions/collateralized-stable-assets/) explains Forex Protocol and the proposed CSM model.\n- [Integration architecture](/institutions/integration-architecture/) maps technical integration options.\n- [Risk and due diligence](/institutions/risk-and-due-diligence/) gives the checklist institutions should complete before serious use.\n\n## Not financial, legal, or commercial advice\n\nThis section explains Terra Classic's decentralized operating model and product possibilities. It does not recommend buying, selling, holding, staking, issuing, integrating, or trading any asset. Institutions should perform their own legal, compliance, technical, custody, liquidity, and risk review.\n",
    "previousSlug": "governance/risks-and-safeguards",
    "nextSlug": "institutions/multi-currency-suite"
  },
  {
    "slug": "institutions/multi-currency-suite",
    "path": "/institutions/multi-currency-suite/",
    "sourceFile": "content/docs/institutions/multi-currency-suite.md",
    "group": "For Institutions",
    "navTitle": "Multi-currency suite",
    "navDepth": 1,
    "navParent": "institutions/use-cases",
    "navHasChildren": false,
    "navOrder": 77,
    "title": "Multi-currency suite",
    "description": "How institutions should understand Terra Classic's proposed 20+ native asset suite and the path from concept to institutional-grade settlement.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic native assets and Forex Protocol source material",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/multi-currency-suite.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "What the suite is meant to become",
        "id": "what-the-suite-is-meant-to-become"
      },
      {
        "depth": 2,
        "title": "Current status",
        "id": "current-status"
      },
      {
        "depth": 2,
        "title": "Why institutions may care",
        "id": "why-institutions-may-care"
      },
      {
        "depth": 2,
        "title": "What must be true for institutional use",
        "id": "what-must-be-true-for-institutional-use"
      },
      {
        "depth": 2,
        "title": "Suggested rollout logic",
        "id": "suggested-rollout-logic"
      },
      {
        "depth": 2,
        "title": "How this connects to payment gateways",
        "id": "how-this-connects-to-payment-gateways"
      },
      {
        "depth": 2,
        "title": "The institutional claim to make",
        "id": "the-institutional-claim-to-make"
      },
      {
        "depth": 2,
        "title": "Related pages",
        "id": "related-pages"
      }
    ],
    "body": "Terra Classic's multi-currency suite is the institutional idea behind native Terra Classic-denominated fiat assets.\n\nThe main website presents this as a 20+ asset direction. The docs must describe it precisely:\n\n> Terra Classic has a native multi-denom design heritage and a proposed path to progressively collateralize fiat-pegged assets on-chain, but it does not currently offer a live institutional-grade 20+ currency redemption suite.\n\nThat distinction matters. Institutions will test every claim against custody, reserves, liquidity, audits, governance, legal responsibility, and operational support.\n\n## What the suite is meant to become\n\nThe institutional value proposition is a native multi-currency settlement surface on a decentralized public blockchain.\n\nIf built correctly, the suite could support:\n\n- fiat-denominated settlement assets\n- regional payment products\n- merchant checkout in local units\n- treasury accounting in multiple currencies\n- cross-border routing between digital settlement assets\n- liquidity and FX-style market making\n- wallet and exchange support for native Terra Classic assets\n\nThe proposed first step is [Forex Protocol](/forex-protocol/overview/), beginning with EUTC.\n\n## Current status\n\nThe correct current-state summary is:\n\n| Item | Status |\n| --- | --- |\n| LUNC | Live native asset. |\n| USTC | Live legacy asset, market-priced and speculative. |\n| EUTC | Proposed first Forex Protocol stable asset. Not live. |\n| 20+ local-currency assets | Roadmap direction. Not live as redeemable collateralized stable assets. |\n| Forex Protocol / CSM | Governance-accepted concept. Requires implementation, audit, liquidity, and activation. |\n| Institutional redemption | Not available today through Terra Classic as a legal issuer. |\n\nInstitutions should not treat planned assets as live balances, redeemable claims, or issued securities without a completed legal and technical structure.\n\n## Why institutions may care\n\nThe multi-currency suite is relevant because payments and treasury operations are rarely single-currency problems.\n\nPotential institutional uses include:\n\n| Institution type | Possible use |\n| --- | --- |\n| Payment providers | Local-currency checkout and settlement flows. |\n| Fintech companies | Multi-currency wallet balances and remittance-style user flows. |\n| Corporate treasuries | On-chain settlement experiments with currency-specific accounting. |\n| Market makers | Liquidity provision between LUNC, USTC, EUTC, and future assets. |\n| Exchanges | Native asset listing, routing, and withdrawal/deposit support if assets become live. |\n| Stablecoin issuers | Collateral, reserve, or liquidity participation in future Forex Protocol assets. |\n| Public-sector or institutional partners | Research into decentralized settlement rails where governance, transparency, and public auditability matter. |\n\nThe opportunity is real, but it is conditional.\n\n## What must be true for institutional use\n\nA serious institution should require more than a symbol list.\n\nAt minimum, each supported currency asset needs:\n\n- clear issuer or protocol model\n- collateral source and custody model\n- reserve accounting\n- mint and redeem rules\n- redemption limits\n- oracle design\n- liquidity depth\n- emergency controls\n- audit history\n- wallet support\n- explorer and indexer support\n- governance approval where protocol behavior changes\n- legal and regulatory review in the institution's jurisdiction\n\nFor Forex Protocol specifically, see [Collateralized stable assets](/institutions/collateralized-stable-assets/).\n\n## Suggested rollout logic\n\nThe staged asset direction shown on the main website should be treated as an implementation roadmap, not a promise that every asset is ready at once.\n\n| Phase | Institutional meaning |\n| --- | --- |\n| Phase 1 | Prove the model with EUTC first. Validate collateral, mint, redeem, reserve accounting, oracle logic, liquidity, and user interfaces. |\n| Phase 2 | Add a small number of additional currencies only after the first asset has enough operational evidence. |\n| Phase 3 | Expand coverage where there is real user demand, reliable oracle data, and liquidity support. |\n| Phase 4 | Treat USTC-related design with extra caution because USTC carries legacy collapse, market, and regulatory baggage. |\n\nThis is the disciplined path. Launching 20+ weak assets would be worse than launching one credible asset.\n\n## How this connects to payment gateways\n\nThe multi-currency suite becomes most valuable when paired with payment flows.\n\nA payment gateway could:\n\n1. quote a local-currency amount\n2. accept a supported Terra Classic asset\n3. route through native swaps or external liquidity where available\n4. settle to the merchant's preferred asset\n5. reconcile invoices, refunds, and transaction hashes\n\nToday, that is an architecture path, not a complete production promise. See [Payment gateway](/institutions/payment-gateway/) for the operational model.\n\n## The institutional claim to make\n\nThe defensible claim is:\n\n> Terra Classic can be evaluated as a decentralized base layer for a future collateralized multi-currency asset suite, with Forex Protocol as the proposed first product path.\n\nThe claim to avoid is:\n\n> Terra Classic already offers 20+ institutional-ready redeemable fiat stablecoins.\n\nThat second claim is not true today and would weaken trust.\n\n## Related pages\n\n- [Native assets](/institutions/native-assets/)\n- [Collateralized stable assets](/institutions/collateralized-stable-assets/)\n- [Payment gateway](/institutions/payment-gateway/)\n- [Requirements and contact](/institutions/requirements-and-contact/)\n- [Risk and due diligence](/institutions/risk-and-due-diligence/)\n",
    "previousSlug": "institutions/overview",
    "nextSlug": "institutions/payment-gateway"
  },
  {
    "slug": "institutions/payment-gateway",
    "path": "/institutions/payment-gateway/",
    "sourceFile": "content/docs/institutions/payment-gateway.md",
    "group": "For Institutions",
    "navTitle": "Payment gateway",
    "navDepth": 1,
    "navParent": "institutions/use-cases",
    "navHasChildren": false,
    "navOrder": 78,
    "title": "Payment gateway",
    "description": "How institutions can evaluate a Terra Classic payment gateway using native transfers, future swap routing, and collateralized stable assets.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs institutional payment gateway section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/payment-gateway.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "The basic model",
        "id": "the-basic-model"
      },
      {
        "depth": 2,
        "title": "What can be built today",
        "id": "what-can-be-built-today"
      },
      {
        "depth": 2,
        "title": "What improves with Swap Protocol",
        "id": "what-improves-with-swap-protocol"
      },
      {
        "depth": 2,
        "title": "What improves with Forex Protocol",
        "id": "what-improves-with-forex-protocol"
      },
      {
        "depth": 2,
        "title": "Gateway architecture",
        "id": "gateway-architecture"
      },
      {
        "depth": 2,
        "title": "Required user states",
        "id": "required-user-states"
      },
      {
        "depth": 2,
        "title": "Institutional requirements",
        "id": "institutional-requirements"
      },
      {
        "depth": 2,
        "title": "Recommended first product",
        "id": "recommended-first-product"
      },
      {
        "depth": 2,
        "title": "Related pages",
        "id": "related-pages"
      }
    ],
    "body": "A Terra Classic payment gateway is an application layer built by an institution, fintech, payment provider, merchant, wallet, or developer.\n\nTerra Classic does not provide a centralized payment processor. The chain can provide settlement rails. The gateway provider is responsible for product design, compliance, custody, merchant onboarding, support, reconciliation, and user disclosures.\n\n## The basic model\n\nA payment gateway can use Terra Classic to:\n\n- create payment requests\n- accept wallet payments\n- verify on-chain settlement\n- reconcile invoices against transactions\n- route assets through available swap or liquidity rails\n- support merchant settlement policies\n- expose receipts, hashes, and explorer links\n- handle refunds, underpayments, overpayments, and failed payments\n\nThe gateway itself may be custodial, non-custodial, hybrid, or merchant-directed. That is a product and legal decision made by the gateway operator.\n\n## What can be built today\n\nInstitutions can build a basic Terra Classic payment flow around live chain functionality:\n\n| Capability | Current reality |\n| --- | --- |\n| LUNC transfers | Live on Terra Classic. |\n| USTC transfers | Live, but USTC is market-priced and not a guaranteed stablecoin. |\n| Wallet signing | Possible through supported wallets and integrations. |\n| On-chain confirmation | Possible through nodes, indexers, explorers, and transaction queries. |\n| Merchant reconciliation | Application-level responsibility. |\n| Stable fiat settlement | Not natively solved by Terra Classic today. |\n\nThis can support experiments, crypto-native checkout, internal settlement, or niche merchant flows. It should not be marketed as a complete regulated fiat payment network without the required legal, custody, liquidity, and stable-asset infrastructure.\n\n## What improves with Swap Protocol\n\nIf [Swap Protocol](/swap-protocol/overview/) is implemented and activated, a payment gateway could use it as a native L1 route between LUNC and USTC.\n\nPossible uses:\n\n- quote a LUNC amount for a USTC-denominated invoice\n- accept one asset and settle another\n- route small user payments through protocol liquidity\n- display native spread fees and estimated output\n- fail gracefully when oracle or liquidity checks stop the route\n\nThe gateway must still account for:\n\n- finite liquidity\n- oracle availability\n- disabled routes\n- spread fees\n- transaction fees\n- user slippage expectations\n- USTC market volatility\n\nSwap Protocol is not a stablecoin redemption mechanism and not a guarantee of payment final value.\n\n## What improves with Forex Protocol\n\nIf [Forex Protocol](/forex-protocol/overview/) is implemented, audited, collateralized, and supported by wallets and liquidity providers, a payment gateway could use assets such as EUTC for local-currency settlement.\n\nPossible uses:\n\n- Euro-denominated invoices using EUTC\n- merchant settlement into EUTC or another supported asset\n- regional payment products using future collateralized assets\n- stable-asset checkout for users who do not want LUNC price exposure\n- multi-currency treasury reporting\n\nThis depends on Forex Protocol becoming live and institutionally credible. A payment gateway should not assume EUTC or future Terra Classic currency assets exist until they are deployed, collateralized, liquid, indexed, and usable in wallets.\n\n## Gateway architecture\n\nA serious payment gateway should separate the payment workflow from the blockchain workflow.\n\n| Layer | Responsibilities |\n| --- | --- |\n| Checkout | Create invoice, asset options, amount, expiry, and user payment instructions. |\n| Quote engine | Convert fiat, LUNC, USTC, EUTC, or other assets using trusted price sources and route availability. |\n| Wallet layer | Support wallet connection, address generation, signing, and user transaction flow. |\n| Chain watcher | Monitor mempool, committed transactions, confirmations, failures, and reorg assumptions. |\n| Settlement policy | Decide whether the merchant holds, swaps, routes, or withdraws assets. |\n| Reconciliation | Match invoices to hashes, amounts, sender data where available, timestamps, and settlement status. |\n| Risk engine | Enforce limits, blocked jurisdictions, asset availability, volatility controls, and fraud controls. |\n| Operator dashboard | Show payments, exceptions, refunds, balances, exports, and diagnostics. |\n\nTerra Classic provides chain settlement. The gateway provider provides the product.\n\n## Required user states\n\nDo not collapse all failures into \"payment failed.\"\n\nExpose clear states:\n\n| State | Meaning |\n| --- | --- |\n| Awaiting payment | Invoice exists but no matching transaction has settled. |\n| Seen on-chain | A transaction has been detected but final confirmation policy is not complete. |\n| Confirmed | Payment meets the gateway's confirmation rule. |\n| Underpaid | Received amount is below the required amount after fees and tolerance. |\n| Overpaid | Received amount exceeds the invoice amount. |\n| Expired | Invoice deadline passed before valid payment. |\n| Refund required | Operator or merchant action is needed. |\n| Swap unavailable | Native routing is unavailable because of liquidity, oracle, or protocol state. |\n| Asset unavailable | Requested stable asset or currency route is not live or supported. |\n\nThese states are basic trust infrastructure for merchants and institutions.\n\n## Institutional requirements\n\nBefore launching a production gateway, the operator should define:\n\n- supported countries and blocked countries\n- supported assets\n- custody model\n- merchant settlement policy\n- compliance and monitoring obligations\n- transaction confirmation policy\n- refund policy\n- fee model\n- liquidity routing policy\n- price-source policy\n- incident response process\n- support responsibility\n- data export format for accounting and audits\n\nTerra Classic governance will not do this work for the gateway operator.\n\n## Recommended first product\n\nThe strongest first version is not a universal payment network.\n\nA credible first version would be:\n\n> A transparent Terra Classic crypto checkout and settlement gateway for selected assets, with clear risk disclosures, transaction verification, reconciliation exports, and optional future routing through Swap Protocol and Forex Protocol when those products become live.\n\nThat is narrow enough to ship and serious enough to extend.\n\n## Related pages\n\n- [Multi-currency suite](/institutions/multi-currency-suite/)\n- [Native swap rails](/institutions/native-swap-rails/)\n- [Collateralized stable assets](/institutions/collateralized-stable-assets/)\n- [Integration architecture](/institutions/integration-architecture/)\n- [Risk and due diligence](/institutions/risk-and-due-diligence/)\n",
    "previousSlug": "institutions/multi-currency-suite",
    "nextSlug": "institutions/requirements-and-contact"
  },
  {
    "slug": "institutions/requirements-and-contact",
    "path": "/institutions/requirements-and-contact/",
    "sourceFile": "content/docs/institutions/requirements-and-contact.md",
    "group": "For Institutions",
    "navTitle": "Requirements and contact",
    "navDepth": 1,
    "navParent": "institutions/use-cases",
    "navHasChildren": false,
    "navOrder": 79,
    "title": "Requirements and contact",
    "description": "How institutions should engage with Terra Classic when there is no central legal entity that can represent the chain.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic decentralized operating model and governance contact path",
    "sourceSite": "https://agora.terra-classic.io/",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/requirements-and-contact.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "The short answer",
        "id": "the-short-answer"
      },
      {
        "depth": 2,
        "title": "What nobody can promise",
        "id": "what-nobody-can-promise"
      },
      {
        "depth": 2,
        "title": "What community members can do",
        "id": "what-community-members-can-do"
      },
      {
        "depth": 2,
        "title": "When governance is required",
        "id": "when-governance-is-required"
      },
      {
        "depth": 2,
        "title": "What to prepare before contact",
        "id": "what-to-prepare-before-contact"
      },
      {
        "depth": 2,
        "title": "Suggested public engagement path",
        "id": "suggested-public-engagement-path"
      },
      {
        "depth": 3,
        "title": "1. Research first",
        "id": "1-research-first"
      },
      {
        "depth": 3,
        "title": "2. Post a public concept",
        "id": "2-post-a-public-concept"
      },
      {
        "depth": 3,
        "title": "3. Collect feedback",
        "id": "3-collect-feedback"
      },
      {
        "depth": 3,
        "title": "4. Move to governance if needed",
        "id": "4-move-to-governance-if-needed"
      },
      {
        "depth": 3,
        "title": "5. Contract separately",
        "id": "5-contract-separately"
      },
      {
        "depth": 2,
        "title": "Contact language to use",
        "id": "contact-language-to-use"
      },
      {
        "depth": 2,
        "title": "What this page protects",
        "id": "what-this-page-protects"
      }
    ],
    "body": "Terra Classic is a decentralized public blockchain.\n\nIt has no central company, foundation, issuer, business development department, account manager, legal representative, or commercial authority that can sign contracts on behalf of the network.\n\nThis is the most important fact for institutional engagement.\n\n## The short answer\n\nIf your institution wants to build on, integrate with, or propose something for Terra Classic:\n\n1. Use the [Terra Classic forum](https://agora.terra-classic.io/) for public discussion.\n2. Speak with relevant validators, developers, contributors, and community members for feedback and support.\n3. Use on-chain governance if the request needs a network decision.\n4. Contract only with specific legal entities or service providers, not with \"Terra Classic\" as a whole.\n\nCommunity members and validators can support the process. They cannot officially represent Terra Classic unless they are speaking only for themselves or their own legal entity.\n\n## What nobody can promise\n\nNo individual participant can promise:\n\n- that Terra Classic governance will approve a proposal\n- that validators will vote in a specific way\n- that the chain will change parameters\n- that a new asset will be listed, supported, or collateralized\n- that a wallet or exchange will integrate a feature\n- that a protocol product will be implemented by a certain date\n- that an institution has official Terra Classic endorsement\n- that \"Terra Classic\" has signed or accepted a commercial contract\n\nThis is not a customer-success environment. It is a public blockchain environment.\n\n## What community members can do\n\nCommunity members, validators, developers, and ecosystem participants can still provide useful support:\n\n| Support type | What they can do |\n| --- | --- |\n| Orientation | Explain the chain, product status, governance process, risks, and ecosystem resources. |\n| Technical review | Review integration plans, endpoint strategy, wallet flows, module behavior, and operational assumptions. |\n| Proposal feedback | Help improve a forum post or governance proposal before it goes on-chain. |\n| Validator outreach | Share an initiative with validators and delegators for review. |\n| Implementation work | Build software if hired directly by an institution or funded through governance. |\n| Infrastructure support | Provide nodes, indexing, monitoring, analytics, or operational services under their own legal terms. |\n\nThey support the process. They do not become the chain.\n\n## When governance is required\n\nGovernance is likely required when an institutional initiative needs:\n\n- protocol parameter changes\n- new module activation\n- chain software upgrades\n- community pool funding\n- official signaling from staked LUNC governance\n- Forex Protocol rollout decisions\n- Swap Protocol activation or parameter changes\n- tax, fee, or oracle-policy changes\n- network-wide asset support\n- public-good infrastructure funding\n\nGovernance may not be required for:\n\n- reading public chain data\n- running a full node\n- building an independent wallet or payment gateway\n- listing LUNC or USTC on a private platform\n- building a private analytics product\n- contracting directly with a validator, developer, auditor, market maker, or infrastructure provider\n\nThe difference is simple: private integrations can usually proceed independently; network decisions need governance.\n\n## What to prepare before contact\n\nAn institutional approach should be specific. Vague \"partnership\" messages waste time and create weak expectations.\n\nPrepare:\n\n| Requirement | Why it matters |\n| --- | --- |\n| Entity identity | Community participants need to know who is approaching the ecosystem. |\n| Jurisdiction | Legal, stablecoin, custody, payment, and securities rules vary by region. |\n| Use case | Payment gateway, custody, asset issuance, liquidity, treasury, data, research, or infrastructure. |\n| Requested support | Clarify whether you need technical feedback, governance support, funding, validators, liquidity, or public discussion. |\n| Product status | Say whether the institution is researching, prototyping, seeking governance, or ready to build. |\n| Asset model | Name the assets involved and whether they are live, proposed, collateralized, or speculative. |\n| Collateral model | Required for stable-asset or Forex Protocol related proposals. |\n| Liquidity plan | Needed for swaps, payments, stable assets, and listings. |\n| Risk controls | Include custody, audits, oracle assumptions, limits, monitoring, and incident handling. |\n| Legal boundary | Make clear who can sign contracts and who is only providing public-chain coordination. |\n\nFor payment products, also read [Payment gateway](/institutions/payment-gateway/). For stable assets, read [Collateralized stable assets](/institutions/collateralized-stable-assets/).\n\n## Suggested public engagement path\n\nUse a staged process.\n\n### 1. Research first\n\nRead:\n\n- [For Institutions](/institutions/overview/)\n- [Risk and due diligence](/institutions/risk-and-due-diligence/)\n- [Governance](/governance/overview/)\n- [Swap Protocol](/swap-protocol/overview/)\n- [Forex Protocol](/forex-protocol/overview/)\n\n### 2. Post a public concept\n\nOpen a clear forum topic on the [Terra Classic forum](https://agora.terra-classic.io/).\n\nThe topic should include:\n\n- who you are\n- what you want to build or propose\n- what chain support you need\n- what assets or modules are involved\n- what benefits and risks the community should evaluate\n- what is already funded by your institution\n- what would require governance funding or approval\n\n### 3. Collect feedback\n\nGive validators, developers, delegators, community members, and independent critics time to respond.\n\nDo not treat silence from the forum as approval.\n\n### 4. Move to governance if needed\n\nIf the idea requires a network decision, prepare an on-chain governance proposal with:\n\n- clear scope\n- implementation owner\n- milestones\n- budget if funding is requested\n- deliverables\n- risk controls\n- audit or review plan\n- success metrics\n- rollback or emergency process where relevant\n\n### 5. Contract separately\n\nIf your institution hires contributors, validators, auditors, developers, liquidity providers, or infrastructure companies, contract with those parties directly.\n\nA private contract with one contributor does not bind Terra Classic governance.\n\n## Contact language to use\n\nUse this framing:\n\n> We are seeking public feedback and potential ecosystem support for an initiative involving Terra Classic. We understand Terra Classic has no central legal entity and that validators or community members cannot represent the chain as a whole. If network-level support is required, we expect to use the public forum and governance process.\n\nAvoid this framing:\n\n> We want to partner with Terra Classic and need someone official to approve it.\n\nThere may be no such person.\n\n## What this page protects\n\nThis page protects both sides.\n\nIt protects institutions from assuming that a Telegram chat, validator conversation, website, or community member creates official network approval.\n\nIt protects Terra Classic from false claims that one actor can sell, sign, license, endorse, or commercially represent a decentralized chain.\n\nThe correct operating model is public, transparent, proposal-driven, and governance-aware.\n",
    "previousSlug": "institutions/payment-gateway",
    "nextSlug": "institutions/native-assets"
  },
  {
    "slug": "institutions/native-assets",
    "path": "/institutions/native-assets/",
    "sourceFile": "content/docs/institutions/native-assets.md",
    "group": "For Institutions",
    "navTitle": "Native assets",
    "navDepth": 1,
    "navParent": "institutions/product-rails",
    "navHasChildren": false,
    "navOrder": 81,
    "title": "Native assets",
    "description": "How institutions should understand LUNC, USTC, EUTC, and the planned Terra Classic multi-currency asset suite.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic native assets and Forex Protocol source material",
    "sourceSite": "https://terra-classic.money/",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/native-assets.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Status categories",
        "id": "status-categories"
      },
      {
        "depth": 2,
        "title": "LUNC",
        "id": "lunc"
      },
      {
        "depth": 2,
        "title": "USTC",
        "id": "ustc"
      },
      {
        "depth": 2,
        "title": "EUTC",
        "id": "eutc"
      },
      {
        "depth": 2,
        "title": "Planned multi-currency assets",
        "id": "planned-multi-currency-assets"
      },
      {
        "depth": 2,
        "title": "Institutional asset questions",
        "id": "institutional-asset-questions"
      },
      {
        "depth": 2,
        "title": "Product discipline",
        "id": "product-discipline"
      },
      {
        "depth": 2,
        "title": "Related pages",
        "id": "related-pages"
      }
    ],
    "body": "Terra Classic native assets should be understood by status, not only by symbol.\n\nAn asset symbol on a website or roadmap is not the same thing as a live, liquid, collateralized, redeemable, institution-ready asset.\n\n## Status categories\n\nUse these categories when evaluating Terra Classic assets:\n\n| Category | Meaning |\n| --- | --- |\n| Live native asset | Exists and can be transferred on Terra Classic mainnet. |\n| Live legacy asset | Exists on-chain but may no longer behave like its original product promise. |\n| Proposed collateralized asset | Described in product or governance material but not live until implemented. |\n| Roadmap asset | Part of a staged product direction, not currently available as a production asset. |\n| Institution-ready asset | Has live issuance, collateral, redemption, liquidity, oracle support, wallet support, audits, and legal/compliance clarity. |\n\nMost institutional confusion comes from mixing these categories.\n\n## LUNC\n\nLUNC is the native staking, governance, and gas asset of Terra Classic.\n\nInstitutional relevance:\n\n- pays transaction fees\n- secures the network through staking\n- provides governance voting power when staked\n- can be delegated to validators\n- is listed on external markets\n- can be held, transferred, staked, or integrated like other volatile crypto assets\n\nLUNC is not a stable asset. It is a volatile crypto asset.\n\n## USTC\n\nUSTC is a live Terra Classic legacy asset.\n\nIt should not be described as a guaranteed 1 USD stablecoin. After the 2022 collapse, USTC became a market-priced speculative asset. It can still be transferred and may be involved in proposed product paths, but institutions should treat it with extra caution.\n\nInstitutional relevance:\n\n- live on-chain asset\n- possible swap route in Swap Protocol if implemented\n- possible future role in stable-asset discussions\n- high disclosure burden because of its history\n\nUSTC-related products should avoid any language that implies a guaranteed peg, redemption right, or risk-free stable settlement.\n\n## EUTC\n\nEUTC is the proposed first Forex Protocol stable asset.\n\nThe source design describes EUTC as a Euro-pegged Terra Classic asset backed by approved collateral such as EURC or USDC, with mint and redemption fees, reserve logic, oracle requirements, and redemption controls.\n\nCurrent institutional status:\n\n| Item | Status |\n| --- | --- |\n| EUTC concept | Defined in Forex Protocol source material. |\n| Governance direction | Forex Protocol concept accepted by governance as Proposal 12209. |\n| Mainnet asset | Not live. |\n| Minting | Not live. |\n| Redemption | Not live. |\n| Institutional readiness | Depends on implementation, audit, collateral, liquidity, wallets, and governance execution. |\n\nEUTC should be presented as a proposed first asset, not as a live Euro stablecoin.\n\n## Planned multi-currency assets\n\nThe main website presents a staged multi-currency suite. Institutions should treat it as a roadmap direction tied to Forex Protocol or future collateralized asset work.\n\n| Display asset | Reference currency |\n| --- | --- |\n| HKTC | Hong Kong Dollar |\n| NOTC | Norwegian Krone |\n| PHTC | Philippine Peso |\n| AUTC | Australian Dollar |\n| CATC | Canadian Dollar |\n| CHTC | Swiss Franc |\n| CNTC | Chinese Yuan Renminbi |\n| DKTC | Danish Krone |\n| GBTC | British Pound Sterling |\n| INTC | Indian Rupee |\n| IDTC | Indonesian Rupiah |\n| JPTC | Japanese Yen |\n| KRTC | South Korean Won |\n| MNTC | Mongolian Togrog |\n| MYTC | Malaysian Ringgit |\n| SDTC | Special Drawing Rights |\n| SETC | Swedish Krona |\n| SGTC | Singapore Dollar |\n| THTC | Thai Baht |\n| TWTC | New Taiwan Dollar |\n| USTC | US Dollar reference asset, but currently a legacy market-priced asset |\n\nThese names describe the intended Terra Classic-denominated asset family. They do not prove current collateral, redemption, liquidity, regulatory status, or wallet support.\n\n## Institutional asset questions\n\nBefore using or supporting any Terra Classic asset, an institution should ask:\n\n- Does this asset exist on mainnet?\n- Is it transferable?\n- Is it supported by wallets and explorers?\n- Is it supported by exchanges or DEX liquidity?\n- Is it collateralized?\n- Who controls or verifies collateral?\n- Is redemption available?\n- What are the mint and redeem rules?\n- What happens during oracle failure?\n- What happens during liquidity failure?\n- Has the implementation been audited?\n- Is there a legal issuer, or is this purely protocol-defined?\n- Does using the asset create regulatory obligations?\n\nIf those answers are unclear, the asset is not institution-ready.\n\n## Product discipline\n\nThe multi-currency story is one of Terra Classic's most interesting institutional opportunities. It is also one of the easiest stories to damage through overclaiming.\n\nThe correct message is:\n\n> Terra Classic can pursue a native multi-currency asset suite through collateralized protocol design, beginning with EUTC as the first proposed Forex Protocol asset.\n\nThe incorrect message is:\n\n> Terra Classic already has 20+ fully working institutional fiat stablecoins.\n\nDo not use the incorrect message.\n\n## Related pages\n\n- [Multi-currency suite](/institutions/multi-currency-suite/)\n- [Collateralized stable assets](/institutions/collateralized-stable-assets/)\n- [Payment gateway](/institutions/payment-gateway/)\n- [Risk and due diligence](/institutions/risk-and-due-diligence/)\n",
    "previousSlug": "institutions/requirements-and-contact",
    "nextSlug": "institutions/native-swap-rails"
  },
  {
    "slug": "institutions/native-swap-rails",
    "path": "/institutions/native-swap-rails/",
    "sourceFile": "content/docs/institutions/native-swap-rails.md",
    "group": "For Institutions",
    "navTitle": "Native swap rails",
    "navDepth": 1,
    "navParent": "institutions/product-rails",
    "navHasChildren": false,
    "navOrder": 82,
    "title": "Native swap rails",
    "description": "How institutions should evaluate Swap Protocol and Market Module 2.0 as a native Terra Classic routing layer.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Market-Module 2.0",
    "sourceSite": "https://discourse.luncgoblins.com/t/terra-classic-market-module-2-0/38",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/native-swap-rails.md",
    "sourceDate": "2025-06-25",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Institutional value",
        "id": "institutional-value"
      },
      {
        "depth": 2,
        "title": "What makes it different",
        "id": "what-makes-it-different"
      },
      {
        "depth": 2,
        "title": "What institutions should not assume",
        "id": "what-institutions-should-not-assume"
      },
      {
        "depth": 2,
        "title": "Payment gateway use",
        "id": "payment-gateway-use"
      },
      {
        "depth": 2,
        "title": "Treasury use",
        "id": "treasury-use"
      },
      {
        "depth": 2,
        "title": "Required integration states",
        "id": "required-integration-states"
      },
      {
        "depth": 2,
        "title": "Read the product docs",
        "id": "read-the-product-docs"
      },
      {
        "depth": 2,
        "title": "Institutional conclusion",
        "id": "institutional-conclusion"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Native swap rails describe the potential institutional use of [Swap Protocol](/swap-protocol/overview/).\n\nSwap Protocol is the product name. Market Module 2.0 is the underlying no-mint market-module design.\n\nIt is proposed as a native L1 route for LUNC and USTC swaps using prefilled protocol liquidity, oracle-aware pricing, spread fees, burns, and safety controls.\n\nRead [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before treating this as a production route.\n\n## Institutional value\n\nIf implemented and activated, Swap Protocol could matter to:\n\n| Institution type | Possible use |\n| --- | --- |\n| Wallets | Native LUNC and USTC swap interface with protocol-level states. |\n| Payment gateways | Route between invoice asset and settlement asset where liquidity allows. |\n| Exchanges | Monitor native swap prices, capacity, and market signals. |\n| Market makers | Arbitrage or liquidity strategy around protocol swap routes and external markets. |\n| Analytics providers | Track route availability, spread fees, burns, oracle participation, and pool exhaustion. |\n| Treasury operators | Rebalance small positions through native rails when capacity and risk limits permit. |\n\nThis is infrastructure, not a magic liquidity source.\n\n## What makes it different\n\nMarket Module 2.0 is designed to avoid the most dangerous part of the old Terra market module: uncontrolled minting.\n\nThe proposed design uses:\n\n- no new LUNC or USTC minting during swaps\n- prefilled protocol liquidity pools\n- oracle-aware pricing\n- finite route capacity\n- 0.35% spread fee\n- 50% spread-fee burn\n- 50% spread-fee routing to the Oracle Pool\n- epoch-based burn logic for remaining pool balances\n- oracle quorum and sanity checks\n\nFor institutions, the key word is bounded.\n\n## What institutions should not assume\n\nSwap Protocol does not provide:\n\n- USTC repeg\n- guaranteed swap availability\n- unlimited liquidity\n- fixed USTC value\n- stablecoin redemption\n- institutional market depth by itself\n- guaranteed execution during oracle failure\n- legal settlement finality beyond blockchain settlement\n\nAny integration should expose failure states clearly.\n\n## Payment gateway use\n\nA payment gateway could use Swap Protocol as a routing option only after implementation and production availability are documented.\n\nExample:\n\n1. Merchant creates a USTC-denominated invoice.\n2. User wants to pay with LUNC.\n3. Gateway quotes an estimated LUNC-to-USTC route through Swap Protocol if a supported production route exists.\n4. Gateway checks route status, oracle state, pool capacity, and fees.\n5. User signs the transaction.\n6. Gateway confirms settlement and reconciles the invoice.\n\nThis workflow is useful only if the route has sufficient liquidity and safe oracle state at the time of payment.\n\n## Treasury use\n\nA treasury desk could use Swap Protocol for controlled LUNC/USTC rebalancing when:\n\n- route liquidity is sufficient\n- the desired size is within risk limits\n- external market prices are checked\n- oracle state is healthy\n- execution failure is acceptable\n- final balances can be reconciled\n\nLarge institutions should assume external liquidity venues and OTC relationships may still be required.\n\n## Required integration states\n\nInstitutional software should model:\n\n| State | Why it matters |\n| --- | --- |\n| Route enabled | The module route can be attempted. |\n| Route disabled or not implemented | Governance, safety logic, or implementation state prevents use. |\n| Insufficient liquidity | The output side cannot satisfy the requested amount. |\n| Oracle quorum failure | Validator price participation is below required threshold. |\n| TWAP sanity failure | Price input is outside the allowed safety range. |\n| Fee estimate changed | Quote should be refreshed before signing. |\n| Transaction failed | The gateway must explain whether the failure was wallet, chain, liquidity, or oracle related. |\n\nBad error handling will make the product look unreliable even when the protocol is behaving correctly.\n\n## Read the product docs\n\nBefore integrating, read:\n\n- [Swap Protocol](/swap-protocol/overview/)\n- [Swap Protocol governance and status](/swap-protocol/governance-and-status/)\n- [Swap Protocol implementation status](/swap-protocol/implementation-status/)\n- [How it works](/swap-protocol/how-it-works/)\n- [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/)\n- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/)\n- [Developer reference](/swap-protocol/developer-reference/)\n\n## Institutional conclusion\n\nSwap Protocol should be positioned as a native routing layer with hard constraints.\n\nThat is a better institutional story than pretending it solves liquidity, repeg, or payment stability by itself.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nMarket Module 2.0 production availability should be verified through current releases, governance records, wallets, explorers, and market tools.\n",
    "previousSlug": "institutions/native-assets",
    "nextSlug": "institutions/collateralized-stable-assets"
  },
  {
    "slug": "institutions/collateralized-stable-assets",
    "path": "/institutions/collateralized-stable-assets/",
    "sourceFile": "content/docs/institutions/collateralized-stable-assets.md",
    "group": "For Institutions",
    "navTitle": "Collateralized stable assets",
    "navDepth": 1,
    "navParent": "institutions/product-rails",
    "navHasChildren": false,
    "navOrder": 83,
    "title": "Collateralized stable assets",
    "description": "How institutions should evaluate Forex Protocol, EUTC, collateral, reserves, liquidity, and stable-asset rollout requirements.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "LUNC FOREX - Collateralized Stablecoin Module (CSM) EUTC Kickoff",
    "sourceSite": "https://discourse.luncgoblins.com/t/lunc-forex-genesis-eutc-repeg/290",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/collateralized-stable-assets.md",
    "sourceDate": "2025-12-07",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "The product thesis",
        "id": "the-product-thesis"
      },
      {
        "depth": 2,
        "title": "Current status",
        "id": "current-status"
      },
      {
        "depth": 2,
        "title": "Why institutions may care",
        "id": "why-institutions-may-care"
      },
      {
        "depth": 2,
        "title": "Minimum institutional requirements",
        "id": "minimum-institutional-requirements"
      },
      {
        "depth": 2,
        "title": "Collateral and redemption questions",
        "id": "collateral-and-redemption-questions"
      },
      {
        "depth": 2,
        "title": "Governance and legal boundary",
        "id": "governance-and-legal-boundary"
      },
      {
        "depth": 2,
        "title": "What good implementation would look like",
        "id": "what-good-implementation-would-look-like"
      },
      {
        "depth": 2,
        "title": "Relation to the multi-currency suite",
        "id": "relation-to-the-multi-currency-suite"
      },
      {
        "depth": 2,
        "title": "Related pages",
        "id": "related-pages"
      }
    ],
    "body": "Collateralized stable assets are the proposed institutional path for bringing fiat-pegged settlement assets back to Terra Classic without returning to the failed algorithmic model.\n\nThe relevant product is [Forex Protocol](/forex-protocol/overview/). The underlying proposed technology is the Collateralized Stablecoin Module, or CSM.\n\n## The product thesis\n\nForex Protocol aims to support stable assets backed by external collateral.\n\nThe first proposed asset is EUTC, a Euro-pegged Terra Classic asset backed by collateral such as EURC or USDC according to the source design.\n\nThe institutional thesis is:\n\n> Terra Classic can support decentralized stable-asset utility only if new assets are backed by credible collateral, transparent accounting, safe mint and redemption rules, reliable oracles, sufficient liquidity, audits, and governance-controlled rollout.\n\nThat is the opposite of \"turn the old algorithmic stablecoin back on.\"\n\n## Current status\n\nForex Protocol is not live.\n\n| Area | Status |\n| --- | --- |\n| Governance concept | Accepted as Proposal 12209. |\n| EUTC | Proposed first stable asset. |\n| CSM implementation | Not live on mainnet. |\n| Minting | Not available. |\n| Redemption | Not available. |\n| Production liquidity | Not established. |\n| Audit | Required before serious institutional use. |\n| Wallet support | Required before user-facing use. |\n\nInstitutions should treat this as a proposed product path, not as current settlement infrastructure.\n\n## Why institutions may care\n\nCollateralized stable assets could matter to:\n\n| Institution type | Possible role |\n| --- | --- |\n| Stablecoin issuers | Collateral participation, asset support, liquidity, or integrations. |\n| Payment providers | Local-currency settlement assets for checkout and merchant settlement. |\n| Fintech companies | Multi-currency wallet and remittance-style products. |\n| Market makers | Liquidity between EUTC, LUNC, USTC, USDC, EURC, and external venues. |\n| Custodians | Support for institutional wallets, reserve assets, and reporting. |\n| Exchanges | Listing, deposit, withdrawal, and market support if assets become live. |\n| Corporate treasuries | On-chain currency-denominated balances, subject to risk and compliance review. |\n\nThe opportunity is not just a token. It is the operating system around issuance, reserves, liquidity, compliance, and reporting.\n\n## Minimum institutional requirements\n\nBefore any institution treats a Terra Classic stable asset as production-ready, it should require:\n\n- live audited implementation\n- clear collateral assets\n- clear collateral custody and control model\n- public reserve accounting\n- mint and redeem rules\n- redemption limits and queue behavior\n- oracle source policy\n- emergency pause policy\n- liquidity venues and depth\n- wallet and explorer support\n- accounting and reconciliation tooling\n- governance authority boundaries\n- legal analysis in relevant jurisdictions\n\nIf an asset lacks these, it may still be a useful experiment, but it is not institution-ready.\n\n## Collateral and redemption questions\n\nThe Forex Protocol source describes EURC and USDC collateral paths for EUTC, plus mint and redemption fees.\n\nInstitutions should ask:\n\n- who or what controls the collateral\n- how collateral is verified\n- whether collateral is segregated by asset\n- whether redemptions return same-kind collateral\n- how EUR/USD pricing affects USDC-backed EUTC\n- how mint and redemption fees are accounted for\n- how redemption caps behave during stress\n- how emergency controls are governed\n- whether reserve reports can be independently verified\n\nThese questions are not paperwork. They are the product.\n\n## Governance and legal boundary\n\nTerra Classic governance can approve or reject protocol changes. It does not automatically create a legal issuer, regulated payment institution, fiduciary, trustee, or redemption counterparty.\n\nIf an institutional stable-asset product needs a legal issuer, custodian, reserve administrator, market maker, auditor, or payment institution, those roles must be defined separately.\n\nValidators and community members cannot silently become those legal roles by voting on a proposal.\n\n## What good implementation would look like\n\nA serious Forex Protocol rollout should be staged:\n\n1. publish implementation specification\n2. define collateral custody and accounting\n3. define oracle sources and failure behavior\n4. build testnet implementation\n5. run public tests\n6. complete security review or audit\n7. publish liquidity plan\n8. publish wallet and explorer requirements\n9. submit activation proposal\n10. monitor live performance with public dashboards\n\nSkipping these steps would make institutional adoption unlikely.\n\n## Relation to the multi-currency suite\n\nThe proposed 20+ asset suite should not launch as a symbol list.\n\nEach asset should earn its way into production with:\n\n- real use case\n- collateral support\n- liquidity plan\n- oracle support\n- compliance review\n- operating support\n- governance approval if required\n\nEUTC should be the proof point before broad expansion.\n\n## Related pages\n\n- [Forex Protocol](/forex-protocol/overview/)\n- [Collateral and stable assets](/forex-protocol/collateral-and-stable-assets/)\n- [Multi-currency suite](/institutions/multi-currency-suite/)\n- [Native assets](/institutions/native-assets/)\n- [Requirements and contact](/institutions/requirements-and-contact/)\n",
    "previousSlug": "institutions/native-swap-rails",
    "nextSlug": "institutions/integration-architecture"
  },
  {
    "slug": "institutions/integration-architecture",
    "path": "/institutions/integration-architecture/",
    "sourceFile": "content/docs/institutions/integration-architecture.md",
    "group": "For Institutions",
    "navTitle": "Integration architecture",
    "navDepth": 1,
    "navParent": "institutions/integration-and-risk",
    "navHasChildren": false,
    "navOrder": 85,
    "title": "Integration architecture",
    "description": "Technical integration model for institutions building wallets, payment gateways, analytics, custody, infrastructure, or product support on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs integration architecture",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/integration-architecture.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Integration paths",
        "id": "integration-paths"
      },
      {
        "depth": 2,
        "title": "Recommended production stack",
        "id": "recommended-production-stack"
      },
      {
        "depth": 2,
        "title": "Payment integration layers",
        "id": "payment-integration-layers"
      },
      {
        "depth": 2,
        "title": "Custody and wallet architecture",
        "id": "custody-and-wallet-architecture"
      },
      {
        "depth": 2,
        "title": "Chain data requirements",
        "id": "chain-data-requirements"
      },
      {
        "depth": 2,
        "title": "Observability requirements",
        "id": "observability-requirements"
      },
      {
        "depth": 2,
        "title": "Diagnostics institutions should expose",
        "id": "diagnostics-institutions-should-expose"
      },
      {
        "depth": 2,
        "title": "Security expectations",
        "id": "security-expectations"
      },
      {
        "depth": 2,
        "title": "Related pages",
        "id": "related-pages"
      }
    ],
    "body": "Institutions should treat Terra Classic integration as a production system, not as a wallet button.\n\nThe right architecture depends on whether the institution is building payments, custody, analytics, asset support, exchange infrastructure, treasury tooling, or developer services.\n\n## Integration paths\n\n| Path | Typical institution | Governance needed? |\n| --- | --- | --- |\n| Read-only data integration | Analytics providers, risk teams, research desks. | Usually no. |\n| Wallet support | Wallets, custodians, fintech apps. | Usually no, unless protocol changes are requested. |\n| Payment gateway | PSPs, merchants, fintechs, crypto-native businesses. | Usually no for private gateway logic; yes for protocol-level changes. |\n| Exchange or custody support | Exchanges, custodians, prime brokers. | Usually no for listing/support decisions. |\n| Full-node or endpoint operation | Infrastructure providers, validators, data platforms. | No, unless seeking community funding or official signaling. |\n| Swap Protocol integration | Wallets, gateways, market tools. | Depends on whether the protocol is live and what changes are needed. |\n| Forex Protocol or asset issuance | Stablecoin issuers, fintechs, liquidity providers. | Likely yes for protocol activation, parameters, or asset rollout. |\n\nDo not overuse governance. Private products should not ask governance for permission when they can simply build.\n\n## Recommended production stack\n\nA serious integration should include:\n\n- at least one self-operated node or paid infrastructure provider\n- fallback public endpoints\n- chain status monitoring\n- transaction broadcaster\n- indexer or data pipeline\n- wallet or custody integration\n- transaction reconciliation\n- alerting and incident workflow\n- exportable diagnostics for support\n- compliance and risk controls where relevant\n\nPublic endpoints are useful, but institutions should avoid making one community endpoint a single point of failure.\n\nSee [Public Network Endpoints](/develop/endpoints/) and [Run a Full Node](/full-node/overview/) for baseline infrastructure references.\n\n## Payment integration layers\n\nFor payment gateway builders, split the system into these layers:\n\n| Layer | Responsibility |\n| --- | --- |\n| Product API | Invoice creation, merchant config, refund workflow, and dashboard access. |\n| Pricing | Asset quotes, expiry windows, conversion rates, fees, and spread assumptions. |\n| Wallet | User payment flow, address handling, signing, and transaction broadcast. |\n| Chain monitor | Transaction detection, confirmation, errors, and final settlement state. |\n| Routing | Optional swap or liquidity routing when available. |\n| Reconciliation | Match invoices, hashes, amounts, timestamps, and settlement assets. |\n| Risk | Limits, velocity, suspicious behavior, jurisdiction blocks, and asset disable switches. |\n| Reporting | Merchant exports, audit logs, accounting files, and diagnostics. |\n\nThe blockchain is one layer. The institution still owns the product.\n\n## Custody and wallet architecture\n\nInstitutions should choose an explicit custody model:\n\n| Model | Description |\n| --- | --- |\n| Non-custodial | User signs with their own wallet. Operator never controls user funds. |\n| Custodial | Operator controls user balances and must handle custody, compliance, and internal accounting. |\n| Merchant-directed | User pays directly to merchant-controlled addresses. |\n| Hybrid | Operator coordinates flow but settlement goes to controlled merchant or treasury addresses. |\n\nEach model changes legal obligations, support burden, security requirements, and user risk.\n\n## Chain data requirements\n\nAt minimum, institutional systems usually need:\n\n- latest block height\n- node sync status\n- account balances\n- transaction broadcast status\n- transaction inclusion and result\n- fee estimation\n- staking and delegation state if staking is supported\n- governance proposals and votes if governance is shown\n- oracle and market state if Swap Protocol is integrated\n- collateral and vault state if Forex Protocol becomes live\n\nUse live chain queries where possible rather than static assumptions.\n\n## Observability requirements\n\nInstitutions should monitor:\n\n- node sync height and peer health\n- endpoint error rates\n- transaction broadcast failures\n- average confirmation time\n- fee changes\n- indexer lag\n- wallet provider failures\n- explorer mismatch\n- chain upgrade announcements\n- governance proposals affecting integrated modules\n- oracle participation for swap or stable-asset products\n\nOperational visibility is part of institutional trust.\n\n## Diagnostics institutions should expose\n\nBecause Terra Classic is decentralized, debugging often crosses organizations. A good integration should produce a short diagnostics bundle that can be shared with developers, infrastructure providers, or community support.\n\nInclude:\n\n- timestamp\n- app version\n- network\n- node endpoint\n- latest observed block height\n- transaction hash\n- account address where safe to share\n- error code\n- raw broadcast response\n- indexed transaction result\n- relevant module state\n- browser or device details for wallet issues\n\nThis reduces support chaos and makes community help more effective.\n\n## Security expectations\n\nInstitutions should not rely on community enthusiasm as a security model.\n\nRequired controls may include:\n\n- key management policy\n- hardware signing or custody provider\n- role-based access\n- withdrawal limits\n- transaction simulation\n- address allowlists\n- audit logs\n- dependency scanning\n- incident response plan\n- third-party security review for user-facing products\n\nFor protocol-level products, security review should happen before mainnet activation, not after users discover edge cases.\n\n## Related pages\n\n- [Payment gateway](/institutions/payment-gateway/)\n- [Requirements and contact](/institutions/requirements-and-contact/)\n- [Native swap rails](/institutions/native-swap-rails/)\n- [Collateralized stable assets](/institutions/collateralized-stable-assets/)\n- [Risk and due diligence](/institutions/risk-and-due-diligence/)\n",
    "previousSlug": "institutions/collateralized-stable-assets",
    "nextSlug": "institutions/risk-and-due-diligence"
  },
  {
    "slug": "institutions/risk-and-due-diligence",
    "path": "/institutions/risk-and-due-diligence/",
    "sourceFile": "content/docs/institutions/risk-and-due-diligence.md",
    "group": "For Institutions",
    "navTitle": "Risk and due diligence",
    "navDepth": 1,
    "navParent": "institutions/integration-and-risk",
    "navHasChildren": false,
    "navOrder": 86,
    "title": "Risk and due diligence",
    "description": "Institutional diligence checklist for Terra Classic decentralization, governance, security, liquidity, assets, and integration risk.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Four Years After: State of the Chain Report (2022-2026)",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "institutions-section-2026-06-01",
    "sourcePath": "content/docs/institutions/risk-and-due-diligence.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 3,
    "headings": [
      {
        "depth": 2,
        "title": "Core diligence position",
        "id": "core-diligence-position"
      },
      {
        "depth": 2,
        "title": "Decentralization risk",
        "id": "decentralization-risk"
      },
      {
        "depth": 2,
        "title": "Governance risk",
        "id": "governance-risk"
      },
      {
        "depth": 2,
        "title": "Security assurance risk",
        "id": "security-assurance-risk"
      },
      {
        "depth": 2,
        "title": "Liquidity risk",
        "id": "liquidity-risk"
      },
      {
        "depth": 2,
        "title": "Asset risk",
        "id": "asset-risk"
      },
      {
        "depth": 2,
        "title": "Legal and compliance risk",
        "id": "legal-and-compliance-risk"
      },
      {
        "depth": 2,
        "title": "Infrastructure risk",
        "id": "infrastructure-risk"
      },
      {
        "depth": 2,
        "title": "Due diligence checklist",
        "id": "due-diligence-checklist"
      },
      {
        "depth": 2,
        "title": "What good institutional engagement looks like",
        "id": "what-good-institutional-engagement-looks-like"
      },
      {
        "depth": 2,
        "title": "Institutional conclusion",
        "id": "institutional-conclusion"
      }
    ],
    "body": "Institutional evaluation of Terra Classic should be honest.\n\nThe chain has meaningful strengths: it is still live, decentralized, community-governed, exchange-visible, technically maintained, and connected to a persistent global community. It also has serious institutional gaps around governance quality, security assurance, liquidity depth, operating ownership, and legal representation.\n\nThis page is a diligence checklist, not a rejection letter.\n\n## Core diligence position\n\nTerra Classic should be evaluated as:\n\n> A live decentralized Layer 1 with durable community survival and proposed L1 product paths, but not a company-backed institutional platform with centralized contracts, guaranteed support, or mature institutional assurance.\n\nThat positioning is credible. Pretending otherwise is not.\n\n## Decentralization risk\n\nTerra Classic has no central legal body.\n\nImplications:\n\n- no official sales team\n- no central account manager\n- no entity that can sign on behalf of the chain\n- no single authority that can guarantee governance outcomes\n- no foundation balance sheet standing behind institutional integrations\n- no unified support desk\n\nThis is normal for decentralized chains, but institutions must design around it.\n\nRead [Requirements and contact](/institutions/requirements-and-contact/) before approaching the ecosystem.\n\n## Governance risk\n\nTerra Classic governance is live and powerful, but governance quality is uneven.\n\nRisks include:\n\n- validator-weighted decision making\n- delegator passivity\n- low-signal proposal volume\n- proposal churn\n- weak post-approval accountability\n- missed validator votes\n- funding requests without execution discipline\n- text proposals that create expectations without implementation\n\nInstitutions should not treat a forum comment or informal validator conversation as governance approval.\n\nFor network-level changes, require:\n\n- public proposal discussion\n- clear implementation owner\n- budget and milestone discipline\n- measurable deliverables\n- security and rollback plan\n- final on-chain governance outcome where required\n\n## Security assurance risk\n\nTerra Classic is operationally live, but institutional-grade assurance requires more than uptime.\n\nInstitutions should ask:\n\n- Has the relevant code path been audited after 2022?\n- Is there a public bug bounty?\n- Who maintains the module?\n- What testnet coverage exists?\n- What happens during failed upgrade or chain halt?\n- Who monitors incidents?\n- Where are known risks documented?\n- Which dependencies are critical?\n- Which validators or infrastructure providers are operationally important?\n\nIf an institution is integrating Swap Protocol, Forex Protocol, custody, payments, or new asset support, it should expect additional review.\n\n## Liquidity risk\n\nTerra Classic has market visibility, but institutional liquidity should be tested, not assumed.\n\nInstitutions should evaluate:\n\n- centralized exchange liquidity\n- on-chain DEX liquidity\n- slippage at intended transaction size\n- withdrawal and deposit availability\n- market-maker participation\n- volatility during stress\n- stable-asset liquidity if Forex Protocol launches\n- route capacity if Swap Protocol launches\n\nSmall proof-of-concept payments and institutional treasury flows have very different liquidity needs.\n\n## Asset risk\n\nLUNC, USTC, EUTC, and planned multi-currency assets have different risk profiles.\n\n| Asset type | Main risk |\n| --- | --- |\n| LUNC | Volatile native crypto asset. |\n| USTC | Legacy asset with depeg history and no guaranteed stable redemption. |\n| EUTC | Proposed stable asset, not live today. |\n| Future currency assets | Roadmap direction, not institution-ready assets today. |\n\nInstitutions should not treat roadmap assets as live collateralized stablecoins.\n\nRead [Native assets](/institutions/native-assets/) and [Collateralized stable assets](/institutions/collateralized-stable-assets/).\n\n## Legal and compliance risk\n\nTerra Classic documentation does not provide legal advice.\n\nInstitutions should independently review:\n\n- digital asset classification\n- stablecoin regulation\n- payment services regulation\n- securities or commodities treatment\n- custody obligations\n- sanctions screening\n- AML and transaction monitoring\n- tax and accounting treatment\n- user disclosures\n- jurisdiction-specific restrictions\n\nThe fact that Terra Classic is decentralized does not remove obligations from companies that build products on top of it.\n\n## Infrastructure risk\n\nInstitutions should avoid depending entirely on one endpoint, explorer, wallet, validator, or community maintainer.\n\nReview:\n\n- RPC and LCD redundancy\n- indexer reliability\n- full-node option\n- validator concentration\n- oracle participation\n- relayer dependencies\n- wallet support\n- explorer availability\n- upgrade monitoring\n- incident communication path\n\nFor serious products, run or contract infrastructure instead of relying only on public endpoints.\n\n## Due diligence checklist\n\nBefore serious institutional use, answer:\n\n| Question | Required answer |\n| --- | --- |\n| What exactly are we using Terra Classic for? | Payment, custody, settlement, staking, data, liquidity, governance, or research. |\n| Which assets are involved? | LUNC, USTC, proposed EUTC, or future assets. |\n| Are those assets live? | Confirm mainnet status and wallet support. |\n| Are we relying on stable value? | If yes, identify collateral, redemption, liquidity, and legal structure. |\n| Do we need governance? | If yes, prepare public forum discussion and proposal materials. |\n| Who can sign contracts? | Only specific legal entities, not Terra Classic as a network. |\n| What infrastructure do we control? | Nodes, endpoints, indexers, monitoring, custody, backups. |\n| What are our failure states? | Failed transaction, route disabled, oracle failure, liquidity exhaustion, wallet failure. |\n| What disclosures are required? | Asset volatility, stablecoin limits, custody model, fees, and no official endorsement. |\n| What support path exists? | Internal support first, then infrastructure providers, developers, validators, and public forum. |\n\nIf these answers are weak, the integration is not ready.\n\n## What good institutional engagement looks like\n\nGood engagement is:\n\n- public where network-level legitimacy is needed\n- specific about what is being built\n- honest about what support is requested\n- clear about who funds what\n- explicit about legal responsibility\n- measurable in milestones\n- realistic about liquidity and security\n- prepared for governance rejection or revision\n\nWeak engagement is:\n\n- vague partnership language\n- private promises from people who cannot represent the chain\n- claims of official approval without governance\n- stablecoin marketing without collateral and redemption clarity\n- payment promises without liquidity and compliance design\n- use of Terra Classic's brand without public process\n\n## Institutional conclusion\n\nTerra Classic can be a serious institutional discussion only if its decentralization is explained honestly.\n\nThe opportunity is not \"trust us.\" The opportunity is transparent public infrastructure, public governance, inspectable transactions, and protocol-level products that can become useful if implemented with professional discipline.\n",
    "previousSlug": "institutions/integration-architecture",
    "nextSlug": "institutions/source-and-verification-guide"
  },
  {
    "slug": "institutions/source-and-verification-guide",
    "path": "/institutions/source-and-verification-guide/",
    "sourceFile": "content/docs/institutions/source-and-verification-guide.md",
    "group": "For Institutions",
    "navTitle": "Source and verification",
    "navDepth": 1,
    "navParent": "institutions/integration-and-risk",
    "navHasChildren": false,
    "navOrder": 87,
    "title": "Source and verification",
    "description": "How institutional readers should verify Terra Classic Docs claims without treating the docs site as a live analytics platform.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/institutions/source-and-verification-guide.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "What the docs can verify",
        "id": "what-the-docs-can-verify"
      },
      {
        "depth": 2,
        "title": "What external tools should verify",
        "id": "what-external-tools-should-verify"
      },
      {
        "depth": 2,
        "title": "Due diligence rule",
        "id": "due-diligence-rule"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Institutional readers should use Terra Classic Docs as a source-aware explanation layer, not as a live analytics terminal.\n\nThe docs should clarify product status, risks, and interpretation. Live values should be verified through external data products, explorers, wallets, governance interfaces, market venues, or direct chain queries.\n\n## What the docs can verify\n\nThe docs can help verify:\n\n- whether a product is described as live, proposed, governance-accepted, or historical\n- what source material a page is based on\n- which risks should be considered before integration\n- whether a proposed feature is being presented cautiously\n- where a reader should go for live evidence\n\n## What external tools should verify\n\nExternal tools should verify:\n\n- balances\n- transactions\n- blocks\n- governance vote state\n- validator data\n- prices\n- liquidity\n- market depth\n- live endpoint behavior\n- production wallet support\n\nDo not treat static docs pages as a substitute for current operational data.\n\n## Due diligence rule\n\nFor any Terra Classic integration, separate four questions:\n\n| Question | Where to look |\n| --- | --- |\n| What does the concept mean? | Docs pages. |\n| Is it live or proposed? | Docs status language plus current governance/release evidence. |\n| What are the current values? | External explorers, dashboards, market tools, or direct queries. |\n| What are the risks? | Docs risk pages plus institution-specific review. |\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nConfirm live operational, market, validator, governance, and liquidity data through appropriate external sources.\n",
    "previousSlug": "institutions/risk-and-due-diligence",
    "nextSlug": "develop/quick-start-guide"
  },
  {
    "slug": "develop/quick-start-guide",
    "path": "/develop/quick-start-guide/",
    "sourceFile": "content/docs/develop/quick-start-guide.md",
    "group": "Develop",
    "navTitle": "Quick start guide",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 88,
    "title": "Quick start guide",
    "description": "Choose the right Terra Classic developer path, connect safely, and know which deeper guide to use next.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs owner-provided draft",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "owner-draft-2026-05-29",
    "sourcePath": "content/docs/develop/quick-start-guide.md",
    "sourceDate": "2026-05-29",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "What Terra Classic is for developers",
        "id": "what-terra-classic-is-for-developers"
      },
      {
        "depth": 2,
        "title": "Choose your developer path",
        "id": "choose-your-developer-path"
      },
      {
        "depth": 2,
        "title": "Before you send a transaction",
        "id": "before-you-send-a-transaction"
      },
      {
        "depth": 3,
        "title": "Burn tax can affect transfers",
        "id": "burn-tax-can-affect-transfers"
      },
      {
        "depth": 3,
        "title": "Tax exemptions exist",
        "id": "tax-exemptions-exist"
      },
      {
        "depth": 3,
        "title": "Public endpoints are not production infrastructure",
        "id": "public-endpoints-are-not-production-infrastructure"
      },
      {
        "depth": 3,
        "title": "Legacy market-swap assumptions are dangerous",
        "id": "legacy-market-swap-assumptions-are-dangerous"
      },
      {
        "depth": 3,
        "title": "Simulation is part of the product",
        "id": "simulation-is-part-of-the-product"
      },
      {
        "depth": 2,
        "title": "First 30-minute path",
        "id": "first-30-minute-path"
      },
      {
        "depth": 2,
        "title": "Minimal TypeScript starter",
        "id": "minimal-typescript-starter"
      },
      {
        "depth": 2,
        "title": "Local development",
        "id": "local-development"
      },
      {
        "depth": 2,
        "title": "Smart contracts",
        "id": "smart-contracts"
      },
      {
        "depth": 2,
        "title": "Python and backend automation",
        "id": "python-and-backend-automation"
      },
      {
        "depth": 2,
        "title": "Native swaps, DEX routes, CW20, and IBC",
        "id": "native-swaps-dex-routes-cw20-and-ibc"
      },
      {
        "depth": 2,
        "title": "Before mainnet",
        "id": "before-mainnet"
      },
      {
        "depth": 2,
        "title": "Common mistakes",
        "id": "common-mistakes"
      },
      {
        "depth": 3,
        "title": "Treating Terra Classic as old Terra documentation",
        "id": "treating-terra-classic-as-old-terra-documentation"
      },
      {
        "depth": 3,
        "title": "Treating public endpoints as reliable production infrastructure",
        "id": "treating-public-endpoints-as-reliable-production-infrastructure"
      },
      {
        "depth": 3,
        "title": "Hardcoding fees and tax behavior",
        "id": "hardcoding-fees-and-tax-behavior"
      },
      {
        "depth": 3,
        "title": "Skipping simulation",
        "id": "skipping-simulation"
      },
      {
        "depth": 3,
        "title": "Building swap flows from memory",
        "id": "building-swap-flows-from-memory"
      },
      {
        "depth": 2,
        "title": "Where to go next",
        "id": "where-to-go-next"
      }
    ],
    "body": "This guide is the first pass for developers who want to build on Terra Classic without reading every reference page first.\n\nUse it to understand the chain, choose your path, make your first safe integration decision, and move into the dedicated guides when you need exact commands or deeper examples.\n\n> **Important**\n>\n> Terra Classic is a community-maintained blockchain. Public infrastructure, SDK support, wallet behavior, tax parameters, and governance-controlled settings can change. Verify live chain state before deploying production applications.\n\n## What Terra Classic is for developers\n\nTerra Classic is a Cosmos SDK / CometBFT blockchain with CosmWasm smart contracts, IBC connectivity, staking, governance, oracle infrastructure, and Terra Classic-specific tax behavior.\n\nThe practical developer constants are:\n\n| Concept | Terra Classic value |\n| --- | --- |\n| Mainnet chain ID | `columbus-5` |\n| Mainnet address prefix | `terra` |\n| Native staking and governance asset | LUNC |\n| On-chain LUNC denomination | `uluna` |\n| Unit conversion | `1 LUNC = 1,000,000 uluna` |\n| Common testnet | `rebel-2` |\n| Common local chain ID | `localterra` or `localnet` |\n\nIf you are coming from Ethereum, use this mental model:\n\n| Ethereum-style concept | Terra Classic equivalent |\n| --- | --- |\n| Solidity smart contract | CosmWasm contract, usually written in Rust |\n| ERC20 token | CW20 token |\n| MetaMask | Keplr, Galaxy Station, Orbitar, Cosmostation, LUNC Dash |\n| Web3.js / ethers.js | CosmES, Terra Classic SDK, LCD/RPC/gRPC APIs |\n| Ganache / local chain | Terra Classic localnet |\n| Contract deployment | Store WASM code, then instantiate contract |\n| Contract call | `MsgExecuteContract` |\n| Native token transfer | `MsgSend` |\n| Cross-chain transfer | IBC transfer |\n\n## Choose your developer path\n\nMost builders should start with one of these paths.\n\n| Path | Use it when you want to build | Start here |\n| --- | --- | --- |\n| Frontend dApp | Wallet connection, balances, signing, staking, governance, DEX, or contract UX | [CosmES SDK](/develop/cosmes/cosmes/) |\n| Smart contract | On-chain logic, vaults, token contracts, DeFi primitives, escrow, games, or governance tools | [Smart contracts](/develop/smart-contracts/overview/) |\n| Backend or automation | Bots, scripts, indexers, monitoring, treasury jobs, analytics, or integrations | [Terra Py](/develop/terra-py/terra-py/) |\n| Infrastructure | Nodes, endpoints, validator tooling, local testing, or production-grade RPC/LCD access | [Run a full Terra node](/full-node/overview/) |\n\nIf you are not sure which path fits, start with a frontend read-only integration. Reading a balance through an RPC endpoint teaches you the network model without risking funds.\n\n## Before you send a transaction\n\nTerra Classic follows standard Cosmos transaction patterns, but several chain-specific details can break naive integrations.\n\n### Burn tax can affect transfers\n\nTerra Classic uses the `x/tax` module. Some transfers can be taxed, and the receiver may receive less than the entered send amount.\n\nDo not hardcode tax assumptions. Query current parameters or simulate when your app shows fees, accounting values, or expected received amounts.\n\nRead the detailed guide: [Tx best practices](/develop/classic-transaction-behavior/).\n\n### Tax exemptions exist\n\nSome addresses or zones can be exempt from burn tax. This matters for exchanges, custody flows, treasury wallets, smart contract workflows, and service wallets.\n\nIf the final received amount matters, check taxability before the user confirms.\n\n### Public endpoints are not production infrastructure\n\nPublic RPC, LCD, FCD, and gRPC endpoints are useful for development and light workloads. Production apps need redundancy, monitoring, and preferably dedicated infrastructure.\n\nUse the maintained endpoint list: [Public Network Endpoints](/develop/endpoints/).\n\n### Legacy market-swap assumptions are dangerous\n\nDo not build against pre-2022 algorithmic mint/burn behavior or old Terra market-swap assumptions.\n\nNative LUNC and USTC swaps are documented under [Swap Protocol](/swap-protocol/overview/). General token swaps should use active DEX contracts and explicit slippage controls.\n\n### Simulation is part of the product\n\nBefore broadcasting, simulate transactions when the app needs reliable gas estimates, fee previews, or clearer failure handling.\n\nAt minimum, production flows should log:\n\n- transaction hash\n- raw log\n- gas used\n- endpoint used\n- chain ID\n- wallet or backend account\n- failure code and message\n\n## First 30-minute path\n\nThis is the shortest useful path for a developer new to Terra Classic.\n\n1. Pick `columbus-5` for mainnet, `rebel-2` for testnet, or a local chain ID from localnet output.\n2. Use a public endpoint only for development.\n3. Connect with CosmES or Terra Py.\n4. Read a wallet balance.\n5. Convert display units correctly: `1000000uluna` is `1 LUNC`.\n6. Fetch current gas prices before sending.\n7. Read the transaction behavior guide before showing final fee or received-amount estimates.\n8. Send only a small test transaction first.\n9. Run localnet before contract development or repeatable integration testing.\n10. Move deeper into the exact guide for your path.\n\n## Minimal TypeScript starter\n\nInstall CosmES:\n\n```bash\nyarn add @goblinhunt/cosmes\n```\n\nFor TypeScript projects, use modern module resolution:\n\n```json\n{\n  \"compilerOptions\": {\n    \"moduleResolution\": \"bundler\"\n  }\n}\n```\n\nRead a native balance:\n\n```ts\nimport { getNativeBalances } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst address = \"terra1...\";\n\nasync function main(): Promise<void> {\n  const balances = await getNativeBalances(RPC, { address });\n  console.log(balances);\n}\n\nmain().catch(console.error);\n```\n\nConnect Keplr:\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function connect(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n\n  const connected = wallets.get(CHAIN_ID);\n  console.log(\"address\", connected?.address);\n}\n\nconnect().catch(console.error);\n```\n\nFor signing, broadcasting, mnemonic wallets, and wallet-specific setup, continue with [CosmES SDK](/develop/cosmes/cosmes/).\n\n## Local development\n\nUse localnet when you need a private chain you can reset, test against, and break safely.\n\nLocalnet is useful for:\n\n- contract development\n- integration testing\n- frontend transaction testing\n- module experiments\n- reproducible QA\n- demos\n\nDo not keep localnet setup details in your head from this page. Use the dedicated guide: [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/).\n\n## Smart contracts\n\nTerra Classic supports CosmWasm smart contracts.\n\nA typical contract workflow is:\n\n1. Install Rust and CosmWasm tooling.\n2. Start from a CosmWasm template.\n3. Build and optimize the WASM artifact.\n4. Store code on localnet or testnet.\n5. Instantiate a contract.\n6. Execute and query it.\n7. Publish schemas, addresses, admin permissions, and risk assumptions.\n\nUse the dedicated smart contract section for exact commands: [Smart contracts](/develop/smart-contracts/overview/).\n\n## Python and backend automation\n\nUse Python when you are building scripts, scheduled jobs, analytics, monitoring, treasury automation, or backend services.\n\nStart with [Terra Py](/develop/terra-py/terra-py/).\n\nBackend services should also read [Tx best practices](/develop/classic-transaction-behavior/) before broadcasting transactions automatically.\n\n## Native swaps, DEX routes, CW20, and IBC\n\nThese are not first-step integrations. They need more careful assumptions.\n\n| Integration type | Read first |\n| --- | --- |\n| Native LUNC and USTC swaps | [Swap Protocol developer reference](/swap-protocol/developer-reference/) |\n| General DEX routes | DEX contract documentation and [Tx best practices](/develop/classic-transaction-behavior/) |\n| CW20 tokens | [Manage CW20 tokens](/develop/smart-contracts/manage-cw20-tokens/) |\n| IBC transfers | [IBC module specification](/develop/module-specifications/spec-ibc/) and current channel data |\n| Tax-sensitive flows | [Tx best practices](/develop/classic-transaction-behavior/) and [Fees](/learn/fees/) |\n\nFor IBC, verify the channel, destination chain, relayer activity, timeout behavior, and recovery path. A historical channel existing does not prove that the route is healthy today.\n\n## Before mainnet\n\nBefore shipping a Terra Classic app to production, confirm:\n\n- the app uses the correct chain ID\n- display amounts and micro-denom amounts are separated\n- gas prices are refreshed or deliberately configured\n- transaction simulation is used where accuracy matters\n- tax behavior is understood for the transaction type\n- tax exemption status is checked where needed\n- public endpoints are not a single point of failure\n- tx hash, raw logs, gas used, and errors are persisted\n- wallet rejection and broadcast failure are handled separately\n- smart contracts have been tested locally and reviewed\n- contract addresses, schemas, admin permissions, and risk assumptions are documented\n- users can see when they are using mainnet\n\n## Common mistakes\n\n### Treating Terra Classic as old Terra documentation\n\nSome old Terra materials describe behavior that is not active on Terra Classic today. Verify current chain behavior before building.\n\n### Treating public endpoints as reliable production infrastructure\n\nPublic endpoints are best-effort access surfaces. Production systems need redundancy and monitoring.\n\n### Hardcoding fees and tax behavior\n\nGas prices, tax parameters, and governance-controlled settings can change. Build apps that can adapt to current chain state.\n\n### Skipping simulation\n\nSimulation catches many gas, fee, message, and contract errors before a user signs or before a backend submits a transaction.\n\n### Building swap flows from memory\n\nNative Swap Protocol, DEX contracts, CW20 transfers, and IBC transfers have different assumptions. Use the relevant docs and verify live state.\n\n## Where to go next\n\n| Need | Guide |\n| --- | --- |\n| Maintained endpoint list | [Public Network Endpoints](/develop/endpoints/) |\n| Safe transaction behavior | [Tx best practices](/develop/classic-transaction-behavior/) |\n| TypeScript SDK path | [CosmES SDK](/develop/cosmes/cosmes/) |\n| Python SDK path | [Terra Py](/develop/terra-py/terra-py/) |\n| Local private chain | [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/) |\n| Contract development | [Smart contracts](/develop/smart-contracts/overview/) |\n| CW20 token workflows | [Manage CW20 tokens](/develop/smart-contracts/manage-cw20-tokens/) |\n| Native LUNC and USTC swaps | [Swap Protocol](/swap-protocol/overview/) |\n| Module-level behavior | [Module specifications](/develop/module-specifications/module-specifications/) |\n| Builder overview | [Builder tooling](/learn/builder-tooling/) |\n\nTerra Classic already has the core pieces a developer needs: a running Cosmos-based chain, smart contracts, wallets, public endpoints, IBC, staking, governance, and community-maintained tooling. The goal is to turn those pieces into clear products that users can actually understand and use.\n",
    "previousSlug": "institutions/source-and-verification-guide",
    "nextSlug": "develop/current-vs-proposed-behavior"
  },
  {
    "slug": "develop/current-vs-proposed-behavior",
    "path": "/develop/current-vs-proposed-behavior/",
    "sourceFile": "content/docs/develop/current-vs-proposed-behavior.md",
    "group": "Develop",
    "navTitle": "Current vs proposed",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 89,
    "title": "Current vs proposed",
    "description": "How builders should distinguish live Terra Classic behavior from proposed product designs and historical Terra mechanics.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/develop/current-vs-proposed-behavior.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Current behavior",
        "id": "current-behavior"
      },
      {
        "depth": 2,
        "title": "Proposed behavior",
        "id": "proposed-behavior"
      },
      {
        "depth": 2,
        "title": "Historical behavior",
        "id": "historical-behavior"
      },
      {
        "depth": 2,
        "title": "Builder rule",
        "id": "builder-rule"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "Builders should separate current Terra Classic behavior from proposed designs and historical Terra mechanics.\n\nThis is especially important for swaps, USTC, tax behavior, burns, and stable-asset products.\n\n## Current behavior\n\nCurrent behavior is what an application can rely on after checking the live chain, supported wallets, current endpoints, and deployed software.\n\nExamples include:\n\n- LUNC transfers\n- USTC transfers as a legacy asset\n- staking and delegation\n- governance voting\n- CosmWasm contract execution\n- node, RPC, LCD, and gRPC access\n\nApplications should still handle chain changes defensively.\n\n## Proposed behavior\n\nProposed behavior is described in governance, product, or design material, but should not be assumed live.\n\nExamples include:\n\n- Forex Protocol / Collateralized Stablecoin Module\n- Market Module 2.0 / Swap Protocol unless production deployment is documented\n- future multi-currency stable-asset rails\n\nProposed behavior can be important for planning, but production code should not rely on it until implementation and activation are verified.\n\n## Historical behavior\n\nHistorical Terra behavior is useful context, but dangerous if treated as current behavior.\n\nExamples include:\n\n- old algorithmic mint/burn assumptions\n- old stablecoin peg assumptions\n- pre-collapse market-module behavior\n- historical Treasury policy mechanics that no longer affect practical transaction behavior\n\n## Builder rule\n\nBefore integrating any behavior, ask:\n\n| Question | Why it matters |\n| --- | --- |\n| Is this live today? | Prevents building against product names instead of deployed features. |\n| Is it proposed but not implemented? | Prevents exposing unavailable flows to users. |\n| Is it historical? | Prevents old Terra assumptions from entering Terra Classic products. |\n| Is the source current? | Prevents stale docs from becoming application logic. |\n| Is live data needed? | Use explorers, endpoints, or ecosystem tools instead of static docs. |\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nVerify production behavior through current chain state, releases, endpoints, and supported tooling.\n",
    "previousSlug": "develop/quick-start-guide",
    "nextSlug": "develop/how-to/localnet/terra-core-localnet"
  },
  {
    "slug": "develop/how-to/localnet/terra-core-localnet",
    "path": "/develop/how-to/localnet/terra-core-localnet/",
    "sourceFile": "content/docs/develop/how-to/localnet/terra-core-localnet.md",
    "group": "Develop",
    "navTitle": "Run Terra Classic localnet",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 90,
    "title": "Run Terra Classic localnet",
    "description": "Spin up a multi-validator Terra Classic Core network locally with `make localnet-start`.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/how-to/localnet/terra-core-localnet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Prerequisites",
        "id": "prerequisites"
      },
      {
        "depth": 2,
        "title": "Clone Terra Classic Core",
        "id": "clone-terra-classic-core"
      },
      {
        "depth": 2,
        "title": "Start localnet",
        "id": "start-localnet"
      },
      {
        "depth": 2,
        "title": "Typical local endpoints",
        "id": "typical-local-endpoints"
      },
      {
        "depth": 2,
        "title": "Chain ID",
        "id": "chain-id"
      },
      {
        "depth": 2,
        "title": "Using localnet with CosmES",
        "id": "using-localnet-with-cosmes"
      },
      {
        "depth": 2,
        "title": "Using localnet for contracts",
        "id": "using-localnet-for-contracts"
      },
      {
        "depth": 2,
        "title": "Tips",
        "id": "tips"
      },
      {
        "depth": 2,
        "title": "Related docs",
        "id": "related-docs"
      }
    ],
    "body": "Use localnet when you want a private Terra Classic network that you can reset, test against, and break safely.\n\nLocalnet is the right environment for contract development, integration testing, transaction simulation, demos, and reproducible QA. It is not a replacement for testnet or mainnet validation.\n\n## Prerequisites\n\nInstall:\n\n- git\n- make\n- Docker\n- Docker Compose\n\nUse a machine with 16-32 GB RAM when possible. Local multi-validator networks can be heavy on smaller machines.\n\n## Clone Terra Classic Core\n\n```bash\ngit clone https://github.com/classic-terra/core.git terra-core\ncd terra-core\n```\n\n## Start localnet\n\n```bash\nmake localnet-start\n```\n\nThis starts a multi-validator local Terra Classic network with RPC, LCD, and gRPC endpoints. Keep the process running while you develop.\n\n## Typical local endpoints\n\n```text\nRPC:  http://localhost:26657\nLCD:  http://localhost:1317\ngRPC: http://localhost:9090\n```\n\nIf these ports are already in use, stop the conflicting process or change the Terra Core localnet configuration.\n\n## Chain ID\n\nCommon local chain IDs are:\n\n```text\nlocalterra\n```\n\nor:\n\n```text\nlocalnet\n```\n\nCheck your terminal output and use the exact chain ID shown by your local setup. SDK and wallet configuration must match the running local chain.\n\n## Using localnet with CosmES\n\nExample Keplr setup against localnet:\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\nconst wallets = await controller.connect(WalletType.EXTENSION, [\n  {\n    chainId: \"localterra\",\n    rpc: \"http://localhost:26657\",\n    gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  },\n]);\n\nconst connected = wallets.get(\"localterra\");\nconsole.log(\"address\", connected?.address);\n```\n\n> **Warning**\n>\n> Add the local chain information to Keplr before connecting. If Keplr has a different chain ID, RPC URL, or denomination configured, wallet connection and signing can fail.\n\n## Using localnet for contracts\n\nFor contract workflows, use the same `Msg*` transactions as on mainnet or testnet. Only the chain ID, endpoints, and local keys change.\n\nTypical flow:\n\n1. Start localnet.\n2. Confirm the local chain ID.\n3. Build and optimize the contract.\n4. Store code with `terrad tx wasm store`.\n5. Instantiate the contract.\n6. Execute and query the contract.\n7. Reset localnet when you need a clean state.\n\nFor contract setup and deployment steps, continue with [Smart contracts](/develop/smart-contracts/overview/).\n\n## Tips\n\n- Keep localnet running in a separate terminal while developing.\n- Use localnet for repeatable tests before using testnet or mainnet.\n- Do not assume local gas, tax, liquidity, or oracle behavior exactly matches public networks.\n- If a wallet cannot connect, verify chain ID, RPC URL, address prefix, and gas denom.\n- If transaction behavior matters, test the same flow on `rebel-2` or with tiny mainnet amounts before production release.\n\n## Related docs\n\n- [Quick start guide](/develop/quick-start-guide/)\n- [Tx best practices](/develop/classic-transaction-behavior/)\n- [CosmES SDK](/develop/cosmes/cosmes/)\n- [Smart contracts](/develop/smart-contracts/overview/)\n",
    "previousSlug": "develop/current-vs-proposed-behavior",
    "nextSlug": "develop/classic-transaction-behavior"
  },
  {
    "slug": "develop/classic-transaction-behavior",
    "path": "/develop/classic-transaction-behavior/",
    "sourceFile": "content/docs/develop/classic-transaction-behavior.md",
    "group": "Develop",
    "navTitle": "Tx best practices",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 91,
    "title": "Tx best practices",
    "description": "Practical guidance for burn tax, Tax2Gas, tax-free contract funding, and safe Terra Classic transaction flows.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/classic-transaction-behavior.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Transaction best practices",
        "id": "transaction-best-practices"
      },
      {
        "depth": 2,
        "title": "What is specific to Terra Classic?",
        "id": "what-is-specific-to-terra-classic"
      },
      {
        "depth": 2,
        "title": "Network access",
        "id": "network-access"
      },
      {
        "depth": 2,
        "title": "Optional preflight checks",
        "id": "optional-preflight-checks"
      },
      {
        "depth": 2,
        "title": "Burn tax and Tax2Gas",
        "id": "burn-tax-and-tax2gas"
      },
      {
        "depth": 2,
        "title": "Tax exemption support",
        "id": "tax-exemption-support"
      },
      {
        "depth": 2,
        "title": "Contract calls with funds",
        "id": "contract-calls-with-funds"
      },
      {
        "depth": 2,
        "title": "Disabled market swap behaviour",
        "id": "disabled-market-swap-behaviour"
      },
      {
        "depth": 2,
        "title": "Suggested transaction flow",
        "id": "suggested-transaction-flow"
      },
      {
        "depth": 2,
        "title": "Frontend integration guidance",
        "id": "frontend-integration-guidance"
      },
      {
        "depth": 2,
        "title": "Backend integration guidance",
        "id": "backend-integration-guidance"
      },
      {
        "depth": 2,
        "title": "Common mistakes",
        "id": "common-mistakes"
      },
      {
        "depth": 3,
        "title": "Hardcoding gas prices",
        "id": "hardcoding-gas-prices"
      },
      {
        "depth": 3,
        "title": "Assuming every transfer needs a tax preflight",
        "id": "assuming-every-transfer-needs-a-tax-preflight"
      },
      {
        "depth": 3,
        "title": "Ignoring tax exemption routes",
        "id": "ignoring-tax-exemption-routes"
      },
      {
        "depth": 3,
        "title": "Treating legacy swap docs as active behaviour",
        "id": "treating-legacy-swap-docs-as-active-behaviour"
      },
      {
        "depth": 3,
        "title": "Skipping simulation",
        "id": "skipping-simulation"
      },
      {
        "depth": 3,
        "title": "Trusting public infrastructure for production",
        "id": "trusting-public-infrastructure-for-production"
      },
      {
        "depth": 2,
        "title": "Troubleshooting checklist",
        "id": "troubleshooting-checklist"
      },
      {
        "depth": 2,
        "title": "Related docs",
        "id": "related-docs"
      }
    ],
    "body": "## Transaction best practices\n\nTerra Classic follows standard Cosmos transaction flows, but several chain-specific rules affect how applications should build, simulate, and broadcast transactions.\n\nThis guide focuses on the behaviours that most often surprise integrators on Classic mainnet (`columbus-5`) and testnet (`rebel-2`).\n\n## What is specific to Terra Classic?\n\nWhen integrating with Terra Classic, keep these points in mind:\n\n- transfers can be affected by the burn tax\n- tax handling can vary depending on current Tax2Gas rules and governance changes\n- some addresses and zones are exempt from burn tax\n- legacy market swap paths remain disabled on Classic\n- public infrastructure is suitable for development, not heavy production workloads\n\nBefore assuming fee or transfer behaviour, always verify the current on-chain parameters.\n\n## Network access\n\nTerra Classic integrations usually rely on:\n\n- LCD for REST queries and tax-related lookups\n- RPC for chain state, CometBFT queries, and wallet-backed transaction flows\n- FCD for convenience endpoints such as suggested gas prices\n- gRPC for typed service integrations and backend tooling\n\nUse the maintained endpoint list here: [/docs/develop/endpoints](/develop/endpoints/)\n\n## Optional preflight checks\n\nA production-grade integration may query live chain data before building transactions when the app needs precise fee previews, sender-side tax handling, or received-amount estimates.\n\nUseful preflight checks include:\n\n- tax parameters from the LCD API\n- burn tax rate from the LCD API\n- tax exemption registry lookups from the LCD API\n- suggested gas prices from the FCD gas price endpoint\n\nSee the exact endpoints in [/docs/develop/endpoints](/develop/endpoints/).\n\nTypical optional checks:\n\n1. Fetch current gas prices.\n2. Fetch current tax parameters.\n3. Check whether sender and recipient are taxable when the UX depends on it.\n4. Simulate the transaction when the app needs a tighter estimate.\n5. Broadcast only after confirming final fee assumptions.\n\n## Burn tax and Tax2Gas\n\nTerra Classic applies burn tax through the `x/tax` flow on taxable transfers.\n\nImportant consequences for integrators:\n\n- the amount received by the destination may differ from the amount the sender intended to transfer\n- in some paths, tax can be charged through reverse-charge handling rather than simple top-level deduction\n- wallet UIs and backend services should not hardcode a single tax formula\n- governance changes can alter practical fee behaviour without requiring application code changes\n\nFor many basic transfers, apps do not need to query taxability before broadcasting because the tax is automatically deducted on-chain. Preflight checks are mainly useful when the app wants to show the effect on the received amount or intentionally handle the tax on the sender side.\n\nIf your app shows transfer previews, present the result as an estimate unless you have just simulated against current chain state.\n\nSee also: [/docs/learn/fees](/learn/fees/)\n\n## Tax exemption support\n\nSome accounts or zones can be exempt from burn tax.\n\nThis matters for:\n\n- exchange and custody flows\n- treasury operations\n- contract-controlled transfers\n- internal service wallets\n\nBefore treating a transfer as taxable in the UI, query the tax exemption registry through the LCD API.\n\nIf your app shows fee or received-amount estimates, this check should happen before the final confirmation screen.\n\nFor the current registry endpoints and examples, see the [Tax exemption registry](/learn/fees/#tax-exemption-registry) section in the fees guide.\n\n## Contract calls with funds\n\nSending funds to a contract is tax-free on Terra Classic.\n\nThat means contract execution flows should not be treated the same way as standard taxable wallet-to-wallet transfers when calculating expected outcomes in the UI.\n\n## Disabled market swap behaviour\n\nClassic still exposes historical module concepts related to swaps, spreads, and Tobin tax, but the original market swap path is disabled.\n\nDo not build new application flows that depend on:\n\n- native market module swap UX from legacy Terra\n- algorithmic LUNC-stable swap assumptions\n- old economic behaviour described in pre-collapse Terra materials\n\nFor asset exchange, rely on currently active dApps and liquidity venues instead of legacy protocol swap expectations.\n\n## Suggested transaction flow\n\nA safe integration flow looks like this:\n\n1. Resolve network and transport choice from configuration.\n2. Fetch current gas prices.\n3. Optionally fetch tax parameters when the app needs them for UX or accounting.\n4. Optionally check taxability for the sender and recipient when relevant.\n5. Build the unsigned transaction.\n6. Simulate gas usage when the app needs a tighter estimate.\n7. Apply a gas adjustment margin.\n8. Show the user the final estimated cost.\n9. Broadcast the transaction.\n10. Poll or subscribe for confirmation.\n\n## Frontend integration guidance\n\nFrontend apps should:\n\n- keep chain ID explicit (`columbus-5` or `rebel-2`)\n- separate display amounts from micro-denom on-chain amounts\n- avoid assuming fixed gas prices\n- avoid assuming all `MsgSend` flows are taxed identically\n- treat contract calls with attached funds separately from taxable wallet-to-wallet sends\n- handle wallet rejection and broadcast failure separately\n\nA useful UX pattern is:\n\n- preflight fetch\n- simulation\n- confirmation modal\n- broadcast\n- confirmation tracking by tx hash\n\n## Backend integration guidance\n\nBackend services should:\n\n- avoid depending on a single public endpoint\n- use retries with backoff for LCD and RPC queries\n- prefer dedicated infrastructure for production\n- record both requested transfer amount and actual on-chain result\n- distinguish taxable transfers from tax-free contract funding flows\n- persist tx hash, code, raw log, and gas used for debugging\n\nIf you operate automated jobs, add alerts for:\n\n- sudden gas price changes\n- changed burn tax parameters\n- endpoint instability\n- repeated out-of-gas or insufficient-fee failures\n\n## Common mistakes\n\n### Hardcoding gas prices\n\nGas prices should be refreshed from a live source instead of being baked into code indefinitely.\n\n### Assuming every transfer needs a tax preflight\n\nBasic transfers do not require an explicit tax query to succeed. Preflight checks are mostly for UX precision and accounting.\n\n### Ignoring tax exemption routes\n\nTwo transfers with the same amount can behave differently depending on sender and recipient exemption status.\n\n### Treating legacy swap docs as active behaviour\n\nOld Terra documentation often describes protocol flows that do not reflect current Classic behaviour.\n\n### Skipping simulation\n\nBroadcasting without simulation increases the chance of underpriced or failed transactions.\n\n### Trusting public infrastructure for production\n\nPublic nodes are fine for development, but production systems should run their own infrastructure or use a dedicated provider.\n\n## Troubleshooting checklist\n\nIf a transaction fails unexpectedly:\n\n- confirm the chain ID\n- verify account sequence and wallet state\n- refresh gas prices\n- re-check tax parameters\n- check sender and recipient taxability if the UX or accounting depends on it\n- simulate again\n- inspect tx logs and error codes\n- retry against another healthy endpoint\n\n## Related docs\n\n- [/docs/develop/endpoints](/develop/endpoints/)\n- [/docs/learn/fees](/learn/fees/)\n- [/docs/develop/module-specifications/auth](/develop/module-specifications/spec-auth/)\n- [/docs/develop/module-specifications/taxexemption](/develop/module-specifications/spec-taxexemption/)\n- [/docs/develop/module-specifications/feegrant](/develop/module-specifications/spec-feegrant/)\n",
    "previousSlug": "develop/how-to/localnet/terra-core-localnet",
    "nextSlug": "learn/builder-tooling"
  },
  {
    "slug": "learn/builder-tooling",
    "path": "/learn/builder-tooling/",
    "sourceFile": "content/docs/learn/builder-tooling.md",
    "group": "Develop",
    "navTitle": "Builder tooling",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": true,
    "navOrder": 92,
    "title": "Builder tooling",
    "description": "Essential SDKs and references for building Terra Classic dApps with modern tooling.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/builder-tooling.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Recommended resources",
        "id": "recommended-resources"
      }
    ],
    "body": "Terra Classic supports CosmWasm smart contracts, IBC integrations, and a growing ecosystem of TypeScript tooling. Use modern CI/CD workflows and TypeScript-first SDKs to ship safely.\n\n## Recommended resources\n\n- [@goblinhunt/cosmes](https://www.npmjs.com/package/@goblinhunt/cosmes) — Classic-focused JavaScript SDK covering LCD, RPC, gRPC, and CosmWasm helpers with modern typings.\n- [Terra Classic LCD schema](https://terra-classic-lcd.publicnode.com/swagger/index.html) — OpenAPI specification for primary LCD endpoints, ideal for generated clients.\n- [CosmWasm Contracts](https://github.com/CosmWasm/cosmwasm/tree/main/contracts) — Sample contracts for CosmWasm to learn and expand on.\n",
    "previousSlug": "develop/classic-transaction-behavior",
    "nextSlug": "develop/cosmes/cosmes"
  },
  {
    "slug": "develop/cosmes/cosmes",
    "path": "/develop/cosmes/cosmes/",
    "sourceFile": "content/docs/develop/cosmes/cosmes.md",
    "group": "Develop",
    "navTitle": "CosmES SDK",
    "navDepth": 1,
    "navParent": "learn/builder-tooling",
    "navHasChildren": true,
    "navOrder": 93,
    "title": "CosmES SDK",
    "description": "Use @goblinhunt/cosmes for Terra Classic TypeScript apps.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Network endpoints",
        "id": "network-endpoints"
      },
      {
        "depth": 2,
        "title": "Wallets",
        "id": "wallets"
      },
      {
        "depth": 2,
        "title": "Install the SDK",
        "id": "install-the-sdk"
      },
      {
        "depth": 2,
        "title": "Quick start",
        "id": "quick-start"
      },
      {
        "depth": 2,
        "title": "Send tokens example",
        "id": "send-tokens-example"
      }
    ],
    "body": "> **Under development**\n>\n> This section of the documentation is still under development. If you experience issues with the mentioned steps, please open an issue on the [GitHub repository](https://github.com/terra-classic-io/website/issues) or submit a Pull Request with a fix.\n\nCosmES is a modern, tree-shakeable, pure-ESM SDK for Cosmos SDK chains. Use the `@goblinhunt/cosmes` fork for Terra Classic projects.\n\n## Network endpoints\n\n| Purpose | Endpoint |\n| --- | --- |\n| FCD-compatible API | [https://terra-classic-fcd.publicnode.com](https://terra-classic-fcd.publicnode.com) |\n| RPC (mainnet) | [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com) |\n| RPC (rebel-2) | [https://rpc.luncblaze.com](https://rpc.luncblaze.com) |\n\n> **Tip**\n> PublicNode endpoints are suitable for development. For production workloads, operate your own infrastructure or purchase private access. Binodes provides backup endpoints at `https://api-lunc-rpc.binodes.com` (RPC).\n\n## Wallets\n\n- Galaxy Station (Hexxagon)\n- Keplr\n- Orbitar\n- Cosmostation\n- LUNC Dash mobile\n\nCosmES includes controllers for Station, Keplr, Galaxy Station, LUNC Dash, Cosmostation, and a programmatic `MnemonicWallet`.\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\nconst wallets = await controller.connect(WalletType.EXTENSION, [\n  {\n    chainId: \"columbus-5\",\n    rpc: \"https://terra-classic-rpc.publicnode.com\",\n    gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  },\n]);\nconst connected = wallets.get(\"columbus-5\");\n```\n\n## Install the SDK\n\n```bash\nyarn add @goblinhunt/cosmes\n```\n\nFor TypeScript projects, enable modern module resolution:\n\n```json\n{\n  \"compilerOptions\": {\n    \"moduleResolution\": \"bundler\"\n  }\n}\n```\n\nIf you use Vite, define `global` for WalletConnect v1 compatibility (remove when no longer required):\n\n```ts\n// vite.config.ts\nimport { defineConfig } from \"vite\";\n\nexport default defineConfig({\n  define: { global: \"window\" },\n});\n```\n\nWhen connecting Station through WalletConnect v1, polyfill `Buffer`:\n\n```ts\n// polyfill.ts\nimport { Buffer } from \"buffer\";\n\n(window as unknown as { Buffer: typeof Buffer }).Buffer = Buffer;\n```\n\nImport the polyfill before bootstrapping your app.\n\n## Quick start\n\n```ts\nimport { getNativeBalances } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\"; // Prefer a private endpoint for production\n\nasync function main(): Promise<void> {\n  const address = \"terra1...\";\n  const balances = await getNativeBalances(RPC, { address });\n  console.log(balances);\n}\n\nmain().catch(console.error);\n```\n\n## Send tokens example\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function sendExample(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    { chainId: CHAIN_ID, rpc: RPC, gasPrice: { denom: \"uluna\", amount: \"0.015\" } },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  if (!connected) {\n    throw new Error(\"Failed to connect wallet\");\n  }\n\n  const msg = new MsgSend({\n    fromAddress: connected.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"100000\" }],\n  });\n\n  const unsigned = { msgs: [msg], memo: \"hello from CosmES\" };\n  const fee = await connected.estimateFee(unsigned, 1.2);\n  const txHash = await connected.broadcastTx(unsigned, fee);\n  console.log(\"txhash\", txHash);\n}\n\nsendExample().catch(console.error);\n```\n\n> **Notes**\n>\n> - Use `simulateTx` before broadcasting to confirm gas usage.\n> - Classic burn/tax behaviour is governed via proposals. Confirm current policy (e.g., Tax2Gas) before assuming on-chain deductions.\n",
    "previousSlug": "learn/builder-tooling",
    "nextSlug": "develop/cosmes/cosmes-getting-started"
  },
  {
    "slug": "develop/cosmes/cosmes-getting-started",
    "path": "/develop/cosmes/cosmes-getting-started/",
    "sourceFile": "content/docs/develop/cosmes/cosmes-getting-started.md",
    "group": "Develop",
    "navTitle": "Get started",
    "navDepth": 2,
    "navParent": "develop/cosmes/cosmes",
    "navHasChildren": false,
    "navOrder": 94,
    "title": "Get started",
    "description": "Install the SDK, configure TypeScript, and connect wallets.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-getting-started.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Prerequisites",
        "id": "prerequisites"
      },
      {
        "depth": 2,
        "title": "Install packages",
        "id": "install-packages"
      },
      {
        "depth": 2,
        "title": "Choose a wallet controller",
        "id": "choose-a-wallet-controller"
      },
      {
        "depth": 3,
        "title": "Connect Galaxy Station (example)",
        "id": "connect-galaxy-station-example"
      },
      {
        "depth": 2,
        "title": "Configure network endpoints",
        "id": "configure-network-endpoints"
      },
      {
        "depth": 2,
        "title": "Connect Keplr",
        "id": "connect-keplr"
      },
      {
        "depth": 2,
        "title": "Read balances",
        "id": "read-balances"
      },
      {
        "depth": 2,
        "title": "Send tokens",
        "id": "send-tokens"
      }
    ],
    "body": "## Prerequisites\n\n- Node.js 18+\n- Yarn (or pnpm)\n- TypeScript project configured for ESM\n\n## Install packages\n\n```bash\nyarn add @goblinhunt/cosmes\n```\n\nRecommended `tsconfig.json` options:\n\n```json\n{\n  \"compilerOptions\": {\n    \"moduleResolution\": \"bundler\"\n  }\n}\n```\n\n## Choose a wallet controller\n\n- **Galaxy Station** (`GalaxyStationController`) via WalletConnect v2\n- **Keplr** browser extension (`KeplrController`)\n- Also supported: Orbitar, Cosmostation, LUNC Dash mobile\n\n### Connect Galaxy Station (example)\n\n```ts\nimport { GalaxyStationController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nexport async function connectGalaxyStation(): Promise<void> {\n  const controller = new GalaxyStationController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.WALLETCONNECT, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  console.log(\"address\", connected?.address);\n}\n```\n\nIf you use Vite, define `global` for legacy WalletConnect v1 flows:\n\n```ts\n// vite.config.ts\nimport { defineConfig } from \"vite\";\n\nexport default defineConfig({\n  define: { global: \"window\" },\n});\n```\n\nWhen connecting Station through WalletConnect v1, polyfill `Buffer`:\n\n```ts\n// polyfill.ts\nimport { Buffer } from \"buffer\";\n\n(window as unknown as { Buffer: typeof Buffer }).Buffer = Buffer;\n```\n\nImport the polyfill before bootstrapping your app.\n\n## Configure network endpoints\n\n- Chain ID: `columbus-5`\n- LCD: [https://terra-classic-lcd.publicnode.com](https://terra-classic-lcd.publicnode.com)\n- RPC: [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com)\n- Gas prices: [https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices)\n\nTestnet `rebel-2`:\n\n- LCD: [https://lcd.luncblaze.com](https://lcd.luncblaze.com)\n- RPC: [https://rpc.luncblaze.com](https://rpc.luncblaze.com)\n\n## Connect Keplr\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nexport async function connectKeplr(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  console.log(\"address\", connected?.address);\n}\n```\n\n## Read balances\n\n```ts\nimport { getNativeBalances } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst balances = await getNativeBalances(RPC, { address: \"terra1...\" });\nconsole.log(balances);\n```\n\n## Send tokens\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function send(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  if (!connected) {\n    throw new Error(\"Failed to connect wallet\");\n  }\n\n  const msg = new MsgSend({\n    fromAddress: connected.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"100000\" }],\n  });\n\n  const unsigned = { msgs: [msg], memo: \"CosmES send\" };\n  const fee = await connected.estimateFee(unsigned, 1.2);\n  const txHash = await connected.broadcastTx(unsigned, fee);\n  console.log(\"txhash\", txHash);\n}\n```\n\n> **Notes**\n>\n> - Use `simulateTx` to estimate gas before broadcasting.\n> - Confirm current burn/tax policy via LCD (`/terra/tax/v1beta1/params`) or governance notices.\n",
    "previousSlug": "develop/cosmes/cosmes",
    "nextSlug": "develop/cosmes/cosmes-query-data"
  },
  {
    "slug": "develop/cosmes/cosmes-query-data",
    "path": "/develop/cosmes/cosmes-query-data/",
    "sourceFile": "content/docs/develop/cosmes/cosmes-query-data.md",
    "group": "Develop",
    "navTitle": "Query data",
    "navDepth": 2,
    "navParent": "develop/cosmes/cosmes",
    "navHasChildren": false,
    "navOrder": 95,
    "title": "Query data",
    "description": "Read balances and contract state via CosmES client helpers.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-query-data.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Native balances",
        "id": "native-balances"
      },
      {
        "depth": 2,
        "title": "Account info",
        "id": "account-info"
      },
      {
        "depth": 2,
        "title": "Contract query",
        "id": "contract-query"
      }
    ],
    "body": "> **Tip**\n>\n> CosmES client helpers take the RPC endpoint string directly—no manual `RpcClient` instance is required.\n\n## Native balances\n\n```ts\nimport { getNativeBalances } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst balances = await getNativeBalances(RPC, { address: \"terra1...\" });\nconsole.log(balances);\n```\n\n## Account info\n\n```ts\nimport { getAccount } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst account = await getAccount(RPC, { address: \"terra1...\" });\nconsole.log(account);\n```\n\n## Contract query\n\n```ts\nimport { queryContract } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst contract = \"terra1...\";\nconst response = await queryContract(RPC, {\n  address: contract,\n  query: { config: {} },\n});\nconsole.log(response);\n```\n\n> **Notes**\n>\n> - Batch queries when building dApp front-ends to reduce RPC overhead.\n> - Use private infrastructure or a dedicated provider for production workloads.\n",
    "previousSlug": "develop/cosmes/cosmes-getting-started",
    "nextSlug": "develop/cosmes/cosmes-mnemonic-wallet"
  },
  {
    "slug": "develop/cosmes/cosmes-mnemonic-wallet",
    "path": "/develop/cosmes/cosmes-mnemonic-wallet/",
    "sourceFile": "content/docs/develop/cosmes/cosmes-mnemonic-wallet.md",
    "group": "Develop",
    "navTitle": "Programmatic wallet",
    "navDepth": 2,
    "navParent": "develop/cosmes/cosmes",
    "navHasChildren": false,
    "navOrder": 96,
    "title": "Programmatic wallet",
    "description": "Use `MnemonicWallet` to sign transactions from backends or scripts.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-mnemonic-wallet.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Create the wallet",
        "id": "create-the-wallet"
      },
      {
        "depth": 2,
        "title": "Sign and broadcast",
        "id": "sign-and-broadcast"
      }
    ],
    "body": "Use `MnemonicWallet` when you need to sign and broadcast transactions from scripts, backends, or test suites without a browser wallet.\n\n## Create the wallet\n\n```ts\nimport { MnemonicWallet } from \"@goblinhunt/cosmes/wallet\";\n\nconst wallet = new MnemonicWallet({\n  mnemonic: \"pronounce replace this with your 12-24 word mnemonic\",\n  bech32Prefix: \"terra\",\n  chainId: \"columbus-5\",\n  rpc: \"https://terra-classic-rpc.publicnode.com\",\n  gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  coinType: 330,\n  index: 0,\n});\n\nconsole.log(\"address\", wallet.address);\n```\n\n## Sign and broadcast\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\n\nconst msg = new MsgSend({\n  fromAddress: wallet.address,\n  toAddress: \"terra1...\",\n  amount: [{ denom: \"uluna\", amount: \"100000\" }],\n});\n\nconst unsigned = { msgs: [msg], memo: \"mnemonic wallet send\" };\nconst fee = await wallet.estimateFee(unsigned, 1.2);\nconst txHash = await wallet.broadcastTx(unsigned, fee);\nconsole.log(\"txhash\", txHash);\n```\n\n> **Tips**\n>\n> - Fetch current gas prices from [terra-classic-fcd.publicnode.com/v1/txs/gas_prices](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices) or the LCD tax endpoint.\n> - For rebel-2 testnet, switch `rpc` to [https://rpc.luncblaze.com](https://rpc.luncblaze.com).\n",
    "previousSlug": "develop/cosmes/cosmes-query-data",
    "nextSlug": "develop/cosmes/cosmes-transactions"
  },
  {
    "slug": "develop/cosmes/cosmes-transactions",
    "path": "/develop/cosmes/cosmes-transactions/",
    "sourceFile": "content/docs/develop/cosmes/cosmes-transactions.md",
    "group": "Develop",
    "navTitle": "Transactions",
    "navDepth": 2,
    "navParent": "develop/cosmes/cosmes",
    "navHasChildren": false,
    "navOrder": 97,
    "title": "Transactions",
    "description": "Compose and broadcast Common Terra Classic messages.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-transactions.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Bank send (`MsgSend`)",
        "id": "bank-send-msgsend"
      },
      {
        "depth": 2,
        "title": "Execute a contract (`MsgExecuteContract`)",
        "id": "execute-a-contract-msgexecutecontract"
      },
      {
        "depth": 2,
        "title": "IBC transfer (`MsgIbcTransfer`)",
        "id": "ibc-transfer-msgibctransfer"
      },
      {
        "depth": 2,
        "title": "DEX swap templates",
        "id": "dex-swap-templates"
      },
      {
        "depth": 3,
        "title": "Terraswap pair swap",
        "id": "terraswap-pair-swap"
      },
      {
        "depth": 3,
        "title": "Terraport router swap",
        "id": "terraport-router-swap"
      },
      {
        "depth": 3,
        "title": "CW20 offer swap",
        "id": "cw20-offer-swap"
      },
      {
        "depth": 2,
        "title": "Best practices",
        "id": "best-practices"
      }
    ],
    "body": "## Bank send (`MsgSend`)\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function send(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    { chainId: CHAIN_ID, rpc: RPC, gasPrice: { denom: \"uluna\", amount: \"28.325\" } },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  if (!connected) {\n    throw new Error(\"Failed to connect wallet\");\n  }\n\n  const msg = new MsgSend({\n    fromAddress: connected.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"100000\" }],\n  });\n\n  const unsigned = { msgs: [msg], memo: \"CosmES send\" };\n  const fee = await connected.estimateFee(unsigned, 1.2);\n  const txHash = await connected.broadcastTx(unsigned, fee);\n  console.log(\"txhash\", txHash);\n}\n```\n\n## Execute a contract (`MsgExecuteContract`)\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst contract = \"terra1...cw20\";\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract,\n  msg: { transfer: { recipient: \"terra1...dest\", amount: \"1000\" } },\n  funds: [],\n});\n\nconst unsigned = { msgs: [msg], memo: \"cw20 transfer\" };\nconst fee = await connected.estimateFee(unsigned, 1.2);\nconst txHash = await connected.broadcastTx(unsigned, fee);\n```\n\n## IBC transfer (`MsgIbcTransfer`)\n\n```ts\nimport { MsgIbcTransfer } from \"@goblinhunt/cosmes/client\";\n\nconst msg = new MsgIbcTransfer({\n  sourcePort: \"transfer\",\n  sourceChannel: \"channel-XXXX\",\n  token: { denom: \"uluna\", amount: \"100000\" },\n  sender: connected.address,\n  receiver: \"cosmos1...dest\",\n  timeoutHeight: { revisionNumber: \"0\", revisionHeight: \"0\" },\n  timeoutTimestamp: \"0\",\n});\n```\n\n## DEX swap templates\n\n### Terraswap pair swap\n\n```ts\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...pair\",\n  msg: {\n    swap: {\n      offer_asset: {\n        info: { native_token: { denom: \"uluna\" } },\n        amount: \"100000\",\n      },\n      belief_price: \"0.000123\",\n      max_spread: \"0.005\",\n      to: connected.address,\n    },\n  },\n  funds: [{ denom: \"uluna\", amount: \"100000\" }],\n});\n```\n\n### Terraport router swap\n\n```ts\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...router\",\n  msg: {\n    swap: {\n      offer_asset: {\n        info: { native_token: { denom: \"uluna\" } },\n        amount: \"100000\",\n      },\n      to: connected.address,\n    },\n  },\n  funds: [{ denom: \"uluna\", amount: \"100000\" }],\n});\n```\n\n### CW20 offer swap\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst hookMsg = { swap: { belief_price: \"123.45\", max_spread: \"0.005\", to: connected.address } };\nconst hook = Buffer.from(JSON.stringify(hookMsg)).toString(\"base64\");\n\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...cw20\",\n  msg: {\n    send: {\n      contract: \"terra1...pair\",\n      amount: \"500000\",\n      msg: hook,\n    },\n  },\n  funds: [],\n});\n```\n\n> **Important**\n>\n> - Replace contract addresses and fields with the DEX’ published schemas.\n> - Always set `max_spread` or `minimum_receive` safeguards.\n> - Use `queryContract` to discover pair addresses via factory contracts.\n\n## Best practices\n\n- Call `simulateTx` to estimate gas, then apply a margin (for example `1.2x`) before calculating fees.\n- Refer to `docs/develop/endpoints.md` for production-grade infrastructure.\n- On Terra Classic, legacy mint/burn market swaps are disabled. Use [Swap Protocol](/swap-protocol/overview/) for native LUNC/USTC swaps and DEX contracts for general token swap routes.\n",
    "previousSlug": "develop/cosmes/cosmes-mnemonic-wallet",
    "nextSlug": "develop/terra-py/terra-py"
  },
  {
    "slug": "develop/terra-py/terra-py",
    "path": "/develop/terra-py/terra-py/",
    "sourceFile": "content/docs/develop/terra-py/terra-py.md",
    "group": "Develop",
    "navTitle": "Terra.py on Terra Classic",
    "navDepth": 1,
    "navParent": "learn/builder-tooling",
    "navHasChildren": false,
    "navOrder": 98,
    "title": "Terra.py on Terra Classic",
    "description": "Install terra_sdk, connect to trusted endpoints, and broadcast Python transactions.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/terra-py/terra-py.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Requirements",
        "id": "requirements"
      },
      {
        "depth": 2,
        "title": "Set up a virtual environment",
        "id": "set-up-a-virtual-environment"
      },
      {
        "depth": 2,
        "title": "Network endpoints",
        "id": "network-endpoints"
      },
      {
        "depth": 2,
        "title": "Connect to a wallet",
        "id": "connect-to-a-wallet"
      },
      {
        "depth": 3,
        "title": "LocalTerra",
        "id": "localterra"
      },
      {
        "depth": 3,
        "title": "rebel-2 testnet",
        "id": "rebel-2-testnet"
      },
      {
        "depth": 3,
        "title": "columbus-5 mainnet",
        "id": "columbus-5-mainnet"
      },
      {
        "depth": 2,
        "title": "Fetch gas prices",
        "id": "fetch-gas-prices"
      },
      {
        "depth": 2,
        "title": "Send LUNC",
        "id": "send-lunc"
      },
      {
        "depth": 2,
        "title": "Swap assets",
        "id": "swap-assets"
      },
      {
        "depth": 2,
        "title": "Execute a smart contract",
        "id": "execute-a-smart-contract"
      },
      {
        "depth": 2,
        "title": "Next steps",
        "id": "next-steps"
      }
    ],
    "body": "This guide explains how to install the `terra_classic_sdk` Python SDK, connect to the recommended endpoints, and submit common transactions with typed examples.\n\n## Requirements\n\n* Python 3.8 or later\n* `pip` 23+ (or `uv`)\n* Optional: `make` and Docker for running the local Terra Classic network\n\n## Set up a virtual environment\n\n```bash\npython3 -m venv .venv\nsource .venv/bin/activate\npython -m pip install --upgrade pip\n```\n\nInstall Terra Classic SDK:\n\n```bash\npip install --upgrade terra-classic-sdk\n```\n\nTo work on the library itself, clone the repository and install extras with Poetry:\n\n```bash\ngit clone --depth 1 https://github.com/geoffmunn/terra.py.git\ncd terra.py\npip install poetry\npoetry install\n```\n\n## Network endpoints\n\n> **Warning**\n> Public endpoints are rate-limited. Run your own node or purchase dedicated access for production workloads.\n\n| Network              | Chain ID     | LCD                                                                                  | RPC                                                                                  | Gas prices                                                                                                               |\n| -------------------- | ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |\n| LocalTerra           | `localterra` | `http://localhost:1317`                                                              | `http://localhost:26657`                                                             | `http://localhost:1317/terra/tx/v1beta1/gas_prices`                                                                      |\n| rebel-2 (testnet)    | `rebel-2`    | [https://lcd.luncblaze.com](https://lcd.luncblaze.com)                               | [https://rpc.luncblaze.com](https://rpc.luncblaze.com)                               | [https://fcd.luncblaze.com/v1/txs/gas_prices](https://fcd.luncblaze.com/v1/txs/gas_prices)                               |\n| columbus-5 (mainnet) | `columbus-5` | [https://terra-classic-lcd.publicnode.com](https://terra-classic-lcd.publicnode.com) | [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com) | [https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices) |\n\nAlternative mainnet LCD/RPC mirrors include [https://api-lunc-lcd.binodes.com](https://api-lunc-lcd.binodes.com) and [https://api-lunc-rpc.binodes.com](https://api-lunc-rpc.binodes.com).\n\n## Connect to a wallet\n\nThe LCD client is the primary entry point for queries and transaction submission.\n\n### LocalTerra\n\n```python\nfrom terra_classic_sdk.client.localterra import LocalTerra\nfrom terra_classic_sdk.client.lcd.wallet import Wallet\n\nterra: LocalTerra = LocalTerra()\nwallet: Wallet = terra.wallets[\"test1\"]\nprint(\"test wallet\", wallet.key.acc_address)\n```\n\n### rebel-2 testnet\n\n```python\nfrom terra_classic_sdk.client.lcd import LCDClient\nfrom terra_classic_sdk.client.lcd.wallet import Wallet\nfrom terra_classic_sdk.key.mnemonic import MnemonicKey\n\nLCD_URL: str = \"https://lcd.luncblaze.com\"\nCHAIN_ID: str = \"rebel-2\"\nMNEMONIC: str = \"<INSERT TESTNET MNEMONIC>\"\n\nterra: LCDClient = LCDClient(url=LCD_URL, chain_id=CHAIN_ID)\nmnemonic_key: MnemonicKey = MnemonicKey(mnemonic=MNEMONIC)\ntestnet_wallet: Wallet = terra.wallet(mnemonic_key)\nprint(\"testnet\", testnet_wallet.key.acc_address)\n```\n\nRequest rebel-2 test funds from the [LUNC Blaze faucet](https://faucet.luncblaze.com/) before broadcasting transactions.\n\n### columbus-5 mainnet\n\n```python\nfrom terra_classic_sdk.client.lcd import LCDClient\nfrom terra_classic_sdk.client.lcd.wallet import Wallet\nfrom terra_classic_sdk.key.mnemonic import MnemonicKey\n\nLCD_URL: str = \"https://terra-classic-lcd.publicnode.com\"\nCHAIN_ID: str = \"columbus-5\"\nMNEMONIC: str = \"<STORE THIS SECURELY>\"\n\nterra: LCDClient = LCDClient(url=LCD_URL, chain_id=CHAIN_ID)\nmnemonic_key: MnemonicKey = MnemonicKey(mnemonic=MNEMONIC)\nmainnet_wallet: Wallet = terra.wallet(mnemonic_key)\nprint(\"mainnet\", mainnet_wallet.key.acc_address)\n```\n\n> **Danger**\n> Never commit or log mnemonics. Use environment variables or secure secret stores for production deployments.\n\n## Fetch gas prices\n\n```python\nfrom typing import Dict\nimport requests\n\nGAS_PRICE_ENDPOINT: str = \"https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices\"\n\ndef fetch_gas_prices(endpoint: str = GAS_PRICE_ENDPOINT) -> Dict[str, str]:\n    response = requests.get(endpoint, timeout=10)\n    response.raise_for_status()\n    return response.json()\n\ncurrent_prices: Dict[str, str] = fetch_gas_prices()\nprint(current_prices[\"uluna\"])\n```\n\nGas prices are quoted in micro-denominations (`uluna`, `uusd`, etc.). Adjust fees based on current burn tax policy and validator recommendations.\n\n## Send LUNC\n\n```python\nfrom typing import Dict\nfrom terra_classic_sdk.client.lcd.wallet import Wallet\nfrom terra_classic_sdk.client.lcd import LCDClient\nfrom terra_classic_sdk.client.lcd.api.tx import CreateTxOptions\nfrom terra_classic_sdk.core import Coins, Coin\nfrom terra_classic_sdk.core.bank import MsgSend\nfrom terra_classic_sdk.key.mnemonic import MnemonicKey\n\nAMOUNT_ULUNA: int = 1_000_000\nGAS_ADJUSTMENT: float = 1.4\nFEE_DENOMS: str = \"uluna\"\n\nlcd: LCDClient = LCDClient(\n    url=\"https://terra-classic-lcd.publicnode.com\",\n    chain_id=\"columbus-5\",\n)\nwallet: Wallet = lcd.wallet(MnemonicKey(mnemonic=\"<SECURE MNEMONIC>\"))\ngas_prices: Dict[str, str] = fetch_gas_prices()\n\ndef send_lunc(recipient: str) -> str:\n    tx_options: CreateTxOptions = CreateTxOptions(\n        msgs=[\n            MsgSend(\n                from_address=wallet.key.acc_address,\n                to_address=recipient,\n                amount=Coins([Coin(\"uluna\", AMOUNT_ULUNA)]),\n            )\n        ],\n        gas=\"auto\",\n        gas_prices=Coins(gas_prices),\n        fee_denoms=FEE_DENOMS,\n        gas_adjustment=GAS_ADJUSTMENT,\n    )\n    tx = wallet.create_and_sign_tx(options=tx_options)\n    result = lcd.tx.broadcast(tx)\n    return result.txhash\n\nrecipient_address: str = \"terra1...\"\ntx_hash: str = send_lunc(recipient_address)\nprint(\"broadcasted\", tx_hash)\n```\n\n`lcd.tx.broadcast` returns a result object with execution details, logs, and confirmation status. Query the transaction hash to confirm inclusion in a block.\n\n## Swap assets\n\n```python\nfrom terra_classic_sdk.core.market import MsgSwap\n\nAMOUNT_OFFER: int = 1_000_000\nASK_DENOM: str = \"uusd\"\n\nswap_options: CreateTxOptions = CreateTxOptions(\n    msgs=[\n        MsgSwap(\n            trader=wallet.key.acc_address,\n            offer_coin=Coin(\"uluna\", AMOUNT_OFFER),\n            ask_denom=ASK_DENOM,\n        )\n    ],\n    gas=\"auto\",\n    gas_prices=Coins(gas_prices),\n    fee_denoms=FEE_DENOMS,\n    gas_adjustment=GAS_ADJUSTMENT,\n)\nswap_tx = wallet.create_and_sign_tx(options=swap_options)\nswap_result = lcd.tx.broadcast(swap_tx)\nprint(\"swap\", swap_result.txhash)\n```\n\n## Execute a smart contract\n\n```python\nfrom typing import Any, Mapping\nfrom terra_classic_sdk.core.wasm import MsgExecuteContract\n\nCONTRACT_ADDRESS: str = \"terra1...\"\nEXECUTE_MSG: Mapping[str, Any] = {\"ping\": {}}\nEXECUTE_AMOUNT: int = 500_000\n\nexecute_options: CreateTxOptions = CreateTxOptions(\n    msgs=[\n        MsgExecuteContract(\n            sender=wallet.key.acc_address,\n            contract=CONTRACT_ADDRESS,\n            execute_msg=EXECUTE_MSG,\n            coins=Coins([Coin(\"uluna\", EXECUTE_AMOUNT)]),\n        )\n    ],\n    gas=\"auto\",\n    gas_prices=Coins(gas_prices),\n    fee_denoms=FEE_DENOMS,\n    gas_adjustment=GAS_ADJUSTMENT,\n)\nexecute_tx = wallet.create_and_sign_tx(options=execute_options)\nexecute_result = lcd.tx.broadcast(execute_tx)\nprint(\"execute\", execute_result.txhash)\n```\n\nEnsure the contract accepts the execute message and attached funds; otherwise, the transaction fails with a non-zero code.\n\n## Next steps\n\n* Review the [Terra Classic SDK reference](https://github.com/geoffmunn/terra.py) for detailed APIs.\n* Track validator gas recommendations via governance channels.\n* Combine Terra Classic SDK with notebook environments or backend frameworks to build analytics, bots, and scheduled jobs.\n\n---\n  🛠️ Useful Extras\n\nUpdated protobufs & SDK scripts are maintained by @geoffmunn on PyPI.\n\nCheck here for proto & extra Classic tooling:\n👉[PyPI profile](https://pypi.org/user/geoffmunn/)\n\n---\n⚠️ Disclaimer: This SDK is maintained by an independent developer (Geoff Munn). While the project appears trustworthy, use at your own risk. Always review the source code before using in production, especially for signing transactions or managing funds.\n\nThe original terra.py / terra_sdk repo was aimed at Terra 2.0 and is no longer maintained for Terra Classic.\nFor LUNC / USTC (Columbus-5) use the fork maintained by Geoff Munn:\n\n[GitHub:](https://github.com/geoffmunn/terra.py)\n\n[PyPI:](https://pypi.org/project/terra-classic-sdk/)\n\n[PyPI author:](https://pypi.org/user/geoffmunn/)\n",
    "previousSlug": "develop/cosmes/cosmes-transactions",
    "nextSlug": "develop/smart-contracts/overview"
  },
  {
    "slug": "develop/smart-contracts/overview",
    "path": "/develop/smart-contracts/overview/",
    "sourceFile": "content/docs/develop/smart-contracts/overview.md",
    "group": "Develop",
    "navTitle": "Smart contracts",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": true,
    "navOrder": 99,
    "title": "Smart contracts",
    "description": "End-to-end tutorials for building and deploying CosmWasm dApps on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/README.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Overview",
        "id": "overview"
      },
      {
        "depth": 2,
        "title": "Developer tools",
        "id": "developer-tools"
      },
      {
        "depth": 2,
        "title": "Why build on Terra Classic?",
        "id": "why-build-on-terra-classic"
      },
      {
        "depth": 3,
        "title": "Robust consensus and fast block finality",
        "id": "robust-consensus-and-fast-block-finality"
      },
      {
        "depth": 3,
        "title": "Ready for DeFi applications",
        "id": "ready-for-defi-applications"
      },
      {
        "depth": 3,
        "title": "Active user base with real-world usage",
        "id": "active-user-base-with-real-world-usage"
      },
      {
        "depth": 3,
        "title": "Community-owned",
        "id": "community-owned"
      }
    ],
    "body": "## Overview\n\nA smart contract is a contract whose terms are expressed as a computer program with logic and state persisted on the blockchain. Smart contracts can automatically carry out its terms and conditions with total transparency and no counter-party risk.\n\nSmart contracts allow users to extend the capabilities of the Terra Classic blockchain by introducing custom logic that can be composed against the Terra Classic blockchain's financial primitives such as its native tokens, oracle price feed, and others. These decentralized applications unlock new avenues of value-transfer through enabling unique transaction flows not provided by Terra Classic's native modules.\n\n## Developer tools\n\nThe following table maps commonly-used Ethereum developer tools to their Terra counterparts.\n\n|                    | Terra                                                                                                                 | Ethereum        |\n| ------------------ | --------------------------------------------------------------------------------------------------------------------- | --------------- |\n| Frontend SDK       | [CosmES](https://github.com/goblinhunt/cosmes), [Terra SDK](https://terra-money.github.io/terra.py/) | Web3.js, Web3py |\n| Browser Extension  | Keplr, Cosmostation, Station, see [Wallets](/learn/wallets/)                                      | MetaMask, MEW   |\n| Local Testnet      | [Localnet](/develop/how-to/localnet/terra-core-localnet/)                                                             | Ganache         |\n| Contract Language  | [Rust](https://www.rust-lang.org/)                                                                                    | Solidity, Vyper |\n\n## Why build on Terra Classic?\n\n### Robust consensus and fast block finality\n\nTerra Classic is powered by Tendermint BFT consensus, using a dPoS-like scheme driven by a set of validators. This efficient consensus model enables batches of transactions to occur in only 6 seconds (only a fraction of the time it takes for Bitcoin and Ethereum).\n\n### Ready for DeFi applications\n\nWith fundamental infrastructure such as price oracles, community governance and automated monetary and fiscal policy, Terra Classic acts as its own autonomous sovereign economy driven by its users, its projects, and provides all the necessary incentive mechanics and modular plumbing to power modern DeFi smart contracts.\n\n### Active user base with real-world usage\n\nWith highly active users from a variety of integrations, the Terra Classic economy is a thriving new home for the future of innovative products.\n\n### Community-owned\n\nTerra Classic is a community-owned project, it is not owned by any single entity.\n",
    "previousSlug": "develop/terra-py/terra-py",
    "nextSlug": "develop/smart-contracts/build-terra-dapp"
  },
  {
    "slug": "develop/smart-contracts/build-terra-dapp",
    "path": "/develop/smart-contracts/build-terra-dapp/",
    "sourceFile": "content/docs/develop/smart-contracts/build-terra-dapp.md",
    "group": "Develop",
    "navTitle": "Build a Terra Classic dApp",
    "navDepth": 1,
    "navParent": "develop/smart-contracts/overview",
    "navHasChildren": false,
    "navOrder": 100,
    "title": "Build a Terra Classic dApp",
    "description": "Overview of the CosmWasm template workflow from idea to deployment.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/build-terra-dapp.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Requirements",
        "id": "requirements"
      }
    ],
    "body": "This tutorial is designed to acquaint you with everything you need to know to launch your own smart-contract powered applications on Terra Classic.\n\nUsing CosmWasm's default template contract as an example, this tutorial walks through the necessary steps to go from an idea to execution.\n\nIn this guide, you will learn:\n\n- How to set up your environment for smart contract development and testing\n- The basic structure and execution model for smart contracts\n- The local build, upload, and testing process\n\n## Requirements\n\n- [Docker](https://www.docker.com/)\n- Basic familiarity with the Terra Classic ecosystem\n- Basic proficiency with [Rust](https://www.rust-lang.org/)\n- A desire to innovate and disrupt traditional finance\n",
    "previousSlug": "develop/smart-contracts/overview",
    "nextSlug": "develop/smart-contracts/set-up-local-environment"
  },
  {
    "slug": "develop/smart-contracts/set-up-local-environment",
    "path": "/develop/smart-contracts/set-up-local-environment/",
    "sourceFile": "content/docs/develop/smart-contracts/set-up-local-environment.md",
    "group": "Develop",
    "navTitle": "Set up local environment",
    "navDepth": 1,
    "navParent": "develop/smart-contracts/overview",
    "navHasChildren": false,
    "navOrder": 101,
    "title": "Set up local environment",
    "description": "Install toolchains and prepare LocalTerra for contract development.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/set-up-local-environment.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Install Terra Classic Core locally",
        "id": "install-terra-classic-core-locally"
      },
      {
        "depth": 2,
        "title": "Install Rust",
        "id": "install-rust"
      }
    ],
    "body": "As a smart contract developer, you will need to write, compile, upload, and test your contracts before deploying them on the Columbus-5 mainnet. The first step is to set up a specialized environment to streamline development.\n\n## Install Terra Classic Core locally\n\nVisit [run Localnet](/develop/how-to/localnet/terra-core-localnet/) to install the latest version of Terra Classic Core to obtain a working version of `terrad`. You will need this to connect to your local Terra Classic test network to work with smart contracts.\n\nIn order to work with Terra Classic Smart Contracts, you should have access to a Terra Classic network that includes the WASM integration.\n\nIn this tutorial, you will be using a local validator network as a private testnet. This reduces the friction of development by giving you complete control of a private Terra Classic blockchain with the possibility to easily reset the world state.\n\nYou should now have a local testnet running on your machine, with the following configurations:\n\n- Node listening on RPC port `26657`\n- LCD running on port `1317`\n- Swagger Documentation at [http://localhost:1317/swagger](http://localhost:1317/swagger)\n\n> **TODO**\n>\n> This section needs updating to include the information about the keys of the local network validator keys / seeds!\n\n## Install Rust\n\nWhile WASM smart contracts can theoretically be written in any programming language, it is currently only recommended to use Rust as it is the only language for which mature libraries and tooling exist for CosmWasm. For this tutorial, you'll need to also install version 1.82 of Rust by following the instructions in the [official Rust documentation](https://www.rust-lang.org/tools/install).\n\nOnce you have installed Rust and its toolchain (cargo et al.), you'll need to add the `wasm32-unknown-unknown` compilation target.\n\n```sh\nrustup default 1.82.0\nrustup target add wasm32-unknown-unknown\n```\n\nThen, install `cargo-generate`, which you will need for bootstrapping new CosmWasm smart contracts via a template.\n\n```sh\ncargo install cargo-generate --features vendored-openssl\n```\n\nNext, install `wasm-opt`, which is required to optimize smart contracts.\n\n```sh\ncargo install wasm-opt\n```\n",
    "previousSlug": "develop/smart-contracts/build-terra-dapp",
    "nextSlug": "develop/smart-contracts/write-smart-contract"
  },
  {
    "slug": "develop/smart-contracts/write-smart-contract",
    "path": "/develop/smart-contracts/write-smart-contract/",
    "sourceFile": "content/docs/develop/smart-contracts/write-smart-contract.md",
    "group": "Develop",
    "navTitle": "Write smart contract",
    "navDepth": 1,
    "navParent": "develop/smart-contracts/overview",
    "navHasChildren": false,
    "navOrder": 102,
    "title": "Write smart contract",
    "description": "Author and test CosmWasm contracts with entry points and state management.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/write-smart-contract.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Start with a template",
        "id": "start-with-a-template"
      },
      {
        "depth": 2,
        "title": "Contract State",
        "id": "contract-state"
      },
      {
        "depth": 2,
        "title": "InstantiateMsg",
        "id": "instantiatemsg"
      },
      {
        "depth": 3,
        "title": "Example of InstantiateMsg",
        "id": "example-of-instantiatemsg"
      },
      {
        "depth": 3,
        "title": "Message Definition",
        "id": "message-definition"
      },
      {
        "depth": 3,
        "title": "Logic",
        "id": "logic"
      },
      {
        "depth": 2,
        "title": "ExecuteMsg",
        "id": "executemsg"
      },
      {
        "depth": 3,
        "title": "Example",
        "id": "example"
      },
      {
        "depth": 4,
        "title": "Increment",
        "id": "increment"
      },
      {
        "depth": 4,
        "title": "Reset",
        "id": "reset"
      },
      {
        "depth": 3,
        "title": "ExecuteMsg Definition",
        "id": "executemsg-definition"
      },
      {
        "depth": 3,
        "title": "Execute Logic",
        "id": "execute-logic"
      },
      {
        "depth": 2,
        "title": "QueryMsg",
        "id": "querymsg"
      },
      {
        "depth": 3,
        "title": "Example Query",
        "id": "example-query"
      },
      {
        "depth": 4,
        "title": "Balance",
        "id": "balance"
      },
      {
        "depth": 3,
        "title": "QueryMsg Definition",
        "id": "querymsg-definition"
      },
      {
        "depth": 3,
        "title": "Query Logic",
        "id": "query-logic"
      },
      {
        "depth": 2,
        "title": "Building the Contract",
        "id": "building-the-contract"
      },
      {
        "depth": 3,
        "title": "Optimizing your build (CosmWasm 1.5)",
        "id": "optimizing-your-build-cosmwasm-15"
      },
      {
        "depth": 2,
        "title": "Schemas",
        "id": "schemas"
      }
    ],
    "body": "> **Tip**\n>\n> To better understand the building blocks of the smart contract you will build in this tutorial, view the [complete contract](https://github.com/CosmWasm/cw-template).\n\nA smart contract can be considered an instance of a singleton object whose internal state is persisted on the blockchain. Users can trigger state changes through sending it JSON messages, and users can also query its state through sending a request formatted as a JSON message. These messages are different than Terra blockchain messages such as `MsgSend` and `MsgSwap`.\n\nAs a smart contract writer, your job is to define 3 functions that define your smart contract's interface:\n\n- `instantiate()`: a constructor which is called during contract instantiation to provide initial state\n- `execute()`: gets called when a user wants to invoke a method on the smart contract\n- `query()`: gets called when a user wants to get data out of a smart contract\n\nTo make your smart contract upgradeable, you will need to implement the `migrate()` function.\n\nIn this section, you will define your expected messages alongside their implementation.\n\n## Start with a template\n\nIn your working directory, quickly launch your smart contract with the recommended folder structure and build options by running the following commands (CosmWasm 1.5 template):\n\n```sh\ncargo generate --git https://github.com/CosmWasm/cw-template.git --branch 1.5 --name my-first-contract\ncd my-first-contract\n```\n\nThis helps get you started by providing the basic boilerplate and structure for a smart contract. You'll find in the `src/lib.rs` file that the standard CosmWasm entrypoints `instantiate()`, `execute()`, and `query()` are properly exposed and hooked up.\n\n## Contract State\n\nThe starting template has the basic following state:\n\n- a singleton struct `State` containing:\n  - a 32-bit integer `count`\n  - a Terra address `owner`\n\n```rust\n// src/state.rs\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\nuse cosmwasm_std::Addr;\nuse cw_storage_plus::Item;\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, Eq, JsonSchema)]\npub struct State {\n    pub count: i32,\n    pub owner: Addr,\n}\n\npub const STATE: Item<State> = Item::new(\"state\");\n```\n\nTerra Classic smart contracts have the ability to keep persistent state through the native GoLevelDB, a bytes-based key-value store. As such, any data you wish to persist should be assigned a unique key at which the data can be indexed and later retrieved. The singleton in the example above is assigned the key `config` (in bytes).\n\nData can only be persisted as raw bytes, so any notion of structure or data type must be expressed as a pair of serializing and deserializing functions. For instance, objects must be stored as bytes, so you must supply both the function that encodes the object into bytes to save it on the blockchain, as well as the function that decodes the bytes back into data types that your contract logic can understand. The choice of byte representation is up to you, so long as it provides a clean, bi-directional mapping.\n\nFortunately, the CosmWasm team provide utility crates such as [cw-storage-plus](https://github.com/CosmWasm/cw-storage-plus), which offers high-level abstractions like `Item` and `Map` with automatic (de)serialization for common types.\n\nNotice how the `State` struct holds both `count` and `owner`. In addition, the `derive` attribute is applied to auto-implement some useful traits:\n\n- `Serialize`: provides serialization\n- `Deserialize`: provides deserialization\n- `Clone`: makes the struct copyable\n- `Debug`: enables the struct to be printed to string\n- `PartialEq`: provides equality comparison\n- `JsonSchema`: auto-generates a JSON schema\n\n`Addr`, refers to a human-readable Terra address prefixed with `terra...`. Its counterpart is the `CanonicalAddr`, which refers to a Terra address's native decoded Bech32 form in bytes.\n\n## InstantiateMsg\n\nThe `InstantiateMsg` is provided when a user creates a contract on the blockchain through a `MsgInstantiateContract`. This provides the contract with its configuration as well as its initial state.\n\nOn the Terra Classic blockchain, the uploading of a contract's code and the instantiation of a contract are regarded as separate events, unlike on Ethereum. This is to allow a small set of vetted contract archetypes to exist as multiple instances sharing the same base code but configured with different parameters (imagine one canonical ERC20, and multiple tokens that use its code).\n\n### Example of InstantiateMsg\n\nFor your contract, you will expect a contract creator to supply the initial state in a JSON message:\n\n```json\n{\n  \"count\": 100\n}\n```\n\n### Message Definition\n\n```rust\n// src/msg.rs\n\nuse schemars::JsonSchema;\nuse serde::{Deserialize, Serialize};\n\n#[cw_serde]\npub struct InstantiateMsg {\n    pub count: i32,\n}\n\n```\n\n### Logic\n\nHere you will define your first entry-point, the `instantiate()`, or where the contract is instantiated and passed its `InstantiateMsg`. Extract the count from the message and set up your initial state, where:\n\n- `count` is assigned the count from the message\n- `owner` is assigned to the sender of the `MsgInstantiateContract`\n\n```rust\n// src/contract.rs\n#[cfg_attr(not(feature = \"library\"), entry_point)]\npub fn instantiate(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: InstantiateMsg,\n) -> Result<Response, ContractError> {\n    let state = State {\n        count: msg.count,\n        owner: info.sender.clone(),\n    };\n    set_contract_version(deps.storage, CONTRACT_NAME, CONTRACT_VERSION)?;\n    STATE.save(deps.storage, &state)?;\n\n    Ok(Response::new()\n        .add_attribute(\"method\", \"instantiate\")\n        .add_attribute(\"owner\", info.sender)\n        .add_attribute(\"count\", msg.count.to_string()))\n}\n```\n\n## ExecuteMsg\n\nThe `ExecuteMsg` is a JSON message passed to the `execute()` function through a `MsgExecuteContract`. Unlike the `InstantiateMsg`, the `ExecuteMsg` can exist as several different types of messages, to account for the different types of functions that a smart contract can expose to a user. The `execute()` function demultiplexes these different types of messages to its appropriate message handler logic.\n\n### Example\n\nUse the following JSON messages to trigger the `execute()` function:\n\n#### Increment\n\nAny user can increment the current count by 1.\n\n```json\n{\n  \"increment\": {}\n}\n```\n\n#### Reset\n\nOnly the owner can reset the count to a specific number.\n\n```json\n{\n  \"reset\": {\n    \"count\": 5\n  }\n}\n```\n\n### ExecuteMsg Definition\n\nAs for your `ExecuteMsg`, you will use an `enum` to multiplex over the different types of messages that your contract can understand. The `serde` attribute rewrites your attribute keys in snake case and lower case, so you'll have `increment` and `reset` instead of `Increment` and `Reset` when serializing and deserializing across JSON.\n\n```rust\n// src/msg.rs\n\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = \"snake_case\")]\npub enum ExecuteMsg {\n    Increment {},\n    Reset { count: i32 },\n}\n```\n\n### Execute Logic\n\n```rust\n// src/contract.rs\n\n#[cfg_attr(not(feature = \"library\"), entry_point)]\npub fn execute(\n    deps: DepsMut,\n    _env: Env,\n    info: MessageInfo,\n    msg: ExecuteMsg,\n) -> Result<Response, ContractError> {\n    match msg {\n        ExecuteMsg::Increment {} => try_increment(deps),\n        ExecuteMsg::Reset { count } => try_reset(deps, info, count),\n    }\n}\n```\n\nThis is your `execute()` method, which uses Rust's pattern matching to route the received `ExecuteMsg` to the appropriate handling logic, either dispatching a `try_increment()` or a `try_reset()` call depending on the message received.\n\n```rust\npub fn try_increment(deps: DepsMut) -> Result<Response, ContractError> {\n    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n        state.count += 1;\n        Ok(state)\n    })?;\n\n    Ok(Response::new().add_attribute(\"method\", \"try_increment\"))\n}\n```\n\nIt is quite straightforward to follow the logic of `try_increment()`. First, it acquires a mutable reference to the storage to update the singleton located at key `b\"config\"`, made accessible through the `config` convenience function defined in the `src/state.rs`. It then updates the present state's count by returning an `Ok` result with the new state. Finally, it terminates the contract's execution with an acknowledgement of success by returning an `Ok` result with the `Response`.\n\n```rust\n// src/contract.rs\n\npub fn try_reset(deps: DepsMut, info: MessageInfo, count: i32) -> Result<Response, ContractError> {\n    STATE.update(deps.storage, |mut state| -> Result<_, ContractError> {\n        if info.sender != state.owner {\n            return Err(ContractError::Unauthorized {});\n        }\n        state.count = count;\n        Ok(state)\n    })?;\n    Ok(Response::new().add_attribute(\"method\", \"reset\"))\n}\n```\n\nThe logic for reset is very similar to increment -- except this time, it first checks that the message sender is permitted to invoke the reset function.\n\n## QueryMsg\n\n### Example Query\n\nThe template contract only supports one type of `QueryMsg`:\n\n#### Balance\n\nThe request:\n\n```json\n{\n  \"get_count\": {}\n}\n```\n\nWhich should return:\n\n```json\n{\n  \"count\": 5\n}\n```\n\n### QueryMsg Definition\n\nTo support queries against the contract for data, you'll have to define both a `QueryMsg` format (which represents requests), as well as provide the structure of the query's output -- `CountResponse` in this case. You must do this because `query()` will send back information to the user through JSON in a structure and you must make the shape of your response known.\n\nAdd the following to your `src/msg.rs`:\n\n```rust\n// src/msg.rs\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = \"snake_case\")]\npub enum QueryMsg {\n    // GetCount returns the current count as a json-encoded number\n    GetCount {},\n}\n\n// Define a custom struct for each query response\n#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\npub struct CountResponse {\n    pub count: i32,\n}\n```\n\n### Query Logic\n\nThe logic for `query()` should be similar to that of `execute()`, except that, since `query()` is called without the end-user making a transaction, the `env` argument is ommitted as there is no information.\n\n```rust\n// src/contract.rs\n\n#[cfg_attr(not(feature = \"library\"), entry_point)]\npub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {\n    match msg {\n        QueryMsg::GetCount {} => to_binary(&query_count(deps)?),\n    }\n}\n\nfn query_count(deps: Deps) -> StdResult<CountResponse> {\n    let state = STATE.load(deps.storage)?;\n    Ok(CountResponse { count: state.count })\n}\n```\n\n## Building the Contract\n\nTo build your contract, run the following command. This will check for any preliminary errors before optimizing.\n\n```sh\ncargo wasm\n```\n\n### Optimizing your build (CosmWasm 1.5)\n\n> **Important**\n>\n> To use the rust optimizer, you will need [Docker](https://www.docker.com) installed. Alternatively you can use wasm-opt.\n\nYou will need to make sure the output WASM binary is as small as possible in order to minimize fees and stay under the size limit for the blockchain. Use the workspace optimizer Docker image in the root of your contract folder or optimize manually with `wasm-opt`.\n\n```sh\ndocker run --rm -v \"$(pwd)\":/code \\\n  --mount type=volume,source=\"$(basename \"$(pwd)\")_cache\",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/workspace-optimizer:0.14.0\n```\n\nIf you are on an arm64 machine:\n\n```sh\ndocker run --rm -v \"$(pwd)\":/code \\\n  --mount type=volume,source=\"$(basename \"$(pwd)\")_cache\",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/workspace-optimizer-arm64:0.14.0\n  ```\n\nIf you are using wasm-opt:\n\n```sh\nwasm-opt -Oz -o artifacts/my_first_contract.wasm artifacts/my_first_contract.wasm\n```\n\nThis will result in an optimized build of `artifacts/my_first_contract.wasm` or `artifacts/my_first_contract-aarch64.wasm` in your working directory.\n\n> **Important**\n>\n> Please note that rust-optimizer will produce different contracts on Intel and ARM machines. So for reproducible builds you'll have to stick to one.\n\n## Schemas\n\nIn order to make use of JSON-schema auto-generation, you should register each of the data structures that you need schemas for.\n\n```rust\n// examples/schema.rs\n\nuse std::env::current_dir;\nuse std::fs::create_dir_all;\n\nuse cosmwasm_schema::{export_schema, remove_schemas, schema_for};\n\nuse my_first_contract::msg::{CountResponse, ExecuteMsg, InstantiateMsg, QueryMsg};\nuse my_first_contract::state::State;\n\nfn main() {\n    let mut out_dir = current_dir().unwrap();\n    out_dir.push(\"schema\");\n    create_dir_all(&out_dir).unwrap();\n    remove_schemas(&out_dir).unwrap();\n\n    export_schema(&schema_for!(InstantiateMsg), &out_dir);\n    export_schema(&schema_for!(ExecuteMsg), &out_dir);\n    export_schema(&schema_for!(QueryMsg), &out_dir);\n    export_schema(&schema_for!(State), &out_dir);\n    export_schema(&schema_for!(CountResponse), &out_dir);\n}\n```\n\nYou can then build the schemas with:\n\n```sh\ncargo schema\n```\n\nYour newly generated schemas should be visible in your `schema/` directory. The following is an example of `schema/query_msg.json`.\n\n```json\n{\n  \"$schema\": \"http://json-schema.org/draft-07/schema#\",\n  \"title\": \"QueryMsg\",\n  \"anyOf\": [\n    {\n      \"type\": \"object\",\n      \"required\": [\"get_count\"],\n      \"properties\": {\n        \"get_count\": {\n          \"type\": \"object\"\n        }\n      }\n    }\n  ]\n}\n```\n\nYou can use an online tool such as [JSON Schema Validator](https://www.jsonschemavalidator.net/) to test your input against the generated JSON schema.\n",
    "previousSlug": "develop/smart-contracts/set-up-local-environment",
    "nextSlug": "develop/smart-contracts/interact-with-smart-contract"
  },
  {
    "slug": "develop/smart-contracts/interact-with-smart-contract",
    "path": "/develop/smart-contracts/interact-with-smart-contract/",
    "sourceFile": "content/docs/develop/smart-contracts/interact-with-smart-contract.md",
    "group": "Develop",
    "navTitle": "Interact with contracts",
    "navDepth": 1,
    "navParent": "develop/smart-contracts/overview",
    "navHasChildren": false,
    "navOrder": 103,
    "title": "Interact with contracts",
    "description": "Store, instantiate, execute, and query contracts using `terrad`.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/interact-with-smart-contract.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Requirements",
        "id": "requirements"
      },
      {
        "depth": 2,
        "title": "Uploading Code",
        "id": "uploading-code"
      },
      {
        "depth": 2,
        "title": "Creating the Contract",
        "id": "creating-the-contract"
      },
      {
        "depth": 2,
        "title": "Executing the Contract",
        "id": "executing-the-contract"
      },
      {
        "depth": 3,
        "title": "Reset",
        "id": "reset"
      },
      {
        "depth": 3,
        "title": "Incrementing",
        "id": "incrementing"
      },
      {
        "depth": 3,
        "title": "Querying count",
        "id": "querying-count"
      },
      {
        "depth": 2,
        "title": "What's Next?",
        "id": "whats-next"
      }
    ],
    "body": "## Requirements\n\nMake sure you have set up the local network and that it is up and running:\n\nYou should also have the latest version of `terrad` by building the latest version of Terra Core. You will configure `terrad` to use it against your isolated testnet environment.\n\nIn a separate terminal, make sure to set up the following mnemonic:\n\n```bash\nterrad keys add test1 --recover\n```\n\nUsing the mnemonic from the [LocalNet](/develop/how-to/localnet/terra-core-localnet/) guide.\n\n## Uploading Code\n\nMake sure that the **optimized build** of `my_first_contract.wasm` that you created in the last section is in your current working directory.\n\n```bash\nterrad tx wasm store artifacts/my_first_contract.wasm --from test1 --chain-id=localterra --gas=auto --gas-prices=28.325uluna --broadcast-mode=sync\n```\n\nOr, if you are on an arm64 machine:\n\n```bash\nterrad tx wasm store artifacts/my_first_contract-aarch64.wasm --from test1 --chain-id=localterra --gas=auto --gas-prices=28.325uluna --broadcast-mode=sync\n```\n\nThis will ask for a confirmation before broadcasting to LocalTerra, type `y` and press enter.\n\nYou should see output similar to the following:\n\n```bash\nheight: 6\ntxhash: 83BB9C6FDBA1D2291E068D5CF7DDF7E0BE459C6AF547EC82652C52507CED8A9F\ncodespace: \"\"\ncode: 0\ndata: \"\"\nrawlog: '[{\"msg_index\":0,\"log\":\"\",\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"store_code\"},{\"key\":\"module\",\"value\":\"wasm\"}]},{\"type\":\"store_code\",\"attributes\":[{\"key\":\"sender\",\"value\":\"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\"},{\"key\":\"code_id\",\"value\":\"1\"}]}]}]'\nlogs:\n- msgindex: 0\n  log: \"\"\n  events:\n  - type: message\n    attributes:\n    - key: action\n      value: store_code\n    - key: module\n      value: wasm\n  - type: store_code\n    attributes:\n    - key: sender\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: \"1\"\ninfo: \"\"\ngaswanted: 681907\ngasused: 680262\ntx: null\ntimestamp: \"\"\n```\n\nAs you can see, your contract was successfully instantiated with Code ID #1.\n\nYou can check it out (this will download the wasm file from the network):\n\n```bash\nterrad query wasm code 1\n```\n\n## Creating the Contract\n\nYou have now uploaded the code for your contract, but still don't have a contract. Create it with the following InitMsg:\n\n```json\n{\n  \"count\": 0\n}\n```\n\nYou can compress the JSON into 1 line with [this online tool](https://goonlinetools.com/json-minifier/).\n\n```bash\nterrad tx wasm instantiate 1 '{\"count\":0}' --from test1 --chain-id=localterra --fees=28.325uluna --gas=auto --broadcast-mode=sync\n```\n\nYou should get a response like the following:\n\n```bash\nheight: 41\ntxhash: AEF6F2FA570029A5D4C0DA5ACFA4A2B614D5811E29EEE10FF59F821AFECCD399\ncodespace: \"\"\ncode: 0\ndata: \"\"\nrawlog: '[{\"msg_index\":0,\"log\":\"\",\"events\":[{\"type\":\"instantiate_contract\",\"attributes\":[{\"key\":\"owner\",\"value\":\"terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\"},{\"key\":\"code_id\",\"value\":\"1\"},{\"key\":\"contract_address\",\"value\":\"terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"instantiate_contract\"},{\"key\":\"module\",\"value\":\"wasm\"}]}]}]'\nlogs:\n- msgindex: 0\n  log: \"\"\n  events:\n  - type: instantiate_contract\n    attributes:\n    - key: owner\n      value: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\n    - key: code_id\n      value: \"1\"\n    - key: contract_address\n      value: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\n  - type: message\n    attributes:\n    - key: action\n      value: instantiate_contract\n    - key: module\n      value: wasm\ninfo: \"\"\ngaswanted: 120751\ngasused: 120170\ntx: null\ntimestamp: \"\"\n```\n\nIf the output does not contain detailed event logs, you need to query the chain for the transaction hash:\n\n```bash\nterrad query tx AEF6F2FA570029A5D4C0DA5ACFA4A2B614D5811E29EEE10FF59F821AFECCD399\n```\n\nFrom the output, you can see that your contract was created above at: `terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5`. Take note of this contract address, as you will need it for the next section.\n\nCheck out your contract information:\n\n```bash\nterrad query wasm contract terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\naddress: terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5\nowner: terra1dcegyrekltswvyy0xy69ydgxn9x8x32zdtapd8\ncodeid: 1\n...\n```\n\nYou can use the following command to decode any Base64 strings you see in responses or events:\n\n```bash\necho eyJjb3VudCI6MH0= | base64 --decode\n```\n\nThis for example will produce the message you used when initializing the contract:\n\n```json\n{ \"count\": 0 }\n```\n\n## Executing the Contract\n\nLet's do the following:\n\n1. Reset count to 5\n2. Increment twice\n\nIf done properly, you should get a count of 7.\n\n### Reset\n\nFirst, to reset:\n\n```json\n{\n  \"reset\": {\n    \"count\": 5\n  }\n}\n```\n\n```bash\nterrad tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 '{\"reset\":{\"count\":5}}' --from test1 --chain-id=localterra --fees=28.325uluna --gas=auto --broadcast-mode=sync\n```\n\n### Incrementing\n\n```json\n{\n  \"increment\": {}\n}\n```\n\n```bash\nterrad tx wasm execute terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 '{\"increment\":{}}' --from test1 --chain-id=localterra --gas=auto --fees=28.325uluna --broadcast-mode=sync\n```\n\n### Querying count\n\nCheck the result of your executions!\n\n```json\n{\n  \"get_count\": {}\n}\n```\n\n```bash\nterrad query wasm contract-store terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5 '{\"get_count\":{}}'\n```\n\nExpected output:\n\n```text\nquery_result:\n  count: 7\n```\n\nExcellent! Congratulations, you've created your first smart contract, and now know how to get developing with the Terra Classic dApp Platform.\n\n## What's Next?\n\nWe've only walked through a simple example of a smart contract, that modifies a simple balance within its internal state. Although this is enough to make a simple dApp, you can power more interesting applications by **emitting messages**, which will enable you to interact with other contracts as well as the rest of the blockchain's module.\n\nCheck out a couple more examples of smart contracts using CosmWasm's smart contract [repo](https://github.com/CosmWasm/cosmwasm/tree/main/contracts).\n",
    "previousSlug": "develop/smart-contracts/write-smart-contract",
    "nextSlug": "develop/smart-contracts/manage-cw20-tokens"
  },
  {
    "slug": "develop/smart-contracts/manage-cw20-tokens",
    "path": "/develop/smart-contracts/manage-cw20-tokens/",
    "sourceFile": "content/docs/develop/smart-contracts/manage-cw20-tokens.md",
    "group": "Develop",
    "navTitle": "Manage CW20 tokens",
    "navDepth": 1,
    "navParent": "develop/smart-contracts/overview",
    "navHasChildren": false,
    "navOrder": 104,
    "title": "Manage CW20 tokens",
    "description": "Deploy and operate CW20 token contracts on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/manage-cw20-tokens.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Check CW20 balance",
        "id": "check-cw20-balance"
      },
      {
        "depth": 2,
        "title": "Interact with a CW20 contract",
        "id": "interact-with-a-cw20-contract"
      },
      {
        "depth": 2,
        "title": "Send CW20 to another contract and execute message",
        "id": "send-cw20-to-another-contract-and-execute-message"
      },
      {
        "depth": 2,
        "title": "Transfer CW20 tokens",
        "id": "transfer-cw20-tokens"
      }
    ],
    "body": "According to the [official documentation](https://docs.rs/crate/cw20/1.1.0)\n\n> CW20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20 standard, but many changes have been made. The types in here can be imported by contracts that wish to implement this spec, or by contracts that call to any standard cw20 contract.\n\n## Check CW20 balance\n\nYou can query balance via LCD or using CosmES in JavaScript.\n\n- LCD (CosmWasm v1 smart query):\n\n  - Build the smart query and base64-encode it:  \n\n     ```json\n     { \"balance\": { \"address\": \"<walletAddress>\" } }\n     ```\n  \n  - Request:\n\n     ```text\n     GET /cosmwasm/wasm/v1/contract/<tokenContractAddress>/smart/<base64Query>\n     Host: terra-classic-lcd.publicnode.com\n     ```\n  \n  - Example (placeholder base64 shown):\n\n     ```text\n     https://terra-classic-lcd.publicnode.com/cosmwasm/wasm/v1/contract/<tokenContractAddress>/smart/eyAiYmFsYW5jZSI6IHsgImFkZHJlc3MiOiAiPHdhbGxldEFkZHJlc3M+IiB9IH0=\n     ```\n\n- JavaScript (CosmES):\n\n  ```ts\n  import { getCw20Balance } from '@goblinhunt/cosmes/client';\n\n  const RPC = 'https://terra-classic-rpc.publicnode.com';\n  const token = '<tokenContractAddress>';\n  const wallet = '<walletAddress>';\n  const balance = await getCw20Balance(RPC, { address: wallet, token });\n  console.log(balance.toString());\n  ```\n\n## Interact with a CW20 contract\n\n- CW20 is a CosmWasm contract and `MsgExecuteContract` is used to interact with it.\n- Breakdown of message payload format is as follows (similar to `bank/MsgSend` but `execute_msg` is added):\n\n```json\n{\n  \"type\": \"wasm/MsgExecuteContract\",\n  \"value\": {\n    // sender address\n    \"sender\": \"terra1zyrpkll2xpgcdsz42xm3k8qfnddcdu0w7jzx6y\",\n\n    // token contract address\n    \"contract\": \"terra1rz5chzn0g07hp5jx63srpkhv8hd7x8pss20w2e\",\n\n    // base64-encoded payload of contract execution message (refer to below)\n    \"execute_msg\": \"ewogICJzZW5kIjogewogICAgImFtb3VudCI6ICIxMDAwMDAwMDAwIiwKICAgICJjb250cmFjdCI6IDxyZWNpcGllbnRDb250cmFjdEFkZHJlc3M+LAogICAgIm1zZyI6ICJleUp6YjIxbFgyMWxjM05oWjJVaU9udDlmUT09IiAKICB9Cn0=\",\n\n    // used in case you are sending native tokens along with this message\n    \"coins\": []\n  }\n}\n```\n\nCosmES example for a CW20 `transfer`:\n\n```ts\nimport { MnemonicWallet } from '@goblinhunt/cosmes/wallet';\nimport { MsgExecuteContract } from '@goblinhunt/cosmes/client';\n\nconst wallet = new MnemonicWallet({\n  mnemonic: '<mnemonic>',\n  bech32Prefix: 'terra',\n  chainId: 'columbus-5',\n  rpc: 'https://terra-classic-rpc.publicnode.com',\n  gasPrice: { denom: 'uluna', amount: '28.325' },\n  coinType: 330,\n  index: 0,\n});\n\nconst execMsg = { transfer: { recipient: '<recipient>', amount: '1000000' } } as const;\n\nconst msg = new MsgExecuteContract({\n  sender: wallet.address,\n  contract: '<tokenContractAddress>',\n  msg: execMsg,\n  funds: [],\n});\n\nconst unsigned = { msgs: [msg], memo: 'cw20 transfer' };\nconst fee = await wallet.estimateFee(unsigned, 1.2);\nconst txHash = await wallet.broadcastTx(unsigned, fee);\nconsole.log('txhash', txHash);\n```\n\n## Send CW20 to another contract and execute message\n\n- Example\n  - [Finder](https://finder.terraclassic.community/columbus-5/tx/99CFBABE9DBC1059EF40B985D17ED9CCBA11570B28B032D4E57D527FD298F60A)\n  - [Raw result](https://terra-classic-lcd.publicnode.com/cosmos/tx/v1beta1/txs/99CFBABE9DBC1059EF40B985D17ED9CCBA11570B28B032D4E57D527FD298F60A)\n\n```json\n// base64-encode the below message (without the comments), send that as `execute_msg`\n{\n  \"send\": {\n    // amount of CW20 tokens being transferred\n    \"amount\": \"1000000000\",\n\n    // recipient of this transfer\n    \"contract\": <recipientContractAddress>,\n\n    // execute_msg to be executed in the context of recipient contract\n    \"msg\": \"eyJzb21lX21lc3NhZ2UiOnt9fQ==\" \n  }\n}\n```\n\n## Transfer CW20 tokens\n\n- `transfer` moves CW20 balance within the token contract. `send` both transfers and relays an execute message to the recipient contract.\n- Example\n  - [Finder](https://finder.terraclassic.community/columbus-5/tx/F424552E25FDE52FEC229E04AE719A5B91D99E1088DC5F4978B263516A269FB1)\n  - [Raw result](https://terra-classic-lcd.publicnode.com/cosmos/tx/v1beta1/txs/F424552E25FDE52FEC229E04AE719A5B91D99E1088DC5F4978B263516A269FB1)\n- Find other messages at [cw20 documentation](https://crates.io/crates/cw20)\n\n```json\n{\n  \"transfer\": {\n    \"amount\": \"1000000\",\n    \"recipient\": \"<recipient>\"\n  }\n}\n",
    "previousSlug": "develop/smart-contracts/interact-with-smart-contract",
    "nextSlug": "develop/module-specifications/module-specifications"
  },
  {
    "slug": "develop/module-specifications/module-specifications",
    "path": "/develop/module-specifications/module-specifications/",
    "sourceFile": "content/docs/develop/module-specifications/module-specifications.md",
    "group": "Develop",
    "navTitle": "Module specifications",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": true,
    "navOrder": 105,
    "title": "Module specifications",
    "description": "Explore Terra Classic Core modules, parameters, and Classic-specific behaviour.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/module-specifications.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "How to use these specs",
        "id": "how-to-use-these-specs"
      },
      {
        "depth": 2,
        "title": "Block lifecycle overview",
        "id": "block-lifecycle-overview"
      },
      {
        "depth": 3,
        "title": "Begin block",
        "id": "begin-block"
      },
      {
        "depth": 3,
        "title": "Process messages",
        "id": "process-messages"
      },
      {
        "depth": 3,
        "title": "End block",
        "id": "end-block"
      },
      {
        "depth": 2,
        "title": "Conventions",
        "id": "conventions"
      },
      {
        "depth": 3,
        "title": "Currency denominations",
        "id": "currency-denominations"
      }
    ],
    "body": "Terra Classic Core is the Golang implementation of the Terra Classic protocol, built on top of the [Cosmos SDK](https://cosmos.network/appchains) and [CometBFT](https://cometbft.com/). Use these module specifications to understand how Classic’s on-chain logic is organized and how each module contributes to validator operations, governance, and the wider economy.\n\n## How to use these specs\n\nEach document starts with the module’s role in the protocol and then dives into state, message handling, and block transitions. Parameter tables at the end highlight defaults and governance-controlled values. The specs are designed to supplement a direct read of the Terra Core source code and help contributors reason about Classic-specific behavior.\n\n> **Note**\n> References to seigniorage and historical market swaps reflect legacy Terra protocol behavior. On Terra Classic, seigniorage is fully burned. Native LUNC and USTC swaps are live through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0's no-mint pool design.\n\nMany Terra Classic modules are inherited from the Cosmos SDK with Classic-specific parameters and custom hooks.\n\n## Block lifecycle overview\n\n### Begin block\n\n- Distribution: pay rewards for the previous block.\n- Slashing: check downtime and double-signing evidence.\n\n### Process messages\n\n- Route and execute tx messages in their respective modules.\n\n### End block\n\n- Crisis: assert registered invariants.\n- Oracle: tally exchange-rate votes (`VotePeriod`) and penalise oracle downtime (`SlashWindow`).\n- Governance: expire deposits/votes and execute passed proposals.\n- Market: maintain Market Module 2.0 swap state and safety-gated LUNC/USTC liquidity.\n- Treasury: adjust tax rate and reward weight at each epoch.\n- Staking: recompute the top-130 active validator set.\n\n## Conventions\n\n### Currency denominations\n\n- LUNC is Terra Classic’s staking and governance asset (`uluna` microunit).\n- All denominations use microunits (`10^-6`) on-chain.\n\nPrice discovery relies on the [oracle module](/develop/module-specifications/spec-oracle/), while the [market module](/develop/module-specifications/spec-market/) powers Swap Protocol for native LUNC and USTC swaps using oracle-aware pricing and bounded liquidity.\n",
    "previousSlug": "develop/smart-contracts/manage-cw20-tokens",
    "nextSlug": "develop/module-specifications/spec-auth"
  },
  {
    "slug": "develop/module-specifications/spec-auth",
    "path": "/develop/module-specifications/spec-auth/",
    "sourceFile": "content/docs/develop/module-specifications/spec-auth.md",
    "group": "Develop",
    "navTitle": "Auth module (x/auth)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 106,
    "title": "Auth module (x/auth)",
    "description": "Ante handler, vesting accounts, and transaction gas parameters.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-auth.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Overview",
        "id": "overview"
      },
      {
        "depth": 2,
        "title": "Ante flow summary",
        "id": "ante-flow-summary"
      },
      {
        "depth": 2,
        "title": "Accounts and vesting",
        "id": "accounts-and-vesting"
      },
      {
        "depth": 2,
        "title": "Parameters",
        "id": "parameters"
      },
      {
        "depth": 2,
        "title": "CLI and SDK notes",
        "id": "cli-and-sdk-notes"
      }
    ],
    "body": "> **Note**\n>\n> Terra Classic extends the Cosmos SDK [`x/auth`](https://docs.cosmos.network/main/modules/auth/) module with a custom ante-handler pipeline that integrates burn tax, treasury splits, and wasm fees. This document focuses on Classic-specific behaviour and current defaults.\n\n## Overview\n\n`x/auth` is responsible for account state, signature and sequence checks, fee deduction, and ante-handler orchestration. Classic keeps legacy account types (continuous vesting, periodic vesting, delayed vesting) to preserve historical balances, but no new vesting grants are minted through this module today.\n\nKey behaviours:\n\n- **Custom ante pipeline:** `custom/auth/ante` wires additional decorators that enforce burn tax via the `x/tax` keeper, share fees with treasury, and guard against memo spamming, minimum initial deposits, and IBC flood attacks.\n- **Tax integration:** `FilterMsgAndComputeTax()` (see `custom/auth/ante/fee_tax.go`) inspects messages to compute burn taxes using `x/treasury`, `x/tax`, and `x/taxexemption`. Bank transfers, `MsgSwapSend`, and wasm fund movements participate in burn tax unless exempt.\n- **Fee distribution:** After fees are charged, decorators split amounts between `fee_collector` and treasury burn module according to `x/treasury` parameters.\n- **Account management:** The module still exposes the standard APIs for accounts, sequences, and sign mode handling. Classic uses the proto-based `TxConfig` from Cosmos SDK v0.47.\n\n## Ante flow summary\n\n1. **SetUpContextDecorator** – initialise gas meter with block gas limit.\n2. **TxPriorityDecorator** – prioritise oracle vote/prevote traffic to protect consensus-critical messages.\n3. **MinimumFeesDecorator** – require `gas_price ≥ min_gas_price` unless the transaction belongs to a burn-tax exempt address list.\n4. **TaxFeeDecorator / BurnTaxFeeDecorator** – compute burn tax, collect it via `x/tax`, and forward the residual fee to the fee collector.\n5. **ValidateMemoDecorator** – enforce memo length (`MaxMemoCharacters`) and block banned prefixes (anti-phishing memo filters).\n6. **SigVerification** – enforce signer and signature cost limits.\n7. **Post handler** – Classic also registers a post-handler (`custom/auth/post`) to finalise taxes after execution.\n\nSee `custom/auth/ante/handler.go` for the complete decorator chain.\n\n## Accounts and vesting\n\n- Base accounts leverage Cosmos SDK `BaseAccount`.\n- Legacy vesting accounts (`DelayedVestingAccount`, `ContinuousVestingAccount`, `PeriodicVestingAccount`) are retained for historical compatibility. The chain does not mint new vesting schedules, but governance can migrate or claw back existing ones via custom proposals.\n\n## Parameters\n\nSubspace: `auth`\n\n| Name | Description | Type | Default |\n| --- | --- | --- | --- |\n| `MaxMemoCharacters` | Maximum memo length per transaction. Enforced by `ValidateMemoDecorator`. | `uint64` | `256` |\n| `TxSigLimit` | Maximum number of signatures permitted on a single tx. Protects ante verification cost. | `uint64` | `7` |\n| `TxSizeCostPerByte` | Gas multiplier applied to raw tx byte size. | `uint64` | `10` |\n| `SigVerifyCostED25519` | Gas charged per Ed25519 signature verification. | `uint64` | `590` |\n| `SigVerifyCostSecp256k1` | Gas charged per secp256k1 signature verification. | `uint64` | `1000` |\n\n`TxSigLimit` differs from the historical Terra limit (100) and remains aligned with Cosmos SDK v0.47 defaults.\n\n## CLI and SDK notes\n\n- Use `terrad tx ... --fees` or `--gas-prices` to satisfy minimum fee requirements; transactions without adequate fees are rejected before message execution.\n- Burn tax is deducted automatically; clients should not pre-deduct taxes from send amounts.\n",
    "previousSlug": "develop/module-specifications/module-specifications",
    "nextSlug": "develop/module-specifications/spec-authz"
  },
  {
    "slug": "develop/module-specifications/spec-authz",
    "path": "/develop/module-specifications/spec-authz/",
    "sourceFile": "content/docs/develop/module-specifications/spec-authz.md",
    "group": "Develop",
    "navTitle": "Authz module (x/authz)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 107,
    "title": "Authz module (x/authz)",
    "description": "Delegate message execution permissions with fine-grained controls.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-authz.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Overview",
        "id": "overview"
      },
      {
        "depth": 2,
        "title": "Classic-specific behaviour",
        "id": "classic-specific-behaviour"
      },
      {
        "depth": 2,
        "title": "Message types",
        "id": "message-types"
      },
      {
        "depth": 2,
        "title": "Storage",
        "id": "storage"
      },
      {
        "depth": 2,
        "title": "Operational notes",
        "id": "operational-notes"
      },
      {
        "depth": 2,
        "title": "Event hooks",
        "id": "event-hooks"
      }
    ],
    "body": "> **Note**\n>\n> `x/authz` ships from the Cosmos SDK with minimal Classic-specific changes. It remains the standard mechanism for delegating message execution to other wallets or bots. Classic integrates it with burn-tax logic when `MsgExec` wraps bank transfers, swaps, or wasm executions.\n\n## Overview\n\nAuthorization enables an account (granter) to allow another account (grantee) to execute specific messages on their behalf. The grant can be time-limited and message-scoped. Classic uses authz for:\n\n- Custodial services executing staking, distribution, and governance messages for users.\n- dApp operators enabling automated treasury movements while maintaining custody separation.\n\nInternally, the module stores `Grant` objects keyed by `(granter, grantee, msgType)`. Execution via `MsgExec` decrements usage limits (for `SpendLimit` authz) and emits events compatible with Cosmos SDK tooling.\n\n## Classic-specific behaviour\n\n- **Burn tax integration:** When `MsgExec` forwards bank sends, swaps, or wasm fund transfers, the wrapped messages flow through the same burn-tax decorators as direct transactions. See `custom/auth/ante/fee_tax.go` where `MsgExec` is recursively inspected.\n- **No custom params:** Terra Classic does not override the Cosmos SDK `x/authz` parameter set and leaves the module without a dedicated param subspace. Governance would manage limits via on-chain upgrades if needed.\n\n## Message types\n\n- **`MsgGrant`** – create or update an authorization (`GenericAuthorization`, `SendAuthorization`, custom staking/gov types). Grants persist until expiration time.\n- **`MsgRevoke`** – remove an existing grant for a given message type.\n- **`MsgExec`** – execute one or more messages on behalf of the granter. Each embedded message must list the granter as its only signer.\n\nAll message types are defined in `cosmos.authz.v1beta1`. Classic accepts the same Protobuf encodings as upstream chains.\n\n## Storage\n\n- `Grant` key: `0x01 | granter | grantee | msgTypeURL`.\n- Values track authorization payload plus expiration (block time).\n- No additional Classic-specific indexes are introduced.\n\n## Operational notes\n\n- Use `terrad tx authz grant` with `--period` to set an expiry.\n- To delegate spend of non-bonded assets, use `--authorization send` with a `--spend-limit` specifying microunits.\n- When wrapping multiple messages in `MsgExec`, ensure each is individually authorised; otherwise the entire execution fails atomically.\n\n## Event hooks\n\n`x/authz` emits standard events (`grant`, `revoke`, `exec`). Downstream systems (indexers, analytics) should subscribe to these events for grant bookkeeping.\n",
    "previousSlug": "develop/module-specifications/spec-auth",
    "nextSlug": "develop/module-specifications/spec-bank"
  },
  {
    "slug": "develop/module-specifications/spec-bank",
    "path": "/develop/module-specifications/spec-bank/",
    "sourceFile": "content/docs/develop/module-specifications/spec-bank.md",
    "group": "Develop",
    "navTitle": "Bank module (x/bank)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 108,
    "title": "Bank module (x/bank)",
    "description": "Account balances, token transfers, and supply tracking.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-bank.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Overview",
        "id": "overview"
      },
      {
        "depth": 2,
        "title": "Message types",
        "id": "message-types"
      },
      {
        "depth": 3,
        "title": "`MsgSend`",
        "id": "msgsend"
      },
      {
        "depth": 3,
        "title": "`MsgMultiSend`",
        "id": "msgmultisend"
      },
      {
        "depth": 2,
        "title": "Classic integrations",
        "id": "classic-integrations"
      },
      {
        "depth": 2,
        "title": "Parameters",
        "id": "parameters"
      },
      {
        "depth": 2,
        "title": "CLI usage",
        "id": "cli-usage"
      },
      {
        "depth": 2,
        "title": "API queries",
        "id": "api-queries"
      }
    ],
    "body": "> **Note**\n>\n> Terra Classic ships a custom wrapper around the Cosmos SDK [`x/bank`](https://docs.cosmos.network/main/modules/bank/) module to integrate burn tax calculation, keep backwards-compatible CLI commands, and support tax exemptions. This document highlights Classic-specific behaviour.\n\n## Overview\n\n`x/bank` maintains account balances and handles token transfers. Classic extends it via `custom/bank` to:\n\n- Register a CLI that understands burn-tax exemptions and supports legacy flags.\n- Provide simulation helpers that avoid failing due to tax-induced fee shortages.\n\nThe core keeper still comes from the Cosmos SDK, so all standard functionality (`SendCoins`, `BurnCoins`, `SetBalance`) behaves as expected. Tax enforcement happens in the ante-handler (`custom/auth/ante/fee_tax.go`) and message server (`custom/bank/keeper/keeper.go`) rather than inside the bank keeper itself.  \n\n> **Note**\n>\n> Classic uses a legacy amino encoding for messages.  \n> Instead of `cosmos-sdk/MsgSend`, it uses `bank/MsgSend`. It is recommended to use protobuf encoding for new code.\n\n## Message types\n\n### `MsgSend`\n\nStandard single-sender, single-recipient transfer.\n\n- Burn tax: `custom/auth/ante` deducts burn tax before the bank keeper executes the send unless the sender and recipient are exempt via `x/taxexemption`.\n- Tax exemption: Addresses listed in `x/taxexemption` bypass burn tax when sending to other exempt addresses.\n- Multiple signers: Not supported; use `MsgMultiSend` or authz with multiple `MsgSend`s.\n\n### `MsgMultiSend`\n\nBatch transfer with multiple inputs and outputs.\n\n- All inputs must balance with outputs (`Σ inputs = Σ outputs`).\n- Burn tax is applied per input address that is not fully exempt. The ante-handler computes taxes on each input coin set.\n- Non-taxable funds (e.g. contract payouts) propagate via the `nonTaxableTaxes` tracking in `FilterMsgAndComputeTax()`.\n\n## Classic integrations\n\n- **Tax module:** `x/tax` consumes bank keeper APIs to move burn-tax proceeds into the fee collector and splits them between burn, oracle rewards, and treasury.\n- **Treasury:** `x/treasury` tracks epoch tax proceeds recorded by the tax keeper. Bank transfers supply the raw data.\n- **Wasm contracts:** Contract-executed transfers are taxed unless both the sender and contract are exempt.\n\n## Parameters\n\nSubspace: `bank`\n\n| Name | Description | Type | Default |\n| --- | --- | --- | --- |\n| `DefaultSendEnabled` | Global flag controlling whether new denominations are send-enabled by default. | `bool` | `true` |\n\nClassic no longer uses the per-denom `SendEnabled` list; governance proposals can still toggle `DefaultSendEnabled` if required.\n\n## CLI usage\n\nClassic exposes `terrad tx bank send` and `multisend` with automatic burn-tax handling. Clients only need to specify the desired amount; taxes are deducted from the input coins, reducing the received amount accordingly.\n\n## API queries\n\n`x/bank` keeps the standard gRPC and REST endpoints for:\n\n- Balances (`/cosmos.bank.v1beta1.Query/Balance`)\n- Supply (`/cosmos.bank.v1beta1.Query/TotalSupply`)\n- Denom metadata and send-enabled flags\n\nThese services reflect post-tax balances because taxes are deducted before bank writes occur.\n",
    "previousSlug": "develop/module-specifications/spec-authz",
    "nextSlug": "develop/module-specifications/spec-capability"
  },
  {
    "slug": "develop/module-specifications/spec-capability",
    "path": "/develop/module-specifications/spec-capability/",
    "sourceFile": "content/docs/develop/module-specifications/spec-capability.md",
    "group": "Develop",
    "navTitle": "Capability module (x/capability)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 109,
    "title": "Capability module (x/capability)",
    "description": "Capability keeper for isolating inter-module access rights.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-capability.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Role in Terra Classic",
        "id": "role-in-terra-classic"
      },
      {
        "depth": 2,
        "title": "State",
        "id": "state"
      },
      {
        "depth": 2,
        "title": "Initialization flow",
        "id": "initialization-flow"
      },
      {
        "depth": 2,
        "title": "Notes for integrators",
        "id": "notes-for-integrators"
      }
    ],
    "body": "> **Note**\n>\n> Terra Classic uses the Cosmos SDK capability keeper to isolate IBC, wasm, and tax sub-modules. The Classic application seals the keeper during boot to prevent capability leakage and preserve deterministic middleware ordering.\n\n## Role in Terra Classic\n\n`x/capability` provides scoped capability sub-keepers to modules that interact with external systems:\n\n- `x/ibc` and `x/transfer` claim channel and port capabilities.\n- `ibc-hooks` registers wasm callback scopes for contract-triggered IBC packets.\n- `x/wasm` inherits a scoped keeper to bind contract callbacks safely.\n\nOnce the Terra app creates all scoped keepers in `app/keepers/keepers.go`, it seals the main keeper (`InitializeAndSeal`) to prevent additional scopes from being created at runtime. This protects against modules trying to access foreign capabilities.\n\n## State\n\n- KV store: retains the global capability index and owners mapping.\n- Memory store: caches active capability pointers for fast lookup.\n\nState keys mirror Cosmos SDK defaults (`capability/types`). Classic does not modify the data structure.\n\n## Initialization flow\n\n1. Instantiate `capability.Keeper` with persistent and in-memory store keys.\n2. Create scoped keepers for IBC core, transfer, wasm, dyncomm, and other modules.\n3. Call `InitializeAndSeal` after loading state to populate the in-memory cache and lock the keeper.\n\n## Notes for integrators\n\n- Creating a new module that needs capability access requires wiring through `app/keepers/keepers.go` before sealing.\n- Governance proposals cannot add new scopes without a software upgrade, ensuring deterministic capability ownership.\n",
    "previousSlug": "develop/module-specifications/spec-bank",
    "nextSlug": "develop/module-specifications/spec-consensus"
  },
  {
    "slug": "develop/module-specifications/spec-consensus",
    "path": "/develop/module-specifications/spec-consensus/",
    "sourceFile": "content/docs/develop/module-specifications/spec-consensus.md",
    "group": "Develop",
    "navTitle": "Consensus params module (x/consensus)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 110,
    "title": "Consensus params module (x/consensus)",
    "description": "Governance-controlled Tendermint parameter updates.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-consensus.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic adopts the Cosmos SDK `x/consensus` module to manage Tendermint/CometBFT consensus parameters through governance. The module stores the active block, evidence, and validator parameter sets and exposes a single governance-controlled message to mutate them. Please see the upstream specification for [x/consensus](https://docs.cosmos.network/main/modules/consensus/) for more details.\n",
    "previousSlug": "develop/module-specifications/spec-capability",
    "nextSlug": "develop/module-specifications/spec-crisis"
  },
  {
    "slug": "develop/module-specifications/spec-crisis",
    "path": "/develop/module-specifications/spec-crisis/",
    "sourceFile": "content/docs/develop/module-specifications/spec-crisis.md",
    "group": "Develop",
    "navTitle": "Crisis module (x/crisis)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 111,
    "title": "Crisis module (x/crisis)",
    "description": "Invariant checks and chain-halting safeguards.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-crisis.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic adopts the Cosmos SDK `x/crisis` module to guard against invariant violations. Please see the upstream specification for [x/crisis](https://docs.cosmos.network/main/modules/crisis/) for more details.\n",
    "previousSlug": "develop/module-specifications/spec-consensus",
    "nextSlug": "develop/module-specifications/spec-distribution"
  },
  {
    "slug": "develop/module-specifications/spec-distribution",
    "path": "/develop/module-specifications/spec-distribution/",
    "sourceFile": "content/docs/develop/module-specifications/spec-distribution.md",
    "group": "Develop",
    "navTitle": "Distribution module (x/distribution)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 112,
    "title": "Distribution module (x/distribution)",
    "description": "Reward distribution to validators, delegators, and the community pool.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-distribution.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Classic overview",
        "id": "classic-overview"
      },
      {
        "depth": 2,
        "title": "Parameters (subspace `distribution`)",
        "id": "parameters-subspace-distribution"
      },
      {
        "depth": 2,
        "title": "Reward flow",
        "id": "reward-flow"
      },
      {
        "depth": 2,
        "title": "Messages used on Classic",
        "id": "messages-used-on-classic"
      }
    ],
    "body": "> **Note**\n>\n> Terra Classic keeps the Cosmos SDK distribution module but relies on burn-tax inflows instead of inflation or seigniorage. Rewards are passively accumulated and must be withdrawn by validators and delegators.\n\n## Classic overview\n\n- **Burn-tax inflow.** `custom/auth/ante/fee_tax.go` forwards the burn-tax portion of every transaction to the fee collector. `x/distribution` allocates that balance at end block using the standard global split.\n- **Community pool.** `CommunityTax` is set to `0.5`, so the community pool grows with every transaction. Governance or users can still call `MsgFundCommunityPool` to deposit additional funds.\n- **Manual withdrawals.** Validators use `MsgWithdrawValidatorCommission`;delegators use `MsgWithdrawDelegatorReward`. Nothing auto-claims.\n\n## Parameters (subspace `distribution`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `CommunityTax` | Percentage of collected fees sent to community pool. | `0.5` |\n| `BaseProposerReward` | Fixed proposer reward share. | `0` |\n| `BonusProposerReward` | Additional proposer reward scaled by participation. | `0` |\n| `WithdrawAddrEnabled` | Allow custom withdrawal addresses. | `true` |\n\n## Reward flow\n\n1. Fees and burn-tax proceeds accumulate in the fee collector module account.\n2. During `EndBlock`, the distribution keeper pays proposer rewards (`base + bonus`).\n3. Any configured community tax is transferred to the community pool (no-op on Classic).\n4. Remaining coins are recorded in `FeePool` for future delegator withdrawals and oracle ballot rewards.\n\n## Messages used on Classic\n\n- **`MsgSetWithdrawAddress`** — update the account receiving staking rewards.\n- **`MsgWithdrawDelegatorReward`** — claim rewards for a specific validator/delegator pair.\n- **`MsgWithdrawValidatorCommission`** — withdraw accumulated validator commission.\n- **`MsgFundCommunityPool`** — manually deposit funds into the community pool when governance approved spending budgets.\n\nSee the upstream Cosmos SDK documentation for full protobuf definitions and CLI usage examples.\n",
    "previousSlug": "develop/module-specifications/spec-crisis",
    "nextSlug": "develop/module-specifications/spec-dyncomm"
  },
  {
    "slug": "develop/module-specifications/spec-dyncomm",
    "path": "/develop/module-specifications/spec-dyncomm/",
    "sourceFile": "content/docs/develop/module-specifications/spec-dyncomm.md",
    "group": "Develop",
    "navTitle": "DynComm module (x/dyncomm)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 113,
    "title": "DynComm module (x/dyncomm)",
    "description": "Dynamic validator commission band control for Classic staking.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-dyncomm.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "How it works",
        "id": "how-it-works"
      },
      {
        "depth": 2,
        "title": "Parameters (`subspace`: `dyncomm`)",
        "id": "parameters-subspace-dyncomm"
      },
      {
        "depth": 2,
        "title": "Genesis and queries",
        "id": "genesis-and-queries"
      },
      {
        "depth": 2,
        "title": "Operator guidance",
        "id": "operator-guidance"
      }
    ],
    "body": "> **Note**\n>\n> `x/dyncomm` is a Terra Classic-specific module that adjusts the minimum commission each validator must charge. It reacts to validator voting power and overall delegation concentration to discourage commission-free strategies that centralise stake under a few validators.\n\n## How it works\n\n- **Dynamic floor.** Every epoch (end block), the module computes a recommended minimum commission based on the StrathCole formula using four parameters: `MaxZero`, `SlopeBase`, `SlopeVpImpact`, and `Cap`.\n- **Safety cap.** Even after adjustments, the required commission cannot exceed `Cap` (default 20%).\n- **Per-validator tracking.** `keeper.EndBlocker()` scans the staking keeper for all validators and updates the minimum commission values stored in `x/staking`. Validators cannot set a commission below the computed floor.\n- **No direct transactions.** The module has no `Msg` server. Parameter updates happen through governance parameter-change proposals targeting the `dyncomm` subspace.\n\nThe calculation relies on validator voting power statistics gathered from staking, so it must run after staking updates within the end-block order configured in `app/app.go`.\n\n## Parameters (`subspace`: `dyncomm`)\n\n| Name | Purpose | Default |\n| --- | --- | --- |\n| `MaxZero` | Voting-power share below which validators may charge 0% commission. | `0.5` |\n| `SlopeBase` | Baseline slope in the StrathCole formula. Controls how quickly minimum commission rises. | `2` |\n| `SlopeVpImpact` | Multiplier on voting-power impact. Higher values penalise large validators more. | `10` |\n| `Cap` | Maximum enforced commission floor. | `0.2` (20%) |\n\nAll parameters are decimal values in the SDK `Dec` type. Governance proposals must keep them within validation bounds: `MaxZero` and `Cap` between 0 and 1, `SlopeBase ≥ 0`, `SlopeVpImpact > 0`.\n\n## Genesis and queries\n\n- **Genesis:** `types.DefaultGenesisState()` seeds the parameters above. There is no validator-specific state at genesis.\n- **Queries:** `Query/Params` returns the current parameter set. Use `terrad q dyncomm params` to inspect the configuration.\n\n## Operator guidance\n\n- Validators should monitor the module to ensure their commission is never set below the enforced minimum; attempts to lower it will be rejected by staking if below the dynamic floor.\n- Parameter adjustments should be coordinated with the staking community, as aggressive settings can increase minimum commission for smaller validators too.\n",
    "previousSlug": "develop/module-specifications/spec-distribution",
    "nextSlug": "develop/module-specifications/spec-evidence"
  },
  {
    "slug": "develop/module-specifications/spec-evidence",
    "path": "/develop/module-specifications/spec-evidence/",
    "sourceFile": "content/docs/develop/module-specifications/spec-evidence.md",
    "group": "Develop",
    "navTitle": "Evidence module (x/evidence)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 114,
    "title": "Evidence module (x/evidence)",
    "description": "Evidence handling for consensus faults and slashing workflows.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-evidence.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic uses the Cosmos SDK [`x/evidence`](https://docs.cosmos.network/main/modules/evidence/) module without modifications. Refer to the upstream specification for message formats, handlers, and state.\n",
    "previousSlug": "develop/module-specifications/spec-dyncomm",
    "nextSlug": "develop/module-specifications/spec-feegrant"
  },
  {
    "slug": "develop/module-specifications/spec-feegrant",
    "path": "/develop/module-specifications/spec-feegrant/",
    "sourceFile": "content/docs/develop/module-specifications/spec-feegrant.md",
    "group": "Develop",
    "navTitle": "Feegrant module (x/feegrant)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 115,
    "title": "Feegrant module (x/feegrant)",
    "description": "Allow trusted accounts to pay fees on behalf of other users.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-feegrant.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic uses the Cosmos SDK [`x/feegrant`](https://docs.cosmos.network/main/modules/feegrant/) module without custom logic. Grants, allowances, and CLI flows behave exactly as upstream.\n>\n> Burn tax is charged in the ante handler (`custom/auth/ante/fee_tax.go`) **before** fee allowances are applied. Grantees must ensure the granter account holds enough funds to cover both the burn tax and gas fees.\n> Fee grants are often combined with tax-exemption lists for infrastructure wallets. Review `x/taxexemption` when configuring service accounts.\n",
    "previousSlug": "develop/module-specifications/spec-evidence",
    "nextSlug": "develop/module-specifications/spec-governance"
  },
  {
    "slug": "develop/module-specifications/spec-governance",
    "path": "/develop/module-specifications/spec-governance/",
    "sourceFile": "content/docs/develop/module-specifications/spec-governance.md",
    "group": "Develop",
    "navTitle": "Governance module (x/gov)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 116,
    "title": "Governance module (x/gov)",
    "description": "Proposal lifecycle, deposits, voting, and parameter control.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-governance.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic's Governance module inherits from Cosmos SDK's `x/gov` module. Please refer to the [Cosmos SDK documentation](https://docs.cosmos.network/main/modules/gov/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-feegrant",
    "nextSlug": "develop/module-specifications/spec-ibc"
  },
  {
    "slug": "develop/module-specifications/spec-ibc",
    "path": "/develop/module-specifications/spec-ibc/",
    "sourceFile": "content/docs/develop/module-specifications/spec-ibc.md",
    "group": "Develop",
    "navTitle": "IBC core module (x/ibc)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 117,
    "title": "IBC core module (x/ibc)",
    "description": "IBC routing, channel management, and light client integration.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic enables IBC routing through the Cosmos SDK core IBC module. Please refer to the [upstream documentation](https://ibc.cosmos.network/v7/ibc/overview/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-governance",
    "nextSlug": "develop/module-specifications/spec-ibc-fee"
  },
  {
    "slug": "develop/module-specifications/spec-ibc-fee",
    "path": "/develop/module-specifications/spec-ibc-fee/",
    "sourceFile": "content/docs/develop/module-specifications/spec-ibc-fee.md",
    "group": "Develop",
    "navTitle": "IBC fee module (x/ibc-fee)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 118,
    "title": "IBC fee module (x/ibc-fee)",
    "description": "ICS-29 relayer incentivisation for Classic IBC packets.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc-fee.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic enables ICS-29 fee middleware to incentivise relayers. Please refer to the [ICS-29 fee middleware documentation](https://ibc.cosmos.network/v7/middleware/ics29-fee/overview/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-ibc",
    "nextSlug": "develop/module-specifications/spec-ibc-hooks"
  },
  {
    "slug": "develop/module-specifications/spec-ibc-hooks",
    "path": "/develop/module-specifications/spec-ibc-hooks/",
    "sourceFile": "content/docs/develop/module-specifications/spec-ibc-hooks.md",
    "group": "Develop",
    "navTitle": "IBC hooks module (ibc-hooks)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 119,
    "title": "IBC hooks module (ibc-hooks)",
    "description": "Middleware for wasm contract callbacks on IBC transfers.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc-hooks.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic leverages the ibc-hooks middleware to trigger CosmWasm contract callbacks on IBC packets. Please refer to the [upstream documentation](https://ibc.cosmos.network/v7/ibc/overview/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-ibc-fee",
    "nextSlug": "develop/module-specifications/spec-ica"
  },
  {
    "slug": "develop/module-specifications/spec-ica",
    "path": "/develop/module-specifications/spec-ica/",
    "sourceFile": "content/docs/develop/module-specifications/spec-ica.md",
    "group": "Develop",
    "navTitle": "Interchain accounts module (x/ica)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 120,
    "title": "Interchain accounts module (x/ica)",
    "description": "ICS-27 controller and host support on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ica.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic runs the ICS-27 interchain accounts controller and host stacks. Please refer to the [upstream documentation](https://ibc.cosmos.network/v7/apps/interchain-accounts/overview/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-ibc-hooks",
    "nextSlug": "develop/module-specifications/spec-market"
  },
  {
    "slug": "develop/module-specifications/spec-market",
    "path": "/develop/module-specifications/spec-market/",
    "sourceFile": "content/docs/develop/module-specifications/spec-market.md",
    "group": "Develop",
    "navTitle": "Market module (x/market)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 121,
    "title": "Market module (x/market)",
    "description": "Historical market-module behavior and the Market Module 2.0 no-mint source design.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-market.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Market Module 2.0 source design",
        "id": "market-module-20-source-design"
      },
      {
        "depth": 2,
        "title": "Historical behavior",
        "id": "historical-behavior"
      },
      {
        "depth": 2,
        "title": "Parameters (`subspace`: `market`)",
        "id": "parameters-subspace-market"
      },
      {
        "depth": 2,
        "title": "Queries and CLI",
        "id": "queries-and-cli"
      },
      {
        "depth": 2,
        "title": "Operational notes",
        "id": "operational-notes"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "> **Note**\n>\n> This page describes historical market-module behavior and the Market Module 2.0 source design used by [Swap Protocol](/swap-protocol/overview/). It should not be read as proof that a live mainnet Swap Protocol route is available. Read [Swap Protocol governance and status](/swap-protocol/governance-and-status/) before making production or user-facing claims.\n\n## Market Module 2.0 source design\n\n- **No minting during swaps.** Market Module 2.0 is designed to use prefilled protocol liquidity pools instead of minting output supply.\n- **Oracle-aware pricing.** USTC is priced by oracle-reported market data, not by a fixed 1 USD assumption.\n- **Finite epoch liquidity.** LUNC and USTC are held in distinct swap pools. Output capacity is limited by available balances and epoch rules.\n- **Remainder burns.** Remaining pool balances are burned at the next 30-day epoch boundary in the source design.\n- **Safety-first failure.** Unsupported routes, depleted liquidity, oracle quorum failure, TWAP sanity failure, or module disablement should reject swaps rather than expand supply.\n\nSee the [Swap Protocol overview](/swap-protocol/overview/), [Governance and status](/swap-protocol/governance-and-status/), and [Swap developer reference](/swap-protocol/developer-reference/) for product-level and integration guidance.\n\n## Historical behavior\n\nAfter May 2022, Terra Classic retained the market module but disabled the old algorithmic swap path to avoid uncontrolled mint/burn of LUNC. During that period, handlers and market state remained useful for backwards compatibility, but users relied on DEX liquidity pools for actual swaps.\n\nMarket Module 2.0 is the proposed design for reopening the native route without returning to the historical mint/burn execution model.\n\n## Parameters (`subspace`: `market`)\n\n| Name | Description | Default |\n| --- | --- | --- |\n| `BasePool` | Virtual market depth used by market-module swap calculations. Market Module 2.0 constrains this through adaptive capacity and absolute clamps in the source design. | Verify against current implementation before relying on a fixed value. |\n| `PoolRecoveryPeriod` | Blocks used for virtual pool recovery. Market Module 2.0 uses supply-scaled recovery behavior in the source design. | Verify against current implementation before relying on a fixed value. |\n| `MinStabilitySpread` | Minimum spread imposed on swaps. | Verify against current implementation before relying on a fixed value. |\n\nThe legacy `TobinTax` parameter belonged to historical Terra stablecoin swap behavior. Swap Protocol is scoped to LUNC and USTC; stable-to-stable routing is disabled in the Market Module 2.0 source design.\n\n## Queries and CLI\n\n- **Parameters:** `terrad q market params`\n- **Terra pool delta:** `terrad q market terra-pool-delta`\n\nThese calls are useful for backwards compatibility tooling and implementation review. Applications that expose any future Swap Protocol route should also track module enabled state, available route capacity, oracle status, and relevant execution errors where deployed node software exposes them.\n\n## Operational notes\n\n- Swap Protocol is not a return to unlimited algorithmic mint/burn swaps.\n- If the relevant output pool is depleted, a swap should fail instead of minting output tokens.\n- If oracle quorum or TWAP safety checks fail, the module can disable or reject swaps.\n- If a user or integration attempts a stable-to-stable route, the source design expects that route to be rejected.\n- Integrators should read the [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) page before routing user transactions through the module.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nUse current Terra Classic core releases, governance records, wallet support, and explorers to verify production availability.\n",
    "previousSlug": "develop/module-specifications/spec-ica",
    "nextSlug": "develop/module-specifications/spec-mint"
  },
  {
    "slug": "develop/module-specifications/spec-mint",
    "path": "/develop/module-specifications/spec-mint/",
    "sourceFile": "content/docs/develop/module-specifications/spec-mint.md",
    "group": "Develop",
    "navTitle": "Mint module (x/mint)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 122,
    "title": "Mint module (x/mint)",
    "description": "Inflation schedule and distribution handling (legacy on Classic).",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-mint.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic retains the Cosmos SDK mint module for compatibility, but inflation is disabled on mainnet. Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/mint/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-market",
    "nextSlug": "develop/module-specifications/spec-oracle"
  },
  {
    "slug": "develop/module-specifications/spec-oracle",
    "path": "/develop/module-specifications/spec-oracle/",
    "sourceFile": "content/docs/develop/module-specifications/spec-oracle.md",
    "group": "Develop",
    "navTitle": "Oracle module (x/oracle)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 123,
    "title": "Oracle module (x/oracle)",
    "description": "Exchange-rate voting, reward weighting, oracle slashing, and Swap Protocol price-feed responsibilities.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-oracle.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Classic behaviour",
        "id": "classic-behaviour"
      },
      {
        "depth": 2,
        "title": "Swap Protocol dependency",
        "id": "swap-protocol-dependency"
      },
      {
        "depth": 2,
        "title": "Messages",
        "id": "messages"
      },
      {
        "depth": 2,
        "title": "State",
        "id": "state"
      },
      {
        "depth": 2,
        "title": "End-block workflow",
        "id": "end-block-workflow"
      },
      {
        "depth": 2,
        "title": "Parameters (`subspace`: `oracle`)",
        "id": "parameters-subspace-oracle"
      },
      {
        "depth": 2,
        "title": "CLI shortcuts",
        "id": "cli-shortcuts"
      }
    ],
    "body": "Terra Classic validators feed external exchange rates for downstream protocol logic, including [Swap Protocol](/swap-protocol/overview/). Market Module 2.0 uses oracle-reported market pricing so native LUNC and USTC swaps do not rely on a fixed USTC peg assumption.\n\nThis module enforces the familiar prevote/vote handshake with slashing to keep price data honest. For Swap Protocol, oracle reliability is also a product safety requirement: missing, stale, or low-quorum price data can disable swaps.\n\n## Classic behaviour\n\n- **Vote cadence.** `VotePeriod` is 30 seconds (5 blocks). Validators must broadcast aggregate prevotes in period _t_ and reveal votes in period _t+1_. Same-period vote+prevote combinations are rejected (`ErrRevealPeriodMissMatch`).\n- **Aggregate flow.** Classic primarily uses `MsgAggregateExchangeRatePrevote` and `MsgAggregateExchangeRateVote`, bundling all whitelist denoms in a single message hashed as `sha256(\"salt:rates:validator\")`.\n- **Whitelist management.** Parameter `Whitelist` tracks allowed oracle denoms. Swap Protocol requires USTC market-price support rather than a fixed 1 USD assumption. Governance and chain upgrades can change the exact live whitelist, so operators should query current params before relying on a hardcoded list.\n- **Reference Terra logic.** Weighted medians are computed relative to the high-turnout denom (`ReferenceTerra`) and converted into cross rates for the rest. Results land in the keeper via `k.SetLunaExchangeRate()`.\n- **Reward funding.** Oracle reward pools receive their budget from `x/tax` splits. At each tally the module pays winners proportionally and decays the pool over `RewardDistributionWindow`.\n- **Miss counters & slashing.** Validators must keep a valid vote rate above `MinValidPerWindow` (5%) over the week-long `SlashWindow`. Offenders lose `SlashFraction` (0.01%) of stake and are jailed until unjailed manually.\n\n## Swap Protocol dependency\n\nMarket Module 2.0 depends on oracle pricing for safe LUNC and USTC swaps.\n\nThe Swap Protocol source design defines these safety expectations:\n\n| Control | Behavior |\n| --- | --- |\n| Price vote period | 5 blocks, approximately 30 seconds. |\n| Price calculation | Voting-power-weighted median for the current period. |\n| Quorum auto-disable | If either required asset has price votes from less than 50% voting power for 25 blocks, the market module disables until quorum is restored. |\n| TWAP sanity clamp | Each swap can fail if the current price differs by more than 10% from a 45-block oracle TWAP. |\n| USTC treatment | USTC is valued at market price, not as a guaranteed 1 USD asset. |\n\nSee [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) and [Validator operations](/swap-protocol/validator-operations/) for the Swap Protocol-specific operating model.\n\n## Messages\n\n- **`MsgAggregateExchangeRatePrevote`** – commits the hash of all exchange rates for the next period (`hash = sha256(\"salt:rate1,rate2,...:validator\")`). Multiple prevotes per period overwrite previous hashes.\n- **`MsgAggregateExchangeRateVote`** – reveals the salt and comma-separated rate list. Each entry is formatted as `<amount><denom>` (e.g., `0.00012ukrw`).\n- **`MsgDelegateFeedConsent`** – assigns a feeder account to a validator. CLI workflows (and the Classic E2E tests) confirm delegation before proceeding.\n\n## State\n\n| Store key | Description |\n| --- | --- |\n| `Prevotes` (`map[valoper][denom]AggregatePrevote`) | Current-period hashes waiting for reveal. |\n| `Votes` (`map[valoper][denom]AggregateVote`) | Revealed votes kept until tally completes. |\n| `LunaExchangeRate` (`map[denom]sdk.Dec`) | Latest accepted exchange rate per denom. |\n| `FeederDelegations` (`map[valoper]acc`) | Delegated feeder accounts. |\n| `MissCounters` (`map[valoper]int64`) | Missed-vote counters over the active slash window. |\n\n## End-block workflow\n\n1. Check if the block height is a multiple of `VotePeriod`.\n2. Build ballots per denom from revealed votes, discarding abstentions or jailed validators.\n3. Drop ballots lacking quorum (`VoteThreshold`, 50% voting power) or missing from `Whitelist`.\n4. Select `ReferenceTerra`, compute cross rates, and derive weighted medians.\n5. Update on-chain exchange rates, reward ballot winners, and increment miss counters.\n6. When a `SlashWindow` ends, slash and jail validators whose valid-vote ratio fell below `MinValidPerWindow`.\n7. Clear prevotes and votes for the next cycle while keeping the latest hash commitments.\n\n## Parameters (`subspace`: `oracle`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `VotePeriod` | Blocks per voting cycle. | `5` |\n| `VoteThreshold` | Minimum voting power required for a ballot. | `0.500000000000000000` |\n| `RewardBand` | Allowed deviation around the weighted median. | `0.020000000000000000` |\n| `RewardDistributionWindow` | Blocks used to pro-rate the reward pool. | `10512000` (`BlocksPerYear`) |\n| `Whitelist` | Allowed oracle denoms and related metadata. Swap Protocol requires current USTC market-price support. | Query live chain state; governance may update. |\n| `SlashFraction` | Stake slashed on oracle failure. | `0.000100000000000000` |\n| `SlashWindow` | Block span for counting misses. | `604800` (`BlocksPerWeek`) |\n| `MinValidPerWindow` | Required successful vote ratio. | `0.050000000000000000` |\n\nGovernance proposals targeting the `oracle` subspace can adjust any of these values.\n\n## CLI shortcuts\n\n- **Submit aggregate vote:** `terrad tx oracle aggregate-vote <rates> <validator> --from <feeder>`\n- **Delegate feeder:** `terrad tx oracle delegate-feed-consent <validator> <feeder>`\n- **Inspect params:** `terrad q oracle params`\n- **Check current prices:** `terrad q oracle exchange-rates`\n\nEnsure feeders fund their accounts with enough ULUNA for fees. Classic tooling typically relies on endpoints such as `https://terra-classic-lcd.publicnode.com` or `https://api-lunc-lcd.binodes.com` when scripting.\n\nFor Swap Protocol, feeder operators should also verify that USTC pricing is supported by their feeder binary and configured providers. If validators cannot maintain sufficient oracle participation, Swap Protocol should fail closed rather than execute swaps against unsafe price data.\n",
    "previousSlug": "develop/module-specifications/spec-mint",
    "nextSlug": "develop/module-specifications/spec-params"
  },
  {
    "slug": "develop/module-specifications/spec-params",
    "path": "/develop/module-specifications/spec-params/",
    "sourceFile": "content/docs/develop/module-specifications/spec-params.md",
    "group": "Develop",
    "navTitle": "Params module (x/params)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 124,
    "title": "Params module (x/params)",
    "description": "Parameter subspace management across modules.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-params.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> **Note**\n>\n> The params module has been deprecated in favor of letting each module keep its own parameters in the app state.  \n> Some modules still use the params module for governance proposals, but this is not recommended. These modules, until migrated, use the params keeper to store module parameter sets under individual subspaces. Those parameters can be updated through parameter-change proposals.\n>\n> Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/params/) for more details.\n",
    "previousSlug": "develop/module-specifications/spec-oracle",
    "nextSlug": "develop/module-specifications/spec-slashing"
  },
  {
    "slug": "develop/module-specifications/spec-slashing",
    "path": "/develop/module-specifications/spec-slashing/",
    "sourceFile": "content/docs/develop/module-specifications/spec-slashing.md",
    "group": "Develop",
    "navTitle": "Slashing module (x/slashing)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 125,
    "title": "Slashing module (x/slashing)",
    "description": "Downtime and double-signing penalties.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-slashing.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic inherits the Cosmos SDK slashing module to manage validator punishments. Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/slashing/) for a complete overview.\n",
    "previousSlug": "develop/module-specifications/spec-params",
    "nextSlug": "develop/module-specifications/spec-staking"
  },
  {
    "slug": "develop/module-specifications/spec-staking",
    "path": "/develop/module-specifications/spec-staking/",
    "sourceFile": "content/docs/develop/module-specifications/spec-staking.md",
    "group": "Develop",
    "navTitle": "Staking module (x/staking)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 126,
    "title": "Staking module (x/staking)",
    "description": "Validator set management, delegation, and bonding.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-staking.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic inherits the Cosmos SDK staking module to manage validator staking. Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/staking/) for a complete overview.\n>\n>\n> **Note**\n>\n> Terra Classic has implemented a custom voting power cap to prevent validators from having too much influence on the network. This cap is set to 20% of the total voting power.\n",
    "previousSlug": "develop/module-specifications/spec-slashing",
    "nextSlug": "develop/module-specifications/spec-tax"
  },
  {
    "slug": "develop/module-specifications/spec-tax",
    "path": "/develop/module-specifications/spec-tax/",
    "sourceFile": "content/docs/develop/module-specifications/spec-tax.md",
    "group": "Develop",
    "navTitle": "Tax module (x/tax)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 127,
    "title": "Tax module (x/tax)",
    "description": "Burn tax collection, splits, and effective gas price handling.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-tax.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Classic behaviour",
        "id": "classic-behaviour"
      },
      {
        "depth": 2,
        "title": "Parameters (`subspace`: `tax`)",
        "id": "parameters-subspace-tax"
      },
      {
        "depth": 2,
        "title": "Queries & CLI",
        "id": "queries-cli"
      }
    ],
    "body": "`x/tax` powers Terra Classic’s burn-tax and gas price floor. It intercepts fee payment, deducts the configured burn rate, and routes proceeds between burn, oracle, and community pools while exposing governance control over rates and gas price suggestions.\n\n## Classic behaviour\n\n- **Reverse-charge context.** The ante handler tags transactions that should pay burn tax. `Keeper.DeductTax()` exits early unless the reverse-charge flag is set, preventing duplicate deductions inside multi-message txs.\n- **Burn tax calculation.** `ComputeTax()` multiplies each spend coin by `BurnTaxRate` and truncates to integers. Zero results simply skip deduction.\n- **Processing splits.** `ProcessTaxSplits()` fetches Treasury-owned weights (`GetBurnSplitRate`, `GetOracleSplitRate`) and distribution community tax, splitting the collected tax into:\n  - Burn portion sent to `treasurytypes.BurnModuleName` for permanent removal.\n  - Oracle portion sent to `oracle` module account (funds oracle rewards).\n  - Community portion transferred to `distribution` and added to the community pool.\n- **Recording proceeds.** The remaining tax (after splits) plus metadata is recorded via `treasuryKeeper.RecordEpochTaxProceeds()` so treasury epoch logic can account for total burns.\n- **Gas price floor.** `GetEffectiveGasPrices()` compares the gov-controlled `GasPrices` list with `Ctx.MinGasPrices()` and enforces the max of each denom. RPC operators sometimes set `minimum-gas-prices=0uluna`, so the tax module’s values become the network-wide floor.\n\n## Parameters (`subspace`: `tax`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `GasPrices` | Recommended minimum gas prices per denom. | Multiple dec-coins (e.g., `0.028325uluna`, `0.0075uusd`). |\n| `BurnTaxRate` | Fraction of each taxable transfer burned (and split downstream). | `0.002500000000000000` (0.25%). |\n\nGovernance can update these parameters through `MsgUpdateParams` proposals routed to `x/gov`.\n\n## Queries & CLI\n\n- **Parameters:** `terrad q tax params`\n- **Gas price floor:** `terrad q tax gas-prices`\n- **Simulate tax:** `terrad q tax estimate <amount>` (custom CLI helper).\n- **Update params (gov proposal):** `terrad tx gov submit-proposal tax-update-params ...`\n",
    "previousSlug": "develop/module-specifications/spec-staking",
    "nextSlug": "develop/module-specifications/spec-taxexemption"
  },
  {
    "slug": "develop/module-specifications/spec-taxexemption",
    "path": "/develop/module-specifications/spec-taxexemption/",
    "sourceFile": "content/docs/develop/module-specifications/spec-taxexemption.md",
    "group": "Develop",
    "navTitle": "Tax exemption module (x/taxexemption)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 128,
    "title": "Tax exemption module (x/taxexemption)",
    "description": "Manage burn-tax exempt address lists for Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-taxexemption.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Core concepts",
        "id": "core-concepts"
      },
      {
        "depth": 2,
        "title": "Exemption rules",
        "id": "exemption-rules"
      },
      {
        "depth": 2,
        "title": "State",
        "id": "state"
      },
      {
        "depth": 2,
        "title": "Parameters (`subspace`: `taxexemption`)",
        "id": "parameters-subspace-taxexemption"
      },
      {
        "depth": 2,
        "title": "Governance workflow",
        "id": "governance-workflow"
      },
      {
        "depth": 2,
        "title": "Queries & CLI",
        "id": "queries-cli"
      }
    ],
    "body": "`x/taxexemption` lets Terra Classic governance define address “zones” that are exempt from the burn tax. Transactions remain taxable by default unless all participants satisfy the zone rules stored in this module.\n\n## Core concepts\n\n- **Zones.** Governance maintains named zones with boolean flags: `incoming`, `outgoing`, and `cross_zone`. These flags describe whether tax-free transfers are allowed into the zone, out of the zone, and across zones.\n- **Assignments.** Addresses can be assigned to at most one zone. The exemption check iterates every input/output pair and evaluates sender/recipient zones against the rules above.\n- **Full-governance control.** All mutations happen through governance messages (`MsgAddTaxExemptionZone`, `MsgRemoveTaxExemptionZone`, `MsgModifyTaxExemptionZone`, `MsgAddTaxExemptionAddress`, `MsgRemoveTaxExemptionAddress`). No direct user tx bypasses governance safeguards.\n- **Integration with `x/tax`.** The tax keeper calls `IsExemptedFromTax()` before deducting burn tax. If any participant fails the zone criteria, the entire transfer is taxed.\n\n## Exemption rules\n\nA transfer is tax free only when **every** (sender, recipient) pair satisfies at least one of the following:\n\n- Sender and recipient share the same zone.\n- Sender’s zone has `outgoing` and (`recipient has no zone` or `cross_zone` is true).\n- Recipient’s zone has `incoming` and (`sender has no zone` or `cross_zone` is true).\n- Cross-zone transfer where either zone has `cross_zone` set and permits the relevant direction.\n\nIf any recipient fails the rule set, the whole transaction is taxed.\n\n## State\n\n| Store key | Description |\n| --- | --- |\n| `ZonePrefix` | Stores serialized zone definitions keyed by zone name. |\n| `AddressPrefix` | Maps Bech32 addresses to their assigned zone. |\n\n## Parameters (`subspace`: `taxexemption`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `MaxZones` | Upper bound on simultaneously registered zones. | `100` |\n| `MaxAddresses` | Maximum total exempt addresses allowed. | `10000` |\n\nProposals that exceed these caps fail validation.\n\n## Governance workflow\n\n1. Draft a proposal containing one or more `taxexemption` messages (e.g., add zones, update flags, add/remove addresses).\n2. Submit via `terrad tx gov submit-proposal draft.json` and deposit the required LUNC.\n3. Once passed, the keeper updates stores atomically; future transactions immediately honour the new exemption set.\n\n## Queries & CLI\n\n- **Zones:** `terrad q taxexemption zones`\n- **Zone addresses:** `terrad q taxexemption addresses <zone>`\n- **Taxable check:** `terrad q taxexemption taxable <from> <to>`\n",
    "previousSlug": "develop/module-specifications/spec-tax",
    "nextSlug": "develop/module-specifications/spec-treasury"
  },
  {
    "slug": "develop/module-specifications/spec-treasury",
    "path": "/develop/module-specifications/spec-treasury/",
    "sourceFile": "content/docs/develop/module-specifications/spec-treasury.md",
    "group": "Develop",
    "navTitle": "Treasury module (x/treasury)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 129,
    "title": "Treasury module (x/treasury)",
    "description": "Historical epoch-based tax rate, reward weight, and seigniorage handling kept for reference.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-treasury.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Concepts",
        "id": "concepts"
      },
      {
        "depth": 3,
        "title": "Observed indicators",
        "id": "observed-indicators"
      },
      {
        "depth": 3,
        "title": "Monetary policy levers",
        "id": "monetary-policy-levers"
      },
      {
        "depth": 3,
        "title": "Updating policies",
        "id": "updating-policies"
      },
      {
        "depth": 3,
        "title": "Probation",
        "id": "probation"
      },
      {
        "depth": 2,
        "title": "Data",
        "id": "data"
      },
      {
        "depth": 3,
        "title": "Policy constraints",
        "id": "policy-constraints"
      },
      {
        "depth": 2,
        "title": "Proposals",
        "id": "proposals"
      },
      {
        "depth": 3,
        "title": "TaxRateUpdateProposal",
        "id": "taxrateupdateproposal"
      },
      {
        "depth": 2,
        "title": "State",
        "id": "state"
      },
      {
        "depth": 3,
        "title": "Tax rate",
        "id": "tax-rate"
      },
      {
        "depth": 3,
        "title": "Reward Weight",
        "id": "reward-weight"
      },
      {
        "depth": 3,
        "title": "Tax caps",
        "id": "tax-caps"
      },
      {
        "depth": 3,
        "title": "Tax Proceeds",
        "id": "tax-proceeds"
      },
      {
        "depth": 3,
        "title": "Epoch initial issuance",
        "id": "epoch-initial-issuance"
      },
      {
        "depth": 3,
        "title": "Indicators",
        "id": "indicators"
      },
      {
        "depth": 4,
        "title": "Tax rewards",
        "id": "tax-rewards"
      },
      {
        "depth": 4,
        "title": "Seigniorage Rewards",
        "id": "seigniorage-rewards"
      },
      {
        "depth": 4,
        "title": "Total Staked LUNC",
        "id": "total-staked-lunc"
      },
      {
        "depth": 2,
        "title": "Functions",
        "id": "functions"
      },
      {
        "depth": 3,
        "title": "`k.UpdateIndicators()`",
        "id": "kupdateindicators"
      },
      {
        "depth": 3,
        "title": "`k.UpdateTaxPolicy()`",
        "id": "kupdatetaxpolicy"
      },
      {
        "depth": 3,
        "title": "`k.UpdateRewardPolicy()`",
        "id": "kupdaterewardpolicy"
      },
      {
        "depth": 3,
        "title": "`k.UpdateTaxCap()`",
        "id": "kupdatetaxcap"
      },
      {
        "depth": 3,
        "title": "`k.SettleSeigniorage()`",
        "id": "ksettleseigniorage"
      },
      {
        "depth": 2,
        "title": "Transitions",
        "id": "transitions"
      },
      {
        "depth": 3,
        "title": "End-Block",
        "id": "end-block"
      },
      {
        "depth": 2,
        "title": "Parameters",
        "id": "parameters"
      },
      {
        "depth": 3,
        "title": "TaxPolicy",
        "id": "taxpolicy"
      },
      {
        "depth": 3,
        "title": "RewardPolicy",
        "id": "rewardpolicy"
      },
      {
        "depth": 3,
        "title": "SeigniorageBurdenTarget",
        "id": "seigniorageburdentarget"
      },
      {
        "depth": 3,
        "title": "MiningIncrement",
        "id": "miningincrement"
      },
      {
        "depth": 3,
        "title": "WindowShort",
        "id": "windowshort"
      },
      {
        "depth": 3,
        "title": "WindowLong",
        "id": "windowlong"
      },
      {
        "depth": 3,
        "title": "WindowProbation",
        "id": "windowprobation"
      },
      {
        "depth": 2,
        "title": "Source and verification",
        "id": "source-and-verification"
      }
    ],
    "body": "> **Important**\n>\n> The treasury module logic is no longer effectively used by the Terra Classic protocol. On March 3rd, 2021, the (former) Terra community passed [governance proposal 43](https://validator.info/terra-classic/governance/43), updating the seigniorage reward weight to burn all seigniorage. In 2025, the Terra community passed [proposal 12148](https://validator.info/terra-classic/governance/12148), which introduced a new burn tax handling, replacing the former utilization of the stability tax. The stability tax rate has been set to zero. Although the rates and parameters used in this section no longer have any effect on the protocol or transactions, they are still calculated as their logic is intact. The effective rates of seigniorage and stability fees are currently calculated as zero.\n>\n> The following information is kept for reference.\n\nThe Treasury module acts as the \"central bank\" of the Terra economy, measuring macroeconomic activity by [observing indicators](#observed-indicators) and adjusting [monetary policy levers](#monetary-policy-levers) to modulate miner incentives toward stable, long-term growth.\n\n> **Note**\n>\n> While the Treasury stabilizes miner demand by adjusting rewards, the [`market`](/develop/module-specifications/spec-market/) module is responsible for Terra price stability through arbitrage and the market maker.\n\n## Concepts\n\n### Observed indicators\n\nThe treasury observes three macroeconomic indicators for each epoch and keeps [indicators](#indicators) of their values during previous epochs:\n\n- **Tax Rewards**: $T$, the income generated from transaction and stability fees during an epoch.\n- **Seigniorage Rewards**: $S$, the amount of seigniorage generated from LUNC swaps to Terra during an epoch which is destined for ballot rewards inside the `Oracle` rewards. As of Columbus-5, all seigniorage is burned.\n- **Total Staked LUNC**: $\\lambda$, the total amount of LUNC staked by users and bonded to their delegated validators.\n\nThese indicators can be used to derive two other values, the **Tax Reward per unit LUNC** represented by $\\tau = T / \\lambda$, used in [Updating Tax Rate](#kupdatetaxpolicy), and **total mining rewards** $R = T + S$: the sum of the Tax Rewards and the Seigniorage Rewards, used in [Updating Reward Weight](#kupdaterewardpolicy).\n\nThe protocol can compute and compare the short-term ([`WindowShort`](#windowshort)) and the long-term ([`WindowLong`](#windowlong)) rolling averages of the above indicators to determine the relative direction and velocity of the Terra economy.\n\n### Monetary policy levers\n\n- **Tax Rate**: $r$, adjusts the amount of income gained from Terra transactions, limited by [_tax cap_](#tax-caps).\n\n- **Reward Weight**: $w$, the portion of seigniorage allocated to the reward pool for [`Oracle`](/develop/module-specifications/spec-oracle/) vote winners. This is given to validators who vote within the reward band of the weighted median exchange rate.\n\n### Updating policies\n\nBoth [Tax Rate](#tax-rate) and [Reward Weight](#reward-weight) are stored as values in the `KVStore` and can have their values updated through [governance proposals](#proposals) after they have passed. The Treasury recalibrates each lever once per epoch to stabilize unit returns for LUNC, ensuring predictable mining rewards from staking:\n\n- For tax rate, to ensure that unit-mining rewards do not stay stagnant, the treasury adds a [`MiningIncrement`](#miningincrement) so mining rewards increase steadily over time, as described in [k.updatetaxpolicy](#kupdatetaxpolicy).\n\n- For reward weight, the treasury observes the portion of seigniorage needed to bear the overall reward profile, [`SeigniorageBurdenTarget`](#seigniorageburdentarget) and raises rates accordingly, as described in [k.updaterewardpolicy](#kupdaterewardpolicy). The current reward weight is `1`.\n\n### Probation\n\nA probationary period specified by the [`WindowProbation`](#windowprobation) prevents the network from updating the tax rate and reward weight during the first epochs after genesis to allow the blockchain to first obtain a critical mass of transactions and a mature, reliable history of indicators.\n\n## Data\n\n### Policy constraints\n\nPolicy updates from governance proposals and automatic calibration are constrained by the [`TaxPolicy`](#taxpolicy) and [`RewardPolicy`](#rewardpolicy) parameters, respectively. `PolicyConstraints` specifies the floor, ceiling, and max periodic changes for each variable.\n\n```go\n// PolicyConstraints defines constraints around updating a key Treasury variable\ntype PolicyConstraints struct {\n    RateMin       sdk.Dec  `json:\"rate_min\"`\n    RateMax       sdk.Dec  `json:\"rate_max\"`\n    Cap           sdk.Coin `json:\"cap\"`\n    ChangeRateMax sdk.Dec  `json:\"change_max\"`\n}\n```\n\nThe logic for constraining a policy lever update is done by `pc.Clamp()`.\n\n```go\n// Clamp constrains a policy variable update within the policy constraints\nfunc (pc PolicyConstraints) Clamp(prevRate sdk.Dec, newRate sdk.Dec) (clampedRate sdk.Dec) {\n    if newRate.LT(pc.RateMin) {\n        newRate = pc.RateMin\n    } else if newRate.GT(pc.RateMax) {\n        newRate = pc.RateMax\n    }\n\n    delta := newRate.Sub(prevRate)\n    if newRate.GT(prevRate) {\n        if delta.GT(pc.ChangeRateMax) {\n            newRate = prevRate.Add(pc.ChangeRateMax)\n        }\n    } else {\n        if delta.Abs().GT(pc.ChangeRateMax) {\n            newRate = prevRate.Sub(pc.ChangeRateMax)\n        }\n    }\n    return newRate\n}\n```\n\n## Proposals\n\nThe Treasury module defines special proposals which allow the [Tax Rate](#tax-rate) and [Reward Weight](#reward-weight) values in the `KVStore` to be voted on and changed accordingly, subject to the [policy constraints](#policy-constraints) imposed by `pc.Clamp()`.\n\n### TaxRateUpdateProposal\n\n```go\ntype TaxRateUpdateProposal struct {\n    Title       string  `json:\"title\" yaml:\"title\"`             // Title of the Proposal\n    Description string  `json:\"description\" yaml:\"description\"` // Description of the Proposal\n    TaxRate     sdk.Dec `json:\"tax_rate\" yaml:\"tax_rate\"`       // target TaxRate\n}\n```\n\n## State\n\n### Tax rate\n\n- type: `Dec`\n- min: .1%\n- max: 1%\n\nThe value of the tax rate policy lever for the current epoch.\n\n### Reward Weight\n\n- type: `Dec`\n- default: `1`\n\nThe value of the reward weight policy lever for the current epoch. As of Columbus-5, the reward weight is `1`.\n\n### Tax caps\n\n- type: `map[string]Int`\n\nThe treasury keeps a `KVStore` that maps a denomination `denom` to an `sdk.Int`, which represents the maximum income that can be generated from taxes on a transaction in that same denomination. It is updated every epoch with the equivalent value of [`TaxPolicy.Cap`](#taxpolicy) at the current exchange rate.\n\nFor example, if a transaction's value is 100 SDT with a tax rate of 5% and a tax cap of 1 SDT, the income generated is 1 SDT, not 5 SDT.\n\n### Tax Proceeds\n\n- type: `Coins`\n\nThe tax rewards $T$ for the current epoch.\n\n### Epoch initial issuance\n\n- type: `Coins`\n\nThe total supply of LUNC at the beginning of the current epoch. This value is used in [`k.SettleSeigniorage()`](#ksettleseigniorage) to calculate the seigniorage distributed at the end of each epoch. As of Columbus 5, all seigniorage is burned.\n\nRecording the initial issuance automatically uses the supply module to determine the total issuance of LUNC. Peeking returns the epoch's initial issuance of µLuna (`uluna`) as `sdk.Int` instead of `sdk.Coins` for clarity.\n\n### Indicators\n\nThe Treasury keeps track of the following indicators for the present and previous epochs:\n\n#### Tax rewards\n\n- type: `Dec`\n\nThe Tax Rewards $T$ for each `epoch`.\n\n#### Seigniorage Rewards\n\n- type: `Dec`\n\nThe seigniorage rewards $S$ for each `epoch`.\n\n#### Total Staked LUNC\n\n- type: `Int`\n\nThe total staked LUNC $\\lambda$ for each `epoch`.\n\n## Functions\n\n### `k.UpdateIndicators()`\n\n```go\nfunc (k Keeper) UpdateIndicators(ctx sdk.Context)\n```\n\nAt the end of each epoch $t$, this function records the current values of tax rewards $T$, seigniorage rewards $S$, and total staked LUNC $\\lambda$ before moving to the next epoch $t+1$.\n\n- $T_t$ is the current value in [`TaxProceeds`](#tax-proceeds).\n- $S_t = \\Sigma * w$, with epoch seigniorage $\\Sigma$ and reward weight $w$.\n- $\\lambda_t$ is the result of `staking.TotalBondedTokens()`.\n\n### `k.UpdateTaxPolicy()`\n\n```go\nfunc (k Keeper) UpdateTaxPolicy(ctx sdk.Context) (newTaxRate sdk.Dec)\n```\n\nAt the end of each epoch, this function calculates the next value of the tax rate monetary lever.\n\nUsing $r_t$ as the current tax rate and $n$ as the [`MiningIncrement`](#miningincrement) parameter:\n\n1. Calculate the rolling average $\\tau_y$ of tax rewards per unit LUNC over the last year `WindowLong`.\n\n2. Calculate the rolling average $\\tau_m$ of tax rewards per unit LUNC over the last month `WindowShort`.\n\n3. If $\\tau_m = 0$, no tax revenue occurred in the last month. The tax rate should be set to the maximum permitted by the tax policy, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n4. If $\\tau_m > 0$, the new Tax Rate is $r_{t+1} = (n r_t \\tau_y)/\\tau_m$, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\nWhen monthly tax revenues dip below the yearly average, the treasury increases the tax rate. When monthly tax revenues go above the yearly average, the treasury decreases the tax rate.\n\n### `k.UpdateRewardPolicy()`\n\n```go\nfunc (k Keeper) UpdateRewardPolicy(ctx sdk.Context) (newRewardWeight sdk.Dec)\n```\n\nAt the end of each epoch, this function calculates the next value of the Reward Weight monetary lever.\n\nUsing $w_t$ as the current reward weight, and $b$ as the [`SeigniorageBurdenTarget`](#seigniorageburdentarget) parameter:\n\n1. Calculate the sum $S_m$ of seigniorage rewards over the last month `WindowShort`.\n\n2. Calculate the sum $R_m$ of total mining rewards over the last month `WindowShort`.\n\n3. If $R_m = 0$ and $S_m = 0$, no mining or seigniorage rewards occurred in the last month. The reward weight should be set to the maximum permitted by the reward policy, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n4. If $R_m > 0$ or $S_m > 0$, the new Reward Weight is $w_{t+1} = b w_t S_m / R_m$, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n### `k.UpdateTaxCap()`\n\n```go\nfunc (k Keeper) UpdateTaxCap(ctx sdk.Context) sdk.Coins\n```\n\nThis function is called at the end of an epoch to compute the Tax Caps for every denomination for the next epoch.\n\nFor every denomination in circulation, the new Tax Cap for each denomination is set to be the global Tax Cap defined in the [`TaxPolicy`](#taxpolicy) parameter, at current exchange rates.\n\n### `k.SettleSeigniorage()`\n\n```go\nfunc (k Keeper) SettleSeigniorage(ctx sdk.Context)\n```\n\nThis function is called at the end of an epoch to compute seigniorage and forwards the funds to the [oracle module](/develop/module-specifications/spec-oracle/) module for ballot rewards and the [distribution module](/develop/module-specifications/spec-distribution/) for the community pool.\n\n1. The seigniorage $\\Sigma$ of the current epoch is calculated by taking the difference between the LUNC supply at the start of the epoch ([epoch initial issuance](#epoch-initial-issuance)) and the LUNC supply at the time of calling.\n\n    $\\Sigma > 0$ when the current LUNC supply is lower than it was at the start of the epoch because LUNC had been burned from LUNC swaps into Terra. For more information, see [seigniorage](/develop/module-specifications/spec-market/#seigniorage).\n\n2. The reward weight $w$ is the percentage of the seigniorage designated for ballot rewards. Amount $S$ of new LUNC is minted, and the [oracle module](/develop/module-specifications/spec-oracle/) receives $S = \\Sigma * w$ of the seigniorage.\n\n3. The remainder of the coins $\\Sigma - S$ is sent to the [distribution module](/develop/module-specifications/spec-distribution/) , where it is allocated into the community pool.\n\n::: {Important}\nAs of Columbus-5, all seigniorage is burned and no longer funds the community pool or the oracle reward pool. Validators are rewarded for faithful oracle votes through swap fees.\n:::\n\n## Transitions\n\n### End-Block\n\nIf the blockchain is at the final block of the epoch, the following procedure is run:\n\n1. Update all the indicators with [`k.UpdateIndicators()`](#kupdateindicators)\n\n2. If the current block is under [probation](#probation), skip to step 6.\n\n3. [Settle seigniorage](#ksettleseigniorage) accrued during the epoch and make funds available to ballot rewards and the community pool during the next epoch. As of Columbus-5, all seigniorage is burned.\n\n4. Calculate the [Tax Rate](#kupdatetaxpolicy), [Reward Weight](#kupdaterewardpolicy), and [Tax Cap](#kupdatetaxcap) for the next epoch. As of Columbus-5, all seigniorage is burned, and the reward weight is `1`.\n\n5. Emit the `policy_update` event, recording the new policy lever values.\n\n6. Finally, record the LUNC issuance with [`k.RecordEpochInitialIssuance()`](#epoch-initial-issuance). It will be used to calculate the seigniorage for the next epoch.\n\n| Type          | Attribute Key | Attribute Value |\n| ------------- | ------------- | --------------- |\n| policy_update | tax_rate      | {taxRate}       |\n| policy_update | reward_weight | {rewardWeight}  |\n| policy_update | tax_cap       | {taxCap}        |\n\n## Parameters\n\nThe subspace for the Treasury module is `treasury`.\n\n```go\ntype Params struct {\n    TaxPolicy               PolicyConstraints `json:\"tax_policy\" yaml:\"tax_policy\"`\n    RewardPolicy            PolicyConstraints `json:\"reward_policy\" yaml:\"reward_policy\"`\n    SeigniorageBurdenTarget sdk.Dec           `json:\"seigniorage_burden_target\" yaml:\"seigniorage_burden_target\"`\n    MiningIncrement         sdk.Dec           `json:\"mining_increment\" yaml:\"mining_increment\"`\n    WindowShort             int64             `json:\"window_short\" yaml:\"window_short\"`\n    WindowLong              int64             `json:\"window_long\" yaml:\"window_long\"`\n    WindowProbation         int64             `json:\"window_probation\" yaml:\"window_probation\"`\n}\n```\n\n### TaxPolicy\n\n- type: `PolicyConstraints`\n- default:\n\n```go\nDefaultTaxPolicy = PolicyConstraints{\n    RateMin:       sdk.NewDecWithPrec(5, 4), // 0.05%\n    RateMax:       sdk.NewDecWithPrec(1, 2), // 1%\n    Cap:           sdk.NewCoin(core.MicroSDRDenom, sdk.OneInt().MulRaw(core.MicroUnit)), // 1 SDR Tax cap\n    ChangeRateMax: sdk.NewDecWithPrec(25, 5), // 0.025%\n}\n```\n\nConstraints for updating the [tax rate](#tax-rate) monetary policy lever.\n\n### RewardPolicy\n\n- type: `PolicyConstraints`\n- default:\n\n```go\nDefaultRewardPolicy = PolicyConstraints{\n    RateMin:       sdk.NewDecWithPrec(5, 2), // 5%\n    RateMax:       sdk.NewDecWithPrec(90, 2), // 90%\n    ChangeRateMax: sdk.NewDecWithPrec(25, 3), // 2.5%\n    Cap:           sdk.NewCoin(\"unused\", sdk.ZeroInt()), // UNUSED\n}\n```\n\nConstraints for updating the [reward weight](#reward-weight) monetary policy lever.\n\n### SeigniorageBurdenTarget\n\n- type: `sdk.Dec`\n- default: 67%\n\nMultiplier specifying the portion of burden seigniorage needed to bear the overall reward profile for Reward Weight updates during epoch transition.\n\n### MiningIncrement\n\n- type: `sdk.Dec`\n- default: 1.07 growth rate, 15% CAGR of $\\tau$\n\nMultiplier determining an annual growth rate for tax rate policy updates during epoch transition.\n\n### WindowShort\n\n- type: `int64`\n- default: `4` (month = 4 weeks)\n\nA number of epochs that specifies a time interval for calculating the short-term moving average.\n\n### WindowLong\n\n- type: `int64`\n- default: `52` (year = 52 weeks)\n\nA number of epochs that specifies a time interval for calculating the long-term moving average.\n\n### WindowProbation\n\n- type: `int64`\n- default: `18`\n\nA number of epochs that specifies a time interval for the probationary period.\n\n## Source and verification\n\nLast verified: 2026-06-01\n\nThe Treasury mechanics described here are historical reference material unless current chain behavior and governance records show otherwise.\n",
    "previousSlug": "develop/module-specifications/spec-taxexemption",
    "nextSlug": "develop/module-specifications/spec-transfer"
  },
  {
    "slug": "develop/module-specifications/spec-transfer",
    "path": "/develop/module-specifications/spec-transfer/",
    "sourceFile": "content/docs/develop/module-specifications/spec-transfer.md",
    "group": "Develop",
    "navTitle": "IBC transfer module (x/transfer)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 130,
    "title": "IBC transfer module (x/transfer)",
    "description": "ICS-20 fungible token relay with tax integration.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-transfer.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic enables IBC routing through the IBC module. For more information, see the [upstream documentation](https://ibc.cosmos.network/v7/apps/transfer/overview/).\n",
    "previousSlug": "develop/module-specifications/spec-treasury",
    "nextSlug": "develop/module-specifications/spec-upgrade"
  },
  {
    "slug": "develop/module-specifications/spec-upgrade",
    "path": "/develop/module-specifications/spec-upgrade/",
    "sourceFile": "content/docs/develop/module-specifications/spec-upgrade.md",
    "group": "Develop",
    "navTitle": "Upgrade module (x/upgrade)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 131,
    "title": "Upgrade module (x/upgrade)",
    "description": "Coordinated chain upgrades and store migrations.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-upgrade.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic inherits the Cosmos SDK upstream upgrade module. Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/upgrade/) for details.\n",
    "previousSlug": "develop/module-specifications/spec-transfer",
    "nextSlug": "develop/module-specifications/spec-vesting"
  },
  {
    "slug": "develop/module-specifications/spec-vesting",
    "path": "/develop/module-specifications/spec-vesting/",
    "sourceFile": "content/docs/develop/module-specifications/spec-vesting.md",
    "group": "Develop",
    "navTitle": "Vesting module (x/vesting)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 132,
    "title": "Vesting module (x/vesting)",
    "description": "Legacy vesting account types preserved on Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-vesting.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "> Terra Classic at this point in time does not utilize vesting. The vesting module is still implemented for historical reasons and existing vesting accounts.\n",
    "previousSlug": "develop/module-specifications/spec-upgrade",
    "nextSlug": "develop/module-specifications/spec-wasm"
  },
  {
    "slug": "develop/module-specifications/spec-wasm",
    "path": "/develop/module-specifications/spec-wasm/",
    "sourceFile": "content/docs/develop/module-specifications/spec-wasm.md",
    "group": "Develop",
    "navTitle": "Wasm module (x/wasm)",
    "navDepth": 1,
    "navParent": "develop/module-specifications/module-specifications",
    "navHasChildren": false,
    "navOrder": 133,
    "title": "Wasm module (x/wasm)",
    "description": "CosmWasm contract execution, message bindings, and migrations.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-wasm.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Concepts",
        "id": "concepts"
      },
      {
        "depth": 3,
        "title": "Smart contracts",
        "id": "smart-contracts"
      },
      {
        "depth": 4,
        "title": "Contract address",
        "id": "contract-address"
      },
      {
        "depth": 4,
        "title": "Code ID",
        "id": "code-id"
      },
      {
        "depth": 4,
        "title": "Key-value store",
        "id": "key-value-store"
      },
      {
        "depth": 3,
        "title": "Interaction",
        "id": "interaction"
      },
      {
        "depth": 4,
        "title": "Instantiation",
        "id": "instantiation"
      },
      {
        "depth": 4,
        "title": "Execution",
        "id": "execution"
      },
      {
        "depth": 4,
        "title": "Migration",
        "id": "migration"
      },
      {
        "depth": 4,
        "title": "Transfer of ownership",
        "id": "transfer-of-ownership"
      },
      {
        "depth": 4,
        "title": "Query",
        "id": "query"
      },
      {
        "depth": 3,
        "title": "WasmVM",
        "id": "wasmvm"
      },
      {
        "depth": 4,
        "title": "Gas meter",
        "id": "gas-meter"
      },
      {
        "depth": 3,
        "title": "Gas fees",
        "id": "gas-fees"
      },
      {
        "depth": 2,
        "title": "Data",
        "id": "data"
      },
      {
        "depth": 3,
        "title": "CodeInfo",
        "id": "codeinfo"
      },
      {
        "depth": 3,
        "title": "ContractInfo",
        "id": "contractinfo"
      },
      {
        "depth": 2,
        "title": "State",
        "id": "state"
      },
      {
        "depth": 3,
        "title": "Last Code ID",
        "id": "last-code-id"
      },
      {
        "depth": 3,
        "title": "Last Instance ID",
        "id": "last-instance-id"
      },
      {
        "depth": 3,
        "title": "Code",
        "id": "code"
      },
      {
        "depth": 3,
        "title": "Contract Info",
        "id": "contract-info"
      },
      {
        "depth": 3,
        "title": "Contract Store",
        "id": "contract-store"
      },
      {
        "depth": 2,
        "title": "Message types",
        "id": "message-types"
      },
      {
        "depth": 3,
        "title": "MsgStoreCode",
        "id": "msgstorecode"
      },
      {
        "depth": 3,
        "title": "MsgInstantiateContract",
        "id": "msginstantiatecontract"
      },
      {
        "depth": 3,
        "title": "MsgExecuteContract",
        "id": "msgexecutecontract"
      },
      {
        "depth": 3,
        "title": "MsgMigrateContract",
        "id": "msgmigratecontract"
      },
      {
        "depth": 3,
        "title": "MsgUpdateContractOwner",
        "id": "msgupdatecontractowner"
      },
      {
        "depth": 2,
        "title": "Parameters",
        "id": "parameters"
      },
      {
        "depth": 3,
        "title": "MaxContractSize",
        "id": "maxcontractsize"
      },
      {
        "depth": 3,
        "title": "MaxContractGas",
        "id": "maxcontractgas"
      },
      {
        "depth": 3,
        "title": "MaxContractMsgSize",
        "id": "maxcontractmsgsize"
      }
    ],
    "body": "The WASM module implements the execution environment for WebAssembly smart contracts, powered by [CosmWasm](https://cosmwasm.com).\n\n## Concepts\n\n### Smart contracts\n\nSmart contracts are autonomous agents that can interact with other entities on the Terra blockchain, such as human-owned accounts, validators, and other smart contracts. Each smart contract has:\n\n- A unique **contract address** with an account that holds funds.\n- A **code ID**, where its logic is defined.\n- Its own **key-value store**, where it can persist and retrieve data.\n\n#### Contract address\n\nUpon instantiation, each contract is automatically assigned a Terra account address, called the contract address. The address is procedurally generated on-chain without an accompanying private and public key pair, and it can be completely determined by the contract's number order of existence. For instance, on two separate Terra networks, the first contract will always be assigned the address `terra18vd8fpwxzck93qlwghaj6arh4p7c5n896xzem5`, and similarly for the second, third, and so on.\n\n#### Code ID\n\nOn Terra, code upload and contract creation are separate events. A smart contract writer first uploads WASM bytecode onto the blockchain to obtain a code ID, which they then can use to initialize an instance of that contract. This scheme promotes efficient storage because most contracts share the same underlying logic and vary only in their initial configuration. Vetted, high-quality contracts for common use cases like fungible tokens and multisig wallets can be easily reused without the need to upload new code.\n\n#### Key-value store\n\nEach smart contract is given its own dedicated keyspace in LevelDB, prefixed by the contract address. Contract code is safely sandboxed and can only set and delete new keys and values within its assigned keyspace.\n\n### Interaction\n\nYou can interact with smart contracts in several ways.\n\n#### Instantiation\n\nYou can instantiate a new smart contract by sending a `MsgInstantiateContract`. In it, you can:\n\n- Assign an owner to the contract.\n- Specify code will be used for the contract via a code ID.\n- Define the initial parameters / configuration through an `InitMsg`.\n- Provide the new contract's account with some initial funds.\n- Denote whether the contract is migratable (i.e. can change code IDs).\n\nThe `InitMsg` is a JSON message whose expected format is defined in the contract's code. Every contract contains a section that defines how to set up the initial state depending on the provided `InitMsg`.\n\n#### Execution\n\nYou can execute a smart contract to invoke one of its defined functions by sending a `MsgExecuteContract`. In it, you can:\n\n- Specify which function to call with a `HandleMsg`.\n- Send funds to the contract, which may be expected during execution.\n\nThe `HandleMsg` is a JSON message that contains function call arguments and gets routed to the appropriate handling logic. From there, the contract executes the function's instructions during which the contract's own state can be modified. The contract can only modify outside state, such as state in other contracts or modules, after its own execution has ended, by returning a list of blockchain messages, such as `MsgSend` and `MsgSwap`. These messages are appended to the same transaction as the `MsgExecuteContract`, and, if any of the messages are invalid, the whole transaction is invalidated.\n\n#### Migration\n\nIf a user is the contract's owner, and a contract is instantiated as migratable, they can issue a `MsgMigrateContract` to reset its code ID to a new one. The migration can be parameterized with a `MigrateMsg`, a JSON message.\n\n#### Transfer of ownership\n\nThe current owner of the smart contract can reassign a new owner to the contract with `MsgUpdateContractOwner`.\n\n#### Query\n\nContracts can define query functions, or read-only operations meant for data-retrieval. Doing so allows contracts to expose rich, custom data endpoints with JSON responses instead of raw bytes from the low-level key-value store. Because the blockchain state cannot be changed, the node can directly run the query without a transaction.\n\nUsers can specify which query function alongside any arguments with a JSON `QueryMsg`. Even though there is no gas fee, the query function's execution is capped by gas determined by metered execution, which is not charged, as a form of spam protection.\n\n### WasmVM\n\nThe actual execution of WASM bytecode is performed by [WasmVM](https://github.com/CosmWasm/wasmvm), which provides a lightweight, sandboxed runtime with metered execution to account for the resource cost of computation.\n\n#### Gas meter\n\nIn addition to the regular gas fees incurred from creating the transaction, Terra also calculates a separate gas when executing smart contract code. This is tracked by the **gas meter**, which is during the execution of every opcode and gets translated back to native Terra gas via a constant multiplier (currently set to 100).\n\n### Gas fees\n\nWASM data and event spend gas up to `1 * bytes`. Passing the event and data to another contract also spends gas in reply.\n\n## Data\n\n### CodeInfo\n\n```go\ntype CodeInfo struct {\n    CodeID   uint64           `json:\"code_id\"`\n    CodeHash core.Base64Bytes `json:\"code_hash\"`\n    Creator  sdk.AccAddress   `json:\"creator\"`\n}\n```\n\n### ContractInfo\n\n```go\ntype ContractInfo struct {\n    Address    sdk.AccAddress   `json:\"address\"`\n    Owner      sdk.AccAddress   `json:\"owner\"`\n    CodeID     uint64           `json:\"code_id\"`\n    InitMsg    core.Base64Bytes `json:\"init_msg\"`\n    Migratable bool             `json:\"migratable\"`\n}\n```\n\n## State\n\n### Last Code ID\n\n- type: `uint64`\n\nA counter for the last uploaded code ID.\n\n### Last Instance ID\n\n- type: `uint64`\n\nA counter for the last instantiated contract number.\n\n### Code\n\n- type: `map[uint64]CodeInfo`\n\nMaps a code ID to `CodeInfo` entry.\n\n### Contract Info\n\n- type: `map[bytes]ContractInfo`\n\nMaps contract address to its corresponding `ContractInfo`.\n\n### Contract Store\n\n- type: `map[bytes]KVStore`\n\nMaps contract address to its dedicated KVStore.\n\n## Message types\n\n### MsgStoreCode\n\nUploads new code to the blockchain and results in a new code ID, if successful. `WASMByteCode` is accepted as either uncompressed or gzipped binary data encoded as Base64.\n\n```go\ntype MsgStoreCode struct {\n    Sender sdk.AccAddress `json:\"sender\" yaml:\"sender\"`\n    // WASMByteCode can be raw or gzip compressed\n    WASMByteCode core.Base64Bytes `json:\"wasm_byte_code\" yaml:\"wasm_byte_code\"`\n}\n```\n\n### MsgInstantiateContract\n\nCreates a new instance of a smart contract. Initial configuration is provided in the `InitMsg`, which is a JSON message encoded in Base64. If `Migratable` is set to `true`, the owner of the contract is permitted to reset the contract's code ID to a new one.\n\n```go\ntype MsgInstantiateContract struct {\n    // Sender is an sender address\n    Sender string `protobuf:\"bytes,1,opt,name=sender,proto3\" json:\"sender,omitempty\" yaml:\"sender\"`\n    // Admin is an optional admin address who can migrate the contract\n    Admin string `protobuf:\"bytes,2,opt,name=admin,proto3\" json:\"admin,omitempty\" yaml:\"admin\"`\n    // CodeID is the reference to the stored WASM code\n    CodeID uint64 `protobuf:\"varint,3,opt,name=code_id,json=codeId,proto3\" json:\"code_id,omitempty\" yaml:\"code_id\"`\n    // InitMsg json encoded message to be passed to the contract on instantiation\n    InitMsg encoding_json.RawMessage `protobuf:\"bytes,4,opt,name=init_msg,json=initMsg,proto3,casttype=encoding/json.RawMessage\" json:\"init_msg,omitempty\" yaml:\"init_msg\"`\n    // InitCoins that are transferred to the contract on execution\n    InitCoins github_com_cosmos_cosmos_sdk_types.Coins `protobuf:\"bytes,5,rep,name=init_coins,json=initCoins,proto3,castrepeated=github.com/cosmos/cosmos-sdk/types.Coins\" json:\"init_coins\" yaml:\"init_coins\"`\n}\n```\n\n### MsgExecuteContract\n\nInvokes a function defined within the smart contract. Function and parameters are encoded in `ExecuteMsg`, which is a JSON message encoded in Base64.\n\n```go\ntype MsgExecuteContract struct {\n    Sender     sdk.AccAddress   `json:\"sender\" yaml:\"sender\"`\n    Contract   sdk.AccAddress   `json:\"contract\" yaml:\"contract\"`\n    ExecuteMsg core.Base64Bytes `json:\"execute_msg\" yaml:\"execute_msg\"`\n    Coins      sdk.Coins        `json:\"coins\" yaml:\"coins\"`\n}\n```\n\n### MsgMigrateContract\n\nCan be issued by the owner of a migratable smart contract to reset its code ID to another one. `MigrateMsg` is a JSON message encoded in Base64.\n\n```go\ntype MsgMigrateContract struct {\n    Owner      sdk.AccAddress   `json:\"owner\" yaml:\"owner\"`\n    Contract   sdk.AccAddress   `json:\"contract\" yaml:\"contract\"`\n    NewCodeID  uint64           `json:\"new_code_id\" yaml:\"new_code_id\"`\n    MigrateMsg core.Base64Bytes `json:\"migrate_msg\" yaml:\"migrate_msg\"`\n}\n```\n\n### MsgUpdateContractOwner\n\nCan be issued by the smart contract's owner to transfer ownership.\n\n```go\ntype MsgUpdateContractOwner struct {\n    Owner    sdk.AccAddress `json:\"owner\" yaml:\"owner\"`\n    NewOwner sdk.AccAddress `json:\"new_owner\" yaml:\"new_owner\"`\n    Contract sdk.AccAddress `json:\"contract\" yaml:\"contract\"`\n}\n```\n\n## Parameters\n\nThe subspace for the WASM module is `wasm`.\n\n```go\ntype Params struct {\n    MaxContractSize    uint64 `json:\"max_contract_size\" yaml:\"max_contract_size\"`\n    MaxContractGas     uint64 `json:\"max_contract_gas\" yaml:\"max_contract_gas\"`\n    MaxContractMsgSize uint64 `json:\"max_contract_msg_size\" yaml:\"max_contract_msg_size\"`\n}\n```\n\n### MaxContractSize\n\n- type: `uint64`\n\nMaximum contract bytecode size in bytes.\n\n### MaxContractGas\n\n- type: `uint64`\n\nMaximum contract gas consumption during any execution.\n\n### MaxContractMsgSize\n\n- type: `uint64`\n\nMaximum contract message size in bytes.\n",
    "previousSlug": "develop/module-specifications/spec-vesting",
    "nextSlug": "full-node/overview"
  },
  {
    "slug": "full-node/overview",
    "path": "/full-node/overview/",
    "sourceFile": "content/docs/full-node/overview.md",
    "group": "Run a Full Node",
    "navTitle": "Overview",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": true,
    "navOrder": 134,
    "title": "Overview",
    "description": "Understand hardware expectations, supported platforms, and the lifecycle of running a Terra Classic node.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/overview.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Production-grade infrastructure",
        "id": "production-grade-infrastructure"
      },
      {
        "depth": 3,
        "title": "Deployment checklist",
        "id": "deployment-checklist"
      },
      {
        "depth": 2,
        "title": "Sentry and validator topology",
        "id": "sentry-and-validator-topology"
      }
    ],
    "body": "## Production-grade infrastructure\n\nTerra Classic full nodes replicate the entire blockchain. They expose LCD and RPC interfaces, relay gossip, and participate in consensus when configured as validators.\n\nDeploy nodes on hardened Linux distributions such as Ubuntu 24.04 LTS or Debian 12. Optimise kernel parameters for high-throughput networking and disable non-essential services. Make sure to protect your network from DDoS attacks and unauthorized access.\n\n### Deployment checklist\n\n- Provision NVMe storage with sustained throughput above 400 MB/s.\n- Allocate 8+ CPU/vCPU and 64 GB RAM for validators; 8+ CPU/vCPU and 32 GB RAM for sentry nodes.\n- Configure swap space to prevent OOM kills.\n- Restrict inbound access with firewalls and expose Prometheus metrics (if enabled) over authenticated channels only.\n- Install Go 1.22.x and compile the latest `terrad` release from the Terra Classic GitHub repository.\n- Automate encrypted backups for `config`, `data`, and `keyring` directories.\n\n## Sentry and validator topology\n\nProtect consensus keys by isolating validator nodes and routing inbound connections through sentries.\n\n- Keep validator nodes on private networks and allow ingress only from trusted sentries.\n- Use `persistent_peers` for validator-to-sentry links and `seeds` for general peer discovery.\n- Instrument nodes with Prometheus and alert on missed blocks, disk utilisation, and peer latency, or use external services for validator monitoring.\n\n> **Key management**\n> Store mnemonic phrases offline. For validators, prefer hardware-backed key management.\n",
    "previousSlug": "develop/module-specifications/spec-wasm",
    "nextSlug": "full-node/run-a-full-terra-node/system-config"
  },
  {
    "slug": "full-node/run-a-full-terra-node/system-config",
    "path": "/full-node/run-a-full-terra-node/system-config/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/system-config.md",
    "group": "Run a Full Node",
    "navTitle": "System configuration",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 135,
    "title": "System configuration",
    "description": "Hardware, OS, and networking prerequisites pulled from the Classic runbook.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/system-config.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Hardware requirements",
        "id": "hardware-requirements"
      },
      {
        "depth": 2,
        "title": "Prerequisites",
        "id": "prerequisites"
      },
      {
        "depth": 3,
        "title": "Installing Go (macOS & Linux)",
        "id": "installing-go-macos-linux"
      },
      {
        "depth": 2,
        "title": "Commonly used ports",
        "id": "commonly-used-ports"
      }
    ],
    "body": "> **Caution — Recommended operating systems**\n>\n> This guide has been tested against Ubuntu and Debian Linux distributions only. For production environments, deploy on one of these distributions to ensure consistent tooling and support.\n\nRunning a full Terra node is a resource-intensive process that requires a persistent server. If you want to use the Terra Classic blockchain without downloading the entire state, use a [Wallet](/learn/wallets/).\n\n## Hardware requirements\n\nMinimum specifications for a reliable full node:\n\n- Six or more CPU cores\n- At least 64 GB of memory\n- At least 300 Mbps of sustained network bandwidth\n- At least 2 TB NVMe SSD storage\n\n> **Warning — Storage headroom**\n>\n> Network growth continually increases storage usage. Plan for additional capacity beyond the minimum to avoid emergency migrations. It is reported, that fully pruned nodes can run on a 1 TB NVMe SSD, though the recommended storage is 2 TB or more.\n\n## Prerequisites\n\n- Install [Golang v1.22.12 for Linux/amd64](https://go.dev/dl/go1.22.12.linux-amd64.tar.gz) or a compatible release.\n- On Linux, install build tooling with `sudo apt-get install -y build-essential`.\n\n### Installing Go (macOS & Linux)\n\nGo release binaries are available at [go.dev/dl](https://go.dev/dl/). Download and install the archive for your platform:\n\n```bash\n# 1. Download the archive\nwget https://go.dev/dl/go1.22.12.linux-amd64.tar.gz\n\n# Optional: remove previous /go files\nsudo rm -rf /usr/local/go\n\n# 2. Unpack\nsudo tar -C /usr/local -xzf go1.22.12.linux-amd64.tar.gz\n\n# 3. Add Go to your PATH\nexport PATH=$PATH:/usr/local/go/bin\n\n# (Persist the PATH update by appending the line above to ~/.profile or ~/.bashrc.)\n\n# 4. Verify the installation\ngo version\n# go version go1.22.12 linux/amd64\n```\n\n## Commonly used ports\n\n`terrad` exposes multiple TCP ports. Adjust firewall rules to fit your topology.\n\n- `26656` — P2P gossip. Required for joining the network. Validators typically restrict public ingress and instead maintain persistent peers.\n- `26657` — RPC interface for queries and transaction submission.\n- `1317` — LCD (REST) endpoint. Enable when external services need REST access.\n\n> **Warning — Public RPC**\n>\n> Do not expose port `26657` to the public unless you intend to operate a public RPC node with appropriate rate limiting and monitoring.\n",
    "previousSlug": "full-node/overview",
    "nextSlug": "full-node/run-a-full-terra-node/build-terra-core"
  },
  {
    "slug": "full-node/run-a-full-terra-node/build-terra-core",
    "path": "/full-node/run-a-full-terra-node/build-terra-core/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/build-terra-core.md",
    "group": "Run a Full Node",
    "navTitle": "Build Terra core",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 136,
    "title": "Build Terra core",
    "description": "Fetch and compile the latest Terra Classic binaries from source.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/build-terra-core.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Get the Terra Classic core source code",
        "id": "get-the-terra-classic-core-source-code"
      }
    ],
    "body": "Terra Classic core is the official implementation of the Terra Classic node software. Use this guide to install `terrad`, the command-line interface and daemon that connects to Terra Classic and enables you to interact with the Terra Classic blockchain.\n\n## Get the Terra Classic core source code\n\n1. Use `git` to retrieve [Terra Classic core](https://github.com/classic-terra/core/) and check out the latest stable release, e.g. `v3.6.0`. See [GitHub releases](https://github.com/classic-terra/core/releases) for a list of available releases.\n\n   ```bash\n   git clone https://github.com/classic-terra/core\n   cd core\n   git checkout [latest version] # ex., git checkout v3.6.0\n   ```\n\n2. Build Terra core. This installs the `terrad` executable to your [`GOPATH`](https://go.dev/doc/gopath_code) environment variable.\n\n   ```bash\n   make build install\n   ```\n\n3. Verify that Terra Classic core is installed correctly.\n\n   ```bash\n   terrad version --long\n   ```\n\n   **Example**:\n\n   ```bash\n   name: terra\n   server_name: terrad\n   client_name: terrad\n   version: v3.6.0\n   build_tags: netgo,ledger\n   go: go version go1.22.12 linux/amd64\n   # ...And a list of dependencies\n   ```\n\n> **Tip**\n>\n> If the `terrad: command not found` error message returns, confirm that the Go binary path is correctly configured by running the following command:\n\n```bash\nexport PATH=$PATH:$(go env GOPATH)/bin\n```\n",
    "previousSlug": "full-node/run-a-full-terra-node/system-config",
    "nextSlug": "full-node/run-a-full-terra-node/configure-general-settings"
  },
  {
    "slug": "full-node/run-a-full-terra-node/configure-general-settings",
    "path": "/full-node/run-a-full-terra-node/configure-general-settings/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/configure-general-settings.md",
    "group": "Run a Full Node",
    "navTitle": "Configure general settings",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 137,
    "title": "Configure general settings",
    "description": "This guide covers the most important configuration files found in `~/.terra/config/`. Review each file and update the defaults to match your infrastructure.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/configure-general-settings.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Directory overview",
        "id": "directory-overview"
      },
      {
        "depth": 2,
        "title": "Initialize and set the moniker",
        "id": "initialize-and-set-the-moniker"
      },
      {
        "depth": 2,
        "title": "Minimum gas prices",
        "id": "minimum-gas-prices"
      },
      {
        "depth": 2,
        "title": "Enable the LCD API",
        "id": "enable-the-lcd-api"
      },
      {
        "depth": 2,
        "title": "Persisted peers and services",
        "id": "persisted-peers-and-services"
      }
    ],
    "body": "## Directory overview\n\n```text\n~/.terra/config\n├─ addrbook.json                # Peer registry\n├─ app.toml                     # Application configuration\n├─ client.toml                  # CLI defaults\n├─ config.toml                  # Tendermint configuration\n├─ genesis.json                 # Network genesis file\n├─ node_key.json                # Node authentication key\n└─ priv_validator_key.json      # Validator signing key\n```\n\n## Initialize and set the moniker\n\nAssign a human-readable name to help other operators (and stakers if you plan to validate) identify your node:\n\n```bash\nterrad init <moniker>\n```\n\nYou can update the moniker later using `terrad tx staking edit-validator --new-moniker <new-moniker>`.\n\n## Minimum gas prices\n\nValidators should set a minimum gas price to avoid spam:\n\n1. Open `~/.terra/config/app.toml`.\n2. Edit the `minimum-gas-prices` field with appropriate fee denominations.\n\n```toml\nminimum-gas-prices = \"28.325uluna,0.52469usdr,0.75uusd,850.0ukrw,2142.855umnt,0.625ueur,4.9ucny,81.85ujpy,0.55ugbp,54.4uinr,0.95ucad,0.7uchf,0.95uaud,1.0usgd,23.1uthb,6.25usek,6.25unok,4.5udkk,10900.0uidr,38.0uphp,5.85uhkd,3.0umyr,20.0utwd\"\n```\n\nYou can find the current gas price recommendations [from FCD](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices) before finalizing the values.\n\n## Enable the LCD API\n\nThe Lite Client Daemon exposes a REST API for external services:\n\n1. Open `~/.terra/config/app.toml`.\n2. In the `[api]` section, set `enable = true` to start the LCD service.\n3. Optionally set `swagger = true` to expose Swagger documentation.\n\n```toml\n[api]\nenable  = true\nswagger = true\n```\n\nRestart your service to apply changes:\n\n```bash\nsudo systemctl restart terrad\n```\n\nThe LCD listens on `http://127.0.0.1:1317` by default.\n\n## Persisted peers and services\n\n- Configure `persistent_peers` and `seeds` in `config.toml` to maintain reliable connectivity.\n- Enable Prometheus metrics in `app.toml` (`[telemetry]`) and expose port `26660` only to trusted networks.\n- Review the `p2p`, `rpc`, and `consensus` sections in `config.toml` to align timeouts, max inbound peers, and snapshot settings with your operations playbook.\n\n> **Warning**\n> Never share `priv_validator_key.json`. Duplicated validator keys can lead to double-signing and slashing.\n",
    "previousSlug": "full-node/run-a-full-terra-node/build-terra-core",
    "nextSlug": "full-node/run-a-full-terra-node/set-up-production"
  },
  {
    "slug": "full-node/run-a-full-terra-node/set-up-production",
    "path": "/full-node/run-a-full-terra-node/set-up-production/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/set-up-production.md",
    "group": "Run a Full Node",
    "navTitle": "Set up a production environment",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 138,
    "title": "Set up a production environment",
    "description": "Use this checklist to prepare a production-grade Terra Classic node.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/set-up-production.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Create a dedicated user",
        "id": "create-a-dedicated-user"
      },
      {
        "depth": 2,
        "title": "Increase the maximum files _terrad_ can open",
        "id": "increase-the-maximum-files-terrad-can-open"
      },
      {
        "depth": 2,
        "title": "Run the server as a daemon",
        "id": "run-the-server-as-a-daemon"
      },
      {
        "depth": 3,
        "title": "Register `terrad` as a service",
        "id": "register-terrad-as-a-service"
      },
      {
        "depth": 3,
        "title": "Control the service",
        "id": "control-the-service"
      },
      {
        "depth": 3,
        "title": "Access logs",
        "id": "access-logs"
      }
    ],
    "body": "## Create a dedicated user\n\nAlthough `terrad` does not require a superuser account to run, you will need elevated privileges during installation. Create a dedicated system user and run `terrad` under that account for better isolation.\n\n## Increase the maximum files _terrad_ can open\n\n`terrad` opens many concurrent file descriptors by default. Increase the `nofile` limit in `/etc/security/limits.conf`:\n\n```bash\n# Example additions to /etc/security/limits.conf\n*                soft    nofile          65535\n*                hard    nofile          65535\n```\n\nLog out and back in to apply the new limits.\n\n## Run the server as a daemon\n\n`terrad` should run continuously. Configure a `systemd` service to start it on boot.\n\n### Register `terrad` as a service\n\nCreate `/etc/systemd/system/terrad.service`:\n\n```ini\n[Unit]\nDescription=Terra Daemon\nAfter=network.target\n\n[Service]\nType=simple\nUser=<TERRA_USER>\nExecStart=<PATH_TO_TERRAD>/terrad start\nRestart=on-abort\nLimitNOFILE=65535\n\n[Install]\nWantedBy=multi-user.target\n```\n\nUpdate `<TERRA_USER>` and `<PATH_TO_TERRAD>` for your environment, then reload and enable the service:\n\n```bash\nsudo systemctl daemon-reload\nsudo systemctl enable terrad\nsudo systemctl start terrad\n```\n\n### Control the service\n\n```bash\n# Check health\nsudo systemctl status terrad\n\n# Restart sequences\nsudo systemctl stop terrad\nsudo systemctl start terrad\nsudo systemctl restart terrad\n```\n\n### Access logs\n\nUse `journalctl -t terrad` to review logs. Append `-r` to reverse chronological order or `-f` to tail continuously.\n",
    "previousSlug": "full-node/run-a-full-terra-node/configure-general-settings",
    "nextSlug": "full-node/run-a-full-terra-node/join-a-network"
  },
  {
    "slug": "full-node/run-a-full-terra-node/join-a-network",
    "path": "/full-node/run-a-full-terra-node/join-a-network/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/join-a-network.md",
    "group": "Run a Full Node",
    "navTitle": "Join a network",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 139,
    "title": "Join a network",
    "description": "Use this overview to choose the right walkthrough for connecting a Terra Classic node to the network.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/join-a-network.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Bootstrapping workflow",
        "id": "bootstrapping-workflow"
      },
      {
        "depth": 2,
        "title": "Select your target network",
        "id": "select-your-target-network"
      },
      {
        "depth": 3,
        "title": "Mainnet (*columbus-5*)",
        "id": "mainnet-columbus-5"
      },
      {
        "depth": 3,
        "title": "Testnet (*rebel-2*)",
        "id": "testnet-rebel-2"
      },
      {
        "depth": 2,
        "title": "Related references",
        "id": "related-references"
      }
    ],
    "body": "## Bootstrapping workflow\n\n1. Provision the host and build `terrad` by following the [Build Terra Core](/full-node/run-a-full-terra-node/build-terra-core/) prerequisites bundled inside each validator playbook.\n2. Download the latest genesis, address book, and snapshots published by trusted community mirrors.\n3. Start `terrad`, confirm sync status, and register the validator or full node as described in the network-specific guides below.\n\n## Select your target network\n\n### Mainnet (*columbus-5*)\n\n- Follow the [dedicated guide](/full-node/run-a-full-terra-node/validator-columbus-5/) for:\n  - Current Terra Classic Core and oracle-feeder versions.\n  - Public RPC/LCD endpoints.\n  - Snapshot sources, hardware sizing, and validator registration commands.\n- The document also covers oracle feeder configuration, unbonding, and troubleshooting specific to mainnet operations.\n\n### Testnet (*rebel-2*)\n\n- Use the [dedicated guide](/full-node/run-a-full-terra-node/validator-rebel-2/) to practise upgrades and validator workflows.\n- The guide lists the latest rebel-2 release tag, faucet links, and rebuild/snapshot procedures maintained by the testnet operators.\n\n## Related references\n\n- [Build Terra Core](/full-node/run-a-full-terra-node/build-terra-core/) — shared steps for checking out the correct Terra Core tag, installing Go, and compiling `terrad` before joining any network.\n- [Validator Resources](/full-node/overview/) — curated links for snapshots, tooling, and community coordination channels.\n\n> **Tip**\n> For development-only scenarios, consider running `terrad` locally (see [Localnet](/develop/how-to/localnet/terra-core-localnet/)) instead of joining a public network.\n",
    "previousSlug": "full-node/run-a-full-terra-node/set-up-production",
    "nextSlug": "full-node/run-a-full-terra-node/sync"
  },
  {
    "slug": "full-node/run-a-full-terra-node/sync",
    "path": "/full-node/run-a-full-terra-node/sync/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/sync.md",
    "group": "Run a Full Node",
    "navTitle": "Sync",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 140,
    "title": "Sync",
    "description": "Snapshots, manual replay, and verification steps.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/sync.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Before syncing",
        "id": "before-syncing"
      },
      {
        "depth": 2,
        "title": "Monitor progress",
        "id": "monitor-progress"
      },
      {
        "depth": 2,
        "title": "Use snapshots",
        "id": "use-snapshots"
      },
      {
        "depth": 3,
        "title": "Download prerequisites",
        "id": "download-prerequisites"
      },
      {
        "depth": 3,
        "title": "Fetch and unpack snapshot",
        "id": "fetch-and-unpack-snapshot"
      }
    ],
    "body": "## Before syncing\n\n- Clear `~/.terra/data` or use `terrad tendermint unsafe-reset-all` to remove historic blocks.\n- If you want to keep your address book, use `terrad tendermint unsafe-reset-all --keep-addr-book`.\n- Preserve validator keys located in `~/.terra/config/priv_validator_key.json`.\n- Ensure a recent address book exists at `~/.terra/config/addrbook.json`. If not, download one from a trusted community source.\n\n> **Warning**\n>\n> Make sure to back up your validator keys. Make sure the same key is **never** used by multiple nodes, as this will result in severe slashing.\n\n## Monitor progress\n\nAfter starting your node, inspect the `SyncInfo` section of `terrad status`. Compare `latest_block_height` with an external source such as [validator.info](https://validator.info/terra-classic/).\n\n```bash\nterrad start\nterrad status\n```\n\n`catching_up` moves from `true` to `false` once the node reaches the network head.\n\n> **Tip**\n>\n> Syncing from genesis can take months and involves massive storage requirements. It is recommended to use a snapshot to bootstrap your node.\n\n## Use snapshots\n\nSnapshots accelerate bootstrap time. Providers include:\n\n- [snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/](https://snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/)\n- [publicnode.com/snapshots](https://www.publicnode.com/snapshots)\n\n### Download prerequisites\n\n```bash\nsudo apt-get install wget liblz4-tool aria2 -y\n```\n\n### Fetch and unpack snapshot\n\n```bash\naria2c -x5 \"$URL\" # or use curl / wget\nFILE=$(basename \"$URL\")\nlz4 -d \"$FILE\"\nTARBALL=\"${FILE%.lz4}\"\ntar -xvf \"$TARBALL\" -C ~/.terra\n```\n\nReplace `$URL` with the `.tar.lz4` snapshot link for your target network. The extracted contents must populate `~/.terra/data/`.\n",
    "previousSlug": "full-node/run-a-full-terra-node/join-a-network",
    "nextSlug": "full-node/run-a-full-terra-node/validator-columbus-5"
  },
  {
    "slug": "full-node/run-a-full-terra-node/validator-columbus-5",
    "path": "/full-node/run-a-full-terra-node/validator-columbus-5/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/validator-columbus-5.md",
    "group": "Run a Full Node",
    "navTitle": "Validate on columbus-5",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 141,
    "title": "Validate on columbus-5",
    "description": "End-to-end instructions for running a Terra Classic mainnet validator.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/validator-columbus-5.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Versions and network endpoints",
        "id": "versions-and-network-endpoints"
      },
      {
        "depth": 2,
        "title": "Hardware prerequisites",
        "id": "hardware-prerequisites"
      },
      {
        "depth": 2,
        "title": "Install toolchain and build terrad",
        "id": "install-toolchain-and-build-terrad"
      },
      {
        "depth": 2,
        "title": "Bootstrap chain data",
        "id": "bootstrap-chain-data"
      },
      {
        "depth": 2,
        "title": "Join the validator set",
        "id": "join-the-validator-set"
      },
      {
        "depth": 2,
        "title": "Oracle feeder setup",
        "id": "oracle-feeder-setup"
      },
      {
        "depth": 2,
        "title": "Unbonding and shutdown checklist",
        "id": "unbonding-and-shutdown-checklist"
      },
      {
        "depth": 2,
        "title": "Troubleshooting",
        "id": "troubleshooting"
      }
    ],
    "body": "## Versions and network endpoints\n\n| Component | Version |\n| --- | --- |\n| Terra Core | `v3.6.0` |\n| Oracle Feeder | `v3.1.6` |\n| Go | `go1.22.12` |\n\n| Endpoint | URL |\n| --- | --- |\n| RPC | [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com) |\n| LCD | [https://terra-classic-lcd.publicnode.com](https://terra-classic-lcd.publicnode.com) |\n| gRPC | `grpc://terra-classic-grpc.publicnode.com:443` |\n\n> **Tip**\n>\n> Keep Binodes (`https://api-lunc-rpc.binodes.com`, `https://api-lunc-lcd.binodes.com`) configured as secondaries. Mirror your own sentry relay to avoid depending entirely on public endpoints.\n\n## Hardware prerequisites\n\n- Linux server (Ubuntu or Debian recommended)\n- 6+ CPU cores (8+ recommended)\n- 64 GB RAM minimum\n- Swap space configured for cases of memory pressure\n- 2 TB NVMe SSD (1 TB may work for fully pruned nodes but is not recommended)\n\n## Install toolchain and build terrad\n\n1. Follow the instructions in [System configuration](/full-node/run-a-full-terra-node/system-config/) and [Build Terra Core](/full-node/run-a-full-terra-node/build-terra-core/).\n\n## Bootstrap chain data\n\n1. Initialise the node configuration.\n\n   ```bash\n   terrad init <moniker>\n   ```\n\n2. Download the latest address book and genesis files.\n\n   ```bash\n   cd ~/.terra/config\n   wget -O addrbook.json \"https://snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/addrbook.json\"\n   wget -O genesis.json \"https://snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/genesis.json\"\n   ```\n\n3. In `config/app.toml`, disable fast IAVL (`iavl-disable-fastnode = true`) before restoring snapshots. Terra Classic Core v3 enables fast-node by default; validate this flag matches snapshot provider requirements.\n\n4. Fetch a recent snapshot (replace the URL with the most recent archive).\n\n   ```bash\n   cd ~/.terra\n   mv data data~backup\n   wget -O snapshot.tar.lz4 \"https://snapshots.publicnode.com/terra-classic-pruned-25311240-25311250.tar.lz4\"\n   # or\n   # wget -O snapshot.tar.lz4 \"https://snapshots.hexxagon.io/cosmos/terra-classic/columbus-5/snapshot-goleveldb-25309877.tar.lz4\"\n   lz4cat snapshot.tar.lz4 | tar xvf -\n   ```\n\n5. Start the node and confirm sync progress.\n\n   ```bash\n   terrad start\n   terrad status\n   ```\n\n## Join the validator set\n\n1. Create a signing key.\n\n   ```bash\n   terrad keys add valwallet\n   terrad keys list\n   ```\n\n2. Fund `valwallet` with LUNC from an exchange or an existing wallet. Keep at least 10,000 LUNC to buffer against gas prices and oracle feeder set up.\n\n3. Submit the validator registration (adjust commission and moniker as required).\n\n   ```bash\n   terrad tx staking create-validator \\\n     --amount \"10000000uluna\" \\\n     --commission-max-change-rate \"0.01\" \\\n     --commission-max-rate \"0.2\" \\\n     --commission-rate \"0.05\" \\\n     --min-self-delegation 1 \\\n     --pubkey \"$(terrad tendermint show-validator)\" \\\n     --moniker \"myvalidator\" \\\n     --chain-id columbus-5 \\\n     --gas auto \\\n     --gas-prices 28.325uluna \\\n     --gas-adjustment 1.4 \\\n     --from valwallet\n   ```\n\n4. Verify the validator status.\n\n   ```bash\n   terrad q staking validators | grep -A6 \"myvalidator\"\n   ```\n\n> **Warning**\n>\n> Some validator parameters (for example `commission-max-rate`) are immutable once set. Double-check every flag before broadcasting `create-validator`.\n\n## Oracle feeder setup\n\n1. Create an authorised feeder key and delegate privileges.\n\n   ```bash\n   terrad keys add feederwallet\n   terrad tx oracle set-feeder <feederwallet> --from valwallet --chain-id columbus-5 --gas auto --gas-prices 30uluna --gas-adjustment 2\n   ```\n\n2. Enable the LCD API locally by editing `~/.terra/config/app.toml` and setting `enable = true` in the `[api]` section, then restart the node. Set `max-open-connections` to at least `1000` if exposing to feeders and tooling.\n\n3. Deploy the oracle price server using Docker Compose or systemd. The binary now ships via GitHub releases; review the [oracle-feeder repository](https://github.com/classic-terra/oracle-feeder#readme) for updated flags. Example command:\n\n   ```bash\n   npm start vote -- \\\n     -d http://localhost:8532/latest \\\n     --lcd-url http://127.0.0.1:1317 \\\n     --validators <your-valoper-address> \\\n     --password <wallet-password>\n   ```\n\n## Unbonding and shutdown checklist\n\n- Use `terrad tx staking unbond` to undelegate your stake before powering down the validator:\n\n  ```bash\n  terrad tx staking unbond <your-valoper-address> 10000000uluna --from valwallet --chain-id columbus-5 --gas auto --gas-prices 30uluna --gas-adjustment 2\n  ```\n\n- Confirm the validator reports `status: BOND_STATUS_UNBONDING` before shutting down services.\n\n## Troubleshooting\n\n- **Feeder wallet not found**: Ensure the feeder address holds a small LUNC balance so the chain recognises the account.\n- **Feeder not submitting votes**: Confirm the LCD API is enabled locally and that the feeder/price server versions match the versions specified above. Check for `vote_period` changes after network upgrades and adjust `/etc/systemd/system/oracle-feeder.service` accordingly.\n",
    "previousSlug": "full-node/run-a-full-terra-node/sync",
    "nextSlug": "full-node/run-a-full-terra-node/validator-rebel-2"
  },
  {
    "slug": "full-node/run-a-full-terra-node/validator-rebel-2",
    "path": "/full-node/run-a-full-terra-node/validator-rebel-2/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/validator-rebel-2.md",
    "group": "Run a Full Node",
    "navTitle": "Validate on rebel-2",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 142,
    "title": "Validate on rebel-2",
    "description": "Spin up a Terra Classic testnet validator and join coordination channels.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/validator-rebel-2.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Versions and network endpoints",
        "id": "versions-and-network-endpoints"
      },
      {
        "depth": 2,
        "title": "Prerequisites",
        "id": "prerequisites"
      },
      {
        "depth": 2,
        "title": "Install toolchain and build `terrad`",
        "id": "install-toolchain-and-build-terrad"
      },
      {
        "depth": 2,
        "title": "Bootstrap chain data",
        "id": "bootstrap-chain-data"
      },
      {
        "depth": 2,
        "title": "Join the validator set",
        "id": "join-the-validator-set"
      },
      {
        "depth": 2,
        "title": "Oracle feeder setup",
        "id": "oracle-feeder-setup"
      },
      {
        "depth": 2,
        "title": "Leaving the testnet safely",
        "id": "leaving-the-testnet-safely"
      },
      {
        "depth": 2,
        "title": "Troubleshooting",
        "id": "troubleshooting"
      }
    ],
    "body": "## Versions and network endpoints\n\n| Component | Version |\n| --- | --- |\n| Terra Core | `v3.6.0-rc.0` |\n| Oracle Feeder | `v3.1.6` |\n| Go | `go1.22.12` |\n\n| Endpoint | URL |\n| --- | --- |\n| RPC | [https://rpc.luncblaze.com](https://rpc.luncblaze.com) |\n| LCD | [https://lcd.luncblaze.com](https://lcd.luncblaze.com) |\n| Snapshot | [https://luncblaze.com/rebel-2/rebel2-latest.tar.lz4](https://luncblaze.com/rebel-2/rebel2-latest.tar.lz4) |\n| Snapshot | [https://snapshots.hexxagon.io/cosmos/terra-classic/rebel-2/](https://snapshots.hexxagon.io/cosmos/terra-classic/rebel-2/) |\n\n> **Tip**\n> Rebel-2 might require more frequent upgrades than mainnet. Keep your own testnet node or snapshot source ready for rapid restores.\n\n## Prerequisites\n\n- Linux server (Ubuntu/Debian recommended)\n- ≥ 4 CPU cores\n- 32 GB RAM minimum (48 GB to 64 GB preferred)\n- Swap space configured for cases of memory pressure\n- 1 TB NVMe SSD (2 TB recommended for pruning space and snapshots)\n\n## Install toolchain and build `terrad`\n\n1. Follow the instructions in [System configuration](/full-node/run-a-full-terra-node/system-config/) and [Build Terra Core](/full-node/run-a-full-terra-node/build-terra-core/).\n\n> **Important**\n>\n> rebel-2 might require a different go version than mainnet. Check the version table above.\n\n## Bootstrap chain data\n\n1. Initialise node configuration for rebel-2.\n\n   ```bash\n   terrad init <testnet-moniker>\n   ```\n\n2. Download the latest address book and genesis files.\n\n   ```bash\n   cd ~/.terra/config\n   wget -O addrbook.json \"https://snapshots.luncblaze.com/rebel-2/addrbook.json\"\n   wget -O genesis.json \"https://snapshots.luncblaze.com/rebel-2/genesis.json\"\n   ```\n\n3. Ensure `iavl-disable-fastnode = false` in `config/app.toml` before restoring snapshots. Rebel-2 snapshots published after May 2025 expect fast-node mode.\n\n4. Fetch a recent snapshot.\n\n   ```bash\n   cd ~/.terra\n   mv data data~backup\n   wget -O snapshot.tar.lz4 \"https://snapshots.luncblaze.com/rebel-2/rebel2-latest.tar.lz4\"\n   lz4cat snapshot.tar.lz4 | tar xvf -\n   ```\n\n5. Start the node and wait for sync.\n\n   ```bash\n   terrad start\n   terrad status\n   ```\n\n## Join the validator set\n\n1. Create a signing key.\n\n   ```bash\n   terrad keys add valwallet\n   terrad keys list\n   ```\n\n2. Request testnet LUNC through the [rebel-2 faucet bot](https://t.me/tcrebelfaucet_bot). Or [rebel-2 faucet by LuncGoblins](https://faucet.luncgoblins.com/). Operators @StrathCole and @fragwuerdig can assist if the faucet is offline.\n\n3. Register the validator.\n\n   ```bash\n   terrad tx staking create-validator \\\n     --amount \"10000000uluna\" \\\n     --commission-max-change-rate \"0.01\" \\\n     --commission-max-rate \"0.2\" \\\n     --commission-rate \"0.1\" \\\n     --min-self-delegation 1 \\\n     --pubkey \"$(terrad tendermint show-validator)\" \\\n     --moniker \"myvalidator\" \\\n     --chain-id rebel-2 \\\n     --gas auto \\\n     --gas-prices 28.325uluna \\\n     --gas-adjustment 1.4 \\\n     --from valwallet\n   ```\n\n4. Confirm the validator is visible.\n\n   ```bash\n   terrad q staking validators | grep -A6 \"myvalidator\"\n   ```\n\n## Oracle feeder setup\n\n1. Create the feeder wallet and delegate privileges.\n\n   ```bash\n   terrad keys add feederwallet\n   terrad tx oracle set-feeder <feederwallet> --from valwallet --chain-id rebel-2 --gas auto --gas-prices 5uluna --gas-adjustment 2\n   ```\n\n2. Enable the local LCD (`enable = true` in `~/.terra/config/app.toml` under `[api]`) and restart the node. Use `max-open-connections = 500` to avoid exhausting sockets during stress tests.\n\n3. Deploy the price server following the [oracle-feeder repository](https://github.com/classic-terra/oracle-feeder#readme). Example run command:\n\n   ```bash\n   npm start vote -- \\\n     -d http://localhost:8532/latest \\\n     --lcd-url http://127.0.0.1:1317 \\\n     --chain-id rebel-2 \\\n     --validators <your-valoper-address> \\\n     --password <wallet-password>\n   ```\n\n4. Join the validator coordination chat on Telegram (contact @StrathCole or @fragwuerdig) for upgrade announcements.\n\n## Leaving the testnet safely\n\n- Use `terrad tx staking unbond` to exit the active set:\n\n  ```bash\n  terrad tx staking unbond <your-valoper-address> 10000000uluna --from valwallet --chain-id rebel-2 --gas auto --gas-prices 5uluna --gas-adjustment 2\n  ```\n\n- Confirm the validator status becomes `BOND_STATUS_UNBONDING` before shutting down.\n\n## Troubleshooting\n\n- **Feeder wallet not found**: Fund the feeder wallet with a small LUNC balance so the account exists on-chain.\n- **Price feeder idle**: Ensure the LCD API is running locally and that feeder/core versions match the listed versions.\n",
    "previousSlug": "full-node/run-a-full-terra-node/validator-columbus-5",
    "nextSlug": "full-node/run-a-full-terra-node/troubleshoot"
  },
  {
    "slug": "full-node/run-a-full-terra-node/troubleshoot",
    "path": "/full-node/run-a-full-terra-node/troubleshoot/",
    "sourceFile": "content/docs/full-node/run-a-full-terra-node/troubleshoot.md",
    "group": "Run a Full Node",
    "navTitle": "Reset and troubleshooting",
    "navDepth": 1,
    "navParent": "full-node/overview",
    "navHasChildren": false,
    "navOrder": 143,
    "title": "Reset and troubleshooting",
    "description": "Recover from configuration drift, replace genesis files, and verify node health.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/troubleshoot.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Complete reset",
        "id": "complete-reset"
      },
      {
        "depth": 2,
        "title": "Change genesis",
        "id": "change-genesis"
      },
      {
        "depth": 2,
        "title": "Reset personal data",
        "id": "reset-personal-data"
      },
      {
        "depth": 2,
        "title": "Node health checklist",
        "id": "node-health-checklist"
      }
    ],
    "body": "Occasionally you may need to reset your node to resolve configuration drift or data corruption. The steps below describe common recovery tasks.\n\n## Complete reset\n\n> **Warning**\n>\n> This will remove all blockchain history and reset the validator state while keeping your keys. This is a destructive operation and should only be used if you are sure you want to reset your node. Make sure to have a backup of your keys and the validator state before running this command!\n\n```bash\nterrad tendermint unsafe-reset-all\n```\n\nRunning the command removes blockchain history under `~/.terra/data` and resets the validator state. Add `--keep-addr-book` to keep the address book file.\n\nExpected output:\n\n```text\n[ INF ] Removed existing address book file=/home/user/.terra/config/addrbook.json\n[ INF ] Removed all blockchain history dir=/home/user/.terra/data\n[ INF ] Reset private validator file to genesis state keyFile=/home/user/.terra/config/priv_validator_key.json stateFile=/home/user/.terra/data/priv_validator_state.json\n```\n\n> **Tip**\n>\n> After a reset, confirm that `~/.terra/config/addrbook.json` contains peers. If it is missing, download a fresh address book before restarting.\n\n## Change genesis\n\nDelete the old genesis file and fetch a new copy from a trusted source (see [Sync](/full-node/run-a-full-terra-node/sync/)).\n\n## Reset personal data\n\n> **Danger**\n>\n> Do not delete `priv_validator_key.json` on production validators!  \n> Replacing this file breaks your validator identity and risks slashing.\n>\n> Do not delete `priv_validator_state.json` on production validators!  \n> This can lead to double-signing and severe slashing in the worst case.\n\nTo reset all personal data, remove both `~/.terra/config/priv_validator_state.json` and `~/.terra/config/node_key.json`.\n\n## Node health checklist\n\nEnsure the following files exist before resuming operations:\n\n- `~/.terra/config/addrbook.json`\n- `~/.terra/config/genesis.json`\n- `~/.terra/data/priv_validator_state.json`\n- `~/.terra/config/node_key.json`\n- `~/.terra/config/priv_validator_key.json`\n\nAfter recovery, resync via the standard process from the [Sync](/full-node/run-a-full-terra-node/sync/) guide.\n",
    "previousSlug": "full-node/run-a-full-terra-node/validator-rebel-2",
    "nextSlug": "develop/endpoints"
  },
  {
    "slug": "develop/endpoints",
    "path": "/develop/endpoints/",
    "sourceFile": "content/docs/develop/endpoints.md",
    "group": "Run a Full Node",
    "navTitle": "Public Network Endpoints",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 144,
    "title": "Public Network Endpoints",
    "description": "Public endpoints for Terra Classic infrastructure.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/endpoints.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 3,
        "title": "LCD",
        "id": "lcd"
      },
      {
        "depth": 3,
        "title": "FCD",
        "id": "fcd"
      },
      {
        "depth": 3,
        "title": "RPC",
        "id": "rpc"
      },
      {
        "depth": 3,
        "title": "gRPC",
        "id": "grpc"
      }
    ],
    "body": "> **Warning**\n>\n> Public infrastructure is intended for development and light workloads. Run your own node or purchase dedicated access for production.\n\n### LCD\n\n| Endpoint | Network |\n| --- | --- |\n| [https://terra-classic-lcd.publicnode.com](https://terra-classic-lcd.publicnode.com) | columbus-5 |\n| [https://api-lunc-lcd.binodes.com](https://api-lunc-lcd.binodes.com) | columbus-5 |\n| [https://lcd.terra-classic.hexxagon.io](https://lcd.terra-classic.hexxagon.io) | columbus-5 |\n| [https://lcd.luncblaze.com](https://lcd.luncblaze.com) | rebel-2 |\n| [https://lcd.terra-classic.hexxagon.dev](https://lcd.terra-classic.hexxagon.dev) | rebel-2 |\n\n- Terra Classic chain ID: `columbus-5`.\n\n### FCD\n\n| Endpoint | Network |\n| --- | --- |\n| [https://terra-classic-fcd.publicnode.com](https://terra-classic-fcd.publicnode.com) | columbus-5 |\n| [https://fcd.terra-classic.hexxagon.io](https://fcd.terra-classic.hexxagon.io) | columbus-5 |\n| [https://fcd.luncblaze.com](https://fcd.luncblaze.com) | rebel-2 |\n\nExample gas price endpoint:\n\n```text\nhttps://terra-classic-fcd.publicnode.com/v1/txs/gas_prices\n```\n\n### RPC\n\n| Endpoint | Network |\n| --- | --- |\n| [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com) | columbus-5 |\n| [https://api-lunc-rpc.binodes.com](https://api-lunc-rpc.binodes.com) | columbus-5 |\n| [https://rpc.terra-classic.hexxagon.io](https://rpc.terra-classic.hexxagon.io) | columbus-5 |\n| [https://rpc.luncblaze.com](https://rpc.luncblaze.com) | rebel-2 |\n| [https://rpc.terra-classic.hexxagon.dev](https://rpc.terra-classic.hexxagon.dev) | rebel-2 |\n\n### gRPC\n\n| Endpoint | Network |\n| --- | --- |\n| `grpc+https://terra-classic-grpc.publicnode.com` | columbus-5 |\n| `grpc+https://grpc.terra-classic.hexxagon.io` | columbus-5 |\n| `grpc+https://grpc.terra-classic.hexxagon.dev` | rebel-2 |\n\nUse the rebel-2 testnet for pre-production validation alongside local instances.\n",
    "previousSlug": "full-node/run-a-full-terra-node/troubleshoot",
    "nextSlug": "appendices/glossary"
  },
  {
    "slug": "appendices/glossary",
    "path": "/appendices/glossary/",
    "sourceFile": "content/docs/appendices/glossary.md",
    "group": "Appendices",
    "navTitle": "Glossary",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 145,
    "title": "Glossary",
    "description": "Terra Classic terminology reference for users, validators, and developers.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/glossary.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Active set",
        "id": "active-set"
      },
      {
        "depth": 2,
        "title": "Airdrops",
        "id": "airdrops"
      },
      {
        "depth": 2,
        "title": "Algorithmic stablecoin",
        "id": "algorithmic-stablecoin"
      },
      {
        "depth": 2,
        "title": "Arbitrage",
        "id": "arbitrage"
      },
      {
        "depth": 2,
        "title": "Blockchain",
        "id": "blockchain"
      },
      {
        "depth": 2,
        "title": "Blocks",
        "id": "blocks"
      },
      {
        "depth": 2,
        "title": "bLUNA",
        "id": "bluna"
      },
      {
        "depth": 2,
        "title": "Bonded validator",
        "id": "bonded-validator"
      },
      {
        "depth": 2,
        "title": "Bonding",
        "id": "bonding"
      },
      {
        "depth": 2,
        "title": "Burn",
        "id": "burn"
      },
      {
        "depth": 2,
        "title": "CHAI",
        "id": "chai"
      },
      {
        "depth": 2,
        "title": "Columbus-5",
        "id": "columbus-5"
      },
      {
        "depth": 2,
        "title": "Commission",
        "id": "commission"
      },
      {
        "depth": 2,
        "title": "Community pool",
        "id": "community-pool"
      },
      {
        "depth": 2,
        "title": "Consensus",
        "id": "consensus"
      },
      {
        "depth": 2,
        "title": "Cosmos SDK",
        "id": "cosmos-sdk"
      },
      {
        "depth": 2,
        "title": "dApp",
        "id": "dapp"
      },
      {
        "depth": 2,
        "title": "DDoS",
        "id": "ddos"
      },
      {
        "depth": 2,
        "title": "DeFi",
        "id": "defi"
      },
      {
        "depth": 2,
        "title": "Delegate",
        "id": "delegate"
      },
      {
        "depth": 2,
        "title": "Delegator",
        "id": "delegator"
      },
      {
        "depth": 2,
        "title": "Epoch",
        "id": "epoch"
      },
      {
        "depth": 2,
        "title": "Fees",
        "id": "fees"
      },
      {
        "depth": 2,
        "title": "Fiat currency",
        "id": "fiat-currency"
      },
      {
        "depth": 2,
        "title": "Full node",
        "id": "full-node"
      },
      {
        "depth": 2,
        "title": "LUNC",
        "id": "lunc"
      },
      {
        "depth": 2,
        "title": "Governance",
        "id": "governance"
      },
      {
        "depth": 2,
        "title": "Governance proposal",
        "id": "governance-proposal"
      },
      {
        "depth": 2,
        "title": "IBC",
        "id": "ibc"
      },
      {
        "depth": 2,
        "title": "Inactive set",
        "id": "inactive-set"
      },
      {
        "depth": 2,
        "title": "Jailed",
        "id": "jailed"
      },
      {
        "depth": 2,
        "title": "Market swap",
        "id": "market-swap"
      },
      {
        "depth": 3,
        "title": "Examples",
        "id": "examples"
      },
      {
        "depth": 2,
        "title": "Mint",
        "id": "mint"
      },
      {
        "depth": 2,
        "title": "Miss",
        "id": "miss"
      },
      {
        "depth": 2,
        "title": "Module",
        "id": "module"
      },
      {
        "depth": 2,
        "title": "Oracle",
        "id": "oracle"
      },
      {
        "depth": 2,
        "title": "Peg",
        "id": "peg"
      },
      {
        "depth": 2,
        "title": "Pools",
        "id": "pools"
      },
      {
        "depth": 2,
        "title": "Proof of Stake",
        "id": "proof-of-stake"
      },
      {
        "depth": 2,
        "title": "Quorum",
        "id": "quorum"
      },
      {
        "depth": 2,
        "title": "Redelegate",
        "id": "redelegate"
      },
      {
        "depth": 2,
        "title": "Rewards",
        "id": "rewards"
      },
      {
        "depth": 2,
        "title": "SDR",
        "id": "sdr"
      },
      {
        "depth": 2,
        "title": "Seigniorage",
        "id": "seigniorage"
      },
      {
        "depth": 2,
        "title": "Self-delegation",
        "id": "self-delegation"
      },
      {
        "depth": 2,
        "title": "Slashing",
        "id": "slashing"
      },
      {
        "depth": 2,
        "title": "Slippage",
        "id": "slippage"
      },
      {
        "depth": 2,
        "title": "Stake",
        "id": "stake"
      },
      {
        "depth": 2,
        "title": "Staking",
        "id": "staking"
      },
      {
        "depth": 2,
        "title": "Tendermint consensus",
        "id": "tendermint-consensus"
      },
      {
        "depth": 2,
        "title": "Terra Classic Core",
        "id": "terra-classic-core"
      },
      {
        "depth": 2,
        "title": "Terra Classic mainnet",
        "id": "terra-classic-mainnet"
      },
      {
        "depth": 2,
        "title": "Terra Classic stablecoins",
        "id": "terra-classic-stablecoins"
      },
      {
        "depth": 2,
        "title": "`terrad`",
        "id": "terrad"
      },
      {
        "depth": 2,
        "title": "`terravaloper` address",
        "id": "terravaloper-address"
      },
      {
        "depth": 2,
        "title": "Testnet",
        "id": "testnet"
      },
      {
        "depth": 2,
        "title": "Terra ecosystem",
        "id": "terra-ecosystem"
      },
      {
        "depth": 2,
        "title": "Terra protocol",
        "id": "terra-protocol"
      },
      {
        "depth": 2,
        "title": "Tobin tax",
        "id": "tobin-tax"
      },
      {
        "depth": 2,
        "title": "Tombstone",
        "id": "tombstone"
      },
      {
        "depth": 2,
        "title": "Total stake",
        "id": "total-stake"
      },
      {
        "depth": 2,
        "title": "Unbonded validator",
        "id": "unbonded-validator"
      },
      {
        "depth": 2,
        "title": "Unbonding validator",
        "id": "unbonding-validator"
      },
      {
        "depth": 2,
        "title": "Unbonded LUNC",
        "id": "unbonded-lunc"
      },
      {
        "depth": 2,
        "title": "Unbonding",
        "id": "unbonding"
      },
      {
        "depth": 2,
        "title": "Unbonding LUNC",
        "id": "unbonding-lunc"
      },
      {
        "depth": 2,
        "title": "Undelegate",
        "id": "undelegate"
      },
      {
        "depth": 2,
        "title": "Uptime",
        "id": "uptime"
      },
      {
        "depth": 2,
        "title": "Validator",
        "id": "validator"
      },
      {
        "depth": 2,
        "title": "Weight",
        "id": "weight"
      }
    ],
    "body": "## Active set\n\nTop validators that participate in consensus and earn rewards. If more than the configured maximum of validators want to join the active set, the validator with the lowest self-bond is removed from the active set.\n\n## Airdrops\n\nAdditional rewards given to delegators through specific validators, separate from staking rewards. Terra ecosystem protocols may distribute airdrops to boost visibility. Claim them via the protocol’s website.\n\n## Algorithmic stablecoin\n\nCrypto asset that tracks another asset’s price via software rules instead of collateral.\n\n## Arbitrage\n\nProfiting from price differences across markets. Traders buy in one market and sell in another at a higher price.\n\n## Blockchain\n\nImmutable ledger of transactions replicated across a network of independent computers.\n\n## Blocks\n\nGrouped transactions stored on the blockchain. Validators batch, verify, and sign blocks.\n\n## bLUNA\n\nLegacy token representing bonded LUNA used historically on protocols like Anchor and Mirror. Bonded positions took 21 days to unbond.\n\n## Bonded validator\n\nValidator in the active set participating in consensus and earning rewards.\n\n## Bonding\n\nDelegating or staking LUNC to a validator to receive rewards. Validators never take custody of delegator funds.\n\n## Burn\n\nPermanent destruction of tokens. Terra protocol historically burned LUNC to mint stablecoins, and vice versa.\n\n## CHAI\n\nKorean mobile payments app powered by Terra’s blockchain.\n\n## Columbus-5\n\nCurrent Terra Classic mainnet version.\n\n## Commission\n\nValidator’s share of staking rewards retained before distributing the remainder to delegators.\n\n## Community pool\n\nOn-chain fund accessible via governance proposals for ecosystem projects.\n\n## Consensus\n\nProcess by which validators agree that each block of transactions is valid. Terra uses Tendermint consensus. See the official [Tendermint docs](https://docs.tendermint.com/).\n\n## Cosmos SDK\n\nOpen-source framework used to build Terra’s blockchain. See the [Cosmos SDK docs](https://docs.cosmos.network/).\n\n## dApp\n\nApplication built on a decentralized platform.\n\n## DDoS\n\nDistributed denial of service attack that floods a network with requests to disrupt service.\n\n## DeFi\n\nDecentralized finance—financial applications operating without traditional intermediaries.\n\n## Delegate\n\nAction of bonding LUNC to a validator to earn rewards.\n\n## Delegator\n\nAccount that bonds or stakes LUNC to a validator and earns rewards.\n\n## Epoch\n\nTime window measured in blocks. Governance epochs last 100,800 blocks (~7.7 days at 6.6 s block time).\n\n## Fees\n\n- **Gas**: Compute fee added to every transaction to prevent spam. Validators set minimum gas prices.\n- **Spread fee**: Historical fee on Terra↔LUNC swaps.\n- **Tobin tax**: Historical fee on Terra stablecoin swaps.\n\nRefer to the [fees guide](/learn/fees/).\n\n## Fiat currency\n\nGovernment-issued currency not backed by another asset (e.g., USD).\n\n## Full node\n\nServer that validates and broadcasts transactions on the Terra mainnet. All validators run full nodes.\n\n## LUNC\n\nTerra Classic staking/governance token. On-chain micro-denom remains `uluna`.\n\n## Governance\n\nOn-chain process allowing stakers to update the protocol via proposals and voting.\n\n## Governance proposal\n\nFormal request for a protocol change. Types include parameter changes, community pool spends, and text proposals.\n\n## IBC\n\nInter-Blockchain Communication protocol enabling cross-chain asset transfers.\n\n## Inactive set\n\nValidators outside the active set. They neither sign blocks nor earn rewards.\n\n## Jailed\n\nStatus applied to misbehaving validators. Jailed validators leave the active set until unjailed.\n\n## Market swap\n\nTerra Station action routing through the market module to swap between Terra stablecoins or Terra and LUNC. Incurs gas plus Tobin or spread fees when enabled.\n\n### Examples\n\n- Swapping UST for KRT charged gas and Tobin tax.\n- Swapping LUNC for UST charged gas and spread fee.\n\n## Mint\n\nCreation of new tokens. Opposite of burn.\n\n## Miss\n\nConsensus vote that fails to be included in a block.\n\n## Module\n\nLogical component of Terra Core implementing a specific feature.\n\n## Oracle\n\nModule that aggregates exchange-rate votes from validators. Drives pricing for stablecoin mechanisms.\n\n## Peg\n\nFixed exchange ratio between an asset and its reference value (e.g., 1 UST ↔ 1 USD historically).\n\n## Pools\n\nToken groupings used in swap or liquidity mechanics.\n\n## Proof of Stake\n\nConsensus model where validators are selected to propose blocks based on staked tokens.\n\n## Quorum\n\nMinimum participation (40% of staked LUNC) required for a governance vote to be valid.\n\n## Redelegate\n\nMove bonded LUNC from one validator to another instantly, subject to a 21-day cooldown between the same source and destination validators.\n\n## Rewards\n\nStaking income (gas, taxes, historical swap fees) distributed to validators and delegators.\n\n## SDR\n\nIMF Special Drawing Rights. Terra historically used TerraSDR as its reference unit.\n\n## Seigniorage\n\nValue captured when minting currency. On Classic, all seigniorage is burned.\n\n## Self-delegation\n\nLUNC that a validator stakes to itself.\n\n## Slashing\n\nPenalty applied to validators for misbehaviour (double-signing, downtime, oracle faults).\n\n## Slippage\n\nDifference between expected and executed trade price.\n\n## Stake\n\nTotal LUNC bonded to a validator.\n\n## Staking\n\nBonding LUNC to a validator to secure the network and earn rewards.\n\n## Tendermint consensus\n\nTwo-round voting process securing Terra Classic. Validators propose, vote, and commit blocks via Tendermint.\n\n## Terra Classic Core\n\nGolang reference implementation of the Terra Classic protocol.\n\n## Terra Classic mainnet\n\nLive network where all Terra Classic transactions occur.\n\n## Terra Classic stablecoins\n\nStable assets that historically tracked fiat currencies via algorithmic supply changes. Names mirror underlying currency codes (e.g., TerraUSD `UST`, TerraKRW `KRT`).\n\n## `terrad`\n\nCLI for interacting with a Terra node.\n\n## `terravaloper` address\n\nValidator operator address starting with `terravaloper`.\n\n## Testnet\n\nNon-production network (`rebel-2`) used for testing and dry runs.\n\n## Terra ecosystem\n\nNetwork of dApps built on Terra Classic.\n\n## Terra protocol\n\nOpen-source blockchain for algorithmic stablecoins.\n\n## Tobin tax\n\nHistorical fee on Terra stablecoin swaps (rates available via oracle LCD). Disabled on Classic.\n\n## Tombstone\n\nState applied to validators that double-sign. Tombstoned validators cannot rejoin consensus.\n\n## Total stake\n\nAggregate LUNC bonded to a validator, including self-bond.\n\n## Unbonded validator\n\nValidator outside the active set and not participating in consensus.\n\n## Unbonding validator\n\nValidator transitioning out of the active set; does not sign blocks or earn rewards.\n\n## Unbonded LUNC\n\nLiquid LUNC not currently staked.\n\n## Unbonding\n\nProcess of unstaking LUNC. Takes 21 days with no rewards accrued.\n\n## Unbonding LUNC\n\nLUNC currently in the unbonding period and not transferable.\n\n## Undelegate\n\nAction to start unbonding LUNC from a validator (21-day wait).\n\n## Uptime\n\nPercentage of time a validator is online and signing blocks. Low uptime risks slashing.\n\n## Validator\n\nNode operator verifying transactions, participating in consensus, and voting in governance. Top 130 by stake form the active set.\n\n## Weight\n\nValidator’s total stake, used for block proposer selection and governance voting power.\n",
    "previousSlug": "develop/endpoints",
    "nextSlug": "appendices/source-and-review-model"
  },
  {
    "slug": "appendices/source-and-review-model",
    "path": "/appendices/source-and-review-model/",
    "sourceFile": "content/docs/appendices/source-and-review-model.md",
    "group": "Appendices",
    "navTitle": "Source and review model",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 146,
    "title": "Source and review model",
    "description": "How Terra Classic Docs should handle draft status, reviewed status, source visibility, corrections, and external live-data resources.",
    "status": "reviewed",
    "reviewed": true,
    "sourceTitle": "Terra Classic Docs",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "source-review-2026-06-01",
    "sourcePath": "content/docs/appendices/source-and-review-model.md",
    "sourceDate": "2026-06-01",
    "tocDepth": 2,
    "headings": [
      {
        "depth": 2,
        "title": "Page status",
        "id": "page-status"
      },
      {
        "depth": 2,
        "title": "Product status",
        "id": "product-status"
      },
      {
        "depth": 2,
        "title": "Source blocks",
        "id": "source-blocks"
      },
      {
        "depth": 2,
        "title": "Corrections",
        "id": "corrections"
      },
      {
        "depth": 2,
        "title": "Priority",
        "id": "priority"
      }
    ],
    "body": "Terra Classic Docs uses source-aware markdown pages.\n\nBecause Terra Classic has a complex history, source discipline is part of the product. A page should not only be readable. It should make clear whether a claim is live, proposed, historical, or still under review.\n\n## Page status\n\nThe current docs system supports two page statuses:\n\n| Status | Meaning |\n| --- | --- |\n| Draft | The page exists and may be useful, but should not be treated as fully reviewed. |\n| Reviewed | The page has been reviewed for the current docs scope and should have clearer source/status discipline. |\n\nReviewed does not mean the underlying protocol can never change. It means the page was checked for the claims it makes at the time it was reviewed.\n\n## Product status\n\nEditorial page status is different from product status.\n\nA page can be well reviewed while describing a proposed product. A live feature can also have a draft page.\n\nUse explicit wording for:\n\n- live\n- proposed\n- governance-accepted\n- in development\n- disabled\n- deprecated\n- historical\n\n## Source blocks\n\nTrust-sensitive pages should include a visible source section.\n\nUseful source references include:\n\n- governance proposals or discussions\n- code repositories or releases\n- source documents supplied to the docs project\n- related docs pages\n- external explorers, wallets, or data tools where live values should be checked\n\nThe docs should not copy live-data products. If a reader needs current values, the docs should explain what to check and link to the relevant external resource.\n\n## Corrections\n\nIf a docs page conflicts with live chain behavior, accepted governance implementation, or current source material, the docs should be corrected.\n\nGood corrections should include:\n\n- the affected page\n- the claim that appears wrong\n- the source that proves the issue\n- suggested replacement wording, if available\n\n## Priority\n\nReview priority should be highest for pages that affect:\n\n- user funds\n- stablecoin or USTC claims\n- swap availability\n- governance status\n- proposed versus live product boundaries\n- validator or wallet actions\n- institutional due diligence\n\nLow-risk narrative pages can remain draft longer than pages that influence user actions or public trust.\n",
    "previousSlug": "appendices/glossary",
    "nextSlug": "develop/cosmes/cosmes-contracts"
  },
  {
    "slug": "develop/cosmes/cosmes-contracts",
    "path": "/develop/cosmes/cosmes-contracts/",
    "sourceFile": "content/docs/develop/cosmes/cosmes-contracts.md",
    "group": "Reference",
    "navTitle": "Cosmes Contracts",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 10000,
    "title": "Cosmes Contracts",
    "description": "Wallet connection (Keplr, Galaxy Station, or MnemonicWallet)",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-contracts.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [
      {
        "depth": 2,
        "title": "Prerequisites",
        "id": "prerequisites"
      },
      {
        "depth": 2,
        "title": "Upload code (`MsgStoreCode`)",
        "id": "upload-code-msgstorecode"
      },
      {
        "depth": 2,
        "title": "Instantiate (`MsgInstantiateContract`)",
        "id": "instantiate-msginstantiatecontract"
      },
      {
        "depth": 2,
        "title": "Execute (`MsgExecuteContract`)",
        "id": "execute-msgexecutecontract"
      },
      {
        "depth": 2,
        "title": "Query contract state",
        "id": "query-contract-state"
      }
    ],
    "body": "## Prerequisites\n\n- Wallet connection (Keplr, Galaxy Station, or `MnemonicWallet`)\n- RPC: [https://terra-classic-rpc.publicnode.com](https://terra-classic-rpc.publicnode.com)\n- Chain ID: `columbus-5`\n\n## Upload code (`MsgStoreCode`)\n\n```ts\nimport { MsgStoreCode } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\nconst wallets = await controller.connect(WalletType.EXTENSION, [\n  {\n    chainId: \"columbus-5\",\n    rpc: \"https://terra-classic-rpc.publicnode.com\",\n    gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  },\n]);\nconst connected = wallets.get(\"columbus-5\");\n\nconst wasmBytes = new Uint8Array(\n  await (await fetch(\"/path/to/contract.wasm\")).arrayBuffer()\n);\n\nconst msg = new MsgStoreCode({\n  sender: connected?.address ?? \"\",\n  wasmByteCode: wasmBytes,\n});\n\nconst unsigned = { msgs: [msg], memo: \"store code\" };\nconst fee = await connected?.estimateFee(unsigned, 1.2);\nconst txHash = await connected?.broadcastTx(unsigned, fee);\nconsole.log(\"store code txhash\", txHash);\n```\n\n## Instantiate (`MsgInstantiateContract`)\n\n```ts\nimport { MsgInstantiateContract } from \"@goblinhunt/cosmes/client\";\n\nconst instantiate = new MsgInstantiateContract({\n  sender: connected?.address ?? \"\",\n  admin: connected?.address,\n  codeId: 1234,\n  label: \"counter\",\n  msg: { count: 0 },\n  funds: [{ denom: \"uluna\", amount: \"1000000\" }],\n});\n\nconst unsigned = { msgs: [instantiate], memo: \"instantiate\" };\nconst fee = await connected?.estimateFee(unsigned, 1.2);\nconst txHash = await connected?.broadcastTx(unsigned, fee);\nconsole.log(\"instantiate txhash\", txHash);\n```\n\n## Execute (`MsgExecuteContract`)\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst exec = new MsgExecuteContract({\n  sender: connected?.address ?? \"\",\n  contract: \"terra1...contract\",\n  msg: { increment: {} },\n  funds: [],\n});\n\nconst unsigned = { msgs: [exec], memo: \"execute\" };\nconst fee = await connected?.estimateFee(unsigned, 1.2);\nconst txHash = await connected?.broadcastTx(unsigned, fee);\nconsole.log(\"execute txhash\", txHash);\n```\n\n## Query contract state\n\n```ts\nimport { queryContract } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst response = await queryContract(RPC, {\n  address: \"terra1...contract\",\n  query: { get_count: {} },\n});\nconsole.log(response);\n```\n\n> **Notes**\n>\n> - Gas price references: [terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params) and [terra-classic-fcd.publicnode.com/v1/txs/gas_prices](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices).\n> - Market swaps are disabled on Classic; use DEX contracts for trading.\n",
    "previousSlug": "appendices/source-and-review-model",
    "nextSlug": null
  }
] satisfies DocsPage[];
