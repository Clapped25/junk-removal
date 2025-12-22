import { SERVICES } from "../lib/data";

export default function ServicesPage() {
  return (
    <main className="text-white">
      <h1 className="text-3xl font-bold">Services & <span className="text-[#d4af37]">Pricing</span></h1>
      <p className="mt-3 text-gray-300 max-w-2xl">
        Transparent pricing. Most cuts include a clean finish and lineup.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {SERVICES.map((s)
