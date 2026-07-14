"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Heart, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Tour } from "@/types/tour";
import { formatCurrency } from "@/lib/utils";

export function TourCard({ tour }: { tour: Tour }) {
  const [saved, setSaved] = useState(false);
  const [toast, setToast] = useState(false);

  function toggleSaved() {
    setSaved((value) => !value);
    setToast(true);
    window.setTimeout(() => setToast(false), 1400);
  }

  return (
    <motion.article layout initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }} whileHover={{ y: -8 }} className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_55px_rgba(53,74,50,0.12)] transition-shadow duration-500 hover:shadow-premium">
      <Link href={`/tours/${tour.slug}`} className="focus-ring block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={tour.heroImage.src}
            alt={tour.heroImage.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/55 to-transparent" />
          <button
            type="button"
            className="focus-ring absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/88 text-terracotta shadow"
            aria-label={saved ? "Remove saved tour" : "Save tour"}
            onClick={(event) => {
              event.preventDefault();
              toggleSaved();
            }}
          >
            <Heart className={`h-5 w-5 transition ${saved ? "scale-110 fill-current" : ""}`} />
          </button>
          {tour.featured ? (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-extrabold text-forest transition group-hover:-translate-y-1">
              Featured
            </span>
          ) : null}
          <span className="absolute bottom-4 left-4 rounded-full bg-forest/90 px-3 py-1 text-xs font-bold text-white">
            {tour.category}
          </span>
        </div>
      </Link>
      <div className="space-y-4 p-6">
        <div className="flex items-center gap-3 text-sm text-charcoal/65">
          <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-terracotta text-terracotta" /> {tour.rating}</span>
          <span>({tour.reviewCount} reviews)</span>
        </div>
        <div>
          <h3 className="font-display text-3xl font-semibold leading-none text-forest">
            <Link href={`/tours/${tour.slug}`} className="focus-ring rounded-sm">{tour.title}</Link>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-charcoal/70">{tour.shortDescription}</p>
        </div>
        <div className="grid gap-2 text-sm text-charcoal/70">
          <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-terracotta" /> {tour.durationDays} Days / {tour.durationNights} Nights</span>
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-terracotta" /> {tour.route.slice(0, 4).join(" → ")}</span>
        </div>
        <div className="flex items-end justify-between border-t border-sand pt-4">
          <span className="text-sm text-charcoal/60">From <strong className="block text-xl text-forest">{formatCurrency(tour.priceFrom)}</strong></span>
          <Link href={`/tours/${tour.slug}`} className="focus-ring rounded-full text-sm font-extrabold text-terracotta">
            <span className="inline-flex items-center gap-1">View tour <span className="transition group-hover:translate-x-1">→</span></span>
          </Link>
        </div>
      </div>
      {toast ? (
        <div className="absolute right-4 top-16 rounded-full bg-forest px-4 py-2 text-xs font-extrabold text-white shadow-premium">
          {saved ? "Tour saved" : "Removed"}
        </div>
      ) : null}
    </motion.article>
  );
}
