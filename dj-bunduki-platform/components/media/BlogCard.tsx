export default function BlogCard({ post }: { post: any }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-[#111] border border-white/10">
      {post.image && <img src={post.image} alt={post.title} className="w-full aspect-video object-cover" />}
      <div className="p-5">
        <p className="text-[#8B5CF6] text-sm">{post.category}</p>
        <h3 className="text-xl font-bold text-white mt-2">{post.title}</h3>
        <a href={`/blog/${post.slug}`} className="inline-block mt-4 text-[#D4AF37]">Read More</a>
      </div>
    </article>
  );
}
