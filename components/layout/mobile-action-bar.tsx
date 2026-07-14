"use client";

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { whatsappUrl } from "@/lib/utils";

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    const previous = scrollY.getPrevious() ?? 0;
    setVisible(value > 620);
    setHidden(value > previous && value > 760);
  });

  return (
    <motion.nav
      initial={{ y: "110%" }}
      animate={{ y: visible && !hidden ? 0 : "110%" }}
      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-sand bg-ivory/95 pb-[env(safe-area-inset-bottom)] text-xs font-extrabold text-forest shadow-[0_-12px_40px_rgba(53,74,50,0.12)] backdrop-blur md:hidden"
      aria-label="Quick actions"
    >
      <a className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1" href="tel:+94771234567"><Phone className="h-5 w-5" /> Call</a>
      <a className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1" href={whatsappUrl()}><MessageCircle className="h-5 w-5" /> WhatsApp</a>
      <Link className="focus-ring flex min-h-16 flex-col items-center justify-center gap-1 bg-terracotta text-white" href="/plan-my-trip"><Mail className="h-5 w-5" /> Plan Trip</Link>
    </motion.nav>
  );
}
