import { env } from "cloudflare:workers";

export type Recipe = {
  id: string | number;
  title?: string | null;
  name?: string | null;
  description?: string | null;
  author?: string | null;
  author_profile?: Profile | null;
  creator_pfp?: string | null;
  image_url?: string | null;    // optional if you already store full URL
  [key: string]: unknown;
};

export type Profile = {
  id: string | null;
  display_name?: string | null,
}

function getSupabaseStoragePublicUrl(bucket : string, path: string) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!supabaseUrl || !path) return null;
  const cleanPath = path.replace(/^\/+/, "");
  return `${supabaseUrl.replace(/\/$/, "")}/storage/v1/object/public/${bucket}/${cleanPath}`;
}

export async function getUserProfile(user_id : string): Promise<Profile | null> {
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase environment variables");
  }
  const url = new URL("/rest/v1/public_profiles", supabaseUrl);
  url.searchParams.set("select", "*");
  url.searchParams.set("id", `eq.${user_id}`);
  url.searchParams.set("limit", "1");
 
  const response = await fetch(url, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    console.error("User lookup failed:", response.status);
    throw new Error("Unable to load recipe");
  }

  const users: Profile[] = await response.json();
  return users[0] ?? null;
}

export async function getRecipe(id: string): Promise<Recipe | null> {
  const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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
  const author_profile = await getUserProfile(recipe.author ?? '')
  const image_url = getSupabaseStoragePublicUrl('recipe_images', `${recipe.id}/cover.jpg`)
  const creator_pfp = getSupabaseStoragePublicUrl('user_profiles', `${recipe.author}/profile_picture.jpg`)
  return {
    ...recipe,
    creator_pfp,
    author_profile,
    image_url,
  };
}