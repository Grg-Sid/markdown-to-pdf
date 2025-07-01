import { useState, useRef, useEffect } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import floorBinarySearch from "../utils/floorBinarySearch";

interface MarkdownEditorPreviewProps {
  previewRef?: React.RefObject<HTMLDivElement | null>;
}

const MarkdownEditorPreview: React.FC<MarkdownEditorPreviewProps> = ({
  previewRef,
}) => {
  const [markdown, setMarkdown] = useState<string>("");
  const [privewLines, setPreviewLines] = useState<number[]>([]);
  const editorRef = useRef<HTMLTextAreaElement>(null!);

  const scrollToPreviewLine = (line: number) => {
    const approxLine = floorBinarySearch(privewLines, line);
    const element = document.getElementById(`preview-line-${approxLine}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const scrollToEditorLine = (line: number) => {
    console.log(`Scrolling to editor line: ${line}`);
    const editor = editorRef.current;
    if (!editor) return;

    const lines = editor.value.split("\n");
    const position = lines.slice(0, line).join("\n").length + line;

    editor.setSelectionRange(position, position);

    const targetScrollTop =
      (position / editor.value.length) * editor.scrollHeight;

    editor.scrollTo({
      top: targetScrollTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const allPreviewLines = Array.from(
      document.querySelectorAll("[id^='preview-line-']")
    )
      .map((el) => parseInt(el.id.replace("preview-line-", ""), 10))
      .filter((line) => !isNaN(line));
    setPreviewLines(allPreviewLines);
  }, [markdown]);

  return (
    <div id="editor-preview-container" className="flex h-162">
      <div id="editor" className="w-1/2 overflow-auto">
        <Editor
          onMarkdownChange={setMarkdown}
          onDoubleClickLine={(line) => scrollToPreviewLine(line)}
          textareaRef={editorRef}
        />
      </div>
      <div
        id="preview"
        className="w-1/2 overflow-auto p-4 border-l border-r border-b"
      >
        <Preview
          priviewRef={previewRef}
          markdown={markdown}
          onDoubleClickLine={(line) => scrollToEditorLine(line)}
          setPreviewLines={setPreviewLines}
        />
      </div>
    </div>
  );
};

export default MarkdownEditorPreview;
