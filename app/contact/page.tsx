import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { LinkButton } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";
import { whatsappUrl } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Contact",
  description: "Contact Ceylon Travel Holidays by WhatsApp, phone or email to plan a private Sri Lanka tour.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak With a Local Sri Lanka Planner"
        description="Use the trip form for detailed requests, or contact us directly for quick questions."
        image="https://images.unsplash.com/photo-1640036293568-452ba4463fce?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-premium">
            <h2 className="font-display text-4xl text-forest">Direct details</h2>
            <div className="mt-8 grid gap-5">
              <a href={whatsappUrl()} className="focus-ring flex gap-4 rounded-2xl border border-sand p-4"><MessageCircle className="h-6 w-6 text-terracotta" /><span><strong className="block text-forest">WhatsApp</strong> Fastest for planning questions</span></a>
              <a href="tel:+94771234567" className="focus-ring flex gap-4 rounded-2xl border border-sand p-4"><Phone className="h-6 w-6 text-terracotta" /><span><strong className="block text-forest">Phone</strong> +94 77 123 4567</span></a>
              <a href="mailto:hello@ceylontravelholidays.com" className="focus-ring flex gap-4 rounded-2xl border border-sand p-4"><Mail className="h-6 w-6 text-terracotta" /><span><strong className="block text-forest">Email</strong> hello@ceylontravelholidays.com</span></a>
              <div className="flex gap-4 rounded-2xl border border-sand p-4"><MapPin className="h-6 w-6 text-terracotta" /><span><strong className="block text-forest">Office</strong> Colombo, Sri Lanka</span></div>
            </div>
          </div>
          <div className="rounded-[2rem] bg-forest p-8 text-white shadow-premium">
            <h2 className="font-display text-4xl">Send the useful details once</h2>
            <p className="body-large mt-5 text-white/75">The Plan My Trip form captures travel style, budget, dates and contact preferences so our first reply is specific.</p>
            <LinkButton href="/plan-my-trip" className="mt-8">Plan My Trip</LinkButton>
          </div>
        </div>
      </section>
    </>
  );
}
