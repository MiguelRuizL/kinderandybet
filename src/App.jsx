import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      {/* <Navbar />
      <main>
        <Hero />
        <OfertaEducativa />
        <Admisiones />
        <VidaEscolar />
        <Nosotros />
        <Contacto />
      </main>
      <Footer /> */}
      <Router>
        <Navbar />
        <main className='pb-20 pt-[120px] bg-white'>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/oferta" element={<OfertaEducativa />} />
            <Route path="/admisiones" element={<Admisiones />} />
            <Route path="/vida-escolar" element={<VidaEscolar />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
