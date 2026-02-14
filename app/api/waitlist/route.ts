import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createServerSupabaseClient } from "@/lib/supabase";

const waitlistSchema = z.object({
  full_name: z.string().min(1, "Full name is required").max(200),
  company: z.string().min(1, "Company is required").max(200),
  email: z.string().email("Invalid email").max(254),
  website_url: z.preprocess(
    (v) => (v === "" || v == null ? undefined : v),
    z.string().url().optional()
  ),
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
  utm_term: z.string().max(100).optional(),
  utm_content: z.string().max(100).optional(),
  _form_load_time: z.number().optional(),
  _honeypot: z.string().optional(),
});

const MIN_SUBMIT_MS = 800;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body._honeypot) {
      return NextResponse.json({ success: true });
    }

    const formLoadTime = body._form_load_time as number | undefined;
    if (formLoadTime && Date.now() - formLoadTime < MIN_SUBMIT_MS) {
      return NextResponse.json(
        { error: "Submission too fast" },
        { status: 400 }
      );
    }

    const parsed = waitlistSchema.safeParse({
      ...body,
      website_url: body.website_url || undefined,
    });

    if (!parsed.success) {
      const msg = parsed.error.errors[0]?.message || "Validation failed";
      return NextResponse.json({ error: msg }, { status: 400 });
    }

    const { data } = parsed;
    const userAgent = request.headers.get("user-agent") ?? null;
    const referrer = request.headers.get("referer") ?? null;

    const supabase = createServerSupabaseClient();

    const { error } = await supabase.from("waitlist_leads").insert({
      full_name: data.full_name,
      company: data.company,
      email: data.email,
      website_url: data.website_url || null,
      source: "landing",
      utm_source: data.utm_source ?? null,
      utm_medium: data.utm_medium ?? null,
      utm_campaign: data.utm_campaign ?? null,
      utm_term: data.utm_term ?? null,
      utm_content: data.utm_content ?? null,
      user_agent: userAgent,
      referrer: referrer,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to save. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist API error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
