import { wordpressFetch } from './wordpress-client';

export async function getGallery() {
  return wordpressFetch('/gallery');
}
