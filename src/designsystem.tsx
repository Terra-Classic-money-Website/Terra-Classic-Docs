import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/tokens.css";
import "./styles/base.css";
import "./styles/docs.css";
import "./styles/designsystem.css";

function DesignSystem() {
  const navRows = ["Start here", "Wallets", "Run a full node", "Smart contracts"];

  return (
    <main className="ds-main">
      <section className="ds-hero">
        <img src="/assets/sidebar-logo.svg" alt="Terra Classic" />
        <div>
          <h1>Terra Classic Docs design system</h1>
          <p>Docs-specific patterns inherit the Terra Classic Website typography, token scale, restrained navigation behavior, and public-good tone.</p>
        </div>
      </section>

      <section className="ds-section">
        <h2>Typography</h2>
        <div className="ds-type-grid">
          <div><span>H1</span><strong className="ds-h1">Documentation that stays source-aware.</strong></div>
          <div><span>H2</span><strong className="ds-h2">Run a full node</strong></div>
          <div><span>Body</span><p>Readable long-form technical copy with enough density for operators and builders without drifting into a generic docs template.</p></div>
        </div>
      </section>

      <section className="ds-section">
        <h2>Docs Sidebar Rows</h2>
        <div className="ds-sidebar-sample">
          {navRows.map((row, index) => (
            <a className={index === 1 ? "docs-nav-row docs-nav-row--active" : "docs-nav-row"} href="/" key={row} onClick={(event) => event.preventDefault()}>
              <span className="docs-nav-dot" aria-hidden="true" />
              <span>{row}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="ds-section">
        <h2>Content States</h2>
        <div className="ds-state-row">
          <span className="docs-status docs-status--imported">Imported</span>
          <span className="docs-status docs-status--draft">Draft</span>
          <span className="docs-status docs-status--reviewed">Reviewed</span>
        </div>
        <aside className="docs-review-note">Imported pages must remain visibly marked until the documentation has been reviewed for accuracy, risk, and current Terra Classic behavior.</aside>
      </section>

      <section className="ds-section">
        <h2>Markdown Surface</h2>
        <div className="docs-markdown ds-markdown-sample">
          <h2 id="sample-heading"><a className="heading-anchor" href="#sample-heading">#</a>Heading anchors</h2>
          <p>Inline links, <code>code</code>, tables, and long paragraphs use the same measured rhythm as the production docs renderer.</p>
          <pre><code>terrad status</code></pre>
        </div>
      </section>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DesignSystem />
  </StrictMode>,
);
