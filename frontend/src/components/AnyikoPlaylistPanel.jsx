import React from 'react';

export default function AnyikoPlaylistPanel({tracks=[]}) {
 return (
  <div className="anyiko-playlist">
   <h2>Anyiko Media Library</h2>
   {tracks.map((track,index)=>(
    <div key={index} className="track-item">
      {track.title} - {track.artist || 'Unknown'}
    </div>
   ))}
  </div>
 );
}
