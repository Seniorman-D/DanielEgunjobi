// Anyiko File Library UI

export default function AnyikoFileLibrary({ files = [] }) {
  return (
    <div className="anyiko-file-library">
      {files.map((file) => (
        <div key={file.id} className="file-item">
          <strong>{file.name}</strong>
          <button>Rename</button>
          <button>Copy Download URL</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
}
