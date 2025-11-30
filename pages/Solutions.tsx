import React from 'react';
import { Phone, MessageSquare, Workflow, Database, Shield, Radio } from 'lucide-react';

export const Solutions: React.FC = () => {
  const features = [
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: "Inbound Call Automation",
      desc: "Handle 1000+ concurrent calls for customer support, order inquiries, and booking management without putting anyone on hold."
    },
    {
      icon: <Radio className="w-6 h-6 text-white" />,
      title: "Outbound Campaigns",
      desc: "Proactively reach customers for debt recovery, survey collection, and appointment confirmations using human-like voices."
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      title: "WhatsApp & SMS Integration",
      desc: "Seamlessly hand off from voice to text. Send payment links via M-Pesa or booking confirmations instantly after a call."
    }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Intelligent Automation for <br/> <span className="text-primary-400">Modern African Business</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            From automated lead qualification to complex debt recovery negotiations, Sauti AI handles your communication workflows end-to-end.
          </p>
        </div>
      </div>

      {/* Main Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 mb-20 relative z-20">
          {features.map((f, i) => (
            <div key={i} className="bg-primary-600 p-8 rounded-2xl shadow-xl shadow-primary-900/20 text-white">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6 backdrop-blur-sm">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-primary-100 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Detailed Section */}
        <div className="space-y-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-white text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-100">
                Workflow Automation
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Seamless Data Integration</h2>
              <p className="text-slate-600 text-lg mb-6">
                Sauti AI doesn't just talk; it acts. Connect your voice agents directly to your database.
              </p>
              <ul className="space-y-4">
                {[
                  "Real-time CRM Updates (Salesforce, Zoho, HubSpot)",
                  "Trigger Mobile Money prompts (M-Pesa, MTN MoMo)",
                  "Instant Calendar Booking (Calendly, Google Calendar)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Database className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Dashboard" className="rounded-xl w-full" />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-block px-3 py-1 rounded-full bg-white text-primary-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-100">
                Security & Compliance
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Enterprise-Grade Security</h2>
              <p className="text-slate-600 text-lg mb-6">
                We understand the sensitivity of financial and personal data in the African market.
              </p>
              <ul className="space-y-4">
                {[
                  "Data Sovereignty: Local Hosting Options",
                  "End-to-End Encryption for all calls",
                  "GDPR & Local Data Protection Act Compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <Shield className="w-5 h-5 text-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800" alt="Security" className="rounded-xl w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 py-16 mt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to automate your operations?</h2>
          <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-3 rounded-xl font-medium transition-all">
            Get Started with Solutions
          </button>
        </div>
      </section>
    </div>
  );
};