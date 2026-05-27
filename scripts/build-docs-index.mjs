import fs from "node:fs";
import path from "node:path";
import {
  contentDir,
  extractHeadings,
  generatedDir,
  groupLabelFromSlug,
  normalizeDocHref,
  normalizeSlugFromRelative,
  pagePathFromSlug,
  parseMarkdownFile,
  walkMarkdown,
} from "./docs-utils.mjs";

const order = ["start", "learn", "develop", "full-node"];

function sortPages(a, b) {
  const aGroup = order.indexOf(a.slug.split("/")[0]);
  const bGroup = order.indexOf(b.slug.split("/")[0]);
  if (aGroup !== bGroup) return (aGroup === -1 ? 99 : aGroup) - (bGroup === -1 ? 99 : bGroup);
  if (a.slug.endsWith("/overview") && !b.slug.endsWith("/overview")) return -1;
  if (!a.slug.endsWith("/overview") && b.slug.endsWith("/overview")) return 1;
  return a.slug.localeCompare(b.slug);
}

const pages = walkMarkdown().map((filePath) => {
  const relativePath = path.relative(contentDir, filePath).replaceAll(path.sep, "/");
  const slug = normalizeSlugFromRelative(relativePath);
  const parsed = parseMarkdownFile(filePath);
  const body = parsed.body.replace(/\]\(([^)]+)\)/g, (match, href) => {
    if (/^(https?:|mailto:|tel:|#)/i.test(href)) return match;
    return `](${normalizeDocHref(href, slug)})`;
  });

  return {
    slug,
    path: pagePathFromSlug(slug),
    sourceFile: `content/docs/${relativePath}`,
    group: groupLabelFromSlug(slug),
    title: parsed.metadata.title,
    description: parsed.metadata.description,
    status: parsed.metadata.status,
    reviewed: parsed.metadata.reviewed === true,
    sourceTitle: parsed.metadata.sourceTitle,
    sourceSite: parsed.metadata.sourceSite,
    sourceRepo: parsed.metadata.sourceRepo,
    sourceCommit: parsed.metadata.sourceCommit,
    sourcePath: parsed.metadata.sourcePath,
    importedAt: parsed.metadata.importedAt,
    headings: extractHeadings(body),
    body,
  };
}).sort(sortPages);

for (let index = 0; index < pages.length; index += 1) {
  pages[index].previousSlug = pages[index - 1]?.slug ?? null;
  pages[index].nextSlug = pages[index + 1]?.slug ?? null;
}

const search = pages.map((page) => ({
  slug: page.slug,
  path: page.path,
  title: page.title,
  description: page.description,
  group: page.group,
  text: page.body
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`|[\]()]|\s+-\s+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 8000),
}));

fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(
  path.join(generatedDir, "docsManifest.ts"),
  `import type { DocsPage } from "../types";\n\nexport const docsPages = ${JSON.stringify(pages, null, 2)} satisfies DocsPage[];\n`,
);
fs.writeFileSync(
  path.join(generatedDir, "searchIndex.ts"),
  `import type { SearchEntry } from "../types";\n\nexport const searchIndex = ${JSON.stringify(search, null, 2)} satisfies SearchEntry[];\n`,
);

console.log(`Generated docs manifest for ${pages.length} pages.`);
