"use client";

import { useRef, useState } from "react";

export default function AudioPlayer({ src }: { src: string }) {
  const audio = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!audio.current) return;
    if (playing) audio.current.pause();
    else audio.current.play();
    setPlaying(!playing);
  }

  return (
    <div className="bg-[#111] p-5 rounded-2xl border border-white/10">
      <audio ref={audio} src={src} />
      <button onClick={toggle} className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-bold">
        {playing ? "PAUSE" : "PLAY MIX"}
      </button>
    </div>
  );
}
