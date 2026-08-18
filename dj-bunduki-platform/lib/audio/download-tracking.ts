export interface DownloadEvent {
  mixId: string;
  userAgent?: string;
  timestamp: Date;
}

export function createDownloadEvent(mixId: string): DownloadEvent {
  return {
    mixId,
    userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    timestamp: new Date(),
  };
}
