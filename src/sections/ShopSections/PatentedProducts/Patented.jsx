import { NavLink } from 'react-router-dom'

// Assets
import akbamax from '../../../assets/AKBAMAX.png'
import bcm95 from '../../../assets/BCM95.png'
import herbagut from '../../../assets/Herbagut.png'
import oxystorm from '../../../assets/Oxystorm.png'
import shoden from '../../../assets/Shoden.png'
import trilow from '../../../assets/Trilow.png'

export default function Patented() {
  const data = [
    {
      id : 1,
      image :  akbamax ,
      title : "AKBAMAX® (BosPure®)",
      subtitle : "Functional Foods",
      description : "AKBAMAX® (BosPure®) is a unique extract derived from the resin of the Boswellia…",
      link : ""
    }, {
      id : 2,
      image :  bcm95 ,
      title : "BCM-95® (Curcugreen®)",
      subtitle : "Functional Foods",
      description : "BCM-95® (Curcugreen®) is our 100% pure turmeric extract that boasts" ,
      link : ""
    }, {
      id : 3,
      image :  herbagut ,
      title : "Herbagut ®",
      subtitle :  "Functional Foods" ,
      description :  "Herbagut brings together the power of 14 different herbs to improve overall digestive health…",
      link : ""  
    }, {
      id : 4,
      image :  oxystorm ,
      title :  "Oxystorm® (Amaranthus)" ,
      subtitle :  "Functional Foods" ,
      description :  "Oxystorm® is the world’s first nitrate enriched extract of Amaranthus, one of the highest dietary sources of nitrates…" ,
      link : ""   
    }, {
      id : 5,
      image :  shoden ,
      title :  "Shoden®" ,
      subtitle :  "Functional Foods" ,
      description :  "Shoden® is a clinically-tested, purified extract derived from the Ashwagandha plant…" ,
      link : ""  
    }, {
      id : 6,
      image :  trilow ,
      title :  "Tri-low® (Amla Extract)" ,
      subtitle :  "Functional Foods" ,
      description :  "Tri-Low® is the full spectrum extract of the bioactive ingredients found in the Indian gooseberry or Amla…" ,
      link : ""
    }  
    // {
    //   id:,
    //   image:,
    //   title:'',
    //   subtitle:'Functional Foods',
    //   description:'',
    //   link:''
    // },
  ];

  return (
    <div>
      {data.map((data,index) => (
        <div key={index} className='border-2 rounded-xl w-auto sm:h-[500px] h-auto m-5 border-[#5e1c0e] text-[#5e1c0e] flex flex-col justify-between'>
          <div>
            <img src={data.image} className='rounded-t-xl h-[220px] w-full' />
          </div>
          <div className='ml-2 font-semibold'>
            <div className='text-2xl font-bold'>{data.title}</div>
            <div className='text-xs'>{data.subtitle}</div>
            <div className='p-5 text-xl'>
              <div>{data.description}</div>
            </div>
          </div>
          <div className='p-5 text-xl'>
            <NavLink to={data.link} className='underline text-end items-end flex justify-end'>Read More</NavLink>
          </div>
        </div>
      ))}
    </div>
  )
}