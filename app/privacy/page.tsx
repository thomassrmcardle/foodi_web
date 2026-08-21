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
            <p>Data collection info</p>

            <h2>Data Usage</h2>
            <p>Data usage info</p>

            <h2>Storage & Third Parties</h2>
            <p>Info about data sotrage</p>

            <h2>Data Management & Deletion</h2>
            <p>Info about management and deletion</p>

            <h2>User Rights</h2>
            <p>Info on rights</p>

        </div>

        <p>{'Last Update: [NEW_DATE]'}</p>

      </main>
    </div>
  );
}
