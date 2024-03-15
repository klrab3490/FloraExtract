// image
import ourvision from '../../assets/ourvision.png';

export default function OurVision() {
    return (
        <div>
            <section>
                <div className='py-5'>
                    <div className='px-4 sm:px-14'>
                        <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Our Vision
                            </div>
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Our Vision 
                            </div>
                        </div>
                        <div>
                            <hr className='my-5'/>
                        </div>
                    </div>
                    <div className='w-full h-auto py-3 font-bold'>
                        <div className='text-5xl px-4 sm:px-14 text-center'>It All Started With A Vision</div>
                        <div className='mt-3 text-xl mb-3 px-4 sm:px-14'></div>
                    </div>
                    <div className='flex flex-col sm:flex-row px-4 sm:px-14'>
                        <img src={ourvision} className='rounded-xl sm:w-1/2 w-full' />
                        <div className='flex items-center justify-center text-2xl sm:text-5xl px-5 font-bold'>
                            <div>“To pioneer in providing high-quality, ethically sourced natural plant extracts for enriching human well-being and vitality.“</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}