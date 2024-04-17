import { useState } from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import CompanyBrousher from "../assets/Brochure/Company Brochure.pdf";
import EssentialOils from "../assets/Brochure/Essential Oils.pdf";
import Extracts from "../assets/Brochure/Extracts.pdf";
import FinishedProducts from "../assets/Brochure/Finished Products.pdf";
import Masalas from "../assets/Brochure/Masala.pdf";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";

export default function Brochure() {
  const docs = [
    { uri: CompanyBrousher },
    { uri: EssentialOils },
    { uri: Extracts },
    { uri: FinishedProducts },
    { uri: Masalas },
  ]
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf;
    link.download = pdf.substring(pdf.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="py-5 px-4 sm:px-14">
      <h1 className="text-4xl font-semibold text-center">Brochure</h1>
      <ul className="text-xl p-4">
        <li className="flex justify-start items-center">
          Company Main Brochure{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[0])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(CompanyBrousher)}
          />
        </li>
        <li className="flex justify-start items-center">
          Essential Oils{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[1])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(EssentialOils)}
          />
        </li>
        <li className="flex justify-start items-center">
          Extracts{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[2])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(Extracts)}
          />
        </li>
        <li className="flex justify-start items-center">
          Finished Products{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[3])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(FinishedProducts)}
          />
        </li>
        <li className="flex justify-start items-center">
          Masalas{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[4])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(Masalas)}
          />
        </li>
      </ul>
      {pdfUrl && (
        <div style={{ width: "100%"}}>
        <DocViewer
          documents={docs}
          activeDocument={pdfUrl}
          renderers={DocViewerRenderers}
        />
        </div>
      )}
    </div>
  );
}
