import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";
import { journal } from "@/data/journal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Travel Journal",
  description: "Planning guides and local notes for Sri Lanka tours, seasons, trains, beaches and family travel.",
  path: "/journal"
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Travel journal"
        title="Practical Notes for Better Sri Lanka Trips"
        description="Clear planning advice from local route designers, written for travellers who want context before committing."
        image="https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Journal", href: "/journal" }]}
      />
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3">
          {journal.map((article) => (
            <article key={article.id} className="overflow-hidden rounded-[2rem] bg-white shadow-premium">
              <Link href={`/journal/${article.slug}`} className="focus-ring block">
                <div className="relative aspect-[4/3]">
                  <Image src={article.coverImage.src} alt={article.coverImage.alt} fill sizes="33vw" className="object-cover" />
                </div>
              </Link>
              <div className="p-6">
                <p className="eyebrow">{article.category} · {article.readingTime}</p>
                <h2 className="mt-3 font-display text-4xl leading-none text-forest"><Link href={`/journal/${article.slug}`}>{article.title}</Link></h2>
                <p className="mt-4 leading-7 text-charcoal/70">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
