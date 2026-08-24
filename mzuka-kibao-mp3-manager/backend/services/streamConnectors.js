// Anyiko Streaming Connector Layer
// Designed for authorized media sources and user-owned/public audio URLs.

const connectors = {
  youtube: {
    name: 'YouTube',
    enabled: true,
    status: 'connector-ready'
  },
  soundcloud: {
    name: 'SoundCloud',
    enabled: true,
    status: 'connector-ready'
  },
  audiomack: {
    name: 'Audiomack',
    enabled: true,
    status: 'connector-ready'
  },
  boomplay: {
    name: 'Boomplay',
    enabled: true,
    status: 'connector-ready'
  },
  mixcloud: {
    name: 'Mixcloud',
    enabled: true,
    status: 'connector-ready'
  },
  direct: {
    name: 'Direct Audio URL',
    enabled: true,
    status: 'connector-ready'
  }
};

function detectSource(url) {
  if (!url) return 'unknown';

  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube';
  if (url.includes('soundcloud.com')) return 'soundcloud';
  if (url.includes('audiomack.com')) return 'audiomack';
  if (url.includes('boomplay.com')) return 'boomplay';
  if (url.includes('mixcloud.com')) return 'mixcloud';

  return 'direct';
}

module.exports = {
  connectors,
  detectSource
};
