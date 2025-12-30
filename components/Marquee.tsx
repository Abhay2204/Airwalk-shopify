import React from 'react';
import { motion } from 'framer-motion';

export const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-shopily-charcoal text-white py-4 overflow-hidden border-y border-white/10 relative z-20">
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-12 items-center text-sm font-bold tracking-[0.2em] uppercase"
        >
          {Array(10).fill("Free Global Shipping • 30-Day Returns • New Styles Added Weekly • ").map((text, i) => (
             <span key={i} className="opacity-80">{text}</span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
