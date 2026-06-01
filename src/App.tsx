import { useEffect, useState } from "react";
import { DocsShell } from "./components/docs/DocsShell";
import { DocsPage } from "./components/docs/DocsPage";
import { findPageByPath, pagePath } from "./docs/routing";
import type { DocsPage as DocsPageType } from "./docs/types";

const SITE_URL = "https://docs.terra-classic.money";
const TITLE_SUFFIX = "Independent Documentation for Terra Classic, LUNC & USTC";
const NOT_FOUND_TITLE = `Page not found - ${TITLE_SUFFIX}`;
const NOT_FOUND_DESCRIPTION = "The requested Terra Classic Docs page could not be found. Use search or return to the documentation start page.";

function currentPage() {
  return findPageByPath(window.location.pathname);
}

function absolutePageUrl(slug: string) {
  return slug === "start" ? `${SITE_URL}/` : `${SITE_URL}${pagePath(slug)}`;
}

function currentAbsoluteUrl() {
  return `${SITE_URL}${window.location.pathname}`;
}

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute("content", content);
}

function setRobotsNoIndex(enabled: boolean) {
  const existing = document.querySelector('meta[name="robots"]');

  if (!enabled) {
    existing?.remove();
    return;
  }

  const robots = existing ?? document.createElement("meta");
  robots.setAttribute("name", "robots");
  robots.setAttribute("content", "noindex");

  if (!existing) document.head.append(robots);
}

function NotFoundPage() {
  return (
    <div className="docs-not-found">
      <nav className="docs-breadcrumbs" aria-label="Breadcrumbs">
        <a href="/">Docs</a>
        <span>
          <span aria-hidden="true">/</span>
          <span>Page not found</span>
        </span>
      </nav>

      <header className="docs-page-header docs-not-found-header">
        <span className="docs-error-code">404</span>
        <h1>Page not found</h1>
        <p>
          The docs page you requested does not exist or may have moved. Search the documentation from the sidebar, return to the start page, or review the main Terra Classic website.
        </p>
      </header>

      <div className="docs-not-found-actions" aria-label="404 page actions">
        <a className="docs-action-link docs-action-link--primary" href="/">Go to docs start</a>
        <a className="docs-action-link" href="https://terra-classic.money/">Back to Terra-Classic.money</a>
      </div>
    </div>
  );
}

export function App() {
  const [page, setPage] = useState<DocsPageType | null>(currentPage);

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
    if (!page) {
      setRobotsNoIndex(true);
      document.title = NOT_FOUND_TITLE;
      document.querySelector('link[rel="canonical"]')?.setAttribute("href", currentAbsoluteUrl());
      setMetaContent('meta[name="description"]', NOT_FOUND_DESCRIPTION);
      setMetaContent('meta[property="og:title"]', NOT_FOUND_TITLE);
      setMetaContent('meta[property="og:description"]', NOT_FOUND_DESCRIPTION);
      setMetaContent('meta[property="og:url"]', currentAbsoluteUrl());
      setMetaContent('meta[name="twitter:title"]', NOT_FOUND_TITLE);
      setMetaContent('meta[name="twitter:description"]', NOT_FOUND_DESCRIPTION);
      return;
    }

    setRobotsNoIndex(false);
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
      {page ? <DocsPage page={page} /> : <NotFoundPage />}
    </DocsShell>
  );
}
