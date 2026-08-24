import React from 'react';

export default function AnyikoProcessingLive({job}) {
  return (
    <div className="processing-card">
      <h3>Anyiko Processing</h3>
      <p>Status: {job?.status || 'Waiting'}</p>
      <progress value={job?.progress || 0} max="100" />
      <p>{job?.progress || 0}% Complete</p>
    </div>
  );
}
