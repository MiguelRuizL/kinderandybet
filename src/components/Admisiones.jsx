import { FileText, Calendar, UserCheck, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: FileText,
    step: '01',
    title: 'Solicitud',
    description: 'Completa el formulario de pre-inscripción en línea o visítanos para obtener más información.',
  },
  {
    icon: Calendar,
    step: '02',
    title: 'Visita',
    description: 'Agenda una visita guiada para conocer nuestras instalaciones y metodología educativa.',
  },
  {
    icon: UserCheck,
    step: '03',
    title: 'Entrevista',
    description: 'Reunión con nuestro equipo pedagógico para conocer a tu familia y las necesidades de tu hijo.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Inscripción',
    description: 'Completa el proceso de inscripción y prepárate para unirte a nuestra comunidad Andybet.',
  },
]

const requirements = [
  'Acta de nacimiento (original y copia)',
  'CURP del alumno',
  'Cartilla de vacunación',
  'Certificado médico reciente',
  'Fotografías tamaño infantil',
  'Comprobante de domicilio',
  'Identificación del padre/tutor',
]

function Admisiones() {
  return (
    <section id="admisiones" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Admisiones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Únete a la familia{' '}
            <span className="text-primary">Andybet</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Nuestro proceso de admisión está diseñado para conocerte y asegurar que 
            Andybet sea la mejor opción para tu familia.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((item, idx) => (
            <div key={idx} className="relative">
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
              )}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <span className="font-display text-4xl font-bold text-primary/20">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Requirements & CTA */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-3xl p-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">
              Documentos Requeridos
            </h3>
            <ul className="space-y-3">
              {requirements.map((req, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-primary rounded-3xl p-8 text-white text-center lg:text-left">
            <h3 className="font-display text-2xl font-bold mb-4">
              ¿Listo para comenzar?
            </h3>
            <p className="text-white/80 mb-6">
              Inscripciones abiertas para el ciclo escolar 2026-2027. 
              Plazas limitadas disponibles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Información
              </a>
              <a
                href="tel:+525512345678"
                className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Admisiones
