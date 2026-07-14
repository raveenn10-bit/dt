import { ShieldCheck, Clock3, MapPinned } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { SectionHeading } from "@/components/ui/section-heading";
import { TaxiBookingForm } from "@/components/forms/taxi-booking-form";
import { vehicles } from "@/data/vehicles";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Book A Taxi in Sri Lanka",
  description: "Book private cars, vans and buses for Sri Lanka airport transfers, day trips and multi-day tours.",
  path: "/book-a-taxi"
});

export default function BookATaxiPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a taxi"
        title="Reliable Taxi and Car Rentals"
        description="Request cars, KDH vans and buses for airport transfers, day trips, group travel and multi-day Sri Lanka touring."
        image="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Book A Taxi", href: "/book-a-taxi" }]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Transport"
            title="Choose the Right Vehicle"
            description="Inspired by the reference page: simple vehicle choices, clear booking action and practical local support."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {vehicles.map((vehicle) => {
              const Icon = vehicle.icon;
              return (
                <div key={vehicle.id} className="rounded-[2rem] bg-white p-6 text-center shadow-premium">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-sand text-forest">
                    <Icon className="h-9 w-9" />
                  </div>
                  <h2 className="mt-5 font-display text-3xl text-forest">{vehicle.name}</h2>
                  <p className="mt-2 text-sm font-extrabold text-terracotta">{vehicle.capacity}</p>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{vehicle.bestFor}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionHeading
              eyebrow="Request form"
              title="Taxi Booking Request"
              description="Send your pickup, drop-off, vehicle and timing details through WhatsApp for quick confirmation."
            />
            <div className="mt-8 grid gap-4">
              {[
                { icon: ShieldCheck, title: "Licensed local drivers", text: "Private transfers with clean vehicles and route-aware drivers." },
                { icon: Clock3, title: "Airport and late pickups", text: "Share flight or pickup timing and we will confirm practical arrival buffers." },
                { icon: MapPinned, title: "Island-wide routes", text: "Colombo, airport, hill country, south coast, east coast and custom routes." }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex gap-4 rounded-2xl border border-sand p-4">
                    <Icon className="h-6 w-6 shrink-0 text-terracotta" />
                    <div>
                      <h3 className="font-extrabold text-forest">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-charcoal/70">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <TaxiBookingForm />
        </div>
      </section>
    </>
  );
}
