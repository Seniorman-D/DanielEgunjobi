import MixCard from "@/components/music/MixCard";

const mixes = [
  {
    title: "DJ Bunduki Afrobeat Champion Mix 2026",
    slug: "afrobeat-champion-mix-2026",
    genre: "Afrobeat",
    artwork: "/placeholder.jpg",
    plays: 85000,
    downloads: 25000,
  },
];

export default function MixtapesPage() {
  return (
    <main className="pt-32 container mx-auto px-6">
      <h1 className="text-5xl font-black mb-10">LATEST MIXTAPES</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {mixes.map((mix) => (
          <MixCard key={mix.slug} mix={mix} />
        ))}
      </div>
    </main>
  );
}
