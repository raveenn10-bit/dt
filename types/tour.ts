export type TourCategory =
  | "Cultural"
  | "Wildlife"
  | "Beach"
  | "Honeymoon"
  | "Family"
  | "Luxury";

export type TourItineraryDay = {
  day: number;
  title: string;
  location: string;
  description: string;
  meals: string[];
  accommodation: string;
};

export type TourFAQ = {
  question: string;
  answer: string;
};

export type TravelImage = {
  src: string;
  alt: string;
};

export type Tour = {
  id: string;
  slug: string;
  title: string;
  category: TourCategory;
  destinations: string[];
  durationDays: number;
  durationNights: number;
  priceFrom: number;
  currency: "USD";
  rating: number;
  reviewCount: number;
  shortDescription: string;
  overview: string;
  heroImage: TravelImage;
  gallery: TravelImage[];
  route: string[];
  highlights: string[];
  itinerary: TourItineraryDay[];
  included: string[];
  excluded: string[];
  accommodation: string;
  transportation: string;
  faq: TourFAQ[];
  featured: boolean;
  groupType: "Private" | "Small group";
};
