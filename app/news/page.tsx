import Image from "next/image";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { journal } from "@/data/journal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Travel News",
  description: "Latest Sri Lanka travel notes, planning updates and useful stories from Ceylon Travel Holidays.",
  path: "/news"
});

const formatter = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "long",
  year: "numeric"
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Sri Lanka Travel News and Planning Notes"
        description="Reference-style news cards backed by our existing travel journal content."
        image="https://images.unsplash.com/photo-1699210375804-7d6547c3b227?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "News", href: "/news" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Updates"
            title="Useful Stories Before You Travel"
            description="Clear, practical posts for choosing seasons, routes and travel styles."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {journal.map((article) => (
              <article key={article.id} className="overflow-hidden rounded-[2rem] bg-white shadow-premium">
                <Link href={`/journal/${article.slug}`} className="focus-ring block">
                  <div className="relative aspect-[4/3]">
                    <Image src={article.coverImage.src} alt={article.coverImage.alt} fill sizes="33vw" className="object-cover transition duration-700 hover:scale-105" />
                  </div>
                </Link>
                <div className="p-6">
                  <p className="eyebrow">{article.category}</p>
                  <h2 className="mt-3 font-display text-4xl leading-none text-forest">
                    <Link href={`/journal/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="mt-4 flex items-center gap-2 text-sm font-bold text-charcoal/60">
                    <CalendarDays className="h-4 w-4 text-terracotta" />
                    {formatter.format(new Date(article.publishedAt))}
                  </p>
                  <Link href={`/journal/${article.slug}`} className="focus-ring mt-6 inline-block rounded-full bg-terracotta px-5 py-3 text-sm font-extrabold text-white">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
