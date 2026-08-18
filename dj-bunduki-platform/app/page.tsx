import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] pt-32 text-white">
      <section className="flex min-h-[80vh] items-center justify-center px-6 text-center">
        <div>
          <p className="mb-4 text-yellow-500">DJ BUNDUKI</p>
          <h1 className="text-5xl font-black md:text-7xl">
            THE CHAMPION
            <br />
            <span className="text-yellow-500">OF SOUND</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-gray-400">
            Experience premium African DJ culture, latest mixtapes, events and entertainment.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/mixtapes">Listen Latest Mix</Button>
            <Button href="/booking" variant="outline">Book DJ</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
