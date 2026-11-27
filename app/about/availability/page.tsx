
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'About Cherub',
  description: "This document details the usage of user data on the Cherub platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 sm:items-center">

        <div className="max-w-3xl">

            <h1>Cherub's Availability</h1>
            <p>We prioritise the quality of user experience, and as such we aim to release Cherub gradually internationally over time, adding supported regions as we see fit.</p>
            <p>A large contribution factor to the selected regions is the quantity of recipe content. With a localised experience, we ideally want each user to be able to find recipes in a language they are fluent in without being constrained to a small amount od recipes.</p>
            <p>If you want to help in our efforts, you can change your language to a language in "Beta", allowing you to publish recipes in languages not fully supported yet.</p>
            <p>We send a warm thank you to anyone who chooses to share a recipe!</p>

            <h2>Supported Regions</h2>
            <ol>
                <li>English Speaking Countries - English with American English supported as a dialect.</li>
            </ol>

            <h2>Planned Regions</h2>
            <ol>
                <li>Spanish Speaking Countries - Spanish</li>
            </ol>

            <p>If you'd like to request a language that wasn't listed above, please feel free to <a href='/about/contact'>Contact Us</a>, as we'd love to hear any suggestions.</p>
            
        </div>


      </main>
    </div>
  );
}
