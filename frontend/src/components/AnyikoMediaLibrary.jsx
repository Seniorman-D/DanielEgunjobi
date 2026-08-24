import React from 'react';

export default function AnyikoMediaLibrary({ files = [] }) {
  return (
    <div className="anyiko-media-library">
      <h2>Anyiko Media Library</h2>
      {files.map((file, index) => (
        <div key={index} className="media-card">
          <strong>{file.title}</strong>
          <p>{file.artist} - {file.album}</p>
        </div>
      ))}
    </div>
  );
}
