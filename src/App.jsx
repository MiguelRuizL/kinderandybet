import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OfertaEducativa from './components/OfertaEducativa'
import Admisiones from './components/Admisiones'
import VidaEscolar from './components/VidaEscolar'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <OfertaEducativa />
        <Admisiones />
        <VidaEscolar />
        <Nosotros />
        <Contacto />
      </main>
      <Footer />
    </div>
  )
}

export default App
