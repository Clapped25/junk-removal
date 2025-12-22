import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="rounded-3xl border bg-white p-10 md:p-14 shadow-sm">
        <p className="text-sm text-gray-600">Boston • Walk-ins + Appointments</p>

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
    </main>
  );
}
