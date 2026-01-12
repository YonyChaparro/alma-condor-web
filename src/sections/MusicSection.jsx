function MusicSection() {
  const releases = ["Cumbres", "Río Claro", "Altiplano"]

  return (
    <section id="musica" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Música</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Últimos lanzamientos</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {releases.map((title) => (
          <div key={title} className="rounded-xl border border-slate-200 p-4 shadow-sm">
            <div className="h-32 rounded-lg bg-slate-100" aria-hidden />
            <h3 className="mt-3 text-base font-semibold">{title}</h3>
            <p className="text-sm text-slate-600">Escúchalo en tu plataforma favorita.</p>
            <button className="mt-3 text-sm font-semibold text-slate-900 underline">Reproducir</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MusicSection
