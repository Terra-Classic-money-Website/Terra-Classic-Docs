import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const manifestPath = path.join(root, "src/docs/generated/docsManifest.ts");
const indexPath = path.join(dist, "index.html");

if (!fs.existsSync(indexPath)) {
  throw new Error("dist/index.html does not exist. Run vite build first.");
}

const manifestSource = fs.readFileSync(manifestPath, "utf8");
const match = manifestSource.match(/export const docsPages = ([\s\S]*?) satisfies DocsPage\[];/);
if (!match) throw new Error("Could not read generated docs manifest.");

const pages = JSON.parse(match[1]);
const html = fs.readFileSync(indexPath, "utf8");

for (const page of pages) {
  const routeDir = path.join(dist, page.slug);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, "index.html"), html);
}

fs.writeFileSync(path.join(dist, "404.html"), html);
console.log(`Wrote ${pages.length} static docs route entry files plus 404.html.`);
