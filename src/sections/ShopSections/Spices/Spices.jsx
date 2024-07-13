import { useState } from 'react';
import ImageLoader from "../../../components/ImageLoader";

// image
import SambarPowder from "../../../assets/Spices/SambarPowder.jpg"
import RasamPowder from "../../../assets/Spices/RasamPowder.jpg"
import MeatMasala from "../../../assets/Spices/MeatMasala.jpg"
import ChickenMasala from "../../../assets/Spices/ChickenMasala.jpg"
import FishMasala from "../../../assets/Spices/FishMasala.jpg"
import GaramMasala from "../../../assets/Spices/GaramMasala.jpg"
import BiriyaniMasala from "../../../assets/Spices/BiriyaniMasala.jpeg"
import ChilliPowder from "../../../assets/Spices/ChilliPowder.jpg"
import TurmericPowder from "../../../assets/Spices/TurmericPowder.jpg"
import CorianderPowder from "../../../assets/Spices/CorianderPowder.jpg"
import KashmiriChilliPowder from "../../../assets/Spices/KashmiriChilliPowder.jpg"
import BlackPepper from "../../../assets/Spices/BlackPepper.jpg"
import SplitCassia from "../../../assets/Spices/SplitCassia.jpg"
import Cloves from "../../../assets/Spices/Cloves.jpg"
import StarAnise from "../../../assets/Spices/StarAnise.jpg"
import GreenCardamom from "../../../assets/Spices/GreenCardamom.jpg"
import Masalas from "../../../assets/Spices/Masalas.jpg"
import Spice from "../../../assets/Spices/Spices.jpg"
import WholeSpices from "../../../assets/Spices/WholeSpices.jpg"
import Customize from "../../../assets/Spices/Customize.png"

export default function Spices() {
    const SpicesMenu = [
        {
            id: 1,
            title: "Masalas",
            image: Masalas,
            list: ["Sambar Powder", "Rasam Powder", "Meat Masala", "Chicken Masala", "Fish Masala", "Garam Masala", "Biriyani Masala"]
        },
        {
            id: 2,
            title: "Powdered Spices",
            image: Spice,
            list: ["Chilli Powder", "Turmeric Powder", "Coriander Powder", "Kashmiri Chilli Powder", "Black Pepper Powder"]
        },
        {
            id: 3,
            title: "Whole Spices",
            image: WholeSpices,
            list: ["Split Cassia (Patta)", "Cloves (Grambu)", "Star Anise (Thakkolam)", "Black Pepper" ,"Green Cardamom"]
        },
        {
            id: 4,
            title: "Customized Spices",
            image: Customize,
            desc: "We offer customized spices option to amp up the your flavour palette."
        },
    ]; 
    
    const groundSpices = [
        {
            title: "Ground Spices other Blends & Seasonings",
            list: ["Black Pepper", "Calamus", "Cardamom", "Celery Seed", "Cinnamon Leaf", "Clove Bud", "Clove Leaf", "Coriander Seed", "Cumin Seed", "Curcuma Aromatica", "Davana", "Fennel Seed", "Galangal", "Ginger", "Mace", "Nutmeg", "Parsley Seed", "Pimento", "Rosemary", "Turmeric", "Vetiver"]
        }
    ];

    const SpicesData = [
        {
            id: 1,
            category: ["wholespices"],
            name: "Cloves (Grambu)",
            desc: "Cloves are dried flower buds with an intense flavor, adding a warm and aromatic touch to both cooking and traditional medicine.",
            productimg: Cloves,
        }, {
            id: 2,
            category: ["powdered"],
            name: "Coriander Powder",
            desc: "Ground from coriander seeds, this powder imparts a bright and citrusy flavor to a variety of culinary creations.",
            productimg: CorianderPowder,
        }, {
            id: 3,
            category: ["masalas"],
            name: "Chicken Masala",
            desc: "A specialized blend of spices perfect for seasoning and elevating the taste of chicken-based dishes.",
            productimg: ChickenMasala,
        }, {
            id: 4,
            category: ["masalas"],
            name: "Biriyani Masala",
            desc: "An aromatic spice blend specifically curated for preparing biryani, a fragrant and flavorful rice dish.",
            productimg: BiriyaniMasala,
        }, {
            id: 5,
            category: ["wholespices"],
            name: "Cloves (Grambu)",
            desc: "Cloves are dried flower buds with an intense flavor, adding a warm and aromatic touch to both cooking and traditional medicine.",
            productimg: Cloves,
        }, {
            id: 6,
            category: ["powdered", "wholespices"],
            name: "Black Pepper",
            desc: "The sharp, peppery bite of this aromatic powder is a must in several dishes as well as medicinal concoctions.",
            productimg: BlackPepper,
        }, {
            id: 7,
            category: ["wholespices"],
            name: "Green Cardamom",
            desc: "Green cardamom, known for its aromatic and slightly sweet flavor, is a versatile spice used in both savory and sweet culinary applications.",
            productimg: GreenCardamom,
        }, {
            id: 8,
            category: ["masalas"],
            name: "Garam Masala",
            desc: "A classic blend of warming spices commonly used in Indian cuisine, adding depth and warmth to various dishes.",
            productimg: GaramMasala,
        }, {
            id: 9,
            category: ["powdered"],
            name: "Kashmiri Chilli Powder",
            desc: "Known for its vibrant red color and moderate heat, Kashmiri chili powder adds a unique flavor to dishes without overwhelming spiciness.",
            productimg: KashmiriChilliPowder,
        }, {
            id: 10,
            category: ["wholespices"],
            name: "Star Anise (Thakkolam)",
            desc: "Star anise, with its distinct star-shaped appearance, provides a licorice-like flavor and is often used in both sweet and savory dishes.",
            productimg: StarAnise,
        }, {
            id: 11,
            category: ["masalas"],
            name: "Sambar Powder",
            desc: "A flavorful spice blend used in South Indian cuisine, especially for preparing sambar, a popular lentil-based dish.",
            productimg: SambarPowder,
        }, {
            id: 12,
            category: ["wholespices"],
            name: "Split Cassia (Patta)",
            desc: "A type of cinnamon obtained from the inner bark of the cassia tree, commonly used in both sweet and savory dishes.",
            productimg: SplitCassia,
        }, { 
            id: 13,
            category: ["masalas"],
            name: "Meat Masala",
            desc: "A versatile spice mix crafted for enhancing the flavors of various meat dishes, adding a rich and aromatic touch.",
            productimg: MeatMasala,
        }, {
            id: 14,
            category: ["masalas"],
            name: "Rasam Powder",
            desc: "A traditional spice mix essential for making rasam, a tangy and spicy South Indian soup, often served with rice.",
            productimg: RasamPowder,
        }, {
            id: 15,
            category: ["masalas"],
            name: "Fish Masala",
            desc: "A distinctive spice mix designed to complement the natural flavors of fish, enhancing the taste of seafood dishes.",
            productimg: FishMasala,
        }, {
            id: 16,
            category: ["powdered"],
            name: "Chilli Powder",
            desc: "Known for its addictive pungency, this chili powder is a versatile spice that enhances both savory and sweet dishes. It is also a rich source of vitamins and minerals.",
            productimg: ChilliPowder,
        }, {
            id: 17,
            category: ["powdered"],
            name: "Turmeric Powder",
            desc: "A vibrant yellow spice with earthy undertones, turmeric powder is widely used for both color and flavor in many dishes.",
            productimg: TurmericPowder,
        }
        // {
        //     id: ,
        //     category:" ",
        //     name: " ",
        //     desc: " ",
        //     productimg:,
        // },
    ];

    SpicesData.sort((a, b) => a.name.localeCompare(b.name));


    const [value, setValue] = useState('All');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const filteredContents = value === 'All' ? SpicesData : SpicesData.filter(data => data.category.includes(value.toLocaleLowerCase()));

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
        <div>
            {/* Product Listing */}
            <div className='flex flex-col items-center justify-center'>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl font-bold py-4 text-center'>Spices Product Listing</h1>
                    <div className='flex flex-col items-center justify-center'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                            {SpicesMenu.map((item,index) => (
                                <div key={index} className='py-2 px-4 text-xl'>
                                    <div className='flex flex-col sm:flex-row p-2'>
                                        <div className='flex items-center justify-center h-64 w-64 mr-10'>
                                            {!imageLoaded && <ImageLoader />}
                                            <img src={item.image} onLoad={handleImageLoad} alt={item.title} className={`w-60 h-60 rounded-xl object-cover ${imageLoaded ? 'block' : 'hidden'}`} />
                                        </div>
                                        <div>
                                            <h2 className='text-2xl font-bold text-center text-[#413f91] underline'>{item.title}</h2>
                                            <div className='w-[210px]'>
                                                {item.list && item.list.length > 0 && (
                                                    <ul className='list-disc'>
                                                        {item.list.map((listItems,index) => (
                                                            <li key={index} className='font-normal'>{listItems}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                                {item.desc && <div>{item.desc}</div>}
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='w-full'>
                            {groundSpices.map((item,index) => (
                                <div key={index} className='py-2 px-4 text-xl'>
                                    <h2 className='text-2xl font-bold text-center text-[#413f91] underline'>{item.title}</h2>
                                    <div className="flex flex-wrap list-disc">
                                        {item.list.map((listItems,index) => (
                                            <li key={index} className="pl-4 space-y-2">{listItems}</li>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Products */}
            <div className='flex flex-col'>
                <div className='flex sm:items-end sm:justify-end justify-center items-center'>
                    <div className='flex items-center justify-center gap-2 border-1 mb-6 bg-[#fd9b40] p-2 mt-2 rounded-lg'>
                        <p className='text-lg'>Category By : </p>
                        <select id="sortby" name='sortby' className='w-48 text-[#5e1c0e] placeholder:text-[#5e1c0e] bg-[#fff] rounded-xl p-1' onChange={handleChange}>
                            <option defaultChecked value="All" className='p-2'>All</option>
                            <option value="masalas" className='p-2'>Masalas</option>
                            <option value="powdered" className='p-2'>Powdered</option>
                            <option value="wholespices" className='p-2'>Whole Spices</option>
                        </select>
                    </div>
                </div>
                <div className='flex sm:flex-row flex-col mt-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-items-center gap-4 mb-5'>
                        {filteredContents.map((data) => (
                            <div key={data.id} id={data.id} className='p-2 h-full'> 
                                <div key={data.id} className='p-4 bg-[#fff] border-2 rounded-xl border-[#5e1c0e] h-full group transition-transform transform hover:scale-105'>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center justify-center h-[300px]'>
                                            {!imageLoaded && <ImageLoader />}
                                            <img src={data.productimg} onLoad={handleImageLoad} alt={data.name} className={`w-full h-full rounded-xl object-cover items-center ${imageLoaded ? 'block' : 'hidden'}`} />
                                        </div>
                                        <div className='p-5'>
                                            <div className='font-bold text-2xl text-center text-[#413f91]'>{data.name}</div>
                                            <div className='text-lg text-left text-[#290c06] mt-2'>{data.desc}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
