import Image from "next/image";
import { notFound } from "next/navigation";
import { MapPinned, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { TourCard } from "@/components/ui/tour-card";
import { LinkButton } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/json-ld";
import { destinations, getDestinationBySlug } from "@/data/destinations";
import { tours } from "@/data/tours";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return destinations.map((destination) => ({ slug: destination.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) return {};
  return createMetadata({
    title: destination.name,
    description: destination.shortDescription,
    path: `/destinations/${destination.slug}`,
    image: destination.heroImage.src
  });
}

export default async function DestinationDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();
  const availableTours = tours.filter((tour) => tour.destinations.includes(destination.slug));
  const relatedDestinations = destinations.filter((item) => item.slug !== destination.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={destination.region}
        title={destination.name}
        description={destination.shortDescription}
        image={destination.heroImage.src}
        crumbs={[{ label: "Destinations", href: "/destinations" }, { label: destination.name, href: `/destinations/${destination.slug}` }]}
      />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_340px]">
          <article className="space-y-12">
            <section>
              <h2 className="section-title text-forest">Overview</h2>
              <p className="body-large mt-5 text-charcoal/72">{destination.overview}</p>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">Highlights</h2>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {destination.highlights.map((item) => <div className="rounded-2xl bg-white p-4" key={item}><Sparkles className="mb-3 h-5 w-5 text-terracotta" />{item}</div>)}
              </div>
            </section>
            <section className="grid gap-6 md:grid-cols-2">
              <div className="rounded-[2rem] bg-white p-6"><h2 className="font-display text-3xl text-forest">Best time to visit</h2><p className="mt-3 text-charcoal/70">{destination.bestTime}</p></div>
              <div className="rounded-[2rem] bg-white p-6"><h2 className="font-display text-3xl text-forest">Recommended stay</h2><p className="mt-3 text-charcoal/70">{destination.recommendedDuration}</p></div>
            </section>
            <section className="rounded-[2rem] bg-forest p-8 text-white">
              <h2 className="font-display text-4xl">Local travel tips</h2>
              <ul className="mt-5 grid gap-3 text-white/76">
                {destination.travelTips.map((tip) => <li key={tip}>• {tip}</li>)}
              </ul>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">Gallery</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {destination.gallery.map((image) => <div key={image.src} className="relative aspect-[4/3] overflow-hidden rounded-3xl"><Image src={image.src} alt={image.alt} fill sizes="50vw" className="object-cover" /></div>)}
              </div>
            </section>
            <section>
              <h2 className="font-display text-4xl text-forest">FAQ</h2>
              <div className="mt-5 grid gap-4">
                {destination.faq.map((faq) => <div key={faq.question} className="rounded-3xl bg-white p-5"><h3 className="font-bold text-forest">{faq.question}</h3><p className="mt-2 text-charcoal/70">{faq.answer}</p></div>)}
              </div>
            </section>
          </article>
          <aside className="h-fit rounded-[2rem] bg-white p-6 shadow-premium lg:sticky lg:top-28">
            <MapPinned className="h-8 w-8 text-terracotta" />
            <h2 className="mt-4 font-display text-3xl text-forest">Plan {destination.name}</h2>
            <p className="mt-3 text-sm leading-6 text-charcoal/70">Ask us how this destination fits with seasonality, drive times and the rest of your Sri Lanka route.</p>
            <LinkButton href={`/plan-my-trip?destination=${destination.slug}`} className="mt-6 w-full">Plan My Trip</LinkButton>
          </aside>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-forest">Available tours</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {(availableTours.length ? availableTours : tours.slice(0, 3)).map((tour) => <TourCard tour={tour} key={tour.id} />)}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <h2 className="font-display text-4xl text-forest">Related destinations</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedDestinations.map((item) => <LinkButton key={item.id} href={`/destinations/${item.slug}`} variant="ghost">{item.name}</LinkButton>)}
          </div>
        </div>
      </section>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TouristDestination", name: destination.name, description: destination.shortDescription }} />
    </>
  );
}
