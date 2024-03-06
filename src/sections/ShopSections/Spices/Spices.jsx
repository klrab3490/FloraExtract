import { useState } from 'react';

// image
import bcm95 from "../../../assets/Finished Product/BCM95.png";
import DailyDefence from "../../../assets/Finished Product/DailyDefence.png";

export default function Spices() {
    const SpicesData = [
        {
            id:1,
            cateogory:"masalas",
            name:"Sambar Powder",
            productimg:DailyDefence,
        },{
            id:2,
            cateogory:"masalas",
            name:"Rasam Powder",
            productimg:DailyDefence,
        },{
            id:3,
            cateogory:"masalas",
            name:"Meat Powder",
            productimg:DailyDefence,
        },{
            id:4,
            cateogory:"masalas",
            name:"Chicken Powder",
            productimg:DailyDefence,
        },{
            id:5,
            cateogory:"masalas",
            name:"Fish Powder",
            productimg:DailyDefence,
        },{
            id:6,
            cateogory:"masalas",
            name:"Garam Powder",
            productimg:DailyDefence,
        },{
            id:7,
            cateogory:"masalas",
            name:"Biriyani Powder",
            productimg:DailyDefence,
        },{
            id:8,
            cateogory:"powdered",
            name:"Chilli Powder",
            productimg:DailyDefence,
        },{
            id:9,
            cateogory:"powdered",
            name:"Turmeric Powder",
            productimg:DailyDefence,
        },{
            id:10,
            cateogory:"powdered",
            name:"Coriander Powder",
            productimg:DailyDefence,
        },{
            id:11,
            cateogory:"powdered",
            name:"Kashmiri Chilli Powder",
            productimg:DailyDefence,
        },{
            id:12,
            cateogory:"powdered",
            name:"Black Pepper Powder",
            productimg:DailyDefence,
        },{
            id:13,
            cateogory:"wholespices",
            name:"Split Cassia (Patta)",
            productimg:DailyDefence,
        },{
            id:14,
            cateogory:"wholespices",
            name:"Cloves (Grambu)",
            productimg:DailyDefence,
        },{
            id:15,
            cateogory:"wholespices",
            name:"Star Anise (Thakkolam)",
            productimg:DailyDefence,
        },{
            id:16,
            cateogory:"wholespices",    
            name:"Black Pepper",
            productimg:DailyDefence,
        },{
            id:17,
            cateogory:"wholespices",
            name:"Green Cardamom",
            productimg:DailyDefence,
        }
        // {
        //     id: ,
        //     cateogory:" ",
        //     name:" ",
        //     productimg:,!
        // },
    ]

    const [value, setValue] = useState('All');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const filteredContents = value === 'All' ? SpicesData : SpicesData.filter(data => data.cateogory === value);

    return (
        <div className='flex flex-col'>
            <div className='flex sm:items-end sm:justify-end justify-center items-center'>
                <div className='flex items-center justify-center gap-2 border-1 mb-6 bg-[#fd9b40] p-2 mt-2 rounded-lg'>
                    <p className='text-lg'>Category By : </p>
                    <select id="sortby" name='sortby' className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1] rounded-xl p-1' onChange={handleChange}>
                        <option defaultChecked value="All" className='p-2'>All</option>
                        <option value="masalas" className='p-2'>Masalas</option>
                        <option value="powdered" className='p-2'>Powdered</option>
                        <option value="wholespices" className='p-2'>Whole Spices</option>
                    </select>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 items-center justify-items-center gap-4 mb-5'>
                    {filteredContents.map((data) => (
                        <div key={data.id} className='p-2 h-full'> 
                            <div key={data.id} className='p-4 bg-[#fdfde1] border-2 rounded-xl border-[#5e1c0e] h-full group transition-transform transform hover:scale-105'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center justify-center'>
                                        <img src={data.productimg || bcm95} alt={data.name} className='h-[250px] w-[250px] object-contain items-center' />
                                    </div>
                                    <div className='p-5'>
                                        <div className='font-bold text-xl text-center'>{data.name}</div>
                                        <div className='text-lg text-center text-[#39160f]'>{data.ingredients}</div>
                                        <div className='text-sm text-left text-[#290c06] mt-2'>{data.benfits}</div>
                                        <div className='text-sm font-medium text-left text-[#4a2017] mt-2'>{data.extrainfor}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
