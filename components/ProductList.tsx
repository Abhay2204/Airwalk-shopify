import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { MOCK_PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

interface ProductListProps {
  onProductSelect: (product: Product) => void;
}

export const ProductList: React.FC<ProductListProps> = ({ onProductSelect }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All" 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-[#F5F5F7]" id="products">
      
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-4xl font-black text-shopily-charcoal mb-8 tracking-tight uppercase">
          Curated Selection
        </h2>
        
        {/* Minimalist Category Tabs */}
        <div className="flex flex-wrap gap-1 justify-center p-1 bg-white rounded-full shadow-sm">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat 
                ? 'bg-shopily-charcoal text-white shadow-md' 
                : 'text-gray-500 hover:text-black hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onClick={() => onProductSelect(product)}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col gap-4"
    >
      {/* Image Container - Clean, Gray Background */}
      <div className="relative aspect-square bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl">
        <div className="absolute top-4 left-4 z-10 flex gap-2">
           {product.isNew && <span className="px-3 py-1 bg-black text-white text-[10px] font-bold uppercase tracking-wider rounded-full">New</span>}
        </div>
        
        <div className="w-full h-full p-4 flex items-center justify-center relative">
          <motion.img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover rounded-xl z-10 transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Quick Add Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
           <button className="w-full bg-white text-black font-bold py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-gray-50">
             <Plus size={16} /> Quick View
           </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-2">
         <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-shopily-charcoal group-hover:text-shopily-burgundy transition-colors">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
            </div>
            <span className="text-lg font-bold text-shopily-charcoal">₹{product.price}</span>
         </div>
      </div>
    </motion.div>
  );
};
