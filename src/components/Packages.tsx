/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PACKAGES_DATA } from '../data';
import { DestinationPackage } from '../types';
import { MapPin, Calendar, Star, ArrowRight, Sparkles, CheckCircle, XCircle, X, Compass, ChevronRight, Phone, MessageSquare } from 'lucide-react';

interface PackagesProps {
  onSelectPackage: (destination: string) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackage }) => {
  const [selectedPackage, setSelectedPackage] = useState<DestinationPackage | null>(null);
  const [activeItineraryDay, setActiveItineraryDay] = useState<number>(1);

  const handleOpenDetails = (pkg: DestinationPackage) => {
    setSelectedPackage(pkg);
    setActiveItineraryDay(1); // Default to day 1 itinerary
  };

  const handleCloseDetails = () => {
    setSelectedPackage(null);
  };

  const handleTriggerQuote = (pkgTitle: string) => {
    handleCloseDetails();
    onSelectPackage(pkgTitle);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white relative border-b border-slate-100" id="popular-packages">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-5">
          <div className="space-y-4">
            <span className="text-[#2a9bbc] text-xs font-bold uppercase tracking-widest bg-[#2a9bbc]/10 px-4 py-1.5 rounded-full border border-[#2a9bbc]/20 shadow-sm">
              Destinations
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-slate-950 leading-tight">
              Popular Packages
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#2a9bbc] to-indigo-600 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-xl font-sans leading-relaxed">
              Discover handpicked itineraries crafted for incredible value, comfort, and exploration. Choose a destination to see day-wise schedules or ask for an instant customized quote.
            </p>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById('contact-footer');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-slate-200 border hover:border-[#2a9bbc] hover:text-[#2a9bbc] text-slate-700 font-semibold px-5 py-3 rounded-full text-xs uppercase tracking-wider font-sans bg-slate-50 transition-all duration-300 cursor-pointer"
          >
            Ask Worldwide Tours
          </button>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {PACKAGES_DATA.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-150 hover:border-[#2a9bbc]/30 shadow-sm hover:shadow-[0_15px_35px_rgba(42,155,188,0.1)] transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image with Tag badge */}
              <div className="relative h-48 sm:h-52 overflow-hidden shrink-0">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                {/* Category tag badges */}
                <span className="absolute top-3 left-3 bg-[#2a9bbc] text-white text-[10px] font-bold tracking-wider py-1 px-3 rounded-full shadow-lg uppercase">
                  {pkg.category}
                </span>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                  <MapPin className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-xs font-semibold">{pkg.location.split(',')[0]}</span>
                </div>
              </div>

              {/* Package Content */}
              <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-slate-500 text-xs">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2a9bbc]" />
                      <span>{pkg.duration}</span>
                    </span>
                    <span className="flex items-center gap-1 font-semibold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500 stroke-amber-500" />
                      <span>{pkg.rating}</span>
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#2a9bbc] transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-sans line-clamp-2 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                {/* Rate and action box */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-slate-500 text-[10px] uppercase font-sans font-semibold tracking-wider">Starting from</span>
                    <span className="text-lg font-black text-[#2a9bbc] font-sans leading-none">
                      {pkg.price}
                      {pkg.originalPrice && (
                        <span className="text-slate-400 text-xs font-normal line-through ml-1.5">{pkg.originalPrice}</span>
                      )}
                    </span>
                  </div>

                  <button
                    onClick={() => handleOpenDetails(pkg)}
                    className="inline-flex items-center gap-1.5 bg-[#2a9bbc]/10 hover:bg-[#2a9bbc] border border-[#2a9bbc]/15 text-[#2a9bbc] hover:text-white font-bold text-[11px] py-1.5 px-3.5 rounded-full transition-all duration-300 cursor-pointer"
                  >
                    <span>Get Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Special high-converting Custom Trip Card */}
          <div className="bg-[#2a9bbc]/5 text-slate-900 rounded-3xl p-6 border border-[#2a9bbc]/15 flex flex-col justify-between overflow-hidden relative group shadow-sm">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a9bbc]/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-indigo-550/10 rounded-full blur-xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#2a9bbc]/10 text-[#2a9bbc] flex items-center justify-center border border-[#2a9bbc]/20">
                <Compass className="w-6 h-6 animate-spin-slow" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-950">Custom Trip?</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                Do you have a specific destination, itinerary, or strict budget parameters? We plan custom corporate trips, family retreats, and honeymoon vacations to 50+ countries worldwide.
              </p>
            </div>

            <div className="pt-6 relative z-10 mt-6 lg:mt-0">
              <button
                onClick={() => onSelectPackage('Customized Tour Package')}
                className="w-full py-3 bg-[#2a9bbc] hover:bg-[#1f7ca0] text-white border border-transparent rounded-xl text-xs font-bold tracking-wider uppercase shadow transition-all duration-300 cursor-pointer text-center"
              >
                Chat on WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* DETAILED PACKAGE DRAWER OVERLAY */}
      {selectedPackage && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto">
          {/* Animated Modal Card in Light Theme */}
          <div className="bg-white text-slate-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col relative border border-slate-150 animate-scale-up">
            {/* Header portion */}
            <div className="bg-slate-50 p-6 pr-12 flex justify-between items-center relative border-b border-slate-150">
              <div>
                <span className="text-[10px] bg-[#2a9bbc]/10 text-[#2a9bbc] font-bold uppercase tracking-widest px-2.5 py-1 rounded border border-[#2a9bbc]/20 mr-2 inline-block">
                  {selectedPackage.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-black leading-tight mt-1.5 text-slate-950">{selectedPackage.title}</h3>
                <p className="text-slate-550 text-xs sm:text-sm mt-0.5">{selectedPackage.subtitle}</p>
              </div>

              {/* Close button */}
              <button
                onClick={handleCloseDetails}
                className="absolute top-6 right-6 p-2 text-slate-500 hover:text-slate-800 rounded-full bg-slate-200/50 hover:bg-slate-200 border border-slate-300/40 transition-colors cursor-pointer"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable details contents */}
            <div className="overflow-y-auto p-6 space-y-8 flex-grow">
              {/* Quick facts row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-150">
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Duration</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{selectedPackage.duration}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Highlights</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">{selectedPackage.highlights.length} Experiences</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Rating</div>
                  <div className="text-xs sm:text-sm font-bold text-amber-500 flex items-center gap-1">
                    <span>{selectedPackage.rating} / 5</span>
                    <Star className="w-4 h-4 fill-amber-500 stroke-amber-500" />
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px] uppercase font-bold tracking-wider mb-0.5">Special Price</div>
                  <div className="text-xs sm:text-sm font-extrabold text-[#2a9bbc]">
                    {selectedPackage.price}{' '}
                    {selectedPackage.originalPrice && (
                      <span className="text-slate-400 text-xs line-through font-normal ml-1">{selectedPackage.originalPrice}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Grid: Highlights vs Day-wise Itinerary */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column: Brief details and Checklist highlights */}
                <div className="space-y-6">
                  {/* Package intro sentence */}
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-base text-slate-950">About the Journey</h4>
                    <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                      {selectedPackage.description}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="space-y-3">
                    <h4 className="font-display font-bold text-base text-slate-950">Top Highlights</h4>
                    <ul className="space-y-2.5">
                      {selectedPackage.highlights.map((hlt, idx) => (
                        <li key={idx} className="flex gap-2.5 text-xs text-slate-600 font-sans leading-relaxed">
                          <CheckCircle className="w-4 h-4 text-[#2a9bbc] shrink-0 mt-0.5" />
                          <span>{hlt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* inclusions vs exclusions box */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                    <div>
                      <h5 className="font-sans font-bold text-xs text-green-600 uppercase flex items-center gap-1.5 mb-2.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Inclusions</span>
                      </h5>
                      <ul className="space-y-1.5">
                        {selectedPackage.inclusions.map((inc, iIdx) => (
                          <li key={iIdx} className="text-[11px] text-slate-600 font-sans leading-snug">
                            • {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-sans font-bold text-xs text-red-550 uppercase flex items-center gap-1.5 mb-2.5">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Exclusions</span>
                      </h5>
                      <ul className="space-y-1.5">
                        {selectedPackage.exclusions.map((exc, eIdx) => (
                          <li key={eIdx} className="text-[11px] text-slate-500 font-sans leading-snug">
                            • {exc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Day-wise Itinerary Scheduler */}
                <div className="bg-slate-50/80 p-5 rounded-2xl border border-slate-150 space-y-4">
                  <div className="flex justify-between items-center border-b border-slate-150 pb-3">
                    <h4 className="font-display font-bold text-sm sm:text-base text-slate-950 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#2a9bbc]" />
                      <span>Detailed Daily Schedule</span>
                    </h4>
                    <span className="text-[10px] text-slate-400 uppercase font-mono tracking-wider">Itinerary Outline</span>
                  </div>

                  {/* Custom horizontal tab controls to switch days easily */}
                  <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
                    {selectedPackage.itinerary.map((dayObj) => (
                      <button
                        key={dayObj.day}
                        onClick={() => setActiveItineraryDay(dayObj.day)}
                        className={`py-1.5 px-3.5 rounded-lg text-xs font-bold font-sans transition-all shrink-0 cursor-pointer border ${
                          activeItineraryDay === dayObj.day
                            ? 'bg-[#2a9bbc] border-[#2a9bbc] text-white shadow-[0_4px_15px_rgba(42,155,188,0.25)]'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Day {dayObj.day}
                      </button>
                    ))}
                  </div>

                  {/* Active Itinerary content Card */}
                  <div className="bg-white rounded-xl p-4 border border-slate-150 shadow-inner mt-4 min-h-[160px] flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] bg-slate-50 text-slate-500 border border-slate-150 font-bold py-0.5 px-2.5 rounded font-sans uppercase">
                        DAY {activeItineraryDay} OF {selectedPackage.itinerary.length}
                      </span>
                      <h5 className="font-display font-bold text-sm sm:text-base text-slate-950 mt-3 leading-snug">
                        {selectedPackage.itinerary.find((d) => d.day === activeItineraryDay)?.title}
                      </h5>
                      <p className="text-slate-600 text-xs sm:text-sm font-sans mt-2 leading-relaxed">
                        {selectedPackage.itinerary.find((d) => d.day === activeItineraryDay)?.details}
                      </p>
                    </div>

                    <div className="flex justify-end pt-4 gap-1.5 select-none text-[11px]">
                      <button
                        disabled={activeItineraryDay === 1}
                        onClick={() => setActiveItineraryDay((p) => p - 1)}
                        className="py-1 px-3.5 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 disabled:hover:bg-slate-50 font-bold cursor-pointer"
                      >
                        Prev Day
                      </button>
                      <button
                        disabled={activeItineraryDay === selectedPackage.itinerary.length}
                        onClick={() => setActiveItineraryDay((p) => p + 1)}
                        className="py-1 px-3.5 rounded bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 disabled:opacity-40 disabled:hover:bg-slate-50 font-bold cursor-pointer"
                      >
                        Next Day
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with instant trigger quote */}
            <div className="bg-slate-50 p-5 shrink-0 flex flex-col sm:flex-row justify-between items-center border-t border-slate-150 gap-4">
              <div className="flex gap-5 text-slate-500 text-xs text-center sm:text-left">
                <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                  <Phone className="w-4 h-4 text-[#2a9bbc]" />
                  <span>Call Hotline: +91 99957 30044</span>
                </div>
                <div className="flex items-center gap-1.5 font-semibold text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 inline-block animate-ping" />
                  <span>Planners Online</span>
                </div>
              </div>

              <div className="flex gap-3 justify-end w-full sm:w-auto text-xs uppercase tracking-wide">
                <button
                  onClick={handleCloseDetails}
                  className="px-4 py-2.5 hover:bg-slate-150/40 rounded-lg font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer border border-transparent hover:border-slate-300"
                >
                  Close
                </button>
                <button
                  onClick={() => handleTriggerQuote(selectedPackage.title)}
                  className="px-5 py-3 bg-[#2a9bbc] hover:bg-[#1a7490] text-white font-black rounded-lg shadow-lg shadow-[#2a9bbc]/10 transition-all cursor-pointer inline-flex items-center gap-1.5"
                >
                  <span>Request Quote callback</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
