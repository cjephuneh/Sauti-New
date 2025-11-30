import React from 'react';
import { Ban, Check } from 'lucide-react';
import { Sparkles } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Efficiency
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Traditional Call Centers <br />
            are becoming obsolete
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto">
          {/* Traditional Card */}
          <div className="flex-1 bg-slate-100 rounded-3xl p-8 border border-slate-200 relative overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-slate-200 rounded-full flex items-center justify-center border-4 border-slate-50 z-10">
                <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=200" alt="Human Agent" className="w-16 h-16 rounded-full object-cover grayscale" />
            </div>
            
            <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Traditional BPO & <br/> Call Centers</h3>
                <div className="space-y-4 text-left">
                    {[
                        "Limited Working Hours",
                        "High Training & Turnover Costs",
                        "Inconsistent Language Fluency",
                        "Limited Concurrent Call Capacity"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <Ban className="text-red-500 w-5 h-5 flex-shrink-0" />
                            <span className="text-slate-600 text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>

          {/* AI Card */}
          <div className="flex-1 bg-primary-600 rounded-3xl p-8 border border-primary-500 relative overflow-hidden shadow-2xl shadow-primary-500/30 transform md:-translate-y-4">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center border-4 border-slate-50 z-10 shadow-inner">
                <div className="bg-white/20 backdrop-blur-md p-3 rounded-lg">
                    <Sparkles className="text-white w-8 h-8" />
                </div>
            </div>

            <div className="mt-12 text-center">
                <h3 className="text-xl font-bold text-white mb-6">Sauti AI <br/> Voice Agents</h3>
                <div className="space-y-4 text-left">
                    {[
                        "24/7/365 Availability",
                        "Cost-Effective scaling",
                        "Native Multi-lingual Support",
                        "Unlimited Concurrent Calls"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="bg-primary-500/50 p-1 rounded-full">
                                <Check className="text-white w-3 h-3 flex-shrink-0" strokeWidth={4} />
                            </div>
                            <span className="text-white text-sm font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </div>

        {/* Integration Logos */}
        <div className="mt-24 text-center">
             <div className="inline-block px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
                Integrations
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Connects with your African Tech Stack</h3>
            <p className="text-slate-500 mb-10 max-w-2xl mx-auto">Seamlessly connect to payment gateways, CRMs, and messaging platforms.</p>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Text placeholders for relevant African tech */}
                {['M-PESA', 'Flutterwave', 'Paystack', 'Interswitch', 'Zoho', 'Salesforce'].map((brand, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-800 font-bold text-lg">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        {brand}
                    </div>
                ))}
            </div>
            
            <div className="mt-10">
                <button className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:bg-primary-500 transition-colors">
                    Start Integration
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};