
import React from 'react';
import { useApp } from '../store/AppContext';
import { OrderStatus } from '../types';
import { CheckCircle2, XCircle, Clock, Package, Eye, Search } from 'lucide-react';

const Admin: React.FC = () => {
  const { orders, updateOrderStatus } = useApp();

  const getStatusStyle = (status: OrderStatus) => {
    switch (status) {
      case OrderStatus.PAID: return 'bg-amber-100 text-amber-700 border-amber-200';
      case OrderStatus.VERIFIED: return 'bg-green-100 text-green-700 border-green-200';
      case OrderStatus.FAILED: return 'bg-red-100 text-red-700 border-red-200';
      case OrderStatus.DELIVERED: return 'bg-slate-100 text-slate-700 border-slate-200';
      default: return 'bg-slate-100 text-slate-500 border-slate-200';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-500 font-medium">Manage orders and verify payments</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Pending</p>
              <p className="text-xl font-black text-slate-900">{orders.filter(o => o.status === OrderStatus.PAID).length}</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Verified Today</p>
              <p className="text-xl font-black text-slate-900">{orders.filter(o => o.status === OrderStatus.VERIFIED).length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by Order ID or Name..." 
              className="w-full pl-10 pr-4 py-2 bg-white border-none rounded-xl text-sm focus:ring-2 focus:ring-green-500 outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-100">
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Order & Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Details</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-20 text-center text-slate-400 font-medium italic">No orders found yet.</td>
                </tr>
              ) : orders.map(order => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-6">
                    <p className="font-bold text-slate-900">{order.id}</p>
                    <p className="text-sm text-slate-500">{order.customer.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">ID: {order.id}</p>
                  </td>
                  <td className="px-6 py-6">
                    <div className="space-y-1">
                      {order.items.map((item, idx) => (
                        <p key={idx} className="text-xs font-medium text-slate-600">
                          {item.quantity}x {item.type} ({item.size})
                        </p>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-6">
                    <p className="font-bold text-slate-900">₹{order.total.toFixed(2)}</p>
                    <p className="text-[10px] text-slate-400">GST: ₹{order.gst.toFixed(2)}</p>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold border ${getStatusStyle(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-6">
                    <div className="flex items-center gap-2">
                      {order.status === OrderStatus.PAID && (
                        <>
                          <button 
                            onClick={() => updateOrderStatus(order.id, OrderStatus.VERIFIED)}
                            className="p-2 bg-green-50 text-green-600 rounded-xl hover:bg-green-100 transition-all"
                            title="Verify Payment"
                          >
                            <CheckCircle2 size={18} />
                          </button>
                          <button 
                            onClick={() => updateOrderStatus(order.id, OrderStatus.FAILED)}
                            className="p-2 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all"
                            title="Reject Payment"
                          >
                            <XCircle size={18} />
                          </button>
                        </>
                      )}
                      <button className="p-2 bg-slate-50 text-slate-400 rounded-xl hover:bg-slate-100 transition-all">
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
