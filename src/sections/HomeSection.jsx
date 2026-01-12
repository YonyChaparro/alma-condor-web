function HomeSection() {
  return (
    <section id="home" className="pt-10">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Alma Cóndor</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">Paisajes andinos en clave contemporánea.</h1>
      <p className="mt-4 max-w-2xl text-lg text-slate-600">
        Sonidos de raíz con producción actual: una experiencia para escenarios, festivales y escuchas íntimas.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a className="rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700" href="#musica">
          Escuchar música
        </a>
        <a className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500 hover:text-slate-700" href="#epk">
          Ver EPK
        </a>
      </div>
    </section>
  )
}

export default HomeSection
