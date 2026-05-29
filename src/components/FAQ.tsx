/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FAQS_DATA } from '../data';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>('faq1'); // Default open first item

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#0A0F1D] to-[#070b13] relative overflow-hidden border-b border-slate-900/50" id="frequently-asked-questions">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Help card */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-4">
            <span className="text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
              FAQ
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-sky-450 to-indigo-600 rounded-full" />
            <p className="text-slate-400 text-xs sm:text-sm font-sans leading-relaxed max-w-sm">
              Have questions about booking flights, processing times, or security? Read through our common queries or chat with us.
            </p>
          </div>

          {/* Need help box (high converting) */}
          <div className="bg-[#0e1427]/85 rounded-3xl p-6 border border-slate-800/80 shadow-2xl flex flex-col justify-center items-center text-center space-y-4 max-w-sm">
            <div className="relative w-full h-40 rounded-xl overflow-hidden border border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=400"
                alt="Travel advisor help"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm sm:text-base text-white">Still Need Help?</h4>
              <p className="text-slate-400 text-xs font-sans mt-1">Our travel planners are available online right now.</p>
            </div>
            <a
              href="https://wa.me/919995730044"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-green-500" />
              <span>Message on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Accordion keys */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = expandedId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-[#0e1427]/85 rounded-2xl border border-slate-800 hover:border-slate-700 shadow-xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'ring-1 ring-sky-500/30 border-sky-500/35' : ''
                }`}
                id={`faq-item-${faq.id}`}
              >
                {/* Header button triggers toggle */}
                <button
                  type="button"
                  onClick={() => handleToggle(faq.id)}
                  className="w-full p-5 flex justify-between items-center text-left gap-4 hover:bg-[#0A0F1D]/55 transition-colors font-sans font-bold text-sm sm:text-base text-slate-200 hover:text-white cursor-pointer animate-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-sky-400 shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div className="w-6 h-6 rounded-full bg-slate-900/60 border border-slate-800 flex items-center justify-center text-slate-400 shrink-0 select-none">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-sky-400" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                {/* Animated expandable panels */}
                <div
                  className={`transition-all duration-300 ease-in-out font-sans ${
                    isOpen ? 'max-h-[500px] border-t border-slate-900 opacity-100 p-5 bg-[#0A0F1D]/30' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="text-slate-350 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
