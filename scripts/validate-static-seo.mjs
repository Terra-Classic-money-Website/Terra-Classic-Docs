import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const manifestPath = path.join(root, "src/docs/generated/docsManifest.ts");
const siteUrl = "https://docs.terra-classic.money";

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function fail(message) {
  console.error(`Static SEO validation failed: ${message}`);
  process.exit(1);
}

function absoluteUrl(pathname) {
  if (pathname === "/") return `${siteUrl}/`;
  return `${siteUrl}${pathname}`;
}

function canonicalPath(page) {
  return page.slug === "start" ? "/" : page.path;
}

function extractCanonical(html) {
  return html.match(/<link rel="canonical" href="([^"]+)" \/>/)?.[1] ?? null;
}

if (!fs.existsSync(dist)) fail("dist does not exist. Run npm run build first.");

const manifestSource = read(manifestPath);
const manifestMatch = manifestSource.match(/export const docsPages = ([\s\S]*?) satisfies DocsPage\[];/);
if (!manifestMatch) fail("could not read generated docs manifest.");

const pages = JSON.parse(manifestMatch[1]);
const expectedUrls = [
  absoluteUrl("/"),
  ...pages.filter((page) => page.slug !== "start").map((page) => absoluteUrl(page.path)),
];

const robotsPath = path.join(dist, "robots.txt");
if (!fs.existsSync(robotsPath)) fail("robots.txt is missing.");

const robots = read(robotsPath);
if (!robots.includes("User-agent: *")) fail("robots.txt is missing User-agent: *.");
if (!robots.includes("Allow: /")) fail("robots.txt is missing Allow: /.");
if (!robots.includes(`Sitemap: ${absoluteUrl("/sitemap.xml")}`)) fail("robots.txt is missing the sitemap directive.");

const sitemapPath = path.join(dist, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) fail("sitemap.xml is missing.");

const sitemap = read(sitemapPath);
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (sitemapUrls.length !== expectedUrls.length) {
  fail(`sitemap URL count mismatch. Expected ${expectedUrls.length}, found ${sitemapUrls.length}.`);
}

for (const url of expectedUrls) {
  if (!sitemapUrls.includes(url)) fail(`sitemap is missing ${url}.`);
}

if (sitemapUrls.includes(absoluteUrl("/start/"))) fail("sitemap must not include duplicate /start/ URL.");

const rootCanonical = extractCanonical(read(path.join(dist, "index.html")));
if (rootCanonical !== absoluteUrl("/")) fail(`root canonical mismatch: ${rootCanonical}`);

for (const page of pages) {
  const routeHtmlPath = path.join(dist, page.slug, "index.html");
  if (!fs.existsSync(routeHtmlPath)) fail(`static route HTML missing for ${page.slug}.`);

  const canonical = extractCanonical(read(routeHtmlPath));
  const expectedCanonical = absoluteUrl(canonicalPath(page));
  if (canonical !== expectedCanonical) {
    fail(`${page.slug} canonical mismatch. Expected ${expectedCanonical}, found ${canonical}.`);
  }
}

console.log(`Static SEO validation passed for ${expectedUrls.length} sitemap URLs and ${pages.length} route canonicals.`);
