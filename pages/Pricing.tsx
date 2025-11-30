import React from 'react';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-950 min-h-screen text-white">
      <div className="py-20 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Simple, Transparent Pricing
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16">
          Start with our free trial. Scale as your call volume grows. 
          No hidden setup fees.
        </p>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          
          {/* Starter */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-medium text-slate-300 mb-2">Starter</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$49</span>
              <span className="text-slate-500">/mo</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8">
              Perfect for small businesses and solo entrepreneurs starting with automation.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "500 Voice Minutes / mo",
                "1 AI Voice Agent",
                "Standard English & Swahili",
                "Email Support",
                "Basic Analytics"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-primary-600 text-primary-400 hover:bg-primary-600 hover:text-white transition-all font-semibold">
              Start Free Trial
            </button>
          </div>

          {/* Growth */}
          <div className="bg-gradient-to-b from-primary-900 to-slate-900 border border-primary-500 rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-2xl shadow-primary-900/50">
            <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-medium text-primary-200 mb-2">Growth</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">$199</span>
              <span className="text-slate-300">/mo</span>
            </div>
            <p className="text-sm text-slate-300 mb-8 border-b border-primary-500/30 pb-8">
              For growing teams needing advanced integrations and higher volume.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "2,500 Voice Minutes / mo",
                "3 AI Voice Agents",
                "5 African Languages",
                "M-Pesa & CRM Integration",
                "Priority Support",
                "Call Recording & Transcripts"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="w-5 h-5 text-primary-400" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white transition-all font-semibold shadow-lg">
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 flex flex-col">
            <h3 className="text-xl font-medium text-slate-300 mb-2">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">Custom</span>
            </div>
            <p className="text-sm text-slate-400 mb-8 border-b border-slate-800 pb-8">
              Full-scale automation for call centers and large organizations.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Unlimited Minutes (Volume Pricing)",
                "Unlimited Agents",
                "Custom Voice Cloning",
                "Dedicated Account Manager",
                "SLA & On-premise Options",
                "API Access"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-primary-500" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl border border-slate-700 text-white hover:bg-white hover:text-slate-900 transition-all font-semibold">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};