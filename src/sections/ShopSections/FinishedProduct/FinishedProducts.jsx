import { useState } from 'react';
import ImageLoader from "../../../components/ImageLoader";

// image
import bcm95 from "../../../assets/Finished Product/BCM95.png";
import AMLA from "../../../assets/Finished Product/AMLA.png";
import ASHWAGANDHA from "../../../assets/Finished Product/ASHWAGANDHA.png";
import BOSWELLIA from "../../../assets/Finished Product/BOSWELLIA.png";
import BRAHMI from "../../../assets/Finished Product/BRAHMI.png";
import DEFENCE from "../../../assets/Finished Product/defence.png";
import FLAXNCUMIN from "../../../assets/Finished Product/FLAX-N-CUMIN.png";
import GLUCOBALANCE from "../../../assets/Finished Product/GLUCO-BALANCE.png";
import GREENTEA from "../../../assets/Finished Product/GREEN-TEA.png";
import GUTEAZE from "../../../assets/Finished Product/GUT-EAZE.png";
import JOINTRECUE from "../../../assets/Finished Product/JOINT-RECUE.png";
import MORINGA from "../../../assets/Finished Product/MORINGA.png";
import NDURANCE from "../../../assets/Finished Product/n-durance.png";
import OMEGADOUBLE from "../../../assets/Finished Product/omega-double.png";
import OMEGAFLAX from "../../../assets/Finished Product/OMEGA-FLAX.png";
import OMEGATRIPLE from "../../../assets/Finished Product/omega-triple.png";
import POMEGRANATE from "../../../assets/Finished Product/POMEGRANATE.png";
import RHULIEF from "../../../assets/Finished Product/rhulief.png";
import SLEEPNREST from "../../../assets/Finished Product/SLEEP-N-REST.png";
import TRIPHALA from "../../../assets/Finished Product/TRIPHALA.png";

export default function FinishedProducts() {
    const FinishedProductsData = [
        {
            id: 1,
            category: "capsules",
            name: "BELLY HEALTH",
            ingredients: "Potent combination of Herbs",
            benefits: "Helps promote overall gut health, Helps reduce abdominal bloating, Helps improve gut microbiome, Supports Healthy Digestion",
            extra_info: "Each vegetarian capsules contains blend of 14 different herbs",
            product_img: GUTEAZE
        }, {
            id: 2,
            category: "capsules",
            name: "BRAHMI",
            ingredients: "Brahmi Extract (Bacopa)",
            benefits: "Supports cognitive Health, Helps in reducing stress & anxiety, Helps to promote mind wellness",
            extra_info: "Each vegetarian capsules contains pure Brahmi Extract",
            product_img: BRAHMI
        }, {
            id: 3,
            category: "capsules",
            name: "DAILY BREATH",
            ingredients: "Boswellia Serrata Extract",
            benefits: "Support respiratory health, Helps improve overall lung health, Helps in reducing coughing and wheezing, Regulate chest tightness and breathlessness",
            extra_info: "Each Vegetarian capsule contains Pure Boswellia extract",
            product_img: BOSWELLIA
        }, {
            id: 4,
            category: "capsules",
            name: "DAILY GRENADE",
            ingredients: "Pomegranate Extract",
            benefits: "Supports overall heart health, Helps manage blood pressure, Helps slow arterial wall thickening, Powerful antioxidant",
            extra_info: "Each vegetarian capsules contains Pomegranate Extract",
            product_img: POMEGRANATE
        }, {
            id: 5,
            category: "capsules",
            name: "DAILY GUARD",
            ingredients: "Purified turmeric Extract",
            benefits: "Strengthen body’s defence system naturally, Protect body from detrimental free radicals, Build strong immunity from inside out",
            extra_info: "each vegetable contains purified turmeric extract",
            product_img: DEFENCE
        }, {
            id: 6,
            category: "capsules",
            name: "DAILY SLUMBER",
            ingredients: "Ashwagandha Extract",
            benefits: "Helps improve sleep quality, Helps in reducing Stress & Anxiety, Helps in mood regulation, Helps in rejuvenating mind & body, Helps enhance alertness",
            extra_info: "Each vegetarian capsules contains pure Ashwagandha Extract",
            product_img: ASHWAGANDHA
        }, {
            id: 7,
            category: "capsules",
            name: "EVERDAY AMLA",
            ingredients: "Amla Extract",
            benefits: "Maintain a healthy triglycerides level, Improve overall heart health, Helps reduce visceral fat, Reduce the risk of cardiac disease",
            extra_info: "Each vegetarian capsules contains Amla Extract",
            product_img: AMLA
        }, {
            id: 8,
            category: "capsules",
            name: "EVERDAY BRAHMI",
            ingredients: "Brahmi Extract (Bacopa)",
            benefits: "Supports cognitive Health, Helps in reducing stress & anxiety, Helps to promote mind wellness",
            extra_info: "Each vegetarian capsules contains pure Brahmi Extract",
            product_img: BRAHMI
        }, {
            id: 9,
            category: "capsules",
            name: "EVERDAY GREEN TEA",
            ingredients: "Green Tea Extract",
            benefits: "Helps in weight management, Support cardiovascular health, Support healthy metabolism, Powerful antioxidant",
            extra_info: "Each vegetarian capsules contains Green Tea Extract",
            product_img: GREENTEA
        }, {
            id: 10,
            category: "capsules",
            name: "EVERDAY MORINGA",
            ingredients: "Moringa leaf Extract",
            benefits: "Supports eye health, Supports skin and hair care, supports in weight management, Supports overall health, metabolism and immunity",
            extra_info: "Each vegetarian capsules contains Moringa Extract",
            product_img: MORINGA
        }, {
            id: 11,
            category: "capsules",
            name: "EVERYDAY STAMINA",
            ingredients: "Red Spinach Extract",
            benefits: "Supports enhanced nitric oxide level in the body, Improved Athletic performance, Enhanced Blood Circulation",
            extra_info: "Each vegetarian capsules contains Red Spinach Extract",
            product_img: NDURANCE
        }, {
            id: 12,
            category: "capsules",
            name: "EVERYDAY TRIPHALA",
            ingredients: "Amla Extract",
            benefits: "Promote overall gut health, Helps promote bowel wellness, Helps to promote metabolism",
            extra_info: "Each vegetarian capsules contains Triphala Extract",
            product_img: TRIPHALA
        }, {
            id: 19,
            category: "softgels",
            name: "FLAX OMEGA",
            ingredients: "Omega 3 Flaxseed oil",
            benefits: "Supports overall health, Anti-oxidant and anti-inflammatory, Helps to maintain liver & heart health, Helps Brain, Join, Skin & Hair Health",
            extra_info: "each softgel contains flaxseed oil",
            product_img: OMEGAFLAX
        }, {
            id: 13,
            category: "capsules",
            name: "FORTY WINKS POWER NAP",
            ingredients: "Ashwagandha Extract",
            benefits: "Restful sleep, Helps manage stress, Wake-Up Refreshed",
            extra_info: "Each vegetarian capsules contains Ashwagandha Extract",
            product_img: SLEEPNREST
        }, {
            id: 14,
            category: "capsules",
            name: "JOINT COMFORT",
            ingredients: "Boswellia Serrata Extract",
            benefits: "Supports joint health, Improve joint mobility & flexibility, Supports Healthy Cartilage function, Helps reduce inflammation",
            extra_info: "each Vegetarian capsule contains Turmeric and Boswellia extract",
            product_img: JOINTRECUE
        }, {
            id: 20,
            category: "softgels",
            name: "JOINT RELIEF",
            ingredients: "Blend of Turmeric, Boswellia and Sesame oil",
            benefits: "Supports pain relief, helps reduce inflammation, Help improve flexibility, Supports Musculoskeletal mobility",
            extra_info: "each softgel contains Turmeric & Boswellia extract with Sesame oil",
            product_img: RHULIEF
        }, {
            id: 15,
            category: "capsules",
            name: "OMEGA & CUMIN",
            ingredients: "Omega 3 Flaxseed oil",
            benefits: "Improve immunity, supports skin & hair health, supports brain health, anti-oxidant & anti-inflammatory",
            extra_info: "Each softgel contains Flaxseed oil and black cumin seed extract",
            product_img: FLAXNCUMIN
        }, {
            id: 16,
            category: "capsules",
            name: "OMEGA DOUBLE ACTION",
            ingredients: "Omega 3 Fish oil",
            benefits: "Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extra_info: "each softgel contains fish oil",
            product_img: OMEGADOUBLE
        }, {
            id: 17,
            category: "capsules",
            name: "OMEGA TRIPLE ACTION",
            ingredients: "Omega 3 Fish oil",
            benefits: "Improve overall heart health, Boost overall immunity, Boost eye, Brain and Nerve function, Promote Liver health",
            extra_info: "each softgel contains vitamin D, E & K",
            product_img: OMEGATRIPLE
        }, {
            id: 18,
            category: "capsules",
            name: "SUGAR CONTROL",
            ingredients: "Amla Extract",
            benefits: "Promote healthy blood sugar metabolism, regulate blood sugar levels, support normal insulin response",
            extra_info: "Each vegetarian capsules contains turmeric, amla and pterocarpus marsupium extract",
            product_img: GLUCOBALANCE
        },        
        // {
        //     id: ,
        //     category:" ",
        //     name:" ",
        //     ingredients:" ",
        //     benefits:" ",
        //     extra_info:" ",
        //     product_img:,
        // },
    ];

    FinishedProductsData.sort((a, b) => a.name.localeCompare(b.name));

    const [value, setValue] = useState('All');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const filteredContents = value === 'All' ? FinishedProductsData : FinishedProductsData.filter(data => data.category === value);

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
                    <select id="sortby" name='sortby' className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fff] rounded-xl p-1' onChange={handleChange}>
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
                            <div key={data.id} className='p-4 bg-[#fff] border-2 rounded-xl border-[#5e1c0e] h-full group transition-transform transform hover:scale-105'>
                                <div className='flex flex-col'>
                                    <div className='flex items-center justify-center h-[250px]'>
                                        {!imageLoaded && <ImageLoader />}
                                        <img src={data.product_img || bcm95} alt={data.name} onLoad={handleImageLoad} className={`h-[250px] w-[250px] object-contain items-center ${imageLoaded ? 'block' : 'hidden'}`} />
                                    </div>
                                    <div className='p-5'>
                                        <div className='font-bold text-2xl text-center text-[#413f91]'>{data.name}</div>
                                        <div className='text-lg text-center text-[#39160f]'>{data.ingredients}</div>
                                        <div className='text-sm text-left text-[#290c06] mt-2'>{data.benefits}</div>
                                        <div className='text-sm font-medium text-left text-[#4a2017] mt-2'>{data.extra_info}</div>
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
