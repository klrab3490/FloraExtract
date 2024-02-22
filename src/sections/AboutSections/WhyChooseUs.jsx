// icons
import food from '../../assets/icons/food.png';
import jar from '../../assets/icons/jar.png';
import family from '../../assets/icons/family.png';

// image
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

export default function WhyChooseUs() {
    return (
        <div>
            <section>
                <div className='py-5 px-4 sm:px-14'>
                    <div className="w-full flex justify-start items-center pl-10 relative pb-4">
                        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Why Choose Us
                        </div>
                        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">03</span> Why Choose Us 
                        </div>
                    </div>
                    <hr className='mt-5 mb-5' />
                </div>
                <div className="bg-[#fdfde1]">
                    <img src={Sep1} alt="" className="w-[100vw] h-20" />
                </div>
                <div className='w-full h-auto py-3 bg-[#5ACEA1]' >
                    <div className=' mb-5'>
                        <div className='text-5xl my-5 p-4 sm:px-14'>Powered By Nature, Driven By Science</div>
                        <div className='text-xl p-4 sm:px-14'>Discover the harmony that comes with natural products that actually work! We&apos;ve crafted formulas fortified with active botanicals that not only improve general health, but specific conditions as well. This is made possible by our unique strength of being a subsidiary of Arjuna Natural Ltd, India&apos;s leading manufacturer and exporter of standardised botanical extracts for over 30 years.</div>
                        <div className='bg-[#fdfde1] flex sm:flex-row flex-col justify-center items-center p-4 sm:px-14'>
                            <div className='p-5 '>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={food} /> </div>
                                    {/* Text */} <div>Chances are that I&apos;m missing essential nutrients through the food I eat.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={jar} /> </div>
                                    {/* Text */} <div>Curegarden&apos;s natural supplements can help me overcome this challenge.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={family} /> </div>
                                    {/* Text */} <div>I get the ultimate benefit of a longer and healthier life with my loved ones!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img src={Sep2} alt="" className="w-[100vw] h-24" />
                </div>
            </section>
        </div>
    )
}