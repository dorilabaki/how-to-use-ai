'use client';

import { Fragment, ReactNode } from 'react';

// Helper to parse inline markdown (bold, code, etc.)
function parseInlineMarkdown(text: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Match bold text **text**
    const boldMatch = remaining.match(/^(.*?)\*\*(.+?)\*\*(.*)/);
    if (boldMatch) {
      if (boldMatch[1]) {
        parts.push(<Fragment key={key++}>{boldMatch[1]}</Fragment>);
      }
      parts.push(<strong key={key++} className="text-text-primary font-semibold">{boldMatch[2]}</strong>);
      remaining = boldMatch[3];
      continue;
    }

    // Match inline code `code`
    const codeMatch = remaining.match(/^(.*?)`(.+?)`(.*)/);
    if (codeMatch) {
      if (codeMatch[1]) {
        parts.push(<Fragment key={key++}>{codeMatch[1]}</Fragment>);
      }
      parts.push(<code key={key++} className="px-1.5 py-0.5 bg-dark-700 text-primary-400 rounded text-sm font-mono">{codeMatch[2]}</code>);
      remaining = codeMatch[3];
      continue;
    }

    // No more matches, add remaining text
    parts.push(<Fragment key={key++}>{remaining}</Fragment>);
    break;
  }

  return parts;
}

// Component to render markdown content with proper list grouping
export default function MarkdownContent({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Handle markdown headers with IDs
    const h2Match = line.match(/^## (.+?) \{#(.+?)\}$/);
    if (h2Match) {
      elements.push(
        <h2
          key={i}
          id={h2Match[2]}
          className="text-2xl font-bold text-text-primary mt-16 mb-6 scroll-mt-24"
        >
          {h2Match[1]}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-[1.75rem] font-bold text-text-primary mt-12 mb-6">
          {line.replace('## ', '')}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={i} className="text-[1.375rem] font-semibold text-text-primary mt-10 mb-4">
          {line.replace('### ', '')}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('#### ')) {
      elements.push(
        <h4 key={i} className="text-lg font-semibold text-text-primary mt-8 mb-3">
          {line.replace('#### ', '')}
        </h4>
      );
      i++;
      continue;
    }

    // Collect numbered list items
    if (line.match(/^\d+\. /)) {
      const listItems: ReactNode[] = [];
      while (i < lines.length && lines[i].match(/^\d+\. /)) {
        const itemText = lines[i].replace(/^\d+\. /, '');
        listItems.push(
          <li key={i} className="text-text-secondary mb-3 leading-[1.75]">
            {parseInlineMarkdown(itemText)}
          </li>
        );
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 my-8 space-y-2">
          {listItems}
        </ol>
      );
      continue;
    }

    // Collect bullet list items
    if (line.startsWith('- ')) {
      const listItems: ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const itemText = lines[i].replace('- ', '');
        listItems.push(
          <li key={i} className="text-text-secondary mb-3 leading-[1.75]">
            {parseInlineMarkdown(itemText)}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 my-8 space-y-2">
          {listItems}
        </ul>
      );
      continue;
    }

    // Handle tables
    if (line.startsWith('| ')) {
      elements.push(
        <div key={i} className="overflow-x-auto my-4">
          <div className="text-sm text-text-muted font-mono bg-dark-800 px-4 py-2 rounded">
            {line}
          </div>
        </div>
      );
      i++;
      continue;
    }

    // Handle code blocks (lines that appear to be quoted examples)
    if (line.startsWith('"') && line.endsWith('"')) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-primary-500/50 pl-4 my-4 text-text-secondary italic">
          {line}
        </blockquote>
      );
      i++;
      continue;
    }

    // Skip empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Regular paragraph with inline parsing
    elements.push(
      <p key={i} className="text-text-secondary leading-[1.8] mb-6">
        {parseInlineMarkdown(line)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}
