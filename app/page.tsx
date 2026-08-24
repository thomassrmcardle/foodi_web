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
    return <div className="flex flex-col mb-12 w-full items-center" style={{paddingTop: 16, paddingBottom: 4}}>
      <h2>Download Cherub Now</h2>
      <p>[Download links will go here...]</p>
    </div>
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col w-full items-center sm:items-center">
          <h1 className="text-3xl text-centre">Recipes made simple.</h1>
          <p className="text-centre">Making food has never been easier</p>
        </div>

        <DownloadLinks />

        <div className="max-w-3xl">
          <div className="mb-12 flex flex-row flex-wrap-row gap-28">
            <Placeholder />
            <div className="justify-center flex flex-col flex-1">
              <h2>Cook</h2>
              <p>With a recipe system built around cooking</p>
            </div>
          </div>
          <div className="mb-12 flex flex-row flex-wrap-row gap-28">
            <div className="justify-center flex flex-col flex-1">
              <h2>Discover</h2>
              <p>From a library of 100s of recipes</p>
            </div>
            <Placeholder />
          </div>
          <div className="mb-12 flex flex-row flex-wrap-row gap-28">
            <Placeholder />
            <div className="justify-center flex flex-col flex-1">
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
