import { Target, Eye, Heart, Award, Shield, Sparkles } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Amor', desc: 'Cada acción está guiada por el amor hacia nuestros alumnos.' },
  { icon: Award, title: 'Excelencia', desc: 'Buscamos la mejora continua en todo lo que hacemos.' },
  { icon: Shield, title: 'Seguridad', desc: 'Un ambiente protegido donde los niños pueden crecer.' },
  { icon: Sparkles, title: 'Creatividad', desc: 'Fomentamos la imaginación y el pensamiento innovador.' },
]

function Nosotros() {
  return (
    <section id="nosotros">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Nosotros
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nuestra{' '}
            <span className="text-primary">filosofía educativa</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Más de 30 años dedicados a formar pequeños grandes seres humanos con valores, 
            creatividad y amor por el aprendizaje.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                <Target size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Nuestra Misión</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Brindar una educación integral de calidad que promueva el desarrollo cognitivo, 
              emocional, social y físico de cada niño, en un ambiente de amor, respeto y 
              seguridad, preparándolos para enfrentar los retos del futuro con confianza y valores sólidos.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center">
                <Eye size={28} className="text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">Nuestra Visión</h3>
            </div>
            <p className="text-muted leading-relaxed">
              Ser reconocidos como la institución líder en educación inicial y preescolar, 
              formando niños felices, creativos y con pensamiento crítico, que sean agentes 
              de cambio positivo en su comunidad y en el mundo.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">
            Nuestros Valores
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-primary" />
                </div>
                <h4 className="font-display text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team/About Card */}
        <div className="bg-primary rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <h3 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                Un equipo comprometido con la educación
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Contamos con un equipo de educadores profesionales, capacitados y apasionados 
                por la enseñanza. Cada miembro de nuestro equipo está dedicado a crear 
                experiencias de aprendizaje significativas para cada niño.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Docentes certificados y especializados</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Capacitación continua</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-secondary rounded-full"></span>
                  <span>Ratio alumno-maestro óptimo</span>
                </li>
              </ul>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                Conoce al Equipo
              </a>
            </div>
            <div className="bg-primary-light/30 h-full min-h-64 flex items-center justify-center p-8">
              <div className="text-center text-white">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="font-display text-5xl font-bold">A</span>
                </div>
                <p className="font-display text-xl font-bold">Equipo Andybet</p>
                <p className="text-white/80">Educadores apasionados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
