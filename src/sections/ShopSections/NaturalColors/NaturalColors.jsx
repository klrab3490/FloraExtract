import { useState } from 'react';

// Colours Import
import Yellow from './Yellow';
import Orange from './Orange';
import Red from './Red';
import Green from './Green';
import Pink from './Pink';

export default function NaturalColors() {
    const colours = [
        <Yellow key={'Yellow'} />,
        <Orange key={'Orange'} />,
        <Red key={'Red'} />,
        <Green key={'Green'} />,
        <Pink key={'Pink'} />
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Colours */}
                <div className="flex flex-wrap items-center justify-center py-5 gap-5">
                <div className={currentIndex === 0 ? 'flex items-center justify-center w-28 p-2 font-bold bg-black text-[#FDAE17] rounded-2xl text-2xl' : 'flex items-center justify-center w-28 p-2 bg-[#FDAE17] rounded-2xl text-2xl hover:bg-black hover:text-[#FDAE17] hover:font-bold transition-all'} onClick={()=> setCurrentIndex(0)} >Yellow</div>
                <div className={currentIndex === 1 ? 'flex items-center justify-center w-28 p-2 font-bold bg-black text-[#F5710F] rounded-2xl text-2xl' : 'flex items-center justify-center w-28 p-2 bg-[#F5710F] rounded-2xl text-2xl hover:bg-black hover:text-[#F5710F] hover:font-bold transition-all'} onClick={()=> setCurrentIndex(1)} >Orange</div>
                <div className={currentIndex === 2 ? 'flex items-center justify-center w-28 p-2 font-bold bg-black text-[#EF3D31] rounded-2xl text-2xl' : 'flex items-center justify-center w-28 p-2 bg-[#EF3D31] rounded-2xl text-2xl hover:bg-black hover:text-[#EF3D31] hover:font-bold transition-all'} onClick={()=> setCurrentIndex(2)} >Red</div>
                <div className={currentIndex === 3 ? 'flex items-center justify-center w-28 p-2 font-bold bg-black text-[#38AA50] rounded-2xl text-2xl' : 'flex items-center justify-center w-28 p-2 bg-[#38AA50] rounded-2xl text-2xl hover:bg-black hover:text-[#38AA50] hover:font-bold transition-all'} onClick={()=> setCurrentIndex(3)} >Green</div>
                <div className={currentIndex === 4 ? 'flex items-center justify-center w-28 p-2 font-bold bg-black text-[#EE3E88] rounded-2xl text-2xl' : 'flex items-center justify-center w-28 p-2 bg-[#EE3E88] rounded-2xl text-2xl hover:bg-black hover:text-[#EE3E88] hover:font-bold transition-all'} onClick={()=> setCurrentIndex(4)} >Pink</div>
            </div>
            <div className='mt-4'>
                {colours[currentIndex]}
            </div>
        </div>
    );
}