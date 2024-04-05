import { useState } from 'react';
import ImageLoader from "../../../components/ImageLoader";

// image
import bcm95 from "../../../assets/Finished Product/BCM95.png";
import AMLA from "../../../assets/Finished Product/AMLA.png";
import ASHWAGANDHA from "../../../assets/Finished Product/ASHWAGANDHA.png";
import BOSWELLIA from "../../../assets/Finished Product/BOSWELLIA.png";
import BRAHMI from "../../../assets/Finished Product/BRAHMI.png";
import defence from "../../../assets/Finished Product/defence.png";
import FLAXNCUMIN from "../../../assets/Finished Product/FLAX-N-CUMIN.png";
import GLUCOBALANCE from "../../../assets/Finished Product/GLUCO-BALANCE.png";
import GREENTEA from "../../../assets/Finished Product/GREEN-TEA.png";
import GUTEAZE from "../../../assets/Finished Product/GUT-EAZE.png";
import JOINTRECUE from "../../../assets/Finished Product/JOINT-RECUE.png";
import MORINGA from "../../../assets/Finished Product/MORINGA.png";
import ndurance from "../../../assets/Finished Product/n-durance.png";
import omegadouble from "../../../assets/Finished Product/omega-double.png";
import OMEGAFLAX from "../../../assets/Finished Product/OMEGA-FLAX.png";
import omegatriple from "../../../assets/Finished Product/omega-triple.png";
import POMEGRANATE from "../../../assets/Finished Product/POMEGRANATE.png";
import rhulief from "../../../assets/Finished Product/rhulief.png";
import SLEEPNREST from "../../../assets/Finished Product/SLEEP-N-REST.png";
import TRIPHALA from "../../../assets/Finished Product/TRIPHALA.png";

export default function FinishedProducts() {
    const FinishedProductsData = [
        {
            id:1,
            cateogory:"capsules",
            name:"DAILY GUARD",
            ingredients:"Purified turmeric Extract",
            benfits:"Strengthen body’s defence system naturally, Protect body from detrimental free radicals, Build strong immunity from inside out",
            extrainfor:"each vegetable contains purified turmeric extract",
            productimg:defence,
        },{
            id:2,
            cateogory:"softgels",
            name:"JOINT RELIEF",
            ingredients:"Blend of Turmeric, Boswellia and Sesame oil",
            benfits:"Supports pain relief, helps reduce inflammation, Help improve flexibility, Supports Musculoskeletal mobility",
            extrainfor:"each softgel contains Turmeric & Boswellia extract with Sesame oil",
            productimg: rhulief,
        },{
            id:3,
            cateogory:"softgels",
            name:"OMEGA DOUBLE ACTION",
            ingredients:"Omega 3 Fish oil",
            benfits:"Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extrainfor:"each softgel contains fish oil",
            productimg: omegadouble,
        },{
            id:4,
            cateogory:"softgels",
            name:"OMEGA TRIPLE ACTION",
            ingredients:"Omega 3 Fish oil",
            benfits:"Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extrainfor:"each softgel contains vitamin D, E & K",
            productimg: omegatriple,
        },{
            id:5,
            cateogory:"softgels",
            name:"FLAX OMEGA",
            ingredients:"Omega 3 Flaxseed oil",
            benfits:"Supports overall health, Anti-oxidant and anti-inflammatory, Helps to maintain liver & heart health, Helps Brain, Join, Skin & Hair Health",
            extrainfor:"each softgel contains flaxseed oil",
            productimg: OMEGAFLAX,
        },{
            id:6,
            cateogory:"capsules",
            name:"JOINT COMFORT",
            ingredients:"Boswellia Serrata Extract",
            benfits:"Supports joint health, Improve joint mobility & flexibility, Supports Healthy Cartilage function, Helps reduce inflammation",
            extrainfor:"each Vegetarian capsule contains Turmeric and Boswellia extract",
            productimg: JOINTRECUE,
        },{
            id:7,
            cateogory:"capsules",
            name:"BELLY HEALTH",
            ingredients:"Potent combination of Herbs",
            benfits:"Helps promote overall gut health, Helps reduce abdominal bloating, Helps improve gut microbiome, Supports Healthy Digestion ",
            extrainfor:"Each vegetarian capsules contains blend of 14 different herbs",
            productimg: GUTEAZE,
        },{
            id:8,
            cateogory:"capsules",
            name:"DAILY SLUMBER",
            ingredients:"Ashwagandha Extract",
            benfits:"Helps improve sleep quality, Helps in reducing Strss & Anxiety, Helps in mood regulation, Helps in rejuvenate mind & body, Helps enhance alertness",
            extrainfor:"Each vegetarian capsules contains pure Ashwagandha Extract",
            productimg: ASHWAGANDHA,
        },{
            id:9,
            cateogory:"capsules",
            name:"FORTY WINKS POWER NAP",
            ingredients:"Ashwagandha Extract",
            benfits:"Restful sleep, Helps manage stress, Wake-Up Refreshed",
            extrainfor:"Each vegetarian capsules contains Ashwagandha Extract",
            productimg: SLEEPNREST,
        },{
            id:10,
            cateogory:"capsules",
            name:"EVERYDAY STAMINA",
            ingredients:"Red Spinach Extract",
            benfits:"Supports enhanced nitric oxide level in the body, Improved Athletic performance, Enhanced Blood Circulation",
            extrainfor:"Each vegetarian capsules contains Red Spinach Extract",
            productimg: ndurance,
        },{
            id:11,
            cateogory:"capsules",
            name:"DAILY GRENADE",
            ingredients:"Pomegranate Extract",
            benfits:"Supports overall heart health, Helps manage blood pressure, Helps slow arterial wall thickening, Powerfull anti-oxidant",
            extrainfor:"Each vegetarian capsules contains Pomegranate Extract",
            productimg: POMEGRANATE,
        },{
            id:12,
            cateogory:"capsules",
            name:"DAILY BREATH",
            ingredients:"Boswellia Serrata Extract",
            benfits:"Support respiratory health, Helps improve overall lung health, Helps in reducing coughing and wheezing, Regulate chest tightness and breathlessness",
            extrainfor:"each Vegetarian capsule contains Pure Boswellia extract",
            productimg: BOSWELLIA,
        },{
            id:13,
            cateogory:"capsules",
            name:"EVERDAY GREEN TEA",
            ingredients:"Green Tea Extraxt",
            benfits:"Helps in weight management,Support cardiovascular health, Support healthy metabolism, Pwerfull antioxidant",
            extrainfor:"Each vegetarian capsules contains Green Tea Extract",
            productimg: GREENTEA,
        },{
            id:14,
            cateogory:"capsules",
            name:"EVERDAY MORINGA",
            ingredients:"Moringa leaf Extraxt",
            benfits:"Supports eye health, Supports skin and hair care, supports in weiht management, Supports overall health, metabolism and immunity",
            extrainfor:"Each vegetarian capsules contains Moringa Extract",
            productimg: MORINGA,
        },{
            id:15,
            cateogory:"capsules",
            name:"EVERYDAY BRAHMI",
            ingredients:"Brahmi Extraxt (Bacopa)",
            benfits:"Supports cognitive Health, Helps in reducing stress & anxiety, Helps to promote mind welness",
            extrainfor:"Each vegetarian capsules contains pure Brahmi Extract",
            productimg: BRAHMI,
        },{
            id:16,
            cateogory:"capsules",
            name:"EVERYDAY TRIPHALA",
            ingredients:"Amla Extraxt",
            benfits:"Promote overall gut health, Helps promote bowel wellness, Helps to promote metabolism",
            extrainfor:"Each vegetarian capsules contains Triphala Extract",
            productimg: TRIPHALA,
        },{
            id:17,
            cateogory:"softgels",
            name:"OMEGA & CUMIN",
            ingredients:"Omega 3 Flaxseed oil",
            benfits:"Improve immunity, supports skin & hair health, supports brain health, anti-oxidant &anti-inflammatory",
            extrainfor:"Each softgel contains Flaxseed oil and black cumin seed extract",
            productimg: FLAXNCUMIN,
        },{
            id:18,
            cateogory:"capsules",
            name:"SUGAR CONTROL",
            ingredients:"Amla Extraxt",
            benfits:"Promote healthy blood sugar metabolism, regulate blood sugar levels, support normal insulin response",
            extrainfor:"Each vegetarian capsules contains turmeric, amla and pterocarpus marsupium extract",
            productimg: GLUCOBALANCE,
        },{
            id:19,
            cateogory:"capsules",
            name:"EVERYDAY AMLA",
            ingredients:"Amla Extraxt",
            benfits:"Maintain a healthy triglycerides level, Improve overall heart health, Helps reduce visceral fat, Reduce the risk of cardiac disease",
            extrainfor:"Each vegetarian capsules contains Amla Extract",
            productimg: AMLA,
        },
        // {
        //     id: ,
        //     cateogory:" ",
        //     name:" ",
        //     ingredients:" ",
        //     benfits:" ",
        //     extrainfor:" ",
        //     productimg:,
        // },
    ]

    const [value, setValue] = useState('All');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const filteredContents = value === 'All' ? FinishedProductsData : FinishedProductsData.filter(data => data.cateogory === value);

    // Image Loader
    const [imageLoaded, setImageLoaded] = useState(false);

    // Function to handle image loading
    const handleImageLoad = () => {
        setImageLoaded(false);

        // Simulate a loading time of 5 seconds
        setTimeout(() => {
            setImageLoaded(true); // Set imageLoaded to true after 5 seconds
        }, 3000);
    };

    return (
        <div className='flex flex-col'>
            <div className='flex sm:items-end sm:justify-end justify-center items-center'>
                <div className='flex items-center justify-center gap-2 border-1 mb-6 bg-[#fd9b40] p-2 mt-2 rounded-lg'>
                    <p className='text-lg'>Category By : </p>
                    <select id="sortby" name='sortby' className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fdfde1] rounded-xl p-1' onChange={handleChange}>
                        <option defaultChecked value="All" className='p-2'>All</option>
                        <option value="capsules" className='p-2'>Capsules</option>
                        <option value="softgels" className='p-2'>Softgels</option>
                    </select>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center gap-4 mb-5'>
                    {filteredContents.map((data) => (
                        <div key={data.id} className='p-2 h-full'> 
                            <div key={data.id} className='p-4 bg-[#fdfde1] border-2 rounded-xl border-[#5e1c0e] h-full group transition-transform transform hover:scale-105'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center justify-center h-[250px]'>
                                        {!imageLoaded && <ImageLoader />}
                                        <img src={data.productimg || bcm95} alt={data.name} onLoad={handleImageLoad} className={`h-[250px] w-[250px] object-contain items-center ${imageLoaded ? 'block' : 'hidden'}`} />
                                    </div>
                                    <div className='p-5'>
                                        <div className='font-bold text-2xl text-center text-[#413f91]'>{data.name}</div>
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
