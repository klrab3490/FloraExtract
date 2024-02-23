import { useState } from "react";
import Sep1 from "../../assets/Vector-IMG/sep-1.png";
import Sep2 from "../../assets/Vector-IMG/sep-2.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png"
import ArrowRight from "../../assets/icons/ArrowRight.png"

const Research = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex sm:flex-row flex-col">
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Identifying herbs with potential compounds</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Determining the potent actives</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Creating the product & its process</div>
        </div>
      </div>
    </div>
  )
}
const ClinicalValidation = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex sm:flex-row flex-col">
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Designing comprehensive clinical studies</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Undertaking clinical studies worldwide</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Publishing scientific papers after  peer review</div>
        </div>
      </div>
    </div>
  )
}
const Manufacturing = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex sm:flex-row flex-col">
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Obtaining /gathering herbs from sustainable sources</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Extracting actives using gentle processes</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Customising products as per customers&apos; needs</div>
        </div>
      </div>
    </div>
  )
}
const QualityControl = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex sm:flex-row flex-col">
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Testing to ensure actives&apos; specifications</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Testing to ensure the product&apos;s safety</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Documenting the product&apos;s validations</div>
        </div>
      </div>
    </div>
  )
}
const GlobalDelivery = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex sm:flex-row flex-col">
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Packaging the product safely</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Collaborating with delivery partners</div>
        </div>
        <div className="flex justify-center items-center m-2">
          <img src={ArrowLeft} className="sm:rotate-180 sm:py-0 -rotate-90 py-2"/>
        </div>
        <div className="w-96 h-48 p-5 border-[2px] border-black flex flex-col justify-center items-center text-center">
          <div>Icon</div>
          <div>Delivering the order on time, every time</div>
        </div>
      </div>
    </div>
  )
}

function ProductJourney() {
  const contents = [
    <Research key="research" />,
    <ClinicalValidation key="clinicalValidation" />,
    <Manufacturing key="manufacturing" />,
    <QualityControl key="qualityControl" />,
    <GlobalDelivery key="globalDelivery" />
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % contents.length);
  }

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + contents.length ) % contents.length);
  }

  return (
    <div className="flex flex-col w-full h-auto justify-center items-center pt-10">
      <div className="w-full flex justify-start items-center pl-10 relative pb-4">
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Product
          Journey
        </div>
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">02</span> Product
          Journey
        </div>

      </div>
      <div className="bg-[#fdfde1]">
        <img src={Sep1} alt="" className="w-[100vw] h-20" />
      </div>
      <div className="w-full h-auto py-3 bg-[#5ACEA1]">
        <section className="">
          <div className="py-5  px-4 sm:px-14">
            <div className="text-4xl text-white font-semibold">
              Our commitment to quality is showcased by our end to end, in-house
              design & manufacturing capabilities.
            </div>
          </div>
          <div>
            <div className="mb-5 px-4 sm:px-14">
              <div className="bg-[#fdfde1] rounded-xl grid grid-cols-1 sm:grid-cols-5 text-center text-xl py-5">
                <div className={currentIndex === 0 ? 'underline cursor-pointer' : 'cursor-pointer'} onClick={() => setCurrentIndex(0)}>Research</div>
                <div className={currentIndex === 1 ? 'underline cursor-pointer' : 'cursor-pointer'} onClick={() => setCurrentIndex(1)}>Clinical Validation</div>
                <div className={currentIndex === 2 ? 'underline cursor-pointer' : 'cursor-pointer'} onClick={() => setCurrentIndex(2)}>Manufacturing</div>
                <div className={currentIndex === 3 ? 'underline cursor-pointer' : 'cursor-pointer'} onClick={() => setCurrentIndex(3)}>Quality Control</div>
                <div className={currentIndex === 4 ? 'underline cursor-pointer' : 'cursor-pointer'} onClick={() => setCurrentIndex(4)}>Global Delivery</div>
              </div>
              <div>
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
