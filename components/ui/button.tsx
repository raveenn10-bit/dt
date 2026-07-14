"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary: "bg-terracotta text-forest shadow-premium hover:bg-[#8faf87]",
  secondary: "bg-forest text-white shadow-premium hover:bg-tropical",
  ghost: "border border-charcoal/15 bg-white/40 text-charcoal hover:bg-white",
  light: "border border-white/35 bg-white/12 text-white backdrop-blur hover:bg-white hover:text-forest"
};

const base =
  "focus-ring group relative isolate inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full px-6 py-3 text-sm font-extrabold tracking-wide transition active:scale-[0.97]";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

export function Button({ className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], "hover:-translate-y-0.5 hover:scale-[1.015]", className)} {...props}>
      <span className="absolute inset-y-0 left-0 -z-10 w-0 bg-white/15 transition-all duration-500 group-hover:w-full" />
      <span className="inline-flex items-center gap-2">
        {props.children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </button>
  );
}

type LinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: Variant;
};

export function LinkButton({ className, variant = "primary", href, ...props }: LinkButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} data-cursor="Go" {...props}>
      <span className="absolute inset-y-0 left-0 -z-10 w-0 bg-white/15 transition-all duration-500 group-hover:w-full" />
      <span className="inline-flex items-center gap-2">
        {props.children}
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </Link>
  );
}
