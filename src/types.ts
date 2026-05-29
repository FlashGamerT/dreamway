/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface TravelService {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
}

export interface DestinationPackage {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  image: string;
  category: 'Bestseller' | 'International' | 'Domestic' | 'Adventure' | 'Heritage' | 'Culture' | 'City';
  duration: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviewsCount: number;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    details: string;
  }[];
  inclusions: string[];
  exclusions: string[];
}

export interface Review {
  id: string;
  name: string;
  category: string;
  rating: number;
  text: string;
  avatarText: string;
  avatarColor: string;
  tripName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface EnquirySubmitData {
  name: string;
  phone: string;
  service: string;
  destination: string;
  date: string;
  notes?: string;
}
