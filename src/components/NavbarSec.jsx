// icon
import Logo from "../assets/logo.png";
import { IoMdOpen, IoMdClose } from "react-icons/io";

// import
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function NavbarSec() {
  const [Nav,SetNav] = useState(false);

  const handleNav = () => {
    SetNav(!Nav);
  }

  const closeNav = () => {
    SetNav(false);
  }

  const variants = {
    open: { opacity: 1, y: 0, transition: { staggerChildren: 0.5} },
    closed: { opacity: 0, y: "-100%" }
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -50 }
  }

  return (
    <div>
      <div className="w-[100vw] flex justify-center items-center px-2 py-2 font-semibold">
        
        <div className="px-4 py-2 hidden sm:flex">
          <NavLink to={'/shop'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Products</NavLink>
        </div>
        <div className="px-4 py-2 hidden sm:flex">
          <NavLink to={'/'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Home</NavLink>
        </div>
        <div to={'/'} className="flex flex-col items-center px-4 cursor-pointer">
          <img src={Logo} alt="Floral Extracts" className="h-14" />
          <h1 className="text-3xl text-[#290c06] font-bold ">Flora Extracts</h1>
          <div className="sm:hidden">
            {Nav ? <IoMdClose onClick={handleNav} className="text-4xl text-[#290c06] cursor-pointer absolute top-15 right-4" /> : <IoMdOpen onClick={handleNav} className="text-4xl text-[#290c06] cursor-pointer absolute top-15 right-4" /> }
            <AnimatePresence>
              {Nav && (
                <motion.div key="menu" initial="closed" animate="open" exit="closed" variants={variants} className="xl:hidden text-2xl w-40 absolute right-[110px] top-40 z-50 flex-col justify-center items-center bg-transparent text-center">
                  <motion.div onClick={handleNav} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2">
                    <NavLink to={'/'}>Home</NavLink>
                  </motion.div>
                  <motion.div onClick={handleNav} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2">
                    <NavLink to={'/shop'}>Products</NavLink>
                  </motion.div>
                  <motion.div onClick={handleNav} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2">
                    <NavLink to={'/about'}>About</NavLink>
                  </motion.div>
                  <motion.div onClick={handleNav} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2">
                    <NavLink to={'/contact'}>Contact</NavLink>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <div className="px-4 py-2 hidden sm:flex">
          <NavLink to={'/about'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">About</NavLink>
        </div>
        <div className="px-4 py-2 hidden sm:flex">
          <NavLink to={'/contact'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavbarSec;
