import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/page-hero";
import { TourCard } from "@/components/ui/tour-card";
import { LinkButton } from "@/components/ui/button";
import { experiences, getExperienceBySlug } from "@/data/experiences";
import { tours } from "@/data/tours";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return experiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) return {};
  return createMetadata({ title: experience.name, description: experience.description, path: `/experiences/${experience.slug}`, image: experience.image.src });
}

export default async function ExperienceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);
  if (!experience) notFound();
  const related = tours.filter((tour) => experience.relatedTours.includes(tour.slug));
  return (
    <>
      <PageHero eyebrow="Experience" title={experience.name} description={experience.description} image={experience.image.src} crumbs={[{ label: "Experiences", href: "/experiences" }, { label: experience.name, href: `/experiences/${experience.slug}` }]} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            <h2 className="section-title text-forest">How We Plan It</h2>
            <p className="body-large mt-5 text-charcoal/72">
              We match this experience to the right season, operator and day of the route. The goal is not to overload the itinerary, but to make the experience feel natural, safe and memorable.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {experience.destinations.map((item) => <div className="rounded-2xl bg-white p-5 font-bold text-forest" key={item}>{item}</div>)}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] shadow-premium">
            <Image src={experience.image.src} alt={experience.image.alt} fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title text-forest">Related tours</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {(related.length ? related : tours.slice(0, 3)).map((tour) => <TourCard tour={tour} key={tour.id} />)}
          </div>
          <LinkButton href="/plan-my-trip" className="mt-8">Add this to my trip</LinkButton>
        </div>
      </section>
    </>
  );
}
