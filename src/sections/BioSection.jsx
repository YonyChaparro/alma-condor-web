function BioSection() {
  return (
    <section id="biografia" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Biografía</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Relato</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
        <p className="text-slate-700 leading-relaxed">
          Alma Cóndor fusiona instrumentos ancestrales con texturas electrónicas y arreglos modernos. El proyecto nace en las montañas andinas y se ha presentado en festivales regionales, llevando una propuesta que conecta tradición y vanguardia.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <p className="text-sm font-semibold">Highlights</p>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            <li>• 2 EPs y 1 álbum en plataformas</li>
            <li>• Colaboraciones con artistas andinos y electrónicos</li>
            <li>• Shows en Colombia, Ecuador y Perú</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default BioSection
