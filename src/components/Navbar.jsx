import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";


function Navbar() {
  return (
    <div className="w-[100vw] h-14   px-20 flex justify-center items-center absolute top-0 z-10">
      <div className="w-11/12 h-full border-2 border-t-0  flex border-slate-600 rounded-b-lg bg-white">
        <div className="flex-1.5 border-r-2 flex justify-center items-center border-slate-600">
          <h1 className="text-3xl px-2">Flora Extracts</h1>
        </div>
        <div className="flex-1 border-r-2 flex justify-center items-center border-slate-600 text-xl font-medium">
          Home
        </div>
        <div className="flex-1 border-r-2 flex justify-center items-center border-slate-600 text-xl font-medium">
          About
        </div>
        <div className="flex-1 border-r-2 flex justify-center items-center border-slate-600 text-xl font-medium">
          Products
        </div>
        <div className="flex-1 border-r-2 flex justify-center items-center border-slate-600 text-xl font-medium">
          Contact
        </div>
        <div className="flex-1 border-r-2 border-slate-600"></div>
        <div className="flex-1 border-r-2 flex justify-center items-center border-slate-600 text-xl font-medium">
          <CiSearch size={26} className="mr-2" />{" "}
          Search
        </div>

        <div className="flex-1  flex justify-center items-center text-xl font-medium">
        <IoBagHandleOutline size={26} className="mr-2" />{" "}
          Cart
        </div>
      </div>
    </div>
  );
}

export default Navbar;
