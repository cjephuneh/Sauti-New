import React from 'react';
import { Sparkles, Instagram, Facebook, Youtube, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            {/* Logo Section */}
            <div className="text-left w-full md:w-auto">
                <Link to="/" className="flex items-center gap-2 cursor-pointer mb-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-600 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold text-slate-900 tracking-tight">Sauti AI</span>
                </Link>
                <p className="text-slate-500 text-sm max-w-xs">
                    Empowering African businesses with next-generation AI voice automation.
                </p>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm font-medium text-slate-600">
                <Link to="/solutions" className="hover:text-primary-600 transition-colors">Solutions</Link>
                <Link to="/industries" className="hover:text-primary-600 transition-colors">Industries</Link>
                <Link to="/pricing" className="hover:text-primary-600 transition-colors">Pricing</Link>
                <Link to="/about" className="hover:text-primary-600 transition-colors">About</Link>
            </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>@2025 Sauti AI Ltd. All rights reserved</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-slate-600">Terms & Conditions</a>
                <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            </div>
            <div className="flex gap-4">
                <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600"><Instagram size={14} /></a>
                <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600"><Facebook size={14} /></a>
                <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600"><Youtube size={14} /></a>
                <a href="#" className="bg-slate-100 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600"><Mail size={14} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};