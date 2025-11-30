import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { IndustryTabs } from './components/IndustryTabs';
import { VoiceDemo } from './components/VoiceDemo';
import { Steps } from './components/Steps';
import { Comparison } from './components/Comparison';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <IndustryTabs />
        <VoiceDemo />
        <Steps />
        <Comparison />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;