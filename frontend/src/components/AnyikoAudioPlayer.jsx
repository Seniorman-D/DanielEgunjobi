import React, {useState} from 'react';

export default function AnyikoAudioPlayer({track}) {
  const [playing,setPlaying] = useState(false);

  return (
    <div className="anyiko-player">
      <img src={track?.cover || '/default-cover.png'} alt="cover" />
      <div>
        <h3>{track?.title || 'No Track Selected'}</h3>
        <p>{track?.artist || 'Unknown Artist'}</p>
        <audio controls src={track?.url} onPlay={()=>setPlaying(true)} />
      </div>
    </div>
  );
}
