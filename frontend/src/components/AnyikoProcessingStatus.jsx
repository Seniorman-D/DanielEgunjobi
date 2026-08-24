import React from 'react';

export default function AnyikoProcessingStatus({ job }) {
  return (
    <div className="anyiko-processing-status">
      <h3>Processing Status</h3>
      <p>Status: {job?.status || 'Waiting'}</p>
      <p>Progress: {job?.progress || 0}%</p>
    </div>
  );
}
