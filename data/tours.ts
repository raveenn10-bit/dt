import type { Tour } from "@/types/tour";

const baseGallery = [
  {
    src: "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1400&q=80",
    alt: "Sigiriya rock fortress rising over tropical forest"
  },
  {
    src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80",
    alt: "Train crossing Sri Lanka tea country"
  },
  {
    src: "https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1400&q=80",
    alt: "Palm-lined Sri Lankan coast at sunset"
  }
];

export const tours: Tour[] = [
  {
    id: "classic-discovery",
    slug: "classic-sri-lanka-discovery",
    title: "Classic Sri Lanka Discovery",
    category: "Cultural",
    destinations: ["sigiriya", "kandy", "ella", "galle"],
    durationDays: 10,
    durationNights: 9,
    priceFrom: 1480,
    currency: "USD",
    rating: 4.9,
    reviewCount: 128,
    shortDescription: "Ancient capitals, tea hills, scenic rail, wildlife and the southern coast in one private journey.",
    overview:
      "A beautifully paced introduction to Sri Lanka, designed for travellers who want the island's essential stories without rushing. Private guiding, boutique stays and flexible daily starts keep the experience personal.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1800&q=80",
      alt: "Temple of the Sacred Tooth in Kandy"
    },
    gallery: baseGallery,
    route: ["Colombo", "Sigiriya", "Kandy", "Ella", "Yala", "Galle"],
    highlights: ["Climb Sigiriya at golden hour", "Ride the Kandy to Ella train", "Private jeep safari in Yala", "Walk Galle Fort with a local host"],
    itinerary: [
      { day: 1, title: "Arrival with coastal calm", location: "Negombo", description: "Meet your chauffeur-guide and settle into a gentle first night by the lagoon.", meals: ["Dinner"], accommodation: "Boutique lagoon hotel" },
      { day: 2, title: "Into the Cultural Triangle", location: "Sigiriya", description: "Travel inland through coconut groves and village roads before an evening nature walk.", meals: ["Breakfast"], accommodation: "Eco lodge near Sigiriya" },
      { day: 3, title: "Sigiriya and village life", location: "Sigiriya", description: "Climb the rock fortress early, then join a hosted village lunch cooked over a wood fire.", meals: ["Breakfast", "Lunch"], accommodation: "Eco lodge near Sigiriya" },
      { day: 4, title: "Sacred Kandy", location: "Kandy", description: "Visit Dambulla caves en route and arrive in Kandy for the evening puja at the Temple of the Tooth.", meals: ["Breakfast"], accommodation: "Heritage hillside hotel" },
      { day: 5, title: "Tea-country rail", location: "Ella", description: "Board the island's most scenic train through highland estates and misty valleys.", meals: ["Breakfast"], accommodation: "View lodge in Ella" },
      { day: 6, title: "Waterfalls and highland walks", location: "Ella", description: "Choose Little Adam's Peak, Nine Arch Bridge or a slower tea estate experience.", meals: ["Breakfast"], accommodation: "View lodge in Ella" },
      { day: 7, title: "Yala wilderness", location: "Yala", description: "Descend to dry-zone forest for a private afternoon safari.", meals: ["Breakfast", "Dinner"], accommodation: "Safari camp" },
      { day: 8, title: "Southern coast", location: "Galle", description: "Follow the coast to Galle, stopping for palm beaches and stilt fishermen viewpoints.", meals: ["Breakfast"], accommodation: "Fort boutique hotel" },
      { day: 9, title: "Galle Fort stories", location: "Galle", description: "Explore Dutch-era lanes, artisan shops and ocean ramparts with time for independent wandering.", meals: ["Breakfast"], accommodation: "Fort boutique hotel" },
      { day: 10, title: "Departure", location: "Colombo", description: "Private transfer to the airport or extend with a beach stay.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Private air-conditioned transport", "Licensed chauffeur-guide", "Daily breakfast", "Handpicked accommodation", "Entrance planning support", "24/7 local assistance"],
    excluded: ["International flights", "Travel insurance", "Visa fees", "Peak season supplements", "Personal expenses"],
    accommodation: "Boutique, heritage and eco-lodge stays selected for location, comfort and character.",
    transportation: "Private air-conditioned vehicle with an English-speaking chauffeur-guide.",
    faq: [
      { question: "Can this tour be customized?", answer: "Yes. Routes, hotel level and daily pace can be adjusted before confirmation." },
      { question: "Is the Sigiriya climb difficult?", answer: "It is moderate, with stairs and exposed sections. We schedule it early and can provide alternative viewpoints." }
    ],
    featured: true,
    groupType: "Private"
  },
  {
    id: "wildlife-wilderness",
    slug: "wildlife-and-wilderness",
    title: "Wildlife and Wilderness",
    category: "Wildlife",
    destinations: ["yala", "udawalawe", "sinharaja", "mirissa"],
    durationDays: 8,
    durationNights: 7,
    priceFrom: 1320,
    currency: "USD",
    rating: 4.8,
    reviewCount: 87,
    shortDescription: "Leopard country, elephant plains, rainforest trails and optional whale watching on the south coast.",
    overview: "A nature-forward private itinerary linking Sri Lanka's strongest wildlife regions with specialist local trackers and low-impact lodges.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1635737419031-a9e52bfcba65?auto=format&fit=crop&w=1800&q=80",
      alt: "Elephants walking through a Sri Lankan national park"
    },
    gallery: baseGallery,
    route: ["Colombo", "Udawalawe", "Yala", "Sinharaja", "Mirissa"],
    highlights: ["Jeep safaris in Yala and Udawalawe", "Rainforest walk in Sinharaja", "Marine life cruise from Mirissa", "Naturalist-led birding stops"],
    itinerary: [
      { day: 1, title: "Arrival and rest", location: "Colombo", description: "Recover from your flight with a quiet first evening.", meals: ["Dinner"], accommodation: "City boutique hotel" },
      { day: 2, title: "Elephant plains", location: "Udawalawe", description: "Travel south for your first jeep safari among open grasslands.", meals: ["Breakfast"], accommodation: "Safari lodge" },
      { day: 3, title: "Yala buffer zone", location: "Yala", description: "Continue to leopard country with time at leisure before an early start.", meals: ["Breakfast"], accommodation: "Tented safari camp" },
      { day: 4, title: "Leopard safari", location: "Yala", description: "Join dawn and afternoon drives timed around animal activity.", meals: ["Breakfast", "Dinner"], accommodation: "Tented safari camp" },
      { day: 5, title: "Rainforest edge", location: "Sinharaja", description: "Move into wet-zone forest and meet a local naturalist.", meals: ["Breakfast"], accommodation: "Rainforest lodge" },
      { day: 6, title: "Sinharaja trail", location: "Sinharaja", description: "Walk under towering canopy for endemic birds, reptiles and medicinal plants.", meals: ["Breakfast"], accommodation: "Rainforest lodge" },
      { day: 7, title: "Coastal wildlife", location: "Mirissa", description: "Reach the south coast for beach time and an optional whale watching briefing.", meals: ["Breakfast"], accommodation: "Beach hotel" },
      { day: 8, title: "Departure or extension", location: "Colombo", description: "Return to the airport or extend by the sea.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Private vehicle", "Chauffeur-guide", "Safari jeep arrangements", "Naturalist guide in Sinharaja", "Accommodation with breakfast", "Local emergency support"],
    excluded: ["Park entrance fees", "Camera fees", "Flights", "Insurance", "Optional whale watching"],
    accommodation: "Safari lodges, tented camps and small nature hotels.",
    transportation: "Private vehicle plus park-approved jeeps for safaris.",
    faq: [{ question: "Are leopard sightings guaranteed?", answer: "No ethical operator can guarantee wildlife sightings, but Yala offers one of Asia's strongest leopard habitats." }],
    featured: true,
    groupType: "Private"
  },
  {
    id: "romantic-island-escape",
    slug: "romantic-island-escape",
    title: "Romantic Island Escape",
    category: "Honeymoon",
    destinations: ["kandy", "nuwara-eliya", "galle", "mirissa"],
    durationDays: 12,
    durationNights: 11,
    priceFrom: 2260,
    currency: "USD",
    rating: 5,
    reviewCount: 64,
    shortDescription: "A honeymoon-style journey with private villas, tea-country views, spa rituals and slow coastal days.",
    overview: "Designed for couples who want intimacy, comfort and a sense of occasion without losing local texture.",
    heroImage: {
      src: "https://images.unsplash.com/photo-1776363558501-2c0717a21524?auto=format&fit=crop&w=1800&q=80",
      alt: "Tropical beach with palms and turquoise water"
    },
    gallery: baseGallery,
    route: ["Colombo", "Kandy", "Nuwara Eliya", "Galle", "Mirissa"],
    highlights: ["Private sunset dining", "Tea bungalow stay", "Couples wellness ritual", "Southern coast villa time"],
    itinerary: [
      { day: 1, title: "Arrival", location: "Negombo", description: "VIP-style airport meet and a gentle first night.", meals: ["Dinner"], accommodation: "Luxury lagoon resort" },
      { day: 2, title: "Garden city", location: "Kandy", description: "Travel to Kandy with a private garden visit.", meals: ["Breakfast"], accommodation: "Boutique villa" },
      { day: 3, title: "Sacred and slow", location: "Kandy", description: "Temple visit, local lunch and spa time.", meals: ["Breakfast"], accommodation: "Boutique villa" },
      { day: 4, title: "Tea country", location: "Nuwara Eliya", description: "Drive through emerald estates to a restored tea bungalow.", meals: ["Breakfast"], accommodation: "Tea bungalow" },
      { day: 5, title: "Highland romance", location: "Nuwara Eliya", description: "Tea tasting, lake walk and private dinner.", meals: ["Breakfast", "Dinner"], accommodation: "Tea bungalow" },
      { day: 6, title: "Scenic southbound", location: "Galle", description: "Descend through waterfalls and forest roads to the coast.", meals: ["Breakfast"], accommodation: "Fort hotel" },
      { day: 7, title: "Galle at leisure", location: "Galle", description: "A guided walk followed by unscheduled time.", meals: ["Breakfast"], accommodation: "Fort hotel" },
      { day: 8, title: "Beach villa", location: "Mirissa", description: "Check into a private coastal hideaway.", meals: ["Breakfast"], accommodation: "Beach villa" },
      { day: 9, title: "Ocean day", location: "Mirissa", description: "Optional whale watching or a slow beach day.", meals: ["Breakfast"], accommodation: "Beach villa" },
      { day: 10, title: "Wellness day", location: "Mirissa", description: "Ayurveda-inspired spa session and sunset drinks.", meals: ["Breakfast"], accommodation: "Beach villa" },
      { day: 11, title: "Free day", location: "Mirissa", description: "Keep the day open for surf, cafés or villa time.", meals: ["Breakfast"], accommodation: "Beach villa" },
      { day: 12, title: "Departure", location: "Colombo", description: "Private airport transfer.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Private chauffeur", "Romantic room requests", "Daily breakfast", "Selected special dinners", "Concierge support", "Flexible pacing"],
    excluded: ["Flights", "Insurance", "Premium alcohol", "Spa treatments unless listed"],
    accommodation: "Premium villas, boutique hotels and tea-country bungalows.",
    transportation: "Private vehicle throughout, with optional scenic train segment.",
    faq: [{ question: "Can you arrange honeymoon extras?", answer: "Yes. We can arrange flowers, private dining, room upgrades and photography subject to availability." }],
    featured: true,
    groupType: "Private"
  },
  {
    id: "cultural-triangle-explorer",
    slug: "cultural-triangle-explorer",
    title: "Cultural Triangle Explorer",
    category: "Cultural",
    destinations: ["sigiriya", "anuradhapura", "polonnaruwa", "kandy"],
    durationDays: 7,
    durationNights: 6,
    priceFrom: 980,
    currency: "USD",
    rating: 4.7,
    reviewCount: 52,
    shortDescription: "A focused private route through UNESCO cities, cave temples, village kitchens and sacred Kandy.",
    overview: "An efficient, culture-rich itinerary for travellers who want depth in Sri Lanka's ancient heartland.",
    heroImage: { src: "https://images.unsplash.com/photo-1712746547176-3a4812c63da8?auto=format&fit=crop&w=1800&q=80", alt: "Ancient Buddhist stupa in Sri Lanka" },
    gallery: baseGallery,
    route: ["Colombo", "Anuradhapura", "Sigiriya", "Polonnaruwa", "Kandy"],
    highlights: ["UNESCO heritage sites", "Dambulla cave temple", "Village lunch experience", "Temple of the Tooth"],
    itinerary: [
      { day: 1, title: "Arrival", location: "Colombo", description: "Meet the team and rest.", meals: ["Dinner"], accommodation: "City hotel" },
      { day: 2, title: "Ancient capital", location: "Anuradhapura", description: "Explore sacred stupas and monastic ruins.", meals: ["Breakfast"], accommodation: "Heritage hotel" },
      { day: 3, title: "Sigiriya base", location: "Sigiriya", description: "Travel to Sigiriya with a rural lunch stop.", meals: ["Breakfast", "Lunch"], accommodation: "Nature lodge" },
      { day: 4, title: "Rock fortress", location: "Sigiriya", description: "Climb Sigiriya and visit Dambulla caves.", meals: ["Breakfast"], accommodation: "Nature lodge" },
      { day: 5, title: "Polonnaruwa by bicycle", location: "Polonnaruwa", description: "Explore ruins by bike or vehicle.", meals: ["Breakfast"], accommodation: "Nature lodge" },
      { day: 6, title: "Kandy", location: "Kandy", description: "Spice gardens, crafts and evening temple ceremony.", meals: ["Breakfast"], accommodation: "Kandy hotel" },
      { day: 7, title: "Departure", location: "Colombo", description: "Transfer onward.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Private transport", "Chauffeur-guide", "Breakfast", "Route planning", "Hotel taxes"],
    excluded: ["Site entrance fees", "Flights", "Insurance", "Lunches unless listed"],
    accommodation: "Comfortable heritage hotels and nature lodges.",
    transportation: "Private air-conditioned vehicle.",
    faq: [{ question: "Is this suitable for seniors?", answer: "Yes, with pacing adjustments and alternatives to climbs where needed." }],
    featured: false,
    groupType: "Private"
  },
  {
    id: "tea-coast",
    slug: "tea-country-and-southern-coast",
    title: "Tea Country and Southern Coast",
    category: "Beach",
    destinations: ["ella", "nuwara-eliya", "galle", "mirissa"],
    durationDays: 9,
    durationNights: 8,
    priceFrom: 1240,
    currency: "USD",
    rating: 4.8,
    reviewCount: 71,
    shortDescription: "Misty estates, scenic trains, colonial coastlines and relaxed beach time in one elegant route.",
    overview: "A soft-adventure route that pairs Sri Lanka's famous hill country with the best of the southern coast.",
    heroImage: { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1800&q=80", alt: "Green tea fields in Sri Lanka highlands" },
    gallery: baseGallery,
    route: ["Colombo", "Nuwara Eliya", "Ella", "Galle", "Mirissa"],
    highlights: ["Tea factory visit", "Kandy to Ella rail section", "Galle Fort walk", "Beach extension options"],
    itinerary: [
      { day: 1, title: "Arrival", location: "Colombo", description: "Welcome and overnight.", meals: ["Dinner"], accommodation: "City hotel" },
      { day: 2, title: "Tea hills", location: "Nuwara Eliya", description: "Drive into cool highlands.", meals: ["Breakfast"], accommodation: "Tea hotel" },
      { day: 3, title: "Estate life", location: "Nuwara Eliya", description: "Tea tasting and highland viewpoints.", meals: ["Breakfast"], accommodation: "Tea hotel" },
      { day: 4, title: "Rail to Ella", location: "Ella", description: "Scenic train and village evening.", meals: ["Breakfast"], accommodation: "Ella lodge" },
      { day: 5, title: "Ella walks", location: "Ella", description: "Choose gentle hikes and waterfalls.", meals: ["Breakfast"], accommodation: "Ella lodge" },
      { day: 6, title: "Galle", location: "Galle", description: "Travel to the fort city.", meals: ["Breakfast"], accommodation: "Fort hotel" },
      { day: 7, title: "Coastal villages", location: "Mirissa", description: "Beach coves and optional surf lesson.", meals: ["Breakfast"], accommodation: "Beach hotel" },
      { day: 8, title: "Ocean leisure", location: "Mirissa", description: "Free day by the sea.", meals: ["Breakfast"], accommodation: "Beach hotel" },
      { day: 9, title: "Departure", location: "Colombo", description: "Airport transfer.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Private vehicle", "Rail ticket assistance", "Breakfast", "Hotel selection", "24/7 support"],
    excluded: ["Flights", "Insurance", "Optional activities", "Peak surcharges"],
    accommodation: "Tea hotels, hill lodges and beach properties.",
    transportation: "Private vehicle plus optional reserved train seats.",
    faq: [{ question: "Can I add more beach nights?", answer: "Yes, this route is easy to extend in Mirissa, Tangalle or Bentota." }],
    featured: true,
    groupType: "Private"
  },
  {
    id: "family-adventure",
    slug: "family-adventure-in-sri-lanka",
    title: "Family Adventure in Sri Lanka",
    category: "Family",
    destinations: ["sigiriya", "kandy", "ella", "bentota"],
    durationDays: 10,
    durationNights: 9,
    priceFrom: 1560,
    currency: "USD",
    rating: 4.9,
    reviewCount: 46,
    shortDescription: "Wildlife, gentle walks, hands-on cooking, safe beaches and flexible days for families.",
    overview: "Built for families who want variety without exhausting travel days, with child-friendly guides and hotels.",
    heroImage: { src: "https://images.unsplash.com/photo-1783309745317-1e007ef7866b?auto=format&fit=crop&w=1800&q=80", alt: "Family walking on a sunny tropical path" },
    gallery: baseGallery,
    route: ["Colombo", "Sigiriya", "Kandy", "Ella", "Bentota"],
    highlights: ["Elephant-friendly experiences", "Village cooking", "Train ride", "Beach finale"],
    itinerary: [
      { day: 1, title: "Arrival", location: "Negombo", description: "Short transfer and pool time.", meals: ["Dinner"], accommodation: "Family hotel" },
      { day: 2, title: "Sigiriya", location: "Sigiriya", description: "Drive inland with flexible stops.", meals: ["Breakfast"], accommodation: "Family lodge" },
      { day: 3, title: "Adventure choice", location: "Sigiriya", description: "Choose Sigiriya climb or Pidurangala viewpoint.", meals: ["Breakfast"], accommodation: "Family lodge" },
      { day: 4, title: "Village cooking", location: "Sigiriya", description: "Hands-on lunch and canoe ride.", meals: ["Breakfast", "Lunch"], accommodation: "Family lodge" },
      { day: 5, title: "Kandy", location: "Kandy", description: "Botanical gardens and cultural show.", meals: ["Breakfast"], accommodation: "Kandy hotel" },
      { day: 6, title: "Train day", location: "Ella", description: "Scenic rail section with private transfer support.", meals: ["Breakfast"], accommodation: "Ella lodge" },
      { day: 7, title: "Highland fun", location: "Ella", description: "Waterfalls and short walks.", meals: ["Breakfast"], accommodation: "Ella lodge" },
      { day: 8, title: "Beach", location: "Bentota", description: "Travel to safe swimming beaches.", meals: ["Breakfast"], accommodation: "Beach resort" },
      { day: 9, title: "Beach day", location: "Bentota", description: "Turtle conservation visit or water sports.", meals: ["Breakfast"], accommodation: "Beach resort" },
      { day: 10, title: "Departure", location: "Colombo", description: "Airport transfer.", meals: ["Breakfast"], accommodation: "Not included" }
    ],
    included: ["Family-sized vehicle", "Child-friendly hotels", "Daily breakfast", "Flexible planning", "Emergency support"],
    excluded: ["Flights", "Insurance", "Baby equipment rental", "Optional water sports"],
    accommodation: "Family rooms and connecting-room hotels where available.",
    transportation: "Private air-conditioned van.",
    faq: [{ question: "Can you provide child seats?", answer: "Yes, request them during planning so we can confirm availability." }],
    featured: false,
    groupType: "Private"
  }
];

export function getTourBySlug(slug: string) {
  return tours.find((tour) => tour.slug === slug);
}
