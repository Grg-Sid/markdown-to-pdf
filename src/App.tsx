import { useRef } from "react";
import MarkdownEditor from "./components/MarkdownEditorPreview";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Navbar printContentRef={previewRef} />
      <MarkdownEditor previewRef={previewRef} />
    </>
  );
};

export default App;
