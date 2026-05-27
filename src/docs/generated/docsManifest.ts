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
    "sourceRepo": "https://github.com/terra-classic-money/terra-classic-docs/blob/main",
    "sourceCommit": "bootstrap-2026-05-27",
    "sourcePath": "content/docs/start.md",
    "sourceDate": "2026-05-27",
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
    "body": "## What this docs site is\n\nTerra Classic Docs is a custom, GitHub Pages-only documentation site for Terra Classic users, node operators, validators, and builders.\n\nIt is separate from the main Terra Classic Website. The docs site is built around source-aware markdown content, clear navigation, and a contribution model that can evolve through GitHub issues and pull requests.\n\n## Main sections\n\n- [Learn](/learn/overview/) covers user-facing Terra Classic concepts, wallets, fees, staking, governance, and glossary material.\n- [Develop](/develop/smart-contracts/overview/) covers smart contracts, CosmES, Terra.py, transaction behavior, endpoints, localnet, and module specifications.\n- [Full Node](/full-node/overview/) covers node operation, production setup, sync, troubleshooting, and validator-network guides.\n\n## Contribution model\n\nThe long-term target is a community-maintained docs surface where corrections and improvements are proposed through GitHub.\n\nUntil the final public repository URL is confirmed, the edit links in this bootstrap build are placeholders.\n",
    "previousSlug": null,
    "nextSlug": "learn/overview"
  },
  {
    "slug": "learn/overview",
    "path": "/learn/overview/",
    "sourceFile": "content/docs/learn/overview.md",
    "group": "Learn Terra Classic",
    "navTitle": "Start here",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 1,
    "title": "Start here",
    "description": "Terra Classic is a delegated proof-of-stake network powered by LUNC. Validators produce blocks, delegators secure the network through staking, and...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/overview.md",
    "sourceDate": "2026-05-27",
    "headings": [],
    "body": "Terra Classic is a delegated proof-of-stake network powered by LUNC. Validators produce blocks, delegators secure the network through staking, and governance directs protocol evolution.\n\nStaking rewards derive from gas fees, swaps, and the burn tax. Hardware wallet support is recommended for critical accounts to preserve key hygiene.\n\nThis section of the documentation provides an overview of Terra Classic and its key components.\n",
    "previousSlug": "start",
    "nextSlug": "learn/protocol"
  },
  {
    "slug": "learn/protocol",
    "path": "/learn/protocol/",
    "sourceFile": "content/docs/learn/protocol.md",
    "group": "Learn Terra Classic",
    "navTitle": "Terra Classic protocol",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 2,
    "title": "Terra Classic protocol",
    "description": "Terra Classic combines proof-of-stake security and on-chain governance. This overview explains how LUNC, validators, and delegators all interact.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/protocol.md",
    "sourceDate": "2026-05-27",
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
    "body": "Terra Classic combines proof-of-stake security and on-chain governance. This overview explains how LUNC, validators, and delegators all interact.\n\n> **Important**\n>\n> Since May 2022, Terra Classic has no pegged stablecoins. TerraUSD (UST) has depegged and is currently considered a speculative asset.\n>\n> References to **stablecoins** in this document refer to the historical algorithmic operation of Terra.\n\n## Terra and LUNC\n\n- **LUNC** is the staking and governance asset. Validators and delegators stake LUNC to secure the chain, earn rewards, and participate in governance.\n- **TerraUSD et al.** historically tracked fiat currencies (for example, TerraUSD `uusd`, TerraKRW `ukrw`, TerraSDR `usdr`). Users historically minted Terra by burning LUNC; on Classic, the mint/burn swap paths are disabled, but legacy supply mechanics still inform the protocol design.\n\n## Stablecoin mechanics (historical)\n\nTerra was designed around two supply pools—Terra and LUNC. The market module encouraged arbitrage to expand or contract stablecoin supply and keep prices near their pegs.\n\n- **Expansion**: When Terra traded above the peg, burning LUNC to mint Terra increased supply and reduced the premium.\n- **Contraction**: When Terra traded below the peg, burning Terra to mint LUNC reduced Terra supply.\n\n> **Important**\n> Following the 2022 hyperinflation event, Classic governance disabled market swap mint/burn paths. LUNC remains the staking asset, while stablecoin liquidity is community-maintained through dApps and DEXes.\n\n## Validators and consensus\n\nValidators run full nodes, propose blocks, and vote during Tendermint consensus.\n\n1. A proposer is selected (weighted by stake) and broadcasts a block.\n2. Validators vote in two rounds. If ≥2/3 of voting power signs both rounds, the block is committed.\n3. Fees from the block enter the distribution module and are later shared with delegators.\n\nLearn more in the validator guides under `Run a full node` and the [staking doc](/learn/staking-and-governance/).\n\n## Staking lifecycle\n\n- **Delegating**: Delegators bond LUNC to a validator to earn rewards. Staked LUNC contributes to validator voting power but always belongs to the delegator.\n- **Bonded / unbonded / unbonding**: LUNC exists in three phases. Unbonding takes 21 days and does not accrue rewards.\n- **Redelegation**: Move bonded stake between validators without waiting the unbonding period (subject to a 21-day cooldown per source/target pair).\n\n### Slashing\n\nMisbehaving validators are penalised by the slashing module:\n\n- **Double-signing**: Signing conflicting blocks at the same height.\n- **Downtime**: Failing to participate in consensus.\n- **Oracle faults**: Missing required oracle votes (`x/oracle`).\n\nEvery slash reduces both validator self-bond and delegator stake, and the validator is jailed until conditions are resolved. Review the [slashing spec](/develop/module-specifications/spec-slashing/) for parameters.\n\n## Governance\n\nTerra Classic governance lets stakers steer protocol policy.\n\n1. **Deposit period** (2 weeks): Community members deposit LUNC on a proposal until the minimum threshold (currently 50 LUNC) is met.\n2. **Voting period** (1 week): Validators vote `Yes`, `No`, `NoWithVeto`, or `Abstain`. Delegators can override their validator’s vote.\n3. **Execution**: Passed proposals trigger automatic handlers or human follow-up (for text proposals). Deposits are refunded if quorum (40% participation) and veto thresholds are satisfied.\n\nCommon proposal types include parameter changes, community pool spends, and text proposals. See the [governance module spec](/develop/module-specifications/spec-governance/) for details.\n\n## Fees and rewards\n\n- **Gas** pays validator compute and storage costs (`x/auth`).\n- **Burn tax** is charged via the `x/tax` module on many transfers; rates are queryable through LCD or RPC endpoints.\n- **Legacy swap fees** (Tobin and spread) are currently set to 100% to disable utilizing the market module.\n\nRewards flow into the distribution module and are split between validators and delegators based on stake and commission. Consult the [fees guide](/learn/fees/) for live endpoints and tax exemptions.\n",
    "previousSlug": "learn/overview",
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
    "navOrder": 3,
    "title": "Wallets",
    "description": "Use wallets that support Ledger or Trezor flows for production funds. Keep seed phrases offline and dedicate browser profiles to validator accounts.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/wallets.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 4,
    "title": "Keplr",
    "description": "Keplr is one of the recommended wallets for Terra Classic. Use this section to install the extension, create or import wallets, and perform common...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 5,
    "title": "Keplr install",
    "description": "Open the Chrome Web Store.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-install.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 6,
    "title": "Keplr wallet",
    "description": "Open the Keplr extension.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-wallet.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 7,
    "title": "Keplr send",
    "description": "Open the Keplr extension and select the Terra Classic network.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-send.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 8,
    "title": "Keplr staking",
    "description": "Staking with Keplr is only possible through third-party websites or the Keplr Dashboard.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-staking.md",
    "sourceDate": "2026-05-27",
    "headings": [],
    "body": "Staking with Keplr is only possible through third-party websites or the [Keplr Dashboard](https://wallet.keplr.app/chains/terra-classic).\n\n> **Tips**\n>\n> - Keep enough LUNC for future fees.\n> - Redelegations avoid the 21-day unbonding period, but each validator pair has a 21-day cooldown between redelegations.\n> - Undelegation requires a 21-day waiting period before funds become liquid.\n",
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
    "navOrder": 9,
    "title": "Keplr governance",
    "description": "Voting with Keplr is only possible through third-party websites. See the ecosystem page for more information.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-governance.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 10,
    "title": "Keplr testnet",
    "description": "The testnet support is integrated into Keplr. You can utilize the faucet by LuncGoblins or the Telegram bot to get some testnet LUNC.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/keplr/keplr-testnet.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 11,
    "title": "Galaxy Station",
    "description": "Galaxy Station by Hexxagon offers a WalletConnect-capable browser extension for Terra Classic. Use this section to install the wallet, manage...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 12,
    "title": "Galaxy Station install",
    "description": "Open the Chrome Web Store.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-install.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 13,
    "title": "Galaxy Station wallet",
    "description": "Open the Galaxy Station extension.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-wallet.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 14,
    "title": "Galaxy Station send",
    "description": "Open the Galaxy Station extension or connect through WalletConnect.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-send.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 15,
    "title": "Galaxy Station staking",
    "description": "Open Galaxy Station and connect the extension or the mobile app via WalletConnect.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-staking.md",
    "sourceDate": "2026-05-27",
    "headings": [],
    "body": "1. Open [Galaxy Station](https://station.hexxagon.io) and connect the extension or the mobile app via WalletConnect.\n2. Ensure Terra Classic is selected as the active network.\n3. Open the staking view and browse validators.\n4. Choose a validator and click **Delegate**.\n5. Enter the stake amount and confirm.\n\n> **Tips**\n>\n> - Keep some LUNC for transaction fees.\n> - Redelegations avoid the 21-day unbonding period but introduce a 21-day cooldown between the same validator pair.\n> - Undelegating starts a 21-day unbonding period before funds become liquid.\n",
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
    "navOrder": 16,
    "title": "Galaxy Station governance",
    "description": "Open Galaxy Station and connect the extension or the mobile app via WalletConnect.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/galaxy-station/galaxy-station-governance.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 17,
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
    "nextSlug": "learn/staking-and-governance"
  },
  {
    "slug": "learn/staking-and-governance",
    "path": "/learn/staking-and-governance/",
    "sourceFile": "content/docs/learn/staking-and-governance.md",
    "group": "Learn Terra Classic",
    "navTitle": "Staking and governance",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 18,
    "title": "Staking and governance",
    "description": "Delegating LUNC grants validators voting power proportional to their stake. Validators collect commission on rewards while delegators earn the...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/staking-and-governance.md",
    "sourceDate": "2026-05-27",
    "headings": [
      {
        "depth": 2,
        "title": "Delegate flow",
        "id": "delegate-flow"
      }
    ],
    "body": "Delegating LUNC grants validators voting power proportional to their stake. Validators collect commission on rewards while delegators earn the remainder. Typical commission settings range between 2.5% and 20%.\n\nGovernance proposals enter a seven-day voting phase once deposits reach the minimum threshold. Delegators can override validator votes through supported wallets.\n\n## Delegate flow\n\n1. Connect with Keplr, Galaxy Station or other supported wallets and review validator voting power and commission.\n2. Delegate LUNC and monitor validator uptime to ensure they remain below slashing thresholds.\n3. Redelegate proactively if a validator is unreliable or votes against your interests.\n4. Vote on governance proposals before the deadline to direct network policy.\n5. Observe the 21-day unbonding period when reallocating stake across validators.\n\n> **Tip**\n>\n> Delegator votes **override** validator votes. The voting power from undelegated LUNC is not used to vote on proposals.\n",
    "previousSlug": "learn/galaxy-station/galaxy-station-testnet",
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
    "navOrder": 19,
    "title": "Fees",
    "description": "All Terra Classic transactions consume gas. Some legacy transaction types also reference historical fees such as Tobin and spread taxes; these are...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/fees.md",
    "sourceDate": "2026-05-27",
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
    "body": "All Terra Classic transactions consume gas. Some legacy transaction types also reference historical fees such as Tobin and spread taxes; these are currently disabled on Classic. The table below summarises which fees apply.\n\n| Transaction type | [Gas](#gas) | [Tobin](#tobin-tax) | [Spread](#spread-fee) | Burn tax |\n| --- | --- | --- | --- | --- |\n| ~~Stablecoin ↔ stablecoin market swap~~ *disabled* | ✓ | ✓ |  |  |\n| ~~Stablecoin ↔ LUNC market swap~~ *disabled* | ✓ |  | ✓ |  |\n| Wallet-to-wallet transfer | ✓ |  |  | ✓ |\n\nDApps such as DEXes can charge additional protocol fees on top of network fees.\n\n## Gas\n\n[Gas](/learn/glossary/#fees) covers validator compute and storage. Validators configure minimum gas prices; transactions must include fees meeting or exceeding that implied price.\n\nKey behaviour on Terra Classic:\n\n- Validators reject transactions with implied gas prices below their configured minimum.\n- Most wallets estimate gas above the minimum to avoid underestimation.\n- Unused gas is **not** refunded.\n- Transactions are processed FIFO within the mempool, not by highest fee.\n\nCurrent suggested prices are available via [`https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices`](https://terra-classic-fcd.publicnode.com/v1/txs/gas_prices).\n\nGas fees flow into the distribution module and are paid out to validators and delegators as staking rewards, and fill the Community Pool.\n\n## Burn tax (`x/tax` module)\n\nTerra Classic uses the `x/tax` module to levy burn taxes on transfers.\n\n- Parameters: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/params)\n- Current burn rate: [`https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate`](https://terra-classic-lcd.publicnode.com/terra/tax/v1beta1/burn_tax_rate)\n\nReverse-charge (Tax2Gas) rules can deduct tax from the transfer amount or fees depending on the transaction path. Always confirm current governance decisions before relying on a specific behaviour.\n\n### Tax exemption registry\n\nSome addresses are exempt from burn tax. Query the registry via:\n\n- Zones list: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/zones)\n- Zone addresses: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/{zonename}/addresses`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/%7Bzonename%7D/addresses)\n- Taxable check: [`https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/{from}/{to}`](https://terra-classic-lcd.publicnode.com/terra/taxexemption/v1/taxable/%7Bfrom%7D/%7Bto%7D)\n\n## Tobin tax\n\nThe Tobin tax historically applied to swaps between Terra stablecoins. Governance disabled Classic market swaps, so the rate is unused today, but it remains queryable for reference via the oracle module.\n\nDiscussed rationale: [“On swap fees: the greedy and the wise”](https://medium.com/terra-money/on-swap-fees-the-greedy-and-the-wise-b967f0c8914e).\n\nWhen active, Tobin tax revenue flowed into the oracle reward pool and was redistributed to validators who reported accurate exchange rates. See the [oracle module spec](/develop/module-specifications/spec-oracle/) for reward mechanics.\n\n## Spread fee\n\nSpread fees applied to swaps between Terra stablecoins and LUNC. While disabled on Classic, the [market module](/develop/module-specifications/spec-market/) retains the logic to adjust spread based on pool balances. Historically the minimum spread was 0.5%, increasing during volatility to maintain the [`x*y=k`](/develop/module-specifications/spec-market/#market-making-algorithm) invariant.\n\nLike Tobin tax, spread revenue previously funded the oracle reward pool.\n",
    "previousSlug": "learn/staking-and-governance",
    "nextSlug": "learn/glossary"
  },
  {
    "slug": "learn/glossary",
    "path": "/learn/glossary/",
    "sourceFile": "content/docs/learn/glossary.md",
    "group": "Learn Terra Classic",
    "navTitle": "Glossary",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 20,
    "title": "Glossary",
    "description": "Top validators that participate in consensus and earn rewards. If more than the configured maximum of validators want to join the active set, the...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/glossary.md",
    "sourceDate": "2026-05-27",
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
    "previousSlug": "learn/fees",
    "nextSlug": "learn/assets"
  },
  {
    "slug": "learn/assets",
    "path": "/learn/assets/",
    "sourceFile": "content/docs/learn/assets.md",
    "group": "Learn Terra Classic",
    "navTitle": "Brand assets",
    "navDepth": 0,
    "navParent": null,
    "navHasChildren": false,
    "navOrder": 21,
    "title": "Brand assets",
    "description": "You find the asset repository on GitHub.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/assets.md",
    "sourceDate": "2026-05-27",
    "headings": [],
    "body": "You find the asset repository on [GitHub](https://github.com/classic-terra/assets/).\n\nFor brand assets refer to the [icons section](https://github.com/classic-terra/assets/tree/master/icon/svg).\n",
    "previousSlug": "learn/glossary",
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
    "navOrder": 22,
    "title": "Run Terra Classic localnet",
    "description": "git, make, Docker, and Docker Compose (depending on your setup)",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/how-to/localnet/terra-core-localnet.md",
    "sourceDate": "2026-05-27",
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
    "previousSlug": "learn/assets",
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
    "navOrder": 23,
    "title": "Tx best practices",
    "description": "Terra Classic follows standard Cosmos transaction flows, but several chain-specific rules affect how applications should build, simulate, and...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/classic-transaction-behavior.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 24,
    "title": "Builder tooling",
    "description": "Terra Classic supports CosmWasm smart contracts, IBC integrations, and a growing ecosystem of TypeScript tooling. Use modern CI/CD workflows and...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "learn/builder-tooling.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 25,
    "title": "CosmES SDK",
    "description": "CosmES is a modern, tree-shakeable, pure-ESM SDK for Cosmos SDK chains. Use the @goblinhunt/cosmes fork for Terra Classic projects.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 26,
    "title": "Get started",
    "description": "TypeScript project configured for ESM",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-getting-started.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 27,
    "title": "Query data",
    "description": "import { getNativeBalances } from \"@goblinhunt/cosmes/client\";",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-query-data.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 28,
    "title": "Programmatic wallet",
    "description": "Use MnemonicWallet when you need to sign and broadcast transactions from scripts, backends, or test suites without a browser wallet.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-mnemonic-wallet.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 29,
    "title": "Transactions",
    "description": "import { MsgSend } from \"@goblinhunt/cosmes/client\";",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/cosmes/cosmes-transactions.md",
    "sourceDate": "2026-05-27",
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
    "body": "## Bank send (`MsgSend`)\n\n```ts\nimport { MsgSend } from \"@goblinhunt/cosmes/client\";\nimport { KeplrController, WalletType } from \"@goblinhunt/cosmes/wallet\";\n\nconst CHAIN_ID = \"columbus-5\";\nconst RPC = \"https://terra-classic-rpc.publicnode.com\";\n\nasync function send(): Promise<void> {\n  const controller = new KeplrController(\"<YOUR_WC_PROJECT_ID>\");\n  const wallets = await controller.connect(WalletType.EXTENSION, [\n    { chainId: CHAIN_ID, rpc: RPC, gasPrice: { denom: \"uluna\", amount: \"28.325\" } },\n  ]);\n  const connected = wallets.get(CHAIN_ID);\n  if (!connected) {\n    throw new Error(\"Failed to connect wallet\");\n  }\n\n  const msg = new MsgSend({\n    fromAddress: connected.address,\n    toAddress: \"terra1...\",\n    amount: [{ denom: \"uluna\", amount: \"100000\" }],\n  });\n\n  const unsigned = { msgs: [msg], memo: \"CosmES send\" };\n  const fee = await connected.estimateFee(unsigned, 1.2);\n  const txHash = await connected.broadcastTx(unsigned, fee);\n  console.log(\"txhash\", txHash);\n}\n```\n\n## Execute a contract (`MsgExecuteContract`)\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst contract = \"terra1...cw20\";\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract,\n  msg: { transfer: { recipient: \"terra1...dest\", amount: \"1000\" } },\n  funds: [],\n});\n\nconst unsigned = { msgs: [msg], memo: \"cw20 transfer\" };\nconst fee = await connected.estimateFee(unsigned, 1.2);\nconst txHash = await connected.broadcastTx(unsigned, fee);\n```\n\n## IBC transfer (`MsgIbcTransfer`)\n\n```ts\nimport { MsgIbcTransfer } from \"@goblinhunt/cosmes/client\";\n\nconst msg = new MsgIbcTransfer({\n  sourcePort: \"transfer\",\n  sourceChannel: \"channel-XXXX\",\n  token: { denom: \"uluna\", amount: \"100000\" },\n  sender: connected.address,\n  receiver: \"cosmos1...dest\",\n  timeoutHeight: { revisionNumber: \"0\", revisionHeight: \"0\" },\n  timeoutTimestamp: \"0\",\n});\n```\n\n## DEX swap templates\n\n### Terraswap pair swap\n\n```ts\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...pair\",\n  msg: {\n    swap: {\n      offer_asset: {\n        info: { native_token: { denom: \"uluna\" } },\n        amount: \"100000\",\n      },\n      belief_price: \"0.000123\",\n      max_spread: \"0.005\",\n      to: connected.address,\n    },\n  },\n  funds: [{ denom: \"uluna\", amount: \"100000\" }],\n});\n```\n\n### Terraport router swap\n\n```ts\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...router\",\n  msg: {\n    swap: {\n      offer_asset: {\n        info: { native_token: { denom: \"uluna\" } },\n        amount: \"100000\",\n      },\n      to: connected.address,\n    },\n  },\n  funds: [{ denom: \"uluna\", amount: \"100000\" }],\n});\n```\n\n### CW20 offer swap\n\n```ts\nimport { MsgExecuteContract } from \"@goblinhunt/cosmes/client\";\n\nconst hookMsg = { swap: { belief_price: \"123.45\", max_spread: \"0.005\", to: connected.address } };\nconst hook = Buffer.from(JSON.stringify(hookMsg)).toString(\"base64\");\n\nconst msg = new MsgExecuteContract({\n  sender: connected.address,\n  contract: \"terra1...cw20\",\n  msg: {\n    send: {\n      contract: \"terra1...pair\",\n      amount: \"500000\",\n      msg: hook,\n    },\n  },\n  funds: [],\n});\n```\n\n> **Important**\n>\n> - Replace contract addresses and fields with the DEX’ published schemas.\n> - Always set `max_spread` or `minimum_receive` safeguards.\n> - Use `queryContract` to discover pair addresses via factory contracts.\n\n## Best practices\n\n- Call `simulateTx` to estimate gas, then apply a margin (for example `1.2x`) before calculating fees.\n- Refer to `docs/develop/endpoints.md` for production-grade infrastructure.\n- On Terra Classic, market swaps are disabled; use DEX contracts instead.\n",
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
    "navOrder": 30,
    "title": "Terra.py on Terra Classic",
    "description": "This guide explains how to install the terra_classic_sdk Python SDK, connect to the recommended endpoints, and submit common transactions with typed...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/terra-py/terra-py.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 31,
    "title": "Smart contracts",
    "description": "A smart contract is a contract whose terms are expressed as a computer program with logic and state persisted on the blockchain. Smart contracts can...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/README.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 32,
    "title": "Build a Terra Classic dApp",
    "description": "This tutorial is designed to acquaint you with everything you need to know to launch your own smart-contract powered applications on Terra Classic.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/build-terra-dapp.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 33,
    "title": "Set up local environment",
    "description": "As a smart contract developer, you will need to write, compile, upload, and test your contracts before deploying them on the Columbus-5 mainnet. The...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/set-up-local-environment.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 34,
    "title": "Write smart contract",
    "description": "A smart contract can be considered an instance of a singleton object whose internal state is persisted on the blockchain. Users can trigger state...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/write-smart-contract.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 35,
    "title": "Interact with contracts",
    "description": "Make sure you have set up the local network and that it is up and running:",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/interact-with-smart-contract.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 36,
    "title": "Manage CW20 tokens",
    "description": "According to the official documentation",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/smart-contracts/manage-cw20-tokens.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 37,
    "title": "Module specifications",
    "description": "Terra Classic Core is the Golang implementation of the Terra Classic protocol, built on top of the Cosmos SDK and CometBFT. Use these module...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/module-specifications.md",
    "sourceDate": "2026-05-27",
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
    "body": "Terra Classic Core is the Golang implementation of the Terra Classic protocol, built on top of the [Cosmos SDK](https://cosmos.network/appchains) and [CometBFT](https://cometbft.com/). Use these module specifications to understand how Classic’s on-chain logic is organized and how each module contributes to validator operations, governance, and the wider economy.\n\n## How to use these specs\n\nEach document starts with the module’s role in the protocol and then dives into state, message handling, and block transitions. Parameter tables at the end highlight defaults and governance-controlled values. The specs are designed to supplement a direct read of the Terra Core source code and help contributors reason about Classic-specific behavior.\n\n> **Note**\n> References to seigniorage and market swaps reflect the historical behavior of the Terra protocol. On Terra Classic, seigniorage is fully burned and the market module’s swap paths are disabled to protect supply.\n\nMany Terra Classic modules are inherited from the Cosmos SDK with Classic-specific parameters and custom hooks.\n\n## Block lifecycle overview\n\n### Begin block\n\n- Distribution: pay rewards for the previous block.\n- Slashing: check downtime and double-signing evidence.\n\n### Process messages\n\n- Route and execute tx messages in their respective modules.\n\n### End block\n\n- Crisis: assert registered invariants.\n- Oracle: tally exchange-rate votes (`VotePeriod`) and penalise oracle downtime (`SlashWindow`).\n- Governance: expire deposits/votes and execute passed proposals.\n- Market: replenish liquidity pools (Classic swaps remain disabled).\n- Treasury: adjust tax rate and reward weight at each epoch.\n- Staking: recompute the top-130 active validator set.\n\n## Conventions\n\n### Currency denominations\n\n- LUNC is Terra Classic’s staking and governance asset (`uluna` microunit).\n- All denominations use microunits (`10^-6`) on-chain.\n\nPrice discovery relies on the [oracle module](/develop/module-specifications/spec-oracle/), while the [market module](/develop/module-specifications/spec-market/) historically mediated swaps using those oracle rates.\n",
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
    "navOrder": 38,
    "title": "Auth module (x/auth)",
    "description": "x/auth is responsible for account state, signature and sequence checks, fee deduction, and ante-handler orchestration. Classic keeps legacy account...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-auth.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 39,
    "title": "Authz module (x/authz)",
    "description": "Authorization enables an account (granter) to allow another account (grantee) to execute specific messages on their behalf. The grant can be...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-authz.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 40,
    "title": "Bank module (x/bank)",
    "description": "x/bank maintains account balances and handles token transfers. Classic extends it via custom/bank to:",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-bank.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 41,
    "title": "Capability module (x/capability)",
    "description": "x/capability provides scoped capability sub-keepers to modules that interact with external systems:",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-capability.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 42,
    "title": "Consensus params module (x/consensus)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-consensus.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 43,
    "title": "Crisis module (x/crisis)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-crisis.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 44,
    "title": "Distribution module (x/distribution)",
    "description": "**Burn-tax inflow.** custom/auth/ante/fee_tax.go forwards the burn-tax portion of every transaction to the fee collector. x/distribution allocates...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-distribution.md",
    "sourceDate": "2026-05-27",
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
    "body": "> **Note**\n>\n> Terra Classic keeps the Cosmos SDK distribution module but relies on burn-tax inflows instead of inflation or seigniorage. Rewards are passively accumulated and must be withdrawn by validators and delegators.\n\n## Classic overview\n\n- **Burn-tax inflow.** `custom/auth/ante/fee_tax.go` forwards the burn-tax portion of every transaction to the fee collector. `x/distribution` allocates that balance at end block using the standard global split.\n- **Community pool.** `CommunityTax` is set to `0.5`, so the community pool grows with every transaction. Governance or users can still call `MsgFundCommunityPool` to deposit additional funds.\n- **Manual withdrawals.** Validators use `MsgWithdrawValidatorCommission`;delegators use `MsgWithdrawDelegatorReward`. Nothing auto-claims.\n\n## Parameters (subspace `distribution`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `CommunityTax` | Percentage of collected fees sent to community pool. | `0` |\n| `BaseProposerReward` | Fixed proposer reward share. | `0.01` |\n| `BonusProposerReward` | Additional proposer reward scaled by participation. | `0.04` |\n| `WithdrawAddrEnabled` | Allow custom withdrawal addresses. | `true` |\n\n## Reward flow\n\n1. Fees and burn-tax proceeds accumulate in the fee collector module account.\n2. During `EndBlock`, the distribution keeper pays proposer rewards (`base + bonus`).\n3. Any configured community tax is transferred to the community pool (no-op on Classic).\n4. Remaining coins are recorded in `FeePool` for future delegator withdrawals and oracle ballot rewards.\n\n## Messages used on Classic\n\n- **`MsgSetWithdrawAddress`** — update the account receiving staking rewards.\n- **`MsgWithdrawDelegatorReward`** — claim rewards for a specific validator/delegator pair.\n- **`MsgWithdrawValidatorCommission`** — withdraw accumulated validator commission.\n- **`MsgFundCommunityPool`** — manually deposit funds into the community pool when governance approved spending budgets.\n\nSee the upstream Cosmos SDK documentation for full protobuf definitions and CLI usage examples.\n",
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
    "navOrder": 45,
    "title": "DynComm module (x/dyncomm)",
    "description": "**Dynamic floor.** Every epoch (end block), the module computes a recommended minimum commission based on the StrathCole formula using four...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-dyncomm.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 46,
    "title": "Evidence module (x/evidence)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-evidence.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 47,
    "title": "Feegrant module (x/feegrant)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-feegrant.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 48,
    "title": "Governance module (x/gov)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-governance.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 49,
    "title": "IBC core module (x/ibc)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 50,
    "title": "IBC fee module (x/ibc-fee)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc-fee.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 51,
    "title": "IBC hooks module (ibc-hooks)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ibc-hooks.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 52,
    "title": "Interchain accounts module (x/ica)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-ica.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 53,
    "title": "Market module (x/market)",
    "description": "**Swaps rejected.** Transaction handlers remain wired, yet governance decisions prevent reopening algorithmic swaps to avoid uncontrolled mint/burn...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-market.md",
    "sourceDate": "2026-05-27",
    "headings": [
      {
        "depth": 2,
        "title": "Classic behaviour",
        "id": "classic-behaviour"
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
    "body": "> **Note**\n>\n> Terra Classic retains the market module, but on-chain swaps (`MsgSwap`, `MsgSwapSend`) were disabled after May 2022. Users must rely on DEX liquidity pools; the module now maintains only virtual pools and spread state to keep downstream logic stable.\n\n## Classic behaviour\n\n- **Swaps rejected.** Transaction handlers remain wired, yet governance decisions prevent reopening algorithmic swaps to avoid uncontrolled mint/burn of LUNC.\n- **Virtual pools maintained.** `EndBlocker()` still invokes `ReplenishPools` to decay `TerraPoolDelta` back to equilibrium, preserving deterministic spread calculations.\n- **Oracle reward flow.** Oracle ballot rewards historically depended on swap spreads. Keeping the module intact ensures queries and simulations that expect spread values continue to work, even if no swap executes.\n\n## Parameters (`subspace`: `market`)\n\n| Name | Description | Default |\n| --- | --- | --- |\n| `BasePool` | Virtual Terra/Luna pool size (µSDR). | `1000000000000` (1,000,000 SDR) |\n| `PoolRecoveryPeriod` | Blocks needed for pools to recover toward equilibrium. | `14400` (≈1 day) |\n| `MinStabilitySpread` | Minimum spread imposed on swaps. | `0.02` (2%) |\n\nThe legacy `TobinTax` parameter used for Terra stablecoin swaps is set to `0` on Classic; tax logic has been moved to `x/tax`.\n\n## Queries and CLI\n\n- **Parameters:** `terrad q market params`\n- **Terra pool delta:** `terrad q market terra-pool-delta`\n\nThese calls are useful for analytics and backwards compatibility tooling.\n\n## Operational notes\n\n- Attempting `terrad tx market swap` on mainnet will fail because the keeper rejects swaps before coins move. This is due to the internal spread and tobin tax set to 100%.\n- Any future plan to re-enable algorithmic swaps would require a dedicated governance proposal, code updates, and careful parameter tuning.\n",
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
    "navOrder": 54,
    "title": "Mint module (x/mint)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-mint.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 55,
    "title": "Oracle module (x/oracle)",
    "description": "Terra Classic validators feed external exchange rates so that downstream modules (tax splits, analytics, historical tooling) continue to operate even...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-oracle.md",
    "sourceDate": "2026-05-27",
    "headings": [
      {
        "depth": 2,
        "title": "Classic behaviour",
        "id": "classic-behaviour"
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
    "body": "Terra Classic validators feed external exchange rates so that downstream modules (tax splits, analytics, historical tooling) continue to operate even though algorithmic swaps are disabled. This module enforces the familiar prevote/vote handshake with slashing to keep price data honest.\n\n## Classic behaviour\n\n- **Vote cadence.** `VotePeriod` is 30 seconds (5 blocks). Validators must broadcast aggregate prevotes in period _t_ and reveal votes in period _t+1_. Same-period vote+prevote combinations are rejected (`ErrRevealPeriodMissMatch`).\n- **Aggregate flow.** Classic primarily uses `MsgAggregateExchangeRatePrevote` and `MsgAggregateExchangeRateVote`, bundling all whitelist denoms in a single message hashed as `sha256(\"salt:rates:validator\")`.\n- **Whitelist management.** Parameter `Whitelist` tracks the allowed fiat denoms (e.g., `uusd`, `ukrw`). Governance can prune unused stablecoins; any denom missing sufficient voting power each period is temporarily removed from the on-chain store.\n- **Reference Terra logic.** Weighted medians are computed relative to the high-turnout denom (`ReferenceTerra`) and converted into cross rates for the rest. Results land in the keeper via `k.SetLunaExchangeRate()`.\n- **Reward funding.** Oracle reward pools receive their budget from `x/tax` splits. At each tally the module pays winners proportionally and decays the pool over `RewardDistributionWindow`.\n- **Miss counters & slashing.** Validators must keep a valid vote rate above `MinValidPerWindow` (5%) over the week-long `SlashWindow`. Offenders lose `SlashFraction` (0.01%) of stake and are jailed until unjailed manually.\n\n## Messages\n\n- **`MsgAggregateExchangeRatePrevote`** – commits the hash of all exchange rates for the next period (`hash = sha256(\"salt:rate1,rate2,...:validator\")`). Multiple prevotes per period overwrite previous hashes.\n- **`MsgAggregateExchangeRateVote`** – reveals the salt and comma-separated rate list. Each entry is formatted as `<amount><denom>` (e.g., `0.00012ukrw`).\n- **`MsgDelegateFeedConsent`** – assigns a feeder account to a validator. CLI workflows (and the Classic E2E tests) confirm delegation before proceeding.\n\n## State\n\n| Store key | Description |\n| --- | --- |\n| `Prevotes` (`map[valoper][denom]AggregatePrevote`) | Current-period hashes waiting for reveal. |\n| `Votes` (`map[valoper][denom]AggregateVote`) | Revealed votes kept until tally completes. |\n| `LunaExchangeRate` (`map[denom]sdk.Dec`) | Latest accepted exchange rate per denom. |\n| `FeederDelegations` (`map[valoper]acc`) | Delegated feeder accounts. |\n| `MissCounters` (`map[valoper]int64`) | Missed-vote counters over the active slash window. |\n\n## End-block workflow\n\n1. Check if the block height is a multiple of `VotePeriod`.\n2. Build ballots per denom from revealed votes, discarding abstentions or jailed validators.\n3. Drop ballots lacking quorum (`VoteThreshold`, 50% voting power) or missing from `Whitelist`.\n4. Select `ReferenceTerra`, compute cross rates, and derive weighted medians.\n5. Update on-chain exchange rates, reward ballot winners, and increment miss counters.\n6. When a `SlashWindow` ends, slash and jail validators whose valid-vote ratio fell below `MinValidPerWindow`.\n7. Clear prevotes and votes for the next cycle while keeping the latest hash commitments.\n\n## Parameters (`subspace`: `oracle`)\n\n| Name | Description | Classic default |\n| --- | --- | --- |\n| `VotePeriod` | Blocks per voting cycle. | `5` |\n| `VoteThreshold` | Minimum voting power required for a ballot. | `0.500000000000000000` |\n| `RewardBand` | Allowed deviation around the weighted median. | `0.020000000000000000` |\n| `RewardDistributionWindow` | Blocks used to pro-rate the reward pool. | `10512000` (`BlocksPerYear`) |\n| `Whitelist` | Allowed denoms and their Tobin taxes. | `[ukrw, usdr, uusd, umnt]` (governance may update) |\n| `SlashFraction` | Stake slashed on oracle failure. | `0.000100000000000000` |\n| `SlashWindow` | Block span for counting misses. | `604800` (`BlocksPerWeek`) |\n| `MinValidPerWindow` | Required successful vote ratio. | `0.050000000000000000` |\n\nGovernance proposals targeting the `oracle` subspace can adjust any of these values.\n\n## CLI shortcuts\n\n- **Submit aggregate vote:** `terrad tx oracle aggregate-vote <rates> <validator> --from <feeder>`\n- **Delegate feeder:** `terrad tx oracle delegate-feed-consent <validator> <feeder>`\n- **Inspect params:** `terrad q oracle params`\n- **Check current prices:** `terrad q oracle exchange-rates`\n\nEnsure feeders fund their accounts with enough ULUNA for fees. Classic tooling typically relies on endpoints such as `https://terra-classic-lcd.publicnode.com` or `https://api-lunc-lcd.binodes.com` when scripting.\n",
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
    "navOrder": 56,
    "title": "Params module (x/params)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-params.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 57,
    "title": "Slashing module (x/slashing)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-slashing.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 58,
    "title": "Staking module (x/staking)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-staking.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 59,
    "title": "Tax module (x/tax)",
    "description": "x/tax powers Terra Classic’s burn-tax and gas price floor. It intercepts fee payment, deducts the configured burn rate, and routes proceeds between...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-tax.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 60,
    "title": "Tax exemption module (x/taxexemption)",
    "description": "x/taxexemption lets Terra Classic governance define address “zones” that are exempt from the burn tax. Transactions remain taxable by default unless...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-taxexemption.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 61,
    "title": "Treasury module (x/treasury)",
    "description": "The Treasury module acts as the \"central bank\" of the Terra economy, measuring macroeconomic activity by observing indicators and adjusting monetary...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-treasury.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 62,
    "title": "IBC transfer module (x/transfer)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-transfer.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 63,
    "title": "Upgrade module (x/upgrade)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-upgrade.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 64,
    "title": "Vesting module (x/vesting)",
    "description": "Terra Classic documentation page pending editorial review.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-vesting.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 65,
    "title": "Wasm module (x/wasm)",
    "description": "The WASM module implements the execution environment for WebAssembly smart contracts, powered by CosmWasm.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/module-specifications/spec-wasm.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 66,
    "title": "Overview",
    "description": "Terra Classic full nodes replicate the entire blockchain. They expose LCD and RPC interfaces, relay gossip, and participate in consensus when...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/overview.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 67,
    "title": "System configuration",
    "description": "Running a full Terra node is a resource-intensive process that requires a persistent server. If you want to use the Terra Classic blockchain without...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/system-config.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 68,
    "title": "Build Terra core",
    "description": "Terra Classic core is the official implementation of the Terra Classic node software. Use this guide to install terrad, the command-line interface...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/build-terra-core.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 69,
    "title": "Configure general settings",
    "description": "├─ addrbook.json # Peer registry",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/configure-general-settings.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 70,
    "title": "Set up a production environment",
    "description": "Although terrad does not require a superuser account to run, you will need elevated privileges during installation. Create a dedicated system user...",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/set-up-production.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 71,
    "title": "Join a network",
    "description": "Provision the host and build terrad by following the Build Terra Core prerequisites bundled inside each validator playbook.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/join-a-network.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 72,
    "title": "Sync",
    "description": "Clear ~/.terra/data or use terrad tendermint unsafe-reset-all to remove historic blocks.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/sync.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 73,
    "title": "Validate on columbus-5",
    "description": "Linux server (Ubuntu or Debian recommended)",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/validator-columbus-5.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 74,
    "title": "Validate on rebel-2",
    "description": "Linux server (Ubuntu/Debian recommended)",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/validator-rebel-2.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 75,
    "title": "Reset and troubleshooting",
    "description": "Occasionally you may need to reset your node to resolve configuration drift or data corruption. The steps below describe common recovery tasks.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "full-node/run-a-full-terra-node/troubleshoot.md",
    "sourceDate": "2026-05-27",
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
    "navOrder": 76,
    "title": "Public Network Endpoints",
    "description": "Terra Classic chain ID: columbus-5.",
    "status": "draft",
    "reviewed": false,
    "sourceTitle": "Terra Classic Docs repository",
    "sourceSite": "https://terra-classic.io/docs",
    "sourceRepo": "https://github.com/terra-classic-io/website/tree/main/src/docs",
    "sourceCommit": "e305fbe051de9c218021cc3ff98e2e01db04f6dd",
    "sourcePath": "develop/endpoints.md",
    "sourceDate": "2026-05-27",
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
    "previousSlug": "develop/endpoints",
    "nextSlug": null
  }
] satisfies DocsPage[];
