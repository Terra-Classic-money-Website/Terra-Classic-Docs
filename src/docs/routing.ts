import { docsPages } from "./generated/docsManifest";

const defaultPage = docsPages.find((page) => page.slug === "start") ?? docsPages[0];

export function normalizePathname(pathname: string) {
  const decoded = decodeURIComponent(pathname);
  const withoutBase = decoded.replace(/^\/+|\/+$/g, "");
  return withoutBase || defaultPage.slug;
}

export function pagePath(slug: string) {
  return `/${slug.replace(/^\/+|\/+$/g, "")}/`;
}

export function findPageByPath(pathname: string) {
  const slug = normalizePathname(pathname);
  return docsPages.find((page) => page.slug === slug) ?? null;
}

export function getPageBySlug(slug: string | null) {
  if (!slug) return null;
  return docsPages.find((page) => page.slug === slug) ?? null;
}

export function docsGroups() {
  const groups = new Map<string, typeof docsPages>();
  for (const page of docsPages) {
    const pages = groups.get(page.group) ?? [];
    pages.push(page);
    groups.set(page.group, pages);
  }
  return [...groups.entries()].map(([label, pages]) => ({ label, pages }));
}
