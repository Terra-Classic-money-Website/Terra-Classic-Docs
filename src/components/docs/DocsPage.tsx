import type { DocsPage as DocsPageType } from "../../docs/types";
import { getPageBySlug } from "../../docs/routing";
import { MarkdownContent } from "../../docs/markdown";

function sourceUrl(page: DocsPageType) {
  return `${page.sourceRepo.replace(/\/$/, "")}/${page.sourcePath}`;
}

function editPlaceholder(page: DocsPageType) {
  return `https://github.com/terra-classic-money/terra-classic-docs/edit/main/${page.sourceFile}`;
}

export function DocsPage({ page }: { page: DocsPageType }) {
  const previous = getPageBySlug(page.previousSlug);
  const next = getPageBySlug(page.nextSlug);

  return (
    <>
      <header className="docs-page-header">
        <div className="docs-page-kicker">
          <span>{page.group}</span>
        </div>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </header>

      <section className="docs-attribution" aria-label="Source attribution">
        <div>
          <strong>Page source</strong>
          <span>{page.sourceTitle}</span>
        </div>
        <a href={sourceUrl(page)} target="_blank" rel="noopener noreferrer">
          Source file
        </a>
        <span>{page.sourceCommit.startsWith("bootstrap") ? "Bootstrap source" : `Commit ${page.sourceCommit.slice(0, 7)}`}</span>
      </section>

      <MarkdownContent markdown={page.body} />

      <footer className="docs-page-footer">
        <a className="docs-edit-link" href={editPlaceholder(page)} target="_blank" rel="noopener noreferrer">
          Edit on GitHub
        </a>
        <nav className="docs-page-neighbors" aria-label="Previous and next pages">
          {previous ? <a href={previous.path}><span>Previous</span>{previous.title}</a> : <span />}
          {next ? <a href={next.path}><span>Next</span>{next.title}</a> : <span />}
        </nav>
      </footer>
    </>
  );
}
