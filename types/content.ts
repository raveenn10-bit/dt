import type { TravelImage } from "./tour";

export type Experience = {
  id: string;
  slug: string;
  name: string;
  image: TravelImage;
  description: string;
  destinations: string[];
  relatedTours: string[];
};

export type Testimonial = {
  id: string;
  travellerName: string;
  country: string;
  avatar: string;
  rating: number;
  review: string;
  tourTitle: string;
  travelDate: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  coverImage: TravelImage;
  category: string;
  author: string;
  publishedAt: string;
  readingTime: string;
  body: string[];
};
