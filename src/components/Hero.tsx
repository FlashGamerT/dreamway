/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Phone, Star, Send, ShieldAlert, BadgeCheck, CheckCircle2 } from 'lucide-react';
import { EnquirySubmitData } from '../types';

interface HeroProps {
  onSubmitEnquiry: (data: EnquirySubmitData) => void;
  initialService?: string;
}

const HERO_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=1920',
    title: 'Instantly Book Flights Worldwide',
    location: 'Calicut Int Airport CCJ Direct Ticketing Desk'
  },
  {
    image: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=1920',
    title: 'Expert Visa Assistance & Slots',
    location: 'GCC, Schengen, USA, and UK documentation'
  },
  {
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&q=80&w=1920',
    title: 'Your Trusted Airport Travel Partner',
    location: '15+ Years Excellence in Kondotty, Kerala'
  }
];

export const Hero: React.FC<HeroProps> = ({ onSubmitEnquiry, initialService = '' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState<EnquirySubmitData>({
    name: '',
    phone: '',
    service: initialService,
    destination: '',
    date: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [phoneError, setPhoneError] = useState('');

  // Auto-fading slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Update initialService when it changes
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'phone') {
      if (value && !/^\d{10}$/.test(value.replace(/\D/g, ''))) {
        setPhoneError('Please enter a valid 10-digit mobile number');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verification
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setPhoneError('Valid 10-digit phone number is required');
      return;
    }

    setIsSubmitting(true);

    // Simulate database submission network trip
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      onSubmitEnquiry(formData);

      // Reset form variables
      setFormData({
        name: '',
        phone: '',
        service: '',
        destination: '',
        date: ''
      });

      // Clear success badge after duration
      setTimeout(() => setSubmitSuccess(false), 8000);
    }, 1500);
  };

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center pt-24 px-4 md:px-8 overflow-hidden bg-[#0A0F1D]" id="page-hero">
      {/* Dynamic Background Slideshow */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 z-0 transition-opacity duration-1500 ease-in-out ${
            idx === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Overlay Darkener with rich luxury deep space cobalt gradients */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#0A0F1D]/90 to-sky-950/45 z-10" />
          <div className="absolute inset-0 z-10 opacity-20" style={{ backgroundImage: "radial-gradient(#38bdf8 0.6px, transparent 0.6px)", backgroundSize: "24px 24px" }} />
          <img
            src={slide.image}
            alt={slide.location}
            className="w-full h-full object-cover object-center scale-102"
            referrerPolicy="no-referrer"
          />
        </div>
      ))}

      {/* Hero content items */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-center py-10">
        {/* Left Headline Column */}
        <div className="lg:col-span-7 text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-500/10 border border-sky-500/25 rounded-full text-sky-400 text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-2 shadow-[0_0_15px_rgba(56,189,248,0.15)]">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            <span>Rated 5/5 Stars by over 1,500+ Travelers</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-white tracking-tight leading-[1.05]">
            {HERO_SLIDES[currentSlide].title.split(' ').map((word, i) => {
              if (word.toLowerCase() === 'perfection' || word.toLowerCase() === 'world') {
                return (
                  <span key={i} className="text-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                    {word}{' '}
                  </span>
                );
              }
              return word + ' ';
            })}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 font-sans max-w-xl leading-relaxed">
            Premium Ticketing Services & Air Travel Assistance. Book discounted flight tickets to Middle East/GCC, Europe, US, UK, and Far East instantly with 24/7 client desk backup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/919995730044?text=Hi%20Dream%20Way%20Travels,%20I'm%20looking%20to%20book/reschedule%20flight%20tickets%20urgently!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-8 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.3)] hover:shadow-[0_4px_25px_rgba(34,197,94,0.5)] border border-green-550/35 transition-all duration-300 font-sans text-xs sm:text-sm text-center uppercase tracking-wider"
            >
              WhatsApp Enquiry Desk
            </a>
            <a
              href="tel:+919995730044"
              className="inline-flex items-center justify-center gap-2.5 py-3 px-8 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white hover:text-[#2a9bbc] font-semibold rounded-full border border-slate-800 transition-all duration-300 font-sans text-xs sm:text-sm text-center uppercase tracking-wider"
            >
              <Phone className="w-4 h-4 text-[#2a9bbc]" />
              <span>Call Us: +91 99957 30044</span>
            </a>
          </div>

          {/* Quick Stats Badges inside Hero */}
          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800/80 max-w-lg hidden sm:grid">
            <div className="space-y-1">
              <span className="block text-2xl font-extrabold font-display text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">15+ Years</span>
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Industry Excellence</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-extrabold font-display text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">99.8%</span>
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Visa Success Ratio</span>
            </div>
            <div className="space-y-1">
              <span className="block text-2xl font-extrabold font-display text-sky-400 drop-shadow-[0_0_10px_rgba(56,189,248,0.2)]">24/7 Desk</span>
              <span className="block text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Ongoing Support</span>
            </div>
          </div>
        </div>

        {/* Right Feature Callback Capture Form (High-Converting) */}
        <div className="lg:col-span-5 relative" id="hero-lead-form-outer">
          {submitSuccess ? (
            <div className="bg-slate-900/95 backdrop-blur-lg rounded-2xl p-8 border border-green-500/30 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center space-y-5 min-h-[460px]">
              {/* Confetti decoration mock */}
              <div className="absolute top-0 w-full h-1.5 bg-green-500 animate-pulse" />
              <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold font-display">Enquiry Submitted!</h3>
              <p className="text-slate-200 text-sm leading-relaxed max-w-sm">
                We have received your request successfully. One of our senior travel planners in Kondotty will contact you shortly over WhatsApp/Call for a FREE quotation details.
              </p>
              <div className="p-3 bg-slate-800/80 rounded-lg text-xs space-y-1 w-full max-w-xs text-left border border-slate-700">
                <div className="text-slate-400">Representative assigning:</div>
                <div className="font-semibold text-slate-100 flex justify-between">
                  <span>Mr. Jaleel (Travel Head)</span>
                  <span className="text-green-400">● Live Online</span>
                </div>
              </div>
              <button
                onClick={() => setSubmitSuccess(false)}
                className="text-slate-400 hover:text-white text-xs underline cursor-pointer"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 text-slate-900 shadow-2xl">
              <div className="flex justify-between items-center pb-5 border-b border-slate-150 mb-6">
                <div>
                  <h3 className="text-lg font-extrabold font-display text-slate-900 tracking-tight leading-none">Request a Quote</h3>
                  <p className="text-xs text-slate-500 mt-1.5">Response time under 15 minutes</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1" htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg py-2.5 px-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/80 transition-shadow font-sans"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1" htmlFor="phone">Phone Number (WhatsApp Preferred)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +91 99957 30044"
                    required
                    className={`w-full bg-slate-50 border ${
                      phoneError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-sky-500/80'
                    } text-slate-900 rounded-lg py-2.5 px-3 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 transition-shadow font-sans`}
                  />
                  {phoneError && (
                    <p className="text-red-500 text-[10px] mt-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" />
                      <span>{phoneError}</span>
                    </p>
                  )}
                </div>

                {/* Service required */}
                <div>
                  <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1" htmlFor="service">Service Needed</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a9bbc]/80 transition-shadow font-sans cursor-pointer"
                  >
                    <option value="" disabled>Select Service...</option>
                    <option value="Flight Ticketing">International/Domestic Flights</option>
                    <option value="Visa Assistance">Visa Assistance (Schengen/US/Gulf)</option>
                    <option value="Hotel Bookings">Premium Hotel Transit Bookings</option>
                    <option value="Travel Insurance">Comprehensive Travel Insurance</option>
                  </select>
                </div>

                {/* Destination & Date Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1" htmlFor="destination">Destination</label>
                    <input
                      type="text"
                      id="destination"
                      name="destination"
                      value={formData.destination}
                      onChange={handleInputChange}
                      placeholder="e.g. Thailand"
                      className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-lg py-2 px-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/80 transition-shadow font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1" htmlFor="date">Travel Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 text-slate-700 rounded-lg py-2 px-3 text-xs focus:outline-none focus:ring-2 focus:ring-sky-500/80 transition-shadow font-sans"
                    />
                  </div>
                </div>

                {/* CTA action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 uppercase tracking-widest shadow-lg shadow-sky-600/20 active:scale-[0.98] cursor-pointer mt-2"
                  id="lead-submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Get Expert Callback</span>
                    </>
                  )}
                </button>
              </form>

              {/* Bottom badge within form */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex justify-between items-center text-[10px] text-slate-500">
                <span className="font-bold uppercase tracking-wider">24/7 VIP Support</span>
                <div className="flex items-center gap-1.5 font-bold text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
                  <span>Online Now</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
