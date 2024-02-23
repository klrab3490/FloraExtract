import React, { useState } from 'react'
import bcm95 from "../../../assets/BCM95.png"

export default function FinishedProducts() {
    const constents = [
        {
            id:1,
            catogory:'Capsules',
            name:"A",
            desc:"A Test",
            img:bcm95
        },{
            id:2,
            catogory:'Softgels',
            name:"B",
            desc:"B Test",
            img:bcm95
        },{
            id:3,
            catogory:'Syrups',
            name:"C",
            desc:"C Test",
            img:bcm95
        },{
            id:4,
            catogory:'Powders',
            name:"D",
            desc:"D Test",
            img:bcm95
        },
    ];

    const [ Value , setValue ] = useState('All');
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const filteredContents = Value === 'All' ? constents : constents.filter(data => data.catogory === Value);

  return (
    <div className='flex flex-col'>
        <div className='flex items-end justify-end'>
            <div className='flex items-center justify-center gap-2 border-1'> 
                <p>Catogory By : </p>
                <select id="sortby" name='sortby' className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1] rounded-xl p-1' onChange={handleChange}>
                    <option value="All">Catogory By</option>
                    <option value="Capsules">Capsules</option>
                    <option value="Softgels">Softgels</option>
                    <option value="Syrups">Syrups</option>
                    <option value="Powders">Powders</option>
                    <option value="All">All</option>
                </select>
            </div>
        </div>
        <div className='flex sm:flex-row flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-items-center'>
                {filteredContents.map((data,index) => (
                    <div className='p-4'>
                        <div className='border-[2px] p-4'>
                            <div>{data.catogory}</div>
                            <div>
                                <img src={data.img} className='h-max-[200px]' />
                            </div>
                            <div className='p-5'>
                                <div className='flex justify-center text-center'>{data.name}</div>
                                <div>{data.desc}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
