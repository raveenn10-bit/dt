"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { LinkButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/things-to-do", label: "Things To Do" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/book-a-taxi", label: "Book A Taxi" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(value > 24);
    setHidden(value > 680 && value > previous && !open);
  });

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: hidden ? -94 : 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-forest/10 bg-ivory/94 text-charcoal shadow-[0_14px_40px_rgba(53,74,50,0.14)] backdrop-blur-xl"
          : "border-white/14 bg-forest/72 text-white shadow-[0_18px_55px_rgba(0,0,0,0.28)] backdrop-blur-xl"
      )}
    >
      <div className={cn("container flex items-center justify-between transition-all", scrolled ? "h-20" : "h-24")}>
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
        <Link href="/" className={cn("focus-ring rounded-sm", !scrolled && "drop-shadow-[0_3px_16px_rgba(0,0,0,0.72)]")} aria-label="Ceylon Travel Holidays home">
          <span className="block font-display text-3xl font-semibold leading-none">Ceylon</span>
          <span className={cn("block text-[0.65rem] font-extrabold uppercase tracking-[0.35em]", scrolled ? "text-tropical" : "text-sand")}>
            Travel Holidays
          </span>
        </Link>
        </motion.div>
        <nav
          className={cn(
            "hidden items-center gap-4 rounded-full px-5 py-3 text-sm font-extrabold xl:gap-6 lg:flex",
            scrolled ? "bg-white/40 text-forest" : "bg-charcoal/28 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] backdrop-blur-md"
          )}
          aria-label="Main navigation"
        >
          {links.map((link, index) => (
            <motion.div key={link.href} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + index * 0.045 }}>
            <Link href={link.href} className={cn("focus-ring animated-underline rounded-sm transition hover:text-terracotta", !scrolled && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]")}>
              {link.label}
            </Link>
            </motion.div>
          ))}
        </nav>
        <motion.div className="hidden items-center gap-3 lg:flex" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}>
          <Link href="/contact" className={cn("focus-ring rounded-full px-4 py-3 text-sm font-extrabold hover:text-terracotta", !scrolled && "drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]")}>
            Inquire
          </Link>
          <LinkButton href="/plan-my-trip" variant={scrolled ? "primary" : "light"}>
            Plan My Trip
          </LinkButton>
        </motion.div>
        <button
          type="button"
          className="focus-ring inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/20 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 54px) 54px)" }}
            animate={{ opacity: 1, clipPath: "circle(145% at calc(100% - 54px) 54px)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 54px) 54px)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 top-0 z-[-1] flex min-h-svh flex-col bg-forest px-6 pb-8 pt-28 text-white lg:hidden"
          >
            <nav className="grid gap-3 text-4xl font-display" aria-label="Mobile navigation">
              {links.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.16 + index * 0.06 }}>
                <Link
                  href={link.href}
                  className="focus-ring animated-underline rounded-lg py-2"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div className="mt-auto grid gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}>
              <LinkButton href="/plan-my-trip" onClick={() => setOpen(false)}>Plan My Trip</LinkButton>
              <div className="grid gap-1 text-sm text-white/75">
                <a className="focus-ring rounded-sm" href="tel:+94771234567">+94 77 123 4567</a>
                <a className="focus-ring rounded-sm" href="mailto:hello@ceylontravelholidays.com">hello@ceylontravelholidays.com</a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
