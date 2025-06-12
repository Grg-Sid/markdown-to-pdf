import { useState, useRef } from "react";
import Editor from "./Editor";
import Preview from "./Preview";

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");
  const editorRef = useRef<HTMLTextAreaElement>(null!);

  const scrollToPreviewLine = (line: number) => {
    console.log(`Scrolling to preview line: ${line}`);
    const element = document.getElementById(`preview-line-${line}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToEditorLine = (line: number) => {
    console.log(`Scrolling to editor line: ${line}`);
    const editor = editorRef.current;
    if (!editor) return;

    const lines = editor.value.split("\n");
    const position = lines.slice(0, line).join("\n").length + line; // Calculate position based on line number
    editor.setSelectionRange(position, position);
    editor.scrollTop = (position / editor.value.length) * editor.scrollHeight;
  };

  return (
    <div className="flex h-screen">
      <div id="editor" className="w-1/2 overflow-auto">
        <Editor
          onMarkdownChange={setMarkdown}
          onDoubleClickLine={(line) => scrollToPreviewLine(line)}
          textareaRef={editorRef} // ✅ pass the ref
        />
      </div>
      <div id="priview" className="w-1/2 overflow-auto">
        <Preview
          markdown={markdown}
          onDoubleClickLine={(line) => scrollToEditorLine(line)}
        />
      </div>
    </div>
  );
};

export default MarkdownEditor;
