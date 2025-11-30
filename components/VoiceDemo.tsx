import React, { useState, useEffect } from 'react';
import { Play, Pause, Loader2, Bot, RefreshCw } from 'lucide-react';
import { DemoPersona, Industry } from '../types';
import { generateConversationScript } from '../services/geminiService';

export const VoiceDemo: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<string>('1');
  const [isPlaying, setIsPlaying] = useState(false);
  const [script, setScript] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedText, setDisplayedText] = useState<string>('');
  
  const personas: DemoPersona[] = [
    {
      id: '1',
      name: 'Chioma',
      role: 'Banking Assistant',
      industry: Industry.FINTECH,
      description: 'Loan Application',
      avatar: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=200',
      prompt: 'Assist a customer with checking their loan eligibility status.'
    },
    {
      id: '2',
      name: 'Kwame',
      role: 'Logistics Coord.',
      industry: Industry.LOGISTICS,
      description: 'Delivery Confirmation',
      avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=200',
      prompt: 'Call a customer to confirm they are home for a package delivery.'
    },
    {
      id: '3',
      name: 'Amani',
      role: 'Travel Agent',
      industry: Industry.TOURISM,
      description: 'Safari Booking',
      avatar: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=200',
      prompt: 'Help a tourist book a 3-day safari to Maasai Mara.'
    },
    {
      id: '4',
      name: 'Juma',
      role: 'Agri-Support',
      industry: Industry.AGRITECH,
      description: 'Market Prices',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      prompt: 'Inform a farmer about the current market price for maize in Nairobi.'
    }
  ];

  const currentPersona = personas.find(p => p.id === selectedPersona) || personas[0];

  const handleGenerate = async () => {
    setIsLoading(true);
    setDisplayedText('');
    setScript('');
    
    const generatedScript = await generateConversationScript(currentPersona);
    setScript(generatedScript);
    setIsLoading(false);
    setIsPlaying(true);
  };

  // Effect to simulate typing/speaking the script
  useEffect(() => {
    if (isPlaying && script) {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(prev => prev + script.charAt(index));
        index++;
        if (index >= script.length) {
          clearInterval(interval);
          setIsPlaying(false);
        }
      }, 30); // Typing speed
      return () => clearInterval(interval);
    }
  }, [isPlaying, script]);

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf61a_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf61a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-600/20 text-primary-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-primary-500/30">
            Sauti Agents in Action
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Hear the Difference
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Experience how Sauti AI handles complex interactions with local context and natural flow.
          </p>
        </div>

        {/* Persona Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {personas.map((persona) => (
            <div 
              key={persona.id}
              onClick={() => {
                setSelectedPersona(persona.id);
                setScript('');
                setDisplayedText('');
                setIsPlaying(false);
              }}
              className={`cursor-pointer rounded-2xl p-5 border transition-all duration-300 ${
                selectedPersona === persona.id 
                  ? 'bg-primary-900/40 border-primary-500 shadow-lg shadow-primary-500/20 transform scale-105' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              <div className="relative mb-4">
                <img src={persona.avatar} alt={persona.name} className="w-full h-48 object-cover rounded-xl grayscale-[20%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-xl" />
                <div className="absolute bottom-3 left-3">
                   <h3 className="text-white font-bold text-lg">{persona.description}</h3>
                   <p className="text-slate-300 text-xs">{persona.name}, {persona.role}</p>
                </div>
              </div>
              
              {/* Audio Viz Placeholder */}
              <div className="flex items-center gap-3">
                 <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${selectedPersona === persona.id ? 'bg-white text-primary-600' : 'bg-white/10 text-white'}`}>
                    <Play size={12} fill="currentColor" />
                 </button>
                 <div className="flex-1 flex items-center gap-0.5 h-6">
                    {[...Array(15)].map((_, i) => (
                        <div 
                            key={i} 
                            className={`w-1 rounded-full transition-all duration-300 ${selectedPersona === persona.id && isPlaying ? 'bg-primary-400 visualizer-bar' : 'bg-white/20 h-2'}`}
                            style={{ animationDelay: `${i * 0.05}s` }}
                        />
                    ))}
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terminal / Chat Display */}
        <div className="max-w-3xl mx-auto">
             <div className="bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                <div className="bg-slate-800/50 px-4 py-3 flex items-center justify-between border-b border-white/5">
                    <div className="flex items-center gap-2">
                        <Bot size={18} className="text-primary-400" />
                        <span className="text-sm font-medium text-slate-300">Live Transcript: {currentPersona.name} ({currentPersona.description})</span>
                    </div>
                    <button 
                        onClick={handleGenerate}
                        disabled={isLoading || isPlaying}
                        className="text-xs bg-primary-600 hover:bg-primary-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-3 py-1.5 rounded-lg flex items-center gap-2 transition-colors"
                    >
                        {isLoading ? <Loader2 size={12} className="animate-spin" /> : <RefreshCw size={12} />}
                        Simulate Call
                    </button>
                </div>
                <div className="p-6 h-64 overflow-y-auto font-mono text-sm leading-relaxed scroll-smooth bg-black/40">
                    {!displayedText && !isLoading && (
                        <div className="h-full flex flex-col items-center justify-center text-slate-500 gap-2">
                            <Bot size={32} className="opacity-20" />
                            <p>Click "Simulate Call" to generate a conversation scenario.</p>
                        </div>
                    )}
                    {isLoading && (
                         <div className="h-full flex items-center justify-center text-primary-400 gap-2">
                            <Loader2 className="animate-spin" />
                            <span>Sauti AI connecting to {currentPersona.name}...</span>
                         </div>
                    )}
                    <div className="whitespace-pre-wrap text-slate-300">
                        {displayedText}
                        {isPlaying && <span className="inline-block w-2 h-4 bg-primary-500 ml-1 animate-pulse" />}
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};