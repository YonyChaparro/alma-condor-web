function ContactSection() {
  return (
    <section id="contacto" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Contacto</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Hablemos</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2 text-slate-700">
          <p>Booking: booking@almacondor.com</p>
          <p>Prensa: prensa@almacondor.com</p>
          <p>Tel: +57 000 000 0000</p>
          <p>Gestión: @almacondor</p>
        </div>
        <form className="space-y-3">
          <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Nombre" />
          <input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" placeholder="Email" />
          <textarea className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm" rows="4" placeholder="Mensaje" />
          <button type="button" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
