// Anyiko Batch Import Manager
// Supports batch workflows for playlists and albums

const supportedCollections = [
  'youtube_playlist',
  'boomplay_album',
  'audiomack_album'
];

function createBatchImport(source, url) {
  return {
    id: Date.now().toString(),
    source,
    url,
    type: source,
    status: 'queued',
    items: [],
    createdAt: new Date()
  };
}

function supportedBatchSources() {
  return supportedCollections;
}

module.exports = {
  createBatchImport,
  supportedBatchSources
};
