// Anyiko Advanced Import Intelligence
// Detects media source platforms and prepares import metadata.

const platforms = {
  youtube: /youtube\.com|youtu\.be/i,
  soundcloud: /soundcloud\.com/i,
  audiomack: /audiomack\.com/i,
  boomplay: /boomplay\.com/i,
  mixcloud: /mixcloud\.com/i
};

export function detectPlatform(url) {
  for (const [name, pattern] of Object.entries(platforms)) {
    if (pattern.test(url)) return name;
  }
  return 'direct';
}

export function createImportPreview(url) {
  return {
    source: detectPlatform(url),
    url,
    status: 'ready'
  };
}
