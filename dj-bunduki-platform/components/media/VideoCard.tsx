export default function VideoCard({ video }: { video: any }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-[#111] border border-white/10">
      <div className="aspect-video bg-black">
        {video.url && (
          <iframe className="w-full h-full" src={video.url} title={video.title} allowFullScreen />
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{video.title}</h3>
      </div>
    </article>
  );
}
