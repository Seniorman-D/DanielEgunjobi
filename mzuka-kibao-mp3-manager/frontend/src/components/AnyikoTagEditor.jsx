import React, { useState } from 'react';

export default function AnyikoTagEditor({ file }) {
  const [tags, setTags] = useState({
    title: file?.title || '',
    artist: file?.artist || '',
    album: file?.album || '',
    genre: file?.genre || '',
    year: file?.year || ''
  });

  const updateTag = (key, value) => {
    setTags({ ...tags, [key]: value });
  };

  return (
    <div className="anyiko-tag-editor">
      <h2>Anyiko Metadata Editor</h2>
      {Object.keys(tags).map((tag) => (
        <input
          key={tag}
          value={tags[tag]}
          placeholder={tag}
          onChange={(e) => updateTag(tag, e.target.value)}
        />
      ))}
      <button>Save Metadata</button>
    </div>
  );
}
