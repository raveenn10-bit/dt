"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Experience } from "@/types/content";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function HorizontalExperiences({ experiences }: { experiences: Experience[] }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce), (max-width: 1023px)").matches) return;

    const context = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-experience-panel]");
      const distance = trackRef.current!.scrollWidth - window.innerWidth;

      gsap.to(trackRef.current, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          id: "experience-scroll",
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance + window.innerHeight}`,
          scrub: 0.6,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setActive(Math.min(experiences.length - 1, Math.round(self.progress * (experiences.length - 1))));
          }
        }
      });

      panels.forEach((panel) => {
        const image = panel.querySelector("[data-panel-image]");
        gsap.fromTo(
          image,
          { scale: 0.92, opacity: 0.65 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: panel,
              containerAnimation: ScrollTrigger.getById("experience-scroll")?.animation,
              start: "left center",
              end: "right center",
              scrub: true
            }
          }
        );
      });
    }, sectionRef);

    return () => context.revert();
  }, [experiences.length]);

  return (
    <section ref={sectionRef} className="section overflow-hidden bg-forest text-white">
      <div className="container mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow text-sand">Signature experiences</p>
          <h2 className="section-title mt-3">The Moments Travellers Remember</h2>
          <p className="body-large mt-5 max-w-2xl text-white/75">Large landscapes are only half the story. These experiences add texture, people and a stronger sense of place.</p>
        </div>
        <p className="text-sm font-extrabold text-sand">{String(active + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}</p>
      </div>
      <div ref={trackRef} className="no-scrollbar flex snap-x gap-5 overflow-x-auto px-4 pb-6 lg:w-max lg:overflow-visible">
        {experiences.map((experience, index) => (
          <Link
            key={experience.id}
            href={`/experiences/${experience.slug}`}
            data-experience-panel
            data-cursor="View"
            className={cn(
              "focus-ring group relative min-h-[480px] w-[86vw] shrink-0 snap-center overflow-hidden rounded-[2rem] p-7 shadow-premium transition duration-500 lg:w-[72vw]",
              active === index ? "opacity-100" : "lg:opacity-70"
            )}
          >
            <div data-panel-image className="absolute inset-0">
              <Image src={experience.image.src} alt={experience.image.alt} fill sizes="80vw" className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/82 via-charcoal/25 to-transparent transition group-hover:from-charcoal/88" />
            <div className="relative z-10 flex h-full flex-col justify-end">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-sand">{experience.destinations.slice(0, 2).join(" · ")}</p>
              <h3 className="mt-3 font-display text-5xl leading-none">{experience.name}</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/76">{experience.description}</p>
              <span className="mt-6 inline-flex font-extrabold text-sand transition group-hover:translate-x-2">Explore experience →</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="container mt-2 h-px bg-white/15">
        <div className="h-px bg-terracotta transition-all duration-500" style={{ width: `${((active + 1) / experiences.length) * 100}%` }} />
      </div>
    </section>
  );
}
