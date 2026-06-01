export type DocsHeading = {
  depth: number;
  title: string;
  id: string;
};

export type DocsStatus = "draft" | "reviewed";

export type DocsPage = {
  slug: string;
  path: string;
  sourceFile: string;
  group: string;
  navTitle: string;
  navDepth: number;
  navParent: string | null;
  navHasChildren: boolean;
  navOrder: number;
  title: string;
  description: string;
  status: DocsStatus;
  reviewed: boolean;
  sourceTitle: string;
  sourceSite: string;
  sourceRepo: string;
  sourceCommit: string;
  sourcePath: string;
  sourceDate: string;
  tocDepth: number | null;
  headings: DocsHeading[];
  body: string;
  previousSlug: string | null;
  nextSlug: string | null;
};

export type SearchEntry = {
  slug: string;
  path: string;
  title: string;
  description: string;
  group: string;
  text: string;
};

export type DocsNavGroup = {
  label: string;
  items: DocsNavItem[];
};

export type DocsNavPageItem = {
  type: "page";
  page: DocsPage;
  children: DocsNavItem[];
};

export type DocsNavLabelItem = {
  type: "label";
  id: string;
  title: string;
  children: DocsNavItem[];
};

export type DocsNavItem = DocsNavPageItem | DocsNavLabelItem;

export type DocsNavBlueprintPageItem = {
  type: "page";
  slug: string;
  children: DocsNavBlueprintItem[];
};

export type DocsNavBlueprintLabelItem = {
  type: "label";
  id: string;
  title: string;
  children: DocsNavBlueprintItem[];
};

export type DocsNavBlueprintItem = DocsNavBlueprintPageItem | DocsNavBlueprintLabelItem;

export type DocsNavBlueprintGroup = {
  label: string;
  items: DocsNavBlueprintItem[];
};
