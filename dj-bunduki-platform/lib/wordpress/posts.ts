import { wordpressFetch } from './wordpress-client';

export async function getPosts() {
  return wordpressFetch('/posts');
}

export async function getPostBySlug(slug: string) {
  return wordpressFetch(`/posts?slug=${slug}`);
}
