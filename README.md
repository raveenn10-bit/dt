# Ceylon Travel Holidays

Production-ready Next.js App Router website for a Sri Lankan travel agency, with premium editorial UI, typed local content, SEO metadata, dynamic routes, inquiry APIs and a multi-step trip-planning form.

## Stack

- Next.js 16 App Router, React 19, TypeScript strict mode
- Tailwind CSS 4 design tokens
- Framer Motion for UI motion
- React Hook Form and Zod for form validation
- Lucide React icons and Next/Image
- Server Components by default, Client Components only for interactivity

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

PowerShell may block `npm.ps1` on some Windows setups. Use `npm.cmd install` and `npm.cmd run dev` if needed.

## Environment

Copy `.env.example` to `.env.local` and set production values:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_PHONE_NUMBER`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL`
- `CRM_WEBHOOK_URL`

Secrets are only referenced server-side in adapter placeholders.

## Routes

- `/`
- `/about`
- `/tours`
- `/tours/[slug]`
- `/destinations`
- `/destinations/[slug]`
- `/experiences`
- `/experiences/[slug]`
- `/gallery`
- `/journal`
- `/journal/[slug]`
- `/plan-my-trip`
- `/contact`
- `/api/inquiry`
- `/api/newsletter`

## CMS Integration Notes

The local data layer lives in `data/` and is abstracted by `lib/cms.ts`. Replace the adapter methods with Sanity, Strapi, Supabase or another CMS without changing page components.

Recommended production content strategy:

- Use `slug` as the stable route key.
- Store images with alt text and dimensions.
- Keep itinerary days, FAQs and included/excluded lists as structured arrays.
- Add preview mode only after CMS authentication is configured.

## Security and Forms

- Server-side Zod validation is implemented in API routes.
- Honeypot fields are supported for inquiry and newsletter submissions.
- A simple in-memory rate-limit placeholder is included for the inquiry route.
- Production rate limiting should use durable storage such as Upstash Redis, Vercel KV or a WAF rule.
- Email, CRM, Firebase, Supabase and Sanity integrations should run server-side only.

## Performance Checklist

- Keep hero media compressed and serve AVIF/WebP where possible.
- Use poster images and avoid autoplay video on reduced motion or mobile.
- Audit image dimensions and `sizes` values for new content.
- Keep animation components below the fold lightweight.
- Avoid loading third-party scripts before consent.
- Run Lighthouse on mobile throttling before launch.
- Validate no horizontal overflow at 320px.
- Confirm CLS stays below `0.1` after content and font changes.

## Deployment

Deploy on Vercel:

```bash
npm run build
```

Then connect the repository to Vercel, add environment variables, and deploy. Use Vercel Analytics only after cookie/consent requirements are confirmed for target markets.
