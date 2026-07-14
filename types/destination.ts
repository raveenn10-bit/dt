import type { TourFAQ, TravelImage } from "./tour";

export type Destination = {
  id: string;
  slug: string;
  name: string;
  region: string;
  heroImage: TravelImage;
  gallery: TravelImage[];
  shortDescription: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  recommendedDuration: string;
  experiences: string[];
  travelTips: string[];
  faq: TourFAQ[];
};
