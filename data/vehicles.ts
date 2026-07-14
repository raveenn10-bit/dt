import { Bus, Car, UsersRound, type LucideIcon } from "lucide-react";

export type VehicleOption = {
  id: string;
  name: string;
  capacity: string;
  luggage: string;
  bestFor: string;
  icon: LucideIcon;
};

export const vehicles: VehicleOption[] = [
  {
    id: "sedan-car",
    name: "Sedan Car",
    capacity: "1-3 guests",
    luggage: "2 medium bags",
    bestFor: "Airport transfers, couples and city-to-city travel",
    icon: Car
  },
  {
    id: "flat-roof-kdh",
    name: "Flat Roof KDH",
    capacity: "4-6 guests",
    luggage: "4-5 bags",
    bestFor: "Families and compact private tours",
    icon: UsersRound
  },
  {
    id: "high-roof-kdh",
    name: "High Roof KDH",
    capacity: "6-9 guests",
    luggage: "6-8 bags",
    bestFor: "Comfortable multi-day touring with extra headroom",
    icon: Bus
  },
  {
    id: "coaster-bus",
    name: "Coaster Bus",
    capacity: "15-25 guests",
    luggage: "Group luggage",
    bestFor: "Small groups, retreats and event transport",
    icon: Bus
  },
  {
    id: "37-seater-bus",
    name: "37 Seater Bus",
    capacity: "26-37 guests",
    luggage: "Group luggage",
    bestFor: "Large groups, school trips and conference transfers",
    icon: Bus
  }
];
