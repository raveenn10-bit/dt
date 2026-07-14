import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { journal } from "@/data/journal";
import { tours } from "@/data/tours";

export const cms = {
  getTours: async () => tours,
  getDestinations: async () => destinations,
  getExperiences: async () => experiences,
  getJournal: async () => journal
};

export type CmsAdapter = typeof cms;
