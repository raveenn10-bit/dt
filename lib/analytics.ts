export function trackEvent(name: string, payload?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("cth:event", { detail: { name, payload } }));
}
