// icon
import { MdArrowOutward } from "react-icons/md";

// image
import img from "../../assets/gardening.jpg"

// Imports
import { NavLink } from 'react-router-dom';
import Slider from "react-slick";
import { useState } from "react";

function HeroSectionSec() {
    const content = [
        <div className='w-full h-auto flex flex-col items-center justify-center pt-10 px-5 sm:px-10 pb-10'>
            <h1 className='text-4xl sm:text-8xl text-[#290c06] text-center py-4 font-semibold'>Nurturing Health, <br></br>Enriching Life – Naturally</h1>
            <h1 className='text-lg sm:text-2xl text-center'>Transform your well-being with our exclusive range of natural extracts,<br></br> from raw essences to convenient capsules and innovative soft gels, including patented products that optimize health and elevate your life.</h1>
            <NavLink to={'/shop'} className="flex mt-4 relative justify-center items-center w-full sm:w-52 z-20">
                <div className="relative">
                    <div className="absolute w-full sm:w-[163px] h-full sm:h-14 top-2 left-2 bg-[#290c06]"></div>
                    <div className="flex justify-center items-center px-3 py-3 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer relative z-10">
                        <h1 className='text-base sm:text-xl font-medium text-[#290c06]'>See Products</h1>
                        <MdArrowOutward size={20} className='text-white sm:text-lg'/>
                    </div>
                </div>
            </NavLink>
        </div>
        , <div className="h-[85vh] w-full bg-black">
               
            <div className=" pt-36 text-center w-full z-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl p-4 text-white font-bold tracking-wider">
                Where Nature Thrives, Cultivating Beauty, One Leaf at a Time.
              </h1>
              <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
                We’ve been the world's leading manufacturer of standardized botanical
                extracts for over 30 years. And we believe our journey has only begun.
              </p>
              <button className="bg-green-500 text-white py-2 px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-green-600 transition duration-300" >
                Explore Now
              </button>
            </div>
          </div>
        ,
    ];

    const [current,setCurrent] = useState(0);
    const handleNext = () => {
        setCurrent((current + 1) % content.length);
    }

    const handlePrev = () => {
        setCurrent((current - 1 + content.length ) % content.length);
    }
    return (
        <div className='w-full h-auto flex items-center justify-center pt-10 px-5 sm:px-10 pb-10 min-h-[80vh]'>
            <button type="submit" onClick={handlePrev}>left</button>
            <div>{content[current]}</div>
            <button type="submit" onClick={handleNext}>right</button>
        </div>
    )
}

export default HeroSectionSec;
