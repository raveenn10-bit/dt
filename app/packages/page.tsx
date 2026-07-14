import { PageHero } from "@/components/ui/page-hero";
import { TourListing } from "@/components/tours/tour-listing";
import { SectionHeading } from "@/components/ui/section-heading";
import { tours } from "@/data/tours";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Packages",
  description: "Browse traveller-choice Sri Lanka packages with private transport, local guidance and flexible planning.",
  path: "/packages"
});

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Traveler’s choice packages"
        title="Sri Lanka Packages Ready to Customize"
        description="Start from a proven route, then adjust hotels, pace, transport and experiences around your travel style."
        image="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Packages", href: "/packages" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Packages"
            title="Traveler’s Choice Packages"
            description="Inspired by the reference site structure: clear day counts, strong destination routes and fast booking actions."
          />
          <div className="mt-10">
            <TourListing tours={tours} />
          </div>
        </div>
      </section>
    </>
  );
}
