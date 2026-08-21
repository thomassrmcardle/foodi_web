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
        <h1 className="text-3xl">Privacy Policy</h1>
        <p>The content will go here. This is just a placeholder for now.</p>
      </main>
    </div>
  );
}
