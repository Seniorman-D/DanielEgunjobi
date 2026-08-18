"use client";

interface PlayerControlsProps {
  playing: boolean;
  onToggle: () => void;
}

export default function PlayerControls({ playing, onToggle }: PlayerControlsProps) {
  return (
    <button
      onClick={onToggle}
      className="rounded-full bg-[#D4AF37] px-8 py-3 font-bold text-black"
    >
      {playing ? "Pause" : "Play Mix"}
    </button>
  );
}
