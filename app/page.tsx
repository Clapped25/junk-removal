import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="rounded-3xl border bg-white p-10 md:p-14 shadow-sm">
        <p className="text-sm text-gray-600">Malden, MA • Walk-ins + Appointments</p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
          Fenfen’s Barbershop
        </h1>

        <p className="mt-4 max-w-2xl text-gray-600 text-lg">
          Book your cut online, check barber availability, and see live wait times
          before you pull up.
        </p>

        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            href="/book"
            className="rounded-xl bg-black text-white px-6 py-3 text-center hover:opacity-90"
          >
            Book an appointment
          </Link>

          <Link
            href="/barbers"
            className="rounded-xl border border-black px-6 py-3 text-center hover:bg-black hover:text-white transition"
          >
            View barbers
          </Link>
        </div>

        {/* FEATURE CARDS */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border bg-gray-50 p-5">
            <h3 className="font-semibold">Availability</h3>
            <p className="mt-2 text-sm text-gray-600">
              See who’s free right now and who’s next.
            </p>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-5">
            <h3 className="font-semibold">Walk-ins</h3>
            <p className="mt-2 text-sm text-gray-600">
              Live wait time updates so you don’t waste time.
            </p>
          </div>

          <div className="rounded-2xl border bg-gray-50 p-5">
            <h3 className="font-semibold">Easy Booking</h3>
            <p className="mt-2 text-sm text-gray-600">
              Pick a barber, service, and time in seconds.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT / HOURS */}
      <section className="mt-10 rounded-3xl border bg-white p-8 md:p-12 shadow-sm">
        <h2 className="text-2xl font-semibold">Visit Fenfen’s Barbershop</h2>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Contact Info */}
          <div>
            <p className="text-gray-600">
              <span className="font-medium text-black">Address:</span>
              <br />
              509 Main St
              <br />
              Malden, MA 02148
            </p>

            <p className="mt-4 text-gray-600">
              <span className="font-medium text-black">Phone:</span>
              <br />
              <a href="tel:17814803913" className="hover:underline">
                (781) 480-3913
              </a>
            </p>
          </div>

          {/* Hours */}
          <div>
            <p className="font-medium mb-3">Hours</p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Monday: 8 AM – 8 PM</li>
              <li>Tuesday: 8 AM – 8 PM</li>
              <li>Wednesday: 8 AM – 8 PM</li>
              <li>Thursday: 7 AM – 9 PM</li>
              <li>Friday: 7 AM – 9 PM</li>
              <li>Saturday: 7 AM – 9 PM</li>
              <li>Sunday: 7 AM – 5 PM</li>
            </ul>

            <p className="mt-3 text-xs text-gray-400">*Holiday hours may vary</p>
          </div>
        </div>
      </section>
    </main>
  );
}
