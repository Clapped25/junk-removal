<section className="relative min-h-screen flex items-center justify-center text-center text-white">
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.unsplash.com/photo-1517832606299-7ae9b720a186')",
    }}
  />
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative z-10 max-w-3xl px-6">
    <p className="tracking-widest text-[#d4af37] text-sm mb-4">
      PREMIUM BARBER EXPERIENCE
    </p>

    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
      Raise Your Style.<br /> Elevate Your Look.
    </h1>

    <p className="mt-6 text-gray-300 text-lg">
      Professional cuts, clean fades, and precision grooming in the heart of Malden.
    </p>

    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href="/book"
        className="bg-[#d4af37] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90"
      >
        Book Appointment
      </a>
      <a
        href="/services"
        className="border border-white/30 px-8 py-4 rounded-full hover:bg-white hover:text-black transition"
      >
        View Services
      </a>
    </div>
  </div>
</section>
