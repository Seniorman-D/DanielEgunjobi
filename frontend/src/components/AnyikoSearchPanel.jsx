import React, {useState} from 'react';
import { searchMedia } from '../services/anyikoSearchEngine';

export default function AnyikoSearchPanel({library = []}) {
  const [query, setQuery] = useState('');

  const results = searchMedia(library, query);

  return (
    <div className="anyiko-search-panel">
      <input
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        placeholder="Search tracks, artists, albums..."
      />

      {results.map((track, index)=>(
        <div key={index} className="search-result">
          {track.title || 'Untitled'} - {track.artist || 'Unknown Artist'}
        </div>
      ))}
    </div>
  );
}
