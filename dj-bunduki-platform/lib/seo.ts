export const siteSEO = {
  name: "DJ Bunduki",
  title: "DJ Bunduki | The Champion Of Sound",
  description:
    "DJ Bunduki is a premium Kenyan DJ platform featuring mixtapes, events, music downloads, videos and bookings.",
  keywords: [
    "DJ Bunduki",
    "Kenya DJ",
    "Afrobeat mixes",
    "Amapiano mixes",
    "DJ booking Kenya",
  ],
};

export function generateMixSchema(mix: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicRecording",
    name: mix.title,
    byArtist: {
      "@type": "Person",
      name: "DJ Bunduki",
    },
  };
}

export function generateEventSchema(event: any) {
  return {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: event.title,
    location: event.location,
  };
}
