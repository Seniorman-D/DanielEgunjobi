export default function ContentPlaceholder({title}:{title:string}){
  return (
    <div className="rounded-2xl border border-white/10 bg-[#111] p-8 hover:border-[#D4AF37]/40 transition">
      <h3 className="text-xl font-bold text-[#D4AF37]">{title}</h3>
      <p className="mt-3 text-gray-400">
        Dynamic content will be loaded from WordPress Headless CMS.
      </p>
    </div>
  );
}
