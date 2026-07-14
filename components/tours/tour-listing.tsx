"use client";

import { useMemo } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Tour } from "@/types/tour";
import { TourCard } from "@/components/ui/tour-card";
import { LinkButton } from "@/components/ui/button";

export function TourListing({ tours }: { tours: Tour[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filteredTours = useMemo(() => {
    const category = searchParams.get("category");
    const destination = searchParams.get("destination");
    const duration = searchParams.get("duration");
    const budget = searchParams.get("budget");
    const sort = searchParams.get("sort");
    const result = tours.filter((tour) => {
      const matchesCategory = !category || tour.category.toLowerCase() === category.toLowerCase();
      const matchesDestination = !destination || tour.destinations.includes(destination);
      const matchesDuration = !duration || (
        duration === "1-7" ? tour.durationDays <= 7 :
        duration === "7-10" ? tour.durationDays >= 7 && tour.durationDays <= 10 :
        duration === "10-14" ? tour.durationDays >= 10 && tour.durationDays <= 14 :
        true
      );
      const matchesBudget = !budget || (
        budget === "under-1500" ? tour.priceFrom < 1500 :
        budget === "1500-2200" ? tour.priceFrom >= 1500 && tour.priceFrom <= 2200 :
        budget === "2200-plus" ? tour.priceFrom > 2200 :
        true
      );
      return matchesCategory && matchesDestination && matchesDuration && matchesBudget;
    });
    return [...result].sort((a, b) => {
      if (sort === "price-asc") return a.priceFrom - b.priceFrom;
      if (sort === "price-desc") return b.priceFrom - a.priceFrom;
      if (sort === "duration-asc") return a.durationDays - b.durationDays;
      return Number(b.featured) - Number(a.featured);
    });
  }, [searchParams, tours]);

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
      <aside className="h-fit rounded-[2rem] bg-white p-5 shadow-[0_14px_45px_rgba(53,74,50,0.08)] lg:sticky lg:top-28">
        <h2 className="font-display text-3xl text-forest">Refine tours</h2>
        <div className="mt-5 grid gap-4">
          <FilterSelect label="Category" value={searchParams.get("category") || ""} onChange={(value) => update("category", value)} options={["", "cultural", "wildlife", "beach", "honeymoon", "family", "luxury"]} />
          <FilterSelect label="Destination" value={searchParams.get("destination") || ""} onChange={(value) => update("destination", value)} options={["", "sigiriya", "kandy", "ella", "yala", "galle", "mirissa", "trincomalee"]} />
          <FilterSelect label="Duration" value={searchParams.get("duration") || ""} onChange={(value) => update("duration", value)} options={["", "1-7", "7-10", "10-14"]} />
          <FilterSelect label="Budget" value={searchParams.get("budget") || ""} onChange={(value) => update("budget", value)} options={["", "under-1500", "1500-2200", "2200-plus"]} />
          <FilterSelect label="Sort" value={searchParams.get("sort") || ""} onChange={(value) => update("sort", value)} options={["", "price-asc", "price-desc", "duration-asc"]} />
          <button className="focus-ring rounded-full border border-sand px-5 py-3 text-sm font-extrabold text-forest" onClick={() => router.push(pathname)} type="button">
            Clear filters
          </button>
        </div>
      </aside>
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-bold text-charcoal/70">{filteredTours.length} tour{filteredTours.length === 1 ? "" : "s"} found</p>
          <LinkButton href="/plan-my-trip" variant="secondary">Request a quote</LinkButton>
        </div>
        {filteredTours.length ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredTours.map((tour) => <TourCard key={tour.id} tour={tour} />)}
          </div>
        ) : (
          <div className="rounded-[2rem] bg-white p-10 text-center shadow-premium">
            <h2 className="font-display text-4xl text-forest">No exact match yet</h2>
            <p className="mt-3 text-charcoal/70">Tell us what you need and we will design a private route around your timing.</p>
            <LinkButton href="/plan-my-trip" className="mt-6">Plan a custom trip</LinkButton>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return (
    <label className="grid gap-2 text-sm font-bold text-forest">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4 text-charcoal">
        {options.map((option) => (
          <option key={option || "all"} value={option}>{option ? option.replace("-", " ") : `Any ${label.toLowerCase()}`}</option>
        ))}
      </select>
    </label>
  );
}
