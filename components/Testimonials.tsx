import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

export const Testimonials: React.FC = () => {
  const testimonials: TestimonialItem[] = [
    {
      name: "Tunde Bakare",
      role: "Operations Director",
      company: "Logos Logistics",
      text: "Sauti AI reduced our dispatch confirmation time by 80%. Our riders know exactly where to go, and customers are happier with the updates.",
      avatar: "https://images.unsplash.com/photo-1507152832244-10d45c7928ac?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Sarah Kimani",
      role: "Customer Service Lead",
      company: "Nairobi Finance",
      text: "The ability for Sauti agents to switch between English and Swahili seamlessly has been a game changer for our rural banking customers.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Osei",
      role: "CEO",
      company: "AgroConnect",
      text: "Farmers can now call in to check market prices anytime. Sauti AI handles thousands of these calls daily without a hitch.",
      avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Trusted by Visionaries Worldwide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative">
              <Quote className="absolute top-8 right-8 text-primary-200 w-12 h-12 rotate-180" />
              
              <div className="flex items-center gap-4 mb-6">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-slate-900">{item.name}</h4>
                  <p className="text-xs text-slate-500">{item.role}, {item.company}</p>
                </div>
              </div>
              
              <p className="text-slate-600 leading-relaxed italic relative z-10">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};