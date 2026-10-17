export interface PlaceSuggestion {
  placeId: string;
  /** Full value for the form: "Nombre, Calle 123, Ciudad" */
  text: string;
  /** Clinic / place name shown in the dropdown */
  mainText: string;
  /** Street with number + city shown under the name */
  secondaryText?: string;
}

interface PlacesAutocompleteText {
  text?: string;
}

interface PlacesAutocompletePrediction {
  placeId?: string;
  text?: PlacesAutocompleteText;
  structuredFormat?: {
    mainText?: PlacesAutocompleteText;
    secondaryText?: PlacesAutocompleteText;
  };
}

interface PlacesAutocompleteSuggestion {
  placePrediction?: PlacesAutocompletePrediction;
}

interface PlacesAutocompleteResponse {
  suggestions?: PlacesAutocompleteSuggestion[];
}

const PLACES_AUTOCOMPLETE_URL = process.env.NEXT_PUBLIC_PLACES_AUTOCOMPLETE_URL ?? "";
const PLACES_DETAILS_URL = process.env.NEXT_PUBLIC_PLACES_DETAILS_URL ?? "";
const PLACES_AUTOCOMPLETE_FIELD_MASK = [
  "suggestions.placePrediction.placeId",
  "suggestions.placePrediction.text",
  "suggestions.placePrediction.structuredFormat",
].join(",");
const PLACES_DETAILS_FIELD_MASK = ["formattedAddress", "shortFormattedAddress", "displayName"].join(
  ",",
);

interface PlaceDetailsResponse {
  formattedAddress?: string;
  shortFormattedAddress?: string;
  displayName?: {text?: string};
}

export interface PlaceDetails {
  /** "Nombre, Calle 123, Ciudad" */
  address: string;
  name?: string;
  /** Calle + numeración + ciudad */
  streetAddress?: string;
}

function buildPlaceLabel(name?: string, streetAddress?: string): string | null {
  const trimmedName = name?.trim();
  const trimmedStreet = streetAddress?.trim();

  if (!trimmedName && !trimmedStreet) return null;

  if (trimmedName && trimmedStreet) {
    if (trimmedStreet.toLowerCase().startsWith(trimmedName.toLowerCase())) {
      return trimmedStreet;
    }

    return `${trimmedName}, ${trimmedStreet}`;
  }

  return trimmedStreet ?? trimmedName ?? null;
}

function mapSuggestions(data: PlacesAutocompleteResponse): PlaceSuggestion[] {
  return (data.suggestions ?? []).flatMap((suggestion) => {
    const prediction = suggestion.placePrediction;
    const placeId = prediction?.placeId;
    const text = prediction?.text?.text;

    if (!placeId || !text) return [];

    return [
      {
        placeId,
        text,
        mainText: prediction.structuredFormat?.mainText?.text ?? text,
        secondaryText: prediction.structuredFormat?.secondaryText?.text,
      },
    ];
  });
}

async function enrichSuggestion(
  suggestion: PlaceSuggestion,
  apiKey: string,
  signal?: AbortSignal,
): Promise<PlaceSuggestion> {
  try {
    const details = await getGooglePlaceDetails(suggestion.placeId, apiKey, signal);

    if (!details) return suggestion;

    return {
      placeId: suggestion.placeId,
      text: details.address,
      mainText: details.name ?? suggestion.mainText,
      secondaryText: details.streetAddress ?? suggestion.secondaryText,
    };
  } catch {
    return suggestion;
  }
}

/** Server-side call to Places API (New). Keep the API key off the client. */
export async function searchGooglePlaces(
  input: string,
  apiKey: string,
  signal?: AbortSignal,
): Promise<PlaceSuggestion[]> {
  const trimmed = input.trim();

  if (trimmed.length < 3) return [];

  const response = await fetch(PLACES_AUTOCOMPLETE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": PLACES_AUTOCOMPLETE_FIELD_MASK,
    },
    body: JSON.stringify({
      input: trimmed,
      languageCode: "es",
      regionCode: "AR",
      includedRegionCodes: ["AR"],
      includedPrimaryTypes: ["veterinary_care"],
    }),
    signal,
  });

  if (!response.ok) {
    throw new Error(`Places API error (${String(response.status)}): ${await response.text()}`);
  }

  const data = (await response.json()) as PlacesAutocompleteResponse;
  const suggestions = mapSuggestions(data);

  // Autocomplete omits street numbers — enrich each prediction with Place Details
  return Promise.all(suggestions.map((suggestion) => enrichSuggestion(suggestion, apiKey, signal)));
}

/** Server-side Place Details (New) — includes street number via formattedAddress. */
export async function getGooglePlaceDetails(
  placeId: string,
  apiKey: string,
  signal?: AbortSignal,
): Promise<PlaceDetails | null> {
  const trimmed = placeId.trim();

  if (!trimmed) return null;

  const url = new URL(`${PLACES_DETAILS_URL}/${encodeURIComponent(trimmed)}`);

  url.searchParams.set("languageCode", "es");
  url.searchParams.set("regionCode", "AR");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": PLACES_DETAILS_FIELD_MASK,
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(`Place Details error (${String(response.status)}): ${await response.text()}`);
  }

  const data = (await response.json()) as PlaceDetailsResponse;
  const streetAddress = data.formattedAddress ?? data.shortFormattedAddress;
  const name = data.displayName?.text?.trim();
  const address = buildPlaceLabel(name, streetAddress);

  if (!address) return null;

  return {address, name, streetAddress};
}

/** Client-side helper — proxies through our API route (Places API New has no CORS). */
export async function fetchPlaceSuggestions(
  input: string,
  signal?: AbortSignal,
): Promise<PlaceSuggestion[]> {
  const trimmed = input.trim();

  if (trimmed.length < 3) return [];

  const response = await fetch("/api/places/autocomplete", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({input: trimmed}),
    signal,
  });

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as {suggestions?: PlaceSuggestion[]};

  return data.suggestions ?? [];
}

/** Client-side helper — resolves the full address (with street number) for a place. */
export async function fetchPlaceDetails(
  placeId: string,
  signal?: AbortSignal,
): Promise<PlaceDetails | null> {
  const response = await fetch("/api/places/details", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({placeId}),
    signal,
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {details?: PlaceDetails | null};

  return data.details ?? null;
}
