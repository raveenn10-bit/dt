"use client";

import type React from "react";
import { useState } from "react";
import { Send } from "lucide-react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { "Content-Type": "application/json" }
    });
    setStatus(response.ok ? "success" : "error");
  }

  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <div className="flex overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15">
        <input id="newsletter-email" name="email" type="email" required placeholder="Email address" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/45 outline-none" />
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
        <button className="focus-ring px-4 text-periwinkle hover:text-lavender transition-colors" type="submit" aria-label="Subscribe"><Send className="h-4 w-4" /></button>
      </div>
      <p className="mt-2 min-h-5 text-xs text-white/65" aria-live="polite">
        {status === "success" ? "You're on the list." : status === "error" ? "Please try again." : ""}
      </p>
    </form>
  );
}
