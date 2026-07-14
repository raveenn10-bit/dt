"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { LinkButton } from "@/components/ui/button";
import { SplitLineHeading } from "@/components/motion/animation-primitives";

const heroVideo = "/videos/homepage-hero.mp4";
// Use a slightly smaller poster dimension to save bandwidth
const heroPoster = "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1600&q=75";

export function CinematicHero() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.35], reduceMotion ? [0, 0] : [0, 90]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.22], [0.7, 0.45]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-svh items-end overflow-hidden bg-forest pb-24 pt-36 text-white">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ y }}
      >
        {/* Optimized Priority image loaded instantly above the fold */}
        <Image
          src={heroPoster}
          alt="Sri Lanka scenery"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={75}
        />
        {/* Render video only after mounting to prevent blocking the initial paint */}
        {mounted ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            poster={heroPoster}
            autoPlay={!reduceMotion}
            muted
            loop={!reduceMotion}
            playsInline
            preload="auto"
            aria-label="Featured travel video"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        ) : null}
      </motion.div>
      <motion.div className="absolute inset-0 bg-gradient-to-t from-forest via-charcoal/55 to-charcoal/25" style={{ opacity: overlayOpacity }} />
      <div className="absolute bottom-10 right-8 hidden text-right text-xs font-bold uppercase tracking-[0.25em] text-white/55 md:block">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          Featured Video<br />Sri Lanka Travel Story
        </motion.div>
      </div>
      <div className="container relative z-10">
        <div className="max-w-5xl">
          <motion.p className="eyebrow text-sand" initial={{ opacity: 0, y: 18, letterSpacing: "0.28em" }} animate={{ opacity: 1, y: 0, letterSpacing: "0.18em" }} transition={{ delay: 0.2, duration: 0.7 }}>
            Discover the Pearl of the Indian Ocean
          </motion.p>
          <h1 className="display-title mt-5">
            <SplitLineHeading text="Journeys Through Sri Lanka, Designed Around You" delay={0.35} />
          </h1>
          <motion.p className="body-large mt-6 max-w-2xl text-white/82" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.75 }}>
            Private tours, authentic local experiences and unforgettable stays, created by people who call Sri Lanka home.
          </motion.p>
          <motion.div className="mt-8 flex flex-wrap gap-3" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.65 }}>
            <LinkButton href="/tours" variant="light">Explore Tours</LinkButton>
            <LinkButton href="/plan-my-trip">Plan Your Journey</LinkButton>
          </motion.div>
        </div>
        <motion.div className="mt-16 flex items-center gap-4 text-sm text-white/70" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="h-px w-14 bg-sand" />
          <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
            01 / Featured Video
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
