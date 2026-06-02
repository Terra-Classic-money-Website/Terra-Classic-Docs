import fs from "node:fs";
import path from "node:path";

const endpointBase = "https://terra-classic-lcd.publicnode.com";
const outputPath = path.join(process.cwd(), "src/docs/generated/terraClassicNetworkStatus.json");
const fetchTimeoutMs = 45_000;

class SnapshotIntegrityError extends Error {
  constructor(message) {
    super(message);
    this.name = "SnapshotIntegrityError";
  }
}

const endpoints = {
  nodeInfo: "/cosmos/base/tendermint/v1beta1/node_info",
  latestBlock: "/cosmos/base/tendermint/v1beta1/blocks/latest",
  consensusParams: "/cosmos/consensus/v1/params",
  stakingParams: "/cosmos/staking/v1beta1/params",
  slashingParams: "/cosmos/slashing/v1beta1/params",
  govParams: "/cosmos/gov/v1/params/voting",
  distributionParams: "/cosmos/distribution/v1beta1/params",
  mintParams: "/cosmos/mint/v1beta1/params",
  oracleParams: "/terra/oracle/v1beta1/params",
  treasuryParams: "/terra/treasury/v1beta1/params",
  burnTaxRate: "/terra/tax/v1beta1/burn_tax_rate",
  treasuryTaxRate: "/terra/treasury/v1beta1/tax_rate",
  taxCaps: "/terra/treasury/v1beta1/tax_caps",
  dyncommParams: "/terra/dyncomm/v1beta1/params",
  taxParams: "/terra/tax/v1beta1/params",
  marketParams: "/terra/market/v1beta1/params",
  ibcChannels: "/ibc/core/channel/v1/channels?pagination.limit=1000",
  ibcConnections: "/ibc/core/connection/v1/connections?pagination.limit=1000",
  ibcClientStates: "/ibc/core/client/v1/client_states?pagination.limit=1000",
};

function readExistingSnapshot() {
  if (!fs.existsSync(outputPath)) return null;
  return JSON.parse(fs.readFileSync(outputPath, "utf8"));
}

async function fetchJson(pathname) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), fetchTimeoutMs);
  try {
    const response = await fetch(`${endpointBase}${pathname}`, {
      signal: controller.signal,
      headers: {
        "User-Agent": "TerraClassicDocs/1.0",
      },
    });

    if (!response.ok) {
      throw new Error(`${pathname} returned ${response.status}`);
    }

    return response.json();
  } catch (error) {
    const reason = error.name === "AbortError" ? `timed out after ${fetchTimeoutMs / 1000} seconds` : error.message;
    throw new Error(`${pathname} ${reason}`);
  } finally {
    clearTimeout(timeout);
  }
}

function pickVersion(deps, packageName) {
  return deps?.find((dep) => dep.path === packageName)?.version ?? "Unknown";
}

function countByState(items) {
  return (items ?? []).reduce((counts, item) => {
    const state = item.state ?? "UNKNOWN";
    counts[state] = (counts[state] ?? 0) + 1;
    return counts;
  }, {});
}

function compactGasPrices(prices) {
  const selected = new Set(["uluna", "uusd", "ueur", "ukrw", "usdr"]);
  return (prices ?? []).filter((price) => selected.has(price.denom));
}

function selectedModuleVersions(deps) {
  const selected = [
    ["Cosmos SDK", "github.com/cosmos/cosmos-sdk"],
    ["CometBFT dependency", "github.com/cometbft/cometbft"],
    ["IBC-Go", "github.com/cosmos/ibc-go/v10"],
    ["IBC hooks", "github.com/cosmos/ibc-apps/modules/ibc-hooks/v10"],
    ["Wasmd", "github.com/CosmWasm/wasmd"],
    ["WasmVM", "github.com/CosmWasm/wasmvm/v3"],
  ];

  return selected.map(([label, packageName]) => ({
    label,
    packageName,
    version: pickVersion(deps, packageName),
  }));
}

function buildSnapshot(responses, previous = null) {
  const app = responses.nodeInfo.application_version;
  const node = responses.nodeInfo.default_node_info;
  const buildDeps = app.build_deps ?? [];

  return {
    generatedAt: new Date().toISOString(),
    source: {
      name: "Terra Classic PublicNode LCD",
      endpointBase,
      endpoints,
    },
    freshness: {
      staleAfterHours: 30,
      previousGeneratedAt: previous?.generatedAt ?? null,
    },
    chain: {
      chainId: node.network,
      nodeId: node.default_node_id,
      nodeMoniker: node.moniker,
      coreVersion: app.version,
      appName: app.app_name,
      gitCommit: app.git_commit,
      cometBftVersion: node.version,
      cosmosSdkVersion: pickVersion(buildDeps, "github.com/cosmos/cosmos-sdk"),
      goVersion: app.go_version,
      buildTags: app.build_tags,
      latestBlockHeight: responses.latestBlock.block?.header?.height ?? "Unknown",
      latestBlockTime: responses.latestBlock.block?.header?.time ?? "Unknown",
      moduleVersions: selectedModuleVersions(buildDeps),
    },
    parameters: {
      tax: {
        burnTaxRate: responses.burnTaxRate.tax_rate,
        taxParamsBurnTaxRate: responses.taxParams.params?.burn_tax_rate ?? null,
        treasuryTaxRate: responses.treasuryTaxRate.tax_rate,
        taxPolicy: responses.treasuryParams.params?.tax_policy ?? null,
        taxCapCount: responses.taxCaps.tax_caps?.length ?? 0,
        selectedTaxCaps: (responses.taxCaps.tax_caps ?? []).filter((cap) => ["uluna", "uusd", "ueur", "usdr"].includes(cap.denom)),
        gasPrices: compactGasPrices(responses.taxParams.params?.gas_prices),
      },
      dyncomm: responses.dyncommParams.params,
      staking: responses.stakingParams.params,
      slashing: responses.slashingParams.params,
      governance: responses.govParams.params,
      distribution: responses.distributionParams.params,
      mint: responses.mintParams.params,
      oracle: {
        ...responses.oracleParams.params,
        whitelistCount: responses.oracleParams.params?.whitelist?.length ?? 0,
      },
      treasury: responses.treasuryParams.params,
      market: responses.marketParams.params,
      consensus: responses.consensusParams.params,
      cosmwasm: {
        paramsEndpoint: "/cosmwasm/wasm/v1/params",
        paramsEndpointStatus: "not exposed by the current PublicNode LCD response",
        wasmdVersion: pickVersion(buildDeps, "github.com/CosmWasm/wasmd"),
        wasmVmVersion: pickVersion(buildDeps, "github.com/CosmWasm/wasmvm/v3"),
      },
    },
    ibc: {
      channelCount: responses.ibcChannels.channels?.length ?? 0,
      channelStates: countByState(responses.ibcChannels.channels),
      openTransferChannels: (responses.ibcChannels.channels ?? []).filter((channel) => channel.port_id === "transfer" && channel.state === "STATE_OPEN").length,
      connectionCount: responses.ibcConnections.connections?.length ?? 0,
      connectionStates: countByState(responses.ibcConnections.connections),
      clientStateCount: responses.ibcClientStates.client_states?.length ?? 0,
    },
  };
}

function assertSnapshotIntegrity(snapshot) {
  const failures = [];
  const burnTaxRate = snapshot.parameters.tax.burnTaxRate;
  const taxParamsBurnTaxRate = snapshot.parameters.tax.taxParamsBurnTaxRate;
  const luncGasPrice = snapshot.parameters.tax.gasPrices.find((price) => price.denom === "uluna")?.amount;

  if (snapshot.chain.chainId !== "columbus-5") failures.push(`unexpected chain ID: ${snapshot.chain.chainId}`);
  if (!snapshot.chain.coreVersion) failures.push("missing core version");
  if (!snapshot.chain.latestBlockHeight || snapshot.chain.latestBlockHeight === "Unknown") failures.push("missing latest block height");
  if (!burnTaxRate) failures.push("missing burn tax rate");
  if (!taxParamsBurnTaxRate) failures.push("missing burn tax rate from tax params");
  if (burnTaxRate && taxParamsBurnTaxRate && burnTaxRate !== taxParamsBurnTaxRate) {
    failures.push(`burn tax mismatch: burn_tax_rate=${burnTaxRate}, tax params=${taxParamsBurnTaxRate}`);
  }
  if (!luncGasPrice) failures.push("missing uluna gas price");
  if (!Number.isInteger(snapshot.ibc.channelCount)) failures.push("IBC channel count is not an integer");

  if (failures.length > 0) {
    throw new SnapshotIntegrityError(failures.join("; "));
  }
}

async function main() {
  const previous = readExistingSnapshot();

  try {
    const entries = await Promise.all(Object.entries(endpoints).map(async ([key, pathname]) => [key, await fetchJson(pathname)]));
    const snapshot = buildSnapshot(Object.fromEntries(entries), previous);
    assertSnapshotIntegrity(snapshot);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, `${JSON.stringify(snapshot, null, 2)}\n`);
    console.log(`Wrote Terra Classic network snapshot: ${outputPath}`);
    console.log(`Verified burn tax rate: ${snapshot.parameters.tax.burnTaxRate}`);
  } catch (error) {
    if (error instanceof SnapshotIntegrityError) throw error;
    if (!previous) throw error;
    console.warn(`PublicNode snapshot refresh failed, keeping existing snapshot: ${error.message}`);
  }
}

main();
