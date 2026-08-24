import React from 'react';

export default function AnyikoDownloadLinkPanel({ link }) {
  return (
    <div className="download-link-panel">
      <h3>Anyiko Download Link</h3>
      <input readOnly value={link || ''} />
      <button onClick={() => navigator.clipboard.writeText(link)}>
        Copy Link
      </button>
    </div>
  );
}
