import React from 'react';
import { Landmark, Truck, Stethoscope, Hotel, ShoppingBag, Sprout } from 'lucide-react';

export const Industries: React.FC = () => {
  const industries = [
    {
      id: "fintech",
      name: "Fintech & Banking",
      icon: <Landmark className="w-8 h-8 text-primary-500" />,
      desc: "Automate loan recovery, KYC verification, and fraud alerts.",
      cases: ["Loan Repayment Reminders", "Account Balance Inquiries", "Suspicious Activity Alerts"]
    },
    {
      id: "logistics",
      name: "Logistics & Mobility",
      icon: <Truck className="w-8 h-8 text-primary-500" />,
      desc: "Coordinate riders, drivers, and deliveries in real-time.",
      cases: ["Address Verification", "Driver Dispatch Coordination", "Delivery Rescheduling"]
    },
    {
      id: "health",
      name: "Healthcare",
      icon: <Stethoscope className="w-8 h-8 text-primary-500" />,
      desc: "Manage patient appointments and medication adherence.",
      cases: ["Appointment Reminders", "Post-Op Checkups", "Prescription Refill Calls"]
    },
    {
      id: "tourism",
      name: "Tourism & Hospitality",
      icon: <Hotel className="w-8 h-8 text-primary-500" />,
      desc: "Provide 24/7 concierge services for global travelers.",
      cases: ["Booking Confirmations", "Airport Transfer Logistics", "Room Service Automation"]
    },
    {
      id: "retail",
      name: "E-Commerce & Retail",
      icon: <ShoppingBag className="w-8 h-8 text-primary-500" />,
      desc: "Recover abandoned carts and verify high-value orders.",
      cases: ["COD Order Verification", "Customer Satisfaction Surveys", "Flash Sale Notifications"]
    },
    {
      id: "agri",
      name: "Agriculture",
      icon: <Sprout className="w-8 h-8 text-primary-500" />,
      desc: "Connect farmers to markets using voice in local dialects.",
      cases: ["Market Price Updates", "Weather Advisory", "Supply Chain Coordination"]
    }
  ];

  return (
    <div className="pt-20 bg-white min-h-screen">
       <div className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tailored for Every Sector
          </h1>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Sauti AI is pre-trained on industry-specific vocabulary and scenarios relevant to the African market.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <div key={industry.id} className="border border-slate-100 rounded-2xl p-8 hover:shadow-xl hover:border-primary-200 transition-all group bg-white">
              <div className="w-16 h-16 rounded-xl bg-primary-50 flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{industry.name}</h3>
              <p className="text-slate-500 mb-6 min-h-[48px]">{industry.desc}</p>
              
              <div className="bg-slate-50 rounded-xl p-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Top Use Cases</span>
                <ul className="space-y-2">
                  {industry.cases.map((useCase, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};