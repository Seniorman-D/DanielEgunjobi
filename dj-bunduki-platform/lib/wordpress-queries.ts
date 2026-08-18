import wordpress from './wordpress';

export async function getPosts() {
  const response = await wordpress.get('/posts');
  return response.data;
}

export async function getMedia() {
  const response = await wordpress.get('/media');
  return response.data;
}

export async function getCustomContent(type: string) {
  const response = await wordpress.get(`/${type}`);
  return response.data;
}

export async function getMixtapes() {
  return getCustomContent('mixtapes');
}

export async function getEvents() {
  return getCustomContent('events');
}

export async function getVideos() {
  return getCustomContent('videos');
}

export async function getGallery() {
  return getCustomContent('gallery');
}

export async function getProducts() {
  return getCustomContent('products');
}
