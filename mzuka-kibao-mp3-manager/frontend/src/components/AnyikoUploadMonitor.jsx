import React from 'react';

export default function AnyikoUploadMonitor({job}) {
  return (
    <div className="anyiko-upload-monitor">
      <h3>Anyiko Processing Status</h3>
      <p>Status: {job?.status || 'Waiting'}</p>
      <p>Job ID: {job?.id || '-'}</p>
    </div>
  );
}
