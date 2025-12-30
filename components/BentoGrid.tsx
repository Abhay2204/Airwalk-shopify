import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Truck, ShieldCheck, Clock } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
};

export const BentoGrid: React.FC = () => {
  const featured = MOCK_PRODUCTS[0];

  return (
    <motion.section 
      variants={container}
      initial="hidden"
      animate="show"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
        
        {/* Large Feature Tile */}
        <motion.div 
          variants={item}
          className="md:col-span-2 md:row-span-2 glass-panel rounded-[2rem] relative overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-shopily-slate/10 to-transparent z-10" />
          <img 
            src={featured.image} 
            alt={featured.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-shopily-charcoal/80 to-transparent text-white">
            <span className="inline-block px-3 py-1 bg-shopily-burgundy rounded-full text-xs font-bold mb-3 tracking-wide">NEW ARRIVAL</span>
            <h2 className="text-4xl font-bold mb-2">{featured.name}</h2>
            <p className="text-shopily-bluegrey mb-4 max-w-sm line-clamp-2">{featured.description}</p>
            <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-md px-6 py-3 rounded-full transition-all">
              Shop Now <ArrowUpRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Brand/Video Tile */}
        <motion.div 
          variants={item}
          className="glass-panel rounded-[2rem] p-8 flex flex-col justify-between bg-shopily-charcoal text-shopily-bluegrey relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-32 bg-shopily-burgundy rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
          <div>
            <h3 className="text-2xl font-semibold text-white">Autumn Collection</h3>
            <p className="mt-2 text-sm opacity-80">Earth tones & rugged textures.</p>
          </div>
          <div className="relative z-10">
             <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-2">
                <span className="text-2xl">🍂</span>
             </div>
             <div className="h-1 w-full bg-white/10 rounded-full mt-4 overflow-hidden">
               <div className="h-full bg-shopily-beige w-2/3"></div>
             </div>
          </div>
        </motion.div>

        {/* Tall List Tile */}
        <motion.div 
          variants={item}
          className="md:row-span-2 glass-panel rounded-[2rem] p-6 flex flex-col bg-white/40"
        >
          <h3 className="text-xl font-bold text-shopily-charcoal mb-4">Trending Now</h3>
          <div className="flex-1 overflow-y-auto space-y-4 pr-2">
            {[MOCK_PRODUCTS[1], MOCK_PRODUCTS[2], MOCK_PRODUCTS[3]].map((product) => (
              <div key={product.id} className="flex items-center gap-4 p-3 hover:bg-white/40 rounded-2xl transition-colors cursor-pointer group">
                <img src={product.image} alt={product.name} className="w-16 h-16 rounded-xl object-cover shadow-sm group-hover:scale-105 transition-transform" />
                <div>
                  <h4 className="font-medium text-shopily-charcoal text-sm">{product.name}</h4>
                  <p className="text-shopily-burgundy font-semibold text-sm">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-3 rounded-xl border border-shopily-slate/20 text-shopily-slate text-sm font-medium hover:bg-shopily-charcoal hover:text-white transition-all">
            View All
          </button>
        </motion.div>

        {/* Small Info Tile */}
        <motion.div 
          variants={item}
          className="glass-panel rounded-[2rem] p-6 flex flex-col justify-center gap-4 bg-gradient-to-br from-shopily-cream to-white/50"
        >
          <div className="flex items-center gap-3 text-shopily-charcoal/80">
            <Truck size={20} className="text-shopily-burgundy" />
            <span className="text-sm font-medium">Free Global Shipping</span>
          </div>
          <div className="flex items-center gap-3 text-shopily-charcoal/80">
             <ShieldCheck size={20} className="text-shopily-burgundy" />
             <span className="text-sm font-medium">2 Year Warranty</span>
          </div>
          <div className="flex items-center gap-3 text-shopily-charcoal/80">
             <Clock size={20} className="text-shopily-burgundy" />
             <span className="text-sm font-medium">30-Day Returns</span>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
};
