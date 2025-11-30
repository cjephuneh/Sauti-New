import React from 'react';
import { Play, Mic, MessageSquare, Phone, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-primary-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-slate-200">AI agents now fluent in Swahili, English & French</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
            Automating Africa's <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-indigo-400">
              Conversations
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            From Nairobi to Lagos, Sauti AI powers call centers and personal assistants with human-like voice agents. Stop missing calls and start converting more leads.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              Get a Demo
            </button>
            <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
              <Play size={20} />
              Hear Samples
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/10] md:aspect-[16/9]">
            {/* Mock Header */}
            <div className="h-14 border-b border-white/5 flex items-center px-6 gap-4 bg-white/5">
               <div className="flex gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-500/50" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                 <div className="w-3 h-3 rounded-full bg-green-500/50" />
               </div>
               <div className="flex-1 flex justify-center">
                 <div className="h-6 w-64 bg-white/5 rounded-md flex items-center justify-center text-xs text-slate-500">
                    Sauti Command Center
                 </div>
               </div>
               <div className="h-8 w-24 bg-primary-600/20 rounded-lg border border-primary-500/30 flex items-center justify-center text-xs text-primary-300 font-medium">
                 Live Mode
               </div>
            </div>

            {/* Mock Body */}
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="w-16 md:w-64 border-r border-white/5 p-4 flex flex-col gap-4">
                 <div className="h-10 w-full bg-white/5 rounded-lg mb-4 flex items-center px-3 gap-3">
                    <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                        <span className="text-yellow-800 text-xs font-bold">ZK</span>
                    </div>
                    <div className="hidden md:block flex-1">
                        <div className="text-xs text-white font-medium">Zainab Kimani</div>
                        <div className="text-[10px] text-slate-400">Admin</div>
                    </div>
                 </div>
                 <div className="space-y-2">
                    {[1, 2, 3, 4].map(i => (
                        <div key={i} className={`h-10 rounded-lg flex items-center px-3 gap-3 ${i === 2 ? 'bg-primary-500/10 text-primary-400' : 'text-slate-500'}`}>
                            <div className="w-5 h-5 bg-current opacity-20 rounded" />
                            <div className="hidden md:block h-2 w-24 bg-current opacity-20 rounded" />
                        </div>
                    ))}
                 </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 p-8 bg-slate-900/50">
                 <div className="w-full h-full rounded-xl border border-white/5 bg-slate-800/30 p-6 relative overflow-hidden">
                    {/* Inner content simulating the prompt builder */}
                    <div className="flex items-center gap-2 mb-6 text-primary-300 bg-primary-500/10 w-fit px-3 py-1 rounded-full text-xs font-medium border border-primary-500/20">
                        <Sparkles size={12} /> Sauti Agent Configurator
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-slate-400 text-sm">Target Region & Language</span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-10 bg-black/20 rounded-lg border border-white/5 flex items-center px-4 text-sm text-slate-300">East Africa (Kenya)</div>
                                <div className="h-10 bg-black/20 rounded-lg border border-white/5 flex items-center px-4 text-sm text-slate-300">Swahili / English Mix</div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 rounded-xl border border-white/5 h-32 flex items-center justify-center relative group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/40 group-hover:scale-110 transition-transform">
                                <Play fill="white" className="ml-1 text-white" />
                            </div>
                            <div className="absolute bottom-4 text-xs text-slate-400">Test "Juma" Agent</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements under mockup */}
          <div className="absolute -bottom-10 -left-10 md:-left-20 w-40 h-40 bg-slate-800 rounded-3xl -z-10 rotate-6" />
          <div className="absolute -bottom-10 -right-10 md:-right-20 w-40 h-40 bg-slate-800 rounded-3xl -z-10 -rotate-6" />
        </div>
      </div>
    </section>
  );
};