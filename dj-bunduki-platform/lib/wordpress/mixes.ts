import { wordpressFetch } from './wordpress-client';

export async function getMixes() {
  return wordpressFetch('/mixes');
}

export async function getMixBySlug(slug: string) {
  return wordpressFetch(`/mixes?slug=${slug}`);
}
