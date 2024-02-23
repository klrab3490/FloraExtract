import { useState } from 'react'
import Patented from "../sections/ShopSections/PatentedProducts/Patented"
import Extracts from '../sections/ShopSections/Extract/Extract'
import FinishedProducts from '../sections/ShopSections/FinishedProduct/FinishedProducts'

const FinishedProduct = () => {
  return (
    <div>
      <FinishedProducts />
    </div>
  )
}

const Extract = () => {
  return (
    <div>
      <Extracts />
    </div>
  )
}

const PatentedProducts = () => {
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center'>
      <Patented />
    </div>
  )
}

export default function Shop() {
  const contents = [ 
    <PatentedProducts key={'PatentedProducts'} />,
    <Extract key={'Extract'} />,
    <FinishedProduct key={'FinishedProduct'} />,
  ];
  const [currentIndex,setCurrentIndex] = useState(0)

  return (
    <div className='px-4 sm:px-14'>
        <div className='flex items-center justify-center'>
          <div className={ currentIndex === 0 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline' } onClick={() => setCurrentIndex(0)}>Patented Products</div>
          <div className={ currentIndex === 1 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline' } onClick={() => setCurrentIndex(1)}>Extracts</div>
          <div className={ currentIndex === 2 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline' } onClick={() => setCurrentIndex(2)}>Finished Products</div>
        </div>
        <div>
          {contents[currentIndex]}
        </div>
    </div>
  )
}
