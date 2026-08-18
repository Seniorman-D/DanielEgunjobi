const menu = [
  'Dashboard',
  'Mixtapes',
  'Events',
  'Blog',
  'Videos',
  'Gallery',
  'Products',
  'Advertisements',
  'Bookings',
  'Analytics'
];

export default function AdminSidebar(){
  return (
    <aside className="bg-[#111] text-white p-6 rounded-2xl">
      <h2 className="text-xl font-bold text-[#D4AF37] mb-6">DJ Bunduki Admin</h2>
      <nav className="space-y-3">
        {menu.map(item=>(
          <div key={item} className="text-gray-300 hover:text-[#D4AF37] cursor-pointer">
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
