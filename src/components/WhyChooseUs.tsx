/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BadgeCheck, Globe, HelpCircle, Landmark, Sparkles, Building } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden border-b border-slate-100" id="why-choose-us">
      {/* Absolute cosmic aurora light rays */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-[#2a9bbc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Overlapping layered photo duo with beautiful 15+ years circular badge */}
        <div className="lg:col-span-6 relative flex justify-center lg:justify-start pt-10 pb-6 pr-6 sm:pr-12 md:pr-0">
          {/* Main Backdrop Image */}
          <div className="relative w-4/5 max-w-[400px] h-64 sm:h-96 rounded-3xl overflow-hidden shadow-2xl z-10 border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=600"
              alt="Travel Planning"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Secondary Overlapping foreground Image */}
          <div className="absolute top-[25%] right-[5%] sm:right-[15%] lg:right-[5%] xl:right-10 w-2/3 max-w-[240px] h-40 sm:h-64 rounded-3xl overflow-hidden shadow-2xl z-20 border-4 border-slate-50">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=650"
              alt="Airplane Wing View"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overlapping Round Badge "15+ Years" with space gradient and sky neon drop-glow */}
          <div className="absolute -top-4 left-[10%] lg:left-[5%] bg-gradient-to-tr from-[#2a9bbc] to-indigo-600 text-white w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-slate-50 shadow-2xl shadow-sky-500/20 flex flex-col justify-center items-center z-30 select-none animate-pulse-slow">
            <span className="text-xl sm:text-3.5xl font-display font-black tracking-tight">-15+</span>
            <span className="text-[9px] sm:text-[11px] font-sans tracking-widest font-extrabold uppercase">Years</span>
          </div>
        </div>

        {/* Right Column: Narrative with bullet values */}
        <div className="lg:col-span-6 space-y-7">
          <div className="space-y-4">
            <span className="text-[#2a9bbc] text-xs font-bold uppercase tracking-widest bg-[#2a9bbc]/10 px-4 py-1.5 rounded-full border border-[#2a9bbc]/20 shadow-sm">
              About Dream Way
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-950 leading-tight">
              Your Gateway to the World
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2a9bbc] to-indigo-600 rounded-full" />
          </div>

          <p className="text-slate-650 text-xs sm:text-sm font-sans leading-relaxed">
            Founded with a passion for travel, <strong className="text-slate-950 font-bold">Dream Way Travels</strong> has grown from a small local agency in Kondotty to a trusted household name in Malappuram. Enjoying optimal proximity right next to <strong className="text-[#2a9bbc] font-bold">Calicut International Airport (CCJ)</strong>, we seamlessly cater to the urgent requirements of international expats, business executives, and leisure seekers.
          </p>
          <p className="text-slate-650 text-xs sm:text-sm font-sans leading-relaxed">
            With over 15 years of industry experience, our dedicated crew ensures that every visa slot processed, every flight ticket booked, and every client transit detail is executed with absolute perfection and complete transparency. No hidden charges or surprise commissions.
          </p>

          {/* Advantages List Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
            {/* Local Expertise */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#2a9bbc]/10 border border-[#2a9bbc]/20 text-[#2a9bbc] flex items-center justify-center shrink-0">
                <Building className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-955">Local Expertise</h4>
                <p className="text-slate-550 text-xs font-sans mt-1">Rooted in Kondotty & Malappuram, with deep hands-on airport desk help.</p>
              </div>
            </div>

            {/* Global Network */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center shrink-0">
                <Globe className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-955">Global Network</h4>
                <p className="text-slate-550 text-xs font-sans mt-1">Direct partner hotels and ground transport in 20+ countries.</p>
              </div>
            </div>

            {/* 24/7 Helpline Support */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-green-50 text-green-600 border border-green-100 flex items-center justify-center shrink-0">
                <HelpCircle className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-955">24/Support desk</h4>
                <p className="text-slate-550 text-xs font-sans mt-1">Always reachable via Call/WhatsApp during active transits.</p>
              </div>
            </div>

            {/* Best Price Value Guarantee */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center shrink-0">
                <Landmark className="w-4.5 h-4.5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-slate-955">Best Price Value</h4>
                <p className="text-slate-550 text-xs font-sans mt-1">Guaranteed fair rates with zero third-party portal surcharges.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
