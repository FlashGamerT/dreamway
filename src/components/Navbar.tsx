/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, Mail, Menu, X, Clock } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto" id="main-header">
      {/* Top Bar with Contacts & Location info */}
      <div className="bg-[#05070f] text-slate-100 text-[11px] py-2 px-4 transition-all duration-300 md:block hidden border-b border-slate-900/60 font-sans tracking-wide">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Available 24/7 for support</span>
            </span>
            <span className="flex items-center gap-1.5 text-slate-400">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Kondotty (Near Calicut Airport)</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="mailto:dreamwaytravelskdy@gmail.com"
              className="flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>dreamwaytravelskdy@gmail.com</span>
            </a>
            <a
              href="tel:+919995730044"
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors font-medium text-slate-300 bg-slate-900/80 px-3 py-1 rounded border border-slate-800/80"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              <span>Hotline: +91 99957 30044</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full py-3.5 px-4 md:px-8 transition-all duration-350 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-150 py-2.5'
            : 'bg-[#0A0F1D]/80 backdrop-blur-sm border-b border-slate-900/40'
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo and Brand Name */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="focus:outline-none cursor-pointer">
            <Logo className="h-10 md:h-11" isLight={isScrolled} />
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 font-display uppercase text-xs tracking-wider font-semibold">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'}`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('expertise-services')}
              className={`transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className={`transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'}`}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('frequently-asked-questions')}
              className={`transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'}`}
            >
              FAQS
            </button>
            <button
              onClick={() => scrollToSection('contact-footer')}
              className={`transition-colors cursor-pointer ${isScrolled ? 'text-slate-700 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'}`}
            >
              Contact
            </button>
          </div>

          {/* Right Action Button and Hamburger */}
          <div className="flex items-center gap-3">
            {/* Quick Phone Call (Mobile View Option) */}
            <a
              href="tel:+919995730044"
              className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all cursor-pointer border ${
                isScrolled
                  ? 'bg-slate-100 border-slate-200 text-[#2a9bbc] hover:bg-[#2a9bbc] hover:text-white'
                  : 'bg-slate-900/60 border-slate-800 text-sky-400 hover:bg-sky-505 hover:text-white'
              }`}
              title="Call Helpline"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Quick Callback CTA */}
            <button
              onClick={() => onOpenEnquiry()}
              className={`hidden sm:inline-flex text-white font-semibold text-xs py-2.5 px-5 rounded-full transition-all duration-300 cursor-pointer uppercase tracking-wider border ${
                isScrolled
                  ? 'bg-[#2a9bbc] hover:bg-[#1c7fa1] border-[#2a9bbc]/20 shadow-md shadow-[#2a9bbc]/10'
                  : 'bg-sky-650 hover:bg-sky-550 border-sky-550/30 shadow-[0_0_15px_rgba(56,189,248,0.25)]'
              }`}
              id="header-callback-cta"
            >
              Get a Quick Quote
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors cursor-pointer ${
                isScrolled ? 'text-slate-750 hover:text-[#2a9bbc]' : 'text-slate-300 hover:text-sky-400'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 top-[50px] bg-slate-950/85 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-4/5 max-w-sm bg-[#0A0F1D] text-slate-100 h-full shadow-2xl flex flex-col p-6 animate-slide-in pointer-events-auto border-r border-slate-900"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-4 mt-6">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-2.5 border-b border-slate-900 font-display font-medium text-slate-200 hover:text-sky-400 text-sm uppercase tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('expertise-services'), 100);
                }}
                className="text-left py-2.5 border-b border-slate-900 font-display font-medium text-slate-200 hover:text-sky-400 text-sm uppercase tracking-wide"
              >
                Services
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('why-choose-us'), 100);
                }}
                className="text-left py-2.5 border-b border-slate-900 font-display font-medium text-slate-200 hover:text-sky-400 text-sm uppercase tracking-wide"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('frequently-asked-questions'), 100);
                }}
                className="text-left py-2.5 border-b border-slate-900 font-display font-medium text-slate-200 hover:text-sky-400 text-sm uppercase tracking-wide"
              >
                FAQS
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setTimeout(() => scrollToSection('contact-footer'), 100);
                }}
                className="text-left py-2.5 border-b border-slate-900 font-display font-medium text-slate-200 hover:text-sky-400 text-sm uppercase tracking-wide"
              >
                Office Contact
              </button>
            </div>

            {/* Mobile Call CTA */}
            <div className="mt-auto pt-8 flex flex-col gap-4">
              <span className="text-slate-400 text-[10px] font-bold tracking-wider">NEED URGENT BOOKINGS?</span>
              <a
                href="tel:+919995730044"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#05070f] border border-slate-800 text-slate-200 rounded-xl font-semibold hover:border-sky-500 transition-colors"
              >
                <Phone className="w-4 h-4 text-sky-400 animate-pulse" />
                <span>+91 99957 30044</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenEnquiry();
                }}
                className="w-full py-3 bg-sky-600 text-white rounded-xl font-semibold shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:bg-sky-500 transition-all text-sm uppercase tracking-wide"
              >
                Request Free Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
