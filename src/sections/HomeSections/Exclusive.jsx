import EX1 from "../../assets/Exclusives/DAILY_N-DURANCE.png";

function Exclusive() {
  return (
    <>
      <div className="w-full flex justify-start items-center pl-10 relative pb-4">
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#fd9b40] rounded-full flex justify-center items-center text-[#290c06] font-medium z-10">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span>
         Exclusives
        </div>
        <div className="w-auto text-3xl px-5 py-2 h-20 bg-[#290c06] rounded-full flex justify-center items-center text-[#290c06] font-medium absolute top-2 left-13">
          <span className="text-6xl font-semibold px-2 text-[#5e1c0e]">04</span>
          Exclusives
        </div>
      </div>
      <div className="w-full h-[65vh] relative  pt-10 flex justify-center items-center">
        {/* Images behind the banner */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <img src={EX1} alt="" className="" />
        </div>
        <div className="absolute top-1/2 left-20  -translate-y-1/2 z-0">
          <img src={EX1} alt="" className="h-64" />
        </div>
        <div className="absolute top-1/2 right-20  -translate-y-1/2 z-0">
          <img src={EX1} alt="" className="h-64" />
        </div>

        {/* Banner */}
        <div className="w-full z-10 h-20 bg-[#fd9b40] border-y-2 border-[#290c06] relative">
          {/* Text in the banner */}
          <marquee className="w-full z-30 h-20 flex items-center justify-center">
            <h2 className="text-4xl font-mono">
              Visit our store Now For Brand and Exclusive Finished Products
            </h2>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default Exclusive;