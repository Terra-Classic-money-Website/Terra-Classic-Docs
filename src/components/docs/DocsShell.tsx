import { useEffect, useLayoutEffect, useMemo, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import type { DocsNavItem, DocsPage } from "../../docs/types";
import { docsGroups } from "../../docs/routing";
import { searchIndex } from "../../docs/generated/searchIndex";

const asset = (name: string) => `/assets/${name}`;

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className={`docs-menu-icon ${open ? "docs-menu-icon--open" : ""}`} aria-hidden="true">
      <span /><span /><span /><span /><span /><span /><span /><span /><span />
    </span>
  );
}

function NavClusterIcon({ variant = "branch-down" }: { variant?: "branch-down" | "back" }) {
  return <span className={`docs-nav-cluster docs-nav-cluster--${variant}`} aria-hidden="true" />;
}

function segmentLabel(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function Breadcrumbs({ page }: { page: DocsPage }) {
  const segments = page.slug.split("/");
  return (
    <nav className="docs-breadcrumbs" aria-label="Breadcrumbs">
      <a href="/">Docs</a>
      {segments.slice(0, -1).map((segment, index) => (
        <span key={`${segment}-${index}`}>
          <span aria-hidden="true">/</span>
          <span>{segmentLabel(segment)}</span>
        </span>
      ))}
    </nav>
  );
}

function SearchBox({ onNavigate }: { onNavigate: () => void }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (trimmed.length < 2) return [];
    return searchIndex
      .map((entry) => {
        const haystack = `${entry.title} ${entry.description} ${entry.group} ${entry.text}`.toLowerCase();
        const score = (entry.title.toLowerCase().includes(trimmed) ? 3 : 0)
          + (entry.description.toLowerCase().includes(trimmed) ? 2 : 0)
          + (haystack.includes(trimmed) ? 1 : 0);
        return { entry, score };
      })
      .filter((result) => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 6);
  }, [query]);

  return (
    <div className="docs-search">
      <div className="docs-search-control">
        <span className="docs-search-icon" aria-hidden="true" />
        <input
          id="docs-search-input"
          type="search"
          value={query}
          aria-label="Search docs"
          placeholder="Search docs"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      {query.trim().length >= 2 && (
        <div className="docs-search-results">
          {results.length > 0 ? results.map(({ entry }) => (
            <a href={entry.path} key={entry.slug} onClick={onNavigate}>
              <strong>{entry.title}</strong>
              <span>{entry.group}</span>
            </a>
          )) : <p>No local matches.</p>}
        </div>
      )}
    </div>
  );
}

function navItemContainsPage(item: DocsNavItem, slug: string): boolean {
  return (item.type === "page" && item.page.slug === slug) || item.children.some((child) => navItemContainsPage(child, slug));
}

function navItemId(item: DocsNavItem) {
  return item.type === "page" ? item.page.slug : item.id;
}

function navItemTitle(item: DocsNavItem) {
  return item.type === "page" ? item.page.navTitle : item.title;
}

function DocsNavNode({
  item,
  depth = 0,
  activePage,
  expandedSlugs,
  onToggleExpanded,
  onNavigate,
}: {
  item: DocsNavItem;
  depth?: number;
  activePage: DocsPage | null;
  expandedSlugs: Set<string>;
  onToggleExpanded: (slug: string) => void;
  onNavigate: () => void;
}) {
  const childrenInnerRef = useRef<HTMLDivElement>(null);
  const [childrenHeight, setChildrenHeight] = useState(0);
  const itemId = navItemId(item);
  const itemTitle = navItemTitle(item);
  const isActive = item.type === "page" && item.page.slug === activePage?.slug;
  const hasActiveChild = activePage ? item.children.some((child) => navItemContainsPage(child, activePage.slug)) : false;
  const hasChildren = item.children.length > 0;
  const expanded = isActive || hasActiveChild || expandedSlugs.has(itemId);

  useLayoutEffect(() => {
    if (!hasChildren || !childrenInnerRef.current) return;

    const element = childrenInnerRef.current;
    const updateHeight = () => setChildrenHeight(element.scrollHeight);
    updateHeight();

    if (typeof ResizeObserver === "undefined") return;

    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => observer.disconnect();
  }, [activePage?.slug, expanded, expandedSlugs, hasChildren]);

  const childrenStyle = {
    "--docs-nav-children-height": `${childrenHeight}px`,
  } as CSSProperties;
  const childrenId = `docs-nav-children-${itemId.replace(/[^a-z0-9_-]/gi, "-")}`;
  const rowClassName = [
    "docs-nav-row",
    isActive ? "docs-nav-row--active" : "",
    hasChildren ? "docs-nav-row--branch" : "",
    expanded ? "docs-nav-row--expanded" : "",
    item.type === "label" ? "docs-nav-row--label" : "",
  ].filter(Boolean).join(" ");

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (hasChildren) {
      const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
      const usesSplitControls = typeof window !== "undefined" && window.matchMedia("(max-width: 1299px)").matches;
      if (!isModifiedClick && !usesSplitControls) onToggleExpanded(itemId);
    }
    onNavigate();
  };

  return (
    <div className={`docs-nav-node docs-nav-node--depth-${depth}`} key={itemId}>
      <div className={rowClassName}>
        {item.type === "page" ? (
          <a
            className="docs-nav-link"
            href={item.page.path}
            aria-current={isActive ? "page" : undefined}
            aria-expanded={hasChildren ? expanded : undefined}
            aria-controls={hasChildren ? childrenId : undefined}
            onClick={handleLinkClick}
          >
            <span>{itemTitle}</span>
            {hasChildren && <NavClusterIcon variant="branch-down" />}
          </a>
        ) : (
          <button
            className="docs-nav-link docs-nav-label-button"
            type="button"
            aria-expanded={hasChildren ? expanded : undefined}
            aria-controls={hasChildren ? childrenId : undefined}
            onClick={() => onToggleExpanded(itemId)}
          >
            <span>{itemTitle}</span>
            {hasChildren && <NavClusterIcon variant="branch-down" />}
          </button>
        )}
        {hasChildren && (
          <button
            className="docs-nav-toggle"
            type="button"
            aria-label={`${expanded ? "Collapse" : "Expand"} ${itemTitle}`}
            aria-expanded={expanded}
            aria-controls={childrenId}
            onClick={() => onToggleExpanded(itemId)}
          >
            <NavClusterIcon variant="branch-down" />
          </button>
        )}
      </div>
      {hasChildren && (
        <div
          id={childrenId}
          className={expanded ? "docs-nav-children docs-nav-children--open" : "docs-nav-children"}
          aria-hidden={!expanded}
          style={childrenStyle}
        >
          <div className="docs-nav-children-inner" ref={childrenInnerRef}>
            {item.children.map((child) => (
              <DocsNavNode
                activePage={activePage}
                depth={depth + 1}
                expandedSlugs={expandedSlugs}
                item={child}
                key={navItemId(child)}
                onNavigate={onNavigate}
                onToggleExpanded={onToggleExpanded}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function DocsSidebar({
  activePage,
  drawerOpen,
  onNavigate,
}: {
  activePage: DocsPage | null;
  drawerOpen: boolean;
  onNavigate: () => void;
}) {
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(() => new Set());
  const groups = useMemo(() => docsGroups(), []);

  const findNavItem = (slug: string) => {
    const stack = groups.flatMap((group) => group.items);
    while (stack.length > 0) {
      const item = stack.shift()!;
      if (navItemId(item) === slug) return item;
      stack.push(...item.children);
    }
    return null;
  };

  useEffect(() => {
    if (!activePage) return;

    const parents = new Set<string>();
    let parentSlug = activePage.navParent;

    while (parentSlug) {
      const parent = findNavItem(parentSlug);
      if (!parent) break;
      parents.add(parentSlug);
      parentSlug = parent.type === "page" ? parent.page.navParent : null;
    }

    if (parents.size === 0) return;
    setExpandedSlugs((current) => new Set([...current, ...parents]));
  }, [activePage]);

  const toggleExpanded = (slug: string) => {
    setExpandedSlugs((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <aside className={`docs-sidebar ${drawerOpen ? "docs-sidebar--open" : ""}`}>
      <div className="docs-sidebar-inner">
        <div className="docs-sidebar-brand">
          <a className="docs-brand-lockup" href="/" aria-label="Terra Classic Docs home" onClick={onNavigate}>
            <img className="docs-brand-full" src={asset("sidebar-logo.svg")} alt="" />
          </a>
        </div>

        <SearchBox onNavigate={onNavigate} />

        <div className="docs-sidebar-scroll">
          <nav className="docs-nav" aria-label="Docs navigation">
            {groups.map((group) => (
              <section className="docs-nav-group" key={group.label}>
                <h2>{group.label}:</h2>
                <div className="docs-nav-rows">
                  {group.items.map((item) => (
                    <DocsNavNode
                      activePage={activePage}
                      expandedSlugs={expandedSlugs}
                      item={item}
                      key={navItemId(item)}
                      onNavigate={onNavigate}
                      onToggleExpanded={toggleExpanded}
                    />
                  ))}
                </div>
              </section>
            ))}
          </nav>

          <footer className="docs-sidebar-footer">
            <a className="docs-sidebar-back" href="https://terra-classic.money/">
              <NavClusterIcon variant="back" />
              <span>Back to Terra-Classic.money</span>
            </a>
            <div className="docs-sidebar-disclaimer">
              <strong>Disclaimers:</strong>
              <p>
                Terra-Classic.money is not the official website of Terra Classic. Just as no one owns the technology behind email, no one owns the Terra Classic blockchain. Accordingly, no single entity can speak with authority on behalf of Terra Classic.
              </p>
              <p>
                This website is provided for informational purposes only and does not constitute investment advice, a solicitation, or an offer to buy or sell any securities, tokens, or other financial instruments. The content presented is intended to offer insight into the Terra Classic blockchain and its native assets (LUNC and USTC), and should not be interpreted as legal or financial guidance. Visitors are strongly encouraged to conduct their own independent research, and to consult with qualified legal and financial professionals before making any investment decisions. The authors, contributors, and affiliated entities expressly disclaim all liability for any actions taken based on the content of this website.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </aside>
  );
}

function TableOfContents({ page }: { page: DocsPage }) {
  const maxDepth = page.tocDepth ?? 3;
  const headings = page.headings.filter((heading) => heading.depth <= maxDepth);
  if (headings.length === 0) return null;
  return (
    <aside className="docs-toc" aria-label="On this page">
      <h2>On this page</h2>
      <nav>
        {headings.map((heading) => (
          <a className={`docs-toc-link docs-toc-link--depth-${heading.depth}`} href={`#${heading.id}`} key={heading.id}>
            {heading.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function DocsShell({ activePage, children }: { activePage: DocsPage | null; children: ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("docs-drawer-open", drawerOpen);
    document.body.classList.toggle("docs-drawer-open", drawerOpen);
    return () => {
      document.documentElement.classList.remove("docs-drawer-open");
      document.body.classList.remove("docs-drawer-open");
    };
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className="docs-app">
      <header className="docs-mobile-topbar">
        <div className="docs-mobile-brand-group">
          <button className="docs-mobile-menu" type="button" aria-label={drawerOpen ? "Close docs navigation" : "Open docs navigation"} aria-expanded={drawerOpen} onClick={() => setDrawerOpen((open) => !open)}>
            <MenuIcon open={drawerOpen} />
          </button>
          <span className="docs-mobile-separator" aria-hidden="true" />
          <a className="docs-mobile-brand" href="/" onClick={closeDrawer} aria-label="Terra Classic Docs home">
            <img src={asset("sidebar-logo.svg")} alt="" />
          </a>
        </div>
        <a className="docs-mobile-back" href="https://terra-classic.money/">
          <NavClusterIcon variant="back" />
          <span>Back to Terra-Classic.money</span>
        </a>
      </header>

      <DocsSidebar activePage={activePage} drawerOpen={drawerOpen} onNavigate={closeDrawer} />
      <button
        className="docs-drawer-backdrop"
        type="button"
        aria-label="Close docs navigation"
        onClick={closeDrawer}
      />

      <main className="docs-main">
        <div className="docs-content-grid">
          <article className="docs-article">
            {activePage && <Breadcrumbs page={activePage} />}
            {children}
          </article>
          {activePage && <TableOfContents page={activePage} />}
        </div>
      </main>
    </div>
  );
}
