import {NextResponse} from "next/server";

import {searchGooglePlaces} from "@/shared/lib/google-places";

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({error: "Missing Google Maps API key"}, {status: 500});
  }

  let input = "";

  try {
    const body = (await request.json()) as {input?: unknown};

    input = typeof body.input === "string" ? body.input : "";
  } catch {
    return NextResponse.json({error: "Invalid request body"}, {status: 400});
  }

  try {
    const suggestions = await searchGooglePlaces(input, apiKey, request.signal);

    return NextResponse.json({suggestions});
  } catch (error) {
    console.error("Places autocomplete failed:", error);

    return NextResponse.json({suggestions: []}, {status: 502});
  }
}
