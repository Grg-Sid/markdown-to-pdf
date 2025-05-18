import { useState } from "react";

interface EditorProps {
  onMarkdownChange: (markdown: string) => void;
}

const Editor: React.FC<EditorProps> = ({ onMarkdownChange }) => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = event.target.value;
    setMarkdown(newMarkdown);
    onMarkdownChange(newMarkdown);
  };

  return (
    <textarea
      value={markdown}
      onChange={handleChange}
      placeholder="Type your markdown here..."
      className="w-full h-full p-4 border rounded"
    />
  );
};

export default Editor;
