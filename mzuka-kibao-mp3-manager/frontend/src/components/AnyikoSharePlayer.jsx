// Anyiko Share Player Component
// Shareable media player foundation

export default function AnyikoSharePlayer({track}) {
  return {
    title: track?.title || 'Anyiko Track',
    shareEnabled: true,
    embedReady: true,
  };
}
