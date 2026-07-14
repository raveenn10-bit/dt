import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(amount);
}

export function absoluteUrl(path = "") {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.ceylontravelholidays.com";
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function sanitizeText(value: string) {
  return value.replace(/[<>]/g, "").trim();
}

export function whatsappUrl(message = "Hello Ceylon Travel Holidays, I would like to plan a Sri Lanka trip.") {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94771234567";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
