---
title: "Spec Params"
description: "Imported Terra Classic documentation page pending editorial review."
status: imported
reviewed: false
sourceTitle: "Terra Classic Docs Export"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "develop/module-specifications/spec-params.md"
importedAt: "2026-05-27"
---
> **Note**
>
> The params module has been deprecated in favor of letting each module keep its own parameters in the app state.  
> Some modules still use the params module for governance proposals, but this is not recommended. These modules, until migrated, use the params keeper to store module parameter sets under individual subspaces. Those parameters can be updated through parameter-change proposals.
>
> Please refer to the [upstream documentation](https://docs.cosmos.network/main/modules/params/) for more details.
