import Modal from 'react-modal'
import { useState } from 'react'
import { motion } from 'framer-motion'

// Image
import pinch from "../../../assets/Natural Color/Green/pinch.jpg"
import greeenextracts from "../../../assets/Natural Color/Green/greeen-extracts.png"

// Image-Table
import table from "../../../assets/Natural Color/Table/GreenTable.png"

export default function Green() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center mb-4 sm:mb-14" >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-4xl font-bold text-[#38AA50]" > Green </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="flex flex-col gap-4 p-2" >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="flex justify-center items-center gap-4 h-52 sm:h-auto" >
          <div className="w-40 h-[140px]" >
            <img src={pinch} alt='pinch' className='w-full h-full object-cover' />
          </div>
          <div className="w-40 h-[140px]" >
            <img src={greeenextracts} alt='greeen-extracts' className='w-full h-full object-cover' />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex flex-col w-full justify-center items-center" >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} >
            <p className="py-2">Green shades are all around us in nature from a light green apple to a deep mint colour, which are naturally suited for a wide range of applications in the food and beverage industry. The raw ingredients used by Plant Lipids to achieve these green hues are derived from a variety of sources including Chlorophyll and Copper Chlorophyllin. These ingredients are used to create a range of products, from Oil Soluble Liquids to Water Soluble Liquids and Powders by using Plant LipidsSuper-Sol Concept Technology.</p>
            <p className="py-2">These formulations are designed with you, the customer in mind, so whatever your application – savoury, ready meals, sauces, beverages, confectionery or dairy, we have the perfect, tailor-made products, to deliver these shades.</p>
          </motion.div>
        </motion.div>
        <div className='hidden sm:flex justify-center items-center'>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 }} className=''>
            <table className="table-auto border-collapse border border-slate-500">
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
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Sodium Copper Chlorophyllin</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid / Powder</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Bakery, Confectionery, Beverages, Meat, Poultry, Sea Foods, Seasoning, Sauces, Curries, Extruded Snacks, Decorations, Coatings & Fruit preparations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">4</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry & Sea Foods, Fats & Oils, Decorations, coatings & Fruit preparations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold" rowSpan={2}>Copper Chlorophyll</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Bakery, Confectionery, Meat, Poultry, Sea Foods, Seasoning, Sauces, Curries & Extruded Snacks</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Oil Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600">5</td>
                  <td className="border border-slate-600 text-start p-2">Meat, Poultry & Sea Foods, Fats & Oils, Decorations, coatings & Fruit preparations</td>
                </tr>
                <tr className="text-center">
                  <td className="border border-slate-600 font-semibold">Non-Chlorophyll Green</td>
                  <td className="border border-slate-600 font-semibold">Water Soluble</td>
                  <td className="border border-slate-600">Liquid</td>
                  <td className="border border-slate-600">3</td>
                  <td className="border border-slate-600">3</td>
                  <td className="border border-slate-600">3</td>
                  <td className="border border-slate-600 text-start p-2">Dairy, Beverages, Confectionery, Meat & Poultry.</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
        <div>
            <div className='flex sm:hidden' onClick={() => setModalIsOpen(true)}>
                <img src={table} alt='table' className='w-full object-cover' />
            </div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} contentLabel="Image Modal" >
                <img src={table} alt='table' className='w-full object-cover ' style={{ transform: 'rotate(90deg)' }} />
            </Modal>
        </div>
      </motion.div>
    </motion.div>
  )
}
