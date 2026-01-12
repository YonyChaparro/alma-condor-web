function EventsSection() {
  const events = [
    { date: '12 MAR 2026', place: 'Teatro Mayor', city: 'Bogotá', type: 'Show completo' },
    { date: '30 MAR 2026', place: 'Festival Río', city: 'Medellín', type: 'Festival' },
    { date: '15 ABR 2026', place: 'Sala Andina', city: 'Quito', type: 'Show acústico' },
  ]

  return (
    <section id="eventos" className="space-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Próximos eventos</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight">Fechas confirmadas</h2>
      </div>
      <div className="space-y-3">
        {events.map((event) => (
          <div
            key={event.date + event.place}
            className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm md:flex-row md:items-center"
          >
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase text-white">{event.date}</span>
              <div>
                <p className="font-semibold">{event.place}</p>
                <p className="text-sm text-slate-600">{event.city} · {event.type}</p>
              </div>
            </div>
            <a className="text-sm font-semibold text-slate-900 underline" href="#entradas">Entradas</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
