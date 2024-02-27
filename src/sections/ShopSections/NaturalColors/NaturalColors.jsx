// Table of Contents
import NaturalColourTable from './NaturalColourTable';

export default function NaturalColors() {
    return (
        <div className='flex flex-col items-center justify-center'>
            {/* Colours */}
            <h1 className=' flex text-center justify-center font-bold text-4xl'>Colours</h1>
            <NaturalColourTable />
        </div>
    );
}