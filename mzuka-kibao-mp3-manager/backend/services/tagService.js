const tagService = {
  extractTags(file) {
    return {
      title: file.title || '',
      artist: file.artist || '',
      album: file.album || '',
      genre: file.genre || '',
      year: file.year || ''
    };
  },

  updateTags(fileId, metadata) {
    return {
      fileId,
      metadata,
      updated: true
    };
  }
};

module.exports = tagService;
