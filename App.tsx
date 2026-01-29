
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import Navbar from './components/Navbar';
import Catalog from './pages/Catalog';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';
import Specifications from './pages/Specifications';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen bg-[#fcfdfa] text-slate-900">
          <Navbar />
          <main className="pb-20">
            <Routes>
              <Route path="/" element={<Catalog />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/specs" element={<Specifications />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <footer className="border-t border-slate-100 py-12 px-4 bg-white mt-auto">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h4 className="text-xl font-bold text-green-900 mb-4">Nariyal Fresh</h4>
                <p className="text-slate-500 text-sm max-w-sm">Premium source for farm-fresh coconuts across India. 100% natural, hygienic, and sustainably sourced.</p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Support</h5>
                <ul className="text-sm text-slate-500 space-y-2">
                  <li>Shipping Policy</li>
                  <li>Refunds & Cancellations</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Location</h5>
                <p className="text-sm text-slate-500">Pollachi Road, Coimbatore,<br/>Tamil Nadu - 641021</p>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
