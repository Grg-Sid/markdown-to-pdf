import { useRef } from "react";
import MarkdownEditor from "./components/MarkdownEditor";
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
