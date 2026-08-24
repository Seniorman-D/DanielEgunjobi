import React from 'react';

export default function AnyikoFileUrlManager({file}) {
  const url = file?.downloadUrl || '';

  return (
    <div className="anyiko-url-manager">
      <h3>Direct Download URL</h3>
      <input readOnly value={url} />
      <button onClick={() => navigator.clipboard.writeText(url)}>
        Copy URL
      </button>
      <p>Use this link anywhere to allow direct MP3 download.</p>
    </div>
  );
}
