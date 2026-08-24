import React from 'react';

export default function AnyikoImportQueueDashboard({ jobs = [] }) {
  return (
    <div className="anyiko-import-queue">
      <h2>Import Queue</h2>
      {jobs.map(job => (
        <div key={job.id} className="queue-item">
          <strong>{job.title || 'Untitled Import'}</strong>
          <span>{job.status}</span>
          {job.status === 'failed' && <button>Retry</button>}
        </div>
      ))}
    </div>
  );
}
