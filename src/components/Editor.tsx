import React, { useState } from "react";

interface EditorProps {
  onMarkdownChange: (markdown: string) => void;
  onDoubleClickLine?: (line: number) => void;
  textareaRef?: React.RefObject<HTMLTextAreaElement>;
}

const Editor: React.FC<EditorProps> = ({
  onMarkdownChange,
  onDoubleClickLine,
  textareaRef,
}) => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    onMarkdownChange(newMarkdown);
  };

  const handleDoubleClick = () => {
    const textarea = textareaRef?.current;
    if (!textarea) return;

    const cursorPosition = textarea.selectionStart;
    const lines = textarea.value.substr(0, cursorPosition).split("\n");
    const lineNumber = lines.length - 1;
    onDoubleClickLine?.(lineNumber);
  };

  return (
    <textarea
      ref={textareaRef}
      value={markdown}
      onChange={handleChange}
      onDoubleClick={handleDoubleClick}
      placeholder="Type your markdown here..."
      className="w-full h-full p-4 border rounded"
    />
  );
};

export default Editor;
