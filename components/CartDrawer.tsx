import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (cartId: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose, items, onRemove }) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-shopily-charcoal/40 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-shopily-bluegrey/90 backdrop-blur-xl shadow-2xl z-50 flex flex-col border-l border-white/20"
          >
            <div className="p-6 flex items-center justify-between border-b border-white/10">
              <h2 className="text-2xl font-bold text-shopily-charcoal">Your Bag ({items.length})</h2>
              <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-50">
                   <div className="w-20 h-20 bg-shopily-charcoal/10 rounded-full mb-4 flex items-center justify-center">
                     <Trash2 size={32} />
                   </div>
                   <p className="text-lg font-medium">Your bag is empty.</p>
                   <p className="text-sm">Start walking on air today.</p>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div 
                    layout
                    key={item.cartId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex gap-4 p-4 glass-panel bg-white/40 rounded-2xl group"
                  >
                    <div className="w-20 h-20 bg-white rounded-xl flex-shrink-0 p-2 overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-bold text-shopily-charcoal">{item.name}</h4>
                          <p className="text-xs text-shopily-slate">Size: {item.selectedSize} | {item.category}</p>
                        </div>
                        <p className="font-bold text-shopily-burgundy">₹{item.price}</p>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-shopily-charcoal">
                           <span>Qty: {item.quantity}</span>
                        </div>
                        <button 
                          onClick={() => onRemove(item.cartId)}
                          className="text-shopily-slate hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white/20 border-t border-white/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-shopily-slate">Subtotal</span>
                  <span className="text-xl font-bold text-shopily-charcoal">₹{total.toFixed(2)}</span>
                </div>
                <button className="w-full py-4 bg-shopily-charcoal text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-shopily-burgundy transition-colors">
                  Checkout Now <ArrowRight size={18} />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
