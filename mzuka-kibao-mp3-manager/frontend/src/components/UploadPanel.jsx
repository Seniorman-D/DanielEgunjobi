import React from 'react';

export default function UploadPanel(){
  return (
    <section className="upload-panel">
      <h1>Upload Files</h1>
      <div className="upload-options">
        <button>Upload From Computer</button>
        <button>Upload From URL / Streaming</button>
      </div>
      <p>Supported sources: MP3, YouTube, Audiomack, Boomplay, Mixcloud, SoundCloud</p>
    </section>
  );
}
