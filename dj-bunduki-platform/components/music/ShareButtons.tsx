export default function ShareButtons({ title, url }: { title: string; url: string }) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex gap-3 mt-6">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        className="rounded-full border border-white/20 px-5 py-2 hover:border-yellow-500"
      >
        Facebook
      </a>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        className="rounded-full border border-white/20 px-5 py-2 hover:border-yellow-500"
      >
        WhatsApp
      </a>

      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="rounded-full border border-white/20 px-5 py-2 hover:border-yellow-500"
      >
        Copy Link
      </button>
    </div>
  );
}
