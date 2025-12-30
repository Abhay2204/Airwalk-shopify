import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wind, Feather, Plus } from 'lucide-react';
import { Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface FeaturedDropProps {
  onAddToCart: (product: Product, size: number) => void;
}

export const FeaturedDrop: React.FC<FeaturedDropProps> = ({ onAddToCart }) => {
  const featuredProduct = MOCK_PRODUCTS[0]; // Assuming first item is featured

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-b border-gray-100 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <span className="text-shopily-burgundy font-bold tracking-widest text-xs uppercase mb-2 block">New Arrival</span>
            <h2 className="text-5xl font-black text-shopily-charcoal tracking-tight">VELOCITY ELITE.</h2>
          </div>
          <p className="max-w-md text-gray-500 font-medium leading-relaxed text-right md:text-left">
            The future of running is here. Experience energy return like never before with our patented Zoom-X core.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Product Image Stage */}
          <div className="relative group bg-[#F0F0F0] rounded-[3rem] p-12 lg:h-[600px] flex items-center justify-center overflow-hidden">
             <div className="absolute top-8 right-8 bg-white/50 backdrop-blur-md rounded-full px-4 py-2 text-xs font-bold text-shopily-charcoal z-20">
               LIMITED STOCK
             </div>
             
             <motion.img 
               whileHover={{ scale: 1.05, y: -10 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               src="/images/heroshoes.png" 
               alt="Featured Drop" 
               className="w-full max-w-[500px] drop-shadow-2xl relative z-10 mix-blend-multiply"
             />

             {/* Background decorative blob */}
             <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-transparent rounded-[3rem] opacity-50"></div>
          </div>

          {/* Technical Specs */}
          <div className="space-y-12">
             <div className="grid grid-cols-1 gap-8">
               <FeatureRow 
                 icon={<Feather />} 
                 title="Ultra Lightweight" 
                 desc="Weighing in at just 210g, you'll barely feel them on your feet." 
               />
               <FeatureRow 
                 icon={<Wind />} 
                 title="Aero-Vent Mesh" 
                 desc="360-degree breathability keeps you cool during intense sprints." 
               />
               <FeatureRow 
                 icon={<Zap />} 
                 title="Kinetic Energy Return" 
                 desc="Absorbs impact and pushes you forward with 15% more efficiency." 
               />
             </div>

             <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-6 items-center">
               <div className="text-center sm:text-left">
                  <span className="block text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">Price</span>
                  <span className="text-4xl font-black text-shopily-charcoal">₹1890.00</span>
               </div>
               <button 
                  onClick={() => onAddToCart(featuredProduct, 8)} // Default size for quick add
                  className="flex-1 w-full bg-shopily-charcoal text-white py-5 rounded-xl font-bold text-lg hover:bg-shopily-burgundy transition-colors shadow-xl flex items-center justify-center gap-3"
               >
                 <Plus size={20} />
                 ADD TO CART
               </button>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureRow = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex gap-6 group">
    <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-shopily-charcoal group-hover:bg-shopily-charcoal group-hover:text-white transition-colors duration-300 shrink-0">
      {React.cloneElement(icon as React.ReactElement, { size: 28 })}
    </div>
    <div>
      <h4 className="text-xl font-bold text-shopily-charcoal mb-2">{title}</h4>
      <p className="text-gray-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);
