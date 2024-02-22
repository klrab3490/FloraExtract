import React from "react";
import IMG from "../../assets/Andrographis-Extract.jpeg";
import IMG2 from "../../assets/Andrographis.jpg";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

function HeroSection() {
  return (
    <div className="w-[100vw] h-[95vh] relative flex justify-center items-center">
      {/* Background Image */}
      <div className="z-0 w-full h-full relative overflow-hidden">
        <img src={IMG} alt="" className="absolute w-full h-full object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 w-96 h-auto flex flex-col justify-center items-center absolute top-20 left-0 text-white">
        <div className="w-auto">
          <h1 className="text-9xl">Flora </h1>
        </div>
        <div className="w-[800px] relative">
          <h1 className="text-9xl absolute right-0">
            Extracts <span className="text-5xl absolute top-0">®️</span>
          </h1>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="z-10 p-4 absolute bottom-28 left-10 text-white w-[600px]">
        <div className="p-4">
          <p className="text-2xl font-semibold mb-2">Discover our Extracts!</p>
          <p className="text-white mb-4">
            We offer 30+ extracts with top-notch quality at affordable prices.
          </p>
          <div className="flex justify-between">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">
              See Products
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="z-10 w-5/12 h-[18rem] absolute top-1/2 transform -translate-y-1/2 right-20 bg-slate-300 opacity-80 rounded-lg p-4 flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-3xl font-semibold pb-3">Andrographis Paniculata Extract</p>
          <p className="text-xl text-gray-600">
            Activities{" "}
            <span className="font-semibold text-slate-500">
              Total Bitters as Andrographolides 10%
            </span>
          </p>
          <p className="text-xl text-gray-600">
            Benefits{" "}
            <span className="font-semibold text-slate-500">
              Hepatoprotective Effects, Supports Healthy Inflammatory Response
            </span>
          </p>
        </div>
        <div className="flex-shrink-0">
          <img src={IMG2} alt="" className="w-32 h-32 object-cover rounded-full" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-20 right-20 flex">
        <div className="mr-3 w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center">
          <GoArrowLeft className="text-white" size={35} />
        </div>
        <div className="w-16 h-16 bg-slate-400 rounded-full flex items-center justify-center">
          <GoArrowRight className="text-white font-semibold" size={40} />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
