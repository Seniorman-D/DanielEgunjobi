// Anyiko Public Music Page

export default function AnyikoPublicMusicPage({ track }) {
  return (
    <section className="anyiko-public-track">
      <img src={track.cover} alt={track.title} />
      <h1>{track.title}</h1>
      <p>{track.artist}</p>
      <audio controls src={track.url} />
      <button>Share Track</button>
      <button>Download</button>
    </section>
  );
}
