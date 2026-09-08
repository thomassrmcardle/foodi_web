import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { Metadata } from 'next'; 

const response = await fetch(
  "https://raw.githubusercontent.com/thomassrmcardle/Cherub_Terms/main/data_terms/content-1.0.md"
);

const markdown = await response.text();

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "This document details the usage of user data on the Cherub platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <ReactMarkdown>
          {markdown}
        </ReactMarkdown>
            

      </main>
    </div>
  );
}
