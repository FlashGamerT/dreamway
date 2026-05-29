/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TravelService, Review, FAQItem } from './types';

export const SERVICES_DATA: TravelService[] = [
  {
    id: 'flights',
    title: 'Flight Ticketing',
    description: 'Instant flight bookings (International & Domestic). Best discounted fares on Air India, Indigo, Emirates, flydubai, Saudia, and more.',
    longDescription: 'We provide premium ticketing services for all major airlines worldwide. Thanks to our proximity to CCJ Calicut International Airport, we process urgent seat allocations, corporate group discounts, and immediate transit tickets at the absolute best industry prices.',
    iconName: 'PlaneTakeoff',
    features: ['Instant Booking confirmation', 'Lowest GCC flight fares', 'Urgent date change & flight rebooking', 'Group reservation discounts']
  },
  {
    id: 'visas',
    title: 'Visa Assistance',
    description: 'High success rate slots assistance for Saudi Arabia, UAE, Oman, Schengen, US, UK, and global visas.',
    longDescription: 'Our professional visa processing officers track biometrics, verify application documents, arrange urgent consulate slots, and provide direct visa guidance out of our Kondotty main desk.',
    iconName: 'FileText',
    features: ['Gulf tourist & employment visa experts', 'Schengen slot booking & paperwork help', 'US & UK visitor visa checklist prep', 'Urgent passport status tracking']
  },
  {
    id: 'hotels',
    title: 'Hotel Booking',
    description: 'Premium hotels and transit row stays next to airports and major destination circles worldwide.',
    longDescription: 'Direct network associations with 4-star and 5-star transit hotel rooms, ensuring absolute safety, verified hygiene, and prime locations near world hubs.',
    iconName: 'Hotel',
    features: ['Prime airport proximity stays', 'Early check-in & late checkout options', 'Flexible booking cancellations', 'Verified safety & hygiene standards']
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    description: 'Government-approved medical insurance for immediate visa slots, flight delays, or baggage loss.',
    longDescription: 'Get instant policy confirmations necessary for entry clearance or visa stamp processes, handling unexpected medical emergencies seamlessly.',
    iconName: 'Shield',
    features: ['Instant policy activation', 'Visa-compliant medical coverage', 'Lost baggage/passport aid', 'Cashless hospitalization network']
  },
  {
    id: 'support',
    title: 'CCJ Airport Helpdesk',
    description: 'Direct WhatsApp and hotline travel support desk located next to Calicut International Airport (CCJ).',
    longDescription: 'We possess local ground capability to resolve flight delays, re-route transits, process express re-bookings, or clear terminal documentation gaps 24 hours a day.',
    iconName: 'Headphones',
    features: ['24/7 immediate call & WhatsApp support', 'Kondotty walk-in desk', 'Urgent baggage/flight update track', 'Direct CCJ Airport assistance']
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev1',
    name: 'Abdul Latheef',
    category: 'Jeddah Flight Ticket',
    rating: 5,
    text: '"I needed a flight ticket to Jeddah urgently for an emergency re-entry. Dream Way Travels arranged my flight ticket under 30 minutes at a price far lower than other online rates. Excellent service."',
    avatarText: 'A',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    tripName: 'Flight Ticketing Service'
  },
  {
    id: 'rev2',
    name: 'Sharafudheen S.',
    category: 'UAE Visa & Fly Assist',
    rating: 5,
    text: '"The visa team at their Kondotty office processed my Saudi visa slot and paperwork extremely cleanly. Very transparent and helpful team. Best in Malappuram!"',
    avatarText: 'S',
    avatarColor: 'bg-amber-100 text-amber-700',
    tripName: 'Visa Assistance Desk'
  },
  {
    id: 'rev3',
    name: 'Dr. Shahir K.',
    category: 'London Flight Date Change',
    rating: 5,
    text: '"Due to transit disruptions with British Airways, I got stranded with date changes. I contacted Dream Way support at 11 PM and they rescheduled everything, including baggage, in minutes. Extremely reliable support!"',
    avatarText: 'D',
    avatarColor: 'bg-sky-100 text-sky-700',
    tripName: '24/7 Ticketing Helpdesk'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'How fast can you book an urgent flight ticket?',
    answer: 'We can issue and confirm flight tickets instantly! For immediate travel requests, please call our hotline +91 99957 30044 directly to grab active seat inventories.'
  },
  {
    id: 'faq2',
    question: 'Where is your main office? Do we need to visit physically?',
    answer: 'Our main office is located right in Kondotty (Malappuram, Kerala), just 5 minutes from Calicut International Airport (CCJ). However, no visit is necessary! Over 95% of our ticketing and visa document scans are securely handled over WhatsApp and email for your convenience.'
  },
  {
    id: 'faq3',
    question: 'Do you provide date changes, re-bookings, and cancellation updates?',
    answer: 'Yes! We handle full flight-life support, including prompt date modifications, custom meal or extra baggage booking, and smooth transit visa assistance.'
  },
  {
    id: 'faq4',
    question: 'What is the success rate for GCC/Schengen urgent slot bookings?',
    answer: 'We maintain over a 99% track record in Gulf slot matching. Our consultants guide your documents thoroughly to avoid any visa entry delays.'
  }
];
