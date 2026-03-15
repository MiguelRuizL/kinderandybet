import { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const photos = [
  {
    id: 1,
    title: 'Actividades al Aire Libre',
    category: 'Recreación',
    color: 'from-primary to-primary-light',
  },
  {
    id: 2,
    title: 'Taller de Arte',
    category: 'Creatividad',
    color: 'from-accent to-pink-400',
  },
  {
    id: 3,
    title: 'Hora del Cuento',
    category: 'Lectura',
    color: 'from-secondary to-yellow-300',
  },
  {
    id: 4,
    title: 'Juegos en Equipo',
    category: 'Socialización',
    color: 'from-green-500 to-emerald-400',
  },
  {
    id: 5,
    title: 'Experimentos',
    category: 'Ciencia',
    color: 'from-purple-500 to-violet-400',
  },
  {
    id: 6,
    title: 'Festival de Primavera',
    category: 'Eventos',
    color: 'from-primary to-blue-400',
  },
]

function VidaEscolar() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  const openModal = (photo) => setSelectedPhoto(photo)
  const closeModal = () => setSelectedPhoto(null)
  
  const navigatePhoto = (direction) => {
    const currentIndex = photos.findIndex(p => p.id === selectedPhoto.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % photos.length 
      : (currentIndex - 1 + photos.length) % photos.length
    setSelectedPhoto(photos[newIndex])
  }

  return (
    <section id="vida-escolar" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/20 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Vida Escolar
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Momentos que{' '}
            <span className="text-primary">inspiran</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Cada día en Andybet está lleno de aprendizaje, diversión y momentos especiales. 
            Descubre cómo viven nuestros pequeños su experiencia escolar.
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => openModal(photo)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${photo.color}`}></div>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium opacity-80 mb-1">{photo.category}</span>
                <h3 className="font-display text-xl font-bold">{photo.title}</h3>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-white/90 text-foreground font-semibold px-4 py-2 rounded-full text-sm">
                  Ver más
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedPhoto && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200"
              >
                <X size={24} className="text-foreground" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigatePhoto('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200"
              >
                <ChevronLeft size={24} className="text-foreground" />
              </button>
              <button
                onClick={() => navigatePhoto('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-colors duration-200"
              >
                <ChevronRight size={24} className="text-foreground" />
              </button>

              {/* Photo Content */}
              <div className={`aspect-video bg-gradient-to-br ${selectedPhoto.color}`}>
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold">A</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold">{selectedPhoto.title}</h3>
                    <p className="text-white/80">{selectedPhoto.category}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {selectedPhoto.title}
                </h3>
                <p className="text-muted">
                  Un momento especial capturado durante nuestras actividades diarias en Andybet.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted mb-4">¿Quieres ver más de nuestra vida escolar?</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            Agenda una Visita
          </a>
        </div>
      </div>
    </section>
  )
}

export default VidaEscolar
