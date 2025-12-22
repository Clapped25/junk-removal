import { SERVICES } from "../lib/data";

export default function ServicesPage() {
  return (
    <main className="text-white">
      <h1 className="text-3xl font-bold">
        Services & <span className="text-[#d4af37]">Pricing</span>
      </h1>

      <p className="mt-3 text-gray-300 max-w-2xl">
        Transparent pricing. Most cuts include a clean finish and lineup.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => (
          <div
            key={s.id}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-lg font-semibold">{s.name}</p>
                <p className="mt-1 text-sm text-gray-400">{s.description}</p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-[#d4af37]">${s.price}</p>
                <p className="text-xs text-gray-400">{s.durationMin} min</p>
              </div>
            </div>

            <a
              href="/book"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
            >
              Book this service
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
