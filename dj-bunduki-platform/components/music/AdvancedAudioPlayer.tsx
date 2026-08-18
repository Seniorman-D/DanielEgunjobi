import React from 'react';

interface AdvancedAudioPlayerProps {
  src: string;
  title?: string;
}

export default function AdvancedAudioPlayer({ src, title = 'DJ Bunduki Mix' }: AdvancedAudioPlayerProps) {
  return (
    <div className="rounded-xl bg-[#111111] border border-[#D4AF37]/30 p-5 text-white">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support audio playback.
      </audio>
    </div>
  );
}
