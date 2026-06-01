import fs from "node:fs";
import path from "node:path";

export const rootDir = process.cwd();
export const contentDir = path.join(rootDir, "content/docs");
export const generatedDir = path.join(rootDir, "src/docs/generated");

export function walkMarkdown(dir = contentDir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkMarkdown(fullPath);
    if (entry.isFile() && entry.name.endsWith(".md")) return [fullPath];
    return [];
  }).sort((a, b) => a.localeCompare(b));
}

export function stripJsonQuotes(value) {
  const trimmed = value.trim();
  if ((trimmed.startsWith("\"") && trimmed.endsWith("\"")) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    try {
      return JSON.parse(trimmed);
    } catch {
      return trimmed.slice(1, -1);
    }
  }
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  return trimmed;
}

export function parseMarkdownFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  const frontmatterMatch = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!frontmatterMatch) {
    return { raw, body: raw, metadata: {}, frontmatter: "" };
  }

  const metadata = {};
  for (const line of frontmatterMatch[1].split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const separator = line.indexOf(":");
    if (separator === -1) continue;
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    metadata[key] = stripJsonQuotes(value);
  }

  return {
    raw,
    body: raw.slice(frontmatterMatch[0].length),
    metadata,
    frontmatter: frontmatterMatch[1],
  };
}

export function normalizeSlugFromRelative(relativePath) {
  const withoutExt = relativePath.replace(/\.md$/, "");
  return withoutExt.replace(/\/overview$/, "/overview").replace(/^overview$/, "overview");
}

export function pagePathFromSlug(slug) {
  return `/${slug.replace(/^\/+|\/+$/g, "")}/`;
}

export function normalizeDocHref(href, fromSlug = "") {
  const trimmed = href.trim();
  if (!trimmed || trimmed.startsWith("#")) return trimmed;
  if (/^(https?:|mailto:|tel:)/i.test(trimmed)) return trimmed;
  if (trimmed === "/") return "/";

  const [pathPart, hashPart = ""] = trimmed.split("#");
  let normalized = pathPart;

  if (normalized.includes("terra-core-localnet")) normalized = "develop/how-to/localnet/terra-core-localnet";
  else if (normalized.includes("validator-resources")) normalized = "full-node/overview";
  else if (normalized.startsWith("/docs/")) normalized = normalized.slice("/docs/".length);
  else if (normalized.startsWith("/")) normalized = normalized.slice(1);
  else if (normalized.startsWith("./") || normalized.startsWith("../")) {
    const base = fromSlug.includes("/") ? fromSlug.split("/").slice(0, -1).join("/") : "";
    normalized = path.posix.normalize(path.posix.join(base, normalized));
  } else if (!/^(start|learn|develop|full-node)(\/|$)/.test(normalized)) {
    const base = fromSlug.includes("/") ? fromSlug.split("/").slice(0, -1).join("/") : "";
    normalized = path.posix.normalize(path.posix.join(base, normalized));
  }

  normalized = normalized.replace(/\.md$/, "");
  normalized = normalized.replace(/\/README$/i, "/overview");
  normalized = normalized.replace(/\/index$/i, "/overview");
  normalized = normalized.replace(/^full-node\/overview\/(.+)$/, "full-node/run-a-full-terra-node/$1");
  normalized = normalized.replace(/^develop\/module-specifications\/(?!module-specifications$|spec-)([a-z-]+)$/, "develop/module-specifications/spec-$1");
  normalized = normalized.replace(/^develop\/how-to\/terra-core-localnet$/, "develop/how-to/localnet/terra-core-localnet");
  normalized = normalized.replace(/^develop\/module-specifications\/slashing$/, "develop/module-specifications/spec-slashing");
  normalized = normalized.replace(/^develop\/module-specifications\/governance$/, "develop/module-specifications/spec-governance");
  normalized = normalized.replace(/^develop\/module-specifications\/oracle$/, "develop/module-specifications/spec-oracle");
  normalized = normalized.replace(/^develop\/module-specifications\/market$/, "develop/module-specifications/spec-market");
  normalized = normalized.replace(/^develop\/module-specifications\/taxexemption$/, "develop/module-specifications/spec-taxexemption");
  normalized = normalized.replace(/^develop\/module-specifications\/feegrant$/, "develop/module-specifications/spec-feegrant");

  const hash = hashPart ? `#${hashPart}` : "";
  return `/${normalized.replace(/^\/+|\/+$/g, "")}/${hash}`;
}

export function extractHeadings(body) {
  const headings = [];
  const seen = new Map();
  for (const line of body.split(/\r?\n/)) {
    const match = line.match(/^(#{2,4})\s+(.+)$/);
    if (!match) continue;
    const title = match[2].replace(/#+$/, "").trim();
    const base = slugify(title);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    headings.push({
      depth: match[1].length,
      title,
      id: count === 0 ? base : `${base}-${count + 1}`,
    });
  }
  return headings;
}

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/`([^`]+)`/g, "$1")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function groupLabelFromSlug(slug) {
  const first = slug.split("/")[0];
  const labels = {
    start: "Start",
    learn: "Learn",
    "staking-protocol": "Staking Protocol",
    "swap-protocol": "Swap Protocol",
    "forex-protocol": "Forex Protocol",
    develop: "Develop",
    "full-node": "Full Node",
  };
  return labels[first] ?? "Reference";
}
