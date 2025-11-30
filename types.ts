export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

export enum Industry {
  FINTECH = 'Fintech',
  LOGISTICS = 'Logistics',
  TOURISM = 'Tourism',
  AGRITECH = 'Agri-Tech'
}

export interface DemoPersona {
  id: string;
  name: string;
  role: string;
  description: string;
  industry: Industry;
  avatar: string;
  prompt: string;
}