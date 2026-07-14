import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Experiences",
  description: "Explore wildlife safaris, scenic trains, tea country, whale watching, cuisine and wellness experiences.",
  path: "/experiences"
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Experiences"
        title="Authentic Sri Lanka Experiences"
        description="Add depth to your itinerary with experiences planned around responsible operators, timing and local context."
        image="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Experiences", href: "/experiences" }]}
      />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience) => (
            <Link key={experience.id} href={`/experiences/${experience.slug}`} className="focus-ring group relative min-h-[430px] overflow-hidden rounded-[2rem] p-6 text-white shadow-premium">
              <Image src={experience.image.src} alt={experience.image.alt} fill sizes="33vw" className="object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end">
                <h2 className="font-display text-4xl">{experience.name}</h2>
                <p className="mt-3 text-white/75">{experience.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
