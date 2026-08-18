export default function SectionTitle({title}:{title:string}) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-black uppercase text-white">
        {title}
      </h2>
      <div className="mt-3 h-1 w-20 rounded-full bg-[#D4AF37]" />
    </div>
  );
}
