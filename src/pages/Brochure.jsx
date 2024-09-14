import { useState } from 'react';
import { FaEye, FaDownload } from 'react-icons/fa';
import CompanyBrousher from "../assets/Brochure/Company Brochure.pdf";
import Extracts from "../assets/Brochure/Extracts.pdf";
import FinishedProducts from "../assets/Brochure/Finished Products.pdf";
import FlavourIngredients from "../assets/Brochure/Flavour Ingredients.pdf";
import NaturalFoodColour from "../assets/Brochure/Natural Food Colour.pdf";
import NaturalPreservatives from "../assets/Brochure/Natural Preservatives.pdf";
import Spices from "../assets/Brochure/Spices.pdf";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import ImpNews from '../components/ImpNews';

export default function Brochure() {
  const docs = [
    { uri: CompanyBrousher },
    { uri: Extracts },
    { uri: FinishedProducts },
    { uri: FlavourIngredients },
    { uri: NaturalFoodColour },
    { uri: NaturalPreservatives },
    { uri: Spices },
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
    
    <ImpNews>
                We are please to inform you that we are to present our products at the upcoming IFT Chicago Session at booth 952. We are looking forward to your presence.
    </ImpNews>
      <h1 className="text-4xl font-semibold text-center">Brochures</h1>
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
          Extracts{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[1])}
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
            onClick={() => setPdfUrl(docs[2])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(FinishedProducts)}
          />
        </li>
        <li className="flex justify-start items-center">
          Flavour Ingredients{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[3])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(FlavourIngredients)}
          />
        </li>
        <li className="flex justify-start items-center">
          Natural Food Colour{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[4])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(NaturalFoodColour)}
          />
        </li>
        <li className="flex justify-start items-center">
          Natural Preservatives{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[5])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(NaturalPreservatives)}
          />
        </li>
        <li className="flex justify-start items-center">
          Spices{" "}
          <FaEye
            className="ml-5 mr-2 cursor-pointer"
            onClick={() => setPdfUrl(docs[6])}
          />
          <FaDownload
            className="cursor-pointer"
            onClick={() => handleDownload(Spices)}
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
