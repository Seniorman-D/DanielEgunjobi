import { wordpressFetch } from './wordpress-client';

export async function getEvents() {
  return wordpressFetch('/events');
}

export async function getEventBySlug(slug: string) {
  return wordpressFetch(`/events?slug=${slug}`);
}
