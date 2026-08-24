// Anyiko Advanced Search Engine
// Search foundation for tracks, artists, albums and genres

export function normalizeSearch(value) {
  return value.toLowerCase().trim();
}

export function searchMedia(library = [], query = '') {
  const keyword = normalizeSearch(query);

  if (!keyword) return library;

  return library.filter((item) => {
    const fields = [
      item.title,
      item.artist,
      item.album,
      item.genre,
      ...(item.tags || [])
    ];

    return fields.some((field) =>
      String(field || '').toLowerCase().includes(keyword)
    );
  });
}

export function getSuggestions(library = [], query = '') {
  return searchMedia(library, query).slice(0, 10);
}
