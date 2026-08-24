// Anyiko Secure Download Link Management Engine

class DownloadLinkManager {
  createLink(fileId, options = {}) {
    return {
      fileId,
      token: this.generateToken(),
      expiresAt: options.expiresAt || null,
      protected: Boolean(options.password)
    };
  }

  generateToken() {
    return Math.random().toString(36).substring(2) + Date.now();
  }
}

module.exports = new DownloadLinkManager();
