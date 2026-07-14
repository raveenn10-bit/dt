export const locales = ["en", "si", "ta"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, { native: string; english: string }> = {
  en: { native: "English", english: "English" },
  si: { native: "සිංහල", english: "Sinhala" },
  ta: { native: "தமிழ்", english: "Tamil" }
};

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/").filter(Boolean)[0];
  return isLocale(segment) ? segment : "en";
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/").filter(Boolean);
  if (isLocale(segments[0])) {
    return `/${segments.slice(1).join("/")}` || "/";
  }
  return pathname || "/";
}

export function localizedHref(href: string, locale: Locale) {
  if (href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:")) return href;
  if (locale === "en") return href;
  const cleanHref = href.startsWith("/") ? href : `/${href}`;
  return cleanHref === "/" ? `/${locale}` : `/${locale}${cleanHref}`;
}

export const uiCopy = {
  en: {
    announcement: "Private Sri Lanka journeys designed by local specialists",
    announcementCta: "start planning today",
    nav: {
      tours: "Tours",
      destinations: "Destinations",
      experiences: "Experiences",
      gallery: "Gallery",
      journal: "Journal",
      about: "About",
      contact: "Contact",
      inquire: "Inquire",
      plan: "Plan My Trip",
      menu: "Open menu",
      close: "Close menu"
    },
    actions: {
      call: "Call",
      whatsapp: "WhatsApp",
      planTrip: "Plan Trip"
    },
    footer: {
      summary: "Tailor-made Sri Lanka tours shaped by local knowledge, careful pacing and handpicked stays.",
      destinations: "Destinations",
      tours: "Tours",
      company: "Company",
      newsletter: "Newsletter",
      newsletterText: "Seasonal route ideas and practical planning notes.",
      trust: "SLTDA registered travel partner · Secure inquiry handling · Local 24/7 assistance",
      rights: "All rights reserved."
    }
  },
  si: {
    announcement: "දේශීය විශේෂඥයින් සැලසුම් කරන පුද්ගලික ශ්‍රී ලංකා සංචාර",
    announcementCta: "අදම සැලසුම් කරන්න",
    nav: {
      tours: "සංචාර",
      destinations: "ගමනාන්ත",
      experiences: "අත්දැකීම්",
      gallery: "ගැලරිය",
      journal: "ජර්නලය",
      about: "අප ගැන",
      contact: "සම්බන්ධ වන්න",
      inquire: "විමසන්න",
      plan: "මගේ සංචාරය",
      menu: "මෙනුව විවෘත කරන්න",
      close: "මෙනුව වසන්න"
    },
    actions: {
      call: "අමතන්න",
      whatsapp: "WhatsApp",
      planTrip: "සැලසුම්"
    },
    footer: {
      summary: "දේශීය දැනුම, සුවපහසු ගමන් රිද්මය සහ තෝරාගත් නවාතැන් සමඟ සැලසුම් කරන ශ්‍රී ලංකා සංචාර.",
      destinations: "ගමනාන්ත",
      tours: "සංචාර",
      company: "සමාගම",
      newsletter: "පුවත් ලිපිය",
      newsletterText: "සෘතුමය මාර්ග අදහස් සහ ප්‍රායෝගික සැලසුම් සටහන්.",
      trust: "SLTDA ලියාපදිංචි සංචාරක හවුල්කරු · ආරක්ෂිත විමසුම් · දේශීය 24/7 සහාය",
      rights: "සියලු හිමිකම් ඇවිරිණි."
    }
  },
  ta: {
    announcement: "உள்ளூர் நிபுணர்கள் வடிவமைக்கும் தனிப்பட்ட இலங்கை பயணங்கள்",
    announcementCta: "இன்றே திட்டமிடுங்கள்",
    nav: {
      tours: "சுற்றுப்பயணங்கள்",
      destinations: "இடங்கள்",
      experiences: "அனுபவங்கள்",
      gallery: "படத்தொகுப்பு",
      journal: "கட்டுரைகள்",
      about: "எங்களை பற்றி",
      contact: "தொடர்பு",
      inquire: "விசாரிக்க",
      plan: "என் பயணம்",
      menu: "மெனுவை திறக்க",
      close: "மெனுவை மூட"
    },
    actions: {
      call: "அழைக்க",
      whatsapp: "WhatsApp",
      planTrip: "திட்டமிடு"
    },
    footer: {
      summary: "உள்ளூர் அறிவு, சரியான பயண ஓட்டம் மற்றும் தேர்ந்தெடுக்கப்பட்ட தங்குமிடங்களுடன் உருவாக்கப்படும் இலங்கை சுற்றுப்பயணங்கள்.",
      destinations: "இடங்கள்",
      tours: "சுற்றுப்பயணங்கள்",
      company: "நிறுவனம்",
      newsletter: "செய்திமடல்",
      newsletterText: "பருவகால பாதை யோசனைகள் மற்றும் பயண திட்ட குறிப்புகள்.",
      trust: "SLTDA பதிவு செய்யப்பட்ட பயண கூட்டாளர் · பாதுகாப்பான விசாரணை · உள்ளூர் 24/7 உதவி",
      rights: "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    }
  }
} as const;

export const homeCopy = {
  en: {
    metadataTitle: "Tailor-Made Sri Lanka Tours",
    metadataDescription: "Discover private Sri Lanka tours in Sinhala, Tamil and English, designed by local travel experts.",
    heroEyebrow: "Discover the Pearl of the Indian Ocean",
    heroTitle: "Journeys Through Sri Lanka, Designed Around You",
    heroDescription: "Private tours, authentic local experiences and unforgettable stays, created by people who call Sri Lanka home.",
    exploreTours: "Explore Tours",
    planJourney: "Plan Your Journey",
    searchTitle: "Find your Sri Lanka tour",
    destination: "Destination",
    tourType: "Tour type",
    duration: "Duration",
    travelDate: "Travel date",
    travellers: "Travellers",
    search: "Search",
    introEyebrow: "Local island specialists",
    introTitle: "Sri Lanka, Planned With Local Context",
    introText: "From Colombo arrivals to village kitchens, tea country rail journeys, wildlife parks and coastlines, we shape routes around seasonality, Sinhala and Tamil cultural context, and realistic travel times.",
    destinationsTitle: "Island Regions Worth Slowing Down For",
    destinationsText: "Explore the Cultural Triangle, central hills, southern coast and east coast with timing that fits Sri Lanka's changing monsoons.",
    toursTitle: "Private Sri Lanka Routes",
    experiencesTitle: "Signature Sri Lankan Experiences",
    finalTitle: "Your Sri Lankan Story Starts Here",
    finalText: "Tell us what you love and our local team will create your journey."
  },
  si: {
    metadataTitle: "පුද්ගලික ශ්‍රී ලංකා සංචාර",
    metadataDescription: "දේශීය සංචාරක විශේෂඥයින් විසින් සිංහල, දෙමළ සහ ඉංග්‍රීසි භාෂාවලින් සැලසුම් කරන ශ්‍රී ලංකා සංචාර.",
    heroEyebrow: "ඉන්දියානු සාගරයේ මැණික සොයාගන්න",
    heroTitle: "ඔබ වෙනුවෙන් සැලසුම් කරන ශ්‍රී ලංකා ගමන්",
    heroDescription: "ශ්‍රී ලංකාව තම නිවස ලෙස දන්නා අපගේ දේශීය කණ්ඩායම විසින් නිර්මාණය කරන පුද්ගලික සංචාර, අව්‍යාජ අත්දැකීම් සහ අමරණීය නවාතැන්.",
    exploreTours: "සංචාර බලන්න",
    planJourney: "ගමන සැලසුම් කරන්න",
    searchTitle: "ඔබට ගැලපෙන සංචාරය සොයන්න",
    destination: "ගමනාන්තය",
    tourType: "සංචාර වර්ගය",
    duration: "කාලය",
    travelDate: "ගමන් දිනය",
    travellers: "ගමන්කරුවන්",
    search: "සොයන්න",
    introEyebrow: "දේශීය දිවයින විශේෂඥයින්",
    introTitle: "දේශීය අවබෝධයෙන් සැලසුම් කරන ශ්‍රී ලංකාව",
    introText: "කොළඹ පැමිණීමෙන් ආරම්භ කර ගම්මාන කෑම, දුම්රිය ගමන්, වනජීවී උද්‍යාන සහ වෙරළබඩ නිවාඩු දක්වා අපි කාලගුණය, සිංහල හා දෙමළ සංස්කෘතිය සහ සැබෑ ගමන් කාලය අනුව මාර්ග සැලසුම් කරමු.",
    destinationsTitle: "නිහතමානීව විඳිය යුතු දිවයිනේ කලාප",
    destinationsText: "සංස්කෘතික ත්‍රිකෝණය, මධ්‍යම කඳුකරය, දකුණු වෙරළ සහ නැගෙනහිර වෙරළ නිවැරදි කාලයට අනුව විඳින්න.",
    toursTitle: "පුද්ගලික ශ්‍රී ලංකා මාර්ග",
    experiencesTitle: "විශේෂ ශ්‍රී ලාංකීය අත්දැකීම්",
    finalTitle: "ඔබේ ශ්‍රී ලංකා කතාව මෙතැනින් ආරම්භ වේ",
    finalText: "ඔබ කැමති දේ කියන්න. අපගේ දේශීය කණ්ඩායම ඔබේ ගමන සැලසුම් කරයි."
  },
  ta: {
    metadataTitle: "தனிப்பட்ட இலங்கை சுற்றுப்பயணங்கள்",
    metadataDescription: "உள்ளூர் பயண நிபுணர்கள் வடிவமைக்கும் சிங்களம், தமிழ் மற்றும் ஆங்கில ஆதரவு கொண்ட இலங்கை சுற்றுப்பயணங்கள்.",
    heroEyebrow: "இந்தியப் பெருங்கடலின் முத்தை கண்டறியுங்கள்",
    heroTitle: "உங்களை மையமாக வைத்து வடிவமைக்கப்படும் இலங்கை பயணங்கள்",
    heroDescription: "இலங்கையை வீடாக அறிந்த உள்ளூர் குழுவால் உருவாக்கப்படும் தனிப்பட்ட சுற்றுப்பயணங்கள், உண்மையான அனுபவங்கள் மற்றும் மறக்க முடியாத தங்குமிடங்கள்.",
    exploreTours: "சுற்றுப்பயணங்கள்",
    planJourney: "பயணத்தை திட்டமிடு",
    searchTitle: "உங்களுக்கான இலங்கை பயணத்தை தேடுங்கள்",
    destination: "இடம்",
    tourType: "பயண வகை",
    duration: "காலம்",
    travelDate: "பயண தேதி",
    travellers: "பயணிகள்",
    search: "தேடல்",
    introEyebrow: "உள்ளூர் தீவு நிபுணர்கள்",
    introTitle: "உள்ளூர் புரிதலுடன் திட்டமிடப்படும் இலங்கை",
    introText: "கொழும்பு வருகையிலிருந்து கிராம உணவு, தேயிலை மலை ரயில், வனவிலங்கு பூங்காக்கள் மற்றும் கடற்கரை நாட்கள் வரை பருவநிலை, சிங்கள மற்றும் தமிழ் பண்பாட்டு சூழல், உண்மையான பயண நேரம் ஆகியவற்றை கருத்தில் கொண்டு பாதைகளை உருவாக்குகிறோம்.",
    destinationsTitle: "மெதுவாக அனுபவிக்க வேண்டிய தீவுப் பகுதிகள்",
    destinationsText: "கலாச்சார முக்கோணம், மத்திய மலைகள், தெற்கு கடற்கரை மற்றும் கிழக்கு கடற்கரையை சரியான பருவத்தில் அனுபவிக்கவும்.",
    toursTitle: "தனிப்பட்ட இலங்கை பாதைகள்",
    experiencesTitle: "சிறப்பு இலங்கை அனுபவங்கள்",
    finalTitle: "உங்கள் இலங்கை கதை இங்கே தொடங்குகிறது",
    finalText: "நீங்கள் விரும்புவது என்ன என்பதைச் சொல்லுங்கள். எங்கள் உள்ளூர் குழு உங்கள் பயணத்தை உருவாக்கும்."
  }
} as const;
