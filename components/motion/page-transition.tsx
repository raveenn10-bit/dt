"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname}>
        {!reduceMotion ? (
          <motion.div
            aria-hidden
            className="pointer-events-none fixed inset-0 z-[85] origin-bottom bg-forest"
            initial={{ y: "100%" }}
            animate={{ y: "-100%" }}
            exit={{ y: 0 }}
            transition={{ duration: 0.62, ease: [0.76, 0, 0.24, 1] }}
          />
        ) : null}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
