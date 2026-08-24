import React, { useState } from 'react';

export default function AnyikoUploadCenter() {
  const [files, setFiles] = useState([]);
  const [url, setUrl] = useState('');
  const [progress, setProgress] = useState(0);

  const handleFiles = (event) => {
    setFiles(Array.from(event.target.files));
  };

  return (
    <section className="anyiko-upload-center">
      <h2>Anyiko Upload Center</h2>

      <div className="upload-box">
        <input type="file" multiple accept="audio/*" onChange={handleFiles} />
        <p>Drag & drop MP3 files or select from computer</p>
      </div>

      <div className="url-upload">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste media URL"
        />
      </div>

      <div className="upload-progress">
        Processing: {progress}%
      </div>

      <div className="metadata-fields">
        <input placeholder="Title" />
        <input placeholder="Artist" />
        <input placeholder="Genre" />
      </div>

      <button>Generate Download URL</button>
    </section>
  );
}
