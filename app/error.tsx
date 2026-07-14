"use client";

import { Button } from "@/components/ui/button";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-svh place-items-center bg-ivory px-6 text-center">
      <div className="max-w-lg">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="section-title mt-3 text-forest">We could not load this journey.</h1>
        <p className="mt-5 text-charcoal/70">Please try again, or contact us directly if the issue continues.</p>
        <Button className="mt-8" onClick={reset}>Try again</Button>
      </div>
    </main>
  );
}
