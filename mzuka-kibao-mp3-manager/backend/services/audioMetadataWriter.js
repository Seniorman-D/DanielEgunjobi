// Anyiko Audio Metadata Writer

class AudioMetadataWriter {
  write(file, metadata) {
    return {
      file,
      metadata: {
        title: metadata.title || '',
        artist: metadata.artist || '',
        album: metadata.album || '',
        artwork: metadata.artwork || null
      },
      status: 'ready'
    };
  }
}

module.exports = new AudioMetadataWriter();
