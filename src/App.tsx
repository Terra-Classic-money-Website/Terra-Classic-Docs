import { useEffect, useState } from "react";
import { DocsShell } from "./components/docs/DocsShell";
import { DocsPage } from "./components/docs/DocsPage";
import { docsPages } from "./docs/generated/docsManifest";
import { findPageByPath, pagePath } from "./docs/routing";

const SITE_URL = "https://docs.terra-classic.money";
const TITLE_SUFFIX = "Independent Documentation for Terra Classic, LUNC & USTC";

function currentPage() {
  return findPageByPath(window.location.pathname) ?? docsPages[0];
}

function absolutePageUrl(slug: string) {
  return slug === "start" ? `${SITE_URL}/` : `${SITE_URL}${pagePath(slug)}`;
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

export function App() {
  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const onPopState = () => setPage(currentPage());
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      const url = new URL(anchor.href);
      if (url.origin !== window.location.origin) return;
      if (anchor.target || anchor.hasAttribute("download")) return;
      const next = findPageByPath(url.pathname);
      if (!next) return;
      event.preventDefault();
      window.history.pushState({}, "", `${pagePath(next.slug)}${url.hash}`);
      setPage(next);
      if (url.hash) {
        requestAnimationFrame(() => document.getElementById(url.hash.slice(1))?.scrollIntoView());
      } else {
        window.scrollTo({ top: 0 });
      }
    };

    window.addEventListener("popstate", onPopState);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", onPopState);
      document.removeEventListener("click", onClick);
    };
  }, []);

  useEffect(() => {
    const title = `${page.title} - ${TITLE_SUFFIX}`;
    const canonicalUrl = absolutePageUrl(page.slug);

    document.title = title;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
    setMetaContent('meta[name="description"]', page.description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', page.description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', page.description);
  }, [page]);

  return (
    <DocsShell activePage={page}>
      <DocsPage page={page} />
    </DocsShell>
  );
}
