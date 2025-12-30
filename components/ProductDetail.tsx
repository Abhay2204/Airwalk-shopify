import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingBag, Truck, Shield, Ruler } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product, size: number) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const handleAdd = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      onClose(); // Optional: close on add, or show toast
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    >
      <div className="absolute inset-0 bg-shopily-charcoal/60 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ scale: 0.9, y: 50, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 50, opacity: 0 }}
        className="relative w-full max-w-5xl h-[90vh] md:h-auto bg-shopily-bluegrey rounded-[2.5rem] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center backdrop-blur-sm transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left: Image */}
        <div className="relative h-full min-h-[300px] bg-gradient-to-br from-white to-shopily-bluegrey flex items-center justify-center p-8">
           <motion.div 
             className="absolute top-8 left-8 bg-shopily-burgundy text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider"
             initial={{ x: -20, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.3 }}
           >
             {product.category}
           </motion.div>
           
           <motion.img 
             src={product.image} 
             alt={product.name}
             className="w-full max-w-md object-contain drop-shadow-2xl z-10"
             initial={{ rotate: -10, scale: 0.8, opacity: 0 }}
             animate={{ rotate: 0, scale: 1, opacity: 1 }}
             transition={{ type: "spring", duration: 1 }}
           />
           
           <h1 className="absolute bottom-[-20px] left-0 text-[8rem] md:text-[10rem] font-black text-white/20 select-none pointer-events-none leading-none whitespace-nowrap overflow-hidden">
             AIRWALK
           </h1>
        </div>

        {/* Right: Info */}
        <div className="bg-white/40 backdrop-blur-xl p-8 md:p-12 overflow-y-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-3xl md:text-4xl font-black text-shopily-charcoal">{product.name}</h2>
              <span className="text-2xl font-medium text-shopily-burgundy">₹{product.price}</span>
            </div>
            
            <p className="text-shopily-slate leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-shopily-charcoal">Select Size</span>
                <button className="flex items-center gap-1 text-xs text-shopily-slate hover:text-shopily-burgundy">
                  <Ruler size={14} /> Size Guide
                </button>
              </div>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`
                      py-3 rounded-xl text-sm font-medium transition-all
                      ${selectedSize === size 
                        ? 'bg-shopily-charcoal text-white scale-105 shadow-lg' 
                        : 'bg-white border border-white/40 text-shopily-slate hover:border-shopily-burgundy/50'}
                    `}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && <p className="text-shopily-burgundy text-xs mt-2">* Please select a size</p>}
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleAdd}
                disabled={!selectedSize}
                className={`
                  w-full py-4 rounded-2xl flex items-center justify-center gap-3 font-bold text-lg transition-all
                  ${selectedSize 
                    ? 'bg-shopily-burgundy text-white hover:bg-shopily-charcoal shadow-xl hover:shadow-2xl transform hover:-translate-y-1' 
                    : 'bg-shopily-slate/20 text-shopily-slate cursor-not-allowed'}
                `}
              >
                <ShoppingBag size={20} />
                Add to Cart
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center gap-3 p-4 bg-white/30 rounded-2xl">
                    <Truck className="text-shopily-charcoal" />
                    <div>
                      <p className="text-xs font-bold">Free Delivery</p>
                      <p className="text-[10px] text-shopily-slate">1-3 Business Days</p>
                    </div>
                 </div>
                 <div className="flex items-center gap-3 p-4 bg-white/30 rounded-2xl">
                    <Shield className="text-shopily-charcoal" />
                    <div>
                      <p className="text-xs font-bold">Guaranteed</p>
                      <p className="text-[10px] text-shopily-slate">30 Day Returns</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};
