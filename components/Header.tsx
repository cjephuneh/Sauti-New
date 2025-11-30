import React, { useState } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Sauti', href: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-slate-950/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Sauti AI</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.href) ? 'text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Link to="/pricing" className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-lg shadow-primary-500/20 text-sm">
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-white/5"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link 
                to="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-primary-600 text-white px-6 py-3 rounded-xl font-medium"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};