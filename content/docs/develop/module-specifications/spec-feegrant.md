---
title: "Spec Feegrant"
description: "Imported Terra Classic documentation page pending editorial review."
status: imported
reviewed: false
sourceTitle: "Terra Classic Docs Export"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/spec-feegrant.md"
importedAt: "2026-05-27"
---
> Terra Classic uses the Cosmos SDK [`x/feegrant`](https://docs.cosmos.network/main/modules/feegrant/) module without custom logic. Grants, allowances, and CLI flows behave exactly as upstream.
>
> Burn tax is charged in the ante handler (`custom/auth/ante/fee_tax.go`) **before** fee allowances are applied. Grantees must ensure the granter account holds enough funds to cover both the burn tax and gas fees.
> Fee grants are often combined with tax-exemption lists for infrastructure wallets. Review `x/taxexemption` when configuring service accounts.
