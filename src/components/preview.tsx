import type React from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";
import "katex/dist/katex.min.css";
import remarkGfm from "remark-gfm";

interface PreviewProps {
  markdown: string;
}

const Preview: React.FC<PreviewProps> = ({ markdown }) => {
  return (
    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default Preview;
