export default function AdminDashboard(){
  const cards = [
    'Total Mixes',
    'Total Plays',
    'Downloads',
    'Bookings',
    'Merchandise Orders',
    'Advertisement Performance'
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-8">
        DJ Bunduki Admin Dashboard
      </h1>

      <section className="grid md:grid-cols-3 gap-6">
        {cards.map((item)=>(
          <div key={item} className="bg-[#111] rounded-2xl p-6 border border-white/10">
            <h2 className="text-lg">{item}</h2>
            <p className="text-3xl font-bold mt-3">0</p>
          </div>
        ))}
      </section>
    </main>
  );
}
