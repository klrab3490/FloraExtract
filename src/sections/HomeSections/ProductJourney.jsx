// imports
import { useEffect, useState } from "react";

// images
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png"
import ArrowRight from "../../assets/icons/ArrowRight.png"

// icons
import icon1 from "../../assets/Product Journey/1.svg"
import icon2 from "../../assets/Product Journey/2.svg"
import icon3 from "../../assets/Product Journey/3.svg"
import icon4 from "../../assets/Product Journey/4.svg"
import icon5 from "../../assets/Product Journey/5.svg"
import icon6 from "../../assets/Product Journey/6.svg"
import icon7 from "../../assets/Product Journey/7.svg"
import icon8 from "../../assets/Product Journey/8.svg"
import icon9 from "../../assets/Product Journey/9.svg"
import icon10 from "../../assets/Product Journey/10.svg"
import icon11 from "../../assets/Product Journey/11.svg"
import icon12 from "../../assets/Product Journey/12.svg"
import icon13 from "../../assets/Product Journey/13.svg"
import icon14 from "../../assets/Product Journey/14.svg"
import icon15 from "../../assets/Product Journey/15.svg"

const Research = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon1} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center">Identifying herbs with potential compounds</div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon2} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center">Determining the active component</div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon3} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center">Creating the product & its process</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const ClinicalValidation = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon4} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center">Designing comprehensive clinical studies</div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon5} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Undertaking clinical studies worldwide </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon6} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Publishing scientific papers after  peer review </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Manufacturing = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon7} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Obtaining gathering herbs from sustainable sources </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon8} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Extracting active component using gentle processes </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon9} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Customising products as per customers&apos; needs </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const QualityControl = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col xl:flex-row px-4">
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon10} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Testing to ensure the component efficacy </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon11} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Testing to ensure the product&apos;s safety </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon12} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Documenting the product&apos;s validations </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const GlobalDelivery = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex xl:flex-row flex-col">
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon13} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Packaging the product safely </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon14} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Collaborating with delivery partners </div>
                    </div>
                </div>
                <div className="flex justify-center items-center m-2">
                    <img src={ArrowLeft} className="xl:rotate-180 xl:py-0 -rotate-90 py-2"/>
                </div>
                <div className="sm:w-96 w-80 h-48 p-5 rounded-xl border-[2px] border-black flex flex-col text-center bg-[#f3f3df]">
                    <div className="flex items-start justify-center text-xl">
                        <img src={icon15} width={50} />
                    </div>
                    <div className="flex w-full h-full flex-col justify-center items-center text-center">
                        <div className="text-2xl flex justify-center items-center text-center"> Delivering the order on time, every time </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function ProductJourney() {
    const contents = [
        <Research key="research" />,
        <ClinicalValidation key="clinicalValidation" />,
        <Manufacturing key="manufacturing" />,
        <QualityControl key="qualityControl" />,
        <GlobalDelivery key="globalDelivery" />
    ];

    // State Counter + Automatic Incrementer + Button Handlers
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoIncrementing, setIsAutoIncrementing] = useState(true);
    const handleNext = () => {
        setIsAutoIncrementing(false);
        setCurrentIndex((currentIndex + 1) % contents.length);
    }
    const handlePrev = () => {
        setIsAutoIncrementing(false);
        setCurrentIndex((currentIndex - 1 + contents.length ) % contents.length);
    }
    useEffect(() => {
        if (isAutoIncrementing) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % contents.length);
            }, 8000);
            return () => clearInterval(interval);
        } else {
            const interval = setInterval(() => {
                setIsAutoIncrementing(true);
            }, 8000);
            return () => clearInterval(interval);
        }
    },[isAutoIncrementing, contents.length]);

    return (
        <div className="flex flex-col w-full h-auto justify-center items-center pt-10">
            <div className="w-full flex justify-start items-center pl-5 sm:pl-10 relative pb-4">
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Product Journey
                </div>
                <div className="w-auto text-2xl sm:text-3xl px-3 sm:px-5 py-2 h-16 sm:h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
                    <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">01</span> Product Journey
                </div>
            </div>
            <div className="bg-[#fdfde1]">
                <img src={Sep1} alt="" className="w-[100vw] h-20" />
            </div>
            <div className="w-full h-auto py-3 bg-[#5ACEA1]">
                <section className="">
                    {/* <div className="py-5 px-4 sm:px-14">
                        <div className="sm:text-5xl text-3xl sm:text-start text-center text-white font-semibold"> Our commitment to quality is showcased by our end to end, in-house design & manufacturing capabilities.
                        </div>
                    </div> */}
                    <div>
                        <div className="mb-5 px-4 sm:px-14">
                        <div className="rounded-xl grid grid-cols-1 sm:grid-cols-5 gap-8 text-center font-semibold text-2xl py-5">
                            <div className={currentIndex === 0 ? 'underline cursor-pointer hover:scale-1105' : 'cursor-pointer hover:scale-105' } onClick={() => setCurrentIndex(0)}>
                                <p className={currentIndex === 0 ? "bg-[#fdfde1] py-4 rounded-xl" : "py-4" }>Research</p>
                            </div>
                            <div className={currentIndex === 1 ? 'underline cursor-pointer hover:scale-105' : 'cursor-pointer hover:scale-105' } onClick={() => setCurrentIndex(1)}>
                                    <p className={currentIndex === 1 ? "bg-[#fdfde1] py-4 rounded-xl" : "py-4" }>Clinical Validation</p>
                            </div>
                            <div className={currentIndex === 2 ? 'underline cursor-pointer hover:scale-105' : 'cursor-pointer hover:scale-105' } onClick={() => setCurrentIndex(2)}>
                                <p className={currentIndex === 2 ? "bg-[#fdfde1] py-4 rounded-xl" : "py-4" }>Manufacturing</p>
                            </div>
                            <div className={currentIndex === 3 ? 'underline cursor-pointer hover:scale-105' : 'cursor-pointer hover:scale-105' } onClick={() => setCurrentIndex(3)}>
                                <p className={currentIndex === 3 ? "bg-[#fdfde1] py-4 rounded-xl" : "py-4" }>Quality Control</p>
                            </div>
                            <div className={currentIndex === 4 ? 'underline cursor-pointer hover:scale-105' : 'cursor-pointer hover:scale-105' } onClick={() => setCurrentIndex(4)}>
                                <p className={currentIndex === 4 ? "bg-[#fdfde1] py-4 rounded-xl" : "py-4" }>Global Delivery</p>
                            </div>
                        </div>

                            <div className="py-5">
                                <div className="flex flex-col m-5">
                                    {contents[currentIndex]}
                                    <div className="flex items-end justify-end mt-5">
                                        <button onClick={handlePrev} className="mr-2">
                                            <img src={ArrowLeft} alt="" />
                                        </button>
                                        <button onClick={handleNext}>
                                            <img src={ArrowRight} alt="" />
                                        </button>
                                    </div>              
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="">
                <img src={Sep2} alt="" className="w-[100vw] h-24" />
            </div>
        </div>
    );
}


export default ProductJourney;
