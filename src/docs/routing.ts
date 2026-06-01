import { docsPages } from "./generated/docsManifest";
import { docsNavBlueprint } from "./generated/docsNav";
import type { DocsNavBlueprintItem, DocsNavGroup, DocsNavItem } from "./types";

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
  const itemBySlug = new Map<string, DocsNavItem>();

  for (const page of docsPages) {
    itemBySlug.set(page.slug, { type: "page", page, children: [] });
  }

  const buildItem = (blueprint: DocsNavBlueprintItem): DocsNavItem | null => {
    if (blueprint.type === "label") {
      return {
        type: "label",
        id: blueprint.id,
        title: blueprint.title,
        children: blueprint.children.map(buildItem).filter((item): item is DocsNavItem => item !== null),
      };
    }

    const pageItem = itemBySlug.get(blueprint.slug);
    if (!pageItem) return null;
    pageItem.children = blueprint.children.map(buildItem).filter((item): item is DocsNavItem => item !== null);
    return pageItem;
  };

  const groups: DocsNavGroup[] = [];

  for (const group of docsNavBlueprint) {
    groups.push({
      label: group.label,
      items: group.items.map(buildItem).filter((item): item is DocsNavItem => item !== null),
    });
  }

  return groups;
}
