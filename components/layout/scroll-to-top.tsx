"use client";

import { ChevronUp } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import type React from "react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      className="focus-ring fixed bottom-24 left-5 z-40 hidden rounded-full bg-white p-3 text-forest shadow-premium md:inline-flex"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ rotate: -8, y: -2 }}
      style={{ "--scroll": scrollYProgress } as React.CSSProperties}
    >
      <ChevronUp className="h-5 w-5" />
    </motion.button>
  );
}
