"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduceMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [active, setActive] = useState(false);
  const [label, setLabel] = useState("");
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const ringX = useSpring(pointerX, { stiffness: 220, damping: 28 });
  const ringY = useSpring(pointerY, { stiffness: 220, damping: 28 });

  useEffect(() => {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    setEnabled(true);

    function move(event: PointerEvent) {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
      const target = event.target as HTMLElement | null;
      const interactive = target?.closest("a, button, [data-cursor]");
      setActive(Boolean(interactive));
      setLabel((interactive?.getAttribute("data-cursor") || "").slice(0, 8));
    }

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [pointerX, pointerY, reduceMotion]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-terracotta mix-blend-difference lg:block"
        style={{ x: pointerX, y: pointerY }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[99] hidden h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-terracotta/70 text-[0.55rem] font-extrabold uppercase tracking-widest text-terracotta backdrop-blur-sm lg:grid"
        animate={{ scale: active ? 1.8 : 1 }}
        style={{ x: ringX, y: ringY }}
      >
        {label}
      </motion.div>
    </>
  );
}
