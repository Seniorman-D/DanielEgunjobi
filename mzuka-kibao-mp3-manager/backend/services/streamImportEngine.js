// Anyiko Streaming Import Engine
// v1.1.0 foundation

const supportedSources = [
  'youtube',
  'soundcloud',
  'audiomack',
  'boomplay',
  'mixcloud',
  'direct'
];

function detectSource(url) {
  if (!url) return 'unknown';

  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('soundcloud.com')) return 'soundcloud';
  if (url.includes('audiomack.com')) return 'audiomack';
  if (url.includes('boomplay.com')) return 'boomplay';
  if (url.includes('mixcloud.com')) return 'mixcloud';

  return 'direct';
}

function createImportJob(url) {
  return {
    source: detectSource(url),
    url,
    status: 'queued',
    nextStep: 'media-processing'
  };
}

module.exports = {
  supportedSources,
  detectSource,
  createImportJob
};
