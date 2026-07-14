"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { TourItineraryDay } from "@/types/tour";

export function ItineraryAccordion({ itinerary }: { itinerary: TourItineraryDay[] }) {
  const [open, setOpen] = useState(1);
  return (
    <div className="grid gap-3">
      {itinerary.map((day) => (
        <section key={day.day} className="rounded-3xl border border-sand bg-white">
          <h3>
            <button
              type="button"
              className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl p-5 text-left"
              aria-expanded={open === day.day}
              onClick={() => setOpen(open === day.day ? 0 : day.day)}
            >
              <span>
                <span className="text-sm font-extrabold text-terracotta">Day {day.day} · {day.location}</span>
                <span className="mt-1 block font-display text-3xl text-forest">{day.title}</span>
              </span>
              <ChevronDown className={`h-5 w-5 shrink-0 transition ${open === day.day ? "rotate-180" : ""}`} />
            </button>
          </h3>
          {open === day.day ? (
            <div className="px-5 pb-5">
              <p className="leading-7 text-charcoal/70">{day.description}</p>
              <p className="mt-3 text-sm text-charcoal/60">Meals: {day.meals.join(", ")} · Stay: {day.accommodation}</p>
            </div>
          ) : null}
        </section>
      ))}
    </div>
  );
}
