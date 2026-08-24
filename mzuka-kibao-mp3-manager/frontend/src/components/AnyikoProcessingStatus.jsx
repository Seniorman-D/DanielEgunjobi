import React from 'react';

export default function AnyikoProcessingStatus({status='Processing'}) {
  return (
    <div className="anyiko-processing-card">
      <h3>Anyiko Media Processing</h3>
      <p>Status: {status}</p>
      <div className="progress-placeholder">Audio conversion pipeline active</div>
    </div>
  );
}
