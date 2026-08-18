"use client";

import { useEffect, useRef } from "react";

export default function Waveform({ audioUrl }: { audioUrl: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // WaveSurfer integration will be connected here.
    // The component keeps the audio URL ready for waveform rendering.
  }, [audioUrl]);

  return (
    <div
      ref={containerRef}
      className="h-20 w-full rounded-xl bg-[#111] border border-white/10"
    />
  );
}
