import { BARBERS } from "../lib/data";

function StatusBadge({ status }: { status: "available" | "busy" | "break" }) {
  const label =
    status === "available" ? "Available" : status === "busy" ? "Busy" : "On Break";

  const cls =
    status === "available"
      ? "bg-green-500/15 text-green-300 border-green-500/30"
      : status === "busy"
      ? "bg-yellow-500/15 text-yellow-200 border-yellow-500/30"
      : "bg-red-500/15 text-red-200 border-red-500/30";

  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs ${cls}`}>
      {label}
    </span>
  );
}

export default function BarbersPage() {
  return (
    <main className="text-white">
      <h1 className="text-3xl font-bold">Our <span className="text-[#d4af37]">Barbers</span></h1>
      <p className="mt-3 text-gray-300 max-w-2xl">
        Choose your barber based on availability and specialty. Book online or walk in.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {BARBERS.map((b) => (
          <div key={b.id} className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xl font-semibold">{b.name}</p>
                <p className="text-sm text-gray-400">{b.title}</p>
              </div>
              <StatusBadge status={b.status} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {b.specialties.map((s) => (
                <span key={s} className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-gray-200">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between text-sm text-gray-300">
              <span>Rating: <span className="text-white font-medium">{b.rating.toFixed(1)}</span>/5</span>
              <span>
                Next available:{" "}
                <span className="text-white font-medium">
                  {b.status === "available" ? "Now" : `${b.nextAvailableInMin} min`}
                </span>
              </span>
            </div>

            <a
              href="/book"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-5 py-3 font-semibold text-black hover:opacity-90"
            >
              Book with {b.name}
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
