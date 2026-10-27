import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRecipe, getRecipeWithImage } from "@/lib/recipes";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ id: string; slug: string }>;
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

function recipeTitle(recipe: {
  title?: string | null;
  name?: string | null;
}) {
  return recipe.title || recipe.name || "Recipe";
}

function slugify(value: string) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { id, slug } = await params;
  const recipe = await getRecipeWithImage(id);

  console.log('Got recipe',id)

  if (!recipe) {
    return { title: "Recipe not found | Cherub" };
  }

  const caption = 'Discover and share even more recipes on Cherub.'

  const title = recipeTitle(recipe);
  const description =
    recipe.description + '\n' + caption || `Discover ${title} on Cherub.`;

  const canonical = `/recipes/${encodeURIComponent(id)}/${slugify(title)}`;
  const absoluteUrl = new URL(canonical, siteUrl).toString();
  const imageUrl = recipe.image_url
    ? new URL(recipe.image_url, siteUrl).toString()
    : undefined;

  return {
    title: `${title} | Cherub`,
    description,
    alternates: {
      canonical: absoluteUrl,
    },
    openGraph: {
      type: "article",
      siteName: "Cherub",
      title,
      description,
      url: absoluteUrl,
      images: imageUrl? [{url: imageUrl}] : undefined,
    },
    twitter: {
      card: recipe.image_url ? "summary_large_image" : "summary",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}


export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipe = await getRecipeWithImage(id);

  if (!recipe) notFound()

  const title = recipeTitle(recipe);

  // Replace this with Cherub's actual registered URL scheme
  // or, preferably, its verified universal/app link.
  const appUrl = `cherub://recipe/${id}`;

  return (
    <main className="mx-auto max-w-3xl px-5 py-10">

      {recipe.image_url && (
        <img 
          src={recipe.image_url}
          alt={title}
          className="mb-8 h-72 w-full rounded-2xl object-cover"
        />
      )}

      <header className="mb-8">

        <h1 className="mt-5 text-4xl font-bold tracking-tight">
          {title}
        </h1>

        {recipe.description && (
          <p className="mt-3 text-lg">
            {recipe.description}
          </p>
        )}

        {recipe.author && (
          <div className="gap-12">
            <img
              src={recipe.creator_pfp ?? 'https://placehold.co/100x100'}
              className="pfp rounded-2xl"
            />
            <div>
              <h2>{recipe.author}</h2>
              <p>Cherub User</p>
            </div>
          </div>
        )}

      </header>

      <div className="gap-12 mb-10 inline-flex">
        <a href={appUrl} className="rounded-full bg-green no-decor px-6 py-3 font-semibold text-white">
          Open in Cherub
        </a>
        <a href='/' className="rounded-full bg-grey no-decor px-6 py-3 font-semibold">
          Download Cherub
        </a>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 text-2xl font-bold">Ingredients</h2>


          <p className="text-gray-600">
            Ingredients will be available here soon.
          </p>
      </section>
    </main>
  );
}