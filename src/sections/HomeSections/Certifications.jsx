// image
import ISO from "../../assets/Certifications/iso-seeklogo.svg";
import FSSAI from "../../assets/Certifications/Fssai Logo Vector.svg";
import GMP from "../../assets/Certifications/GoodManufacturing.png";
import AEO from "../../assets/Certifications/AEO.png";
import BRCGS from "../../assets/Certifications/BRCGS.png";
import FAMI from "../../assets/Certifications/FAMI_QS.png";
import FSSC22000 from "../../assets/Certifications/FSSC22000.png";
import HALAL from "../../assets/Certifications/HALAL.png";
import HALAL_INDO from "../../assets/Certifications/HALAL_INDO.png";
import INDIA_ORGANIC from "../../assets/Certifications/INDIA_ORGANIC.png";
import ORGANIC from "../../assets/Certifications/Organic_EU_Scope.png";
import RA from "../../assets/Certifications/Rainforest_Alliance.png";

function Certifications() {
    return (
        <div className="w-full h-auto">
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>
                    Manufacturers&rsquo; Certifications
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>{" "}
                    Manufacturers&rsquo; Certifications
                </div>
            </div>
            <div className="sm:px-10 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 px-5 py-10 place-items-center w-full sm:gap-2 gap-4">
                    <img src={ISO} alt="ISO" className="sm:h-36 h-16 "/>
                    <img src={FSSAI} alt="FASSAT" className="sm:h-36 h-16 w-44"/>
                    <img src={GMP} alt="Good Manufacturing Practice" className="sm:h-36 h-16" />
                    <img src={AEO} alt="AEO Indian Customs" className="sm:h-36 h-16" />
                    <img src={BRCGS} alt="BRCGS Food Safety" className="sm:h-36 h-16" />
                    <img src={FAMI} alt="FAMI QS" className="sm:h-36 h-16" />
                    <img src={FSSC22000} alt="FSSC 22000" className="sm:h-36 h-16" />
                    <img src={HALAL} alt="" className="sm:h-36 h-16" />
                    <img src={HALAL_INDO} alt="" className="sm:h-36 h-16" />
                    <img src={INDIA_ORGANIC} alt="" className="sm:h-36 h-16" />
                    <img src={ORGANIC} alt="" className="sm:h-36 h-16" />
                    <img src={RA} alt="Rainforest Alliance" className="sm:h-36 h-16" />
                </div>
            </div>
        </div>
    );
}

export default Certifications;
