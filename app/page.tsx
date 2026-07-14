import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Car, Compass, Headphones, Hotel, ShieldCheck } from "lucide-react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { journal } from "@/data/journal";
import { testimonials } from "@/data/testimonials";
import { tours } from "@/data/tours";
import { AnimatedCounter, FadeUp, ImageReveal, RouteLineAnimation, StaggerContainer, StaggerItem } from "@/components/motion/animation-primitives";
import { LinkButton } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { CinematicHero } from "@/components/home/cinematic-hero";
import { TourSearch } from "@/components/home/tour-search";
import { FeaturedTours } from "@/components/home/featured-tours";
import { HorizontalExperiences } from "@/components/home/horizontal-experiences";
import { JourneyTimeline } from "@/components/home/journey-timeline";
import { TestimonialCarousel } from "@/components/home/testimonial-carousel";
import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { cn, whatsappUrl } from "@/lib/utils";

export const metadata = createMetadata();

const stats = [
  { value: 14, suffix: "+", label: "Years of local route design" },
  { value: 98, suffix: "%", label: "Traveller satisfaction" },
  { value: 24, suffix: "/7", label: "On-trip local assistance" },
  { value: 100, suffix: "%", label: "Private, tailor-made journeys" }
];

const why = [
  { icon: Compass, title: "Tailor-made journeys", text: "Every route starts with your travel rhythm, not a fixed bus schedule." },
  { icon: Award, title: "Local expertise", text: "Guides, drivers and planners who know the useful details behind the highlights." },
  { icon: Car, title: "Private transport", text: "Reliable vehicles, flexible stops and carefully planned drive times." },
  { icon: Hotel, title: "Handpicked stays", text: "Boutique hotels, tea bungalows and beach properties checked for character and comfort." },
  { icon: ShieldCheck, title: "Transparent pricing", text: "Clear inclusions, practical options and no pressure to accept hidden extras." },
  { icon: Headphones, title: "24/7 assistance", text: "A local team remains available from airport arrival to departure." }
];

const gallery = [
  destinations[0].heroImage,
  destinations[2].heroImage,
  destinations[4].heroImage,
  destinations[5].heroImage,
  experiences[2].image,
  experiences[4].image
];

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <TourSearch />

      <section className="section texture overflow-hidden">
        <div className="container relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeUp>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title mt-3 text-forest">See Sri Lanka Through Local Eyes</h2>
            <p className="body-large mt-6 text-charcoal/72">
              Ceylon Travel Holidays designs private journeys with the patience of local hosts and the polish expected by international travellers. We pair iconic places with quieter moments: a family kitchen near Sigiriya, a tea estate walk before the mist lifts, a fort walk with someone who knows the old names of the lanes.
            </p>
            <Link href="/about" className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full font-extrabold text-terracotta">
              Meet the local team <ArrowRight className="h-4 w-4" />
            </Link>
            <RouteLineAnimation className="mt-8 h-20 w-64 text-terracotta/70" />
            <div className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white p-5 shadow-[0_14px_40px_rgba(53,74,50,0.08)]">
                  <strong className="font-display text-4xl text-forest">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </strong>
                  <p className="mt-2 text-sm text-charcoal/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
          <FadeUp className="relative min-h-[560px]">
            <ImageReveal className="absolute right-0 top-0 h-[70%] w-[76%] rounded-[3rem] shadow-premium">
              <Image src="https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1400&q=80" alt="Tea estate in Sri Lanka" fill sizes="50vw" className="object-cover" />
            </ImageReveal>
            <ImageReveal className="absolute bottom-0 left-0 h-[52%] w-[54%] rounded-[2rem] border-[10px] border-ivory shadow-premium" delay={0.18} direction="up">
              <Image src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1000&q=80" alt="Sri Lankan train journey" fill sizes="30vw" className="object-cover" />
            </ImageReveal>
            <div className="absolute left-12 top-16 hidden h-40 w-40 rounded-full border border-terracotta/40 md:block" />
          </FadeUp>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Destinations" title="Popular Places, Planned With Context" description="Choose the places you know you want, then let us shape the route around seasons, drive times and better local timings." />
          <StaggerContainer className="no-scrollbar -mx-4 px-4 mt-10 flex gap-5 overflow-x-auto pb-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 lg:overflow-visible">
            {destinations.map((destination, index) => (
              <StaggerItem key={destination.id} className={cn("shrink-0 w-[78%] sm:w-[42%] lg:w-auto", (index === 0 || index === 5) && "lg:col-span-2")}>
                <Link
                  href={`/destinations/${destination.slug}`}
                  data-cursor="View"
                  className="focus-ring group relative block min-h-[320px] w-full overflow-hidden rounded-[2rem] bg-forest p-6 text-white shadow-premium transition duration-500 hover:-translate-y-2 hover:rounded-[1.5rem]"
                >
                  <Image src={destination.heroImage.src} alt={destination.heroImage.alt} fill sizes="(min-width:1024px) 25vw, 80vw" className="object-cover opacity-75 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 to-transparent transition group-hover:from-charcoal/86" />
                  <div className="relative z-10 mt-auto flex h-full flex-col justify-end">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sand">{destination.region}</p>
                    <h3 className="mt-2 font-display text-4xl transition duration-500 group-hover:-translate-y-1">{destination.name}</h3>
                    <p className="mt-3 line-clamp-2 text-sm text-white/76 transition duration-500 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">{destination.shortDescription}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Featured tours" title="Private Itineraries With Editorial Pacing" description="Start from a proven route, then adjust hotels, daily rhythm, special interests and beach time with a local planner." />
          <FeaturedTours tours={tours} />
        </div>
      </section>

      <HorizontalExperiences experiences={experiences} />

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Why choose us" title="Built Like a Boutique Travel Desk, Run by Locals" />
          <div className="w-full overflow-hidden py-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
            <div 
              className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused] md:w-full md:grid md:grid-cols-2 lg:grid-cols-3 md:animate-none md:gap-5 md:overflow-visible"
              style={{ "--marquee-duration": "30s" } as React.CSSProperties}
            >
              <div className="flex gap-5 shrink-0 pr-5 md:contents md:pr-0">
                {why.map((item) => (
                  <StaggerItem key={item.title} className="w-[82vw] sm:w-[45vw] md:w-auto shrink-0">
                    <div className="group h-full rounded-[2rem] border border-sand bg-white p-7 shadow-[0_14px_45px_rgba(53,74,50,0.08)] transition duration-500 hover:-translate-y-2 hover:bg-sand/70">
                      <item.icon className="h-8 w-8 text-terracotta transition duration-500 group-hover:rotate-6 group-hover:scale-110" />
                      <h3 className="mt-5 font-display text-3xl text-forest">{item.title}</h3>
                      <p className="mt-3 leading-7 text-charcoal/68">{item.text}</p>
                      <span className="mt-5 block h-px w-12 bg-terracotta transition-all duration-500 group-hover:w-24" />
                    </div>
                  </StaggerItem>
                ))}
              </div>
              <div className="flex gap-5 shrink-0 pr-5 md:hidden">
                {why.map((item) => (
                  <div key={`${item.title}-dup`} className="w-[82vw] sm:w-[45vw] shrink-0">
                    <div className="group h-full rounded-[2rem] border border-sand bg-white p-7 shadow-[0_14px_45px_rgba(53,74,50,0.08)] transition duration-500 hover:-translate-y-2 hover:bg-sand/70">
                      <item.icon className="h-8 w-8 text-terracotta transition duration-500 group-hover:rotate-6 group-hover:scale-110" />
                      <h3 className="mt-5 font-display text-3xl text-forest">{item.title}</h3>
                      <p className="mt-3 leading-7 text-charcoal/68">{item.text}</p>
                      <span className="mt-5 block h-px w-12 bg-terracotta transition-all duration-500 group-hover:w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Journey timeline" title="One Route, Many Sri Lankas" description="A sample private journey linking culture, tea country, wildlife and coast without hijacking normal scrolling." />
          <JourneyTimeline />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading eyebrow="Traveller stories" title="Trusted by Curious Travellers" description="Reviews are collected from real private journeys and used to improve routing, hotel choices and guide assignments." />
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="A Visual Journal of the Island" description="Open images with keyboard support and escape-to-close controls." />
          <GalleryLightbox images={gallery} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Travel journal" title="Planning Notes From the Island" />
          <div className="w-full overflow-hidden py-4 -mx-4 px-4 md:mx-0 md:px-0 md:overflow-visible">
            <div 
              className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused] md:w-full md:grid md:grid-cols-3 md:animate-none md:gap-6 md:overflow-visible"
              style={{ "--marquee-duration": "25s" } as React.CSSProperties}
            >
              <div className="flex gap-6 shrink-0 pr-6 md:contents md:pr-0">
                {journal.map((article) => (
                  <StaggerItem key={article.id} className="w-[82vw] sm:w-[45vw] md:w-auto shrink-0">
                    <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_14px_45px_rgba(53,74,50,0.08)] transition duration-500 hover:-translate-y-2">
                      <Link href={`/journal/${article.slug}`} className="focus-ring block">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={article.coverImage.src} alt={article.coverImage.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                        </div>
                      </Link>
                      <div className="p-6">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">{article.category} · {article.readingTime}</p>
                        <h3 className="mt-3 font-display text-3xl leading-none text-forest transition group-hover:text-tropical"><Link href={`/journal/${article.slug}`}>{article.title}</Link></h3>
                        <p className="mt-3 text-sm leading-6 text-charcoal/68">{article.excerpt}</p>
                      </div>
                    </article>
                  </StaggerItem>
                ))}
              </div>
              <div className="flex gap-6 shrink-0 pr-6 md:hidden">
                {journal.map((article) => (
                  <div key={`${article.id}-dup`} className="w-[82vw] sm:w-[45vw] shrink-0">
                    <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_14px_45px_rgba(53,74,50,0.08)] transition duration-500 hover:-translate-y-2">
                      <Link href={`/journal/${article.slug}`} className="focus-ring block">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <Image src={article.coverImage.src} alt={article.coverImage.alt} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                        </div>
                      </Link>
                      <div className="p-6">
                        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-terracotta">{article.category} · {article.readingTime}</p>
                        <h3 className="mt-3 font-display text-3xl leading-none text-forest transition group-hover:text-tropical"><Link href={`/journal/${article.slug}`}>{article.title}</Link></h3>
                        <p className="mt-3 text-sm leading-6 text-charcoal/68">{article.excerpt}</p>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-forest text-white">
        <div className="container relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-8 md:p-12 lg:grid lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(167,196,160,0.18),transparent_24rem)]" />
          <FadeUp className="relative">
            <p className="eyebrow text-sand">Start planning</p>
            <h2 className="section-title mt-3">Your Sri Lankan Story Starts Here</h2>
            <p className="body-large mt-5 max-w-2xl text-white/75">Tell us what you love and our local team will create your journey.</p>
            <RouteLineAnimation className="mt-5 h-16 w-56 text-sand/70" />
          </FadeUp>
          <div className="relative mt-8 flex flex-wrap gap-3 lg:mt-0">
            <LinkButton href="/plan-my-trip">Plan My Trip</LinkButton>
            <LinkButton href={whatsappUrl()} variant="light">Chat on WhatsApp</LinkButton>
          </div>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: tours.slice(0, 6).map((tour, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristTrip",
              name: tour.title,
              description: tour.shortDescription,
              url: `/tours/${tour.slug}`
            }
          }))
        }}
      />
    </>
  );
}
