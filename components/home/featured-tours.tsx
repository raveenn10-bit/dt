"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Tour, TourCategory } from "@/types/tour";
import { TourCard } from "@/components/ui/tour-card";
import { cn } from "@/lib/utils";

const categories: ("All" | TourCategory)[] = ["All", "Cultural", "Wildlife", "Beach", "Honeymoon", "Family", "Luxury"];

export function FeaturedTours({ tours }: { tours: Tour[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const visibleTours = useMemo(() => active === "All" ? tours : tours.filter((tour) => tour.category === active), [active, tours]);

  return (
    <div className="mt-10">
      <div role="tablist" aria-label="Featured tour categories" className="no-scrollbar flex gap-3 overflow-x-auto pb-3">
        {categories.map((category) => (
          <button
            type="button"
            role="tab"
            aria-selected={active === category}
            key={category}
            onClick={() => setActive(category)}
            className={cn("focus-ring shrink-0 rounded-full border px-5 py-3 text-sm font-extrabold transition", active === category ? "border-forest bg-forest text-white" : "border-sand bg-white text-charcoal hover:border-terracotta")}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="no-scrollbar -mx-4 px-4 mt-8 flex gap-6 overflow-x-auto pb-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 xl:grid-cols-3 md:overflow-visible">
        <AnimatePresence mode="popLayout">
          {visibleTours.map((tour) => (
            <TourCard key={tour.id} tour={tour} className="w-[85vw] sm:w-[45vw] md:w-full shrink-0 animate-none" />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
