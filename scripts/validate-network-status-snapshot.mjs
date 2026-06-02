import fs from "node:fs";
import path from "node:path";

const endpointBase = "https://terra-classic-lcd.publicnode.com";
const snapshotPath = path.join(process.cwd(), "src/docs/generated/terraClassicNetworkStatus.json");
const fetchTimeoutMs = 45_000;

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

    if (!response.ok) throw new Error(`${pathname} returned ${response.status}`);
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

function assertEqual(failures, label, snapshotValue, liveValue) {
  if (String(snapshotValue) !== String(liveValue)) {
    failures.push(`${label}: snapshot=${snapshotValue}, live=${liveValue}`);
  }
}

function assertLiveBlockIsCurrent(failures, snapshotHeight, liveHeight) {
  const snapshotNumber = Number(snapshotHeight);
  const liveNumber = Number(liveHeight);
  if (!Number.isFinite(snapshotNumber) || !Number.isFinite(liveNumber) || liveNumber < snapshotNumber) {
    failures.push(`latest block height: snapshot=${snapshotHeight}, live=${liveHeight}`);
  }
}

async function main() {
  if (!fs.existsSync(snapshotPath)) throw new Error(`Missing network snapshot: ${snapshotPath}`);

  const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
  const entries = await Promise.all(Object.entries(endpoints).map(async ([key, pathname]) => [key, await fetchJson(pathname)]));
  const live = Object.fromEntries(entries);
  const app = live.nodeInfo.application_version;
  const node = live.nodeInfo.default_node_info;
  const buildDeps = app.build_deps ?? [];
  const liveChannels = live.ibcChannels.channels ?? [];
  const liveConnections = live.ibcConnections.connections ?? [];
  const liveTaxParams = live.taxParams.params;
  const liveOracleParams = live.oracleParams.params;
  const failures = [];

  assertEqual(failures, "chain ID", snapshot.chain.chainId, node.network);
  assertEqual(failures, "core version", snapshot.chain.coreVersion, app.version);
  assertEqual(failures, "Cosmos SDK version", snapshot.chain.cosmosSdkVersion, pickVersion(buildDeps, "github.com/cosmos/cosmos-sdk"));
  assertEqual(failures, "CometBFT version", snapshot.chain.cometBftVersion, node.version);
  assertLiveBlockIsCurrent(failures, snapshot.chain.latestBlockHeight, live.latestBlock.block?.header?.height);
  assertEqual(failures, "burn tax rate", snapshot.parameters.tax.burnTaxRate, live.burnTaxRate.tax_rate);
  assertEqual(failures, "burn tax rate from params", snapshot.parameters.tax.taxParamsBurnTaxRate, liveTaxParams.burn_tax_rate);
  assertEqual(failures, "legacy treasury tax rate", snapshot.parameters.tax.treasuryTaxRate, live.treasuryTaxRate.tax_rate);
  assertEqual(failures, "LUNC gas price", snapshot.parameters.tax.gasPrices.find((price) => price.denom === "uluna")?.amount, liveTaxParams.gas_prices.find((price) => price.denom === "uluna")?.amount);
  assertEqual(failures, "tax cap count", snapshot.parameters.tax.taxCapCount, live.taxCaps.tax_caps?.length ?? 0);
  assertEqual(failures, "dyncomm cap", snapshot.parameters.dyncomm.cap, live.dyncommParams.params?.cap);
  assertEqual(failures, "staking max validators", snapshot.parameters.staking.max_validators, live.stakingParams.params?.max_validators);
  assertEqual(failures, "slashing double-sign fraction", snapshot.parameters.slashing.slash_fraction_double_sign, live.slashingParams.params?.slash_fraction_double_sign);
  assertEqual(failures, "governance voting period", snapshot.parameters.governance.voting_period, live.govParams.params?.voting_period);
  assertEqual(failures, "distribution community tax", snapshot.parameters.distribution.community_tax, live.distributionParams.params?.community_tax);
  assertEqual(failures, "mint denom", snapshot.parameters.mint.mint_denom, live.mintParams.params?.mint_denom);
  assertEqual(failures, "treasury burn tax split", snapshot.parameters.treasury.burn_tax_split, live.treasuryParams.params?.burn_tax_split);
  assertEqual(failures, "oracle whitelist count", snapshot.parameters.oracle.whitelistCount, liveOracleParams.whitelist?.length ?? 0);
  assertEqual(failures, "market base pool", snapshot.parameters.market.base_pool, live.marketParams.params?.base_pool);
  assertEqual(failures, "consensus max gas", snapshot.parameters.consensus.block?.max_gas, live.consensusParams.params?.block?.max_gas);
  assertEqual(failures, "IBC channel count", snapshot.ibc.channelCount, liveChannels.length);
  assertEqual(failures, "IBC open transfer channels", snapshot.ibc.openTransferChannels, liveChannels.filter((channel) => channel.port_id === "transfer" && channel.state === "STATE_OPEN").length);
  assertEqual(failures, "IBC connection count", snapshot.ibc.connectionCount, liveConnections.length);
  assertEqual(failures, "IBC client state count", snapshot.ibc.clientStateCount, live.ibcClientStates.client_states?.length ?? 0);

  for (const [state, count] of Object.entries(countByState(liveChannels))) {
    assertEqual(failures, `IBC channel state ${state}`, snapshot.ibc.channelStates[state] ?? 0, count);
  }

  if (failures.length > 0) {
    console.error("Network status snapshot validation failed:");
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }

  console.log("Network status snapshot matches live PublicNode values for checked fields.");
  console.log(`Burn tax rate: ${snapshot.parameters.tax.burnTaxRate}`);
  console.log(`Legacy treasury tax rate: ${snapshot.parameters.tax.treasuryTaxRate}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
