export default function DownloadButton({ url }: { url: string }) {
  return (
    <a href={url} download className="bg-[#D4AF37] text-black px-6 py-3 rounded-full font-bold inline-block">
      DOWNLOAD MP3
    </a>
  );
}
