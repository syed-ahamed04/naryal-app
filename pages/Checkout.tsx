
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { MERCHANT_UPI_ID, MERCHANT_NAME, GST_RATE, DELIVERY_THRESHOLD, STANDARD_DELIVERY_FEE } from '../constants';
import { OrderStatus, Order } from '../types';
import { Phone, User, MapPin, QrCode, CreditCard, ChevronLeft } from 'lucide-react';

const Checkout: React.FC = () => {
  const { cart, clearCart, addOrder } = useApp();
  const navigate = useNavigate();
  const [step, setStep] = useState<'details' | 'payment'>('details');
  const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });
  const [orderId] = useState(`NYL-${Math.random().toString(36).substr(2, 9).toUpperCase()}`);

  if (cart.length === 0) {
    navigate('/');
    return null;
  }

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gst = subtotal * GST_RATE;
  const deliveryCharge = subtotal >= DELIVERY_THRESHOLD ? 0 : STANDARD_DELIVERY_FEE;
  const total = subtotal + gst + deliveryCharge;

  // UPI Format: upi://pay?pa=address@bank&pn=MerchantName&am=10.00&tr=Order123&cu=INR
  const upiUrl = `upi://pay?pa=${MERCHANT_UPI_ID}&pn=${encodeURIComponent(MERCHANT_NAME)}&am=${total.toFixed(2)}&tr=${orderId}&cu=INR&tn=Order%20${orderId}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(upiUrl)}`;

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (customer.name && customer.phone && customer.address) {
      setStep('payment');
    }
  };

  const handleFinishPayment = () => {
    const newOrder: Order = {
      id: orderId,
      customer,
      items: [...cart],
      subtotal,
      gst,
      deliveryCharge,
      total,
      status: OrderStatus.PAID,
      createdAt: Date.now()
    };
    addOrder(newOrder);
    clearCart();
    navigate('/admin'); // Redirecting to admin for verification in this demo
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <button 
        onClick={() => step === 'payment' ? setStep('details') : navigate('/cart')}
        className="flex items-center gap-2 text-slate-400 hover:text-green-600 font-bold mb-8 transition-colors"
      >
        <ChevronLeft size={20} />
        {step === 'payment' ? 'Back to Details' : 'Back to Cart'}
      </button>

      {step === 'details' ? (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Delivery Details</h2>
          <form onSubmit={handleSubmitDetails} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="text" 
                  required
                  placeholder="Enter your name"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-medium"
                  value={customer.name}
                  onChange={e => setCustomer({ ...customer, name: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                <input 
                  type="tel" 
                  required
                  placeholder="10-digit mobile number"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-medium"
                  value={customer.phone}
                  onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase">Delivery Address</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 text-slate-300" size={18} />
                <textarea 
                  required
                  rows={3}
                  placeholder="Detailed address with landmark"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-green-500 outline-none transition-all font-medium"
                  value={customer.address}
                  onChange={e => setCustomer({ ...customer, address: e.target.value })}
                />
              </div>
            </div>

            <button type="submit" className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-green-800 shadow-lg shadow-green-900/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Go to Payment
              <CreditCard size={20} />
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900">Scan & Pay</h2>
            <p className="text-slate-500">Order ID: <span className="font-bold text-slate-800">{orderId}</span></p>
          </div>

          <div className="bg-slate-50 p-6 rounded-3xl inline-block mb-6 relative">
            <img src={qrUrl} alt="GPay QR Code" className="w-64 h-64 mix-blend-multiply" />
            <div className="absolute inset-0 border-2 border-dashed border-slate-200 rounded-3xl pointer-events-none" />
          </div>

          <div className="bg-green-50 p-6 rounded-3xl mb-8 border border-green-100">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-600 font-medium">Payable Amount</span>
              <span className="text-2xl font-black text-green-900">₹{total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-green-700 font-semibold uppercase tracking-wider">Accepted Apps: GPay, PhonePe, Paytm, Amazon Pay</p>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-slate-500 flex items-center justify-center gap-2">
              <QrCode size={16} />
              Scan the QR code above with your UPI app
            </p>
            <button 
              onClick={handleFinishPayment}
              className="w-full py-4 bg-green-900 text-white rounded-2xl font-bold hover:bg-green-800 shadow-lg shadow-green-900/20 active:scale-[0.98] transition-all"
            >
              I Have Completed the Payment
            </button>
            <p className="text-[10px] text-slate-400 font-medium">After clicking, an admin will verify your payment within 15-30 minutes.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
