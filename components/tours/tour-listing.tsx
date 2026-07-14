"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import type { Tour } from "@/types/tour";
import { TourCard } from "@/components/ui/tour-card";
import { LinkButton } from "@/components/ui/button";

export function TourListing({ tours }: { tours: Tour[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

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

  /* Count active filters for the badge */
  const activeCount = ["category", "destination", "duration", "budget", "sort"].filter(
    (k) => !!searchParams.get(k)
  ).length;

  const filterPanel = (
    <div className="grid gap-4">
      <FilterSelect label="Category" value={searchParams.get("category") || ""} onChange={(v) => update("category", v)} options={["", "cultural", "wildlife", "beach", "honeymoon", "family", "luxury"]} />
      <FilterSelect label="Destination" value={searchParams.get("destination") || ""} onChange={(v) => update("destination", v)} options={["", "sigiriya", "kandy", "ella", "yala", "galle", "mirissa", "trincomalee"]} />
      <FilterSelect label="Duration" value={searchParams.get("duration") || ""} onChange={(v) => update("duration", v)} options={["", "1-7", "7-10", "10-14"]} />
      <FilterSelect label="Budget" value={searchParams.get("budget") || ""} onChange={(v) => update("budget", v)} options={["", "under-1500", "1500-2200", "2200-plus"]} />
      <FilterSelect label="Sort" value={searchParams.get("sort") || ""} onChange={(v) => update("sort", v)} options={["", "price-asc", "price-desc", "duration-asc"]} />
      <button
        className="focus-ring rounded-full border border-sand px-5 py-3 text-sm font-extrabold text-forest hover:bg-sand/30 transition-colors"
        onClick={() => router.push(pathname)}
        type="button"
      >
        Clear filters
      </button>
    </div>
  );

  return (
    <div>
      {/* ── Mobile filter toggle bar ────────────────────────────── */}
      <div className="mb-5 flex items-center justify-between gap-3 lg:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((o) => !o)}
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-sand bg-white px-5 py-3 text-sm font-extrabold text-forest shadow-sm hover:bg-sand/20 transition-colors"
          aria-expanded={filtersOpen}
          aria-controls="mobile-filters"
        >
          <SlidersHorizontal className="h-4 w-4" />
          Filters
          {activeCount > 0 && (
            <span className="ml-1 inline-grid h-5 w-5 place-items-center rounded-full bg-lagoon text-xs font-black text-white">
              {activeCount}
            </span>
          )}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${filtersOpen ? "rotate-180" : ""}`}
          />
        </button>
        <p className="text-sm font-bold text-charcoal/70">
          {filteredTours.length} tour{filteredTours.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* ── Mobile collapsible filter panel ─────────────────────── */}
      <div
        id="mobile-filters"
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          filtersOpen ? "max-h-[600px] mb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="rounded-[2rem] bg-white p-5 shadow-[0_14px_45px_rgba(53,74,50,0.08)]">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display text-2xl text-forest">Refine tours</h2>
            <button
              type="button"
              onClick={() => setFiltersOpen(false)}
              className="focus-ring rounded-full p-2 hover:bg-sand/30 transition-colors"
              aria-label="Close filters"
            >
              <X className="h-4 w-4 text-forest" />
            </button>
          </div>
          {filterPanel}
        </div>
      </div>

      {/* ── Main two-column layout (desktop sidebar + cards) ───── */}
      <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
        {/* Desktop sidebar — hidden on mobile */}
        <aside className="hidden lg:block h-fit rounded-[2rem] bg-white p-5 shadow-[0_14px_45px_rgba(53,74,50,0.08)] lg:sticky lg:top-28">
          <h2 className="font-display text-3xl text-forest">Refine tours</h2>
          <div className="mt-5">{filterPanel}</div>
        </aside>

        {/* Tours grid */}
        <div>
          <div className="mb-6 hidden lg:flex flex-wrap items-center justify-between gap-3">
            <p className="font-bold text-charcoal/70">{filteredTours.length} tour{filteredTours.length === 1 ? "" : "s"} found</p>
            <LinkButton href="/plan-my-trip" variant="secondary">Request a quote</LinkButton>
          </div>

          {/* Mobile request a quote link */}
          <div className="mb-5 flex justify-end lg:hidden">
            <LinkButton href="/plan-my-trip" variant="secondary">Request a quote</LinkButton>
          </div>

          {filteredTours.length ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
