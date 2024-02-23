import React from 'react'
import { NavLink } from 'react-router-dom'

// Assets
import bcm95 from '../../../assets/BCM95.png'
import akbamax from '../../../assets/AKBAMAX.png'
import shoden from '../../../assets/Shoden.png'
import herbagut from '../../../assets/Herbagut.png'
import oxystorm from '../../../assets/Oxystorm.png'
import trilow from '../../../assets/Trilow.png'

export default function Patented() {
  const data = [
    {
      id:1,
      image:bcm95,
      title:'BCM-95® (Curcugreen®)',
      subtitle:'Functional Foods',
      description:'BCM-95® (Curcugreen®) is our 100% pure turmeric extract that boasts',
      link:''
    },{
      id:2,
      image:akbamax,
      title:'AKBAMAX® (BosPure®)',
      subtitle:'Functional Foods',
      description:'AKBAMAX® (BosPure®) is a unique extract derived from the resin of the Boswellia…',
      link:''
    },{
      id:3,
      image:shoden,
      title:'Shoden®',
      subtitle:'Functional Foods',
      description:'Shoden® is a clinically-tested, purified extract derived from the Ashwagandha plant…',
      link:''
    },{
      id:4,
      image:herbagut,
      title:'Herbagut ®',
      subtitle:'Functional Foods',
      description:'Herbagut brings together the power of 14 different herbs to improve overall digestive health…',
      link:''
    },{
      id:5,
      image:oxystorm,
      title:'Oxystorm® (Amaranthus)',
      subtitle:'Functional Foods',
      description:'Oxystorm® is the world’s first nitrate enriched extract of Amaranthus, one of the highest dietary sources of nitrates…',
      link:''
    },{
      id:6,
      image:trilow,
      title:'Tri-low® (Amla Extract)',
      subtitle:'Functional Foods',
      description:'Tri-Low® is the full spectrum extract of the bioactive ingredients found in the Indian gooseberry or Amla…',
      link:''
    },
    // {
    //   id:,
    //   image:,
    //   title:'',
    //   subtitle:'Functional Foods',
    //   description:'',
    //   link:''
    // },
  ]

  return (
    <>
      {data.map((data,index) => (
        <div key={index} className='border-2 rounded-xl w-auto sm:h-[450px] h-auto m-5 border-gray-400'>
          <div>
            <img src={data.image} className='rounded-t-xl' width={500} />
          </div>
          <div className='ml-2'>
            <div className='text-2xl'>{data.title}</div>
            <div className='text-xs text-gray-500'>{data.subtitle}</div>
            <div className='flex flex-col justify-between text-xl text-gray-500'>
              <div className='mt-5'>{data.description}</div>
              <NavLink to={data.link} className='underline p-4 text-end'>Read More</NavLink>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}