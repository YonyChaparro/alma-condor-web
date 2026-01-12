import { useState } from 'react'
import letraLogo from '../assets/Logos/Letra alma condor en transparente.png'

function Navbar({ links }) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen((prev) => !prev)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-10 bg-white/85 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={letraLogo}
            alt="Alma Cóndor"
            className="hidden sm:inline h-12 w-auto"
          />
        </a>
        <div className="flex items-center gap-4">
          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:border-slate-300 md:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={toggle}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-slate-900 transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
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
      <div className={`md:hidden ${open ? 'block' : 'hidden'} border-t border-slate-200 bg-white/95 px-6 pb-6 pt-3 shadow-sm backdrop-blur`}>
        <ul className="grid gap-3 text-sm font-semibold">
          {links.map((item) => (
            <li key={item.href}>
              <a className="block rounded-lg px-2 py-2 hover:bg-slate-50" href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
