import { NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = newsletterSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }
    if (parsed.data.website) return NextResponse.json({ ok: true });

    // Replace with Resend, Supabase, Sanity or CRM adapter in production.
    console.info("Newsletter signup", { email: parsed.data.email });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to subscribe." }, { status: 500 });
  }
}
