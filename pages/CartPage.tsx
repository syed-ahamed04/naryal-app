
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { GST_RATE, DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE, MIN_ORDER_VALUE } from '../constants';
import { Trash2, ShoppingBasket, ArrowRight, Truck, ShieldCheck, AlertCircle } from 'lucide-react';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useApp();
  const navigate = useNavigate();

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * GST_RATE;
  const delivery = subtotal >= DELIVERY_THRESHOLD || subtotal === 0 ? 0 : STANDARD_DELIVERY_FEE;
  const total = subtotal + gst + delivery;

  const isBelowMin = subtotal > 0 && subtotal < MIN_ORDER_VALUE;

  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-slate-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBasket size={48} className="text-slate-300" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Your basket is empty</h2>
        <p className="text-slate-500 mb-8">Looks like you haven't added any coconuts to your cart yet.</p>
        <Link to="/" className="inline-flex items-center gap-2 px-8 py-3 bg-green-900 text-white font-bold rounded-2xl hover:bg-green-800 transition-all">
          Browse Catalog
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={`${item.productId}-${item.size}`} className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-100 flex items-center gap-4 shadow-sm">
              <div className="bg-green-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold text-green-700">{item.type[0]}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900">{item.type}</h4>
                <p className="text-sm text-slate-400 font-medium">{item.size} • Qty: {item.quantity}</p>
                <p className="font-bold text-green-700">₹{item.price * item.quantity}</p>
              </div>
              <button 
                onClick={() => removeFromCart(item.productId, item.size)}
                className="p-2 text-slate-300 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          <div className="bg-green-50 p-6 rounded-3xl border border-green-100 flex items-start gap-4">
            <div className="p-2 bg-green-600 rounded-xl text-white">
              <Truck size={20} />
            </div>
            <div>
              <p className="font-bold text-green-900">Delivery Information</p>
              {subtotal < DELIVERY_THRESHOLD ? (
                <p className="text-sm text-green-700">Add ₹{DELIVERY_THRESHOLD - subtotal} more for <span className="font-bold">FREE delivery!</span></p>
              ) : (
                <p className="text-sm text-green-700">You qualify for <span className="font-bold">FREE delivery!</span></p>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-xl sticky top-24">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Bill Summary</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Items Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>GST (5%)</span>
                <span>₹{gst.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500 font-medium">
                <span>Delivery</span>
                <span>{delivery === 0 ? <span className="text-green-600 font-bold">FREE</span> : `₹${delivery.toFixed(2)}`}</span>
              </div>
              <div className="h-px bg-slate-100 my-2" />
              <div className="flex justify-between text-2xl font-black text-slate-900">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            {isBelowMin && (
              <div className="mb-6 p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3">
                <AlertCircle className="text-amber-600 flex-shrink-0" size={20} />
                <p className="text-sm text-amber-800">Minimum order value is ₹{MIN_ORDER_VALUE}. Please add more items.</p>
              </div>
            )}

            <button
              disabled={isBelowMin}
              onClick={() => navigate('/checkout')}
              className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-green-800 disabled:bg-slate-300 disabled:cursor-not-allowed shadow-lg shadow-green-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 mb-4"
            >
              Proceed to Checkout
              <ArrowRight size={20} />
            </button>

            <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-semibold">
              <ShieldCheck size={14} />
              Secure Checkout with GPay
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
