import React, { useState } from 'react';

export default function AnyikoUrlImporter(){
  const [url,setUrl]=useState('');
  const [source,setSource]=useState('direct');

  const sources=['direct','youtube','soundcloud','audiomack','boomplay','mixcloud'];

  return (
    <div className="anyiko-url-importer">
      <h2>Anyiko Streaming Import</h2>
      <p>Import audio from supported streaming sources.</p>
      <select value={source} onChange={e=>setSource(e.target.value)}>
        {sources.map(item=><option key={item}>{item}</option>)}
      </select>
      <input value={url} onChange={e=>setUrl(e.target.value)} placeholder="Paste audio URL" />
      <button>Import & Convert MP3</button>
    </div>
  );
}
