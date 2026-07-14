import type { Destination } from "@/types/destination";

export const destinations: Destination[] = [
  {
    id: "sigiriya",
    slug: "sigiriya",
    name: "Sigiriya",
    region: "Cultural Triangle",
    heroImage: { src: "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1800&q=80", alt: "Sigiriya rock fortress above forest canopy" },
    gallery: [
      { src: "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1200&q=80", alt: "Sigiriya from a distance" },
      { src: "https://images.unsplash.com/photo-1712746547176-3a4812c63da8?auto=format&fit=crop&w=1200&q=80", alt: "Ancient Sri Lankan stupa" }
    ],
    shortDescription: "A dramatic rock fortress, village landscapes and the gateway to Sri Lanka's ancient kingdoms.",
    overview: "Sigiriya is the island's most cinematic cultural landmark, rising nearly 200 metres above jungle and irrigation lakes. It works best with slow mornings, village lunches and nearby cave temples.",
    highlights: ["Sigiriya Rock Fortress", "Pidurangala sunrise", "Dambulla cave temple", "Village cooking experiences"],
    bestTime: "January to September offers the driest conditions, with early mornings best for climbs.",
    recommendedDuration: "2 to 3 nights",
    experiences: ["Cultural guiding", "Village lunches", "Cycling", "Birding"],
    travelTips: ["Start climbs before 7:30am.", "Carry socks for temple floors.", "Keep one afternoon unscheduled for heat and pool time."],
    faq: [{ question: "Is Sigiriya worth two nights?", answer: "Yes. Two nights allows you to avoid midday heat and combine Sigiriya with Dambulla or Polonnaruwa." }]
  },
  {
    id: "kandy",
    slug: "kandy",
    name: "Kandy",
    region: "Central Province",
    heroImage: { src: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1800&q=80", alt: "Kandy temple beside the lake" },
    gallery: [
      { src: "https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=80", alt: "Temple of the Tooth" },
      { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1200&q=80", alt: "Tea landscape near Kandy" }
    ],
    shortDescription: "Sri Lanka's sacred hill capital, framed by lake, temples, gardens and misty ridges.",
    overview: "Kandy is a cultural hinge between the lowlands and the tea country, known for the Temple of the Sacred Tooth Relic, botanical gardens and traditional arts.",
    highlights: ["Temple of the Tooth", "Peradeniya Botanical Gardens", "Cultural performance", "Tea and spice routes"],
    bestTime: "December to April and July to September are especially comfortable.",
    recommendedDuration: "1 to 2 nights",
    experiences: ["Temple ceremonies", "Garden walks", "Cooking classes", "Tea tasting"],
    travelTips: ["Dress modestly for temples.", "Visit the temple during evening puja for atmosphere.", "Plan traffic buffers around the city centre."],
    faq: [{ question: "Can I see Kandy in one night?", answer: "Yes, but two nights gives better access to gardens and relaxed cultural experiences." }]
  },
  {
    id: "ella",
    slug: "ella",
    name: "Ella",
    region: "Uva Province",
    heroImage: { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80", alt: "Train crossing bridge in Ella" },
    gallery: [
      { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1200&q=80", alt: "Nine Arch Bridge train" },
      { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1200&q=80", alt: "Ella tea hills" }
    ],
    shortDescription: "A relaxed mountain village with famous train views, tea trails and waterfall country.",
    overview: "Ella is Sri Lanka's easygoing highland stop, balancing short hikes, viewpoints, cafés and one of Asia's most loved train journeys.",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ravana Falls", "Tea estate trails"],
    bestTime: "January to May is generally clearer, though mornings are useful year-round.",
    recommendedDuration: "2 nights",
    experiences: ["Scenic rail", "Soft hiking", "Tea estate visits", "Waterfall stops"],
    travelTips: ["Book train seats early.", "Start hikes at sunrise.", "Expect cooler evenings."],
    faq: [{ question: "Is Ella too touristy?", answer: "It is popular, but private viewpoints and nearby villages keep the experience grounded." }]
  },
  {
    id: "nuwara-eliya",
    slug: "nuwara-eliya",
    name: "Nuwara Eliya",
    region: "Tea Country",
    heroImage: { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1800&q=80", alt: "Tea plantations in Nuwara Eliya" },
    gallery: [{ src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1200&q=80", alt: "Tea estates" }],
    shortDescription: "Cool-climate tea country with colonial-era bungalows, gardens and emerald estates.",
    overview: "Nuwara Eliya adds a slower, cooler counterpoint to tropical Sri Lanka, ideal for tea lovers and scenic drives.",
    highlights: ["Tea factory visits", "Horton Plains", "Gregory Lake", "Historic bungalows"],
    bestTime: "February to April is especially crisp and clear.",
    recommendedDuration: "1 to 2 nights",
    experiences: ["Tea tasting", "Estate walks", "Highland picnics", "Scenic drives"],
    travelTips: ["Pack a light jacket.", "Reserve Horton Plains starts early.", "Choose a character stay outside the busy centre."],
    faq: [{ question: "Is Horton Plains worth the early start?", answer: "Yes in clear weather, especially for active travellers." }]
  },
  {
    id: "yala",
    slug: "yala",
    name: "Yala",
    region: "Southern Dry Zone",
    heroImage: { src: "https://images.unsplash.com/photo-1635737419031-a9e52bfcba65?auto=format&fit=crop&w=1800&q=80", alt: "Elephants in a dry-zone national park" },
    gallery: [{ src: "https://images.unsplash.com/photo-1635737419031-a9e52bfcba65?auto=format&fit=crop&w=1200&q=80", alt: "Safari elephants" }],
    shortDescription: "Sri Lanka's iconic leopard landscape, with scrub forest, lagoons and dramatic coast.",
    overview: "Yala is the country's best-known safari region. The strongest trips use responsible jeep routing, realistic wildlife expectations and downtime between drives.",
    highlights: ["Leopard habitat", "Elephants", "Birdlife", "Coastal wilderness"],
    bestTime: "February to July is strong for wildlife visibility; park closures can apply in September.",
    recommendedDuration: "1 to 2 nights",
    experiences: ["Private safaris", "Birding", "Tented camps", "Photography"],
    travelTips: ["Avoid overcrowded entry times when possible.", "Bring dust protection for cameras.", "Use neutral clothing."],
    faq: [{ question: "How many safaris should I do?", answer: "Two drives usually gives a better rhythm than one rushed visit." }]
  },
  {
    id: "galle",
    slug: "galle",
    name: "Galle",
    region: "Southern Coast",
    heroImage: { src: "https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1800&q=80", alt: "Galle coastline at sunset" },
    gallery: [{ src: "https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1200&q=80", alt: "Southern coast" }],
    shortDescription: "A UNESCO-listed fort city with ocean ramparts, boutique hotels and layered colonial history.",
    overview: "Galle is best explored on foot, with time for cafés, galleries, rampart sunsets and nearby beaches.",
    highlights: ["Galle Fort", "Rampart sunset", "Artisan shops", "Unawatuna and Thalpe beaches"],
    bestTime: "December to April is the driest south-coast season.",
    recommendedDuration: "2 nights",
    experiences: ["Fort walks", "Architecture", "Food tours", "Beach hopping"],
    travelTips: ["Stay inside the fort for atmosphere.", "Walk early before the heat.", "Keep evenings free for the ramparts."],
    faq: [{ question: "Should I stay in Galle or nearby beach?", answer: "Stay in the fort for culture, or nearby beaches for resort time. Many trips combine both." }]
  },
  {
    id: "mirissa",
    slug: "mirissa",
    name: "Mirissa",
    region: "Southern Coast",
    heroImage: { src: "https://images.unsplash.com/photo-1776363558501-2c0717a21524?auto=format&fit=crop&w=1800&q=80", alt: "Palm beach in Mirissa" },
    gallery: [{ src: "https://images.unsplash.com/photo-1776363558501-2c0717a21524?auto=format&fit=crop&w=1200&q=80", alt: "Mirissa palms" }],
    shortDescription: "A laid-back beach town known for palm viewpoints, surf and seasonal whale watching.",
    overview: "Mirissa gives the trip a relaxed coastal finish, with enough activity for travellers who still want ocean experiences.",
    highlights: ["Whale watching", "Coconut Tree Hill", "Surf lessons", "Beach cafés"],
    bestTime: "December to April for the south coast and blue whale season.",
    recommendedDuration: "2 to 4 nights",
    experiences: ["Whale watching", "Surfing", "Beach time", "Seafood dining"],
    travelTips: ["Choose responsible whale operators.", "Expect lively beach evenings.", "Add quieter Tangalle if you want seclusion."],
    faq: [{ question: "Is whale watching ethical?", answer: "It depends on the operator. We recommend licensed boats with responsible approach distances." }]
  },
  {
    id: "trincomalee",
    slug: "trincomalee",
    name: "Trincomalee",
    region: "East Coast",
    heroImage: { src: "https://images.unsplash.com/photo-1640036293568-452ba4463fce?auto=format&fit=crop&w=1800&q=80", alt: "Clear east-coast beach water" },
    gallery: [{ src: "https://images.unsplash.com/photo-1640036293568-452ba4463fce?auto=format&fit=crop&w=1200&q=80", alt: "East coast beach" }],
    shortDescription: "East-coast beaches, Hindu temples, snorkelling and calm seas in the northern summer.",
    overview: "Trincomalee is the smart beach choice from May to September, with wide bays and access to Pigeon Island.",
    highlights: ["Nilaveli Beach", "Pigeon Island", "Koneswaram Temple", "Seasonal whales"],
    bestTime: "May to September.",
    recommendedDuration: "3 to 5 nights",
    experiences: ["Snorkelling", "Temple visits", "Beach stays", "Boat trips"],
    travelTips: ["Use reef-safe sunscreen.", "Book Pigeon Island permits early.", "East coast pairs well with Sigiriya."],
    faq: [{ question: "When should I choose the east coast?", answer: "Choose it during the southwest monsoon months, especially May to September." }]
  }
];

export function getDestinationBySlug(slug: string) {
  return destinations.find((destination) => destination.slug === slug);
}
