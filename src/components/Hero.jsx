import { Star, Heart, BookOpen } from 'lucide-react'

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-white to-primary/5">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/30 rounded-full blur-2xl"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Star size={18} className="fill-secondary text-secondary" />
              <span className="font-medium text-sm">Educación de Calidad desde 1995</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Donde los{' '}
              <span className="text-primary">pequeños sueños</span>{' '}
              se hacen grandes
            </h1>
            
            <p className="text-lg text-muted mb-8 max-w-xl mx-auto lg:mx-0">
              En Andybet, cada niño es único. Ofrecemos educación maternal y preescolar 
              con un enfoque integral que desarrolla las habilidades cognitivas, 
              emocionales y sociales de tu pequeño.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40"
              >
                Agenda una Visita
              </a>
              <a
                href="#oferta"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-foreground font-semibold px-8 py-4 rounded-full transition-all duration-200 border-2 border-gray-200"
              >
                Conoce Más
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-primary">30+</div>
                <div className="text-sm text-muted">Años de Experiencia</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted">Familias Felices</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-display text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted">Dedicación</div>
              </div>
            </div>
          </div>

          {/* Hero Image Area */}
          <div className="relative">
            <div className="relative bg-primary/10 rounded-3xl p-8 lg:p-12">
              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Heart size={20} className="text-white fill-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Ambiente</div>
                  <div className="text-xs text-muted">Seguro y Feliz</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm">Aprendizaje</div>
                  <div className="text-xs text-muted">A través del juego</div>
                </div>
              </div>

              {/* Main Image Placeholder */}
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold">A</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-2">Andybet</h3>
                  <p className="text-white/80">Kindergarten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
