// components
import SetapartBox from "../../components/SetapartBox";

function WhatSet() {
    return (
        <div className="flex flex-col w-full h-auto justify-center items-center">
            <div className="h-10"/>
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-4xl sm:text-6xl font-semibold px-1 sm:px-2 text-[#5e1c0e]">02</span> What Sets Us Apart
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-4xl sm:text-6xl font-semibold px-1 sm:px-2 text-[#5e1c0e]">02</span> What Sets Us Apart
                </div>
            </div>
            {/*<div className="bg-[#fff]">
                <img src={Sep1} alt="" className="w-[100vw] h-20" />
            </div>
            <div className="w-full h-auto py-3 bg-[#5ACEA1] flex justify-center items-center flex-col gap-3 px-4 sm:px-8">
            */}
            <div className="w-full h-auto py-3 flex justify-center items-center flex-col gap-3 px-4 sm:px-8">
                <SetapartBox />
            </div>
            {/*
            <div className="">
                <img src={Sep2} alt="" className="w-[100vw] h-20" />
            </div>
            */}
            <div className="h-20"/>
        </div>
    );
}

export default WhatSet;
