import Image from "next/image";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  crumbs = []
}: {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  crumbs?: { label: string; href: string }[];
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden bg-forest pb-16 pt-36 text-white">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-55" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/55 to-charcoal/15" />
      <div className="container relative z-10">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/75">
          <ol className="flex flex-wrap gap-2">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-white">Home</Link></li>
            {crumbs.map((crumb) => (
              <li key={crumb.href} className="before:mr-2 before:content-['/']">
                <Link href={crumb.href} className="focus-ring rounded-sm hover:text-white">{crumb.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
        {eyebrow ? <p className="eyebrow text-sand">{eyebrow}</p> : null}
        <h1 className="display-title mt-4 max-w-5xl">{title}</h1>
        <p className="body-large mt-6 max-w-2xl text-white/82">{description}</p>
      </div>
    </section>
  );
}
