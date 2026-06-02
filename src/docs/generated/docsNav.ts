import type { DocsNavBlueprintGroup } from "../types";

export const docsNavBlueprint = [
  {
    "label": "Learn Terra Classic",
    "items": [
      {
        "type": "page",
        "slug": "start",
        "children": []
      },
      {
        "type": "label",
        "id": "learn/basics",
        "title": "Basics",
        "children": [
          {
            "type": "page",
            "slug": "learn/protocol",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/strengths",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/what-terra-classic-is-not",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "learn/status-and-history",
        "title": "Status and history",
        "children": [
          {
            "type": "page",
            "slug": "learn/what-terra-classic-supports-today",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/current-network-status-and-parameters",
            "children": []
          },
          {
            "type": "page",
            "slug": "appendices/product-status-index",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/upgrade-history-after-may-2022",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/history-after-the-collapse",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "learn/assets-and-economics",
        "title": "Assets and economics",
        "children": [
          {
            "type": "page",
            "slug": "learn/lunc-and-ustc",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/burns-tax-and-supply",
            "children": []
          },
          {
            "type": "page",
            "slug": "learn/fees",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "learn/interchain",
        "title": "Interchain",
        "children": [
          {
            "type": "page",
            "slug": "learn/ibc-and-interchain",
            "children": []
          }
        ]
      },
      {
        "type": "page",
        "slug": "learn/wallets",
        "children": [
          {
            "type": "page",
            "slug": "learn/keplr/keplr",
            "children": [
              {
                "type": "page",
                "slug": "learn/keplr/keplr-install",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/keplr/keplr-wallet",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/keplr/keplr-send",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/keplr/keplr-staking",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/keplr/keplr-governance",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/keplr/keplr-testnet",
                "children": []
              }
            ]
          },
          {
            "type": "page",
            "slug": "learn/galaxy-station/galaxy-station",
            "children": [
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-install",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-wallet",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-send",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-staking",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-governance",
                "children": []
              },
              {
                "type": "page",
                "slug": "learn/galaxy-station/galaxy-station-testnet",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "L1 Protocols",
    "items": [
      {
        "type": "page",
        "slug": "staking-protocol/overview",
        "children": [
          {
            "type": "label",
            "id": "staking-protocol/use-staking-protocol",
            "title": "Use Staking Protocol",
            "children": [
              {
                "type": "page",
                "slug": "staking-protocol/how-it-works",
                "children": []
              },
              {
                "type": "page",
                "slug": "staking-protocol/delegate-lunc",
                "children": []
              },
              {
                "type": "page",
                "slug": "staking-protocol/rewards-and-apr",
                "children": []
              },
              {
                "type": "page",
                "slug": "staking-protocol/risks-and-unstaking",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "staking-protocol/validators",
            "title": "Validators",
            "children": [
              {
                "type": "page",
                "slug": "staking-protocol/choose-a-validator",
                "children": []
              },
              {
                "type": "page",
                "slug": "staking-protocol/validator-responsibilities",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "staking-protocol/technical-reference",
            "title": "Technical reference",
            "children": [
              {
                "type": "page",
                "slug": "staking-protocol/developer-reference",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "page",
        "slug": "swap-protocol/overview",
        "children": [
          {
            "type": "label",
            "id": "swap-protocol/status",
            "title": "Status",
            "children": [
              {
                "type": "page",
                "slug": "swap-protocol/governance-and-status",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/implementation-status",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "swap-protocol/understand-swap-protocol",
            "title": "Understand Swap Protocol",
            "children": [
              {
                "type": "page",
                "slug": "swap-protocol/how-it-works",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/swap-lunc-and-ustc",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "swap-protocol/economics-and-safety",
            "title": "Economics and safety",
            "children": [
              {
                "type": "page",
                "slug": "swap-protocol/fees-burns-and-liquidity",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/oracles-and-safety-controls",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/scenarios-and-examples",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/risks-and-limitations",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "swap-protocol/technical-reference",
            "title": "Technical reference",
            "children": [
              {
                "type": "page",
                "slug": "swap-protocol/validator-operations",
                "children": []
              },
              {
                "type": "page",
                "slug": "swap-protocol/developer-reference",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "page",
        "slug": "forex-protocol/overview",
        "children": [
          {
            "type": "label",
            "id": "forex-protocol/status-and-model",
            "title": "Status and model",
            "children": [
              {
                "type": "page",
                "slug": "forex-protocol/governance-and-status",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/implementation-status",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/launch-readiness",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/how-it-is-proposed-to-work",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "forex-protocol/collateral-and-safety",
            "title": "Collateral and safety",
            "children": [
              {
                "type": "page",
                "slug": "forex-protocol/collateral-and-stable-assets",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/fees-buybacks-and-liquidity",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/oracles-and-safety-controls",
                "children": []
              },
              {
                "type": "page",
                "slug": "forex-protocol/risks-and-open-questions",
                "children": []
              }
            ]
          },
          {
            "type": "label",
            "id": "forex-protocol/technical-reference",
            "title": "Technical reference",
            "children": [
              {
                "type": "page",
                "slug": "forex-protocol/developer-reference",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "label": "Governance",
    "items": [
      {
        "type": "page",
        "slug": "governance/overview",
        "children": []
      },
      {
        "type": "label",
        "id": "governance/understand-governance",
        "title": "Understand governance",
        "children": [
          {
            "type": "page",
            "slug": "governance/voting-power-and-delegation",
            "children": []
          },
          {
            "type": "page",
            "slug": "governance/proposal-lifecycle",
            "children": []
          },
          {
            "type": "page",
            "slug": "governance/vote-options",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "governance/use-governance",
        "title": "Use governance",
        "children": [
          {
            "type": "page",
            "slug": "governance/how-to-vote",
            "children": []
          },
          {
            "type": "page",
            "slug": "governance/how-to-evaluate-proposals",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "governance/accountability-and-risk",
        "title": "Accountability and risk",
        "children": [
          {
            "type": "page",
            "slug": "governance/validator-accountability",
            "children": []
          },
          {
            "type": "page",
            "slug": "governance/risks-and-safeguards",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "label": "For Institutions",
    "items": [
      {
        "type": "page",
        "slug": "institutions/overview",
        "children": []
      },
      {
        "type": "label",
        "id": "institutions/use-cases",
        "title": "Institutional use cases",
        "children": [
          {
            "type": "page",
            "slug": "institutions/multi-currency-suite",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/payment-gateway",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/requirements-and-contact",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "institutions/product-rails",
        "title": "Product rails",
        "children": [
          {
            "type": "page",
            "slug": "institutions/native-assets",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/native-swap-rails",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/collateralized-stable-assets",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "institutions/integration-and-risk",
        "title": "Integration and risk",
        "children": [
          {
            "type": "page",
            "slug": "institutions/integration-architecture",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/risk-and-due-diligence",
            "children": []
          },
          {
            "type": "page",
            "slug": "institutions/source-and-verification-guide",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "label": "Build & Operate",
    "items": [
      {
        "type": "label",
        "id": "build-operate/start-building",
        "title": "Start building",
        "children": [
          {
            "type": "page",
            "slug": "develop/quick-start-guide",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/current-vs-proposed-behavior",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/classic-transaction-behavior",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "build-operate/local-development",
        "title": "Local development",
        "children": [
          {
            "type": "page",
            "slug": "develop/how-to/localnet/terra-core-localnet",
            "children": []
          }
        ]
      },
      {
        "type": "page",
        "slug": "learn/builder-tooling",
        "children": [
          {
            "type": "page",
            "slug": "develop/cosmes/cosmes",
            "children": [
              {
                "type": "page",
                "slug": "develop/cosmes/cosmes-getting-started",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/cosmes/cosmes-query-data",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/cosmes/cosmes-mnemonic-wallet",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/cosmes/cosmes-transactions",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/cosmes/cosmes-contracts",
                "children": []
              }
            ]
          },
          {
            "type": "page",
            "slug": "develop/terra-py/terra-py",
            "children": []
          }
        ]
      },
      {
        "type": "page",
        "slug": "develop/smart-contracts/overview",
        "children": [
          {
            "type": "page",
            "slug": "develop/smart-contracts/build-terra-dapp",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/smart-contracts/set-up-local-environment",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/smart-contracts/write-smart-contract",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/smart-contracts/interact-with-smart-contract",
            "children": []
          },
          {
            "type": "page",
            "slug": "develop/smart-contracts/manage-cw20-tokens",
            "children": []
          }
        ]
      },
      {
        "type": "label",
        "id": "build-operate/protocol-reference",
        "title": "Protocol reference",
        "children": [
          {
            "type": "page",
            "slug": "develop/module-specifications/module-specifications",
            "children": [
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-auth",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-authz",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-bank",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-capability",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-consensus",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-crisis",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-distribution",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-dyncomm",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-evidence",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-feegrant",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-governance",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-ibc",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-ibc-fee",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-ibc-hooks",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-ica",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-market",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-mint",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-oracle",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-params",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-slashing",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-staking",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-tax",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-taxexemption",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-treasury",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-transfer",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-upgrade",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-vesting",
                "children": []
              },
              {
                "type": "page",
                "slug": "develop/module-specifications/spec-wasm",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "type": "label",
        "id": "build-operate/run-infrastructure",
        "title": "Run infrastructure",
        "children": [
          {
            "type": "page",
            "slug": "full-node/overview",
            "children": [
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/system-config",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/build-terra-core",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/configure-general-settings",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/set-up-production",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/join-a-network",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/sync",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/validator-columbus-5",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/validator-rebel-2",
                "children": []
              },
              {
                "type": "page",
                "slug": "full-node/run-a-full-terra-node/troubleshoot",
                "children": []
              }
            ]
          },
          {
            "type": "page",
            "slug": "develop/endpoints",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "label": "Appendices",
    "items": [
      {
        "type": "page",
        "slug": "appendices/glossary",
        "children": []
      },
      {
        "type": "page",
        "slug": "appendices/source-and-review-model",
        "children": []
      }
    ]
  }
] satisfies DocsNavBlueprintGroup[];
