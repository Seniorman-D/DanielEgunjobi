export default function EventCard({ event }: { event: any }) {
  return (
    <article className="rounded-2xl overflow-hidden bg-[#111] border border-white/10">
      {event.image && <img src={event.image} alt={event.title} className="w-full aspect-video object-cover" />}
      <div className="p-5">
        <h3 className="text-xl font-bold text-white">{event.title}</h3>
        <p className="text-[#D4AF37] mt-2">{event.date}</p>
        <p className="text-gray-400">{event.location}</p>
        <a className="inline-block mt-4 rounded-full bg-[#D4AF37] px-5 py-2 text-black font-bold" href={event.whatsapp || '#'}>
          Get Tickets
        </a>
      </div>
    </article>
  );
}
