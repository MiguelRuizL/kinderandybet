import { Baby, GraduationCap, Clock, Users, Palette, Music } from 'lucide-react'

const programs = [
  {
    id: 'maternal',
    title: 'Maternal',
    age: '1 a 3 años',
    icon: Baby,
    color: 'bg-accent',
    description: 'Estimulación temprana en un ambiente cálido y seguro donde los más pequeños desarrollan sus primeras habilidades.',
    features: [
      'Estimulación sensorial',
      'Desarrollo motor',
      'Primeras palabras',
      'Socialización inicial',
      'Juego libre guiado',
      'Rutinas saludables',
    ],
  },
  {
    id: 'preescolar',
    title: 'Preescolar',
    age: '3 a 6 años',
    icon: GraduationCap,
    color: 'bg-primary',
    description: 'Preparación integral para la educación primaria con énfasis en valores, creatividad y desarrollo cognitivo.',
    features: [
      'Lectoescritura',
      'Pensamiento lógico-matemático',
      'Inglés básico',
      'Artes y expresión',
      'Educación física',
      'Valores y convivencia',
    ],
  },
]

const extras = [
  { icon: Clock, title: 'Horario Extendido', desc: 'Opción de horario completo' },
  { icon: Users, title: 'Grupos Reducidos', desc: 'Atención personalizada' },
  { icon: Palette, title: 'Talleres de Arte', desc: 'Creatividad y expresión' },
  { icon: Music, title: 'Música y Movimiento', desc: 'Desarrollo integral' },
]

function OfertaEducativa() {
  return (
    <section id="oferta" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Oferta Educativa
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Programas diseñados para{' '}
            <span className="text-primary">cada etapa</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Nuestros programas están cuidadosamente diseñados para acompañar el desarrollo 
            de tu hijo en cada momento de su crecimiento.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-background rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`${program.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                  <program.icon size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{program.title}</h3>
                  <span className="text-primary font-semibold">{program.age}</span>
                </div>
              </div>

              <p className="text-muted mb-6">{program.description}</p>

              <ul className="grid grid-cols-2 gap-3">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-foreground">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contacto"
                className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:underline"
              >
                Más información →
              </a>
            </div>
          ))}
        </div>

        {/* Extras */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {extras.map((extra, idx) => (
            <div
              key={idx}
              className="bg-primary/5 rounded-2xl p-6 text-center hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <extra.icon size={24} className="text-white" />
              </div>
              <h4 className="font-display font-bold text-foreground mb-1">{extra.title}</h4>
              <p className="text-sm text-muted">{extra.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OfertaEducativa
