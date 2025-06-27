import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";
import extractBlocks from "../utils/extractBlocks";

interface PreviewProps {
  priviewRef?: React.RefObject<HTMLDivElement | null>;
  markdown: string;
  onDoubleClickLine?: (line: number) => void;
  setPreviewLines?: (lines: number[]) => void;
}

const Preview: React.FC<PreviewProps> = ({
  priviewRef,
  markdown,
  onDoubleClickLine,
}) => {
  const blocks = extractBlocks(markdown);

  return (
    <div
      id="print-section"
      className="prose prose-sm sm:prose lg:prose-lg max-w-none print:w-full print:max-w-none print:m-0"
      ref={priviewRef}
    >
      {blocks.map(({ block, line }) => (
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
