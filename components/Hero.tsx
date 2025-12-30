import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  
  // Simplified parallax effects for better performance
  const yImage = useTransform(scrollY, [0, 500], [0, 75]);
  const yText = useTransform(scrollY, [0, 300], [0, -50]);
  const opacityText = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#F5F5F7]">
      
      {/* Massive Background Text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <motion.h1 
          style={{ y: yText, opacity: opacityText, willChange: 'transform, opacity' }}
          className="text-[18vw] font-black text-gray-200 tracking-tighter leading-none whitespace-nowrap"
        >
          AIRWALK
        </motion.h1>
      </div>

      {/* Main Content Container */}
      <div className="relative h-full w-full max-w-[1600px] mx-auto px-6 flex flex-col justify-center items-center z-10">
        
        {/* Floating Shoe Image */}
        <motion.div 
          style={{ y: yImage, willChange: 'transform' }}
          animate={{ y: [0, -20, 0] }}
          transition={{ 
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            style: { duration: 0 } 
          }}
          className="w-full max-w-2xl relative z-20 flex justify-center ml-auto mr-32"
        >
          {/* Updated to White/Yellow Sneaker matching user request */}
          <motion.img 
            initial={{ scale: 0.8, opacity: 0, x: 200 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            src="/images/heroshoes.png" 
            alt="Airwalk Signature" 
            className="w-[70%] md:w-[80%] h-auto object-contain mix-blend-multiply drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            loading="eager"
          />
        </motion.div>

        {/* Foreground Overlay Text */}
        <div className="absolute top-1/2 left-6 md:left-24 -translate-y-1/2 z-30 mix-blend-multiply pointer-events-none">
           <motion.div
             initial={{ x: -100, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5, duration: 0.8 }}
           >
             <p className="text-lg md:text-xl font-bold tracking-[0.2em] text-shopily-burgundy mb-2">SEASON 05</p>
             <h2 className="text-6xl md:text-8xl font-black text-shopily-charcoal leading-[0.9] tracking-tighter">
               DEFY<br/>GRAVITY
             </h2>
           </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="absolute bottom-12 right-6 md:right-12 z-30 flex flex-col items-end gap-6">
           <motion.p 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ delay: 1 }}
              className="max-w-xs text-right text-shopily-slate font-medium text-sm leading-relaxed hidden md:block"
           >
             Engineered with AeroFoam™ technology. <br/> The lightest stride you'll ever take.
           </motion.p>

           <motion.button 
             initial={{ scale: 0.9, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             transition={{ delay: 1.2 }}
             className="bg-shopily-charcoal text-white px-10 py-5 rounded-full font-bold tracking-wide hover:bg-black transition-colors shadow-2xl flex items-center gap-3 group"
           >
             SHOP COLLECTION
             <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
           </motion.button>
        </div>

      </div>
      
    </section>
  );
};