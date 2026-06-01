import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const manifestPath = path.join(root, "src/docs/generated/docsManifest.ts");
const indexPath = path.join(dist, "index.html");
const siteUrl = "https://docs.terra-classic.money";
const titleSuffix = "Independent Documentation for Terra Classic, LUNC & USTC";
const notFoundTitle = `Page not found - ${titleSuffix}`;
const notFoundDescription = "The requested Terra Classic Docs page could not be found. Use search or return to the documentation start page.";

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html does not exist. Run vite build first.");
}

const manifestSource = fs.readFileSync(manifestPath, "utf8");
const match = manifestSource.match(/export const docsPages = ([\s\S]*?) satisfies DocsPage\[];/);
if (!match) throw new Error("Could not read generated docs manifest.");

const pages = JSON.parse(match[1]);
const html = fs.readFileSync(indexPath, "utf8");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function absoluteUrl(pathname) {
  if (pathname === "/") return `${siteUrl}/`;
  return `${siteUrl}${pathname}`;
}

function canonicalPath(page) {
  return page.slug === "start" ? "/" : page.path;
}

function pageTitle(page) {
  return `${page.title} - ${titleSuffix}`;
}

function withPageMetadata(sourceHtml, page) {
  const title = escapeHtml(pageTitle(page));
  const description = escapeHtml(page.description);
  const canonical = escapeHtml(absoluteUrl(canonicalPath(page)));

  return sourceHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);
}

function withNotFoundMetadata(sourceHtml) {
  const title = escapeHtml(notFoundTitle);
  const description = escapeHtml(notFoundDescription);
  const canonical = escapeHtml(absoluteUrl("/404.html"));
  const withMetadata = sourceHtml
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`)
    .replace(/<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`)
    .replace(/<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`)
    .replace(/<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${canonical}" />`);

  if (withMetadata.includes('<meta name="robots"')) return withMetadata;
  return withMetadata.replace("</head>", `    <meta name="robots" content="noindex" />\n  </head>`);
}

function writeTextFile(filePath, content) {
  fs.writeFileSync(filePath, `${content.trim()}\n`);
}

const defaultPage = pages.find((page) => page.slug === "start") ?? pages[0];
fs.writeFileSync(indexPath, withPageMetadata(html, defaultPage));

for (const page of pages) {
  const routeDir = path.join(dist, page.slug);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), withPageMetadata(html, page));
}

fs.writeFileSync(path.join(dist, "404.html"), withNotFoundMetadata(html));

const sitemapUrls = [
  absoluteUrl("/"),
  ...pages
    .filter((page) => page.slug !== "start")
    .map((page) => absoluteUrl(page.path)),
];

writeTextFile(path.join(dist, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map((url) => `  <url><loc>${escapeHtml(url)}</loc></url>`).join("\n")}
</urlset>`);

writeTextFile(path.join(dist, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}`);

console.log(`Wrote ${pages.length} static docs route entry files, 404.html, robots.txt, and sitemap.xml with ${sitemapUrls.length} URLs.`);
