import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Essential Oils data
const essentialOils = [
  "Ajowan Seed", "Baise Rose", "Black Pepper", "Calamus", "Cardamom", "Cassia Bark", "Celery Seed", "Cinnamon Bark", "Cinnamon Leaf", "Clove Bud", "Clove Leaf", "Coriander Seed", "Cumin Seed", "Curcuma Aromatica", "Curry Leaf", "Davana", "Dill Seed", "Elemi", "Fennel Seed", "Galangal", "Garlic", "Ginger", "Java Galangal", "Juniper Berry", "Lemon Grass", "Mace", "Myrrh", "Nutmeg", "Olibanum", "Opoponax", "Palmarosa", "Parsley Seed", "Rosemary", "Styrax", "Turmeric", "Vetiver", "White Pepper"
];

// Oleoresins data
const oleoresins = [
  "Anise Seed", "Asafoetida (Hing)", "Basil Leaf", "Big Cardamom", "Black Pepper", "Capsicum", "Caraway Seed", "Cardamom", "Cassia Bark", "Celery Leaf", "Celery Seed", "Chilli", "Clove Bud", "Cocoa", "Coffee", "Coriander Seed", "Coriander Leaf", "Cumin Seed", "Curry Leaf", "Dates", "Dill", "Fennel Seed", "Galangal", "Garlic", "Ginger", "Green Chilli", "Green Ginger", "Green Pepper", "Java Galangal", "Juniper Berry", "Laurel Leaf", "Lemon Grass", "Mace", "Marjoram", "Nutmeg", "Onion", "Oregano", "Parsley Seed", "Pepper Long", "Pimento", "Rosemary", "Sage", "Spearmint", "Star Anise", "Tamarind", "Thyme", "Turmeric", "White Pepper"
];

// Spray Dried Products data
const sprayDriedProducts = [
  "All our Essential Oils", "Oleoresins", "Green Extractives", "Natural Food Colours"
];

// Clean Label data
const cleanLabels = [
  "Super Critical Extracts", "Black Pepper", "Cardamom", "Cinnamon", "Cumin", "Ginger"
];

export default function Flavour() {
  const [animateMainDiv, setAnimateMainDiv] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateMainDiv(true);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={animateMainDiv ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
      <div className="text-center text-4xl font-bold mb-8">Flavours</div>
      <div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, }} className="mb-4">
          <h1 className="text-2xl font-bold mb-4 text-[#413f91] underline">Essential Oil</h1>
          <div className="flex flex-wrap text-lg">
            {essentialOils.map((oil, index) => (
              <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="pl-4 space-y-2">{oil}</motion.li>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length) * 0.1 }} className="mb-4">
          <h1 className="text-2xl font-bold mb-4 text-[#413f91] underline">Oleoresins</h1>
          <div className="flex flex-wrap text-lg">
            {oleoresins.map((resin, index) => (
              <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length + index + 1) * 0.1 }} className="pl-4 space-y-2">{resin}</motion.li>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length + oleoresins.length) * 0.1 }} className="mb-4">
          <h1 className="text-2xl font-bold mb-4 text-[#413f91] underline">Spray Dried Products</h1>
          <div className="flex flex-wrap text-lg">
            {sprayDriedProducts.map((product, index) => (
              <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length + oleoresins.length + index + 1) * 0.1 }} className="pl-4 space-y-2">{product}</motion.li>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length + oleoresins.length + sprayDriedProducts.length) * 0.1 }} className="mb-4">
          <h1 className="text-2xl font-bold mb-4 text-[#413f91] underline">Clean Label</h1>
          <div className="flex flex-wrap text-lg">
            {cleanLabels.map((label, index) => (
              <motion.li key={index} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (essentialOils.length + oleoresins.length + sprayDriedProducts.length + index + 1) * 0.1 }} className="pl-4 space-y-2">{label}</motion.li>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
