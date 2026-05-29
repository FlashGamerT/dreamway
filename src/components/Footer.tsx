/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, Facebook, Instagram, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#05070f] text-slate-400 font-sans border-t border-slate-900" id="contact-footer">
      {/* Top Brand & Links Bar */}
      <div className="max-w-7xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-slate-950">
        {/* Column 1: Brand description, credentials */}
        <div className="md:col-span-5 space-y-5">
          <Logo className="h-10 md:h-12" iconOnly={false} />
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
            Your trusted premier flight ticketing and visa assistance travel partner near Calicut International Airport, Kondotty, Kerala.
          </p>

          {/* Social Icons (as seen in screenshots footer) */}
          <div className="flex gap-3 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              title="Facebook Connect"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500 transition-all cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              title="Instagram Page"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>

        {/* Column 2: Exact Physical Address, helpline numbers */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-display">Contact Us</h4>
          <div className="w-8 h-0.5 bg-sky-400" />

          <ul className="space-y-3 text-slate-350 text-xs sm:text-sm">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-4.5 h-4.5 text-sky-400 shrink-0 mt-0.5" />
              <span>Calicut Airport Junction, Airport Road, Kondotty, Near Calicut Airport, Malappuram, Kerala, 673638, India</span>
            </li>
            <li className="flex gap-2.5 items-start">
              <Phone className="w-4.5 h-4.5 text-sky-400 shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <a href="tel:+919995730044" className="hover:text-sky-400 font-medium transition-colors">
                  +91 99957 30044 (Primary helpline)
                </a>
                <a href="tel:+917994546699" className="hover:text-sky-400 font-medium transition-colors">
                  +91 79945 46699 (Visa enquiry)
                </a>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-4.5 h-4.5 text-sky-400 shrink-0" />
              <a href="mailto:dreamwaytravelskdy@gmail.com" className="hover:text-sky-400 transition-colors leading-relaxed">
                dreamwaytravelskdy@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Quick navigation links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-white text-sm font-semibold tracking-wider uppercase font-display">Quick Links</h4>
          <div className="w-8 h-0.5 bg-sky-400" />

          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
            <button
              onClick={handleScrollToTop}
              className="text-left text-slate-400 hover:text-sky-400 transition-colors py-1.5 cursor-pointer col-span-2"
            >
              Home
            </button>
            <a
              href="#expertise-services"
              className="text-left text-slate-400 hover:text-sky-400 transition-colors py-1.5 cursor-pointer col-span-2"
            >
              Services
            </a>
            <a
              href="#why-choose-us"
              className="text-left text-slate-400 hover:text-sky-400 transition-colors py-1.5 cursor-pointer col-span-2"
            >
              Why Us
            </a>
            <a
              href="#frequently-asked-questions"
              className="text-left text-slate-400 hover:text-sky-400 transition-colors py-1.5 cursor-pointer"
            >
              FAQS
            </a>
            <a
              href="#happy-clients"
              className="text-left text-slate-400 hover:text-sky-400 transition-colors py-1.5 cursor-pointer"
            >
              Reviews
            </a>
          </div>

          <div className="pt-4 flex items-center gap-2 border-t border-slate-900 font-mono text-[10px] text-slate-500">
            <ShieldCheck className="w-4 h-4 text-green-500" />
            <span>Licensed IATA Broker Agent</span>
          </div>
        </div>
      </div>

      {/* Extreme Bottom Credits & Disclaimer */}
      <div className="bg-[#03050a] py-6 px-4 md:px-8 border-t border-slate-950">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 text-xs gap-4 text-center sm:text-left">
          <span>
            © {currentYear} Dream Way Travels LLP. All Rights Reserved. Near Calicut International Airport, Kondotty, Kerala.
          </span>
          <span className="flex items-center gap-1 justify-center sm:justify-start">
            <span>Seamless travel curated with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current animate-pulse" />
            <span>by Local Experts</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
