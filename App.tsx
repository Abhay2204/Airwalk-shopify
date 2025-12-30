import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductList } from './components/ProductList';
import { FeaturedDrop } from './components/FeaturedDrop';
import { Collections } from './components/Collections';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { HeroSkeleton, CardSkeleton } from './components/Skeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { Product, CartItem } from './types';
import { Marquee } from './components/Marquee';
import { VerticalMarquee } from './components/VerticalMarquee';
import { YearEndSale } from './components/YearEndSale';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Preload critical images
    const preloadImages = [
      '/images/heroshoes.png',
      '/images/111.jpg',
      '/images/2.jpg',
      '/images/3.jpg',
      '/images/4.jpg'
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    // Reduce loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product: Product, size: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && item.selectedSize === size);
      if (existing) {
        return prev.map(item => 
          item.cartId === existing.cartId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { 
        ...product, 
        quantity: 1, 
        selectedSize: size, 
        cartId: `${product.id}-${size}` 
      }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  return (
    <div className="min-h-screen relative bg-[#F5F5F7] text-shopily-charcoal selection:bg-shopily-burgundy selection:text-white font-sans">
      
      <Navbar cartCount={cart.length} onOpenCart={() => setIsCartOpen(true)} />

      <main>
        {loading ? (
          <div className="pt-20">
             <HeroSkeleton />
             <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                <CardSkeleton />
                <CardSkeleton />
                <CardSkeleton />
             </div>
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            
            <Hero />
            
            <Marquee />

            <FeaturedDrop onAddToCart={addToCart} />
            
            <YearEndSale onAddToCart={addToCart} />
            
            <VerticalMarquee onAddToCart={addToCart} />
            
            <Collections />

            <ProductList onProductSelect={setSelectedProduct} />
            
            {/* Minimalist Newsletter */}
            <section className="bg-shopily-charcoal text-white py-32 px-6 overflow-hidden relative">
               <div className="max-w-4xl mx-auto text-center relative z-10">
                 <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">NEVER MISS A DROP.</h2>
                 <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                   Join the Airwalk creative community. Early access to limited releases and exclusive collaborations.
                 </p>
                 <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
                    <input 
                      type="email" 
                      placeholder="ENTER YOUR EMAIL" 
                      className="flex-1 bg-transparent border-b-2 border-white/20 py-4 px-2 text-white placeholder-white/30 focus:outline-none focus:border-white transition-colors text-lg"
                    />
                    <button className="bg-white text-black px-12 py-4 font-bold tracking-wider hover:bg-gray-200 transition-colors uppercase">
                      Sign Up
                    </button>
                 </div>
               </div>
               {/* Background Texture */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </section>

          </motion.div>
        )}
      </main>

      <footer className="bg-white border-t border-gray-200 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
             <h4 className="font-black text-2xl text-black mb-6 tracking-tighter">AIRWALK.</h4>
             <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
               Engineered in Tokyo. <br/> Designed for the world.
             </p>
          </div>
          <div>
             <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-widest">Collections</h4>
             <ul className="space-y-4 text-sm text-gray-500 font-medium">
               <li><a href="#" className="hover:text-black transition-colors">Performance</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Lifestyle</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Collaborations</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-widest">Support</h4>
             <ul className="space-y-4 text-sm text-gray-500 font-medium">
               <li><a href="#" className="hover:text-black transition-colors">Order Status</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Sizing Guide</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Returns & Exchange</a></li>
             </ul>
          </div>
          <div>
             <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-widest">Connect</h4>
             <ul className="space-y-4 text-sm text-gray-500 font-medium">
               <li><a href="#" className="hover:text-black transition-colors">Instagram</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Twitter</a></li>
               <li><a href="#" className="hover:text-black transition-colors">Discord</a></li>
             </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-400 font-medium">
            © 2024 Airwalk Inc.
          </div>
          <div className="flex gap-6">
             <span className="text-xs text-gray-400 cursor-pointer hover:text-black">Privacy Policy</span>
             <span className="text-xs text-gray-400 cursor-pointer hover:text-black">Terms of Service</span>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        onRemove={removeFromCart} 
      />
    </div>
  );
};

export default App;
