import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Things To Do in Sri Lanka",
  description: "Explore Sri Lanka highlights, destinations and activities including temples, tea country, wildlife, beaches and local food.",
  path: "/things-to-do"
});

export default function ThingsToDoPage() {
  return (
    <>
      <PageHero
        eyebrow="Things to do"
        title="Highlights of Sri Lanka"
        description="Culture, adventure, wildlife, beaches and hill-country journeys arranged into practical travel ideas."
        image="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Things To Do", href: "/things-to-do" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Destinations"
            title="Explore the Island’s Most Loved Places"
            description="Use these cards the way the reference site does: quick inspiration first, deeper destination pages next."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {destinations.map((destination) => (
              <Link key={destination.id} href={`/destinations/${destination.slug}`} className="focus-ring group overflow-hidden rounded-[2rem] bg-white shadow-premium">
                <div className="relative aspect-[4/3]">
                  <Image src={destination.heroImage.src} alt={destination.heroImage.alt} fill sizes="(min-width:1024px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="eyebrow">{destination.region}</p>
                  <h2 className="mt-2 font-display text-3xl text-forest">{destination.name}</h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-charcoal/70">{destination.shortDescription}</p>
                  <span className="mt-5 inline-block text-sm font-extrabold text-terracotta">Explore more</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <LinkButton href="/destinations">Explore Destinations</LinkButton>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Activities"
            title="Add Experiences to Your Route"
            description="Choose signature activities and we will place them into the itinerary at the right season and time of day."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {experiences.map((experience) => (
              <Link key={experience.id} href={`/experiences/${experience.slug}`} className="focus-ring group relative min-h-[360px] overflow-hidden rounded-[2rem] p-6 text-white shadow-premium">
                <Image src={experience.image.src} alt={experience.image.alt} fill sizes="33vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/86 via-charcoal/25 to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end">
                  <h2 className="font-display text-4xl">{experience.name}</h2>
                  <p className="mt-3 text-white/75">{experience.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
