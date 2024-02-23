import React from 'react'
import bcm95 from '../../../assets/BCM95.png'

export default function Extracts() {
  const extracts = [
    {
      id:1,
      name:"BCM 95",
      desc:"lkkahsdhalfhlasjldjsaldjlaskjdlasjdkjaslkdjlksjadlas",
      ingredients:'A,B,C',
      benefit:'A,B,C',
      img:bcm95
    },
    {
      id:2,
      name:"BCM 95",
      desc:"lafjbkjfbkbdvjbv s vdbckndskfksdbfkjsdb",
      ingredients:'A,B,C',
      benefit:'A,B,C',
      img:bcm95
    },
    {
      id:3,
      name:"BCM 95",
      desc:"ljb cka j fdsfhsfh kdjhfkjsdhifuvbsbv jkshd skfsdvsb",
      ingredients:'A,B,C',
      benefit:'A,B,C',
      img:bcm95
    },
  ]

  return (
    <div className='flex flex-col'>
      {extracts.map((data,index) => (
        <div className='p-5'>
          <div className='flex border-[2px] border-[#5e1c0e] text-[#5e1c0e] text-xl font-semibold w-full p-5 rounded-xl'>
            <div className='mr-5'>
              <img src={data.img} className='rounded-xl' />
            </div>
            <div className=''>
              <div>{data.name}</div>
              <div>{data.desc}</div>
              <div>Ingredients : {data.ingredients}</div>
              <div>Benifits : {data.benefit}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
