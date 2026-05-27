import fs from "node:fs";
import path from "node:path";
import {
  contentDir,
  normalizeDocHref,
  normalizeSlugFromRelative,
  parseMarkdownFile,
  slugify,
  walkMarkdown,
} from "./docs-utils.mjs";

const requiredFields = [
  "title",
  "description",
  "status",
  "sourceTitle",
  "sourceSite",
  "sourceRepo",
  "sourceCommit",
  "sourcePath",
  "importedAt",
];

const markdownFiles = walkMarkdown();
const slugs = new Map();
const errors = [];
const sourcePaths = new Set();

for (const filePath of markdownFiles) {
  const relativePath = path.relative(contentDir, filePath).replaceAll(path.sep, "/");
  const slug = normalizeSlugFromRelative(relativePath);
  const parsed = parseMarkdownFile(filePath);

  if (slugs.has(slug)) errors.push(`${relativePath}: duplicate slug '${slug}' also used by ${slugs.get(slug)}`);
  slugs.set(slug, relativePath);

  for (const field of requiredFields) {
    if (parsed.metadata[field] === undefined || parsed.metadata[field] === "") {
      errors.push(`${relativePath}: missing required frontmatter field '${field}'`);
    }
  }

  if (!["imported", "draft", "reviewed"].includes(String(parsed.metadata.status))) {
    errors.push(`${relativePath}: status must be imported, draft, or reviewed`);
  }

  if (sourcePaths.has(parsed.metadata.sourcePath)) {
    errors.push(`${relativePath}: duplicate sourcePath '${parsed.metadata.sourcePath}'`);
  }
  sourcePaths.add(parsed.metadata.sourcePath);

  const headingIds = new Set();
  for (const line of parsed.body.split(/\r?\n/)) {
    const heading = line.match(/^(#{2,6})\s+(.+)$/);
    if (!heading) continue;
    const id = slugify(heading[2]);
    if (!id) errors.push(`${relativePath}: heading '${heading[2]}' does not produce a stable anchor`);
    if (headingIds.has(id)) errors.push(`${relativePath}: duplicate heading anchor '${id}'`);
    headingIds.add(id);
  }
}

for (const filePath of markdownFiles) {
  const relativePath = path.relative(contentDir, filePath).replaceAll(path.sep, "/");
  const fromSlug = normalizeSlugFromRelative(relativePath);
  const parsed = parseMarkdownFile(filePath);
  const links = [...parsed.body.matchAll(/(?<!!)\[[^\]]+\]\(([^)\s]+)(?:\s+\"[^\"]+\")?\)/g)];
  const images = [...parsed.body.matchAll(/!\[[^\]]*]\(([^)\s]+)(?:\s+\"[^\"]+\")?\)/g)];

  for (const [, href] of links) {
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) continue;
    const normalized = normalizeDocHref(href, fromSlug);
    if (normalized === "/") continue;
    const targetSlug = normalized.split("#")[0].replace(/^\/+|\/+$/g, "");
    if (!slugs.has(targetSlug)) {
      errors.push(`${relativePath}: broken internal link '${href}' -> '${normalized}'`);
    }
  }

  for (const [, href] of images) {
    if (/^https?:/i.test(href)) continue;
    const imagePath = path.resolve(path.dirname(filePath), href);
    if (!fs.existsSync(imagePath)) {
      errors.push(`${relativePath}: missing image '${href}'`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Docs validation failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Docs validation passed for ${markdownFiles.length} pages.`);
