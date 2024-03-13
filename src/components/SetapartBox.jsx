
function SetapartBox() {
  return (
    <div className="sm:px-14 px-4 grid xl:grid-cols-3 grid-cols-1 gap-5">
      <div className='flex flex-col mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg'>
        <div className='w-full h-1/3 text-4xl flex flex-col underline text-center justify-center p-5'>Explore Our Research</div>
        <div className='w-full h-2/3 p-5 items-center bg-[#fdfde1]'>
          <h1 className='text-3xl text-center'>Scientifically Driven</h1>
          <div className='text-lg text-center mt-2'>At our core, every decision we make is powered by scientific analysis. We delve deep into every aspect of the herbs and their actives to expand our knowledge</div>
        </div>
      </div>
      
      <div className="flex flex-col mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg">
        <div className="w-full h-1/3 text-4xl flex flex-col underline text-center justify-center p-5">Discover Our Creations</div>
        <div className="w-full h-2/3 p-5 items-center bg-[#fdfde1]">
          <h1 className="text-4xl text-center">Pioneering Innovation</h1>
          <div className="text-lg text-center mt-2"> We live to push the boundaries of what is possible with botanical extracts. Crafting innovative products is what drives and defines us. </div>
        </div>
      </div>
      <div className="flex flex-col mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg">
        <div className="w-full h-1/3 text-4xl flex flex-col underline text-center justify-center p-5">Partner With Us</div>
        <div className="w-full sm:h-2/3 h-auto p-5 items-center bg-[#fdfde1]">
          <h1 className="text-4xl text-center">Global Leadership</h1>
          <div className="text-lg text-center mt-2">Our commitment to excellence has helped us forge lasting relationships with customers and vendors worldwide.</div>
        </div>
      </div>
    </div>
  );
}

export default SetapartBox;
