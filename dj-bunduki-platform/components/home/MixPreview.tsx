import Link from 'next/link';

export default function MixPreview({ mix }: { mix: any }) {
  return (
    <article className="rounded-2xl bg-[#111] overflow-hidden border border-white/10">
      {mix.artwork && (
        <img src={mix.artwork} alt={mix.title} className="w-full aspect-square object-cover" />
      )}
      <div className="p-5">
        <h3 className="text-white font-bold">{mix.title}</h3>
        <p className="text-[#D4AF37] mt-2">{mix.genre}</p>
        <Link href={`/mixtapes/${mix.slug}`} className="inline-block mt-4 text-sm text-white">
          Listen Now
        </Link>
      </div>
    </article>
  );
}
