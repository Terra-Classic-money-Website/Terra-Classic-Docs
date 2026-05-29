import type { ReactNode } from "react";
import { slugify } from "./text";

type Block =
  | { type: "heading"; depth: number; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "code"; language: string; code: string }
  | { type: "table"; rows: string[][] };

function inline(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /(`[^`]+`|\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text))) {
    if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
    const token = match[0];
    if (token.startsWith("`")) {
      nodes.push(<code key={`${match.index}-code`}>{token.slice(1, -1)}</code>);
    } else if (token.startsWith("**")) {
      nodes.push(<strong key={`${match.index}-strong`}>{token.slice(2, -2)}</strong>);
    } else {
      const link = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const href = link[2];
        const external = /^https?:/i.test(href);
        nodes.push(
          <a key={`${match.index}-link`} href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
            {link[1]}
          </a>,
        );
      }
    }
    cursor = match.index + token.length;
  }

  if (cursor < text.length) nodes.push(text.slice(cursor));
  return nodes;
}

function parseTable(lines: string[]) {
  return lines.map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
}

export function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  const headingCounts = new Map<string, number>();
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const fence = line.match(/^```(\S*)/);
    if (fence) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith("```")) {
        codeLines.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: "code", language: fence[1] || "text", code: codeLines.join("\n") });
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      const text = heading[2].replace(/#+$/, "").trim();
      const base = slugify(text);
      const count = headingCounts.get(base) ?? 0;
      headingCounts.set(base, count + 1);
      blocks.push({ type: "heading", depth: heading[1].length, id: count === 0 ? base : `${base}-${count + 1}`, text });
      index += 1;
      continue;
    }

    if (line.trim().startsWith(">")) {
      const quoteLines: string[] = [];
      while (index < lines.length && lines[index].trim().startsWith(">")) {
        quoteLines.push(lines[index].trim().replace(/^>\s?/, ""));
        index += 1;
      }
      blocks.push({ type: "blockquote", text: quoteLines.join(" ") });
      continue;
    }

    if (/^\s*[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const items: string[] = [];
      const itemPattern = ordered ? /^\s*\d+\.\s+/ : /^\s*[-*]\s+/;
      while (index < lines.length && itemPattern.test(lines[index])) {
        items.push(lines[index].replace(itemPattern, "").trim());
        index += 1;
      }
      blocks.push({ type: "list", ordered, items });
      continue;
    }

    if (line.includes("|") && lines[index + 1]?.match(/^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/)) {
      const tableLines = [line];
      index += 2;
      while (index < lines.length && lines[index].includes("|") && lines[index].trim()) {
        tableLines.push(lines[index]);
        index += 1;
      }
      blocks.push({ type: "table", rows: parseTable(tableLines) });
      continue;
    }

    const paragraph: string[] = [];
    while (index < lines.length && lines[index].trim()) {
      if (/^(#{1,4})\s+/.test(lines[index]) || /^```/.test(lines[index])) break;
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "paragraph", text: paragraph.join(" ") });
  }

  return blocks;
}

export function MarkdownContent({ markdown }: { markdown: string }) {
  const blocks = parseMarkdown(markdown);

  return (
    <div className="docs-markdown">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Heading = `h${Math.min(block.depth, 4)}` as "h1" | "h2" | "h3" | "h4";
          return (
            <Heading id={block.id} key={`${block.id}-${index}`}>
              <a href={`#${block.id}`} className="heading-anchor" aria-label={`Link to ${block.text}`}>
                #
              </a>
              {inline(block.text)}
            </Heading>
          );
        }
        if (block.type === "paragraph") return <p key={index}>{inline(block.text)}</p>;
        if (block.type === "blockquote") return <blockquote key={index}>{inline(block.text)}</blockquote>;
        if (block.type === "code") {
          return (
            <pre key={index}>
              <code data-language={block.language}>{block.code}</code>
            </pre>
          );
        }
        if (block.type === "list") {
          const List = block.ordered ? "ol" : "ul";
          return (
            <List key={index}>
              {block.items.map((item, itemIndex) => <li key={itemIndex}>{inline(item)}</li>)}
            </List>
          );
        }
        return (
          <div className="docs-table-wrap" key={index}>
            <table>
              <thead>
                <tr>{block.rows[0]?.map((cell, cellIndex) => <th key={cellIndex}>{inline(cell)}</th>)}</tr>
              </thead>
              <tbody>
                {block.rows.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}>{inline(cell)}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
