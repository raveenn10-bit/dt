import type { Metadata, Viewport } from "next";
import type React from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { CookieConsent } from "@/components/layout/cookie-consent";
import { FirstVisitPreloader } from "@/components/layout/first-visit-preloader";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { SkipToContent } from "@/components/layout/skip-to-content";
import { WhatsAppFloatingButton } from "@/components/layout/whatsapp-floating-button";
import { Header } from "@/components/navigation/header";
import { JsonLd } from "@/components/seo/json-ld";
import { PageTransition } from "@/components/motion/page-transition";
import { MotionProvider } from "@/components/motion/motion-provider";
import { createMetadata, site } from "@/lib/metadata";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700", "800"],
  display: "swap"
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#A7C4A0"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <MotionProvider>
          <SkipToContent />
          <FirstVisitPreloader />
          <AnnouncementBar />
          <Header />
          <PageTransition>
            <main id="main-content">{children}</main>
          </PageTransition>
          <Footer />
          <WhatsAppFloatingButton />
          <MobileActionBar />
          <ScrollToTop />
          <CookieConsent />
        </MotionProvider>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            name: site.name,
            url: site.url,
            telephone: site.phone,
            email: site.email,
            address: {
              "@type": "PostalAddress",
              addressCountry: "LK",
              addressLocality: "Colombo"
            },
            areaServed: "Sri Lanka",
            sameAs: ["https://www.instagram.com", "https://www.facebook.com"]
          }}
        />
      </body>
    </html>
  );
}
