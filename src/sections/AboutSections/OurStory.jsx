import { NavLink } from 'react-router-dom';

// icon
import { IoMdArrowRoundForward } from 'react-icons/io';

// image
import ourstory from '../../assets/ourstory.png';
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

export default function OurStory() {
    return (
        <div>
            <section>
                <div className="">
                    <img src={Sep1} alt="" className="w-[100vw] h-20" />
                </div>
                <div className='py-5 px-4 sm:px-14 bg-[#5ACEA1]'>
                    <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Our Story 
                        </div>
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Our Story 
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div className='relative flex flex-col justify-center items-center font-bold'>
                        <div className='absolute z-10 top-10 left-10 right-10 flex-col text-2xl sm:text-5xl text-white'>
                            <div className='flex items-center justify-center'>Our story is more than just the extracts we&apos;ve built.</div>
                            <div className='flex items-center justify-center'> 
                                <div className='mt-5 text-center text-xl sm:w-2/3 w-full p-2 h-[150px] sm:h-[300px] overflow-y-auto py-2'>
                                    <p>Once upon a time, nestled in the heart of a vibrant city, a group of passionate individuals came together with a shared vision inspired by our struggles with the adverse effects of chemical-laden foods on our health. From digestive discomforts to mysterious ailments, we experienced first-hand the toll of modern diets on our well-being. Having struggled with health issues ourselves, we understood the profound impact that natural remedies could have on one's well-being. Drawing from our diverse backgrounds in herbalism, nutrition, and business, we decided to embark on a journey to make high-quality plant extracts more accessible to all.</p>
                                    <p>Our journey began with a pivotal moment—an encounter with a local farmer who shared the ancient wisdom of herbal remedies passed down through generations. Inspired by the farmer&apos;s commitment to organic practices and sustainable farming methods, we realized the untapped potential of these natural treasures.</p>  
                                    <p>With unwavering determination, we set out to establish our company, guided by principles of ethical sourcing, transparency, and integrity. We scoured the globe in search of the finest botanicals, forging partnerships with trusted suppliers and partners who shared our commitment to quality and sustainability.</p>
                                    <p>As we navigated the complexities of the botanical world, we encountered challenges along the way—logistical hurdles, regulatory requirements, and the constant quest for excellence. Yet, fueled by our shared passion and unwavering dedication, we persisted, overcoming obstacles with resilience and creativity.</p>
                                    <p>With each carefully curated extract, we exceeded expectations in terms of efficacy and purity, earning the trust and loyalty of customers seeking natural solutions for their health needs. Our company grew steadily, expanding its product offerings while staying true to its founding principles.</p>
                                    <p>Today, our plant extract trading company stands as a testament to the transformative potential of passion, perseverance, and personal experience. As we continue our journey, we remain committed to empowering individuals to embrace the healing gifts of the earth, one botanical extract at a time.</p>
                                </div>
                            </div>
                            <div className='flex items-center text-center text-2xl justify-center mt-5'>
                                <NavLink to={'/contact'} className='bg-white rounded-full flex items-center text-2xl justify-center p-3 text-black'>Lets Talk <IoMdArrowRoundForward className='ml-2' size={30} /></NavLink>
                            </div>
                        </div>
                        <img src={ourstory} className='rounded-xl w-full object-cover h-[70vh]' style={{flexGrow: 1}} />
                    </div>
                </div>
                <div className="">
                    <img src={Sep2} alt="" className="w-[100vw] h-20" />
                </div>
            </section>
        </div>
    )
}