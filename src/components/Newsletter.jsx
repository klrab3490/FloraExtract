import React from "react";
import { NavLink } from 'react-router-dom'
import { IoIosPlayCircle, IoMdArrowRoundForward } from 'react-icons/io'
import { FaRegRegistered } from 'react-icons/fa6'

function Newsletter() {
  return (
    <div>
      <div className="bg-[#5ACEA1] text-[#290c06] font-semibold grid grid-cols-1 lg:grid-cols-2 py-7">
        {/* Right */}
        <div className="px-4 sm:px-14">
          <div className="text-5xl flex">
            FLORAEXTRACTS <FaRegRegistered size={25} className="" />
          </div>
          <div className="text-xl sm:w-[500px] py-5">

            Is the world&apos;s leading manufacturer and innovator of
            standardised botanical extracts. Since opening our doors in 1989,
            we’ve grown exponentially, serving customers in over 60 countries
          </div>
          <div className="flex items-center">
          <div className="flex mt-4 relative justify-center items-center w-52 z-20">
                <div className="flex justify-center items-center px-3 py-3 w-40 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer">
                    <h1 className='text-xl font-medium text-[#290c06]'>About us</h1>
                    <IoMdArrowRoundForward size={28} className='text-white'/>
                </div>
                <div className="w-40 h-14 -z-10 top-1 right-4 bg-[#290c06] absolute"></div>
            </div>

            <p className="flex items-center ml-10 text-xl">
              {" "}
              <IoIosPlayCircle className="mr-2" size={40} /> Play Video
            </p>
          </div>
        </div>
        {/* Left */}
        <div className="flex flex-col justify-end items-center sm:items-end mt-4 sm:mt-0 sm:mr-14">
          <div className="text-xl text-center sm:text-left">
            Stay updated on the latest happenings!
          </div>
          <div className="mt-3">
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Email Adddress"
                className="w-[250px] sm:w-[300px] text-xl h-12 rounded-l-xl text-[#290c06] border-2 border-[#290c06] px-5 bg-[#fdfde1] focus:outline-none focus:ring-2 focus:ring-[#fd9b40] focus:border-transparent"
              />
              <button className="bg-[#fd9b40] text-[#290c06] h-12 w-32 rounded-r-xl text-xl border-[#290c06] border-2 border-l-0">
                Subscribe
              </button>
            </div>
            <div className="text-xl text-[#290c06] mt-3 w-full sm:w-[428px] text-center sm:text-left">
              {" "}
              For sales related enquires please email us at sales@something.com{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
