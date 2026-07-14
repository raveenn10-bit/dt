import type { Article } from "@/types/content";

export const journal: Article[] = [
  {
    id: "best-time",
    slug: "best-time-to-visit-sri-lanka",
    title: "Best Time to Visit Sri Lanka by Coast and Region",
    excerpt: "Sri Lanka is a year-round destination if you choose the right coast and pace for each season.",
    coverImage: { src: "https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1400&q=80", alt: "Sri Lankan coastline during golden hour" },
    category: "Planning",
    author: "Ceylon Travel Holidays",
    publishedAt: "2026-06-12",
    readingTime: "6 min read",
    body: [
      "Sri Lanka's weather is shaped by two monsoon patterns, which means good travel planning is more nuanced than choosing a single dry season.",
      "The south and west coasts are strongest from December to April. The east coast is best from May to September, making Trincomalee and Pasikudah excellent summer choices.",
      "The Cultural Triangle works well for much of the year, while the tea country is cooler and more variable. Early starts are usually the best strategy for views and comfort."
    ]
  },
  {
    id: "train-guide",
    slug: "kandy-to-ella-train-guide",
    title: "How to Plan the Kandy to Ella Train Without the Stress",
    excerpt: "What to book, where to sit and how to make the famous rail journey fit naturally into your itinerary.",
    coverImage: { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80", alt: "Train on Nine Arch Bridge" },
    category: "Journeys",
    author: "Ceylon Travel Holidays",
    publishedAt: "2026-05-28",
    readingTime: "5 min read",
    body: [
      "The train is memorable because of the landscape, not because it is the fastest way to travel. Build the day around the experience.",
      "Reserved seats are recommended, especially in peak months. A private vehicle can meet you at the arrival station with luggage.",
      "For many travellers, a partial section gives the best balance: enough scenery without spending the full day on board."
    ]
  },
  {
    id: "family-travel",
    slug: "family-travel-in-sri-lanka",
    title: "Family Travel in Sri Lanka: What Actually Works",
    excerpt: "Practical advice for safe beaches, child-friendly drives, wildlife days and flexible touring.",
    coverImage: { src: "https://images.unsplash.com/photo-1783309745317-1e007ef7866b?auto=format&fit=crop&w=1400&q=80", alt: "Family walking outdoors" },
    category: "Family",
    author: "Ceylon Travel Holidays",
    publishedAt: "2026-04-17",
    readingTime: "7 min read",
    body: [
      "The best family trips avoid daily hotel changes and protect pool time. Sri Lanka rewards curiosity, but children still need rhythm.",
      "Choose short, varied activities: a village lunch, a gentle viewpoint, an elephant conservation visit or a beach afternoon.",
      "Private transport is worth it for families because it lets you stop when needed and keep luggage simple."
    ]
  }
];

export function getArticleBySlug(slug: string) {
  return journal.find((article) => article.slug === slug);
}
