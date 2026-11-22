import Image from "next/image";
import { Metadata } from 'next'; 

export const metadata: Metadata = {
  title: 'Thomas McArdle | Cherub',
  description: "The creator of Cherub, Thomas McArdle created the recipe sharing platform from scratch.",
};

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
       
       <div className="flex flex-col w-full items-center sm:items-center">
          <h1 className="text-3xl text-centre">The Person Behind Cherub</h1>
          <p className="text-centre">Who I am and why I made it.</p>
        </div>

        <div className="max-w-3xl">

            <Image
                alt="Thomas McArdle LinkedIn profile picture"
                src="https://avatars.githubusercontent.com/u/229652853?v=4"
                width={100}
                height={100}
                className="rounded-full"
                preload
            />

            <h2>Who am I?</h2>
            <p>My name is <a href='https://www.linkedin.com/in/thomas-sr-mcardle/'>Thomas McArdle</a>, and I'm an aspiring software developer. I've a keen interest in the applications of modern technology in everyday life, and enjoy exploring such paths.</p>

            <h2>Why did I make Cherub?</h2>
            <p>Cherub started off as an idea - make recipes easier.</p>
            <p>I recognised that countless recipe apps already existed, but none seemed to properly aid the experience of cooking, seemingly being simple digitised versions of traditional recipe books; so I saught to change that. I designed the core experience with the user's in mind, making the steps easy to follow, and building useful features such as portion scaling, focussing on the UX rather than the data it presented.</p>
        </div>


      </main>
    </div>
  );
}
