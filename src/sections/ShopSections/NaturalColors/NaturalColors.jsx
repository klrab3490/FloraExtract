// image
import Diary from './assets/Diary.jpg'
import Beverages from './assets/Beverages.jpg'
import Confectionery from './assets/Confectionery.jpg'
import Savoury from './assets/Savoury.jpg'
import HeatStable from './assets/HeatStable.png'
import Customized from './assets/Customized.png'
import CostEffective from './assets/CostEffective.png'
import LightStable from './assets/LightStable.png'
import SolubleInWaterOil from './assets/SolubleInWater-Oil.png'
import Original from './assets/Original.png'
import NaturalColourTable from './NaturalColourTable'

export default function NaturalColors() {
  const data = [
    {
      id: 1,
      title: 'Diary',
      image:Diary,
      list: ['Ice Creams', 'Flavoured Milks', 'Milk Products-Cheese Butter etc']
    },{
      id: 2,
      title: 'Beverages',
      image:Beverages,
      list: ['Soft Drinks', 'Alcoholic Beverages', 'Carbonated Drinks', 'Fruit Juices', 'Sports Drinks']
    },{
      id: 3,
      title: 'Confectionery',
      image:Confectionery,
      list: ['Candie Bars', 'Fruit Candies', 'Lollipops', 'Chocolates','Cream Biscuits', 'Chewing Gums', 'Mints']
    },{
      id: 4,
      title: 'Savoury',
      image:Savoury,
      list: ['Meat Products', 'Snacks and Crisps', 'Convenience Foods', 'Spice Blends']
    }
  ]

  return (
    <div >
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl font-bold py-4'>Delivering Widest Range Of Natural Food Colours</h1>
        <div className='flex flex-col items-center justify-center'>
          <div className='grid grid-cols-2 gap-4'>
            {data.map((item,index) => (
              <div key={index} className='py-2 px-4 text-xl font-semibold'>
                <div className='flex p-2'>
                  <div className='flex items-center justify-center w-48 h-48 rounded-full bg-[#fd9b40] mr-7'>
                    <img src={item.image} alt={item.title} className='h-44 w-44 rounded-full object-cover' />
                  </div>
                  <div>
                    <h2 className='text-2xl'>{item.title}</h2>
                    <ul className='list-disc'>
                      {item.list.map((listItem,index) => (
                        <li key={index}>{listItem}</li>
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
          <h1 className='font-bold text-2xl'>Key Benefits</h1>
          <div className='flex flex-col sm:flex-row gap-4 items-start justify-center p-5'>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={Original} alt="100% Original" className='w-full' />
              <p>100% Original</p>
            </div>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={HeatStable} alt="Heat Stable" className='w-full' />
              <p>Heat Stable</p>
            </div>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={LightStable} alt='Light Stable' className='w-full' />
              <p>Light Stable</p>
            </div>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={SolubleInWaterOil} alt="Soluble In Water/Oil" className='w-full' />
              <p>Soluble In Water/Oil</p>
            </div>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={CostEffective} alt="Cost Effective" className='w-full' />
              <p>Cost Effective</p>
            </div>
            <div className='flex flex-col text-center items-center justify-center w-40'>
              <img src={Customized} alt="Wide Range Of Customized Application" />
              <p>Wide Range Of Customized Application</p>
            </div>
          </div>
        </div>
      </div>
      {/* Colours */}
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' flex text-center justify-center font-bold text-2xl'>Colours</h1>
        <NaturalColourTable />
      </div>
    </div>
  )
}
