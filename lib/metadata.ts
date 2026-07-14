import type { Metadata } from "next";
import { absoluteUrl } from "./utils";

export const site = {
  name: "Ceylon Travel Holidays",
  title: "Ceylon Travel Holidays | Tailor-Made Sri Lanka Tours",
  description:
    "Discover private Sri Lanka tours, wildlife safaris, cultural journeys, beach holidays and tailor-made itineraries designed by local travel experts.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.ceylontravelholidays.com",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+94 77 123 4567",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@ceylontravelholidays.com"
};

export function createMetadata({
  title,
  description,
  path = "/",
  image = "https://images.unsplash.com/photo-1612862862126-865765df2ded?auto=format&fit=crop&w=1200&q=80"
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const pageTitle = title ? `${title} | ${site.name}` : site.title;
  const pageDescription = description || site.description;
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(site.url),
    title: pageTitle,
    description: pageDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: pageTitle }]
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [image]
    }
  };
}
