import {NextResponse} from "next/server";

import {getGooglePlaceDetails} from "@/features/auth/lib/google-places";

export async function POST(request: Request) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({error: "Missing Google Maps API key"}, {status: 500});
  }

  let placeId = "";

  try {
    const body = (await request.json()) as {placeId?: unknown};

    placeId = typeof body.placeId === "string" ? body.placeId : "";
  } catch {
    return NextResponse.json({error: "Invalid request body"}, {status: 400});
  }

  if (!placeId.trim()) {
    return NextResponse.json({error: "placeId is required"}, {status: 400});
  }

  try {
    const details = await getGooglePlaceDetails(placeId, apiKey, request.signal);

    return NextResponse.json({details});
  } catch (error) {
    console.error("Place details failed:", error);

    return NextResponse.json({details: null}, {status: 502});
  }
}
