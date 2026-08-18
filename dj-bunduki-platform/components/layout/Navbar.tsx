import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="text-2xl font-black text-yellow-500">
          DJ BUNDUKI
        </Link>

        <div className="hidden gap-8 text-sm md:flex">
          <Link href="/">Home</Link>
          <Link href="/mixtapes">Mixtapes</Link>
          <Link href="/events">Events</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/store">Store</Link>
          <Link href="/booking" className="text-yellow-500">Book DJ</Link>
        </div>
      </div>
    </nav>
  );
}
