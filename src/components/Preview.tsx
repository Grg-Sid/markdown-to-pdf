import type React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import extractBlocks from "../utils/extractBlocks";

interface PreviewProps {
  markdown: string;
  onDoubleClickLine?: (line: number) => void;
}

const Preview: React.FC<PreviewProps> = ({ markdown, onDoubleClickLine }) => {
  const blocks = extractBlocks(markdown);

  return (
    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
      {blocks.map(({ block, line }: { block: string; line: number }) => (
        <div
          key={line}
          id={`preview-line-${line}`}
          onDoubleClick={() => onDoubleClickLine?.(line)}
        >
          <ReactMarkdown
            rehypePlugins={[rehypeKatex, rehypeHighlight]}
            remarkPlugins={[remarkMath, remarkGfm]}
          >
            {block}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default Preview;
