import Image from "next/image";

import { Metadata } from 'next'; 

export default function Home() {

  function Placeholder() {
    return <Image
      className="section-img"
      alt="Placeholder Image"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
    />
  }

  function DownloadLinks() {
    return <div>
      <h2>Download Now</h2>
      <p>[Download links will go here...]</p>
    </div>
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <h1 className="text-3xl text-centre">Cooking made simple.</h1>
          <p className="text-centre">Epic sad</p>
        </div>

        <DownloadLinks />

        <div>
          <div className="mb-12 flex flex-row flex-wrap-row gap-12">
            <Placeholder />
            <div>
              <h2>Cook</h2>
              <p>With a recipe system built around cooking</p>
            </div>
          </div>
          <div className="mb-12 flex flex-row flex-wrap-row gap-12">
            <div>
              <h2>Discover</h2>
              <p>From a library of 100s of recipes</p>
            </div>
            <Placeholder />
          </div>
          <div className="mb-12 flex flex-row flex-wrap-row gap-12">
            <Placeholder />
            <div>
              <h2>Share</h2>
              <p>Your recipes with the world!</p>
            </div>
          </div>
        </div>

        <DownloadLinks />

      </main>
    </div>
  );
}
