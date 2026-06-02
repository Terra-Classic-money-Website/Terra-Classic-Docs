import { useEffect, useMemo, useState } from "react";
import snapshot from "../../docs/generated/terraClassicNetworkStatus.json";

const endpointBase = "https://terra-classic-lcd.publicnode.com";

type JsonRecord = Record<string, unknown>;

type NetworkSnapshot = {
  generatedAt: string;
  source: {
    endpointBase: string;
  };
  freshness: {
    staleAfterHours: number;
  };
  chain: JsonRecord;
  parameters: {
    tax: {
      burnTaxRate: unknown;
      taxParamsBurnTaxRate: unknown;
      treasuryTaxRate: unknown;
      taxPolicy: JsonRecord | null;
      taxCapCount: number;
      selectedTaxCaps: JsonRecord[];
      gasPrices: JsonRecord[];
    };
    dyncomm: JsonRecord;
    staking: JsonRecord;
    slashing: JsonRecord;
    governance: JsonRecord;
    distribution: JsonRecord;
    mint: JsonRecord;
    oracle: JsonRecord;
    treasury: JsonRecord;
    market: JsonRecord;
    consensus: JsonRecord;
    cosmwasm: JsonRecord;
  };
  ibc: {
    channelCount: number;
    channelStates: Record<string, number>;
    openTransferChannels: number;
    connectionCount: number;
    connectionStates: Record<string, number>;
    clientStateCount: number;
  };
};

const initialSnapshot = snapshot as NetworkSnapshot;

async function getJson(pathname: string): Promise<JsonRecord> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 20_000);
  try {
    const response = await fetch(`${endpointBase}${pathname}`, { signal: controller.signal });
    if (!response.ok) throw new Error(`${pathname} returned ${response.status}`);
    return response.json() as Promise<JsonRecord>;
  } finally {
    window.clearTimeout(timeout);
  }
}

function asRecord(value: unknown): JsonRecord {
  return value && typeof value === "object" ? value as JsonRecord : {};
}

function asArray(value: unknown): JsonRecord[] {
  return Array.isArray(value) ? value.filter((item) => item && typeof item === "object") as JsonRecord[] : [];
}

function stringValue(value: unknown, fallback = "Unknown") {
  if (typeof value === "string" && value.length > 0) return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return fallback;
}

function countByState(items: JsonRecord[]) {
  return items.reduce<Record<string, number>>((counts, item) => {
    const state = stringValue(item.state, "UNKNOWN");
    counts[state] = (counts[state] ?? 0) + 1;
    return counts;
  }, {});
}

function getBuildDepVersion(deps: JsonRecord[], packageName: string) {
  return stringValue(deps.find((dep) => dep.path === packageName)?.version);
}

function compactGasPrices(prices: JsonRecord[]) {
  const selected = new Set(["uluna", "uusd", "ueur", "ukrw", "usdr"]);
  return prices.filter((price) => selected.has(stringValue(price.denom, "")));
}

function selectedModuleVersions(deps: JsonRecord[]) {
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
    version: getBuildDepVersion(deps, packageName),
  }));
}

async function fetchLiveSnapshot(previous: NetworkSnapshot): Promise<NetworkSnapshot> {
  const [
    nodeInfo,
    stakingParams,
    slashingParams,
    govParams,
    latestBlock,
    consensusParams,
    distributionParams,
    mintParams,
    oracleParams,
    treasuryParams,
    burnTaxRate,
    treasuryTaxRate,
    taxCaps,
    dyncommParams,
    taxParams,
    marketParams,
    ibcChannels,
    ibcConnections,
    ibcClientStates,
  ] = await Promise.all([
    getJson("/cosmos/base/tendermint/v1beta1/node_info"),
    getJson("/cosmos/staking/v1beta1/params"),
    getJson("/cosmos/slashing/v1beta1/params"),
    getJson("/cosmos/gov/v1/params/voting"),
    getJson("/cosmos/base/tendermint/v1beta1/blocks/latest"),
    getJson("/cosmos/consensus/v1/params"),
    getJson("/cosmos/distribution/v1beta1/params"),
    getJson("/cosmos/mint/v1beta1/params"),
    getJson("/terra/oracle/v1beta1/params"),
    getJson("/terra/treasury/v1beta1/params"),
    getJson("/terra/tax/v1beta1/burn_tax_rate"),
    getJson("/terra/treasury/v1beta1/tax_rate"),
    getJson("/terra/treasury/v1beta1/tax_caps"),
    getJson("/terra/dyncomm/v1beta1/params"),
    getJson("/terra/tax/v1beta1/params"),
    getJson("/terra/market/v1beta1/params"),
    getJson("/ibc/core/channel/v1/channels?pagination.limit=1000"),
    getJson("/ibc/core/connection/v1/connections?pagination.limit=1000"),
    getJson("/ibc/core/client/v1/client_states?pagination.limit=1000"),
  ]);

  const app = asRecord(nodeInfo.application_version);
  const node = asRecord(nodeInfo.default_node_info);
  const buildDeps = asArray(app.build_deps);
  const channels = asArray(ibcChannels.channels);
  const connections = asArray(ibcConnections.connections);

  return {
    ...previous,
    generatedAt: new Date().toISOString(),
    chain: {
      chainId: stringValue(node.network),
      nodeId: stringValue(node.default_node_id),
      nodeMoniker: stringValue(node.moniker),
      coreVersion: stringValue(app.version),
      appName: stringValue(app.app_name),
      gitCommit: stringValue(app.git_commit),
      cometBftVersion: stringValue(node.version),
      cosmosSdkVersion: getBuildDepVersion(buildDeps, "github.com/cosmos/cosmos-sdk"),
      goVersion: stringValue(app.go_version),
      buildTags: stringValue(app.build_tags),
      latestBlockHeight: stringValue(asRecord(asRecord(latestBlock.block).header).height),
      latestBlockTime: stringValue(asRecord(asRecord(latestBlock.block).header).time),
      moduleVersions: selectedModuleVersions(buildDeps),
    },
    parameters: {
      tax: {
        burnTaxRate: stringValue(burnTaxRate.tax_rate),
        taxParamsBurnTaxRate: stringValue(asRecord(taxParams.params).burn_tax_rate),
        treasuryTaxRate: stringValue(treasuryTaxRate.tax_rate),
        taxPolicy: asRecord(asRecord(treasuryParams.params).tax_policy),
        taxCapCount: asArray(taxCaps.tax_caps).length,
        selectedTaxCaps: asArray(taxCaps.tax_caps).filter((cap) => ["uluna", "uusd", "ueur", "usdr"].includes(stringValue(cap.denom, ""))),
        gasPrices: compactGasPrices(asArray(asRecord(taxParams.params).gas_prices)),
      },
      dyncomm: asRecord(dyncommParams.params),
      staking: asRecord(stakingParams.params),
      slashing: asRecord(slashingParams.params),
      governance: asRecord(govParams.params),
      distribution: asRecord(distributionParams.params),
      mint: asRecord(mintParams.params),
      oracle: {
        ...asRecord(oracleParams.params),
        whitelistCount: asArray(asRecord(oracleParams.params).whitelist).length,
      },
      treasury: asRecord(treasuryParams.params),
      market: asRecord(marketParams.params),
      consensus: asRecord(consensusParams.params),
      cosmwasm: {
        paramsEndpoint: "/cosmwasm/wasm/v1/params",
        paramsEndpointStatus: "not exposed by the current PublicNode LCD response",
        wasmdVersion: getBuildDepVersion(buildDeps, "github.com/CosmWasm/wasmd"),
        wasmVmVersion: getBuildDepVersion(buildDeps, "github.com/CosmWasm/wasmvm/v3"),
      },
    },
    ibc: {
      channelCount: channels.length,
      channelStates: countByState(channels),
      openTransferChannels: channels.filter((channel) => channel.port_id === "transfer" && channel.state === "STATE_OPEN").length,
      connectionCount: connections.length,
      connectionStates: countByState(connections),
      clientStateCount: asArray(ibcClientStates.client_states).length,
    },
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  }).format(new Date(value));
}

function formatDecimal(value: unknown) {
  const raw = stringValue(value, "");
  if (!raw) return "Unknown";
  const number = Number(raw);
  if (!Number.isFinite(number)) return raw;
  if (number === 0) return "0%";
  if (number > 0 && number <= 1) return `${(number * 100).toLocaleString("en", { maximumFractionDigits: 3 })}%`;
  return number.toLocaleString("en", { maximumFractionDigits: 6 });
}

function formatSeconds(value: unknown) {
  const raw = stringValue(value, "");
  const seconds = Number(raw.replace(/s$/, ""));
  if (!Number.isFinite(seconds)) return raw || "Unknown";
  const days = seconds / 86400;
  if (days >= 1) return `${days.toLocaleString("en", { maximumFractionDigits: 1 })} days`;
  const hours = seconds / 3600;
  if (hours >= 1) return `${hours.toLocaleString("en", { maximumFractionDigits: 1 })} hours`;
  return `${seconds.toLocaleString("en")} seconds`;
}

function microLunc(value: unknown) {
  const amount = Number(stringValue(value, "0"));
  if (!Number.isFinite(amount)) return stringValue(value);
  return `${(amount / 1_000_000).toLocaleString("en", { maximumFractionDigits: 2 })} LUNC`;
}

function moduleVersionRows(value: unknown): [string, string][] {
  return asArray(value).map((item) => [stringValue(item.label), stringValue(item.version)]);
}

function isStale(generatedAt: string, staleAfterHours: number) {
  return Date.now() - new Date(generatedAt).getTime() > staleAfterHours * 60 * 60 * 1000;
}

function KeyStat({ label, value, note }: { label: string; value: string; note: string }) {
  return (
    <div className="network-stat">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{note}</small>
    </div>
  );
}

function ParameterTable({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <section className="network-param-section">
      <h2>{title}</h2>
      <dl>
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function NetworkStatusPanel() {
  const [data, setData] = useState<NetworkSnapshot>(initialSnapshot);
  const [refreshState, setRefreshState] = useState<"snapshot" | "live" | "failed">("snapshot");

  useEffect(() => {
    let cancelled = false;
    fetchLiveSnapshot(initialSnapshot)
      .then((live) => {
        if (!cancelled) {
          setData(live);
          setRefreshState("live");
        }
      })
      .catch(() => {
        if (!cancelled) setRefreshState("failed");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const stale = useMemo(() => isStale(data.generatedAt, data.freshness.staleAfterHours), [data]);
  const statusLabel = refreshState === "live" ? "Live refresh" : stale ? "Stale snapshot" : "Snapshot";

  return (
    <section className="network-status-panel" aria-label="Terra Classic network status">
      <div className="network-status-heading">
        <div>
          <p className="network-status-kicker">PublicNode data</p>
          <h2>Current chain parameters</h2>
          <p>Values are fetched from Terra Classic PublicNode LCD endpoints. They are operational data, not analytics, rankings, market data, or validator scoring.</p>
        </div>
        <div className={`network-status-pill network-status-pill--${refreshState === "failed" || stale ? "warning" : "ok"}`}>
          <span>{statusLabel}</span>
          <strong>{formatDate(data.generatedAt)}</strong>
        </div>
      </div>

      <div className="network-stat-grid">
        <KeyStat label="Chain ID" value={stringValue(data.chain.chainId)} note="Mainnet network identifier" />
        <KeyStat label="Core version" value={stringValue(data.chain.coreVersion)} note="Node-reported terrad release" />
        <KeyStat label="Cosmos SDK" value={stringValue(data.chain.cosmosSdkVersion)} note="Dependency version" />
        <KeyStat label="CometBFT" value={stringValue(data.chain.cometBftVersion)} note="Node-reported consensus version" />
      </div>

      <div className="network-param-grid">
        <ParameterTable
          title="Chain and software"
          rows={[
            ["App", stringValue(data.chain.appName)],
            ["Latest block height", stringValue(data.chain.latestBlockHeight)],
            ["Latest block time", stringValue(data.chain.latestBlockTime)],
            ["Git commit", stringValue(data.chain.gitCommit)],
            ["Go version", stringValue(data.chain.goVersion)],
            ["Build tags", stringValue(data.chain.buildTags)],
          ]}
        />
        <ParameterTable
          title="Module versions"
          rows={[
            ...moduleVersionRows(data.chain.moduleVersions),
            ["CosmWasm params", stringValue(data.parameters.cosmwasm.paramsEndpointStatus)],
          ]}
        />
        <ParameterTable
          title="Tax, gas, and dyncomm"
          rows={[
            ["Burn tax rate", formatDecimal(data.parameters.tax.burnTaxRate)],
            ["Burn tax in tax params", formatDecimal(data.parameters.tax.taxParamsBurnTaxRate)],
            ["Legacy treasury tax rate", formatDecimal(data.parameters.tax.treasuryTaxRate)],
            ["Tax cap denoms", String(data.parameters.tax.taxCapCount)],
            ["LUNC gas price", `${stringValue(data.parameters.tax.gasPrices.find((price) => price.denom === "uluna")?.amount)} uluna`],
            ["Block max gas", stringValue(asRecord(data.parameters.consensus.block).max_gas)],
            ["Block max bytes", stringValue(asRecord(data.parameters.consensus.block).max_bytes)],
            ["Dyncomm cap", formatDecimal(data.parameters.dyncomm.cap)],
            ["Dyncomm max zero", formatDecimal(data.parameters.dyncomm.max_zero)],
            ["Burn tax split", formatDecimal(data.parameters.treasury.burn_tax_split)],
            ["Oracle split", formatDecimal(data.parameters.treasury.oracle_split)],
          ]}
        />
        <ParameterTable
          title="Staking and slashing"
          rows={[
            ["Bond denom", stringValue(data.parameters.staking.bond_denom)],
            ["Max validators", stringValue(data.parameters.staking.max_validators)],
            ["Unbonding time", formatSeconds(data.parameters.staking.unbonding_time)],
            ["Min commission", formatDecimal(data.parameters.staking.min_commission_rate)],
            ["Downtime jail", formatSeconds(data.parameters.slashing.downtime_jail_duration)],
            ["Double-sign slash", formatDecimal(data.parameters.slashing.slash_fraction_double_sign)],
          ]}
        />
        <ParameterTable
          title="Governance"
          rows={[
            ["Min deposit", microLunc(asArray(data.parameters.governance.min_deposit)[0]?.amount)],
            ["Deposit period", formatSeconds(data.parameters.governance.max_deposit_period)],
            ["Voting period", formatSeconds(data.parameters.governance.voting_period)],
            ["Quorum", formatDecimal(data.parameters.governance.quorum)],
            ["Threshold", formatDecimal(data.parameters.governance.threshold)],
            ["Veto threshold", formatDecimal(data.parameters.governance.veto_threshold)],
          ]}
        />
        <ParameterTable
          title="Supply and rewards"
          rows={[
            ["Mint denom", stringValue(data.parameters.mint.mint_denom)],
            ["Inflation max", formatDecimal(data.parameters.mint.inflation_max)],
            ["Goal bonded", formatDecimal(data.parameters.mint.goal_bonded)],
            ["Community tax", formatDecimal(data.parameters.distribution.community_tax)],
            ["Withdraw address enabled", stringValue(data.parameters.distribution.withdraw_addr_enabled)],
          ]}
        />
        <ParameterTable
          title="Oracle and market"
          rows={[
            ["Oracle vote period", `${stringValue(data.parameters.oracle.vote_period)} blocks`],
            ["Oracle vote threshold", formatDecimal(data.parameters.oracle.vote_threshold)],
            ["Oracle reward band", formatDecimal(data.parameters.oracle.reward_band)],
            ["Oracle whitelist denoms", stringValue(data.parameters.oracle.whitelistCount)],
            ["Market base pool", stringValue(data.parameters.market.base_pool)],
            ["Pool recovery period", stringValue(data.parameters.market.pool_recovery_period)],
            ["Min stability spread", formatDecimal(data.parameters.market.min_stability_spread)],
          ]}
        />
        <ParameterTable
          title="IBC"
          rows={[
            ["Channels", String(data.ibc.channelCount)],
            ["Open transfer channels", String(data.ibc.openTransferChannels)],
            ["Connections", String(data.ibc.connectionCount)],
            ["Client states", String(data.ibc.clientStateCount)],
            ["Open channel state", String(data.ibc.channelStates.STATE_OPEN ?? 0)],
          ]}
        />
      </div>

      <div className="network-status-footer">
        <p>Source endpoint: <a href={data.source.endpointBase} target="_blank" rel="noopener noreferrer">{data.source.endpointBase}</a></p>
        <p>If the live refresh fails, the page shows the most recent generated snapshot. Treat old snapshots as stale and verify directly before operational decisions.</p>
      </div>
    </section>
  );
}
