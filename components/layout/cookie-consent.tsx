"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("cth-cookie-consent") !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 rounded-3xl bg-white p-5 text-sm shadow-premium md:bottom-6 md:left-auto md:max-w-md">
      <p className="font-bold text-forest">Privacy-friendly analytics</p>
      <p className="mt-2 leading-6 text-charcoal/70">We use minimal analytics to improve planning content. No tracking scripts are loaded without consent.</p>
      <Button
        className="mt-4 w-full"
        onClick={() => {
          localStorage.setItem("cth-cookie-consent", "accepted");
          setVisible(false);
        }}
      >
        Accept
      </Button>
    </div>
  );
}
