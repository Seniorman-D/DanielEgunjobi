import React from 'react';

export default function AnyikoQueueControls({jobId}) {
  return (
    <div className="anyiko-queue-controls">
      <h3>Queue Controls</h3>
      <button>Pause {jobId}</button>
      <button>Resume</button>
      <button>Retry Failed</button>
    </div>
  );
}
