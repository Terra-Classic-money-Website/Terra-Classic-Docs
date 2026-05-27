import { useEffect, useMemo, useState, type ReactNode } from "react";
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

function CollapseIcon({ collapsed }: { collapsed: boolean }) {
  return (
    <span className={`docs-collapse-icon ${collapsed ? "docs-collapse-icon--collapsed" : ""}`} aria-hidden="true">
      <span /><span /><span /><span /><span /><span />
    </span>
  );
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
      <label htmlFor="docs-search-input">Search docs</label>
      <input
        id="docs-search-input"
        type="search"
        value={query}
        placeholder="Search imported docs"
        onChange={(event) => setQuery(event.target.value)}
      />
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
  return item.page.slug === slug || item.children.some((child) => navItemContainsPage(child, slug));
}

function DocsSidebar({
  activePage,
  collapsed,
  drawerOpen,
  onCollapse,
  onNavigate,
}: {
  activePage: DocsPage;
  collapsed: boolean;
  drawerOpen: boolean;
  onCollapse: (next: boolean) => void;
  onNavigate: () => void;
}) {
  const compact = collapsed && !drawerOpen;
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(() => new Set());
  const groups = useMemo(() => docsGroups(), []);

  const findNavItem = (slug: string) => {
    const stack = groups.flatMap((group) => group.items);
    while (stack.length > 0) {
      const item = stack.shift()!;
      if (item.page.slug === slug) return item;
      stack.push(...item.children);
    }
    return null;
  };

  useEffect(() => {
    const parents = new Set<string>();
    let parentSlug = activePage.navParent;

    while (parentSlug) {
      const parent = findNavItem(parentSlug);
      if (!parent) break;
      parents.add(parentSlug);
      parentSlug = parent.page.navParent;
    }

    if (parents.size === 0) return;
    setExpandedSlugs((current) => new Set([...current, ...parents]));
  }, [activePage.navParent]);

  const toggleExpanded = (slug: string) => {
    setExpandedSlugs((current) => {
      const next = new Set(current);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  const renderItem = (item: DocsNavItem, depth = 0) => {
    const isActive = item.page.slug === activePage.slug;
    const hasActiveChild = item.children.some((child) => navItemContainsPage(child, activePage.slug));
    const hasChildren = item.children.length > 0;
    const expanded = hasActiveChild || expandedSlugs.has(item.page.slug);

    return (
      <div className={`docs-nav-node docs-nav-node--depth-${depth}`} key={item.page.slug}>
        <div className="docs-nav-row-wrap">
          <a
            className={isActive ? "docs-nav-row docs-nav-row--active" : "docs-nav-row"}
            href={item.page.path}
            aria-current={isActive ? "page" : undefined}
            title={compact ? item.page.navTitle : undefined}
            onClick={onNavigate}
          >
            <span className="docs-nav-dot" aria-hidden="true" />
            {!compact && <span>{item.page.navTitle}</span>}
          </a>
          {hasChildren && !compact && (
            <button
              className={`docs-nav-toggle ${expanded ? "docs-nav-toggle--open" : ""}`}
              type="button"
              aria-label={`${expanded ? "Collapse" : "Expand"} ${item.page.navTitle}`}
              aria-expanded={expanded}
              onClick={() => toggleExpanded(item.page.slug)}
            >
              <span aria-hidden="true">›</span>
            </button>
          )}
        </div>
        {hasChildren && !compact && expanded && (
          <div className="docs-nav-children">
            {item.children.map((child) => renderItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={`docs-sidebar ${collapsed ? "docs-sidebar--collapsed" : ""} ${drawerOpen ? "docs-sidebar--open" : ""}`}>
      <div className="docs-sidebar-inner">
        <div className="docs-sidebar-brand">
          <a className="docs-brand-lockup" href="/" aria-label="Terra Classic Docs home" onClick={onNavigate}>
            <img className="docs-brand-full" src={asset("sidebar-logo.svg")} alt="" />
            <img className="docs-brand-icon" src={asset("sidebar-logo-icon.svg")} alt="" />
          </a>
          <button className="docs-collapse-button" type="button" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} onClick={() => onCollapse(!collapsed)}>
            <CollapseIcon collapsed={collapsed} />
          </button>
        </div>

        {!compact && <SearchBox onNavigate={onNavigate} />}

        <nav className="docs-nav" aria-label="Docs navigation">
          {groups.map((group) => (
            <section className="docs-nav-group" key={group.label}>
              {!compact && <h2>{group.label}</h2>}
              <div className="docs-nav-rows">
                {group.items.map((item) => renderItem(item))}
              </div>
            </section>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function TableOfContents({ page }: { page: DocsPage }) {
  const headings = page.headings.filter((heading) => heading.depth <= 3);
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

export function StatusPill({ status }: { status: DocsPage["status"] }) {
  const label = status === "reviewed" ? "Reviewed" : status === "draft" ? "Draft" : "Imported";
  return <span className={`docs-status docs-status--${status}`}>{label}</span>;
}

export function DocsShell({ activePage, children }: { activePage: DocsPage; children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(() => localStorage.getItem("tc-docs-sidebar-collapsed") === "true");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("tc-docs-sidebar-collapsed", String(collapsed));
  }, [collapsed]);

  useEffect(() => {
    document.body.classList.toggle("docs-drawer-open", drawerOpen);
    return () => document.body.classList.remove("docs-drawer-open");
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <div className={`docs-app ${collapsed ? "docs-app--collapsed" : ""}`}>
      <header className="docs-mobile-topbar">
        <button className="docs-mobile-menu" type="button" aria-label={drawerOpen ? "Close docs navigation" : "Open docs navigation"} aria-expanded={drawerOpen} onClick={() => setDrawerOpen((open) => !open)}>
          <MenuIcon open={drawerOpen} />
        </button>
        <a className="docs-mobile-brand" href="/" onClick={closeDrawer} aria-label="Terra Classic Docs home">
          <img src={asset("sidebar-logo.svg")} alt="" />
        </a>
        <span className="docs-mobile-status">Docs</span>
      </header>

      <DocsSidebar activePage={activePage} collapsed={collapsed} drawerOpen={drawerOpen} onCollapse={setCollapsed} onNavigate={closeDrawer} />

      <main className="docs-main">
        <div className="docs-content-grid">
          <article className="docs-article">
            <Breadcrumbs page={activePage} />
            {children}
          </article>
          <TableOfContents page={activePage} />
        </div>
      </main>
    </div>
  );
}
