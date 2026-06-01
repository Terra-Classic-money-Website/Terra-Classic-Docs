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
    label: "Learn Terra Classic",
    items: [
      { slug: "learn/protocol", title: "About Terra Classic" },
      {
        slug: "learn/wallets",
        title: "Wallets",
        children: [
          {
            slug: "learn/keplr/keplr",
            title: "Keplr",
            children: [
              { slug: "learn/keplr/keplr-install", title: "Keplr install" },
              { slug: "learn/keplr/keplr-wallet", title: "Keplr wallet" },
              { slug: "learn/keplr/keplr-send", title: "Keplr send" },
              { slug: "learn/keplr/keplr-staking", title: "Keplr staking" },
              { slug: "learn/keplr/keplr-governance", title: "Keplr governance" },
              { slug: "learn/keplr/keplr-testnet", title: "Keplr testnet" },
            ],
          },
          {
            slug: "learn/galaxy-station/galaxy-station",
            title: "Galaxy Station",
            children: [
              { slug: "learn/galaxy-station/galaxy-station-install", title: "Galaxy Station install" },
              { slug: "learn/galaxy-station/galaxy-station-wallet", title: "Galaxy Station wallet" },
              { slug: "learn/galaxy-station/galaxy-station-send", title: "Galaxy Station send" },
              { slug: "learn/galaxy-station/galaxy-station-staking", title: "Galaxy Station staking" },
              { slug: "learn/galaxy-station/galaxy-station-governance", title: "Galaxy Station governance" },
              { slug: "learn/galaxy-station/galaxy-station-testnet", title: "Galaxy Station testnet" },
            ],
          },
        ],
      },
      { slug: "learn/fees", title: "Fees" },
    ],
  },
  {
    label: "Staking Protocol",
    items: [
      { slug: "staking-protocol/overview", title: "Staking Protocol" },
      { slug: "staking-protocol/how-it-works", title: "How it works" },
      { slug: "staking-protocol/delegate-lunc", title: "Delegate LUNC" },
      { slug: "staking-protocol/rewards-and-apr", title: "Rewards and APR" },
      { slug: "staking-protocol/choose-a-validator", title: "Choose a validator" },
      { slug: "staking-protocol/risks-and-unstaking", title: "Risks and unstaking" },
      { slug: "staking-protocol/governance", title: "Governance" },
      { slug: "staking-protocol/validator-responsibilities", title: "Validator responsibilities" },
      { slug: "staking-protocol/developer-reference", title: "Developer reference" },
    ],
  },
  {
    label: "Swap Protocol",
    items: [
      { slug: "swap-protocol/overview", title: "Swap Protocol" },
      { slug: "swap-protocol/how-it-works", title: "How it works" },
      { slug: "swap-protocol/swap-lunc-and-ustc", title: "Swap LUNC and USTC" },
      { slug: "swap-protocol/fees-burns-and-liquidity", title: "Fees, burns, and liquidity" },
      { slug: "swap-protocol/oracles-and-safety-controls", title: "Oracles and safety controls" },
      { slug: "swap-protocol/scenarios-and-examples", title: "Scenarios and examples" },
      { slug: "swap-protocol/risks-and-limitations", title: "Risks and limitations" },
      { slug: "swap-protocol/validator-operations", title: "Validator operations" },
      { slug: "swap-protocol/developer-reference", title: "Developer reference" },
    ],
  },
  {
    label: "Develop",
    items: [
      { slug: "develop/quick-start-guide", title: "Quick start guide" },
      { slug: "develop/how-to/localnet/terra-core-localnet", title: "Run Terra Classic localnet" },
      { slug: "develop/classic-transaction-behavior", title: "Tx best practices" },
      {
        slug: "learn/builder-tooling",
        title: "Builder tooling",
        children: [
          {
            slug: "develop/cosmes/cosmes",
            title: "CosmES SDK",
            children: [
              { slug: "develop/cosmes/cosmes-getting-started", title: "Get started" },
              { slug: "develop/cosmes/cosmes-query-data", title: "Query data" },
              { slug: "develop/cosmes/cosmes-mnemonic-wallet", title: "Programmatic wallet" },
              { slug: "develop/cosmes/cosmes-transactions", title: "Transactions" },
            ],
          },
          { slug: "develop/terra-py/terra-py", title: "Terra.py on Terra Classic" },
        ],
      },
      {
        slug: "develop/smart-contracts/overview",
        title: "Smart contracts",
        children: [
          { slug: "develop/smart-contracts/build-terra-dapp", title: "Build a Terra Classic dApp" },
          { slug: "develop/smart-contracts/set-up-local-environment", title: "Set up local environment" },
          { slug: "develop/smart-contracts/write-smart-contract", title: "Write smart contract" },
          { slug: "develop/smart-contracts/interact-with-smart-contract", title: "Interact with contracts" },
          { slug: "develop/smart-contracts/manage-cw20-tokens", title: "Manage CW20 tokens" },
        ],
      },
      {
        slug: "develop/module-specifications/module-specifications",
        title: "Module specifications",
        children: [
          { slug: "develop/module-specifications/spec-auth", title: "Auth module (x/auth)" },
          { slug: "develop/module-specifications/spec-authz", title: "Authz module (x/authz)" },
          { slug: "develop/module-specifications/spec-bank", title: "Bank module (x/bank)" },
          { slug: "develop/module-specifications/spec-capability", title: "Capability module (x/capability)" },
          { slug: "develop/module-specifications/spec-consensus", title: "Consensus params module (x/consensus)" },
          { slug: "develop/module-specifications/spec-crisis", title: "Crisis module (x/crisis)" },
          { slug: "develop/module-specifications/spec-distribution", title: "Distribution module (x/distribution)" },
          { slug: "develop/module-specifications/spec-dyncomm", title: "DynComm module (x/dyncomm)" },
          { slug: "develop/module-specifications/spec-evidence", title: "Evidence module (x/evidence)" },
          { slug: "develop/module-specifications/spec-feegrant", title: "Feegrant module (x/feegrant)" },
          { slug: "develop/module-specifications/spec-governance", title: "Governance module (x/gov)" },
          { slug: "develop/module-specifications/spec-ibc", title: "IBC core module (x/ibc)" },
          { slug: "develop/module-specifications/spec-ibc-fee", title: "IBC fee module (x/ibc-fee)" },
          { slug: "develop/module-specifications/spec-ibc-hooks", title: "IBC hooks module (ibc-hooks)" },
          { slug: "develop/module-specifications/spec-ica", title: "Interchain accounts module (x/ica)" },
          { slug: "develop/module-specifications/spec-market", title: "Market module (x/market)" },
          { slug: "develop/module-specifications/spec-mint", title: "Mint module (x/mint)" },
          { slug: "develop/module-specifications/spec-oracle", title: "Oracle module (x/oracle)" },
          { slug: "develop/module-specifications/spec-params", title: "Params module (x/params)" },
          { slug: "develop/module-specifications/spec-slashing", title: "Slashing module (x/slashing)" },
          { slug: "develop/module-specifications/spec-staking", title: "Staking module (x/staking)" },
          { slug: "develop/module-specifications/spec-tax", title: "Tax module (x/tax)" },
          { slug: "develop/module-specifications/spec-taxexemption", title: "Tax exemption module (x/taxexemption)" },
          { slug: "develop/module-specifications/spec-treasury", title: "Treasury module (x/treasury)" },
          { slug: "develop/module-specifications/spec-transfer", title: "IBC transfer module (x/transfer)" },
          { slug: "develop/module-specifications/spec-upgrade", title: "Upgrade module (x/upgrade)" },
          { slug: "develop/module-specifications/spec-vesting", title: "Vesting module (x/vesting)" },
          { slug: "develop/module-specifications/spec-wasm", title: "Wasm module (x/wasm)" },
        ],
      },
    ],
  },
  {
    label: "Run a Full Node",
    items: [
      {
        slug: "full-node/overview",
        title: "Overview",
        children: [
          { slug: "full-node/run-a-full-terra-node/system-config", title: "System configuration" },
          { slug: "full-node/run-a-full-terra-node/build-terra-core", title: "Build Terra core" },
          { slug: "full-node/run-a-full-terra-node/configure-general-settings", title: "Configure general settings" },
          { slug: "full-node/run-a-full-terra-node/set-up-production", title: "Set up a production environment" },
          { slug: "full-node/run-a-full-terra-node/join-a-network", title: "Join a network" },
          { slug: "full-node/run-a-full-terra-node/sync", title: "Sync" },
          { slug: "full-node/run-a-full-terra-node/validator-columbus-5", title: "Validate on columbus-5" },
          { slug: "full-node/run-a-full-terra-node/validator-rebel-2", title: "Validate on rebel-2" },
          { slug: "full-node/run-a-full-terra-node/troubleshoot", title: "Reset and troubleshooting" },
        ],
      },
      { slug: "develop/endpoints", title: "Public Network Endpoints" },
    ],
  },
  {
    label: "Appendices",
    items: [
      { slug: "appendices/glossary", title: "Glossary" },
    ],
  },
];

const navMeta = new Map();
let navIndex = 0;

function registerNavItem(section, item, depth = 0, parentSlug = null) {
  const children = item.children ?? [];
  navMeta.set(item.slug, {
    group: section.label,
    navTitle: item.title,
    navDepth: depth,
    navParent: parentSlug,
    navHasChildren: children.length > 0,
    navOrder: navIndex,
  });
  navIndex += 1;

  for (const child of children) {
    const childItem = typeof child === "string" ? { slug: child, title: null } : child;
    registerNavItem(section, childItem, depth + 1, item.slug);
  }
}

for (const section of navSections) {
  for (const item of section.items) {
    registerNavItem(section, item);
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
    title: nav.navTitle ?? parsed.metadata.title,
    description: parsed.metadata.description,
    status: parsed.metadata.status,
    reviewed: parsed.metadata.reviewed === true,
    sourceTitle: parsed.metadata.sourceTitle,
    sourceSite: parsed.metadata.sourceSite,
    sourceRepo: parsed.metadata.sourceRepo,
    sourceCommit: parsed.metadata.sourceCommit,
    sourcePath: parsed.metadata.sourcePath,
    sourceDate: parsed.metadata.sourceDate,
    tocDepth: parsed.metadata.tocDepth ? Number(parsed.metadata.tocDepth) : null,
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
