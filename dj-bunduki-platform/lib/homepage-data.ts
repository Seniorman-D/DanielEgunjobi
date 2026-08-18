import { getMixtapes, getEvents, getPosts, getVideos } from './wordpress-queries';

export async function getHomepageData() {
  const [mixes, events, posts, videos] = await Promise.all([
    getMixtapes(),
    getEvents(),
    getPosts(),
    getVideos(),
  ]);

  return {
    mixes,
    events,
    posts,
    videos,
  };
}
