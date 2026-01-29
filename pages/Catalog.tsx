
import React, { useState } from 'react';
import { PRODUCTS } from '../constants';
import { CoconutSize, CoconutType } from '../types';
import { useApp } from '../store/AppContext';
import { Plus, Minus, Check, ShoppingBag, Leaf } from 'lucide-react';

const Catalog: React.FC = () => {
  const { addToCart } = useApp();
  const [selectedVariants, setSelectedVariants] = useState<Record<string, CoconutSize>>(
    Object.fromEntries(PRODUCTS.map(p => [p.id, p.variants[0].size]))
  );
  const [quantities, setQuantities] = useState<Record<string, number>>(
    Object.fromEntries(PRODUCTS.map(p => [p.id, 1]))
  );
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const handleAddToCart = (product: any) => {
    const size = selectedVariants[product.id];
    const variant = product.variants.find((v: any) => v.size === size);
    if (!variant) return;

    addToCart({
      productId: product.id,
      type: product.type,
      size: size,
      price: variant.price,
      quantity: quantities[product.id]
    });

    setAddedItems(prev => ({ ...prev, [`${product.id}-${size}`]: true }));
    setTimeout(() => {
      setAddedItems(prev => ({ ...prev, [`${product.id}-${size}`]: false }));
    }, 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
          <Leaf size={16} />
          Fresh from Pollachi & Kerala
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Our Harvest</h1>
        <p className="text-slate-500 max-w-xl">Pure, fresh, and naturally sweet coconuts delivered straight to your doorstep.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => {
          const currentSize = selectedVariants[product.id];
          const variant = product.variants.find(v => v.size === currentSize)!;
          const qty = quantities[product.id];
          const isAdded = addedItems[`${product.id}-${currentSize}`];

          return (
            <div key={product.id} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.type}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full text-xs font-bold text-green-800 shadow-sm">
                  {variant.stock > 0 ? `${variant.stock} in stock` : 'Out of Stock'}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.type}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{product.description}</p>

                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Select Size</span>
                    <div className="flex flex-wrap gap-2">
                      {product.variants.map(v => (
                        <button
                          key={v.size}
                          onClick={() => setSelectedVariants(prev => ({ ...prev, [product.id]: v.size }))}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border-2 transition-all ${
                            currentSize === v.size 
                              ? 'border-green-600 bg-green-50 text-green-700' 
                              : 'border-slate-100 text-slate-400 hover:border-green-200'
                          }`}
                        >
                          {v.size}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-slate-400">Price</span>
                      <span className="text-2xl font-black text-slate-900">₹{variant.price}</span>
                    </div>

                    <div className="flex items-center bg-slate-50 rounded-2xl p-1 border border-slate-100">
                      <button 
                        onClick={() => setQuantities(prev => ({ ...prev, [product.id]: Math.max(1, qty - 1) }))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-xl text-slate-600 transition-all"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="w-8 text-center font-bold text-slate-800">{qty}</span>
                      <button 
                        onClick={() => setQuantities(prev => ({ ...prev, [product.id]: qty + 1 }))}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-xl text-slate-600 transition-all"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={variant.stock === 0}
                    className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all ${
                      isAdded 
                        ? 'bg-green-600 text-white' 
                        : 'bg-green-900 hover:bg-green-800 text-white shadow-lg shadow-green-900/20 active:scale-[0.98]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check size={20} />
                        Added to Cart
                      </>
                    ) : (
                      <>
                        <ShoppingBag size={20} />
                        Add to Cart
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
