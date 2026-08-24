import React from 'react';

export default function AnyikoFileManager(){
  const files = [
    {name:'sample-track.mp3', size:'8.4 MB', status:'Ready'},
  ];

  return (
    <div className="anyiko-file-manager">
      <h2>Anyiko File Manager</h2>
      <p>Manage uploaded audio files, metadata and downloads.</p>
      {files.map((file,index)=>(
        <div key={index} className="file-card">
          <strong>{file.name}</strong>
          <span>{file.size}</span>
          <span>{file.status}</span>
          <button>Edit</button>
          <button>Download</button>
        </div>
      ))}
    </div>
  );
}
