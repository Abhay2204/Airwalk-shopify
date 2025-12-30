import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`
        mx-auto max-w-7xl px-6 rounded-2xl transition-all duration-300 flex items-center justify-between
        ${scrolled 
          ? 'w-[95%] h-16 glass-panel bg-white/60 shadow-lg' 
          : 'w-full h-20 bg-transparent'
        }
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-shopily-charcoal group-hover:bg-shopily-burgundy transition-colors rounded-lg flex items-center justify-center text-white font-black text-lg skew-x-[-10deg]">A</div>
          <span className="text-xl font-black text-shopily-charcoal tracking-tighter">AIRWALK.</span>
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {['New Drops', 'Men', 'Women', 'Collections'].map((link) => (
            <a 
              key={link} 
              href="#" 
              className="text-sm font-medium text-shopily-slate hover:text-shopily-burgundy transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-shopily-burgundy transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button className="p-2 text-shopily-charcoal hover:bg-shopily-charcoal/5 rounded-full transition-colors">
            <Search size={20} />
          </button>
          <div className="relative">
            <button 
              onClick={onOpenCart}
              className="p-2 text-shopily-charcoal hover:bg-shopily-charcoal/5 rounded-full transition-colors"
            >
              <ShoppingBag size={20} />
            </button>
            {cartCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 w-4 h-4 bg-shopily-burgundy text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white"
              >
                {cartCount}
              </motion.span>
            )}
          </div>
          <button className="md:hidden p-2 text-shopily-charcoal">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </motion.nav>
  );
};
