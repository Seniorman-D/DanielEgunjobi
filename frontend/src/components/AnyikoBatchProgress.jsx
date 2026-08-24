import React from 'react';

export default function AnyikoBatchProgress({job}) {
  if (!job) return null;

  return (
    <div className="anyiko-batch-progress">
      <h3>Batch Processing</h3>
      <p>Source: {job.source}</p>
      <p>Status: {job.status}</p>
      <p>Progress: {job.progress || 0}%</p>
      <p>{job.completedItems || 0} / {job.totalItems} tracks completed</p>
    </div>
  );
}
