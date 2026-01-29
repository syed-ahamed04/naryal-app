
import React from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../store/AppContext';
import { ShoppingCart, LayoutDashboard, User, FileText, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const { cart, role, toggleRole } = useApp();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-2 rounded-xl group-hover:rotate-12 transition-transform">
            <Leaf className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-green-900 tracking-tight">Nariyal</span>
        </Link>

        <div className="flex items-center gap-2 sm:gap-6">
          <Link to="/specs" className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-green-600 transition-colors">
            <FileText size={18} />
            BA Specs
          </Link>
          
          <Link to="/cart" className="relative p-2 text-slate-600 hover:text-green-600 transition-colors">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </Link>

          {role === 'admin' && (
            <Link to="/admin" className="p-2 text-slate-600 hover:text-green-600 transition-colors">
              <LayoutDashboard size={22} />
            </Link>
          )}

          <button 
            onClick={toggleRole}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-green-100 text-slate-700 transition-colors text-xs font-semibold"
          >
            <User size={14} />
            {role === 'admin' ? 'Switch to User' : 'Admin Demo'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
