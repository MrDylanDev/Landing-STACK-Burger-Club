import { reviews } from '../data/menuData'

// seccion de reseñas y testimonios de clientes
export function ReviewsSection({ review, nextReview }) {
  return (
    <section className="reviews" aria-label="Customer reviews">
      <div className="review-header">
        <p className="label">04 / THE WORD ON THE STREET</p>
        <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
      </div>
      {/* tarjeta que muestra la reseña seleccionada actualmente */}
      <div className="review-card reveal">
        <div className="review-quote">“</div>
        <blockquote>{reviews[review].quote}</blockquote>
        <div className="review-meta">
          <img src={reviews[review].image} alt="" />
          <div>
            <strong>{reviews[review].name}</strong>
            <span>{reviews[review].detail}</span>
          </div>
          {/* controles para pasar a la reseña anterior o siguiente */}
          <div className="carousel-controls">
            <button onClick={() => nextReview(-1)} aria-label="Previous review">←</button>
            <span>0{review + 1} / 0{reviews.length}</span>
            <button onClick={() => nextReview(1)} aria-label="Next review">→</button>
          </div>
        </div>
      </div>
    </section>
  )
}
