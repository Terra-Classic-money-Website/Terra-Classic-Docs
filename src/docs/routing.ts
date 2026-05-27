import { docsPages } from "./generated/docsManifest";
import type { DocsNavGroup, DocsNavItem } from "./types";

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
  const groups = new Map<string, DocsNavGroup>();
  const itemBySlug = new Map<string, DocsNavItem>();

  for (const page of docsPages) {
    itemBySlug.set(page.slug, { page, children: [] });
  }

  for (const page of docsPages) {
    if (page.navOrder >= 10_000) continue;
    if (!groups.has(page.group)) groups.set(page.group, { label: page.group, items: [] });
    const group = groups.get(page.group)!;
    const item = itemBySlug.get(page.slug)!;

    if (!page.navParent) {
      group.items.push(item);
      continue;
    }

    const parent = itemBySlug.get(page.navParent);
    if (parent) parent.children.push(item);
    else group.items.push(item);
  }

  return [...groups.values()];
}
