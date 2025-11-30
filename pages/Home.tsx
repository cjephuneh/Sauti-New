import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { IndustryTabs } from '../components/IndustryTabs';
import { VoiceDemo } from '../components/VoiceDemo';
import { Steps } from '../components/Steps';
import { Comparison } from '../components/Comparison';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Features />
      <IndustryTabs />
      <VoiceDemo />
      <Steps />
      <Comparison />
      <Testimonials />
      <FAQ />
    </>
  );
};