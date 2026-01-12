import { useState } from 'react'
import './App.css'
import logo from './assets/Logos/Logo alma condor en transparente.png'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#musica', label: 'MÚSICA' },
    { href: '#videos', label: 'VIDEOS' },
    { href: '#eventos', label: 'PRÓXIMOS EVENTOS' },
    { href: '#biografia', label: 'BIOGRAFÍA' },
    { href: '#epk', label: 'EPK' },
    { href: '#contacto', label: 'CONTACTO' },
  ]

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="app text-slate-900">
      <header className="sticky top-0 z-10 bg-white/85 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img src={logo} alt="Logo Alma Cóndor" className="h-16 w-auto" />
          </a>
          <div className="flex items-center gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 md:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${menuOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-slate-900 transition ${menuOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
              </div>
            </button>
            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-4 text-sm font-medium md:gap-6">
                {links.map((item) => (
                  <li key={item.href}>
                    <a className="hover:text-slate-600" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} border-t border-slate-200 bg-white/95 px-6 pb-6 pt-3 shadow-sm backdrop-blur`}> 
          <ul className="grid gap-3 text-sm font-semibold">
            {links.map((item) => (
              <li key={item.href}>
                <a className="block rounded-lg px-2 py-2 hover:bg-slate-50" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-6 space-y-16">
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

        <section id="musica" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Música</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Últimos lanzamientos</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Cumbres", "Río Claro", "Altiplano"].map((title) => (
              <div key={title} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="h-32 rounded-lg bg-slate-100" aria-hidden />
                <h3 className="mt-3 text-base font-semibold">{title}</h3>
                <p className="text-sm text-slate-600">Escúchalo en tu plataforma favorita.</p>
                <button className="mt-3 text-sm font-semibold text-slate-900 underline">Reproducir</button>
              </div>
            ))}
          </div>
        </section>

        <section id="videos" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Videos</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Sesiones y en vivo</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="aspect-video w-full rounded-lg bg-slate-100" aria-hidden />
                <p className="mt-3 text-sm font-semibold">Video {i}</p>
                <p className="text-sm text-slate-600">Descripción breve del video.</p>
              </div>
            ))}
          </div>
        </section>

        <section id="eventos" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Próximos eventos</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight">Fechas confirmadas</h2>
          </div>
          <div className="space-y-3">
            {[{
              date: '12 MAR 2026', place: 'Teatro Mayor', city: 'Bogotá', type: 'Show completo'
            }, {
              date: '30 MAR 2026', place: 'Festival Río', city: 'Medellín', type: 'Festival'
            }, {
              date: '15 ABR 2026', place: 'Sala Andina', city: 'Quito', type: 'Show acústico'
            }].map((event) => (
              <div key={event.date + event.place} className="flex flex-col justify-between gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 shadow-sm md:flex-row md:items-center">
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
      </div>
    </main>
  )
}

export default App
