"use client"

import Head from 'next/head'
import { useSearchParams } from "next/navigation";

export default function Page() {
    const params = useSearchParams()
    const recipe_id = params.get('id')

    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <Head>
                <title>{recipe_id}</title>
            </Head>
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl">Shared Recipe</h1>
                <p>This page should later be populated with content relevant to the shared recipe.</p>
                <p>{recipe_id}</p>
            </main>
        </div>
    );
}