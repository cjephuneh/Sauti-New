import React from 'react';
import { Zap, Clock, TrendingUp, Globe, MessageCircle, Wallet } from 'lucide-react';

export const Features: React.FC = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-primary-600" />,
      title: "Multi-Lingual Support",
      description: "Agents fluent in English, French, Swahili, Yoruba, and other major African languages and dialects."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary-600" />,
      title: "24/7 Availability",
      description: "Never miss a lead. Our AI agents work round the clock to capture opportunities whenever they arrive."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary-600" />,
      title: "Scale Instantly",
      description: "Handle thousands of concurrent calls during peak seasons without hiring more staff."
    },
    {
      icon: <Wallet className="w-6 h-6 text-primary-600" />,
      title: "Mobile Money Integrated",
      description: "Seamlessly integrate with M-Pesa, Flutterwave, and Paystack for instant transaction confirmations."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Sauti AI Voice Assistants?
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Built specifically for the unique infrastructure and cultural diversity of the African business landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};