// image
import ourvision from '../../assets/ourvision.png';
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

export default function OurVision() {
    return (
        <div>
            <section>
                <div className="">
                    <img src={Sep1} alt="" className="w-[100vw] h-20" />
                </div>
                <div className='py-5 bg-[#5ACEA1]'>
                    <div className='bg-[#5ACEA1] px-4 sm:px-14'>
                        <div className="w-full flex justify-start items-center pl-10 relative pb-4 h-auto py-3 ">
                            <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Our Vision
                            </div>
                            <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Our Vision 
                            </div>
                        </div>
                        <div>
                            <hr className='mb-5'/>
                        </div>
                    </div>
                    <div className='w-full h-auto py-3 font-bold'>
                        <div className='text-5xl px-4 sm:px-14'>It All Started With A Vision</div>
                        <div className='mt-3 text-xl mb-3 px-4 sm:px-14'>Our journey began over three decades ago with Mr. P.J. Kunjachan and Dr. Benny Antony, who firmly believed in the power of nature and recognized the role of herbs in providing a healthy life.</div>
                    </div>
                    <div className='flex flex-col sm:flex-row px-4 sm:px-14'>
                        <img src={ourvision} className='rounded-s-xl sm:w-1/2 w-full' />
                        <div className='flex items-center justify-center text-2xl sm:text-5xl px-5 font-bold'>
                            <div>“To become the most renowned organisation by bettering lives across the globe through innovative natural solutions“</div>
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