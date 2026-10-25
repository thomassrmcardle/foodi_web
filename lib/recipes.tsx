export type Recipe = {
  id: string | number;
  title?: string | null;
  name?: string | null;
  description?: string | null;
  image_url?: string | null;
  ingredients?: unknown;
  instructions?: unknown;
  steps?: unknown;
  [key: string]: unknown;
};

export async function getRecipe(id: string): Promise<Recipe | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }

  // Accept numeric IDs only for this initial implementation.
  if (!/^\d+$/.test(id)) {
    return null;
  }

  const url = new URL("/rest/v1/recipes_public", supabaseUrl);
  url.searchParams.set("select", "*");
  url.searchParams.set("id", `eq.${id}`);
  url.searchParams.set("limit", "1");

  const response = await fetch(url, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("Recipe lookup failed:", response.status);
    throw new Error("Unable to load recipe");
  }

  const recipes: Recipe[] = await response.json();
  return recipes[0] ?? null;
}