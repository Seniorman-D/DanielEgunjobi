import React from 'react';

export default function AnyikoImportPreview({ preview }) {
  if (!preview) return null;

  return (
    <div className="anyiko-import-preview">
      <h3>Import Preview</h3>
      <p>Platform: {preview.source}</p>
      <p>Status: {preview.status}</p>
      <p>{preview.url}</p>
    </div>
  );
}
