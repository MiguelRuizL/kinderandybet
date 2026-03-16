import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Oferta Educativa', href: '/oferta' },
  { name: 'Admisiones', href: '/admisiones' },
  { name: 'Vida Escolar', href: '/vida-escolar' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Contacto', href: '/contacto' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('inicio');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">A</span>
            </div>
            <span className="font-display font-bold text-2xl text-primary">Andybet</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {setSelectedOption(link.name.toLowerCase())}}
                className={selectedOption === link.name.toLowerCase() ? 
                  "text-primary font-medium transition-colors duration-200" : 
                  "text-foreground hover:text-primary font-medium transition-colors duration-200"
                }
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:block"></div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-foreground hover:text-primary font-medium py-2 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setIsOpen(false)}
              className="block bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full text-center transition-colors duration-200 mt-4"
            >
              Inscríbete
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
