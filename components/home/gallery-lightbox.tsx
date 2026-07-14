"use client";

import Image from "next/image";
import { Eye, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { TravelImage } from "@/types/tour";

export function GalleryLightbox({ images }: { images: TravelImage[] }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight" && active !== null) setActive((active + 1) % images.length);
      if (event.key === "ArrowLeft" && active !== null) setActive((active - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  return (
    <>
      <motion.div className="mt-10 grid auto-rows-[210px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}>
        {images.map((image, index) => (
          <motion.button
            key={`${image.src}-${index}`}
            type="button"
            onClick={() => setActive(index)}
            className={`focus-ring group relative overflow-hidden rounded-[1.5rem] ${index === 0 || index === 3 ? "lg:row-span-2" : ""}`}
            variants={{ hidden: { opacity: 0, y: index % 2 ? 28 : 14, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65 } } }}
            data-cursor="View"
          >
            <Image src={image.src} alt={image.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 grid place-items-center bg-charcoal/0 text-white opacity-0 transition duration-300 group-hover:bg-charcoal/35 group-hover:opacity-100">
              <Eye className="h-7 w-7" />
            </span>
            <span className="sr-only">Open image: {image.alt}</span>
          </motion.button>
        ))}
      </motion.div>
      <AnimatePresence>
      {active !== null ? (
        <motion.div className="fixed inset-0 z-[80] grid place-items-center bg-charcoal/90 p-4" role="dialog" aria-modal="true" aria-label="Gallery image viewer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button className="focus-ring absolute right-5 top-5 rounded-full bg-white p-3 text-forest" onClick={() => setActive(null)} aria-label="Close lightbox"><X /></button>
          <motion.div className="relative h-[78svh] w-full max-w-5xl" initial={{ scale: 0.94, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96, y: 10 }}>
            <Image src={images[active].src} alt={images[active].alt} fill sizes="100vw" className="object-contain" />
          </motion.div>
          <motion.p className="absolute bottom-6 max-w-2xl px-6 text-center text-sm text-white/75" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>{images[active].alt}</motion.p>
        </motion.div>
      ) : null}
      </AnimatePresence>
    </>
  );
}
