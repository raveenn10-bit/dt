import { PlanTripForm } from "@/components/forms/plan-trip-form";
import { PageHero } from "@/components/ui/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Plan My Trip",
  description: "Share your Sri Lanka travel interests and receive a tailor-made itinerary proposal from local planners.",
  path: "/plan-my-trip"
});

export default function PlanMyTripPage() {
  return (
    <>
      <PageHero
        eyebrow="Plan my trip"
        title="Tell Us What Your Sri Lanka Should Feel Like"
        description="This three-step form gives our local team enough context to recommend a practical route, hotel style and daily pace."
        image="https://images.unsplash.com/photo-1760532511219-c8b7566f90af?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Plan My Trip", href: "/plan-my-trip" }]}
      />
      <section className="section">
        <div className="container max-w-5xl">
          <PlanTripForm />
        </div>
      </section>
    </>
  );
}
