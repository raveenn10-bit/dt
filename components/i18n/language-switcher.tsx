"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe2 } from "lucide-react";
import { localeFromPath, localeNames, locales, stripLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ compact = false, scrolled = false }: { compact?: boolean; scrolled?: boolean }) {
  const pathname = usePathname();
  const activeLocale = localeFromPath(pathname);
  const basePath = stripLocale(pathname);

  function hrefFor(locale: Locale) {
    if (locale === "en") return basePath;
    return basePath === "/" ? `/${locale}` : `/${locale}${basePath}`;
  }

  return (
    <div className={cn("flex items-center gap-1 rounded-full border p-1", scrolled ? "border-charcoal/10 bg-white/65" : "border-white/20 bg-white/10")}>
      <span className="sr-only">Select language</span>
      {!compact ? <Globe2 className="ml-2 h-4 w-4 opacity-70" aria-hidden /> : null}
      {locales.map((locale) => (
        <Link
          key={locale}
          href={hrefFor(locale)}
          lang={locale === "si" ? "si-LK" : locale === "ta" ? "ta-LK" : "en"}
          aria-current={activeLocale === locale ? "page" : undefined}
          className={cn(
            "focus-ring rounded-full px-3 py-2 text-xs font-extrabold transition",
            activeLocale === locale
              ? "bg-terracotta text-white"
              : scrolled ? "text-charcoal hover:bg-sand/60" : "text-white/78 hover:bg-white/15"
          )}
          title={localeNames[locale].english}
        >
          {compact ? locale.toUpperCase() : localeNames[locale].native}
        </Link>
      ))}
    </div>
  );
}
