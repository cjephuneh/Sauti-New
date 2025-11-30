import React from 'react';
import { MapPin, Users, Heart } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Hero */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
           <div className="md:w-1/2">
             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
               Made in Africa, <br /> For Africa.
             </h1>
             <p className="text-lg text-slate-600 leading-relaxed mb-6">
               Sauti AI was born out of a simple frustration: standard AI models didn't understand us. They couldn't handle our accents, our mix of languages (code-switching), or the unique way we do business.
             </p>
             <p className="text-lg text-slate-600 leading-relaxed">
               We built Sauti AI to bridge this gap. Headquartered in Nairobi with hubs in Lagos and Cape Town, we are a team of engineers and linguists dedicated to democratizing access to AI for every African business.
             </p>
           </div>
           <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Team working" 
                className="rounded-2xl shadow-2xl"
              />
           </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
                { label: "Calls Automate", value: "2M+" },
                { label: "Languages", value: "12+" },
                { label: "Countries", value: "8" },
                { label: "Businesses", value: "500+" },
            ].map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-slate-500 font-medium">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* Values */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Our Core Values</h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-6 text-purple-600">
                    <MapPin />
                </div>
                <h3 className="text-xl font-bold mb-3">Local First</h3>
                <p className="text-slate-600">We prioritize local context, accents, and infrastructure constraints in everything we build.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-6 text-blue-600">
                    <Users />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer Obsessed</h3>
                <p className="text-slate-600">We exist to help African businesses grow. Your success is our success.</p>
            </div>
            <div className="p-8 border border-slate-100 rounded-2xl bg-white shadow-sm">
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-6 text-pink-600">
                    <Heart />
                </div>
                <h3 className="text-xl font-bold mb-3">Inclusive AI</h3>
                <p className="text-slate-600">Technology should be accessible to everyone, regardless of the language they speak.</p>
            </div>
         </div>
      </div>
    </div>
  );
};