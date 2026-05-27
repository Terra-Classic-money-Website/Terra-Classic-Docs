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
  const topLevelItems = new Map<string, DocsNavItem>();

  for (const page of docsPages) {
    if (!groups.has(page.group)) groups.set(page.group, { label: page.group, items: [] });
    const group = groups.get(page.group)!;
    if (page.navDepth === 0 || !page.navParent) {
      const item = { page, children: [] };
      group.items.push(item);
      topLevelItems.set(page.slug, item);
    }
  }

  for (const page of docsPages) {
    if (!page.navParent) continue;
    const parent = topLevelItems.get(page.navParent);
    if (parent) parent.children.push(page);
    else {
      if (!groups.has(page.group)) groups.set(page.group, { label: page.group, items: [] });
      groups.get(page.group)!.items.push({ page, children: [] });
    }
  }

  return [...groups.values()];
}
