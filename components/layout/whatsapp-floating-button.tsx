"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { whatsappUrl } from "@/lib/utils";

export function WhatsAppFloatingButton() {
  return (
    <motion.a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      className="focus-ring group fixed bottom-24 right-5 z-[60] inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#1d251c]/90 p-3.5 text-white shadow-premium backdrop-blur-md transition-all duration-300 hover:border-lagoon/40 hover:bg-[#1d251c] md:bottom-6"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1, duration: 0.45 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.96 }}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        {/* Pulsing glow ring behind the icon */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/40 opacity-75" />
        <MessageCircle className="relative h-5 w-5 text-[#25D366] transition-transform duration-500 group-hover:rotate-12" />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-bold uppercase tracking-[0.12em] text-white/90 transition-all duration-500 group-hover:max-w-[150px] group-hover:pl-1 group-hover:opacity-100 sm:max-w-[150px] sm:pl-1 sm:opacity-100">
        Concierge
      </span>
    </motion.a>
  );
}
