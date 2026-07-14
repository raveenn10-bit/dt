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
      className="focus-ring group fixed bottom-24 right-5 z-[60] inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/35 bg-[#25D366] px-5 py-4 text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] md:bottom-6"
      aria-label="Chat on WhatsApp"
      initial={{ opacity: 0, y: 18, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: ["0 18px 45px rgba(37,211,102,0.35)", "0 18px 45px rgba(37,211,102,0.35), 0 0 0 14px rgba(37,211,102,0)", "0 18px 45px rgba(37,211,102,0.35)"]
      }}
      transition={{ opacity: { delay: 1, duration: 0.35 }, y: { delay: 1, duration: 0.35 }, scale: { delay: 1, duration: 0.35 }, boxShadow: { duration: 2.2, repeat: Infinity, repeatDelay: 1.4 } }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="hidden whitespace-nowrap text-sm font-extrabold sm:inline">
        WhatsApp
      </span>
    </motion.a>
  );
}
