import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { NewsletterForm } from "@/components/forms/newsletter-form";

const destinationLinks = ["Sigiriya", "Kandy", "Ella", "Yala", "Galle", "Mirissa"];
const categoryLinks = ["Cultural Packages", "Wildlife Safaris", "Beach Holidays", "Honeymoons", "Family Trips"];

export function Footer() {
  return (
    <footer className="bg-forest pb-28 pt-16 text-white md:pb-10">
      <div className="container grid gap-12 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-display text-4xl leading-none">Ceylon Travel Holidays</p>
          <p className="mt-5 max-w-sm leading-7 text-white/70">
            Tailor-made Sri Lanka tours shaped by local knowledge, careful pacing and handpicked stays.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-white/75">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Colombo, Sri Lanka</span>
            <a href="tel:+94771234567" className="focus-ring flex items-center gap-2 rounded-sm"><Phone className="h-4 w-4" /> +94 77 123 4567</a>
            <a href="mailto:hello@ceylontravelholidays.com" className="focus-ring flex items-center gap-2 rounded-sm"><Mail className="h-4 w-4" /> hello@ceylontravelholidays.com</a>
          </div>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sand">Destinations</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/72">
              {destinationLinks.map((item) => (
                <li key={item}><Link className="focus-ring rounded-sm hover:text-sand" href={`/destinations/${item.toLowerCase().replaceAll(" ", "-")}`}>{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sand">Packages</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/72">
              {categoryLinks.map((item) => (
                <li key={item}><Link className="focus-ring rounded-sm hover:text-sand" href="/packages">{item}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sand">Company</h2>
            <ul className="mt-5 grid gap-3 text-sm text-white/72">
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/things-to-do">Things To Do</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/gallery">Gallery</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/news">News</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/about">About</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/contact">Contact</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/book-a-taxi">Book A Taxi</Link></li>
              <li><Link className="focus-ring rounded-sm hover:text-sand" href="/plan-my-trip">Plan My Trip</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-extrabold uppercase tracking-[0.2em] text-sand">Newsletter</h2>
            <p className="mt-5 text-sm leading-6 text-white/70">Seasonal route ideas and practical planning notes.</p>
            <NewsletterForm />
            <div className="mt-5 flex gap-3">
              <a className="focus-ring rounded-full border border-white/20 p-3" href="https://instagram.com" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a className="focus-ring rounded-full border border-white/20 p-3" href="https://facebook.com" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-12 flex flex-col gap-3 border-t border-white/12 pt-6 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
        <p>SLTDA registered travel partner · Secure inquiry handling · Local 24/7 assistance</p>
        <p>© {new Date().getFullYear()} Ceylon Travel Holidays. All rights reserved.</p>
      </div>
    </footer>
  );
}
