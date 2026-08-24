import React from 'react';

export default function AnyikoAnalyticsPanel({data = {}}) {
  return (
    <section className="anyiko-analytics-panel">
      <h2>Anyiko Analytics</h2>
      <p>Uploads: {data.totalUploads || 0}</p>
      <p>Downloads: {data.totalDownloads || 0}</p>
      <p>Storage: {data.storageUsed || 0}</p>
      <p>Jobs: {data.processingJobs || 0}</p>
      <p>Users: {data.activeUsers || 0}</p>
    </section>
  );
}
