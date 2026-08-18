import AudioPlayer from '@/components/music/AudioPlayer';
import DownloadButton from '@/components/music/DownloadButton';
import ShareButtons from '@/components/music/ShareButtons';

const mix = {
  title: 'DJ Bunduki Afrobeat Champion Mix 2026',
  artwork: '/mixes/default.jpg',
  genre: 'Afrobeat',
  duration: '58:30',
  audio: 'https://mix.djbunduki.co.ke/uploads/sample.mp3',
  description:
    'Premium Afrobeat mix experience from DJ Bunduki - The Champion Of Sound.'
};

export default function MixPage() {
  return (
    <main className="container mx-auto px-6 pt-32">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src={mix.artwork}
          alt={mix.title}
          className="rounded-3xl w-full"
        />

        <div>
          <span className="text-yellow-500">{mix.genre}</span>
          <h1 className="text-5xl font-black mt-3">{mix.title}</h1>

          <p className="text-gray-400 mt-5">
            Duration: {mix.duration}
          </p>

          <AudioPlayer src={mix.audio} />

          <DownloadButton url={mix.audio} />

          <ShareButtons
            title={mix.title}
            url="https://djbunduki.co.ke/mixtapes/sample"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">About This Mix</h2>
        <p className="text-gray-400 mt-4">{mix.description}</p>
      </section>

      <section className="my-16 rounded-xl border border-white/10 p-6">
        Advertisement 728x90
      </section>

      <section className="border border-white/10 rounded-xl p-6">
        Facebook Comments Integration
      </section>
    </main>
  );
}
