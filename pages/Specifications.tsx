
import React from 'react';
import { 
  FileText, CheckCircle, Smartphone, Zap, Shield, 
  Database, Layout, HelpCircle, AlertTriangle, ListChecks,
  Activity, Globe, Search
} from 'lucide-react';

const Specifications: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-black text-slate-900 mb-4 tracking-tight">Business Analysis Document</h1>
        <p className="text-slate-500 font-medium text-lg">Nariyal - Fresh Coconut Billing & Ordering Application (v1.0)</p>
        <div className="mt-4 flex justify-center gap-2">
          <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">MVP APPROVED</span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-full">MOBILE-FIRST</span>
        </div>
      </div>

      <div className="space-y-16">
        {/* Section 1: User Stories */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-200">
              <Zap size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">User Stories</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-green-200 transition-colors">
              <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle size={18} /> 
                Story 1: Seamless Mobile Ordering (Customer)
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                As a health-conscious consumer, I want to quickly order tender coconuts on my phone so that I can have fresh hydration delivered without technical friction.
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs font-medium">
                <p><span className="text-slate-900 font-bold">Given:</span> I am on the Nariyal home screen</p>
                <p><span className="text-slate-900 font-bold">When:</span> I select "Tender Coconut", choose "Large", and click "Add to Cart"</p>
                <p><span className="text-slate-900 font-bold">Then:</span> The cart icon should reflect the new count and the checkout button should become active.</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 hover:border-green-200 transition-colors">
              <h4 className="font-bold text-green-900 mb-4 flex items-center gap-2">
                <CheckCircle size={18} /> 
                Story 2: Trustworthy QR Payment (Customer)
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                As a digital-first shopper, I want to pay via GPay using a QR code so that I don't have to manually enter bank details or share my card info.
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl space-y-2 text-xs font-medium">
                <p><span className="text-slate-900 font-bold">Given:</span> I am at the "Scan & Pay" step of checkout</p>
                <p><span className="text-slate-900 font-bold">When:</span> The system displays a QR code with my exact order amount of ₹{ (120 * 1.05).toFixed(0) }</p>
                <p><span className="text-slate-900 font-bold">Then:</span> I should be able to scan and pay instantly using any UPI app.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Technical Recommendations */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-200">
              <Layout size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Technical Recommendations</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="text-green-400" size={24} />
                <h4 className="font-bold text-lg">Frontend Strategy</h4>
              </div>
              <ul className="text-sm text-slate-400 space-y-3">
                <li className="flex gap-2"><span className="text-green-400 font-bold">•</span> React 19 + TypeScript for type safety.</li>
                <li className="flex gap-2"><span className="text-green-400 font-bold">•</span> Tailwind CSS for rapid mobile-first UI.</li>
                <li className="flex gap-2"><span className="text-green-400 font-bold">•</span> Context API for state (sufficient for MVP).</li>
                <li className="flex gap-2"><span className="text-green-400 font-bold">•</span> QR-Server API for dynamic QR generation.</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-green-600" size={24} />
                <h4 className="font-bold text-lg text-slate-900">Non-Functional Reqs</h4>
              </div>
              <ul className="text-sm text-slate-600 space-y-3">
                <li className="flex gap-2"><span className="text-green-600 font-bold">•</span> <b>Performance:</b> < 2s LCP on 4G networks.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">•</span> <b>Accessibility:</b> WCAG 2.1 AA standards.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">•</span> <b>Security:</b> End-to-end SSL; no PII stored in cleartext.</li>
                <li className="flex gap-2"><span className="text-green-600 font-bold">•</span> <b>SEO:</b> Semantic HTML with meta descriptions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3: Questions Addressed */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-200">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Business Logic & Q&A</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><AlertTriangle size={20} className="text-amber-500" /></div>
                <div>
                  <p className="font-bold text-slate-900">User Authentication?</p>
                  <p className="text-sm text-slate-500">Not required for MVP. Simple local persistence via LocalStorage provides "Guest History" while reducing friction.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Activity size={20} className="text-green-500" /></div>
                <div>
                  <p className="font-bold text-slate-900">Order Tracking?</p>
                  <p className="text-sm text-slate-500">Manual tracking via WhatsApp/SMS integration is recommended as a secondary phase. Current MVP uses Order ID status page.</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1"><Globe size={20} className="text-blue-500" /></div>
                <div>
                  <p className="font-bold text-slate-900">Delivery Scheduling?</p>
                  <p className="text-sm text-slate-500">Orders placed before 2 PM are Same-Day. Post 2 PM is Next-Day. Scheduling field can be added to Checkout form.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1"><Database size={20} className="text-purple-500" /></div>
                <div>
                  <p className="font-bold text-slate-900">Inventory Management?</p>
                  <p className="text-sm text-slate-500">Admin dashboard allows live stock updates. Hard-stop at 0 units prevents over-selling.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Data Flow */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-green-600 text-white rounded-2xl shadow-lg shadow-green-200">
              <ListChecks size={24} />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Fulfillment Workflow</h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-100 ml-[11px]" />
            <div className="space-y-12 relative">
              {[
                { step: "01", title: "Cart & Intent", desc: "Customer selects variants. System calculates GST (5%) and Delivery." },
                { step: "02", title: "Payment Lock", desc: "Order details captured. Unique Order ID generated. QR code displayed." },
                { step: "03", title: "Verification", desc: "Admin cross-references UPI Transaction ID with Bank statement." },
                { step: "04", title: "Dispatch", desc: "Harvesting team selects fresh coconuts. Delivery partner assigned." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 pl-12 relative">
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-green-100 border-4 border-white flex items-center justify-center text-[10px] font-black text-green-700 shadow-sm">
                    {item.step}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900">{item.title}</h5>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <div className="bg-green-50 p-12 rounded-[3rem] border border-green-100 text-center">
          <h3 className="text-2xl font-bold text-green-900 mb-2">Ready for Phase 2?</h3>
          <p className="text-green-700/70 text-sm max-w-sm mx-auto mb-8 font-medium">Next steps include native GPay intent integration, SMS gateway, and automated invoice PDF generation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-green-900 text-white rounded-2xl font-bold hover:bg-green-800 transition-all shadow-xl shadow-green-900/20">Download PDF Spec</button>
            <button className="px-8 py-3 bg-white text-green-900 border border-green-200 rounded-2xl font-bold hover:bg-green-50 transition-all">View API Docs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
