// icons
import food from '../../assets/icons/food.png';
import jar from '../../assets/icons/jar.png';
import family from '../../assets/icons/family.png';

export default function WhyChooseUs() {
    return (
        <div>
            <section className=' px-4 sm:px-14'>
                <div className=''>
                    <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span> Why Choose Us
                        </div>
                        <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                            <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span> Why Choose Us 
                        </div>
                    </div>
                    <hr className='mt-5 mb-5' />
                </div>

                <div className='w-full h-auto' >
                    <div className='mb-5 font-semibold'>
                        <div className='sm:text-5xl text-4xl text-center p-4 font-bold '>Powered By Nature, Driven By Science</div>
                        <div className='text-xl p-4'>
                            <ul className='list-disc list-inside'>
                                <li>
                                    <span className='underline'>Effotless Nutition Supplements:</span> Bring the gap in your nutritional deficiancy with our natural extracts, spices, flavoured color & flavoured ingredients, ensuring you never miss essential nutrients again.
                                </li>
                                <li>
                                    <span className='underline'>Healthier Live with Loved Ones:</span> Experience the ultimate reward of a longer  healthier life spend with your loved ones, thanks to our products. 
                                </li>
                                <li>
                                    <span className='underline'>Natural Harmony:</span> Discover the natural harmony with our effective chemical-free formula crafted with active botanicals.
                                </li>
                                <li>
                                    <span className='underline'>Targeted Health Benefits:</span> Target specific conditions while enhancing overall health with our range of extracts, spices and ingredients.
                                </li>
                            </ul>
                        </div>
                        <div className='text-xl bg-[#fdfde1] flex sm:flex-row flex-col justify-center items-center p-4 sm:px-14'>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={food} className='h-[120px]' /> </div>
                                    {/* Text */} <div className='p-5'>Chances are that I&apos;m missing essential nutrients through the food I eat.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={jar} className='h-[120px]' /> </div>
                                    {/* Text */} <div className='p-5'>Flora Extracts&apos; natural supplements can help me overcome this challenge.</div>
                                </div>
                            </div>
                            <div className='p-5'>
                                <div className='border-[2px] border-[#290c06] rounded-xl h-[300px] flex flex-col text-center justify-center p-5'>
                                    {/* Icon */} <div className='flex items-center justify-center'> <img src={family} className='h-[120px]' /> </div>
                                    {/* Text */} <div className='p-5'>I get the ultimate benefit of a longer and healthier life with my loved ones!</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}