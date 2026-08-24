// Anyiko Download & Distribution Engine
// v1.1.0 foundation

export const createDownloadLink = (mediaId) => ({
  mediaId,
  secure: true,
  expires: null,
});

export const trackDownload = (mediaId) => ({
  mediaId,
  event: 'download',
  timestamp: new Date().toISOString(),
});
