"use client";

export default function MiniPlayer({ title }: { title: string }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/90 p-4 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-white">{title}</span>
        <button className="rounded-full bg-[#D4AF37] px-4 py-2 text-black">
          Play
        </button>
      </div>
    </div>
  );
}
