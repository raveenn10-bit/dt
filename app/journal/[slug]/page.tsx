import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { LinkButton } from "@/components/ui/button";
import { getArticleBySlug, journal } from "@/data/journal";
import { createMetadata } from "@/lib/metadata";
import { absoluteUrl } from "@/lib/utils";

export function generateStaticParams() {
  return journal.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return createMetadata({ title: article.title, description: article.excerpt, path: `/journal/${article.slug}`, image: article.coverImage.src });
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <article>
        <header className="relative flex min-h-[78svh] items-end overflow-hidden bg-forest pb-16 pt-36 text-white">
          <Image src={article.coverImage.src} alt={article.coverImage.alt} fill priority sizes="100vw" className="object-cover opacity-58" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-charcoal/20" />
          <div className="container relative z-10">
            <p className="eyebrow text-sand">{article.category} · {article.readingTime}</p>
            <h1 className="display-title mt-4 max-w-5xl">{article.title}</h1>
            <p className="mt-6 text-white/70">{new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(new Date(article.publishedAt))} · {article.author}</p>
          </div>
        </header>
        <div className="container max-w-3xl py-16">
          <div className="prose-travel text-lg">
            {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <LinkButton href="/plan-my-trip" className="mt-8">Plan with this advice</LinkButton>
        </div>
      </article>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.excerpt, datePublished: article.publishedAt, author: { "@type": "Organization", name: article.author }, url: absoluteUrl(`/journal/${article.slug}`) }} />
    </>
  );
}
