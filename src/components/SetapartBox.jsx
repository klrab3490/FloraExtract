
function SetapartBox() {
  return (
    <div>
      <div className="w-full h-auto flex justify-center items-center border-4 border-[#290c06] rounded-lg">
        <div className="w-1/2 px-5 flex flex-col items-center bg-[#fdfde1] h-48">
          <h1 className="text-3xl pb-5 py-2">Scientifically Driven</h1>
          <p className="text-xl"> At our core, every decision we make is powered by scientific analysis. We delve deep into every aspect of the herbs and their actives to expand our knowledge</p>
        </div>
        <div className="w-1/2 h-48 flex justify-center items-center px-5 py-2">
          <h1 className="text-5xl underline">Explore Our Research</h1>
        </div>
      </div>
      <div className="w-full h-auto flex flex-row-reverse justify-center items-center border-4 border-[#290c06] rounded-lg mt-5">
        <div className="w-1/2 px-5 flex flex-col items-center bg-[#fdfde1] h-48">
          <h1 className="text-3xl pb-5 py-2">Pioneering Innovation</h1>
          <p className="text-xl"> We live to push the boundaries of what is possible with botanical extracts. Crafting innovative products is what drives and defines us. </p>
        </div>
        <div className="w-1/2 h-48 flex justify-center items-center px-5 py-2">
          <h1 className="text-5xl underline">Discover Our Creations</h1>
        </div>
      </div>
      <div className="w-full h-auto flex justify-center items-center border-4 border-[#290c06] rounded-lg mt-5">
        <div className="w-1/2 px-5 flex flex-col items-center bg-[#fdfde1] h-48">
          <h1 className="text-3xl pb-5 py-2">Global Leadership</h1>
          <p className="text-xl"> Over three decades of dedication and excellence has helped us forge lasting relationships with customers and vendors in over 60 countries. </p>
        </div>
        <div className="w-1/2 h-48 flex justify-center items-center px-5 py-2">
          <h1 className="text-5xl underline">Partner With Us</h1>
        </div>
      </div>
    </div>
  );
}

export default SetapartBox;
