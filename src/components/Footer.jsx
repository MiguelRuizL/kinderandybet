import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Oferta Educativa', href: '#oferta' },
  { name: 'Admisiones', href: '#admisiones' },
  { name: 'Vida Escolar', href: '#vida-escolar' },
  { name: 'Nosotros', href: '#nosotros' },
  { name: 'Contacto', href: '#contacto' },
]

const programs = [
  { name: 'Maternal (1-3 años)', href: '#oferta' },
  { name: 'Preescolar (3-6 años)', href: '#oferta' },
  { name: 'Horario Extendido', href: '#oferta' },
  { name: 'Talleres', href: '#oferta' },
]

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
]

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">A</span>
              </div>
              <span className="font-display font-bold text-2xl">Andybet</span>
            </a>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Más de 30 años formando pequeños grandes seres humanos con amor, 
              valores y excelencia educativa.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Programas</h4>
            <ul className="space-y-3">
              {programs.map((program, idx) => (
                <li key={idx}>
                  <a
                    href={program.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Av. Educación #123, Col. Centro, Ciudad de México
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+525512345678"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +52 55 1234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@andybet.edu.mx"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  info@andybet.edu.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {currentYear} Andybet Kindergarten. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Aviso de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
