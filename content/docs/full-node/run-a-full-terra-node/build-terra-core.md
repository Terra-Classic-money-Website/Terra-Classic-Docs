---
title: "Build Terra Classic Core"
description: "Fetch and compile the latest Terra Classic binaries from source."
status: draft
reviewed: false
sourceTitle: "Terra Classic Docs repository"
sourceSite: "https://terra-classic.io/docs"
sourceRepo: "https://github.com/terra-classic-io/website/tree/main/src/docs"
sourceCommit: "e305fbe051de9c218021cc3ff98e2e01db04f6dd"
sourcePath: "full-node/run-a-full-terra-node/build-terra-core.md"
sourceDate: "2026-05-27"
---
Terra Classic core is the official implementation of the Terra Classic node software. Use this guide to install `terrad`, the command-line interface and daemon that connects to Terra Classic and enables you to interact with the Terra Classic blockchain.

## Get the Terra Classic core source code

1. Use `git` to retrieve [Terra Classic core](https://github.com/classic-terra/core/) and check out the latest stable release. Verify the current node-reported version through [Current network status and parameters](/learn/current-network-status-and-parameters/) and compare it with [GitHub releases](https://github.com/classic-terra/core/releases) before building production nodes.

   ```bash
   git clone https://github.com/classic-terra/core
   cd core
   git checkout [latest stable version]
   ```

2. Build Terra core. This installs the `terrad` executable to your [`GOPATH`](https://go.dev/doc/gopath_code) environment variable.

   ```bash
   make build install
   ```

3. Verify that Terra Classic core is installed correctly.

   ```bash
   terrad version --long
   ```

   **Example**:

   ```bash
   name: terra
   server_name: terrad
   client_name: terrad
   version: v4.0.1
   build_tags: netgo,ledger
   go: go version go1.24.13 linux/amd64
   # ...And a list of dependencies
   ```

> **Tip**
>
> If the `terrad: command not found` error message returns, confirm that the Go binary path is correctly configured by running the following command:

```bash
export PATH=$PATH:$(go env GOPATH)/bin
```
