import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Collections: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
       <h2 className="text-3xl md:text-4xl font-black mb-12 text-center tracking-tight">BROWSE COLLECTIONS</h2>
       
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[800px]">
          
          {/* Men's Collection - Large Vertical */}
          <div 
            className="row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-[0.98]"
          >
             <img src="/images/2.jpg" alt="Men's Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
             <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-4xl font-bold mb-2">MEN</h3>
                <span className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   Explore <ArrowRight size={16} />
                </span>
             </div>
          </div>

          {/* Women's Collection - Square */}
          <div 
            className="relative rounded-[2rem] overflow-hidden group cursor-pointer bg-gray-100 transition-transform duration-300 hover:scale-[0.98]"
          >
             <img src="/images/4.jpg" alt="Women's Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
             <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">WOMEN</h3>
             </div>
          </div>

           {/* Accessories / Essentials - Square */}
           <div 
            className="relative rounded-[2rem] overflow-hidden group cursor-pointer bg-gray-100 transition-transform duration-300 hover:scale-[0.98]"
          >
             <img src="/images/3.jpg" alt="Essentials Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
             <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
             <div className="absolute bottom-8 left-8 text-white">
                <h3 className="text-3xl font-bold">ESSENTIALS</h3>
             </div>
          </div>

          {/* Limited Edition - Wide */}
          <div 
            className="lg:col-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer bg-shopily-burgundy transition-transform duration-300 hover:scale-[0.98]"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-shopily-burgundy to-shopily-charcoal opacity-90"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-5xl md:text-7xl font-black text-white/10 group-hover:text-white/20 transition-colors">LIMITED</h3>
             </div>
             <div className="absolute inset-0 flex items-center justify-between px-12 relative z-10">
                <div className="text-white">
                   <span className="text-xs font-bold tracking-widest border border-white/30 px-3 py-1 rounded-full mb-4 inline-block">EXCLUSIVE</span>
                   <h3 className="text-3xl md:text-4xl font-bold mb-2">Collaboration Series</h3>
                   <p className="text-white/70 max-w-sm">Designed with urban artists for the concrete jungle.</p>
                </div>
                <div className="hidden md:block w-32 h-32 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                   <ArrowRight size={32} className="text-shopily-burgundy" />
                </div>
             </div>
          </div>

       </div>
    </section>
  );
};
