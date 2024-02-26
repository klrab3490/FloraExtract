import { useCallback, useRef } from "react";

// icon
import Logo from "../assets/logo.png";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

// import
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MenuButton } from "./MenuButton";

function NavbarSec() {
    const navRef = useRef();
    const [Nav, SetNav] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const handleNav = useCallback(() => {
        SetNav(!Nav);
    }, [Nav]);
    const variants = {
        open: { opacity: 1, y: 0, transition: { staggerChildren: 0.5, duration: 0.8 } },
        closed: { opacity: 0, y: "-100%" }
    };
    const itemVariants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: -50 }
    }
    const menuButtonStyle = {
        marginLeft: "2rem",
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (navRef.current && !navRef.current.contains(event.target)) {
                handleNav();
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
            return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleNav]);

    return (
        <div>
            <div className="w-[100vw] flex justify-center items-center px-2 py-2 font-semibold">
                <div className="px-4 py-2 hidden sm:flex">
                    <NavLink to={'/shop'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Products</NavLink>
                </div>
                <div className="px-4 py-2 hidden sm:flex">
                    <NavLink to={'/'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Home</NavLink>
                </div>
                <div className="hidden sm:flex flex-col items-center px-4 cursor-pointer">
                    <img src={Logo} alt="Floral Extracts" className="h-14" />
                    <h1 className="text-3xl text-[#290c06] font-bold ">Flora Extracts</h1>
                </div>
                <div className="px-4 py-2 hidden sm:flex">
                    <NavLink to={'/about'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">About</NavLink>
                </div>
                <div className="px-4 py-2 hidden sm:flex">
                    <NavLink to={'/contact'} className="text-2xl text-[#290c06] hover:text-[#fd9b40] transition duration-300 cursor-pointer">Contact</NavLink>
                </div>
            </div>
            <div className="flex sm:hidden items-center justify-between px-5 relative">
                <div className="flex items-center space-x-4 justify-center">
                    <img src={Logo} alt="Floral Extracts" className="h-14" />
                    <h1 className="text-3xl text-[#290c06] font-bold">Flora Extracts</h1>
                </div>
                <div className="">
                    <MenuButton isOpen={isOpen} onClick={() => setOpen(!isOpen)} style={menuButtonStyle} />
                </div>
            </div>
            <div className={`fixed left-0 w-full top-28 z-50 ${isOpen ? '' : 'hidden'}`}>
                <div className="w-full h-full flex items-center justify-center">
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div ref={navRef} key="menu" initial="closed" animate="open" exit="closed" variants={variants} className="xl:hidden w-1/2 p-5 space-y-4 rounded-xl text-2xl flex-col items-center justify-center bg-white text-center z-30">
                                    <motion.div onClick={() => setOpen(!isOpen)} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2 rounded-xl">
                                        <NavLink to={'/'}>Home</NavLink>
                                    </motion.div>
                                    <motion.div onClick={() => setOpen(!isOpen)} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2 rounded-xl">
                                        <NavLink to={'/shop'}>Products</NavLink>
                                    </motion.div>
                                    <motion.div onClick={() => setOpen(!isOpen)} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2 rounded-xl">
                                        <NavLink to={'/about'}>About</NavLink>
                                    </motion.div>
                                    <motion.div onClick={() => setOpen(!isOpen)} variants={itemVariants} className="bg-white border-[1px] border-[#33363F] py-2 rounded-xl">
                                        <NavLink to={'/contact'}>Contact</NavLink>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

export default NavbarSec;
