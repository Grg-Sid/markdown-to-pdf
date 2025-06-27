import type React from "react";
import PrintComponent from "./PrintComponent";

interface NavbarProps {
  printContentRef: React.RefObject<HTMLDivElement | null>;
}

const Navbar: React.FC<NavbarProps> = ({ printContentRef }) => {
  return (
    <nav className="bg-gray">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <a href="/" className="text-black text-lg font-bold">
            Markdown to PDF
          </a>
          <PrintComponent contentRef={printContentRef} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
