/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { AIChatButton } from "./components/AIChatButton";
import { ArrowUp, Clock, Check, PhoneCall } from "lucide-react";
import { EnquirySubmitData } from "./types";

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Custom toast notification states
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showRecentNotification, setShowRecentNotification] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);

  // CCJ airport flight focus notification ticker
  const recentBookings = [
    { name: "Suhail from Malappuram", action: "booked return flight tickets to Jeddah (JED)", time: "5 mins ago" },
    { name: "Praveen from Calicut", action: "secured Saudi Arabia urgent visaProcessing slot", time: "12 mins ago" },
    { name: "Mrs. Saleema from Kondotty", action: "booked Emirates flight ticket to Dubai (DXB)", time: "25 mins ago" },
    { name: "Dr. Anjali S.", action: "rescheduled flight flights to London Heathrow (LHR)", time: "40 mins ago" },
    { name: "Safeer K.", action: "granted family visit visa slot for Sultanate of Oman", time: "1 hour ago" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycle high converting activity ticker
  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowRecentNotification(true);
    }, 4500);

    const interval = setInterval(() => {
      setShowRecentNotification(false);
      setTimeout(() => {
        setTickerIndex((prev) => (prev + 1) % recentBookings.length);
        setShowRecentNotification(true);
      }, 500);
    }, 12000);

    return () => {
      clearTimeout(showTimer);
      clearInterval(interval);
    };
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    
    // Smooth scroll to lead form container
    const element = document.getElementById("hero-lead-form-outer");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleEnquirySubmit = (data: EnquirySubmitData) => {
    setToastMessage(`Request Saved! Our agent will contact you soon for the service: "${data.service || "Flight Booking"}"`);
    
    // Clear toast
    setTimeout(() => {
      setToastMessage(null);
    }, 5000);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
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
      <Navbar onOpenEnquiry={() => handleSelectService("Flight Ticketing")} />

      {/* Main Single Page Sections */}
      <main className="flex-grow pt-10">
        
        {/* Unit 1: HERO VIEW + FREE FLIGHT QUOTE FORM */}
        <Hero onSubmitEnquiry={handleEnquirySubmit} initialService={selectedService} />

        {/* Unit 2: PRESTIGE SERVICES GRID (Center Flight and Visa Slot booking) */}
        <Services onSelectService={handleSelectService} />

        {/* Unit 3: NARRATED ABOUT / WHY US CHECKPOINTS */}
        <WhyChooseUs />

        {/* Unit 4: REVIEWS SECTION */}
        <Reviews />

        {/* Unit 5: ACCORDION FAQs SECTION */}
        <FAQ />

      </main>

      {/* Primary Content-rich Footer */}
      <Footer />

      {/* FLOATING ACTION BADGES ROW (Clean layouts linking to Helplines & AI Chatbot) */}
      <div className="fixed bottom-6 right-6 z-45 flex flex-col gap-3.5 items-end pointer-events-auto">
        {/* Scroll-To-Top chevron */}
        {showScrollTop && (
          <button
            onClick={handleScrollTop}
            className="w-11 h-11 rounded-full bg-slate-900 hover:bg-slate-800 text-white flex items-center justify-center shadow-lg transition-all cursor-pointer border border-slate-800"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 stroke-3" />
          </button>
        )}

        {/* Direct Call hotline button */}
        <a
          href="tel:+919995730044"
          className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#2a9bbc] to-indigo-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-transform hover:scale-105 duration-200 cursor-pointer border border-white/10"
          title="Direct Phone Call hotline"
        >
          <PhoneCall className="w-5.5 h-5.5" />
        </a>

        {/* flying WhatsApp pill */}
        <a
          href="https://wa.me/919995730044?text=Hi%20Dream%20Way%20Travels,%20I'm%20interested%20in%20obtaining%20an%20urgent%20flight%20fare%20quotation!"
          target="_blank"
          rel="noopener noreferrer"
          className="w-13 h-13 rounded-full bg-green-500 hover:bg-green-600 text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-transform hover:scale-110 duration-200 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.963L2 22l5.233-1.372a9.948 9.948 0 0 0 4.773 1.214h.005c5.504 0 9.989-4.478 9.99-9.986A9.974 9.974 0 0 0 12.012 2zm4.5 13.55c-.246.693-1.43 1.267-1.956 1.32-.475.05-1.096.084-1.74-.123a8.216 8.216 0 0 1-3.616-2.222 8.354 8.354 0 0 1-1.942-3.327c-.244-.75-.02-1.127.175-1.353.15-.175.33-.42.495-.626.166-.206.223-.33.33-.55.107-.22.053-.414-.027-.58-.08-.164-.717-1.728-.983-2.368-.258-.624-.52-.54-.717-.55-.185-.01-.397-.012-.61-.012a1.17 1.17 0 0 0-.846.395c-.292.32-.112 1.216.561 2.535a5.556 5.556 0 0 0 1.144 1.76c.725.803 1.485 1.457 2.455 1.943.473.237.935.344 1.3.415.54.103 1.26.068 1.716-.002.503-.075 1.545-.63 1.764-1.24.22-.61.22-1.135.155-1.246-.064-.11-.237-.175-.503-.306z" />
          </svg>
        </a>

        {/* Small intelligent AI Chat button container */}
        <AIChatButton />
      </div>

      {/* Conversion dynamic alerts ticker */}
      <div className="fixed bottom-6 left-6 z-40 max-w-[280px] pointer-events-none hidden sm:block">
        <div
          className={`bg-slate-900 text-slate-100 p-3 rounded-xl border border-slate-800 shadow-2xl flex gap-3 items-center transition-all duration-500 transform ${
            showRecentNotification ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-[#2a9bbc]/10 text-[#2a9bbc] flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4 animate-spin-slow" />
          </div>
          <div>
            <div className="text-[10px] text-[#2a9bbc] font-bold tracking-wider uppercase">Airport Booking Live Feed</div>
            <div className="text-[11px] font-sans text-slate-200 mt-0.5 leading-snug">
              <span className="font-semibold text-slate-100">{recentBookings[tickerIndex].name}</span>{" "}
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
