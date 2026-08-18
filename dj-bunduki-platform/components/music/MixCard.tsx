import Link from 'next/link';

export default function MixCard({ mix }: { mix: any }) {
  return (
    <article className="bg-[#111] rounded-2xl overflow-hidden border border-white/10 hover:border-[#D4AF37] transition">
      <img src={mix.artwork} alt={mix.title} className="w-full aspect-square object-cover" />
      <div className="p-5">
        <span className="text-[#D4AF37] text-sm">{mix.genre}</span>
        <h3 className="text-white text-xl font-bold mt-2">{mix.title}</h3>
        <p className="text-gray-400 mt-2">DJ Bunduki</p>
        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <span>▶ {mix.plays || 0}</span>
          <span>⬇ {mix.downloads || 0}</span>
        </div>
        <Link href={`/mixtapes/${mix.slug}`} className="block mt-5 text-center bg-[#D4AF37] text-black rounded-full py-3 font-bold">
          PLAY MIX
        </Link>
      </div>
    </article>
  );
}
