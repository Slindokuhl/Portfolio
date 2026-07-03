import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import bash from "react-syntax-highlighter/dist/esm/languages/prism/bash";
import nginx from "react-syntax-highlighter/dist/esm/languages/prism/nginx";
import sql from "react-syntax-highlighter/dist/esm/languages/prism/sql";
import typescript from "react-syntax-highlighter/dist/esm/languages/prism/typescript";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import type { CodeBlock as CodeBlockData } from "@/data/caseStudies";

SyntaxHighlighter.registerLanguage("bash", bash);
SyntaxHighlighter.registerLanguage("nginx", nginx);
SyntaxHighlighter.registerLanguage("sql", sql);
SyntaxHighlighter.registerLanguage("typescript", typescript);

export function CodeBlock({ language, label, code }: CodeBlockData) {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-[#1e1e1e]">
      {label && (
        <div className="flex items-center justify-between px-4 py-2 bg-secondary/60 border-b border-border">
          <span className="text-xs font-mono text-muted-foreground">{label}</span>
          <span className="text-xs font-mono text-muted-foreground/60 uppercase tracking-wider">
            {language}
          </span>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: "transparent",
          fontSize: "0.8rem",
          lineHeight: 1.6,
        }}
        wrapLongLines={false}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
