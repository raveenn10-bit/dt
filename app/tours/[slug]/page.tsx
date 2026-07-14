import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Check, MessageCircle, Star, Users, X } from "lucide-react";
import { ItineraryAccordion } from "@/components/tours/itinerary-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkButton } from "@/components/ui/button";
import { TourCard } from "@/components/ui/tour-card";
import { tours, getTourBySlug } from "@/data/tours";
import { createMetadata } from "@/lib/metadata";
import { formatCurrency, whatsappUrl } from "@/lib/utils";

export function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  return createMetadata({
    title: tour.title,
    description: tour.shortDescription,
    path: `/tours/${tour.slug}`,
    image: tour.heroImage.src
  });
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) notFound();
  const related = tours.filter((item) => item.slug !== tour.slug && item.category === tour.category).slice(0, 3);

  return (
    <>
      <section className="relative flex min-h-[82svh] items-end overflow-hidden bg-forest pb-14 pt-36 text-white">
        <Image src={tour.heroImage.src} alt={tour.heroImage.alt} fill priority sizes="100vw" className="object-cover opacity-65" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-charcoal/20" />
        <div className="container relative z-10">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/75">
            <Link href="/" className="focus-ring rounded-sm">Home</Link> / <Link href="/tours" className="focus-ring rounded-sm">Tours</Link> / {tour.title}
          </nav>
          <p className="eyebrow text-sand">{tour.category} · {tour.groupType}</p>
          <h1 className="display-title mt-4 max-w-5xl">{tour.title}</h1>
          <p className="body-large mt-6 max-w-2xl text-white/82">{tour.shortDescription}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-white/85">
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-terracotta text-terracotta" /> {tour.rating} ({tour.reviewCount})</span>
            <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {tour.durationDays} Days / {tour.durationNights} Nights</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> Private journey</span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
          <article className="space-y-14">
            <div className="grid gap-4 md:grid-cols-3">
              {tour.gallery.map((image) => (
                <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={image.src} alt={image.alt} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
            <section>
              <h2 className="section-title text-forest">Overview</h2>
              <p className="body-large mt-5 text-charcoal/72">{tour.overview}</p>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">Trip highlights</h2>
              <ul className="mt-5 grid gap-3 md:grid-cols-2">
                {tour.highlights.map((item) => <li key={item} className="flex gap-3 rounded-2xl bg-white p-4"><Check className="h-5 w-5 text-terracotta" /> {item}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">Day-by-day itinerary</h2>
              <div className="mt-5"><ItineraryAccordion itinerary={tour.itinerary} /></div>
            </section>
            <section className="grid gap-6 md:grid-cols-2">
              <InfoList title="Included" icon="check" items={tour.included} />
              <InfoList title="Excluded" icon="x" items={tour.excluded} />
            </section>
            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6"><h2 className="font-display text-3xl text-forest">Accommodation</h2><p className="mt-3 leading-7 text-charcoal/70">{tour.accommodation}</p></div>
              <div className="rounded-[2rem] bg-white p-6"><h2 className="font-display text-3xl text-forest">Transportation</h2><p className="mt-3 leading-7 text-charcoal/70">{tour.transportation}</p></div>
            </section>
            <section className="rounded-[2rem] bg-forest p-8 text-white">
              <h2 className="font-display text-4xl">Important information</h2>
              <p className="mt-4 leading-7 text-white/75">Exact hotel names, entrance fees and seasonal park timing are confirmed in your proposal. We recommend travel insurance and flexible international flights during peak holiday periods.</p>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">FAQ</h2>
              <div className="mt-5 grid gap-4">
                {tour.faq.map((faq) => <div key={faq.question} className="rounded-3xl bg-white p-5"><h3 className="font-bold text-forest">{faq.question}</h3><p className="mt-2 text-charcoal/70">{faq.answer}</p></div>)}
              </div>
            </section>
          </article>
          <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-premium lg:sticky lg:top-28">
            <p className="text-sm text-charcoal/60">Starting from</p>
            <p className="font-display text-5xl text-forest">{formatCurrency(tour.priceFrom)}</p>
            <p className="mt-2 text-sm text-charcoal/60">Per person, based on two travellers. Final pricing depends on season and hotel level.</p>
            <div className="mt-6 grid gap-3">
              <label className="grid gap-2 text-sm font-bold text-forest">Travel month<input type="month" className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4" /></label>
              <label className="grid gap-2 text-sm font-bold text-forest">Travellers<input type="number" min={1} defaultValue={2} className="focus-ring min-h-12 rounded-2xl border border-sand bg-ivory px-4" /></label>
              <LinkButton href={`/plan-my-trip?tour=${tour.slug}`} className="w-full">Request quote</LinkButton>
              <LinkButton href={whatsappUrl(`Hello, I am interested in ${tour.title}.`)} variant="secondary" className="w-full"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp</LinkButton>
            </div>
          </aside>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-forest">Related tours</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {(related.length ? related : tours.filter((item) => item.slug !== tour.slug).slice(0, 3)).map((item) => <TourCard key={item.id} tour={item} />)}
          </div>
        </div>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristTrip", name: tour.title, description: tour.shortDescription, offers: { "@type": "Offer", price: tour.priceFrom, priceCurrency: tour.currency } }} />
    </>
  );
}

function InfoList({ title, icon, items }: { title: string; icon: "check" | "x"; items: string[] }) {
  const Icon = icon === "check" ? Check : X;
  return (
    <div className="rounded-[2rem] bg-white p-6">
      <h2 className="font-display text-3xl text-forest">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => <li key={item} className="flex gap-3 text-charcoal/72"><Icon className="h-5 w-5 text-terracotta" /> {item}</li>)}
      </ul>
    </div>
  );
}
