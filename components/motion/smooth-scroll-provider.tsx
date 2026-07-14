"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isTouchLike() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (prefersReducedMotion() || isTouchLike()) return;

    let frame = 0;
    let cleanup = () => {};

    async function start() {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis({
        duration: 1.1,
        smoothWheel: true,
        touchMultiplier: 1,
        wheelMultiplier: 0.9
      });

      lenis.on("scroll", ScrollTrigger.update);

      const raf = (time: number) => {
        lenis.raf(time);
        frame = requestAnimationFrame(raf);
      };

      frame = requestAnimationFrame(raf);
      cleanup = () => {
        cancelAnimationFrame(frame);
        lenis.destroy();
        ScrollTrigger.killAll(false);
      };
    }

    void start();
    return () => cleanup();
  }, []);

  return children;
}
