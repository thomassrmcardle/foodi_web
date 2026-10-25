

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col w-full items-center sm:items-center">
          <h1 className="text-3xl text-centre">Welcome to Cherub</h1>
          <p className="text-centre">Recipes by people, for people.</p>
        </div>

        <div className="max-w-3xl">
            <h1>Our Mission</h1>
            <p>In the modern era, we recognise the value in human-made content, and we hope to provide a platform for food enthusiasts to discover and share recipes.</p>
            <p>We started from a simple foundation - make recipes easier. From timers to images, we re-define the standard of a recipe app while prioritising user experience.</p>

            <h2>Who can upload recipes?</h2>
            <p>Anyone with a Cherub account is able to upload their own recipes. We hope to provide this opportunity to as many as possible.</p>
            <p>However, as per our <a>Terms of Use</a>, this feature may not be available to younger users, and some users may have this capability removed if they are continuously violate our policies.</p>
            
            <h2>How is the platform kept safe?</h2>
            <p>The Cherub Team moderates every single recipe uploaded to the platform. This helps us ensure every public recipe lives up to our standards. Furthermore, it ensures a safe space where users can trust the quality of what they are making.</p>
        </div>


      </main>
    </div>
  );
}
