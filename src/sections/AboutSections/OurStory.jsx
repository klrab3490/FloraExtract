import { NavLink } from 'react-router-dom';

// icon
import { IoMdArrowRoundForward } from 'react-icons/io';

// image
import ourstory from '../../assets/ourstory.png';

export default function OurStory() {
    return (
        <div>
            <section>
                <div className='py-5 px-4 sm:px-14'>
                    <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Story 
                        </div>
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Story 
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div className='relative flex justify-center items-center font-bold'>
                        <img src={ourstory} className='rounded-xl w-full h-[60vh] sm:h-auto object-cover' />
                        <div className='absolute top-10 left-10 right-10 flex-col text-2xl sm:text-5xl text-white'>
                            <div>Our story is more than just the extracts we&apos;ve built.</div>
                            <div className='text-xl sm:w-1/2 w-full'>It&apos;s also about the partnerships we&apos;ve built, the milestones we&apos;ve achieved and the customers we&apos;ve served.</div>
                            <div className='flex items-center text-center text-2xl justify-center mt-5'>
                                <NavLink to={'/contact'} className='bg-white rounded-full flex items-center text-2xl justify-center p-3 text-black'>Lets Talk <IoMdArrowRoundForward className='ml-2' size={30} /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}