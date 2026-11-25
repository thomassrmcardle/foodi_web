import Image from "next/image";

import { Metadata } from 'next'; 

import { IconBrandAppleFilled } from '@tabler/icons-react';

export default function Home() {

  function Placeholder() {
    return <Image
      className="section-img"
      alt="Placeholder Image"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail"
      width={420}
      height={240}
    />
  }

  function DownloadLinks() {
    return <div className="flex mb-12 w-full items-center" style={{paddingTop: 16, paddingBottom: 4}}>
      <a className="app_store_button flex">
        <IconBrandAppleFilled color="#ffffff" />
        <h4>App Store</h4>
      </a>
    </div>
  }

  function Divider() {
    return <div style={{height: 100, width: 2, backgroundColor: 'var(--foreground)', opacity: 0.5}} />
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 sm:items-center">
        
        <div className="flex w-full items-center sm:items-center">

          <div className="flex flex-col">
            <h1 className="text-3xl">Recipes made simple.</h1>
            <p>Making food has never been easier</p>

            <DownloadLinks />

          </div>

          <Image
            className="phone-mockup"
            src="/Cherub_Mockup.png"
            alt="Cherub App Screenshot"
            width={500}
          />
        </div>

        <div className="flex flex-row w-full max-w-3xl py-16">
          <div className="flex flex-col flex-1">
            <h2 className="text-centre">10+</h2>
            <p className="text-centre">Public Recipes</p>
          </div>
          <Divider />
          <div className="flex flex-col flex-1">
            <h2 className="text-centre">1</h2>
            <p className="text-centre">Daily User</p>
          </div>
          <Divider />
          <div className="flex flex-col flex-1">
            <h2 className="text-centre">3</h2>
            <p className="text-centre">Positive Reviews</p>
          </div>
        </div>

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
