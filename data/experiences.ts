import type { Experience } from "@/types/content";

export const experiences: Experience[] = [
  {
    id: "wildlife-safaris",
    slug: "wildlife-safaris",
    name: "Wildlife Safaris",
    image: { src: "https://images.unsplash.com/photo-1635737419031-a9e52bfcba65?auto=format&fit=crop&w=1400&q=80", alt: "Elephants on safari in Sri Lanka" },
    description: "Track leopards, elephants and endemic birds with responsible jeep routing and naturalist support.",
    destinations: ["Yala", "Udawalawe", "Wilpattu"],
    relatedTours: ["wildlife-and-wilderness", "classic-sri-lanka-discovery"]
  },
  {
    id: "scenic-train",
    slug: "scenic-train-journeys",
    name: "Scenic Train Journeys",
    image: { src: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80", alt: "Sri Lankan train crossing tea country" },
    description: "Ride through tea estates, cloud forest and mountain villages on the island's most famous rail sections.",
    destinations: ["Kandy", "Nuwara Eliya", "Ella"],
    relatedTours: ["classic-sri-lanka-discovery", "tea-country-and-southern-coast"]
  },
  {
    id: "tea-country",
    slug: "tea-country",
    name: "Tea Country",
    image: { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1400&q=80", alt: "Tea plantations in Sri Lanka" },
    description: "Meet estate communities, taste single-origin teas and stay in cool-climate bungalows.",
    destinations: ["Nuwara Eliya", "Hatton", "Ella"],
    relatedTours: ["tea-country-and-southern-coast", "romantic-island-escape"]
  },
  {
    id: "whale-watching",
    slug: "whale-watching",
    name: "Whale Watching",
    image: { src: "https://images.unsplash.com/photo-1776363558501-2c0717a21524?auto=format&fit=crop&w=1400&q=80", alt: "Mirissa coast used for Sri Lanka whale watching departures" },
    description: "Seasonal ocean trips from responsible operators, planned with weather and sea conditions in mind.",
    destinations: ["Mirissa", "Trincomalee", "Kalpitiya"],
    relatedTours: ["wildlife-and-wilderness", "romantic-island-escape"]
  },
  {
    id: "local-cuisine",
    slug: "local-cuisine",
    name: "Local Cuisine",
    image: { src: "https://images.unsplash.com/photo-1743525700011-afac212694d7?auto=format&fit=crop&w=1400&q=80", alt: "Sri Lankan style curry meal" },
    description: "Cook with families, visit markets and understand the spice routes behind Sri Lankan food.",
    destinations: ["Kandy", "Galle", "Sigiriya"],
    relatedTours: ["classic-sri-lanka-discovery", "family-adventure-in-sri-lanka"]
  },
  {
    id: "ayurveda-wellness",
    slug: "ayurveda-and-wellness",
    name: "Ayurveda and Wellness",
    image: { src: "https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1400&q=80", alt: "Peaceful Sri Lankan hill-country setting for wellness retreats" },
    description: "Restore between travel days with authentic wellness rituals, yoga and slow coastal stays.",
    destinations: ["Kandy", "Galle", "Tangalle"],
    relatedTours: ["romantic-island-escape"]
  }
];

export function getExperienceBySlug(slug: string) {
  return experiences.find((experience) => experience.slug === slug);
}
