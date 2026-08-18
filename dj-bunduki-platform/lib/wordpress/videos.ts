import { wordpressFetch } from './wordpress-client';

export async function getVideos() {
  return wordpressFetch('/videos');
}
