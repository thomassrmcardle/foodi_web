import Image from "next/image";

import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "This document details the usage of user data on the Cherub platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
            <h1 className="text-3xl">Privacy Policy</h1>

            <h2>About Cherub</h2>
            <p>Cherub is a mobile and web application, design to aid users in the process of cooking food through the use of step by step instructions and built in amenities. Built with a global database of user generated recipes, the experience is designed for convenience.</p>
        
            <h2>Profile Data</h2>
            <p>Upon signing up for the platform, some information is required about each user. Some of this data may be used to restrict features as necessary by law as reflected within our <a href="../policies/terms">Terms of Use</a>. The following is a list of collected data from the onboarding process and how it is used.</p>
            <ol>
              <li>Each user is asked to give a name to be referred as. This is not required to be their legal name. The name provided will be used for personalisation within the app, and if the user is over the age of 16, it will be publically visible on their profile if their profile is made "public".</li>
              <li>Every user is required to give an accurate date of birth. This is used to meet legal requirements to restrict users from specific features (when necessary) depending on the user's age group. You can find out more about these restrictions within our <a href="../policies/terms">Terms of Use</a> document.</li>
              <li>An email address is required for each user. Each email address can only be linked to one account. This address may be used to contact the user where necessary, whether by the Cherub Team directly, or by automatically processes within the platform's functionality.</li>
              <li>All Cherub accounts require a password to keep the associated information secure. Every password is encrypted within our database for the purpose of user privacy and account safety. For information on how to change your password or how to recover an account, please see our <a href="../policies/terms">Terms of Use</a> for advice.</li>
            </ol>

            <h2>Data Collection</h2>
            <p>As agreed upon by users in the agreement to the policies of this document, any data submitted by the user within the platform can be saved and stored. This includes the following...</p>
            <ol>
                <li>Recipes uploaded to the platform, created using the in-app editor, are all saved to the platform's database, provided that the user chooses to save or publish the content.</li>
                <li>For each of the recipes which are "saved" by users, allowing ease of access, a record is stored of this, associating the connection between the user and the recipe. This data is removed when the user "unsaves" the recipe, or alternatively when the user's data is removed.</li>
                <li>Individual text entries submitted within the platform's search feature are stored. This is used to rank the frequency of the usage of search terms by users.</li>
            </ol>

            <h2>Data Usage</h2>
            <p>All personal data, including the username and email address of each user, is kept confidential, only being shown to the corresponding users when signed in.</p>
            <p>Further user generated content, including recipes, the total number of users who have saved each recipe, and the profile picture and display name, are all publically visible through the application's corresponding website at <a href="cherub.com">{"[ADD_SITE_HERE]"}</a>. Data that the user has chosen to keep private, such as recipes which haven't been "published" are not visible to any other users other than their creator. However, this data may be accessed and modified by authorized members of the Cherub Team for the purposes of maintaining, debugging, securing or operating the service.</p>
            <p>Additionally, all recipe data made public to all users on the platform can be displayed within the application and website to anyone, and may be used in promotional material to promote the usage of the platform.</p>

            <h2>Storage & Third Parties</h2>
            <p>All data stored and retained off of the devices of users is stored using the third party provider Supabase Inc. Uploaded content is processed by Supabase Inc.</p>

            <h2>Data Management & Deletion</h2>
            <p>Upon the deletion of a recipe, all corresponding information will be removed from the platforms active systems. This action can be enacted by the user who created the user at any time when logged in to the application.</p>
            <p>Likewise, upon the the deletion of a user's account. All corresponding data to them, and all content they have uploaded under that account to the platform will be removed from our active systems upon request.</p>

            <h2>User Rights</h2>
            <p>Every user of the platform has the right to request for any data associated to them to be modified or deleted at any time. Users are able to inititate the deletion of their own account when logged into the application. Most individual data can be modified within the application, and if needed, any user is able to contact the Cherub Team and request a change in the data.</p>

            <h2>Contact</h2>
            <p>If you have any additional questions or wish to request access, modification, or deletion of your personal data, you can contact the Cherub Team at the following email address:</p>
            <p>{'[email]'}</p>

        </div>

        <p style={{marginTop: 16}}>{'Document Version: 1'}</p>
        <p>{'Last Update: [NEW_DATE]'}</p>

      </main>
    </div>
  );
}
