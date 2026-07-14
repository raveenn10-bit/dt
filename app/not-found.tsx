import Link from "next/link";
import { LinkButton } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-svh place-items-center bg-ivory px-6 py-28 text-center">
      <div className="max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="section-title mt-3 text-forest">This route has wandered off-map.</h1>
        <p className="body-large mt-5 text-charcoal/70">Let us guide you back to curated Sri Lanka journeys and practical planning support.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <LinkButton href="/tours">Explore Tours</LinkButton>
          <Link href="/contact" className="focus-ring rounded-full px-6 py-3 text-sm font-extrabold text-forest">Contact us</Link>
        </div>
      </div>
    </main>
  );
}
