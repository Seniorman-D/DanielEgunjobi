export const AUDIO_BASE_URL =
  process.env.AUDIO_BASE_URL ||
  "https://mix.djbunduki.co.ke/uploads";

export function getAudioUrl(fileName: string) {
  return `${AUDIO_BASE_URL}/${fileName}`;
}

export function isSupportedAudioFormat(fileName: string) {
  const supported = ["mp3", "wav", "aac", "flac", "m4a"];
  const extension = fileName.split(".").pop()?.toLowerCase();

  return extension ? supported.includes(extension) : false;
}
