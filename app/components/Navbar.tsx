import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-wide text-white">
          Fenfen’s <span className="text-[#d4af37]">Barbershop</span>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/barbers" className="hover:text-white">Barbers</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/book" className="hover:text-white">Book</Link>
        </nav>

        <Link
          href="/book"
          className="rounded-full bg-[#d4af37] text-black px-5 py-2 text-sm font-semibold hover:opacity-90"
        >
          Book Now
        </Link>
      </div>
    </header>
  );
}
