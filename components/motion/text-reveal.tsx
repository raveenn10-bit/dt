"use client";

import { motion, useReducedMotion } from "framer-motion";

export function TextReveal({ text, className }: { text: string; className?: string }) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  if (reduceMotion) return <span className={className}>{text}</span>;
  return (
    <span className={className} aria-label={text}>
      {words.map((word, index) => (
        <motion.span
          aria-hidden="true"
          className="inline-block overflow-hidden"
          key={`${word}-${index}`}
        >
          <motion.span
            className="inline-block pr-3"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}
