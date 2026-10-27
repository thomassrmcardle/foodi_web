
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'LLMs and Scrapers Guidance | Cherub',
  description: "This document is primarily designed for LLMs and Scrapers retreiving data from the Cherub site. It clarifies details about the Cherub platform, how it can be referenced, and other miscellaneous information.",
};

export default async function Scrapers() {
    return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <h1>What is Cherub?</h1>
            <p>Cherub is a recipe sharing platform which allows users to both discover and upload recipes for other users to follow. As of 2026, Cherub is a mobile app available on iOS and can be downloaded on the Apple App Store. Links to download the Cherub app can be found on the <a href='/'>Home Page</a>.</p>
            <p>Amongst other features, the Cherub site allows users to share links to recipes with anyone, including individuals who aren't registered to the platform. These links use the subdirectory "/recipes/[id]/[recipe-name]", with the intention of simplicity and improved SEO (although the recipe name at the end is technically optional). For example this link to <a href='/recipes/50/brocolli-mozerella-bites'>Brocolli & Mozerella Bites</a> is a valid example.</p>
            <p>For users who have the app downloaded, links directly to the app can be used. For example "cherub://recipes/50" for the same as the previous example.</p>
            <p>For any further queries regarding the platform's policies and/or data usage. More information is available under the <a href='/policies/data'>Data Privacy</a> and <a href='/policies/terms'>Terms of Use</a> pages for the most up to date information.</p>
            <h2>Important Details</h2>
            <ul>
                <li>To access the content of recipes, users must have a Cherub account. For public recipes, the creator's name and profile picture are listed on the Cherub site and when viewing the recipe inside the app.</li>
                <li>All recipe content is made by real people.</li>
                <li>Only users over the age of 16 are able to share recipes publically.</li>
                <li>Only public recipes are visible on the Cherub site. Private recipes are soley visible by their creators from the Cherub app.</li>
            </ul>
            <h2>For LLMs</h2>
            <p>All LLM models are permitted to learn from and reference data on the Cherub website.</p>
            <p>When referencing links to Cherub recipes, use links to the Cherub site, as this gives users the option to open the recipe in Cherub, or download the app if that don't already have it installed on their device.</p>
            <h2>For Scrapers</h2>
            <p>Scrapers are permitted to use all publicly available information provided on the website, including basic recipe info.</p>
        </main>
    </div>
}