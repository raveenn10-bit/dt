import { NextResponse } from "next/server";
import { inquirySchema } from "@/lib/validation";
import { sanitizeText } from "@/lib/utils";

const inMemoryRateLimit = new Map<string, { count: number; resetAt: number }>();

function rateLimited(ip: string) {
  const now = Date.now();
  const current = inMemoryRateLimit.get(ip);
  if (!current || current.resetAt < now) {
    inMemoryRateLimit.set(ip, { count: 1, resetAt: now + 60_000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    if (rateLimited(ip)) {
      return NextResponse.json({ error: "Too many requests. Please wait and try again." }, { status: 429 });
    }

    const body = await request.json();
    const parsed = inquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid inquiry details." }, { status: 400 });
    }

    if (parsed.data.website) {
      return NextResponse.json({ ok: true });
    }

    const inquiry = {
      ...parsed.data,
      fullName: sanitizeText(parsed.data.fullName),
      message: sanitizeText(parsed.data.message || "")
    };

    // Adapter placeholders:
    // - Resend: send email using RESEND_API_KEY and INQUIRY_TO_EMAIL.
    // - Supabase/Firebase: insert sanitized inquiry server-side.
    // - Sanity: create a draft lead document with server token.
    // - CRM webhook: POST to CRM_WEBHOOK_URL from the server only.
    console.info("Inquiry received", {
      fullName: inquiry.fullName,
      email: inquiry.email,
      destinations: inquiry.destinations,
      budgetRange: inquiry.budgetRange
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit inquiry." }, { status: 500 });
  }
}
