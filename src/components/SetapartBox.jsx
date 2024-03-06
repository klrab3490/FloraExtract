
function SetapartBox() {
  return (
    <div className="sm:px-14 px-4">
      <div className='flex flex-col sm:flex-row mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg'>
        <div className='w-full sm:w-2/3 p-5 items-center bg-[#fdfde1]'>
          <h1 className='text-3xl text-center'>Scientifically Driven</h1>
          <div className='text-lg text-center mt-2'>At our core, every decision we make is powered by scientific analysis. We delve deep into every aspect of the herbs and their actives to expand our knowledge</div>
        </div>
        <div className='w-full sm:w-1/3 text-4xl flex flex-col underline text-center justify-center p-5 sm:p-0'>Explore Our Research</div>
      </div>
      
      <div className="flex flex-col sm:flex-row mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg">
        <div className="w-full sm:w-1/3 text-4xl flex flex-col underline text-center justify-center p-5 sm:p-0">Discover Our Creations</div>
        <div className="w-full sm:w-2/3 p-5 items-center bg-[#fdfde1]">
          <h1 className="text-4xl text-center">Pioneering Innovation</h1>
          <div className="text-lg text-center mt-2"> We live to push the boundaries of what is possible with botanical extracts. Crafting innovative products is what drives and defines us. </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row mt-5 justify-center items-center border-4 border-[#290c06] rounded-lg">
        <div className="w-full sm:w-2/3 p-5 items-center bg-[#fdfde1]">
          <h1 className="text-4xl text-center">Global Leadership</h1>
          <div className="text-lg text-center mt-2"> Over three decades of dedication and excellence has helped us forge lasting relationships with customers and vendors in over 60 countries. </div>
        </div>
        <div className="w-full sm:w-1/3 text-4xl flex flex-col underline text-center justify-center p-5 sm:p-0">Partner With Us</div>
      </div>
    </div>
  );
}

export default SetapartBox;
