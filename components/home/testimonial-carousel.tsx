"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Testimonial } from "@/types/content";

export function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const active = testimonials[index];

  useEffect(() => {
    if (paused || document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const interval = window.setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 6800);
    return () => window.clearInterval(interval);
  }, [paused, testimonials.length]);

  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-premium md:p-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}>
      <AnimatePresence mode="wait">
        <motion.div key={active.id} initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -28 }} transition={{ duration: 0.42 }} >
          <div className="flex items-center gap-4">
            <Image src={active.avatar} alt={`Sri Lanka travel memory for ${active.travellerName}`} width={72} height={72} className="h-18 w-18 rounded-full object-cover" />
            <div>
              <h3 className="text-xl font-extrabold text-forest">{active.travellerName}</h3>
              <p className="text-sm text-charcoal/60">{active.country} · {active.travelDate}</p>
            </div>
          </div>
      <div className="mt-6 flex gap-1 text-terracotta" aria-label={`${active.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, star) => <Star key={star} className="h-5 w-5 fill-current" />)}
      </div>
      <blockquote className="mt-6 font-display text-3xl leading-tight text-forest">“{active.review}”</blockquote>
      <p className="mt-4 text-sm font-bold text-charcoal/60">{active.tourTitle}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 h-1 overflow-hidden rounded-full bg-sand">
        <motion.div key={active.id} className="h-full bg-terracotta" initial={{ width: "0%" }} animate={{ width: paused ? "0%" : "100%" }} transition={{ duration: 6.8, ease: "linear" }} />
      </div>
      <div className="mt-8 flex gap-3">
        <button className="focus-ring rounded-full border border-sand p-3 text-forest" aria-label="Previous testimonial" onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)}><ChevronLeft /></button>
        <button className="focus-ring rounded-full border border-sand p-3 text-forest" aria-label="Next testimonial" onClick={() => setIndex((index + 1) % testimonials.length)}><ChevronRight /></button>
      </div>
    </div>
  );
}
