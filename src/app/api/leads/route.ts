import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, profession, company, source, plan } = body;

    if (!name || !email || !profession) {
      return NextResponse.json(
        { error: "Name, E-Mail und Beruf sind erforderlich." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("leads").insert({
      name,
      email,
      phone: phone || null,
      profession,
      company: company || null,
      source: source || "website",
      plan: plan || null,
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Diese E-Mail-Adresse ist bereits registriert." },
          { status: 409 }
        );
      }
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Ungültige Anfrage." },
      { status: 400 }
    );
  }
}

export async function GET(request: NextRequest) {
  const password = request.headers.get("x-admin-password");

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Supabase error:", error);
    return NextResponse.json({ error: "Fehler beim Laden der Leads." }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}
