export type AudioEvent =
  | "play_started"
  | "quarter_played"
  | "half_played"
  | "completed"
  | "downloaded"
  | "shared";

export function createAudioEvent(event: AudioEvent, mixId: string) {
  return {
    event,
    mixId,
    timestamp: new Date().toISOString(),
  };
}
