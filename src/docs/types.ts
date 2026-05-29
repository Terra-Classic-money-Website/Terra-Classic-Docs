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

export type DocsNavItem = {
  page: DocsPage;
  children: DocsNavItem[];
};
