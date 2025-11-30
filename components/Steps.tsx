import React from 'react';
import { Search, MonitorPlay, FileText, Rocket } from 'lucide-react';

export const Steps: React.FC = () => {
  const steps = [
    {
      step: 'Step 1',
      title: 'Discovery',
      description: "We analyze your call volume, customer queries, and business goals to tailor the perfect voice agent.",
      icon: <Search className="w-6 h-6 text-primary-600" />,
      action: 'Book Discovery'
    },
    {
      step: 'Step 2',
      title: 'Demo & Customization',
      description: "See your Sauti Agent in action. We customize accent, language, and knowledge base for your region.",
      icon: <MonitorPlay className="w-6 h-6 text-primary-600" />,
      action: 'Request Demo'
    },
    {
      step: 'Step 3',
      title: 'Integration',
      description: "We connect Sauti AI to your CRM, Booking Systems, or Mobile Money platforms seamlessely.",
      icon: <FileText className="w-6 h-6 text-primary-600" />,
      action: 'View Integrations'
    },
    {
      step: 'Step 4',
      title: 'Go Live',
      description: "Launch your automated call center. Monitor performance and ROI via our real-time dashboard.",
      icon: <Rocket className="w-6 h-6 text-primary-600" />,
      action: 'Launch Now'
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Deploying your AI Workforce
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div key={index} className="flex flex-col h-full p-6 border border-slate-200 rounded-2xl hover:shadow-xl transition-shadow bg-white">
              <div className="w-fit px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold rounded-full mb-6">
                {item.step}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              <button className={`w-full py-3 rounded-lg text-sm font-semibold transition-colors border ${index === 0 ? 'bg-primary-600 text-white border-transparent hover:bg-primary-700' : 'bg-white text-slate-600 border-slate-200 hover:border-primary-500 hover:text-primary-600'}`}>
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};