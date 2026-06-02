---
title: "IBC and interchain connectivity"
description: "What IBC means for Terra Classic, what it enables, what it does not guarantee, and how users and builders should verify routes."
status: reviewed
reviewed: true
sourceTitle: "Terra Classic PublicNode IBC endpoints and Map of Zones documentation"
sourceSite: "https://mapofzones.com"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "docs-remediation-2026-06-02"
sourcePath: "content/docs/learn/ibc-and-interchain.md"
sourceDate: "2026-06-02"
tocDepth: 2
---
Terra Classic is a Cosmos-family chain. Its mainnet chain ID is `columbus-5`, and it can participate in interchain asset routes through IBC when channels, clients, connections, relayers, endpoints, and destination-chain support are operational.

IBC is one of Terra Classic's useful technical strengths, but it should be explained with discipline. A channel existing on-chain is not the same thing as a reliable user route with liquidity, active relaying, wallet support, and clear recovery handling.

## What IBC enables

IBC can support:

- cross-chain token transfers
- interchain liquidity routes
- wallet flows that move assets between Cosmos chains
- builder integrations that query or route through known channels
- future product designs that need cross-chain collateral, liquidity, or settlement routes

For Terra Classic, IBC matters because it reduces isolation. LUNC, USTC, and other supported assets can potentially interact with the wider Cosmos environment instead of depending only on centralized exchange liquidity or local applications.

## What IBC does not guarantee

IBC does not guarantee:

- that a channel is active today
- that a relayer is currently processing packets
- that the destination chain supports the exact asset route
- that there is enough liquidity after the transfer
- that the wallet UI will explain the route correctly
- that a timed-out packet will be simple for an ordinary user to recover
- that an old channel should still be used

Users should not send assets across IBC only because a channel appears in a list.

## User checklist before an IBC transfer

Before sending:

1. Confirm Terra Classic mainnet is `columbus-5`.
2. Confirm the destination chain and destination address.
3. Confirm the wallet or bridge UI names the channel and route clearly.
4. Check that the route has recent activity through a live IBC tool.
5. Send a small test transfer before moving meaningful funds.
6. Keep enough LUNC for fees.
7. Save the transaction hash and route details.

If the transfer does not arrive, check packet status and timeout behavior before sending again.

## Builder checklist

Builders should treat IBC as operational infrastructure, not static configuration.

Before exposing an IBC route in production:

- query current channels, clients, and connections
- verify channel state is open
- verify relayer activity through recent packet movement
- handle pending, timeout, refund, and retry states explicitly
- avoid hardcoding a route without monitoring
- keep chain ID, channel ID, port ID, counterparty chain, and counterparty channel visible in diagnostics
- document what the user should do when a transfer stalls

Use [Current network status and parameters](/learn/current-network-status-and-parameters/) for current IBC counts, and use endpoint queries for exact route checks.

## External verification

[Map of Zones](https://mapofzones.com/home/columbus-5/overview?columnKey=ibcVolume&period=24h) is useful for live IBC network, channel, and activity views. Its documentation explains that it visualizes Cosmos SDK IBC networks by collecting public RPC data and parsing IBC token-transfer transactions.

Use Map of Zones as a live verification surface, not as static docs content. The docs should link to it, but not copy current volume or route values as permanent facts.

## Source and verification

Last verified: 2026-06-02

Primary verification paths:

- Terra Classic PublicNode LCD IBC endpoints
- Map of Zones Terra Classic view
- wallet or bridge route UI
- destination-chain explorer or IBC packet tooling

