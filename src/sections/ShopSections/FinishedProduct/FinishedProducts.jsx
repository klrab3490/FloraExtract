import { useState } from 'react';
import bcm95 from "../../../assets/BCM95.png";

export default function FinishedProducts() {

    const FinishedProductsData = [
        {
            id: 1,
            cateogory: "capsules",
            name: "DAILY DEFENSE",
            ingredients: "BCM-95®( Purified turmeric Extract)",
            benfits: "Strengthen body’s defence system naturally, Protect body from detrimental free radicals, Build strong immunity from inside out",
            extrainfor: "each vegetable contains purified turmeric extract",
            productimg: "",
        },
        {
            id: 2,
            cateogory: "softgels",
            name: "FAST RHULIEF",
            ingredients: "Blend of Turmeric, Boswellia and Sesame oil",
            benfits: "Supports pain relief,helps reduce inflammation,Help improve flexibility, Supports Musculoskeletal mobility",
            extrainfor: "each softgel contains Turmeric & Boswellia extract with Sesame oil",
            productimg: "",
        },
        {
            id: 3,
            cateogory: "softgels",
            name: "OMEGA – 3 DOUBLE",
            ingredients: "Omega 3 Fish oil",
            benfits: "Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extrainfor: "each softgel contains fish oil",
            productimg: "",
        },
        {
            id: 4,
            cateogory: "softgels",
            name: "OMEGA – 3 TRIPLE",
            ingredients: "Omega 3 Fish oil",
            benfits: "Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extrainfor: "each softgel contains vitamin D, E & K",
            productimg: "",
        },
        {
            id: 5,
            cateogory: "softgels",
            name: "OMEGA FLAX",
            ingredients: "Omega 3 Flaxseed oil",
            benfits: "Supports overall health, Anti-oxidant and anti-inflammatory, Helps to maintain liver & heart health, Helps Brain, Join, Skin & Hair Health",
            extrainfor: "each softgel contains flaxseed oil",
            productimg: "",
        },
        {
            id: 6,
            cateogory: "capsules",
            name: "JOINT RESCUE",
            ingredients: "Boswellia Serrata Extract (Akbamax®)",
            benfits: "Supports joint health, Improve joint mobility & flexibility, Supports Healthy Cartilage function, Helps reduce inflammation",
            extrainfor: "each Vegetarian capsule contains Turmeric and Boswellia extract",
            productimg: "",
        },
        {
            id: 7,
            cateogory: "capsules",
            name: "GUT EAZE 365",
            ingredients: "HERBAGUT®- Potent combination of Herbs",
            benfits: "Helps promote overall gut health, Helps reduce abdominal bloating, Helps improve gut microbiome, Supports Healthy Digestion ",
            extrainfor: "Each vegetarian capsules contains blend of 14 different herbs",
            productimg: "",
        },
        {
            id: 8,
            cateogory: "capsules",
            name: "DAILY ASHWAGANDHA",
            ingredients: "Ashwagandha Extract (Shoden®)",
            benfits: "Helps improve sleep quality, Helps in reducing Strss & Anxiety, Helps in mood regulation, Helps in rejuvenate mind & body, Helps enhance alertness",
            extrainfor: "Each vegetarian capsules contains pure Ashwagandha Extract",
            productimg: "",
        },
        {
            id: 9,
            cateogory: "capsules",
            name: "SLEEP ‘N’ REST",
            ingredients: "Ashwagandha Extract (Shoden®)",
            benfits: "Restful sleep, Helps manage stress, Wake-Up Refreshed",
            extrainfor: "Each vegetarian capsules contains Ashwagandha Extract",
            productimg: "",
        },
        {
            id: 10,
            cateogory: "capsules",
            name: "DAILY N-DURANCE",
            ingredients: "Red Spinach Extract (Oxystorm®)",
            benfits: "Supports enhanced nitric oxide level in the body, Improved Athletic performance, Enhanced Blood Circulation",
            extrainfor: "Each vegetarian capsules contains Red Spinach Extract",
            productimg: "",
        },
        {
            id: 11,
            cateogory: "capsules",
            name: "DAILY POMEGRANATE",
            ingredients: "Pomegranate Extract (Ellagirush®)",
            benfits: "Supports overall heart health, Helps manage blood pressure, Helps slow arterial wall thickening, Powerfull anti-oxidant",
            extrainfor: "Each vegetarian capsules contains Pomegranate Extract",
            productimg: "",
        },
        {
            id: 12,
            cateogory: "capsules",
            name: "DAILY BOSWELLIA",
            ingredients: "Boswellia Serrata Extract (Akbamax®)",
            benfits: "Support respiratory health, Helps improve overall lung health, Helps in reducing coughing and wheezing, Regulate chest tightness and breathlessness",
            extrainfor: "each Vegetarian capsule contains Pure Boswellia extract",
            productimg: "",
        },
        {
            id: 13,
            cateogory: "capsules",
            name: "DAILY GREEN TEA",
            ingredients: "Green Tea Extraxt",
            benfits: "Helps in weight management,Support cardiovascular health, Support healthy metabolism, Pwerfull antioxidant",
            extrainfor: "Each vegetarian capsules contains Green Tea Extract",
            productimg: "",
        },
        {
            id: 14,
            cateogory: "capsules",
            name: "DAILY MORINGA",
            ingredients: "Moringa leaf Extraxt",
            benfits: "Supports eye health, Supports skin and hair care, supports in weiht management, Supports overall health, metabolism and immunity",
            extrainfor: "Each vegetarian capsules contains Moringa Extract",
            productimg: "",
        },
        {
            id: 15,
            cateogory: "capsules",
            name: "DAILY BRAHMI",
            ingredients: "Brahmi Extraxt (Bacopa)",
            benfits: "Supports cognitive Health, Helps in reducing stress & anxiety, Helps to promote mind welness",
            extrainfor: "Each vegetarian capsules contains pure Brahmi Extract",
            productimg: "",
        }


    ]
    const [value, setValue] = useState('All');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const filteredContents = value === 'All' ? FinishedProductsData : FinishedProductsData.filter(data => data.cateogory === value);

    return (
        <div className='flex flex-col'>
            <div className='flex items-end justify-end'>
                <div className='flex items-center justify-center gap-2 border-1 mb-6 bg-[#fd9b40] p-2 mt-2 rounded-lg'>
                    <p className='text-lg'>Category By : </p>
                    <select
                        id="sortby"
                        name='sortby'
                        className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1] rounded-xl p-1'
                        onChange={handleChange}
                    >
                        <option value="capsules" className='p-2'>Capsules</option>
                        <option value="softgels" className='p-2'>Softgels</option>
                        <option defaultChecked value="All" className='p-2'>All</option>
                    </select>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center gap-4 mb-5'>
                    {filteredContents.map((data) => (
                        <div key={data.id} className='p-4 bg-[#fdfde1] border-2 rounded-xl border-[#5e1c0e] h-full group transition-transform transform hover:scale-105'>
                            <div className='flex flex-col h-full'>
                                <div className="text-sm mb-2">{data.cateogory}</div>
                                <div>
                                    <img src={data.productimg || bcm95} alt={data.name} className='h-max-[200px] object-contain' />
                                </div>
                                <div className='p-5'>
                                    <div className='font-bold text-xl text-center'>{data.name}</div>
                                    <div className='text-lg text-center text-[#39160f]'>{data.ingredients}</div>
                                    <div className='text-sm text-left text-[#290c06] mt-2'>{data.benfits}</div>
                                    <div className='text-sm font-medium text-left text-[#4a2017] mt-2'>{data.extrainfor}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
