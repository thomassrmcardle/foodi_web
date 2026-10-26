export type Recipe = {
  id: string | number;
  title?: string | null;
  name?: string | null;
  description?: string | null;
  image_url?: string | null;    // optional if you already store full URL
  [key: string]: unknown;
};

function getSupabaseStoragePublicUrl(path: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const bucket = "recipe_images";

  if (!supabaseUrl || !path) return null;

  const cleanPath = path.replace(/^\/+/, "");
  return `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${cleanPath}`;
}

export async function getRecipe(id: string): Promise<Recipe | null> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }

  // Accept numeric IDs only for this initial implementation.
  if (!/^\d+$/.test(id)) {
    console.log('recipe look up failed')
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


export async function getRecipeWithImage(id: string): Promise<(Recipe & { imageUrl?: string | null }) | null> {
  const recipe = await getRecipe(id);
  if (!recipe) return null;
  const image_url = getSupabaseStoragePublicUrl(`${recipe.id}/cover.jpg`)
  return {
    ...recipe,
    image_url,
  };
}