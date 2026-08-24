import React from 'react';

export default function AnyikoBatchImporter(){
  return (
    <div className="anyiko-batch-importer">
      <h2>Anyiko Batch Import</h2>
      <p>Import playlists and albums into Anyiko Media Pipeline.</p>
      <ul>
        <li>YouTube Playlist Upload</li>
        <li>Boomplay Album Import</li>
        <li>Audiomack Album Import</li>
      </ul>
      <button>Start Batch Import</button>
    </div>
  );
}
