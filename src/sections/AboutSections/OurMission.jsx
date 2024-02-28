// image
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";

export default function OurMission() {
    return (
        <div>
            <section>
                <div className="">
                    <img src={Sep1} alt="" className="w-[100vw] h-20" />
                </div>
                <div className='py-5 bg-[#5ACEA1]'>
                    <div className='px-4 sm:px-14'>
                        <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Mission
                            </div>
                            <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                                <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Our Mission 
                            </div>
                        </div>
                        <div>
                            <hr className='my-5'/>
                        </div>
                    </div>
                    <div className='w-full h-auto py-3 font-bold'>
                        <div className='text-5xl px-4 sm:px-14 text-center'>It All Started With A Mission</div>
                        <div className='mt-3 text-xl mb-3 px-4 sm:px-14'>To meticulously source premium natural plant extracts, adhering to strict ethical standards and employing rigorous quality control measures that exceed expectations in efficacy and purity to ensure the well-being and vitality of our customers. We strive to cultivate strong relationships with trusted suppliers and partners, at every stage of the process to deliver products.</div>
                    </div>
                </div>
                <div className="">
                    <img src={Sep2} alt="" className="w-[100vw] h-20" />
                </div>
            </section>
        </div>
    )
}