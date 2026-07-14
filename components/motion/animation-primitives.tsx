"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: RevealDirection;
  distance?: number;
  amount?: number;
  once?: boolean;
};

function offset(direction: RevealDirection, distance: number) {
  if (direction === "left") return { x: -distance, y: 0 };
  if (direction === "right") return { x: distance, y: 0 };
  if (direction === "down") return { x: 0, y: -distance };
  return { x: 0, y: distance };
}

export function FadeUp(props: Omit<RevealProps, "direction">) {
  return <SlideReveal direction="up" {...props} />;
}

export function FadeIn({ children, className, delay = 0, duration = 0.75, amount = 0.18, once = true }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0 }}
      whileInView={reduceMotion ? undefined : { opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideReveal({
  children,
  className,
  delay = 0,
  duration = 0.85,
  direction = "up",
  distance = 45,
  amount = 0.18,
  once = true
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const initial = offset(direction, distance);
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...initial }}
      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScaleReveal({ children, className, delay = 0, duration = 0.8, amount = 0.18, once = true }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, className, delay = 0, once = true, amount = 0.18 }: RevealProps) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        show: { transition: { delayChildren: delay, staggerChildren: 0.1 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, direction = "up", distance = 35 }: RevealProps) {
  const initial = offset(direction, distance);
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...initial },
        show: { opacity: 1, x: 0, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitLineHeading({ text, className, delay = 0.35 }: { text: string; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const lines = text.includes(", ")
    ? text.split(", ").map((line, index) => (index === 0 ? `${line},` : line))
    : [text];

  if (reduceMotion) return <span className={className}>{text}</span>;

  return (
    <span aria-label={text} className={className}>
      {lines.map((line, index) => (
        <span className="block overflow-hidden" key={`${line}-${index}`}>
          <motion.span
            aria-hidden
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + index * 0.13, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function TextReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  return <SplitLineHeading text={text} className={className} delay={delay} />;
}

export function ImageReveal({ children, className, delay = 0, direction = "left" }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const clipStart = direction === "left" ? "inset(0 100% 0 0)" : direction === "right" ? "inset(0 0 0 100%)" : "inset(100% 0 0 0)";
  return (
    <motion.div className={cn("relative overflow-hidden", className)} initial={false}>
      <motion.div
        className="absolute inset-0 z-10 bg-sand"
        initial={reduceMotion ? false : { clipPath: "inset(0 0 0 0)" }}
        whileInView={reduceMotion ? undefined : { clipPath: clipStart }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay, duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        initial={reduceMotion ? false : { scale: 1.12 }}
        whileInView={reduceMotion ? undefined : { scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export function ImageParallax({ wrapperClassName, imageClassName, speed = 0.1, ...props }: Omit<ImageProps, "fill" | "className"> & { wrapperClassName?: string; imageClassName?: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduceMotion ? ["0%", "0%"] : [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", wrapperClassName)}>
      <motion.div className="absolute inset-[-12%]" style={{ y }}>
        <Image {...props} fill className={cn("object-cover", imageClassName)} />
      </motion.div>
    </div>
  );
}

export function AnimatedCounter({ value, suffix = "", className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView || reduceMotion) {
      if (reduceMotion) setCount(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (time: number) => {
      const progress = Math.min((time - start) / 1200, 1);
      setCount(Math.round(value * (1 - Math.pow(1 - progress, 4))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}

export function RouteLineAnimation({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  return (
    <svg viewBox="0 0 260 120" className={className} fill="none" aria-hidden>
      <motion.path
        d="M15 95 C65 10 105 115 150 45 S225 40 245 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="1"
        pathLength="1"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
        whileInView={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        r="5"
        fill="currentColor"
        initial={reduceMotion ? false : { offsetDistance: "0%", opacity: 0 }}
        whileInView={reduceMotion ? undefined : { offsetDistance: "100%", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ offsetPath: "path('M15 95 C65 10 105 115 150 45 S225 40 245 18')" }}
      />
    </svg>
  );
}
