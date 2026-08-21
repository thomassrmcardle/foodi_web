import Image from "next/image";

import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "This document details the usage of user data on the Foodi platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
            <h1 className="text-3xl">Privacy Policy</h1>

            <h2>About Foodi</h2>
            <p>Foodi is a mobile, web placed application, design to aid users in the process of cooking food through the use of step by step instructions and built in amenities. Built with a global database of user generated recipes, the experience is designed for convenience.</p>
        
            <h2>Data Collection</h2>
            <p>As agreed upon by users in the agreement to the policies of this document, any data submitted by the user within the platform can be saved and stored. This includes the following...
                <ol>
                    <li>Recipes uploaded to the platform, created using the in-app editor, are all saved to the platform's database, provided that the user chooses to save or publish the content.</li>
                    <li>For each of the recipes which are "saved" by users, allowing ease of access, a record is stored of this, associating the connection between the user and the recipe. This data is removed when the user "unsaves" the recipe, or alternatively when the user's data is removed.</li>
                    <li>Text entries submitted within the platform's search feature are stored. This is used to rank the frequency of the usage of search terms by users.</li>
                </ol>
            </p>

            <h2>Data Usage</h2>
            <p>All data considered sensitive, including the username and email address of each user, is kept confidential, only being shown to the corresponding users when signed in.</p>
            <p>Further user generated content, including recipes, the total number of users who have saved each recipe, and the profile picture and display name, are all publically visible through the application's corresponding website at <a href="foodi.com">{"[ADD_SITE_HERE]"}</a>. Data that the user has chosen to keep private, such as recipes which haven't been "published" are not visible to any other users other than their creator. However, this data remains visible to the Foodi team.</p>

            <h2>Storage & Third Parties</h2>
            <p>All data stored and retained off of the devices of users is stored using the third party provider Supabase Inc. Uploaded content is processed by this provided.</p>

            <h2>Data Management & Deletion</h2>
            <p>Upon the deletion of a recipe, all corresponding information will be removed from the platform's database. This action can be enacted by the user who created the user at any time when logged in to the application.</p>
            <p>Likewise, upon the the deletion of a user's account. All corresponding data to them, and all content their have uploaded under that account to the platform.</p>

            <h2>User Rights</h2>
            <p>Every user of the platform has the right to request for any data associated to them to be modified or deleted at any time. Users are able to inititate the deletion of their own account when logged into the application. Most individual data can be modified within the application, and if needed, any user is able to contact the Foodi Team and request a change in the data.</p>

        </div>

        <p>{'Last Update: [NEW_DATE]'}</p>

      </main>
    </div>
  );
}
