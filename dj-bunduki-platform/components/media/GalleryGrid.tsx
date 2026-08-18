export default function GalleryGrid({ images }: { images: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={image.title} className="rounded-2xl aspect-square object-cover" />
      ))}
    </div>
  );
}
