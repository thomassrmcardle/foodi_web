
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'About Cherub',
  description: "This document details the usage of user data on the Cherub platform. This includes what is collected, how it is used, and how you can have it modified or deleted.",
};

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col w-full items-center sm:items-center">
          <h1 className="text-3xl text-centre">Contact Us</h1>
          <p className="text-centre">Please feel free to contact us via any of the methods listed below.</p>
        </div>

        <div className="max-w-3xl">
            <a href='mailto:example@emailprovider.com'>Email Us</a>
        </div>

        <p>Note: Add actual email link</p>


      </main>
    </div>
  );
}
