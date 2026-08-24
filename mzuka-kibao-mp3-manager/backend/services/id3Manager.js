// Anyiko File Uploader / Upload System
// ID3 Metadata Manager

module.exports = {
  updateTags(audioFile, tags) {
    return {
      file: audioFile,
      metadata: {
        title: tags.title || '',
        artist: tags.artist || '',
        album: tags.album || '',
        genre: tags.genre || '',
        year: tags.year || ''
      }
    };
  }
};
