// Directus CMS Client
// Configure NEXT_PUBLIC_DIRECTUS_URL in your .env.local

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://cms.koyta.org';

interface DirectusResponse<T> {
  data: T;
}

export async function fetchFromDirectus<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${DIRECTUS_URL}${endpoint}`;
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Directus fetch failed: ${response.statusText}`);
  }

  const json: DirectusResponse<T> = await response.json();
  return json.data;
}

// Helper to get items from a collection
export async function getCollection<T>(
  collection: string,
  params?: Record<string, string>
): Promise<T[]> {
  const searchParams = new URLSearchParams(params);
  const query = searchParams.toString() ? `?${searchParams}` : '';
  return fetchFromDirectus<T[]>(`/items/${collection}${query}`);
}

// Helper to get a single item
export async function getItem<T>(
  collection: string,
  id: string | number
): Promise<T> {
  return fetchFromDirectus<T>(`/items/${collection}/${id}`);
}

// Helper to get asset URL
export function getAssetUrl(assetId: string): string {
  return `${DIRECTUS_URL}/assets/${assetId}`;
}
