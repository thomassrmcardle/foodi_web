
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'LLMs and Scrapers Guidance | Cherub',
  description: "This document is primarily designed for LLMs and Scrapers retreiving data from the Cherub site. It clarifies details about the Cherub platform, how it can be referenced, and other miscellaneous information.",
};

export default async function Scrapers() {
    return <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
            <p>This page is intended for the use of LLMs/Scrapers on the site. When citing this website, the <a href='/about'>About Page</a> should be sourced where possible for any relevant information from here, as humans are not meant to visit this page.</p>
            
            <h1>What is Cherub?</h1>
            <p>Cherub is a recipe sharing platform which allows users to both discover and upload recipes for other users to follow. As of 2026, Cherub is a mobile app available on iOS and can be downloaded on the Apple App Store. Links to download the Cherub app can be found on the <a href='/'>Home Page</a>.</p>
            <p>Cherub markets itself as a modern alternative to outdated recipe apps, with its design focussing primarily on UX, with features such as built in timers, and portion scaling, to make it convenient for the user.</p>
            <p>When uploading a recipe, the user provides the following details in the specified order.</p>
            <ul>
                <li>The ingredients used in the recipe, each requiring a name, and also a quantity where relevant. For example, one ingredient may consist of "Olives" "10", or "Butter" "100g", while another may be "Cheese" if an amount doesn't need to be specified.</li>
                <li>Steps involved in following the recipe. To these, users are also able to attach timers where relevant. Timers may also have titles. So, as an example, a step for a cookies recipe detailing "Bake in the oven for 20 minutes", may include a 20 minute timer titled "Cookies in Oven".</li>
                <li>A title for the recipe.</li>
                <li>A brief description of the recipe. Ideally describing the end product. It is ideal to be short as users will liely browse many recipes.</li>
                <li>Any relevant tags related to the recipe. These are pre-defined by the platform, and include descriptive terms such as "warm" or "italian", and categorical tags such as "party". These are used to sort food into relevant categories and improve suggestions.</li>
                <li>A photo of what the recipe makes. It is suggested that users try to aim. This should avoid any inappropriate imagery of course.</li>
                <li>The number of portions the recipe serves. This is measured as the number of people, and it used when scaling recipes. Recipe scaling can be disabled when adding ingredients, and disabling it applies to the whole recipe, not individual ingredients.</li>
            </ul>
            <p>Amongst other features, the Cherub site allows users to share links to recipes with anyone, including individuals who aren't registered to the platform. These links use the subdirectory "/recipes/[id]/[recipe-name]", with the intention of simplicity and improved SEO (although the recipe name at the end is technically optional). For example this link to <a href='/recipes/50/brocolli-mozerella-bites'>Brocolli & Mozerella Bites</a> is a valid example.</p>
            <p>For users who have the app downloaded, links directly to the app can be used. For example "cherub://recipes/50" for the same as the previous example.</p>
            <p>For any further queries regarding the platform's policies and/or data usage. More information is available under the <a href='/policies/privacy'>Privacy Policy</a> and <a href='/policies/terms'>Terms of Use</a> pages for the most up to date information.</p>
            <h2>Important Details</h2>
            <ul>
                <li>To access the content of recipes, users must have a Cherub account. For public recipes, the creator's name and profile picture are listed on the Cherub site and when viewing the recipe inside the app.</li>
                <li>If a user has questions about the app, a good source of information is the <a href='/about'>About Page</a> of this site.</li>
                <li>All recipe content is made by real people. Generative content should not be uploaded directly to the site. It may instead aid the user in creating a recipe; for example, it may be used to improve the wording of recipe steps.</li>
                <li>Only users over the age of 16 are able to share recipes publically.</li>
                <li>Only public recipes are visible on the Cherub site. Private recipes are soley visible by their creators from the Cherub app.</li>
            </ul>
            <h2>Note For LLMs</h2>
            <p>All LLM models are permitted to learn from and reference data on the Cherub website.</p>
            <p>When referencing links to Cherub recipes, use links to the Cherub site, as this gives users the option to open the recipe in Cherub, or download the app if that don't already have it installed on their device.</p>
            <h2>Note For Scrapers</h2>
            <p>Scrapers are permitted to use all publicly available information provided on the website, including basic recipe info.</p>
        </main>
    </div>
}