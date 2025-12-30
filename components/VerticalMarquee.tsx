import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { Product } from '../types';

interface VerticalMarqueeProps {
  onAddToCart: (product: Product, size: number) => void;
}

export const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({ onAddToCart }) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  // Triple products for seamless loop
  const products = [...MOCK_PRODUCTS, ...MOCK_PRODUCTS, ...MOCK_PRODUCTS];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-black text-shopily-charcoal text-center tracking-tight uppercase">
          Trending Styles
        </h2>
      </div>

      <div className="relative overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{
            x: [0, -306 * MOCK_PRODUCTS.length]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear"
            }
          }}
          className="flex gap-6"
          style={{ willChange: 'transform' }}
        >
          {products.map((product, index) => (
            <div
              key={`${product.id}-${index}`}
              className="relative flex-shrink-0 group"
              onMouseEnter={() => setHoveredId(product.id + index * 100)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative w-[300px] h-[280px] rounded-3xl overflow-hidden shadow-lg">
                {/* Product Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay - Cart - Using CSS for better performance */}
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center gap-4 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-white text-xl font-bold text-center">{product.name}</h3>
                  <p className="text-white/80 text-sm text-center">{product.category}</p>
                  <p className="text-white text-2xl font-black">₹{product.price}</p>
                  
                  <button
                    onClick={() => onAddToCart(product, product.sizes[0])}
                    className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-shopily-burgundy hover:text-white transition-colors"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
