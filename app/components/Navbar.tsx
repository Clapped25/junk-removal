import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/barbers", label: "Barbers" },
  { href: "/services", label: "Services" },
  { href: "/book", label: "Book" },
  { href: "/wait", label: "Wait Time" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-bold tracking-tight text-lg">
          Fenfen’s Barbershop
        </Link>

        <nav className="flex gap-4 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-700 hover:text-black transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
