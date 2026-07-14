import Image from "next/image";
import { PageHero } from "@/components/ui/page-hero";
import { LinkButton } from "@/components/ui/button";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description: "Meet Ceylon Travel Holidays, a Sri Lankan travel agency designing tailor-made private tours.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Local Planning, International Standards"
        description="We are a Sri Lankan travel team focused on private routes, realistic pacing and the small decisions that make a trip feel effortless."
        image="https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "About", href: "/about" }]}
      />
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="section-title text-forest">A Boutique Desk for the Whole Island</h2>
            <p className="body-large mt-6 text-charcoal/72">
              Ceylon Travel Holidays exists for travellers who want Sri Lanka planned with care. We work with licensed guides, reliable chauffeur-guides, small hotels and responsible experience operators so your route feels personal rather than packaged.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {["Transparent proposals", "Local emergency support", "Flexible private routes"].map((item) => <div className="rounded-2xl bg-white p-5 font-bold text-forest shadow-[0_14px_45px_rgba(53,74,50,0.08)]" key={item}>{item}</div>)}
            </div>
            <LinkButton href="/plan-my-trip" className="mt-8">Plan with us</LinkButton>
          </div>
          <div className="relative min-h-[560px] overflow-hidden rounded-[3rem] shadow-premium">
            <Image src="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1200&q=80" alt="Sri Lankan temple and lake" fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
