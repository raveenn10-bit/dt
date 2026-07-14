import { GalleryLightbox } from "@/components/home/gallery-lightbox";
import { PageHero } from "@/components/ui/page-hero";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Sri Lanka Gallery",
  description: "A curated image gallery of Sri Lankan culture, tea country, wildlife and coast.",
  path: "/gallery"
});

export default function GalleryPage() {
  const images = [...destinations.map((destination) => destination.heroImage), ...experiences.map((experience) => experience.image)];
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Sri Lanka in Texture, Light and Landscape"
        description="Browse a visual overview of the places and experiences we commonly build into private journeys."
        image="https://images.unsplash.com/photo-1776363558501-2c0717a21524?auto=format&fit=crop&w=1800&q=80"
        crumbs={[{ label: "Gallery", href: "/gallery" }]}
      />
      <section className="section">
        <div className="container">
          <GalleryLightbox images={images} />
        </div>
      </section>
    </>
  );
}
