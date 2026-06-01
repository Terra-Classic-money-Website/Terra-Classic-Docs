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
    "body": "## What this docs site is\n\nTerra Classic Docs is a custom, GitHub Pages-only documentation site for Terra Classic users, node operators, validators, and builders.\n\nIt is separate from the main Terra Classic Website. The docs site is built around source-aware markdown content, clear navigation, and a contribution model that can evolve through GitHub issues and pull requests.\n\n## Main sections\n\n- [Learn](/learn/protocol/) covers user-facing Terra Classic concepts, wallets, and fees.\n- [Staking Protocol](/staking-protocol/overview/) covers LUNC delegation, rewards, validator selection, governance participation, unstaking risks, validator responsibilities, and developer integration.\n- [Swap Protocol](/swap-protocol/overview/) covers native LUNC and USTC swaps through Market Module 2.0, including no-mint liquidity, oracle pricing, fees, burns, validator operations, and developer integration.\n- [Develop](/develop/smart-contracts/overview/) covers smart contracts, CosmES, Terra.py, transaction behavior, endpoints, localnet, and module specifications.\n- [Full Node](/full-node/overview/) covers node operation, production setup, sync, troubleshooting, and validator-network guides.\n- [Appendices](/appendices/glossary/) covers reference material such as glossary terms.\n\n## Contribution model\n\nThe long-term target is a community-maintained docs surface where corrections and improvements are proposed through GitHub. The edit link on each page opens its source markdown file in the public docs repository.\n",
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
    "body": "Terra Classic combines proof-of-stake security and on-chain governance. This overview explains how LUNC, validators, and delegators all interact.\n\n> **Important**\n>\n> Since May 2022, Terra Classic has no pegged stablecoins. TerraUSD (UST) has depegged and is currently considered a speculative asset.\n>\n> References to **stablecoins** in this document refer to the historical algorithmic operation of Terra.\n\n## Terra and LUNC\n\n- **LUNC** is the staking and governance asset. Validators and delegators stake LUNC to secure the chain, earn rewards, and participate in governance.\n- **TerraUSD et al.** historically tracked fiat currencies (for example, TerraUSD `uusd`, TerraKRW `ukrw`, TerraSDR `usdr`). Users historically minted Terra by burning LUNC. On Classic, the old mint/burn swap path was disabled after 2022; native LUNC and USTC swaps are now handled through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0's no-mint pool design.\n\n## Stablecoin mechanics (historical)\n\nTerra was designed around two supply pools—Terra and LUNC. The market module encouraged arbitrage to expand or contract stablecoin supply and keep prices near their pegs.\n\n- **Expansion**: When Terra traded above the peg, burning LUNC to mint Terra increased supply and reduced the premium.\n- **Contraction**: When Terra traded below the peg, burning Terra to mint LUNC reduced Terra supply.\n\n> **Important**\n> Following the 2022 hyperinflation event, Classic governance disabled market swap mint/burn paths. LUNC remains the staking asset. Native LUNC and USTC swaps now use [Swap Protocol](/swap-protocol/overview/), which avoids minting new supply and prices USTC through oracle-reported market data.\n\n## Validators and consensus\n\nValidators run full nodes, propose blocks, and vote during Tendermint consensus.\n\n1. A proposer is selected (weighted by stake) and broadcasts a block.\n2. Validators vote in two rounds. If ≥2/3 of voting power signs both rounds, the block is committed.\n3. Fees from the block enter the distribution module and are later shared with delegators.\n\nLearn more in the validator guides under `Run a full node` and the [Staking Protocol overview](/staking-protocol/overview/).\n\n## Staking lifecycle\n\n- **Delegating**: Delegators bond LUNC to a validator to earn rewards. Staked LUNC contributes to validator voting power but always belongs to the delegator.\n- **Bonded / unbonded / unbonding**: LUNC exists in three phases. Unbonding takes 21 days and does not accrue rewards.\n- **Redelegation**: Move bonded stake between validators without waiting the unbonding period (subject to a 21-day cooldown per source/target pair).\n\n### Slashing\n\nMisbehaving validators are penalised by the slashing module:\n\n- **Double-signing**: Signing conflicting blocks at the same height.\n- **Downtime**: Failing to participate in consensus.\n- **Oracle faults**: Missing required oracle votes (`x/oracle`).\n\nEvery slash reduces both validator self-bond and delegator stake, and the validator is jailed until conditions are resolved. Review the [slashing spec](/develop/module-specifications/spec-slashing/) for parameters.\n\n## Governance\n\nTerra Classic governance lets stakers steer protocol policy.\n\n1. **Deposit period**: Community members deposit LUNC on a proposal until the minimum threshold is reached or the maximum deposit period expires.\n2. **Voting period**: Validators vote `Yes`, `No`, `NoWithVeto`, or `Abstain`. Delegators can override their validator's vote.\n3. **Execution**: Passed proposals trigger automatic handlers or human follow-up depending on the proposal type. Deposits, quorum, threshold, veto, and voting-period parameters are governance-controlled and should be queried before relying on a fixed value.\n\nCommon proposal types include parameter changes, community pool spends, software upgrades, and text proposals. See the [Staking Protocol governance guide](/staking-protocol/governance/) and the [governance module spec](/develop/module-specifications/spec-governance/) for details.\n\n## Fees and rewards\n\n- **Gas** pays validator compute and storage costs (`x/auth`).\n- **Burn tax** is charged via the `x/tax` module on many transfers; rates are queryable through LCD or RPC endpoints.\n- **Swap Protocol spread fees** apply to native LUNC and USTC swaps through Market Module 2.0. The protocol charges a 0.35% spread fee when swaps are enabled and capacity remains; the fee routes 50% to burn and 50% to the Oracle Pool.\n\nRewards flow into the distribution module and are split between validators and delegators based on stake and commission. Consult the [Staking Protocol rewards guide](/staking-protocol/rewards-and-apr/), the [Swap Protocol fees guide](/swap-protocol/fees-burns-and-liquidity/), and the [fees guide](/learn/fees/) for related mechanics.\n",
    "previousSlug": "start",
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
    "navOrder": 2,
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
    "previousSlug": "learn/protocol",
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
    "navOrder": 3,
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
    "navOrder": 4,
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
    "navOrder": 5,
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
    "navOrder": 6,
    "title": "Keplr send",
    "description": "Send assets with Keplr on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-send.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "1. Open the Keplr extension and select the Terra Classic network.\n2. Navigate to **Assets** and choose the token you want to send.\n3. Click **Send**.\n4. Paste the recipient `terra...` address.\n5. Enter the amount and optional memo.\n6. Review fees and confirm with **Approve**.\n\n> **Tips**\n>\n> - Keep a small `uluna` balance to cover future fees.\n> - For rebel-2, request test tokens from the [faucet](https://t.me/tcrebelfaucet_bot).\n",
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
    "navOrder": 7,
    "title": "Keplr staking",
    "description": "Delegate, redelegate, and undelegate LUNC with Keplr.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-staking.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "Staking with Keplr is only possible through third-party websites or the [Keplr Dashboard](https://wallet.keplr.app/chains/terra-classic).\n\nFor the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).\n\n> **Tips**\n>\n> - Keep enough LUNC for future fees.\n> - Redelegations avoid the 21-day unbonding period, but each validator pair has a 21-day cooldown between redelegations.\n> - Undelegation requires a 21-day waiting period before funds become liquid.\n",
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
    "navOrder": 8,
    "title": "Keplr governance",
    "description": "Deposit and vote on proposals using Keplr.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-governance.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "Voting with Keplr is only possible through third-party websites. See the [ecosystem page](/) for more information.\n",
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
    "navOrder": 9,
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
    "navOrder": 10,
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
    "navOrder": 11,
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
    "navOrder": 12,
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
    "navOrder": 13,
    "title": "Galaxy Station send",
    "description": "Transfer assets using Galaxy Station or WalletConnect.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-send.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "1. Open the Galaxy Station extension or connect through WalletConnect.\n2. Ensure Terra Classic is the active network.\n3. Choose a token from **Assets**.\n4. Click **Send**.\n5. Paste the recipient `terra...` address.\n6. Enter the amount and optional memo.\n7. Review fees and confirm.\n\n> **Tips**\n>\n> - Keep a small LUNC balance to cover future fees.\n> - For rebel-2 testnet, request funds from the [faucet](https://t.me/tcrebelfaucet_bot).\n",
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
    "navOrder": 14,
    "title": "Galaxy Station staking",
    "description": "Delegate, redelegate, and undelegate LUNC in Galaxy Station.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-staking.md",
    "sourceDate": "2026-05-27",
    "tocDepth": null,
    "headings": [],
    "body": "1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.\n2. Ensure Terra Classic is selected as the active network.\n3. Open the staking view and browse validators.\n4. Choose a validator and click **Delegate**.\n5. Enter the stake amount and confirm.\n\nFor the full staking lifecycle, validator-selection criteria, rewards model, and unstaking risks, use the [Staking Protocol guide](/staking-protocol/overview/).\n\n> **Tips**\n>\n> - Keep some LUNC for transaction fees.\n> - Redelegations avoid the 21-day unbonding period but introduce a 21-day cooldown between the same validator pair.\n> - Undelegating starts a 21-day unbonding period before funds become liquid.\n",
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
    "navOrder": 15,
    "title": "Galaxy Station governance",
    "description": "Deposit and vote on proposals via Galaxy Station.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-governance.md",
    "sourceDate": "2026-05-27",
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
      }
    ],
    "body": "## Vote on proposals\n\n1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.\n2. Ensure Terra Classic is selected.\n3. Open **Governance / Proposals**.\n4. Choose a proposal to review.\n5. Click **Vote**, select an option, and confirm.\n\n## Deposit to a proposal\n\n1. While a proposal is in deposit period, open it in Governance.\n2. Click **Deposit**, enter the `LUNC` amount, and confirm.\n\n> **Notes**\n>\n> - A minimum deposit is required for proposals to enter the voting stage.\n> - Your staked voting power applies to both deposits and votes.\n",
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
    "navOrder": 16,
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
    "navOrder": 17,
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
    "navOrder": 18,
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
    "body": "The Staking Protocol is Terra Classic's proof-of-stake participation layer.\n\nIt lets LUNC holders delegate tokens to validators, help secure the chain, earn protocol rewards, and route voting power into governance without giving validators custody of their wallet.\n\nUse this section if you are:\n\n- a LUNC holder deciding whether to stake\n- a delegator choosing validators\n- a community member trying to understand governance power\n- an investor evaluating network participation\n- a validator explaining what responsible operation requires\n- a developer building staking, portfolio, governance, or validator tooling\n\n## Product position\n\nStaking Protocol is the official product name used in these docs for Terra Classic staking.\n\nIt is not a new token, not a custody product, not liquid staking, not a yield vault, and not a guarantee of profit. It is the user-facing name for the native proof-of-stake system already built into Terra Classic through Cosmos SDK staking, distribution, slashing, and governance modules.\n\nThe product promise should stay simple:\n\n> Delegate LUNC to help secure Terra Classic, earn transparent protocol rewards, and participate in governance while keeping control of your wallet.\n\n## What staking does\n\nWhen you delegate LUNC, your stake is bonded to a validator. The validator uses total delegated stake to compete for consensus power. If the validator is active, it can propose and sign blocks. Rewards earned by that validator are shared with delegators after commission.\n\nYour delegated LUNC remains associated with your wallet address. A validator cannot spend it, transfer it, or move it to another wallet. The validator can still affect your outcome because poor validator behavior can reduce rewards, cause missed governance participation, or create slashing risk.\n\n## Why it matters for Terra Classic\n\nStaking Protocol is one of Terra Classic's strongest existing L1 products because it is live, understandable, non-custodial, and directly connected to network security.\n\nFor Terra Classic, staking also matters strategically:\n\n- Higher bonded stake reduces the liquid supply available for immediate selling.\n- More distributed stake improves the validator power structure.\n- Better validator selection raises pressure for uptime, governance participation, and professional operation.\n- More active delegator voting makes governance less dependent on a small validator minority.\n- Clear staking docs turn a confusing wallet action into a credible participation pathway.\n\nThis is why the docs should not describe staking only as a passive APR feature. On Terra Classic, staking is also a network-security, governance, and trust-surface product.\n\n## Core actions\n\n| Action | What it means | Main tradeoff |\n| --- | --- | --- |\n| Delegate | Bond liquid LUNC to a validator. | Earn rewards and voting power exposure, but accept validator risk. |\n| Claim rewards | Withdraw accumulated rewards to your wallet. | Requires a transaction fee. |\n| Redelegate | Move bonded stake from one validator to another. | Avoids the full unbonding wait, but has cooldown limits. |\n| Undelegate | Start returning bonded LUNC to liquid balance. | Takes the chain's unbonding period and earns no rewards during that time. |\n| Vote | Cast your own governance vote. | Overrides your validator's vote for that proposal. |\n\n## How this section is organized\n\n- [How it works](/staking-protocol/how-it-works/) explains the staking lifecycle and current queryable parameters.\n- [Delegate LUNC](/staking-protocol/delegate-lunc/) gives a practical staking flow for supported wallets.\n- [Rewards and APR](/staking-protocol/rewards-and-apr/) explains where rewards come from and why APR changes.\n- [Choose a validator](/staking-protocol/choose-a-validator/) gives a decision framework for delegators.\n- [Risks and unstaking](/staking-protocol/risks-and-unstaking/) covers slashing, lockups, redelegation limits, and operational risk.\n- [Governance](/staking-protocol/governance/) explains how staked LUNC becomes governance power.\n- [Validator responsibilities](/staking-protocol/validator-responsibilities/) explains what responsible validators should provide.\n- [Developer reference](/staking-protocol/developer-reference/) gives module, message, query, and endpoint references.\n\n## What to avoid\n\nDo not evaluate Staking Protocol only by the displayed APR. APR is useful, but it is not the whole product.\n\nA serious staking decision should also look at validator uptime, voting behavior, commission, concentration, public communication, infrastructure quality, self-delegation, community contribution, and whether the validator's incentives are aligned with Terra Classic's long-term health.\n\n## Not financial advice\n\nStaking can produce protocol rewards, but LUNC price volatility, validator behavior, governance decisions, wallet security, slashing, and liquidity timing can materially affect outcomes. These docs explain protocol mechanics. They do not tell you whether to buy, sell, hold, or stake LUNC.\n",
    "previousSlug": "learn/fees",
    "nextSlug": "staking-protocol/how-it-works"
  },
  {
    "slug": "staking-protocol/how-it-works",
    "path": "/staking-protocol/how-it-works/",
    "sourceFile": "content/docs/staking-protocol/how-it-works.md",
    "group": "Staking Protocol",
    "navTitle": "How it works",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 19,
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
    "body": "Staking Protocol is built on the standard proof-of-stake model used by Cosmos SDK chains, with Terra Classic-specific parameters and governance-controlled settings.\n\nThe simple version:\n\n1. You hold liquid LUNC in a compatible wallet.\n2. You delegate some LUNC to one or more validators.\n3. Validators use delegated stake to participate in consensus.\n4. Rewards accumulate through the distribution module.\n5. You can claim rewards, redelegate, vote, or undelegate.\n\n## Validators and delegators\n\nValidators run infrastructure. They operate nodes, sign blocks, keep keys secure, participate in upgrades, vote in governance, and maintain reliable public communication.\n\nDelegators hold LUNC and choose validators. They do not need to run nodes. By delegating, they assign staking power to validators and share in rewards and risks.\n\nThis creates a principal-agent relationship. Delegators provide capital. Validators operate the security layer. Delegators should therefore treat validator choice as an active risk decision, not a random list selection.\n\n## Bonded, unbonding, and unbonded LUNC\n\nLUNC used by Staking Protocol can be in three practical states.\n\n| State | What it means | Rewards | Liquidity |\n| --- | --- | --- | --- |\n| Unbonded | Liquid LUNC in your wallet. | No staking rewards. | Spendable and transferable. |\n| Bonded | Delegated to a validator. | Eligible for staking rewards. | Not directly spendable. |\n| Unbonding | Leaving staking and returning to liquid balance. | No staking rewards during the wait. | Locked until the unbonding period completes. |\n\nOn Terra Classic, the staking bond denomination is `uluna`.\n\n```text\n1 LUNC = 1,000,000 uluna\n```\n\n## Validator power\n\nA validator's voting power comes from its bonded stake: self-delegation plus delegations from users.\n\nIn consensus, voting power decides how much weight a validator has when blocks are proposed and committed. In governance, validator voting power is also used unless delegators cast their own vote.\n\nTerra Classic has also implemented a custom validator voting-power cap documented in the [staking module spec](/develop/module-specifications/spec-staking/). The purpose is to reduce the risk that one validator accumulates too much influence.\n\n## Delegation shares\n\nWhen you delegate, the staking module tracks your position as delegation shares against a validator, not as a separate pile of untouched tokens.\n\nThis matters because rewards and slashes change the validator's token pool over time. Your claim is proportional to your shares in that validator's pool. In normal wallet interfaces this is abstracted away, but developers and analytics tools should understand that the chain state uses shares.\n\n## Redelegation\n\nRedelegation moves bonded LUNC from one validator to another without first waiting through the full unbonding period.\n\nUse redelegation when:\n\n- a validator is jailed or unreliable\n- a validator stops voting or communicating\n- commission changes make the validator unattractive\n- stake is too concentrated in a small set of validators\n- your governance preferences no longer align\n\nRedelegation still has limits. A redelegation creates a cooldown for the same source and destination validator pair. During the redelegation window, the stake can still be slashable for infractions that occurred before the redelegation began.\n\n## Unbonding\n\nUndelegation starts the unbonding process. During unbonding, the LUNC is no longer earning rewards and is not liquid until the period completes.\n\nTerra Classic's current staking params can be queried through LCD:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, this endpoint returned:\n\n| Parameter | Value | Meaning |\n| --- | --- | --- |\n| `unbonding_time` | `1814400s` | 21 days. |\n| `max_validators` | `110` | Maximum active bonded validators. |\n| `max_entries` | `7` | Maximum simultaneous unbonding or redelegation entries per pair context. |\n| `bond_denom` | `uluna` | LUNC micro-denomination used for staking. |\n| `min_commission_rate` | `0.025` | Minimum validator commission rate of 2.5%. |\n\nAlways query current parameters before building tooling, writing operational instructions, or making a large staking decision. Governance can change parameters over time.\n\n## Reward accounting\n\nRewards are handled by the distribution module. They accumulate until withdrawn. Wallets may show pending rewards, but those rewards are not spendable until a withdraw transaction is submitted.\n\nSome staking actions can trigger reward withdrawal or accounting changes depending on wallet behavior and module rules. Keep enough liquid LUNC for fees before claiming, delegating, redelegating, or undelegating.\n\n## Slashing link\n\nStaked and unbonding LUNC can be reduced if the validator is slashed for certain failures. See [Risks and unstaking](/staking-protocol/risks-and-unstaking/) before delegating a large position.\n",
    "previousSlug": "staking-protocol/overview",
    "nextSlug": "staking-protocol/delegate-lunc"
  },
  {
    "slug": "staking-protocol/delegate-lunc",
    "path": "/staking-protocol/delegate-lunc/",
    "sourceFile": "content/docs/staking-protocol/delegate-lunc.md",
    "group": "Staking Protocol",
    "navTitle": "Delegate LUNC",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 20,
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
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 21,
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
    "nextSlug": "staking-protocol/choose-a-validator"
  },
  {
    "slug": "staking-protocol/choose-a-validator",
    "path": "/staking-protocol/choose-a-validator/",
    "sourceFile": "content/docs/staking-protocol/choose-a-validator.md",
    "group": "Staking Protocol",
    "navTitle": "Choose a validator",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 22,
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
    "body": "Validator choice is the most important decision a delegator makes in Staking Protocol.\n\nYou are not only choosing an APR. You are choosing who receives your voting power, whose infrastructure risk you accept, and who represents your stake by default in governance.\n\n## The short version\n\nA strong validator should be:\n\n- reliably signing blocks\n- not jailed\n- transparent about identity and operations\n- active in governance\n- reasonable and clear about commission\n- responsive during upgrades and incidents\n- contributing to Terra Classic's long-term health\n- not making the validator set more concentrated than necessary\n\n## Commission\n\nCommission is the percentage of delegator rewards kept by the validator.\n\nTerra Classic currently enforces a minimum commission rate through staking params. Query current params here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, `min_commission_rate` returned `0.025`, or 2.5%.\n\nVery low commission is not automatically better. Validators need sustainable economics to maintain infrastructure, security practices, upgrade readiness, monitoring, and communication. Very high commission is not automatically bad either, but the validator should justify it through real contribution and reliability.\n\n## Uptime and jailed status\n\nA validator that misses too many blocks can be jailed and can create downtime slashing risk.\n\nBefore delegating, check:\n\n- whether the validator is bonded and active\n- whether it is jailed\n- recent missed block behavior\n- whether it has a pattern of upgrade failures\n- whether it communicates incidents clearly\n\nValidators should not be rewarded for being technically absent.\n\n## Governance behavior\n\nDelegating gives a validator default governance influence unless you vote yourself.\n\nReview whether the validator:\n\n- votes regularly\n- explains votes on major proposals\n- avoids silent non-participation\n- uses `NoWithVeto` responsibly\n- engages with technical and economic tradeoffs\n- follows through on commitments made in proposals\n\nTerra Classic has historically suffered from weak governance participation and validator non-participation. Delegators can improve this by moving stake away from validators that collect rewards while ignoring governance.\n\n## Voting power concentration\n\nDo not blindly delegate to the largest validators.\n\nConcentrated voting power weakens decentralization. It can make halt, censorship, governance capture, or coordination failures easier. Terra Classic's own state-of-chain research has repeatedly identified validator concentration and low Nakamoto coefficient as strategic risks.\n\nA practical rule:\n\n- Avoid adding stake to validators already holding very large voting power unless there is a strong reason.\n- Consider credible mid-size and smaller validators with strong reliability and governance records.\n- Split large delegations across multiple responsible validators.\n\n## Self-delegation\n\nSelf-delegation shows that a validator has some of its own capital at stake.\n\nDo not treat self-delegation as a perfect trust signal. A validator can have low self-delegation and still operate well, or high self-delegation and still behave poorly. But self-delegation is one input into incentive alignment.\n\n## Public identity and communication\n\nA validator should make it easy to understand:\n\n- who operates it or what organization is responsible\n- where to find official communication\n- how to contact the operator\n- what infrastructure or community contribution it provides\n- how it handles incidents\n- why delegators should trust it with voting power\n\nAnonymous or low-information validators are not automatically malicious, but they require a higher risk discount.\n\n## Contribution\n\nA validator can contribute by:\n\n- running reliable validator infrastructure\n- providing public endpoints\n- building tools and dashboards\n- participating in governance research\n- helping during upgrades\n- maintaining documentation\n- supporting developers\n- funding public goods\n- communicating risks clearly\n\nContribution should be concrete. Marketing claims without visible delivery are weak evidence.\n\n## Red flags\n\nBe careful with validators that:\n\n- are jailed or repeatedly unreliable\n- skip most governance votes\n- have no useful website or communication channel\n- change commission unexpectedly\n- promise guaranteed returns\n- push delegators into unsafe wallet behavior\n- concentrate too much voting power\n- operate with obvious conflicts of interest and no disclosure\n- make large public claims without measurable delivery\n\n## Validator selection scorecard\n\n| Criterion | Good signal | Weak signal |\n| --- | --- | --- |\n| Uptime | Active, reliable, monitored. | Jailed, repeated misses, silent incidents. |\n| Governance | Regular voting with explanations. | Frequent non-voting or no rationale. |\n| Commission | Sustainable and transparent. | Bait-rate behavior or unexplained changes. |\n| Concentration | Helps distribute stake. | Adds power to already dominant validators. |\n| Communication | Clear public channels. | No website, no contact, no incident updates. |\n| Contribution | Visible work for Terra Classic. | Slogans without delivery. |\n| Security | Sensible key and infra posture. | No evidence of operational maturity. |\n\n## Delegator responsibility\n\nDelegators are not passive passengers. If a validator becomes unreliable, stops voting, or behaves against your interests, use [redelegation](/staking-protocol/delegate-lunc/) to move your stake.\n",
    "previousSlug": "staking-protocol/rewards-and-apr",
    "nextSlug": "staking-protocol/risks-and-unstaking"
  },
  {
    "slug": "staking-protocol/risks-and-unstaking",
    "path": "/staking-protocol/risks-and-unstaking/",
    "sourceFile": "content/docs/staking-protocol/risks-and-unstaking.md",
    "group": "Staking Protocol",
    "navTitle": "Risks and unstaking",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 23,
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
    "body": "Staking Protocol is non-custodial, but it is not risk-free.\n\nThe biggest mistake is treating staking as a bank deposit. It is not. It is a protocol action with lockup, validator, governance, slashing, wallet, and market risks.\n\n## Liquidity risk\n\nBonded LUNC is not liquid.\n\nIf you undelegate, the LUNC enters unbonding. During unbonding it cannot be transferred, sold, or redelegated as liquid LUNC. It also does not earn staking rewards.\n\nCurrent unbonding time is queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/staking/v1beta1/params\n```\n\nAs checked on 2026-06-01, Terra Classic returned `1814400s`, or 21 days.\n\nDo not stake LUNC you may need to move immediately.\n\n## Redelegation risk\n\nRedelegation is useful because it avoids the full unbonding wait when moving between validators.\n\nBut redelegation is not unlimited:\n\n- a source-to-destination validator pair can have a cooldown\n- active redelegations may block further moves\n- some slash exposure can remain for validator infractions that occurred before redelegation began\n- wallets may display redelegation errors if a previous redelegation is still active\n\nFor active management, track where and when you last redelegated.\n\n## Slashing risk\n\nSlashing penalizes validator failures by reducing stake and, in some cases, jailing the validator.\n\nCurrent slashing params are queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/slashing/v1beta1/params\n```\n\nAs checked on 2026-06-01, the endpoint returned:\n\n| Parameter | Value | Meaning |\n| --- | --- | --- |\n| `signed_blocks_window` | `100800` | Liveness is measured across this window. |\n| `min_signed_per_window` | `0.85` | Minimum signing ratio required during the window. |\n| `downtime_jail_duration` | `1800s` | Downtime jail period of 30 minutes. |\n| `slash_fraction_double_sign` | `0.05` | 5% slash for double-signing. |\n| `slash_fraction_downtime` | `0.0001` | 0.01% slash for downtime. |\n\nThese parameters are governance-controlled and should be queried before relying on them.\n\n## Validator risk\n\nValidator failures can include:\n\n- downtime\n- jailing\n- double-signing\n- poor key management\n- failed upgrades\n- weak monitoring\n- high or unexpected commission changes\n- governance absence\n- poor communication during incidents\n\nDelegators share some consequences of validator behavior. This is why validator selection matters.\n\n## Governance risk\n\nStaked LUNC has governance power.\n\nIf you do not vote, your validator's vote applies to your delegated stake by default. A validator can vote in ways you disagree with, abstain, or fail to vote. Delegators can override validator votes, but only by voting themselves before the proposal deadline.\n\nGovernance can also change protocol parameters, funding decisions, module behavior, tax rules, upgrade timing, and other chain-level settings.\n\n## Market risk\n\nStaking rewards do not remove price risk.\n\nLUNC price can fall while you are bonded or unbonding. The unbonding period can prevent immediate reaction to market events. APR should be evaluated alongside liquidity needs, volatility, and your own risk tolerance.\n\n## Wallet and interface risk\n\nStaking is only as safe as the wallet and interface used to sign transactions.\n\nBasic practices:\n\n- use official wallet download sources\n- verify URLs before connecting\n- never enter a seed phrase into a website\n- prefer hardware wallet support for large balances where available\n- inspect transaction action, amount, fee, and validator address before signing\n- keep recovery phrases offline\n\nNo validator, website, or support account needs your seed phrase.\n\n## Operational checklist\n\nBefore staking a meaningful amount:\n\n- understand the unbonding period\n- split stake if validator-specific risk matters to you\n- review validator concentration\n- review governance participation\n- keep liquid LUNC for fees\n- test with a small transaction first\n- document which validators you used\n- know how to redelegate and undelegate before you need to do it\n\n## When to consider redelegating\n\nConsider redelegating if a validator:\n\n- is jailed\n- misses blocks repeatedly\n- stops voting\n- stops communicating\n- raises commission unexpectedly\n- becomes too concentrated\n- behaves against your governance preferences\n- creates unresolved trust or conflict-of-interest concerns\n\nStaking Protocol works best when delegators actively reward good validators and remove stake from poor operators.\n",
    "previousSlug": "staking-protocol/choose-a-validator",
    "nextSlug": "staking-protocol/governance"
  },
  {
    "slug": "staking-protocol/governance",
    "path": "/staking-protocol/governance/",
    "sourceFile": "content/docs/staking-protocol/governance.md",
    "group": "Staking Protocol",
    "navTitle": "Governance",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 24,
    "title": "Governance",
    "description": "How staked LUNC becomes governance power, how validator votes work, and how delegators can vote directly on Terra Classic proposals.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs Staking Protocol section",
    "sourceSite": "https://docs.terra-classic.money",
    "sourceRepo": "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main",
    "sourceCommit": "staking-protocol-section-2026-06-01",
    "sourcePath": "content/docs/staking-protocol/governance.md",
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
        "title": "Vote options",
        "id": "vote-options"
      },
      {
        "depth": 2,
        "title": "Proposal lifecycle",
        "id": "proposal-lifecycle"
      },
      {
        "depth": 2,
        "title": "Why delegator voting matters",
        "id": "why-delegator-voting-matters"
      },
      {
        "depth": 2,
        "title": "How to vote",
        "id": "how-to-vote"
      },
      {
        "depth": 2,
        "title": "How to judge a proposal",
        "id": "how-to-judge-a-proposal"
      },
      {
        "depth": 2,
        "title": "Delegator override",
        "id": "delegator-override"
      },
      {
        "depth": 2,
        "title": "Developer note",
        "id": "developer-note"
      }
    ],
    "body": "Staking Protocol and governance are linked.\n\nWhen you delegate LUNC, you are not only staking for rewards. You are assigning governance power to a validator by default.\n\n## Default validator voting\n\nValidators vote with the voting power delegated to them.\n\nIf a delegator does nothing, the validator's vote is applied to that delegator's stake. This is convenient, but it creates risk when validators are passive, misaligned, or unaccountable.\n\nDelegators can override the validator's vote by voting directly before the proposal deadline.\n\n## Vote options\n\nTerra Classic governance supports standard vote options:\n\n| Vote | Meaning |\n| --- | --- |\n| `Yes` | Support the proposal. |\n| `No` | Reject the proposal without triggering veto-specific handling. |\n| `NoWithVeto` | Strong rejection; can affect deposits if veto threshold rules are met. |\n| `Abstain` | Participate in quorum without choosing yes or no. |\n\nUse `NoWithVeto` carefully. It is a governance safety tool, not a general dislike button.\n\n## Proposal lifecycle\n\nGovernance parameters are queryable here:\n\n```text\nhttps://terra-classic-lcd.publicnode.com/cosmos/gov/v1/params/voting\n```\n\nAs checked on 2026-06-01, the governance endpoint returned:\n\n| Parameter | Value |\n| --- | --- |\n| `min_deposit` | `5000000000000uluna` |\n| `max_deposit_period` | `1209600s` |\n| `voting_period` | `604800s` |\n| `quorum` | `0.4` |\n| `threshold` | `0.5` |\n| `veto_threshold` | `0.334` |\n| `expedited_voting_period` | `86400s` |\n| `expedited_threshold` | `0.667` |\n\nGovernance can change these values. Query current params before writing guides, calculators, or governance tooling.\n\n## Why delegator voting matters\n\nTerra Classic has a long-running governance-quality problem: many users do not vote directly, and many validators have historically skipped proposals.\n\nThis creates three issues:\n\n- decisions are made by a smaller group than the full stakeholder base\n- silent validators can carry delegated voting power without accountability\n- governance legitimacy weakens when turnout is low\n\nDelegator voting is one of the simplest ways to improve governance quality. Even if you keep your stake delegated, direct voting lets you express your own preference on proposals that matter.\n\n## How to vote\n\nMost wallet governance flows follow this pattern:\n\n1. Open the governance view in a supported wallet or dashboard.\n2. Select Terra Classic.\n3. Open the proposal.\n4. Read the full proposal text and discussion links.\n5. Check whether the proposal is executable, text-only, parameter-changing, upgrade-related, or funding-related.\n6. Choose `Yes`, `No`, `NoWithVeto`, or `Abstain`.\n7. Confirm the transaction and fee.\n8. Verify the vote on an explorer or governance dashboard.\n\nWallet guides:\n\n- [Keplr governance](/learn/keplr/keplr-governance/)\n- [Galaxy Station governance](/learn/galaxy-station/galaxy-station-governance/)\n\n## How to judge a proposal\n\nA serious proposal should make the following clear:\n\n- what problem it solves\n- what exact on-chain or off-chain action happens\n- who is responsible for execution\n- what budget is requested, if any\n- what success metric will be used\n- what risks and alternatives were considered\n- whether code, audits, or technical review exist\n- what happens if the proposal passes but execution fails\n\nWeak proposals ask governance for trust without giving governance enough information to make a decision.\n\n## Delegator override\n\nIf you vote directly, your vote overrides the validator's vote for your delegated stake on that proposal.\n\nThis makes validator choice less absolute, but it does not remove the need to choose serious validators. Validators still influence consensus, day-to-day governance defaults, upgrades, and public credibility.\n\n## Developer note\n\nGovernance interfaces should show:\n\n- validator vote and delegator override state\n- proposal status and deadlines\n- quorum, threshold, and veto progress\n- deposit status\n- proposal type\n- executable messages where available\n- external discussion links\n- warnings for expedited or high-impact proposals\n\nGood governance tooling reduces voter confusion and makes validator accountability visible.\n",
    "previousSlug": "staking-protocol/risks-and-unstaking",
    "nextSlug": "staking-protocol/validator-responsibilities"
  },
  {
    "slug": "staking-protocol/validator-responsibilities",
    "path": "/staking-protocol/validator-responsibilities/",
    "sourceFile": "content/docs/staking-protocol/validator-responsibilities.md",
    "group": "Staking Protocol",
    "navTitle": "Validator responsibilities",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 25,
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
    "previousSlug": "staking-protocol/governance",
    "nextSlug": "staking-protocol/developer-reference"
  },
  {
    "slug": "staking-protocol/developer-reference",
    "path": "/staking-protocol/developer-reference/",
    "sourceFile": "content/docs/staking-protocol/developer-reference.md",
    "group": "Staking Protocol",
    "navTitle": "Developer reference",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 26,
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
    "navOrder": 27,
    "title": "Swap Protocol",
    "description": "The native L1 swap layer for exchanging LUNC and USTC through Market Module 2.0 without minting new supply.",
    "status": "draft",
    "reviewed": false,
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
        "title": "Not financial advice",
        "id": "not-financial-advice"
      }
    ],
    "body": "Swap Protocol is Terra Classic's native L1 swap product for exchanging LUNC and USTC.\n\nIt is powered by Market Module 2.0, a no-mint version of the historical market module design. The product name is **Swap Protocol**. The underlying technology is **Market Module 2.0**.\n\nSwap Protocol exists to restore native swap utility without returning to the uncontrolled mint/burn behavior that helped damage Terra Classic in 2022.\n\nUse this section if you are:\n\n- a user who wants to understand LUNC and USTC swaps before signing a transaction\n- a LUNC or USTC holder evaluating the protocol's burn, liquidity, and risk mechanics\n- a validator responsible for oracle price feeds and chain safety\n- a developer integrating swap status, routing, pricing, or module data\n- a community member trying to separate real product mechanics from repeg speculation\n\n## Product position\n\nSwap Protocol is not a new token, not a DEX pool, not a centralized exchange bridge, and not a USTC repeg mechanism.\n\nIt is a native protocol route for LUNC and USTC swaps. Instead of minting tokens during swaps, Market Module 2.0 uses prefilled protocol liquidity pools. The pools are funded from tax proceeds allocated for the module, and remaining pool balances are burned at the start of the next 30-day epoch.\n\nThe product promise should stay narrow:\n\n> Swap LUNC and USTC through Terra Classic's native L1 market route using protocol liquidity, oracle-aware pricing, spread fees, and hard safety controls.\n\n## Why it exists\n\nThe original Terra market module depended on minting and burning between LUNC and Terra stablecoins. That design assumed stable assets could be valued against hard peg targets. During the 2022 collapse, unlimited swap capacity and fixed peg assumptions helped accelerate hyperinflation.\n\nMarket Module 2.0 changes the design constraints:\n\n- swaps use prefilled pools instead of minting new supply\n- USTC is valued by live oracle prices, not by a fixed 1 USD assumption\n- swap capacity is bounded by the available pool and epoch rules\n- safety guards can stop swaps when oracle conditions are not reliable\n- remaining pool balances are burned at each epoch boundary\n\nThat makes Swap Protocol a utility and infrastructure product, not a promise that USTC will return to a particular price.\n\n## What Swap Protocol does\n\n| Capability | What it means |\n| --- | --- |\n| LUNC to USTC swaps | Users can exchange LUNC for USTC through protocol liquidity when the route has capacity. |\n| USTC to LUNC swaps | Users can exchange USTC for LUNC through protocol liquidity when the route has capacity. |\n| Oracle-aware pricing | Swap pricing uses validator-reported market prices instead of a fixed USTC peg assumption. |\n| No-mint execution | Tokens are taken from and added to prefilled pools instead of minted during execution. |\n| Spread fee | Enabled swaps collect a 0.35% spread fee in the output asset. |\n| Burn and oracle funding | Spread fees route 50% to burn and 50% to the Oracle Pool. |\n| Epoch burns | Remaining swap-pool balances are burned at the next 30-day epoch boundary. |\n\n## What it does not do\n\nSwap Protocol does not guarantee:\n\n- USTC repeg\n- LUNC price appreciation\n- unlimited liquidity\n- continuous swap availability\n- execution during oracle outages\n- a fixed exchange rate between LUNC and USTC\n- a stablecoin redemption right\n\nIf liquidity is exhausted, oracle quorum fails, sanity checks fail, or governance disables the module, swaps can be refused.\n\n## How this section is organized\n\n- [How it works](/swap-protocol/how-it-works/) explains the no-mint pool design, oracle pricing, epochs, and module lifecycle.\n- [Swap LUNC and USTC](/swap-protocol/swap-lunc-and-ustc/) gives a practical decision framework for using the protocol.\n- [Fees, burns, and liquidity](/swap-protocol/fees-burns-and-liquidity/) explains spread fees, pool funding, burn routing, and finite capacity.\n- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) covers price feeds, quorum, TWAP checks, disabled routes, and emergency controls.\n- [Scenarios and examples](/swap-protocol/scenarios-and-examples/) translates source examples into user-readable behavior.\n- [Risks and limitations](/swap-protocol/risks-and-limitations/) lists the risks that should stay visible in any serious product explanation.\n- [Validator operations](/swap-protocol/validator-operations/) explains oracle-feeder responsibilities and operational expectations.\n- [Developer reference](/swap-protocol/developer-reference/) gives a technical reference for builders.\n\n## Product discipline\n\nSwap Protocol should be presented as serious chain infrastructure.\n\nThe strongest version of the product story is not hype. It is the fact that Terra Classic can expose native LUNC and USTC swaps while avoiding the two design failures that matter most: uncontrolled minting and stale fixed-peg pricing.\n\n## Not financial advice\n\nSwap Protocol documentation explains protocol mechanics. It does not tell you whether to buy, sell, hold, swap, stake, or trade LUNC or USTC. LUNC and USTC remain volatile crypto assets, and USTC is treated by this protocol as a market-priced speculative asset rather than a guaranteed stable asset.\n",
    "previousSlug": "staking-protocol/developer-reference",
    "nextSlug": "swap-protocol/how-it-works"
  },
  {
    "slug": "swap-protocol/how-it-works",
    "path": "/swap-protocol/how-it-works/",
    "sourceFile": "content/docs/swap-protocol/how-it-works.md",
    "group": "Swap Protocol",
    "navTitle": "How it works",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 28,
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
      }
    ],
    "body": "Swap Protocol is built on Market Module 2.0.\n\nThe key design change is simple: swaps do not mint new LUNC or USTC. They move existing tokens between user balances and protocol swap pools.\n\n## The old failure mode\n\nThe historical market module used virtual liquidity and mint/burn logic. When a user swapped between Terra stablecoins and LUNC, the module could mint output tokens according to a pricing curve and oracle assumptions.\n\nThat model became dangerous because:\n\n- swap capacity could be too large\n- pool recovery could refill capacity too quickly\n- UST was treated as if it still had a hard 1 USD peg\n- minting could run faster than market demand could absorb\n\nMarket Module 2.0 keeps the useful part of the market route but removes minting from swap execution.\n\n## The no-mint pool model\n\nSwap Protocol uses distinct protocol pools for LUNC and USTC.\n\nAt the start of a 30-day epoch, token balances allocated to the market-module liquidity pool are moved into the swap pools. Those balances become the available liquidity for that epoch.\n\nDuring the epoch:\n\n- a LUNC to USTC swap sends LUNC into the module and takes USTC out of the USTC pool\n- a USTC to LUNC swap sends USTC into the module and takes LUNC out of the LUNC pool\n- the output amount is priced through the module's market logic and oracle prices\n- no new output tokens are minted\n\nAt the start of the next epoch, remaining balances in the swap pools are burned.\n\n## Epoch lifecycle\n\nSwap Protocol operates around 30-day epochs.\n\n| Phase | What happens |\n| --- | --- |\n| Pool accumulation | Eligible tax proceeds allocated to Market Module 2.0 accumulate for the next epoch. |\n| Epoch start | LUNC and USTC balances are moved into distinct swap pools. |\n| Active swaps | Users can swap while the module is enabled, oracle checks pass, and pool capacity remains. |\n| Capacity changes | Swap direction changes pool balances. One-sided flow can exhaust one side. |\n| Epoch boundary | Remaining balances in the pools are burned, and the next epoch starts with newly allocated liquidity. |\n\nThe source design explicitly excludes voluntary burns from the 30-day pool calculation. Voluntary burns are coins intentionally sent to the burn module by users, exchanges, or other entities. They should not be treated as liquidity funding because doing so could reduce voluntary burn support.\n\n## Pricing\n\nUSTC is not treated as a fixed 1 USD asset.\n\nSwap Protocol uses oracle-reported market pricing. Validators report prices through the oracle module, and the module uses voting-power-weighted median pricing for the relevant period.\n\nThis matters because the protocol is not pretending USTC is already repegged. USTC is priced as a market asset.\n\n## Capacity\n\nLiquidity is finite.\n\nIf enough users swap in one direction, the output pool for that direction can be depleted. When available allowance or pool capacity is exhausted, the swap is refused instead of minting new tokens to complete the trade.\n\nThat refusal is a safety property, not a product bug.\n\n## Adaptive throttling\n\nThe source design uses adaptive parameters to control how much capacity can be exposed during an epoch.\n\nThe important concepts are:\n\n- **base_pool** controls the virtual market depth used by the swap calculation\n- **Pool Recovery Period** controls how quickly virtual capacity recovers\n- **supply scaling** adjusts recovery behavior as LUNC supply changes\n- **absolute clamps** cap the allowed virtual pool size\n\nThe product implication is that Swap Protocol is intentionally bounded. It is designed to reopen native swaps without allowing the module to become an unlimited output source.\n\n## Fees\n\nWhen the module is enabled and allowance remains, swaps apply a 0.35% spread fee.\n\nThe fee is collected in the output asset:\n\n- USTC to LUNC swaps collect the fee in LUNC\n- LUNC to USTC swaps collect the fee in USTC\n\nThe fee is routed 50% to burn and 50% to the Oracle Pool.\n\nThe chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for Swap Protocol execution.\n\n## Safety controls\n\nSwap Protocol can refuse swaps when safety conditions fail.\n\nCore controls include:\n\n- oracle quorum requirements\n- TWAP sanity checks\n- finite pool capacity\n- disabled stable-to-stable routing\n- governance-level module closure\n\nSee [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) for the operational detail.\n",
    "previousSlug": "swap-protocol/overview",
    "nextSlug": "swap-protocol/swap-lunc-and-ustc"
  },
  {
    "slug": "swap-protocol/swap-lunc-and-ustc",
    "path": "/swap-protocol/swap-lunc-and-ustc/",
    "sourceFile": "content/docs/swap-protocol/swap-lunc-and-ustc.md",
    "group": "Swap Protocol",
    "navTitle": "Swap LUNC and USTC",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 29,
    "title": "Swap LUNC and USTC",
    "description": "How to think through a LUNC and USTC swap through Swap Protocol before signing the transaction.",
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
      }
    ],
    "body": "Swap Protocol supports native swaps between LUNC and USTC.\n\nThis page explains what to check before using the protocol. It does not document a specific wallet interface because wallet support and interface labels can change. Always review the transaction details shown by your wallet before signing.\n\n## Supported route\n\nSwap Protocol is designed for:\n\n- LUNC to USTC\n- USTC to LUNC\n\nStable-to-stable routing is disabled in the Market Module 2.0 design. The protocol should not be treated as a general stablecoin swap router.\n\n## Before you swap\n\nCheck four things before signing:\n\n| Check | Why it matters |\n| --- | --- |\n| Pair | Confirm you are swapping LUNC and USTC in the intended direction. |\n| Estimate | Review the expected output amount and the spread fee impact. |\n| Availability | Swaps can be unavailable if the module is disabled, liquidity is exhausted, or oracle checks fail. |\n| Asset risk | LUNC and USTC are volatile. USTC is market-priced, not treated as a guaranteed 1 USD asset. |\n\n## Basic flow\n\nThe practical flow is:\n\n1. Connect or open a wallet that supports Terra Classic transactions.\n2. Choose LUNC or USTC as the input asset.\n3. Choose the other asset as the output asset.\n4. Enter the amount you want to swap.\n5. Review the estimated output, spread fee, and transaction details.\n6. Sign and broadcast the transaction if the terms are acceptable.\n7. Confirm the final on-chain result in your wallet or explorer.\n\nThe exact interface can differ by wallet or application. The protocol mechanics are the same: the module receives the input asset and releases the output asset from its available pool.\n\n## Why a swap can fail\n\nA refused swap is possible and should be expected under some conditions.\n\nCommon reasons include:\n\n- the Market Module is disabled\n- the relevant output pool has insufficient capacity\n- the epoch allowance is exhausted\n- oracle vote quorum is below the required threshold\n- the current price fails the TWAP sanity check\n- the attempted route is not supported\n- the transaction fee or account balance is insufficient\n\nWhen these conditions happen, the protocol should reject the swap instead of minting tokens to complete it.\n\n## Pricing behavior\n\nSwap Protocol uses oracle-aware pricing. USTC is valued at market price, not at a hard 1 USD peg.\n\nBecause oracle prices update on-chain by voting period, the quoted route can differ from centralized exchange prices or DEX pool prices during volatile markets. This can create arbitrage opportunities, but arbitrage is not guaranteed and should not be treated as risk-free.\n\n## Fees\n\nEnabled swaps collect a 0.35% spread fee in the output asset.\n\nThat means:\n\n- if you swap USTC to LUNC, the fee is collected in LUNC\n- if you swap LUNC to USTC, the fee is collected in USTC\n\nThe chain-wide burn tax does not apply to these in-module swaps. The spread fee replaces it for this route.\n\n## Good user practice\n\nTreat every swap as a market transaction.\n\nBefore signing:\n\n- compare the quoted output with other available routes\n- check whether the price has moved significantly\n- understand that pool capacity is finite\n- avoid assuming a swap will remain available after you wait\n- keep enough LUNC for transaction fees\n- never sign a transaction you do not understand\n\nSwap Protocol restores native swap utility, but it does not remove market risk.\n",
    "previousSlug": "swap-protocol/how-it-works",
    "nextSlug": "swap-protocol/fees-burns-and-liquidity"
  },
  {
    "slug": "swap-protocol/fees-burns-and-liquidity",
    "path": "/swap-protocol/fees-burns-and-liquidity/",
    "sourceFile": "content/docs/swap-protocol/fees-burns-and-liquidity.md",
    "group": "Swap Protocol",
    "navTitle": "Fees, burns, and liquidity",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 30,
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
      }
    ],
    "body": "Swap Protocol is designed around finite liquidity and explicit burn accounting.\n\nThe core rule is that swaps use existing pool balances. They do not mint new LUNC or USTC to satisfy demand.\n\n## Liquidity source\n\nThe Market Module 2.0 source design redirects part of eligible burn-tax proceeds into a temporary market-module liquidity pool.\n\nAt the first block of every 30-day epoch:\n\n- LUNC assigned to market-module liquidity moves into a LUNC swap pool\n- USTC assigned to market-module liquidity moves into a USTC swap pool\n- each token is handled separately\n- those balances become available for swaps during the epoch\n\nThe source describes the allocation as 60% of burn-tax proceeds, equivalent to 75% of the previous burn allocation under the stated tax-split model. The practical product point is that the swap pool is funded from prior-period tax proceeds, not from newly minted supply.\n\n## Voluntary burns\n\nVoluntary burns should be excluded from the pool calculation.\n\nVoluntary burns are coins intentionally sent to the burn module by users, exchanges, or community entities. The source calls this out because treating voluntary burns as pool funding could reduce support from entities that burn voluntarily.\n\nFor documentation purposes, this distinction matters:\n\n- tax-derived module liquidity can be used for Swap Protocol pools\n- voluntary burns should remain burns unless governance explicitly changes the design\n\n## Spread fee\n\nWhen Swap Protocol is enabled and capacity remains, each swap charges a 0.35% spread fee.\n\n| Condition | Fee behavior |\n| --- | --- |\n| Module disabled | No swap, no spread fee. |\n| Module enabled and allowance remains | 0.35% of notional is collected. |\n| Allowance exhausted | Swap is refused, no spread fee. |\n\nThe fee is collected in the output asset:\n\n- USTC to LUNC: fee collected in LUNC\n- LUNC to USTC: fee collected in USTC\n\n## Fee routing\n\nSpread fees are routed:\n\n| Destination | Share |\n| --- | --- |\n| Burn | 50% |\n| Oracle Pool | 50% |\n\nThis makes the swap route both a burn contributor and an oracle-funding contributor when users actually swap.\n\n## No double taxation\n\nThe source design states that the chain-wide burn tax does not apply to these in-module swaps. The 0.35% spread fee replaces the burn tax for Swap Protocol execution.\n\nThis is important for user expectations. A user should evaluate the route by the quoted output, spread fee, and market price, not by assuming the normal transfer tax is added on top of the protocol fee.\n\n## End-of-epoch burns\n\nAt the start of the next 30-day epoch, remaining swap-pool balances are burned.\n\nThis is the main deflation control in the design. Liquidity that was set aside for swaps but not paid out remains on-chain only until the next epoch boundary.\n\n## Directional effects\n\nThe final burn mix depends on user behavior.\n\nIf swaps are balanced in both directions, pool balances can end the epoch close to the expected allocation. If flow is strongly one-sided, one output pool can be depleted while the other token accumulates.\n\nThat means one-sided usage can shift which token is burned more at the epoch boundary.\n\nExamples:\n\n- heavy USTC to LUNC flow can reduce remaining LUNC while increasing USTC held by the pool\n- heavy LUNC to USTC flow can reduce remaining USTC while increasing LUNC held by the pool\n- low swap usage can leave more of both pools to burn at epoch end\n\nThis is why Swap Protocol should not be described as a guaranteed fixed burn outcome for either asset. It is a bounded swap route with burn mechanics, and the exact burn composition depends on actual usage.\n\n## Liquidity exhaustion\n\nIf a pool side is exhausted, the protocol should refuse swaps in that direction.\n\nThis protects Terra Classic from the old failure mode where the module could satisfy demand by minting output supply. In Market Module 2.0, finite liquidity is part of the safety model.\n\n## What users should remember\n\nSwap Protocol can generate:\n\n- utility through native LUNC and USTC swaps\n- burns through spread-fee routing\n- additional epoch burns from remaining pools\n- Oracle Pool funding through spread fees\n\nIt cannot guarantee:\n\n- a fixed monthly burn amount\n- balanced LUNC and USTC burn outcomes\n- unlimited swap capacity\n- profit from arbitrage\n- continuous availability during oracle or liquidity stress\n",
    "previousSlug": "swap-protocol/swap-lunc-and-ustc",
    "nextSlug": "swap-protocol/oracles-and-safety-controls"
  },
  {
    "slug": "swap-protocol/oracles-and-safety-controls",
    "path": "/swap-protocol/oracles-and-safety-controls/",
    "sourceFile": "content/docs/swap-protocol/oracles-and-safety-controls.md",
    "group": "Swap Protocol",
    "navTitle": "Oracles and safety controls",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 31,
    "title": "Oracles and safety controls",
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
        "title": "Integration impact",
        "id": "integration-impact"
      }
    ],
    "body": "Swap Protocol depends on the oracle module.\n\nThe protocol cannot safely price USTC if validators are not reporting current market prices with enough voting power. Market Module 2.0 therefore treats oracle failure as a reason to stop swaps.\n\n## Why oracle pricing matters\n\nThe historical market module assumed Terra stablecoins could be valued against their pegs. That assumption is not acceptable for USTC after the 2022 collapse.\n\nMarket Module 2.0 removes the fixed 1 USD assumption and uses live oracle-reported market pricing instead.\n\nThat means:\n\n- USTC is treated as a market-priced asset\n- validators must provide usable price data\n- the module can stop swaps when price data is unsafe\n- stale or missing oracle data should not allow token output to be drained\n\n## Price vote period\n\nThe source design uses the existing oracle cadence:\n\n| Control | Source rule |\n| --- | --- |\n| Price vote period | 5 blocks, approximately 30 seconds |\n| USTC price | voting-power-weighted median for the current period |\n| Quorum threshold | 50% voting power |\n\nSee the [Oracle module spec](/develop/module-specifications/spec-oracle/) for the broader oracle voting process.\n\n## Quorum auto-disable\n\nIf either asset lacks price votes from at least 50% of voting power for 25 blocks, the market module disables itself until quorum is restored.\n\nIn product terms: if the chain cannot see enough reliable price votes, Swap Protocol should stop accepting swaps.\n\nThis is a necessary tradeoff. Swap availability is less important than preventing unsafe execution against missing or weak price data.\n\n## TWAP sanity clamp\n\nEach swap can fail if the current peg price differs by more than 10% from a 45-block oracle TWAP.\n\nThe TWAP is fed by the same oracle system. Its role is to detect price conditions that are too inconsistent for safe execution.\n\nThis control helps protect the module from short-lived price anomalies, stale feeds, and attempted manipulation.\n\n## Disabled stable-to-stable route\n\nThe stable-to-stable route is hard-disabled in the source design.\n\nThe relevant failure state is `ErrStableSwapDisabled`.\n\nSwap Protocol should therefore be understood as a LUNC and USTC product, not a generic stablecoin router.\n\n## Finite pool capacity\n\nLiquidity limits are also safety controls.\n\nWhen the output pool does not have enough capacity, the module should refuse the swap. It should not mint new output tokens to fill the order.\n\nThis is one of the most important differences between Market Module 2.0 and the historical mint/burn model.\n\n## Governance closure\n\nThe source design includes a governance-level brake: a two-thirds super-majority can close the market module.\n\nSeparately, in a severe chain-level emergency, validator coordination can halt the chain for remediation. That is not normal product operation, but it is part of the broader safety reality for a delegated proof-of-stake chain.\n\n## User impact\n\nSafety controls can create frustrating user outcomes:\n\n- swaps may be unavailable\n- quoted paths may fail before execution\n- one direction may be exhausted before another\n- integrations may need to show protocol-disabled states\n\nThat is still better than the old alternative: satisfying unsafe demand by expanding supply.\n\n## Integration impact\n\nApplications that expose Swap Protocol should handle disabled states clearly.\n\nAt minimum, interfaces should distinguish:\n\n- module disabled\n- insufficient pool liquidity\n- unsupported route\n- oracle quorum failure\n- TWAP sanity failure\n- transaction fee or account-balance failure\n\nDo not collapse all failures into a generic \"swap failed\" message. Users need to know whether the issue is temporary market safety, insufficient liquidity, wallet balance, or an unsupported route.\n",
    "previousSlug": "swap-protocol/fees-burns-and-liquidity",
    "nextSlug": "swap-protocol/scenarios-and-examples"
  },
  {
    "slug": "swap-protocol/scenarios-and-examples",
    "path": "/swap-protocol/scenarios-and-examples/",
    "sourceFile": "content/docs/swap-protocol/scenarios-and-examples.md",
    "group": "Swap Protocol",
    "navTitle": "Scenarios and examples",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 32,
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
      }
    ],
    "body": "This page translates the Market Module 2.0 source examples into product behavior.\n\nThese are illustrations, not forecasts. Actual outcomes depend on tax proceeds, swap demand, market prices, oracle performance, governance parameters, and user behavior.\n\n## Balanced usage\n\nIf users swap in both directions at roughly balanced value, the pools can end the epoch with a composition close to their starting allocation.\n\nProduct impact:\n\n- native swap utility exists during the epoch\n- spread fees are generated when swaps happen\n- fees route 50% to burn and 50% to the Oracle Pool\n- remaining pool balances are burned at the next epoch\n- burn composition can remain broadly similar to the allocation model\n\nThis is the cleanest case for the product narrative, but it should not be assumed.\n\n## Heavy USTC to LUNC flow\n\nIf users mostly swap USTC to LUNC, the LUNC pool is paid out and the module receives USTC.\n\nProduct impact:\n\n- LUNC output capacity can be exhausted\n- USTC can accumulate in the pool\n- epoch-end burns can lean more toward USTC\n- LUNC burned at epoch end can be lower than under balanced usage\n\nThis does not create LUNC hyperinflation because the module does not mint new LUNC. It can, however, disappoint users who expected the mechanism to maximize LUNC burns in every scenario.\n\n## Heavy LUNC to USTC flow\n\nIf users mostly swap LUNC to USTC, the USTC pool is paid out and the module receives LUNC.\n\nProduct impact:\n\n- USTC output capacity can be exhausted\n- LUNC can accumulate in the pool\n- epoch-end burns can lean more toward LUNC\n- USTC burned at epoch end can be lower than under balanced usage\n\nThe direction of user demand matters. Swap Protocol does not force a predetermined burn mix.\n\n## Low usage\n\nIf swap usage is low, more of the original pool balances remain until the next epoch boundary.\n\nProduct impact:\n\n- fewer spread fees are generated\n- Oracle Pool funding from swap fees is lower\n- more unused pool balance can remain for epoch-end burn\n- product utility may be perceived as weaker if users expected high volume\n\nLow usage is not a protocol failure, but it is a product and expectations risk.\n\n## Oracle stress\n\nThe source design includes an oracle-stress scenario where market volatility and validator outages reduce usable price quorum.\n\nProduct impact:\n\n- if price votes fall below the required voting-power threshold, the module disables itself\n- swaps stop while the module is disabled\n- no spread fees are collected while swaps are inactive\n- pool balances remain subject to epoch rules\n\nThis behavior is intentional. If pricing is unsafe, Swap Protocol should stop.\n\n## Pool exhaustion example\n\nAssume USTC is priced at 200 LUNC per USTC and the LUNC pool has 400 million LUNC available for the period.\n\nIf users swap enough USTC to request the full 400 million LUNC, the LUNC side can be depleted. Further USTC to LUNC swaps should be refused until opposite-direction swaps replenish LUNC or a new epoch begins.\n\nIf later users swap LUNC to USTC, the LUNC they send into the module can increase LUNC availability again.\n\nThe important point: pool balances are dynamic during the epoch, but output cannot exceed available capacity.\n\n## What examples should not imply\n\nDo not use these scenarios to imply:\n\n- guaranteed volume\n- guaranteed arbitrage profit\n- guaranteed LUNC burn increase\n- guaranteed USTC burn increase\n- guaranteed swap availability\n- a target USTC price\n\nThe examples exist to show behavioral boundaries. The product remains market-dependent.\n",
    "previousSlug": "swap-protocol/oracles-and-safety-controls",
    "nextSlug": "swap-protocol/risks-and-limitations"
  },
  {
    "slug": "swap-protocol/risks-and-limitations",
    "path": "/swap-protocol/risks-and-limitations/",
    "sourceFile": "content/docs/swap-protocol/risks-and-limitations.md",
    "group": "Swap Protocol",
    "navTitle": "Risks and limitations",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 33,
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
    "body": "Swap Protocol should be explained with discipline because Terra Classic has already paid the cost of weak market-module assumptions.\n\nThe product is useful because it restores native LUNC and USTC swap utility without minting new supply. That does not make it risk-free.\n\n## Not a repeg\n\nSwap Protocol is not a USTC repeg proposal.\n\nUSTC is treated as a speculative market-priced asset. The module uses oracle-reported market pricing instead of assuming USTC is worth 1 USD.\n\nAny content that implies Swap Protocol will restore a fixed USTC peg is wrong.\n\n## Not unlimited liquidity\n\nSwap Protocol uses finite pools.\n\nIf the requested output asset is exhausted, the swap should fail. This is a core safety property. It prevents the module from satisfying demand by minting new supply.\n\n## One-sided flow risk\n\nIf most users swap in one direction, the burn outcome can become one-sided too.\n\nFor example:\n\n- heavy USTC to LUNC flow can reduce LUNC remaining for epoch-end burn and increase USTC held by the pool\n- heavy LUNC to USTC flow can reduce USTC remaining for epoch-end burn and increase LUNC held by the pool\n\nThis may disappoint users who expect every scenario to maximize burns of their preferred asset.\n\n## Volume expectation risk\n\nSwap Protocol only generates spread-fee burns and Oracle Pool funding when swaps happen.\n\nIf usage is low, fee generation will be low. Native availability is valuable, but it should not be marketed as if high volume is guaranteed.\n\nThe source material explicitly warns that community disappointment from unmet expectations is one of the main risks.\n\n## Oracle dependency\n\nSwap Protocol relies on validator oracle feeds.\n\nIf enough voting power fails to report valid prices, or if prices fail safety checks, the module can disable swaps. This protects the chain, but it means the product can be unavailable during stress.\n\nValidators and feeder operators are therefore part of the product surface, not just back-end infrastructure.\n\n## Implementation risk\n\nMarket Module 2.0 changes critical L1 behavior.\n\nThe source material identifies technical mistakes as a risk and recommends thorough review, stress testing, and audit consideration. The docs should not hide this. A no-mint design is safer than the historical mint/burn model, but implementation quality still matters.\n\n## Parameter risk\n\nSwap behavior depends on parameters and mechanisms such as liquidity allocation, base pool, recovery period, oracle thresholds, and spread fee rules.\n\nIf parameters are too loose, the product can expose more risk. If they are too tight, the product can feel unavailable or too small to matter.\n\nThe correct framing is not \"set and forget.\" It is \"bounded product design with governance-visible tradeoffs.\"\n\n## Governance risk\n\nGovernance can change protocol behavior.\n\nThat is a strength when the chain needs to adapt, but it also means product expectations must track governance decisions. Users and integrators should not assume every parameter will stay fixed forever.\n\n## User risk\n\nUsers still face normal market and wallet risks:\n\n- price volatility\n- slippage between quote and execution\n- transaction failure\n- wallet signing mistakes\n- insufficient fee balance\n- phishing or malicious interfaces\n- misunderstanding USTC's market status\n\nSwap Protocol is native infrastructure. It does not remove the need for transaction discipline.\n\n## The honest product claim\n\nThe defensible claim is:\n\n> Swap Protocol restores native LUNC and USTC swap utility through a bounded, oracle-aware, no-mint market module.\n\nThe indefensible claim is:\n\n> Swap Protocol guarantees repeg, profit, unlimited swaps, or a specific burn outcome.\n\nKeep that distinction clear.\n",
    "previousSlug": "swap-protocol/scenarios-and-examples",
    "nextSlug": "swap-protocol/validator-operations"
  },
  {
    "slug": "swap-protocol/validator-operations",
    "path": "/swap-protocol/validator-operations/",
    "sourceFile": "content/docs/swap-protocol/validator-operations.md",
    "group": "Swap Protocol",
    "navTitle": "Validator operations",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 34,
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
    "body": "Validators are part of the Swap Protocol product surface.\n\nMarket Module 2.0 depends on current oracle prices. If validators do not operate reliable oracle feeders, swaps can be disabled or unsafe.\n\n## Validator role\n\nValidators support Swap Protocol by:\n\n- running consensus infrastructure reliably\n- submitting oracle prices on schedule\n- maintaining feeder accounts and fee balances\n- supporting USTC price reporting\n- using diverse and reliable price sources\n- monitoring missed votes and quorum\n- responding quickly to feeder failures\n\nThis is not only an infrastructure task. It affects whether users can swap safely.\n\n## USTC price support\n\nThe source design requires USTC to be added to the oracle vote set and priced by real market data.\n\nThat means validator operators need oracle feeder support for USTC pricing. The old fixed 1 USD assumption is not compatible with Swap Protocol.\n\nOperators should verify:\n\n- the feeder binary supports USTC pricing\n- the feeder config includes the required denom\n- price providers are reachable\n- fallback providers are configured where supported\n- prevote and vote messages are being submitted successfully\n- missed-vote counters remain healthy\n\n## Provider diversity\n\nThe source material calls out feeder provider expansion as important for manipulation resistance and reliability.\n\nA weak provider setup creates protocol risk:\n\n- stale prices\n- missing prices\n- correlated outages\n- inaccurate medians\n- quorum loss\n\nValidators should avoid relying on a single fragile source when better provider diversity is available.\n\n## Quorum monitoring\n\nMarket Module 2.0 can disable itself if either asset has price votes from less than 50% of voting power for 25 blocks.\n\nValidators should monitor:\n\n- current oracle participation\n- their own feeder status\n- missed prevotes and votes\n- exchange-rate query results\n- chain alerts around module disablement\n\nIf quorum drops, the correct priority is restoring accurate oracle participation, not bypassing safety controls.\n\n## Feeder account hygiene\n\nOracle feeders need enough LUNC to pay transaction fees.\n\nOperators should maintain:\n\n- funded feeder accounts\n- secure key handling\n- clear restart procedures\n- logs that show provider failures and broadcast failures\n- alerting for missed oracle periods\n\nPoor feeder operations can lead to missed oracle votes and, over time, slashing risk under oracle module rules.\n\n## Rollout discipline\n\nSwap Protocol should be treated as a coordinated validator rollout.\n\nBefore a chain upgrade or parameter activation, operators should confirm:\n\n- feeder versions are compatible\n- USTC price support is active\n- provider configs are tested\n- failover behavior is understood\n- monitoring is in place\n- validators know how to diagnose disabled swap states\n\nThe source material is explicit that invalid or absent price input should trigger automatic shutdown mechanisms. That is the right failure mode, but it makes operational readiness critical.\n\n## User-facing responsibility\n\nValidators who publicly support Swap Protocol should communicate responsibly.\n\nGood communication:\n\n- explains that USTC is market-priced\n- avoids repeg promises\n- explains that oracle failure can disable swaps\n- distinguishes module safety from wallet or UI issues\n- reports incidents clearly when feeders fail\n\nBad communication overpromises volume, burns, repeg, or guaranteed availability.\n\n## Related references\n\n- [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/)\n- [Oracle module spec](/develop/module-specifications/spec-oracle/)\n- [Validator responsibilities](/staking-protocol/validator-responsibilities/)\n",
    "previousSlug": "swap-protocol/risks-and-limitations",
    "nextSlug": "swap-protocol/developer-reference"
  },
  {
    "slug": "swap-protocol/developer-reference",
    "path": "/swap-protocol/developer-reference/",
    "sourceFile": "content/docs/swap-protocol/developer-reference.md",
    "group": "Swap Protocol",
    "navTitle": "Developer reference",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 35,
    "title": "Developer reference",
    "description": "Technical reference for building around Swap Protocol and Market Module 2.0.",
    "status": "draft",
    "reviewed": false,
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
        "title": "Developer caution",
        "id": "developer-caution"
      }
    ],
    "body": "This reference is for developers building wallets, explorers, routing interfaces, dashboards, monitoring tools, or analytics around Swap Protocol.\n\nSwap Protocol is the product name. Market Module 2.0 is the underlying L1 implementation concept.\n\n## Related modules\n\n| Module | Role |\n| --- | --- |\n| `x/market` | Executes market-module swap logic and maintains market parameters/state. |\n| `x/oracle` | Provides validator-reported prices used by Market Module 2.0. |\n| `x/tax` | Supplies the tax-flow context used by the liquidity allocation design. |\n| `x/gov` | Controls governance-level changes and emergency policy decisions. |\n| `x/distribution` | Receives and distributes normal staking rewards; distinct from swap execution. |\n\nSee also:\n\n- [Market module spec](/develop/module-specifications/spec-market/)\n- [Oracle module spec](/develop/module-specifications/spec-oracle/)\n- [Tax module spec](/develop/module-specifications/spec-tax/)\n\n## Supported assets\n\nSwap Protocol is scoped to LUNC and USTC.\n\nSupported product routes:\n\n- LUNC to USTC\n- USTC to LUNC\n\nStable-to-stable swaps are disabled in the source design and should be treated as unsupported. Integrations should surface this clearly rather than hiding it behind a generic failure.\n\n## Execution model\n\nAt execution time, the module should:\n\n1. verify the requested route is supported\n2. verify the module is enabled\n3. verify oracle data is available and passes safety checks\n4. calculate output using market-module logic and current prices\n5. verify output pool capacity remains available\n6. collect the 0.35% spread fee in the output asset\n7. transfer input into the module and output from the pool\n8. route spread-fee accounting to burn and Oracle Pool destinations\n\nThe exact message and keeper implementation should be confirmed against the deployed Terra Classic core version used by the application.\n\n## Important states\n\nInterfaces should model these states explicitly:\n\n| State | User-facing meaning |\n| --- | --- |\n| Enabled | Swaps can be attempted if liquidity and oracle checks pass. |\n| Disabled | The protocol route is currently unavailable. |\n| Insufficient liquidity | The requested output side does not have enough pool capacity. |\n| Allowance exhausted | Epoch capacity has been consumed. |\n| Oracle quorum failure | Not enough voting power is reporting usable prices. |\n| TWAP sanity failure | Current price differs too far from the oracle TWAP. |\n| Unsupported route | The route is not available, such as stable-to-stable swaps. |\n\nAvoid treating all of these as the same error. Users and operators need different recovery paths.\n\n## Source-defined controls\n\nThe Market Module 2.0 source defines these controls:\n\n| Control | Value or behavior |\n| --- | --- |\n| Price vote period | 5 blocks, approximately 30 seconds |\n| Quorum threshold | 50% voting power |\n| Quorum auto-disable window | 25 blocks below quorum |\n| TWAP sanity check | Swap fails if peg price differs by more than 10% from 45-block oracle TWAP |\n| Spread fee | 0.35% notional, collected in output asset |\n| Fee routing | 50% burn, 50% Oracle Pool |\n| Stable-to-stable route | Disabled |\n| Epoch length | 30 days |\n\nIf live chain parameters differ after governance changes, applications should prefer queried chain state where available.\n\n## Pool and epoch model\n\nApplications should not assume infinite liquidity.\n\nDuring each epoch:\n\n- LUNC and USTC pools have separate balances\n- swaps change those balances dynamically\n- one side can be exhausted\n- opposite-direction swaps can replenish the depleted side\n- remaining balances are burned at epoch boundary\n\nAnalytics should track LUNC and USTC independently. A single \"pool health\" number can hide one-sided exhaustion.\n\n## Oracle integration\n\nApplications that show Swap Protocol status should read or infer:\n\n- current exchange rates\n- oracle vote participation\n- whether required assets have valid prices\n- module enabled state\n- relevant market parameters\n- pool balances or usable route capacity where exposed\n\nThe public endpoint strategy should follow the broader docs guidance in [Public Network Endpoints](/develop/endpoints/). Do not hardcode one endpoint as the only source of truth for critical routing.\n\n## UX requirements for integrations\n\nA serious Swap Protocol integration should show:\n\n- input asset\n- output asset\n- estimated output\n- spread fee\n- warning when USTC is involved\n- protocol availability\n- insufficient-liquidity state\n- transaction fee requirement\n- final confirmation before signing\n\nIt should not show:\n\n- \"USTC = $1\" assumptions\n- repeg language\n- hidden pool exhaustion failures\n- generic errors when the module disabled itself for safety\n\n## Developer caution\n\nMarket Module 2.0 is critical L1 behavior. Any integration that touches swap routing should be defensive:\n\n- query live state before quoting\n- refresh quotes before signing\n- handle failed broadcasts cleanly\n- distinguish protocol failure from wallet failure\n- never promise execution until the transaction is committed\n- expose transaction hashes and explorer links after broadcast\n\nFor users, a failed swap should be understandable. For operators, it should be diagnosable.\n",
    "previousSlug": "swap-protocol/validator-operations",
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
    "navOrder": 36,
    "title": "Quick start guide",
    "description": "A practical first pass for building on Terra Classic: networks, endpoints, transactions, SDKs, localnet, smart contracts, and production checks.",
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
        "title": "What you can build on Terra Classic",
        "id": "what-you-can-build-on-terra-classic"
      },
      {
        "depth": 2,
        "title": "The three main developer paths",
        "id": "the-three-main-developer-paths"
      },
      {
        "depth": 3,
        "title": "1. Frontend dApp developer",
        "id": "1-frontend-dapp-developer"
      },
      {
        "depth": 3,
        "title": "2. Smart contract developer",
        "id": "2-smart-contract-developer"
      },
      {
        "depth": 3,
        "title": "3. Backend / automation developer",
        "id": "3-backend-automation-developer"
      },
      {
        "depth": 2,
        "title": "Network basics",
        "id": "network-basics"
      },
      {
        "depth": 2,
        "title": "Public endpoints",
        "id": "public-endpoints"
      },
      {
        "depth": 3,
        "title": "Mainnet: columbus-5",
        "id": "mainnet-columbus-5"
      },
      {
        "depth": 3,
        "title": "Testnet: rebel-2",
        "id": "testnet-rebel-2"
      },
      {
        "depth": 2,
        "title": "Terra Classic-specific behavior developers must understand",
        "id": "terra-classic-specific-behavior-developers-must-understand"
      },
      {
        "depth": 3,
        "title": "1. Burn tax can affect transfers",
        "id": "1-burn-tax-can-affect-transfers"
      },
      {
        "depth": 3,
        "title": "2. Some addresses can be tax-exempt",
        "id": "2-some-addresses-can-be-tax-exempt"
      },
      {
        "depth": 3,
        "title": "3. Legacy mint/burn market swaps are disabled",
        "id": "3-legacy-mintburn-market-swaps-are-disabled"
      },
      {
        "depth": 3,
        "title": "4. Contract calls with attached funds behave differently from simple transfers",
        "id": "4-contract-calls-with-attached-funds-behave-differently-from-simple-transfers"
      },
      {
        "depth": 3,
        "title": "5. Public infrastructure is for development, not production",
        "id": "5-public-infrastructure-is-for-development-not-production"
      },
      {
        "depth": 2,
        "title": "Recommended quick transaction flow",
        "id": "recommended-quick-transaction-flow"
      },
      {
        "depth": 2,
        "title": "Build with TypeScript and CosmES",
        "id": "build-with-typescript-and-cosmes"
      },
      {
        "depth": 3,
        "title": "Connect Keplr",
        "id": "connect-keplr"
      },
      {
        "depth": 3,
        "title": "Query native balances",
        "id": "query-native-balances"
      },
      {
        "depth": 3,
        "title": "Send LUNC",
        "id": "send-lunc"
      },
      {
        "depth": 2,
        "title": "Use a mnemonic wallet for scripts and backends",
        "id": "use-a-mnemonic-wallet-for-scripts-and-backends"
      },
      {
        "depth": 2,
        "title": "Build with Python",
        "id": "build-with-python"
      },
      {
        "depth": 2,
        "title": "Run a local Terra Classic network",
        "id": "run-a-local-terra-classic-network"
      },
      {
        "depth": 2,
        "title": "Build CosmWasm smart contracts",
        "id": "build-cosmwasm-smart-contracts"
      },
      {
        "depth": 3,
        "title": "Install Rust and tooling",
        "id": "install-rust-and-tooling"
      },
      {
        "depth": 3,
        "title": "Start from a CosmWasm template",
        "id": "start-from-a-cosmwasm-template"
      },
      {
        "depth": 3,
        "title": "Build the contract",
        "id": "build-the-contract"
      },
      {
        "depth": 2,
        "title": "Upload, instantiate, execute, and query a contract",
        "id": "upload-instantiate-execute-and-query-a-contract"
      },
      {
        "depth": 3,
        "title": "1. Add or recover a local key",
        "id": "1-add-or-recover-a-local-key"
      },
      {
        "depth": 3,
        "title": "2. Store contract code",
        "id": "2-store-contract-code"
      },
      {
        "depth": 3,
        "title": "3. Instantiate the contract",
        "id": "3-instantiate-the-contract"
      },
      {
        "depth": 3,
        "title": "4. Execute the contract",
        "id": "4-execute-the-contract"
      },
      {
        "depth": 3,
        "title": "5. Query the contract",
        "id": "5-query-the-contract"
      },
      {
        "depth": 2,
        "title": "Interact with CW20 tokens",
        "id": "interact-with-cw20-tokens"
      },
      {
        "depth": 3,
        "title": "Query CW20 balance with CosmES",
        "id": "query-cw20-balance-with-cosmes"
      },
      {
        "depth": 3,
        "title": "Transfer CW20 tokens",
        "id": "transfer-cw20-tokens"
      },
      {
        "depth": 2,
        "title": "Build DEX and swap integrations carefully",
        "id": "build-dex-and-swap-integrations-carefully"
      },
      {
        "depth": 2,
        "title": "Use IBC only with known channels and relayer assumptions",
        "id": "use-ibc-only-with-known-channels-and-relayer-assumptions"
      },
      {
        "depth": 2,
        "title": "Terra Classic module map for developers",
        "id": "terra-classic-module-map-for-developers"
      },
      {
        "depth": 2,
        "title": "Production checklist",
        "id": "production-checklist"
      },
      {
        "depth": 3,
        "title": "Network and infrastructure",
        "id": "network-and-infrastructure"
      },
      {
        "depth": 3,
        "title": "Transactions",
        "id": "transactions"
      },
      {
        "depth": 3,
        "title": "Burn tax and fees",
        "id": "burn-tax-and-fees"
      },
      {
        "depth": 3,
        "title": "Smart contracts",
        "id": "smart-contracts"
      },
      {
        "depth": 3,
        "title": "Wallet UX",
        "id": "wallet-ux"
      },
      {
        "depth": 3,
        "title": "Security",
        "id": "security"
      },
      {
        "depth": 2,
        "title": "Common mistakes",
        "id": "common-mistakes"
      },
      {
        "depth": 3,
        "title": "Treating Terra Classic like old Terra Classic documentation",
        "id": "treating-terra-classic-like-old-terra-classic-documentation"
      },
      {
        "depth": 3,
        "title": "Hardcoding gas prices",
        "id": "hardcoding-gas-prices"
      },
      {
        "depth": 3,
        "title": "Ignoring burn tax",
        "id": "ignoring-burn-tax"
      },
      {
        "depth": 3,
        "title": "Assuming every transfer behaves the same",
        "id": "assuming-every-transfer-behaves-the-same"
      },
      {
        "depth": 3,
        "title": "Trusting public infrastructure for production",
        "id": "trusting-public-infrastructure-for-production"
      },
      {
        "depth": 3,
        "title": "Broadcasting without simulation",
        "id": "broadcasting-without-simulation"
      },
      {
        "depth": 3,
        "title": "Forgetting that Terra Classic is governance-controlled",
        "id": "forgetting-that-terra-classic-is-governance-controlled"
      },
      {
        "depth": 2,
        "title": "Recommended build path for a first Terra Classic dApp",
        "id": "recommended-build-path-for-a-first-terra-classic-dapp"
      },
      {
        "depth": 2,
        "title": "Minimal mental model",
        "id": "minimal-mental-model"
      },
      {
        "depth": 2,
        "title": "Related docs",
        "id": "related-docs"
      }
    ],
    "body": "This guide gives developers a fast, practical overview of how to build on Terra Classic without reading the full documentation first.\n\nUse it to understand the network, choose a development path, connect to endpoints, build transactions, test locally, deploy smart contracts, and avoid the most common Terra Classic-specific mistakes.\n\n> **Important**\n>\n> Terra Classic is a community-maintained blockchain. Public infrastructure, tools, SDKs, wallets, and documentation can change over time. Always verify current chain parameters, endpoint health, tax behavior, and wallet support before deploying production applications.\n\n## What you can build on Terra Classic\n\nTerra Classic is a Cosmos SDK / CometBFT blockchain with CosmWasm smart contract support, IBC connectivity, staking, governance, oracle infrastructure, and Terra Classic-specific modules such as burn tax, tax exemptions, and dynamic validator commission.\n\nDevelopers can build:\n\n- dApps using CosmWasm smart contracts\n- wallets and portfolio tools\n- dashboards and analytics products\n- DEX frontends and routing tools\n- staking and governance interfaces\n- payment and transfer flows\n- bots, scripts, and backend services\n- CW20 token tools\n- IBC-aware applications\n- integrations with Terra Classic wallets and infrastructure\n\nTerra Classic is not an EVM chain. If you are coming from Ethereum, the closest mental model is:\n\n| Ethereum-style concept | Terra Classic equivalent |\n| --- | --- |\n| Solidity smart contract | CosmWasm smart contract written mostly in Rust |\n| ERC20 token | CW20 token |\n| MetaMask | Keplr, Galaxy Station, Orbitar, Cosmostation, LUNC Dash |\n| Web3.js / ethers.js | CosmES, Terra Classic SDK, LCD/RPC/gRPC APIs |\n| Ganache / local chain | Terra Classic localnet |\n| Contract deployment | Store WASM code, then instantiate contract |\n| Contract call | `MsgExecuteContract` |\n| Native token transfer | `MsgSend` |\n| Cross-chain transfer | IBC transfer |\n\n## The three main developer paths\n\nMost Terra Classic builders fall into one of three paths.\n\n### 1. Frontend dApp developer\n\nChoose this path if you want users to connect a wallet, read balances, sign transactions, interact with contracts, or use Terra Classic dApps in a browser.\n\nRecommended stack:\n\n- TypeScript\n- CosmES SDK\n- Keplr and/or Galaxy Station\n- RPC endpoint\n- LCD endpoint for tax and chain queries\n- FCD endpoint for gas prices\n\nUse this path for wallets, dashboards, staking pages, DEX interfaces, governance interfaces, and consumer-facing dApps.\n\n### 2. Smart contract developer\n\nChoose this path if you want to write on-chain logic.\n\nRecommended stack:\n\n- Rust\n- CosmWasm\n- Terra Classic localnet\n- `terrad`\n- Docker\n- CosmWasm optimizer\n- CW20 / CW721 standards where needed\n\nUse this path for DeFi protocols, vaults, token contracts, routing contracts, escrow systems, gaming logic, governance tooling, and on-chain automation primitives.\n\n### 3. Backend / automation developer\n\nChoose this path if you want to build bots, indexers, backend services, scripts, monitoring tools, integrations, or transaction automation.\n\nRecommended stack:\n\n- Python with `terra-classic-sdk`\n- or TypeScript with CosmES\n- private or dedicated RPC/LCD infrastructure\n- secure secret management\n- transaction simulation\n- retries and monitoring\n\nUse this path for analytics, alerts, scheduled jobs, treasury automation, validator tooling, integrations, and backend services.\n\n## Network basics\n\nTerra Classic mainnet is:\n\n```text\nChain ID: columbus-5\nAddress prefix: terra\nNative staking / governance asset: LUNC\nOn-chain micro-denom: uluna\n```\n\nAmounts are usually represented in micro-denominations on-chain.\n\n```text\n1 LUNC = 1,000,000 uluna\n```\n\nFor example:\n\n```text\n1000000uluna = 1 LUNC\n```\n\nThe main Terra Classic testnet used in the docs is:\n\n```text\nChain ID: rebel-2\n```\n\nLocal development usually runs on:\n\n```text\nlocalterra\n```\n\nor another local chain ID shown by your localnet output.\n\n## Public endpoints\n\nPublic endpoints are useful for development, testing, and light workloads. Do not depend on public endpoints for production systems that need uptime, rate-limit control, or predictable latency.\n\n### Mainnet: columbus-5\n\n```text\nLCD:\nhttps://terra-classic-lcd.publicnode.com\nhttps://api-lunc-lcd.binodes.com\nhttps://lcd.terra-classic.hexxagon.io\n\nRPC:\nhttps://terra-classic-rpc.publicnode.com\nhttps://api-lunc-rpc.binodes.com\nhttps://rpc.terra-classic.hexxagon.io\n\nFCD:\nhttps://terra-classic-fcd.publicnode.com\n\nGas prices:\nhttps://terra-classic-fcd.publicnode.com/v1/txs/gas_prices\n\ngRPC:\ngrpc+https://terra-classic-grpc.publicnode.com\ngrpc+https://grpc.terra-classic.hexxagon.io\n```\n\n### Testnet: rebel-2\n\n```text\nLCD:\nhttps://lcd.luncblaze.com\nhttps://lcd.terra-classic.hexxagon.dev\n\nRPC:\nhttps://rpc.luncblaze.com\nhttps://rpc.terra-classic.hexxagon.dev\n\nFCD:\nhttps://fcd.luncblaze.com\n\ngRPC:\ngrpc+https://grpc.terra-classic.hexxagon.dev\n```\n\nFor the maintained endpoint list, see [Public Network Endpoints](/develop/endpoints/). For production, run your own node or use a dedicated infrastructure provider.\n\n## Terra Classic-specific behavior developers must understand\n\nTerra Classic follows standard Cosmos transaction patterns, but it has several chain-specific behaviors that can break integrations if ignored.\n\n### 1. Burn tax can affect transfers\n\nTerra Classic uses the `x/tax` module to apply burn tax to many taxable transfers.\n\nThis means:\n\n- the receiver may receive less than the sender entered\n- tax behavior can depend on transaction type\n- some routes can use Tax2Gas / reverse-charge handling\n- governance can change tax parameters\n- apps should not hardcode tax assumptions forever\n\nFor basic transfers, the chain handles deduction. For good UX, your app should query current parameters and show the user an estimated received amount before confirmation.\n\nUseful endpoints:\n\n```text\nTax params:\nhttps://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params\n\nCurrent burn tax rate:\nhttps://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate\n```\n\n### 2. Some addresses can be tax-exempt\n\nTerra Classic has a tax exemption registry. Some addresses or zones can be exempt from burn tax.\n\nThis matters for:\n\n- exchanges\n- custody flows\n- treasury wallets\n- smart contract workflows\n- service wallets\n- internal app transfers\n\nUseful endpoints:\n\n```text\nZones:\nhttps://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones\n\nZone addresses:\nhttps://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/{zonename}/addresses\n\nTaxable check:\nhttps://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/{from}/{to}\n```\n\nIf your UX shows exact fees or exact received amounts, check taxability before the final confirmation screen.\n\n### 3. Legacy mint/burn market swaps are disabled\n\nDo not build new app flows that depend on pre-2022 algorithmic mint/burn market swaps.\n\nAvoid assuming that these old flows are active:\n\n- stablecoin to stablecoin market swaps\n- algorithmic mint/burn swap behavior\n- pre-2022 Terra Classic market-module assumptions\n\nNative LUNC and USTC swaps are available through [Swap Protocol](/swap-protocol/overview/), powered by Market Module 2.0. That route uses no-mint protocol liquidity, oracle-aware pricing, finite epoch capacity, and safety controls.\n\nFor DEX swaps, build against DEX contracts and always include slippage protection such as `max_spread` or `minimum_receive`. For native LUNC and USTC swaps, read the [Swap Protocol developer reference](/swap-protocol/developer-reference/) before integrating.\n\n### 4. Contract calls with attached funds behave differently from simple transfers\n\nSending funds to a contract is not always the same as a wallet-to-wallet bank transfer.\n\nIf your app sends funds into a CosmWasm contract, treat that flow separately in your fee and tax UX. Simulate transactions and verify actual chain behavior before showing users final cost or received-amount estimates.\n\n### 5. Public infrastructure is for development, not production\n\nPublic RPC/LCD/FCD endpoints are helpful, but production systems should not depend on a single public endpoint.\n\nBackend services should:\n\n- use retries with exponential backoff\n- support multiple endpoints\n- monitor endpoint failures\n- log transaction hashes, raw logs, gas used, and error codes\n- alert on repeated failed broadcasts\n- run dedicated infrastructure when reliability matters\n\n## Recommended quick transaction flow\n\nA safe Terra Classic transaction flow looks like this:\n\n1. Choose the correct network: `columbus-5` for mainnet, `rebel-2` for testnet, or `localterra`/the local chain ID shown by localnet.\n2. Fetch gas prices.\n3. Fetch current tax parameters if your UX depends on fees or received amounts.\n4. Check tax exemption status if the sender or recipient may be exempt.\n5. Build the unsigned transaction.\n6. Simulate the transaction.\n7. Apply a gas adjustment margin.\n8. Show the user an estimated cost and expected result.\n9. Ask the wallet to sign.\n10. Broadcast.\n11. Poll or subscribe for confirmation.\n12. Store the transaction hash and raw logs for debugging.\n\n## Build with TypeScript and CosmES\n\nCosmES is the recommended modern TypeScript SDK path for many Terra Classic frontend and integration projects.\n\nInstall it:\n\n```bash\nyarn add @goblinhunt/cosmes\n```\n\nRecommended TypeScript config:\n\n```json\n{\n  \"compilerOptions\": {\n    \"moduleResolution\": \"bundler\"\n  }\n}\n```\n\nIf you use Vite and need WalletConnect compatibility, add:\n\n```ts\n// vite.config.ts\nimport { defineConfig } from \"vite\";\n\nexport default defineConfig({\n  define: { global: \"window\" },\n});\n```\n\n### Connect Keplr\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function connectKeplr(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n\n  const connected = wallets.get(CHAIN_ID);\n  console.log(\"Connected address:\", connected?.address);\n}\n```\n\n### Query native balances\n\n```ts\nimport { getNativeBalances } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function readBalances(): Promise<void> {\n  const balances = await getNativeBalances(RPC, {\n    address: \"terra1...\",\n  });\n\n  console.log(balances);\n}\n```\n\n### Send LUNC\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function sendLunc(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    {\n      chainId: CHAIN_ID,\n      rpc: RPC,\n      gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n    },\n  ]);\n\n  const connected = wallets.get(CHAIN_ID);\n\n  if (!connected) {\n    throw new Error(\"Failed to connect wallet\");\n  }\n\n  const msg = new MsgSend({\n    fromAddress: connected.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"1000000\" }],\n  });\n\n  const unsigned = {\n    msgs: [msg],\n    memo: \"hello from Terra Classic\",\n  };\n\n  const fee = await connected.estimateFee(unsigned, 1.2);\n  const txHash = await connected.broadcastTx(unsigned, fee);\n\n  console.log(\"txhash:\", txHash);\n}\n```\n\n## Use a mnemonic wallet for scripts and backends\n\nFor scripts, automated jobs, tests, or backend services, use a programmatic wallet.\n\nNever commit mnemonics. Never log mnemonics. Use environment variables or a secure secret manager.\n\n```ts\nimport { MnemonicWallet } from \"@goblinhunt/cosmes/wallet\";\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\n\nconst wallet = new MnemonicWallet({\n  mnemonic: process.env.MNEMONIC ?? \"\",\n  bech32Prefix: \"terra\",\n  chainId: \"columbus-5\",\n  rpc: \"https://terra-classic-rpc.publicnode.com\",\n  gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  coinType: 330,\n  index: 0,\n});\n\nasync function sendFromBackend(): Promise<void> {\n  const msg = new MsgSend({\n    fromAddress: wallet.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"1000000\" }],\n  });\n\n  const unsigned = {\n    msgs: [msg],\n    memo: \"backend send\",\n  };\n\n  const fee = await wallet.estimateFee(unsigned, 1.2);\n  const txHash = await wallet.broadcastTx(unsigned, fee);\n\n  console.log(\"txhash:\", txHash);\n}\n```\n\n## Build with Python\n\nFor Python scripts and backends, use the Terra Classic SDK package.\n\nSet up a virtual environment:\n\n```bash\npython3 -m venv .venv\nsource .venv/bin/activate\npython -m pip install --upgrade pip\npip install --upgrade terra-classic-sdk\n```\n\nConnect to mainnet:\n\n```python\nfrom terra_classic_sdk.client.lcd import LCDClient\nfrom terra_classic_sdk.key.mnemonic import MnemonicKey\n\nLCD_URL = \"https://terra-classic-lcd.publicnode.com\"\nCHAIN_ID = \"columbus-5\"\nMNEMONIC = \"<STORE THIS SECURELY>\"\n\nterra = LCDClient(url=LCD_URL, chain_id=CHAIN_ID)\nwallet = terra.wallet(MnemonicKey(mnemonic=MNEMONIC))\n\nprint(wallet.key.acc_address)\n```\n\nFetch gas prices:\n\n```python\nfrom typing import Dict\nimport requests\n\nGAS_PRICE_ENDPOINT = \"https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices\"\n\ndef fetch_gas_prices(endpoint: str = GAS_PRICE_ENDPOINT) -> Dict[str, str]:\n    response = requests.get(endpoint, timeout=10)\n    response.raise_for_status()\n    return response.json()\n\ngas_prices = fetch_gas_prices()\nprint(gas_prices[\"uluna\"])\n```\n\nSend LUNC:\n\n```python\nfrom typing import Dict\nfrom terra_classic_sdk.client.lcd import LCDClient\nfrom terra_classic_sdk.client.lcd.api.tx import CreateTxOptions\nfrom terra_classic_sdk.core import Coins, Coin\nfrom terra_classic_sdk.core.bank import MsgSend\nfrom terra_classic_sdk.key.mnemonic import MnemonicKey\n\nlcd = LCDClient(\n    url=\"https://terra-classic-lcd.publicnode.com\",\n    chain_id=\"columbus-5\",\n)\n\nwallet = lcd.wallet(MnemonicKey(mnemonic=\"<SECURE MNEMONIC>\"))\ngas_prices: Dict[str, str] = fetch_gas_prices()\n\nmsg = MsgSend(\n    from_address=wallet.key.acc_address,\n    to_address=\"terra1...\",\n    amount=Coins([Coin(\"uluna\", 1_000_000)]),\n)\n\ntx = wallet.create_and_sign_tx(\n    options=CreateTxOptions(\n        msgs=[msg],\n        gas=\"auto\",\n        gas_prices=Coins(gas_prices),\n        fee_denoms=\"uluna\",\n        gas_adjustment=1.4,\n    )\n)\n\nresult = lcd.tx.broadcast(tx)\nprint(result.txhash)\n```\n\nPython is especially useful for:\n\n- analytics\n- bots\n- scheduled jobs\n- monitoring tools\n- indexer support\n- treasury operations\n- backend integrations\n\n## Run a local Terra Classic network\n\nUse localnet when you want a private chain that you can reset, test against, and break safely.\n\nPrerequisites:\n\n- git\n- make\n- Docker\n- Docker Compose\n- 16-32 GB RAM recommended\n\nClone Terra Classic Core:\n\n```bash\ngit clone https://github.com/classic-terra/core.git terra-core\ncd terra-core\n```\n\nStart localnet:\n\n```bash\nmake localnet-start\n```\n\nTypical local endpoints:\n\n```text\nRPC:  http://localhost:26657\nLCD:  http://localhost:1317\ngRPC: http://localhost:9090\n```\n\nTypical local chain ID:\n\n```text\nlocalterra\n```\n\nor:\n\n```text\nlocalnet\n```\n\nCheck your terminal output and use the exact chain ID shown by your local setup.\n\nUse localnet for:\n\n- contract development\n- integration testing\n- frontend testing\n- transaction simulation\n- module experiments\n- demos\n- reproducible QA\n\nFor the dedicated walkthrough, see [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/).\n\n## Build CosmWasm smart contracts\n\nTerra Classic supports CosmWasm smart contracts.\n\nA CosmWasm contract usually has three core entry points:\n\n```text\ninstantiate()\nexecute()\nquery()\n```\n\nOptionally, upgradeable contracts can also implement:\n\n```text\nmigrate()\n```\n\n### Install Rust and tooling\n\nInstall Rust, then add the WASM target:\n\n```bash\nrustup default 1.82.0\nrustup target add wasm32-unknown-unknown\n```\n\nInstall `cargo-generate`:\n\n```bash\ncargo install cargo-generate --features vendored-openssl\n```\n\nInstall `wasm-opt`:\n\n```bash\ncargo install wasm-opt\n```\n\n### Start from a CosmWasm template\n\n```bash\ncargo generate --git https://github.com/CosmWasm/cw-template.git --branch 1.5 --name my-first-contract\ncd my-first-contract\n```\n\nThe basic contract structure includes:\n\n```text\nsrc/contract.rs\nsrc/msg.rs\nsrc/state.rs\n```\n\nCommon message types:\n\n```text\nInstantiateMsg\nExecuteMsg\nQueryMsg\n```\n\nCommon contract state helpers:\n\n```text\nItem\nMap\n```\n\n### Build the contract\n\n```bash\ncargo wasm\n```\n\nOptimize it:\n\n```bash\ndocker run --rm -v \"$(pwd)\":/code \\\n  --mount type=volume,source=\"$(basename \"$(pwd)\")_cache\",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/workspace-optimizer:0.14.0\n```\n\nFor ARM machines:\n\n```bash\ndocker run --rm -v \"$(pwd)\":/code \\\n  --mount type=volume,source=\"$(basename \"$(pwd)\")_cache\",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/workspace-optimizer-arm64:0.14.0\n```\n\nThis creates an optimized `.wasm` artifact that can be uploaded to the chain.\n\n## Upload, instantiate, execute, and query a contract\n\nOnce localnet is running and your optimized `.wasm` file is ready, use `terrad`.\n\n### 1. Add or recover a local key\n\n```bash\nterrad keys add test1 --recover\n```\n\n### 2. Store contract code\n\n```bash\nterrad tx wasm store artifacts/my_first_contract.wasm \\\n  --from test1 \\\n  --chain-id=localterra \\\n  --gas=auto \\\n  --gas-prices=28.325uluna \\\n  --broadcast-mode=sync\n```\n\nThe result includes a `code_id`.\n\n### 3. Instantiate the contract\n\n```bash\nterrad tx wasm instantiate 1 '{\"count\":0}' \\\n  --from test1 \\\n  --chain-id=localterra \\\n  --fees=28.325uluna \\\n  --gas=auto \\\n  --broadcast-mode=sync\n```\n\nThe result includes a `contract_address`.\n\n### 4. Execute the contract\n\n```bash\nterrad tx wasm execute terra1... '{\"increment\":{}}' \\\n  --from test1 \\\n  --chain-id=localterra \\\n  --gas=auto \\\n  --fees=28.325uluna \\\n  --broadcast-mode=sync\n```\n\n### 5. Query the contract\n\n```bash\nterrad query wasm contract-store terra1... '{\"get_count\":{}}'\n```\n\n## Interact with CW20 tokens\n\nCW20 is the CosmWasm fungible token standard, broadly similar to ERC20.\n\n### Query CW20 balance with CosmES\n\n```ts\nimport { getCw20Balance } from \"@goblinhunt/cosmes/client\";\n\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\nconst token = \"<tokenContractAddress>\";\nconst wallet = \"<walletAddress>\";\n\nconst balance = await getCw20Balance(RPC, {\n  address: wallet,\n  token,\n});\n\nconsole.log(balance.toString());\n```\n\n### Transfer CW20 tokens\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst execMsg = {\n  transfer: {\n    recipient: \"terra1...\",\n    amount: \"1000000\",\n  },\n};\n\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"<tokenContractAddress>\",\n  msg: execMsg,\n  funds: [],\n});\n\nconst unsigned = {\n  msgs: [msg],\n  memo: \"cw20 transfer\",\n};\n\nconst fee = await connected.estimateFee(unsigned, 1.2);\nconst txHash = await connected.broadcastTx(unsigned, fee);\n```\n\nUse `transfer` when moving CW20 balance to a wallet.\n\nUse `send` when sending CW20 tokens to another contract and triggering a message on that receiving contract.\n\n## Build DEX and swap integrations carefully\n\nTerra Classic supports native LUNC and USTC swaps through [Swap Protocol](/swap-protocol/overview/). For general token swaps, CW20 routes, pair contracts, and router behavior, use DEX smart contracts.\n\nA typical DEX swap is a `MsgExecuteContract` against a pair or router contract.\n\nExample shape:\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...pair\",\n  msg: {\n    swap: {\n      offer_asset: {\n        info: { native_token: { denom: \"uluna\" } },\n        amount: \"1000000\",\n      },\n      belief_price: \"0.000123\",\n      max_spread: \"0.005\",\n      to: connected.address,\n    },\n  },\n  funds: [{ denom: \"uluna\", amount: \"1000000\" }],\n});\n```\n\nAlways:\n\n- use the DEX's published schemas\n- verify contract addresses\n- query factory contracts for pair addresses\n- set `max_spread` or `minimum_receive`\n- simulate before broadcasting\n- show clear slippage and received-amount estimates\n- never assume liquidity depth\n\n## Use IBC only with known channels and relayer assumptions\n\nTerra Classic supports IBC routing. IBC can be used for cross-chain transfers and integrations with other Cosmos ecosystems.\n\nA typical IBC transfer uses `MsgIbcTransfer`.\n\n```ts\nimport { MsgIbcTransfer } from \"@goblinhunt/cosmes/client\";\n\nconst msg = new MsgIbcTransfer({\n  sourcePort: \"transfer\",\n  sourceChannel: \"channel-XXXX\",\n  token: { denom: \"uluna\", amount: \"1000000\" },\n  sender: connected.address,\n  receiver: \"cosmos1...dest\",\n  timeoutHeight: { revisionNumber: \"0\", revisionHeight: \"0\" },\n  timeoutTimestamp: \"0\",\n});\n```\n\nBefore shipping IBC flows:\n\n- verify the channel\n- verify the destination chain\n- verify relayer activity\n- show timeout and recovery information\n- test on testnet or with small amounts first\n- do not assume every historical channel is active\n\n## Terra Classic module map for developers\n\nYou do not need to understand every module before building. But you should know where to look.\n\n| Module | Why it matters |\n| --- | --- |\n| `x/auth` | Accounts, signatures, ante-handler, fees, memo limits, burn-tax integration |\n| `x/bank` | Native token balances and transfers |\n| `x/wasm` | CosmWasm smart contract upload, instantiate, execute, query, migrate |\n| `x/tax` | Burn tax, gas price floor, tax splits |\n| `x/taxexemption` | Tax-exempt zones and addresses |\n| `x/staking` | Validators, delegations, validator set |\n| `x/distribution` | Rewards, commissions, community pool flows |\n| `x/gov` | Proposals, voting, parameter changes |\n| `x/oracle` | Exchange-rate voting and oracle slashing |\n| `x/market` | Legacy market logic; swaps disabled on current Terra Classic |\n| `x/ibc` / `x/transfer` | Cross-chain packet routing and token transfer |\n| `ibc-hooks` | Contract callbacks on IBC packets |\n| `x/authz` | Delegated message execution |\n| `x/feegrant` | Fee allowances |\n| `x/dyncomm` | Dynamic validator commission logic |\n| `x/upgrade` | Coordinated chain upgrades |\n\nMost application builders will mainly interact with:\n\n```text\nx/bank\nx/wasm\nx/tax\nx/taxexemption\nx/gov\nx/staking\nx/ibc\n```\n\n## Production checklist\n\nBefore deploying a Terra Classic app to production, confirm the following.\n\n### Network and infrastructure\n\n- You use the correct chain ID.\n- You have backup RPC/LCD endpoints.\n- You do not depend on one public endpoint.\n- You monitor endpoint health.\n- You log tx hashes, raw logs, gas used, and errors.\n- You have retry and timeout handling.\n\n### Transactions\n\n- You fetch live gas prices.\n- You simulate before broadcast.\n- You apply a gas adjustment margin.\n- You handle wallet rejection separately from broadcast failure.\n- You handle out-of-gas and insufficient-fee errors.\n- You do not hardcode long-term tax behavior.\n\n### Burn tax and fees\n\n- You query current tax parameters when UX accuracy matters.\n- You check tax exemption status when needed.\n- You show estimated received amounts clearly.\n- You understand that governance can change parameters.\n\n### Smart contracts\n\n- You test locally.\n- You test on testnet if possible.\n- You optimize WASM before upload.\n- You generate and publish schemas.\n- You verify contract addresses.\n- You document admin / migration permissions.\n- You audit or peer-review contract logic before mainnet.\n\n### Wallet UX\n\n- You support at least one widely used wallet.\n- You show the network clearly.\n- You display amounts in LUNC but sign microunits.\n- You warn users before mainnet transactions.\n- You avoid confusing legacy stablecoin behavior with current active behavior.\n\n### Security\n\n- You never expose mnemonics.\n- You use environment variables or secret managers.\n- You use hardware wallets for treasury or validator funds.\n- You limit backend hot-wallet balances.\n- You monitor suspicious failures and unexpected parameter changes.\n- You treat third-party contracts, endpoints, and dApps as external dependencies.\n\n## Common mistakes\n\n### Treating Terra Classic like old Terra Classic documentation\n\nSome old materials describe legacy behavior that is not active today. Always verify current Terra Classic behavior before building.\n\nMost importantly: legacy mint/burn market swaps are disabled. Swap Protocol is the current native LUNC and USTC route and has different no-mint liquidity, oracle, and safety assumptions.\n\n### Hardcoding gas prices\n\nGas prices can change. Fetch live gas prices or maintain a controlled production configuration that you update deliberately.\n\n### Ignoring burn tax\n\nIf your app shows transfer previews, balances after transfer, accounting data, or received amounts, you must understand burn tax behavior.\n\n### Assuming every transfer behaves the same\n\nWallet-to-wallet transfers, contract executions with funds, CW20 transfers, DEX swaps, IBC transfers, and tax-exempt routes can behave differently.\n\n### Trusting public infrastructure for production\n\nPublic endpoints are useful for development. Production apps need redundancy, monitoring, and preferably dedicated infrastructure.\n\n### Broadcasting without simulation\n\nSimulation catches many gas, fee, message, and contract errors before the user signs or before the backend submits a transaction.\n\n### Forgetting that Terra Classic is governance-controlled\n\nMany important parameters can change through governance. Build apps that can adapt to current chain state instead of assuming fixed behavior.\n\n## Recommended build path for a first Terra Classic dApp\n\nIf you are new to Terra Classic, follow this order:\n\n1. Install a supported wallet such as Keplr or Galaxy Station.\n2. Connect to `columbus-5` with CosmES and read a wallet balance.\n3. Send a small test transaction.\n4. Query tax parameters and gas prices.\n5. Run localnet.\n6. Create a simple CosmWasm contract from the template.\n7. Build and optimize the contract.\n8. Store and instantiate it on localnet.\n9. Query and execute it from the CLI.\n10. Connect a TypeScript frontend to the contract.\n11. Add transaction simulation and error handling.\n12. Test with testnet or small mainnet amounts.\n13. Replace public endpoints with production-grade infrastructure.\n14. Publish your contract addresses, schemas, assumptions, and risks.\n\n## Minimal mental model\n\nTerra Classic development becomes much easier once you remember this:\n\n- Use `columbus-5` for mainnet.\n- Use `uluna` for on-chain LUNC amounts.\n- Use CosmES for TypeScript apps.\n- Use `terra-classic-sdk` for Python scripts.\n- Use Rust and CosmWasm for smart contracts.\n- Use localnet before mainnet.\n- Use Swap Protocol for native LUNC/USTC market-module swaps; use DEX contracts for general token swap integrations.\n- Simulate transactions before broadcasting.\n- Check gas, tax, and tax exemptions when UX accuracy matters.\n- Do not rely on public endpoints for serious production workloads.\n- Expect governance-controlled parameters to change over time.\n\nTerra Classic already has the core pieces a developer needs: a running Cosmos-based chain, smart contracts, wallets, public endpoints, IBC, staking, governance, and community-maintained tooling. The opportunity is to turn those pieces into clear, useful products that people can actually use.\n\n## Related docs\n\n- [Run Terra Classic localnet](/develop/how-to/localnet/terra-core-localnet/)\n- [Tx best practices](/develop/classic-transaction-behavior/)\n- [Builder tooling](/learn/builder-tooling/)\n- [CosmES SDK](/develop/cosmes/cosmes/)\n- [Smart contracts](/develop/smart-contracts/overview/)\n- [Module specifications](/develop/module-specifications/module-specifications/)\n- [Public Network Endpoints](/develop/endpoints/)\n",
    "previousSlug": "swap-protocol/developer-reference",
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
    "navOrder": 37,
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
        "title": "Steps",
        "id": "steps"
      },
      {
        "depth": 2,
        "title": "Using with CosmES",
        "id": "using-with-cosmes"
      },
      {
        "depth": 2,
        "title": "Tips",
        "id": "tips"
      }
    ],
    "body": "## Prerequisites\n\n- git, make, Docker, and Docker Compose (depending on your setup)\n- 16-32 GB RAM recommended\n\n## Steps\n\n1. Clone the repository:\n\n   ```bash\n   git clone https://github.com/classic-terra/core.git terra-core\n   cd terra-core\n   ```\n\n2. Start a localnet:\n\n   ```bash\n   make localnet-start\n   ```\n\n   This spins up a multi-validator local network with RPC and LCD endpoints. Keep it running in the background while you develop.\n\n3. Endpoints (typical defaults):\n\n   - RPC: `http://localhost:26657`\n   - LCD: `http://localhost:1317`\n   - gRPC: `http://localhost:9090`\n\n4. Chain ID:\n\n   - Usually `localterra` or `localnet` (check the console output). Use this in your SDK configuration.\n\n## Using with CosmES\n\nExample Keplr setup against localnet:\n\n```ts\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\nconst wallets = await controller.connect(WalletType.EXTENSION, [\n  {\n    chainId: \"localterra\", // or \"localnet\"\n    rpc: \"http://localhost:26657\",\n    gasPrice: { denom: \"uluna\", amount: \"28.325\" },\n  },\n]);\nconst connected = wallets.get(\"localterra\");\nconsole.log(\"address\", connected?.address);\n```\n\n> **Warning**\n>\n> Make sure to add the chain information to keplr before connecting.\n\n## Tips\n\n- If ports conflict, stop other chain processes or change ports in Terra Core configs.\n- For contract workflows, use the same `Msg*` transactions in CosmES as on mainnet or testnet—only the endpoints and chain ID change.\n",
    "previousSlug": "develop/quick-start-guide",
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
    "navOrder": 38,
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
    "navOrder": 39,
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
    "navOrder": 40,
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
    "navOrder": 41,
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
    "navOrder": 42,
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
    "navOrder": 43,
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
    "navOrder": 44,
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
    "navOrder": 45,
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
    "navOrder": 46,
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
    "navOrder": 47,
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
    "navOrder": 48,
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
    "navOrder": 49,
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
    "navOrder": 50,
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
    "navOrder": 51,
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
    "navOrder": 52,
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
    "navOrder": 53,
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
    "navOrder": 54,
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
    "navOrder": 55,
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
    "navOrder": 56,
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
    "navOrder": 57,
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
    "navOrder": 58,
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
    "navOrder": 59,
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
    "navOrder": 60,
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
    "navOrder": 61,
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
    "navOrder": 62,
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
    "navOrder": 63,
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
    "navOrder": 64,
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
    "navOrder": 65,
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
    "navOrder": 66,
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
    "navOrder": 67,
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
    "navOrder": 68,
    "title": "Market module (x/market)",
    "description": "Market Module 2.0 swap mechanics, no-mint liquidity, and historical constant-product spread context.",
    "status": "draft",
    "reviewed": false,
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
        "title": "Current behavior",
        "id": "current-behavior"
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
      }
    ],
    "body": "> **Note**\n>\n> Terra Classic swaps are live again through [Swap Protocol](/swap-protocol/overview/), the user-facing product powered by Market Module 2.0. Market Module 2.0 reopens native LUNC and USTC swaps with a no-mint pool design, live oracle pricing, finite epoch liquidity, and hard safety controls.\n\n## Current behavior\n\n- **Native swaps live.** The market module supports LUNC and USTC swaps through Swap Protocol when the module is enabled, oracle checks pass, and pool capacity remains.\n- **No minting during swaps.** Market Module 2.0 uses prefilled protocol liquidity pools instead of minting output supply.\n- **Live oracle pricing.** USTC is priced by oracle-reported market data, not by a fixed 1 USD assumption.\n- **Finite epoch liquidity.** LUNC and USTC are held in distinct swap pools. Output capacity is limited by available balances and epoch rules.\n- **Remainder burns.** Remaining pool balances are burned at the next 30-day epoch boundary.\n- **Safety-first failure.** Unsupported routes, depleted liquidity, oracle quorum failure, TWAP sanity failure, or module disablement should reject swaps rather than expand supply.\n\nSee the [Swap Protocol overview](/swap-protocol/overview/) and [Developer reference](/swap-protocol/developer-reference/) for product-level and integration guidance.\n\n## Historical behavior\n\nAfter May 2022, Terra Classic retained the market module but disabled the old algorithmic swap path to avoid uncontrolled mint/burn of LUNC. During that period, handlers and market state remained useful for backwards compatibility, but users relied on DEX liquidity pools for actual swaps.\n\nMarket Module 2.0 changes that status. It reopens the native route without returning to the historical mint/burn execution model.\n\n## Parameters (`subspace`: `market`)\n\n| Name | Description | Default |\n| --- | --- | --- |\n| `BasePool` | Virtual market depth used by market-module swap calculations. Market Module 2.0 constrains this through adaptive capacity and absolute clamps. | Query live chain state before relying on a fixed value. |\n| `PoolRecoveryPeriod` | Blocks used for virtual pool recovery. Market Module 2.0 uses supply-scaled recovery behavior in the source design. | Query live chain state before relying on a fixed value. |\n| `MinStabilitySpread` | Minimum spread imposed on swaps. | Query live chain state before relying on a fixed value. |\n\nThe legacy `TobinTax` parameter belonged to historical Terra stablecoin swap behavior. Swap Protocol is scoped to LUNC and USTC; stable-to-stable routing is disabled in the Market Module 2.0 source design.\n\n## Queries and CLI\n\n- **Parameters:** `terrad q market params`\n- **Terra pool delta:** `terrad q market terra-pool-delta`\n\nThese calls are useful for analytics, monitoring, and backwards compatibility tooling. Applications that expose Swap Protocol should also track module enabled state, available route capacity, oracle status, and relevant execution errors where the deployed node software exposes them.\n\n## Operational notes\n\n- Swap Protocol is not a return to unlimited algorithmic mint/burn swaps.\n- If the relevant output pool is depleted, a swap should fail instead of minting output tokens.\n- If oracle quorum or TWAP safety checks fail, the module can disable or reject swaps.\n- If a user or integration attempts a stable-to-stable route, the source design expects that route to be rejected.\n- Integrators should read the [Oracles and safety controls](/swap-protocol/oracles-and-safety-controls/) page before routing user transactions through the module.\n",
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
    "navOrder": 69,
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
    "navOrder": 70,
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
    "navOrder": 71,
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
    "navOrder": 72,
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
    "navOrder": 73,
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
    "navOrder": 74,
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
    "navOrder": 75,
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
    "navOrder": 76,
    "title": "Treasury module (x/treasury)",
    "description": "Epoch-based tax rate, reward weight, and seigniorage handling.",
    "status": "draft",
    "reviewed": false,
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
      }
    ],
    "body": "> **Important**\n>\n> The treasury module logic is no longer effectively used by the Terra Classic protocol. On March 3rd, 2021, the (former) Terra community passed [governance proposal 43](https://validator.info/terra-classic/governance/43), updating the seigniorage reward weight to burn all seigniorage. In 2025, the Terra community passed [proposal 12148](https://validator.info/terra-classic/governance/12148), which introduced a new burn tax handling, replacing the former utilization of the stability tax. The stability tax rate has been set to zero. Although the rates and parameters used in this section no longer have any effect on the protocol or transactions, they are still calculated as their logic is intact. The effective rates of seigniorage and stability fees are currently calculated as zero.\n>\n> The follwing information is kept for reference.\n\nThe Treasury module acts as the \"central bank\" of the Terra economy, measuring macroeconomic activity by [observing indicators](#observed-indicators) and adjusting [monetary policy levers](#monetary-policy-levers) to modulate miner incentives toward stable, long-term growth.\n\n> **Note**\n>\n> While the Treasury stabilizes miner demand by adjusting rewards, the [`market`](/develop/module-specifications/spec-market/) module is responsible for Terra price stability through arbitrage and the market maker.\n\n## Concepts\n\n### Observed indicators\n\nThe treasury observes three macroeconomic indicators for each epoch and keeps [indicators](#indicators) of their values during previous epochs:\n\n- **Tax Rewards**: $T$, the income generated from transaction and stability fees during an epoch.\n- **Seigniorage Rewards**: $S$, the amount of seigniorage generated from LUNC swaps to Terra during an epoch which is destined for ballot rewards inside the `Oracle` rewards. As of Columbus-5, all seigniorage is burned.\n- **Total Staked LUNC**: $\\lambda$, the total amount of LUNC staked by users and bonded to their delegated validators.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\nThese indicators can be used to derive two other values, the **Tax Reward per unit LUNC** represented by $\\tau = T / \\lambda$, used in [Updating Tax Rate](#kupdatetaxpolicy), and **total mining rewards** $R = T + S$: the sum of the Tax Rewards and the Seigniorage Rewards, used in [Updating Reward Weight](#kupdaterewardpolicy).\n\nThe protocol can compute and compare the short-term ([`WindowShort`](#windowshort)) and the long-term ([`WindowLong`](#windowlong)) rolling averages of the above indicators to determine the relative direction and velocity of the Terra economy.\n\n### Monetary policy levers\n\n- **Tax Rate**: $r$, adjusts the amount of income gained from Terra transactions, limited by [_tax cap_](#tax-caps).\n\n> **Note**\n>\n> As of [proposal 172](https://station.terra.money/proposal/172), the stability fee tax rate is zero.\n\n- **Reward Weight**: $w$, the portion of seigniorage allocated to the reward pool for [`Oracle`](/develop/module-specifications/spec-oracle/) vote winners. This is given to validators who vote within the reward band of the weighted median exchange rate.\n\n> **Note**\n>\n> As of Columbus-5, all seigniorage is burned and no longer funds the community pool or the oracle reward pool. Validators are rewarded for faithful oracle votes through swap fees.\n\n### Updating policies\n\nBoth [Tax Rate](#tax-rate) and [Reward Weight](#reward-weight) are stored as values in the `KVStore` and can have their values updated through [governance proposals](#proposals) after they have passed. The Treasury recalibrates each lever once per epoch to stabilize unit returns for LUNC, ensuring predictable mining rewards from staking:\n\n- For tax rate, to ensure that unit-mining rewards do not stay stagnant, the treasury adds a [`MiningIncrement`](#miningincrement) so mining rewards increase steadily over time, as described in [k.updatetaxpolicy](#kupdatetaxpolicy).\n\n- For reward weight, the treasury observes the portion of seigniorage needed to bear the overall reward profile, [`SeigniorageBurdenTarget`](#seigniorageburdentarget) and raises rates accordingly, as described in [k.updaterewardpolicy](#kupdaterewardpolicy). The current reward weight is `1`.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### Probation\n\nA probationary period specified by the [`WindowProbation`](#windowprobation) prevents the network from updating the tax rate and reward weight during the first epochs after genesis to allow the blockchain to first obtain a critical mass of transactions and a mature, reliable history of indicators.\n\n## Data\n\n### Policy constraints\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\nPolicy updates from governance proposals and automatic calibration are constrained by the [`TaxPolicy`](#taxpolicy) and [`RewardPolicy`](#rewardpolicy) parameters, respectively. `PolicyConstraints` specifies the floor, ceiling, and max periodic changes for each variable.\n\n```go\n// PolicyConstraints defines constraints around updating a key Treasury variable\ntype PolicyConstraints struct {\n    RateMin       sdk.Dec  `json:\"rate_min\"`\n    RateMax       sdk.Dec  `json:\"rate_max\"`\n    Cap           sdk.Coin `json:\"cap\"`\n    ChangeRateMax sdk.Dec  `json:\"change_max\"`\n}\n```\n\nThe logic for constraining a policy lever update is done by `pc.Clamp()`.\n\n```go\n// Clamp constrains a policy variable update within the policy constraints\nfunc (pc PolicyConstraints) Clamp(prevRate sdk.Dec, newRate sdk.Dec) (clampedRate sdk.Dec) {\n    if newRate.LT(pc.RateMin) {\n        newRate = pc.RateMin\n    } else if newRate.GT(pc.RateMax) {\n        newRate = pc.RateMax\n    }\n\n    delta := newRate.Sub(prevRate)\n    if newRate.GT(prevRate) {\n        if delta.GT(pc.ChangeRateMax) {\n            newRate = prevRate.Add(pc.ChangeRateMax)\n        }\n    } else {\n        if delta.Abs().GT(pc.ChangeRateMax) {\n            newRate = prevRate.Sub(pc.ChangeRateMax)\n        }\n    }\n    return newRate\n}\n```\n\n## Proposals\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\nThe Treasury module defines special proposals which allow the [Tax Rate](#tax-rate) and [Reward Weight](#reward-weight) values in the `KVStore` to be voted on and changed accordingly, subject to the [policy constraints](#policy-constraints) imposed by `pc.Clamp()`.\n\n### TaxRateUpdateProposal\n\n```go\ntype TaxRateUpdateProposal struct {\n    Title       string  `json:\"title\" yaml:\"title\"`             // Title of the Proposal\n    Description string  `json:\"description\" yaml:\"description\"` // Description of the Proposal\n    TaxRate     sdk.Dec `json:\"tax_rate\" yaml:\"tax_rate\"`       // target TaxRate\n}\n```\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n## State\n\n### Tax rate\n\n- type: `Dec`\n- min: .1%\n- max: 1%\n\nThe value of the tax rate policy lever for the current epoch.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### Reward Weight\n\n- type: `Dec`\n- default: `1`\n\nThe value of the reward weight policy lever for the current epoch. As of Columbus-5, the reward weight is `1`.\n\n### Tax caps\n\n- type: `map[string]Int`\n\nThe treasury keeps a `KVStore` that maps a denomination `denom` to an `sdk.Int`, which represents the maximum income that can be generated from taxes on a transaction in that same denomination. It is updated every epoch with the equivalent value of [`TaxPolicy.Cap`](#taxpolicy) at the current exchange rate.\n\nFor example, if a transaction's value is 100 SDT with a tax rate of 5% and a tax cap of 1 SDT, the income generated is 1 SDT, not 5 SDT.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### Tax Proceeds\n\n- type: `Coins`\n\nThe tax rewards $T$ for the current epoch.\n\n### Epoch initial issuance\n\n- type: `Coins`\n\nThe total supply of LUNC at the beginning of the current epoch. This value is used in [`k.SettleSeigniorage()`](#ksettleseigniorage) to calculate the seigniorage distributed at the end of each epoch. As of Columbus 5, all seigniorage is burned.\n\nRecording the initial issuance automatically uses the supply module to determine the total issuance of LUNC. Peeking returns the epoch's initial issuance of µLuna (`uluna`) as `sdk.Int` instead of `sdk.Coins` for clarity.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### Indicators\n\nThe Treasury keeps track of the following indicators for the present and previous epochs:\n\n#### Tax rewards\n\n- type: `Dec`\n\nThe Tax Rewards $T$ for each `epoch`.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n#### Seigniorage Rewards\n\n- type: `Dec`\n\nThe seigniorage rewards $S$ for each `epoch`.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n#### Total Staked LUNC\n\n- type: `Int`\n\nThe total staked LUNC $\\lambda$ for each `epoch`.\n\n## Functions\n\n### `k.UpdateIndicators()`\n\n```go\nfunc (k Keeper) UpdateIndicators(ctx sdk.Context)\n```\n\nAt the end of each epoch $t$, this function records the current values of tax rewards $T$, seigniorage rewards $S$, and total staked LUNC $\\lambda$ before moving to the next epoch $t+1$.\n\n- $T_t$ is the current value in [`TaxProceeds`](#tax-proceeds).\n- $S_t = \\Sigma * w$, with epoch seigniorage $\\Sigma$ and reward weight $w$.\n- $\\lambda_t$ is the result of `staking.TotalBondedTokens()`.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### `k.UpdateTaxPolicy()`\n\n```go\nfunc (k Keeper) UpdateTaxPolicy(ctx sdk.Context) (newTaxRate sdk.Dec)\n```\n\nAt the end of each epoch, this function calculates the next value of the tax rate monetary lever.\n\nUsing $r_t$ as the current tax rate and $n$ as the [`MiningIncrement`](#miningincrement) parameter:\n\n1. Calculate the rolling average $\\tau_y$ of tax rewards per unit LUNC over the last year `WindowLong`.\n\n2. Calculate the rolling average $\\tau_m$ of tax rewards per unit LUNC over the last month `WindowShort`.\n\n3. If $\\tau_m = 0$, no tax revenue occurred in the last month. The tax rate should be set to the maximum permitted by the tax policy, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n4. If $\\tau_m > 0$, the new Tax Rate is $r_{t+1} = (n r_t \\tau_y)/\\tau_m$, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\nWhen monthly tax revenues dip below the yearly average, the treasury increases the tax rate. When monthly tax revenues go above the yearly average, the treasury decreases the tax rate.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### `k.UpdateRewardPolicy()`\n\n```go\nfunc (k Keeper) UpdateRewardPolicy(ctx sdk.Context) (newRewardWeight sdk.Dec)\n```\n\nAt the end of each epoch, this function calculates the next value of the Reward Weight monetary lever.\n\nUsing $w_t$ as the current reward weight, and $b$ as the [`SeigniorageBurdenTarget`](#seigniorageburdentarget) parameter:\n\n1. Calculate the sum $S_m$ of seigniorage rewards over the last month `WindowShort`.\n\n2. Calculate the sum $R_m$ of total mining rewards over the last month `WindowShort`.\n\n3. If $R_m = 0$ and $S_m = 0$, no mining or seigniorage rewards occurred in the last month. The reward weight should be set to the maximum permitted by the reward policy, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n4. If $R_m > 0$ or $S_m > 0$, the new Reward Weight is $w_{t+1} = b w_t S_m / R_m$, subject to the rules of `pc.Clamp()`. For more information, see [constraints](#policy-constraints).\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### `k.UpdateTaxCap()`\n\n```go\nfunc (k Keeper) UpdateTaxCap(ctx sdk.Context) sdk.Coins\n```\n\nThis function is called at the end of an epoch to compute the Tax Caps for every denomination for the next epoch.\n\nFor every denomination in circulation, the new Tax Cap for each denomination is set to be the global Tax Cap defined in the [`TaxPolicy`](#taxpolicy) parameter, at current exchange rates.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### `k.SettleSeigniorage()`\n\n```go\nfunc (k Keeper) SettleSeigniorage(ctx sdk.Context)\n```\n\nThis function is called at the end of an epoch to compute seigniorage and forwards the funds to the [oracle module](/develop/module-specifications/spec-oracle/) module for ballot rewards and the [distribution module](/develop/module-specifications/spec-distribution/) for the community pool.\n\n1. The seigniorage $\\Sigma$ of the current epoch is calculated by taking the difference between the LUNC supply at the start of the epoch ([epoch initial issuance](#epoch-initial-issuance)) and the LUNC supply at the time of calling.\n\n    $\\Sigma > 0$ when the current LUNC supply is lower than it was at the start of the epoch because LUNC had been burned from LUNC swaps into Terra. For more information, see [seigniorage](/develop/module-specifications/spec-market/#seigniorage).\n\n2. The reward weight $w$ is the percentage of the seigniorage designated for ballot rewards. Amount $S$ of new LUNC is minted, and the [oracle module](/develop/module-specifications/spec-oracle/) receives $S = \\Sigma * w$ of the seigniorage.\n\n3. The remainder of the coins $\\Sigma - S$ is sent to the [distribution module](/develop/module-specifications/spec-distribution/) , where it is allocated into the community pool.\n\n::: {Important}\nAs of Columbus-5, all seigniorage is burned and no longer funds the community pool or the oracle reward pool. Validators are rewarded for faithful oracle votes through swap fees.\n:::\n\n## Transitions\n\n### End-Block\n\nIf the blockchain is at the final block of the epoch, the following procedure is run:\n\n1. Update all the indicators with [`k.UpdateIndicators()`](#kupdateindicators)\n\n2. If the current block is under [probation](#probation), skip to step 6.\n\n3. [Settle seigniorage](#ksettleseigniorage) accrued during the epoch and make funds available to ballot rewards and the community pool during the next epoch. As of Columbus-5, all seigniorage is burned.\n\n4. Calculate the [Tax Rate](#kupdatetaxpolicy), [Reward Weight](#kupdaterewardpolicy), and [Tax Cap](#kupdatetaxcap) for the next epoch. As of Columbus-5, all seigniorage is burned, and the reward weight is `1`.\n\n5. Emit the `policy_update` event, recording the new policy lever values.\n\n6. Finally, record the LUNC issuance with [`k.RecordEpochInitialIssuance()`](#epoch-initial-issuance). It will be used to calculate the seigniorage for the next epoch.\n\n| Type          | Attribute Key | Attribute Value |\n| ------------- | ------------- | --------------- |\n| policy_update | tax_rate      | {taxRate}       |\n| policy_update | reward_weight | {rewardWeight}  |\n| policy_update | tax_cap       | {taxCap}        |\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n## Parameters\n\nThe subspace for the Treasury module is `treasury`.\n\n```go\ntype Params struct {\n    TaxPolicy               PolicyConstraints `json:\"tax_policy\" yaml:\"tax_policy\"`\n    RewardPolicy            PolicyConstraints `json:\"reward_policy\" yaml:\"reward_policy\"`\n    SeigniorageBurdenTarget sdk.Dec           `json:\"seigniorage_burden_target\" yaml:\"seigniorage_burden_target\"`\n    MiningIncrement         sdk.Dec           `json:\"mining_increment\" yaml:\"mining_increment\"`\n    WindowShort             int64             `json:\"window_short\" yaml:\"window_short\"`\n    WindowLong              int64             `json:\"window_long\" yaml:\"window_long\"`\n    WindowProbation         int64             `json:\"window_probation\" yaml:\"window_probation\"`\n}\n```\n\n### TaxPolicy\n\n- type: `PolicyConstraints`\n- default:\n\n```go\nDefaultTaxPolicy = PolicyConstraints{\n    RateMin:       sdk.NewDecWithPrec(5, 4), // 0.05%\n    RateMax:       sdk.NewDecWithPrec(1, 2), // 1%\n    Cap:           sdk.NewCoin(core.MicroSDRDenom, sdk.OneInt().MulRaw(core.MicroUnit)), // 1 SDR Tax cap\n    ChangeRateMax: sdk.NewDecWithPrec(25, 5), // 0.025%\n}\n```\n\nConstraints for updating the [tax rate](#tax-rate) monetary policy lever.\n\n### RewardPolicy\n\n- type: `PolicyConstraints`\n- default:\n\n```go\nDefaultRewardPolicy = PolicyConstraints{\n    RateMin:       sdk.NewDecWithPrec(5, 2), // 5%\n    RateMax:       sdk.NewDecWithPrec(90, 2), // 90%\n    ChangeRateMax: sdk.NewDecWithPrec(25, 3), // 2.5%\n    Cap:           sdk.NewCoin(\"unused\", sdk.ZeroInt()), // UNUSED\n}\n```\n\nConstraints for updating the [reward weight](#reward-weight) monetary policy lever.\n\n### SeigniorageBurdenTarget\n\n- type: `sdk.Dec`\n- default: 67%\n\nMultiplier specifying the portion of burden seigniorage needed to bear the overall reward profile for Reward Weight updates during epoch transition.\n\n> **Note**\n>\n> As of proposals [43](https://station.terra.money/proposal/43) and [172](https://station.terra.money/proposal/172), all seigniorage is burned, and the stability fee tax rate is zero.\n\n### MiningIncrement\n\n- type: `sdk.Dec`\n- default: 1.07 growth rate, 15% CAGR of $\\tau$\n\nMultiplier determining an annual growth rate for tax rate policy updates during epoch transition.\n\n### WindowShort\n\n- type: `int64`\n- default: `4` (month = 4 weeks)\n\nA number of epochs that specifies a time interval for calculating the short-term moving average.\n\n### WindowLong\n\n- type: `int64`\n- default: `52` (year = 52 weeks)\n\nA number of epochs that specifies a time interval for calculating the long-term moving average.\n\n### WindowProbation\n\n- type: `int64`\n- default: `18`\n\nA number of epochs that specifies a time interval for the probationary period.\n",
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
    "navOrder": 77,
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
    "navOrder": 78,
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
    "navOrder": 79,
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
    "navOrder": 80,
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
    "navOrder": 81,
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
    "navOrder": 82,
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
    "navOrder": 83,
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
    "navOrder": 84,
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
    "navOrder": 85,
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
    "navOrder": 86,
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
    "navOrder": 87,
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
    "navOrder": 88,
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
    "navOrder": 89,
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
    "navOrder": 90,
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
    "navOrder": 91,
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
    "navOrder": 92,
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
    "previousSlug": "appendices/glossary",
    "nextSlug": null
  }
] satisfies DocsPage[];
