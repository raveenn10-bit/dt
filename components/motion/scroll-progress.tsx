"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25
  });

  if (reduceMotion) return null;

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-terracotta"
      style={{ scaleX }}
    />
  );
}
