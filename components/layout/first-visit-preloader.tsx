"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plane } from "lucide-react";

export function FirstVisitPreloader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (sessionStorage.getItem("cth-preloader-seen")) return;
    setVisible(true);
    const start = performance.now();
    const duration = window.matchMedia("(max-width: 640px)").matches ? 1050 : 1550;
    let frame = 0;
    const tick = (time: number) => {
      const elapsed = Math.min((time - start) / duration, 1);
      setProgress(Math.round(elapsed * 100));
      if (elapsed < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const timeout = window.setTimeout(() => {
      sessionStorage.setItem("cth-preloader-seen", "true");
      setVisible(false);
    }, reduceMotion ? 180 : duration);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center overflow-hidden bg-forest text-white"
          initial={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
          aria-live="polite"
        >
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,196,160,0.18),transparent_42rem)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
          <div className="relative text-center">
            <motion.div initial={reduceMotion ? false : { scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.55 }}>
              <svg viewBox="0 0 280 170" className="mx-auto h-36 w-64 text-sand" fill="none" aria-hidden>
                <motion.path
                  d="M28 118 C70 30 105 144 143 74 C180 8 220 76 254 36"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  pathLength="1"
                  initial={reduceMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 0.22, duration: 0.85, ease: "easeInOut" }}
                />
                <motion.circle cx="28" cy="118" r="5" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} />
                <motion.circle cx="254" cy="36" r="5" fill="currentColor" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.95 }} />
              </svg>
              <motion.div
                className="absolute left-1/2 top-10 text-terracotta"
                initial={reduceMotion ? false : { offsetDistance: "0%", opacity: 0, rotate: -8 }}
                animate={{ offsetDistance: "100%", opacity: 1, rotate: 18 }}
                transition={{ delay: 0.25, duration: 0.9, ease: "easeInOut" }}
                style={{ offsetPath: "path('M28 118 C70 30 105 144 143 74 C180 8 220 76 254 36')" }}
              >
                <Plane className="h-5 w-5" />
              </motion.div>
            </motion.div>
            <p className="font-display text-5xl leading-none">
              {"Ceylon".split("").map((letter, index) => (
                <motion.span
                  key={`${letter}-${index}`}
                  className="inline-block"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 + index * 0.055, duration: 0.35 }}
                >
                  {letter}
                </motion.span>
              ))}
            </p>
            <motion.p
              className="mt-3 text-xs font-bold uppercase tracking-[0.35em] text-sand"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.45 }}
            >
              Travel Holidays
            </motion.p>
            <p className="mt-6 hidden text-sm font-extrabold tabular-nums text-white/65 sm:block">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
