// image
import ISO from "../../assets/Certifications/iso-seeklogo.svg";
import fasst from "../../assets/Certifications/Fssai Logo Vector.svg";
import GDM from "../../assets/Certifications/GoodManufacturing.png";

function Certifications() {
    return (
        <div className="w-full h-auto">
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>
                    Certifications
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>{" "}
                    Certifications
                </div>
            </div>
            <div className="flex sm:justify-around justify-center items-center px-5 pt-10">
                <img src={ISO} alt="" className="sm:h-36 h-16"/>
                <img src={fasst} alt="" className="sm:h-36 h-16"/>
                <img src={GDM} alt="" className="sm:h-60 h-32" />
            </div>
        </div>
    );
}

export default Certifications;
