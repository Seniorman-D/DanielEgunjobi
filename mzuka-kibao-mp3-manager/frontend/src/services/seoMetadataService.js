// Anyiko SEO Metadata Service
// Generates metadata structures for public media pages

export function generateTrackSEO(track) {
  return {
    title: `${track.title} - Anyiko Music`,
    description: `${track.artist || 'Unknown Artist'} - ${track.title}`,
    openGraph: {
      type: 'music.song',
      image: track.cover || null,
      url: track.url || null
    }
  };
}

export function generateArtistSEO(artist) {
  return {
    title: `${artist.name} | Anyiko`,
    description: `Listen to ${artist.name} music on Anyiko.`
  };
}
