import React from 'react';

export default function AnyikoStorageDashboard({ usage = 0, files = [] }) {
  return (
    <div className="anyiko-storage-dashboard">
      <h2>Storage Management</h2>
      <p>Total Storage Used: {usage}</p>
      <p>Files: {files.length}</p>
      <button>Cleanup Unused Files</button>
    </div>
  );
}
