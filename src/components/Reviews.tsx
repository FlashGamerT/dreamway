/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { REVIEWS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#0A0F1D] relative border-b border-slate-900/50" id="happy-clients">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center space-y-4 mb-20">
          <span className="text-sky-400 text-xs font-bold uppercase tracking-widest bg-sky-500/10 px-4 py-1.5 rounded-full border border-sky-500/20 shadow-[0_0_15px_rgba(56,189,248,0.1)]">
            Happy Clients
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white leading-tight">
            What Travelers Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-450 to-indigo-600 mx-auto rounded-full" />
          <p className="text-slate-400 text-xs sm:text-sm font-sans max-w-lg mx-auto leading-relaxed">
            We are rated 4.9 out of 5 stars based on 1,500+ client reviews on local maps directory. Here is what some of our recent guests have written.
          </p>
        </div>

        {/* Reviews Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#0e1427]/85 border border-slate-800/80 hover:border-sky-500/40 p-6 rounded-3xl flex flex-col justify-between shadow-xl hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] relative group transition-all duration-300 h-full"
            >
              {/* Quote icon banner background */}
              <div className="absolute top-4 right-4 text-sky-400/5 group-hover:text-sky-400/10 transition-colors">
                <Quote className="w-10 h-10 fill-current" />
              </div>

              <div className="space-y-4 relative z-10">
                {/* Stars list */}
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(rev.rating)
                          ? 'fill-amber-400 stroke-amber-400'
                          : 'fill-slate-900 stroke-slate-800'
                      }`}
                    />
                  ))}
                </div>

                {/* Main feedback text */}
                <p className="text-slate-300 text-xs sm:text-sm font-sans leading-relaxed italic relative z-10">
                  "{rev.text}"
                </p>
              </div>

              {/* User Profiling info */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-slate-900 relative z-10">
                {/* Colored Avatar */}
                <div className={`w-9 h-9 rounded-full ${rev.avatarColor} flex items-center justify-center font-bold text-sm tracking-tight shrink-0`}>
                  {rev.avatarText}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-white leading-tight">
                    {rev.name}
                  </h4>
                  <span className="text-slate-500 text-[10px] sm:text-xs">
                    {rev.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Small Trust Seal */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-3.5 bg-[#0e1427]/40 border border-slate-850 rounded-2xl p-4 max-w-xl mx-auto text-xs font-semibold text-slate-400 text-center">
          <span className="text-amber-450 text-base">★★★★★</span>
          <span className="text-[11px] sm:text-xs">Verified reviews indexed from Google Maps listing profile (Calicut Airport, Kondotty).</span>
        </div>
      </div>
    </section>
  );
};
