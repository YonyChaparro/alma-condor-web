import './App.css'
import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import MusicSection from './sections/MusicSection'
import VideosSection from './sections/VideosSection'
import EventsSection from './sections/EventsSection'
import BioSection from './sections/BioSection'
import EpkSection from './sections/EpkSection'
import ContactSection from './sections/ContactSection'

const navLinks = [
  { href: '#home', label: 'HOME' },
  { href: '#musica', label: 'MÚSICA' },
  { href: '#videos', label: 'VIDEOS' },
  { href: '#eventos', label: 'PRÓXIMOS EVENTOS' },
  { href: '#biografia', label: 'BIOGRAFÍA' },
  { href: '#epk', label: 'EPK' },
  { href: '#contacto', label: 'CONTACTO' },
]

function App() {
  return (
    <main className="app bg-white text-slate-900">
      <Navbar links={navLinks} brand="Alma Cóndor" />

      <div className="mx-auto max-w-5xl px-6 pb-16 pt-6 space-y-16">
        <HomeSection />
        <MusicSection />
        <VideosSection />
        <EventsSection />
        <BioSection />
        <EpkSection />
        <ContactSection />
      </div>
    </main>
  )
}

export default App
