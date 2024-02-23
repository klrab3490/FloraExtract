import React, { useState } from 'react'
import Patented from "../sections/ShopSections/PatentedProducts/Patented"

const FinishedProduct = () => {
  return <div>Finished Product</div>
}

const Extract = () => {
  return <div>Extract</div>
}

const PatentedProducts = () => {
  return(
    <div>
      <patented />RA
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
          <div className='px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer' onClick={() => setCurrentIndex(0)}>Patented Products</div>
          <div className='px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer' onClick={() => setCurrentIndex(1)}>Extracts</div>
          <div className='px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer' onClick={() => setCurrentIndex(2)}>Finished Products</div>
        </div>
        <div>
          {contents[currentIndex]}

        </div>

    </div>
  )
}
