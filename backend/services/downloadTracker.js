// Anyiko Download Tracker
// Commit 44 - Download tracking foundation

class DownloadTracker {
  recordDownload(fileId, userId = null) {
    return {
      fileId,
      userId,
      downloadedAt: new Date()
    };
  }
}

module.exports = new DownloadTracker();
