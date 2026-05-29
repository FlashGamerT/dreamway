/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SERVICES_DATA } from '../data';
import { Plane, FileCheck, Landmark, Hotel, ShieldAlert, Headphones, ArrowRight, Star } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

// Map strings to dynamic Lucide icons
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  PlaneTakeoff: Plane,
  FileText: FileCheck,
  Palmtree: Landmark, // Beautiful vacation vibe mapping
  Hotel: Hotel,
  Shield: ShieldAlert,
  Headphones: Headphones
};

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 px-4 md:px-8 bg-slate-50 relative overflow-hidden border-b border-slate-100" id="expertise-services">
      {/* Decorative vectors with sky blue cosmic lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#2a9bbc]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-15 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-[#2a9bbc] text-xs font-bold uppercase tracking-widest bg-[#2a9bbc]/10 px-4 py-1.5 rounded-full border border-[#2a9bbc]/20 shadow-sm">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-950">
            Premium Travel Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#2a9bbc] to-indigo-600 mx-auto rounded-full" />
          <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-xl mx-auto font-sans leading-relaxed">
            We do not just book tickets; we curate seamless travel experiences. Trust our 15+ years of local and worldwide expertise for your absolute peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Plane;
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-150 hover:border-[#2a9bbc]/30 shadow-sm hover:shadow-[0_15px_35px_rgba(42,155,188,0.1)] transition-all duration-300 flex flex-col justify-between group h-full"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon Indicator box with 24/7 support indicator */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#2a9bbc]/10 border border-[#2a9bbc]/20 text-[#2a9bbc] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#2a9bbc] group-hover:text-white">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {service.id === 'support' && (
                      <span className="bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider animate-pulse flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        <span>Live support</span>
                      </span>
                    )}
                    {service.id === 'visas' && (
                      <span className="text-amber-750 border border-amber-200 bg-amber-50 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                        99.8% Success Ratio
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 group-hover:text-[#2a9bbc] transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm font-sans mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Highlight Features checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-500 font-sans">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2a9bbc]/80" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <button
                  onClick={() => onSelectService(service.title)}
                  className="inline-flex items-center gap-2 text-[#2a9bbc] hover:text-[#1d748f] font-extrabold text-xs sm:text-sm transition-all mt-auto group-hover:translate-x-1 duration-150 cursor-pointer"
                >
                  <span>Book / Ask Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* 24/7 Service Banner badge */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-slate-100 rounded-3xl p-8 mt-20 max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a9bbc]/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex gap-4 items-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#2a9bbc]/15 text-[#2a9bbc] flex items-center justify-center shrink-0">
              <Headphones className="w-6 h-6 animate-bounce" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Need Urgent Rescheduling or Ticketing Support?</h4>
              <p className="text-slate-350 text-xs mt-0.5">Our dedicated expert team near Calicut Airport is available round-the-clock.</p>
            </div>
          </div>
          <a
            href="tel:+919995730044"
            className="px-6 py-3.5 bg-[#2a9bbc] hover:bg-[#1f7893] text-white text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-[#2a9bbc]/10 font-sans w-full md:w-auto text-center relative z-10 text-center uppercase tracking-wider"
          >
            Call Helper Team
          </a>
        </div>
      </div>
    </section>
  );
};
