import Image from "next/image";

import { Metadata } from 'next'; 

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <h1 className="text-3xl text-centre">Cooking made simple.</h1>
          <p className="text-centre">Epic sad</p>
        </div>

        <div>
          <div>
            <h2>Cook</h2>
            <p>With a recipe system built around cooking</p>
          </div>
          <div>
            <h2>Discover</h2>
            <p>From a library of 100s of recipes from across the globe</p>
          </div>
          <div>
            <h2>Share</h2>
            <p>Your recipes with the world!</p>
          </div>
        </div>

      </main>
    </div>
  );
}
