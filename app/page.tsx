import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold">
          Fenfen's Barber Shop
        </h1>
        <p className="mt-4 max-w-xl text-lg text-gray-600">
          Book your cut online, check barber availability, and see live wait
          times — all in one place.
        </p>

        <div className="mt-6 flex gap-4">
          <Link
            href="/barbers"
            className="rounded-xl border border-black px-6 py-3 hover:bg-black hover:text-white"
          >
            View Barbers
          </Link>
          <Link
            href="/book"
            className="rounded-xl border border-black px-6 py-3 hover:bg-black hover:text-white"
          >
            Book Now
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-5xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl font-semibold">Skilled Barbers</h3>
          <p className="mt-2 text-gray-600">
            Choose from experienced barbers specializing in fades, tapers, and
            beard work.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Easy Booking</h3>
          <p className="mt-2 text-gray-600">
            Pick a barber, select a time, and book instantly online.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Live Wait Times</h3>
          <p className="mt-2 text-gray-600">
            Check current wait times and walk-in availability before you arrive.
          </p>
        </div>
      </section>
    </main>
  );
}
