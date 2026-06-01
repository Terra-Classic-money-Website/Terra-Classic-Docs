---
title: "Native assets"
description: "How institutions should understand LUNC, USTC, EUTC, and the planned Terra Classic multi-currency asset suite."
status: draft
reviewed: false
sourceTitle: "Terra Classic native assets and Forex Protocol source material"
sourceSite: "https://terra-classic.money/"
sourceRepo: "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs/blob/main"
sourceCommit: "institutions-section-2026-06-01"
sourcePath: "content/docs/institutions/native-assets.md"
sourceDate: "2026-06-01"
tocDepth: 3
---
Terra Classic native assets should be understood by status, not only by symbol.

An asset symbol on a website or roadmap is not the same thing as a live, liquid, collateralized, redeemable, institution-ready asset.

## Status categories

Use these categories when evaluating Terra Classic assets:

| Category | Meaning |
| --- | --- |
| Live native asset | Exists and can be transferred on Terra Classic mainnet. |
| Live legacy asset | Exists on-chain but may no longer behave like its original product promise. |
| Proposed collateralized asset | Described in product or governance material but not live until implemented. |
| Roadmap asset | Part of a staged product direction, not currently available as a production asset. |
| Institution-ready asset | Has live issuance, collateral, redemption, liquidity, oracle support, wallet support, audits, and legal/compliance clarity. |

Most institutional confusion comes from mixing these categories.

## LUNC

LUNC is the native staking, governance, and gas asset of Terra Classic.

Institutional relevance:

- pays transaction fees
- secures the network through staking
- provides governance voting power when staked
- can be delegated to validators
- is listed on external markets
- can be held, transferred, staked, or integrated like other volatile crypto assets

LUNC is not a stable asset. It is a volatile crypto asset.

## USTC

USTC is a live Terra Classic legacy asset.

It should not be described as a guaranteed 1 USD stablecoin. After the 2022 collapse, USTC became a market-priced speculative asset. It can still be transferred and may be involved in proposed product paths, but institutions should treat it with extra caution.

Institutional relevance:

- live on-chain asset
- possible swap route in Swap Protocol if implemented
- possible future role in stable-asset discussions
- high disclosure burden because of its history

USTC-related products should avoid any language that implies a guaranteed peg, redemption right, or risk-free stable settlement.

## EUTC

EUTC is the proposed first Forex Protocol stable asset.

The source design describes EUTC as a Euro-pegged Terra Classic asset backed by approved collateral such as EURC or USDC, with mint and redemption fees, reserve logic, oracle requirements, and redemption controls.

Current institutional status:

| Item | Status |
| --- | --- |
| EUTC concept | Defined in Forex Protocol source material. |
| Governance direction | Forex Protocol concept accepted by governance as Proposal 12209. |
| Mainnet asset | Not live. |
| Minting | Not live. |
| Redemption | Not live. |
| Institutional readiness | Depends on implementation, audit, collateral, liquidity, wallets, and governance execution. |

EUTC should be presented as a proposed first asset, not as a live Euro stablecoin.

## Planned multi-currency assets

The main website presents a staged multi-currency suite. Institutions should treat it as a roadmap direction tied to Forex Protocol or future collateralized asset work.

| Display asset | Reference currency |
| --- | --- |
| HKTC | Hong Kong Dollar |
| NOTC | Norwegian Krone |
| PHTC | Philippine Peso |
| AUTC | Australian Dollar |
| CATC | Canadian Dollar |
| CHTC | Swiss Franc |
| CNTC | Chinese Yuan Renminbi |
| DKTC | Danish Krone |
| GBTC | British Pound Sterling |
| INTC | Indian Rupee |
| IDTC | Indonesian Rupiah |
| JPTC | Japanese Yen |
| KRTC | South Korean Won |
| MNTC | Mongolian Togrog |
| MYTC | Malaysian Ringgit |
| SDTC | Special Drawing Rights |
| SETC | Swedish Krona |
| SGTC | Singapore Dollar |
| THTC | Thai Baht |
| TWTC | New Taiwan Dollar |
| USTC | US Dollar reference asset, but currently a legacy market-priced asset |

These names describe the intended Terra Classic-denominated asset family. They do not prove current collateral, redemption, liquidity, regulatory status, or wallet support.

## Institutional asset questions

Before using or supporting any Terra Classic asset, an institution should ask:

- Does this asset exist on mainnet?
- Is it transferable?
- Is it supported by wallets and explorers?
- Is it supported by exchanges or DEX liquidity?
- Is it collateralized?
- Who controls or verifies collateral?
- Is redemption available?
- What are the mint and redeem rules?
- What happens during oracle failure?
- What happens during liquidity failure?
- Has the implementation been audited?
- Is there a legal issuer, or is this purely protocol-defined?
- Does using the asset create regulatory obligations?

If those answers are unclear, the asset is not institution-ready.

## Product discipline

The multi-currency story is one of Terra Classic's most interesting institutional opportunities. It is also one of the easiest stories to damage through overclaiming.

The correct message is:

> Terra Classic can pursue a native multi-currency asset suite through collateralized protocol design, beginning with EUTC as the first proposed Forex Protocol asset.

The incorrect message is:

> Terra Classic already has 20+ fully working institutional fiat stablecoins.

Do not use the incorrect message.

## Related pages

- [Multi-currency suite](/institutions/multi-currency-suite/)
- [Collateralized stable assets](/institutions/collateralized-stable-assets/)
- [Payment gateway](/institutions/payment-gateway/)
- [Risk and due diligence](/institutions/risk-and-due-diligence/)
