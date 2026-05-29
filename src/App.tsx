/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MessageSquare, ArrowUp, CheckCircle, Bell, Clock, Calendar, Check } from 'lucide-react';
import { EnquirySubmitData } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Custom toast notification states
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [submittedLeadList, setSubmittedLeadList] = useState<EnquirySubmitData[]>([]);
  const [showRecentNotification, setShowRecentNotification] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // Demo Notification Ticker of "Recent Bookings" to boost conversions
  const recentBookings = [
    { name: 'Suhail from Malappuram', action: 'booked Thailand Holiday Package', time: '5 mins ago' },
    { name: 'Praveen from Calicut', action: 'applied for UAE Schengen Visa slot assistance', time: '12 mins ago font-medium' },
    { name: 'Dr. Anjali S.', action: 'rescheduled flight tickets to UK', time: '30 mins ago' },
    { name: 'Safeer K.', action: 'reserved Kashmir Houseboat honeymooon package', time: '1 hour ago' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cycle recent bookings ticker notification to simulate real conversion boost
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowRecentNotification(true);
    }, 4000);

    const interval = setInterval(() => {
      setShowRecentNotification(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % recentBookings.length);
        setShowRecentNotification(true);
      }, 500);
    }, 14000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    
    // Smooth scroll to hero form container
    const element = document.getElementById('hero-lead-form-outer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const handleSelectPackage = (packageName: string) => {
    setSelectedService('Holiday Packages');
    
    // Inject custom package name directly into the destination field
    const destinationInput = document.getElementById('destination') as HTMLInputElement;
    if (destinationInput) {
      destinationInput.value = packageName;
      // Trigger native event simulation so state reacts is updated
      const event = new Event('input', { bubbles: true });
      destinationInput.dispatchEvent(event);
    }

    // Scroll to the lead-capture form
    const element = document.getElementById('hero-lead-form-outer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    setToastMessage(`Pre-selected tour: "${packageName}". Scroll down to submit!`);
    setTimeout(() => setToastMessage(null), 5000);
  };

  const handleEnquirySubmit = (data: EnquirySubmitData) => {
    setSubmittedLeadList((prev) => [data, ...prev]);
    setToastMessage(`Thank you ${data.name}! We have saved your callback request for ${data.service}.`);
    
    // Auto clear toast after 6 seconds
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-[#2a9bbc] selection:text-white relative overflow-x-hidden antialiased">
      {/* Dynamic Floating Toast Alerts */}
      {toastMessage && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-[#2a9bbc] text-white py-3 px-6 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 animate-bounce max-w-[90vw] md:max-w-lg">
          <Check className="w-5 h-5 shrink-0 bg-white/20 rounded-full p-0.5" />
          <span className="text-xs sm:text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Primary Sticky Header */}
      <Navbar onOpenEnquiry={() => handleSelectService('Holiday Packages')} />

      {/* Main Single Page Sections */}
      <main className="flex-grow pt-10">
        
        {/* Unit 1: HERO VIEW + FREE QUOTE FORM */}
        <Hero onSubmitEnquiry={handleEnquirySubmit} initialService={selectedService} />

        {/* Unit 2: PRESTIGE SERVICES GRID */}
        <Services onSelectService={handleSelectService} />

        {/* Unit 3: FEATURED PREMIUM PACKAGES */}
        <Packages onSelectPackage={handleSelectPackage} />

        {/* Unit 4: NARRATED ABOUT / WHY US ADULT CHECKPOINTS */}
        <WhyChooseUs />

        {/* Unit 5: REVIEWS SECTION */}
        <Reviews />

        {/* Unit 6: ACCORDION Q&A FAQ SECTION */}
        <FAQ />

      </main>

      {/* Primary Content-rich Footer */}
      <Footer />

      {/* FLOATING ACTION BADGES ROW (Exactly mirrors screenshot buttons) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end pointer-events-auto">
        {/* Scroll-To-Top chevron (As seen in Skybibo) */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="w-11 h-11 rounded-full bg-[#2a9bbc] hover:bg-[#2083a2]/90 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 duration-200 cursor-pointer"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-3" />
          </button>
        )}

        {/* Flying WhatsApp floating pill (As seen in Skybibo bottom right) */}
        <a
          href="https://wa.me/919995730044?text=Hi%20Dream%20Way%20Travels,%20I'm%20interested%20in%20obtaining%20a%20free%20itinerary%20quotation!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-transform hover:scale-110 duration-200 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.773 1.214h.005c5.504 0 9.989-4.478 9.99-9.986A9.974 9.974 0 0 0 12.012 2zm4.5 13.55c-.246.693-1.43 1.267-1.956 1.32-.475.05-1.096.084-1.74-.123a8.216 8.216 0 0 1-3.616-2.222 8.354 8.354 0 0 1-1.942-3.327c-.244-.75-.02-1.127.175-1.353.15-.175.33-.42.495-.626.166-.206.223-.33.33-.55.107-.22.053-.414-.027-.58-.08-.164-.717-1.728-.983-2.368-.258-.624-.52-.54-.717-.55-.185-.01-.397-.012-.61-.012a1.17 1.17 0 0 0-.846.395c-.292.32-.112 1.216.561 2.535a5.556 5.556 0 0 0 1.144 1.76c.725.803 1.485 1.457 2.455 1.943.473.237.935.344 1.3.415.54.103 1.26.068 1.716-.002.503-.075 1.545-.63 1.764-1.24.22-.61.22-1.135.155-1.246-.064-.11-.237-.175-.503-.306z" />
          </svg>
        </a>
      </div>

      {/* HIGH-CONVERTING CONVERSION ALERTS Ticker overlay (bottom-left) */}
      <div className="fixed bottom-6 left-6 z-40 max-w-[280px] pointer-events-none hidden sm:block">
        <div
          className={`bg-slate-900 text-slate-100 p-3 rounded-xl border border-slate-800 shadow-2xl flex gap-3 items-center transition-all duration-500 transform ${
            showRecentNotification ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-[#2a9bbc]/10 text-[#2a9bbc] flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="text-[10px] text-[#2a9bbc] font-bold tracking-wider uppercase">Recent Activity</div>
            <div className="text-[11px] font-sans text-slate-200 mt-0.5 leading-snug">
              <span className="font-semibold text-slate-100">{recentBookings[tickerIndex].name}</span>{' '}
              {recentBookings[tickerIndex].action}
            </div>
            <div className="text-[9px] text-slate-400 mt-1 uppercase font-mono">
              {recentBookings[tickerIndex].time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
