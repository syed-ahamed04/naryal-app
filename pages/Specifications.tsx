
import React from 'react';
import { FileText, CheckCircle, Smartphone, Zap, Shield, Database, Layout } from 'lucide-react';

const Specifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Business Analysis Specification</h1>
        <p className="text-slate-500 font-medium">Modern Coconut Billing & Ordering Application (MVP)</p>
      </div>

      <div className="space-y-12">
        {/* Section 1: User Stories */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-xl">
              <Zap size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">User Stories (Gherkin Format)</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Customer: Smooth Checkout</h4>
              <p className="text-sm text-slate-600 italic">
                <span className="font-bold text-slate-800">Given:</span> I have items in my cart exceeding ₹200<br/>
                <span className="font-bold text-slate-800">When:</span> I proceed to the checkout payment step<br/>
                <span className="font-bold text-slate-800">Then:</span> I should see a unique GPay QR code encoded with my total order amount and Order ID.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-green-800 mb-2">Admin: Payment Verification</h4>
              <p className="text-sm text-slate-600 italic">
                <span className="font-bold text-slate-800">Given:</span> An order is in "Paid" status<br/>
                <span className="font-bold text-slate-800">When:</span> I verify the transaction in my bank statement/GPay Business app<br/>
                <span className="font-bold text-slate-800">Then:</span> I can click "Verify" to update the customer's order status to "Verified" and trigger fulfillment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Architecture */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-xl">
              <Layout size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Technical Specifications</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="text-green-600" size={20} />
                <h4 className="font-bold text-slate-800">Frontend (React + TS)</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• Atomic component architecture</li>
                <li>• Context API for State Management</li>
                <li>• Tailwind CSS for responsive UI</li>
                <li>• Client-side LocalStorage persistence</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <div className="flex items-center gap-2 mb-3">
                <Shield className="text-green-600" size={20} />
                <h4 className="font-bold text-slate-800">Security & Payments</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>• UPI Intent & Deep Link Generation</li>
                <li>• Manual Admin Verification (Human-in-the-loop)</li>
                <li>• Form level validation (Zod/Regex)</li>
                <li>• SSL-only hosting requirement</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Priority Roadmap */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-xl">
              <CheckCircle size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Feature Prioritization</h2>
          </div>
          
          <div className="overflow-hidden bg-white border border-slate-100 rounded-3xl">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Priority</th>
                  <th className="px-6 py-4 text-xs font-bold text-slate-400 uppercase">Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-full">MUST-HAVE</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">Catalog, Cart, GPay QR, Admin Verification</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full">SHOULD-HAVE</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">User order history, SMS status alerts</td>
                </tr>
                <tr>
                  <td className="px-6 py-4"><span className="px-2 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">NICE-TO-HAVE</span></td>
                  <td className="px-6 py-4 text-sm text-slate-600 font-medium">Inventory prediction, Subscription model</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Data Model */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 text-green-700 rounded-xl">
              <Database size={24} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Core Data Models</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm font-mono text-xs">
              <h4 className="font-bold text-slate-900 mb-2 font-sans text-sm">Product Schema</h4>
              <pre className="text-slate-500">
{`interface Product {
  id: string;
  type: CoconutType;
  image: string;
  variants: {
    size: Size;
    price: number;
    stock: number;
  }[];
}`}
              </pre>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm font-mono text-xs">
              <h4 className="font-bold text-slate-900 mb-2 font-sans text-sm">Order Schema</h4>
              <pre className="text-slate-500">
{`interface Order {
  id: string;
  customer: CustomerDetails;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  txnRef: string;
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Specifications;
