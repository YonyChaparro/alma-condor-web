import { useState } from 'react'
import './App.css'
import logo from './assets/Logos/Letra alma condor en transparente.png'
import SpotlightCards, { SpotlightCard } from './components/SpotlightCards'

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
    <main className="app text-purpura">
      <header className="navbar-glow sticky top-0 z-10 bg-purpura shadow-md backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
            <img src={logo} alt="Logo Alma Cóndor" className="h-16 w-auto transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(244,206,94,0.6)]" />
          </a>
          <div className="flex items-center gap-4">
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-turquesa/30 bg-purpura text-crema shadow-sm transition-all duration-300 hover:border-dorado hover:shadow-[0_0_10px_rgba(244,206,94,0.4)] md:hidden"
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 bg-crema transition-all duration-300 ease-in-out ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
                <span className={`block h-0.5 w-5 bg-crema transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
                <span className={`block h-0.5 w-5 bg-crema transition-all duration-300 ease-in-out ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
              </div>
            </button>
            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-4 text-sm font-medium text-crema md:gap-6">
                {links.map((item) => (
                  <li key={item.href}>
                    <a className="nav-link-glow relative py-1 transition-colors duration-300 hover:text-dorado" href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} border-t border-turquesa/20 bg-purpura/95 px-6 shadow-sm backdrop-blur`}> 
          <ul className="grid gap-3 py-4 text-sm font-semibold text-crema">
            {links.map((item, index) => (
              <li key={item.href} className="transform transition-all duration-300" style={{ transitionDelay: menuOpen ? `${index * 50}ms` : '0ms' }}>
                <a className="mobile-link-glow block rounded-lg px-2 py-2 transition-all duration-300 hover:text-dorado" href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-6 space-y-16">
        <section id="home" className="pt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Alma Cóndor</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-purpura md:text-5xl">Paisajes andinos en clave contemporánea.</h1>
          <p className="mt-4 max-w-2xl text-lg text-purpura/80">
            Sonidos de raíz con producción actual: una experiencia para escenarios, festivales y escuchas íntimas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-glow rounded-full bg-dorado px-5 py-3 text-sm font-semibold text-purpura transition hover:bg-terracota hover:text-crema" href="#musica">
              Escuchar música
            </a>
            <a className="btn-outline-glow rounded-full border-2 border-turquesa px-5 py-3 text-sm font-semibold text-purpura transition hover:bg-turquesa hover:text-crema" href="#epk">
              Ver EPK
            </a>
          </div>
        </section>

        <section id="musica" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Música</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-purpura">Últimos lanzamientos</h2>
          </div>
          <SpotlightCards className="md:grid-cols-3">
            {["Cumbres", "Río Claro", "Altiplano"].map((title) => (
              <SpotlightCard key={title} className="rounded-xl border border-turquesa/30 bg-crema/50 p-4 shadow-sm backdrop-blur">
                <div className="h-32 rounded-lg bg-azul-andino/10" aria-hidden />
                <h3 className="mt-3 text-base font-semibold text-purpura">{title}</h3>
                <p className="text-sm text-purpura/70">Escúchalo en tu plataforma favorita.</p>
                <button className="mt-3 text-sm font-semibold text-terracota hover:text-dorado transition">Reproducir</button>
              </SpotlightCard>
            ))}
          </SpotlightCards>
        </section>

        <section id="videos" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Videos</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-purpura">Sesiones y en vivo</h2>
          </div>
          <SpotlightCards className="md:grid-cols-2">
            {[1, 2, 3, 4].map((i) => (
              <SpotlightCard key={i} className="rounded-xl border border-turquesa/30 bg-crema/50 p-4 shadow-sm backdrop-blur">
                <div className="aspect-video w-full rounded-lg bg-azul-andino/10" aria-hidden />
                <p className="mt-3 text-sm font-semibold text-purpura">Video {i}</p>
                <p className="text-sm text-purpura/70">Descripción breve del video.</p>
              </SpotlightCard>
            ))}
          </SpotlightCards>
        </section>

        <section id="eventos" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Próximos eventos</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-purpura">Fechas confirmadas</h2>
          </div>
          <div className="space-y-3">
            {[{
              date: '12 MAR 2026', place: 'Teatro Mayor', city: 'Bogotá', type: 'Show completo'
            }, {
              date: '30 MAR 2026', place: 'Festival Río', city: 'Medellín', type: 'Festival'
            }, {
              date: '15 ABR 2026', place: 'Sala Andina', city: 'Quito', type: 'Show acústico'
            }].map((event) => (
              <div key={event.date + event.place} className="event-card flex flex-col justify-between gap-2 rounded-xl border border-turquesa/30 bg-crema/50 px-4 py-3 shadow-sm backdrop-blur md:flex-row md:items-center">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-dorado px-3 py-1 text-xs font-semibold uppercase text-purpura">{event.date}</span>
                  <div>
                    <p className="font-semibold text-purpura">{event.place}</p>
                    <p className="text-sm text-purpura/70">{event.city} · {event.type}</p>
                  </div>
                </div>
                <a className="text-sm font-semibold text-terracota hover:text-dorado transition" href="#entradas">Entradas</a>
              </div>
            ))}
          </div>
        </section>

        <section id="biografia" className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Biografía</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-purpura">Relato</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-start">
            <p className="text-purpura/80 leading-relaxed">
              Alma Cóndor fusiona instrumentos ancestrales con texturas electrónicas y arreglos modernos. El proyecto nace en las montañas andinas y se ha presentado en festivales regionales, llevando una propuesta que conecta tradición y vanguardia.
            </p>
            <div className="info-card rounded-2xl border border-turquesa/30 bg-crema/50 p-4 shadow-sm backdrop-blur">
              <p className="text-sm font-semibold text-purpura">Highlights</p>
              <ul className="mt-2 space-y-2 text-sm text-purpura/70">
                <li>• 2 EPs y 1 álbum en plataformas</li>
                <li>• Colaboraciones con artistas andinos y electrónicos</li>
                <li>• Shows en Colombia, Ecuador y Perú</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="epk" className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">EPK</p>
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-start">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-purpura">Electronic Press Kit</h2>
              <p className="text-purpura/80">
                Biografía, fotos oficiales, datos técnicos y enlaces clave para prensa, promotores y medios.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="btn-glow rounded-full bg-dorado px-4 py-2 text-sm font-semibold text-purpura transition hover:bg-terracota hover:text-crema"
                  href="#descargar-epk"
                >
                  Descargar PDF
                </a>
                <a
                  className="btn-outline-glow rounded-full border-2 border-turquesa px-4 py-2 text-sm font-semibold text-purpura transition hover:bg-turquesa hover:text-crema"
                  href="#kit-prensa"
                >
                  Kit de prensa (ZIP)
                </a>
              </div>
            </div>
            <div className="info-card rounded-2xl border border-turquesa/30 bg-crema/50 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-purpura">Highlights rápidos</h3>
              <ul className="mt-3 space-y-2 text-sm text-purpura/70">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-turquesa">Contacto</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-purpura">Hablemos</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2 text-purpura/80">
              <p>Booking: booking@almacondor.com</p>
              <p>Prensa: prensa@almacondor.com</p>
              <p>Tel: +57 000 000 0000</p>
              <p>Gestión: @almacondor</p>
            </div>
            <form className="space-y-3">
              <input className="input-glow w-full rounded-lg border border-turquesa/30 bg-crema/50 px-3 py-2 text-sm text-purpura placeholder:text-purpura/50 focus:border-turquesa focus:outline-none" placeholder="Nombre" />
              <input className="input-glow w-full rounded-lg border border-turquesa/30 bg-crema/50 px-3 py-2 text-sm text-purpura placeholder:text-purpura/50 focus:border-turquesa focus:outline-none" placeholder="Email" />
              <textarea className="textarea-glow w-full rounded-lg border border-turquesa/30 bg-crema/50 px-3 py-2 text-sm text-purpura placeholder:text-purpura/50 focus:border-turquesa focus:outline-none" rows="4" placeholder="Mensaje" />
              <button type="button" className="btn-glow rounded-full bg-dorado px-4 py-2 text-sm font-semibold text-purpura transition hover:bg-terracota hover:text-crema">Enviar</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  )
}

export default App
