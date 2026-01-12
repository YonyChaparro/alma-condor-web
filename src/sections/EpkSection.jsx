function EpkSection() {
  return (
    <section id="epk" className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">EPK</p>
      <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">Electronic Press Kit</h2>
          <p className="text-slate-600">
            Biografía, fotos oficiales, datos técnicos y enlaces clave para prensa, promotores y medios.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              href="#descargar-epk"
            >
              Descargar PDF
            </a>
            <a
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-500 hover:text-slate-700"
              href="#kit-prensa"
            >
              Kit de prensa (ZIP)
            </a>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Highlights rápidos</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-700">
            <li>• Género: Andino contemporáneo</li>
            <li>• Ciudad base: Bogotá, Colombia</li>
            <li>• Formato en vivo: Banda completa / set acústico</li>
            <li>• Contacto prensa: prensa@almacondor.com</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default EpkSection
