import { PageHero } from "@/components/ui/page-hero";
import { TourListing } from "@/components/tours/tour-listing";
import { SectionHeading } from "@/components/ui/section-heading";
import { tours } from "@/data/tours";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Tours",
  description: "Browse private Sri Lanka tours by destination, duration, style and budget.",
  path: "/tours"
});

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Private tours"
        title="Sri Lanka Tours Built Around Your Pace"
        description="Filter proven routes or request a fully custom itinerary shaped around culture, wildlife, beaches, food and wellness."
        image="https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Tours", href: "/tours" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading title="Find a Route to Start From" description="All routes are private and adjustable. Use filters to create a shareable view, then request a quote when the direction feels right." />
          <div className="mt-10">
            <TourListing tours={tours} />
          </div>
        </div>
      </section>
    </>
  );
}
