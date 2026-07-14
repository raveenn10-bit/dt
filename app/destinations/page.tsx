import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { destinations } from "@/data/destinations";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Destinations",
  description: "Explore Sri Lanka destinations including Sigiriya, Kandy, Ella, Yala, Galle, Mirissa and Trincomalee.",
  path: "/destinations"
});

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Where Culture, Wildlife and Coast Meet"
        description="Plan Sri Lanka by region, season and travel rhythm instead of simply collecting pins on a map."
        image="https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Destinations", href: "/destinations" }]}
      />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <Link href={`/destinations/${destination.slug}`} key={destination.id} className="focus-ring group overflow-hidden rounded-[2rem] bg-white shadow-premium">
              <div className="relative aspect-[4/3]">
                <Image src={destination.heroImage.src} alt={destination.heroImage.alt} fill sizes="(min-width:1024px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <p className="eyebrow">{destination.region}</p>
                <h2 className="mt-2 font-display text-4xl text-forest">{destination.name}</h2>
                <p className="mt-3 leading-7 text-charcoal/70">{destination.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
