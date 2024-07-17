// icon
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";

// image
import img from "../../assets/gardening.jpg";
import research from "../../assets/research.jpeg";
import ocean from "../../assets/HeroSlider/OCEAN.png";
import nature from "../../assets/HeroSlider/NATURE.png";

// Imports
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

// Add prop validation for 'targetNumber'
Counter.propTypes = {
  targetNumber: PropTypes.number.isRequired,
};

function Counter({ targetNumber }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const duration = 2000;

  useEffect(() => {
    const increment = Math.ceil(targetNumber / (duration / 100));
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        const newNumber = prevNumber + increment;
        return newNumber >= targetNumber ? targetNumber : newNumber;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [targetNumber]);
  return <div>{currentNumber}+</div>;
}

function HeroSectionSec() {
  const content = [
    <div
      key="content1"
      className="w-full h-[75vh] rounded-xl border-4 border-[#290c06]"
    >
      <div className="flex flex-col items-center justify-center h-full w-full sm:w-[94vw] p-2">
        <h1 className="text-4xl sm:text-8xl text-[#290c06] text-center py-4 font-semibold">
          Nurturing Health, <br />
          Enriching Life – Naturally
        </h1>
        <h1 className="text-lg sm:text-2xl text-center">
          Transform your well-being with our exclusive range of natural
          extracts,<br></br> from raw essences to convenient capsules and
          innovative soft gels, including patented products that optimize health
          and elevate your life.
        </h1>
        <NavLink
          to={"/shop"}
          className="flex mt-4 relative justify-center items-center w-full sm:w-52 z-20"
        >
          <div className="relative">
            <div className="absolute w-full sm:w-[163px] h-full sm:h-14 top-2 left-2 bg-[#290c06]"></div>
            <div className="flex justify-center items-center px-3 py-3 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer relative z-10">
              <h1 className="text-base sm:text-xl font-medium text-[#290c06]">
                See Products
              </h1>
              <MdArrowOutward
                size={20}
                className="text-white sm:text-lg"
              />
            </div>
          </div>
        </NavLink>
      </div>
    </div>,
    <div
      key="content2"
      className="w-full"
    >
      <div className="relative h-[75vh] w-full">
        <img
          src={img}
          alt="hero"
          className="w-[100vw] h-full object-cover rounded-xl"
        />
        <div className="absolute top-0 left-0 sm:p-10 p-2 text-center h-[75vh] w-full rounded-xl bg-black/60">
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl sm:text-7xl p-4 text-white font-bold tracking-wider">
              {" "}
              Where Nature Thrives,
              <br /> Cultivating Beauty,
              <br /> One Leaf at a Time.{" "}
            </h1>
            <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
              {" "}
              We&apos;ve been the world&apos;s leading manufacturer of
              standardized botanical extracts for over 20 years.
              <br /> And we believe our journey has only begun.
            </p>
            <NavLink
              to={"/shop"}
              className="bg-green-500 text-white py-2 px-6 rounded-full text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl hover:bg-green-600 transition duration-300"
            >
              {" "}
              Explore Now{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="content2"
      className="w-full"
    >
      <div className="relative h-[75vh]">
        <img
          src={research}
          alt="hero"
          className="w-[100vw] h-full object-cover rounded-xl"
        />
        <div className="absolute top-0 left-0 sm:p-10 p-2 text-center h-[75vh] w-full rounded-xl bg-black/60 text-white">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-4xl sm:text-7xl p-4 font-bold tracking-wider">
              We Provide The Best By <br /> Innovating Naturally
            </div>
            <div className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
              An expert nutraceutical manufacturer providing a one-stop solution
              with
              <br /> comprehensive project support from ideation to product
              launch.
            </div>
            <div className="text-xl flex gap-10 justify-start items-center">
              <div className="flex flex-col text-start">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                  <Counter targetNumber={100} />
                </div>
                <div>Safe Health Supplements</div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
                  <Counter targetNumber={20} />
                </div>
                <div>Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="content3"
      className="w-full"
    >
      <div className="relative h-[75vh]">
        <img
          src={ocean}
          alt="hero"
          className="w-[100vw] h-full object-cover rounded-xl"
        />
        <div className="absolute top-0 left-0 sm:p-10 p-2 text-center h-[75vh] w-full rounded-xl bg-black/30 text-white">
          <div className="flex flex-col items-center justify-center h-full pb-44">
            <div className="text-4xl sm:text-7xl p-4 font-bold tracking-wider">
              Unlock your Inner Energy
            </div>
            <div className="text-white items-start text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-8">
              Boost your health from within
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div
      key="content4"
      className="w-full"
    >
      <div className="relative h-[75vh]">
        <img
          src={nature}
          alt="hero"
          className="w-[100vw] h-full object-cover rounded-xl"
        />
        <div className="absolute top-0 left-0 sm:p-10 p-2 text-center h-[75vh] w-full rounded-xl bg-black/20 text-white">
          <div className="flex flex-col items-center justify-center h-full pb-36">
            <div className="text-4xl sm:text-7xl p-4 font-bold tracking-wider">
              Unlock your Inner Energy
            </div>
            <div className="text-white items-start text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mx-auto mb-15">
              Boost your health from within
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  // State Counter + Automatic Incrementer
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % content.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [content.length]);

  return (
    <div className="w-full flex items-center justify-center md:p-10 p-4 h-[80vh]">
      <div className="flex">
        <AnimatePresence initial={false}>
          {content.map(
            (item, index) =>
              index === current && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: "100" }}
                  animate={{ opacity: 1, x: 0, width: "100" }}
                  exit={{ opacity: 0, x: "-100", width: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {item}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default HeroSectionSec;