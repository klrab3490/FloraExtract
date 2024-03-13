import { useState } from 'react';
import ImageLoader from "../../../components/ImageLoader";

// Table of Contents
import Food from './Food';
import NaturalPreservativesTable from './NaturalPreservativesTable';

// image
import Diary from '../../../assets/NaturalPreservatives/Diary.jpg';
import Beverages from '../../../assets/NaturalPreservatives/Beverages.jpg';
import Confectionery from '../../../assets/NaturalPreservatives/Confectionery.jpg';
import Savoury from '../../../assets/NaturalPreservatives/Savoury.jpg';
import HeatStable from '../../../assets/NaturalPreservatives/HeatStable.png';
import Customized from '../../../assets/NaturalPreservatives/Customized.png';
import CostEffective from '../../../assets/NaturalPreservatives/CostEffective.png';
import LightStable from '../../../assets/NaturalPreservatives/LightStable.png';
import SolubleInWaterOil from '../../../assets/NaturalPreservatives/SolubleInWater-Oil.png';
import Original from '../../../assets/NaturalPreservatives/Original.png';

function NaturalPreservatives() {
    const data = [
        {
            id: 1,
            title: 'Diary',
            image: Diary,
            list: ['Ice Creams', 'Flavoured Milks', 'Milk Products-Cheese Butter etc']
        },{
            id: 2,
            title: 'Beverages',
            image: Beverages,
            list: ['Soft Drinks', 'Alcoholic Beverages', 'Carbonated Drinks', 'Fruit Juices', 'Sports Drinks']
        },{
            id: 3,
            title: 'Confectionery',
            image: Confectionery,
            list: ['Candie Bars', 'Fruit Candies', 'Lollipops', 'Chocolates','Cream Biscuits', 'Chewing Gums', 'Mints']
        },{
            id: 4,
            title: 'Savoury',
            image: Savoury,
            list: ['Meat Products', 'Snacks and Crisps', 'Convenience Foods', 'Spice Blends']
        }
    ];

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
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold py-4 text-center'>Delivering Widest Range Of Natural Food Colours</h1>
                <div className='flex flex-col items-center justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {data.map((item,index) => (
                            <div key={index} className='py-2 px-4 text-xl'>
                                <div className='flex flex-col sm:flex-row p-2'>
                                    <div className='flex items-center justify-center h-64 w-64 mr-10'>
                                        {!imageLoaded && <ImageLoader />}
                                        <img src={item.image} onLoad={handleImageLoad} alt={item.title} className={`h-60 w-60 object-cover rounded-lg ${imageLoaded ? 'block' : 'hidden'}`} />
                                    </div>
                                    <div>
                                        <h2 className='text-2xl font-semibold text-center sm:text-start'>{item.title}</h2>
                                        <ul className='list-disc'>
                                            {item.list.map((listItem,index) => (
                                                <li key={index} className='font-normal'>{listItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Key Benefits */}
                <div className='flex text-xl font-semibold flex-col items-center justify-center p-5'>
                    <h1 className='font-bold text-4xl'>Key Benefits</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-6 gap-4 items-start justify-center p-5'>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={Original} alt="100% Original" className='w-28' />
                            <p>100% Original</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={HeatStable} alt="Heat Stable" className='w-28' />
                            <p>Heat Stable</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={LightStable} alt='Light Stable' className='w-28' />
                            <p>Light Stable</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={SolubleInWaterOil} alt="Soluble In Water/Oil" className='w-28' />
                            <p>Soluble In Water/Oil</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={CostEffective} alt="Cost Effective" className='w-28' />
                            <p>Cost Effective</p>
                        </div>
                        <div className='flex flex-col text-center items-center justify-center w-32'>
                            <img src={Customized} alt="Wide Range Of Customized Application" className='w-28' />
                            <p>Customized Application</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-4xl font-bold py-8 text-center'>Discover Our Wide Array Of Applications</h1>
                <Food />
            </div>
            <div>
                <h1 className='text-4xl font-bold py-8 text-center'>Natural Preservatives</h1>
                <NaturalPreservativesTable />
            </div>
        </div>
    );
}

export default NaturalPreservatives;