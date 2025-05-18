import React, { useState } from "react";
import Editor from "./components/editor";
import Preview from "./components/preview";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  return (
    <div className="flex w-screen h-screen">
      <div className="w-1/2 border-r p-4">
        <h2 className="text-xl font-bold mb-2">Markdown Editor</h2>
        <Editor onMarkdownChange={setMarkdown} />
      </div>
      <div className="w-1/2 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-2">Preview</h2>
        <Preview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
