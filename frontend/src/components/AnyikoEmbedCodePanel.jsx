export default function AnyikoEmbedCodePanel({url}) {
  const code = `<a href="${url}" download>Download MP3</a>`;

  return (
    <div className="embed-panel">
      <h3>Direct Download Link</h3>
      <input readOnly value={url} />
      <textarea readOnly value={code} />
    </div>
  );
}
