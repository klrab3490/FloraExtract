import { motion } from 'framer-motion';

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
  "All our Essential Oils", "Oleoresins", "Green Extractives & Natural Food Colours"
];

// Clean Label data
const cleanLabels = [
  "Super Critical Extracts", "Black Pepper", "Cardamom", "Cinnamon", "Cumin", "Ginger"
];

export default function Flavour() {
  return (
    <div className="container mx-auto p-10">
      <div className="text-center text-4xl font-bold mb-8">Flavours</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div>
          <h1 className="text-2xl font-bold mb-4">Essential Oil</h1>
          <ol className="list-decimal pl-4 space-y-2">
            {essentialOils.map((oil, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-lg"
              >
                {oil}
              </motion.li>
            ))}
          </ol>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Oleoresins</h1>
          <ol className="list-decimal pl-4 space-y-2">
            {oleoresins.map((resin, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-lg"
              >
                {resin}
              </motion.li>
            ))}
          </ol>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Spray Dried Products</h1>
          <ol className="list-decimal pl-4 space-y-2">
            {sprayDriedProducts.map((product, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-lg"
              >
                {product}
              </motion.li>
            ))}
          </ol>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Clean Label</h1>
          <ol className="list-decimal pl-4 space-y-2">
            {cleanLabels.map((label, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-lg"
              >
                {label}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
