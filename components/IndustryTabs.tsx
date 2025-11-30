import React, { useState } from 'react';
import { Smartphone, Truck, Plane, Sprout, CheckCircle2, Sparkles } from 'lucide-react';
import { Industry } from '../types';

export const IndustryTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Industry>(Industry.FINTECH);

  const tabs = [
    { id: Industry.FINTECH, label: 'Fintech & Banking', icon: <Smartphone size={18} /> },
    { id: Industry.LOGISTICS, label: 'Logistics & Delivery', icon: <Truck size={18} /> },
    { id: Industry.TOURISM, label: 'Tourism & Hospitality', icon: <Plane size={18} /> },
    { id: Industry.AGRITECH, label: 'Agri-Tech', icon: <Sprout size={18} /> },
  ];

  const content = {
    [Industry.FINTECH]: {
      title: 'Automate Support & Recovery',
      benefits: [
        'Handle loan application queries instantly.',
        'Automated payment reminders for loan recovery.',
        'Verify customer identities securely over the phone.'
      ],
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000'
    },
    [Industry.LOGISTICS]: {
      title: 'Streamline Dispatch',
      benefits: [
        'Coordinate pick-ups with riders and drivers.',
        'Verify address details before dispatching.',
        'Handle "Where is my order?" calls 24/7.'
      ],
      image: 'https://images.unsplash.com/photo-1616432043562-3671ea2e5242?auto=format&fit=crop&q=80&w=1000'
    },
    [Industry.TOURISM]: {
      title: 'Enhance Guest Experience',
      benefits: [
        'Handle safari and hotel booking inquiries.',
        'Provide travel advisory in multiple languages.',
        'Manage airport transfer coordinations.'
      ],
      image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&q=80&w=1000'
    },
    [Industry.AGRITECH]: {
      title: 'Empower Farmers',
      benefits: [
        'Voice-based market price updates.',
        'Weather advisory and pest control tips.',
        'Connect farmers with buyers automatically.'
      ],
      image: 'https://images.unsplash.com/photo-1625246333195-58197bd47a26?auto=format&fit=crop&q=80&w=1000'
    },
  };

  const activeContent = content[activeTab];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Industry Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Built for Africa's Growth Sectors
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Left Column: Tabs */}
          <div className="w-full lg:w-1/3 space-y-4">
            <p className="text-slate-500 mb-8">
              Tailored AI solutions that understand the nuances of African business operations, from informal trade to enterprise banking.
            </p>
            <div className="space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all duration-200 border ${
                    activeTab === tab.id
                      ? 'bg-white border-primary-500 shadow-lg shadow-primary-500/10 text-primary-700'
                      : 'bg-white border-slate-100 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <span className={`${activeTab === tab.id ? 'text-primary-600' : 'text-slate-400'}`}>
                    {tab.icon}
                  </span>
                  <span className="font-semibold">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full lg:w-2/3">
             <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-6">
                    <div className="flex items-center gap-2 text-primary-600 font-semibold bg-primary-50 px-3 py-1 rounded-lg w-fit">
                        <Sparkles size={16} />
                        {activeContent.title}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">
                        Operational Efficiency
                    </h3>
                    <ul className="space-y-4">
                        {activeContent.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-600">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden relative group">
                    <img 
                        src={activeContent.image} 
                        alt={activeContent.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};