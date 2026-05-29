/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TravelService, DestinationPackage, Review, FAQItem } from './types';

export const SERVICES_DATA: TravelService[] = [
  {
    id: 'flights',
    title: 'Flight Ticketing',
    description: 'Best deals on domestic and international flights. Rescheduling and cancellation support included.',
    longDescription: 'We provide comprehensive ticketing services for all major airlines worldwide. Our direct integration with global sales networks lets us acquire discounted corporate rates and exclusive group discounts that you cannot find online.',
    iconName: 'PlaneTakeoff',
    features: ['Instant Booking confirmation', '24-hour rescheduling window', 'Complimentary web check-in', 'Corporate fare access']
  },
  {
    id: 'visas',
    title: 'Visa Assistance',
    description: 'High success rate for Gulf, Schengen, USA, UK, and global tourist/business visas.',
    longDescription: 'Navigating visa applications can be daunting. Our seasoned visa experts in our Kondotty office assist in document curation, application preparation, interview slots, and submission, ensuring a seamless and high-success processing cycle.',
    iconName: 'FileText',
    features: ['Gulf tourist & employment visa experts', 'Detailed documentation review', 'Schengen & UK/US visa checklist preparation', 'Urgent passport status tracking']
  },
  {
    id: 'holidays',
    title: 'Holiday Packages',
    description: 'From budget to luxury, family trips, honeymoons, and historical group tours perfectly customized.',
    longDescription: 'Whether planning a quick weekend escape or an extensive multi-country continental tour, we design customized itineraries centered around your interests, rhythm, budget, and culinary tastes.',
    iconName: 'Palmtree',
    features: ['Tailor-made private itineraries', 'Family-friendly excursions', 'Luxury couples honeymoon hampers', 'Local expert guides included']
  },
  {
    id: 'hotels',
    title: 'Hotel Booking',
    description: 'Exclusive rates on hotels worldwide. We ensure safety, hygiene, and prime locations in every stay.',
    longDescription: 'Get access to curated lists of top-rated hotels, boutique resorts, and premium villas. Every hotel we recommend is rigorously checked for cleanliness, accessibility, and high quality of service.',
    iconName: 'Hotel',
    features: ['Handpicked premium accommodation', 'Complementary breakfast upgrades', 'Late checkout flexibility options', 'Flexible cancellation policies']
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    description: 'Comprehensive coverage for medical emergencies, lost baggage, flight delays, and trip interruptions.',
    longDescription: 'Secure your medical and luggage security before flying. Our travel medical coverage handles full emergency outpatient/inpatient expenses, delayed bag assistance, and lost travel document costs.',
    iconName: 'Shield',
    features: ['Global emergency support cover', 'Lost luggage compensation', 'Pre-existing illness emergency buffer', 'Cashless medical networks']
  },
  {
    id: 'support',
    title: '24/7 Support',
    description: 'Our dedicated team is available around the clock via phone and WhatsApp to assist you.',
    longDescription: 'Never travel alone. From flight changes, ground transits, hotel check-in complications, or instant medical requirements, our team is alert in Malappuram and at international desks to resolve queries instantly.',
    iconName: 'Headphones',
    features: ['Real humans on WhatsApp/call', 'Midnight flight rescheduling', 'Instant emergency booking advice', 'Active transit monitoring']
  }
];

export const PACKAGES_DATA: DestinationPackage[] = [
  {
    id: 'thailand',
    title: 'Amazing Thailand Getaway',
    subtitle: 'Bangkok, Pattaya, & Phuket Special',
    location: 'Bangkok, Pattaya, Phuket',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=800',
    category: 'Bestseller',
    duration: '5 Nights / 6 Days',
    price: '₹24,999',
    originalPrice: '₹32,000',
    rating: 4.9,
    reviewsCount: 148,
    description: 'Immerse yourself in cultural marvels, golden temples, happening night-flea markets, and serene beaches in Pattaya and Phuket.',
    highlights: ['Scenic Coral Island speedboat cruise with Indian lunch', 'Exciting Bangkok City & Temple tour (Wat Traimit & Wat Pho)', 'Safari World and Marine Park full-day excursion', 'Private airport-hotel ground transfers'],
    inclusions: [
      '3-star / 4-star handpicked hotel accommodation',
      'Daily delicious buffet breakfast',
      'Coral Island tour with premium speedboat',
      'Experienced English/Malayalm-speaking local tour guide',
      'All airport transits in clean, private A/C vehicles'
    ],
    exclusions: [
      'Visa fees (Visa-on-arrival or E-visa costs)',
      'International flight tickets (available on request at lowest rates)',
      'Personal expenses (laundry, shopping, alcohol)',
      'Any peak season surcharge'
    ],
    itinerary: [
      { day: 1, title: 'Arrival at Bangkok & Private Transfer to Pattaya', details: 'Arrive at Suvarnabhumi Airport. Greet our premium driver, and take an A/C transfer to your beachfront Pattaya hotel. Free evening to explore famous walking streets.' },
      { day: 2, title: 'Speedboat Coral Island Tour with Lunch', details: 'Sail on a thrilling speedboat to Coral Island. Indulge in parasailing, undersea walking, or relaxation, followed by a delicious hot lunch.' },
      { day: 3, title: 'Transfer to Bangkok & City Temple Tour', details: 'Check out and drive back to Bangkok. Route through majestic golden temples including Wat Traimit (Golden Buddha) and Wat Pho. Relaxing hotel check-in.' },
      { day: 4, title: 'Safari World & Marine Park Excursion', details: 'Explore a full day of stunt shows, orangutan boxing, dolphin choreography, and a driving safari amidst wild animals.' },
      { day: 5, title: 'Phuket Flight & Scenic Sunset Beach walk', details: 'Check out for a short flight to Phuket. Spend your evening bathing in the warm golden rays of Patong Beach.' },
      { day: 6, title: 'Phuket Departure', details: 'Pack up sweet souvenirs. Enjoy private A/C airport transit for your journey back to Calicut Airport.' }
    ]
  },
  {
    id: 'malaysia',
    title: 'Vibrant Malaysia Experience',
    subtitle: 'Kuala Lumpur & Langkawi Explorer',
    location: 'Kuala Lumpur, Langkawi',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc15a51c?auto=format&fit=crop&q=80&w=800',
    category: 'International',
    duration: '4 Nights / 5 Days',
    price: '₹21,500',
    originalPrice: '₹28,000',
    rating: 4.8,
    reviewsCount: 92,
    description: 'Explore the state-of-the-art heights of the Petronas Towers and deep spiritual steps of Batu Caves, followed by quiet tropical islands.',
    highlights: ['Visit Batu Caves, Genting Highlands, and cable car rides', 'Kuala Lumpur City Tour (Petronas, King Palace, National Mosque)', 'Langkawi Island hopping and Mangrove yacht cruise', 'All entry tickings and airport transfers'],
    inclusions: [
      'Premium hotel stay with daily breakfast',
      'Genting Highlands day package with cable car tickets',
      'Langkawi private boat tour',
      'All luxury road transits as per itinerary',
      'Friendly local Malayalam / English host'
    ],
    exclusions: [
      'Tourist visa fee (processed easily by our desk)',
      'Meals not specified under inclusions',
      'Tourism tax (approx. MYR 10 per room/night)',
      'Travel insurance cover (available through our service)'
    ],
    itinerary: [
      { day: 1, title: 'Welcome to Kuala Lumpur', details: 'Land in KLIA. Private meet & greet, followed by hotel transfer. Relax and explore the culinary delights of Bukit Bintang.' },
      { day: 2, title: 'Batu Caves & Genting Highlands Full-Day Tour', details: 'Climb the majestic steps of Batu Caves. Board the Awana Skyway cable car to Genting Highlands. Explore casino-hotels and high-altitude theme parks.' },
      { day: 3, title: 'KL Landmark City Tour & Flight to Langkawi', details: 'Capture pictures at Petronas Towers, King Palace, Merdeka Square. Transit to airport for scenic island flight to Langkawi.' },
      { day: 4, title: 'Island Hopping & Eagle Feeding Island Tour', details: 'Embark on a private speedboat to Beras Basah Island, witness beautiful eagles feeding, and swim in the unique freshwater lake of Pregnant Maiden.' },
      { day: 5, title: 'Departure with Beautiful Memories', details: 'Collect your duty-free chocolates in Langkawi. Drive to the airport for your return flight home.' }
    ]
  },
  {
    id: 'kashmir',
    title: 'Paradise of Kashmir Valley',
    subtitle: 'Srinagar, Gulmarg, & Pahalgam Odyssey',
    location: 'Srinagar, Gulmarg, Pahalgam',
    image: 'https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?auto=format&fit=crop&q=80&w=800',
    category: 'Domestic',
    duration: '5 Nights / 6 Days',
    price: '₹18,999',
    originalPrice: '₹25,000',
    rating: 4.9,
    reviewsCount: 205,
    description: 'Experience pure heaven with Kashmiri houseboats on Dal Lake, meadow walks in Gulmarg, and mountain rapids in Pahalgam.',
    highlights: ['One-night luxury wooden Houseboat stay on Dal Lake', 'Traditional Shikara ride with floating garden excursions', 'Gondola cable car ride in snowy Gulmarg (Phase 1 included)', 'Stroll through historical Shalimar & Nishat Mughal Gardens'],
    inclusions: [
      '1 Night in Premium Dal Lake Houseboat',
      '4 Nights in highly rated central heating hotels',
      'Daily breakfast & dinner (MAP plan)',
      'Shikara ride on Dal Lake',
      'Private transport in comfortable Sedan (Innova/Etios)'
    ],
    exclusions: [
      'Flight tickets to Srinagar Airport',
      'Horse/Pony rides in Pahalgam/Gulmarg',
      'Aru Valley & Betaab Valley custom local cab hire outside of standard itinerary',
      'Gulmarg Gondola Phase 2 tickets'
    ],
    itinerary: [
      { day: 1, title: 'Srinagar Airport Arrival & Houseboat Check-in', details: 'Welcome to Srinagar. Board your ornate wooden houseboat. Enjoy a peaceful sunset Shikara ride across the lotus-filled Dal Lake.' },
      { day: 2, title: 'Srinagar Sightseeing: Gardens & Lakes', details: 'Tour the sprawling Mughal gardens (Nishat Bagh, Shalimar Bagh), Chashme Shahi, and the towering Shankaracharya Temple overlooking the city.' },
      { day: 3, title: 'Srinagar to Gulmarg Day Trip (Ski Resort)', details: 'Drive to the majestic Meadows of Flowers. Ride the high-altitude Gulmarg Gondola (Asia’s highest cable car) up to the snow points of Phase 1.' },
      { day: 4, title: 'Srinagar to Scenic Pahalgam Valley (Valley of Shepherds)', details: 'Drive past Saffron fields and pine forests into Pahalgam. Visit the cascading Lidder River and serene walk pathways.' },
      { day: 5, title: 'Excursion to Betaab Valley & Chandanwari', details: 'Take local mountain-certified green cabs to stunning movie location Betaab Valley and Chandanwari glacier point.' },
      { day: 6, title: 'Departure Srinagar Airport', details: 'Delight in buying fresh Kashmiri walnuts and apple baskets, then board your homeward-bound private airport cab.' }
    ]
  },
  {
    id: 'manali',
    title: 'Snowy Manali & Solang Adventure',
    subtitle: 'Solang Valley, Shimla, & Rohtang Pass',
    location: 'Manali, Shimla',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800',
    category: 'Adventure',
    duration: '6 Nights / 7 Days',
    price: '₹14,499',
    originalPrice: '₹19,500',
    rating: 4.7,
    reviewsCount: 88,
    description: 'Challenging snow cliffs, paragliding, natural hot water springs, and romantic pine valley views in Himachal.',
    highlights: ['Breathtaking Solang Valley paragliding and skiing', 'Drive through the iconic Atal Tunnel to Lahaul Valley', 'Mall Road shopping in Shimla and Manali', 'Vashisht Hot Springs and Hadimba Forest temple visit'],
    inclusions: [
      'Deluxe hotel stays in central Shimla & Manali',
      'Daily breakfast & dinner included',
      'Full private car with professional driver',
      'Solang Valley guidance team',
      'All toll, fuel, and municipal taxes'
    ],
    exclusions: [
      'Rohtang Pass permission charges (mandatory by green council)',
      'Adventure activity tickets (paragliding, skiing, zorbing)',
      'Lunch orders and personal shopping'
    ],
    itinerary: [
      { day: 1, title: 'Delhi/Chandigarh to Shimla Private Drive', details: 'Gently wind up into the lush outer Himalayas with a scenic drive past orchards into beautiful Shimla. Peaceful overnight rest.' },
      { day: 2, title: 'Shimla Ridge Walk & Kufri Snow Point', details: 'Travel to Kufri for fun mountain pony loops. Later, walk the traffic-free Ridge, Mall Road, and Christ Church.' },
      { day: 3, title: 'Shimla to Manali Valley Panoramic Journey', details: 'Breathtaking 250km valley drive tracking the turquoise Beas river. Pause at Kullu Shawl weaving mills and local rafting centers.' },
      { day: 4, title: 'Hadimba Temple & Manali Local Exploration', details: 'Visit the unique wooden pagoda Hadimba Temple in deep cedar forests. Take a relaxing natural mineral bath at hot springs of Vashisht village.' },
      { day: 5, title: 'Solang Adventure Valley & Atal Tunnel Ride', details: 'Engage in snowboarding or zip-lining at Solang. Drive through the famous engineering marvel, the 9.02km Atal Tunnel, to witness barren Spiti valley outlines.' },
      { day: 6, title: 'Excursion to Manikaran Gurudwara & Hot Springs (Optional)', details: 'Drive to peaceful Parvati valley, Manikaran hot springs, or enjoy leisure relaxation at Manali Mall road.' },
      { day: 7, title: 'Manali back to Delhi Departure', details: 'Indulge in a smooth drive back down parameters to Delhi airport for your return flight.' }
    ]
  },
  {
    id: 'goldentriangle',
    title: 'Heritage Golden Triangle',
    subtitle: 'Delhi, Agra, & Jaipur Royal Heritage',
    location: 'Delhi, Agra, Jaipur',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&q=80&w=800',
    category: 'Heritage',
    duration: '5 Nights / 6 Days',
    price: '₹16,800',
    originalPrice: '₹22,000',
    rating: 4.8,
    reviewsCount: 112,
    description: 'Walk inside the monumental corridors of Mughal royals and Jaipur Maharajas. Perfect history and architecture trip.',
    highlights: ['Watch golden Taj Mahal glow during serene sunrise', 'Tour massive red sandstone Amber Fort with audio guide', 'Old Delhi rickshaw ride past Jama Masjid and spice alleys', 'Stop at Hawa Mahal (Palace of Winds) and Jantar Mantar'],
    inclusions: [
      'Handpicked heritage class 4-star boutique hotel stays',
      'Daily curated traditional breakfasts',
      'Private air-conditioned Toyota sedan with expert driver',
      'Authorized multi-lingual monuments guide',
      'Rickshaw rides and entry fast-track support'
    ],
    exclusions: [
      'Monument entry tickets',
      'Lunch and dinner orders',
      'Camera fee parameters'
    ],
    itinerary: [
      { day: 1, title: 'Delhi Welcome & Monument Tour', details: 'Greet our team at Delhi Airport. Tour historical icons of New Delhi: Qutub Minar, Humayun Tomb, and the historic India Gate.' },
      { day: 2, title: 'Old Delhi Explorer & Drive to Agra (Taj City)', details: 'Dive into vibrant Old Delhi lanes, Jama Masjid. Later, drive down the speedway to Agra.' },
      { day: 3, title: 'Sunrise Taj Mahal & Agra Fort Tour', details: 'Behold the incredible monument of love, Taj Mahal, in misty amber sunrise. Later, explore the colossal Agra Fort before driving to Jaipur.' },
      { day: 4, title: 'Pink City Royal Jaunts', details: 'Climb into majestic hilltop Amber Fort. Tour Jaipur City Palace, Hawa Mahal, and the royal stellar sundial Jantar Mantar.' },
      { day: 5, title: 'Chokhi Dhani Ethnic Village Tour', details: 'Spend a colorful evening watching traditional Rajasthani dancers, camel rides, and tasting ethnic royal thali food.' },
      { day: 6, title: 'Jaipur to Delhi Departure Drive', details: 'Wrap up blue pottery, block-printed fabrics, and ride comfortably back to Delhi Airport for departure.' }
    ]
  },
  {
    id: 'rajasthan',
    title: 'Royal Lakes & Forts Rajasthan',
    subtitle: 'Jaipur, Udaipur, & Jodhpur Royalty Tour',
    location: 'Jaipur, Jodhpur, Udaipur',
    image: 'https://images.unsplash.com/photo-1477584308822-34c291357283?auto=format&fit=crop&q=80&w=800',
    category: 'Culture',
    duration: '6 Nights / 7 Days',
    price: '₹19,999',
    originalPrice: '₹26,000',
    rating: 4.9,
    reviewsCount: 76,
    description: 'Immerse yourself in Rajasthan’s blue houses, lakeside palaces, and massive desert architectures.',
    highlights: ['Romantic sunset boat row on Lake Pichola, Udaipur', 'Explore the muscular Mehrangarh Fort in blue Jodhpur', 'Rajasthan local musical folk-dance show ticket included', 'Detailed walking tours across classic pink Jaipur markets'],
    inclusions: [
      '6 Nights heritage hotels stays',
      'Daily breakfast buffet',
      'Private A/C SUV (Innova) on disposal tour duty',
      'Scenic boat tickets on Lake Pichola',
      'Bespoke royal welcome at hotels'
    ],
    exclusions: [
      'Monument entry fees',
      'Flights to Jaipur/Udaipur',
      'Custom safari vehicle rentals'
    ],
    itinerary: [
      { day: 1, title: 'Jaipur Arrival & Market Sights', details: 'Touch down in historic pink Jaipur. Check in to custom heritage haveli hotel. Evening stroll in Johari Bazaar.' },
      { day: 2, title: 'Amber Fort & Pink City Treasures', details: 'Visit Amer Fort and Hawa Mahal. Marvel at classical weapons inside the City Palace Museum.' },
      { day: 3, title: 'Jaipur to Blue City Jodhpur', details: 'Drive across the heart of Rajasthan to the Blue City, Jodhpur. Gaze at royal marble cenotaph Jaswant Thada.' },
      { day: 4, title: 'Mehrangarh Fort & Lake Pichola Transit', details: 'Tour the mammoth Mehrangarh Fort towering above Jodhpur lanes. Drive south through green Aravalli hills to Udaipur, the City of Lakes.' },
      { day: 5, title: 'Udaipur Lakeside Palaces & Jagdish Temple', details: 'Tour the magnificent City Palace flanking Lake Pichola. Take an elegant sunset group boat cruise past Lake Palace Resort.' },
      { day: 6, title: 'Saheliyon-ki-Bari & Ethnic Folk Dance', details: 'Stroll in the royal gardens of structural fountains, Saheliyon-ki-Bari. Watch puppets and traditional dancers at Bagore-ki-Haveli.' },
      { day: 7, title: 'Udaipur Departure', details: 'Indulge in sweet Mewari mathri shopping. Enjoy a private transfer to Udaipur Airport for departure.' }
    ]
  },
  {
    id: 'hyderabad',
    title: 'Nizami Heritage Hyderabad',
    subtitle: 'Charminar, Golconda Fort, & Ramoji Tourism',
    location: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1605130287448-8d92fc810491?auto=format&fit=crop&q=80&w=800',
    category: 'City',
    duration: '3 Nights / 4 Days',
    price: '₹11,999',
    originalPrice: '₹15,000',
    rating: 4.6,
    reviewsCount: 64,
    description: 'Indulge in high-speed audio guides inside historical fort ruins, world-famous biryanis, pearls shopping, and cinematic cities.',
    highlights: ['Golconda Fort Light and Sound evening show', 'Full-day unlimited entry pass to Ramoji Film City', 'Savour authentic Hyderabadi Biryani at paradise restaurants', 'Walk inside the spectacular Nizami palace, Chowmahalla'],
    inclusions: [
      'Premium boutique city hotel stay',
      'Daily delicious breakfast and 1 grand Nizami lunch',
      'Ramoji Film City premium tour tickets with transits',
      'Complimentary pearls buying market tour guide assistance',
      'A/C private transport on full tour coverage'
    ],
    exclusions: [
      'Flight/Train tickets to Hyderabad',
      'Personal ordering items',
      'In-fort buggy rental charges'
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Golconda Fort Light Show', details: 'Touch down at Hyderabad Airport. Check-in and relax. In the evening, explore ancient high-walled Golconda Fort ruins with majestic surround light & sound show.' },
      { day: 2, title: 'Full Day Ramoji Film City Magic', details: 'Explore the world’s largest integrated studio city. Ride movie buses, tour fantasy structures, vintage gardens, live stunt arenas, and theme park rides.' },
      { day: 3, title: 'Charminar, Laad Bazaar, & Chowmahalla Palace', details: 'Observe iconic Charminar towers. Walk the vibrant pearls corridor, Laad Bazaar. Marvel at Belgian crystal chandeliers in the royal Chowmahalla Palace.' },
      { day: 4, title: 'Salargunj Museum & Departure', details: 'See one-of-a-kind royal collections and clocks inside the famous museum. Airport transfer for your return flight.' }
    ]
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev1',
    name: 'Rahul & Family',
    category: 'Thailand Trip',
    rating: 5,
    text: '"Booked a family trip to Thailand with Dream Way Travels. The experience was seamless! From hotel transfers to food suggestions, everything was perfectly planned. Highly recommend them for family vacations."',
    avatarText: 'R',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    tripName: 'Amazing Thailand Getaway'
  },
  {
    id: 'rev2',
    name: 'Fathima S.',
    category: 'UAE Visa & Fly',
    rating: 5,
    text: '"I needed a UAE visa urgently for a job interview. The team at Dream Way Travels Kondotty office was super fast and got it processed in just 2 days. Very professional service and friendly staff."',
    avatarText: 'F',
    avatarColor: 'bg-amber-100 text-amber-700',
    tripName: 'Visa Assistance Service'
  },
  {
    id: 'rev3',
    name: 'Arjun Menon',
    category: 'Frequent Flyer',
    rating: 4.8,
    text: '"Best rates for flight tickets in Malappuram. Even when my flight got cancelled due to bad weather parameters, they helped me reschedule immediately at night. That 24/7 support is real!"',
    avatarText: 'A',
    avatarColor: 'bg-sky-100 text-sky-700',
    tripName: 'Flight Ticket & Reschedule'
  },
  {
    id: 'rev4',
    name: 'Dr. Shahir K.',
    category: 'Kashmir Luxury Family Tour',
    rating: 5,
    text: '"Our Kashmir tour was absolute perfection. The MAP hotel options were exceptionally hygienic with spectacular balcony views of snow. The driver, Mushtaq, was highly respectful and guide-certified. Dream Way is highly reliable!"',
    avatarText: 'S',
    avatarColor: 'bg-purple-100 text-purple-700',
    tripName: 'Paradise of Kashmir Valley'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Can I customize my holiday package according to my budget?',
    answer: 'Absolutely! We specialize in crafting individual tailor-made itineraries. You can modify hotels, cut or add tourist sights, choose specific car classes, and choose flight budgets matching your style.'
  },
  {
    id: 'faq2',
    question: 'What is the standard processing timeline for Gulf and Schengen tourist visas?',
    answer: 'Standard Gulf tourist visas (UAE, Saudi, Oman) are approved within 24 to 72 hours. Schengen visas typically require 10 to 15 working days following biometric submission, so we recommend planning 1 month in advance!'
  },
  {
    id: 'faq3',
    question: 'Where is your main office located? Do we need to visit physically?',
    answer: 'Our state-of-the-art flagship office is located right in Kondotty (Near Calicut International Airport), Malappuram district. However, you do NOT have to visit physically! Over 90% of our clients complete their tickets, hotel selections, and visa scans online over WhatsApp and secure digital emails.'
  },
  {
    id: 'faq4',
    question: 'What modes of payment does Dream Way Travels accept?',
    answer: 'We support highly secure UPI payments, Bank IMPS/RTGS Transfers, Google Pay, Credit/Debit cards, and physical cash deposits at our Kondotty office.'
  },
  {
    id: 'faq5',
    question: 'Do you offer real-time assistance during active international travel?',
    answer: 'Yes, we are highly-rated specifically for our active travel support. When you book a package, you are assigned a dedicated WhatsApp Travel Desk Officer available 24/7 if local transit drivers or hotel front desks require immediate assistance.'
  }
];
