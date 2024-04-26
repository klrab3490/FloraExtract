// imports
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// icons
import { IoMdArrowRoundForward } from 'react-icons/io'
import { FaRegRegistered } from 'react-icons/fa6'

function ScrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

function Newsletter() {
    const [EmailID, setEmailID] = useState("");
    const handleEmail = (e) => {
        e.preventDefault();
        console.log(EmailID);
        setEmailID("");
    }


    return (
        <div>
            <div className="bg-[#5ACEA1] text-[#290c06] grid grid-cols-1 lg:grid-cols-2 py-7">
                {/* Right */}
                <div className="px-4 sm:px-14">
                    <div className="sm:text-5xl text-4xl flex font-semibold">
                        FLORAEXTRACTS <FaRegRegistered size={25} className="" />
                    </div>
                    <div className="text-xl sm:w-[500px] py-5">
                    At Flora Extracts, we offer a wide range of premium, natural plant extracts that are clinically proven to enhance vitality. With a commitment to ethical sourcing and rigorous quality control, we provide customized solutions for well-being.
                    </div>
                    <div className="flex flex-col items-center justify-center sm:justify-start sm:flex-row">
                        <div className="flex items-center justify-center">
                            <div className="flex mt-4 relative justify-center items-center w-52 z-20" onClick={ScrollToTop}>
                                <NavLink to={'/about'} className="flex justify-center items-center px-3 py-3 w-40 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer">
                                    <h1 className='text-xl font-medium text-[#290c06]' onClick={() => ScrollToTop()} >About us</h1>
                                    <IoMdArrowRoundForward size={28} className='text-white' />
                                </NavLink>
                                <div className="w-40 h-14 -z-10 top-1 right-4 bg-[#290c06] absolute"></div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <div className="flex mt-4 relative justify-center items-center w-52 z-20" onClick={ScrollToTop}>
                                <NavLink to={'/brochure'} className="flex justify-center items-center px-3 py-3 w-40 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer">
                                    <h1 className='text-xl font-medium text-[#290c06]' onClick={() => ScrollToTop()} >Brochure</h1>
                                    <IoMdArrowRoundForward size={28} className='text-white' />
                                </NavLink>
                                <div className="w-40 h-14 -z-10 top-1 right-4 bg-[#290c06] absolute"></div>
                            </div>
                        </div>
                        {/* <p className="flex items-center ml-10 text-xl">
                            <IoIosPlayCircle className="mr-2" size={40} /> Play Video
                        </p> */}
                    </div>
                </div>
                {/* Left */}
                <div className="flex flex-col justify-end items-center lg:items-end mt-4 sm:mt-6 sm:mr-14">
                    <div className="text-xl text-center sm:text-left">
                        Stay updated on the latest happenings!
                    </div>
                    <div className="mt-3">
                        <div className="flex flex-col items-center justify-center sm:flex-row">
                            <input 
                                autoComplete='on' 
                                type="email" 
                                id="email" 
                                value={EmailID} 
                                onChange={(e) => setEmailID(e.target.value)} 
                                placeholder="Email Address" 
                                className="w-[225px] sm:w-[300px] text-xl h-12 rounded-t-xl sm:rounded-l-xl sm:rounded-t-none text-[#290c06] border-2 border-[#290c06]  bg-[#fdfde1] focus:outline-none focus:ring-2 focus:ring-[#fd9b40] focus:border-transparent text-center" 
                            />
                            <button 
                                onClick={handleEmail} 
                                type='submit' 
                                className="font-semibold bg-[#fd9b40] text-[#290c06] h-12 w-[225px] sm:w-32 rounded-b-xl sm:rounded-r-xl sm:rounded-b-none text-xl border-[#290c06] border-2 border-t-0 sm:border-l-0 sm:border-2"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="text-xl text-[#290c06] mt-3 w-full p-2 sm:w-[428px] text-center sm:text-left">
                            {" "} For sales related enquires please email us at sales@floraextracts.in{" "}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;
