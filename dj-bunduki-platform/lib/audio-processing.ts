export const supportedAudioFormats = [
  "mp3",
  "wav",
  "aac",
  "flac",
  "m4a",
];

export const audioConfig = {
  source: "https://mix.djbunduki.co.ke/uploads",
  outputFormat: "mp3",
  generateWaveform: true,
};

export function isSupportedAudioFormat(filename: string) {
  const extension = filename.split(".").pop()?.toLowerCase();
  return supportedAudioFormats.includes(extension ?? "");
}
