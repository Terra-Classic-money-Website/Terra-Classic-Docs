import fs from "node:fs";
import path from "node:path";
import {
  contentDir,
  extractHeadings,
  generatedDir,
  normalizeDocHref,
  normalizeSlugFromRelative,
  pagePathFromSlug,
  parseMarkdownFile,
  walkMarkdown,
} from "./docs-utils.mjs";

const navSections = [
  {
    label: "Welcome",
    items: [
      { slug: "start", title: "Terra Classic Documentation" },
    ],
  },
  {
    label: "Run a Full Node",
    items: [
      {
        slug: "full-node/overview",
        title: "Overview",
        children: [
          "full-node/run-a-full-terra-node/system-config",
          "full-node/run-a-full-terra-node/build-terra-core",
          "full-node/run-a-full-terra-node/configure-general-settings",
          "full-node/run-a-full-terra-node/join-a-network",
          "full-node/run-a-full-terra-node/sync",
          "full-node/run-a-full-terra-node/set-up-production",
          "full-node/run-a-full-terra-node/troubleshoot",
          "full-node/run-a-full-terra-node/validator-columbus-5",
          "full-node/run-a-full-terra-node/validator-rebel-2",
        ],
      },
      { slug: "develop/endpoints", title: "Public Network Endpoints" },
    ],
  },
  {
    label: "Develop",
    items: [
      { slug: "develop/how-to/localnet/terra-core-localnet", title: "Run Terra Classic localnet" },
      { slug: "develop/classic-transaction-behavior", title: "Tx best practices" },
      {
        slug: "learn/builder-tooling",
        title: "Builder tooling",
        children: [
          "develop/cosmes/cosmes",
          "develop/cosmes/cosmes-getting-started",
          "develop/cosmes/cosmes-mnemonic-wallet",
          "develop/cosmes/cosmes-query-data",
          "develop/cosmes/cosmes-transactions",
          "develop/cosmes/cosmes-contracts",
          "develop/terra-py/terra-py",
        ],
      },
      {
        slug: "develop/smart-contracts/overview",
        title: "Smart contracts",
        children: [
          "develop/smart-contracts/set-up-local-environment",
          "develop/smart-contracts/write-smart-contract",
          "develop/smart-contracts/interact-with-smart-contract",
          "develop/smart-contracts/manage-cw20-tokens",
          "develop/smart-contracts/build-terra-dapp",
        ],
      },
      {
        slug: "develop/module-specifications/module-specifications",
        title: "Module specifications",
        children: [
          "develop/module-specifications/spec-auth",
          "develop/module-specifications/spec-authz",
          "develop/module-specifications/spec-bank",
          "develop/module-specifications/spec-capability",
          "develop/module-specifications/spec-consensus",
          "develop/module-specifications/spec-crisis",
          "develop/module-specifications/spec-distribution",
          "develop/module-specifications/spec-dyncomm",
          "develop/module-specifications/spec-evidence",
          "develop/module-specifications/spec-feegrant",
          "develop/module-specifications/spec-governance",
          "develop/module-specifications/spec-ibc",
          "develop/module-specifications/spec-ibc-fee",
          "develop/module-specifications/spec-ibc-hooks",
          "develop/module-specifications/spec-ica",
          "develop/module-specifications/spec-market",
          "develop/module-specifications/spec-mint",
          "develop/module-specifications/spec-oracle",
          "develop/module-specifications/spec-params",
          "develop/module-specifications/spec-slashing",
          "develop/module-specifications/spec-staking",
          "develop/module-specifications/spec-tax",
          "develop/module-specifications/spec-taxexemption",
          "develop/module-specifications/spec-transfer",
          "develop/module-specifications/spec-treasury",
          "develop/module-specifications/spec-upgrade",
          "develop/module-specifications/spec-vesting",
          "develop/module-specifications/spec-wasm",
        ],
      },
    ],
  },
  {
    label: "Learn Terra Classic",
    items: [
      { slug: "learn/overview", title: "Start here" },
      { slug: "learn/protocol", title: "Terra Classic protocol" },
      {
        slug: "learn/wallets",
        title: "Wallets",
        children: [
          "learn/keplr/keplr",
          "learn/keplr/keplr-install",
          "learn/keplr/keplr-wallet",
          "learn/keplr/keplr-send",
          "learn/keplr/keplr-staking",
          "learn/keplr/keplr-governance",
          "learn/keplr/keplr-testnet",
          "learn/galaxy-station/galaxy-station",
          "learn/galaxy-station/galaxy-station-install",
          "learn/galaxy-station/galaxy-station-wallet",
          "learn/galaxy-station/galaxy-station-send",
          "learn/galaxy-station/galaxy-station-staking",
          "learn/galaxy-station/galaxy-station-governance",
          "learn/galaxy-station/galaxy-station-testnet",
        ],
      },
      { slug: "learn/staking-and-governance", title: "Staking and governance" },
      { slug: "learn/fees", title: "Fees" },
      { slug: "learn/glossary", title: "Glossary" },
      { slug: "learn/assets", title: "Brand assets" },
    ],
  },
];

const childNavTitles = {
  "full-node/run-a-full-terra-node/system-config": "System configuration",
  "full-node/run-a-full-terra-node/build-terra-core": "Build Terra Core",
  "full-node/run-a-full-terra-node/configure-general-settings": "Configure general settings",
  "full-node/run-a-full-terra-node/join-a-network": "Join a network",
  "full-node/run-a-full-terra-node/sync": "Sync",
  "full-node/run-a-full-terra-node/set-up-production": "Set up production",
  "full-node/run-a-full-terra-node/troubleshoot": "Troubleshoot",
  "full-node/run-a-full-terra-node/validator-columbus-5": "Validator Columbus-5",
  "full-node/run-a-full-terra-node/validator-rebel-2": "Validator Rebel-2",
  "develop/cosmes/cosmes": "CosmES",
  "develop/cosmes/cosmes-getting-started": "CosmES getting started",
  "develop/cosmes/cosmes-mnemonic-wallet": "CosmES mnemonic wallet",
  "develop/cosmes/cosmes-query-data": "CosmES query data",
  "develop/cosmes/cosmes-transactions": "CosmES transactions",
  "develop/cosmes/cosmes-contracts": "CosmES contracts",
  "develop/terra-py/terra-py": "Terra.py",
  "develop/smart-contracts/set-up-local-environment": "Set up local environment",
  "develop/smart-contracts/write-smart-contract": "Write smart contract",
  "develop/smart-contracts/interact-with-smart-contract": "Interact with smart contract",
  "develop/smart-contracts/manage-cw20-tokens": "Manage CW20 tokens",
  "develop/smart-contracts/build-terra-dapp": "Build a Terra dApp",
  "develop/module-specifications/spec-auth": "Auth",
  "develop/module-specifications/spec-authz": "Authz",
  "develop/module-specifications/spec-bank": "Bank",
  "develop/module-specifications/spec-capability": "Capability",
  "develop/module-specifications/spec-consensus": "Consensus",
  "develop/module-specifications/spec-crisis": "Crisis",
  "develop/module-specifications/spec-distribution": "Distribution",
  "develop/module-specifications/spec-dyncomm": "Dyncomm",
  "develop/module-specifications/spec-evidence": "Evidence",
  "develop/module-specifications/spec-feegrant": "Feegrant",
  "develop/module-specifications/spec-governance": "Governance",
  "develop/module-specifications/spec-ibc": "IBC",
  "develop/module-specifications/spec-ibc-fee": "IBC fee",
  "develop/module-specifications/spec-ibc-hooks": "IBC hooks",
  "develop/module-specifications/spec-ica": "ICA",
  "develop/module-specifications/spec-market": "Market",
  "develop/module-specifications/spec-mint": "Mint",
  "develop/module-specifications/spec-oracle": "Oracle",
  "develop/module-specifications/spec-params": "Params",
  "develop/module-specifications/spec-slashing": "Slashing",
  "develop/module-specifications/spec-staking": "Staking",
  "develop/module-specifications/spec-tax": "Tax",
  "develop/module-specifications/spec-taxexemption": "Tax exemption",
  "develop/module-specifications/spec-transfer": "Transfer",
  "develop/module-specifications/spec-treasury": "Treasury",
  "develop/module-specifications/spec-upgrade": "Upgrade",
  "develop/module-specifications/spec-vesting": "Vesting",
  "develop/module-specifications/spec-wasm": "Wasm",
  "learn/keplr/keplr": "Keplr",
  "learn/keplr/keplr-install": "Keplr install",
  "learn/keplr/keplr-wallet": "Keplr wallet",
  "learn/keplr/keplr-send": "Keplr send",
  "learn/keplr/keplr-staking": "Keplr staking",
  "learn/keplr/keplr-governance": "Keplr governance",
  "learn/keplr/keplr-testnet": "Keplr testnet",
  "learn/galaxy-station/galaxy-station": "Galaxy Station",
  "learn/galaxy-station/galaxy-station-install": "Galaxy Station install",
  "learn/galaxy-station/galaxy-station-wallet": "Galaxy Station wallet",
  "learn/galaxy-station/galaxy-station-send": "Galaxy Station send",
  "learn/galaxy-station/galaxy-station-staking": "Galaxy Station staking",
  "learn/galaxy-station/galaxy-station-governance": "Galaxy Station governance",
  "learn/galaxy-station/galaxy-station-testnet": "Galaxy Station testnet",
};

const navMeta = new Map();
let navIndex = 0;

for (const section of navSections) {
  for (const item of section.items) {
    navMeta.set(item.slug, {
      group: section.label,
      navTitle: item.title,
      navDepth: 0,
      navParent: null,
      navHasChildren: Boolean(item.children?.length),
      navOrder: navIndex,
    });
    navIndex += 1;
    for (const childSlug of item.children ?? []) {
      navMeta.set(childSlug, {
        group: section.label,
        navTitle: childNavTitles[childSlug] ?? null,
        navDepth: 1,
        navParent: item.slug,
        navHasChildren: false,
        navOrder: navIndex,
      });
      navIndex += 1;
    }
  }
}

function sortPages(a, b) {
  if (a.navOrder !== b.navOrder) return a.navOrder - b.navOrder;
  return a.slug.localeCompare(b.slug);
}

const pages = walkMarkdown().map((filePath) => {
  const relativePath = path.relative(contentDir, filePath).replaceAll(path.sep, "/");
  const slug = normalizeSlugFromRelative(relativePath);
  const nav = navMeta.get(slug) ?? {
    group: "Reference",
    navTitle: null,
    navDepth: 0,
    navParent: null,
    navHasChildren: false,
    navOrder: 10_000,
  };
  const parsed = parseMarkdownFile(filePath);
  const body = parsed.body.replace(/\]\(([^)]+)\)/g, (match, href) => {
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return match;
    return `](${normalizeDocHref(href, slug)})`;
  });

  return {
    slug,
    path: pagePathFromSlug(slug),
    sourceFile: `content/docs/${relativePath}`,
    group: nav.group,
    navTitle: nav.navTitle ?? parsed.metadata.title,
    navDepth: nav.navDepth,
    navParent: nav.navParent,
    navHasChildren: nav.navHasChildren,
    navOrder: nav.navOrder,
    title: parsed.metadata.title,
    description: parsed.metadata.description,
    status: parsed.metadata.status,
    reviewed: parsed.metadata.reviewed === true,
    sourceTitle: parsed.metadata.sourceTitle,
    sourceSite: parsed.metadata.sourceSite,
    sourceRepo: parsed.metadata.sourceRepo,
    sourceCommit: parsed.metadata.sourceCommit,
    sourcePath: parsed.metadata.sourcePath,
    importedAt: parsed.metadata.importedAt,
    headings: extractHeadings(body),
    body,
  };
}).sort(sortPages);

for (let index = 0; index < pages.length; index += 1) {
  pages[index].previousSlug = pages[index - 1]?.slug ?? null;
  pages[index].nextSlug = pages[index + 1]?.slug ?? null;
}

const search = pages.map((page) => ({
  slug: page.slug,
  path: page.path,
  title: page.title,
  description: page.description,
  group: page.group,
  text: page.body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|[\]()]|\s+-\s+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 8000),
}));

fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(
  path.join(generatedDir, "docsManifest.ts"),
  `import type { DocsPage } from "../types";\n\nexport const docsPages = ${JSON.stringify(pages, null, 2)} satisfies DocsPage[];\n`,
);
fs.writeFileSync(
  path.join(generatedDir, "searchIndex.ts"),
  `import type { SearchEntry } from "../types";\n\nexport const searchIndex = ${JSON.stringify(search, null, 2)} satisfies SearchEntry[];\n`,
);

console.log(`Generated docs manifest for ${pages.length} pages.`);
