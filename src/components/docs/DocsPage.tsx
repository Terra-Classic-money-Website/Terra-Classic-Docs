import type { DocsPage as DocsPageType } from "../../docs/types";
import { getPageBySlug } from "../../docs/routing";
import { MarkdownContent } from "../../docs/markdown";

const DOCS_REPOSITORY_URL = "https://github.com/Terra-Classic-money-Website/Terra-Classic-Docs";

function getEditUrl(page: DocsPageType) {
  return `${DOCS_REPOSITORY_URL}/edit/main/${page.sourceFile}`;
}

export function DocsPage({ page }: { page: DocsPageType }) {
  const previous = getPageBySlug(page.previousSlug);
  const next = getPageBySlug(page.nextSlug);

  return (
    <>
      <header className="docs-page-header">
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </header>

      <MarkdownContent markdown={page.body} />

      <footer className="docs-page-footer">
        <a className="docs-edit-link" href={getEditUrl(page)} target="_blank" rel="noopener noreferrer">
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
