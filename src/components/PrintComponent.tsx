import { useReactToPrint } from "react-to-print";

interface PrintComponentProps {
  contentRef?: React.RefObject<HTMLDivElement | null>;
}

const PrintComponent: React.FC<PrintComponentProps> = ({ contentRef }) => {
  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef,
  });

  return (
    <div>
      <button
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        onClick={reactToPrintFn}
      >
        Print
      </button>
    </div>
  );
};

export default PrintComponent;
