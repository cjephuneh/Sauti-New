import React, { useState } from 'react';
import { Plus, Minus, Rocket } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Is Sauti AI available in all African countries?",
      answer: "Yes, our cloud infrastructure is accessible continent-wide. We have specific low-latency optimization for East and West African regions."
    },
    {
      question: "Which languages does Sauti AI support?",
      answer: "We support English, French, Swahili, and are actively rolling out support for Yoruba, Hausa, and Amharic."
    },
    {
      question: "Can I integrate Sauti with M-Pesa?",
      answer: "Absolutely. Our specialized Fintech API allows for secure triggering of mobile money payment prompts and transaction verifications."
    },
    {
      question: "How is pricing structured?",
      answer: "We use a pay-as-you-go model based on conversation minutes, making it affordable for startups and scalable for enterprises."
    },
    {
      question: "Is there a setup fee?",
      answer: "No, our self-service platform allows you to build and deploy agents for free. You only pay for active usage."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
           {/* Left Header */}
           <div className="lg:w-1/3">
             <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
                FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Common Questions
            </h2>
             <p className="text-slate-500 mb-8">
                Everything you need to know about Sauti AI. Can't find the answer you're looking for? Chat with our team in Nairobi.
             </p>
           </div>

           {/* Right Accordion */}
           <div className="lg:w-2/3 space-y-4">
              {faqs.map((faq, index) => (
                <div 
                    key={index} 
                    className={`border rounded-xl transition-all duration-300 ${openIndex === index ? 'bg-slate-50 border-slate-200' : 'bg-white border-transparent hover:bg-slate-50'}`}
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left"
                    >
                        <span className="font-semibold text-slate-900">{faq.question}</span>
                        {openIndex === index ? (
                            <div className="bg-primary-600 rounded-full p-1">
                                <Minus size={16} className="text-white" />
                            </div>
                        ) : (
                            <div className="border border-slate-300 rounded-full p-1">
                                <Plus size={16} className="text-slate-400" />
                            </div>
                        )}
                    </button>
                    <div 
                        className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                </div>
              ))}
           </div>
        </div>
        
        {/* Bottom CTA Banner */}
        <div className="mt-24 relative rounded-3xl overflow-hidden bg-slate-950 px-6 py-16 text-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Unlock the Power of <br />
                    <span className="text-primary-400">Sauti Voice Agents</span> for <br/>
                    Your Business
                </h2>
                <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-primary-500/30 transition-all flex items-center gap-2 mx-auto">
                   <Rocket size={18} /> Ready to begin?
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};