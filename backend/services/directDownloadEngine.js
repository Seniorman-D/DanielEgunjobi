// Anyiko Direct Download Engine
// Generates and manages direct MP3 download routes.

class DirectDownloadEngine {
  createDownloadUrl(fileId, baseUrl) {
    return `${baseUrl}/download/${fileId}`;
  }

  createEmbedCode(fileUrl) {
    return `<a href="${fileUrl}" download>Download MP3</a>`;
  }
}

module.exports = new DirectDownloadEngine();
