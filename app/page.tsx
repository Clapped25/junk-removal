import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black text-white">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://static.wixstatic.com/media/ec2552_53b4cbefc787422a8588cc3966469dd4~mv2.jpg/v1/fill/w_640,h_740,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ec2552_53b4cbefc787422a8588cc3966469dd4~mv2.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-3xl px-6 pt-20">
          <p className="tracking-widest text-[#d4af37] text-sm mb-4">
            MALDEN • WALK-INS + APPOINTMENTS
          </p>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fenfen’s <span className="text-[#d4af37]">Barbershop</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg">
            Premium cuts, sharp fades, and clean grooming — book online or walk in.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90"
            >
              Book Appointment
            </Link>

            <Link
              href="/services"
              className="border border-white/25 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Our <span className="text-[#d4af37]">Services</span>
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Haircut",
              "Fade + Lineup",
              "Beard Trim",
              "Hot Towel Shave",
              "Kids Cut",
              "Full Grooming",
            ].map((service) => (
              <div
                key={service}
                className="border border-white/10 rounded-2xl p-6 bg-white/5 hover:bg-white/10 transition"
              >
                <h3 className="font-semibold text-lg">{service}</h3>
                <p className="mt-2 text-sm text-gray-300">
                  Precision service tailored to your style.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / HOURS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="text-2xl font-semibold">
              Visit <span className="text-[#d4af37]">Fenfen’s</span>
            </h2>

            <div className="mt-6 grid gap-8 md:grid-cols-2">
              <div className="text-gray-200">
                <p>
                  <span className="text-white font-medium">Address</span>
                  <br />
                  509 Main St
                  <br />
                  Malden, MA 02148
                </p>

                <p className="mt-4">
                  <span className="text-white font-medium">Phone</span>
                  <br />
                  <a href="tel:17814803913" className="text-[#d4af37] hover:underline">
                    (781) 480-3913
                  </a>
                </p>
              </div>

              <div>
                <p className="text-white font-medium mb-3">Hours</p>
                <ul className="space-y-1 text-sm text-gray-200">
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
          </div>
        </div>
      </section>
    </main>
  );
}
