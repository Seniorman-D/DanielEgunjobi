export default function AdBanner({ title = 'Advertisement' }: { title?: string }) {
  return (
    <div className="my-8 flex h-24 items-center justify-center rounded-xl border border-white/10 bg-[#111111] text-gray-400">
      {title}
    </div>
  );
}
