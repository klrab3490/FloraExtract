import { useState } from 'react'
import { motion } from 'framer-motion'

// Image
import AnnattoBixon from "../../../assets/Natural Color/Orange/Annatto Bixin.jpg"
import BetaCarotene from "../../../assets/Natural Color/Orange/Beta Carotene.jpg"
import img_4 from "../../../assets/Natural Color/Orange/img_4.jpg"
import Paprika from "../../../assets/Natural Color/Orange/Paprika.png"

// Image-Table
import table from "../../../assets/Natural Color/Table/OrangeTable.png"

export default function Orange() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center mb-4 sm:mb-14" >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-[#F5710F]" > Orange </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col gap-4 p-2" >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex flex-wrap justify-center items-center gap-4" >
          <div className="sm:w-40 w-32 h-[140px]" >
            <img src={AnnattoBixon} alt='Annatto Bixon' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]" >
            <img src={BetaCarotene} alt='Beta Carotene' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]" >
            <img src={img_4} alt='img_4' className='w-full h-full object-cover' />
          </div>
          <div className="sm:w-40 w-32 h-[140px]" >
            <img src={Paprika} alt='Paprika' className='w-full h-full object-cover' />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col w-full justify-center items-center" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} >
            <p className="py-2">Orange shades conjure images from pale orange to deep intense Orange hues which are naturally suited for a wide range of applications in the food and beverage industry. The raw ingredients used by Plant Lipids to achieve these orange hues are derived from a variety of sources including Annatto, Beta Carotene & Paprika. These ingredients are used to create a range of products, from Oil Soluble Liquids to Powders and Water Dispersible Liquids by using Plant Lipids Super-Sol Concept Technology.</p>
            <p className="py-2">These formulations are designed with you, the customer in mind, so whatever your application – savoury, ready meals, sauces, beverages, confectionery, or dairy, we have the perfect, tailor-made products, to deliver these shades.</p>
          </motion.div>
        </motion.div>
        <div className='hidden sm:flex justify-center items-center'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className=''>
            <table className="table-fixed border-collapse border border-slate-500">
              <thead className="bg-slate-300 ">
                <tr>
                  <th rowSpan={2} className="border border-slate-600 w-36">Product Name</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Solubility</th>
                  <th rowSpan={2} className="border border-slate-600 w-36">Form</th>
                  <th colSpan={3} className="border border-slate-600">Stability</th>
                  <th rowSpan={2} className="border border-slate-600 w-[700px]">Typical Applications</th>
                </tr>
                <tr>
                  <th className="border border-slate-600 w-[54px]">pH</th>
                  <th className="border border-slate-600 w-[54px]">Heat</th>
                  <th className="border border-slate-600 w-[54px]">Light</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Paprika</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Meat, Poultry, Sea Foods, Seasoning, Sauces, Curries, Extruded Snacks</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry, Sea Foods, Decorations, Coatings, Fats & Oils</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Annatto Bixin</td>
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Fats & Oils, Cheese, Butter, Decorations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Seasoning, Extruded Snacks, Pharmaceuticals, Bakery & Confectionery</td>
                </tr>
                
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Annatto Norbixin</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600">3</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Decorations, Fruit preparations, Bakery & Confectionery</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Safflower</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Beverages,  Decorations, Coatings & Fruit preparations</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className="sm:hidden flex flex-col gap-10">
          <div className="flex justify-center items-center pb-2" >
            <button onClick={() => setSelectedImage(!selectedImage)} className="bg-slate-500 text-white py-2 px-4 rounded-md">{selectedImage ? <div>Close Table</div> : <div>View Table</div>}</button>
          </div>
          {selectedImage && (
            <img src={table} alt="table" className="w-full h-full object-cover scale-105" />
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
