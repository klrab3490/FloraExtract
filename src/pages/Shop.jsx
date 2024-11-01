import { useState } from 'react';
import Extract from '../sections/ShopSections/Extract/Extract';
import Flavour from '../sections/ShopSections/Flavour Ingredients/Flavour';
import FinishedProducts from '../sections/ShopSections/FinishedProduct/FinishedProducts';
import NaturalColors from '../sections/ShopSections/NaturalColors/NaturalColors';
import NaturalPreservatives from '../sections/ShopSections/NaturalPreservatives/NaturalPreservatives';
import Spices from '../sections/ShopSections/Spices/Spices';
import Organic from '../sections/ShopSections/Organic/Organic';

export default function Shop() {
    const contents = [
        <Extract key={'Extract'} />,
        <Flavour key={'Flavour'} />,
        <FinishedProducts key={'FinishedProducts'} />,
        <NaturalColors key={'NaturalColors'} />,
        <NaturalPreservatives key={'NaturalPreservatives'} />,
        <Organic key={'Organic'} />,
        <Spices key={'Spices'} />,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div>
            <div className='px-4 sm:px-14'>
                <div className='flex flex-wrap items-center justify-center py-5'>
                <div className={currentIndex === 0 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(0)}>Extracts</div>
                <div className={currentIndex === 1 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(1)}>Flavour Ingredients</div>
                <div className={currentIndex === 2 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(2)}>Nutraceutical Products</div>
                <div className={currentIndex === 3 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(3)}>Natural Food Colours</div>
                <div className={currentIndex === 4 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(4)}>Natural Preservatives</div>
                <div className={currentIndex === 5 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(5)}>Organic</div>
                <div className={currentIndex === 6 ? 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline text-[#fd9b40]' : 'px-4 py-2 flex text-center justify-center text-2xl font-medium cursor-pointer hover:text-[#fd9b40] hover:underline'} onClick={() => setCurrentIndex(6)}>Spices</div>
            </div>
            <div>
                {contents[currentIndex]}
            </div>
            </div>
        </div>
    );
}
