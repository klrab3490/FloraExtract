import React from "react";
import ISO from "../../assets/Certifications/iso-seeklogo.svg"
import fasst from "../../assets/Certifications/Fssai Logo Vector.svg"
import GDM from "../../assets/Certifications/GoodManufacturing.png"

function Certifications() {
  return (
    <div className="w-full h-auto">
      <div className="w-full flex justify-start items-center pl-10 relative pb-4">
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>
          Certifications
        </div>
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">06</span>{" "}
          Certifications
        </div>
      </div>
      <div className="flex justify-around items-center px-5 pt-10">
        <img src={ISO} alt="" className="h-36"/>
        <img src={fasst} alt="" className="h-36"/>
        <img src={GDM} alt=""className="h-60" />
      </div>
    </div>
  );
}

export default Certifications;
