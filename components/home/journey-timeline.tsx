"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const stops = [
  { city: "Colombo", text: "Arrive with a soft landing, coastal rest and a private welcome briefing." },
  { city: "Sigiriya", text: "Move into the Cultural Triangle for rock fortresses, village kitchens and dry-zone lakes." },
  { city: "Kandy", text: "Enter the sacred hill capital for temples, gardens and traditional artistry." },
  { city: "Ella", text: "Follow the railway through tea estates, waterfalls and mist-layered viewpoints." },
  { city: "Yala", text: "Descend to wilderness for leopard tracking, elephant plains and safari camp evenings." },
  { city: "Galle", text: "Finish on the southern coast with fort lanes, ocean ramparts and beach extensions." }
];

export function JourneyTimeline() {
  const [active, setActive] = useState(0);
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const observers = refs.current.map((node, index) => {
      if (!node) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(index);
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      observer.observe(node);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="top-28 hidden h-[620px] rounded-[2rem] bg-forest p-8 text-white shadow-premium lg:sticky lg:block">
        <p className="eyebrow text-sand">Sample route</p>
        <div className="relative mt-10 h-[470px]">
          <div className="absolute left-8 top-4 h-[410px] w-px bg-white/18" />
          <div className="absolute left-8 top-4 w-px bg-terracotta transition-all duration-500" style={{ height: `${(active / (stops.length - 1)) * 410}px` }} />
          <motion.div className="absolute left-[22px] text-sand" animate={{ top: `${active * 82 + 12}px` }} transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}>
            <Navigation className="h-5 w-5 rotate-45" />
          </motion.div>
          {stops.map((stop, index) => (
            <div key={stop.city} className="absolute left-0 flex items-center gap-4 transition" style={{ top: `${index * 82}px` }}>
              <span className={cn("grid h-16 w-16 place-items-center rounded-full border transition", active >= index ? "border-terracotta bg-terracotta" : "border-white/20 bg-white/5")}>
                <MapPin className="h-5 w-5" />
              </span>
              <span className={cn("font-display text-3xl transition", active === index ? "text-sand" : "text-white/45")}>{stop.city}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-5">
        {stops.map((stop, index) => (
          <motion.div
            key={stop.city}
            ref={(node) => {
              refs.current[index] = node;
            }}
            className="rounded-[2rem] border border-sand bg-white p-6 shadow-[0_14px_45px_rgba(53,74,50,0.08)] md:p-8"
            animate={{ opacity: active === index ? 1 : 0.68, y: active === index ? -6 : 0 }}
            transition={{ duration: 0.35 }}
          >
            <span className="text-sm font-extrabold text-terracotta">Day {index + 1}</span>
            <h3 className="mt-2 font-display text-4xl text-forest">{stop.city}</h3>
            <p className="mt-3 leading-7 text-charcoal/70">{stop.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
