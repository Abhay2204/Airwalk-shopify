import React from 'react';
import { ShoppingCart, Tag } from 'lucide-react';
import { Product } from '../types';

interface YearEndSaleProps {
  onAddToCart: (product: Product, size: number) => void;
}

export const YearEndSale: React.FC<YearEndSaleProps> = ({ onAddToCart }) => {
  const saleProducts = [
    {
      id: 101,
      name: "Urban Drifter X",
      category: "Lifestyle",
      price: 1450,
      originalPrice: 1813,
      image: "/images/2.jpg",
      description: "Streetwear aesthetic meets all-day comfort.",
      sizes: [7, 8, 9, 10, 11]
    },
    {
      id: 102,
      name: "Court Legacy Low",
      category: "Tennis",
      price: 1200,
      originalPrice: 1500,
      image: "/images/3.jpg",
      description: "Vintage vibes with modern durability.",
      sizes: [8, 9, 10, 11]
    },
    {
      id: 103,
      name: "Summit Hiker",
      category: "Outdoor",
      price: 2100,
      originalPrice: 2625,
      image: "/images/4.jpg",
      description: "Waterproof, rugged, and ready for any trail.",
      sizes: [9, 10, 11]
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-black text-lg mb-6">
            <Tag size={24} />
            YEAR END SALE - 20% OFF
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-shopily-charcoal mb-4 tracking-tight">
            LIMITED TIME OFFER
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Sale ends December 31st, 2025 • While stocks last
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {saleProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden"
            >
              {/* Sale Badge */}
              <div className="absolute top-6 right-6 z-20 bg-red-600 text-white px-4 py-2 rounded-full font-black text-sm">
                SAVE ₹{product.originalPrice - product.price}
              </div>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-2xl font-bold text-shopily-charcoal mt-2 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-black text-shopily-charcoal">
                    ₹{product.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                  <span className="text-sm font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                    20% OFF
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => onAddToCart(product as Product, product.sizes[0])}
                  className="w-full bg-shopily-charcoal text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors hover:bg-red-600"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white border border-gray-200 rounded-2xl px-8 py-6 shadow-lg">
            <p className="text-shopily-charcoal text-lg font-bold mb-2">
              🔥 Hurry! Limited stock available
            </p>
            <p className="text-gray-600 text-sm">
              Free shipping on all sale items
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
