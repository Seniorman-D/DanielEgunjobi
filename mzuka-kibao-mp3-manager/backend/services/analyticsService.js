// Anyiko Analytics Service

class AnalyticsService {
  getOverview() {
    return {
      totalUploads: 0,
      totalDownloads: 0,
      storageUsed: 0,
      processingJobs: 0,
      activeUsers: 0
    };
  }
}

module.exports = new AnalyticsService();
