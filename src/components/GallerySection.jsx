import { useRef } from 'react'
import { Arrow } from './common/Icons'
import { gallery } from '../data/menuData'

// seccion de galeria de fotos de instagram con desplazamiento horizontal
export function GallerySection() {
  // referencia al contenedor con scroll para moverlo con los botones
  const trackRef = useRef(null)

  // funcion para desplazar la galeria hacia la izquierda o derecha
  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 360 * direction
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="gallery-section" id="gallery">
      <div className="section-top reveal">
        <div>
          <p className="label">03 / ON THE GRAM</p>
          <h2>PASS THE<br /><span>PHONE.</span></h2>
        </div>
        <div className="gallery-header-actions">
          <a className="social-link" href="https://instagram.com" target="_blank" rel="noreferrer">
            @stackburgerclub <Arrow />
          </a>
          {/* botones para controlar el desplazamiento manual de la galeria */}
          <div className="gallery-nav-buttons">
            <button onClick={() => scroll(-1)} aria-label="Previous photos">←</button>
            <button onClick={() => scroll(1)} aria-label="Next photos">→</button>
          </div>
        </div>
      </div>

      <div className="gallery-carousel-wrap">
        {/* contenedor con barra de scroll oculta y tarjetas */}
        <div className="gallery-track" ref={trackRef}>
          {gallery.map((item, idx) => (
            <figure className="gallery-card reveal" key={idx}>
              <div className="gallery-card-img">
                <img src={item.image} alt={item.title} loading="lazy" />
                <span className="gallery-tag">{item.tag}</span>
              </div>
              <figcaption>
                <span className="card-num">0{idx + 1}</span>
                <strong>{item.title}</strong>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
